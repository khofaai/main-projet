import { createRouter, createWebHistory } from 'vue-router'
// import Routes from './modules/routers'
import BlueRouter from './modules/blue/router.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [...BlueRouter]
})

export default router
