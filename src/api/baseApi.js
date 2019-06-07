import fly from '../config/fly'

let location = 'BJ'
let language = 'CN'

const BaseApi = {
  getHomePage: () => {
    return fly.post('/api/homepage', {
      location: location,
      language: language
    })
  },
  getList: (type, filterLike, year, location, language) => {
    return fly.post('/api/exhibition/list', {
      type, // exhibition = 展览, event = 活动
      filter_like: filterLike, // 是否查询收藏的内容，0=是， 1=否。如果选是，year参数将被忽略
      year, // 如果不带年份，返回首页所需内容，如果带年份，返回当年的数据
      location,
      language
    })
  },
  getItemInfo: (exhibitionId, language) => {
    return fly.post('/api/exhibition/info', {
      exhibition_id: exhibitionId,
      language
    })
  },
  // 提交展览团体预约订单
  submitGroupOrder: (exhibitionID, name, phone, amount, guide, date, memo) => {
    return fly.post('/api/exhibition/group', {
      exhibitionID,
      name,
      phone,
      amount,
      guide,
      date,
      memo
    })
  },
  // // 获取展览门票列表
  // getTicketList: (exhibitionId, language) => {
  //   return fly.get('/api/exhibition/ticket/list', {
  //     params: {
  //       exhibition_id: exhibitionId,
  //       language
  //     }
  //   })
  // }
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
  // 收藏展览和活动
  submitLike: (exhibitionID) => {
    return fly.post('/api/exhibition/like', {
      exhibitionID
    })
  },
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
  getHallInfo: () => {
    return fly.post('/api/hall/info', {
      location,
      language
    })
  },
  // 获取展览活动列表
  getHallArtwork: (hallID) => {
    return fly.post('/api/hall/artwork', {
      language,
      hallID
    })
  },
  // 获取作品详情

  // 获取会员权益信息
  // 获取可以购买的会员列表
  // 验证会员身份
  // 提交会员订单
  // 获取用户信息
  // 获取展览活动票务清单
  getTicketList: (type, language) => {
    return fly.post('/api/tickets/list', {
      type,
      language
    })
  },
  // 获取会员权益信息
  getMemberInfo: (userId, nonce, timestamp, language) => {
    return fly.post('/api/member/info', {
      user_id: userId,
      nonce,
      timestamp,
      language
    })
  },
  // 获取可以购买的会员列表
  getProductList: (userId, nonce, timestamp, language) => {
    return fly.post('/api/member/product/list', {
      user_id: userId,
      nonce,
      timestamp,
      language
    })
  },
  // 验证会员身份
  getMemberVerify: (userId, nonce, timestamp, name, birthday, phone, smsCode) => {
    return fly.post('/api/member/verify', {
      user_id: userId,
      nonce,
      timestamp,
      name,
      birthday,
      phone,
      sms_code: smsCode
    })
  },
  // 提交会员订单
  getMemberBuy: (userId, nonce, timestamp, productId, name, phone, birthday, secondName, secondPhone, secondBirthday) => {
    return fly.post('/api/member/buy', {
      user_id: userId,
      nonce,
      timestamp,
      product_id: productId,
      name,
      phone,
      birthday,
      second_name: secondName,
      second_phone: secondPhone,
      second_birthday: secondBirthday
    })
  },
  // 获取用户信息
  getUserInfo: (userId, nonce, timestamp, language) => {
    return fly.post('/api/user/info', {
      user_id: userId,
      nonce,
      timestamp,
      language
    })
  },
  // 获取展览活动票务清单
  getTicketsList: (userId, nonce, timestamp, type, language) => {
    return fly.post('/api/tickets/list', {
      user_id: userId,
      nonce,
      timestamp,
      type,
      language
    })
  },
  // test
  orderTicket: () => {
    return fly.post('/api/order/ticket', {
      count: 1,
      price: 1,
      ticketid: '5cf65f2ca26d2072cbf55a37',
      usermobile: '18310930019',
      username: '123'
    })
  },
  // 发送验证短信
  sendSms: (phone) => {
    return fly.post('/api/sendsms', {
      phone
    })
  }
}

export default BaseApi
