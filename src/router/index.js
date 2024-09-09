import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
/*
   component: () => import('../views/view.vue')
   for lazy-loading

   import View from '../views/view.vue'
   for normal loading
*/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'visitor',
      component: () => import('../views/VisitorCheck.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
