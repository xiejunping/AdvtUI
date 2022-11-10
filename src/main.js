import Vue from 'vue'
import AntDesignVue from 'ant-design-vue'
import router from './router/index'
import App from './App.vue'
import AdvtUI from '../packages'
import 'ant-design-vue/dist/antd.css'
import './style.css'
import '../dist/style.css'

Vue.use(AntDesignVue)
  .use(AdvtUI)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default app
