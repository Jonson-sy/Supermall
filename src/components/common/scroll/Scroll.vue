<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    click: {
      type: Boolean,
      default: true
    },
  },

  data () {
    return {
      scroll: null,
    };
  },
  computed: {
    scrollY () {
      return this.scroll.y
    }
  },
  mounted () {
    //1，创建Bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: this.click,
      probeType: this.probeType, //外部使用scroll时决定是否监听滚动，若是scroll会通过自定义事件将position发射出去
      pullUpLoad: this.pullUpLoad, //外部使用scroll时决定是否监听上拉，若是scroll会通过自定义事件将pullingUp发射出去
    });
    // console.log(this.scroll); //查看此scroll实例对象的方法和属性

    //2，监听滚动位置(先判断是否需要进行监听)
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    //3，监听上拉加载事件(先判断是否需要进行监听)
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
    // console.log(this.scroll);
  },

  methods: {
    // _initScroll () { },
    backTop (x, y, time = 700) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh () {
      // console.log("每一张图片加载完成");
      // console.log('refresh完成');
      this.scroll && this.scroll.refresh();
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY () {
      return this.scroll ? this.scroll.y : 0;
    },
    scrollTo (x, y, time = 100) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  },
  watch: {
    data () {
      setTimeout(this.refresh, 20)
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>