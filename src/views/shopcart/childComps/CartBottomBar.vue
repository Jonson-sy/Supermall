<template>
  <div class="bottom-bar">
    <div class="select-all">
      <check-button :is-checked="isSelectAll"
                    class="check-button"
                    @click.native="selectAllClick">
      </check-button>
      <span>全选</span>
    </div>
    <span class="total">合计:¥{{totalPrice}}</span>
    <span class="toCount"
          @click="toCountClick">去结算({{checkedLength}})
    </span>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

import { mapGetters } from 'vuex'  //注意是从vuex中导入

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),  //将getters中的方法映射到计算属性中

    totalPrice () {
      return this.cartList.filter(item => item.checked == true).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    checkedLength () {
      return this.cartList.filter(item => item.checked == true).length
    },
    isSelectAll () {
      if (this.cartList.length === 0) {
        return false
      }
      //方法一：filter迭代
      // return !(this.cartList.filter(item => item.checked == false).length)
      //方法二：find(注意：item.checked == false == !item.checked)
      return !(this.cartList.find(item => !item.checked))
      //方法三：普通的遍历
      // for (let item of this.cartList) {
      //   if (!item.checked) {
      //     return false
      //   }
      // }
      // return true
    },
  },
  methods: {
    selectAllClick () {
      // console.log('----------');
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    toCountClick () {
      if (this.cartLength === 0) {
        this.$toast.show('请选择购买的商品', 2000)
      } else {
        this.$toast.show('你有钱吗？就买！', 2000)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 49px;
  line-height: 40px;
  text-align: center;
  background-color: #eee;
  z-index: 99;
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