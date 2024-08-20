import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import AuthorizationPage from '../views/AuthorizationPage.vue'
import ProductPage from '../views/ProductPage.vue'
import DecorationPage from '../views/DecorationPage.vue'

const routes = [
  {
    path: '/',
    name: 'authorization',
    component: AuthorizationPage
  },
  {
    path: '/home',
    name: 'home',
    component: MainPage
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/shopping',
    name: 'BasketPage',
    component: BasketPage
  },
  {
    path: '/decoration',
    name: 'DecorationPage',
    component: DecorationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
