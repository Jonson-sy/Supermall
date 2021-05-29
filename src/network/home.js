import { request } from './request'

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {  //注意写了params代表此方式为get请求，会将参数拼接到URL后面
      type,
      page,
    }
  })
}