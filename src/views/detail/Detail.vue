<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="wrapper" ref="scroll">
      <detail-swiper
        :top-images="topImages"
        @swiperImgLoad="swiperImgLoad"
      ></detail-swiper>
      <detail-goods-desc :goods="goods"></detail-goods-desc>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :goodsInfo="goodsInfo"
        @goodsImgLoad="goodsImgLoad"
      ></detail-goods-info>
      <detail-goods-params :goods-params="goodsParams"></detail-goods-params>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <div>
        <div class="bottomRcmd">猜你喜欢</div>
        <goods-list :goods-list="recommend"></goods-list>
      </div>
    </scroll>
  </div>
</template>

<script>
//导入相关组件
//导入子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsDesc from "./childComps/DetailGoodsDesc";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
//导入公共组件
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

//导入网络请求相关
import {
  getDetailData,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";

//导入其他
import { debounce } from "common/utils";
import { itemImgLoadMixin } from "common/mixin";

export default {
  name: "Detail", //在keep-alive中使用exclude时是根据此name属性来寻找组件的
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommend: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsDesc,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    Scroll,
    GoodsList,
  },
  //混入的应用
  mixins: [itemImgLoadMixin],
  created() {
    // console.log("重新创建了");
    //一，保存传入的iid
    // this.iid = this.$route.query.iid;
    this.iid = this.$route.params.iid;

    //二，根据iid请求详情页的数据
    getDetailData(this.iid).then((res) => {
      //1，获取顶部轮播图的数据
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //2，获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3,获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //4，获取商品详情信息
      this.goodsInfo = data.detailInfo;

      //5，获取商品参数数据
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6，保存评论数据
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });

    //三，请求推荐的数据并保存
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.list;
    });
  },
  /* activated() {
    console.log("重新创建了");
    //1，保存传入的iid
    // this.iid = this.$route.query.iid;
    this.iid = this.$route.params.iid;

    //2，根据iid请求详情页的数据
    getDetailData(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
    });
  }, */
  mounted() {
    //原代码见混入
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgLoadFunc);
    // console.log("取消了详情页的监听图片加载及scroll刷新");
  },
  methods: {
    swiperImgLoad() {
      //假如轮播如有四张图片，此方法即会被调用四次，即会调用四次refresh，但refresh等于防抖函数，即具有了防抖功能
      //直接使用 const refresh = ...  refresh会被赋值四次(因为是在块级作用域内)，虽然也有防抖，但达不到防抖效果
      // console.log("监听到了轮播图图片加载");
      this.refresh(); //混入里将refresh存入了data里面，所以只要详情页mixin了其data即具有了refresh方法
      // const refresh = debounce(this.$refs.scroll.refresh, 50);
      // refresh();
    },
    goodsImgLoad() {
      this.refresh();
      // const refresh = debounce(this.$refs.scroll.refresh, 50);
      // refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.wrapper {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.bottomRcmd {
  width: 35vw;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  font-size: 20px;
  color: var(--color-tint);
  margin: 10px 30vw;
  border: 2px solid var(--color-tint);
  border-radius: 20px;
}
</style>