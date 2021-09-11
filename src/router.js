import { createRouter, createWebHistory } from 'vue-router'

import CoachRegister from './pages/coaches/CoachRegister.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachDetail from './pages/coaches/CoachDetail.vue'

import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceives from './pages/requests/RequestsReceives.vue'

import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches/', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach },
      ]
    },
    { path: '/register/', component: CoachRegister },
    { path: '/requests/', component: RequestsReceives },
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router
