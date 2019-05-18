import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
  state: {
    isScroll: true
  },
  mutations: {
    disableScroll (state) {
      state.isScroll = false
    },
    ableScroll (state) {
      state.isScroll = true
    }
  }
})

export default store
