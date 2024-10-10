<template>
    <el-card shadow="never"  body-class="panel-container" >
    
          <div class="panel-block">
              <div class="panel-block_header">
                  <div class="panel-block_header-title">
                      <span>直线</span>
                  </div>
                  <div class="panel-block_header-action"></div>
              </div>
              <div class="panel-block_body">
                <el-row class="panel-resource-list">
                    <el-col @click="createShape(item.type,item.value)" :span="6" class="panel-resource-list-item"  v-for="item in  SharpTypeList.filter(m=>m.type=='Line')">
                        <span :class="'iconfont icon8 '+ item.icon"></span>
                      </el-col>
                  </el-row>
              </div>
          </div>
  
          <div class="panel-block">
              <div class="panel-block_header">
                  <div class="panel-block_header-title">
                      <span>形状</span>
                  </div>
                  <div class="panel-block_header-action"></div>
              </div>
              <div class="panel-block_body">
                <el-row class="panel-resource-list">
                      <el-col @click="createShape(item.type,item.value)" :span="6" class="panel-resource-list-item"  v-for="item in  SharpTypeList.filter(m=>m.type!='Line')">
                        <span :class="'iconfont icon8 '+ item.icon"></span>
                      </el-col>
                  </el-row>
              </div>
          </div>

          <div class="panel-block">
              <div class="panel-block_header">
                  <div class="panel-block_header-title">
                      <span>箭头</span>
                  </div>
                  <div class="panel-block_header-action"></div>
              </div>
              <div class="panel-block_body">
                <el-row class="panel-resource-list">
                      <el-col @click="createShape('Arrow',item.type)"  :span="6" class="panel-resource-list-item"  v-for="item in  ArrowTypeList">
                        <span :class="'iconfont icon8 '+ item.icon"></span>
                      </el-col>
                  </el-row>
              </div>
          </div>

          <div class="panel-block">
              <div class="panel-block_header">
                  <div class="panel-block_header-title">
                      <span>标注</span>
                  </div>
                  <div class="panel-block_header-action"></div>
              </div>
              <div class="panel-block_body">
                <el-row class="panel-resource-list">
                      <el-col @click="createShape('Mark',item.rotate)" :span="6" class="panel-resource-list-item"  v-for="item in  MarkTypeList">
                        <span :class="'iconfont icon8 '+ item.icon"></span>
                      </el-col>
                  </el-row>
              </div>
          </div>

          
  
    </el-card>

    </template>
    <script setup>
  import { Search,ArrowLeft,ArrowRight } from '@element-plus/icons-vue'
  import _ from 'lodash'
  import {ImageEffectList} from '@/assets/data/Material'
  import {onMounted, ref,nextTick, computed } from 'vue'
  
  import  useHandleCreate from '@/hooks/useCreateElement'
  
  const { createShape } = useHandleCreate();
  import { useI18n } from "vue-i18n"
const { t } = useI18n()

  import { 
  ArrowTypeList,
  MarkTypeList,
  SharpTypeList,
 } from '@/assets/data/PageSetting'


 ArrowTypeList.forEach(m=>m.title=t(m.title))
MarkTypeList.forEach(m=>m.title=t(m.title))
SharpTypeList.forEach(m=>m.title=t(m.title))

  const categoryRef =computed(()=>document.getElementsByClassName("panel-container")[0])
  const categoryTop = ref(0)
  const typeRef = ref("all")
  
  const state = ref('')
  
  


  
  
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