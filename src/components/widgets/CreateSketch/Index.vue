<template>
  
    <el-dialog  v-model="dialogVisible"
      :close-on-click-modal="false"
      :destroy-on-close="false"
      :append-to-body="true"
      :title="t('stylepanel.createlineimg')"
      width="1024" 
      @cloesed="closeed"
      @open="opened"
>
     <el-row class="el-row" style="overflow: hidden;">
        <el-col class="el-col"  :span="18">

            <div v-show="state.rawImage" :loading="state.createing"  class="c-compare scan-effect" 
          :style="{ width: state.offsetWidth ? state.offsetWidth + 'px' : '100%','--value':state.percent+'%' }">
          
            <!-- <img ref="sketch" @load.once="onImageLoad" class="c-compare__right" :src="state.rawImage" alt="B/W" /> -->
            <!-- <img ref="sketch" v-show="state.rawImage"  class="c-compare__left"   :src="state.rawImage" alt="result"/>
            <canvas ref="outSketch" style="max-width: 100%;" class="c-compare__right"></canvas> -->

            <canvas ref="outSketch"  class="c-compare__left"  alt="result"></canvas>
            <img ref="sketch" @load.once="onImageLoad" class="c-compare__right" :src="state.rawImage" alt="B/W" />

            <input type="range" v-show="state.rawImage" class="c-rng c-compare__range" min="0" max="100"  v-model="state.percent"
              />
            <div class="scroller scroller-top" v-show="state.rawImage"  :style="{left: state.percent+'%'}">
                <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <polygon points="0 50 37 68 37 32 0 50" style="fill:#FFAB91"></polygon>
                    <polygon points="100 50 64 32 64 68 100 50" style="fill:#FFAB91"></polygon>
                </svg>
            </div> 
        </div> 
            <!-- <div class="preview-box" data-runing="true">

                <img ref="sketch" v-show="state.rawImage" :style="sizeStyle"  :src="state.rawImage" alt="result"/>
                
                <canvas ref="outSketch" 
                    :style="sizeStyle" style="max-width: 100%;"></canvas>
                </div> -->

      </el-col>
        <el-col class="el-col el-col-form"  :span="6">
            
            <el-form
              class="form"
              label-position="top"
              label-width="50px"
            >
           
                <el-form-item>
                    <el-radio-group v-model="style.convoluteName">
                        <el-radio v-for="(value,key,index) in Convolutes"  :label="label[key]" :value="key" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-space>
                        <el-switch
                        v-model="style.denoise" @change="_louvre(50)"
                        :active-text="t('canvas.jianggao')"
                    />
               
                <el-switch
                    v-model="style.kuma"
                    active-text="Kiss" @change="_louvre(50)"
                /> </el-space>
          
                    <!-- <ui-switch v-model="state.denoise" @input="_louvre(50)">降噪</ui-switch>
					<ui-switch v-model="state.kuma" @input="_louvre(50)">Kiss</ui-switch> -->
					<!-- <ui-switch v-model="style.shade" :disabled="!style.kuma" @input="_louvre(50)">调子</ui-switch> -->
					<!-- <ui-switch v-model="state.watermark" @input="_louvre(50)">水印</ui-switch>
					<ui-switch v-model="state.hajimei" :disabled="!style.watermark" @input="_louvre(50)">初回</ui-switch> -->
                </el-form-item>
               
                <el-form-item :label="t('canvas.xianjiqz')">
                    <el-slider v-model="style.darkCut" :min="20" :max="200" :step="1"/>
                </el-form-item>

                <el-form-item :label="t('canvas.xiandzsl')">
                    <el-slider v-model="style.shadeLimit" :min="20" :max="200" :step="1"/>
                </el-form-item>
           </el-form>
        </el-col>
     </el-row>
   
        <template #footer>
            <div class="dialog-footer">
                <el-button  @click="close"> {{$t("canvas.cancel")}} </el-button>
                <el-button type="primary"  :loading="state.uploading"  @click="createBgImageDone">
                {{$t("canvas.confirm")}} 
                </el-button>
            </div>
        </template>
    </el-dialog>
  
  </template>



  <script setup  lang="ts">

    import {reactive,ref,nextTick,defineProps,computed,markRaw ,watch} from "vue"

    import { util } from "@/components/widgets/CreateSketch/method"

    import { useI18n } from "vue-i18n"

    import { mixins } from "@/mixin/index"

    import { ElMessage } from "element-plus"

    import  clearblankimg from "@/components/widgets/CreateSketch/clearBlank"


    const { t } = useI18n()


    let dialogVisible= defineModel("dialogVisible",{type:Boolean})

    let imageSrc= defineModel("imageSrc",{type:String})

    const emit = defineEmits(['updateImageSrc','closeWin'])

    let sketch=ref<HTMLImageElement>()

    let outSketch=ref<HTMLCanvasElement>()

    export type TImageCreateBgState = {
        show: boolean;
        rawImage: string;
        sketchImage: string;
        offsetWidth: number;
        percent: number;
        progress: number;
        progressText: string;
        toolModel: boolean;
        loading: boolean;
        createing:boolean;
        T:number;
        uploading:boolean
   }
  
    const close = ()=>{
    // 请关闭弹框
    dialogVisible.value = false;

    }

    let label={
        jixi:t('canvas.jixi'),
        jingxi: t('canvas.jingxi'),
        yiban: t('canvas.yiban'),
        shaochu: t('canvas.shaochu'),
        chaochu: t('canvas.chaochu'),
        jichu:  t('canvas.jichu'),
        fudiao: t('canvas.fudiao'),
        xiaogao: t('canvas.xiaogao')
    }
    const creatConvoluteAverage = (w)=>new Array(w*w).fill(1/(w*w))
    const Convolutes = {
	// '右倾': [
	// 	0, -1, 0,
	// 	-1, 2, 2,
	// 	0, -1, 0
	// ],
	// '左倾': [
	// 	0, -1, 0,
	// 	3, 2, -2,
	// 	0, -1, 0
	// ],
    jixi:   creatConvoluteAverage(3),
	jingxi:  creatConvoluteAverage(5),
	yiban:  creatConvoluteAverage(7),
	shaochu:  creatConvoluteAverage(9),
	chaochu:  creatConvoluteAverage(11),
	jichu:  creatConvoluteAverage(13),
	// '12421': [
	// 	-3,2,-3,
	// 	 2,4, 2,
	// 	-3,2,-3,
	// ],
	// '9,-1,8': [
	// 	-1 ,-1 ,-1 ,
	// 	-1 , 9 ,-1 ,
	// 	-1 ,-1 ,-1 ,
	// ],
	// '25,-1,24':creatConvoluteCenterHigh(5,24),
	// '25,-1,25': creatConvoluteCenterHigh(5,25),
	// '25,-1,26': [
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , 26 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// ],
	// '-1,0,16': [
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 ,  0 ,  0 ,  0 , -1 ,
	// 	-1 ,  0 , 17 ,  0 , -1 ,
	// 	-1 ,  0 ,  0 ,  0 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// ],
	fudiao: [
		1, 1, 1,
		1, 1, -1,
		-1, -1, -1
	],
	xiaogao:  null,
}

    const style = ref({
        zoom:1,
        light:0,
        shadeLimit: 108,
        shadeLight: 80,
        // s:80,
        // l:50,
        shade: false,
        kuma: false,
        hajimei: false,
        watermark: false,
        convoluteName: 'yiban',
        convolute1Diff: true,
        convoluteName2: null,
        Convolutes,
        // contrast: 30,
        // invertLight: false,
        // hue:false,
        // hueGroup: 255,
        // lightGroup: 1,
        lightCut: 128,
        darkCut: 118,
        denoise: true,
    })

    const run = () => {
        if(state.percent>=100){
           return false
        }
        state.percent += 1
        state.percent < 100 ? requestAnimationFrame(run) : ''
    }

    const louvre=async ()=>{
        state.createing = true;
        
        await nextTick(async ()=>{
            await util.louvre({
                img:sketch.value,
                outputCanvas:outSketch.value,
                config:{
                    ...style.value,
                    Convolutes
                }
            })
            state.createing = false;
            run()
        })
    }

    const maxPreviewWidth = Math.min(800,document.body.offsetWidth);
    let previewWidth = maxPreviewWidth;
    let previewHeight = Math.round(previewWidth * 0.593);

    const defaultImageURL = ref("")
    const convolutes = Object.keys(Convolutes);
    const data = ref({
        src: defaultImageURL,
        defaultImageURL,
        style:style.value,
        runing: true,
        convolutes,
        diff: false,
        output: '',
        downloadFilename: '[One-Last-Image].jpg',
        previewWidth,
        previewHeight,
        loading: true,
        bevelPosition:20,
  })


    const setImageAndDraw=async ()=>{
        
        const img  = sketch.value;
        const { naturalWidth, naturalHeight } = img;
        
        const previewWidth = Math.min(maxPreviewWidth, naturalWidth);
        const previewHeight = Math.floor(previewWidth / naturalWidth * naturalHeight);

        data.value.previewWidth = previewWidth;
        data.value.previewHeight = previewHeight;


        await louvre();
	}

    //https://lab.magiconch.com/one-last-image/
    const init= ()=>{
        state.createing = false;
        util.louvreInit( ()=>{
            sketch.value.onload = setImageAndDraw;
            if(sketch.value.complete) sketch.value.onload();
        });
   }

    const _louvre=(ms=300)=>{
        state.createing = true
        clearTimeout(state.T)
        state.T = setTimeout(louvre,ms) as any
    }


    const sizeStyle=computed(()=>{
        return {
				width: `${data.value.previewWidth}px`,
				height: `${data.value.previewHeight}px`,
			}
    })

    const isDefaultImageURL=computed(()=>{
        return state.rawImage !== defaultImageURL.value
    })

    const creatConvoluteCenterHigh = (w,centerV)=>{
	const arr = [];
	const c = Math.floor((w*w)/2);

	for(let x = 0; x < w; x++){
		for(let y = 0; y < w; y++){
			let i = x * w + y;
			arr[i] = -1;

			if(i===c){
				arr[i] = centerV;
			}
		}
	}
	return arr;
}



   
   const state = reactive<TImageCreateBgState>({
        show: false,
        rawImage: "",//new URL("@/assets/koutu.png",import.meta.url).href,
        sketchImage:"",//new URL("@/assets/createbg.png",import.meta.url).href,
        offsetWidth: 0,
        percent: 100,
        progress: 0,
        progressText: '',
        toolModel: true,
        loading: false,
        createing:false,
        T:0,
        uploading:false
   })


    function  onImageLoad(){

        state.offsetWidth = (sketch.value as HTMLElement).offsetWidth
    }


    watch(()=>style.value,()=>{

        _louvre()

    },{deep:true})

    const closeed=()=>{
        state.rawImage=""
        state.sketchImage=''
        state.percent=0
        state.createing=false
        state.uploading=false
    }

    const opened=()=>{
       
        state.sketchImage=''
        state.percent=0
        state.createing=false
        state.uploading=false
        state.rawImage=imageSrc.value
        init()
        // clearblankimg(imageSrc.value).then((url)=>{
        //     state.rawImage=url
        //     init()
        // })

        

    }

    const createBgImageDone = () => {

        const  canvas  = outSketch.value
        //state.sketchImage = canvas.toBlob('image/jpeg',1);
        state.uploading=true
        canvas.toBlob(async function(blob) {
            let url= await mixins.uploadFile(blob,{}).catch(()=>{
                ElMessage.error("upload Image Error")
                state.uploading=false
            })
            if(!url){
                state.uploading=false
                return false
            }
            emit('updateImageSrc', {
                sketchImage:url
            });
            state.rawImage=""
            state.sketchImage=''
            state.uploading=false
        }, 'image/png', 1);

       
    }
  </script>

<style scoped  lang="less">
    .content {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .el-col-form{
        padding: 16px;
        box-shadow: -1px -4px 0.4rem 0px #0000004d;
    }

    .preview-box {
        position: relative;
        cursor: pointer;
        --cover-width: 480px;
    }
    .preview-box img {
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity .1s ease;
   }

   .preview-box img, .preview-box canvas {
        display: block;
        max-width: 100%;
        margin: 0 auto;
    }

    .scan-effect {
        position: relative;
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
  --h: 11;
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