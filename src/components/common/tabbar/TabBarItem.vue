<template>
  <div class="tab-bar-item" @click="itemClick"> 
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:style='activeStyle'><slot name="item-text"></slot></div>
    <!-- <div :style='isActive ? {color: this.activeColor} : {}'><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{   //接收数据
    path: String,
    activeColor: {
      type:String,
      default:'red',
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path)  //用js代码实现路由跳转
    }
  },
  computed:{
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1  //返回布尔值（当前活跃路由的路径是否等于当前TabBarItem路径）
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {} //当前TabBarItem是否活跃（是加上样式，不是加上空样式）
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>