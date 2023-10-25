import { createRouter, createWebHistory } from 'vue-router'
import TodosView from "../views/TodosView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todos',
      name: 'todos',
      component: TodosView
    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
