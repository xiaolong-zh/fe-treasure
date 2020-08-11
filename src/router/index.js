import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
// import test from '../views/layout/test.vue';
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children:[{
    path:'/test',
    name:test,
    // component:test,
  }]
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router