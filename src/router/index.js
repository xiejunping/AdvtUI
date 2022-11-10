import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(() => {})

router.afterEach(() => {

  if (isProd) {

  }
})

export default router
