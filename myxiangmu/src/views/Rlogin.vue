<template>
  <div class="Rlogin">
    <mt-header class="header">
      <mt-button icon="back" slot="left" @click="goBack" tag="div"></mt-button>
    </mt-header>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入手机号"
        :error-message="usernameState"
      >
        <van-icon slot="button" color="green" size="24px" :name="usernameicon" />
      </van-field>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="passwordState"
        clearable
      >
        <van-icon slot="button" color="green" size="24px" :name="passwordicon" />
      </van-field>
    </van-cell-group>
    <van-button type="primary" @click="rlogin" size="large">登录</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    usernameState () { // 显示用户名手机号的格式的错误信息
      if (this.username === '') {
        return '' // 没有输入信息
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return '' // 输入信息正确，需要显示图标
      }
    },
    usernameicon () { // 如果满足条件，显示√，不满足什么都不显示
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordState () { // 显示密码的格式的错误
      if (this.password === '') {
        return ''
      } else if (!(/^(\w){6,20}$/.test(this.password))) {
        return '密码格式错误：只能输入6-20个字母、数字、下划线'
      } else {
        return ''
      }
    },
    passwordicon () {
      if (!(/^(\w){6,20}$/.test(this.password))) {
        return ''
      } else {
        return 'checked'
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      console.log(1)
    },
    rlogin () {
      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号')
        return
      }
      if (this.passwordicon !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      this.rloginFn()
    },
    rloginFn () {
      axios.post('http://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('登录失败')
        } else if (res.data === 2) {
          Toast('没有该用户')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录成功')
          // 注册即登录成功，跳转首页
          // localStorage.setItem('isLogin', 'ok')
          // 拿到状态管理器 this.$store，提交mutation，mutation是在store.js中定义的
          this.$store.commit('changeLoginState', 'ok')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.header {
  @include font-size(0.16rem);
  @include line-height(.34rem);
  @include font-weight(700);
  @include background-color(#f66);
}
</style>
