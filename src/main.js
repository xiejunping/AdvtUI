import Vue from 'vue'
// import AntDesignVue from 'ant-design-vue'
import router from './router/index'
import App from './App.vue'
import AdvtUI from '../packages'
import {
  Layout,
  Icon,
  Row,
  Col,
  Input,
  Checkbox,
  Radio,
  Steps,
  Anchor,
  Tag,
  Popover
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style.css'
import '../dist/style.css'

// Vue.use(AntDesignVue)
Vue.use(Layout)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Input)
  .use(Checkbox)
  .use(Radio)
  .use(Steps)
  .use(Anchor)
  .use(Tag)
  .use(Popover)

Vue.use(AdvtUI)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default app
