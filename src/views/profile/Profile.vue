<template>
  <div id="profile"
       @click="profileClick">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info />
    <account-info />
    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>
//导入公共组件
import NavBar from 'components/common/navbar/NavBar'
//导入子组件
import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalListView from './childComps/NormalListView'

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data () {
    return {
      orderList: [
        { icon: 'message.svg', info: '我的消息' },  //每个icon路径都相同，这里仅保存图片的名称和后缀名即可。
        { icon: 'pointer.svg', info: '积分商城' },
        { icon: 'vip.svg', info: '会员卡' },
      ],
      serviceList: [
        { icon: 'cart.svg', info: '我的购物车' },
        { icon: 'shopping.svg', info: '下载购物APP' },
      ]
    }
  },
  methods: {
    profileClick () {
      this.$toast.show('别点了，没做呢', 2000)
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
