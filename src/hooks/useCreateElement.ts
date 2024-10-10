import { ref, onMounted, onUnmounted } from 'vue'
import { Box,PointerEvent,Platform, App,Text,Group} from 'leafer-ui'
import { Flow } from '@leafer-in/flow'
import  {nanoid} from  'nanoid'
import { ElMessage, ElMessageBox } from 'element-plus'
import useCenter from '@/hooks/useCenter'

export default()=>{

    const createGroup=(item)=>{

        const { centerPoint, workSpaceDraw,canvas } = useCenter();

        const group = new Group(item.data)

        group.zIndex=workSpaceDraw.children.length+1
        group.around='top-left'
        group.id=nanoid()

        group.x=0; //pageWidth.value/2+group.width/2
        group.y=0;// pageHeight.value/2+group.height/2
        
        workSpaceDraw.add(group)

        workSpaceDraw.emit("redo.add",{})

        canvas.editor.target=group

        ElMessage({
            message: 'Success!',
            type: 'success'
        })
  }

  const  createTextElement=(textValue,fontSize)=>{
    const { centerPoint, workSpaceDraw,canvas } = useCenter();
    const textElement = new Text({
      id: nanoid(10),
      zIndex:workSpaceDraw.children.length+1,
      name:'Text',
      text: textValue,
      letterSpacing:0,
      lineHeight:{
          type: 'percent',
          value: 1.5, // 150%
      },
      fontSize:fontSize,
      editable:true,
      resizeFontSize: true,
      stroke:'rgba(0,0,0,0)',
      strokeWidth:0,
      fontFamily:'アプリ明朝',
      fill:'#000000',
      padding: [4, 8],
      shadow: {
           x: 0,
           y: 0,
           blur: 0,
           color: "#000000"
       }
    })

    if(canvas.editor.multiple||canvas.editor.single){
        textElement.x = canvas.editor.element.x+10
        textElement.y = canvas.editor.element.y+10
    }else{
        textElement.x = centerPoint.x - textElement.width / 2;
        textElement.y = centerPoint.y - textElement.height / 2;
    }

    workSpaceDraw.add(textElement)
    canvas.editor.target=textElement
  }
   
  return {
    createTextElement,
    createGroup
  }
}