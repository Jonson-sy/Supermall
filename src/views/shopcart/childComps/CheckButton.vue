<template>
  <div>
    <div class="check-button"
         :class="{checked:isChecked}">
      <img src="~assets/img/cart/tick.svg"
           alt=""
           class="tick">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.check-button {
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin: -2px 0 0 -2px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 50%;
}

.checked {
  background-color: red;
  border-color: red;
}
</style>