<template>
  <ul>
    <li @clickk="test">充值</li>
    <li @clickk="test">登录</li>
    <li @clickk="test">注册</li>
  </ul>
</template>

<script>
export default {
  methods: {
    test () {
      console.log('2')
    }
  }
}
</script>
