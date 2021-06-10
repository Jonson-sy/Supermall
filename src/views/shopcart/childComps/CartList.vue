<template>
  <div class="cart-list">
    <scroll class="wrapper"
            ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :product="item">
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
//导入公共组件
import Scroll from 'components/common/scroll/Scroll'

//导入子组件
import CartListItem from './CartListItem.vue'

//导入其他
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem,
  },
  activated () {
    // console.log('----------');
    this.$refs.scroll.scroll.refresh()
  }

}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
.wrapper {
  height: 100%;
}
</style>