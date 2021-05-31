<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="navBack" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="navTitles">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="titleItem"
          @click="itemClick(index)"
          :class="{ actived: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.navTitles {
  display: flex;
}
.titleItem {
  flex: 1;
}
.actived {
  color: var(--color-high-text);
}
.navBack {
  margin-top: 6px;
}
</style>