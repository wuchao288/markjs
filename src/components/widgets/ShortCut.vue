<template>
     <div>
        <p>{{$t("stylepanel.shortcut")}}</p>
    <div>
        <el-tooltip
        class="box-item"
        effect="dark"
        content="t('canvas.lock')"
        placement="top-start"
      >
        <el-button  @click="lockSharp" :icon="!locked?Unlock:Lock"  />
        </el-tooltip>

        <!-- <el-tooltip
        class="box-item"
        effect="dark"
        content="View"
        placement="top-start"
      >
        <el-button @click="visibleSharp"  :icon="!visible?Hide:View"/>
    </el-tooltip> -->
    <el-tooltip
        class="box-item"
        effect="dark"
        :content="t('canvas.copy')"
        placement="top-start"
      >
        <el-button  @click="copy" :icon="CopyDocument" />
    </el-tooltip>

    <el-tooltip
        class="box-item"
        effect="dark"
        content="t('canvas.del')"
        placement="top-start"
      >
        <el-button  :icon="Delete" @click="deleteSharp" />
    </el-tooltip>
    </div>
     </div>
</template>
<script lang="ts" setup>

import { ref ,getCurrentInstance, computed,toRaw} from 'vue'

import { ElButton,ElTooltip } from 'element-plus'

import { App} from 'leafer-ui'

import useEditStore from "@/stores/useEditStore"

import { Lock,Unlock,View,Hide,Delete,CopyDocument} from '@element-plus/icons-vue'
import { nanoid } from 'nanoid'

import { useI18n } from "vue-i18n"

const { t } = useI18n()

const editorStore = useEditStore()

const locked3 = defineModel("locked")



const copy=()=>{

    var app=editorStore.editor

    app.editor.list.forEach(rect => {
            var obj= rect.clone()
            obj.id=nanoid()
            obj.x=obj.x+10
            obj.y=obj.y+10
            obj.data=JSON.parse(JSON.stringify(obj.data))
            editorStore.addShape(obj.id as string)
            app.findOne("Frame").add(obj)
            app.editor.target=obj
            app.findOne("Frame").emit("redo.add",{})
    })


}

const lockSharp=()=>{
    var app=editorStore.editor
    app.editor.list.forEach(rect => {
        rect.locked=!rect.locked
    })
}



const deleteSharp=()=>{
    var app=editorStore.editor
    app.editor.list.forEach(rect => {
            editorStore.delShape(rect.id as string)
            rect.remove()
    })
}

</script>