import { request } from './request'

//请求推荐数据（与详情页底部推荐一样）
export function getRecommend () {
  return request({
    url: '/recommend'
  })
}