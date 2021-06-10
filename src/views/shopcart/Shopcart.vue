<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 购物车列表 -->
    <cart-list></cart-list>

    <!-- 购物车汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//导入子组件
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'

//导入公共组件
import NavBar from 'components/common/navbar/NavBar'

//导入其他
import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    //★★★★★关于mapGetters的两种语法（数组语法/对象语法）★★★★★ 注意是从vuex导入★★★★★
    // ...mapGetters(['cartLength', 'cartList'])  
    ...mapGetters({
      length: 'cartLength',
      // list: 'cartList'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
</style>