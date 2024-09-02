import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import 'element-plus/theme-chalk/index.css'
import '@/assets/styles/index.less'
import App from './App.vue'
import I18n from '@/languages/index'


createApp(App).use(I18n).mount('#app')
