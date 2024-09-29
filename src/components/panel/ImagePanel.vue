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
                <el-col :span="24">
                    <el-upload 
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
              <el-col :span="24"> 
                  <el-button @click="handleExportImg">
                    <i class="iconfont icon icon-xiazaitupian"></i>
                    {{$t('stylepanel.exportimg')}}
                  </el-button>
              </el-col>
          </el-row>

      </el-form-item>

      <el-form-item>
         <el-row :gutter="15">
            <el-col :span="24">
                <el-button @click="handleCrop">
                    <i class="iconfont icon icon-crop-full"></i>
                    {{$t("stylepanel.crop")}}
                </el-button>
            </el-col>
            <el-col :span="24"> 
                <el-button @click="handleCutout">
                    <i class="iconfont icon icon-AIkoutu"></i>
                    {{$t("stylepanel.cutout")}}
                    </el-button>
            </el-col>
               <el-col :span="24">
                <el-button @click="handleCreateBg">
                    <i class="iconfont icon icon-koutu"></i>
                    {{$t("stylepanel.createbg")}}
                  </el-button>
            </el-col>  


            <el-col :span="24">
                <el-button @click="handleCreateSketch">
                    <i class="iconfont icon icon-shengchenglunkuo"></i>
                    {{$t("stylepanel.createlineimg")}}
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
                <el-slider v-model="useImageStyle.corners"  :max="200"  :min="0" />
              </el-col>
              <el-col :span="6">
                 <el-input size="small" v-model="useImageStyle.corners"></el-input>
              </el-col>
            </el-row>

            
        </el-card>
      </el-form-item>
    </el-form>
    </div>
    <CreateBg v-model:dialogVisible="dialogVisible"  
   v-model:imageSrc="imgSrc" 
    @close-win="closeWin" 
     @update-image-src="updateBgImageDone"/>

   <CropperImg
      :image-src="imageCropSrc" 
      :sizeData="sizeData"
        :cropData="cropData"
        v-model:dialogCropVisible="dialogCropVisible" 
        @update-image-src="updateCropImageSrc" />


         <CutoutImg  
        v-model:dialogVisible="dialogCutVisible"  
         v-model:imageSrc="imageCutSrc"
           @update-image-src="updateCutImageDone"/>


           <CreateSketch  
             v-model:dialogVisible="dialogSketchVisible"  
              v-model:imageSrc="imageSketchSrc"
               @update-image-src="updateSketchDone"/>
</template>

<script setup lang="ts">

     import { onMounted, ref,watch} from 'vue'

     import {ElProgress,ElDialog,ElUpload,ElCard,ElMessage,ElRow,ElCol, ElForm,ElFormItem,ElButton,ElSlider,ElColorPicker,ElSpace,ElInputNumber  } from 'element-plus'

     import useEditStore from "@/stores/useEditStore"

     import {TImageSetting} from "@/stores/useEditStore"
    
     import { storeToRefs } from 'pinia'
     import { useI18n } from "vue-i18n"
     const { t } = useI18n()
     import type { UploadProps } from 'element-plus'
     const editorStore = useEditStore()

     import  ShortCut  from '@/components/widgets/ShortCut.vue'
     import  CreateBg  from '@/components/widgets/CreateBg.vue'
     import  CropperImg  from '@/components/widgets/CropperImg.vue'
     import  CutoutImg  from '@/components/widgets/CutoutImg.vue'

     import  CreateSketch  from  '@/components/widgets/CreateSketch.vue'


     import { mixins } from "@/mixin/index";

     const {useImageStyle} = storeToRefs(editorStore)

    
     const emit = defineEmits([
         'handleExportImg'
     ])

      let imgSrc=ref("")

      let dialogVisible=ref(false)


      const updateBgImageDone=(obj)=>{

          let canvasApp=editorStore.editor;
          useImageStyle.value.fill.url=obj.createBgImg
         canvasApp.editor.target.data.action="createbg"
          dialogVisible.value=false

     }




    const format=()=>{return ""}

     const handleCreateBg=()=>{
      
       dialogVisible.value=true
        imgSrc.value=editorStore.editor.editor.target?.fill?.url
      }

    const closeWin=()=>{
        dialogVisible.value=false
  }

     let sizeData=ref()
     let cropData=ref()
     let imageCropSrc=ref('')
     let dialogCropVisible=ref(false)

      const  handleCrop=()=>{

      let canvasApp=editorStore.editor;

       dialogCropVisible.value=true
       imageCropSrc.value=editorStore.editor.editor.target.data.original

      sizeData.value= canvasApp.editor.target.data.sizeData
       cropData.value= canvasApp.editor.target.data.cropData
    }


  //   //点击裁剪按钮
     const updateCropImageSrc = (updateImageData) => {
       let canvasApp=editorStore.editor;

        canvasApp.editor.target.data.sizeData=updateImageData.sizeData
       canvasApp.editor.target.data.cropData=updateImageData.cropData
       canvasApp.editor.target.data.action="crop" //裁剪不换原图

       useImageStyle.value.fill.url=updateImageData.croppedImage
       imageCropSrc.value=""

       dialogCropVisible.value=false


    }


   let dialogCutVisible=ref(false)
   let imageCutSrc=ref('')

   const  handleCutout=()=>{

     dialogCutVisible.value=true
     let canvasApp=editorStore.editor;
     imageCutSrc.value=canvasApp.editor.target.fill.url

   }

  const updateCutImageDone=(updateImageData)=>{

     let canvasApp=editorStore.editor;
      canvasApp.editor.target.data.action="cutout" 
      useImageStyle.value.fill.url=updateImageData.cutoutImg
     imageCutSrc.value=""

       dialogCutVisible.value=false
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
          ElMessage.error(t("stylepanel.imgsizemsg",{max:3}))//'Picture size can not exceed 3MB!'
          return false
        }

        if(window==window.parent){
          useImageStyle.value.fill.url=URL.createObjectURL(uploadFile.raw!)
          return false
        }

        mixins.uploadFile(rawFile,{}).then((data:string)=>{
          useImageStyle.value.fill.url=data
        }).catch((error)=>{
          ElMessage.error("Upload error")
        })

        return true
   }

    /*生成线稿*/
   let dialogSketchVisible=ref(false)
   let imageSketchSrc=ref('')

   const updateSketchDone=(updateImageData)=>{

      let canvasApp=editorStore.editor
      useImageStyle.value.fill.url=updateImageData.sketchImage
      imageSketchSrc.value=""
      dialogSketchVisible.value=false

   }
    
    const  handleCreateSketch=()=>{
       dialogSketchVisible.value=true
       let canvasApp=editorStore.editor;
       imageSketchSrc.value=canvasApp.editor.target.fill.url
    }
    

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