import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (...data: string[]) => path.resolve(__dirname, ...data)



// https://vitejs.dev/config/


export default defineConfig(() => {

  return {
    base: '/editor',
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        '~data': resolve('src/assets/data')
      }
    }
  }
})