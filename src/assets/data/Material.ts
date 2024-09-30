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
    {"tag":"Group","id":"fQaUnheirpPvBCvFa2Icd","zIndex":1,"x":229.89377845220028,"y":258.1183611532626,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"DFH3i8lzBtb_qzFiw0zR2","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":120,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#0c6bca"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#0c6bca"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷蔵室","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"5QhpKDRAc_gd6JAFQhMzN","name":"Text","visible":true,"zIndex":2,"x":18.209408194233788,"y":10.015174506828487,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"250L","fontFamily":"アプリ明朝","fontSize":33,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"2JH3krEcijlW6bwzcD0b2","name":"Text","visible":true,"zIndex":3,"x":14.567526555387076,"y":42.04275365514343,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
  },
  {
    preview:new URL("@/assets/images/mate/texteffect/1001.png",import.meta.url).href,
    url:'',
    id:"1001",
    data:
    {"tag":"Group","id":"kgPTjw0g1HwuT8Dj5pVMG","zIndex":1,"x":300,"y":300,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"DFH3i8lzBtb_qzFiw0zR2","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":120,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#46aaa3"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#46aaa3"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷凍室","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"5QhpKDRAc_gd6JAFQhMzN","name":"Text","visible":true,"zIndex":2,"x":18.209408194233788,"y":10.015174506828487,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"150L","fontFamily":"アプリ明朝","fontSize":33,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"2JH3krEcijlW6bwzcD0b2","name":"Text","visible":true,"zIndex":3,"x":14.567526555387076,"y":42.04275365514343,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}  },
   ,
   {
    preview:new URL("@/assets/images/mate/texteffect/1002.png",import.meta.url).href,
    url:'',
    id:"1002",
    data:
    {"tag":"Group","x":247.26858877086488,"y":251.82094081942324,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"fWWGfWUc_eutty_eyQpDu","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":-1.1368683772161603e-13,"y":5.684341886080802e-14,"width":100,"height":100,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":4,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"観音\n開き","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":4,"lineHeight":{"type":"percent","value":1.5},"id":"ylXEcnDZjLFeFcdNB1bhl","name":"Text","visible":true,"zIndex":2,"x":19.119878603945267,"y":8.194233687405301,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]} 
    },
    {"preview":new URL("@/assets/images/mate/texteffect/3.png",import.meta.url).href,
    "url":"","id":"1003","data":{"tag":"Group","x":43.999999999999886,"y":69.00000000000006,
    "scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
    "children":[{"tag":"Rect","id":"XYYHoafpbAwYWye1HIFLd","name":"image","locked":false,"zIndex":1,
    "x":0,"y":0,"width":512,"height":462,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,
    "fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/3-1.png",
    import.meta.url).href,"mode":"strench"},"data":{"action":"",
    "original":new URL("@/assets/images/mate/texteffect/3-1.png",import.meta.url).href,
    "sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#F7371E","text":"人気\n商品","fontFamily":"アプリ明朝",
    "fontSize":40,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"STf3Mgnw40d_9NcRbGYCC",
    "name":"Text","visible":true,"zIndex":1,"x":207.99000549316406,"y":167.00000000000003,"scaleX":1,"scaleY":1,"rotation":0,
    "skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
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
    data:{"tag":"Group","id":"qCyfq0pE15xRrYeleb8tb","zIndex":1,"x":314.56752655538696,"y":254.4764795144158,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"H0jtRKSeSY2Ee4hwt7NON","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":0,"y":0,"width":156.29742033383917,"height":107.69017666415002,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff"}],"stroke":"#DE6DF5","strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Rect","id":"YeXKFNJjaiccDoA4jcWV7","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":0.7814871016691959,"y":1.0769017666415002,"width":154.73444613050077,"height":105.53637313086698,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#dedede"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Rect","id":"J8iMl4F353hGX4zXoXA6H","name":"Rect","visible":true,"locked":false,"zIndex":4,"x":3.1259484066767835,"y":4.307607066565939,"width":150.04552352048555,"height":99.07496253101797,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"90L","fontFamily":"A-OTF-GothicMB101Pr5-Reg","fontSize":39,"fontWeight":"normal","letterSpacing":2,"lineHeight":{"type":"percent","value":"1.50"},"id":"-QK-qHvACG9iuKdS_F_N6","name":"Text","visible":true,"zIndex":5,"x":35.97670531352714,"y":37.6958009850594,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"冷藏室","fontFamily":"A-OTF-GothicMB101Pr5-Reg","fontSize":21,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"GYrq4lACXEB1MrHJvfKtu","name":"Text","visible":true,"zIndex":6,"x":40.32473598123491,"y":11.009981117244099,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},

{"preview":new URL("@/assets/images/mate/texteffect/2-1.png",import.meta.url).href,
"url":"","id":"1002","data":{"tag":"Group","x":88.36826603592269,"y":104.66753791679253,
"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
"children":[{"tag":"Rect","id":"Sm2r8gLuK4382IVUBNrjl","name":"image","locked":false,"zIndex":1,"x":0,"y":12.41752233698935,"width":340,
"height":137,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/2.png",import.meta.url).href,"mode":"strench"},
"data":{"original":new URL("@/assets/images/mate/texteffect/2.png",import.meta.url).href,"sizeData":null,"cropData":null}},
{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"01","fontFamily":"アプリ明朝","fontSize":27,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"7YApT_IcNc-1VuMaAmisr","name":"Text","visible":true,"zIndex":1,"x":4.765704685711967,"y":0,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"安全上のご注意","fontFamily":"アプリ明朝","fontSize":16,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"-3B2n2f51ktVfC9waKmoD","name":"Text","visible":true,"zIndex":2,"x":201.4238227758758,"y":16.718059356577044,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"· 液晶保護フイルムのサイズは、ご指定の型番にてご利用\nできるものになります。他の機種ではご利用になれない場\n合がごさいます。必ず機種型番を合わせ乙ご注文ください。","fontFamily":"アプリ明朝","fontSize":11,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"b-E7m2bP0zxctsk1Glgrj","name":"Text","visible":true,"zIndex":3,"x":9.527108868576875,"y":50.27817598713756,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"楽天片開き冷蔵庫","fontFamily":"アプリ明朝","fontSize":13,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"4_iqTGBtfXSd00p7PkfL9","name":"Text","visible":true,"zIndex":4,"x":108.17905918057693,"y":119.58455975959009,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}

,
{
  "preview":new URL("@/assets/images/mate/texteffect/12.png",import.meta.url).href,
    "url":"",
"id":"10012",
"data":{"tag":"Group","x":127.56260376457124,"y":156.63162246672627,"scaleX":1,"scaleY":1,"rotation":0,
"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"zJ_5TlWe1c2IxC1B8dNSe",
"name":"image","locked":false,"zIndex":1,"x":0,"y":0,"width":281,"height":96,"scaleX":1,"scaleY":1,"rotation":0,
"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/12-1.png",import.meta.url).href,"mode":"strench"},
"data":{"original":new URL("@/assets/images/mate/texteffect/12-1.png",import.meta.url).href,
"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"NEW",
"fontFamily":"アプリ明朝","fontSize":53,"fontWeight":"bold","letterSpacing":0,
"lineHeight":{"type":"percent","value":"1.50"},"id":"tDKxl3dfPezCb3Y3RWQCR","name":"Text","visible":true,"zIndex":1,
"x":65.81005859374977,"y":4.25,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,
"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,
{
  preview:new URL("@/assets/images/mate/texteffect/13.png",import.meta.url).href,
  url:'',
  id:"10013",
  data:{"tag":"Group","x":39.3116609216338,"y":100.48966373260018,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"UU7xqbjUh4Lh-qM997o40","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":524,"height":343,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#7ba5e3"}],"strokeWidth":2,"dashPattern":[],"cornerRadius":16,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#7ba5e3"}}},{"tag":"Rect","id":"p-uGVlswplkiFxuGgrrYE","name":"image","locked":false,"zIndex":2,"x":95.13116542693069,"y":90.25071535392402,"width":57,"height":87,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/13-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/13-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"チルド","fontFamily":"アプリ明朝","fontSize":"64","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"zfLR1rcGZjcUbJ7wyMmPh","name":"Text","visible":true,"zIndex":2,"x":125.93871844103694,"y":38.06187405903876,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"冷蔵室より","fontFamily":"アプリ明朝","fontSize":"46","fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"7nVjGjAap4OrrY4fn_08x","name":"Text","visible":true,"zIndex":2,"x":64.92202648352554,"y":148.21361912732405,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"低い温度で保存","fontFamily":"アプリ明朝","fontSize":"46","fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"SsQj8o5W2HDxYczTcdbYu","name":"Text","visible":true,"zIndex":2,"x":64.906851976697,"y":245.61877845964565,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},

{"preview":new URL("@/assets/images/mate/texteffect/14.png",import.meta.url).href,
"url":"",
"id":"10014",
"data":
{"tag":"Group","x":103.79362670713203,"y":76.93474962063726,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"62A57bqLlKDerOBvGdE7P",
"name":"image","locked":false,"zIndex":1,"x":0,"y":0,"width":351,"height":351,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,
"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/14.png",import.meta.url).href,"mode":"strench"},
"data":{"original":new URL("@/assets/images/mate/texteffect/14-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"人気商品","fontFamily":"アプリ明朝","fontSize":"42","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"rpRxr1p45TaG9yVUSoeN8","name":"Text","visible":true,"zIndex":1,"x":83.5,"y":140.00000000000009,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}

,
{"preview":new URL("@/assets/images/mate/texteffect/15.png",import.meta.url).href,"url":"","id":"10015","data":{"tag":"Group","x":20.61884421691923,"y":184.35632524878554,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"1RCyD2dUCoba15aYVtRXC","name":"image","locked":false,"zIndex":1,"x":0,"y":0,"width":517,"height":168,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":
{"type":"image","url":new URL("@/assets/images/mate/texteffect/15-1.png",import.meta.url).href,
"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/15-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#1463C3","text":"マネージャーです","fontFamily":"アプリ明朝","fontSize":32,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"bfNTQOvYcrKd7-bGGovz4","name":"Text","visible":true,"zIndex":1,"x":200.3869499241274,"y":105.15809053270141,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"スペード","fontFamily":"アプリ明朝","fontSize":46,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"wuhrOUaLZBA0B6dhJkA_1","name":"Text","visible":true,"zIndex":1,"x":156.648045326309,"y":15.03669447807323,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,
{"preview":new URL("@/assets/images/mate/texteffect/16.png",import.meta.url).href,"url":"","id":"10016","data":
{"tag":"Group","x":120.09289089330687,"y":132.86326412188436,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":
"_IIIrcSJhm58ounsuTCm4","name":"image","locked":false,"zIndex":1,"x":0,"y":0,"width":393,"height":168,"scaleX":1,
"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/16-1.png",import.meta.url).href,"mode":"strench"},
"data":{"original":new URL("@/assets/images/mate/texteffect/16-1.png",import.meta.url).href,
"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"庫内灯","fontFamily":"アプリ明朝","fontSize":"64","fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"2h_1wfJnUCAJHKjMDsBAc","name":"Text","visible":true,"zIndex":1,"x":92.49999999999989,"y":32,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,
{"preview":new URL("@/assets/images/mate/texteffect/18.png",import.meta.url).href,
"url":"","id":"10018","data":{"tag":"Group","x":83.63852937101359,"y":80.36310415326237,"scaleX":1,"scaleY":1,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"eWx6MPTb2F6cVX8EJEXKh",
"name":"image","locked":false,"zIndex":1,"x":-4.547473508864641e-13,"y":0,"width":417,"height":417,
"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"top-left",
"editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/18-1.png",import.meta.url).href,
"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/18-1.png",import.meta.url).href,
"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#65BCD4","text":"除菌","fontFamily":"アプリ明朝","fontSize":97,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_2F1vQG6AOGxerzFlw0cm","name":"Text","visible":true,"zIndex":1,"x":103.49999999999955,"y":219.54567000846947,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#65BCD4","text":"さらに","fontFamily":"アプリ明朝","fontSize":97,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"5M0VeqNqMJyAhs1HY1wzK","name":"Text","visible":true,"zIndex":1,"x":54.999999999999545,"y":72.92156737958436,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],
"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}},

{"preview":new URL("@/assets/images/mate/texteffect/17.png",import.meta.url).href,"url":"",
"id":"10017","data":{"tag":"Group","x":0.8208184108149226,"y":65.20812142764132,"scaleX":0.9999999999999999,
"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
"children":[{"tag":"Rect","id":"v6-qgqrst5JbPU6Ez-qwL","name":"image","locked":false,"zIndex":1,"x":0,"y":0,
"width":552,"height":236,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left",
"editable":true,"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/17-1.png",import.meta.url).href,
"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/17-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#6F9EB2","text":"調節脚","fontFamily":"アプリ明朝","fontSize":79,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"XJXv5nQNIOOyCwhKimaXL","name":"Text","visible":true,"zIndex":1,"x":149.5,"y":54.75,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,


{"preview":new URL("@/assets/images/mate/texteffect/20.png",import.meta.url).href,"url":"","id":"10020","data":{"tag":"Group","x":97.75716476922992,"y":117.24859963976115,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"yCZXWi9z89rUocbqxqqt-","name":"image","locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":406,"height":38,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,
"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/20-1.png",import.meta.url).href,"mode":"strench"},
"data":{"original":new URL("@/assets/images/mate/texteffect/20-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"水洗いできるフィルターで  いつでも清潔","fontFamily":"アプリ明朝","fontSize":19,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"W7FeK-oBFXg4sTWgZ7PF8","name":"Text","visible":true,"zIndex":1,"x":18.377929687500114,"y":0.75,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}

,

 {"preview":new URL("@/assets/images/mate/texteffect/22.png",import.meta.url).href,"url":"","id":"10022","data":{"tag":"Group",
 "x":24.851801372205486,"y":54.55837600491747,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,
 "skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"9wmeLKtDY9HCbhPP31Dq4","name":
 "image","locked":false,"zIndex":1,"x":0,"y":-1.4210854715202004e-14,"width":545,"height":139,"scaleX":1,"scaleY":1,
 "rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
 "url":new URL("@/assets/images/mate/texteffect/22-1.jpg",import.meta.url).href,"mode":"strench"},
 "data":{"original":new URL("@/assets/images/mate/texteffect/22-1.jpg",import.meta.url).href,"sizeData":null,"cropData":null}},
 {"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"お手入れもカンタン","fontFamily":"アプリ明朝","fontSize":54,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"LTuXj1wHhaLDL3JzFsqs4","name":"Text","visible":true,"zIndex":1,"x":21.5,"y":25,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,
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

{"preview":new URL("@/assets/images/mate/texteffect/24.png",import.meta.url).href,
"url":"","id":"10024","data":{"tag":"Group","x":71.47192716236714,"y":350.53110773899846,
"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
"children":[{"tag":"Rect","id":"swFMtYH3DLnfyBpdGckhf","name":"image","locked":false,"zIndex":1,"x":0,"y":-5.684341886080802e-14,
"width":555,"height":74,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,
"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/24-1.png",import.meta.url).href,
"mode":"strench"},"data":{"original":new URL("@/assets/images/mate/texteffect/24-1.png",import.meta.url).href,
"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF",
"text":"槽洗浄コース","fontFamily":"アプリ明朝","fontSize":41,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"CFVMWud-zBebOS5AKkhm5","name":"Text","visible":true,"zIndex":1,"x":146.5,"y":2.249999999999943,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,
"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,
 {"preview":new URL("@/assets/images/mate/texteffect/25.png",import.meta.url).href,"url":"","id":"10025","data":
 {"tag":"Group","x":77.16236722306519,"y":185.28072837632772,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
 "rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"uXEEuNS3AM60pv00hSLbk",
 "name":"image","locked":false,"zIndex":2,"x":1.1368683772161603e-13,"y":1.1368683772161603e-13,"width":525,"height":81,
 "scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
 "url":new URL("@/assets/images/mate/texteffect/25-1.png",import.meta.url).href,"mode":"strench"},"data":{"original":
 new URL("@/assets/images/mate/texteffect/25-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},
 {"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"独自の乾燥技術","fontFamily":"アプリ明朝",
 "fontSize":47,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},
 "id":"7tbanihs7k_85ZhyLfSXF","name":"Text","visible":true,"zIndex":3,"x":90.00000000000011,"y":1.2500000000001137,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],
 "editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
 

,
 {"preview":new URL("@/assets/images/mate/texteffect/26.png",import.meta.url).href,"url":"",
 "id":"10026","data":{"tag":"Group","x":21.479716727779408,"y":230.72470980272678,
 "scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,
 "editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"IAhph_WtZuM8RN_js35sQ","name":
 "image","locked":false,"zIndex":1,"x":0,"y":0,"width":501,"height":68,"scaleX":1,"scaleY":1,
 "rotation":0,"skewX":0,"skewY":0,"around":"top-left","editable":true,"fill":{"type":"image",
 "url":new URL("@/assets/images/mate/texteffect/26-1.png",import.meta.url).href,"mode":"strench"},
 "data":{"original":new URL("@/assets/images/mate/texteffect/26-1.png",import.meta.url).href,
 "sizeData":null,"cropData":null}},
 {"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF",
 "text":"洗剤投入ケース（液体/粉末）","fontFamily":"アプリ明朝",
 "fontSize":30,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"dv3XDqqdE5DvHlJ1s11Gt","name":"Text","visible":true,"zIndex":1,"x":41.09130859375,"y":7.499999999999943,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}

,
{"preview":new URL("@/assets/images/mate/texteffect/50.png",import.meta.url).href,"url":"",
"id":"50","data":{"tag":"Group","x":134.4999999999999,"y":47,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitFill":"none","hitChildren":false,"children":[{"tag":"Rect","id":"UUyVIJPEL8AxDh1tUgRey","name":"image","locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":331,"height":506,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/50-1.png",import.meta.url).href,
"mode":"strench"},"data":{"action":"","original":new URL("@/assets/images/mate/texteffect/50-1.png",
import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#ffffff",
"text":"セク\nシーな\n小さ\nな二と","fontFamily":"アプリ明朝","fontSize":53,"fontWeight":"bold","letterSpacing":0,
"lineHeight":{"type":"percent","value":"1.50"},"id":"CfKfTYyJ4KlDw1UVtUQ-7","name":"Text","visible":true,"zIndex":1,
"x":68.45902883156305,"y":79.83131762761909,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,
"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}}
,

{"preview":new URL("@/assets/images/mate/texteffect/51.png",import.meta.url).href,"url":"","id":"123123",
"data":{"tag":"Group","x":9.059956214255294,"y":181.2932312671943,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,
"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"nQbHxKaceFlVTZzGA-qxQ",
"name":"image","locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":0,"width":669,"height":233,"scaleX":1,"scaleY":1,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":{"type":"image","url":
new URL("@/assets/images/mate/texteffect/51-1.png",import.meta.url).href,"mode":"strench"},"data":{"action":"",
"original":new URL("@/assets/images/mate/texteffect/51-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},
{"tag":"Text","resizeFontSize":true,"fill":"#ffffff","text":"01、省工ネ運転","fontFamily":"アプリ明朝",
"fontSize":17,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"p-RcDnn0nC7HYSNMjYOyA",
"name":"Text","visible":true,"zIndex":1,"x":115.2951272455324,"y":1.9389386872822456,"scaleX":1,"scaleY":1,"rotation":0,
"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},
{"tag":"Text","resizeFontSize":true,"fill":"#ffffff","text":"02、除湿モ一ド","fontFamily":"アプリ明朝","fontSize":17,
"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"9BKyy8ScW-KSFc9VzVn8g",
"name":"Text","visible":true,"zIndex":1,"x":351.547024058886,"y":68.23635902112136,"scaleX":1,"scaleY":1,
"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},
{"tag":"Text","resizeFontSize":true,"fill":"#ffffff","text":"01、除湿モ一ド","fontFamily":"アプリ明朝",
"fontSize":17,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"eO1qYBLmi20wInlZV4WPu",
"name":"Text","visible":true,"zIndex":1,"x":429.08875395266443,"y":197.82664733675114,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,
"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,
"fill":"#000000","text":"お部屋を力ラツと快適にお部屋のジメ\nジメを取り除き、室内干しにも便利。","fontFamily":"アプリ明朝","fontSize":17,
"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"rgGaBmxDJ92vP9kCVlIBG","name":"Text","visible":true,"zIndex":2,
"x":355.3558252728466,"y":4.562220317634683,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,
"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000",
"text":"無駄な冷やしすぎを抑えて、\n電気代を節約。\n温度設定·風量を最通化。\n消費電力を抑えた運転をします。","fontFamily":"アプリ明朝",
"fontSize":20,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"P7pJWBEVaCUrFd9XBCo2j","name":"Text",
"visible":true,"zIndex":2,"x":12.700286577854058,"y":62.921032860972105,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,
"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},
{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"冷暖房を徐々に弱め、急激な温度\n   変化をな<し快眠をサポ-ト。",
"fontFamily":"アプリ明朝","fontSize":17,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"SGETjGT0k0htJMrU7QqY3",
"name":"Text","visible":true,"zIndex":2,"x":392.97342770076773,"y":134.59256933129183,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,
"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}}
,

{"preview":new URL("@/assets/images/mate/texteffect/52.png",import.meta.url).href,"url":"","id":"123123",
"data":{"tag":"Group","x":81.86646433990893,"y":254.47647951441576,"scaleX":0.9999999999999999,
"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,
"children":[{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"2024","fontFamily":"アプリ明朝","fontSize":24,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"J3zkHkxWF48yy3Uj_10-_","name":"Text","visible":true,"zIndex":1,"x":-1.1368683772161603e-13,"y":0,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"09/30","fontFamily":"アプリ明朝","fontSize":42,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"CKpAQ2bbN-81YXuD_T8-z","name":"Text","visible":true,"zIndex":1,"x":-1.1368683772161603e-13,"y":36.40364188163892,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"AM","fontFamily":"アプリ明朝","fontSize":19,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"utQavp6jwb83uTkkPY-Dt","name":"Text","visible":true,"zIndex":1,"x":145.66009104704074,"y":32.76176024279209,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"16:00","fontFamily":"アプリ明朝","fontSize":24,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"cYQN5EX8l_T6QuUTQMoub","name":"Text","visible":true,"zIndex":1,"x":141.0925644916539,"y":62.79210925644924,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"東京","fontFamily":"アプリ明朝","fontSize":42,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"dpEx5Rr4Nyp7QfpvxoV0b","name":"Text","visible":true,"zIndex":1,"x":232.15477996965092,"y":29.104704097116894,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Line","height":0,"id":"5GOr7OKRN3s4_VRit1khR","name":"Line","visible":true,"locked":false,"zIndex":2,"x":80.12139605462812,"y":22,"width":257.91044765584104,"scaleX":1,"scaleY":1,"rotation":0.404357350392,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Ellipse","id":"mAoR9-DBUdXQJM8NUz-IV","name":"Ellipse","visible":true,"locked":false,"zIndex":4,"x":192.9760523372554,"y":35.54634069745737,"width":28.279989457266986,"height":28.279989457266986,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":[{"type":"solid","color":"#000000ff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#000000ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#ffffff","text":"金","fontFamily":"アプリ明朝","fontSize":15.082661043875724,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"akMsHp1bx3XGG5ZGF3RbW","name":"Text","visible":true,"zIndex":4,"x":192.25796661608467,"y":34.65705614567514,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}}
,
{"preview":new URL("@/assets/images/mate/texteffect/30.png",import.meta.url).href,"url":"","id":"30",
"data":
{"tag":"Group","x":176.55538694992413,"y":213.50531107738993,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitFill":"none","hitChildren":false,"children":[{"tag":"Rect","id":"7oYvtXOfnnUvBMGbsAjOF","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":5.684341886080802e-14,"width":100,"height":100,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffff66"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffff66"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"320L","fontFamily":"アプリ明朝","fontSize":33.03531889029603,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_bEky1OeRSD3bV25KIB-a","name":"Text","visible":true,"zIndex":2,"x":1.8209408194232992,"y":23.66067145550477,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
,
{"preview":new URL("@/assets/images/mate/texteffect/31.png",import.meta.url).href,"url":"","id":"31",
"data":
{"tag":"Group","x":176.55538694992413,"y":213.50531107738993,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitFill":"none","hitChildren":false,"children":[{"tag":"Rect","id":"7oYvtXOfnnUvBMGbsAjOF","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":5.684341886080802e-14,"width":100,"height":100,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#42a5f666"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],"cornerRadius":200,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#42a5f666"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"23℃","fontFamily":"アプリ明朝","fontSize":33.03531889029603,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_bEky1OeRSD3bV25KIB-a","name":"Text","visible":true,"zIndex":2,"x":4.552352048558353,"y":23.66067145550477,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
,

{"preview":new URL("@/assets/images/mate/texteffect/32.png",import.meta.url).href,"url":"","id":"32",
"data":
{"tag":"Group","x":176.55538694992515,"y":74.20333839150112,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"7oYvtXOfnnUvBMGbsAjOF",
"name":"Rect","visible":true,"locked":false,"zIndex":1,"x":1.1368683772161603e-13,"y":1.1368683772161603e-13,"width":279,
"height":40,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer",
"fill":[{"type":"solid","color":"#00000000"}],"stroke":"#FFFFFF","strokeWidth":2,"dashPattern":[],
"cornerRadius":200,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#00000000"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"安心・安全な温度をキープ！","fontFamily":"アプリ明朝","fontSize":17,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_bEky1OeRSD3bV25KIB-a","name":"Text","visible":true,"zIndex":2,"x":24.58270106221437,"y":3.112562440887473,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
,
{"preview":new URL("@/assets/images/mate/texteffect/33.png",import.meta.url).href,"url":"","id":"33",
"data":
{"tag":"Group","x":177.55538694992515,"y":74.20333839150123,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"7oYvtXOfnnUvBMGbsAjOF","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":260,"height":260,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#99a4b7ff"}],"stroke":"#FFFFFF","strokeWidth":0,"dashPattern":[],"cornerRadius":200,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#99a4b7ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"部屋干しモード","fontFamily":"アプリ明朝","fontSize":32,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_bEky1OeRSD3bV25KIB-a","name":"Text","visible":true,"zIndex":2,"x":9.015174506827407,"y":97.52881063081651,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
,
{"preview":new URL("@/assets/images/mate/texteffect/34.png",import.meta.url).href,"url":"","id":"34",
"data":
{"tag":"Group","x":201.44001729890385,"y":98.08796874048045,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"7oYvtXOfnnUvBMGbsAjOF","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":-5.684341886080802e-14,"width":212,"height":212,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#00000000"}],"stroke":"#191FD2","strokeWidth":4,"dashPattern":[],"cornerRadius":16,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#00000000"}}},{"tag":"Text","resizeFontSize":true,"fill":"#191FD2","text":"6畳","fontFamily":"アプリ明朝","fontSize":95,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"_bEky1OeRSD3bV25KIB-a","name":"Text","visible":true,"zIndex":2,"x":23.721470709468008,"y":36.4407906443102,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/35.png",import.meta.url).href,"url":"","id":"35",
"data":
{"tag":"Group","x":213.49999999999997,"y":272,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,
"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"e4HKY5Zu0_Z7CNUJzaEqp","name":"image",
"locked":false,"zIndex":1,"x":86.5,"y":28,"width":173,"height":56,"scaleX":1,"scaleY":1,"rotation":0,
"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/35-1.png",import.meta.url).href,"mode":"strench"},
"data":{"action":"","original":new URL("@/assets/images/mate/texteffect/35-1.png",import.meta.url).href,
"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"高温・多温を感知","fontFamily":"アプリ明朝","fontSize":18.1466071654162,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"nMu7yEXX2I9AkAo-CUf8D","name":"Text","visible":true,"zIndex":1,"x":0.7554692930292504,"y":10.790529983267476,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/36.png",import.meta.url).href,"url":"","id":"36",
"data":
{"tag":"Group","x":97.5,"y":240.00000000000017,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"S4ohRoJCSbkC5uk-1pilq","name":"image","locked":false,"zIndex":1,"x":202.50000000000006,"y":60.00000000000007,"width":405,"height":120,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/36-1.png",import.meta.url).href,"mode":"strench"},"data":{"action":"",
"original":new URL("@/assets/images/mate/texteffect/36-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"安心・安全な温度をキープ！","fontFamily":"アプリ明朝","fontSize":27.15402062456253,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"hDLt47bI9BlbaiA6OcCOv","name":"Text","visible":true,"zIndex":1,"x":24.477272423960812,"y":21.244773171842667,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/37.png",import.meta.url).href,"url":"","id":"37",
"data":
{"tag":"Group","x":156.1347968315995,"y":125.70991064040265,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Ellipse","id":"Do2-lhF64Qvmg64NME4zG","name":"Ellipse","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":229.95181266923265,"height":229.95181266923265,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":[{"type":"solid","color":"#929567ff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#929567ff"}}},{"tag":"Ellipse","id":"utGmRTarIBW-3a-hrA_rt","name":"Ellipse","visible":true,"locked":false,"zIndex":1,"x":15.908615970827668,"y":16.80507731326918,"width":198.13458072757788,"height":198.13458072757788,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":[{"type":"solid","color":"#929567ff"}],"stroke":"#F7DAA2","strokeWidth":4,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#929567ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#F7DAA2","text":"糖質を","fontFamily":"アプリ明朝","fontSize":37,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"YTU5Lxr502axyB-u5k_-v","name":"Text","visible":true,"zIndex":3,"x":51.475906334616866,"y":43.284620840028424,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#F7DAA2","text":"低減","fontFamily":"アプリ明朝","fontSize":53,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"GbiB0ZoWhRp-Rr3ges7wG","name":"Text","visible":true,"zIndex":3,"x":53.975906334616866,"y":100.1092079776472,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
}
,
{"preview":new URL("@/assets/images/mate/texteffect/38.png",import.meta.url).href,"url":"","id":"38",
"data":
{"tag":"Group","x":156.1347968315995,"y":125.70991064040265,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Group","x":0,"y":0,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Ellipse","id":"Do2-lhF64Qvmg64NME4zG","name":"Ellipse","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":229.95181266923265,"height":229.95181266923265,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":[{"type":"solid","color":"#f7daa2ff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#f7daa2ff"}}},{"tag":"Ellipse","id":"utGmRTarIBW-3a-hrA_rt","name":"Ellipse","visible":true,"locked":false,"zIndex":1,"x":15.908615970827668,"y":16.80507731326918,"width":198.13458072757788,"height":198.13458072757788,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"fill":[{"type":"solid","color":"#f7daa2ff"}],"stroke":"#929567","strokeWidth":4,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#f7daa2ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#F7DAA2","text":"糖質を","fontFamily":"アプリ明朝","fontSize":37,"fontWeight":"normal","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"YTU5Lxr502axyB-u5k_-v","name":"Text","visible":true,"zIndex":3,"x":51.475906334616866,"y":43.284620840028424,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#F7DAA2","text":"低減","fontFamily":"アプリ明朝","fontSize":53,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"GbiB0ZoWhRp-Rr3ges7wG","name":"Text","visible":true,"zIndex":3,"x":53.975906334616866,"y":100.1092079776472,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]},{"tag":"Text","resizeFontSize":true,"fill":"#694706","text":"コンパクト\nなのに、","fontFamily":"アプリ明朝","fontSize":28,"letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"6ND09KEmKXA_kQsmL5aef","name":"Text","visible":true,"zIndex":4,"x":35.2682833913867,"y":45.365593106007026,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"驚きの多機能","fontFamily":"アプリ明朝","fontSize":23.586300369241535,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"gEeIweTl6TASNu_anOBir","name":"Text","visible":true,"zIndex":4,"x":35.2682833913867,"y":130.2063528280432,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}

},
{"preview":new URL("@/assets/images/mate/texteffect/39.png",import.meta.url).href,"url":"","id":"39",
"data":
{"tag":"Group","x":181,"y":181,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"KxolXC9G3H9WLUevL3Agm","name":"image",
"locked":false,"zIndex":1,"x":119.00000000000003,"y":119.00000000000003,"width":238,"height":238,"scaleX":1.0000000000000002,
"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/39-1.png",import.meta.url).href,"mode":"strench"},"data":{"action":"",
"original":new URL("@/assets/images/mate/texteffect/39-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"はや\n炊き","fontFamily":"アプリ明朝","fontSize":55,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"4ZUEdaKYJu82wn0--LX0i","name":"Text","visible":true,"zIndex":1,"x":56.55690440060687,"y":29.773899848254928,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
}
,
{"preview":new URL("@/assets/images/mate/texteffect/40.png",import.meta.url).href,"url":"","id":"40",
"data":
{"tag":"Group","x":175,"y":224.49999999999994,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,
"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"4NvGlDJRGqad6FO3rmYnU","name":"image","locked":false,"zIndex":1,
"x":125.00000000000003,"y":75.50000000000001,"width":250,"height":151,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,
"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/40-1.png",import.meta.url).href,"mode":"strench"},"data":{"action":"",
"original":new URL("@/assets/images/mate/texteffect/40-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"開催中","fontFamily":"アプリ明朝","fontSize":51,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"fdHfaha1UVMVS-hfbuW0o","name":"Text","visible":true,"zIndex":1,"x":34.33232169954465,"y":30.886949924127464,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/41.png",import.meta.url).href,"url":"","id":"41",
"data":
{"tag":"Group","x":80.214129151914,"y":151.08750632271125,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"YjtVW-hyoj17d6oZn5X78","name":"Rect","visible":true,"locked":false,"zIndex":2,"x":-1.1368683772161603e-13,"y":-5.684341886080802e-14,"width":512,"height":100,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#689e68ff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":200,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#689e68ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#164A16","text":"美味しく糖質カット！","fontFamily":"アプリ明朝","fontSize":39,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"ctvjvXGbEl8Bcfad1ru1I","name":"Text","visible":true,"zIndex":2,"x":52.999999999999886,"y":13.89310402967459,"scaleX":0.9999999999999998,"scaleY":0.9999999999999998,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/42.png",import.meta.url).href,"url":"","id":"42",
"data":
{"tag":"Group","x":134.67374810318665,"y":195.29590288315626,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"YqXEEr4czlP-pbRKk6mNJ","name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":-1.1368683772161603e-13,"width":314,"height":147,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#ffffffff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":1,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#ffffffff"}}},{"tag":"Line","height":0,"id":"O9IocSsAOIFWeoGufpHAi","name":"Line","visible":true,"locked":false,"zIndex":3,"x":15.5,"y":76.5,"width":267,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Line","height":0,"id":"kmJ0_7z9N5zr1E8MK8p6v","name":"Line","visible":true,"locked":false,"zIndex":3,"x":156.93854324734457,"y":62.84294385432463,"width":52,"scaleX":1,"scaleY":1,"rotation":-90,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Line","height":0,"id":"kHUAUfOTnraiqYzRw4MzF","name":"Line","visible":true,"locked":false,"zIndex":3,"x":156.93854324734457,"y":136.5758725341425,"width":52,"scaleX":1,"scaleY":1,"rotation":-90,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":2,"dashPattern":[],"cornerRadius":0,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#FFFFFF"}}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"467L大容量","fontFamily":"アプリ明朝","fontSize":18,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"lljAbfRmICMQX-ZmG5rEh","name":"Text","visible":true,"zIndex":4,"x":24.582701062215392,"y":19.254717057081734,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"三挡变温","fontFamily":"アプリ明朝","fontSize":18,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"0zsqQJFLuPUJm282jbOFb","name":"Text","visible":true,"zIndex":4,"x":179.69044006069817,"y":19.543032686823835,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"高配双变频","fontFamily":"アプリ明朝","fontSize":18,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"H6IZUVmz7gJ6q5viR8J4K","name":"Text","visible":true,"zIndex":4,"x":170.69044006069817,"y":90.8480402740771,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"冷风无霜","fontFamily":"アプリ明朝","fontSize":18,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"yITNB77KEBpB-pkycNNWN","name":"Text","visible":true,"zIndex":4,"x":36.03484949971539,"y":90.55972464433489,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/43.png",import.meta.url).href,"url":"","id":"43",
"data":
{"tag":"Group","x":306.01820940819414,"y":64.4734446130501,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,
"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"TsN7UgDiYEgjmErVrbV9Y","name":"image",
"locked":false,"zIndex":1,"x":126.00000000000014,"y":68.00000000000004,"width":252,"height":136,"scaleX":1.0000000000000002,
"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image",
"url":new URL("@/assets/images/mate/texteffect/43-1.png",import.meta.url).href,"mode":"strench"},"data":{"action":"",
"original":new URL("@/assets/images/mate/texteffect/43-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"汚れがしっかり落ちる","fontFamily":"アプリ明朝","fontSize":14,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"I-JQFg6YA7WkPHq1xowGU","name":"Text","visible":true,"zIndex":1,"x":89.03490136570588,"y":97.11987860394535,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/44.png",import.meta.url).href,"url":"","id":"44",
"data":
{"tag":"Group","x":41.98179059180575,"y":142.48179059180575,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,
"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"uQG9JxKTPjCQxKVx_eQ5R",
"name":"image","locked":false,"zIndex":1,"x":125.99999999999991,"y":25.500000000000064,"width":252,"height":51,
"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,
"fill":{"type":"image","url":new URL("@/assets/images/mate/texteffect/44-1.png",import.meta.url).href,"mode":"strench"},
"data":{"action":"","original":new URL("@/assets/images/mate/texteffect/44-1.png",import.meta.url).href,"sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"汚れがしっかり落ちる","fontFamily":"アプリ明朝","fontSize":14,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"JB1sS_m5p9l5rBBf9gdWW","name":"Text","visible":true,"zIndex":1,"x":81.76631259484054,"y":11.842943854324801,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/45.png",import.meta.url).href,"url":"","id":"45",
"data":
{"tag":"Group","x":121.92716236722299,"y":153.26188672468325,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Polygon","sides":6,"id":"GOQAiAO4LxKyahyilSaNF","name":"Polygon","zIndex":1,"x":0,"y":2.842170943040401e-14,"width":100,"height":100,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#db3f41ff"}],"stroke":"rgba(0, 0, 0, 1)","strokeWidth":4,"dashPattern":[],"cornerRadius":13,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#db3f41ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"01","fontFamily":"アプリ明朝","fontSize":45,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"VyuXcdUg_YB4O9dMn_6eo","name":"Text","visible":true,"zIndex":2,"x":14.24853515625,"y":12.250000000000028,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},

{"preview":new URL("@/assets/images/mate/texteffect/46.png",import.meta.url).href,"url":"","id":"46",
"data":
{"tag":"Group","x":55,"y":243.99848254931715,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"JfDHww5DPobL05RZKUJiA",
"name":"Rect","visible":true,"locked":false,"zIndex":1,"x":0,"y":0,"width":304,"height":145,"scaleX":1,"scaleY":1,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#FFFFFF"}],
"stroke":"rgba(0, 0, 0, 1)","strokeWidth":0,"dashPattern":[],"cornerRadius":8,"data":{"fillData":
{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",
"pureColor":"#FFFFFF"}}},{"tag":"Rect","id":"w0kc18T5JeCdCd2gsPiGq","name":"Rect","visible":true,"locked":false,
"zIndex":1,"x":16.69423368740513,"y":16.38846737481026,"width":270.6115326251897,"height":38,"scaleX":1,"scaleY":1,
"rotation":0,"skewX":0,"skewY":0,"editable":true,"cursor":"pointer","fill":[{"type":"solid","color":"#67bed3ff"}],"stroke":"#67BED3","strokeWidth":0,"dashPattern":[],"cornerRadius":8,"data":{"fillData":{"activeColorKey":"pure","gradientColor":"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)","pureColor":"#67bed3ff"}}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"Point.01","fontFamily":"アプリ明朝","fontSize":20,"letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"0o2AJr0juCM6G1t9NTWI3","name":"Text","visible":true,"zIndex":3,"x":105.240234375,"y":16.38846737481026,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""},{"tag":"Text","resizeFontSize":true,"fill":"#000000","text":"高い節水機能","fontFamily":"アプリ明朝","fontSize":35,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"h4cjpEln0vlFCPqTTwkpG","name":"Text","visible":true,"zIndex":3,"x":39,"y":68.06931212161953,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":"","data":{}}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/47.png",import.meta.url).href,"url":"","id":"47",
"data":
{"tag":"Group","x":49.59863429438542,"y":274.49999999999994,"scaleX":0.9999999999999999,"scaleY":0.9999999999999999,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"DaVuy2Izal8Iqp9lzsVSB","name":"image","locked":false,"zIndex":1,"x":190.50000000000003,"y":25.500000000000064,"width":381,"height":51,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":"blob:http://192.168.11.21:5688/83fdec2a-d786-412f-bff3-02d4c3837cd8","mode":"strench"},"data":{"action":"","original":"blob:http://192.168.11.21:5688/83fdec2a-d786-412f-bff3-02d4c3837cd8","sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#FFFFFF","text":"槽洗浄コース","fontFamily":"アプリ明朝","fontSize":26,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":"1.50"},"id":"7TzTV5RU9x7FSeW3MNHds","name":"Text","visible":true,"zIndex":1,"x":97.04748342974233,"y":1.397125904944005,"scaleX":1.0000000000000002,"scaleY":1.0000000000000002,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
},
{"preview":new URL("@/assets/images/mate/texteffect/48.png",import.meta.url).href,"url":"","id":"48",
"data":
{"tag":"Group","x":71.30452952291029,"y":92.09801607373689,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"editable":true,"hitChildren":false,"children":[{"tag":"Rect","id":"5M6GoZ59C0mUCEqJgak2A","name":"image","locked":false,"zIndex":1,"x":24.5,"y":21.689821582242672,"width":49,"height":37,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"around":"center","editable":true,"fill":{"type":"image","url":"blob:http://192.168.11.21:5688/d4778e1f-7472-48a6-a69d-ad9d264f0451","mode":"strench"},"data":{"action":"","original":"blob:http://192.168.11.21:5688/d4778e1f-7472-48a6-a69d-ad9d264f0451","sizeData":null,"cropData":null}},{"tag":"Text","resizeFontSize":true,"fill":"#2C2C2C","text":"圧倒的に省エネ","fontFamily":"アプリ明朝","fontSize":24,"fontWeight":"bold","letterSpacing":0,"lineHeight":{"type":"percent","value":1.5},"id":"iyoEyhsPG7RDj3tFOqyOe","name":"Text","visible":true,"zIndex":1,"x":63.22309369970537,"y":0,"scaleX":1,"scaleY":1,"rotation":0,"skewX":0,"skewY":0,"padding":[4,8],"editable":true,"stroke":"rgba(0,0,0,0)","strokeWidth":0,"shadow":""}]}
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