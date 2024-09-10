import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


import viteCompression from 'vite-plugin-compression'

const resolve = (...data: string[]) => path.resolve(__dirname, ...data)



// https://vitejs.dev/config/


export default defineConfig(

   {
    base: '/editor',
    plugins: [
      vue(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        '~data': resolve('src/assets/data')
      }
    },
    server: {
      hmr: { overlay: false },
      host: 'localhost',
      port: 5173,
      proxy: {
        '/BLL': {
          target: 'http://localhost:9290',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^'), '')
        }
      }
    },
  }
)