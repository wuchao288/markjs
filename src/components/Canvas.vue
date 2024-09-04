<template>
    <div id="main-canvas">

    </div>

    <div id="contextmenu" @mouseleave ="menuVisible=false"  :style="{top:ctop,left:cleft}"
           v-show="menuVisible"
           class="menu">
        <div class="contextmenu__item"
             @click="locked(false)">解锁</div>
        <div class="contextmenu__item"
             @click="locked(true)">锁定</div>
      <div class="contextmenu__item"
             @click="toTop">移至顶层</div>
     </div>
</template>

<script lang="ts">
      export const getImage = (imgItem: string | File): Promise<HTMLImageElement> => {
    // 创建对象
        const img = new Image()
        // 改变图片的src
        const url = window.URL || window.webkitURL
        img.src = typeof imgItem === 'string' ? imgItem : url.createObjectURL(imgItem)

        return new Promise((resolve) => {
            // 判断是否有缓存
            if (img.complete) {
            
            resolve(img)
            } else {
            // 加载完成执行
            img.onload = function () {
                
                resolve(img)
            }
            }
        })
    }
</script>

<script setup lang="ts">





    import {onMounted,ref} from 'vue'

    import { App, Box ,Frame,ZoomEvent,ResizeEvent,Platform  ,Rect,Ellipse,Line,Text,PointerEvent,ImageEvent} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'

    import { Arrow } from '@leafer-in/arrow'

    import { IZoomType } from '@leafer/interface'
    import { PageSizeItem } from '@/assets/data/PageSetting'


    import delPng from '@/assets/images/del.png'
    import rotatePng from '@/assets/images/rotate.png'

    import useEditStore from "@/stores/useEditStore"

    import  {nanoid} from  'nanoid'
    import '@leafer-in/state'


     
    let menuVisible=ref(false)
    let ctop=ref("0px");
    let cleft=ref("0px");
    

    //Rect.setEditOuter('CustomEditTool')
    //Text.setEditOuter('CustomEditTool') // 1. 为元素类绑定编辑工具




    const editorStore = useEditStore()

    let canvasApp:App

    let frame:Frame

    onMounted(() => {
        
        let appWrap=  document.getElementById("main-canvas") as HTMLDivElement

        appWrap.style.height= (window.innerHeight- 60)+"px"
        appWrap.style.marginTop="60px"

        let width=window.innerWidth;
        let height=window.innerHeight- 60;

        //getMarkJson {setting:{},imgUrl}

        var settingJson=window.parent.getMarkJson?window.parent.getMarkJson():undefined;

        canvasApp = new App({
            view: window,
            editor:{
                lockRatio: 'corner',
                stroke: '#3f99f7',
                skewable: false,
                hover: false,
                middlePoint: { cornerRadius: 100, width: 20, height: 6 },
                rotatePoint: {
                    width: 20,
                    height: 20,
                    fill: {
                        type: 'image',
                        url: rotatePng,
                    }
                }
            }
        })

        editorStore.setApp(canvasApp);

        canvasApp.tree.on(ZoomEvent.ZOOM, () => {

            if(canvasApp.tree.scale){
                editorStore.setScale(canvasApp.tree.scale);
            }
        });
        canvasApp.tree.on(ResizeEvent.RESIZE, () => {

            if(canvasApp.tree.scale){
                editorStore.setScale(canvasApp.tree.scale);
            }

        });
       
        const button = Box.one({// 添加移除按钮
            around: 'center',
            fill: {
                type: 'image',
                url: delPng,
            },
            cornerRadius: 20,
            cursor: 'pointer'
        })

        canvasApp.editor.buttons.add(button)

        button.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
            canvasApp.editor.list.forEach(rect => {
               
                editorStore.delShape(rect.id as string)
                rect.remove()
            })
            canvasApp.editor.target = undefined
        })


        
        

        if(settingJson&&settingJson.setting){
            canvasApp.set(settingJson.setting)
        }else{
            frame = new Frame({
            x:width/2,
            y:height/2,
            width: editorStore.pageWidth,
            height: editorStore.pageHeight
        })
        canvasApp.tree.add(frame)

            if(settingJson&&settingJson.imgUrl){

                addBgImg(settingJson.imgUrl)

                // rectImg.once(ImageEvent.LOADED, function (e: ImageEvent) {
                //     console.log(e)

                //     frame.add(rectImg)
                // })

                // rectImg.once(ImageEvent.ERROR, function (e: ImageEvent) {
                //     console.log(e.error)
                // })

            
            }
           
        }

      

        canvasApp.tree.zoom('fit', 100) 

        // window.onresize=()=>{
        //     canvasApp.tree.zoom("fit") 
        // }
    })



   const addBgImg=async (imgUrl:any)=>{

        if(frame.findId("image0")){
            frame.remove(frame.findId("image0"))
        }

        //var img=  await getImage(imgUrl);

        const rectImg = new Rect({
                id:'image0',
                around: 'center',
                fill: {
                    type: 'image',
                    url: imgUrl,
                    mode: 'fit'
                },
                zIndex:0,
                editable: true,
                locked:true,
                // width:img.width<editorStore.pageWidth*0.9?img.width:editorStore.pageWidth*0.9,
                // height:img.height<editorStore.pageHeight*0.9?img.width:editorStore.pageHeight*0.9,
                x: editorStore.pageWidth/2,
                y: editorStore.pageHeight/2
        }) 

        rectImg.on(PointerEvent.MENU,function(e){
            menuVisible.value=true
            cleft.value=e.x+"px"
            ctop.value=e.y+"px"
        })

        frame.add(rectImg)

        canvasApp.editor.updateEditBox()
   }

   

   const locked=(flag:boolean)=>{
      canvasApp.editor.list.forEach((elem)=>{ elem.locked=flag  })
      menuVisible.value=false
   }

   const toTop=()=>{
      canvasApp.editor.toTop()
      menuVisible.value=false
   }



   

    type TDefaultOption = {
        id:string,
        type:string,
        subType:string,
        width:number,
        height:number,
        fill:string,
        strokeWidth:number,
        zIndex:number,
        points:number[],
        text:string
   }


    let shapeId = null;

    const onStart = () => {

        if (!editorStore.useTool) return;

        shapeId = nanoid();

        const shape = editorStore.getShape(shapeId);
        if (shape) return;

        const type = editorStore.useTool;
        const subType = editorStore.useToolType;
        const newShape = {
            id: shapeId,
            type,
            subType,
            strokeWidth: 4,
            fill:'',
            text:'',
            zIndex: editorStore.shapes.size + 1
        } as TDefaultOption;
        return newShape;
    }


   const addSharp=(model:TDefaultOption)=>{
    
    let {id,type,subType,width,height,zIndex,points}=model

    let defaultOption={
        width: width|100,
        strokeWidth: 1,
        editable:true,
        x: editorStore.pageWidth/2,
        y: editorStore.pageHeight/2,
        stroke: 'rgb(0,0,0)',
        fill:"transparent",
        
    }

    if (type === 'SquareFill') {

        Object.assign(defaultOption,{fill:"transparent"})

            return new Rect({
                id,
                height,
                zIndex,
                cursor:'pointer',
                ...defaultOption
            });
    }
        if (type === 'Ellipse') {


            return new Ellipse({
                id,
                height,
                zIndex,
                cursor:'pointer',
                ...defaultOption
            });
        }
        
        if (type === 'Arrow') {
            if(subType=="one"){
                Object.assign(defaultOption,{
                    strokeWidth:2,
                    endArrow:'arrow',
                    height:20
               })
            }else if(subType=="two"){
                Object.assign(defaultOption,{
                    strokeWidth:2,
                    startArrow:'arrow',
                    endArrow:'arrow',
                    height:20
               })
            }
            return new Arrow({
                id,
                points,
                zIndex,
                strokeCap: 'round',
                strokeJoin: 'round',
                cursor:'pointer',
                ...defaultOption
            });
        }


        if (type === 'Mark') {

            Object.assign(defaultOption,{
                    strokeWidth:2,
                    startArrow:'mark',
                    endArrow:'mark',
                    height:20,
                    rotation:Number(subType)
            })
            return new Arrow({
                id,
                points,
                zIndex,
                strokeCap: 'round',
                strokeJoin: 'round',
                cursor:'pointer',
                ...defaultOption
            });
        }


        if (type === 'Line') {
        
            Object.assign(defaultOption,{strokeWidth:2,height:20})

            return new Line({
                id,
                points,
                zIndex,
                curve: true,
                cursor:'pointer',
                ...defaultOption
            });
        }
        if (type === 'Text') {
            

            if(subType=="normal"){

                Object.assign(defaultOption,{strokeWidth:0,fill:'black',width:'',height:''})

                return new Text({
                    id,
                    zIndex,
                    text: 'Welcome SuperSize',
                    resizeFontSize: true,
                    fontSize: 12,
                    cursor:'pointer',
                    ...defaultOption
               });
            }

            if(subType=="rect"||subType=="radius"){

                Object.assign(defaultOption,{width:'',height:'',cornerRadius: subType=="rect"?0:6})
            
                let box= new Box({
                        id,
                        zIndex,
                        cornerRadius: 0,
                        cursor:'pointer',
                        children: [Text.one({
                            text: 'Welcome to SuperSize',
                            editable: false,
                            fontSize: 12,
                            resizeFontSize: true,
                            padding: [4, 8],
                            event:{
                                'innerEditor.close':function(e){
                                    canvasApp.editor.target=undefined
                                }
                            }
                        })],
                        event: {
                           double_tap: function (e) {
                             canvasApp.editor.openInnerEditor(e.target)
                           }
                        },
                        ...defaultOption
                })
                return box
            }

        }



        return new Rect({

            cornerRadius: 8,
            height,
            ...defaultOption
        });


   }


   const handleAddImg=(img:any)=>{
      addBgImg(img)
   }

    const handleAddSharp=()=>{

        let sharp=onStart();
        if(!sharp){
            return;
        }
        let newSharp= addSharp(sharp);


        newSharp.on(PointerEvent.MENU,function(e){
            menuVisible.value=true
            cleft.value=e.x+"px"
            ctop.value=e.y+"px"
        })

        frame.add(newSharp)

        editorStore.addShape(newSharp)

        //canvasApp.editor.target=newSharp

    }

    const handleClearAll=()=>{
        canvasApp.editor.target=undefined;
        frame.removeAll();
        editorStore.clearShape()
    }


    const handleDownImg=()=>{
        
        frame.export(new Date().getTime()+'.png',{ pixelRatio: 1 }) 
    }

    const  handleSaveImg=async ()=>{
        
        const json = canvasApp.toJSON() 
        console.log(json) 

        const result = await frame.export('png', { blob: true })

        console.log(result) 

        tslint:'disable'
        window.parent.saveMakeImg?window.parent.saveMakeImg({json,file:result}):null
    }


    const zoomTo=(m:IZoomType)=>{
        canvasApp.tree.zoom(m, 100) 
    }

    const pageSizeTo=(m:PageSizeItem)=>{
        frame.width=m.width;
        frame.height=m.height;
    }
    


    defineExpose({
        handleClearAll,
        handleDownImg,
        handleAddSharp,
        zoomTo,
        pageSizeTo,
        handleAddImg,
        handleSaveImg
    })
</script>

<style scoped>
    #main-canvas{
        width: 100%;
        height: 100%;
        margin-top: 60px !important;
        
        background-image: 
        linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%),
        linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
        background-position: 0 0, 14px 14px;
        background-size: 28px 28px;
    }


        .contextmenu__item {
        display: block;
        line-height: 34px;
        text-align: center;
        }
        .contextmenu__item:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .menu {
        position: absolute;
        background-color: #fff;
        width: 100px;
        /*height: 106px;*/
        font-size: 12px;
        color: #444040;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        white-space: nowrap;
        z-index: 30000;
        }
        .contextmenu__item:hover {
        cursor: pointer;
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
        }
</style>