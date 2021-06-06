<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.image" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeRecImgLoad" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    homeRecImgLoad() {
      this.$emit("homeRecImgLoad");
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 13px 0 20px;
  text-align: center;
  font-size: 16px;
  border-bottom: 8px solid #eee;
}

.recommendItem {
  flex: 1;
}

.recommendItem img {
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.57rem;
}
</style>