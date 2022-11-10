import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  base: '/',
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
    // rollupOptions: {
    //   external: ['vue', 'vue-router', 'ant-design-vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue',
    //       'vue-router': 'VueRouter',
    //       'ant-design-vue': 'AntDesignVue'
    //     }
    //   }
    // },
    lib: {
      entry: './packages/index.js',
      name: 'advt-ui'
    }
  }
})
