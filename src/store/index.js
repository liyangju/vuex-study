import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    num: 666
  },
  getters: {
    getState: state => {
      return state.count + 100
    }
  },
  mutations: {
    add: (state, n) => state.count = state.count + n,
    red: (state, n) => state.count = state.count - n,
    number: (state, n) => state.num += n
  },
  actions: {
    addFn({
      commit
    }, n) {
      commit("add", n)
    },
    redFn({
      commit
    }, n) {
      commit("red", n)
    },
    numberFn({
      commit
    }, n) {
      return new Promise((reslove) => {
        setTimeout(() => {
          commit("number", n)
          reslove()
        }, 2000)
      })
    }
  },
  modules: {}
})