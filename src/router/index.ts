import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import NewView from '../views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    }
  ]
})

export default router
