<template>
  <div id="home">
    <nav-bar class="homesnav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabControlFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <popular></popular>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
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
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

//导入网络相关
import { getHomeMultiData, getHomeGoods } from "network/home";

//导入其他
import { debounce } from "common/utils";

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    Popular,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabControlFixed: false,
      saveY: 0,
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
  mounted() {
    //1，监听图片的加载完成：注意不要在created中监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImgLoad", () => {
      //从事件总线监听到itemImgLoad事件
      refresh(); //更新scroll
    });
  },
  //解决老版本BS离开再进入某页面时不能保持位置的问题
  // destroyed() {
  //   console.log("-----");
  // },
  // activated() {
  //   this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
  //   this.$refs.scroll.refresh();
  // },
  // deactivated() {
  //   this.saveY = this.$refs.scroll.getScrollY();
  // },
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
      //使两个tab-control的currentIndex保持一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.backTop(0, 0, 600);
    },
    contentScroll(position) {
      // console.log(position);
      //1,判断backtop是否显示
      this.isShowBackTop = -position.y > 900;

      //2，决定tabcontrol是否吸顶（position = fixed）
      this.isTabControlFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh();
    },
    swiperImgLoad() {
      //获取tabcontrol的offsetTop
      //所有的组件都有一个属性（$el），用于获取组件中的元素
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

        //完成了上拉加载更多
        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        }, 800);
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
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.homesnav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /*position: fixed;
  top: 0;
  left: 0;
  right: 0; 
  z-index: 9;*/
}

.tab-control {
  position: relative;
  top: -1px; /* 于导航栏之间有缝隙 */
  z-index: 9;
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

/*.content {
  height: calc(100%-93px);
  margin-top: 44px;
} */
.content {
  overflow: hidden; /* 必要 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>