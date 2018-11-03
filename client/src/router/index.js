import Vue from 'vue'
import Router from 'vue-router'

let routes = []
Vue.use(Router)

const Homepage = () => import('../component/homepage/index.vue')
routes.push({ path: '/', component: Homepage })

const Signup = () => import('../component/signup/index.vue')
routes.push({ path: '/signup', component: Signup })

export default new Router({
  mode: 'history',
  routes
})
