<template>
  <div class="toast"
       v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data () {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show (message = '默认文字', duration = 2000) {
      // console.log('---------');
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  height: 40px;
  line-height: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
}
</style>