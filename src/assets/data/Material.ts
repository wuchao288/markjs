export type PageBgImageItem={
    name: string,
    url:string
}
  //背景
  export const PageBgImageList=[
    {
      name: 'bg1.jpeg',
      url: new URL('@/assets/images/bg/bg1.jpeg',import.meta.url).href,
    },
    {
      name: 'bg2.jpeg',
      url: new URL('@/assets/images/bg/bg2.jpeg',import.meta.url).href,
    },
    {
      name: 'bg3.jpeg',
      url: new URL('@/assets/images/bg/bg3.jpeg',import.meta.url).href,
    },
    {
      name: 'bg4.jpeg',
      url: new URL('@/assets/images/bg/bg4.jpeg',import.meta.url).href
    }
  ] as PageBgImageItem[]


export type StyleFontItem={
    preview:string,
    alias:string,//显示名称
    value:string,//字体
    url:string//字体路径
}

export const StyleFontList=[ 
{ 
    "alias":"アプリ明朝",
    "preview":new URL("@/assets/fonts/473404317567549440.png",import.meta.url).href,
    "url":new URL("@/assets/fonts/473404317567549440.otf",import.meta.url).href,
    "value":"アプリ明朝"
},
{ 
    "alias":"karakaze",
    "preview":new URL("@/assets/fonts/475486472288337920.png",import.meta.url).href,
    "url":new URL("@/assets/fonts/475486472288337920.otf",import.meta.url).href,
    "value":"karakaze"
}] as StyleFontItem[]


//文字效果
export type TextEffectItem={
    preview:string,
    url:string//字体路径
    data:object,
    id:string
}

export const  TextEffectItemList=[{
    preview:new URL("@/assets/images/mate/texteffect/mate1.png",import.meta.url).href,
    url:'',
    id:"1",
    data:{"tag":"Group","children":[{"tag":"Rect","id":"yr149pEBOATiHfHaaEkt9","name":"Rect","zIndex":1,"x":173.44461305007587,"y":238.99848254931715,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(255, 69, 0, 0.68)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"TAx_vbpqwJbhOPiqhdu34","name":"Text","zIndex":2,"x":191.65402124430955,"y":269.9544764795144,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate2.png",import.meta.url).href,
    url:'',
    id:"2",
    data:{"tag":"Group","children":[{"tag":"Rect","id":"yr149pEBOATiHfHaaEkt9","name":"Rect","zIndex":1,"x":173.44461305007587,"y":238.99848254931715,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(255, 69, 0, 0.68)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"TAx_vbpqwJbhOPiqhdu34","name":"Text","zIndex":2,"x":191.65402124430955,"y":269.9544764795144,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate3.png",import.meta.url).href,
    url:'',
    id:"3",
    data:{"tag":"Group","children":[{"tag":"Rect","id":"yr149pEBOATiHfHaaEkt9","name":"Rect","zIndex":1,"x":173.44461305007587,"y":238.99848254931715,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(255, 69, 0, 0.68)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"TAx_vbpqwJbhOPiqhdu34","name":"Text","zIndex":2,"x":191.65402124430955,"y":269.9544764795144,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate4.png",import.meta.url).href,
    url:'',
    id:"4",
    data:{"tag":"Group","children":[{"tag":"Rect","id":"yr149pEBOATiHfHaaEkt9","name":"Rect","zIndex":1,"x":173.44461305007587,"y":238.99848254931715,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(255, 69, 0, 0.68)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"TAx_vbpqwJbhOPiqhdu34","name":"Text","zIndex":2,"x":191.65402124430955,"y":269.9544764795144,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate5.png",import.meta.url).href,
    url:'',
    id:"5",
    data:{"tag":"Group","children":[{"tag":"Rect","id":"yr149pEBOATiHfHaaEkt9","name":"Rect","zIndex":1,"x":173.44461305007587,"y":238.99848254931715,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(255, 69, 0, 0.68)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"TAx_vbpqwJbhOPiqhdu34","name":"Text","zIndex":2,"x":191.65402124430955,"y":269.9544764795144,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
}] as TextEffectItem[]