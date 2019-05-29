import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
  state: {
    isScroll: true,
    language: 'EN',
    purchaseType: null
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
    },
    changePurchaseType (state, payload) {
      state.purchaseType = payload
    }
  }
})

export default store
