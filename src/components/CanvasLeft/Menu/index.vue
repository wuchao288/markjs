
<template>
   <div ref="lefttabplane" class="left-tab-plane">
    <div class="menu-content" :class="{ 'menu-close': poolShow !== true }">
      <component :is="currentComponent" class="menu-pool"></component>
    </div>
  </div>

</template>

  
<script lang="ts" setup>
import  useEditStore  from '@/stores/useEditStore'
import { storeToRefs } from 'pinia'
import { computed,ref } from 'vue'
import TextboxPool from './components/TextboxPool.vue'
import MaterialPool from './components/MaterialPool.vue'



const mainStore = useEditStore()

let lefttabplane=ref()

const { poolType, poolShow } = storeToRefs(mainStore)

const leftMap = {
  'editor': TextboxPool,
  'template': TextboxPool,
  'material': MaterialPool,
  'text': TextboxPool,
  'image': TextboxPool,
  'illustration': TextboxPool,
  'code': TextboxPool,
  'toolkit': TextboxPool,
  'layer': TextboxPool,
  'chatgpt': TextboxPool
}
const currentComponent = computed(() => {
  return leftMap[poolType.value] || null
})


</script>

<style lang="less" scoped>

  .left-tab-plane{
      width: 313px;
      margin-top: 60px;
  }

  .menu-content {
    width: 313px;
    z-index: 1;
    background: #fff;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    transition: left 0.5s linear, right 0.5s linear;
    position: absolute;
    top: 60px;
    bottom: 0px;
    right: 0px;
    left: 90px;
  }
.menu-pool {
  width: 313px;
  height: 100%;
  transition: left .3s linear;
  border-bottom: 1px solid #eee;
  border-left: 0px solid #eee;
  display: flex;
  flex-direction: column;
}
.menu-close {
  cursor: default;
}



     
  </style>