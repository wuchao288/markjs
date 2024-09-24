

import {  DragEvent, KeyEvent,ChildEvent, App } from 'leafer-ui'
import { produce, enablePatches, applyPatches, Patch, } from "immer"
import { InnerEditorEvent } from 'leafer-editor'
import _ from 'lodash'
import { IKeyEvent } from '@leafer-ui/interface'

type Queue = { [key: number]: { redo: Patch[], undo: Patch[] } }

function isPlainValue(data:any){
  return !(Object.prototype.toString.call(data) === '[object Object]' || Array.isArray(data))
}


export default class Command {
  current = -1 // 前进后退的索引值
  maxQueueValue = 50 // 最大存放数
  queue: Queue = {} //  存放所有的操作命令
  initialState: { [key: string]: any } = {}
  constructor(private app: App) {
    enablePatches()
    this.listen()
  }
  listen() {
    // 文本内部编辑器关闭事件/文本的添加也会触发该事件
    this.app.editor.on(InnerEditorEvent.CLOSE, this.change)
    // 直接监听ChildEvent.ADD不合适，比如文字的添加/线段的绘制，都是当前绘制完成后才发布add事件
    //this.app.tree.on('add', this.change)

    this.app.tree.findOne("Frame").on(ChildEvent.ADD, this.change)

    this.app.tree.findOne("Frame").on('remove', this.change)

    this.app.tree.findOne("Frame").on('update', this.change)

    // set(json)会触发add事件，所以需要自己在需要的地方发布remove事件
    this.app.tree.on('remove', this.change)
    // 直接监听PropertyEvent.CHANGE的话图形的拖拽/旋转等操作会多次触发，因此也是自己在合适的时机去手动发布update事件
    this.app.tree.on('update', this.change)

    
    // DragEvent.END目前还是合适的，在change事件中有比较补丁是否存在，所以如果点击后没有操作，也不用担心会被收集操作
    this.app.editor.on(DragEvent.END, this.change)
    // 监听键盘事件
    this.app.on(KeyEvent.DOWN, this.onKeydown)
  }
  destroy() {
    this.app.editor.off(InnerEditorEvent.CLOSE, this.change)
    this.app.tree.off('add', this.change)
    this.app.tree.off('remove', this.change)
    this.app.tree.off('update', this.change)
    this.app.editor.off(DragEvent.END, this.change)
    this.app.off(KeyEvent.DOWN, this.onKeydown)
  }
  onKeydown = (event: IKeyEvent) => {
    if (
      event.origin?.target instanceof HTMLInputElement ||
      event.origin?.target instanceof HTMLTextAreaElement
    ) {
      // event.stop && event.stop()
      // event.stopDefault && event.stopDefault()
      return
    }
    const { key, shiftKey, altKey, ctrlKey, metaKey } = event
    const keyString: string[] = []
    if (ctrlKey || metaKey) keyString.push('ctrl')
    if (shiftKey) keyString.push('shift')
    if (altKey) keyString.push('alt')
    const keyCode = key?.toLocaleLowerCase()
    if (keyCode) {
      if (!keyString.includes(keyCode)) {
        keyString.push(keyCode)
      }
    }
    const keyName = keyString.join('+')
    if (keyName === 'ctrl+z') {
      this.undo()
    } else if (keyName === 'ctrl+shift+z') {
      this.redo()
    }
  }
  change = () => {
    
    const json = _.cloneDeep(this.app.tree.toJSON())
    
    console.info(json)
    debugger

    const data: { [key: string]: any } = {}
    json.children?.forEach((child: any) => data[child.id] = child)
    this.initialState = produce(this.initialState, draft => {
      const deepCompareAndMerge = (draft: any, data: any) => {
        console.info(draft)
        const mergeData = { ...draft, ...data }
        // TODO 比较老数据和新数据的变化，这里只做了一层比较，后续做改造
        Object.keys(mergeData).forEach(key => {
          // 新的有，老得没有，直接赋值
          if (!draft[key]) {
            draft[key] = data[key]
          } else if (!data[key]) {
            // 新的没有，老得有，直接删除
            delete draft[key]
          } else {
            if (isPlainValue(draft[key]) && isPlainValue(data[key])) {
              draft[key] = data[key]
            } else {
               // 两个都有，并且都不是普通值
               deepCompareAndMerge(draft[key], data[key])
            }
          }
        })
      }
      deepCompareAndMerge(draft, data)

    }, (patches, inversePatches) => {
      // 没有任何变化
      if (patches.length === 0 && inversePatches.length === 0) return
      this.current++;
      this.queue[this.current] = {
        redo: patches,
        undo: inversePatches
      }
      // 把后一个操作删除，不能在反撤销了，cmd不存在直接return
      delete this.queue[this.current + 1];
      // 超出最大队列的删除
      delete this.queue[this.current - this.maxQueueValue];
      // console.log('patches', patches);
      // console.log('inversePatches', inversePatches);
      // console.log('this.queue', this.queue);
    })
    // console.log('nextState', this.initialState);
  }

  redo = () => {
    const cmd = this.queue[this.current + 1] // 找到当前的下一步还原操作
    if (cmd) {
      this.initialState = produce(this.initialState, draft => {
        applyPatches(draft, cmd.redo);
      })
      const data = {
        hitChildren: true,
        tag: "Leafer",
        children: _.cloneDeep(Object.values(this.initialState))
      }
      const listId = this.app.editor.list.map(item => item.id!)
      const hoverId = this.app.editor.hoverTarget?.id
      this.app.tree.set(data)
      this.current++
      if (listId.length > 0) {
        const list = listId.map((id: string) => this.app.tree.findId(id)).filter(v => !!v)
        this.app.editor.select(list)
      }
      if (hoverId) {
        this.app.editor.hoverTarget = this.app.tree.findId(hoverId)
      }

    }
  }
  undo = () => {
    
    const cmd = this.queue[this.current] // 找到上一步还原
    if (cmd) {
      this.initialState = produce(this.initialState, draft => {
        applyPatches(draft, cmd.undo);
      })
      const data = {
        hitChildren: true,
        tag: "Leafer",
        children: _.cloneDeep(Object.values(this.initialState))
      }
      const listId = this.app.editor.list.map(item => item.id!)
      const hoverId = this.app.editor.hoverTarget?.id
      this.app.tree.set(data)
      this.current--
      if (listId.length > 0) {
        const list = listId.map((id: string) => this.app.tree.findId(id)).filter(v => !!v)
        this.app.editor.select(list)
      }
      if (hoverId) {
        this.app.editor.hoverTarget = this.app.tree.findId(hoverId)
      }

    }
  }
}
