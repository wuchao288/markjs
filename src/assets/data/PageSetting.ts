

export type  ZoomItem={
    title: string
    value:string|number
    id:string|number
}

export const ZoomItemList=[
   {
        title: "25%",
        value:0.25,
        id:1
   },
   {
        title: "50%",
        value:0.5,
        id:2
    },
    {
        title: "100%",
        value:1,
        id:3
    },
    {
        title: "150%",
        value:1.5,
        id:4
    },
    {
        title: "200%",
        value:2,
        id:5
    },
   {
     title: "适用屏幕",
     value:"fit",
     id:6
   }
] as ZoomItem[]



export type  PageSizeItem={
    title: string
    width:number
    height:number
    id:number
}

export const PageSizeList=[
   {
    title: "600px*600px",
    width: 600,
    height: 600,
    id:1
  },
  {
    title: "800px*800px",
    width: 800,
    height: 800,
    id:2
  }
] as PageSizeItem[]



export type TextTypeItem={
  title: string,
  id:string|number,
  type:string 
}

export const TextTypeList=[
  {
    title: "普通文本",
    id:1,
    type:"normal" 
  },
  {
    title: "矩形边框",
    id:2,
    type:"rect" 
  },
  {
    title: "圆角边框",
    id:3,
    type:"radius" 
  }
] as TextTypeItem[]

export type ArrowTypeItem={
  title: string,
  id:string|number,
  type:string 
}

export const ArrowTypeList=[
  {
    title: "单箭头",
    id:1,
    type:"one" 
  },
  {
    title: "双箭头",
    id:2,
    type:"two" 
  }
] as ArrowTypeItem[]


export type MarkTypeItem={
  title: string,
  id:string|number,
  rotate:string 
}

export const MarkTypeList=[
  {
    title: "垂直标注",
    id:1,
    rotate:'90'
  },
  {
    title: "水平标注",
    id:2,
    rotate:'0'
  },
  {
    title: "45标注",
    id:3,
    rotate:'45'
  }
] as MarkTypeItem[]


export type BorderWidthItem={
  title: string,
  id:string|number,
  width:number 
}

export const BorderWidthList=[
  {
    title: "1px",
    id:1,
    width:1
  },
  {
    title: "2px",
    id:2,
    width:2
  },
  {
    title: "3px",
    id:3,
    width:3
  },
  {
    title: "4px",
    id:4,
    width:4
  }
] as BorderWidthItem[]
