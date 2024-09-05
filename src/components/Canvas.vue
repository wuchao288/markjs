<template>
    <div id="main-canvas" >

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

             <div class="contextmenu__item"@click="toBottom">移至底层</div>
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


    import {onMounted,ref,watch} from 'vue'

    import { App, Box ,Frame,ZoomEvent,ResizeEvent,Platform  ,Rect,Ellipse,Line,Text,PointerEvent,ImageEvent} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'

    import { Ruler } from 'leafer-x-ruler'

    import { Arrow } from '@leafer-in/arrow'

    import { IZoomType } from '@leafer/interface'
    import { PageSizeItem } from '@/assets/data/PageSetting'


    import delPng from '@/assets/images/del.png'
    import rotatePng from '@/assets/images/rotate.png'

    import useEditStore from "@/stores/useEditStore"

    import  {nanoid} from  'nanoid'
    import '@leafer-in/state'
    import { storeToRefs } from 'pinia'


    let menuVisible=ref(false)

    let ctop=ref("0px");
    let cleft=ref("0px");
    

    const editorStore = useEditStore()

    const {useColor,useBorderWidth,pageHeight,pageWidth,useTool,useToolType} = storeToRefs(editorStore)

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
            view: 'main-canvas',
            editor:{
                lockRatio: 'corner',
                stroke: '#3f99f7',
                skewable: false,
                hover: true,
                flipable:false,
                rotateGap:15,
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


        const ruler = new Ruler(canvasApp)

        // 添加自定义主题  
        // ruler.addTheme('custom1', {
        // backgroundColor: '#6cb0ab',
        // textColor: '#a45454',
        // borderColor: '#6f4593',
        // highlightColor: 'rgba(22,93,255,0.75)'
        // })

        // // 切换主题  
        // ruler.changeTheme('custom1')

        // // 启用、禁用  
        // ruler.enabled = true

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

            canvasApp.tree.set(settingJson.setting)

        }else{
            frame = new Frame({
            x:width/2,
            y:height/2,
            width: pageWidth.value,
            height: pageHeight.value
            })
            canvasApp.tree.add(frame)

            if(settingJson&&settingJson.imgUrl){

                addBgImg(settingJson.imgUrl)
            }
           
        }

      

        canvasApp.tree.zoom('fit', 100) 

        // window.onresize=()=>{
        //     canvasApp.tree.zoom("fit") 
        // }
    })

    watch(()=>useColor.value,(newVal)=>{
        ////SquareFill.Ellipse,Arrow-one,Arrow-two,Mark,Line,Text-normal,Text-rect,Text-radius
        canvasApp.editor.list.forEach(m=>{
            if(["Rect","Ellipse","Arrow","Line"].includes(m.tag)){
               m.stroke=newVal
            }else if(["Text"].includes(m.tag)){
                debugger
                m.fill=newVal
            }

            console.info(m);
        })
        
    })

   const addBgImg=async (imgUrl:any)=>{

        let id="image0";
        let zIndex=0;

        if(frame.findId(id)){
            id=nanoid()
            zIndex=editorStore.shapes.size + 1
        }
        const rectImg = new Rect({
                id:id,
                around: 'center',
                fill: {
                    type: 'image',
                    url: imgUrl,
                    mode: 'fit'
                },
                zIndex:editorStore.shapes.size + 1,
                editable: true,
                locked:false,
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

   const toBottom=()=>{
      canvasApp.editor.toBottom()
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
        stroke:string
   }


    let shapeId = null;

    const onStart = () => {

        if (!useTool.value) return;

        shapeId = nanoid();

        const shape = editorStore.getShape(shapeId);
        if (shape) return;

        const type = useTool.value;
        const subType = useToolType.value;
        const newShape = {
            id: shapeId,
            type,
            subType,
            stroke:useColor.value,
            strokeWidth: useBorderWidth.value,
            fill:'',
            text:'',
            zIndex:100000+ editorStore.shapes.size + 1
        } as TDefaultOption;
        return newShape;
    }


   const addSharp=(model:TDefaultOption)=>{
    
    let {id,type,subType,width,height,zIndex,points,stroke,strokeWidth}=model

    let defaultOption={
        width: width|100,
        editable:true,
        x: pageWidth.value/2,
        y: pageHeight.value/2,
        fill:"transparent",
    }

    
    if (type === 'SquareFill') {

        Object.assign(defaultOption,{fill:"transparent"})

            return new Rect({
                id,
                height,
                zIndex,
                stroke,
                strokeWidth,
                cursor:'pointer',
                name:"SquareFill",
                ...defaultOption
            });
        }

        if (type === 'Ellipse') {
            return new Ellipse({
                id,
                height,
                zIndex,
                stroke,
                strokeWidth,
                name:"Ellipse",
                cursor:'pointer',
                ...defaultOption
            });
        }
        
        if (type === 'Arrow') {
            if(subType=="one"){
                Object.assign(defaultOption,{
                    endArrow:'arrow'
               })
            }else if(subType=="two"){
                Object.assign(defaultOption,{
                    startArrow:'arrow',
                    endArrow:'arrow'
               })
            }
            return new Arrow({
                id,
                name:"Arrow-"+subType,
                points,
                zIndex,
                stroke,
                strokeWidth,
                height:20,
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
                name:"Mark",
                points,
                zIndex,
                stroke,
                strokeWidth,
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
                name:"Line",
                points,
                zIndex,
                stroke,
                strokeWidth,
                curve: true,
                cursor:'pointer',
                ...defaultOption
            });
        }
        if (type === 'Text') {
            
            

            if(subType=="normal"){

                Object.assign(defaultOption,{width:'',height:'',fill:stroke})

                return new Text({
                    id,
                    name:"Text-"+subType,
                    zIndex,
                    text: '100cm',
                    selected:true,
                    resizeFontSize: true,
                    fontSize: 14,
                    cursor:'pointer',
                    ...defaultOption
               });
            }

            if(subType=="rect"||subType=="radius"){

                Object.assign(defaultOption,{width:'',height:'',cornerRadius: subType=="rect"?0:6})
            
                let box= new Box({
                        id,
                        name:"Text-"+subType,
                        zIndex,
                        cornerRadius: 0,
                        cursor:'pointer',
                        stroke:useColor.value,
                        strokeWidth:useBorderWidth.value,
                        children: [Text.one({
                            text: '100cm',
                            editable: false,
                            fontSize: 14,
                            selected:true,
                            resizeFontSize: true,
                            padding: [4, 8],
                            fill:stroke,
                            event:{
                                'innerEditor.open':function(e){
                                  // (e.target as Text).width="wid"
                                },
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
            id,
            name:"Rect",
            zIndex,
            cursor:'pointer',
            stroke:stroke,
            strokeWidth:useBorderWidth.value,
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

        canvasApp.editor.target=newSharp

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
        
        const json = canvasApp.tree.toJSON() 

        const result = await frame.export('png', { blob: true })

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