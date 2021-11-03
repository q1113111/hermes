import { defineConfig } from 'vite'
import path from 'path' // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import ViteRestart from 'vite-plugin-restart'
import { injectHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components(),
    ViteRestart({
      restart: [
        'my.config.ts'
      ]
    }),
    injectHtml({
      data: {
        title: 'my-app'
      }
    })
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '~/': `${path.resolve(__dirname, './')}/`
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://swin-opendata.herokuapp.com/',
        changeOrigin: true
      // rewrite: path => path.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0' // 显示IP位置
  }

})
