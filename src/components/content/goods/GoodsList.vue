<template>
  <div class="goods-list">
    <goods-list-item v-for="(item , index) in goodsList"
                     :key="index"
                     :goodsItem="item">
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
    goodsList: {
      type: Array,
      default () {
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