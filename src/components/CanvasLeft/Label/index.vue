<template>
    <div ref="tabs" class="left-tabs">


       <div class="center-tab" :class="{ 'left-active': tab.key === activeTab }" v-for="tab in topTabs" 
       :key="tab.key" >
          <div :id="`left-tabs-${tab.key}`">
              <a class="tab-btn" @click="showType(tab.key)">
                <span class="iconfont icon icon-wenzi-L"></span>
                <p>{{tab.label}}</p>
              </a>
          </div>
        </div>

    </div>
  </template>
  
  <script lang="ts" setup>
    import {ref} from 'vue'
    import  useEditStore  from '@/stores/useEditStore'
    import { storeToRefs } from 'pinia'

    const mainStore = useEditStore()

    const { poolType, poolShow } = storeToRefs(mainStore)

    let tabs=ref<HTMLDivElement>()

    let activeTab=ref("text")

    const topTabs= [
       
        { key: "text", label: "text", icon: "text", index: 1 },
        { key: "material", label: "material", icon: `material`, index: 2 },
        { key: "image", label: "image", icon: "picture", index: 3 },
        { key: "toolkit", label: "tool", icon: "toolkit", index: 4 }
    ];

    const  showType=(type)=>{
      if(tabs.value?.parentElement?.classList.contains("show-tab")&&activeTab.value==type){
        tabs.value?.parentElement?.classList.remove("show-tab")
        poolShow.value=false
      }else{
        tabs.value?.parentElement?.classList.add("show-tab")
        poolShow.value=true
      }
      activeTab.value=type
      poolType.value=type
    }
  </script>
  <style scoped lang="less">
      .left-tabs{
           height: calc(100% - 60px);
           width: 90px;
           margin-top: 60px;
           padding-top: 20px;
          //  border-right-color:rgb(238, 238, 238);
          //   border-right-style: solid;
          //   border-right-width: 1px;
      }
      
    
      :deep(.center-tab){
        margin-bottom: 10px;
      }
      :deep(.center-tab>div){
        text-align: center;
        height: 90px;
      }

      :deep(.center-tab>div> .tab-btn){
        padding: 10px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        user-select: none;
      
        .iconfont {
                font-size: 22px;
                height: 40px;
                width: 40px;
                margin: auto;
                line-height: 40px;
                border-radius: 50%;
        }
        &:hover{
            color: #5555ff;
            .iconfont {
                color: #5555ff;
            }
            font-weight:bold;
        }
      }




      :deep(.center-tab.left-active .tab-btn) {
        color: #5555ff;
            .iconfont {
                color: #5555ff;
                background-color:rgba(85, 85, 255, 0.1);
              
            }
            font-weight:bold;
      }
      
  </style>