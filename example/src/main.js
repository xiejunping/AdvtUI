import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import AdvtUI from 'advt-ui'
import 'advt-ui/dist/style.css'
Vue.use(AntDesignVue)
Vue.use(AdvtUI)

// eslint-disable-next-line
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
