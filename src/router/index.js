import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomeView.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: import('@/views/ItemsView.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: import('@/views/ItemView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: import('@/views/CartView.vue')
    }
  ]
})

export default router
