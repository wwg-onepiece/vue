<template>
  <div class="rating">
    <span class="iconfont icon-xingxing" :class="rating > 0.5 ? 'active' : ''"></span>
    <span class="iconfont icon-xingxing" :class="rating > 1.5 ? 'active' : ''"></span>
    <span class="iconfont icon-xingxing" :class="rating > 2.5 ? 'active' : ''"></span>
    <span class="iconfont icon-xingxing" :class="rating > 3.5 ? 'active' : ''"></span>
    <span class="iconfont icon-xingxing" :class="rating > 4.5 ? 'active' : ''"></span>
  </div>
</template>

<script>
export default {
  props: ['rating'],
  mounted () {
    // console.log(this.rating)
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.rating {
  display:(inline-block);
  @include margin(0 5px 0);
  span {
    &.active {
      color: rgba(255, 255, 0, 0.925);
    }
  }
}
</style>
