import { createRouter, createWebHistory } from 'vue-router'
import TodosView from "../views/TodosView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue" 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/todos',
      name: 'todos',
      component: TodosView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView

    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
