<template>
  <!-- 先判断goods里面是否存在数据再渲染 -->
  <div class="goodsDesc" v-if="Object.keys(goods).length !== 0">
    <p class="desc-title">{{ goods.title }}</p>
    <div class="aboutPrice">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <!-- 外层先判断数据是否存在，存在再使用 -->
    <div class="aboutCollect" v-if="goods.columns && goods.services">
      <span class="left">{{ goods.columns[0] }}</span>
      <span class="center">{{ goods.columns[1] }}</span>
      <span class="right">{{
        goods.services[goods.services.length - 1].name
      }}</span>
    </div>
    <!-- 外层先判断数据是否存在，存在再使用 -->
    <div v-if="goods.services" class="aboutServices">
      <span>
        <img :src="goods.services[0].icon" />
        <span>{{ goods.services[0].name }}</span>
      </span>
      <span class="service-item-right">
        <img :src="goods.services[1].icon" />
        <span>{{ goods.services[1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goodsDesc {
  margin-top: 15px;
  padding: 0 8px;
  border-bottom: 6px solid #eee;
}
.desc-title {
  font-size: 20px;
  font-weight: 700;
}
.aboutPrice {
  margin-top: 10px;
}
.newPrice {
  font-size: 25px;
  color: var(--color-high-text);
}
.oldPrice {
  font-size: 14px;
  margin-left: 10px;
  color: #aaa;
  text-decoration: line-through;
}
.discount {
  color: white;
  background-color: var(--color-high-text);
  border-radius: 7px;
  font-size: 14px;
  padding: 3px 5px;
  margin-left: 10px;
  /*使得元素往上走 */
  position: relative;
  top: -8px;
}
.aboutCollect {
  display: flex;
  font-size: 16px;
  color: #aaa;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #eee;
}
.left,
.center,
.right {
  flex: 1;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.aboutServices {
  padding: 20px 0;
  position: relative;
}
.aboutServices img {
  width: 15px;
  vertical-align: text-bottom;
}
.service-item-right {
  position: absolute;
  right: 0;
}
</style>