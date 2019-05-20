import Vue from 'vue'
import App from './App'
import './assets/css/style.css'
import BaseApi from './api/baseApi'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.$http = BaseApi
