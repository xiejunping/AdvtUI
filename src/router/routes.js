export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue')
  },
  {
    path: '/input-len',
    name: 'inputLen',
    component: () => import(/* webpackChunkName: "inputLen" */ '../views/input-len.vue')
  },
  {
    path: '/textarea-len',
    name: 'textareaLen',
    component: () => import(/* webpackChunkName: "textareaLen" */ '../views/textarea-len.vue')
  },
  {
    path: '/drag-weektime',
    name: 'dragWeektime',
    component: () => import(/* webpackChunkName: "dragWeektime" */ '../views/drag-weektime.vue')
  },
  {
    path: '/drop-tree',
    name: 'dropTree',
    component: () => import(/* webpackChunkName: "dropTree" */ '../views/drop-tree.vue')
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
    path: '/mixcheck',
    name: 'mixcheck',
    component: () => import(/* webpackChunkName: "mixcheck" */ '../views/mixcheck.vue')
  },
  {
    path: '*',
    name: 'nofound',
    component: () => import('../components/NoFound.vue')
  }
]
