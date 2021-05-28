<template>
  <div id="home">
    <nav-bar class="homesnav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <popular></popular>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
//导入组件相关
//1-导入子组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import Popular from "./childComps/Popular";

//2-导入公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

//导入网络相关
import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    Popular,

    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    //在生命周期函数内进行的网络请求
    // 1，请求首页上部分的多个数据
    this.getHomeMultiData();
    // 2，请求首页商品的数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*
     **事件监听的相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /*
     **网络请求的相关方法
     */
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list; //将请求到的数据保存到data里面
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //goods里的page初始化为0
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list); //将请求到的30条数据追加到goods里对应类型的list里面
        this.goods[type].page++; //更新data里面goods里的page
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.homesnav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>