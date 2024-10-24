<template>
  <el-card shadow="never"  body-class="panel-container" >
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
  </el-card>

  </template>
  <script setup>
import { Search,ArrowLeft,ArrowRight } from '@element-plus/icons-vue'
import _ from 'lodash'
import {ImageEffectList} from '@/assets/data/Material'
import {onMounted, ref,nextTick, computed } from 'vue'

import  useHandleCreate from '@/hooks/useCreateElement'

const { createImage } = useHandleCreate();

ImageEffectList.forEach((item,index)=>{
    if(index%5==0){
        item.cateName="划重点"
    }else if(index%5==1){
        item.cateName="线箭头"
    }else if(index%5==2){
        item.cateName="基础装饰"
    }else if(index%5==3){
        item.cateName="雅虎促销"
    }else if(index%5==4){
        item.cateName="乐天促销"
    }
})



</script>

<style scoped lang="less">



  :deep(.panel-container){
    padding: 0px;
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


.panel-resource-list-item{
    position: relative;
    display: grid;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
    place-items: center;
    justify-content: center;
    justify-items: center;
    padding: 8px;
    line-height: 18px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 8px;
    &:hover{
        background-color: #c8c8c8;
    }
    .panel-resource-list-item-icon{
        height: 32px;
        width: 32px;
    }
    .panel-resource-list-item-title{
        font-size: 12px;
        font-weight: 400;
    }

    img{
      width: 100%;
        height: 50px;
        object-fit: contain;
    }
}

.box-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px;
    cursor: pointer ;
    border-radius: 8px;
    background: #f8fafc;
    &:hover{
        background-color: #c8c8c8;
    }
    img{
        width: 100%;
        height: 95px;
        object-fit: contain;
    }
}

.total-box{
    padding: 8px;
}



</style>