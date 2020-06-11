import axios from './index.js'
export const getUserInfo = ({ userName, passWord }) => {
  return axios.request({
    url: 'api/login',
    method: 'post',
    data: {
      userName,
      passWord
    }
  })
}
