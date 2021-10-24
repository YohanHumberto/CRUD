import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/JuegoDeMemoria',
    name: 'JuegoDeMemoria',
    component: () => import(/* webpackChunkName: "JuegoDeMemoria" */ '../views/JuegoDeMemoria.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
