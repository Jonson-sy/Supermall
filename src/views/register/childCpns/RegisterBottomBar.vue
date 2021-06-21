<template>
  <div class="bottom-bar">
    <div class="finish"
         @click="finishClick">完成注册</div>
  </div>
</template>

<script>
export default {
  methods: {
    finishClick () {
      this.$toast.show('抱歉，无法操作', 2000)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  z-index: 9999;
  background-color: rgb(236, 231, 231);
}

.finish {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: var(--color-tint);
  font-size: 18px;
  font-weight: 700;
}
</style>