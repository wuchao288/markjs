<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="50px"
    >
      <el-form-item :label="t('stylepanel.pagesize')">
        
        <el-select  v-model="usePageSizeId" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in PageSizeList"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
  </el-select>
      </el-form-item>
      <el-form-item :label="t('stylepanel.pagebgcolod')">
        <el-color-picker v-model="usePageBgColor"  :predefine="predefineColors" />
      </el-form-item>
     

      <el-form-item :label="t('stylepanel.bgimg')">
       
      </el-form-item>

    </el-form>
    </div>
</template>

<script setup lang="ts">
    import { reactive,ref } from 'vue'

    import { ElForm,ElFormItem,ElSelect,ElOption,ElSpace,ElInputNumber,ElInput,ElSlider,ElColorPicker  } from 'element-plus'
    import { PageSizeList } from '@/assets/data/PageSetting';


    import useEditStore from "@/stores/useEditStore"
    import { storeToRefs } from 'pinia'

    import { useI18n } from "vue-i18n"
    const { t } = useI18n()

    const editorStore = useEditStore()

    const {usePageSizeId,usePageBgColor} = storeToRefs(editorStore)

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