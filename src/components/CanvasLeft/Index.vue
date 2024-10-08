<template>
    <div class="tab-warp-tab show-tab">
      <Label />
      <Menu />
    </div>
  </template>
  
  <script lang="ts" setup>
  import Label from "./Label/index.vue";
  import Menu from "./Menu/index.vue";
  </script>
<style scoped>
.tab-warp-tab{
    display: flex;
    flex-direction: row;
}
</style>