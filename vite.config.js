import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'
// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    // ViteComponents({
    //   customComponentResolvers: [AntDesignVueResolver()]
    // }),
    viteCommonjs(),
    Components({
      resolvers: [ AntDesignVueResolver() ]
    }),
    styleImport({
      resolvers: [ AntDesignVueResolver() ],
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    })
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
