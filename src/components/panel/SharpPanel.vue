<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="50px"
    >

    <el-form-item :label="t('stylepanel.size')">
        <el-space>
          <el-input-number style="width: 100px;" v-model="useSharpStyle.width" controls-position="right" />
          <el-input-number style="width: 100px;"  v-model="useSharpStyle.height"  controls-position="right" />
        </el-space>
      </el-form-item>

    <el-form-item  :label="t('stylepanel.linestyle')">
           <el-radio-group v-model="useSharpStyle.lineStyle">
            <el-radio value="solid" border style="border-width: 2px;">{{$t("stylepanel.solid")}}</el-radio>
               <el-radio value="dashed" style="border-style: dashed;border-width: 2px;" border>{{$t("stylepanel.dashed")}}</el-radio>
            </el-radio-group>
      </el-form-item>

      <el-form-item :label="t('stylepanel.strokewidth')">
        <el-slider v-model="useSharpStyle.strokeWidth"  :max="10"  :min="1" />
      </el-form-item>

      <el-form-item :label="t('stylepanel.stroke')">
        <el-color-picker v-model="useSharpStyle.stroke"  :predefine="predefineColors" />
      </el-form-item>

      <el-form-item :label="t('stylepanel.fill')">
        <el-color-picker v-model="useSharpStyle.fill"  show-alpha :predefine="predefineColors" />
      </el-form-item>

      <el-form-item :label="t('stylepanel.corners')" v-if="useSharpStyle.sharpname=='Star'">
        <el-slider v-model="useSharpStyle.corners"  :max="8"  :min="3" />
      </el-form-item>
      
      

    </el-form>
    </div>
</template>

<script setup lang="ts">

    import { ref,watch} from 'vue'

    import { ElForm,ElFormItem,ElRadioGroup,ElRadio,ElSlider,ElColorPicker,ElSpace,ElInputNumber  } from 'element-plus'

    import useEditStore from "@/stores/useEditStore"

    import {TSharpSetting} from "@/stores/useEditStore"
    
    import { storeToRefs } from 'pinia'
    import { useI18n } from "vue-i18n"
    const { t } = useI18n()

    const editorStore = useEditStore()

    type TState = {
      activeNames: string[],
      innerElement: TSharpSetting,
      tag: boolean,
      ingoreKeys: string[],
      fontSizeList: number[],
      fontClassList: Record<string, any>, 
      lineHeightList: number[],
      letterSpacingList: number[]
  }


  const {useSharpStyle} = storeToRefs(editorStore)

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
   box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  }

</style>