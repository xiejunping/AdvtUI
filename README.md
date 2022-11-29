# 投放系统UI库

开源一个投入系统的UI库，主要针对 今日头条，广点通，UC新闻，快手广告，百度推广 广告投放系统的深度对接，提供快速开发的UI库。
项目中开发组件，很多时候都会引用三方库去写，组件的复杂程度，以及五大媒体的更新速度，真的很难维护UI组件库的更新
为了不要大家都去实现媒体的UI功能，特此开源一个Vue的UI库，后面会继续开源React 版本的

媒体为什么不公开一下自已的UI库吗，头条在近期已经推出了，

https://open.oceanengine.com/mui/doc/v2/quickstart

但主要还是我第一个在全网分享了他们的投放组件DEMO演示

### tips
 选择时间段的组件源码

 https://free.jsvue.cn/andt-components/#/about


上面本来是用vite3创的项目，一点点改造使用vue2，真的坑得不行
老的vue2组件，想用vite打包组件，但是在vue2做不到按需引入打包，

## 使用方式

所以使用全局引入 `ant-design-vue` 组件后再 `use` 本UI库，顺序不能反了


```js

import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(AntDesignVue)

import AdvtUI from 'advt-ui'
import 'advt-ui/dist/style.css'
Vue.use(AdvtUI)

```

组件库同时支持按需引入，

```js

import { DragWeektime } from 'andt-ui'

Vue.use(DragWeektime)

```

不按需包也不大 ，AdvtUI 现在才 60k ，小才大用

### 文档待写

