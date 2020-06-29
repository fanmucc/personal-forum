import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './routers'
import store from '../store'
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
  console.log(store)
  let token = window.localStorage.token
  // store.dispatch('INDEX_ADD', 2)
  // 进行简单判断如果有token 暂时默认为是登录的
  if (token.length !== 0) {
    // store.dispatch('TOKEN_UP', true)
    console.log(store.state.user.loginStatus)
    next()
  } else {
    // store.dispatch('TOKEN_UP', true)
    next()
  }
  // if (!token) {
  //   next()
  // } else {
  //   next()
  // }
})

export default router
