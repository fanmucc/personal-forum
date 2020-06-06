import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'

import 'view-design/dist/styles/iview.css'
import 'mavon-editor/dist/css/index.css'
import './assets/css/iconfont/symbol-iconfont/iconfont.js'
import './assets/css/iconfont/symbol-iconfont/iconfont.css'
import './assets/css/iconfont/iconfonts/remixicon.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
