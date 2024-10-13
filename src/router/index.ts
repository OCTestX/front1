import { createRouter, createWebHistory } from 'vue-router'
import ViewMain from '../views/main/viewMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: () => import('../views/index/viewIndex.vue')
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: ViewMain
    // },
    {
      path: '/',
      name: 'main',
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
    {
      path: '/jsnav/jxl',
      name: 'jsnav-jxl',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/jsnav/viewJxl.vue')
    },
    {
      path: '/jsnav/lt',
      name: 'jsnav-lt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/jsnav/viewLt.vue')
    },
    {
      path: '/jsnav/cc',
      name: 'jsnav-cc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/jsnav/viewCc.vue')
    },
  ]
})

export default router
