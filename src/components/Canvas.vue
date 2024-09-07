<template>
    <div id="main-canvas" >

    </div>

    <div id="contextmenu" @mouseleave ="menuVisible=false"  :style="{top:ctop,left:cleft}"
           v-show="menuVisible"
           class="menu">
        <div class="contextmenu__item"
             @click="locked(false)">锁定</div>
        <div class="contextmenu__item"
             @click="locked(true)">解锁</div>
           <div class="contextmenu__item"
             @click="toTop">到最顶层</div>

             <div class="contextmenu__item" @click="toBottom">到最底层</div>
       </div>
       
    <keep-alive>
      <component  :is="componen"> </component>
    </keep-alive>

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


    import {onMounted,ref,watch,shallowRef,defineAsyncComponent,nextTick} from 'vue'

    import { App, Box ,Frame,ZoomEvent,ResizeEvent,Rect,Ellipse,Polygon,Line,Star,Text,PointerEvent,ImageEvent} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'

    import { Ruler } from 'leafer-x-ruler'

    import { Arrow } from '@leafer-in/arrow'

    import { IZoomType} from '@leafer/interface'

    import {  IFontWeight,IFrameInputData} from '@leafer-ui/interface'
   

    import { PageSizeItem, PageSizeList } from '@/assets/data/PageSetting'


    import delPng from '@/assets/images/del.png'
    import rotatePng from '@/assets/images/rotate.png'

    import useEditStore from "@/stores/useEditStore"

    import  {nanoid} from  'nanoid'
    import '@leafer-in/state'
    import { storeToRefs } from 'pinia'
    import { InnerEditorEvent ,EditorEvent} from '@leafer-in/editor'

    let componen = shallowRef(null);
    const PagePanel = defineAsyncComponent(() => import("./PagePanel.vue"));
    const TextPanel = defineAsyncComponent(() => import("./TextPanel.vue"));
    const SharpPanel = defineAsyncComponent(() => import("./SharpPanel.vue"));
    let objcomponen = shallowRef({
        PagePanel,
        TextPanel,
        SharpPanel
    });


    componen.value = objcomponen.value.PagePanel

    let menuVisible=ref(false)

    let ctop=ref("0px");
    let cleft=ref("0px");
    

    const editorStore = useEditStore()

    const {useColor,useBorderWidth,usePageSizeId,
        useTool,useToolType,
        usePageBgColor,
        useTextStyle,
        useSharpStyle
    } = storeToRefs(editorStore)


    let pageHeight=ref(0);

    let pageWidth=ref(0);

    let pageSize= PageSizeList.find(m=>m.id==usePageSizeId.value);

    pageHeight.value=pageSize.height;

    pageWidth.value=pageSize.width;

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

        canvasApp.editor.on(EditorEvent.SELECT, (e: EditorEvent) => {
            if(e.list.length==1){

               if(e.list[0].tag=="Box"&&e.list[0].name.startsWith("Text")){

                    let text=e.list[0].children[0] as Text

                    useTextStyle.value.fill=text.fill.toString()

                    useTextStyle.value.fontSize= parseInt(text.fontSize.toString())

                    useTextStyle.value.fontWeight=text.fontWeight.toString()

                    useTextStyle.value.text=text.text

                    let box=e.list[0]

                    useTextStyle.value.stroke=box.stroke.toString()

                    useTextStyle.value.strokeWidth=Number(box.strokeWidth.toString())

                    
                    if(box.dashPattern&&box.dashPattern.length==2){

                        useSharpStyle.value.lineStyle="dashed"
                        
                    }else{

                        useSharpStyle.value.lineStyle="solid"
                    }

                    componen.value = objcomponen.value.TextPanel


               }else if(e.list[0].tag!="Text"&&!e.list[0].name.startsWith("image")){

                 
                   let sharp=e.list[0]

                    useSharpStyle.value.fill=sharp.fill.toString()

                    useSharpStyle.value.stroke=sharp.stroke.toString()

                    useSharpStyle.value.strokeWidth= Number(sharp.strokeWidth.toString())

                    if('corners' in sharp){
                        useSharpStyle.value.corners=Number(sharp.corners.toString())
                    }
                   
                    if('height' in sharp){
                        useSharpStyle.value.height=sharp.height
                    }

                 
                    useSharpStyle.value.width=sharp.width
                    

                    if(sharp.dashPattern&&sharp.dashPattern.length==2){

                       useSharpStyle.value.lineStyle="dashed"

                    }else{

                        useSharpStyle.value.lineStyle="solid"
                    }
                    
                    useSharpStyle.value.sharpname=e.list[0].name

                    componen.value = objcomponen.value.SharpPanel

                   

               }
            }else{
                componen.value = objcomponen.value.PagePanel
            }
        })


        canvasApp.editor.on(PointerEvent.DOUBLE_TAP,  (e:PointerEvent)=> {
            //debugger
            if(canvasApp.editor.editing==false){ return }

            if(e.current.target.tag=="Box"&&e.current.target.name.startsWith("Text")){
               canvasApp.editor.openInnerEditor(e.current.target.children[0])
            }
        }, true)


        canvasApp.editor.on(InnerEditorEvent.CLOSE, function (e:InnerEditorEvent) {
         
            if(e.editTarget.parent){
                canvasApp.editor.openInnerEditor(e.editTarget.parent)
            }   
            
        })


        canvasApp.editor.on(PointerEvent.MENU,function(e){
            menuVisible.value=true
            cleft.value=e.x+"px"
            ctop.value=e.y+"px"
        })

       
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

        if(settingJson&&settingJson.setting.initData){

            let setting=JSON.parse(settingJson.setting.initData)

            frame=new Frame(setting)
            
            usePageBgColor.value=frame.fill.toString()

            canvasApp.tree.add(frame)

        }else{



            frame = new Frame({
            x:width/2,
            fill:usePageBgColor.value,
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
    })

    watch(()=>useColor.value,(newVal)=>{
        ////SquareFill.Ellipse,Arrow-one,Arrow-two,Mark,Line,Text-normal,Text-rect,Text-radius
        canvasApp.editor.list.forEach(m=>{
            if(["Rect","Ellipse","Arrow","Line"].includes(m.tag)){
               m.stroke=newVal
            }else if(["Text"].includes(m.tag)){
                m.fill=newVal
            }else if(["Box"].includes(m.tag)){
                m.stroke=newVal

                setChild(m,newVal)

                function  setChild(item,color){
                     if(item.tag=="Text"){
                        item.fill=color;
                     }
                     if(item.children){
                        item.children.forEach(element => {
                            setChild(element,color)
                        });
                     }
                }
            }
        })
        
    })


    watch(()=>useBorderWidth.value,(newVal)=>{

        ////SquareFill.Ellipse,Arrow-one,Arrow-two,Mark,Line,Text-normal,Text-rect,Text-radius
        canvasApp.editor.list.forEach(m=>{
            if(["Rect","Ellipse","Arrow","Line"].includes(m.tag)){
                
               m.strokeWidth=newVal
            }else if(["Text"].includes(m.tag)){
                //m.fill=newVal
            }else if(["Box"].includes(m.tag)){

                m.strokeWidth=newVal
            }

        })
        
    })

    watch(()=>usePageSizeId.value,()=>{
        let newSize= PageSizeList.find(m=>m.id==usePageSizeId.value);
        pageHeight.value=newSize.height
        pageWidth.value=newSize.width

        frame.width=pageWidth.value;
        frame.height=pageHeight.value;

        canvasApp.tree.zoom("fit", 100)

        
    })

    watch(()=>usePageBgColor.value,()=>{
        frame.fill=usePageBgColor.value
    })


    watch(()=>useTextStyle.value,async (value)=>{
     
        canvasApp.editor.list.forEach(async (elem)=>{

            if(elem.tag=="Box"&&elem.name.startsWith("Text")){


                await  nextTick()


                let text= elem.children[0] as Text

                text.fill=value.fill
                text.fontSize=value.fontSize
                text.fontWeight=value.fontWeight as IFontWeight
                text.text=value.text

                
                elem.cornerRadius=value.cornerRadius
                elem.stroke=value.stroke
                elem.strokeWidth=value.strokeWidth
            
                if(value.lineStyle=="dashed"){
                   elem.dashPattern=[6,6];
                }else{
                    elem.dashPattern=[];
                }
            }
        })
    },{ deep: true })


    watch(()=>useSharpStyle.value,async (value)=>{
     
     canvasApp.editor.list.forEach(async (elem)=>{
         if(elem.tag=="Box"&&elem.name.startsWith("Text")){
             
         }else{
            

            await  nextTick()

            elem.fill=value.fill
            elem.stroke=value.stroke
            elem.strokeWidth=value.strokeWidth

            if("corners" in elem){
                elem.corners=value.corners
            }

            if("height" in elem){
                elem.height=value.height
            }

           
            elem.width=value.width
            
            if(value.lineStyle=="dashed"){

               elem.dashPattern=[6,6];
            }else{
                elem.dashPattern=[];

            }

         }
     })
 },{ deep: true })
    

   const addBgImg=async (imgUrl:any)=>{

        let id="image0";
        let zIndex=0;

        if(frame.findId(id)){
            id=nanoid()
            zIndex=editorStore.shapes.size + 1
        }
        const rectImg = new Rect({
                id:id,
                name:'image',
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
                x: pageWidth.value/2,
                y: pageHeight.value/2
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

        let maxZindex=0;
        
        frame.children.forEach((elem)=>{ 
        if(elem.zIndex>maxZindex){
            maxZindex=elem.zIndex
        }})

        canvasApp.editor.list.forEach((elem)=>{ elem.zIndex=maxZindex  })

        menuVisible.value=false
   }

   const toBottom=()=>{
      canvasApp.editor.toBottom()

      let minZindex=0;
        
        frame.children.forEach((elem)=>{ 
        if(elem.zIndex<minZindex){
            minZindex=elem.zIndex
        }})

        canvasApp.editor.list.forEach((elem)=>{ elem.zIndex=minZindex  })

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
            zIndex:editorStore.shapes.size + 1
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
        fill:"#ffffff",
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
            
            //normal,rect,radius
            
            Object.assign(defaultOption,{width:undefined,height:undefined})
        
            let box= new Box({
                    id,
                    name:"Text",
                    zIndex,
                    cornerRadius:4,
                    cursor:'pointer',
                    stroke:useColor.value,
                    strokeWidth:0,
                    children: [],
                    ...defaultOption
            })


            let text=Text.one({
                text: '100cm',
                editable: false,
                fontSize: 14,
                selected:true,
                resizeFontSize: true,
                padding: [4, 8],
                fill:'#000000',
                shadow: {
                    x: 0,
                    y: 0,
                    blur: 4,
                    color: "#4DCB71AA"
                }
            })

            // text.on(InnerEditorEvent.CLOSE, function (e) {
            //     canvasApp.editor.openInnerEditor(e.target)
            // }, true)

            box.add(text);

            // box.on(PointerEvent.DOUBLE_TAP, function (e) {
            //     //canvasApp.editor.openInnerEditor(e.target)
            // }, true)

            return box
            
        }

        if(type === 'Polygon'){
            

            //Object.assign(defaultOption,{})
            let polygon = new Polygon({
                width: 100,
                height: 100,
                sides: Number(subType),
                fill: '#ffffff',
                stroke:stroke,
                strokeWidth:2,
                x:defaultOption.x,
                y:defaultOption.y,
                editable:true,
                id,
                name:'Polygon',
                zIndex,
                cursor:'pointer'
            })
            return polygon
        }


        if(type==="Star"){
            let star=  new Star({
                width: 100,
                height: 100,
                corners: Number(subType),
                stroke:stroke,
                strokeWidth:2,
                x:defaultOption.x,
                y:defaultOption.y,
                editable:true,
                id,
                name:'Star',
                zIndex,
                cornerRadius: 5,
                cursor:'pointer',
                fill:  '#ffffff'
            })

            return star
        }

        return new Rect({
            id,
            name:"Rect",
            zIndex,
            cursor:'pointer',
            stroke:stroke,
            strokeWidth:2,
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
        
        const json = frame.toJSON() 

        const result = await frame.export('png', { blob: true })

        window.parent.saveMakeImg?window.parent.saveMakeImg({json:JSON.stringify(json),file:result}):null
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