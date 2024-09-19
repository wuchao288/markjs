<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="50px"
    >
      <el-form-item :label="t('stylepanel.pagesize')">
        
        <el-select  v-model="usePageSetting.pageSizeId" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in PageSizeList"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
  </el-select>
      </el-form-item>

      <el-form-item :label="t('stylepanel.pagebgset')">
      <el-tabs :stretch="true" v-model="activeName" class="bg-tabs"  @tab-change="changeActiveName">
        <el-tab-pane :label="t('stylepanel.pagebgcolor')" name="backgroundColor">


     
        <!-- <el-color-picker v-model="useSharpStyle.fill"  show-alpha :predefine="predefineColors" /> -->

        <color-picker
         v-model:pureColor="usePageSetting.pageBgSet.backgroundColor.pureColor"  
         v-model:active-key="usePageSetting.pageBgSet.backgroundColor.activeColorKey"
         @activeKeyChange="activeKeyChange" format="hex6" lang="En" shape="circle" useType="both"
         v-model:gradientColor="usePageSetting.pageBgSet.backgroundColor.gradientColor" />


        </el-tab-pane>
        <el-tab-pane :label="t('stylepanel.pagebgimg')" name="backgroundImage">

          <el-upload
              ref="uploadRef" 
              class="upload-demo"
              :show-file-list="false"
              :auto-upload="false"
              :on-change="handleAvatarSuccess"
            >
              <template #trigger>
                <el-button type="primary"> 
                  <span class="iconfont icon icon-shangchuantupian1" style="color: white;"></span> 
                   {{$t('stylepanel.uploadbgimg')}}
                  </el-button>
              </template>
            </el-upload>


          <div class="bg-image__error el-upload-list--picture-card">
              <div class="block">
                <el-image class="el-upload-list__item-thumbnail" :src="usePageSetting.pageBgSet.backgroundImage">
                  <template #error>
                    <div class="image-slot">
                      <el-icon><icon-picture /></el-icon>
                    </div>
                  </template>
                </el-image>
              </div>

              <span class="el-upload-list__item-actions" v-if="usePageSetting.pageBgSet.backgroundImage">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview()"
                >
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  class="el-upload-list__item-delete"
                  @click="handleRemove()"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
          </div>
          

          <div>{{$t("stylepanel.systembgimg")}}</div>
          
          <div>
            <el-row :gutter="10">

              <el-col :span="12" >
                <el-image v-for="item in PageBgImageList.filter((m,index)=>index%2==0)"
                  :key="item.url"
                  :label="item.name"
                  :value="item.url" loading="lazy" :class="usePageSetting.pageBgSet.backgroundImage==item.url?'bgselected':''" @click="handleSetImage(item.url)" style="width: 100%; height: auto;border-radius: 5px; cursor: pointer;" :src="item.url" fit="scale-down" />
              </el-col>

              <el-col :span="12" >
                <el-image v-for="item in PageBgImageList.filter((m,index)=>index%2==1)"
                  :key="item.url"
                  :label="item.name"
                  :value="item.url" loading="lazy" :class="usePageSetting.pageBgSet.backgroundImage==item.url?'bgselected':''" @click="handleSetImage(item.url)" style="width: 100%; height: auto;border-radius: 5px; cursor: pointer;" :src="item.url" fit="scale-down" />
              </el-col>

                
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form-item>

    </el-form>
    </div>

    <el-dialog v-model="dialogVisible">
    <img w-full :src="usePageSetting.pageBgSet.backgroundImage" alt="Preview Image" />
  </el-dialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    import {ElRow,ElCol, ElUpload,ElImage,ElIcon,ElMessage, ElTabs,ElTabPane,ElForm,ElFormItem,ElSelect,ElOption,ElColorPicker,ElButton  } from 'element-plus'
    import { PageSizeList } from '@/assets/data/PageSetting';
    import { Picture as IconPicture,Delete,ZoomIn   } from '@element-plus/icons-vue'

    import useEditStore from "@/stores/useEditStore"
    import { storeToRefs } from 'pinia'

    import {ColorPicker} from "vue3-colorpicker";

    import { useI18n } from "vue-i18n"

    import { PageBgImageList }  from "@/assets/data/Material"

    import type { UploadProps } from 'element-plus'

    import { mixins } from "@/mixin/index"

    const { t } = useI18n()

    const dialogVisible = ref(false)

    const editorStore = useEditStore()

    const {usePageSetting} = storeToRefs(editorStore)

    let activeName=ref(usePageSetting.value.pageBgClass)

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
  
const handleSetImage=(url)=>{
  usePageSetting.value.pageBgSet.backgroundImage = url
  
}


const  activeKeyChange=function(value){
  usePageSetting.value.pageBgSet.backgroundColor.activeColorKey=value
  }

const  changeActiveName=(activeName)=>{
  usePageSetting.value.pageBgClass=activeName

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

        

        mixins.uploadFile(rawFile,{}).then((data)=>{
          if((data as any).code==0){
            usePageSetting.value.pageBgSet.backgroundImage = (window.parent as any).sploadImgToTempdes?(data as any).response.ImgPath:(data as any).data.fileUrl

          }else{
            ElMessage.error((data as any).msg)
          }
        }).catch((error)=>{
          ElMessage.error("Upload error")
        })

        return true
   }

   const  handleRemove=()=>{
      usePageSetting.value.pageBgSet.backgroundImage="";
   }

   const handlePictureCardPreview=()=>{
    dialogVisible.value=true;
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

.bg-tabs{
  width: 100%;
}
.el-tabs__item {
  width: 200px; /* 你想要设置的宽度 */
}

.bg-image__error{
   position: relative;
}

  .bg-image__error .block {
    padding: 20px 0;
    text-align: center;
   display: inline-block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: top;
}

.bg-image__error .el-image {
  padding: 0 5px;
  width: 100%;
  height: 200px;
}

.bg-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.bg-image__error .image-slot .el-icon {
  font-size: 30px;
}


:deep(.el-upload-list--picture-card){
  display:block;

}

.bgselected{
  border:2px red dashed
}

</style>