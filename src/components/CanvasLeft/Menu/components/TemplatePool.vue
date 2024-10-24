<template>
  <el-card shadow="never"  body-class="panel-container" >
    <el-row :gutter="16">
        <el-col :span="12"   >
          <div :title="item.id"  v-for="item in  TemplateEffectItemList.filter((m,index)=> { return index%2==0 })" 
          :key="item.id" class="mateitem" >

            <el-image  @click="createTemp(item)" class="mateitem-img" :src="item.preview"></el-image>
          </div>
        </el-col>
        <el-col :span="12"   >
          <div :title="item.id"  v-for="item in  TemplateEffectItemList.filter((m,index)=> { return index%2==1 })" :key="item.id" class="mateitem" 
           >
           <el-image  @click="createTemp(item)" class="mateitem-img" :src="item.preview"></el-image>
           
          </div>
        </el-col>
     </el-row>
  </el-card>

  </template>
  <script setup>
import { Search,ArrowLeft,ArrowRight } from '@element-plus/icons-vue'
import _ from 'lodash'
import {TemplateEffectItemList} from '@/assets/data/Material'
import {onMounted, ref,nextTick, computed } from 'vue'

import  useHandleCreate from '@/hooks/useCreateElement'

const { createImage,createGroup } = useHandleCreate();

const  createTemp=(item)=>{
    if(item.data){
      createGroup(item)
    }else{
      createImage(item.preview)
    }
}



</script>

<style scoped lang="less">



  :deep(.panel-container){
    padding: 8px;
    flex: 1;
    overflow: auto;
    padding-bottom: 30px;
  }
:deep(.el-card__header){
    padding: 16px;
}

  .card-header-back{
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    cursor: pointer;
  }
  .panel-block_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 16px;
}

.panel-block_body{
    padding: 0 16px;
}

.panel-block {
    margin-top: 12px;
}
.panel-block.is-first{
   margin-top: 12px;
}

.panel-block_body .panel-resource-list{
    padding: 8px;
    background: #f1f2f4;
    border-radius: 8px;
}

  .panel-block_header-title span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 14px;
}
.panel-block_header-action span{
    font-size: 12px;
    cursor: pointer;
    &:hover{
        color: #888888;
    }
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


</style>