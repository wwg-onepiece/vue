<template>
  <ul>
    <li @click="test">首页</li>
    <li>分类</li>
    <li>购物车</li>
    <li>我的</li>
  </ul>
</template>
<script>
export default {
  methods: {
    test () {
      console.log('1')
    }
  }
}
</script>
