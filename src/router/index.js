import Vue from 'vue'
import VueRouter from 'vue-router'
import Playground from '../views/PlaygroundView.vue'

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
    // route level code-splitting
    // this generates a separate chunk (showground.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "showgroundview" */ '../views/ShowgroundView.vue'
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
