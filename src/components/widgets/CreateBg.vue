<template>
  
    <el-dialog  :v-model="dialogCreateBgVisible"
     :close-on-click-modal="false"
      :destroy-on-close="true"
      :append-to-body="true"
      :title="t('stylepanel.createbg')"
      :width="windowWidth>800?800:windowWidth*.9" 
      :height="windowHeight>600?600:windowHeight*.9" >
      
        <el-form label-position="left" label-width="auto" style="max-width: 600px">
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
            <el-form-item label="Your Information">
                <el-row :gutter="20">
                <el-col :span="8">
                    <el-input/>
                </el-col>
                <el-col :span="8">
                    <el-select>
                        <el-option>1</el-option>
                        <el-option>2</el-option>
                        <el-option>3</el-option>
                        <el-option>4</el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary">生成背景</el-button>
                    <el-button>Cancel</el-button>
                </el-col>
                </el-row>
            </el-form-item>
            </el-space>
        </el-form>
      
        <div>
            <img    alt="image" :src="imageSrc" style="object-fit: contain;">
        </div>
       
        <template #footer>
            <div class="dialog-footer">
                <el-button> {{$t("canvas.cancel")}} </el-button>
                <el-button type="primary" @click="createImage">
                {{$t("canvas.confirm")}} 
                </el-button>
            </div>
        </template>
    </el-dialog>
  
  </template>
  <script setup  lang="ts">
    import {ref, onMounted, onBeforeUnmount,toRaw} from "vue";

    import { useI18n } from "vue-i18n"
    const { t } = useI18n()

    let windowHeight=window.innerHeight

    let windowWidth=window.innerWidth

    defineModel<boolean>("dialogCreateBgVisible");

    let modelImageSrc =defineProps({
        "imageSrc":{
            type: String,
            required: true
        }
    });
    
    const emit = defineEmits(['updateImageSrc'])

    const createImage = () => {

        emit('updateImageSrc', {
              
        });
    }
  </script>