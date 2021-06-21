<template>
  <div class="w">
    <register-nav-bar></register-nav-bar>
    <div class="registerarea">
      <div class="reg-form">
        <ul>
          <li>
            <span class="tishi">用户名：</span>
            <input type="text">
            <i><span class="correct-icon"></span> 请输入用户名 </i>
          </li>
          <li>
            <span class="tishi">手机号：</span>
            <input type="text">
            <i><span class="error-icon"></span>手机号码格式不正确，请从新输入 </i>
          </li>
          <li>
            <span class="tishi">短信验证码：</span>
            <input type="text">
            <i class="correct"><span class="correct-icon"></span>短信验证码输入正确 </i>
          </li>
          <li>
            <span class="tishi">登录密码：</span>
            <input type="text">
            <i><span class="error-icon"></span>密码不少于6位数，请从新输入 </i>
          </li>
          <li>
            <span class="tishi">确认密码：</span>
            <input type="text">
            <i><span class="error-icon"></span>密码不一致，请从新输入 </i>
          </li>
          <div class="agree">
            <input type="checkbox"
                   checked="checked">同意协议并注册
            <span>《mall用户协议》</span>
          </div>
        </ul>
      </div>
    </div>
    <register-bottom-bar></register-bottom-bar>
  </div>
</template>

<script>
import RegisterNavBar from './childCpns/RegisterNavBar.vue'
import RegisterBottomBar from './childCpns/RegisterBottomBar.vue'
export default {
  components: {
    RegisterNavBar,
    RegisterBottomBar,
  }
}
</script>

<style scoped>
.w {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(236, 231, 231);
}

/* 注册区域 */
.registerarea {
  margin-top: 15vw;
  border-bottom: none;
}
.reg-form {
  margin: 3vw auto;
  padding: 10vw 5vw 10vw;
  width: 95vw;
  border: 1vw solid #ccc;
  border-radius: 8vw;
  background-color: rgb(231, 222, 222);
}

.reg-form ul li {
  margin-bottom: 3vw;
  list-style: none;
}
.reg-form ul li .tishi {
  display: inline-block;
  width: 23vw;
  height: 4.8vw;
  text-align: right;
  font-size: 3.8vw;
}
.reg-form ul li input {
  width: 60vw;
  height: 7.6vw;
  border: 1px solid #999999;
  border-radius: 3vw;
}
.reg-form ul li i {
  display: inline-block;
  font-size: 12px;
  color: #df3033;
  margin: 2.66667vw 0 0 20.66667vw;
}
.reg-form ul li i .error-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: -3px 5px 0 10px;
  vertical-align: middle;
  background: url(~assets/img/register/error.png);
  background-size: 10px 10px;
}

.reg-form ul li i .correct-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: -3px 5px 0 10px;
  vertical-align: middle;
  background: url(~assets/img/register/correct.png);
  background-size: 10px 10px;
}
.reg-form ul li .correct {
  color: green;
}
.agree {
  margin: 10vw 0 0 0.8vw;
  text-align: center;
  font-size: 3.8vw;
}
.agree input {
  width: 17px;
  height: 16px;
  border: 1px solid #999999;
  margin: -3px 13px 0 0;
  vertical-align: middle;
}
.agree span {
  color: #1ba1e6;
  margin-left: 10px;
}
</style>