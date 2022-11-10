import Vue from 'vue'
import router from './router'
import App from './App.vue'
// import AdvtUI from '../packages'
import './style.css'
// import '../dist/style.css'

// Vue.use(AdvtUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
