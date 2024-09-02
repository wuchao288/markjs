<template>
    <div id="main-canvas" style="height: 800px;">

    </div>
</template>
<script setup lang="ts">
    import {onMounted} from 'vue'

    import { App, Box ,Frame } from 'leafer-ui'
    import '@leafer-in/editor' // 导入图形编辑器插件
    import '@leafer-in/text-editor'

    let canvasApp:App

    let frame:Frame

    onMounted(() => {
        
        let appWrap=  document.getElementById("main-canvas") as HTMLDivElement

        appWrap.style.height= (window.innerHeight- 60)+"px"
        appWrap.style.marginTop="60px"

        let width=window.innerWidth;
        let height=window.innerHeight- 60;

        canvasApp = new App({

        view: 'main-canvas',
        editor:{}

        })

     frame = new Frame({
            x:width/2,
            y:height/2,
            width: 800,
            height: 600,
            around: 'center'
        })

    const box = new Box({
        fill: '#fff',
        cornerRadius: 20,
        editable: true,
        stroke: '#000',
        strokeWidth: 2,
        children: [{
            tag: 'Text',
            editable: true,
            text: 'Welcome to LeaferJS',
            fill: 'black',
            padding: [10, 20],
            textAlign: 'left',
            verticalAlign: 'top'
        }]
    })

    frame.add(box)

    canvasApp.tree.add(frame)
    })

    function addLine(){
        frame.add(new Box({
        fill: '#fff',
        cornerRadius: 20,
        editable: true,
        stroke: '#000',
        strokeWidth: 2,
        children: [{
            tag: 'Text',
            editable: true,
            text: 'Welcome to LeaferJS 355353535',
            fill: 'black',
            padding: [10, 20],
            textAlign: 'left',
            verticalAlign: 'top'
        }]
    }))
    }

    defineExpose({addLine})
</script>

<style scoped>
    #main-canvas{
        width: 100%;
        height: 100%;
        margin-top: 60px !important;
        
        background-image: 
        linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%),
        linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
        background-position: 0 0, 18px 18px;
        background-size: 36px 36px;
    }


</style>