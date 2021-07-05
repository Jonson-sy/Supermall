import axios from 'axios'

export function request (config) {
  //一：创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })

  //二：axios的拦截器的使用
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log('请求拦截失败');
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log('响应拦截失败');
  })

  //三：发送真正的网络请求
  return instance(config)
}