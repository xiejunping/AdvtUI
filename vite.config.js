import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    viteCommonjs()
  ],
  // 引用使用less的库要配置一下
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: './packages/index.js',
      name: 'advt-ui'
    }
  }
})
