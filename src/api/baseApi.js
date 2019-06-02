import fly from '../config/fly'

const BaseApi = {
  getHomePage: () => {
    return fly.get('/api/homepage')
  },
  getList: (type, year, filterLike, location, language) => {
    return fly.get('/api/exhibition/list', {
      type, // exhibition = 展览, event = 活动
      year, // 如果不带年份，返回首页所需内容，如果带年份，返回当年的数据
      filter_like: filterLike, // 是否查询收藏的内容，0=是， 1=否。如果选是，year参数将被忽略
      location,
      language
    })
  },
  getItemInfo: (exhibitionId, language) => {
    return fly.get('/api/exhibition/info', {
      exhibition_id: exhibitionId,
      language
    })
  }
  // // 提交展览团体预约订单
  // submitGroupOrder: () => {
  //   return fly.post('/api/exhibition/group', {

  //   })
  // },
  // // 获取展览门票列表
  // getTicketList: (exhibition_id, language) => {
  //   return fly.get('/api/exhibition/ticket/list', {
  //     params: {
  //       exhibition_id,
  //       language
  //     }
  //   })
  // },
  // // 提交展览订单
  // submitOrder: () => {
  //   return fly.post('/api/exhibition/ticket/buy', {

  //   })
  // },
  // // 请求展览预约日程清单
  // getReservation: (order_number, language) => {
  //   return fly.get('/api/order/reservation/list', {
  //     params: {
  //       order_number,
  //       language
  //     }
  //   })
  // },
  // // 预约展览
  // orderReserve: (order_number, slotid, language) => {
  //   return fly.post('/api/order/reserve', {
  //     order_number,
  //     slotid,
  //     language
  //   })
  // },
  // // 收藏展览和活动
  // submitLike: (exhibition_id) => {
  //   return fly.post('/api/exhibition/like', {
  //     exhibition_id
  //   })
  // },
  // // 获取展览和活动的订单详情
  // getOrderInfo: (order_number, language) => {
  //   return fly.get('/api/order/status', {
  //     params: {
  //       order_number,
  //       language
  //     }
  //   })
  // }

  // 获取展厅信息
  // 获取展览活动列表
  // 获取作品详情

  // 获取会员权益信息
  // 获取可以购买的会员列表
  // 验证会员身份
  // 提交会员订单
  // 获取用户信息
  // 获取展览活动票务清单

}

export default BaseApi
