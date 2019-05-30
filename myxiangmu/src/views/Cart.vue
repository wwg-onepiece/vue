<template>
  <div class="container">
    <van-nav-bar class="header" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
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
// import Vue from 'vue'
// import { Toast } from 'vant'
// Vue.use(Toast)

export default {
  methods: {
    onClickLeft () {
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
