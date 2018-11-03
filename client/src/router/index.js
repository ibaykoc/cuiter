import Vue from 'vue'
import Router from 'vue-router'

let routes = []
Vue.use(Router)

const Homepage = () => import('../component/homepage/index.vue')
routes.push({ path: '/', component: Homepage })

export default new Router({
  mode: 'history',
  routes
})
