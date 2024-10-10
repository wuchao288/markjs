<template>
    <div id="main-canvas" ref="appWrap">

    </div>

    <div id="contextmenu" @mouseleave ="menuVisible=false"  :style="{top:ctop,left:cleft}"
           v-show="menuVisible"
           class="menu">
             <div class="contextmenu__item" @click="locked(true)">{{$t("header.lock")}}</div>
             <div class="contextmenu__item" @click="locked(false)">{{$t("header.unlock")}}</div>

             <div class="contextmenu__item" @click="toTop">{{$t("header.totop")}}</div>

             <div class="contextmenu__item" @click="toBottom">{{$t("header.tobottom")}}</div>

             <div class="contextmenu__item" v-if="isGroup" @click="toGroup(true)">{{$t("canvas.togroup")}}</div>

             <div class="contextmenu__item" v-if="isGroup" @click="toGroup(false)">{{$t("canvas.ungroup")}}</div>

             <div class="contextmenu__item" @click="doDel">{{$t("header.del")}}</div>
             
       </div>
       
    <keep-alive>
      <component :is="componen"       @handleExportImg="exportImg"> </component>
    </keep-alive>

    <el-tooltip
    v-model:visible="tipVisible"
    :content="tipContent"
    placement="top"
    trigger="hover"
    virtual-triggering
    :virtual-ref="triggerRef"
  />
</template>

<script lang="ts">
      export const getImage = (imgItem: string | File): Promise<HTMLImageElement> => {
   
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


    import {onMounted,ref,watch,shallowRef,defineAsyncComponent, computed} from 'vue'

    import { App,Box,Frame,ZoomEvent,ResizeEvent,Rect,Ellipse,Polygon,Line,Star,Text,PointerEvent,Group,Platform} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'
    import { EditTool } from '@leafer-in/editor'
    import { ScrollBar } from '@leafer-in/scroll'

    import { Ruler } from 'leafer-x-ruler'

    import { Arrow } from '@leafer-in/arrow'

    import { HTMLText } from '@leafer-in/html'


    import { IZoomType} from '@leafer/interface'

    import {  IFontWeight,IFrameInputData} from '@leafer-ui/interface'
   
    import { mixins,calculatePoints } from "@/mixin/index";

    import { PageSizeItem, PageSizeList, } from '@/assets/data/PageSetting'
    import { StyleFontList} from '@/assets/data/Material'

    import { storeToRefs } from 'pinia'

    import useEditStore from "@/stores/useEditStore"

 

 
    import  {nanoid} from  'nanoid'
    import '@leafer-in/state'

    import { InnerEditorEvent ,Editor,EditorEvent,EditorScaleEvent} from '@leafer-in/editor'
    import { ElMessage, ElMessageBox } from 'element-plus'
    
    import { useI18n } from "vue-i18n"

    import { useCreateButton } from '@/hooks/useCreateButton'

    import Command from '@/command'

    import { debouncedWatch } from '@vueuse/core'

        
    const { t } = useI18n()

    let componen = shallowRef(null);
    const PagePanel = defineAsyncComponent(() => import("./panel/PagePanel.vue"));
    const TextPanel = defineAsyncComponent(() => import("./panel/TextPanel.vue"));
    const SharpPanel = defineAsyncComponent(() => import("./panel/SharpPanel.vue"));
    const ImagePanel = defineAsyncComponent(() => import("./panel/ImagePanel.vue"));
    const GroupPanel = defineAsyncComponent(() => import("./panel/GroupPanel.vue"));
    let objcomponen = shallowRef({
        PagePanel,
        TextPanel,
        SharpPanel,
        ImagePanel,
        GroupPanel
    });


    componen.value = objcomponen.value.PagePanel

    let menuVisible=ref(false)

    let isGroup=ref(false)
   
    let ctop=ref("0px")
    let cleft=ref("0px")


    //画板上按钮提示
    const tipContent=ref("")
    const tipVisible = ref(false)
    const triggerRef = ref({
        getBoundingClientRect() {
            return tipPosition.value
        }
    })

    const tipPosition = ref({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    })

    const tipContentModel={
        toGroup:t("canvas.togroup"),
        unGroup:t("canvas.ungroup"),
        copy:t("canvas.clone"),
        del:t("canvas.del")
    };
    

    const editorStore = useEditStore()

    const {
        useColor,
        useBorderWidth,
        useTool,
        useToolType,
        usePageBgColor,
        useTextStyle,
        useSharpStyle,
        usePageSetting,
        useImageStyle,
        useSelect,
        redoIndex
    } = storeToRefs(editorStore)


    let pageHeight=ref(0);

    let pageWidth=ref(0);

    let pageSize= PageSizeList.find(m=>m.id==usePageSetting.value.pageSizeId);

    pageHeight.value=pageSize.height;

    pageWidth.value=pageSize.width;

    let canvasApp:App

    let frame:Frame

    let  redoCom:Command

    let windowHeight=ref(0)

    let windowWidth=ref(0)

    let leftWidth=ref(0)

    let appWrap=ref()

   let observer: ResizeObserver | null = null;
   const handleResize = (entries: any) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          leftWidth.value=width
        }
     };

     debouncedWatch(
        leftWidth,
        () => {
            appWrap.value.style.width=(window.innerWidth- leftWidth.value)+"px"
         },
        { debounce: 500 }
    )

    onMounted(() => {


        observer = new ResizeObserver(handleResize);

        observer.observe(document.getElementsByClassName("tab-warp-tab")[0] as HTMLDivElement);

        document.getElementById("main-canvas") as HTMLDivElement

        appWrap.value.style.height= (window.innerHeight- 60)+"px"

        appWrap.value.style.width=(window.innerWidth- 403)+"px"
        appWrap.value.style.marginTop="60px"

        var settingJson=(window.parent as any).getMarkJson?(window.parent as any).getMarkJson():undefined;

        windowHeight.value=window.innerHeight;
        windowWidth.value=window.innerWidth;

          // 实例应用
        canvasApp = new App({
            view:'main-canvas',
            fill: 'transparent'
            // 通过 app.editor = new Editor(); 时，不需要添加 editor 属性，会有问题
            // editor:{}
        })


        canvasApp.tree = canvasApp.addLeafer();
        canvasApp.sky = canvasApp.addLeafer({type:'draw', usePartRender: false});
        canvasApp.editor = new Editor({
            buttonsFixed:true,
            buttonsDirection:'top',
            lockRatio: 'corner',
            stroke: 'rgba(77, 124, 255, 1)',
            strokeWidth:2,
            skewable: false,
            hover: true,
            flipable:false,
            resizeable:true,
            mask:false,
            rotateGap:15,
            point:{ 
                
                 stroke:'rgba(0, 0, 0, 0.5)',
                 strokeWidth:1,
            },
            middlePoint: { 
                 cornerRadius: 100,
                 width: 20,
                 height: 6,
                 stroke:'rgba(0, 0, 0, 0.5)',
                 strokeWidth:1,
            },
            rotatePoint: {
                width: 20,
                height: 20,
                stroke:'rgba(0, 0, 0, 0.5)',
                strokeWidth:1,
                fill: {
                    type: 'image',
                    url: "data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='rgba(0, 0, 0, 0)' xmlns='http://www.w3.org/2000/svg'%3E %3Ccircle cx='11' cy='11' r='10' fill='white'/%3E %3Ccircle cx='11' cy='11' r='10.5' stroke='black' stroke-opacity='0.2'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.66667 5.14868C6.99468 5.75499 5 8.14455 5 11C5 13.8555 6.99468 16.245 9.66667 16.8513V15.8203C7.55254 15.2368 6 13.2997 6 11C6 8.70032 7.55254 6.76325 9.66667 6.17975V5.14868ZM12.3333 15.8203C14.4475 15.2368 16 13.2997 16 11C16 8.70032 14.4475 6.76325 12.3333 6.17975V5.14868C15.0053 5.75499 17 8.14455 17 11C17 13.8555 15.0053 16.245 12.3333 16.8513V15.8203Z' fill='black'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.16667 5.5H6.33333V4.5H10.1667V8.33333H9.16667V5.5Z' fill='black'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.8333 16.5H15.6667V17.5H11.8333L11.8333 13.6667L12.8333 13.6667L12.8333 16.5Z' fill='black'/%3E %3C/svg%3E"//rotatePng,
                }
            }
        });
        canvasApp.sky.add(canvasApp.editor)

        const scroll = new ScrollBar(canvasApp, { padding: 100 }) 
     
        const ruler = new Ruler(canvasApp)

        editorStore.setApp(canvasApp);


        canvasApp.tree.on(ResizeEvent.RESIZE, () => {

             if(canvasApp.tree.scale){
                editorStore.setScale(canvasApp.tree.scale);
             }
        });


        
        canvasApp.editor.on(EditorScaleEvent.SCALE,mixins.debounce(function(e:EditorScaleEvent){
                
              if(e.target.tag=="Text"){

               
                  useTextStyle.value.fontSize=parseInt(e.target.fontSize.toString())

                  if(e.target.lineHeight){

                    useTextStyle.value.lineHeight.value=(e.target.lineHeight.value*1).toFixed(2)
                  }
                 

              }else if(['Arrow','Ellipse','Rect','Polygon','Star','Line'].includes(e.target.tag)&&e.target.name!="image"){

   
                   useSharpStyle.value.width=parseInt(e.target.width.toString())
                   useSharpStyle.value.height=parseInt(e.target.height.toString())

              }else if(e.target.name=="image"){
               
                     useImageStyle.value.width=parseInt(e.target.width.toString())
                     useImageStyle.value.height=parseInt(e.target.height.toString())
              }
               
        },300,false))

        canvasApp.editor.on(EditorEvent.SELECT, (e: EditorEvent) => {


            if(e.list.length==0){
                canvasApp.editor.target=null
                componen.value = objcomponen.value.PagePanel
               return;
            }

            if(canvasApp.editor.multiple){

                componen.value = objcomponen.value.GroupPanel
                useSelect.value=canvasApp.editor.list.length
                canvasApp.editor.buttons.children[0].children.find(m=>m.name=="toGroup").visible=true
                canvasApp.editor.buttons.children[0].children.find(m=>m.name=="unGroup").visible=false
                canvasApp.editor.buttons.children[0].children.find(m=>m.name=="toGroup").width=32
                canvasApp.editor.buttons.children[0].width=96
                canvasApp.editor.buttons.children[0].height=40
                canvasApp.editor.buttons.children[0].padding=8

                return;

            }else{
               
                canvasApp.editor.buttons.children[0].children.find(m=>m.name=="toGroup").visible=false
                canvasApp.editor.buttons.children[0].children.find(m=>m.name=="toGroup").width=0
              

                if(canvasApp.editor.target.tag=="Group"){

                    canvasApp.editor.buttons.children[0].children.find(m=>m.name=="unGroup").visible=true
                    canvasApp.editor.buttons.children[0].width=96
                    canvasApp.editor.buttons.children[0].height=40
                    canvasApp.editor.buttons.children[0].padding=8
                }else{
                    canvasApp.editor.buttons.children[0].width=64
                    canvasApp.editor.buttons.children[0].height=40
                    canvasApp.editor.buttons.children[0].padding=8
                    canvasApp.editor.buttons.children[0].children.find(m=>m.name=="unGroup").visible=false

                }
            }

            
            if(e.list[0].tag=="Frame"){
                canvasApp.editor.target=null
                componen.value = objcomponen.value.PagePanel
               return;
            }

            if(e.list.length==1&&e.list[0].tag!="Group"){

            
               if(e.list[0].name==("Text")){

                    let text=e.list[0] as Text

                    useTextStyle.value.fill=text.fill?.toString()

                    useTextStyle.value.fontSize= parseInt(text.fontSize.toString())

                    useTextStyle.value.fontWeight=text.fontWeight?.toString()

                    useTextStyle.value.text=text.text

                    useTextStyle.value.stroke=text.stroke?.toString()

                    useTextStyle.value.strokeWidth=Number(text.strokeWidth?.toString())
                    
                    if(text.dashPattern&&text.dashPattern.length==2){

                        useTextStyle.value.lineStyle="dashed"
                        
                    }else{

                        useTextStyle.value.lineStyle="solid"
                    }
                   
                    if(text.shadow?.blur==0){

                        useTextStyle.value.isShadow=false

                        useTextStyle.value.shadow={
                            x:0,
                            y:0,
                            blur:4,
                            color:'#000000',
                        }

                    }else{
                        useTextStyle.value.shadow={
                            x:text.shadow?.x,
                            y:text.shadow?.y,
                            blur:text.shadow?.blur,
                            color:text.shadow?.color,
                        }
                    }


                    componen.value = objcomponen.value.TextPanel


               }else if(['Arrow','Ellipse','Rect','Polygon','Star','Line'].includes(e.list[0].tag)&&!e.list[0].name.startsWith("image")){

                 //e.list[0].tag!="Text"&&!e.list[0].name.startsWith("image")
                   let sharp=e.list[0]

                   //useSharpStyle.value=editorStore.getUseSharpStyle()
                

                   if(!sharp.data.fillData){
                    sharp.data.fillData={}
                   }

                    useSharpStyle.value.fill=sharp.fill.toString()

                    useSharpStyle.value.activeColorKey=sharp.data?.fillData.activeColorKey

                    useSharpStyle.value.pureColor=sharp.data?.fillData.pureColor

                    useSharpStyle.value.gradientColor=sharp.data?.fillData.gradientColor

                    useSharpStyle.value.stroke=sharp.stroke?.toString()

                    useSharpStyle.value.cornerRadius= Number(sharp.cornerRadius?.toString())

                    useSharpStyle.value.strokeWidth= Number(sharp.strokeWidth?.toString())

                    if('corners' in sharp){
                        useSharpStyle.value.corners=Number(sharp.corners?.toString())
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

                   

               }else if(e.list[0].name==("image")){

                  
                    let image=e.list[0]

                    useImageStyle.value.fill=image.fill

                    
                   
                    useImageStyle.value.corners=Number(image.cornerRadius.toString())
                   
                    useImageStyle.value.height=parseInt(image.height.toString())
                    
                    useImageStyle.value.width=parseInt(image.width.toString())

                    useImageStyle.value.opacity=image.opacity

                    useImageStyle.value.x=image.x

                    useImageStyle.value.y=image.y

                    componen.value = objcomponen.value.ImagePanel
               }

            }else{
                componen.value = objcomponen.value.PagePanel
            }
        })
        canvasApp.editor.on(InnerEditorEvent.CLOSE, function (e:InnerEditorEvent) {
         
            if(e.editTarget.parent){
                canvasApp.editor.openInnerEditor(e.editTarget.parent)
            }   
            
        })


        canvasApp.editor.on(PointerEvent.MENU,function(e){

            menuVisible.value=true
            cleft.value=e.x+"px"
            ctop.value=e.y+"px"

            if(canvasApp.editor.list.length>1){
               isGroup.value=true
               return
            }
            if(canvasApp.editor.list.length==1){
                if(canvasApp.editor.list[0].tag=="Group"){
                    isGroup.value=true
                    return
                }
            }
            isGroup.value=false
        })

 
        let {button} =useCreateButton(canvasApp,editorStore)
  
        button.on(PointerEvent.OVER,(e)=>{
            if(e.target.tag=="Flow"){
                return false
            }
            let name=e.target.name;
            let target=(e.target.worldBoxBounds)  
            tipVisible.value=true
            tipContent.value=tipContentModel[name]
            let apprect=appWrap.value.getBoundingClientRect()
            tipPosition.value = DOMRect.fromRect({
                    width: 0,
                    height: 0,
                    x: target.x+14+apprect.x,
                    y: target.y+apprect.y
            })
        })

        button.on(PointerEvent.OUT,(e)=>{
            tipVisible.value=false
            tipPosition.value = DOMRect.fromRect({
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
            })
        })


         canvasApp.editor.buttons.add(button)


         

        if(settingJson&&settingJson.setting.initData){

            let setting=JSON.parse(settingJson.setting.initData)

            frame=new Frame(setting)

            frame.id=nanoid()
            frame.x=0

            frame.y=0

            frame.disabled=true

            frame.editable=false

            frame.hitSelf=true
            
            usePageBgColor.value=frame.fill.toString()

            canvasApp.tree.add(frame)

           

        }else{



            frame = new Frame({
                id:nanoid(),
                editable:false,
                disabled:false,
                hitSelf:true,
                x:0,
                fill:usePageBgColor.value,
                y:0,
                width: pageWidth.value,
                height: pageHeight.value
            })

            
            canvasApp.tree.add(frame)

          

            if(settingJson&&settingJson.imgUrl){
                addBgImg(settingJson.imgUrl)
                canvasApp.editor.target=null
            }
           

        }
        redoCom=  new Command(canvasApp)

        frame.emit("add")

        canvasApp.config.zoom.max=4
        canvasApp.config.zoom.min=0.25

        canvasApp.tree.zoom('fit', 100)

        window.onresize=function(){

            canvasApp.tree.zoom('fit', 100) 

        }
        

        frame.on("redo.update",(data)=>{
            redoIndex.value=data.current
        })
    })


    watch(()=>usePageSetting.value.pageSizeId,(value)=>{
        
        let newSize= PageSizeList.find(m=>m.id==value);

        pageHeight.value=newSize.height
        pageWidth.value=newSize.width

        frame.width=pageWidth.value;
        frame.height=pageHeight.value;

        canvasApp.tree.zoom("fit", 100)

        frame.emit('update',{})

    })

    watch([()=>usePageSetting.value.pageBgClass,()=>usePageSetting.value.pageBgSet],(newValues, oldValues)=>{
       
        if(newValues[0]=="backgroundColor"){
            if(newValues[1].backgroundColor){

                if(newValues[1].backgroundColor.activeColorKey=="pure"){

                frame.fill=[{type:'solid',color:newValues[1].backgroundColor.pureColor}]

                }else if(newValues[1].backgroundColor.activeColorKey=="gradient"){

                if(newValues[1].backgroundColor.gradientColor){
                    //linear-gradient(351deg, rgba(0,0,0,1) 0%, rgba(235,29,78,1) 91%)
                
                    if(newValues[1].backgroundColor.gradientColor.startsWith("linear")){

                        const regex = /linear-gradient\((\d+)deg, ([^%]+) (\d+)%?, ([^%]+) (\d+)%?\)/

                        const match = newValues[1].backgroundColor.gradientColor.match(regex)
                      
                        const [to, from] = calculatePoints(match[1]*1+90+180);

                        if(match){
                            try{
                                   frame.fill=[{
                                   type:'linear',
                                   from: { x: from.x, y: from.y, type: 'percent'},
                                    to: { x: to.x, y: to.y, type: 'percent'},
                                    stops: [{ offset: (match[3]*1)/100, color: match[2] }, { offset: (match[5]*1)/100, color: match[4] }]}]
                                
                            }catch{
                                frame.fill=[{type:'solid',color:"#FFFFF"}]
                            }
                            }else{
                                frame.fill=[{type:'solid',color:"#FFFFF"}]
                            }
                        }else {

                        //radial-gradient(circle, rgba(31, 135, 232, 1) 0%, rgba(0, 0, 0, 1) 100%)

                            const regex = /radial-gradient\((circle), ([^%]+) (\d+%)?, ([^%]+) (\d+%)?\)/

                            const match = newValues[1].backgroundColor.gradientColor.match(regex)

                            if(match){

                            try{

                                frame.fill=[{type:'radial',stops: [{ offset: 0, color: match[2] }, { offset: 1, color: match[4] }]}]

                            }catch{

                                frame.fill=[{type:'solid',color:"#FFFFF"}]

                            }
                            }else{
                                frame.fill=[{type:'solid',color:"#FFFFF"}]
                            }
                        }
                    
                }else{
                    frame.fill=[{type:'solid',color:"#FFFFF"}]
                }

                }else{
                    frame.fill=[{type:'solid',color:"#FFFFF"}]
                }


            }else{

                frame.fill=[{type:'solid',color:"#FFFFF"}]
            }
        }else{

           if(newValues[1].backgroundImage){

                frame.fill={
                    type: 'image',
                    url: newValues[1].backgroundImage,
                    mode: 'strench'
                }
           }else{
              frame.fill= newValues[1].backgroundColor.pureColor
            }
        }

        frame.emit('update',{})
    },{deep:true})


    watch(()=>useImageStyle.value.corners,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.cornerRadius=value0
        })

        frame.emit('update',{})
    })


    watch(()=>useImageStyle.value.height,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.height=value0
        })

        
        frame.emit('update',{})
    })

    watch(()=>useImageStyle.value.width,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.width=value0
        })

        frame.emit('update',{})
    })

    
    watch(()=>useImageStyle.value.opacity,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.opacity=value0
        })

        frame.emit('update',{})
    })


    watch(()=>useImageStyle.value.fill.url,async (newValue, oldValue)=>{

         if(oldValue!=newValue&&oldValue!=""){

            let img=await getImage(newValue)

            let widthx=img.width  
            let heightx=img.height  

            if(widthx>pageWidth.value){
                widthx= pageWidth.value*0.8
                heightx=(widthx*img.height)/img.width
            }

            if(heightx>pageHeight.value){
                heightx= pageHeight.value*0.8
                widthx=(heightx*img.width)/img.height
            }

            canvasApp.editor.width=widthx
            canvasApp.editor.height=heightx


            useImageStyle.value.width=widthx
            useImageStyle.value.height=heightx

            canvasApp.editor.target.fill={
                type: 'image',
                url: newValue,
                mode: 'strench'
            }
            if(canvasApp.editor.target.data.action&&canvasApp.editor.target.data.action!='crop'){
                canvasApp.editor.target.data.original=newValue
            }else{
                canvasApp.editor.target.data.sizeData=null
                canvasApp.editor.target.data.cropData=null
            }
            //canvasApp.editor.target.data.original=newValue
            frame.emit('update',{})
         }

         
      
    })

    watch(()=>useTextStyle.value.fontFamily,async (newValue, oldValue)=>{

        if(oldValue!=newValue&&oldValue!=""){
            let msg= ElMessage({
                showClose: true,
                duration:0,
                type: 'success',
                message: t("canvas.fontload"),
            })

            let font= StyleFontList.find(m=>m.value==newValue) 

            await mixins.loadFont(font.value,font.url)

            msg.close()
        }

        let text= canvasApp.editor.target as Text
        text.fontFamily=newValue

        frame.emit('update',{})
    })


    watch(()=>useTextStyle.value.fill, (newValue, oldValue)=>{

        if(oldValue!=newValue&&oldValue!=""){
            let text= canvasApp.editor.target as Text
            text.fill=newValue

            frame.emit('update',{})
        }

   })

   watch(()=>useTextStyle.value.fontSize, (newValue, oldValue)=>{
 
    if(oldValue!=newValue&&oldValue!=""){
        let text= canvasApp.editor.target as Text
        text.fontSize=newValue

        frame.emit('update',{})
    }
 })



 watch(()=>useTextStyle.value.text, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.text=newValue

     frame.emit('update',{})
 }
})

watch(()=>useTextStyle.value.stroke, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.stroke=newValue
     frame.emit('update',{})
 }
})

watch(()=>useTextStyle.value.strokeWidth, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.strokeWidth=newValue
     frame.emit('update',{})
 }
})
watch(()=>useTextStyle.value.letterSpacing, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.letterSpacing=newValue
     frame.emit('update',{})
 }
})

watch(()=>useTextStyle.value.lineHeight.value, (newValue, oldValue)=>{
 
    let text= canvasApp.editor.target as Text
    text.lineHeight={
        type:"percent",
        value:newValue
    }
    frame.emit('update',{})
})

watch(()=>useTextStyle.value.textDecoration, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.textDecoration=newValue
     frame.emit('update',{})
 }
})

watch(()=>useTextStyle.value.bold, (newValue, oldValue)=>{

    let text= canvasApp.editor.target as Text
    text.fontWeight= newValue?"bold":"normal"
    frame.emit('update',{})

})

watch(()=>useTextStyle.value.italic, (newValue, oldValue)=>{

     let text= canvasApp.editor.target as Text
     text.italic=newValue

     frame.emit('update',{})
})

watch(()=>useTextStyle.value.lineStyle, (newValue, oldValue)=>{
 

     let text= canvasApp.editor.target as Text
     if(newValue=="dashed"){
             text.dashPattern=[6,6];
        }else{
            text.dashPattern=[];
      }
       frame.emit('update',{})
})

watch(()=>useTextStyle.value.isShadow, (newValue, oldValue)=>{
 
    let text= canvasApp.editor.target as Text

    if(newValue){
        text.shadow=useTextStyle.value.shadow
    }else{
        text.shadow=""
    }

    frame.emit('update',{})
})

watch(()=>useTextStyle.value.shadow, (newValue, oldValue)=>{
 
 let text= canvasApp.editor.target as Text

 if(useTextStyle.value.isShadow){
     text.shadow=newValue
 }else{
     text.shadow=""
 }

 frame.emit('update',{})
},{deep:true})




    watch(()=>useSharpStyle.value,(value)=>{
    
      

     canvasApp.editor.list.forEach((elem)=>{

         if(elem.name.startsWith("Text")){
             
         }else{

          if(!elem.data.fillData){
            elem.data.fillData={}
          }

          elem.cornerRadius=value.cornerRadius

            elem.data.fillData.activeColorKey=value.activeColorKey

            elem.data.fillData.gradientColor=value.gradientColor

            elem.data.fillData.pureColor=value.pureColor

          
            if(value.activeColorKey=="pure"){

                elem.fill=[{type:'solid',color:value.pureColor}]

            }else if(value.activeColorKey=="gradient"){
               
                if(value.gradientColor){
                    //linear-gradient(351deg, rgba(0,0,0,1) 0%, rgba(235,29,78,1) 91%)
                 
                    if(value.gradientColor.startsWith("linear")){

                        const regex = /linear-gradient\((\d+)deg, ([^%]+) (\d+)%?, ([^%]+) (\d+)%?\)/

                        const match = value.gradientColor.match(regex)
                      
                        const [to, from] = calculatePoints(match[1]*1+90+180);
                         
                        if(match){
                            try{
                                elem.fill=[{
                                type:'linear',
                                from: { x: from.x, y: from.y, type: 'percent'},
                                to: { x: to.x, y: to.y, type: 'percent'},
                                stops: [{
                                     offset: (match[3]*1)/100, color: match[2] }, 
                                { offset: (match[5]*1)/100, color: match[4] }]}]
                            }catch{
                                elem.fill=[{type:'solid',color:"#FFFFF"}]
                            }
                            }else{
                                elem.fill=[{type:'solid',color:"#FFFFF"}]
                            }
                    }else {

                        //radial-gradient(circle, rgba(31, 135, 232, 1) 0%, rgba(0, 0, 0, 1) 100%)

                        const regex = /radial-gradient\((circle), ([^%]+) (\d+%)?, ([^%]+) (\d+%)?\)/

                        const match = value.gradientColor.match(regex)

                        if(match){

                           try{

                             elem.fill=[{type:'radial',stops: [{ offset: 0, color: match[2] }, { offset: 1, color: match[4] }]}]

                           }catch{

                             elem.fill=[{type:'solid',color:"#FFFFF"}]

                           }
                        }else{
                            elem.fill=[{type:'solid',color:"#FFFFF"}]
                        }
                    }
                    
                }else{
                    elem.fill=[{type:'solid',color:"#FFFFF"}]
                }

            }else{
                elem.fill=[{type:'solid',color:"#FFFFF"}]
            }

           
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

     frame.emit('update',{})
 },{ deep: true })
    

   const addBgImg=async (imgUrl:any)=>{

        let  id=nanoid();
         
        if(frame.findId(id)){
           return;
        }

        let img=await getImage(imgUrl)
        
        let widthx=img.width  
        let heightx=img.height  

        if(widthx>pageWidth.value){
            widthx= pageWidth.value*0.8
            heightx=(widthx*img.height)/img.width
        }

        if(heightx>pageHeight.value){
            heightx= pageHeight.value*0.8
            widthx=(heightx*img.width)/img.height
        }

        const rectImg = new Rect({
                id:id,
                name:'image',
                //around: 'center',
                data:{
                    action:'',
                    original:imgUrl,
                    sizeData:null,
                    cropData:null
                },
                fill: {
                    type: 'image',
                    url: imgUrl,
                    mode: 'strench'
                },
                zIndex:editorStore.shapes.size + 1,
                editable: true,
                locked:false,
                width:widthx,
                height:heightx,
                x: pageWidth.value/2-widthx/2,
                y: pageHeight.value/2-heightx/2
        }) 

        // rectImg.on(PointerEvent.MENU,function(e){
        //     menuVisible.value=true
        //     cleft.value=e.x+"px"
        //     ctop.value=e.y+"px"
        // })

        frame.add(rectImg)

        canvasApp.editor.target=rectImg

   }

   const handleExportJson=()=>{

        if(canvasApp.editor.list.length!=1){
                ElMessage.warning("只能选择一个编组元素导出，多个元素请-编组后导出！")
                return
        }

        if(canvasApp.editor.list[0].tag!="Group"){
            ElMessage.warning("只能选择一个编组元素导出，多个元素请-编组后导出！")
            return
        }


        ElMessageBox.prompt('输入编号,比如 200x1, 300x1', 'Tip', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            inputPattern:/^\d{4,}$/,
            inputErrorMessage: '输入编号,最少4位',
        })
            .then(({ value }) => {
                let textJson=
                    {
                       "preview":`${'new URL("@/assets/images/mate/texteffect/'+value+'.png",import.meta.url).href'}`,
                        "url":'',
                        "id":`${value}`,
                        "data":canvasApp.editor.list[0].toJSON()
                    }
            
                   let text=JSON.stringify(textJson)
                    // 编写正则表达式
                    const regex = /blob:[^"]+/;

                    // 使用正则表达式搜索
                    const match = text.match(regex);

                    if(match!=null){
                        text=  text.replaceAll(match[0],'new URL("@/assets/images/mate/texteffect/'+value+'-1.png",import.meta.url).href')
                    }

                    
                    const blob = new Blob([text], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    
                    const link = document.createElement("a");
                    link.href = url;
                    link.download =value +".txt";
                    link.click();
        
                   URL.revokeObjectURL(url);
            })
            .catch(() => {
              ElMessage({
                type: 'info',
                message: 'Input canceled',
            })
    })

        
     
       
   }


   const handleAddGroup=(item)=>{
    
        const group = new Group(item.data)
        group.zIndex=editorStore.shapes.size + 1
        group.around='top-left'
        group.id=nanoid()

        group.x=0; //pageWidth.value/2+group.width/2
        group.y=0;// pageHeight.value/2+group.height/2
        
        frame.add(group)

        frame.emit("redo.add",{})
        

        canvasApp.editor.target=group

        ElMessage({
            message: 'Success!',
            type: 'success'
        })
   }

   const locked=(flag:boolean)=>{
    
    
      canvasApp.editor.target.locked=flag
      canvasApp.editor.list.forEach((elem)=>{ elem.locked=flag  })
      menuVisible.value=false

      //canvasApp.editor.target=canvasApp.editor.target;

      

      if(canvasApp.editor.target.tag=="Text"){

               
        useTextStyle.value.locked=flag


        }else if(['Arrow','Ellipse','Rect','Polygon','Star','Line'].includes(canvasApp.editor.target.target.tag)&&canvasApp.editor.target.target.name!="image"){


      
        useSharpStyle.value.locked=flag

        }else if(canvasApp.editor.target.target.name=="image"){

      
        useImageStyle.value.locked=flag
        }
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
   

   const  toGroup=(flag)=>{

        if(flag==true){

           let obj= canvasApp.editor.group()
           obj.hitFill='none'
           console.info(obj)
        }else{
            canvasApp.editor.ungroup()
           // canvasApp.editor.list.forEach((elem)=>{ console.info(elem.toString())  })
            //elem.editable=true
        }
        menuVisible.value=false
   }

    const  doDel=()=>{
        menuVisible.value=false
        canvasApp.editor.list.forEach(rect => {
            editorStore.delShape(rect.id as string)
            rect.remove()
        })
        canvasApp.editor.target = undefined

        frame.emit('update',{})
    }
   
    document.addEventListener('keydown', function(event) {

        const key = event.key || event.keyCode;
    

    
        // 判断按下的是否是Delete键
        if (key === 'Delete' || key === 46) {
            doDel()
        }
    });



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


    let shapeId = ""

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
            width:100,
            height:100,
            points:[],
            zIndex:editorStore.shapes.size + 1
        } as TDefaultOption;
        return newShape;
    }


   const addSharp=(model:TDefaultOption)=>{

    let obs=editorStore.getUseSharpStyle()
    
    let {id,type,subType,width,height,zIndex,points,stroke,strokeWidth}=model

    let defaultOption={
        width: width|100,
        editable:true,
        x: 50,
        y: pageHeight.value/2,
        fill:"#ffffff",
        locked:false,
        visible:true,
    }

        if (type === 'Ellipse') {
            return new Ellipse({
                id,
                height,
                zIndex,
                stroke,
                strokeWidth,
                name:"Ellipse",
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                },
                ...defaultOption
            });
        }
        
        if (type === 'Arrow') {
            if(subType=="one"){
                Object.assign(defaultOption,{
                    strokeWidth:2,
                    endArrow:'arrow'
               })
            }else if(subType=="two"){
                Object.assign(defaultOption,{
                    startArrow:'arrow',
                    endArrow:'arrow',
                    strokeWidth:2
               })
            }
            return new Arrow({
                id,
                name:"Arrow-"+subType,
                zIndex,
                stroke,
                strokeWidth,
                strokeCap: 'round',
                strokeJoin: 'round',
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                },
                ...defaultOption
            });
        }
       

        if (type === 'Mark') {

            Object.assign(defaultOption,{
                    strokeWidth:2,
                    startArrow:'mark',
                    endArrow:'mark',
                    rotation:Number(subType)
            })
            return new Arrow({
                id,
                name:"Mark",
                zIndex,
                stroke,
                strokeWidth,
                strokeCap: 'round',
                strokeJoin: 'round',
                cursor:'pointer',
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                },
                ...defaultOption
            });
        }


        if (type === 'Line') {
        
            
            Object.assign(defaultOption,{strokeWidth:1})

            return new Line({
                id,
                name:"Line",
                zIndex,
                stroke,
                strokeWidth,
                cursor:'pointer',
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                },
                ...defaultOption
            });
        }
        if (type === 'Text') {
            
            //normal,rect,radius
            
            Object.assign(defaultOption,{width:undefined,height:undefined,fill:'#000000'})
        
            // let box= new Box({
            //         id,
            //         name:"Text",
            //         zIndex,
            //         cornerRadius:4,
            //         cursor:'pointer',
            //         around:'center',
            //         stroke:useColor.value,
            //         strokeWidth:0,
            //         children: [],
            //         ...defaultOption
            // })


            // let text=Text.one({
            //     name:'Text',
            //     text: '100cm',
            //     editable: true,
            //     fontSize: 24,
            //     selected:true,
            //     // around: 'top-left',
            //     resizeFontSize: true,
            //     padding: [4, 8],
            //     fill:'#000000',
            //     //hitFill:'all',
            //     stroke:'rgba(0,0,0,0)',
            //     strokeWidth:0,
            //     shadow: {
            //         x: 0,
            //         y: 0,
            //         blur: 0,
            //         color: "#000000"
            //     },
            //     ...defaultOption
            // })

            let text=Text.one({
                id:id,
                zIndex:zIndex,
                name:'Text',
                text: '100cm',
                editable: true,
                //selected:true,
                fontSize: 24,
                //around:'center',
                letterSpacing:0,
                lineHeight:{
                    type: 'percent',
                    value: 1.5, // 150%
                },
                resizeFontSize: true,
                stroke:'rgba(0,0,0,0)',
                strokeWidth:0,
                fontFamily:'アプリ明朝',
                fill:'#000000',
                padding: [4, 8],
                x:defaultOption.x,
                y:defaultOption.y,
                shadow: {
                     x: 0,
                     y: 0,
                     blur: 0,
                     color: "#000000"
                 }
            })

            return text

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
                cursor:'pointer',
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                }
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
                fill:  '#ffffff',
                data:{
                    fillData:{
                        activeColorKey:obs.activeColorKey,
                        gradientColor:obs.gradientColor,
                        pureColor:obs.pureColor
                    }
                }
            })

            return star
        }

      

        return new Rect({
            id,
            name:"Rect",
            zIndex,
            cursor:'pointer',
            stroke:stroke,
            strokeWidth:1,
            cornerRadius: 0,
            height,
            data:{
              fillData:{
                activeColorKey:obs.activeColorKey,
                gradientColor:obs.gradientColor,
                pureColor:obs.pureColor
              }
            },
            ...defaultOption
        });
   }


   const handleAddImg=(img:any)=>{
      addBgImg(img)
      //redoCom.change()
   }
   const handleAddMateImg=(img:any)=>{
      if(img.type=="img"){
        addBgImg(img.url)

      }

      //redoCom.change()
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

        frame.emit("redo.add",{})

        ElMessage({
            message: 'Success!',
            type: 'success'
        })

    }

    const handleClearAll=()=>{
        canvasApp.editor.target=undefined;
        frame.removeAll();
        //usePageSetting.value.pageBgClass=""

        usePageSetting.value.pageBgClass="backgroundColor",
        usePageSetting.value.pageBgSet={
            backgroundColor:{
                pureColor:"rgba(255, 255,255, 1)",
                activeColorKey:"pure",//gradient//pure
                gradientColor:"linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"
            },
            backgroundImage:''
        }

        editorStore.clearShape()

        frame.emit('update',{})
    }


    const handleDownImg=()=>{
        
        frame.export(new Date().getTime()+'.jpg',{ pixelRatio: 1 }) 
    }

    const  handleSaveImg=async ()=>{
        
        const json = frame.toJSON() 

        const result = await frame.export('jpg', { blob: true })

        window.parent.saveMakeImg?window.parent.saveMakeImg({json:JSON.stringify(json),file:result}):null
    }


    const zoomTo=(m:IZoomType)=>{
        canvasApp.tree.zoom(m, 100) 
    }

    const pageSizeTo=(m:PageSizeItem)=>{
        frame.width=m.width;
        frame.height=m.height;
    }


    const  exportImg=()=>{
        canvasApp.editor.target.export("Img_"+new Date().getTime()+'.png',{ pixelRatio: 1 }) 
    }


    defineExpose({
        handleClearAll,
        handleDownImg,
        handleAddSharp,
        zoomTo,
        pageSizeTo,
        handleAddImg,
        handleSaveImg,
        handleExportJson,
        handleAddGroup,
        handleAddMateImg
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
        .cutimg{
            background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%), linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
            background-position: 0 0, 14px 14px;
            background-size: 28px 28px;
            width: 100%;
            height: 100%;
        }
</style>