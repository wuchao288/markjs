<template>
    <div ref="tabs" class="tab-warp-tab show-tab">
      <Label />
      <Menu />
      <svg class="arrow right" @click="showTab" width="16" height="102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0H0v102h1V89.563A16 16 0 0 1 8.125 76.25l.75-.5A16 16 0 0 0 16 62.437V39.563A16 16 0 0 0 8.875 26.25l-.75-.5A16 16 0 0 1 1 12.437V0Z" fill="#e5e7eb"></path><path d="m5 56 3.867-2.9a2 2 0 0 0 0-3.2L5 47" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
       <svg class="arrow left" @click="showTab" width="15" height="102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v102-12.437A16 16 0 0 1 7.125 76.25l.75-.5A16 16 0 0 0 15 62.437V39.563A16 16 0 0 0 7.875 26.25l-.75-.5A16 16 0 0 1 0 12.437V0Z" fill="#e5e7eb"></path><path d="m8.5 47-3.867 2.9a2 2 0 0 0 0 3.2L8.5 56" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
  </template>
  
  <script lang="ts" setup>
  import Label from "./Label/index.vue";
  import Menu from "./Menu/index.vue";
  import {ref,onMounted,watch} from 'vue'
  let tabs=ref<HTMLDivElement>()


  const showTab=()=>{
    tabs.value?.classList.toggle("show-tab")
  }

  </script>
<style scoped>
.tab-warp-tab{
    display: flex;
    flex-direction: row;
    position: relative;
}
 .arrow{
    right: -16px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    z-index: 1000000;
    cursor: pointer;
    color: #9a9a9a;
  }
  .arrow:hover{
    --un-text-opacity: 1;
    color: rgba(85, 85, 255, var(--un-text-opacity));
  }

.show-tab .arrow.left{
        display: none;
}

.tab-warp-tab  .arrow.right{
      display: block;
}

.show-tab .left-tab-plane{
  opacity: 1;
  width: 313px;
}

.left-tab-plane{
 width: 0px;
 opacity: 0;
 transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
}

.show-tab.tab-warp-tab{
  width: 403px !important;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
}

.tab-warp-tab{
  width: 90px;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
}

</style>