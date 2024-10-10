<template>
  <el-card shadow="never"  body-class="panel-container" v-if="typeRef === 'all'">
    <template #header>
      <div class="card-header">

        <el-popover
            placement="bottom-start"
            title="历史记录"
            trigger="click"
            :showArrow="false"
            >
            <template #reference>
                <el-input size="large"
                    v-model="state"
                    placeholder="搜索内空"
                    @change="handleSelect"
                    > <template #prefix >
                            <el-icon class="el-input__icon"><search /></el-icon>
                        </template>
                </el-input>
           </template>
           <template #default>
            <a href="#">历史1 </a>   <a  href="#">记录1 </a>
           </template>
        </el-popover>
      </div>
    </template>

        <div class="panel-block add-text">
            <div class="panel-block_header">
                <div class="panel-block_header-title">
                    <span>添加文字</span>
                </div>
                <div class="panel-block_header-action"></div>
            </div>
            <div class="panel-block_body">
                <el-row class="panel-resource-list">
                    <el-col :span="4" class="panel-resource-list-item" @click="addText(18)">
                        <p class="panel-resource-list-item-icon">H1</p>
                        <p class="panel-resource-list-item-title">标题</p>
                    </el-col>
                    <el-col :span="4" class="panel-resource-list-item" @click="addText(16)">
                        <p class="panel-resource-list-item-icon">H2</p>
                        <p class="panel-resource-list-item-title">副标题</p>
                    </el-col>
                    <el-col :span="4" class="panel-resource-list-item" @click="addText(12)">
                        <p class="panel-resource-list-item-icon" >Aa</p>
                        <p class="panel-resource-list-item-title">正文</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="panel-block" v-for="(item,key,index) in  groupText" :key="key" >
            <div class="panel-block_header">
                <div class="panel-block_header-title">
                    <span>{{key}}</span>
                </div>
                <div class="panel-block_header-action">
                    <span @click="showTotal(key)">查看更多</span>
                </div>
            </div>
            <div class="panel-block_body">
                <el-row class="panel-resource-list">
                    <el-col @click="addGroup(it)" :span="8" class="panel-resource-list-item"  v-for="it in  item.filter((m,idex)=>idex<3)">
                        <img :src="it.preview" lazy loading="lazy"  />
                    </el-col>
                    
                </el-row>
            </div>
        </div>
  </el-card>


  <el-card shadow="never"  body-class="panel-container" v-else>
    <template #header>
      <div class="card-header">

        <div class="card-header-back" @click="hideTotal">
            <el-icon :size="16">
                <ArrowLeft />
            </el-icon>
            <span>{{typeRef}}</span>
        </div>

        <el-popover
            placement="bottom-start"
            title="历史记录"
            trigger="click"
            :showArrow="false"
            >
            <template #reference>
                <el-input size="large"
                    v-model="state"
                    placeholder="搜索内空"
                    @change="handleSelect"
                    > <template #prefix >
                            <el-icon class="el-input__icon"><search /></el-icon>
                        </template>
                </el-input>
           </template>
           <template #default>
            <a href="#">历史1 </a>   <a  href="#">记录1 </a>
           </template>
        </el-popover>
      </div>
    </template>

    <div class="total-box">
        <el-row  v-loading="categoryData.length === 0">
            <el-col :span="8" @click="addGroup(img)" class="box-image" v-for="(img, index) in categoryData" :key="index">
                <img :src="img.preview"  lazy loading="lazy" />
            </el-col>
      </el-row>
    </div>


  </el-card>

  </template>
  <script setup>
import { Search,ArrowLeft,ArrowRight } from '@element-plus/icons-vue'
import _ from 'lodash'
import {TextEffectItemList} from '@/assets/data/Material'
import {onMounted, ref,nextTick, computed } from 'vue'

import  useHandleCreate from '@/hooks/useCreateElement'

const { createTextElement,createGroup } = useHandleCreate();

TextEffectItemList.forEach((item,index)=>{
    if(index%5==0){
        item.cateName="划重点"
    }else if(index%5==1){
        item.cateName="基础文字"
    }else if(index%5==2){
        item.cateName="晒图标记"
    }else if(index%5==3){
        item.cateName="标题文字"
    }else if(index%5==4){
        item.cateName="雅虎标题"
    }
})
const categoryRef =computed(()=>document.getElementsByClassName("panel-container")[0])
const categoryTop = ref(0)
const typeRef = ref("all")

const state = ref('')


const handleSelect = (item) => {
  console.info(state.value)
}

let groupText=_.groupBy(TextEffectItemList,item=>item.cateName)


const categoryData = computed(() => {
  return groupText[typeRef.value]
});



const showTotal=(type)=>{
    categoryTop.value = categoryRef.value.scrollTop;
    typeRef.value = type;
}

const hideTotal = () => {
  typeRef.value = "all";
  setTimeout(()=>{
    categoryRef.value.scrollTo({ top: categoryTop.value, behavior: "smooth" });
  },50)
};

const addText=(fontSize)=>{
    createTextElement("这是一个标题",fontSize)
}
const  addGroup=(item)=>{
    createGroup(item)
}

const setItemStyle = (img,index) => {
  if (!img) return;
  const update = () => {
    const item = img.parentElement;
    if (!item) return;
    const gapRows = index >= 2 ? 2 : 0;
    const rows = Math.ceil(item.clientHeight / 2) + gapRows;
    item.style.gridRowEnd = `span ${rows}`;
  }
  update();
  img.onload = update;
  img.onerror = function() {
    img.src = new URL(`/src/assets/images/loading.gif`, import.meta.url).href;
    update();
  };
}


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