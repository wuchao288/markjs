

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
     title: "header.fitscreen",
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
    title: "1200px*1920px",
    width: 1200,
    height: 1920,
    id:3
  },
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


export type ArrowTypeItem={
  title: string,
  id:string|number,
  type:string,
  icon:string
}

export const ArrowTypeList=[
  {
    title: "header.onearrow",
    id:1,
    type:"one" ,
    icon:"icon-arrow-down"
  },
  {
    title: "header.twoarrow",
    id:2,
    type:"two",
    icon:"icon-shuangjiantou2"
  }
] as ArrowTypeItem[]


export type MarkTypeItem={
  title: string,
  id:string|number,
  rotate:string,
  icon:string
}

export const MarkTypeList=[
  {
    title: "header.verticalmark",
    id:1,
    rotate:'90',
    icon:"icon-markv-copy"
  },
  {
    title: "header.horizontalmark",
    id:2,
    rotate:'0',
    icon:"icon-xianduan"
  },
  {
    title: "header.anglemark45",
    id:3,
    rotate:'45',
    icon:"icon-caotuxianduanchangduyueshu"
  }
] as MarkTypeItem[]


export type BorderWidthItem={
  title: string,
  id:string|number,
  width:number 
}

export const BorderWidthList=[
  {
    title: "0px",
    id:0,
    width:0
  },
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
  },
  {
    title: "5px",
    id:5,
    width:5
  }
] as BorderWidthItem[]


export type SharpTypeItem={
  title: string,
  id:string|number,
  value:string,
  type:string,
  icon:string
}

export const SharpTypeList=[
  {
    title: "header.rect",
    id:1,
    value:"",
    type:'Rect',
    icon:'icon-juxing'
  },
  {
    title: 'header.ellipse',
    id:2,
    value:'',
    type:'Ellipse',
    icon:'icon-yuanxing'
  },
  {
    title: 'header.line',
    id:2,
    value:'',
    type:'Line',
    icon:'icon-xianduan-zhixian'
  },
  {
    title: "header.star",
    id:3,
    value:'5',
    type:'Star',
    icon:'icon-star'
  },
  {
    title: "header.triangle",
    id:4,
    value:"3",
    type:'Polygon',
    icon:'icon-sanjiaoxing'
  },
  {
    title: "header.pentagon",
    id:5,
    value:"5",
    type:'Polygon',
    icon:'icon-pentagon'
  },
  {
    title: "header.hexagon",
    id:6,
    value:"6",
    type:'Polygon',
    icon:'icon-hexagon'
  }
] as SharpTypeItem[]