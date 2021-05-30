<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import Swiper from "components/common/swiper/Swiper";
// import SwiperItem from "components/common/swiper/SwiperItem";
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      // console.log("图片加载完成");
      //类似于节流阀（先打开，再关闭）
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>