<template>
  <div id="detail">
    <!-- 事件监听可以使用驼峰命名，但是传值最好使用短横线连接的方式 -->
    <detail-nav-bar class="detail-nav"
                    @navBarClick="navBarClick"
                    ref="detailNav">
    </detail-nav-bar>
    <scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"
                     @swiperImgLoad="swiperImgLoad">
      </detail-swiper>
      <detail-goods-desc :goods="goods"></detail-goods-desc>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goods-info="goodsInfo"
                         @goodsImgLoad="goodsImgLoad">
      </detail-goods-info>
      <detail-goods-params :goods-params="goodsParams"
                           ref="params">
      </detail-goods-params>
      <detail-comment-info :comment-info="commentInfo"
                           ref="comment">
      </detail-comment-info>
      <div>
        <div class="bottomRcmd">猜你喜欢</div>
        <goods-list :goods-list="recommend"
                    ref="recommend">
        </goods-list>
      </div>
    </scroll>
    <back-top @click.native="backTopClick"
              v-show="isShowBackTop"
              class="backTop">
    </back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <!-- <toast></toast> -->
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
import DetailBottomBar from "./childComps/DetailBottomBar";
//导入公共组件
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
// import Toast from "components/common/toast/Toast";

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
import { itemImgLoadMixin, backTopMixin } from "common/mixin";
import { mapActions } from 'vuex'

export default {
  name: "Detail", //在keep-alive中使用exclude时是根据此name属性来寻找组件的
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommend: [],
      themeY: [],
      getThemeY: null,
      currentIndex: 0,
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
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
  },
  //混入的应用
  mixins: [itemImgLoadMixin, backTopMixin],
  created () {
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

      //2，获取并保存商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3,获取并保存店铺信息
      this.shop = new Shop(data.shopInfo);

      //4，获取并保存商品详情信息
      this.goodsInfo = data.detailInfo;

      //5，获取并保存商品参数数据
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6，获取并保存评论数据
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }

      this.$nextTick(() => {
        //哪里能够获取到正确的offsetTop？
        //1，created中不行，因为压根不能获取到元素
        //2，mounted中不行，因为数据还没有获取到
        //3，获取到数据的回调（.then(..)）中不行，因为DOM还没渲染完
        //4，$nextTick也不行，因为图片高度没有计算在内
        //5，在图片加载完成后，获取的高度才是正确的
        // this.themeY.push(0);
        // this.themeY.push(this.$refs.params.$el.offsetTop);
        // this.themeY.push(this.$refs.comment.$el.offsetTop);
        // this.themeY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeY);
      });
    });

    //三，请求推荐的数据并保存
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.list;
    });
    //对getThemeY进行赋值（对this.themeY赋值操作进行防抖）
    this.getThemeY = debounce(() => {
      this.themeY = [];
      this.themeY.push(0);
      this.themeY.push(this.$refs.params.$el.offsetTop - 44);
      this.themeY.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeY.push(this.$refs.recommend.$el.offsetTop - 44 - 57);
      this.themeY.push(Number.MAX_VALUE)  //主动在数组最后添加一个最大值，便于后续判断时使用
      //减去NavBar高度（因为wrapper有个padding-top）,推荐部分再减去一个猜你喜欢的高度
      // console.log(this.themeY);
    }, 100);
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
  mounted () {
    //原代码见混入
  },
  destroyed () {
    this.$bus.$off("itemImgLoad", this.itemImgLoadFunc);
    // console.log("取消了详情页的监听图片加载及scroll刷新");
  },
  methods: {
    ...mapActions(['addCart']),
    swiperImgLoad () {
      //假如轮播如有四张图片，此方法即会被调用四次，即会调用四次refresh，但refresh等于防抖函数，即具有了防抖功能
      //直接使用 const refresh = ...  refresh会被赋值四次(因为是在块级作用域内)，虽然也有防抖，但达不到防抖效果
      // console.log("监听到了轮播图图片加载");
      this.refresh(); //混入里将refresh存入了data里面，所以只要详情页mixin了其data即具有了refresh方法
      // const refresh = debounce(this.$refs.scroll.refresh, 50);
      // refresh();
    },
    goodsImgLoad () {
      this.refresh();
      // const refresh = debounce(this.$refs.scroll.refresh, 50);
      // refresh();
      this.getThemeY();
    },
    navBarClick (index) {
      // console.log(index);
      // navBar与滚动的联动效果：一
      this.$refs.scroll.scroll.scrollTo(0, -this.themeY[index], 500);
    },
    contentScroll (position) {
      //1,判断backtop是否显示
      // 注意此条代码不能抽离到mixin里面，因为mixin会覆盖methods（对象）里面的相同方法（或函数），
      // 而不像生命周期函数（看做是方法或函数）一样去合并方法中相同的代码
      this.isShowBackTop = -position.y > 900;

      //2，navBar与滚动的联动效果：二
      const positionY = -position.y;
      // postionY和主题值[0, 8717, 9512, 9908，1.7976931348623157e+308]进行比较
      // positionY 在 0 ~ 8717 之间      index = 0
      // positionY 在 8717 ~ 9512 之间   index = 1
      // positionY 在 9512 ~ 9908 之间   index = 2
      // positionY 在 9908 ~ 最大值之间   index = 3
      let length = this.themeY.length
      for (let i = 0; i < length - 1; i++) {//先将主题值取出来,再将postionY与主题值进行有条件的比较后，得到正确的index
        if (this.currentIndex !== i && (positionY >= this.themeY[i] && positionY < this.themeY[i + 1])) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }

      // postionY和主题值[0, 8717, 9512, 9908]进行比较
      // positionY 在 0 ~ 8717 之间      index = 0
      // positionY 在 8717 ~ 9512 之间   index = 1
      // positionY 在 9512 ~ 9908 之间   index = 2
      // positionY 超过 9908             index = 3
      // let length = this.themeY.length
      // for (let i = 0; i < length; i++) {
      //   if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeY[i] && positionY < this.themeY[i + 1]) || (i === length - 1 && positionY >= this.themeY[i]))) {
      //     this.currentIndex = i;
      //     // console.log(this.currentIndex);
      //     this.$refs.detailNav.currentIndex = this.currentIndex;
      //   }
      // }
    },
    addToCart () {
      // console.log('--------');
      // 1，将商品信息添加到Store中
      const product = {}
      product.iid = this.iid
      product.imgURL = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice

      //2，将商品添加到state中
      // this.$store.dispatch('addCart', product)
      this.addCart(product).then(res => {
        // console.log(res);
        this.$toast.show(res, 2000)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  /* z-index: 2; */
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
  /* 避免鼠标滚轮滑动页面 */
}
.wrapper {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 99;
  opacity: 1;
  background-color: #ffff;
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

.backTop {
  z-index: 99;
}
</style>