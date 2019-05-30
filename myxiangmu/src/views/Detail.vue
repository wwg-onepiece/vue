<template>
  <div class="box">
    <div class="container">
      <header class="header">
        {{ title }}
        {{ otitle }}
      </header>
      <div class="content">
        <img class="movie" :src="img">
        <van-tag class="label" type="primary" v-for="(item,index) in genres" :key="index">{{ item }}</van-tag>
        <p>-------------------------------主演-------------------------------</p>
        <ul>
          <li v-for="(item,index) in stars" :key="index">
            <img :src="item.avatars.small" :alt="item.alt">
            <a :href="item.alt"><span>{{ item.name }}</span></a>
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer">详情底部</footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      genres: '',
      img: '',
      stars: [],
      otitle: ''
    }
  },
  mounted () {
    // console.log(this.$route)
    const { id } = this.$route.params
    axios.get(`http://www.daxunxun.com/detail?id=${id}`).then(res => {
      console.log(res.data)
      this.title = res.data[0].title
      this.genres = res.data[0].genres
      this.img = res.data[0].images.small
      this.stars = res.data[0].casts
      this.otitle = res.data[0].original_title
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.box {
  @include rect(100%, 100%);
  .container {
    @include rect(100%, 100%);
    .header {
      @include font-size(0.14rem);
      @include text-align();
      @include line-height(.44rem);
      @include font-weight(700);
    }
    .content {
      @include rect(100%, 100%);
      .label {
        @include margin(.1rem);
      }
      .movie {
        @include margin(0 auto 10px);
        @include rect(100%, 50%);
        display:block;
      }
      ul {
        @include rect(100%, 1.2rem);
        @include flexbox();
        @include flex-wrap(no-wrap);
        @include margin(8px 0);
        li {
          @include flex();
          @include rect(auto, 100%);
          @include flexbox();
          @include flex-direction(column);
          @include justify-content();
          @include align-items();
          img {
            @include rect(auto, 1rem);
            @include margin(5px 0);
          }
        }
      }
    }
  }
}
</style>
