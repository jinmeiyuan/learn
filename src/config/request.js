import axios from 'axios'
// import Vue from 'vue'
import {baseUrl} from './env'

const service = axios.create({
  baseURL: baseUrl.url, //
  timeout: 50000 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
service.interceptors.request.use(function (config) {
  return config
  // 在发送请求之前做些什么
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
