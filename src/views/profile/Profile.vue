<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info />
    <div @click="profileClick">
      <account-info />
      <normal-list-view :list-data="orderList" />
      <normal-list-view :list-data="serviceList" />
    </div>
    <div class="bottomRcmd">
      <div class="recommend">推荐商品</div>
      <goods-list :goods-list="recommend"
                  ref="recommend">
      </goods-list>
    </div>
  </div>
</template>

<script>
//导入公共组件
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
//导入子组件
import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalListView from './childComps/NormalListView'

import { getRecommend } from 'network/profile'

export default {
  name: "Profile",
  components: {
    NavBar,
    GoodsList,
    UserInfo,
    AccountInfo,
    NormalListView,
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
      ],
      recommend: []
    }
  },
  created () {
    //请求推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.list;
    });
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
  padding-top: 44px;
  background-color: #f2f2f2;
  overflow: hidden;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 4.8vw;
  z-index: 99;
}

.bottomRcmd {
  background-color: #fff;
  margin-top: 10px;
  padding-top: 1px;
  /* 此处存在外边距合并塌陷问题 */
}
.recommend {
  width: 35vw;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  font-size: 20px;
  color: var(--color-tint);
  margin: 5px 30vw;
  border: 2px solid var(--color-tint);
  border-radius: 20px;
}
</style>
