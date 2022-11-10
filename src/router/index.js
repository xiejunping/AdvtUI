import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const isProd = import.meta.env.PROD

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to) => {
  if (isProd) {
    // 百度统计上报
    window._hmt.push(['_setAutoPageview', false])
    window._hmt.push(['_trackPageview', to.fullPath])
  }
})

export default router
