import { createRouter, createWebHistory } from 'vue-router'
import TaskManager from '../views/TaskManagerView.vue'

const routes = [
  {
    path: '/',
    name: 'taskmanager',
    component: TaskManager
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
