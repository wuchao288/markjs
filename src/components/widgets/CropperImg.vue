<template>
  
  <el-dialog v-model="dialogCropVisible" :close-on-click-modal="false" :destroy-on-close="false" :title="t('stylepanel.crop')"
     :width="800" 
      @closed="closedCropImg"  @opened="openedCropImg">
    <div v-loading="state.isUploading">
     <img ref="imageRef" :src="imageSrc"   alt="image" style="object-fit: contain;">
    </div>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogCropVisible = false"> {{$t("canvas.cancel")}} </el-button>
            <el-button type="primary" @click="cropImage">
            {{$t("canvas.confirm")}} 
            </el-button>
        </div>
        </template>
    </el-dialog>

</template>

<script setup  lang="ts">
  import {ref, onMounted,toRaw,nextTick} from "vue";
  import Cropper from 'cropperjs';
  import "cropperjs/dist/cropper.css";
  import { useI18n } from "vue-i18n"
  const { t } = useI18n()

  import {mixins} from "@/mixin/index"


  const props = defineProps({
    sizeData:{
      type:Object
    },
    cropData:{
      type:Object
    },
    //图片地址
    imageSrc: {
      type: String,
      required: true
    },
    //aspectRatio:置裁剪框为固定的宽高比
    aspectRatio: {
      type: Number,
      default: NaN,
    },
    //viewMode: 视图控制
    viewMode: {
      type: Number,
      default: 1,
    },
    //autoCropArea: 设置裁剪区域占图片的大小 值为 0-1 默认 0.8 表示 80%的区域
    autoCropArea: {
      type: Number,
      default: 0.8,
    },
  })
  //绑定图片的dom对象
  const imageRef = ref(null)

  let state={
    isUploading:false
  }

  let dialogCropVisible=defineModel("dialogCropVisible")

  let cropper = null;
  //使用Cropper构造函数创建裁剪器实例，并将图片元素和一些裁剪选项传入
  onMounted(() => {
    
  });

 const openedCropImg=()=>{

  let sizeData=(toRaw(props.sizeData))
  let cropData=(toRaw(props.cropData))
debugger
  console.info("openedCropImg")

  nextTick(()=>{
     cropper = new Cropper(imageRef.value, {
      aspectRatio: props.aspectRatio,
      viewMode: props.viewMode,
      autoCropArea:props.autoCropArea,
      scalable:false,
      rotatable:false,
      movable:false,
      //cropped:true,
      zoomOnTouch:false,
      zoomOnWheel:false,
      //initialCropBoxData:cropData,
      //initialImageData:sizeData
    });

    setTimeout(()=>{
    if(sizeData){
      cropper.setData(sizeData)
    }
    if(cropData){
      cropper.setCropBoxData(cropData)
    }
   },50)
  })

    
   

   

    
 }

 const closedCropImg=()=>{
  cropper.destroy()
 }

  //定义方法
  const emit = defineEmits(['updateImageSrc'])
  //在cropImage函数中，获取裁剪后的图片数据URL，并使用emit方法触发updateImageSrc事件，
  // 将裁剪后的图片数据URL传递给父组件。
  const cropImage =async () => {
      state.isUploading=true
      const canvas = cropper.getCroppedCanvas();
      let cropData=  cropper.getCropBoxData()
      const sizeData = cropper.getData();
      //const croppedImage = canvas.toDataURL();

      cropper.getCroppedCanvas().toBlob(async (blob) => {

        var croppedImage= await mixins.uploadFile(blob as any ,{})
              
        .then(async (data)=>{
            let url= (window.parent as any).cutOutImg?data.response.ImgPath:data.data.fileUrl
            return url;
        }).catch((error)=>{
            state.isUploading=false
            console.error(error)
        })

        state.isUploading=false

        emit('updateImageSrc', {
          croppedImage,
          sizeData,
          cropData
        });

      })

  }




</script>
