import { createRouter, createWebHistory } from 'vue-router'
import ViewMain from '../views/main/viewMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewMain
    },
    {
      path: '/st/cys',
      name: 'st-cys',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/st/cys/viewCys.vue')
    },
    {
      path: '/st/gdws',
      name: 'st-gdws',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/st/gdws/viewGdws.vue')
    },
  ]
})

export default router
