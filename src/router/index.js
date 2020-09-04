import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import rd from '@/views/rd/rd.vue'
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect:'/rd',
  children:[{
    path:'/rd',
    name:"rd",
    component:rd
  }]
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router