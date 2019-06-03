import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: ''
  },
  mutations: {
    // 第一个参数代表所有的初始化的值，第二个参数代表要改变的值
    changeLoginState (state, data) {
      state.loginState = data
    }
  },
  actions: {
  }
})
