export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue')
  },
  {
    path: '/drag-weektime',
    name: 'dragWeektime',
    component: () => import(/* webpackChunkName: "dragWeektime" */ '../views/drag-weektime.vue')
  },
  {
    path: '/selecter',
    name: 'selecter',
    component: () => import(/* webpackChunkName: "selecter" */ '../views/selecter.vue')
  },
  {
    path: '/version',
    name: 'version',
    component: () => import(/* webpackChunkName: "version" */ '../views/version.vue')
  },
  {
    path: '*',
    name: 'nofound',
    component: () => import('../components/NoFound.vue')
  }
]
