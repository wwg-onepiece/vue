<template>
  <div class="container">
    <header class="header">
    </header>
    <div class="content">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in bannerlist" :key="index">
            <img :src="item" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <prolist :prolist="prolist"/>
      </mt-loadmore>
      <BackTop :scrollmyself='true'/>
    </div>
  </div>
</template>
<script>
// import Banner from '@/views/Banner'
import axios from 'axios'
import Prolist from '@/components/common/Prolist'
import BackTop from '@/BackTop'

export default { // 暴露模块
  data () {
    return {
      bannerlist: [],
      prolist: [],
      allLoaded: false,
      pageCode: 1
    }
  },
  components: {
    // Banner,
    Prolist,
    BackTop
  },
  methods: {
    loadTop () {
      axios.get('http://www.daxunxun.com/douban').then(res => {
        console.log(res.data)
        this.$refs.loadmore.onTopLoaded() // 代表下拉刷新结束更新列表的高度
        this.allLoaded = false // 下拉刷新表示的是 可以重新上拉加载
        this.pageCode = 1 // 页码重置
        this.prolist = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    loadBottom () {
      axios.get(`http://www.daxunxun.com/douban?count=20&start=${this.pageCode * 20}`).then(res => {
        // console.log(res.data)
        if (res.data.length === 0) {
          this.allLoaded = true // 没有数据了
        } else {
          // 把this.prolist 和 res.data 数组合并
          this.prolist = [...this.prolist, ...res.data]
          this.pageCode++ // 页码加1
        }
        this.$refs.loadmore.onBottomLoaded()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    axios.get('http://www.daxunxun.com/banner').then(res => {
      // console.log(res.data)
      let arr = []
      res.data.map(item => {
        arr.push('http://www.daxunxun.com' + item)
      })
      // console.log(arr)
      this.bannerlist = arr
    }).catch(err => {
      console.log(err)
    })
    axios.get('http://www.daxunxun.com/douban?count=10').then(res => { // 请求成功
      // console.log(res.data)
      this.prolist = res.data
    }).catch(err => { // 请求失败
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
.header {
  text-align: center;
  font:700 .18rem/.44rem "";
  letter-spacing: .1rem;
}
.banner {
  height: 1.9rem;
  border: 1px solid #f66;
  img {
    width: 100%;
  }
}
</style>
