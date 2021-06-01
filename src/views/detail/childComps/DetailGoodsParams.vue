<template>
  <div class="goods-params">
    <table v-for="(table, index) in goodsParams.size" :key="index">
      <tr v-for="(tr, index1) in table" :key="index1">
        <td v-for="(td, index2) in tr" :key="index2">{{ td }}</td>
      </tr>
    </table>
    <table></table>
  </div>
</template>

<script>
export default {
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-params {
  font-size: 16px;
  padding: 20px 15px;
  border-bottom: 5px solid #ccc;
}

.goods-params table {
  width: 100%;
  height: 40px;
  display: flex;
}

.goods-params table tr {
  width: 100%;
  border-bottom: 2px solid #ccc;
}
.goods-params table tr td {
  flex: 1;
  /* justify-content: space-between;
  flex-wrap: wrap; */
  line-height: 40px;
}

.goods-params table tr td:first-child {
  width: 40%;
}
</style>