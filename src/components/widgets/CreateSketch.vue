<template>
  
    <el-dialog  v-model="dialogVisible"
      :close-on-click-modal="false"
      :destroy-on-close="false"
      :append-to-body="true"
      :title="t('stylepanel.createlineimg')"
      width="1024" 
      @cloesed="closeed"
      @open="opened"
>
     <el-row class="el-row" style="overflow: hidden;">
        <el-col class="el-col"  :span="18">
            <div class="content" :style="{maxHeight:contentHeight+'px'}" v-loading="state.createing">
                <div v-show="state.rawImage"  class="c-compare scan-effect" 
                :style="{ width: state.offsetWidth ? state.offsetWidth + 'px' : '100%','--value':state.percent+'%' }">
                    <img ref="sketch" v-show="state.sketchImage" class="c-compare__left" :src="state.sketchImage" alt="result"/>
                    <img ref="raw" @load.once="onImageLoad" class="c-compare__right" :src="state.rawImage" alt="B/W" />
                    <input type="range" v-show="state.sketchImage" class="c-rng c-compare__range" min="0" max="100"  v-model="state.percent"
                    />
                    <div class="scroller scroller-top" v-show="state.sketchImage"  :style="{left: state.percent+'%'}">
                        <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                            <polygon points="0 50 37 68 37 32 0 50" style="fill:#FFAB91"></polygon>
                            <polygon points="100 50 64 32 64 68 100 50" style="fill:#FFAB91"></polygon>
                        </svg>
                    </div> 
                </div> 
            </div>
        </el-col>
        <el-col class="el-col el-col-form"  :span="6">
            
            <el-form
              class="form"
              label-position="top"
              label-width="50px"
            >

                <el-form-item label="风格">
                    <el-radio-group v-model="state.convoluteName">
                        <el-radio v-for="(value,key,index) in Convolutes"  :label="key" :value="key" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-space>
                    <el-switch
                    v-model="state.denoise" @change="_louvre(50)"
                    active-text="降噪"
                />
               
                <el-switch
                    v-model="state.kuma"
                    active-text="Kiss" @change="_louvre(50)"
                />
            </el-space>
                    <!-- <ui-switch v-model="state.denoise" @input="_louvre(50)">降噪</ui-switch>
					<ui-switch v-model="state.kuma" @input="_louvre(50)">Kiss</ui-switch> -->
					<!-- <ui-switch v-model="style.shade" :disabled="!style.kuma" @input="_louvre(50)">调子</ui-switch> -->
					<!-- <ui-switch v-model="state.watermark" @input="_louvre(50)">水印</ui-switch>
					<ui-switch v-model="state.hajimei" :disabled="!style.watermark" @input="_louvre(50)">初回</ui-switch> -->
                </el-form-item>

                <el-form-item label="线迹轻重">
                    <el-slider v-model="state.darkCut" :min="20" :max="200" :step="1"/>
                </el-form-item>

                <el-form-item label="线调子数量">
                    <el-slider v-model="state.shadeLimit" :min="20" :max="200" :step="1"/>
                </el-form-item>
           </el-form>
        </el-col>
     </el-row>
   
        <template #footer>
            <div class="dialog-footer">
                <el-button  @click="close"> {{$t("canvas.cancel")}} </el-button>
                <el-button type="primary" @click="createBgImageDone">
                {{$t("canvas.confirm")}} 
                </el-button>
            </div>
        </template>
    </el-dialog>
  
  </template>

<script lang="ts">
const randRange = (a, b) => Math.floor(Math.random() * (b - a) + a);

const inputImageEl = document.querySelector('#input');



let width = 640;
let height = 480;
let scale = width / height;



let lastConfigString = null;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const canvasShade = document.createElement('canvas');
const canvasShadeMin = document.createElement('canvas');
const canvasMin = document.createElement('canvas');
const pencilTextureCanvas = document.createElement('canvas');

const louvre = async ({img, outputCanvas, config, callback}) => {
	if (!img || !config) return;

	const configString = [
		JSON.stringify(config),
		img.src,
	].join('-');

	if (lastConfigString === configString) return;

	console.time('louvre');

	lastConfigString = configString;

	const oriWidth = img.naturalWidth;
	const oriHeight = img.naturalHeight;

	let oriScale = oriWidth / oriHeight;



	// const _width  = Math.floor( width  / config.zoom );
	// const _height = Math.floor( height / config.zoom );

	let _width  = Math.round( oriWidth   / config.zoom );
	let _height = Math.round( oriHeight  / config.zoom );

	const maxWidth = 1920;
	if(_width > maxWidth){
		_height = _height * maxWidth / _width
		_width = maxWidth
	}
	// const _width = 800;
	// const _height = 800;


	let cutLeft = 0;
	let cutTop = 0;

	let calcWidth = oriWidth;
	let calcHeight = oriHeight;

	if(config.cover){

		if(oriScale > 1){
			cutLeft = (oriScale - 1) * oriHeight / 2;
			cutLeft = Math.round(cutLeft);
			calcWidth = oriHeight;
			_width = _height;
		}else{
			cutTop =  (1 - oriScale) * oriHeight / 2;
			cutTop = Math.round(cutTop);
			calcHeight = oriWidth;
			_height = _width;
		}
	}


	let setLeft = 0;
	let setTop = 0;

	let setWidth = _width;
	let setHeight = _height;


	canvas.width = _width;
	canvas.height = _height;



	ctx.drawImage(
		img,
		cutLeft, cutTop,
		calcWidth, calcHeight,

		setLeft, setTop,
		setWidth, setHeight
	);
	// ctx.font = '200px sans-serif'
	// ctx.fillText('123233',50,200);

	let pixel = ctx.getImageData(0, 0, _width, _height);



	let pixelData = pixel.data;

	// 测试图像数据读取正常与否
	// alert(pixel.data.slice(0,10);


	for (let i = 0; i < pixelData.length; i += 4) {
		// let yuv = rgb2yuv(
		// 	pixelData[i],
		// 	pixelData[i + 1],
		// 	pixelData[i + 2],
		// );
		const r = pixelData[i];
		const g = pixelData[i + 1];
		const b = pixelData[i + 2];
		
		let y = r * .299000 + g * .587000 + b * .114000;
		y = Math.floor(y);

		// if(i%10000) console.log(y);

		pixelData[i    ] = y;
		pixelData[i + 1] = y;
		pixelData[i + 2] = y;
	}
	let shadePixel;

	const { 
		shadeLimit = 80,
		shadeLight = 40 
	} = config;
	let pencilTexturePixel;
	if(config.shade){

		// 载入纹理
		pencilTextureCanvas.width = _width;
		pencilTextureCanvas.height = _height;
		const pencilTextureCtx = pencilTextureCanvas.getContext('2d');
		const pencilSetWidthHeight = Math.max(_width,_height);
		pencilTextureCtx.drawImage(
			pencilTextureEl,
			0,0,
			1200,1200,
			0,0,
			pencilSetWidthHeight,pencilSetWidthHeight
		);
		pencilTexturePixel = pencilTextureCtx.getImageData(0,0,_width,_height);


		// 处理暗面
		shadePixel = ctx.createImageData(_width, _height);

		for (let i = 0; i < pixelData.length; i += 4) {
			let y = pixelData[i];

			y = y > shadeLimit ? 0 : 255; //((255 - pencilTexturePixel.data[i]) + Math.random() * 40 - 20);

			// y = Math.max(255-y) * 0.6;

			shadePixel.data[i    ] = y;
			shadePixel.data[i + 1] = 128;
			shadePixel.data[i + 2] = 128;
			shadePixel.data[i + 3] = Math.floor(Math.random() * 255)//Math.ceil( y + Math.random() * 40 - 20);
		}

		// /*
		// document.body.appendChild(canvasShade)

		const ctxShade = canvasShade.getContext('2d');
		const ctxShadeMin = canvasShadeMin.getContext('2d');
		
		canvasShade.width = _width;
		canvasShade.height = _height;

		// console.log({shadePixel})

		ctxShade.putImageData(shadePixel, 0, 0);

		// ctxShade.fillText('123233',50,50);
		const shadeZoom = 4;
		canvasShadeMin.width = Math.floor(_width/shadeZoom);
		canvasShadeMin.height = Math.floor(_height/shadeZoom);

		ctxShadeMin.drawImage(
			canvasShade,
			0,0,
			canvasShadeMin.width,canvasShadeMin.height
		);

		ctxShade.clearRect(0,0,_width,_height)
		ctxShade.drawImage(
			canvasShadeMin,
			0,0,
			_width,_height
		);
		shadePixel = ctxShade.getImageData(0,0,_width,_height);

		for (let i = 0; i < shadePixel.data.length; i += 4) {
			let y = shadePixel.data[i];

			y = Math.round((255-pencilTexturePixel.data[i]) / 255 * y / 255 * shadeLight); //((255 - pencilTexturePixel.data[i]) + Math.random() * 40 - 20);

			// y = Math.max(255-y) * 0.6;

			shadePixel.data[i    ] = y;
		}

	}
	
	const { 
		light = 0,
	} = config;
	if(light){

		
		for (let i = 0; i < pixelData.length; i += 4) {
			let y = pixelData[i];

			y = y + y * (light/100);
	
			pixelData[i    ] = y;
			pixelData[i + 1] = y;
			pixelData[i + 2] = y;
		}

		// ctx.putImageData(pixel, 0, 0);
		// pixel = ctx.getImageData(0, 0, _width, _height);
	}


	if(config.denoise){
		pixel = convoluteY(
			pixel,
			[
				1/9, 1/9, 1/9,
				1/9, 1/9, 1/9,
				1/9, 1/9, 1/9
			],
			ctx
		);
	}
	
	const convoluteMatrix = config.Convolutes[config.convoluteName];
	let pixel1 = convoluteMatrix ? convoluteY(
		pixel,
		convoluteMatrix,
		ctx
	) : pixel;

	// if(config.contrast){
	// 	for (let i = 0; i < pixel1.data.length; i +=4) {
	// 		let r = (pixel1.data[i]-128) * config.contrast + 128;
	// 		pixel1.data[i  ] = r;
	// 		pixel1.data[i+1] = r;
	// 		pixel1.data[i+2] = r;
	// 		pixel1.data[i+3] = 255;
	// 	}
	// }

	if(convoluteMatrix && config.convolute1Diff){
		let pixel2 = config.convoluteName2 ? convoluteY(
			pixel,
			config.Convolutes[config.convoluteName2],
			ctx
		) : pixel;
		
		// console.log(/pixel2/,config.Convolutes[config.convoluteName2],pixel2);
		// pixelData
		for (let i = 0; i < pixel2.data.length; i +=4) {
			let r = 128 + pixel2.data[i  ] - pixel1.data[i  ];
			pixel2.data[i  ] = r;
			pixel2.data[i+1] = r;
			pixel2.data[i+2] = r;
			pixel2.data[i+3] = 255;
		}
		pixel = pixel2;
	}else{
		// 不对比
		pixel = pixel1;
	}

	pixelData = pixel.data;


	if(convoluteMatrix)
	if(config.lightCut || config.darkCut){
		const scale = 255 / (255 - config.lightCut - config.darkCut);
		for (let i = 0; i < pixelData.length; i += 4) {
			let y = pixelData[i];

			y = (y - config.darkCut) * scale;
			
			y = Math.max(0,y);
			
			pixelData[i+0 ] = y
			pixelData[i+1 ] = y
			pixelData[i+2 ] = y
			pixelData[i+3 ] = 255
		}
	}

	if(config.kuma){

		const hStart = 30;
		const hEnd = -184;
	
		// const be = bezier(0.57, 0.01, 0.43, 0.99);
		// const s = config.s/100;
	
	
		const gradient = ctx.createLinearGradient(0,0, _width,_height);
	
		gradient.addColorStop(0, '#fbba30');
		gradient.addColorStop(0.4, '#fc7235');
		gradient.addColorStop(.6, '#fc354e');
		gradient.addColorStop(.7, '#cf36df');
		gradient.addColorStop(.8, '#37b5d9');
		gradient.addColorStop(1, '#3eb6da');
	
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, _width, _height);
		let gradientPixel = ctx.getImageData(0, 0, _width, _height);
		
		for (let i = 0; i < pixelData.length; i += 4) {
			let y = pixelData[i];
			let p = Math.floor(i / 4);
	
			let _h = Math.floor(p/_width);
			let _w = p % _width;
	
			/*
			
			// const 
			// hScale = hScale * hScale;
	
			let hScale = (_h + _w)/(_width + _height);
	
			hScale = hScale * hScale;
			hScale = be(hScale);
	
			// let h = Math.floor((hStart + (hScale) * (hEnd - hStart)));
			let [h] = rgb2hsl([
				gradientPixel.data[i + 0],
				gradientPixel.data[i + 1],
				gradientPixel.data[i + 2],
			]);
			const l = y/255;
			const rgb = hsl2rgb([h, s, l * (1 - config.l/100) + (config.l/100)]);
	
			if(i%5677===0){
				// console.log(h,y,l,l * (config.l/100) + (1 - config.l/100))
				// console.log((_h + _w)/(_width + _height),hScale)
			}
	
			pixelData[i+0 ] = rgb[0];
			pixelData[i+1 ] = rgb[1];
			pixelData[i+2 ] = rgb[2];
			pixelData[i+3 ] = 255;
			*/
	
			pixelData[i+0 ] = gradientPixel.data[i + 0];
			pixelData[i+1 ] = gradientPixel.data[i + 1];
			pixelData[i+2 ] = gradientPixel.data[i + 2];
			
			y = 255 - y;
			if(config.shade){
				y = Math.max(
					y,
					shadePixel.data[i]
				);
			}
			pixelData[i+3 ] = y
		}
	
	}


	// for(let i = 0;i < pixelData.length;i += 4){

	// 	let _rgb = yuv2rgb(
	// 		pixelData[i],
	// 		pixelData[i+1],
	// 		pixelData[i+2],
	// 	);

	// 	pixelData[i   ] = _rgb[0];
	// 	pixelData[i+1 ] = _rgb[1];
	// 	pixelData[i+2 ] = _rgb[2];
	// }

	// blurC();
	ctx.putImageData(pixel, 0, 0);

	const ctxMin = canvasMin.getContext('2d');

	canvasMin.width = Math.floor(_width/1.4);
	canvasMin.height = Math.floor(_height/1.3);

	ctxMin.clearRect(0,0,canvasMin.width,canvasMin.height)
	ctxMin.drawImage(
		canvas,
		0,0,
		canvasMin.width,canvasMin.height
	);
	
	ctx.clearRect(0,0,_width,_height)
	ctx.drawImage(
		canvasMin,
		0,0,
		canvasMin.width,canvasMin.height,
		0,0,_width,_height
	);

	// one-last-image-logo-color.png
	if(config.watermark){
		// const watermarkImageEl = await loadImagePromise('one-last-image-logo2.png');

		const watermarkImageWidth = watermarkImageEl.naturalWidth;
		const watermarkImageHeight = watermarkImageEl.naturalHeight / 2;
		let setWidth = _width * 0.3;
		let setHeight = setWidth / watermarkImageWidth * watermarkImageHeight;
	
		if( _width / _height  > 1.1 ){
			setHeight = _height * 0.15;
			setWidth = setHeight / watermarkImageHeight * watermarkImageWidth;
		}
	
		let cutTop = 0;
	
		if(config.hajimei){
			cutTop = watermarkImageHeight;
		}
	
		let setLeft = _width - setWidth - setHeight * 0.2;
		let setTop = _height - setHeight - setHeight * 0.16;
		ctx.drawImage(
			watermarkImageEl,
			0,cutTop,
			watermarkImageWidth,watermarkImageHeight,
			setLeft, setTop,
			setWidth, setHeight
		);
	}

	const outputCtx = outputCanvas.getContext('2d');

	outputCanvas.width = _width;
	outputCanvas.height = _height;
	outputCtx.fillStyle = '#FFF';
	outputCtx.fillRect(0,0,_width,_height);
	outputCtx.drawImage(
		canvas,
		0,0,_width,_height
	);

	console.timeEnd('louvre');
	// return canvas.toDataURL('image/png');
	
};

let loadImage = (url,onOver)=>{
	const el = new Image();
	el.onload = _=>onOver(el);
	el.src = url;
};
let loadImagePromise = async url=>{
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			const el = new Image();
			el.onload = _=>resolve(el);
			el.onerror = e=>reject(e);
			el.src = url;
		}, 2000);
	});
}

let watermarkImageEl;
let pencilTextureEl;
const louvreInit = onOver=>{
	loadImage('pencil-texture.jpg',el=>{
		pencilTextureEl = el;
		loadImage('one-last-image-logo2.png',el=>{
			watermarkImageEl = el;
			onOver();
		});
	});
};


let convolute = (pixels, weights, ctx) => {
	const side = Math.round(Math.sqrt(weights.length));
	const halfSide = Math.floor(side / 2);

	const src = pixels.data;
	const sw = pixels.width;
	const sh = pixels.height;

	const w = sw;
	const h = sh;
	const output = ctx.createImageData(w, h);
	const dst = output.data;


	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			const sy = y;
			const sx = x;
			const dstOff = (y * w + x) * 4;
			let r = 0, g = 0, b = 0;
			for (let cy = 0; cy < side; cy++) {
				for (let cx = 0; cx < side; cx++) {
					const scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
					const scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
					const srcOff = (scy * sw + scx) * 4;
					const wt = weights[cy * side + cx];
					r += src[srcOff] * wt;
					g += src[srcOff + 1] * wt;
					b += src[srcOff + 2] * wt;
				}
			}
			dst[dstOff] = r;
			dst[dstOff + 1] = g;
			dst[dstOff + 2] = b;
			dst[dstOff + 3] = 255;
		}
	}


	// for (let y=0; y<h; y++) {
	// 	for (let x=0; x<w; x++) {
	// 		const srcOff = (y*w+x)*4;
	// 		src[srcOff] = dst[srcOff];
	// 	}
	// }
	return output;
};




 const convoluteY = (pixels, weights, ctx) => {
	const side = Math.round( Math.sqrt( weights.length ) );
	const halfSide = Math.floor(side / 2);

	const src = pixels.data;

	const w = pixels.width;
	const h = pixels.height;
	const output = ctx.createImageData(w, h);
	const dst = output.data;

	for (let sy = 0; sy < h; sy++) {
		for (let sx = 0; sx < w; sx++) {
			const dstOff = (sy * w + sx) * 4;
			let r = 0, g = 0, b = 0;

			for (let cy = 0; cy < side; cy++) {
				for (let cx = 0; cx < side; cx++) {

					const scy = Math.min(h - 1, Math.max(0, sy + cy - halfSide));
					const scx = Math.min(w - 1, Math.max(0, sx + cx - halfSide));

					const srcOff = (scy * w + scx) * 4;
					const wt = weights[cy * side + cx];

					r += src[srcOff] * wt;
					// g += src[srcOff + 1] * wt;
					// b += src[srcOff + 2] * wt;
				}
			}
			dst[dstOff] = r;
			dst[dstOff + 1] = r;
			dst[dstOff + 2] = r;
			dst[dstOff + 3] = 255;
		}
	}


	// for (let y=0; y<h; y++) {
	// 	for (let x=0; x<w; x++) {
	// 		const srcOff = (y*w+x)*4;
	// 		src[srcOff] = dst[srcOff];
	// 	}
	// }
	return output;
};
</script>

  <script setup  lang="ts">

    import {reactive,ref,nextTick,defineProps,computed,markRaw } from "vue";

    import { useI18n } from "vue-i18n"
    const { t } = useI18n()


    let dialogVisible= defineModel("dialogVisible",{type:Boolean})

    let imageSrc= defineModel("imageSrc",{type:String})

    const emit = defineEmits(['updateImageSrc','closeWin'])

    let  contentHeight=ref(660)


    let sketch=ref()


    export type TImageCreateBgState = {
        show: boolean;
        rawImage: string;
        sketchImage: string;
        offsetWidth: number;
        percent: number;
        progress: number;
        progressText: string;
        toolModel: boolean;
        loading: boolean;
        createing:boolean;
        darkCut:number;
        shadeLimit:number;
        convoluteName:string;//风格
        denoise:boolean; //降噪
        kuma:boolean;  //Kiss
        // watermark:string;
        // hajimei:string;
        T:number;
   }
  
    const close = ()=>{
    // 请关闭弹框
    dialogVisible.value = false;

    }
    //https://lab.magiconch.com/one-last-image/
    const init= _=>{
        state.loading = false;
        louvreInit( _=>{
            img = sketch.$refs;
            img.onload = app.setImageAndDraw;
            if(img.complete) img.onload();
        });
   }

    const _louvre=(ms=300)=>{
        state.createing = true
        clearTimeout(state.T)
        state.T = setTimeout(louvre,ms)
    }

    const  louvre=()=>{
        state.createing = true;
			nextTick(async _=>{
				await louvre({
					img: sketch,
					outputCanvas: app.$refs['canvas'],
					config: {
						...app.style,
						Convolutes,
					}
				});
				state.createing = false;
			})
    }

    const creatConvoluteCenterHigh = (w,centerV)=>{
	const arr = [];
	const c = Math.floor((w*w)/2);

	for(let x = 0; x < w; x++){
		for(let y = 0; y < w; y++){
			let i = x * w + y;
			arr[i] = -1;

			if(i===c){
				arr[i] = centerV;
			}
		}
	}
	return arr;
}
const creatConvoluteAverage = (w)=>new Array(w*w).fill(1/(w*w))

    const Convolutes = {
	// '右倾': [
	// 	0, -1, 0,
	// 	-1, 2, 2,
	// 	0, -1, 0
	// ],
	// '左倾': [
	// 	0, -1, 0,
	// 	3, 2, -2,
	// 	0, -1, 0
	// ],
	// '极细':   creatConvoluteAverage(3),
	'精细':  creatConvoluteAverage(5),
	'一般':  creatConvoluteAverage(7),
	'稍粗':  creatConvoluteAverage(9),
	'超粗':  creatConvoluteAverage(11),
	'极粗':  creatConvoluteAverage(13),
	// '12421': [
	// 	-3,2,-3,
	// 	 2,4, 2,
	// 	-3,2,-3,
	// ],
	// '9,-1,8': [
	// 	-1 ,-1 ,-1 ,
	// 	-1 , 9 ,-1 ,
	// 	-1 ,-1 ,-1 ,
	// ],
	// '25,-1,24':creatConvoluteCenterHigh(5,24),
	// '25,-1,25': creatConvoluteCenterHigh(5,25),
	// '25,-1,26': [
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , 26 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// ],
	// '-1,0,16': [
	// 	-1 , -1 , -1 , -1 , -1 ,
	// 	-1 ,  0 ,  0 ,  0 , -1 ,
	// 	-1 ,  0 , 17 ,  0 , -1 ,
	// 	-1 ,  0 ,  0 ,  0 , -1 ,
	// 	-1 , -1 , -1 , -1 , -1 ,
	// ],
	'浮雕': [
		1, 1, 1,
		1, 1, -1,
		-1, -1, -1
	],
	'线稿':  null,
}
   
   const state = reactive<TImageCreateBgState>({
        show: false,
        rawImage: "",//new URL("@/assets/koutu.png",import.meta.url).href,
        sketchImage:"",//new URL("@/assets/createbg.png",import.meta.url).href,
        offsetWidth: 0,
        percent: 0,
        progress: 0,
        progressText: '',
        toolModel: true,
        loading: false,
        createing:false,
        darkCut:118,
        shadeLimit:180,
        convoluteName:'一般',
        denoise:true,
        kuma:true,
        T:0
   })

   let raw=ref(null);
  
    function  onImageLoad(){

        state.offsetWidth = (raw.value as HTMLElement).offsetWidth
    }

    const closeed=()=>{
        state.rawImage=""
        state.sketchImage=''
        state.percent=0
        state.createing=false
    }

    const opened=()=>{
        state.rawImage=imageSrc.value
        state.sketchImage=''
        state.percent=0
        state.createing=false
        
        if(window.innerHeight<contentHeight.value){
            contentHeight.value=window.innerHeight*0.9
        }
    }

    const createBgImageDone = () => {

        emit('updateImageSrc', {
            sketchImage:state.sketchImage
        });
    }
  </script>

<style scoped  lang="less">
    .content {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .el-col-form{
        padding: 16px;
        box-shadow: -1px -4px 0.4rem 0px #0000004d;
    }

    .scan-effect {
        position: relative;
        //height: 50vh;
        overflow: hidden;
        background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%), linear-gradient(45deg, rgba(0, 0, 0, 0.2) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.2) 75%);
        background-position: 0 0, 14px 14px;
        background-size: 28px 28px;
        img {
            height: 100%;
            object-fit: contain;
            position: absolute;
        }
   }

:deep(.el-space__item:last-of-type .el-form-item){
    margin-bottom: 0px;
}
.c-compare {
  --h: 9;
  --m: 1rem 0;
  --w: 16;
  --thumb-bgc: #FFAB91;
  --thumb-bgc-focus: hsla(0, 70%, 70%, 0.7);
  --thumb-w: 0.3rem;

  margin: var(--m);
  position: relative;
}
.c-compare::after {
  content: "";
  display: block;
  padding-bottom: calc((var(--h) / var(--w)) * 100%);
}
.c-compare__left,
.c-compare__right {
  height: 100%;
  object-fit: contain;
  position: absolute;
  width: 100%;
}
.c-compare__left {
  clip-path: polygon(0% 0%, var(--value) 0%, var(--value) 100%, 0% 100%);
}
.c-compare__right {
  clip-path: polygon(100% 0%, var(--value) 0%, var(--value) 100%, 100% 100%);
}
.c-compare__range {
  background-color: transparent;
  box-sizing: border-box;
  font-family: inherit;
  height: 100%;
  margin: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.c-compare__range::-moz-range-thumb {
  background-color: var(--thumb-bgc);
  cursor: ew-resize;
  height: 100%;  
  width: var(--thumb-w);
}
.c-compare__range::-webkit-slider-thumb {
  background-color: var(--thumb-bgc);
  cursor: ew-resize;
  height: 100%;  
  width: var(--thumb-w);
}
.c-compare__range:focus::-webkit-slider-thumb {
  background-color: var(--thumb-bgc-focus);
  box-shadow: 0 0 0 3px var(--thumb-bgc);
}
.c-compare__range:focus::-moz-range-thumb {
  background-color: var(--thumb-bgc-focus);
  box-shadow: 0 0 0 3px var(--thumb-bgc);
}
.c-compare__range::-moz-range-track {
  background: transparent;
  background-size: 100%;
  box-sizing: border-box;
}
.c-compare__range::-webkit-slider-runnable-track {
  background: transparent;
  background-size: 100%;
  box-sizing: border-box;
  height: 100%;
}
.c-compare__range,
.c-compare__range::-webkit-slider-runnable-track,
.c-compare__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}
.scroller {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translateY(-50%) translateX(-25px);
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.9;
    transition: opacity 0.12s ease-in-out;
    pointer-events: auto;
    cursor: pointer;
    box-shadow: 3.5px 0px 7px rgba(100, 100, 100, 0.2);
    pointer-events: none;
}

.scroller-top>.scroller__thumb {
    border: 5px solid #FFAB91;
}

.scroller__thumb {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 7px;
}
</style>