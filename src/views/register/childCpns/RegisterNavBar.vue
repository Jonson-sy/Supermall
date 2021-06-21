<template>
  <div class="register-nav">
    <nav-bar>
      <div slot="left"
           class="navBack"
           @click="backClick">
        <img src="~assets/img/common/back.svg"
             alt="" />
      </div>
      <div slot="center"
           class="navTitles">
        个人注册
      </div>
      <div slot="right">登录</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  data () {
    return {
    };
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      //发出navBar点击事件
      this.$emit("navBarClick", index);
    },
    backClick () {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.register-nav {
  background-color: var(--color-tint);
  color: #ffff;
}
.navTitles {
  text-align: center;
  font-size: 18px;
}
.actived {
  color: var(--color-high-text);
}
.navBack {
  margin-top: 6px;
  color: #ffff;
}
</style>