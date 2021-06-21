import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";

//混入(提取处多个{对象}公共的一些成员)
export const itemImgLoadMixin = {
  data () {
    return {
      itemImgLoadFunc: null,
      refresh: null
    }
  },
  mounted () {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgLoadFunc = () => {
      this.refresh(); //此处为闭包（有权访问另一个函数作用域中局部变量的"函数"），每次引用的为同一个refresh
    };
    this.$bus.$on("itemImgLoad", this.itemImgLoadFunc);
    // console.log('我是混入的内容');
  }
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data () {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick () {
      this.$refs.scroll.backTop(0, 0, 600);
    },
  }
}
