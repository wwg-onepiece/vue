<template>
  <ul class="prolist">
    <li @click="goDetail(item.id)" v-for="item in prolist" :key="item.id">
      <div class="img">
        <img :src="item.images.small" :alt="item.alt">
      </div>
      <div class="info">
        <h4>{{ item.title }}</h4>
        <Rating :rating="(item.rating.average / 2 ).toFixed(1)" />
        <span class="ave">{{ item.rating.average }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import Rating from './Rating'
export default {
  props: ['prolist'],
  methods: {
    goDetail (id) {
      // this.$router.push(`/detail/${id}`) // string
      // this.$router.push({ name: 'detail', params: {id} }) // object
      this.$router.push({ path: `/detail/${id}` }) // object
    }
  },
  components: {
    Rating
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';  //@---表示src的目录
.prolist {
  li {
    float: left;
    @include rect(48%, 2.67rem);
    @include background-color(rgba(217, 234, 235, 0.6));
    @include margin(5px 1% 0);
    .img {
      @include rect(100%, 1.76rem);
      img {
        @include rect(100%, 100%);
      }
    }
    .info {
      h4 {
        @include font-size(.14rem);
        @include margin(6px);
      }
      .ave {
        @include font-size(0.12rem);
        @include font-weight(700);
      }
    }
  }
}
</style>
