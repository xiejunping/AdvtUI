# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

上面本来是用vite3创的项目，一点点改造使用vue2，真的坑得不行

老的vue2组件，想用vite打包组件，但是vue2做不到按需引入打包，所以使用全局引入 `ant-design-vue` 组件后再 `use` 本UI库，湎序不能反了


```js

import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(AntDesignVue)

import AdvtUI from 'advt-ui'
import 'advt-ui/dist/style.css'
Vue.use(AdvtUI)

```

项目中开发组件，很多时候都会引用三方库去写，但是如果封组件就不好打包了，不按需包太大了

AdvtUI 现在才 20k ，小才大用

### 文档待写

