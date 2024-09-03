<template>
  
     <Header 
      @handleAddSharp="addSharp" 
      @handleZoomTo="zoomTo" 
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

const zoomTo=(m:IZoomType)=>{
  childRef.value.zoomTo(m);
}

const pageSizeTo=(m:PageSizeItem)=>{
  childRef.value.pageSizeTo(m);
}

onMounted(()=>{
   
})

</script>