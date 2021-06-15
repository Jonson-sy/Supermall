<template>
  <div class="goods-list-item"
       @click="goodsItemClick">
    <img v-lazy="showImage"
         alt=""
         @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">¥：{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {};
      },
    },
  },
  computed: {
    showImage () {
      //防止同一个组件在不同地方使用时接口的数据位置不一致的问题
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },
  methods: {
    imgLoad () {
      this.$bus.$emit("itemImgLoad");
      //当一张图片加载完成即将itemImgLoad事件发射到事件总线上（非父子组件之间的通信/兄弟组件之间的通信）
      //使用路由的方法先判断路径再发送对应的事件（注意indexOf的使用）
      // if(this.$route.path.indexOf('/home') === 0){
      //    this.$bus.$emit("homeItemImgLoad");
      // }else if(this.$route.path.indexOf('/detail') === 0){
      //   this.$bus.$emit("detailItemImgLoad");
      // }
    },
    goodsItemClick () {
      this.$router.push("/detail/" + this.goodsItem.iid);
      // this.$router.push({
      //   path: "/detail",
      //   query: {
      //     iid: this.goodsItem.iid,
      //   },
      // });
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 30px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>