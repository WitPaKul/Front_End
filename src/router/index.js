import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Team from '../views/Team.vue'
import PageError from '../views/PageError.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/:PageError(.*)',
    name: 'PageError',
    component: PageError
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
