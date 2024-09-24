<template>
     <div id="main-right" >

        <el-form
            class="form"
            label-position="top"
            label-width="50px"
            >

            <el-form-item>
                <ShortCut v-model:="state.locked"></ShortCut>


                <el-space wrap class="btn-action-group-wrap">
                    <el-button size="large" @click="toGroup" class="gda-btn-action">成组</el-button>
                    <el-button size="large" class="gda-btn-action">拆分组</el-button>
                </el-space>

            </el-form-item>


            
          <el-form-item label="对齐">
            <el-card  style="width: 100%;" shadow="never" :body-class="'gda-btn-action'"  :body-style="{padding:'10px'}">
            
                <el-row>
                    <el-col :span="4" >
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="左对齐"
                        placement="top"
                        >
                        <el-link :underline="false" @click="setAlgin('left')" >
                            <i class="iconfont icon8 icon-duiqi-zuoduiqi" ></i>
                            </el-link>
                     </el-tooltip>

                  </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="水平居中对齐"
                        placement="top"
                        >
                        <el-link :underline="false" @click="setAlgin('center')" >  
                            <i class="iconfont icon8 icon-duiqi-juzhongduiqi"></i>
                        </el-link>
                    </el-tooltip>
                </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="右对齐"
                        placement="top"
                        >
                    <el-link :underline="false" @click="setAlgin('right')" >  
                        <i class="iconfont icon8 icon-duiqi-youduiqi"></i>
                    </el-link>
                </el-tooltip>

            </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="上对齐"
                        placement="top"
                        >
                        <el-link  :underline="false" @click="setAlgin('top')"  >
                            <i class="iconfont icon8 icon-duiqi-shangduiqi" ></i>
                            </el-link>
                        </el-tooltip>
                    </el-col>
                        <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="垂直居中对齐"
                        placement="top"
                        >
                    <el-link  :underline="false" @click="setAlgin('vcenter')"   >  
                        <i class="iconfont icon8 icon-duiqi-chuizhiduiqi"></i>
                    </el-link>
                </el-tooltip>
            </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="下对齐"
                        placement="top"
                        >
                        <el-link  :underline="false" @click="setAlgin('bottom')"   >  
                            <i class="iconfont icon8 icon-duiqi-xiaduiqi"></i>
                        </el-link>
                    </el-tooltip> </el-col>
                </el-row>
                </el-card>
    
                <el-space wrap class="btn-action-wrap">
                    <el-button  size="large" :disabled="useSelect<3" @click="setAlgin('hd')" class="gda-btn-action">水平分布</el-button>
                    <el-button size="large" :disabled="useSelect<3"  @click="setAlgin('vd')"  class="gda-btn-action">垂直分布</el-button>
                </el-space>
                
              
          </el-form-item>
      </el-form>

    </div>
</template>
<script lang="ts" setup>

import { ElForm,ElFormItem,ElInput,ElSlider,ElColorPicker,
      ElRadioGroup,ElRadio,ElCard,
      ElButton,ElRow,ElCol,ElSelect,
      ElOption,ElTooltip,ElLink,
      ElCheckbox,ElSpace
      } from 'element-plus'

import { useI18n } from "vue-i18n"
import  ShortCut  from '@/components/widgets/ShortCut.vue'
import { ref,onActivated,watch } from 'vue';
import { App } from 'leafer-ui';
const { t } = useI18n()

import { storeToRefs } from 'pinia'

import useEditStore from "@/stores/useEditStore"


const editorStore = useEditStore()

const canvasApp=editorStore.editor

let state=ref({
    locked:false,
    isGroup:false
})

const {useSelect} = storeToRefs(editorStore)

watch(()=>useSelect.value,(newVal)=>{
    
})

onActivated(()=>{
    state.value.locked=(canvasApp.editor.target as any).locked
    state.value.isGroup=(canvasApp.editor.target as any).tag=="Group"
})

const toGroup=()=>{
    if(canvasApp.editor.multiple==true){
        canvasApp.editor.group()
    }
}

const setAlgin=(placement)=>{

     switch (placement) {
        case "left":
            let l= canvasApp.editor.list.map(m=>m.x).reduce((a,b)=>Math.min(a,b))
            canvasApp.editor.list.forEach((m)=>{
                m.x=l
            })
            break;
        case "right":
           let r= canvasApp.editor.list.map(m=>m.x+m.width).reduce((a,b)=>Math.max(a,b))
            canvasApp.editor.list.forEach((m)=>{
                m.x=r-m.width
            })
            break;  
        case "center":
           let l1= canvasApp.editor.list.map(m=>m.x).reduce((a,b)=>Math.min(a,b))
           let r1= canvasApp.editor.list.map(m=>m.x+m.width).reduce((a,b)=>Math.max(a,b))
           let center=(r1-l1)/2+l1
           canvasApp.editor.list.forEach((m)=>{
                m.x=center-(m.width/2)
            })
            break;  

      case "top":
            let t= canvasApp.editor.list.map(m=>m.y).reduce((a,b)=>Math.min(a,b))
            canvasApp.editor.list.forEach((m)=>{
                m.y=t
            })
            break;
        case "bottom":
           let b= canvasApp.editor.list.map(m=>m.y+m.height).reduce((a,b)=>Math.max(a,b))
            canvasApp.editor.list.forEach((m)=>{
                m.y=b-m.height
            })
            break;  
        case "vcenter":
           let t1= canvasApp.editor.list.map(m=>m.y).reduce((a,b)=>Math.min(a,b))
           let b1= canvasApp.editor.list.map(m=>m.y+m.height).reduce((a,b)=>Math.max(a,b))
           let vcenter=(b1-t1)/2+t1
           canvasApp.editor.list.forEach((m)=>{
                m.y=vcenter-(m.height/2)
            })
            break;  
       case "hd":
            if(canvasApp.editor.list.length>=3){

                let minX=canvasApp.editor.element.x;
                let maxX=canvasApp.editor.element.x+canvasApp.editor.element.width;

                let eleWidth=0

                canvasApp.editor.list.forEach((m,index,list)=>{
                    eleWidth+=m.width
                })

                let space=(maxX-minX-eleWidth)/(canvasApp.editor.list.length-1)

                let listRect=canvasApp.editor.list;

                listRect.sort((a, b) => a.x+a.width - (b.x+b.width));

                let last=listRect[listRect.length-1]

                listRect.sort((a, b) => a.x - b.x);

                let first=listRect[0]

                let currentLeft=first.x

                listRect.forEach((m,index,list)=>{
                    if(currentLeft>last.x+last.width){
                        currentLeft=first.x
                    }
                    m.x=currentLeft
                    currentLeft+=m.width+space
                })
            }
          break;  
          case "vd":
            if(canvasApp.editor.list.length>=3){
                
                let minY=canvasApp.editor.element.y;
                let maxY=canvasApp.editor.element.y+canvasApp.editor.element.height;

                let eleHeight=0

                canvasApp.editor.list.forEach((m,index,list)=>{
                    eleHeight+=m.height
                })

                let space=(maxY-minY-eleHeight)/(canvasApp.editor.list.length-1)

                let listRect=canvasApp.editor.list;

                listRect.sort((a, b) => a.y+a.height - (b.y+b.height));

                let last=listRect[listRect.length-1]

                listRect.sort((a, b) => a.y - b.y);

                let first=listRect[0]

                let currentTop=first.y

                listRect.forEach((m,index,list)=>{
                    if(currentTop>last.y+last.height){
                        currentTop=first.y
                    }
                    m.y=currentTop
                    currentTop+=m.height+space
                })
            }
          break;  
     }
}





</script>


<style scoped>
   
   #main-right{
   position: absolute;
    top: 80px;
    right: 0px;
    background-color: white;
    padding: 20px;
    bottom: 0px;
    width: 350px;
    overflow: auto;
   box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  }

  :deep(.el-card__body .el-col){
    text-align: center;
  }

  :deep(.el-card__body .el-col:hover){
    background-color: #c8c8c8;
    border-radius: 5px;
  }

:deep(.btn-action-wrap){
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   width: 100%;
}


:deep(.btn-action-wrap .el-space__item){
   flex: 1;
}

:deep(.btn-action-group-wrap){
   display: flex;
   flex-direction: column;
   margin-top: 10px;
   width: 100%;
}
:deep(.btn-action-group-wrap .el-space__item){
   width: 100%;
}
</style>