
//https://github.com/tnfe/limu
import {  DragEvent, KeyEvent,ChildEvent, App } from 'leafer-ui'
import {produce, enablePatches, applyPatches, Patch,setAutoFreeze  } from "immer"
import { InnerEditorEvent } from 'leafer-editor'
import _ from 'lodash'
import { IKeyEvent } from '@leafer-ui/interface'

import * as jsondiffpatch from 'jsondiffpatch';


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

    setAutoFreeze(false)

    enablePatches()
    this.listen()
  }
  listen() {
    // 文本内部编辑器关闭事件/文本的添加也会触发该事件

    let frame=this.app.tree.findOne("Frame")
    this.app.editor.on(InnerEditorEvent.CLOSE, this.change)
    // 直接监听ChildEvent.ADD不合适，比如文字的添加/线段的绘制，都是当前绘制完成后才发布add事件
    this.app.tree.on('add', this.change)

     frame.on("redo.add", (e)=>{

        this.change()
      })

    frame.on("add", (e)=>{

      this.change()
    })

    frame.on('remove', this.change)

    frame.on('update', ()=>{
      console.info("update")
      this.change()
    })


    this.app.tree.on("redo.redo",this.redo)

    this.app.tree.on("redo.undo",this.undo)

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
    } else if (keyName === 'ctrl+shift+z'||keyName === 'ctrl+y') {
      this.redo()
    }
  }
  change = () => {
    
    let frame=this.app.tree.findOne("Frame")

    const json = _.cloneDeep(frame.toJSON())
   
    let data=json;

    this.initialState = produce(this.initialState, draft => {

        const delta = jsondiffpatch.diff(draft, data);

        jsondiffpatch.patch(draft, delta);

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

      frame.emit("redo.update",{current:this.current})
    })

  }

  redo = () => {

    console.info("redo")

    let frame=this.app.tree.findOne("Frame")

    const cmd = this.queue[this.current + 1] // 找到当前的下一步还原操作
    if (cmd) {
      this.initialState = produce(this.initialState, draft => {
        applyPatches(draft, cmd.redo);
      })
      var fd=_.cloneDeep(this.initialState)
      const listId = this.app.editor.list.map(item => item.id!)
      const hoverId = this.app.editor.hoverTarget?.id
      frame.set(fd)
      this.current++
      if (listId.length > 0) {
        const list = listId.map((id: string) => frame.findId(id)).filter(v => !!v)
        this.app.editor.select(list)
      }
      if (hoverId) {
        this.app.editor.hoverTarget = frame.findId(hoverId)
      }

    }

    frame.emit("redo.update",{current:this.current})
  }
  undo = () => {
    
    let frame=this.app.tree.findOne("Frame")

    if(frame.children.length==0){
      //return false
    }
    const cmd = this.queue[this.current] // 找到上一步还原
    if (cmd) {
      this.initialState = produce(this.initialState, draft => {
        applyPatches(draft, cmd.undo);
      })

      var fd=_.cloneDeep(this.initialState)

      const listId = this.app.editor.list.map(item => item.id!)
      const hoverId = this.app.editor.hoverTarget?.id

      frame.set(fd)

      this.current--

      if (listId.length > 0) {
        const list = listId.map((id: string) => frame.findId(id)).filter(v => !!v)
        this.app.editor.select(list)
      }
      if (hoverId) {
        this.app.editor.hoverTarget = frame.findId(hoverId)
      }

      frame.emit("redo.update",{current:this.current})
    }
  }
}
