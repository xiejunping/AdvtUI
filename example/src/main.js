import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* eslint-disable */
import AdvtUI from 'advt-ui'
import 'advt-ui/dist/style.css'
/* eslint-disable */
Vue.use(AdvtUI)

// eslint-disable-next-line
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
