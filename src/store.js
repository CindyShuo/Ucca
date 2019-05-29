import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
  state: {
    isScroll: true,
    language: 'EN'
  },
  mutations: {
    disableScroll (state) {
      state.isScroll = false
    },
    ableScroll (state) {
      state.isScroll = true
    },
    changeLanguage (state, payload) {
      state.language = payload
    }
  }
})

export default store
