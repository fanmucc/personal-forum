
import Home from '../views/Home.vue'
import Layout from '../Layout/index.vue'
export const routers = [
  {
    path: '/',
    name: '_timeline',
    redirect: '/timeline', // 路由重定向
    component: Layout,
    children: [
      {
        path: '/timeline',
        name: 'timeline',
        component: Home
      }
    ]
  }
  // {
  //   path: '/writing',
  //   name: 'writing',
  //   component: () => import(/* webpackChunkName: "writing" */ '../views/Writing.vue')
  // },
  // {
  //   path: '/article',
  //   name: 'article',
  //   component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
