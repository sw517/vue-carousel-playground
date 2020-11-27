import Vue from 'vue'
import VueRouter from 'vue-router'
import Playground from '../views/Playground.vue'
import Showground from '../views/Showground.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Playground',
    component: Playground
  },
  {
    path: '/showground',
    name: 'Showground',
    component: Showground
  }
]

const router = new VueRouter({
  routes
})

export default router
