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

<el-form-item>
  <ShortCut v-model:visible="useTextStyle.visible" v-model:="useTextStyle.locked"></ShortCut>
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
              <!-- <el-color-picker v-model="useTextStyle.fill"  :predefine="predefineColors" /> -->

            
              <color-picker
         v-model:pureColor="useTextStyle.fill"  
      format="hex8" lang="En" shape="circle" useType="pure">
            <template #extra>
              <el-link  v-if="IsEyeDropper" :underline="false"  @click="selectColor">
              
                <svg viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2602" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24" height="24"><path d="M643.412923 182.807962l133.759582 133.780915L810.665733 349.868773a47.359852 47.359852 0 0 1-33.493228 80.853081 45.97319 45.97319 0 0 1-33.279896-13.866623l-33.706562-33.279896-133.759582-133.780916-33.279896-33.706561a47.466518 47.466518 0 0 1 33.493229-80.853081A48.319849 48.319849 0 0 1 610.133027 149.336067z" fill="#FFE45C" p-id="2603"></path><path d="M910.932087 49.069713A93.141042 93.141042 0 0 1 938.665333 115.821505a92.906376 92.906376 0 0 1-27.733246 66.986457l-133.759582 133.780915-133.759582-133.780915L777.172505 49.069713a94.634371 94.634371 0 0 1 133.759582 0z" fill="#FFB13B" p-id="2604"></path><path d="M375.680426 450.561792l200.746039-200.767373 133.759582 133.780916-66.986457 66.986457-21.546599 21.759932L618.666333 469.335067H362.667133l-2.773324-2.773325 15.786617-15.99995z" fill="#D9D9D9" p-id="2605"></path><path d="M170.667733 954.688217A45.674524 45.674524 0 0 1 128.0012 1002.666733a45.674524 45.674524 0 0 1-42.666533-47.99985C85.334667 928.234966 113.707911 874.667133 128.0012 874.667133s42.666533 53.567833 42.666533 80.021084zM621.652991 472.321724L375.893759 717.888957l-100.266354 33.279896-66.773124 66.986457A48.191849 48.191849 0 0 1 175.147719 832.0006a47.359852 47.359852 0 0 1-33.279896-80.853081l66.986458-66.773124 33.279896-100.266354 117.759632-117.546299 2.773324 2.773325h255.9992z" fill="#0091FF" p-id="2606"></path><path d="M749.119259 365.079392l-146.772875-146.794207L565.823832 181.335967a51.477172 51.477172 0 0 1-14.933287-38.229214A48.575848 48.575848 0 0 0 543.146569 149.336067a47.381185 47.381185 0 0 0 0 66.773124l33.279896 33.706562 133.759582 133.780915 33.706562 33.279896a45.97319 45.97319 0 0 0 33.279896 13.866623A46.805187 46.805187 0 0 0 810.665733 416.855231c0.383999-0.405332 0.661331-0.853331 1.023997-1.258663a49.962511 49.962511 0 0 1-25.59992-13.994623z" fill="#FFB13B" p-id="2607"></path><path d="M910.932087 76.141629l-73.429104 73.429104a85.333067 85.333067 0 0 1-120.68229 0l-20.074604-20.095938-53.333166 53.333167 133.759582 133.759582 133.759582-133.759582a94.357038 94.357038 0 0 0 11.199965-120.170291 91.327715 91.327715 0 0 1-11.199965 13.503958z" fill="#FF9500" p-id="2608"></path><path d="M128.0012 981.333467a44.159862 44.159862 0 0 1-41.493204-37.247884 56.234491 56.234491 0 0 0-1.173329 10.666633A45.674524 45.674524 0 0 0 128.0012 1002.666733a45.674524 45.674524 0 0 0 42.666533-47.99985 56.234491 56.234491 0 0 0-1.173329-10.666633A44.159862 44.159862 0 0 1 128.0012 981.333467z" fill="#095D96" p-id="2609"></path><path d="M490.666733 469.335067l60.181146-60.181146a42.666533 42.666533 0 0 0 0-60.351811L514.133327 312.087558l-138.452901 138.474234-15.786617 15.99995 2.773324 2.773325z" fill="#F0F0F0" p-id="2610"></path><path d="M362.667133 469.335067l-2.773324-2.773325-117.759632 117.546299-33.279896 100.266354-66.986458 66.794458a47.231852 47.231852 0 0 0 0 66.965124L490.666733 469.335067z" fill="#00A6FF" p-id="2611"></path><path d="M128.727957 949.33649a12.245295 8.810639 44.98 1 0 12.455776-12.464474 12.245295 8.810639 44.98 1 0-12.455776 12.464474Z" fill="#F6FAFD" p-id="2612"></path><path d="M128.0012 853.333867c-33.557228 0-63.9998 72.938439-63.9998 101.333016A66.901124 66.901124 0 0 0 128.0012 1024a66.901124 66.901124 0 0 0 63.9998-69.333117C192.001 926.272305 161.558428 853.333867 128.0012 853.333867z m0 127.9996a24.469257 24.469257 0 0 1-21.333267-26.666584 126.164939 126.164939 0 0 1 21.333267-52.949168 126.164939 126.164939 0 0 1 21.333267 52.949168A24.469257 24.469257 0 0 1 128.0012 981.333467zM959.9986 115.821505a115.882305 115.882305 0 0 0-197.844715-81.855744l-73.237105 73.237104 30.16524 30.165239 73.237104-73.237104a73.301104 73.301104 0 0 1 103.594343 0 73.322438 73.322438 0 0 1 0 103.573009l-118.676963 118.655629-103.615676-103.551676 18.389276-18.389276-30.165239-30.165239-18.389276 18.389276-18.282609-18.239943a70.207781 70.207781 0 0 0-97.17303 0 68.607786 68.607786 0 0 0 0 96.874364l18.453276 18.453276-319.359002 319.231002a21.333267 21.333267 0 0 0-5.183984 8.341307l-31.786567 95.573035-63.530469 63.317135a68.714452 68.714452 0 0 0 97.279696 97.04503l63.21047-63.423801 95.573034-31.786568a21.4826 21.4826 0 0 0 8.362641-5.141317l35.13589-35.13589-30.165239-30.165239-31.573235 31.551901-95.615701 31.807901a21.205267 21.205267 0 0 0-8.383974 5.16265l-66.559792 66.794458a27.306581 27.306581 0 0 1-36.927884 0.277333 26.389251 26.389251 0 0 1 0-36.885218l66.986457-66.751792a21.333267 21.333267 0 0 0 5.183984-8.383974l31.8079-95.594367L365.71779 490.668333h207.188686l-139.988896 139.988896 30.16524 30.165239L710.39938 413.591241l18.431942 18.431942a68.543786 68.543786 0 0 0 96.917031 0 68.799785 68.799785 0 0 0 0-97.151696l-18.303943-18.303943 118.570296-118.548963A114.431642 114.431642 0 0 0 959.9986 115.821505zM615.594343 448.0018h-207.210019l168.063475-168.063475 103.615676 103.594343z m179.946104-46.165189a25.877252 25.877252 0 0 1-36.671885 0l-200.703373-200.724706a26.111918 26.111918 0 0 1 18.538609-44.415861 26.197251 26.197251 0 0 1 18.303943 7.807975l33.365229 33.365229 133.780915 133.759582 33.343896 33.343896a25.791919 25.791919 0 0 1 0.042666 36.863885z" p-id="2613"></path></svg>
              </el-link> 
             
            </template>
            </color-picker>
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
        <el-slider v-model="useTextStyle.strokeWidth"  :max="20"  :min="0" />
      </el-form-item>

      <el-form-item :label="t('stylepanel.linestyle')" v-if="useTextStyle.strokeWidth>0">
           <el-radio-group v-model="useTextStyle.lineStyle">
               <el-radio value="solid" border style="border-width: 2px;">{{$t("stylepanel.solid")}}</el-radio>
               <el-radio value="dashed" style="border-style: dashed;border-width: 2px;" border>{{$t("stylepanel.dashed")}}</el-radio>
            </el-radio-group>
      </el-form-item>

      <el-form-item :label="t('stylepanel.stroke')" v-if="useTextStyle.strokeWidth>0">
        <!-- <el-color-picker v-model="useTextStyle.stroke"  :predefine="predefineColors" /> -->

        <input type="color" v-model="useTextStyle.stroke" />


      </el-form-item>

      <!--文本框-->

      
      <el-form-item  v-if="useTextStyle.tag=='Box'" :label="t('stylepanel.boxfill')">
        <color-picker
         v-model:pureColor="useTextStyle.boxFill"  
      format="hex8" lang="En" shape="circle" useType="pure"
/>
      <!-- <input type="color" v-model="useTextStyle.boxFill" /> -->
      </el-form-item>

    
      <el-form-item v-if="useTextStyle.tag=='Box'" :label="t('stylepanel.boxstrokewidth')">

      <el-row :gutter="10" style="width: 100%;">
            <el-col :span="18">
              <el-slider v-model="useTextStyle.boxStrokeWidth"  :max="20"  :min="0" />
            </el-col>
            <el-col :span="6">
              <el-input size="small" v-model="useTextStyle.boxStrokeWidth"></el-input>
            </el-col>
          </el-row>

      </el-form-item>
      
      <el-form-item  v-if="useTextStyle.tag=='Box'&&useTextStyle.boxStrokeWidth>0" :label="t('stylepanel.boxstroke')">

      <color-picker
         v-model:pureColor="useTextStyle.boxStroke"   format="hex8" lang="En" shape="circle" useType="pure"/>
      </el-form-item>
      
      <el-form-item v-if="useTextStyle.tag=='Box'&&useTextStyle.boxStrokeWidth>0" :label="t('stylepanel.boxlinestyle')">
           <el-radio-group v-model="useTextStyle.boxLineStyle">
            <el-radio value="solid" border style="border-width: 2px;">{{$t("stylepanel.solid")}}</el-radio>
               <el-radio value="dashed" style="border-style: dashed;border-width: 2px;" border>{{$t("stylepanel.dashed")}}</el-radio>
            </el-radio-group>
      </el-form-item>

      
      <el-form-item :label="t('stylepanel.boxcornerradius')" v-if="useTextStyle.tag=='Box'&&useTextStyle.boxStrokeWidth>0">
     
      <el-row :gutter="10" style="width: 100%;">
              <el-col :span="18">
              <el-slider v-model="useTextStyle.boxCornerRadius"  :max="200"  :min="0" />
            </el-col>
            <el-col :span="6">
                <el-input size="small" v-model="useTextStyle.boxCornerRadius"></el-input>
            </el-col>
          </el-row>
    </el-form-item> 

      
    </el-form>
    </div>
</template>

<script setup lang="ts">
    import { ref,watch,reactive, computed,onActivated, onUpdated} from 'vue'
    import {ColorPicker} from "vue3-colorpicker";
    import { ElForm,ElFormItem,ElInput,ElSlider,ElColorPicker,
      ElRadioGroup,ElRadio,ElCard,
      ElButton,ElRow,ElCol,ElSelect,
      ElOption,ElTooltip,
      ElCheckbox
      } from 'element-plus'

    import useEditStore from "@/stores/useEditStore"

    import {TTextSetting} from "@/stores/useEditStore"
    
    import { storeToRefs } from 'pinia'
    let IsEyeDropper=ref('EyeDropper' in window)

  const selectColor=async ()=>{

    if ('EyeDropper' in window) {
        const eyeDropper = new window.EyeDropper()  
        try {
            const result = await eyeDropper.open() 
           
            useTextStyle.value.fill=result.sRGBHex
          } catch (e) {
            console.log('')
          }
      }
  }



    import  ShortCut  from '@/components/widgets/ShortCut.vue'

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