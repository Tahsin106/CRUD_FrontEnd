import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    user:null
  },
  mutations: {
    addToken: (state) => {
      state.token = localStorage.getItem('token')
      state.user = localStorage.getItem('user')
    }
  },
  actions: {
  },
  modules: {
  }
})
