import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import 'element-plus/theme-chalk/index.css'
import '@/assets/styles/index.less'
import App from './App.vue'
import I18n from './languages/index'

import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

app.use(I18n).mount('#app')
