import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/index',
    component: () => import('../pages/index/index.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/login/login.vue')
  }
]
const router = new Router(
  {
    routes
  }
)

export default router
