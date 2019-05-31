<template>
  <div class="container">
    <van-nav-bar class="header" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">分类内容</div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
