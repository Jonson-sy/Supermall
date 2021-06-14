import { ADD_TO_CART, ADD_COUNT } from './mutations.types'

export default {  //★★★★★mutations是改变state的唯一方式★★★★★
  [ADD_COUNT] (state, payload) {
    payload.count++
  },
  [ADD_TO_CART] (state, payload) {
    payload.checked = true //给商品添加一个checked属性
    state.cartList.push(payload)
  },
  countPlus(state, payload){
    state.cartList[payload].count++
  },
  countSubstract(state, payload){
    if(state.cartList[payload].count > 1){
      state.cartList[payload].count--
    }
  }
}