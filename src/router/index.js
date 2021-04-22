import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Case from '../views/Case.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   }
   ,
  {
    path: '/case',
    name: 'Case',
    component: Case
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
