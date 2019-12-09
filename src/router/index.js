import Vue from 'vue'
import VueRouter from 'vue-router'
import ROUTES from '../constants/constants'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME,
    name: 'home',
    component: Home
  },
  {
    path: ROUTES.SIGNUP,
    name: 'signup',
    component: SignUp
  },
  {
    path: ROUTES.LOGIN,
    name: 'login',
    component: LogIn
  },
  {
    path: ROUTES.PROFILE,
    name: 'profile',
    component: Profile
  },
  {
    path: ROUTES.ABOUT,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
