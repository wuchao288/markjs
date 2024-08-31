<script setup lang="ts">
import Header from './components/Header.vue'

import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import { Arrow } from '@leafer-in/arrow'

import { EditTool, registerEditTool } from '@leafer-in/editor'

registerEditTool();
 // 1. 注册编辑工具
// export class CustomEditTool extends EditTool {
//     public get tag() { return 'CustomEditTool' } // 2. 定义全局唯一的 tag 名称
// }

import { HTMLText } from '@leafer-in/html'
import { onMounted } from 'vue'


onMounted(function(){
  const app = new App({
    view: 'mainCanvas',
    editor: {} // 会自动创建 editor实例、tree层、sky层
})


app.tree.add(Rect.one({zIndex:0, editable: true, fill: '#FEB027',
 cornerRadius: [20, 0, 0, 20] }, 100, 100))

app.tree.add(Rect.one({zIndex:1, editable: true, fill:
     '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))


     const arrow = new Arrow({
        y: 50,
        height: 20,
        startArrow:'mark',
        endArrow:'mark',
        editable: true,
        strokeWidth: 2,
        stroke: 'rgb(50,205,121)'
    })
    app.tree.add(arrow);


    const text = new HTMLText({
        x: 100,
        y: 200,
        editable: true,
        strokeWidth: 2,
        stroke: 'rgb(0,0,0)',
        fill: 'rgb(50,205,121)',
        fontSize: 30,
        fontFamily: 'Microsoft YaHei',
        fontWeight: 'bold',
        textAlign: 'center',
        text: '32cm',
    })


    

    app.tree.add(text);

});


</script>



<template>

  <Header msg="Vite + Vue" />

  <div id="main">
    
    <div id="mainCanvas"> 

    </div>

  </div>

</template>

<style scoped>
   #main{
     position: absolute;
     top: 81px;
     left: 0px;
     right: 0px;
     bottom: 0px;
     text-align: center;
     display: flex;
      align-content: center;
      justify-content: center;
   }
#mainCanvas{

  height: 600px;
  width: 800px;
  box-shadow: 0 0 .4rem #0000004d;
    filter: drop-shadow(0 0 1.2rem rgba(255, 255, 255, .6));
}
</style>
