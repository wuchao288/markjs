<script setup lang="ts">

import {computed, ref,watch} from 'vue'

import { ElButton,ElDropdown,ElDropdownItem,ElUpload,ElMessage,ElDropdownMenu,ElMessageBox,ElRow,ElCol } from 'element-plus'


import type { UploadProps } from 'element-plus'

import { Plus,Minus,Pointer  } from '@element-plus/icons-vue'

import { useI18n } from "vue-i18n"
const { t } = useI18n()

import { 
  ZoomItemList,
  ZoomItem,
  PageSizeList,
  PageSizeItem,
  ArrowTypeList,
  ArrowTypeItem,
  MarkTypeItem,
  MarkTypeList,
  BorderWidthItem,
  BorderWidthList,
  SharpTypeList,
  SharpTypeItem
 } from '@/assets/data/PageSetting'


 import {TextEffectItem,TextEffectItemList,ImageEffectItem,ImageEffectList} from '@/assets/data/Material'

//翻译
ArrowTypeList.forEach(m=>m.title=t(m.title))
MarkTypeList.forEach(m=>m.title=t(m.title))
ZoomItemList.forEach(m=>m.title=m.title.startsWith("header")?t(m.title):m.title)
SharpTypeList.forEach(m=>m.title=t(m.title))


//let TextEffectItemList0=TextEffectItemList.map((m,index)=> index%2==1? );


const SharpTypeListFilter=computed(()=>SharpTypeList.filter(m=>m.type!="Line"))


import useEditStore from "@/stores/useEditStore"
import { storeToRefs } from 'pinia'

import { mixins } from "@/mixin/index";

import { App,Box,Frame,ZoomEvent,ResizeEvent,Rect,Ellipse,Polygon,Line,Star,Text,PointerEvent,Group,Platform} from 'leafer-ui'

import  {nanoid} from  'nanoid'

const editorStore = useEditStore()

let pageZoom=ref<ZoomItem>(ZoomItemList[ZoomItemList.length-1]);

let pageSize=ref<PageSizeItem>(PageSizeList[0]);


let  arrowType =ref<ArrowTypeItem>(ArrowTypeList[0])

let  markType =ref<MarkTypeItem>(MarkTypeList[0])

let  sharpType =ref<SharpTypeItem>(SharpTypeList[0])

let  borderWidthType =ref<BorderWidthItem>(BorderWidthList[1])
  

const {useBorderWidth,usePageMove,redoIndex} = storeToRefs(editorStore)

let actionUrl=ref<string>((window.parent as any).sploadImgToTempdes||'/BLL/TempHandler.ashx?action=UploadMarkImage')

let drawermate=ref<boolean>(false)

let activeName=ref<string>('texteff')

let isTest=ref<boolean>(window==window.parent)

watch(()=>usePageMove.value,(newVal,oldValue)=>{

  const app=editorStore.editor

   if(newVal==true){
      app.config.move.drag='auto'
   }else{
      app.config.move.drag=false
   } 
})


const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
  '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321',
  '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2',
  '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF',
  'rgba(0,0,0,0)'
])

const emit = defineEmits([
'handleAddSharp',
'handleZoomTo',
'handlePageSizeTo',
'handleClearAll',
'handleDownImg',
'handleAddImg',
'handleSaveImg',
'handleExportJson',
'handleAddGroup',
'handleAddMateImg'
])



const handleAvatarSuccess: UploadProps['onChange'] = (
  uploadFile
) => {

  if(uploadFile.raw==undefined){
    ElMessage.error(t("stylepanel.formatmsg"))//Picture must be JPG/PNG format!
    return false
  }

  let rawFile=(uploadFile.raw);
  
  if (rawFile.type !== 'image/jpeg'&&rawFile.type !== 'image/png') {
    ElMessage.error(t("stylepanel.formatmsg"))//'Picture must be JPG/PNG format!'
    return false
  } else if (rawFile.size / 1024 / 1024 > 3) {
    ElMessage.error(t("stylepanel.imgsizemsg",{max:3}))//'Picture size can not exceed 3MB!'
    return false
  }

  if(window==window.parent){
      let url=URL.createObjectURL(uploadFile.raw!)
      emit('handleAddImg',url)
      return false
  }

  mixins.uploadFile(rawFile,{}).then((data)=>{
     emit('handleAddImg',data)
  }).catch((error)=>{
    console.info(error)
    ElMessage.error("Upload error")
  })
}



const handleSharp=(type:string,subtype:string)=>{

  

  editorStore.setUseTool(type,subtype)

  if(["Mark","Arrow"].includes(type)){

      if(type=="Arrow"){

          arrowType.value= ArrowTypeList.find((m:ArrowTypeItem)=>m.type==subtype)

      }else{

          markType.value= MarkTypeList.find((m:MarkTypeItem)=>m.rotate==subtype)
      }

  }else  if(["Rect","Ellipse","Polygon","Star"].includes(type)){
     
    sharpType.value=SharpTypeList.find((m:SharpTypeItem)=>m.type==type&&m.value==subtype)
    
  }else if(['Line'].includes(type)){

    //sharpType.value=SharpTypeList.find((m:SharpTypeItem)=>m.type==type)

  }

  emit('handleAddSharp');

}

const handleDownImg=()=>{
  emit('handleDownImg')
}


const handleSaveImg=()=>{
  emit('handleSaveImg')
}


const handleExportJson=()=>{
  emit('handleExportJson')
}


const handleClearAll = () => {

  ElMessageBox.confirm(
    t("header.clearmsg"),
    t("canvas.confirm"),
    {
      // confirmButtonText: 'OK',
      // cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      emit('handleClearAll')
    })
    .catch(() => {
      
    })


}

//处理放大缩小
const handleZoomCommand = (command:ZoomItem) => {
  
  pageZoom.value=command

  emit('handleZoomTo',command.value)
}

//处理画布
const handlePageSizeCommand = (command:PageSizeItem) => {

  pageSize.value=command

  editorStore.setPageSize(command)

  emit('handlePageSizeTo',command)

  emit('handleZoomTo',"fit")
}


const  handleBrorderWidthCommand=(command:BorderWidthItem) => {
    borderWidthType.value=command
    useBorderWidth.value=command.width
}


//导入素材
const handleMateImport=()=>{
  drawermate.value=true
}


const handleAddGroup=(item:TextEffectItem)=>{
  emit('handleAddGroup',item)
}

const handleAddMateImg=(item:ImageEffectItem)=>{

  emit('handleAddMateImg',item)
}


const handleExportPng=()=>{

  let canvasApp=editorStore.editor

  if(canvasApp.editor.list.length!=1){
                ElMessage.warning("只能选择一个编组元素导出，多个元素请右键-编组后导出！")
                return
  }

  if(canvasApp.editor.list[0].tag!="Group"){
      ElMessage.warning("只能选择一个编组元素导出，多个元素请右键-编组后导出！")
      return
  }

  let rect=canvasApp.editor.list[0];

  rect.export(new Date().getTime()+'.png') 
  
}

const setZoom=(parm)=>{
  let canvasApp=editorStore.editor
  canvasApp.tree.zoom(parm)
 // canvasApp.emit('zoom', { scale: canvasApp.tree.zoomLayer.scale }) 

 let scale=canvasApp.tree.zoomLayer.scale 

  if(ZoomItemList.find(m=>m.value==scale)){

    pageZoom.value=ZoomItemList.find(m=>m.value==scale)

  }else{

    pageZoom.value={title:(scale*100)+"%",value:parm,id:scale}

  }

}

const appRedo=()=>{
  let canvasApp=editorStore.editor
  canvasApp.tree.emit("redo.redo",{})
}

const appUndo=()=>{
  let canvasApp=editorStore.editor
  canvasApp.tree.emit("redo.undo",{})
}


const  handleImportJson=(data)=>{
  let canvasApp=editorStore.editor

  let frame=canvasApp.tree.findOne("Frame")

  const group = new Group(data)

        group.zIndex=editorStore.shapes.size + 1
        group.around='top-left'
        group.id=nanoid()

        group.x=0; //pageWidth.value/2+group.width/2
        group.y=0;// pageHeight.value/2+group.height/2
        
        frame.add(group)

        ElMessage({
            message: 'Success!',
            type: 'success'
        })
}

const handleJsonSuccess: UploadProps['onChange'] = (
  uploadFile
) => {

  let rawFile=(uploadFile.raw)
  console.info(uploadFile)
  var reader=new FileReader()
  reader.onload=function(e){
   var content=e.target.result 
   handleImportJson(JSON.parse(content))
  }
  reader.readAsText(rawFile)
}

</script>

<template>
 <div class="header">
     <div class="action">
         <ul>
          <li>
            <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.addmaterial')"
                        placement="top"
                        >
            <el-button  type="primary"  @click="handleMateImport">
              <span class="iconfont icon icon-daorutupian" style="color: white;"></span>
              </el-button>
            </el-tooltip>
         </li>
         <li>
          <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.undo')"
                        placement="top"
                        >
            <el-button :disabled="redoIndex==0"  @click="appUndo">
                <i class="iconfont  icon-chexiao1"></i>
            </el-button>
        </el-tooltip>
         </li>
         <li>
          <el-tooltip
               
                        class="box-item"
                        effect="dark"
                        :content="t('header.redo')"
                        placement="top"
                        >
          <el-button    @click="appRedo">
              <i class="iconfont icon-zhongzuo-jihuo"></i>
          </el-button>
        </el-tooltip>
         </li>
          <li>
            <el-button @click="handleSharp('Text','normal')">
              <span class="iconfont icon icon-wenzi-L"></span>
              {{$t('header.text')}}</el-button>
         </li>
          <li style="margin-right: 20px;"></li>

          <li>
          <el-button @click="handleSharp('Line','')">
            <span class="iconfont  icon-xianduan-zhixian"></span>
            {{$t('header.line')}}
          </el-button>
         </li>

        <li>
          <el-dropdown split-button @click="handleSharp(sharpType.type,sharpType.value)">
            <span :class="'iconfont icon8 '+ sharpType.icon"></span>  {{sharpType.title}}
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleSharp(item.type,item.value)"  
                      :key="item.id"   v-for="item in SharpTypeListFilter">
                      <span :class="'iconfont icon8 '+ item.icon"></span>
                      {{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>

         
         <li>
          <el-dropdown split-button @click="handleSharp('Arrow',arrowType.type)">
            <span :class="'iconfont icon8 '+ arrowType.icon"></span>  {{arrowType.title}}
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleSharp('Arrow',item.type)"  
                      :key="item.id" v-for="item in ArrowTypeList">
                      <span :class="'iconfont icon8 '+ item.icon"></span>
                      {{item.title}}
                     </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-dropdown split-button @click="handleSharp('Mark',markType.rotate)">
            <span :class="'iconfont icon8 '+ markType.icon"></span> {{markType.title}}
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleSharp('Mark',item.rotate)"  
                      :key="item.id"    v-for="item in MarkTypeList">
                      <span :class="'iconfont icon8 '+ item.icon"></span>
                      {{item.title}}</el-dropdown-item>

                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
           <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.movecanvas')"
                        placement="top"
                        >

          <el-button :icon="Pointer"  plain @click="usePageMove=!usePageMove" circle :type="usePageMove?'primary':''" />

          </el-tooltip>
         </li>
        
         <li>&nbsp;&nbsp;</li>
         <li>
            <el-upload
              :show-file-list="false"
              :auto-upload="false"
              :action="actionUrl"
              :data="{FileName:'blob'}"
               name="blob"
              :on-change="handleAvatarSuccess"
            >
              <template #trigger>
                <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.uploadimg')"
                        placement="top"
                        >
                <el-button type="primary"> 
                  <span class="iconfont icon icon-shangchuantupian1" style="color: white;"></span> 
                  <span class="bgsize"> {{$t('header.uploadimg')}}</span>
                  </el-button>
                  </el-tooltip>
              </template>
            </el-upload>
         </li>
         <li>

          <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.clear')"
                        placement="top"
                        >

          <el-button type="danger"  @click="handleClearAll">
            <span class="iconfont icon icon-shanchu" style="color: white;"></span>
            <span class="bgsize"> {{$t('header.clear')}} </span>
          </el-button>

        </el-tooltip>
         </li>
         <li><el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('header.download')"
                        placement="top"
                        >
          <el-button :title="t('header.download')" @click="handleDownImg" >
            <span class="iconfont icon icon-xiazaitupian"></span>
          </el-button>    
         </el-tooltip>
         </li>
         <li>
          <el-button type="primary" :title="t('header.save')" @click="handleSaveImg">
            <span class="iconfont icon icon-ok" style="color: white;"></span>
            <span > {{$t('header.save')}} </span>
          </el-button>
         </li>

         <li v-if="isTest">
          <el-button @click="handleExportJson">
              导出JSON  
          </el-button>
         </li>
         <li v-if="isTest">
          <el-upload
              :show-file-list="false"
              :auto-upload="false"
              :action="actionUrl"
              :data="{FileName:'blob'}"
               name="blob2"
              :on-change="handleJsonSuccess"
            >
              <template #trigger>
               
                <el-button type="primary"> 
                  导入JSON
                  </el-button>
              </template>
            </el-upload>
          
         </li>
         <li v-if="isTest">
          <el-button @click="handleExportPng">
              导出效果图
          </el-button>
         </li>
         
         </ul>
     </div>
     
 </div>
 <div class="zoom">
  <el-button-group >
    <el-button round :icon="Plus" @click="setZoom('in')"/>
    <el-button >
      <el-dropdown @command="handleZoomCommand">
        <span>{{pageZoom.title}}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :command="item"  :key="item.id" v-for="item in ZoomItemList">{{item.title}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
       </el-dropdown>
      </el-button>
    <el-button  round  :icon="Minus"  @click="setZoom('out')"/>
  </el-button-group>
 </div>


  <el-drawer size="400" v-model="drawermate" :title="t('header.addmaterial')" direction="ltr">
    <template #default>
      <div>
        <el-tabs  class="" v-model="activeName" >
          <el-tab-pane :label="t('header.texteffect')" name="texteff">
               <el-row :gutter="16">
                  <el-col :span="12"   >
                    <div  :title="item.id"  v-for="item in  TextEffectItemList.filter((m,index)=> { return index%2==0 })" 
                    :key="item.id" class="mateitem" >
                      <el-image @click="handleAddGroup(item)" class="mateitem-img"  :src="item.preview"></el-image>
                    </div>
                  </el-col>
                  <el-col :span="12"   >
                    <div :title="item.id" v-for="item in  TextEffectItemList.filter((m,index)=> { return index%2==1 })" :key="item.id" class="mateitem" 
                     >
                      <el-image @click="handleAddGroup(item)" class="mateitem-img"  :src="item.preview"></el-image>
                    </div>
                  </el-col>
               </el-row>
          </el-tab-pane>
          <el-tab-pane :label="t('header.imageeffect')" name="second">

            <el-row :gutter="16">
                  <el-col :span="12"   >
                    <div :title="item.id"  v-for="item in  ImageEffectList.filter((m,index)=> { return index%2==0 })" 
                    :key="item.id" class="mateitem" >
                      <el-image @click="handleAddMateImg(item)" class="mateitem-img" :src="item.preview"></el-image>
                    </div>
                  </el-col>
                  <el-col :span="12"   >
                    <div :title="item.id"  v-for="item in  ImageEffectList.filter((m,index)=> { return index%2==1 })" :key="item.id" class="mateitem" 
                     >
                      <el-image @click="handleAddMateImg(item)" class="mateitem-img"   :src="item.preview"></el-image>
                    </div>
                  </el-col>
               </el-row>
          </el-tab-pane>
      </el-tabs>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped>
.header{
    position: fixed;
    top: 0px;
    left: 0px;
    height: 60px;
    right: 0px;
    padding: 0px;
    z-index: 2004;
    background-color: #fff;
    box-shadow: 0 0 .2rem #0000004d;
    filter: drop-shadow(0 0 1.2rem rgba(255, 255, 255, .6));
}
.action{
  padding: 0px;
  margin: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
.action ul{
   display: flex;
   flex-direction: row;
   padding: 0px;
   margin: 0px;
}
.action ul li{
  margin-right: 5px;
}

.zoom{
  position: fixed;
  bottom: 10px;
  right: 310px;
  z-index: 2008;
}
.mateitem{
  margin-bottom: 10px;
  cursor: pointer;
  border:1px solid #ccc;
  box-shadow: var(--el-box-shadow-light);
  border-radius: 5px;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%), linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
    background-position: 0 0, 14px 14px;
    background-size: 28px 28px;
}

.mateitem:hover{
  box-shadow: var(--el-box-shadow);
}
.mateitem-img{
  width: 100%;
}

:deep(.mateitem-img img){
   display: block;
   object-fit: fill;
}

.active{
  background-color: aquamarine;
}
.bgsize{
  display: none;
}
</style>
