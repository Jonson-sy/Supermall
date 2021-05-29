<template>
  <div class="wrapper">
    <ul class="content">
      <!--1.无论是否设置click:false, button都可以点击-->
      <button @click="btnClick">按钮</button>

      <!--2.必须设置click:true, 那么div才能监听点击-->
      <div @click="divClick">呵呵呵呵</div>

      <li>列表内容1</li>
      <li>列表内容2</li>
      <li>列表内容3</li>
      <li>列表内容4</li>
      <li>列表内容5</li>
      <li>列表内容6</li>
      <li>列表内容7</li>
      <li>列表内容8</li>
      <li>列表内容9</li>
      <li>列表内容10</li>
      <li>列表内容11</li>
      <li>列表内容12</li>
      <li>列表内容13</li>
      <li>列表内容14</li>
      <li>列表内容15</li>
      <li>列表内容16</li>
      <li>列表内容17</li>
      <li>列表内容18</li>
      <li>列表内容19</li>
      <li>列表内容20</li>
      <li>列表内容21</li>
      <li>列表内容22</li>
      <li>列表内容23</li>
      <li>列表内容24</li>
      <li>列表内容25</li>
      <li>列表内容26</li>
      <li>列表内容27</li>
      <li>列表内容28</li>
      <li>列表内容29</li>
      <li>列表内容30</li>
      <li>列表内容31</li>
      <li>列表内容32</li>
      <li>列表内容33</li>
      <li>列表内容34</li>
      <li>列表内容35</li>
      <li>列表内容36</li>
      <li>列表内容37</li>
      <li>列表内容38</li>
      <li>列表内容39</li>
      <li>列表内容40</li>
      <li>列表内容41</li>
      <li>列表内容42</li>
      <li>列表内容43</li>
      <li>列表内容44</li>
      <li>列表内容45</li>
      <li>列表内容46</li>
      <li>列表内容47</li>
      <li>列表内容48</li>
      <li>列表内容49</li>
      <li>列表内容50</li>
      <li>列表内容51</li>
      <li>列表内容52</li>
      <li>列表内容53</li>
      <li>列表内容54</li>
      <li>列表内容55</li>
      <li>列表内容56</li>
      <li>列表内容57</li>
      <li>列表内容58</li>
      <li>列表内容59</li>
      <li>列表内容60</li>
      <li>列表内容61</li>
      <li>列表内容62</li>
      <li>列表内容63</li>
      <li>列表内容64</li>
      <li>列表内容65</li>
      <li>列表内容66</li>
      <li>列表内容67</li>
      <li>列表内容68</li>
      <li>列表内容69</li>
      <li>列表内容70</li>
      <li>列表内容71</li>
      <li>列表内容72</li>
      <li>列表内容73</li>
      <li>列表内容74</li>
      <li>列表内容75</li>
      <li>列表内容76</li>
      <li>列表内容77</li>
      <li>列表内容78</li>
      <li>列表内容79</li>
      <li>列表内容80</li>
      <li>列表内容81</li>
      <li>列表内容82</li>
      <li>列表内容83</li>
      <li>列表内容84</li>
      <li>列表内容85</li>
      <li>列表内容86</li>
      <li>列表内容87</li>
      <li>列表内容88</li>
      <li>列表内容89</li>
      <li>列表内容90</li>
      <li>列表内容91</li>
      <li>列表内容92</li>
      <li>列表内容93</li>
      <li>列表内容94</li>
      <li>列表内容95</li>
      <li>列表内容96</li>
      <li>列表内容97</li>
      <li>列表内容98</li>
      <li>列表内容99</li>
      <li>列表内容100</li>
    </ul>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(document.querySelector(".wrapper"), {
      click: false,
    });
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    divClick() {
      console.log("divClick");
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: red;
}
</style>