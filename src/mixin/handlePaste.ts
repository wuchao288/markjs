
import { App,Box,Frame,ZoomEvent,ResizeEvent,Rect,Ellipse,Polygon,Line,Star,Text,PointerEvent,Group,Platform} from 'leafer-ui'
import { nanoid } from 'nanoid'
import  {mixins} from '@/mixin/index'
import { resolve } from 'path'

export default (app:App,event) => {
  
  return new Promise<void>(async (resolve) => {
    
   async function  loadImage(imageBlob){
        const file = new File([imageBlob], 'blob', { type: 'image/png' })
        await mixins.uploadFile(file,{}).then(async (data:string)=>{

            const { width, height } = await mixins.getImage(file)
            let widthx=width

            let heightx=height
            let frame=app.tree.findOne("Frame")  

            let pageWidth=frame.width
            let pageHeight=frame.height

            if(widthx>pageWidth){
                widthx= pageWidth*0.8
                heightx=((widthx)*height)/width
            }
            if(heightx>pageHeight){
                heightx= pageHeight*0.8
                widthx=(heightx*width)/height
            }

              const rectImg = new Rect({
                      id:nanoid(),
                      name:'image',
                      //around: 'center',
                      data:{
                          action:'',
                          original:data,
                          sizeData:null,
                          cropData:null
                      },
                      fill: {
                          type: 'image',
                          url: data,
                          mode: 'strench'
                      },
                      zIndex:frame.children.length + 1,
                      editable: true,
                      locked:false,
                      width:widthx,
                      height:heightx,
                      x: pageWidth/2-widthx/2,
                      y: pageHeight/2-heightx/2
              }) 

              // rectImg.on(PointerEvent.MENU,function(e){
              //     //menuVisible.value=true
              //     //cleft.value=e.x+"px"
              //     //ctop.value=e.y+"px"
              // })

              frame.add(rectImg)

              app.editor.target=rectImg

        }).catch((error)=>{
            console.info(error)
        })
        //防止重复粘贴
        try{
            navigator.clipboard.write([
              new ClipboardItem({
              'text/plain': new Blob([''], {type: 'text/plain'})
              })
            ])
        }catch{
        
        }
    }
    async function  loadText(text){
      let frame=app.tree.findOne("Frame")
           
      let textBox=Text.one({
          id:nanoid(),
          zIndex:frame.children.length+1,
          name:'Text',
          text: text,
          editable: true,
          //selected:true,
          fontSize: 22,
          //around:'center',
          letterSpacing:0,
          lineHeight:{
              type: 'percent',
              value: 1.5, // 150%
          },
          resizeFontSize: true,
          stroke:'rgba(0,0,0,0)',
          strokeWidth:0,
          fontFamily:'アプリ明朝',
          fill:'#000000',
          padding: [4, 8],
          x: frame.width/2-50,
          y: frame.height/2-50,
          visible:false,
          shadow: {
                x: 0,
                y: 0,
                blur: 0,
                color: "#000000"
            }
      })

      frame.add(textBox)

      setTimeout(function(){
        textBox.x= frame.width/2-(textBox.width/2)
        textBox.y= frame.height/2-(textBox.height/2)
        textBox.visible=true
        app.editor.target=textBox
      },10)
    }
    
    try{
          const  IMAGE_MIME_REGEX=/^image\/(p?jpeg|gif|png)$/i

        //e.preventDefault();
          if (!event.clipboardData) {
           
            let clipboardItems = await navigator.clipboard.read()

            for (const clipboardItem of clipboardItems) {
             
              if(clipboardItem.types.length==0){
                  resolve()
              }

              for (const type of clipboardItem.types) {
              
                if (IMAGE_MIME_REGEX.test(type)) {
                  const blob = await clipboardItem.getType(type);
                  await  loadImage(blob);
                  break
                }else if(type.indexOf("text")!=-1){
                  let text=  await  navigator.clipboard.readText()
                  await  loadText(text)
                  break
                }else{
                    resolve()
                }
              }
            }
          } else {


              const items = event.clipboardData.items;

              if(items.length==0){
                  resolve()
              }

              for (let i = 0; i< items.length; i++) {

                if (IMAGE_MIME_REGEX.test(items[i].type)) {

                  await loadImage(items[i].getAsFile());

                    break
                }else if(items[i].type.indexOf("text")!=-1){
                
                    let text=  event.clipboardData.getData('text/plain');
                    await  loadText(text)
                    break
                }else{
                    resolve()
                }
              }
          }
    }catch{
      resolve()
    }
})



    // if(event.clipboardData && event.clipboardData.items){
    //   var reader = new FileReader()
    //   reader.onload = function (event) {
    //     console.info(event)
    //   }
    //   var items = event.clipboardData && event.clipboardData.items
    //   var file = null
    //   if (items && items.length) {
    //     // 检索剪切板items
    //     for (var i = 0; i < items.length; i++) {
    //       if (items[i].type.indexOf('image') !== -1) {
    //         file = items[i].getAsFile()
    //         console.info(file)
    //         break
    //       }else if(items[i].type.indexOf('text') !== -1){
    //         file = items[i].getAsFile("text/plain")
    //         console.info(file)
    //         break
    //       }
    //     }
    //   }
    //   // 此时file就是剪切板中的图片文件
    //   if (file) {
    //     reader.readAsDataURL(file)
    //   }
    //   resolve()
    // }
    // navigator.clipboard
    //   .read()
    //   .then(async (dataTransfer: ClipboardItems) => {
        
    //     console.info(dataTransfer)

    //     for (let i = 0; i < dataTransfer.length; i++) {
    //       const item = dataTransfer[i]

    //       if (item.types.toString().indexOf('image') !== -1) {

    //         var itemTypes:string|null=item.types.find(m=>m=="image/png");

    //         if(itemTypes==null){
    //           resolve()
    //         }
    //            const imageBlob = await item.getType(itemTypes);
    //            const file = new File([imageBlob], 'blob', { type: 'image/png' })

    //           await mixins.uploadFile(file,{}).then(async (data:string)=>{

    //               const { width, height } = await mixins.getImage(file)

    //               let widthx=width

    //               let heightx=width

    //               let frame=app.tree.findOne("Frame")  


    //               let pageWidth=frame.width
    //               let pageHeight=frame.height

    //                 if(widthx>pageWidth){
    //                     widthx= pageWidth*0.8
    //                     heightx=((pageWidth*0.8)*height)/width
    //                 }

    //                 const rectImg = new Rect({
    //                         id:nanoid(),
    //                         name:'image',
    //                         //around: 'center',
    //                         data:{
    //                             action:'',
    //                             original:data,
    //                             sizeData:null,
    //                             cropData:null
    //                         },
    //                         fill: {
    //                             type: 'image',
    //                             url: data,
    //                             mode: 'strench'
    //                         },
    //                         zIndex:frame.children.length + 1,
    //                         editable: true,
    //                         locked:false,
    //                         width:widthx,
    //                         height:heightx,
    //                         x: pageWidth/2-widthx/2,
    //                         y: pageHeight/2-heightx/2
    //                 }) 

    //                 rectImg.on(PointerEvent.MENU,function(e){
    //                     //menuVisible.value=true
    //                     //cleft.value=e.x+"px"
    //                     //ctop.value=e.y+"px"
    //                 })

    //                 frame.add(rectImg)

    //                 app.editor.target=rectImg

    //           }).catch((error)=>{
    //              console.info(error)
    //           })
             

    //         try{
    //           navigator.clipboard.write([
    //             new ClipboardItem({
    //              'text/plain': new Blob([''], {type: 'text/plain'})
    //              })
    //            ])
    //          }catch{
              
    //          }
    //         break

    //       } else if (item.types.toString().indexOf('text') !== -1) {

    //         let frame=app.tree.findOne("Frame")
    //         var text = await navigator.clipboard.readText()
    //         let textBox=Text.one({
    //           id:nanoid(),
    //           zIndex:frame.children.length+1,
    //           name:'Text',
    //           text: text,
    //           editable: true,
    //           //selected:true,
    //           fontSize: 22,
    //           //around:'center',
    //           letterSpacing:0,
    //           lineHeight:{
    //               type: 'percent',
    //               value: 1.5, // 150%
    //           },
    //           resizeFontSize: true,
    //           stroke:'rgba(0,0,0,0)',
    //           strokeWidth:0,
    //           fontFamily:'アプリ明朝',
    //           fill:'#000000',
    //           padding: [4, 8],
    //           x: frame.width/2-50,
    //           y: frame.height/2-50,
    //           visible:false,
    //           shadow: {
    //                x: 0,
    //                y: 0,
    //                blur: 0,
    //                color: "#000000"
    //            }
    //       })


    //       frame.add(textBox)

    //       setTimeout(function(){
    //         textBox.x= frame.width/2-(textBox.width/2)
    //         textBox.y= frame.height/2-(textBox.height/2)
    //         textBox.visible=true
    //         app.editor.target=textBox
    //       },10)


    //       break
            
    //       } else resolve()
    //     }
    //   })
    //   .catch((error) => {
    //     // 剪贴板内容为空, 直接返回
    //     resolve()
    //   })
  //})
}
