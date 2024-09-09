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
    preview:string
    url:string//字体路径
    data:object
    id:string
}

export const  TextEffectItemList=[{
    preview:new URL("@/assets/images/mate/texteffect/mate1.png",import.meta.url).href,
    url:'',
    id:"1",
    data:{"tag":"Group","x":300.0000000000001,"y":300.00000000000006,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"8xSahkZyJVsnppVi3aoge","name":"Rect","zIndex":1,"x":0,"y":-5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Line","height":20,"points":[],"curve":true,"id":"A5bIRLfNxmBu8USeH6fVm","name":"Line","zIndex":2,"x":0,"y":-5.684341886080802e-14,"width":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[]},{"tag":"Box","id":"mnuUuHjjOnP6jEQrOtnXN","name":"Text","zIndex":3,"x":0,"y":-5.684341886080802e-14,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate2.png",import.meta.url).href,
    url:'',
    id:"2",
    data:{"tag":"Group","editable": true,
    "hitChildren": false,"children":[{"tag":"Rect","id":"JfgWpC5Vb-YVbGxdkzhpF","name":"Rect","zIndex":1,"x":300,"y":300,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"rgba(184, 233, 134, 1)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"FxZtWrU13CEuGm-xjSECD","name":"Text","zIndex":2,"x":325.04638218923935,"y":328.9424860853432,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate3.png",import.meta.url).href,
    url:'',
    id:"3",
    data:{"tag":"Group","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"yj2L_7Tp_AIG0pzOTrp-w","name":"Rect","zIndex":1,"x":300,"y":300,"width":100,"height":100,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"i7EYsreneNYph-b9ks6F3","name":"Text","zIndex":2,"x":321.70686456400745,"y":335.6215213358071,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":2,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"fontWeight":"normal","selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate4.png",import.meta.url).href,
    url:'',
    id:"4",
    data:{"tag":"Group","x":300.0000000000001,"y":300,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"NvHebzVaHWayrr_2QUSFp","name":"Rect","zIndex":3,"x":0,"y":-5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"rgba(248, 231, 28, 1)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"Ev92jQr6chxmPh3G-kFNP","name":"Text","zIndex":4,"x":24.793388429751985,"y":34.710743801652825,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"cornerRadius":4,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate5.png",import.meta.url).href,
    url:'',
    id:"5",
    data:{"tag":"Group","x":300.0000000000001,"y":300,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"NvHebzVaHWayrr_2QUSFp","name":"Rect","zIndex":3,"x":0,"y":-5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"rgba(248, 231, 28, 1)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"Ev92jQr6chxmPh3G-kFNP","name":"Text","zIndex":4,"x":24.793388429751985,"y":34.710743801652825,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"cornerRadius":4,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
}] as TextEffectItem[]


export type ImageEffectItem={
  preview:string
  url:string//图片
  id:string
  type:string  //img/svg
}

export const ImageEffectList=[{
  preview:new URL("@/assets/images/mate/imageeffect/p1.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/p1.png",import.meta.url).href,
  id:"1",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/p2.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/p2.png",import.meta.url).href,
  id:"2",
  type:"img"
}] as ImageEffectItem[]