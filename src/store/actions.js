import { ADD_TO_CART, ADD_COUNT } from './mutations.types'

export default {  //★★★★★用于异步操作完毕后或条件判断后再commit到mutations来改变state★★★★★
  addCart (contex, payload) {
    // 方法一：for循环
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // 方法二;find方法(用于找出第一个符合条件的数组成员并返回，找不到返回undefined)
    let oldProduct = contex.state.cartList.find(item => item.iid === payload.iid)

    if (oldProduct) {
      // oldProduct.count += 1
      contex.commit(ADD_COUNT, oldProduct)
    } else {
      payload.count = 1
      // contex.state.cartList.push(payload)
      contex.commit(ADD_TO_CART, payload)
    }
  }
}