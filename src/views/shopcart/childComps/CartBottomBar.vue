<template>
  <div class="bottom-bar">
    <div class="select-all">
      <check-button class="check-button"></check-button>
      <span>全选 </span>
    </div>
    <span class="total">合计:¥{{totalPrice}}</span>
    <span class="toCount">去结算({{checkedLength}})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),

    totalPrice () {
      return this.cartList.filter(item => item.checked).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    checkedLength () {
      return this.cartList.filter(item => item.checked).length
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;
  display: flex;
  position: relative;
  line-height: 40px;
  text-align: center;
  background-color: #eee;
}

.select-all {
  display: flex;
  align-items: center;
  width: 60px;
  margin-left: 10px;
  line-height: 19px;
  box-sizing: content-box;
}
.check-button {
  margin-right: 8px;
}

.total {
  flex: 1;
}
.toCount {
  width: 90px;
  background-color: red;
}
</style>