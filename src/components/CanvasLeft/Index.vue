<template>
    <div class="flex">
      <Label />
      <Menu />
    </div>
  </template>
  
  <script lang="ts" setup>
  import Label from "./Label/index.vue";
  import Menu from "./Menu/index.vue";
  </script>
  <style>

.flex{
    display: flex;
}
</style>