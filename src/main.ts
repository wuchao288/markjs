import { createApp,getCurrentInstance} from 'vue'
import 'normalize.css/normalize.css'
import 'element-plus/theme-chalk/index.css'
import '@/assets/styles/index.less'
import '@/assets/styles/iconfont/iconfont.css'
import App from './App.vue'
import I18n from './languages/index'

import "vue3-colorpicker/style.css";

import { createPinia } from 'pinia'



const pinia = createPinia()
const app = createApp(App)



app.directive('aria-hidden', (el, binding) => {
    if(binding.value) {
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });


app.use(pinia)

app.use(I18n).mount('#app')
