
import { PageSizeItem } from '@/assets/data/PageSetting'
import { App } from 'leafer-ui'
import { Store, defineStore } from 'pinia'

import {IPointData}  from '@leafer-ui/interface'



type TStoreBaseState = {
  scale: number| IPointData
  pageWidth: number
  pageHeight: number
  editor:App|null
  useTool:string
  useToolType:string
  shapes:Map<string,object>
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
}

const useEditStore = defineStore<'editor', TStoreBaseState, {}, TSotreAction>('editor', {
  state: () => ({
    scale: 1,
    pageWidth: 800,
    pageHeight: 600,
    editor:null,
    useTool:"",
    useToolType:"",
    shapes:new Map(),

  }),
  actions: {


    

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

