<template>
    <div id="main-right" >
        <el-form
      class="form"
      label-position="top"
      label-width="100px"
    >
    <el-form-item :label="t('stylepanel.content')">
         <el-input  v-model="useTextStyle.text"/>
      </el-form-item>


  <el-row :gutter="10">
    <el-col :span="12">
       <el-form-item :label="t('stylepanel.fontfamily')">
        <el-select 
          v-model="useTextStyle.fontFamily"
          placeholder="Select FontFamily"
          style="width: 100%"
        >
            <el-option 
              v-for="item in StyleFontList"
              :key="item.value"
              :label="item.alias"
              :value="item.value"
            >
          <img :src="item.preview" style="width:100%;height: 100%;margin: 4px;"/>
          </el-option>
        </el-select>
      </el-form-item>

    </el-col>
    <el-col :span="12">
      <el-form-item :label="t('stylepanel.fontsize')">
        <el-select
          v-model="useTextStyle.fontSize"
          placeholder="Select FontSize"
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          style="width: 100%"
        >
            <el-option 
              v-for="item in fontsizeList"
              :key="item.value"
              :label="item.title"
              :value="item.value"
            ></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-row>



       <el-row>
          <el-col :span="12">
            <el-form-item :label="t('stylepanel.color')">
              <el-color-picker v-model="useTextStyle.fill"  :predefine="predefineColors" />
            </el-form-item>
          </el-col>
          
       </el-row>

    
     

      <el-form-item>
        <el-card style="width: 100%;" shadow="never" :body-style="{padding:'10px'}">
          <el-row>
              <el-col :span="6">
                <el-tooltip
                  effect="dark"
                  :content="t('stylepanel.bold')"
                  placement="top-start"
                >
                  <el-button  @click="useTextStyle.bold=!useTextStyle.bold" :class="useTextStyle.bold?'btn-active':''">
                    <i class="iconfont icon-jiacu"></i>
                  </el-button>
              </el-tooltip>
              </el-col>
              <el-col :span="6">

                <el-tooltip
                  effect="dark"
                  :content="t('stylepanel.italic')"
                  placement="top-start"
                >
                <el-button  @click="useTextStyle.italic=!useTextStyle.italic" :class="useTextStyle.italic?'btn-active':''">
                  <i class="iconfont icon-xieti"></i>
                </el-button>

                </el-tooltip>
              </el-col>
              <el-col :span="6">
              
                <el-tooltip
                  effect="dark"
                  :content="t('stylepanel.underline')"
                  placement="top-start"
                >
                <el-button  @click="setTextDecoration('under')" :class="useTextStyle.textDecoration=='under'?'btn-active':''">
                  <i class="iconfont icon-fuhao-xiahuaxian"></i>
                </el-button>
              </el-tooltip>

              </el-col>
              <el-col :span="6">

                <el-tooltip
                  effect="dark"
                  :content="t('stylepanel.inethrough')"
                  placement="top-start"
                >
                <el-button  @click="setTextDecoration('delete')" :class="useTextStyle.textDecoration=='delete'?'btn-active':''">
                  <i class="iconfont icon-shanchuxian"></i>
                </el-button>

              </el-tooltip>
              </el-col>
          </el-row>

        </el-card>
      </el-form-item>

      <el-form-item>
        <el-card style="width: 100%;" shadow="never" :body-style="{padding:'10px'}">
            <el-row :gutter="10">
               <el-col :span="6">
                {{$t('stylepanel.letterspacing')}}
               </el-col>

               <el-col :span="12">
                <el-slider v-model="useTextStyle.letterSpacing"  :max="10"  :min="-10" />
              </el-col>
              <el-col :span="6">
                 <el-input size="small" v-model="useTextStyle.letterSpacing"></el-input>
              </el-col>
            </el-row>

            <el-row :gutter="10">
               <el-col :span="6">
                {{$t('stylepanel.linespacing')}}
               </el-col>

               <el-col :span="12">
                <el-slider v-model="useTextStyle.lineHeight.value"  :max="3" :step="0.01"  :min="-3" />
              </el-col>
              <el-col :span="6">
                 <el-input size="small" v-model="useTextStyle.lineHeight.value"></el-input>
              </el-col>
            </el-row>
        </el-card>
      </el-form-item>


     <el-form-item>
        <el-card style="width: 100%;" shadow="never" :body-style="{padding:'10px'}">
            <el-row :gutter="10">
               <el-col :span="8">
                  <el-checkbox :label="t('stylepanel.shadow')" v-model="useTextStyle.isShadow"  />
               </el-col>

               <el-col :span="4">
                 <el-form-item label="blur" >
                    <el-input  size="small" v-model="useTextStyle.shadow.blur" />
                  </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="x" >
                <el-input  size="small" v-model="useTextStyle.shadow.x" />
                  </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="y" >
                <el-input  size="small" v-model="useTextStyle.shadow.y" />
              </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-color-picker style="vertical-align:middle" size="small" v-model="useTextStyle.shadow.color"  :predefine="predefineColors" />
              </el-col>
            </el-row>
        </el-card>
   
      </el-form-item>


      <el-form-item :label="t('stylepanel.strokewidth')">
        <el-slider v-model="useTextStyle.strokeWidth"  :max="10"  :min="0" />
      </el-form-item>

      <el-form-item :label="t('stylepanel.linestyle')" v-if="useTextStyle.strokeWidth>0">
           <el-radio-group v-model="useTextStyle.lineStyle">
               <el-radio value="solid" border style="border-width: 2px;">{{$t("stylepanel.solid")}}</el-radio>
               <el-radio value="dashed" style="border-style: dashed;border-width: 2px;" border>{{$t("stylepanel.dashed")}}</el-radio>
            </el-radio-group>
      </el-form-item>

      <el-form-item :label="t('stylepanel.stroke')" v-if="useTextStyle.strokeWidth>0">
        <el-color-picker v-model="useTextStyle.stroke"  :predefine="predefineColors" />
      </el-form-item>



    </el-form>
    </div>
</template>

<script setup lang="ts">
    import { ref,watch,reactive} from 'vue'

    import { ElForm,ElFormItem,ElInput,ElSlider,ElColorPicker,
      ElRadioGroup,ElRadio,ElCard,
      ElButton,ElRow,ElCol,ElSelect,
      ElOption,ElTooltip,
      ElCheckbox
      } from 'element-plus'

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

  import { StyleFontList }  from "@/assets/data/Material"
  
  import { useI18n } from "vue-i18n"
  const { t } = useI18n()

  const {useTextStyle} = storeToRefs(editorStore)

  const setTextDecoration=(setValue)=>{
    useTextStyle.value.textDecoration=useTextStyle.value.textDecoration!=setValue?setValue:'none'
  }

  const state = reactive({
  loading: false,
  editable: false,
  loadFontDone: '',
})





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
      '#B8E986', '#4A4A4A', '#9B9B9B', '#FFFFFF',
      'rgba(0,0,0,0)'
   ])
// new URL('../assets/img/login-bg.jpg', import.meta.url).href;
  

  const fontsizeList=[12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,60,80,100,200,300].map(m=>{return {value:m,title:m+"px"}})

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
    overflow: auto;
   box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  }

  .btn-active{
     background-color: #ededed;
  }
</style>