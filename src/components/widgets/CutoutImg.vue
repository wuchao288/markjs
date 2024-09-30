<template>
  
  <el-dialog  v-model="dialogVisible"
    :close-on-click-modal="false"
    :destroy-on-close="false"
    :append-to-body="true"
    :title="t('stylepanel.cutout')"
    width="800" 
    @cloesed="closeedCreateBgImg"
    @open="openedCreateBgImg"
>

   <div class="content"  v-loading="state.createing">

      <el-form label-position="left" label-width="auto">
          <el-space fill>
          <el-alert type="info" show-icon :closable="false">
              <p>
                  <!-- 消耗：每次消耗1算粒 -->
              </p>
          </el-alert>
          <el-form-item :style="{marginButtom:'0px'}" >
              <el-row :gutter="20">
                  <el-col :span="8">
                      <el-button type="primary" :disbled="state.createing"  @click="CutCouImg">{{$t("canvas.startcut")}}</el-button>
                  </el-col>
              </el-row>
          </el-form-item>
          </el-space>
      </el-form>
       <div v-show="state.rawImage"  class="c-compare scan-effect" 
        :style="{ width: state.offsetWidth ? state.offsetWidth + 'px' : '100%','--value':state.percent+'%' }">
          <img v-show="state.cutImage" class="c-compare__left" :src="state.cutImage" alt="result img"/>
          <img ref="raw" @load.once="onImageLoad" class="c-compare__right" :src="state.rawImage" alt="B/W" />
          <input type="range" v-show="state.cutImage" class="c-rng c-compare__range" min="0" max="100"  v-model="state.percent"
            />
          <div class="scroller scroller-top" v-show="state.cutImage"  :style="{left: state.percent+'%'}">
              <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="0 50 37 68 37 32 0 50" style="fill:#FFAB91"></polygon>
                  <polygon points="100 50 64 32 64 68 100 50" style="fill:#FFAB91"></polygon>
              </svg>
          </div> 
      </div> 
  </div>
      <template #footer>
          <div class="dialog-footer">
            
              <el-button v-show="state.cutImage" type="primary" @click="edit">
                {{$t("canvas.startedit")}}
              </el-button>
              <!-- <el-button  @click="close"> {{$t("canvas.cancel")}} </el-button> -->
              <el-button type="primary"  @click="cutOutImageDone">
                 {{$t("canvas.confirm")}} 
              </el-button>
          </div>
      </template>

      <ImageExtraction ref="matting" />
  </el-dialog>

</template>
<script setup  lang="ts">

  import {reactive,ref} from "vue";

  import { useI18n } from "vue-i18n"
  const { t } = useI18n()
  import ImageExtraction from '../widgets/ImageExtraction/index.vue'

  import {mixins} from "@/mixin/index"
  import { ElMessage } from "element-plus";

  let dialogVisible= defineModel("dialogVisible",{type:Boolean})

  let imageSrc= defineModel("imageSrc",{type:String})

  const emit = defineEmits(['updateImageSrc'])


  export type TImageCreateBgState = {
      show: boolean;
      rawImage: string;
      cutImage: string;
      offsetWidth: number;
      percent: number;
      progress: number;
      progressText: string;
      toolModel: boolean;
      loading: boolean;
      createing:boolean
 }
 const matting = ref<typeof ImageExtraction | null>(null)
  const close = ()=>{
  // 请关闭弹框
  dialogVisible.value = false;

  }

  const edit = () => {
  if (!matting.value) return
  matting.value.open(state.rawImage, state.cutImage, (base64: string) => {
        state.cutImage = base64
        state.percent = 0
        requestAnimationFrame(run)
  })
}
 
 const state = reactive<TImageCreateBgState>({
      show: false,
      rawImage: "",//new URL("@/assets/koutu.png",import.meta.url).href,
      cutImage:"",//new URL("@/assets/createbg.png",import.meta.url).href,
      offsetWidth: 0,
      percent: 0,
      progress: 0,
      progressText: '',
      toolModel: true,
      loading: false,
      createing:false
 })

 let raw=ref(null);

  function  onImageLoad(){

      state.offsetWidth = (raw.value as HTMLElement).offsetWidth
  }

  const openedCreateBgImg=()=>{
      state.rawImage=imageSrc.value
      state.cutImage=''
      state.percent=0
 }


 const  uploadCutOutImg=async (fileUrl:string)=>{
      
      let formData=new FormData()
      
      formData.append("fileUrl",fileUrl)
      
      state.createing=true

      let cutdata= await  fetch((window.parent as any).cutOutImg||'/BLL/TempHandler.ashx?action=CutOutImg', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())

      if(cutdata.code==0){

        state.cutImage=cutdata.data[0]
        requestAnimationFrame(run)
        state.createing=false

      } else{
         ElMessage.error(cutdata.msg)
      }
  }


 const  CutCouImg=async ()=>{

      state.createing=true
      state.percent=0
      state.cutImage=''


      //上传后再生成
      if((state.rawImage  as any).startsWith("blob:")){

          state.createing=true

          var blobData=await mixins.loadImg(state.rawImage)

          var rurl= await mixins.uploadFile(blobData as any ,{}).catch((error)=>{
              state.createing=false
              console.error(error)
          })

          await  uploadCutOutImg(rurl).catch((error)=>{
                  state.createing=false
                  console.error(error)
                  ElMessage.error("Cut Out Error!")
          })

      }else{
          //直接生成背景
         
          await  uploadCutOutImg(state.rawImage as string).catch((error)=>{
                  state.createing=false
                  console.error(error)
                  ElMessage.error("Cut Out Error!")
          })
      }
 }
 
 const run = () => {
      state.percent += 1
      state.percent < 100 ? requestAnimationFrame(run) : ''
  }

  const closeedCreateBgImg=()=>{
      state.cutImage=''
      state.rawImage=''
      state.percent=0
  }

 

  const cutOutImageDone = () => {
      if(state.cutImage!=""){
          emit('updateImageSrc', {
              cutoutImg:state.cutImage
        });
      }
      dialogVisible.value=false
  }
</script>

<style scoped  lang="less">
  .content {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;

  }
  .scan-effect {
      position: relative;
      //height: 50vh;
      overflow: hidden;
      background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%), linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
      background-position: 0 0, 14px 14px;
      background-size: 28px 28px;
      img {
          height: 100%;
          object-fit: contain;
          position: absolute;
      }
 }

:deep(.el-space__item:last-of-type .el-form-item){
  margin-bottom: 0px;
}
  .c-compare {
--h: 9;
--m: 1rem 0;
--w: 16;
--thumb-bgc: #FFAB91;
--thumb-bgc-focus: hsla(0, 70%, 70%, 0.7);
--thumb-w: 0.3rem;

margin: var(--m);
position: relative;
}
.c-compare::after {
content: "";
display: block;
padding-bottom: calc((var(--h) / var(--w)) * 100%);
}
.c-compare__left,
.c-compare__right {
height: 100%;
object-fit: contain;
position: absolute;
width: 100%;
}
.c-compare__left {
clip-path: polygon(0% 0%, var(--value) 0%, var(--value) 100%, 0% 100%);
}
.c-compare__right {
clip-path: polygon(100% 0%, var(--value) 0%, var(--value) 100%, 100% 100%);
}
.c-compare__range {
background-color: transparent;
box-sizing: border-box;
font-family: inherit;
height: 100%;
margin: 0;
outline: none;
position: absolute;
top: 0;
width: 100%;
}
.c-compare__range::-moz-range-thumb {
background-color: var(--thumb-bgc);
cursor: ew-resize;
height: 100%;  
width: var(--thumb-w);
}
.c-compare__range::-webkit-slider-thumb {
background-color: var(--thumb-bgc);
cursor: ew-resize;
height: 100%;  
width: var(--thumb-w);
}
.c-compare__range:focus::-webkit-slider-thumb {
background-color: var(--thumb-bgc-focus);
box-shadow: 0 0 0 3px var(--thumb-bgc);
}
.c-compare__range:focus::-moz-range-thumb {
background-color: var(--thumb-bgc-focus);
box-shadow: 0 0 0 3px var(--thumb-bgc);
}
.c-compare__range::-moz-range-track {
background: transparent;
background-size: 100%;
box-sizing: border-box;
}
.c-compare__range::-webkit-slider-runnable-track {
background: transparent;
background-size: 100%;
box-sizing: border-box;
height: 100%;
}
.c-compare__range,
.c-compare__range::-webkit-slider-runnable-track,
.c-compare__range::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
}
.scroller {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%) translateX(-25px);
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.9;
  transition: opacity 0.12s ease-in-out;
  pointer-events: auto;
  cursor: pointer;
  box-shadow: 3.5px 0px 7px rgba(100, 100, 100, 0.2);
  pointer-events: none;
}

.scroller-top>.scroller__thumb {
  border: 5px solid #FFAB91;
}

.scroller__thumb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 7px;
}
</style>