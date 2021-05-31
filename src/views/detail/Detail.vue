<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-goods-desc :goods="goods"></detail-goods-desc>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <ul>
      <li>haha1</li>
      <li>haha2</li>
      <li>haha3</li>
      <li>haha4</li>
      <li>haha5</li>
      <li>haha6</li>
      <li>haha7</li>
      <li>haha8</li>
      <li>haha9</li>
      <li>haha10</li>
      <li>haha11</li>
      <li>haha12</li>
      <li>haha13</li>
      <li>haha14</li>
      <li>haha15</li>
      <li>haha16</li>
      <li>haha17</li>
      <li>haha18</li>
      <li>haha19</li>
      <li>haha20</li>
      <li>haha21</li>
      <li>haha22</li>
      <li>haha23</li>
      <li>haha24</li>
      <li>haha25</li>
      <li>haha26</li>
      <li>haha27</li>
      <li>haha28</li>
      <li>haha29</li>
      <li>haha30</li>
      <li>haha31</li>
      <li>haha32</li>
      <li>haha33</li>
      <li>haha34</li>
      <li>haha35</li>
      <li>haha36</li>
      <li>haha37</li>
      <li>haha38</li>
      <li>haha39</li>
      <li>haha40</li>
      <li>haha41</li>
      <li>haha42</li>
      <li>haha43</li>
      <li>haha44</li>
      <li>haha45</li>
      <li>haha46</li>
      <li>haha47</li>
      <li>haha48</li>
      <li>haha49</li>
      <li>haha50</li>
      <li>haha51</li>
      <li>haha52</li>
      <li>haha53</li>
      <li>haha54</li>
      <li>haha55</li>
      <li>haha56</li>
      <li>haha57</li>
      <li>haha58</li>
      <li>haha59</li>
      <li>haha60</li>
      <li>haha61</li>
      <li>haha62</li>
      <li>haha63</li>
      <li>haha64</li>
      <li>haha65</li>
      <li>haha66</li>
      <li>haha67</li>
      <li>haha68</li>
      <li>haha69</li>
      <li>haha70</li>
      <li>haha71</li>
      <li>haha72</li>
      <li>haha73</li>
      <li>haha74</li>
      <li>haha75</li>
      <li>haha76</li>
      <li>haha77</li>
      <li>haha78</li>
      <li>haha79</li>
      <li>haha80</li>
      <li>haha81</li>
      <li>haha82</li>
      <li>haha83</li>
      <li>haha84</li>
      <li>haha85</li>
      <li>haha86</li>
      <li>haha87</li>
      <li>haha88</li>
      <li>haha89</li>
      <li>haha90</li>
      <li>haha91</li>
      <li>haha92</li>
      <li>haha93</li>
      <li>haha94</li>
      <li>haha95</li>
      <li>haha96</li>
      <li>haha97</li>
      <li>haha98</li>
      <li>haha99</li>
      <li>haha100</li>
    </ul>
  </div>
</template>

<script>
//导入相关组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsDesc from "./childComps/DetailGoodsDesc";
import DetailShopInfo from "./childComps/DetailShopInfo";

//导入网络请求相关
import { getDetailData, Goods, Shop } from "network/detail";

export default {
  name: "Detail", //在keep-alive中使用exclude时是根据此name属性来寻找组件的
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsDesc,
    DetailShopInfo,
  },

  created() {
    // console.log("重新创建了");
    //1，保存传入的iid
    // this.iid = this.$route.query.iid;
    this.iid = this.$route.params.iid;

    //2，根据iid请求详情页的数据
    getDetailData(this.iid).then((res) => {
      //1，获取顶部轮播图的数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //2，获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
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
};
</script>

<style scoped>
</style>