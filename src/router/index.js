import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
 {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "Counter" */ '../views/counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue')
  },
  {
    path: '/search-pokemon',
    name: 'search-pokemon',
    component: () => import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon-id" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "TodoVuex" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "Custom Slots" */ '../views/CustomSlots.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
