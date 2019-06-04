import * as CONFIG from '@/config/settings'
import tools from '@/utils/tools.js'

const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

fly.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json;charset=utf-8'
  return request
})

// 生成签名后的请求
const sign = (api, data = {}) => {
  return new Promise(function (resolve, reject) {
    getMiniproToken().then(
      (res) => {
        const CryptoJS = require('crypto-js')
        const dataStr = (data === '') ? '' : JSON.stringify(data)
        const args = { 'userid': encodeURIComponent(res.userid), 'timestamp': Math.floor(new Date().getTime() / 1000), 'nonce': getNonce() }
        const argStr = sortArg(args)
        const urlStr = '/' + api + '?' + argStr
        const signStr = CONFIG.API_PREFIX + urlStr + dataStr
        const hash = CryptoJS.HmacSHA1(signStr, res.token)
        const sign64 = encodeURIComponent(CryptoJS.enc.Base64.stringify(hash))
        const signUrl = CONFIG.API_URL + urlStr + '&sign=' + sign64
        resolve(signUrl)
      },
      (reason) => {
        reject(reason)
      }
    )
  })
}

// 发送请求
const postApi = (api, requestData) => {
  return new Promise(function (resolve, reject) {
    sign(api, requestData).then(
      (signUrl) => {
        console.log('post', signUrl, requestData)
        fly.request(signUrl, requestData, {
          method: 'post'
        }).then((res) => {
          console.log('res', res)
          if (res.status === 200) {
            var data = (res.data)
            if (data.code === 0) {
              resolve(data.data)
            } else {
              reject(data)
            }
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      },
      (reason) => {
        reject(reason)
      }
    )
  })
}

// 取180秒不重复随机数
const getNonce = () => {
  return (Math.random() / +new Date()).toString(36).replace(/\d/g, '').slice(1)
}

// 对参数进行排序，json格式
const sortArg = args => {
  var keys = Object.keys(args)
  keys = keys.sort()
  var newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key]
  })

  var string = ''
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k]
  }
  string = string.substr(1)
  return string
}

const getMiniproToken = () => {
  return new Promise(function (resolve, reject) {
    var token = tools.loadFromLocal('token')
    if (token && token.expire * 1000 > new Date().getTime()) {
      resolve(token)
    } else {
      wx.login({
        success: function (res) {
          const url = CONFIG.API_URL + '/minipro_token?appid=' + encodeURIComponent(CONFIG.MP_ID) + '&code=' + encodeURIComponent(res.code) + '&timestamp=' + Math.floor(new Date().getTime() / 1000)
          console.log('request', url)
          fly.request(url, {}, {
            method: 'post'
          }).then((data) => {
            console.log('mptoken', data)
            if (data.status === 200 && data.data.code === 0) {
              tools.saveToLocal('token', data.data.data)
              resolve(data.data.data)
            } else {
              tools.clearFromLocal('token')
              reject(data)
            }
          })
        }
      })
    }
  })
}

const net = {

}

export default net
