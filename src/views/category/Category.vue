<template>
  <div class="category">
    <nav-bar class="categoryNav">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.categoryNav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
</style>