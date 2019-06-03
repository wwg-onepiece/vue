<template>
  <div class="container">
    <!-- <header class="header">我的</header> -->
    <mt-header class="header">
      <mt-button slot="right" @click="share" tag="div">分享</mt-button>
    </mt-header>
    <div class="content">
      <router-view></router-view>
      <div>余下</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  methods: {
    share () {
      Toast('QQ 微信 微博')
    }
  },
  watch: {
    $route (newVal, oldVal) {
      console.log(newVal)
      if (newVal.name === 'user') {
        // if (localStorage.getItem('isLogin') === 'ok') {
        if (this.$store.state.loginState === 'ok') {
          this.$router.push('/user/login')
        } else {
          this.$router.push('/user/nologin')
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    next(vm => {
      if (to.name === 'user') {
        // if (localStorage.getItem('isLogin') === 'ok') {
        //   next('/user/login')
        // } else {
        //   next('/user/nologin')
        // }
        if (vm.$store.state.loginState === 'ok') {
          next('/user/login')
        } else {
          next('/user/nologin')
        }
      } else {
        next()
      }
    })
  }
  // beforeRouteUpdate (to, from, next) {
  //   if (this.$store.state.loginState === 'ok') {
  //     this.$router.push('/user/login')
  //   } else {
  //     this.$router.push('/user/nologin')
  //   }
  // }
}
</script>
