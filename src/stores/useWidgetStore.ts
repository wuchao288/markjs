
import { PageSizeItem,PageSizeList } from '@/assets/data/PageSetting'
import { App } from 'leafer-ui'
import { Store, defineStore } from 'pinia'

import {IPointData,IUI,IShadowEffect}  from '@leafer-ui/interface'
import { nanoid } from 'nanoid'
import _ from 'lodash'


export type TWidgetState = {
     dCopyElement: any
}

export type TAction = {
   /** 拷贝组件 */
  copyWidget: (editorList:any) => void
  /** 粘贴组件 */
  pasteWidget: (app:App) => void
}

function traverseTreeIterative(node, visit) {
    const stack = node ? [node] : [];
   
    while (stack.length) {
      const current = stack.pop();
      visit(current); // 访问当前节点
      // 将子节点压栈，以便稍后访问
      if(current.children){
        current.children.forEach(child => stack.push(child));
      }
     
    }
}

const useWidgetStore = defineStore<"widgetStore",TWidgetState,{},TAction>("widgetStore", {
    state:()=>({
        dCopyElement:[]
    }),
    actions:{

       copyWidget(editorList:IUI[]) { 

           if(document.hasFocus()){

              navigator.clipboard.writeText('') // 清空系统剪贴板内容

           }

           //console.info(editorList.toString())

         
           this.dCopyElement =editorList
       },
       pasteWidget(app:App) {

        debugger

        const copyElement=  this.dCopyElement   
       
        console.info(copyElement)

        let frame= app.tree.findOne("Frame")

        copyElement.forEach((elem)=>{

            traverseTreeIterative(elem, node =>{

                node.id=nanoid()
               
                node.x+=20
                node.y+=20

                console.info(node.id,"id")
                console.info(node.x,"x")

                frame.add(node)
                app.editor.target=node
                console.info(node)
                frame.emit("redo.add",{})
            })

         })
  
         // 复制以调整下次粘贴的位置
         this.copyWidget(copyElement.map(m=>m.clone()))

       }
   }
})

export default useWidgetStore