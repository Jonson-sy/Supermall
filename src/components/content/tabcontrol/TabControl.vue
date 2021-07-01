<template>
  <div id="tab-control">
    <div v-for="(item, index) in titles"
         :key="index"
         class="tab-control-item"
         :class="{ active: index === currentIndex }"
         @click="tabClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  data () {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
#tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
  border-top: 1px solid #eeee;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 7px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>