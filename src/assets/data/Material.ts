export type PageBgImageItem={
    name: string,
    url:string
}
  //背景
  export const PageBgImageList=[{
    name: '1.jpg',
    url: new URL('@/assets/images/bg/bgimg1.jpg',import.meta.url).href
  },{
    name: '2.jpg',
    url: new URL('@/assets/images/bg/bgimg2.jpg',import.meta.url).href
  },{
    name: '3.jpg',
    url: new URL('@/assets/images/bg/bgimg3.jpg',import.meta.url).href
  },{
    name: '4.jpg',
    url: new URL('@/assets/images/bg/bgimg4.jpg',import.meta.url).href
  },{
    name: '5.jpg',
    url: new URL('@/assets/images/bg/bgimg5.jpg',import.meta.url).href
  },{
    name: '6.jpg',
    url: new URL('@/assets/images/bg/bgimg6.jpg',import.meta.url).href
  },{
    name: '7.jpg',
    url: new URL('@/assets/images/bg/bgimg7.jpg',import.meta.url).href
  },{
    name: '8.jpg',
    url: new URL('@/assets/images/bg/bgimg8.jpg',import.meta.url).href
  },{
    name: '9.jpg',
    url: new URL('@/assets/images/bg/bgimg9.jpg',import.meta.url).href
  },{
    name: '10.jpg',
    url: new URL('@/assets/images/bg/bgimg10.jpg',import.meta.url).href
  },{
    name: '11.jpg',
    url: new URL('@/assets/images/bg/bgimg11.jpg',import.meta.url).href
  },{
    name: '12.jpg',
    url: new URL('@/assets/images/bg/bgimg12.jpg',import.meta.url).href
  },{
    name: '13.jpg',
    url: new URL('@/assets/images/bg/bgimg13.jpg',import.meta.url).href
  },{
    name: '14.jpg',
    url: new URL('@/assets/images/bg/bgimg14.jpg',import.meta.url).href
  },{
    name: '15.jpg',
    url: new URL('@/assets/images/bg/bgimg15.jpg',import.meta.url).href
  },{
    name: '16.jpg',
    url: new URL('@/assets/images/bg/bgimg16.jpg',import.meta.url).href
  },{
    name: '17.jpg',
    url: new URL('@/assets/images/bg/bgimg17.jpg',import.meta.url).href
  },{
    name: '18.jpg',
    url: new URL('@/assets/images/bg/bgimg18.jpg',import.meta.url).href
  },{
    name: '19.jpg',
    url: new URL('@/assets/images/bg/bgimg19.jpg',import.meta.url).href
  },{
    name: '20.jpg',
    url: new URL('@/assets/images/bg/bgimg20.jpg',import.meta.url).href
  },{
    name: '21.jpg',
    url: new URL('@/assets/images/bg/bgimg21.jpg',import.meta.url).href
  },{
    name: '22.jpg',
    url: new URL('@/assets/images/bg/bgimg22.jpg',import.meta.url).href
  },{
    name: '23.jpg',
    url: new URL('@/assets/images/bg/bgimg23.jpg',import.meta.url).href
  },{
    name: '24.jpg',
    url: new URL('@/assets/images/bg/bgimg24.jpg',import.meta.url).href
  }] as PageBgImageItem[]


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
  "alias":"A-OTF-GothicMB101Pr5-Reg",
  "preview":new URL("@/assets/fonts/A-OTF-GothicMB101Pr5-Reg.png",import.meta.url).href,
  "url":new URL("@/assets/fonts/A-OTF-GothicMB101Pr5-Reg.otf",import.meta.url).href,
  "value":"A-OTF-GothicMB101Pr5-Reg"
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
},
{
  preview:new URL("@/assets/images/mate/texteffect/1-1.png",import.meta.url).href,
  url:'',
  id:"6",
  data:{"tag":"Group","x":135.39399990609905,"y":855.7171440472613,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"H9FHOVSNMDt6ZaKeSkGOF","name":"image","locked":false,"zIndex":2,"x":299.7830263232431,"y":108.49450367299453,"width":599.5660526464864,"height":216.33826641883527,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#9013FE","text":"直播间秒杀价","fontFamily":"A-OTF-GothicMB101Pr5-Reg","fontSize":63,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"8VlSSjG_uLzx_Iekm6SQl","name":"Text","visible":true,"zIndex":2,"x":105.48002023267509,"y":56.6318053129969,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"亮点1","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"KdPVHsvvNjyp2phkaUH7A","name":"Text","visible":true,"zIndex":3,"x":109.31673504561707,"y":167.3376060636969,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"亮点2","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"QGs7lTvNAOiuDWQR8tZHf","name":"Text","visible":true,"zIndex":4,"x":263.3158362781495,"y":166.12501471540912,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"亮点3","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"KMlWGiRjuR4-k4iao6rC4","name":"Text","visible":true,"zIndex":5,"x":413.67716346581926,"y":167.3376060636969,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"美妆限时福利抢购","fontFamily":"アプリ明朝","fontSize":28,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"xvsJmDYNU4sHeO6xzG5zS","name":"Text","visible":true,"zIndex":6,"x":177.221850549726,"y":1.1368683772161603e-13,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
] as TextEffectItem[]


export type ImageEffectItem={
  preview:string
  url:string//图片
  id:string
  type:string  //img/svg
}

export const ImageEffectList=[{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg1.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg1.png",import.meta.url).href,
  id:"1",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg2.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg2.png",import.meta.url).href,
  id:"2",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg3.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg3.png",import.meta.url).href,
  id:"3",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg4.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg4.png",import.meta.url).href,
  id:"4",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg5.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg5.png",import.meta.url).href,
  id:"5",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg6.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg6.png",import.meta.url).href,
  id:"6",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg7.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg7.png",import.meta.url).href,
  id:"7",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg8.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg8.png",import.meta.url).href,
  id:"8",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg9.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg9.png",import.meta.url).href,
  id:"9",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg10.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg10.png",import.meta.url).href,
  id:"10",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg11.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg11.png",import.meta.url).href,
  id:"11",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg12.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg12.png",import.meta.url).href,
  id:"12",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg13.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg13.png",import.meta.url).href,
  id:"13",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg14.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg14.png",import.meta.url).href,
  id:"14",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg15.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg15.png",import.meta.url).href,
  id:"15",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg16.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg16.png",import.meta.url).href,
  id:"16",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg17.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg17.png",import.meta.url).href,
  id:"17",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg18.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg18.png",import.meta.url).href,
  id:"18",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg19.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg19.png",import.meta.url).href,
  id:"19",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg20.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg20.png",import.meta.url).href,
  id:"20",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg21.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg21.png",import.meta.url).href,
  id:"21",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg22.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg22.png",import.meta.url).href,
  id:"22",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg23.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg23.png",import.meta.url).href,
  id:"23",
  type:"img"
},{
  preview:new URL("@/assets/images/mate/imageeffect/mateimg24.png",import.meta.url).href,
  url:new URL("@/assets/images/mate/imageeffect/mateimg24.png",import.meta.url).href,
  id:"24",
  type:"img"
}] as ImageEffectItem[]