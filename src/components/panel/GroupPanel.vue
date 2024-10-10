<template>
     <div id="main-right" >

        <el-form
            class="form"
            label-position="top"
            label-width="50px"
            >

            <el-form-item>
                <!-- <ShortCut v-model:="state.locked"></ShortCut> -->


                <el-space wrap class="btn-action-group-wrap">
                    <el-button size="large" :disabled="state.isGroup" @click="toGroup" class="gda-btn-action">{{$t("canvas.togroup")}}</el-button>
                    <el-button size="large" :disabled="!state.isGroup" @click="toUnGroup" class="gda-btn-action">{{$t("canvas.ungroup")}}</el-button>
                </el-space>

            </el-form-item>


            
          <el-form-item :label="t('canvas.align')">
            <el-card  style="width: 100%;" shadow="never" :body-class="'gda-btn-action'"  :body-style="{padding:'10px'}">
            
                <el-row>
                    <el-col :span="4" >
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.leftalign')"
                        placement="top"
                        >
                        <el-link  :disabled="state.isGroup"  :underline="false" @click="setAlgin('left')" >
                            <i class="iconfont icon8 icon-duiqi-zuoduiqi" ></i>
                            </el-link>
                     </el-tooltip>

                  </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.centeralign')"
                        placement="top"
                        >
                        <el-link   :disabled="state.isGroup"  :underline="false" @click="setAlgin('center')" >  
                            <i class="iconfont icon8 icon-duiqi-juzhongduiqi"></i>
                        </el-link>
                    </el-tooltip>
                </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.rightalign')"
                        placement="top"
                        >
                    <el-link  :disabled="state.isGroup"  :underline="false" @click="setAlgin('right')" >  
                        <i class="iconfont icon8 icon-duiqi-youduiqi"></i>
                    </el-link>
                </el-tooltip>

            </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.topalign')"
                        placement="top"
                        >
                        <el-link  :disabled="state.isGroup"   :underline="false" @click="setAlgin('top')"  >
                            <i class="iconfont icon8 icon-duiqi-shangduiqi" ></i>
                            </el-link>
                        </el-tooltip>
                    </el-col>
                        <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.middlealign')"
                        placement="top"
                        >
                    <el-link  :disabled="state.isGroup"  :underline="false" @click="setAlgin('vcenter')"   >  
                        <i class="iconfont icon8 icon-duiqi-chuizhiduiqi"></i>
                    </el-link>
                </el-tooltip>
            </el-col>
                  <el-col :span="4">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="t('canvas.bottomalign')"
                        placement="top"
                        >
                        <el-link  :disabled="state.isGroup"   :underline="false" @click="setAlgin('bottom')"   >  
                            <i class="iconfont icon8 icon-duiqi-xiaduiqi"></i>
                        </el-link>
                    </el-tooltip> </el-col>
                </el-row>
                </el-card>
    
                <el-space wrap class="btn-action-wrap">
                    <el-button  size="large" :disabled="useSelect<3&&state.isGroup==false" @click="setAlgin('hd')" class="gda-btn-action">{{$t('canvas.horizontaldis')}}</el-button>
                    <el-button size="large" :disabled="useSelect<3&&state.isGroup==false"  @click="setAlgin('vd')"  class="gda-btn-action">{{$t('canvas.verticaldis')}}</el-button>
                </el-space>
                
              
          </el-form-item>
      </el-form>

    </div>
</template>
<script lang="ts" setup>

import { ElForm,ElFormItem,ElCard,ElButton,ElRow,ElCol,ElTooltip,ElLink,ElSpace} from 'element-plus'

import { useI18n } from "vue-i18n"
const { t } = useI18n()

import { ref,onActivated,watch } from 'vue';
import { App } from 'leafer-ui';


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
    canvasApp.tree.findOne("Frame").emit('update',{})
}

const toUnGroup=()=>{
    if(canvasApp.editor.multiple==false){
        canvasApp.editor.ungroup()
    }

    canvasApp.tree.findOne("Frame").emit('update',{})
}

const setAlgin=(placement)=>{

    console.info(canvasApp.editor.element)

     switch (placement) {
        case "left":
           
            //let l= canvasApp.editor.list.map(m=>m.x).reduce((a,b)=>Math.min(a,b))

            let l=canvasApp.editor.element.x
            canvasApp.editor.list.forEach((m)=>{
                m.x=l
            })
            break;
        case "right":
           //let r= canvasApp.editor.list.map(m=>m.x+m.width).reduce((a,b)=>Math.max(a,b))
            let r=canvasApp.editor.element.x+canvasApp.editor.element.width
            canvasApp.editor.list.forEach((m)=>{
                m.x=r-m.width
            })
            break;  
        case "center":

           //let l1= canvasApp.editor.list.map(m=>m.x).reduce((a,b)=>Math.min(a,b))
           //let r1= canvasApp.editor.list.map(m=>m.x+m.width).reduce((a,b)=>Math.max(a,b))

           let l1=canvasApp.editor.element.x
           let r1=canvasApp.editor.element.x+canvasApp.editor.element.width

           let center=(r1-l1)/2+l1
           canvasApp.editor.list.forEach((m)=>{
                m.x=center-(m.width/2)
            })
            break;  

      case "top":
            //let t= canvasApp.editor.list.map(m=>m.y).reduce((a,b)=>Math.min(a,b))

            let t=canvasApp.editor.element.y

            canvasApp.editor.list.forEach((m)=>{
                m.y=t
            })
            break;
        case "bottom":
            //let b= canvasApp.editor.list.map(m=>m.y+m.height).reduce((a,b)=>Math.max(a,b))

            let b=canvasApp.editor.element.y+canvasApp.editor.element.height

            canvasApp.editor.list.forEach((m)=>{
                m.y=b-m.height
            })
            break;  
        case "vcenter":

           let t1=canvasApp.editor.element.y
           let b1=canvasApp.editor.element.y+canvasApp.editor.element.height

        //    let t1= canvasApp.editor.list.map(m=>m.y).reduce((a,b)=>Math.min(a,b))
        //    let b1= canvasApp.editor.list.map(m=>m.y+m.height).reduce((a,b)=>Math.max(a,b))

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
     canvasApp.editor.updateEditBox()
     canvasApp.tree.findOne("Frame").emit('update',{})
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
    width: 280px;
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