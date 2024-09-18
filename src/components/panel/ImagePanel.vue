<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="50px"
    >

    <el-form-item :label="t('stylepanel.size')">
        <el-space>
          <el-input-number style="width: 100px;" v-model="useImageStyle.width" controls-position="right" />
          <el-input-number style="width: 100px;"  v-model="useImageStyle.height"  controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item>
      
      <ShortCut v-model:visible="useImageStyle.visible" v-model:="useImageStyle.locked"></ShortCut>
    </el-form-item>
      <el-form-item  :label="t('stylepanel.set')">
      

          <el-row :gutter="10">
                <el-col :span="12">
                  <el-upload style="width: 100%;"
                    ref="uploadRef" 
                    class="upload-demo"
                    :show-file-list="false"
                    :auto-upload="false"
                    :on-change="handleAvatarSuccess"
                  >
                    <template #trigger>
                      <el-button> 
                        <span class="iconfont icon icon-tupianshangchuan"></span> 
                        {{$t('stylepanel.replaceimg')}}
                        </el-button>
                    </template>
              </el-upload>
            </el-col>
              <el-col :span="12"> 
                  <el-button @click="handleExportImg">
                    <i class="iconfont icon icon-xiazaitupian"></i>
                    {{$t('stylepanel.exportimg')}}
                  </el-button>
              </el-col>
          </el-row>

      </el-form-item>

      <el-form-item>
         <el-row :gutter="10">
            <el-col :span="8">
                <el-button @click="handleCrop">
                    <i class="iconfont icon icon-crop-full"></i>
                    {{$t("stylepanel.crop")}}
                </el-button>
            </el-col>
            <el-col :span="8"> 
                <el-button @click="handleCutout">
                    <i class="iconfont icon icon-AIkoutu"></i>
                    {{$t("stylepanel.cutout")}}
                    </el-button>
            </el-col>
            <el-col :span="8">
                <el-button @click="handleFilter">
                    <i class="iconfont icon icon-koutu"></i>
                    {{$t("stylepanel.filter")}}
                  </el-button>
            </el-col>
         </el-row>
      </el-form-item>
      

      <el-form-item>
        <el-card style="width: 100%;" shadow="never" :body-style="{padding:'10px'}">

            <el-row :gutter="10">
               <el-col :span="6">
                {{$t('stylepanel.opacity')}}
               </el-col>

               <el-col :span="12">
                <el-slider v-model="useImageStyle.opacity"  :max="1" :step="0.1"   :min="0" />
              </el-col>
              <el-col :span="6">
                 <el-input size="small" v-model="useImageStyle.opacity"></el-input>
              </el-col>
            </el-row>

            <el-row :gutter="10">
               <el-col :span="6">
                {{$t('stylepanel.cornerradius')}}
               </el-col>

               <el-col :span="12">
                <el-slider v-model="useImageStyle.corners"  :max="20"  :min="0" />
              </el-col>
              <el-col :span="6">
                 <el-input size="small" v-model="useImageStyle.corners"></el-input>
              </el-col>
            </el-row>

            
        </el-card>
      </el-form-item>
    </el-form>
    </div>

</template>

<script setup lang="ts">

    import { ref} from 'vue'

    import {ElProgress,ElDialog,ElUpload,ElCard,ElMessage,ElRow,ElCol, ElForm,ElFormItem,ElButton,ElSlider,ElColorPicker,ElSpace,ElInputNumber  } from 'element-plus'

    import useEditStore from "@/stores/useEditStore"

    import {TImageSetting} from "@/stores/useEditStore"
    
    import { storeToRefs } from 'pinia'
    import { useI18n } from "vue-i18n"
    const { t } = useI18n()
    import type { UploadProps } from 'element-plus'
    const editorStore = useEditStore()

    import  ShortCut  from '@/components/widgets/ShortCut.vue'

    import { mixins } from "@/mixin/index";
    
    const emit = defineEmits([
        'handleCutOut','handleCropImg','handleExportImg'
    ])



    const format=()=>{return ""}



    type TState = {
      activeNames: string[],
      innerElement: TImageSetting,
      tag: boolean,
      ingoreKeys: string[],
      fontSizeList: number[],
      fontClassList: Record<string, any>, 
      lineHeightList: number[],
      letterSpacingList: number[]
  }


  const handleAvatarSuccess: UploadProps['onChange'] = (
        uploadFile
      ) => {

        if(uploadFile.raw==undefined){
          ElMessage.error(t("stylepanel.formatmsg"))//Picture must be JPG/PNG format!
          return false
        }

        let rawFile=(uploadFile.raw);
        
        if (rawFile.type !== 'image/jpeg'&&rawFile.type !== 'image/png') {
          ElMessage.error(t("stylepanel.formatmsg"))//'Picture must be JPG/PNG format!'
          return false
        } else if (rawFile.size / 1024 / 1024 > 3) {
          ElMessage.error(t("stylepanel.imgsizemsg",3))//'Picture size can not exceed 3MB!'
          return false
        }

        if(window==window.parent){
          useImageStyle.value.fill.url=URL.createObjectURL(uploadFile.raw!)
          return
        }

        mixins.uploadFile(rawFile,{}).then((data)=>{
          if((data as any).code==0){
            useImageStyle.value.fill.url = (window.parent as any).sploadImgToTempdes?(data as any).response.ImgPath:(data as any).data.fileUrl
          }else{
            ElMessage.error((data as any).msg)
          }
        }).catch((error)=>{
          ElMessage.error("Upload error")
        })

        return true
   }


  const {useImageStyle} = storeToRefs(editorStore)

    const predefineColors = ref([
      '#ff4500',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgba(255, 69, 0, 0.68)',
      'rgb(255, 120, 0)',
      'hsv(51, 100, 98)',
      'hsva(120, 40, 94, 0.5)',
      'hsl(181, 100%, 37%)',
      'hsla(209, 100%, 56%, 0.73)',
      '#c7158577',
      '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321',
      '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2',
      '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF',
      'rgba(0,0,0,0)'
   ])


   

   const  handleExportImg=()=>{
      emit("handleExportImg")
   }

   const  handleCrop=()=>{
      emit("handleCropImg")
   }

   const  handleCutout=()=>{
     emit("handleCutOut")

   }

   const  handleFilter=()=>{
    
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

</style>