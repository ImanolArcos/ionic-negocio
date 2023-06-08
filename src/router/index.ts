import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/App.vue';

const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/',
    name: 'Login',
    component: About
  },
 
  {
    path: '/',
    name: 'Menu',
    component: Home
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
