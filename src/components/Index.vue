<template>
     <Header v-if="secondComponentLoaded" :canvasApp="childRef.canvasApp" />
     <Canvas ref="childRef" />
  </template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import Canvas from '@/components/Canvas.vue'

import {onMounted, ref} from 'vue'

const childRef = ref(null);

let secondComponentLoaded=ref(false)


onMounted(()=>{

  secondComponentLoaded.value=true
})

</script>