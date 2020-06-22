import { getUserInfo } from '../../api/users.js'
const state = {
  //
  loginStatus: false
}
const mutations = {
  // 修改state值
  USER_LOGINSTATUS (state, params) {
    state.loginStatus = params
  }
}
const actions = {
  // 登录信息，修改用户登录状态及保存登录token
  SIGN_UP ({ commit }, params) {
    const { userName, passWord } = params
    getUserInfo({ userName, passWord }).then(res => {
      commit('USER_LOGINSTATUS', res.data.success)
      window.localStorage.token = res.data.token
    }).catch(err => {
      console.log(err)
      commit('USER_LOGINSTATUS', false)
      window.localStorage.token = ''
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
