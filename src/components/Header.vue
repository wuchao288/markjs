<script setup lang="ts">

import {computed, ref} from 'vue'

import { ElButton,ElDropdown,ElDropdownItem,ElUpload,ElMessage,ElDropdownMenu } from 'element-plus'


import type { UploadProps } from 'element-plus'

import { Plus,Minus  } from '@element-plus/icons-vue'

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




//翻译
ArrowTypeList.forEach(m=>m.title=t(m.title))
MarkTypeList.forEach(m=>m.title=t(m.title))
ZoomItemList.forEach(m=>m.title=m.title.startsWith("header")?t(m.title):m.title)
SharpTypeList.forEach(m=>m.title=t(m.title))


const SharpTypeListFilter=computed(()=>SharpTypeList.filter(m=>m.type!="Line"))

const imageUrl = ref('')

import useEditStore from "@/stores/useEditStore"
import { storeToRefs } from 'pinia'


const editorStore = useEditStore()

let pageZoom=ref<ZoomItem>(ZoomItemList[ZoomItemList.length-1]);

let pageSize=ref<PageSizeItem>(PageSizeList[0]);


let  arrowType =ref<ArrowTypeItem>(ArrowTypeList[0])

let  markType =ref<MarkTypeItem>(MarkTypeList[0])

let  sharpType =ref<SharpTypeItem>(SharpTypeList[0])

let  borderWidthType =ref<BorderWidthItem>(BorderWidthList[1])


const {useColor,useBorderWidth} = storeToRefs(editorStore)

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
'handleSaveImg'
])



const handleAvatarSuccess: UploadProps['onChange'] = (
  uploadFile
) => {

  if(uploadFile.raw==undefined){
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  }

  let rawFile=(uploadFile.raw);
  
  if (rawFile.type !== 'image/jpeg'&&rawFile.type !== 'image/png') {
    ElMessage.error('Avatar picture must be JPG/PNG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 1) {
    ElMessage.error('Avatar picture size can not exceed 1MB!')
    return false
  }

  imageUrl.value = URL.createObjectURL(uploadFile.raw!)

  emit('handleAddImg',imageUrl.value)

  return true
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



const handleClearAll = () => {
  emit('handleClearAll')
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


</script>

<template>
 <div class="header">
     <div class="action">
         <ul>

          <li>
            <el-button @click="handleSharp('Text','normal')">
              <span class="iconfont icon icon-wenzi-L"></span>
              {{$t('header.text')}}</el-button>
         </li>
          <li style="margin-right: 20px;"></li>

          <li>
          <el-button @click="handleSharp('Line','')">
            <span class="iconfont icon icon-xianduan-zhixian"></span>
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
         <!-- <li>
          <el-color-picker v-model="useColor" show-alpha :predefine="predefineColors" />
        </li>
        <li>
              <el-dropdown split-button  @command="handleBrorderWidthCommand">
                <span>{{borderWidthType.title}}</span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :command="item"  :key="item.id" v-for="item in BorderWidthList">{{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li> -->

         <li>&nbsp;&nbsp;</li>
         <li>
            <el-upload
              ref="uploadRef"
              class="upload-demo"
              :show-file-list="false"
              :auto-upload="false"
              :on-change="handleAvatarSuccess"
            >
              <template #trigger>
               
                <el-button type="primary"> 
                  <span class="iconfont icon icon-shangchuantupian1" style="color: white;"></span> 
                   {{$t('header.uploadimg')}}
                  </el-button>
              </template>
            </el-upload>
         </li>
         <li>
          <el-button type="danger" @click="handleClearAll">
            <span class="iconfont icon icon-shanchu" style="color: white;"></span>
            {{$t('header.clear')}}
          </el-button>
         </li>
         <li>
          <el-button @click="handleDownImg" >
            <span class="iconfont icon icon-xiazaitupian"></span>
            {{$t('header.download')}}</el-button>
         </li>
         <li>
          <el-button type="primary" @click="handleSaveImg">
            <span class="iconfont icon icon-ok" style="color: white;"></span>
            {{$t('header.save')}}</el-button>
         </li>
         <!-- <li>
              <el-dropdown split-button type="primary"  @command="handlePageSizeCommand">
                <span>{{pageSize.title}}</span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :command="item"  :key="item.id" v-for="item in PageSizeList">{{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li> -->
         <!-- <li>
          <Lang  />
         </li> -->
         </ul>
     </div>
 </div>
 <div class="zoom">
  <el-button-group >
    <el-button size="large" round :icon="Plus" />
    <el-button size="large">
      <el-dropdown @command="handleZoomCommand">
        <span>{{pageZoom.title}}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :command="item"  :key="item.id" v-for="item in ZoomItemList">{{item.title}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
       </el-dropdown>
      </el-button>
    <el-button size="large" round  :icon="Minus" />
  </el-button-group>
 </div>
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
    box-shadow: 0 0 .4rem #0000004d;
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
  bottom: 40px;
  right: 300px;
  z-index: 20008;
}
</style>
