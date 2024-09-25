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
}
,{ 
  "alias":"karakaze",
  "preview":new URL("@/assets/fonts/475486472288337920.png",import.meta.url).href,
  "url":new URL("@/assets/fonts/475486472288337920.otf",import.meta.url).href,
  "value":"karakaze"
},{ 
  "alias":"SoukouMincho",
  "preview":new URL("@/assets/fonts/SoukouMincho.png",import.meta.url).href,
  "url":new URL("@/assets/fonts/SoukouMincho.ttf",import.meta.url).href,
  "value":"SoukouMincho"
}
,{ 
  "alias":"FontopoNIHONGO",
  "preview":new URL("@/assets/fonts/FontopoNIHONGO.png",import.meta.url).href,
  "url":new URL("@/assets/fonts/FontopoNIHONGO.otf",import.meta.url).href,
  "value":"FontopoNIHONGO"
}] as StyleFontItem[]


//文字效果
export type TextEffectItem={
    preview:string
    url:string//字体路径
    data:object
    id:string
}

export const  TextEffectItemList=[
  {
    preview:new URL("@/assets/images/mate/texteffect/11.png",import.meta.url).href,
    url:'',
    id:"10011",
    data:
    {"tag":"Group","id":"fQaUnheirpPvBCvFa2Icd","zIndex":1,"x":229.89377845220028,"y":258.1183611532626,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"DFH3i8lzBtb_qzFiw0zR2","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":120,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#0c6bca"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#0c6bca"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷蔵室","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"5QhpKDRAc_gd6JAFQhMzN","name":"Text","visible":true,"zIndex":2,"x":18.209408194233788,"y":10.015174506828487,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"250L","fontFamily":"アプリ明朝","fontSize":33,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"2JH3krEcijlW6bwzcD0b2","name":"Text","visible":true,"zIndex":3,"x":14.567526555387076,"y":42.04275365514343,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
  },
  {
    preview:new URL("@/assets/images/mate/texteffect/1001.png",import.meta.url).href,
    url:'',
    id:"1001",
    data:
    {"tag":"Group","id":"kgPTjw0g1HwuT8Dj5pVMG","zIndex":1,"x":300,"y":300,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"DFH3i8lzBtb_qzFiw0zR2","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":120,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#46aaa3"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#46aaa3"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷凍室","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"5QhpKDRAc_gd6JAFQhMzN","name":"Text","visible":true,"zIndex":2,"x":18.209408194233788,"y":10.015174506828487,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"150L","fontFamily":"アプリ明朝","fontSize":33,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"2JH3krEcijlW6bwzcD0b2","name":"Text","visible":true,"zIndex":3,"x":14.567526555387076,"y":42.04275365514343,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}  },
   ,
   {
    preview:new URL("@/assets/images/mate/texteffect/1002.png",import.meta.url).href,
    url:'',
    id:"1002",
    data:
    {"tag":"Group","x":247.26858877086488,"y":251.82094081942324,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"fWWGfWUc_eutty_eyQpDu","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":-1.1368683772161603e-13,"y":5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"観音\n開き","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":4,"lineHeight":{"type":"percent","value":1.5},"id":"ylXEcnDZjLFeFcdNB1bhl","name":"Text","visible":true,"zIndex":2,"x":19.119878603945267,"y":8.194233687405301,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]} 
    },
    {
      preview:new URL("@/assets/images/mate/texteffect/1003.png",import.meta.url).href,
      url:'',
      id:"1003",
      data:
      {"tag":"Group","x":147.11001517450745,"y":184.00531107739005,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"2VJAzGQR8F0idFip9JpM8","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":130,"height":44,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"2年保証","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":3,"lineHeight":{"type":"percent","value":1.5},"id":"u9QvHV5LqD4wCxRQKfXwh","name":"Text","visible":true,"zIndex":2,"x":10.925644916539568,"y":0.8209408194232992,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
   },
   {
    preview:new URL("@/assets/images/mate/texteffect/1004.png",import.meta.url).href,
    url:'',
    id:"1004",
    data:
    {"tag":"Group","x":147.11001517450745,"y":184.00531107739005,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"2VJAzGQR8F0idFip9JpM8","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":130,"height":44,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"ファン式","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":3,"lineHeight":{"type":"percent","value":1.5},"id":"u9QvHV5LqD4wCxRQKfXwh","name":"Text","visible":true,"zIndex":2,"x":3.641881638846092,"y":0.8209408194232992,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]} },
   ,{
    preview:new URL("@/assets/images/mate/texteffect/mate1.png",import.meta.url).href,
    url:'',
    id:"1",
    data:{"tag":"Group","x":214.3110773899848,"y":246.3854324734446,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Ellipse","id":"at3H4GanX_s1Xk7MWHeKM","name":"Ellipse","visible":true,"locked":false,"zIndex":0,"x":0.08952959028829355,"y":1.7025796661608297,"width":131,"height":131,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#2d2101"}],"stroke":"#4A4A4A","strokeWidth":1,"dashPattern":[],"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#fcc02e"}}},{"tag":"Ellipse","id":"UzJrNYGZmeMxbDy1cX6JD","name":"Ellipse","visible":true,"locked":false,"zIndex":1,"x":-1.1368683772161603e-13,"y":0,"width":131,"height":131,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#fcc02e"}],"stroke":"#FAD400","strokeWidth":1,"dashPattern":[],"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#fcc02e"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"52L","fontFamily":"アプリ明朝","fontSize":50,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"I-ADz50j244WhYr7oM5Bb","name":"Text","visible":true,"zIndex":4,"x":13.879731014249842,"y":26.737846841184023,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},{
    preview:new URL("@/assets/images/mate/texteffect/mate4.png",import.meta.url).href,
    url:'',
    id:"4",
    data:{"tag":"Group","id":"qCyfq0pE15xRrYeleb8tb","zIndex":1,"x":314.56752655538696,"y":254.4764795144158,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"H0jtRKSeSY2Ee4hwt7NON","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":0,"y":0,"width":156.29742033383917,"height":107.69017666415002,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff"}],"stroke":"#DE6DF5","strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Rect","id":"YeXKFNJjaiccDoA4jcWV7","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":0.7814871016691959,"y":1.0769017666415002,"width":154.73444613050077,"height":105.53637313086698,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#dedede"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Rect","id":"J8iMl4F353hGX4zXoXA6H","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":3.1259484066767835,"y":4.307607066565939,"width":150.04552352048555,"height":99.07496253101797,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"90L","fontFamily":"A-OTF-GothicMB101Pr5-Reg","fontSize":39,"fontWeight":"normal","letterSpacing":2,"lineHeight":{"type":"percent","value":"1.50"},"id":"-QK-qHvACG9iuKdS_F_N6","name":"Text","visible":true,"zIndex":5,"x":35.97670531352714,"y":37.6958009850594,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"冷藏室","fontFamily":"A-OTF-GothicMB101Pr5-Reg","fontSize":21,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"GYrq4lACXEB1MrHJvfKtu","name":"Text","visible":true,"zIndex":6,"x":40.32473598123491,"y":11.009981117244099,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
// {
//     preview:new URL("@/assets/images/mate/texteffect/mate5.png",import.meta.url).href,
//     url:'',
//     id:"5",
//     data:{"tag":"Group","x":300.0000000000001,"y":300,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"NvHebzVaHWayrr_2QUSFp","name":"Rect","zIndex":3,"x":0,"y":-5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"rgba(248, 231, 28, 1)","stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":8},{"tag":"Box","id":"Ev92jQr6chxmPh3G-kFNP","name":"Text","zIndex":4,"x":24.793388429751985,"y":34.710743801652825,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":"#ffffff","stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"cornerRadius":4,"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"100cm","fontSize":14,"selected":true,"padding":[4,8],"editable":false,"shadow":{"x":0,"y":0,"blur":4,"color":"#4DCB71AA"}}]}]}
// },
{
  preview:new URL("@/assets/images/mate/texteffect/2-1.png",import.meta.url).href,
  url:'',
  id:"1002",
  data:{"tag":"Group","x":8.178899383133627,"y":166.35316392757622,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,
  "hitChildren":false,"children":[{"tag":"Rect","id":"Sm2r8gLuK4382IVUBNrjl","name":"image","locked":false,"zIndex":1,
  "x":291.12844380309053,"y":136.4366757793988,"width":582.2568876061815,"height":234.3752698267243,"scaleX":1,
  "scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
  "url":new URL("@/assets/images/mate/texteffect/2.png",import.meta.url).href,"mode":"strench"},
  "data":{"original":new URL("@/assets/images/mate/texteffect/2.png",import.meta.url).href,
  "sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"01","fontFamily":"アプリ明朝","fontSize":46.57273169791414,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"7YApT_IcNc-1VuMaAmisr","name":"Text","visible":true,"zIndex":1,"x":4.222115019071207,"y":7.753708637328881,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"安全上のご注意","fontFamily":"アプリ明朝","fontSize":27.943639018748474,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"-3B2n2f51ktVfC9waKmoD","name":"Text","visible":true,"zIndex":2,"x":337.4522126145496,"y":22.33201088648356,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"· 液晶保護フイルムのサイズは、ご指定の型番にてご利用\nできるものになります。他の機種ではご利用になれない場\n合がごさいます。必ず機種型番を合わせ乙ご注文ください。","fontFamily":"アプリ明朝","fontSize":19.705484046438954,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"b-E7m2bP0zxctsk1Glgrj","name":"Text","visible":true,"zIndex":3,"x":10.808368500245301,"y":85.95860252425426,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"楽天片開き冷蔵庫","fontFamily":"アプリ明朝","fontSize":22.661306653404797,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"4_iqTGBtfXSd00p7PkfL9","name":"Text","visible":true,"zIndex":4,"x":194.38810120381345,"y":206.05051465176555,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,
  "padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/3-1.png",import.meta.url).href,
  url:'',
  id:"1003",
  data:{"tag":"Group","id":"uC2bG-5EwScfvpEsTHGkk","zIndex":1,"x":258.1645957289336,"y":254.49685984457864,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"wDe00cHPvHdThrojJCas0","name":"image","locked":false,"zIndex":1,"x":208.5630359020166,"y":188.19555192721032,"width":417.1260718040332,"height":376.39110385442063,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/3.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/3.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#F7371E","text":"人気\n商品","fontFamily":"アプリ明朝","fontSize":40.01695003142718,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"fzNz6jCu5GDKuWSqQvTWP","name":"Text","visible":true,"zIndex":1,"x":171.18536731728378,"y":129.6680635461789,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},

{
  preview:new URL("@/assets/images/mate/texteffect/12.png",import.meta.url).href,
  url:'',
  id:"10012",
  data:{"tag":"Group","x":159.5,"y":252,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"zJ_5TlWe1c2IxC1B8dNSe","name":"image","locked":false,"zIndex":1,"x":140.50000000000003,"y":48.000000000000014,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/12-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/12-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"NEW","fontFamily":"アプリ明朝","fontSize":53,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"tDKxl3dfPezCb3Y3RWQCR","name":"Text","visible":true,"zIndex":1,"x":63.057195904333526,"y":5.123021160968051,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/13.png",import.meta.url).href,
  url:'',
  id:"10013",
  data:{"tag":"Group","x":39.3116609216338,"y":100.48966373260018,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"UU7xqbjUh4Lh-qM997o40","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":524,"height":343,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#7ba5e3"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":16,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#7ba5e3"}}},{"tag":"Rect","id":"p-uGVlswplkiFxuGgrrYE","name":"image","locked":false,"zIndex":2,"x":95.13116542693069,"y":90.25071535392402,"width":57,"height":87,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/13-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/13-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"チルド","fontFamily":"アプリ明朝","fontSize":"64","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"zfLR1rcGZjcUbJ7wyMmPh","name":"Text","visible":true,"zIndex":2,"x":125.93871844103694,"y":38.06187405903876,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷蔵室より","fontFamily":"アプリ明朝","fontSize":"46","fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"7nVjGjAap4OrrY4fn_08x","name":"Text","visible":true,"zIndex":2,"x":64.92202648352554,"y":148.21361912732405,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"低い温度で保存","fontFamily":"アプリ明朝","fontSize":"46","fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"SsQj8o5W2HDxYczTcdbYu","name":"Text","visible":true,"zIndex":2,"x":64.906851976697,"y":245.61877845964565,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/14.png",import.meta.url).href,
  url:'',
  id:"10014",
  data:
  {"tag":"Group","x":124.5,"y":124.5,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"62A57bqLlKDerOBvGdE7P","name":"image","locked":false,"zIndex":1,"x":175.50000000000014,"y":175.5,"width":351,"height":351,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/14-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/14-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"人気商品","fontFamily":"アプリ明朝","fontSize":"42","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"rpRxr1p45TaG9yVUSoeN8","name":"Text","visible":true,"zIndex":1,"x":84.45295902883163,"y":138.17071320182094,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/15.png",import.meta.url).href,
  url:'',
  id:"10015",
  data:{"tag":"Group","x":43.87842216841818,"y":199.14236470250358,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"1RCyD2dUCoba15aYVtRXC","name":"image","locked":false,"zIndex":1,"x":258.50000000000017,"y":83.99999999999996,"width":517,"height":168,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/15-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/15-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"スペード","fontFamily":"アプリ明朝","fontSize":46,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"wuhrOUaLZBA0B6dhJkA_1","name":"Text","visible":true,"zIndex":1,"x":93.14737449319034,"y":12.54200555546305,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#1463C3","text":"マネージャーです","fontFamily":"アプリ明朝","fontSize":32,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"bfNTQOvYcrKd7-bGGovz4","name":"Text","visible":true,"zIndex":1,"x":178.71641849926016,"y":106.30528324893805,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,
  "padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/16.png",import.meta.url).href,
  url:'',
  id:"10016",
  data:
  {"tag":"Group","x":106.96347526157604,"y":225.88434311478545,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"_IIIrcSJhm58ounsuTCm4","name":"image","locked":false,"zIndex":1,"x":196.50000000000017,"y":84.00000000000001,"width":393,"height":168,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/16-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/16-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"庫内灯","fontFamily":"アプリ明朝","fontSize":"64","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"2h_1wfJnUCAJHKjMDsBAc","name":"Text","visible":true,"zIndex":1,"x":103.81042458667889,"y":38.60731090645879,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/18.png",import.meta.url).href,
  url:'',
  id:"10018",
  data:
  {"tag":"Group","x":91.5,"y":91.49999999999997,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"eWx6MPTb2F6cVX8EJEXKh","name":"image","locked":false,"zIndex":1,"x":208.50000000000006,"y":208.5000000000001,"width":417,"height":417,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/18-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/18-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#65BCD4","text":"除菌","fontFamily":"アプリ明朝","fontSize":97,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_2F1vQG6AOGxerzFlw0cm","name":"Text","visible":true,"zIndex":1,"x":107.60782636453769,"y":211.25734884058642,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#65BCD4","text":"さらに","fontFamily":"アプリ明朝","fontSize":97,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"5M0VeqNqMJyAhs1HY1wzK","name":"Text","visible":true,"zIndex":1,"x":56.978258950154896,"y":51.49456008031433,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/17.png",import.meta.url).href,
  url:'',
  id:"10017",
  data:
  {"tag":"Group","x":21.99975518278336,"y":162.18862525285473,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
  "rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
  "children":[{"tag":"Rect","id":"v6-qgqrst5JbPU6Ez-qwL","name":"image","locked":false,"zIndex":1,
  "x":276.00000000000006,"y":118.00000000000009,"width":552,"height":236,"scaleX":1.0000000000000002,
  "scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
  "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/17-1.png",import.meta.url).href,
  "mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/17-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#6F9EB2","text":"調節脚","fontFamily":"アプリ明朝","fontSize":79,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"XJXv5nQNIOOyCwhKimaXL","name":"Text","visible":true,"zIndex":1,"x":176.0275589295079,"y":60.42138992165215,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{
  preview:new URL("@/assets/images/mate/texteffect/20.png",import.meta.url).href,
  url:'',
  id:"10020",
  data:{"tag":"Group","x":97,"y":281,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
  "children":[{"tag":"Rect","id":"yCZXWi9z89rUocbqxqqt-","name":"image","locked":false,"zIndex":1,"x":203,"y":19,"width":406,
  "height":38,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
  "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/20.png",import.meta.url).href,"mode":"strench"},
  "data":{"original":new URL("@/assets/images/mate/texteffect/20-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},
  {"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"水洗いできるフィルターで  いつでも清潔","fontFamily":"アプリ明朝",
  "fontSize":19.35777919265272,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"W7FeK-oBFXg4sTWgZ7PF8",
  "name":"Text","visible":true,"zIndex":1,"x":15.6799041489449,"y":0.28428782214680837,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},

{
  preview:new URL("@/assets/images/mate/texteffect/22.png",import.meta.url).href,
  url:'',
  id:"10022",
  data:{"tag":"Group","x":20.21665740188098,"y":214.4584653879241,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"9wmeLKtDY9HCbhPP31Dq4","name":"image","locked":false,"zIndex":1,"x":272.49999999999994,"y":69.50000000000001,"width":545,"height":139,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
  "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/22-1.jpg",import.meta.url).href,"mode":"strench"},
  "data":{"original":new URL("@/assets/images/mate/texteffect/22-1.jpg",import.meta.url).href,
  "sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,
  "fill":"#FFFFFF","text":"お手入れもカンタン","fontFamily":"アプリ明朝","fontSize":54,
  "fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},
  "id":"LTuXj1wHhaLDL3JzFsqs4","name":"Text","visible":true,"zIndex":1,"x":18.85102548017153,
  "y":25.937117489406262,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,
  "skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]
  }
 },
 {
  preview:new URL("@/assets/images/mate/texteffect/21.png",import.meta.url).href,
  url:'',
  id:"10021",
  data:{"tag":"Group","x":179.63908098477935,"y":210.92094371789028,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,
  "editable":true,"hitChildren":false,"children":[{"tag":"Ellipse","id":"e2nwZUu1kVfRiEkvMowkS","name":"Ellipse",
  "visible":true,"locked":false,"zIndex":3,"x":-5.684341886080802e-14,"y":-2.842170943040401e-14,"width":265,"height":262,
  "scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#2a4361"}],
  "strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":
  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#2a4361"}}},
  {"tag":"Ellipse","id":"JopEDg0ykJq3K2T4z9Pn-","name":"Ellipse","visible":true,"locked":false,
  "zIndex":3,"x":28.563126813292513,"y":27.645703869141954,"width":208,"height":206,"scaleX":1,"scaleY":1,"rotation":0,
  "skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#2a4361"}],"stroke":"#FFFFFF",
  "strokeWidth":"2","dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure",
  "gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#2a4361"}}},
  {"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"手元重量\n0.45kg","fontFamily":"アプリ明朝","fontSize":36,
  "letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"qh_0bIiR5kN3IqRSa1AVJ","name":"Text","visible":true,
  "zIndex":4,"x":55.689380439878846,"y":69.05827978887322,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,
  "padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
 {
  preview:new URL("@/assets/images/mate/texteffect/23.png",import.meta.url).href,
  url:'',
  id:"10023",
  data:{"tag":"Group","x":226.01584892935432,"y":210.87506322711175,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"QlX8IGpZKJcDomJpJxr9B","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":-5.684341886080802e-14,"y":1.4210854715202004e-14,"width":182,"height":87,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":"6","data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Rect","id":"oDtyEby_aP247Jzt8pfo3","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":6.29067610858192,"y":6.020907098297215,"width":169,"height":29,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#67bed3"}],"strokeWidth":200,"dashPattern":[],"cornerRadius":"6","data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#67bed3"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"Point.01","fontFamily":"アプリ明朝","fontSize":13,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"D-3vk0YRuF3qZNcdZrldz","name":"Text","visible":true,"zIndex":3,"x":62.43310220488743,"y":6.575619625695538,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"高い節水機能","fontFamily":"アプリ明朝","fontSize":23,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"ZZLkS8pKU1j4JgGib-G5E","name":"Text","visible":true,"zIndex":3,"x":11.607595895342598,"y":42.20367560276516,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
 },
 {
  preview:new URL("@/assets/images/mate/texteffect/24.png",import.meta.url).href,
  url:'',
  id:"10024",
  data:
  {"tag":"Group","x":22.5,"y":263,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,
  "editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"swFMtYH3DLnfyBpdGckhf",
  "name":"image","locked":false,"zIndex":1,"x":277.50000000000006,"y":37.000000000000064,"width":555,
  "height":74,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center",
  "editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/24-1.png",import.meta.url).href,"mode":"strench"},
  "data":{"original":new URL("@/assets/images/mate/texteffect/24-1.png",import.meta.url).href,
  "sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"槽洗浄コース",
  "fontFamily":"アプリ明朝","fontSize":41,"letterSpacing":0,
  "lineHeight":{"type":"percent","value":"1.50"},"id":"CFVMWud-zBebOS5AKkhm5","name":"Text","visible":true,"zIndex":1,"x":158.2283763277694,"y":4.2230652503793635,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
, {
  preview:new URL("@/assets/images/mate/texteffect/25.png",import.meta.url).href,
  url:'',
  id:"10025",
  data:{"tag":"Group","x":51.61229135053111,"y":356.00986342943855,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"uXEEuNS3AM60pv00hSLbk","name":"image","locked":false,"zIndex":2,"x":262.50000000000006,"y":40.50000000000001,"width":525,"height":81,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
  "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/25-1.png",import.meta.url).href,"mode":"strench"},
  "data":{"original":new URL("@/assets/images/mate/texteffect/25-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},
  {"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"独自の乾燥技術","fontFamily":"アプリ明朝","fontSize":47,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"7tbanihs7k_85ZhyLfSXF","name":"Text","visible":true,"zIndex":3,"x":108.17526555386951,"y":1.349772382397589,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
 }
 ,
 , {
  preview:new URL("@/assets/images/mate/texteffect/26.png",import.meta.url).href,
  url:'',
  id:"10026",
  data:{"tag":"Group","x":49.499999999999886,"y":266.0000000000001,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"IAhph_WtZuM8RN_js35sQ","name":"image","locked":false,"zIndex":1,"x":250.50000000000017,"y":34.00000000000001,"width":501,"height":68,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
  "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/26-1.png",import.meta.url).href,
  "mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/26-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"洗剤投入ケース（液体/粉末）","fontFamily":"アプリ明朝","fontSize":30,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"dv3XDqqdE5DvHlJ1s11Gt","name":"Text","visible":true,"zIndex":1,"x":52.76059689345482,"y":7.755436236731555,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
 }
] as TextEffectItem[]


export type ImageEffectItem={
  preview:string
  url:string//图片
  id:string
  type:string  //img/svg
}

export const ImageEffectList=[
  {
    preview:new URL("@/assets/images/mate/imageeffect/1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/1.png",import.meta.url).href,
    id:"1001",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/2.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/2.png",import.meta.url).href,
    id:"1002",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/3.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/3.png",import.meta.url).href,
    id:"1003",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/4.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/4.png",import.meta.url).href,
    id:"1004",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/5.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/5.png",import.meta.url).href,
    id:"1005",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/6.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/6.png",import.meta.url).href,
    id:"1006",
    type:"img"
  },

  {
    preview:new URL("@/assets/images/mate/imageeffect/7.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/7.png",import.meta.url).href,
    id:"1007",
    type:"img"
  },

  {
    preview:new URL("@/assets/images/mate/imageeffect/8.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/8.png",import.meta.url).href,
    id:"1008",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/9.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/9.png",import.meta.url).href,
    id:"1009",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/10.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/10.png",import.meta.url).href,
    id:"1010",
    type:"img"
  },

  {
    preview:new URL("@/assets/images/mate/imageeffect/11.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/11.png",import.meta.url).href,
    id:"1011",
    type:"img"
  },
  {
    preview:new URL("@/assets/images/mate/imageeffect/12.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/12.png",import.meta.url).href,
    id:"1012",
    type:"img"
  },


  {
    preview:new URL("@/assets/images/mate/imageeffect/20-1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/20-1.png",import.meta.url).href,
    id:"1020",
    type:"img"
  },


  {
    preview:new URL("@/assets/images/mate/imageeffect/22-1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/22-1.png",import.meta.url).href,
    id:"1022",
    type:"img"
  },



  {
    preview:new URL("@/assets/images/mate/imageeffect/24-1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/24-1.png",import.meta.url).href,
    id:"1024",
    type:"img"
  },

  {
    preview:new URL("@/assets/images/mate/imageeffect/25-1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/25-1.png",import.meta.url).href,
    id:"1025",
    type:"img"
  },

  {
    preview:new URL("@/assets/images/mate/imageeffect/26-1.png",import.meta.url).href,
    url:new URL("@/assets/images/mate/imageeffect/26-1.png",import.meta.url).href,
    id:"1026",
    type:"img"
  },

  {
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