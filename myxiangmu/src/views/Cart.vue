<template>
  <div class="container">
    <mt-header class="header">
      <mt-button icon="back" slot="left" @click="goBack" tag="div"></mt-button>
    </mt-header>
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-mini-btn
        info="5"
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-mini-btn
        icon="shop-o"
        text="店铺"
      />
      <van-goods-action-big-btn text="加入购物车" />
      <van-goods-action-big-btn
        primary
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast, Dialog } from 'vant'
Vue.use(Toast)
// import { Sku } from 'vant'
// Vue.use(Sku)
Vue.use(Dialog)
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to)
    // if (localStorage.getItem('isLogin') === 'ok') {
    //   next()
    // } else {
    //   next('/rlogin')
    // }
    next(vm => {
      console.log(vm)
      if (vm.$store.state.loginState === 'ok') {
        next()
      } else {
        // next('/user')
        Dialog.alert({
          message: '请先登录'
        }).then(() => {
          vm.$router.push('/user')
        })
      }
    })
  },
  methods: {
    onAddCartClicked () {
    },
    goBack () {
      this.$router.go(-1)
    }
    // onClickMiniBtn () {
    //   Toast()
    // },
    // onClickBigBtn () {
    //   Toast()
    // }
  }
}
</script>

<style lang="scss">
</style>
