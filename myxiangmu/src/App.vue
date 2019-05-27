<template>
  <div id="app">
    <header class="header">
      <my-header></my-header>
    </header>
    <div class="content">
      <div class="banner">
        <my-banner></my-banner>
    </div>
      <my-content></my-content>
    </div>
    <footer class="footer">
      <my-footer></my-footer>
    </footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
export default {
  components: {
    'my-footer': Footer,
    'my-header': Header,
    'my-banner': Banner,
    'my-content': Content
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%); //width: 100%;height: 100%;
}

#app {
  @include flexbox(); // display: -webkit-box; display: -ms-flexbox; display: flex;
  @include flex-direction(column);
  // -webkit-box-orient: vertical;
  // -webkit-box-direction: normal;
  // -ms-flex-direction: column;
  // flex-direction: column;
  .header {
    @include rect(100%, 0.44rem);
    @include background-color(#f66);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        @include font-size(0.18rem);
      }
    }
  }
  .content {
    @include overflow;
    @include flex();
    @include rect(100%, auto);
    // -webkit-box-flex: 1;
    // -ms-flex: 1;
    // flex: 1;
    // width: .1px;
    .banner {
      img{
      @include rect(100%, 1.6rem)
      }
    }
    .box {
      @include rect(100%, auto);
      @include flexbox();
      @include flex-wrap(wrap);
      @include justify-content(space-between);
      @include align-items();
      @include padding(.1rem);
      li {
      @include flexbox();
      @include flex-direction(column);
      @include justify-content(space-around);
      @include align-items();
      @include rect(1.7rem, auto);
        img {
          @include rect(100%, 100%);
        }
        p {
          @include font-size(0.2rem);
        }
      }
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#ccc);
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
      @include font-size(0.21rem);
      @include font-weight(700);
      }
    }
  }
}
</style>
