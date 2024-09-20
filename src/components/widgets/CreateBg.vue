<template>
  
    <el-dialog  :v-model="dialogCreateBgVisible"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      :append-to-body="false"
      :title="t('stylepanel.createbg')"
      :width="800" 
      @opened="openedCreateBgImg"
>

     <div class="content">

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
            <el-form-item label="背景提示词">
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
      
        <div v-show="state.rawImage" v-loading="state.createing" :style="{ width: state.offsetWidth ? state.offsetWidth + 'px' : '100%' }" class="scan-effect transparent-bg">
            <img ref="raw" :style="{ 'clip-path': 'inset(0 0 0 ' + state.percent + '%)' }" :src="state.rawImage" alt="" />
            <img v-show="state.bgImage" src="http://localhost:5173/file/temp/00515991fe07476cadbd82fc80fad306.png" alt="结果图像" @mousemove="mousemove" />
            <div v-show="state.bgImage" :style="{ left: state.percent + '%' }" class="scan-line"></div>
        </div>

        <!-- <div>
            <img  alt="image" :src="imageSrc" style="object-fit: contain;">
        </div> -->
    </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button> {{$t("canvas.cancel")}} </el-button>
                <el-button type="primary" @click="createBgImageDone">
                {{$t("canvas.confirm")}} 
                </el-button>
            </div>
        </template>
    </el-dialog>
  
  </template>
  <script setup  lang="ts">

    import {reactive} from "vue";

    import { useI18n } from "vue-i18n"
    const { t } = useI18n()


    import {mixins} from "@/mixin/index"
    import { ElMessage, ElMessageBox } from "element-plus";

    let dialogCreateBgVisible= defineModel("dialogCreateBgVisible")

    let imageSrc= defineModel("imageSrc",{type:String})

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

   const state = reactive<TImageCreateBgState>({
        show: false,
        rawImage: imageSrc.value,
        bgImage:'',
        offsetWidth: 0,
        percent: 0,
        progress: 0,
        progressText: '',
        toolModel: true,
        loading: false,
        createing:false,
        prompt:''
   })

  const openedCreateBgImg=()=>{
    state.rawImage=imageSrc.value
  }

   const mousemove = (e: MouseEvent) => {
      !isRuning && (state.percent = (e.offsetX / (e.target as any).width) * 100)
   }

   let isRuning: boolean = false


   const  createBg=async ()=>{

    
        const  uploadCreateBgImg=(fileUrl:string)=>{
            
            let formData=new FormData()
            
            formData.append("prompt",state.prompt)
            formData.append("fileUrl",fileUrl)
            
            state.createing=true
            fetch((window.parent as any).cutOutImg||'/BLL/TempHandler.ashx?action=CreateBg', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {

                   
                    if(data.code==0){

                        state.bgImage=data.data

                    }else{
                        
                        ElMessageBox.alert(data.msg)
                    }

                    state.createing=false
                }
                )
                .catch(error => 
                { 
                    ElMessage.error("Create  Error!")
                    state.createing=false
                }
            );
        }

    //上传后再生成背景
    if((state.rawImage  as any).startsWith("blob:")){



       state.createing=true


       var blobData=await mixins.loadImg(state.rawImage)


        await mixins.uploadFile(blobData as any ,{},(data)=>{

        let url= (window.parent as any).cutOutImg?data.response.ImgPath:data.data.fileUrl
       
        uploadCreateBgImg(url)

       })
    }else{
        //直接生成背景
        state.createing=true
        uploadCreateBgImg(state.rawImage as string)
    }

 

   }
   

    const emit = defineEmits(['updateImageSrc'])

    const createBgImageDone = () => {

        emit('updateImageSrc', {
              
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
        height: 50vh;
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

    .scan-line {
        position: absolute;
        top: 0;
        width: 1.5px;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }

    .progress {
    width: 100%;
    }
</style>