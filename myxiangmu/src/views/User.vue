<template>
  <div class="container">
    <header class="header">我的</header>
    <div class="content">
      <router-view></router-view>
      <div>其余</div>
    </div>
  </div>
</template>
<script>
console.log(1)
export default {
  // mounted () {
  //   if (localStorage.getItem('islogin') === 'ok') {
  //     this.$router.push('/user/login')
  //   } else {
  //     this.$router.push('/user/nologin')
  //   }
  // }
}
</script>
