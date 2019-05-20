import Fly from 'flyio/dist/npm/wx'

let fly = new Fly()

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-Tag'] = 'flyio'
  request.baseURL = 'http://47.94.198.193:19516/'
  // 打印出请求体
  console.log(request.body)
  return request
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

export default fly
