import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import mutations from './modules/mutations'

// 启用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})