import axios from 'axios'
import baseUrl from '../../config/index'
class Axios {
  constructor (baseURL = baseUrl) {
    this.baseURL = baseURL
    this.queue = {}
  }

  // 定义基础参数
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      headers: {}
    }
    return config
  }

  // axios请求及相应拦截器
  interceptors (instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 相应拦截器
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create() // 创建axios实例
    options = Object.assign(this.getInsideConfig(), options) // 合并请求参数
    // 相应拦截器
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default Axios
