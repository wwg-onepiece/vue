<template>
  <div id="app">
    <!-- <User /> -->
    <!-- <Home /> -->
    <!-- <Cart /> -->
    <!-- <Kind /> -->
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app, .box {
  @include rect(100%, 100%); //width: 100%;height: 100%;
}

#app, .box {
  @include flexbox(); // display: -webkit-box; display: -ms-flexbox; display: flex;
  @include flex-direction(column);
  // -webkit-box-orient: vertical;
  // -webkit-box-direction: normal;
  // -ms-flex-direction: column;
  // flex-direction: column;
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
    @include rect(100%, 0.44rem);
    @include background-color(#f66);
    // ul {
    //   @include rect(100%, 100%);
    //   @include flexbox();
    //   li {
    //     @include flex();
    //     @include rect(auto, 100%);
    //     @include flexbox();
    //     @include flex-direction(column);
    //     @include justify-content();
    //     @include align-items();
    //     @include font-size(0.18rem);
    //   }
    // }
    }
    .content {
    @include flex();
    @include rect(100%, auto);
    @include overflow(); //默认auto；滚动
    // -webkit-box-flex: 1;
    // -ms-flex: 1;
    // flex: 1;
    // width: .1px;
    // .banner {
    //   @include rect(100%, 1.6rem)
    // }
    // .box {
    //   @include rect(100%, auto);
    //   @include flexbox();
    //   @include flex-wrap(wrap);
    //   @include justify-content(space-between);
    //   @include align-items();
    //   @include padding(.1rem);
    //   li {
    //   @include flexbox();
    //   @include flex-direction(column);
    //   @include justify-content(space-around);
    //   @include align-items();
    //   @include rect(1.7rem, auto);
    //     img {
    //       @include rect(100%, 100%);
    //     }
    //     p {
    //       @include font-size(0.2rem);
    //     }
    //   }
    // }
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(rgb(240, 240, 240));
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
      @include flex();
      // 弹性盒水平垂直居中
      @include rect(auto, 100%);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      span {
      @include font-size(0.24rem);
      }
      p {
      @include font-size(0.12rem);
      }
      &.router-link-active {
        @include text-color(#f66);
      }
      }
    }
  }
}
</style>
