
import { PageSizeItem,PageSizeList } from '@/assets/data/PageSetting'
import { App } from 'leafer-ui'
import { Store, defineStore } from 'pinia'

import {IPointData,IUI,IShadowEffect}  from '@leafer-ui/interface'

export type TPageSetting={
  pageSizeId:number,
  pageBgClass:string,
  pageBgSet:{
    backgroundImage:string,
    backgroundColor:{
      pureColor:string,
      activeColorKey:string,
      gradientColor:string
    }
  }
}


export type TTextSetting={
  text:string,
  fontSize:number,
  fill:string,
  bgcolor:string,
  fontWeight:string,
  strokeWidth:number,
  stroke:string,
  lineStyle: string,
  cornerRadius:number,
  fontFamily:string,
  letterSpacing:number,
  lineHeight:any,
  isShadow:boolean,
  bold:boolean,
  italic:boolean,
  textDecoration:'none' | 'under' | 'delete'
  shadow:{x: number;y: number; blur: number; color: string;}
}

export type TSharpSetting={
  fill:string,
  strokeWidth:number,
  zIndex:number,
  stroke:string,
  lineStyle: string,
  sharpname:string,
  corners:number,
  width:number,
  height:number,
  pureColor:string,
  activeColorKey:string,
  gradientColor:string
}


export type TImageSetting={
  fill:{ type:string, url: string,mode: string}, //图片
  zIndex:number,
  corners:number,
  opacity:number, //最大1
  width:number,
  height:number,
  x:number,
  y:number
}



type TStoreBaseState = {
  scale: number| IPointData
  editor:App|null
  useTool:string
  useToolType:string
  shapes:Map<string,object>
  useColor:string
  usePageBgColor:string
  useBorderWidth:number
  useCurrPanel:string,
  dActiveElement:IUI,
  useTextStyle:TTextSetting,
  useSharpStyle:TSharpSetting,
  usePageSetting:TPageSetting,
  useImageStyle:TImageSetting
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
    useCurrPanel:"PagePanel",
    usePageSetting:{
       pageSizeId:PageSizeList[0].id,
       pageBgClass:"backgroundColor",
       pageBgSet:{
         backgroundColor:{
            pureColor:"rgba(255, 255,255, 1)",
            activeColorKey:"pure",//gradient//pure
            gradientColor:"linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
         },
         backgroundImage:''
       }
    } as TPageSetting,

    useTextStyle:{
        text:'10cm',
        fill:'#000000',
        bgcolor:'#ffffff',
        fontSize:16,
        fontWeight:'normal',
        strokeWidth:2,
        stroke:"#000000",
        lineStyle: 'solid',
        cornerRadius:2,
        fontFamily:'アプリ明朝',
        letterSpacing:0,
        lineHeight:{
          type: 'percent',
          value: 1.5, // 150%
      },
        isShadow:false,
        bold:false,
        italic:false,
        textDecoration:'none',
        shadow:{
          x: 0,
          y: 0,
          blur: 4,
          color: "#4DCB71AA"
        } 
    } as TTextSetting,

    useSharpStyle:{
      fill:"#FFFFFF",
      strokeWidth:2,
      zIndex:10000,
      stroke:"#000000",
      lineStyle:'solid',
      sharpname:'',
      corners:5,
      width:100,
      height:100,
      pureColor:"#FFFFFF",
      activeColorKey:"pure",//gradient//pure
      gradientColor:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"
    } as TSharpSetting,

    useImageStyle:{
      fill:{ type:"image", url: "",mode: "strench"}, 
      zIndex:0,
      corners:0,
      opacity:1, //最大1
      width:100,
      height:100,
      x:100,
      y:100,

    } as TImageSetting,

    dActiveElement:null
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

