<template>
    <div id="main-canvas" >

    </div>

    <div id="contextmenu" @mouseleave ="menuVisible=false"  :style="{top:ctop,left:cleft}"
           v-show="menuVisible"
           class="menu">
             <div class="contextmenu__item" @click="locked(true)">{{$t("header.lock")}}</div>
             <div class="contextmenu__item" @click="locked(false)">{{$t("header.unlock")}}</div>

             <div class="contextmenu__item" @click="toTop">{{$t("header.totop")}}</div>

             <div class="contextmenu__item" @click="toBottom">{{$t("header.tobottom")}}</div>

             <div class="contextmenu__item" v-if="isGroup" @click="toGroup(true)">{{$t("header.group")}}</div>

             <div class="contextmenu__item" v-if="isGroup" @click="toGroup(false)">{{$t("header.cancel")}}</div>

             <div class="contextmenu__item" @click="doDel">{{$t("header.del")}}</div>
             
       </div>
       
    <keep-alive>
      <component  :is="componen" @handleCutOut="cutOutImg" @handleCropImg="cropImg"      @handleExportImg="exportImg"> </component>
    </keep-alive>

    
    <el-dialog v-model="dialogFormVisible" :close-on-click-modal="false"
     :destroy-on-close="true" title="AI Cut Out" :width="windowHeight<800?windowHeight:800"
      height="600" @opened="openedCutout">

        <div :class="loading?'':'cutimg'" style="height: 560px;">
            <div v-if="loading" >
                <h3 style="margin-bottom: 10px;">{{$t("canvas.loading")}} </h3>
                <div>
                    <el-progress :percentage="100" :format="format" :indeterminate="true" />
                </div>
            </div>
            <div  v-loading="loading"> 
                 <el-image style="width: 500px; height: 500px" :src="imgCutImg" fit="contain" />
            </div>
        </div>

        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false"> {{$t("canvas.cancel")}} </el-button>
            <el-button type="primary" @click="enterCutout">
            {{$t("canvas.confirm")}} 
            </el-button>
        </div>
        </template>
    </el-dialog>

    <cropper-img :imageSrc="imageCropSrc" :sizeData="sizeData" :cropData="cropData"  v-model="dialogCropVisible" @updateImageSrc="updateCropImageSrc" />

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


    import {onMounted,ref,watch,shallowRef,defineAsyncComponent,getCurrentInstance} from 'vue'

    import { App, Box ,Frame,ZoomEvent,ResizeEvent,Rect,Ellipse,Polygon,Line,Star,Text,PointerEvent,ImageEvent,Group} from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'
    import '@leafer-in/view'

    import { Ruler } from 'leafer-x-ruler'

    import { Arrow } from '@leafer-in/arrow'

    import { IZoomType} from '@leafer/interface'

    import {  IFontWeight,IFrameInputData} from '@leafer-ui/interface'
   
    import { mixins,calculatePoints } from "@/mixin/index";

    import { PageSizeItem, PageSizeList, } from '@/assets/data/PageSetting'
    import { StyleFontList} from '@/assets/data/Material'
    
    //import Cookies from 'js-cookie'

    import rotatePng from '@/assets/images/rotate.png'

    import useEditStore from "@/stores/useEditStore"

    import  {nanoid} from  'nanoid'
    import '@leafer-in/state'
    import { storeToRefs } from 'pinia'
    import { InnerEditorEvent ,EditorEvent,EditorScaleEvent} from '@leafer-in/editor'
    import { ElMessage, ElMessageBox } from 'element-plus'
    
    import { useI18n } from "vue-i18n"


    const { t } = useI18n()
    //import axios from 'axios';
    import CropperImg from "@/components/widgets/CropperImg.vue";

    let componen = shallowRef(null);
    const PagePanel = defineAsyncComponent(() => import("./panel/PagePanel.vue"));
    const TextPanel = defineAsyncComponent(() => import("./panel/TextPanel.vue"));
    const SharpPanel = defineAsyncComponent(() => import("./panel/SharpPanel.vue"));
    const ImagePanel = defineAsyncComponent(() => import("./panel/ImagePanel.vue"));
    let objcomponen = shallowRef({
        PagePanel,
        TextPanel,
        SharpPanel,
        ImagePanel
    });



    componen.value = objcomponen.value.PagePanel

    let menuVisible=ref(false)

    let isGroup=ref(false)

    let dialogFormVisible=ref(false)

    let loading=ref(true)

    let imgCutImg=ref('')

    let dialogCropVisible=ref(false)

    let sizeData=ref()
    let cropData=ref()

   //定义一个imageNew变量来接收裁剪之后的图片
    const imageCropSrc = ref()
   
    let ctop=ref("0px")
    let cleft=ref("0px")
    

    const editorStore = useEditStore()

    const {useColor,useBorderWidth,
        useTool,useToolType,
        usePageBgColor,
        useTextStyle,
        useSharpStyle,
        usePageSetting,
        useImageStyle
    } = storeToRefs(editorStore)


    let pageHeight=ref(0);

    let pageWidth=ref(0);

    let pageSize= PageSizeList.find(m=>m.id==usePageSetting.value.pageSizeId);

    pageHeight.value=pageSize.height;

    pageWidth.value=pageSize.width;

    let canvasApp:App

    let frame:Frame

    let windowHeight=ref(0)

    onMounted(() => {
        
        let appWrap=  document.getElementById("main-canvas") as HTMLDivElement

        appWrap.style.height= (window.innerHeight- 60)+"px"
        appWrap.style.marginTop="60px"

        var settingJson=window.parent.getMarkJson?window.parent.getMarkJson():undefined;

        windowHeight.value=window.innerHeight*0.9;

        canvasApp = new App({
            view: 'main-canvas',
            editor:{
                lockRatio: 'corner',
                stroke: '#3f99f7',
                skewable: false,
                hover: true,
                flipable:false,
                resizeable:true,
                mask:false,
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
        
        
     
        //canvasApp.config.move.dragEmpty=true
        
        
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


            

            console.info("SELECT");

            

            if(e.list.length==0){
                canvasApp.editor.target=null
                componen.value = objcomponen.value.PagePanel
               
               return;
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

                    useSharpStyle.value.activeColorKey=sharp.data.fillData.activeColorKey

                    useSharpStyle.value.pureColor=sharp.data.fillData.pureColor

                    useSharpStyle.value.gradientColor=sharp.data.fillData.gradientColor

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


        // canvasApp.editor.on(PointerEvent.DOUBLE_TAP,  (e:PointerEvent)=> {
        //     //debugger
        //     if(canvasApp.editor.editing==false){ return }

        //     if(e.current.target.tag=="Box"&&e.current.target.name.startsWith("Text")){
        //        canvasApp.editor.openInnerEditor(e.current.target.children[0])
        //     }
        // }, true)


        canvasApp.editor.on(InnerEditorEvent.CLOSE, function (e:InnerEditorEvent) {
         
            if(e.editTarget.parent){
                canvasApp.editor.openInnerEditor(e.editTarget.parent)
            }   
            
        })

        // canvasApp.editor.on(EditorScaleEvent.SCALE, function (e:EditorScaleEvent) {
               
        // })

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

       
        // const button = Box.one({// 添加移除按钮
        //     around: 'center',
        //     fill: {
        //         type: 'image',
        //         url: delPng,
        //     },
        //     cornerRadius: 20,
        //     cursor: 'pointer'
            
        // })

        // canvasApp.editor.buttons.add(button)

        // button.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
        //     canvasApp.editor.list.forEach(rect => {
        //         editorStore.delShape(rect.id as string)
        //         rect.remove()
        //     })
        //     canvasApp.editor.target = undefined
        // })

        if(settingJson&&settingJson.setting.initData){

            let setting=JSON.parse(settingJson.setting.initData)

            frame=new Frame(setting)

            frame.x=0

            frame.y=0

            frame.disabled=true

            frame.editable=false

            frame.hitSelf=false
            
            usePageBgColor.value=frame.fill.toString()

            canvasApp.tree.add(frame)

        }else{



            frame = new Frame({
                editable:false,
                disabled:false,
                hitSelf:false,
                x:0,
                fill:usePageBgColor.value,
                y:0,
                width: pageWidth.value,
                height: pageHeight.value
            })

            
            canvasApp.tree.add(frame)

            if(settingJson&&settingJson.imgUrl){
                addBgImg(settingJson.imgUrl)
            }
           
        }


        canvasApp.tree.zoom('fit', 100) 

        window.onresize=function(){

            canvasApp.tree.zoom('fit', 100) 

        }
        
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

    watch(()=>usePageSetting.value.pageSizeId,(value)=>{
        
        let newSize= PageSizeList.find(m=>m.id==value);

        pageHeight.value=newSize.height
        pageWidth.value=newSize.width

        frame.width=pageWidth.value;
        frame.height=pageHeight.value;

        canvasApp.tree.zoom("fit", 100)

    })

    function angleToCoordinates(angleInDegrees) {
      // 将角度转换为弧度
        const angleInRadians = (angleInDegrees * Math.PI) / 180;

        // 计算x和y坐标
        let x = Math.cos(angleInRadians);
        let y = Math.sin(angleInRadians);

        console.log({ x: x, y: y });

        // 返回坐标对象
        return {  x: x, y: y };
    }

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
                                frame.fill="#ffffff"
                            }
                            }else{
                                frame.fill="#ffffff"
                            }
                        }else {

                        //radial-gradient(circle, rgba(31, 135, 232, 1) 0%, rgba(0, 0, 0, 1) 100%)

                            const regex = /radial-gradient\((circle), ([^%]+) (\d+%)?, ([^%]+) (\d+%)?\)/

                            const match = newValues[1].backgroundColor.gradientColor.match(regex)

                            if(match){

                            try{

                                frame.fill=[{type:'radial',stops: [{ offset: 0, color: match[2] }, { offset: 1, color: match[4] }]}]

                            }catch{

                                frame.fill="#ffffff"

                            }
                            }else{
                                frame.fill="#ffffff"
                            }
                        }
                    
                }else{
                    frame.fill="#ffffff"
                }

                }else{
                    frame.fill="#ffffff"
                }


            }else{

                frame.fill="#ffffff"
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

    },{deep:true})


    watch(()=>useImageStyle.value.corners,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.cornerRadius=value0
        })

    })

    
    watch(()=>useImageStyle.value.opacity,(value0)=>{

        canvasApp.editor.list.forEach(async (elem)=>{
            elem.opacity=value0
        })

    })


    watch(()=>useImageStyle.value.fill.url,async (newValue, oldValue)=>{

         if(oldValue!=newValue&&oldValue!=""){

            let img=await getImage(newValue)
            canvasApp.editor.width=img.width
            canvasApp.editor.height=img.height
          
            canvasApp.editor.target.fill={
            type: 'image',
            url: newValue,
            mode: 'strench'
        }

         }else{

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
    })


    watch(()=>useTextStyle.value.fill, (newValue, oldValue)=>{

        if(oldValue!=newValue&&oldValue!=""){
            let text= canvasApp.editor.target as Text
            text.fill=newValue
        }
   })

   watch(()=>useTextStyle.value.fontSize, (newValue, oldValue)=>{
 
    if(oldValue!=newValue&&oldValue!=""){
        let text= canvasApp.editor.target as Text
        text.fontSize=newValue
    }
 })



 watch(()=>useTextStyle.value.text, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.text=newValue
 }
})

watch(()=>useTextStyle.value.stroke, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.stroke=newValue
 }
})

watch(()=>useTextStyle.value.strokeWidth, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.strokeWidth=newValue
 }
})
watch(()=>useTextStyle.value.letterSpacing, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.letterSpacing=newValue
 }
})

watch(()=>useTextStyle.value.lineHeight.value, (newValue, oldValue)=>{
 
    let text= canvasApp.editor.target as Text
    text.lineHeight={
        type:"percent",
        value:newValue
    }

})

watch(()=>useTextStyle.value.textDecoration, (newValue, oldValue)=>{
 
 if(oldValue!=newValue&&oldValue!=""){
     let text= canvasApp.editor.target as Text
     text.textDecoration=newValue
 }
})

watch(()=>useTextStyle.value.bold, (newValue, oldValue)=>{

let text= canvasApp.editor.target as Text
text.fontWeight= newValue?"bold":"normal"

})

watch(()=>useTextStyle.value.italic, (newValue, oldValue)=>{

     let text= canvasApp.editor.target as Text
     text.italic=newValue
})

watch(()=>useTextStyle.value.lineStyle, (newValue, oldValue)=>{
 

     let text= canvasApp.editor.target as Text
           if(newValue.lineStyle=="dashed"){
                    text.dashPattern=[6,6];
                }else{
                    text.dashPattern=[];
                }
 
})

watch(()=>useTextStyle.value.isShadow, (newValue, oldValue)=>{
 
    let text= canvasApp.editor.target as Text

    if(newValue){
        text.shadow=useTextStyle.value.shadow
    }else{
        text.shadow=""
    }
})

watch(()=>useTextStyle.value.shadow, (newValue, oldValue)=>{
 
 let text= canvasApp.editor.target as Text

 if(useTextStyle.value.isShadow){
     text.shadow=newValue
 }else{
     text.shadow=""
 }
},{deep:true})




    // watch(()=>useTextStyle.value,async (value)=>{

    //     let msg= ElMessage({
    //             showClose: true,
    //             duration:0,
    //             type: 'success',
    //             message: t("canvas.fontload"),
    //         })
    //      let font= StyleFontList.find(m=>m.value==value.fontFamily) 
    //      await mixins.loadFont(font.value,font.url)
    //      msg.close()


       



               
    //             let text= canvasApp.editor.target as Text

    //              text.fill=value.fill
    //              text.fontSize=value.fontSize
    //              text.fontWeight=value.fontWeight as IFontWeight
    //              text.text=value.text
    //               text.stroke=value.stroke
    //               text.strokeWidth=value.strokeWidth


    //              text.letterSpacing=value.letterSpacing

            
    //              text.lineHeight=value.lineHeight

    //              text.fontFamily=value.fontFamily


    //              text.textDecoration=value.textDecoration
    //             // //'none' | 'under' | 'delete';
    //              text.italic=value.italic

    //             if(value.lineStyle=="dashed"){
    //                 text.dashPattern=[6,6];
    //             }else{
    //                 text.dashPattern=[];
    //             }

    //             if(value.isShadow){
    //                 text.shadow=value.shadow
    //             }else{
    //                 text.shadow=""
    //             }
            

    // },{ deep: true })


    watch(()=>useSharpStyle.value,(value)=>{
    
        console.info(2)

     canvasApp.editor.list.forEach((elem)=>{
         if(elem.name.startsWith("Text")){
             
         }else{

          if(!elem.data.fillData){
            elem.data.fillData={}
          }
            elem.data.fillData.activeColorKey=value.activeColorKey

            elem.data.fillData.gradientColor=value.gradientColor

            elem.data.fillData.pureColor=value.pureColor

          debugger
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
                                    stops: [{ offset: (match[3]*1)/100, color: match[2] }, { offset: (match[5]*1)/100, color: match[4] }]}]
                     

                            }catch{
                                elem.fill="#ffffff"
                            }
                            }else{
                                elem.fill="#ffffff"
                            }
                    }else {

                        //radial-gradient(circle, rgba(31, 135, 232, 1) 0%, rgba(0, 0, 0, 1) 100%)

                        const regex = /radial-gradient\((circle), ([^%]+) (\d+%)?, ([^%]+) (\d+%)?\)/

                        const match = value.gradientColor.match(regex)

                        if(match){

                           try{

                             elem.fill=[{type:'radial',stops: [{ offset: 0, color: match[2] }, { offset: 1, color: match[4] }]}]

                           }catch{

                             elem.fill="#ffffff"

                           }
                        }else{
                            elem.fill="#ffffff"
                        }
                    }
                    
                }else{
                    elem.fill="#ffffff"
                }

            }else{
                elem.fill="#ffffff"
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
 },{ deep: true })
    

   const addBgImg=async (imgUrl:any)=>{

        let  id=nanoid();
         
        if(frame.findId(id)){
           return;
        }

        
        let img=await getImage(imgUrl)
 
        const rectImg = new Rect({
                id:id,
                name:'image',
                around: 'center',
                data:{
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
                //width:img.width,
                //height:img.height,
                x: pageWidth.value/2,
                y: pageHeight.value/2
        }) 

        rectImg.on(PointerEvent.MENU,function(e){
            menuVisible.value=true
            cleft.value=e.x+"px"
            ctop.value=e.y+"px"
        })

        frame.add(rectImg)
        canvasApp.editor.target=rectImg

   }

   const handleExportJson=()=>{

        if(canvasApp.editor.list.length!=1){
                ElMessage.warning("只能选择一个编组元素导出，多个元素请右键-编组后导出！")
                return
        }

        if(canvasApp.editor.list[0].tag!="Group"){
            ElMessage.warning("只能选择一个编组元素导出，多个元素请右键-编组后导出！")
            return
        }

        let text=canvasApp.editor.list[0].toString();
        
        // let group = new Group()
        // group.children=canvasApp.editor.list;

        // group.editable= true
        // group.hitChildren= false
        // group.around= 'center'

        // frame.add(group)

        // text = group.toString()

        // canvasApp.editor.ungroup()

        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = url;
        link.download =new Date().getTime() +".txt";
        link.click();
        
        URL.revokeObjectURL(url);
     
       
   }


   const handleAddGroup=(item)=>{
    
        const group = new Group(item.data)
        group.zIndex=editorStore.shapes.size + 1
        group.around='center'
        frame.add(group)
   }

   const locked=(flag:boolean)=>{
    
    
      canvasApp.editor.target.locked=flag
      canvasApp.editor.list.forEach((elem)=>{ elem.locked=flag  })
      menuVisible.value=false

      canvasApp.editor.target=canvasApp.editor.target;

      useSharpStyle.value.locked=flag

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
            canvasApp.editor.group()
        }else{
           
            canvasApp.editor.ungroup()

            canvasApp.editor.list.forEach((elem)=>{ console.info(elem.toString())  })
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
        x: pageWidth.value/2,
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
                zIndex,
                stroke,
                strokeWidth,
                height:20,
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
        
            
            Object.assign(defaultOption,{strokeWidth:2,height:20})

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
            strokeWidth:2,
            cornerRadius: 8,
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
   }
   const handleAddMateImg=(img:any)=>{
      if(img.type=="img"){
        addBgImg(img.url)
      }
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


    const cutOutImg=()=>{
        dialogFormVisible.value=true
    }

    const  format=()=>{
        return ""
    }

    const  enterCutout=async ()=>{
        useImageStyle.value.fill.url=imgCutImg.value
        dialogFormVisible.value=false
        imgCutImg.value=""
    }

    const openedCutout=async ()=>{

        loading.value=true

        let blob= await canvasApp.editor.target.export('png', { blob: true })

        let formData=new FormData()

        formData.append('file', blob.data, 'blob')

        
        // axios.defaults.withCredentials=false
        // axios.defaults.responseType='json'
        // axios.defaults.responseEncoding="utf8"

        // axios.post((window.parent as any).sploadImgToTempdes||'http://localhost:9290/BLL/TempHandler.ashx?action=UploadMarkImage', formData)
        // .then(response => {
        //     // 处理上传成功的响应
        //     console.log(response.data);
        //     uploadCutOutImg(response.data)
        // })
        // .catch(error => {
        //     // 处理上传失败的错误
        //     console.info(error.stack);
        // });


        fetch((window.parent as any).sploadImgToTempdes||'/BLL/TempHandler.ashx?action=UploadMarkImage', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            uploadCutOutImg(data)
        })
        .catch(error => console.error(error));

        //上传图片
        // fetch(useImageStyle.value.fill.url)
        // .then(response => response.blob()) // 将文件作为二进制对象（Blob）获取
        // .then(blob => {
        //     //上传
            
        //     let formData=new FormData()

        //     formData.append('file', blob, 'blob')

        //     fetch('/BLL/TempHandler.ashx?action=UploadMarkImage', {
        //         method: 'POST',
        //         body: formData
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.info(data)
                
        //         uploadCutOutImg(data)
        //     })
        //     .catch(error => console.error(error));

        // })
        // .catch(error => {
        //     console.error('读取文件出错:', error);
        // });
    }

    const  uploadCutOutImg=(json)=>{
        let formData=new FormData()
        if((window.parent as any).cutOutImg){
           // formData.append("loginToken",Cookies.get("token"))
        }
       
        formData.append("fileUrl",(window.parent as any).cutOutImg?json.response.ImgPath:json.data.fileUrl)
        // axios.defaults.withCredentials=false
        // axios.defaults.responseType='json'
        // axios.defaults.responseEncoding="utf8"
        // axios.post((window.parent as any).cutOutImg||'http://localhost:9290/BLL/TempHandler.ashx?action=CutOutImg', formData)
        // .then(response => {
        //     // 处理上传成功的响应
        //     console.log(response.data);
            
        // })
        // .catch(error => {
        //     // 处理上传失败的错误
        //     console.info(error.stack);
        // });

         fetch((window.parent as any).cutOutImg||'/BLL/TempHandler.ashx?action=CutOutImg', {
                 method: 'POST',
                 body: formData,
                 //credentials: 'include'
             })
             .then(response => response.json())
             .then(data => {

                loading.value=false

                if(data.code==0){
                    imgCutImg.value=data.data[0]
                }else{
                    ElMessageBox.alert(data.msg)
                }
               }
             )
             .catch(error => 
             { 
                 ElMessage.error("Cut Out Error!")

            }
         );
    }

    
    const cropImg=()=>{
      dialogCropVisible.value=true
      imageCropSrc.value=canvasApp.editor.target.data.original

      sizeData.value= canvasApp.editor.target.data.sizeData
      cropData.value= canvasApp.editor.target.data.cropData
    }


     //点击裁剪按钮
     const updateCropImageSrc = (updateImageData) => {
    
        //const { x, y, width, height } = updateImageData.size;

  
        canvasApp.editor.target.data.sizeData=updateImageData.sizeData
        canvasApp.editor.target.data.cropData=updateImageData.cropData
     
        // 因为裁剪数据不能超过原始尺寸，这里向下取整确保不会超过原始尺寸
        // elementData.cropSize = {
        //     x: ~~x,
        //     y: ~~y,
        //     width: ~~width,
        //     height: ~~height,
        // };
        // const scalex = elementData.width / elementData.cropSize.width;
        // const scaley = elementData.height / elementData.cropSize.height;
        // const scale = Math.min(scalex, scaley);

        // // 设置新的宽高
        // elementData.width = ~~(elementData.cropSize.width * scale);
        // elementData.height = ~~(elementData.cropSize.height * scale);

        dialogCropVisible.value=false
        useImageStyle.value.fill.url=updateImageData.croppedImage
        imageCropSrc.value=""
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