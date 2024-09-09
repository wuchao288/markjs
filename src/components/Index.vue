<template>
  
     <Header 
      @handleAddSharp="addSharp" 
      @handleClearAll="clearAll"
      @handleZoomTo="zoomTo" 
      @handleAddImg="addImg"
      @handleDownImg="downImg"
      @handleSaveImg="saveImg"
      @handleExportJson="exportJson"
      @handleAddGroup="addGroup"
      @handlePageSizeTo="pageSizeTo" />
     <Canvas ref="childRef"   />

 
     


  </template>
<script setup lang="ts">
import Header from './Header.vue'
import Canvas from './Canvas.vue'


import {onMounted, ref} from 'vue'

import { IZoomType } from '@leafer/interface'
import { PageSizeItem } from '@/assets/data/PageSetting';

const childRef = ref();



const addSharp = () => {
  childRef.value.handleAddSharp();
}

const downImg = () => {
  childRef.value.handleDownImg();
}


const clearAll=()=>{
  childRef.value.handleClearAll();
}

const zoomTo=(m:IZoomType)=>{
  childRef.value.zoomTo(m);
}

const addImg=(m:any)=>{
  childRef.value.handleAddImg(m);
}

const  saveImg=()=>{
  childRef.value.handleSaveImg();
}

const pageSizeTo=(m:PageSizeItem)=>{
  childRef.value.pageSizeTo(m);
}

const exportJson=()=>{
  childRef.value.handleExportJson();
}

const addGroup=(item)=>{
  childRef.value.handleAddGroup(item);
}


onMounted(()=>{
   
})

</script>