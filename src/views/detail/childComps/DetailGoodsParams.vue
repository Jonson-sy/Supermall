<template>
  <div class="goods-params">
    <table
      v-for="(table, index) in goodsParams.size"
      :key="index"
      class="table-rule"
      :class="index === goodsParams.size.length - 1 ? 'lastChild' : ''"
    >
      <!-- 动态的给遍历的最后一个元素绑定class -->
      <tr v-for="(tr, index1) in table" :key="index1">
        <td v-for="(td, index2) in tr" :key="index2">{{ td }}</td>
      </tr>
    </table>
    <table class="table-info">
      <tr v-for="(item, index) in goodsParams.info" :key="index">
        <td>{{ item.key }}</td>
        <td>
          <span>{{ item.value }}</span>
        </td>
      </tr>
    </table>
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
  padding: 0px 15px 20px;
  width: 100%;
  border-bottom: 5px solid #ddd;
}

table tr {
  width: 100%;
  border-bottom: 2px solid #eee;
  line-height: 55px;
}

.table-rule {
  width: 100%;
  height: 55px;
  display: flex;
}

.table-rule tr td {
  flex: 1;
}

.lastChild {
  border-bottom: 4px solid #ddd;
}

.table-rule tr:first-child {
  padding-right: 25%;
}
.table-info {
  width: 100%;
}
.table-info tr {
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #eee;
  display: flex;
}

.table-info tr td {
  float: left;
}

.table-info tr td:first-child {
  width: 35%;
}
.table-info tr td:last-child {
  color: var(--color-tint);
  width: 100%;
  overflow: hidden;
}
</style> 