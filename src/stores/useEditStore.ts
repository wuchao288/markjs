
import { PageSizeItem,PageSizeList } from '@/assets/data/PageSetting'
import { App } from 'leafer-ui'
import { Store, defineStore } from 'pinia'

import {IPointData}  from '@leafer-ui/interface'



type TStoreBaseState = {
  scale: number| IPointData
  editor:App|null
  useTool:string
  useToolType:string
  shapes:Map<string,object>
  useColor:string
  usePageBgColor:string
  useBorderWidth:number
  usePageSizeId:number
  useCurrPanel:string
}

type TSotreAction = {
    setScale: (e:number| IPointData) => void
    setPageSize: (e:PageSizeItem) => void
    setApp: (e: App) => void
    setUseTool: (type: string,subType:string) => void
    getShape:(e:string)=>object|undefined
    addShape:(e:object)=>void
    delShape:(id:string)=>void
    clearShape:()=>void
    setUseColor:(color:string)=>void
    setUseBorderWidth:(width:number)=>void
}

const useEditStore = defineStore<'editor', TStoreBaseState, {}, TSotreAction>('editor', {
  state: () => ({
    scale: 1,
    editor:null,
    useTool:"",
    useToolType:"",
    shapes:new Map(),
    useColor:'rgba(0, 0, 0, 1)',
    useBorderWidth:2,
    usePageBgColor:'rgba(255, 255,255, 1)',
    usePageSizeId:PageSizeList[0].id,
    useCurrPanel:"PagePanel"
  }),
  actions: {

    setUseColor(model:string){

      this.useColor=model

   },

   setUseBorderWidth(width:number) {

       this.useBorderWidth=width

   },
    

    setUseTool(type:string,subType:string){

       this.useTool=type
       this.useToolType=subType
    },

    setScale(model:number| IPointData){

       this.scale=model

    },

    setPageSize(model:PageSizeItem){

        this.pageWidth=model.width
        this.pageHeight=model.height

    },
    
    setApp(model:App){

        this.editor=model

    },
    getShape(id:string) {

      if(this.shapes.has(id)){
        return this.shapes.get(id);
      }

    },

    delShape(id:string){

      if(this.shapes.has(id)){
        return this.shapes.delete(id);
      }

    },

    clearShape(){

      if(this.shapes.size>0){
        return this.shapes.clear();
      }
      
    },
    addShape(shape:{id:string}) {
        this.shapes.set(shape.id, shape);
    }
  }
})

export type TBaseStore = Store<'editor', TStoreBaseState, {}, TSotreAction>

export default useEditStore

