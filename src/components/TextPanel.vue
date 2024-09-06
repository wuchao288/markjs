<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="50px"
    >
    <el-form-item label="Content">
         <el-input  v-model="useTextStyle.text"/>
      </el-form-item>

      <el-form-item label="FontSize">
        <el-slider v-model="useTextStyle.fontSize" />
      </el-form-item>

      <el-form-item label="Color">
        <el-color-picker v-model="useTextStyle.fill"  :predefine="predefineColors" />
      </el-form-item>
     

      <el-form-item label="LineStyle">
           <el-radio-group v-model="useTextStyle.lineStyle">
               <el-radio value="line" border style="border-width: 2px;">line</el-radio>
               <el-radio value="dashed" style="border-style: dashed;border-width: 2px;" border>dashed</el-radio>
            </el-radio-group>
      </el-form-item>

      <el-form-item label="StrokeWidth">
        <el-slider v-model="useTextStyle.strokeWidth"  :max="10"  :min="0" />
      </el-form-item>

      <el-form-item label="StrokeColor">
        <el-color-picker v-model="useTextStyle.stroke"  :predefine="predefineColors" />
      </el-form-item>

    </el-form>
    </div>
</template>

<script setup lang="ts">
    import { ref,watch} from 'vue'

    import { ElForm,ElFormItem,ElInput,ElSlider,ElColorPicker,ElRadioGroup,ElRadio  } from 'element-plus'

    import useEditStore from "@/stores/useEditStore"

    import {TTextSetting} from "@/stores/useEditStore"
    
    import { storeToRefs } from 'pinia'

    const editorStore = useEditStore()

    type TState = {
      activeNames: string[],
      innerElement: TTextSetting,
      tag: boolean,
      ingoreKeys: string[],
      fontSizeList: number[],
      fontClassList: Record<string, any>, 
      lineHeightList: number[],
      letterSpacingList: number[]
  }


  const {useTextStyle} = storeToRefs(editorStore)


//   let LineStyle=ref("line");

// if(useTextStyle.value.dashPattern&&useTextStyle.value.dashPattern.length==2){

//    LineStyle.value="dashed"
// }else{
//    LineStyle.value="line"
// }

// watch(()=>LineStyle.value,(value,newVal)=>{

//    if(value=="line"){
//     useTextStyle.value.dashPattern=[]
     
//    }else{
//     useTextStyle.value.dashPattern=[6, 6] 
//    }
// })

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