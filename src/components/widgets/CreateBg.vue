<template>
  
    <el-dialog  v-model="dialogVisible"
      :close-on-click-modal="false"
      :destroy-on-close="false"
      :append-to-body="true"
      :title="t('stylepanel.createbg')"
      width="800" 
      @cloesed="closeedCreateBgImg"
      @open="openedCreateBgImg"
>

     <div class="content"  v-loading="state.createing">

        <el-form label-position="left" label-width="auto">
            <el-space fill>
            <el-alert type="info" show-icon :closable="false">
                <p>
                "背景提示词"，各种语言都支持，但英文效果最好，字符串最高为1024。
                </p>
                <p>
                    图片内容: 必须是透明PNG图片，仅有前景。
                </p>
                <p>
                    消耗：每次成功调用，消耗3算粒
                </p>
            </el-alert>
            <el-form-item :style="{marginButtom:'0px'}" label="背景提示词">
                <el-row :gutter="20">
                <el-col :span="16">
                    <el-input v-model="state.prompt"/>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" :disbled="state.createing"  @click="createBg">生成背景</el-button>
                </el-col>
                </el-row>
            </el-form-item>
            </el-space>
        </el-form>
         <div v-show="state.rawImage"  class="c-compare scan-effect" 
          :style="{ width: state.offsetWidth ? state.offsetWidth + 'px' : '100%','--value':state.percent+'%' }">
            <img v-show="state.bgImage" class="c-compare__left" :src="state.bgImage" alt="结果图像"/>
            <img ref="raw" @load.once="onImageLoad" class="c-compare__right" :src="state.rawImage" alt="B/W" />
            <input type="range" v-show="state.bgImage" class="c-rng c-compare__range" min="0" max="100"  v-model="state.percent"
              />
            <div class="scroller scroller-top" v-show="state.bgImage"  :style="{left: state.percent+'%'}">
                <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <polygon points="0 50 37 68 37 32 0 50" style="fill:#FFAB91"></polygon>
                    <polygon points="100 50 64 32 64 68 100 50" style="fill:#FFAB91"></polygon>
                </svg>
            </div> 
        </div> 
    </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button  @click="close"> {{$t("canvas.cancel")}} </el-button>
                <el-button type="primary" @click="createBgImageDone">
                {{$t("canvas.confirm")}} 
                </el-button>
            </div>
        </template>
    </el-dialog>
  
  </template>
  <script setup  lang="ts">

    import {reactive,ref,nextTick,defineProps,computed} from "vue";

    import { useI18n } from "vue-i18n"
    const { t } = useI18n()


    import {mixins} from "@/mixin/index"
    import { ElMessage, ElMessageBox } from "element-plus";

    let dialogVisible= defineModel("dialogVisible",{type:Boolean})

    let imageSrc= defineModel("imageSrc",{type:String})

    const emit = defineEmits(['updateImageSrc','closeWin'])


    export type TImageCreateBgState = {
        show: boolean;
        rawImage: string;
        bgImage: string;
        offsetWidth: number;
        percent: number;
        progress: number;
        progressText: string;
        toolModel: boolean;
        loading: boolean;
        createing:boolean;
        prompt:string
   }
  
    const close = ()=>{
    // 请关闭弹框
    dialogVisible.value = false;

    }

   
   const state = reactive<TImageCreateBgState>({
        show: false,
        rawImage: "",//new URL("@/assets/koutu.png",import.meta.url).href,
        bgImage:"",//new URL("@/assets/createbg.png",import.meta.url).href,
        offsetWidth: 0,
        percent: 0,
        progress: 0,
        progressText: '',
        toolModel: true,
        loading: false,
        createing:false,
        prompt:''
   })

   let raw=ref(null);
  
    function  onImageLoad(){

        state.offsetWidth = (raw.value as HTMLElement).offsetWidth
    }

    const openedCreateBgImg=()=>{
        state.rawImage=imageSrc.value
        state.bgImage=''
        state.prompt=''
        state.percent=0
   }


   const  uploadCreateBgImg=async (fileUrl:string)=>{
        
        let formData=new FormData()
        
        formData.append("prompt",state.prompt)
        formData.append("fileUrl",fileUrl)
        
        state.createing=true
        return   fetch((window.parent as any).cutOutImg||'/BLL/TempHandler.ashx?action=CreateBg', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())

            // .then(data => {

                
            //     if(data.code==0){

            //         state.bgImage=data.data[0]

            //     }else{
                    
            //         ElMessageBox.alert(data.msg)
            //     }

            //     state.createing=false
            // }
            // )
            // .catch(error => 
            { 
                ElMessage.error("Create  Error!")
                state.createing=false
            }
        //);
    }


   const  createBg=async ()=>{

        state.createing=true
        state.percent=0
        state.bgImage=''

        // setTimeout(function(){
        //     state.bgImage=new URL("@/assets/createbg.png",import.meta.url).href
        //     requestAnimationFrame(run)

        //     state.createing=false
        // },3000)

        //上传后再生成背景
        if((state.rawImage  as any).startsWith("blob:")){

            state.createing=true

            var blobData=await mixins.loadImg(state.rawImage)

            var updata= await mixins.uploadFile(blobData as any ,{})

            .then(async (data)=>{
                let url= (window.parent as any).cutOutImg?data.response.ImgPath:data.data.fileUrl
                return url;
            }).catch((error)=>{
                state.createing=false
                console.error(error)
            })

            let result=await  uploadCreateBgImg(updata).catch((error)=>{
                    state.createing=false
                    console.error(error)
            })

            state.bgImage=result.data[0]

            requestAnimationFrame(run)

            state.createing=false

        }else{
            //直接生成背景
            state.createing=true
            let result=await   uploadCreateBgImg(state.rawImage as string)

            state.bgImage=result.data[0]

            requestAnimationFrame(run)

            state.createing=false
        }
   }
   
   const run = () => {
        state.percent += 1
        state.percent < 100 ? requestAnimationFrame(run) : ''
    }

    const closeedCreateBgImg=()=>{
        state.bgImage=''
        state.rawImage=''
    }

   

    const createBgImageDone = () => {

        emit('updateImageSrc', {
              createBgImg:state.bgImage
        });
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