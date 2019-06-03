<template>
  <div class="container">
    <mt-header class="header">
      <mt-button icon="back" slot="left" @click="goBack" tag="div"></mt-button>
    </mt-header>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
