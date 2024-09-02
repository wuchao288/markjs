<template>
     <Header :canvasApp="childRef.canvasApp" />
     <Canvas ref="childRef" />
  </template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import Canvas from '@/components/Canvas.vue'

import {ref} from 'vue'

const childRef = ref(null);

</script>