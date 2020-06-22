import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './routers'
Vue.use(VueRouter)

const routes = routers

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  // 获取token 如果没有则跳转出登录header
  let token = window.localStorage.token
  if (!token) {
    console.log('12345')
    next()
  } else {
    next()
  }
})

export default router
