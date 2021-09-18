import { createRouter, createWebHistory } from 'vue-router'
// import Routes from './modules/routers'
import routerModules from './modules/routers.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routerModules]
})

export default router
