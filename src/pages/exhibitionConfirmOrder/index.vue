<template>
  <div class="exhibition-confirm-order">
    <common-header title="确认订单" :back-visible="true" />
    <div class='exhibition-confirm-order__top'>
      <image class='pic' :src='orderList.imgSrc'></image>
      <div class='font'>
        <div class='font-1'>{{ orderList.title }}</div>
        <div class='font-2'>{{ orderList.status }}</div>
        <div class='font-2'>{{ orderList.validityPeriod }}</div>
      </div>
      <div class='line order-line'></div>
      <div class='list order-font'>{{ orderList.type }}
        <div class='list-span list-span1'><span>{{ orderList.money }}</span> X {{ orderList.number }}</div>
      </div>
    </div>
    <div class="exhibition-confirm-order__information">
      <h3>填写你的信息</h3>
      <div class="write">
        <input type="text" placeholder="姓名" v-model="formData.name" />
        <input type="text" bindinput="inputGetMobile" placeholder="手机号" v-model="formData.phoneNumber" />
        <input type="text" placeholder="验证码" v-model="formData.verifyCode" />
        <a class="send" :style="sendCode ? 'color: #ED3024;opacity: 1' : ''">发送验证码</a>
      </div>
    </div>
    <div class="exhibition-confirm-order__footer">
      <div class="choose-check">
        <checkbox checked color="#232323" class="box" />同意<span>《UCCA用户协议》</span>
      </div>
      <div class="footer-btn">
        <div class="price">
          <span class="title">合计</span>
          <span class="total">{{ orderList.money }}</span>
        </div>
        <a class="button" @click="nextStep">确认支付</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'ExhibitionConfirmOrder',
    components: { CommonHeader },
    data () {
      return {
        orderList: {
          imgSrc: '/static/images/pic.png',
          title: '王音：礼物',
          status: 'UCCA报告厅',
          validityPeriod: '05.10（周五）18:00-21:00 学术交流',
          type: '活动普通票',
          money: '￥138',
          number: '1张'
        },
        formData: {
          name: '',
          phoneNumber: null,
          verifyCode: null
        },
        sendCode: false // 当手机号有值时发送短信按钮颜色为红色
      }
    },
    watch: {
      'formData.phoneNumber' (val) {
        if (val.length) {
          this.sendCode = true
        }
      }
    },
    methods: {
      // 弹微信支付窗口（暂跳购票成功页面）
      nextStep () {
        wx.navigateTo({
          url: '/pages/purchaseSuccess/main'
        })
      }
    },
    inputGetMobile (e) {
      console.log(e, 'eeeee')
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-confirm-order {
    &__top {
      position: relative;
      padding: 40rpx;
      width: 670rp;
      background: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      .pic {
        margin: 0 auto 30rpx;
        width: 230rpx;
        height: 180rpx;
        float: left;
      }
      .font {
        float: left;
        margin-left: 30rpx;
        .font-1 {
          margin-top: 5rpx;
          font-size: 34rpx;
        }
        .font-2 {
          font-size: 24rpx;
          margin-top: 10rpx;
        }
        .font-3 {
          font-size: 42rpx;
          margin-top: 25rpx;
        }
      }
      .order-line{
        margin-bottom: 30rpx;
        width: 670rpx;
        clear: both;
      }
      .line {
        height: 1rpx;
        background: rgba(0, 0, 0, 0.1);
        clear: both;
      }
      .list {
        font-size: 30rpx;
        color: #232323;
        font-weight: bold;
        line-height: 30rpx;
        .list-span {
          font-size: 30rpx;
          line-height: 30rpx;
          float: right;
        }
        .list-span1 span {
          font-size: 30rpx;
          line-height: 30rpx;
        }
      }
      .order-font {
        width: 670rpx;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
    &__line {
      width: 100%;
      height: 1rpx;
      background: rgba(0, 0, 0, 0.1);
      clear: both;
    }
    &__information {
      padding: 40rpx;
      h3 {
        margin: 40rpx 0 20rpx;
        font-size: 34rpx;
        color: #232323;
      }
      .write {
        position: relative;
        padding: 40rpx;
        background: #fff;
        input {
          height: 40rpx;
          line-height: 40rpx;
          font-size: 28rpx;
          color: #232323;
          &::placeholder {
            font-size: 28rpx;
            color: #eee;
          }
          &:nth-child(2) {
            margin: 60rpx 0;
          }
        }
        .send {
          position: absolute;
          right: 40rpx;
          bottom: 40rpx;
          z-index: 10;
          font-size: 28rpx;
          font-weight: bold;
          line-height: 40rpx;
          color: #232323;
          opacity: 0.6;
        }
      }
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      .choose-check {
        padding-left: 40rpx;
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 24rpx;
        color: #000012;
        background: #fff;
        border-top: 1rpx solid rgba(0, 0, 0, .1);
        .box {
          transform: scale(.6);
        }
        span {
          color: #ED3024;
        }
      }
      .footer-btn {
        display: flex;
        width: 100%;
        height: 100rpx;
        background-color: #fff;
        border-top: 1rpx solid rgba(0, 0, 0, .1);
        .price {
          flex: 1;
          padding-left: 40rpx;
          line-height: 100rpx;
          .title {
            margin-right: 10rpx;
            font-size: 24rpx;
            color: rgba(0,0,0,.6);
          }
          .total {
            font-size: 42rpx;
            color: #ed3024;
          }
        }
        .button {
          margin: 20rpx 30rpx 20rpx 0;
          display: block;
          width: 240rpx;
          height: 64rpx;
          background-color: #000;
          line-height: 64rpx;
          font-size: 28rpx;
          color:#fff;
          text-align: center;
          border-radius: 64rpx;
        }
      }
    }
  }
</style>
