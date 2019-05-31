<template>
  <div class="register">
    <mt-header>
      <div slot="left">
        <mt-button @click="goBack" icon="back">返回</mt-button>
      </div>
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
      <van-cell-group>
        <van-field
          v-model="sms"
          required
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button @click="sendCode" slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
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
    <van-button type="primary" @click="register" size="large">注册</van-button>
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
      password: '',
      sms: '',
      code: '1'
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
    },
    sendCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        Toast('手机号码输入有误')
      } else {
        this.getCode()
      }
    },
    getCode () {
      axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.username}`)
        .then(res => {
          console.log(res.data)
          if (res.data === 1) {
            Toast('该手机号已经被注册')
          } else if (res.data === 0) {
            Toast('手机号验证码获取失败')
          } else {
            console.log(res.data)
            this.code = res.data.code
          }
        })
    },
    register () {
      if (this.sms !== this.code) {
        this.sms = ''
        Toast('验证码输入错误')
        return
      }
      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号')
        return
      }
      if (this.passwordicon !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      this.registerFn()
    },
    registerFn () {
      axios.post('http://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data === 0) {
          Toast('注册失败')
        } else if (res.data === 2) {
          Toast('用户名已注册')
        } else {
          Toast('注册成功')
          // 注册即登录成功，跳转首页
          localStorage.setItem('isLogin', 'ok')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
