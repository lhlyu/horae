/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-01-02
 * Description: 文件描述
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

import store from '@/store/index.js'

// axios默认配置
axios.defaults.timeout = 10000 // 超时时间

// http request 拦截器
axios.interceptors.request.use(config => {
  NProgress.start()
  store.commit('SET_LOADING', true)
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  if (Cookies.get('access_token')) {
    config.headers.Authorization = 'Bearer' + Cookies.get('access_token')
  }
  return config
}, error => {
  Message.error(error.response.data.message)
  return Promise.resolve({
    code: -1,
    message: 'error',
    data: null
  })
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done()
    store.commit('SET_LOADING', false)
    if (!response.data) {
      return Promise.resolve({
        code: 1,
        message: 'failure',
        data: null
      })
    }
    return Promise.resolve(response.data)
  }, error => {
    Message.error(error.response.data.message)
    return Promise.resolve({
      code: -1,
      message: 'error',
      data: null
    }) // 返回接口返回的错误信息
  })
export default axios
