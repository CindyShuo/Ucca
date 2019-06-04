import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import * as CONFIG from './settings'

let fly = new Fly()

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  request.baseURL = CONFIG.BASE_URL
  return formatBody(request.url, request.body)
    .then(res => {
      request.body = res
      return request
    })
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  res => {
    // 只将请求结果的data字段返回
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

// 取180秒不重复随机数
const getNonce = () => {
  return (Math.random() / +new Date()).toString(36).replace(/\d/g, '').slice(1)
}

// 小程序登录
const getToken = () => {
  return new Promise(function (resolve, reject) {
    let info = wx.getStorageSync('info')
    if (info && JSON.parse(info).expire * 1000 > new Date().getTime()) {
      resolve(JSON.parse(info))
      return
    }
    wx.login({
      success: res => {
        wx.request({
          url: CONFIG.BASE_URL + '/minipro_token',
          data: {
            appid: encodeURIComponent(CONFIG.APP_ID),
            code: encodeURIComponent(res.code),
            timestamp: Math.floor(new Date().getTime() / 1000)
          },
          success: res => {
            if (res.statusCode === 200 && res.data.code === 0) {
              saveInfo(res.data.data)
              resolve(res.data.data)
            } else {
              removeInfo()
              reject(res.data)
            }
            resolve(res.data.data)
          },
          fail: error => {
            removeInfo()
            reject(error)
          }
        })
      },
      fail: error => {
        reject(error)
      }
    })
  })
}

// 格式化参数
const formatBody = (api, request) => {
  return new Promise(function (resolve, reject) {
    getToken().then(res => {
      let requestConfig = {
        nonce: getNonce(),
        timestamp: Math.floor(new Date().getTime() / 1000),
        userid: encodeURIComponent(res.userid)
      }
      let configUrl = sortArg(requestConfig)
      let requestUrl = request ? JSON.stringify(request) : ''
      let CryptoJS = require('crypto-js')
      let url = api + '?' + configUrl + requestUrl
      let hash = CryptoJS.HmacSHA1(url, res.token)
      let sign64 = encodeURIComponent(CryptoJS.enc.Base64.stringify(hash))
      let requestBody = configUrl + '&' + qs.stringify(request) + '&sign=' + sign64
      resolve(requestBody)
    })
  })
}

// 对参数进行排序，json格式
const sortArg = args => {
  let keys = Object.keys(args)
  keys = keys.sort()
  let newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key]
  })

  let string = ''
  for (let k in newArgs) {
    string += '&' + k + '=' + newArgs[k]
  }
  string = string.substr(1)
  return string
}

// 保存token信息
const saveInfo = (res) => {
  wx.setStorage({
    key: 'info',
    data: JSON.stringify(res)
  })
}

// 清除token信息
const removeInfo = () => {
  wx.removeStorage({
    key: 'token'
  })
}

export default fly
