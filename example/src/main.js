import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AdvtUI from '../../dist/advt-ui'
import '../../dist/style.css'

createApp(App).use(AdvtUI).use(store).use(router).mount('#app')
