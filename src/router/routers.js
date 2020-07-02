
import Home from '../views/Home.vue'
import Layout from '../Layout/index.vue'
export const routers = [
  {
    path: '/',
    name: '_timeline', // 首页
    redirect: '/timeline', // 路由重定向
    meta: {
      title: '首页'
    }, // 路由元信息
    component: Layout,
    children: [
      {
        path: '/timeline',
        name: 'timeline',
        meta: {
          title: '首页'
        }, // 路由元信息
        component: Home
      }
    ]
  },
  {
    path: '/editor/drafts/new', // 文章编辑
    name: 'editor_drafts_new',
    meta: {
      title: '编辑'
    },
    component: () => import(/* webpackChunkName: "editor_drafts_new" */ '../views/EditorDraftsNew')
  },
  {
    path: '/',
    name: 'article',
    meta: {
      title: '文章详情'
    }, // 路由元信息
    props: { default: true, sidebar: false },
    component: Layout,
    children: [
      {
        path: 'post/:articleId',
        name: 'articleList',
        component: () => import(/* webpackChunkName: "article" */ '../views/Drafts')
      }
    ]
  }
  // {
  //   path: '/timeline/following',
  //   name: 'userAttention', // 用户关注
  //   meta: {
  //     title: '用户关注'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/notilication',
  //   name: 'notilication', // 用户消息
  //   meta: {
  //     title: '用户消息'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/notilication/system',
  //   name: 'system', // 系统消息
  //   meta: {
  //     title: '系统消息'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/:id',
  //   name: 'user', // 个人页面
  //   meta: {
  //     title: '个人页面'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/:id/collections',
  //   name: 'userCollections', // 个人收藏页
  //   meta: {
  //     title: '收藏页'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/:id/label',
  //   name: 'userLabel', // 个人关注标签页
  //   meta: {
  //     title: '关注标签页'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/label/all',
  //   name: 'labelAll', // 全部标签页
  //   meta: {
  //     title: '标签页'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/settings',
  //   name: 'userSetting', // 个人资料页
  //   meta: {
  //     title: '资料页'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/settings/profile',
  //   name: 'userProfile', // 个人资料修改页
  //   meta: {
  //     title: '资料修改页'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // },
  // {
  //   path: '/user/settings/password',
  //   name: 'userPassword', // 个人密码修改
  //   meta: {
  //     title: '密码修改'
  //   }, // 路由元信息
  //   component: () => import(/* */ '')
  // }
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
