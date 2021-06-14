<template>
  <div class="cart-list-item">
    <div class="check-button">
      <check-button @click.native="checkClick"
                    :is-checked="product.checked">
      </check-button>
    </div>
    <div class="item-img">
      <img :src="product.imgURL"
           alt="商品图片">
    </div>
    <div class="item-info">
      <h2 class="title">{{product.title}}</h2>
      <p class="desc">{{product.desc}}</p>
      <div class="bottom">
        <span class="price">¥{{product.price}}</span>
        <div class="changeCount">
          <span class="plus"
                @click="plusClick">+</span>
          <span class="count">x{{product.count}}</span>
          <span class="subtract"
                @click="subtractClick">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    index: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick () {
      this.product.checked = !this.product.checked
    },
    plusClick () {
      this.$store.commit('countPlus', this.index)
    },
    subtractClick () {
      this.$store.commit('countSubstract', this.index)
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  width: 100vw;
  display: flex;
  padding: 5px;
  border: 1px solid #ccc;
}

.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px 15px 5px 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
}

.item-info {
  flex: 1;
  overflow: hidden;
}

.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  font-size: 20px;
  margin-top: 3px;
}
.desc {
  margin-top: 10px;
}

.bottom {
  position: relative;
  height: 20px;
  /* bottom: -23px; */
  top: 25px;
  font-size: 18px;
}

.price {
  float: left;
  color: orangered;
}

.changeCount {
  width: 30%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin-right: 12px;
}

.plus,
.subtract {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #eee;
}

.plus {
  float: left;
}

.count {
  margin-left: 12px;
}
.subtract {
  float: right;
}
</style>