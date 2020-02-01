import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Baseline from '../components/Baseline.vue'
import GoogleContacts from '../components/GoogleContacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Google Contacts',
    component: GoogleContacts
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/baseline',
    name: 'Base Layout',
    component: Baseline
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
