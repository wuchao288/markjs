<!--
 * @Author: June 1601745371@qq.com
 * @Date: 2024-03-08 11:32:27
 * @LastEditors: June 1601745371@qq.com
 * @LastEditTime: 2024-03-11 11:10:59
 * @FilePath: \github\yft-design\src\components\Lang\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown   style="margin-left: 10px;"   >
    <el-button type="primary" split-button >
      {{language}} 
      <arrow-down-bold  style="width: 1em; height: 1em; margin-right: 8px;margin-left: 10px;" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item   @click="changeJp">日本語</el-dropdown-item>
        <el-dropdown-item   @click="changeZh">中文</el-dropdown-item>
        <el-dropdown-item   @click="changeEn">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>


 
<script setup lang="ts">


  import { getCurrentInstance,ref } from 'vue'
  import { ArrowDownBold } from '@element-plus/icons-vue'
  import Cookies from 'js-cookie'

  //getCurrentInstance函数获取当前组件实例,并通过.appContext.config.globalProperties访问全局属性
  //?号表示前面如果返回null，后面不执行
  let $this = getCurrentInstance()?.appContext.config.globalProperties as any

  let lang: { [key: string]: any }={'zh':'中文','jp':'日本語','en':'English'};

  let langThis=$this.$i18n.locale;

  let language=ref(lang[langThis]);
  //'ja_jp', 'zh_cn', 'en_us'
  
  //切换中文，存储语言状态
  const changeZh = () => {
    $this.$i18n.locale = 'zh'
    Cookies.set("owlang","zh_cn")
    language.value=lang["zh"];
  }
  const changeEn = () => {
    $this.$i18n.locale = 'en'
    Cookies.set("owlang","en_us")
    language.value=lang["en"];
  }
  const changeJp = () => {
    $this.$i18n.locale = 'jp'
    Cookies.set("owlang","ja_jp")
    language.value=lang["jp"];
  }



</script>


<style scoped>
 .el-dropdown-link {
    cursor: pointer;
    widows: 90px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>