<script setup lang="ts">

import {reactive, ref,onMounted} from 'vue'

import { ElButton,ElDropdown,ElDropdownItem,ElUpload,ElMessage  } from 'element-plus'
import { Plus  } from '@element-plus/icons-vue'
import Lang from '@/components/lang/index.vue'

import type { UploadProps } from 'element-plus'

import { PageSizeList,PageSizeItem } from '@/assets/data/PageSize'

const imageUrl = ref('')

let pageSizeData=reactive<PageSizeItem[]>(PageSizeList);

let pageSize=reactive<PageSizeItem>(pageSizeData[0]);

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const emit = defineEmits(['handleLine'])


const handleLine=()=>{
  debugger;
  emit('handleLine',false);
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

onMounted(() => {

})



//defineExpose({addLine})


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
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <template #trigger>
                <el-button type="primary">上传图片</el-button>
              </template>
            </el-upload>
         </li>
         <li>
          <el-button>文字</el-button>
         </li>
         <li>
          <el-button>圆形</el-button>
         </li>
         <li>
          <el-button>矩形</el-button>
         </li>
         <li>
          <el-button @click="handleLine">直线</el-button>
         </li>
         <li>
          <el-dropdown split-button  trigger="click">
                 箭头
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>单箭头</el-dropdown-item>
                      <el-dropdown-item>双箭头</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-dropdown split-button  trigger="click">
                标注线
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>垂直标注线</el-dropdown-item>
                      <el-dropdown-item>水平标注线</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <el-button>保存设计</el-button>
         </li>
         <li>
          <el-button>清空画板</el-button>
         </li>
         <li>
          <el-button>导出图片</el-button>
         </li>
         <li>
              <el-dropdown split-button type="primary" trigger="click">
                {{pageSize.title}}
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :key="item.id" v-for="item in pageSizeData">{{item.title}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
              </el-dropdown>
         </li>
         <li>
          <Lang />
         </li>
         </ul>
     </div>
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
    z-index: 19850910;
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
</style>
