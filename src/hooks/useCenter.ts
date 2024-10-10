
import { ref, onMounted, onUnmounted } from 'vue'
import { LeafList  } from 'leafer-ui'
import useEditStore from '@/stores/useEditStore'

export default () => {
    
  const  canvas  = useEditStore().editor
  const workspace = canvas.tree.findOne("Frame")
  let left = 0, top = 0
  let width = canvas.width || 0, height = canvas.height || 0
  const centerPoint = {x: 0, y: 0}
  if (workspace) {
    width = workspace.width || 0, height = workspace.height || 0
    left = workspace.x || 0
    top = workspace.y || 0
    centerPoint.x = width / 2
    centerPoint.y = height / 2
  }
  
  console.log(width, height, left, top)
  return {
    canvas,
    workSpaceDraw: workspace,
    width,
    height,
    left,
    top,
    centerPoint
  }
}