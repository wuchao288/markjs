import { ElMessage } from "element-plus";

function debounce(func, wait, immediate) {
    let timeout; // 定义一个计时器变量，用于延迟执行函数
    return function (...args) { // 返回一个包装后的函数
        const context = this; // 保存函数执行上下文对象
        const later = function () { // 定义延迟执行的函数
            timeout = null; // 清空计时器变量
            if (!immediate) func.apply(context, args); // 若非立即执行，则调用待防抖函数
        };
        const callNow = immediate && !timeout; // 是否立即调用函数的条件
        clearTimeout(timeout); // 清空计时器
        timeout = setTimeout(later, wait); // 创建新的计时器，延迟执行函数
        if (callNow) func.apply(context, args); // 如果满足立即调用条件，则立即执行函数
    };
}

// 节流函数
function throttle(func, wait) {
    let timeout; // 定义一个计时器变量，用于限制函数调用频率
    return function (...args) { // 返回一个包装后的函数
        const context = this; // 保存函数执行上下文对象
        if (!timeout) { // 如果计时器不存在
            func.apply(context, args); // 执行函数
            timeout = setTimeout(() => {
                timeout = null; // 清空计时器变量
            }, wait); // 创建计时器，在指定时间后重置计时器变量
        }
    };
}



function isCrossDomain(url) {
  try {
      // 创建新的URL对象
      const newUrl = new URL(url);
      const currentUrl = new URL(window.location.href);

      // 获取当前页面和目标URL的协议、主机和端口
      const currentOrigin = `${currentUrl.protocol}//${currentUrl.hostname}:${currentUrl.port}`;
      const newOrigin = `${newUrl.protocol}//${newUrl.hostname}:${newUrl.port}`;

      // 比较两者的origin是否相同
      return currentOrigin !== newOrigin;
  } catch (error) {
      // 如果URL无效，则返回true表示跨域
      console.error('Invalid URL', error);
      return true;
  }
}

//export type TUploadFile=(file: File | Blob , options:object,  cb?: any)=>string

async function uploadFile (file: File | Blob , options,  cb?: any) {
    
    
  const formData = new FormData()

  formData.append('file',file,'blob')

  return new Promise((resolve: any, reject: (err: string) => void) => {
    
    fetch((window.parent as any).sploadImgToTempdes||'/BLL/TempHandler.ashx?action=UploadMarkImage', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {

      let isUploadOk=true
      let rurl=''
      let error=''

      if((window.parent as any).cutOutImg){

          if((data as any).response.success==false){

            isUploadOk=false
            error=(data as any).response.msg

          }else{
           
            rurl= (data as any).response.ImgPath
          }
      }else{

         if((data as any).code!=0){

            isUploadOk=false
            error=(data as any).msg

          }else{

            rurl= (data as any).data.fileUrl
          }
      }

      if(isUploadOk){
        cb?.(rurl)
        resolve(rurl)
      }else{
        reject(rurl);
        ElMessage.error(error)
      }
    })
    .catch(error => {
      console.error(error)
      reject(error);
    });
  })

}

if (!(window as any)._hasLoadFonts) {
  (window as any)._hasLoadFonts = {};
}

async function loadFont(fontFamily: string, url: string) {
    if ((window as any)._hasLoadFonts[fontFamily]) {
      console.log('该字体已加载', fontFamily);
      return true;
    }
    (window as any)._hasLoadFonts[fontFamily] = true;

    if (url) {

      const prefont = new FontFace(fontFamily, `url("${url}")`);

      try {

        const res = await prefont.load();
        document.fonts.add(res);

        console.log('该字体加载完成', fontFamily);
        return true;
      } catch (err) {
        console.error('字体资源加载异常', url);
      }
    } else {
      console.error('字体资源文件不存在');
    }
    return false;
}
  
async function loadImg(url:string) {
  
    return  fetch(url,{
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }).then(async res=>await res.blob())
    
}


// 计算两点之间的角度（弧度）
export function calculateAngle(x1, y1, x2, y2) {
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  var angleRad = Math.atan2(deltaY, deltaX);
  var an = radianToDegree(angleRad) + 360;
  return an % 360;
}

// 将弧度转换为角度
export function radianToDegree(radian) {
  return Number((radian * (180 / Math.PI)).toFixed(0));
}

// 已知角度，求两个点的坐标（归一化）
export function calculatePoints(angle) {
  // 将角度转换为弧度
  var angleRad = angle * (Math.PI / 180);

  // 计算点1的坐标
  var x1 = (Math.cos(angleRad) + 1) / 2; // 确保在0到1之间
  var y1 = (Math.sin(angleRad) + 1) / 2; // 确保在0到1之间

  // 计算点2的坐标（与点1角度相差180度）
  var x2 = (Math.cos(angleRad + Math.PI) + 1) / 2; // 确保在0到1之间
  var y2 = (Math.sin(angleRad + Math.PI) + 1) / 2; // 确保在0到1之间

  return [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ];
}


export const mixins ={
    debounce,
    throttle,
    loadFont,
    loadImg,
    uploadFile
}