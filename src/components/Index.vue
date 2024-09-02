<template>
  
     <Header @handleLine="onLine"/>
     <Canvas ref="childRef"   />
  </template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import Canvas from '@/components/Canvas.vue'

import {onMounted, ref} from 'vue'

const childRef = ref();


const onLine = () => {
  debugger
  childRef.value.addLine();
}

onMounted(()=>{
   
})

</script>