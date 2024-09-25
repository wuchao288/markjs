
import { ref, onMounted, onUnmounted } from 'vue'
import { Box,PointerEvent,Platform, App} from 'leafer-ui'
import { Flow } from '@leafer-in/flow'
import  {nanoid} from  'nanoid'

export function useCreateButton(canvasApp:App,editorStore) {

    const button = new  Flow({// 添加移除按钮
        around: 'center',
        fill:"#ffffff",
        //flowAlign:'center',
        cornerRadius: 5,
        lockRatio:true,
        //gap:'auto',
        cursor: 'pointer',
        //height:32,
        shadow: {
           x: 1,
           y: 1,
           blur: 20,
           color: 'rgba(0, 0, 0, 0.25)',
           box: true
       },
       padding:8
    })
    
    //del
   const btnDel =Box.one({
       name:'del',
       hoverStyle: {
           fill: [
               {type:'solid',color:'rgba(0,0,0, 0.1)'},
               {
                   type: 'image',
                   url: Platform.toURL('<svg  width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>', 'svg'),
                   mode: 'fit',
                   padding:4
               }]
       },
       fill: {
           type: 'image',
           url: Platform.toURL('<svg  width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path></svg>', 'svg'),
           mode:'fit',
           padding:4
       },
       width:26,
       height:26,
       cornerRadius:5,
       around: 'center',
   })

    button.add(btnDel)
     //copy
   const btnCopy =Box.one({
       name:'copy',
       hoverStyle: {
           fill: [
               {type:'solid',color:'rgba(0,0,0, 0.1)'},
               {
                   type: 'image',
                   url: Platform.toURL('<svg  width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"></path><path fill="currentColor" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"></path></svg>', 'svg'),
                   mode: 'fit',
                   padding:4
               }]
       },
       fill: {
           type: 'image',
           url: Platform.toURL('<svg  width="48" height="48"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"></path><path fill="currentColor" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"></path></svg>', 'svg'),
           mode:'fit',
           padding:4
       },
       width:26,
       height:26,
       cornerRadius:5,
       around: 'center',
   })

    button.add(btnCopy)
   

    const btnGroup =Box.one({
       name:'toGroup',
       visible:false,
       hoverStyle: {
           fill: [
               {type:'solid',color:'rgba(0,0,0, 0.1)'},
               {
                   type: 'image',
                   url: Platform.toURL('<svg role="img"  focusable="false" data-icon="create-group" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7ZM14 4.5V3H10V4.5H14ZM17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H17V4.5ZM4.5 10H3V14H4.5V10ZM3 17H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17ZM18.5 16.5H22V18H18.5V21.5H17V18H13.5V16.5H17V13H18.5V16.5Z" fill="currentColor"></path></svg>', 'svg'),
                   mode: 'fit',
                   padding:4
               }]
       },
       fill: {
           type: 'image',
           url: Platform.toURL('<svg role="img"  focusable="false" data-icon="create-group" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7ZM14 4.5V3H10V4.5H14ZM17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H17V4.5ZM4.5 10H3V14H4.5V10ZM3 17H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17ZM18.5 16.5H22V18H18.5V21.5H17V18H13.5V16.5H17V13H18.5V16.5Z" fill="currentColor"></path></svg>', 'svg'),
           mode:'fit',
           padding:4
       },
       width:26,
       height:26,
       cornerRadius:5,
       around: 'center',
   })
   button.add(btnGroup)

   let un= '<svg role="img" focusable="false" data-icon="ungroup" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="gd_design_icon gd_design_icon-ungroup"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V7H3V5C3 3.89543 3.89543 3 5 3H7ZM14 4.5V3H10V4.5H14ZM17 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V9H21V5C21 3.89543 20.1046 3 19 3H17V4.5ZM4.5 10H3V14H4.5V10ZM3 17H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H9V21H5C3.89543 21 3 20.1046 3 19V17Z" fill="currentColor"></path><path d="M18.8107 18.25L21.2855 20.7249L20.2249 21.7856L17.75 19.3107L15.2751 21.7856L14.2145 20.7249L16.6893 18.25L14.2145 15.7752L15.2751 14.7145L17.75 17.1894L20.2249 14.7145L21.2855 15.7752L18.8107 18.25Z" fill="currentColor"></path></svg>'

   const btnUnGroup =Box.one({
       name:'unGroup',
       visible:false,
       hoverStyle: {
           fill: [
               {type:'solid',color:'rgba(0,0,0, 0.1)'},
               {
                   type: 'image',
                   url: Platform.toURL(un, 'svg'),
                   mode: 'fit',
                   padding:4
               }]
       },
       fill: {
           type: 'image',
           url: Platform.toURL(un, 'svg'),
           mode:'fit',
           padding:4
       },
       width:26,
       height:26,
       cornerRadius:5,
       around: 'center',
   })
   button.add(btnUnGroup)



    btnDel.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
        canvasApp.editor.list.forEach(rect => {
        editorStore.delShape(rect.id as string)
            rect.remove()
       })
        canvasApp.editor.target = undefined
        
    })


    btnCopy.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
        canvasApp.editor.list.forEach(rect => {
           var obj= rect.clone()
           obj.id=nanoid()
           obj.x=obj.x+10
           obj.y=obj.y+10
           obj.data=JSON.parse(JSON.stringify(obj.data))
           editorStore.addShape(obj.id as string)
           canvasApp.findOne("Frame").add(obj)
           canvasApp.editor.target=obj
           canvasApp.findOne("Frame").emit("redo.add",{})
       })
    })


    btnGroup.on(PointerEvent.TAP, () => { // 点击元素,分组
       if(canvasApp.editor.multiple){
           canvasApp.editor.group()
       }
    })

    btnUnGroup.on(PointerEvent.TAP, () => { // 点击元素,分组
       if(canvasApp.editor.multiple==false&&canvasApp.editor.target.tag=="Group"){
           canvasApp.editor.ungroup()
       }
    })
    

    

    return {
        button
    }
}