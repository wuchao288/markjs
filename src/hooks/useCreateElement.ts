import { ref, onMounted, onUnmounted } from 'vue'
import { Box,PointerEvent,Platform, Line,Text,Group,Rect,Ellipse,Polygon,Star} from 'leafer-ui'
import { Flow } from '@leafer-in/flow'
import  {nanoid} from  'nanoid'
import { ElMessage, ElMessageBox } from 'element-plus'
import useCenter from '@/hooks/useCenter'
import  {mixins} from '@/mixin/index'
import useEditStore from '@/stores/useEditStore'
import { Arrow } from '@leafer-in/arrow'
import { storeToRefs } from 'pinia'

export default()=>{

    const {
        useColor,
        useBorderWidth
    } = storeToRefs(useEditStore())

    const _onStart = (type,subType) => {
        const shapeId = nanoid();
        const newShape = {
            id: shapeId,
            type,
            subType,
            stroke:useColor.value,
            strokeWidth: useBorderWidth.value,
            fill:'',
            text:'',
            width:100,
            height:100,
            points:[],
        };
        return newShape;
    }

    const _getSharp=(model)=>{

        let {id,type,subType,width,height,zIndex,stroke,strokeWidth}=model

        let obs=useEditStore().getUseSharpStyle()

        let defaultOption={
            width: width|100,
            editable:true,
            fill:"#ffffff",
            locked:false,
            visible:true,
        }
    
            if (type === 'Ellipse') {
                return new Ellipse({
                    id,
                    height,
                    zIndex,
                    stroke,
                    strokeWidth,
                    name:"Ellipse",
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    },
                    ...defaultOption
                });
            }
            
            if (type === 'Arrow') {
                if(subType=="one"){
                    Object.assign(defaultOption,{
                        strokeWidth:2,
                        endArrow:'arrow'
                   })
                }else if(subType=="two"){
                    Object.assign(defaultOption,{
                        startArrow:'arrow',
                        endArrow:'arrow',
                        strokeWidth:2
                   })
                }
                return new Arrow({
                    id,
                    name:"Arrow-"+subType,
                    zIndex,
                    stroke,
                    strokeWidth,
                    strokeCap: 'round',
                    strokeJoin: 'round',
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    },
                    ...defaultOption
                });
            }
           
    
            if (type === 'Mark') {
    
                Object.assign(defaultOption,{
                        strokeWidth:2,
                        startArrow:'mark',
                        endArrow:'mark',
                        rotation:Number(subType)
                })
                return new Arrow({
                    id,
                    name:"Mark",
                    zIndex,
                    stroke,
                    strokeWidth,
                    strokeCap: 'round',
                    strokeJoin: 'round',
                    cursor:'pointer',
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    },
                    ...defaultOption
                });
            }
    
    
            if (type === 'Line') {
            
                
                Object.assign(defaultOption,{strokeWidth:1})
    
                return new Line({
                    id,
                    name:"Line",
                    zIndex,
                    stroke,
                    strokeWidth,
                    cursor:'pointer',
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    },
                    ...defaultOption
                });
            }
            if (type === 'Text') {
                
                //normal,rect,radius
                
                Object.assign(defaultOption,{width:undefined,height:undefined,fill:'#000000'})
            
                // let box= new Box({
                //         id,
                //         name:"Text",
                //         zIndex,
                //         cornerRadius:4,
                //         cursor:'pointer',
                //         around:'center',
                //         stroke:useColor.value,
                //         strokeWidth:0,
                //         children: [],
                //         ...defaultOption
                // })
    
    
                // let text=Text.one({
                //     name:'Text',
                //     text: '100cm',
                //     editable: true,
                //     fontSize: 24,
                //     selected:true,
                //     // around: 'top-left',
                //     resizeFontSize: true,
                //     padding: [4, 8],
                //     fill:'#000000',
                //     //hitFill:'all',
                //     stroke:'rgba(0,0,0,0)',
                //     strokeWidth:0,
                //     shadow: {
                //         x: 0,
                //         y: 0,
                //         blur: 0,
                //         color: "#000000"
                //     },
                //     ...defaultOption
                // })
    
                let text=Text.one({
                    id:id,
                    zIndex:zIndex,
                    name:'Text',
                    text: '100cm',
                    editable: true,
                    //selected:true,
                    fontSize: 24,
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
                    x:defaultOption.x,
                    y:defaultOption.y,
                    shadow: {
                         x: 0,
                         y: 0,
                         blur: 0,
                         color: "#000000"
                     }
                })
    
                return text
    
               
                
            }
          
            if(type === 'Polygon'){
                
    
                //Object.assign(defaultOption,{})
                let polygon = new Polygon({
                    width: 100,
                    height: 100,
                    sides: Number(subType),
                    fill: '#ffffff',
                    stroke:stroke,
                    strokeWidth:2,
                    x:defaultOption.x,
                    y:defaultOption.y,
                    editable:true,
                    id,
                    name:'Polygon',
                    zIndex,
                    cursor:'pointer',
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    }
                })
                return polygon
            }
    
    
            if(type==="Star"){
                let star=  new Star({
                    width: 100,
                    height: 100,
                    corners: Number(subType),
                    stroke:stroke,
                    strokeWidth:2,
                    x:defaultOption.x,
                    y:defaultOption.y,
                    editable:true,
                    id,
                    name:'Star',
                    zIndex,
                    cornerRadius: 5,
                    cursor:'pointer',
                    fill:  '#ffffff',
                    data:{
                        fillData:{
                            activeColorKey:obs.activeColorKey,
                            gradientColor:obs.gradientColor,
                            pureColor:obs.pureColor
                        }
                    }
                })
    
                return star
            }
    
          
    
            return new Rect({
                id,
                name:"Rect",
                zIndex,
                cursor:'pointer',
                stroke:stroke,
                strokeWidth:1,
                cornerRadius: 0,
                height,
                data:{
                  fillData:{
                    activeColorKey:obs.activeColorKey,
                    gradientColor:obs.gradientColor,
                    pureColor:obs.pureColor
                  }
                },
                ...defaultOption
            });
       }

    const _canvasAddElement=(eleItem,emit=true)=>{

        const { centerPoint, workSpaceDraw,canvas } = useCenter();
        
        if(canvas.editor.multiple||canvas.editor.single){

            eleItem.x = canvas.editor.element.x+10
            eleItem.y = canvas.editor.element.y+10

        }else{

            eleItem.x = centerPoint.x - eleItem.width / 2;
            eleItem.y = centerPoint.y - eleItem.height / 2;
        }

        eleItem.zIndex=workSpaceDraw.children.length+1

        workSpaceDraw.add(eleItem)

        canvas.editor.target=eleItem

        emit?workSpaceDraw.emit("redo.add",{}):""

        ElMessage({
            message: 'Success!',
            type: 'success'
        })
    }

    const createImage=async (imgUrl)=>{

        const { centerPoint, workSpaceDraw,canvas,width:pageWidth,height:pageHeight } = useCenter();

        let  id=nanoid();

        const { width:widthImg, height:heightImg } = await mixins.getImage(imgUrl)

        let widthx=widthImg  
        let heightx=heightImg

        if(widthx>pageWidth){
            widthx= pageWidth*0.8
            heightx=(widthx*heightImg)/widthImg
        }

        if(heightx>pageHeight){
            heightx= pageHeight*0.8
            widthx=(heightx*widthImg)/heightImg
        }

        const rectImg = new Rect({
                id:id,
                name:'image',
                //around: 'center',
                data:{
                    action:'',
                    original:imgUrl,
                    sizeData:null,
                    cropData:null
                },
                fill: {
                    type: 'image',
                    url: imgUrl,
                    mode: 'strench'
                },
                zIndex:workSpaceDraw.children.length+1,
                editable: true,
                locked:false,
                width:widthx,
                height:heightx
        }) 
        
        _canvasAddElement(rectImg)
  }

    const createGroup=(item)=>{


        const group = new Group(item.data)

        group.around='top-left'
        group.id=nanoid()

        group.x=0; //pageWidth.value/2+group.width/2
        group.y=0;// pageHeight.value/2+group.height/2
        
        _canvasAddElement(group,true)
  }

  const  createTextElement=(textValue,fontSize)=>{

    const textElement = new Text({
      id: nanoid(10),
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

    _canvasAddElement(textElement)
  }
  
  const  createShape=(type,subType)=>{
    let sharp=_onStart(type,subType);
    if(!sharp){
        return;
    }
    let newSharp= _getSharp(sharp)
    _canvasAddElement(newSharp)
  }

  return {
    createTextElement,
    createGroup,
    createImage,
    createShape
  }
}