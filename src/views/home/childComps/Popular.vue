<template>
  <div class="pop">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/popular.jpg" alt="" @load="homePopImgLoad" />
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    homePopImgLoad() {
      this.$emit("homePopImgLoad");
    },
  },
};
</script>

<style scoped>
.pop img {
  width: 100%;
}
</style>