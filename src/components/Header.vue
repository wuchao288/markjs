<script setup lang="ts">

import {ref} from 'vue'

import { ElButton,ElDropdown,ElDropdownItem,ElUpload,ElMessage  } from 'element-plus'



import Lang from './lang/index.vue'

import type { UploadProps } from 'element-plus'

import { Plus,Minus  } from '@element-plus/icons-vue'

import { 
  ZoomItemList,
  ZoomItem,
  PageSizeList,
  PageSizeItem,
  TextTypeList,
  TextTypeItem,
  ArrowTypeList,
  ArrowTypeItem,
  MarkTypeItem,
  MarkTypeList
 } from '@/assets/data/PageSetting'

const imageUrl = ref('')

import useEditStore from "@/stores/useEditStore"

const editorStore = useEditStore()

let pageZoom=ref<ZoomItem>(ZoomItemList[ZoomItemList.length-1]);

let pageSize=ref<PageSizeItem>(PageSizeList[0]);

let  textType = ref<TextTypeItem>(TextTypeList[0])

let  arrowType =ref<ArrowTypeItem>(ArrowTypeList[0])

let  markType =ref<MarkTypeItem>(MarkTypeList[0])




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

  if(["Text","Mark","Arrow"].includes(type)){

        if(type=="Text"){

            textType.value= TextTypeList.find((m:TextTypeItem)=>m.type==subtype)

        }else if(type=="Arrow"){

            arrowType.value= ArrowTypeList.find((m:ArrowTypeItem)=>m.type==subtype)

        }else{

            markType.value= MarkTypeList.find((m:MarkTypeItem)=>m.rotate==subtype)
        }
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

</script>

<template>
 <div class="header">
     <div class="action">
         <ul>
          <li>
            <el-upload
              ref="uploadRef"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :auto-upload="false"
              :on-change="handleAvatarSuccess"
            >
              <template #trigger>
                <el-button type="primary">上传图片</el-button>
              </template>
            </el-upload>
         </li>
         
         <li>
          <el-button @click="handleSharp('Ellipse','')">圆形</el-button>
         </li>
         <li>
          <el-button @click="handleSharp('Rect','')">矩形</el-button>
         </li>
         <li>
          <el-button @click="handleSharp('Line','')">直线</el-button>
         </li>
         <li>
          <el-dropdown split-button  @click="handleSharp('Text',textType.type)">
                 {{textType.title}}

                  <template #dropdown>
                    <el-dropdown-menu>

                      <el-dropdown-item @click="handleSharp('Text',item.type)"  
                      :key="item.id" v-for="item in TextTypeList">{{item.title}}</el-dropdown-item>

                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-dropdown split-button @click="handleSharp('Arrow',arrowType.type)">
              {{arrowType.title}}
                  <template #dropdown>
                    <el-dropdown-menu>

                      <el-dropdown-item @click="handleSharp('Arrow',item.type)"  
                      :key="item.id" v-for="item in ArrowTypeList">{{item.title}}</el-dropdown-item>

                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-dropdown split-button @click="handleSharp('Mark',markType.rotate)">
            {{markType.title}}
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="handleSharp('Mark',item.rotate)"  
                      :key="item.id" v-for="item in MarkTypeList">{{item.title}}</el-dropdown-item>

                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-button @click="handleSaveImg">保存设计</el-button>
         </li>
         <li>
          <el-button @click="handleClearAll">清空画板</el-button>
         </li>
         <li>
          <el-button @click="handleDownImg" >导出图片</el-button>
         </li>
         <li>
              <el-dropdown split-button type="primary"  @command="handlePageSizeCommand">
                <span>{{pageSize.title}}</span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :command="item"  :key="item.id" v-for="item in PageSizeList">{{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <Lang  />
         </li>
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
  right: 200px;
  z-index: 20008;
}
</style>
