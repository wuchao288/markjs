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

if (!(window as any)._hasLoadFonts) {
    (window as any)._hasLoadFonts = {};
}
 async function loadFont(fontFamily: string, url: string) {
    if ((window as any)._hasLoadFonts[fontFamily]) {
      console.log('该字体已加载', fontFamily);
      return true;
    }
    (window as any)._hasLoadFonts[fontFamily] = true;
  
    console.log('url', url);

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
  

export const mixins ={
    debounce,
    throttle,
    loadFont
}