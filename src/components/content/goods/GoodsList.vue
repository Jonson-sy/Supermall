<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  margin-top: 8px;
  padding: 0 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>