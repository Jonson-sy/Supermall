<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="" @load="swiperImgLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad() {
      // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
      if (++this.counter === this.imagesLength) {
        this.$emit("swiperImgLoad");
      }
    },
  },
  watch: {
    topImages() {
      // 获取图片的个数
      this.imagesLength = this.topImages.length;
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>