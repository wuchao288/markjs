<template>
    <div id="main-canvas">

    </div>
</template>
<script setup lang="ts">
    import {onMounted} from 'vue'

    import { App, Box ,Frame,ZoomEvent,ResizeEvent ,Rect,Ellipse,Line,Text} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'

    import { Arrow } from '@leafer-in/arrow'

    import { IZoomType } from '@leafer/interface'
    import { PageSizeItem } from '@/assets/data/PageSetting'



    import rotatePng from '@/assets/images/rotate.png'

    import useEditStore from "@/stores/useEditStore"

    import  {nanoid} from  'nanoid'

    const editorStore = useEditStore()

    let canvasApp:App

    let frame:Frame

    onMounted(() => {
        
        let appWrap=  document.getElementById("main-canvas") as HTMLDivElement

        appWrap.style.height= (window.innerHeight- 60)+"px"
        appWrap.style.marginTop="60px"

        let width=window.innerWidth;
        let height=window.innerHeight- 60;



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
       

        frame = new Frame({
            x:width/2,
            y:height/2,
            width: 800,
            height: 600
        })

        canvasApp.tree.add(frame)

        canvasApp.tree.zoom('fit', 100) 
    })


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
        stroke: 'rgb(0,0,0)'
    }

    if (type === 'SquareFill') {

        Object.assign(defaultOption,{fill:"#1677ff"})

            return new Rect({
                id,
                height,
                zIndex,
                ...defaultOption
            });
    }
        if (type === 'Ellipse') {


            return new Ellipse({
                id,
                height,
                zIndex,
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
                ...defaultOption
            });
        }


        if (type === 'Mark') {

            Object.assign(defaultOption,{
                    strokeWidth:3,
                    startArrow:'mark',
                    endArrow:'mark',
                    rotation:Number(subType)
            })
            return new Arrow({
                id,
                points,
                zIndex,
                strokeCap: 'round',
                strokeJoin: 'round',
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
                    ...defaultOption
               });
            }

            if(subType=="rect"){

                Object.assign(defaultOption,{width:'',height:''})

                return new Box({
                        id,
                        zIndex,
                        cornerRadius: 0,
                        children: [{
                            tag: 'Text',
                            text: 'Welcome SuperSize',
                            fill: 'black',
                            padding: [4, 8],
                            textAlign: 'left',
                            verticalAlign: 'top',
                            editable:true,
                            draggable:false
                        }],
                        ...defaultOption
                })
            }


            if(subType=="radius"){

                Object.assign(defaultOption,{width:'',height:''})

                return new Box({
                        id,
                        zIndex,
                        cornerRadius: 6,
                        children: [{
                            tag: 'Text',
                            text: 'Welcome SuperSize',
                            fill: 'black',
                            padding: [4, 8],
                            textAlign: 'left',
                            verticalAlign: 'top',
                            editable:true,
                            draggable:false
                        }],
                        ...defaultOption
                })
            }

        }



        return new Rect({

            cornerRadius: 8,
            height,
            ...defaultOption
        });


   }



    const handleAddSharp=()=>{

        let sharp=onStart();
        if(!sharp){
            return;
        }
        let newSharp= addSharp(sharp);

        frame.add(newSharp)

        editorStore.addShape(newSharp)

        canvasApp.editor.target=newSharp

        
    }

    const zoomTo=(m:IZoomType)=>{
        canvasApp.tree.zoom(m, 100) 
    }

    const pageSizeTo=(m:PageSizeItem)=>{
        frame.width=m.width;
        frame.height=m.height;
    }
    


    defineExpose({
        handleAddSharp,
        zoomTo,
        pageSizeTo
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


</style>