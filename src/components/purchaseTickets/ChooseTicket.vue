<template>
  <div class="choose-ticket">
    <div class="choose-ticket__content">
      <image
        src='/static/images/close.png'
        @click="close"
        class='choose-ticket__close'
      ></image>
      <common-order-item :orderList="orderList" flag="buy" />
      <choose-ticket-type />
    </div>
    <div class="choose-ticket__count">
      <p>购买数量</p>
      <div class="num">
        <a class="subtract" @click="subtract">-</a>
        <span>{{ count }}</span>
        <a class="add" @click="add">+</a>
      </div>
    </div>
    <div class="choose-ticket__footer">
      <div class="price">
        <span class="title">合计</span>
        <span class="total">￥{{ price * count }}</span>
      </div>
      <a class="button">下一步</a>
    </div>
  </div>
</template>

<script>
  import CommonOrderItem from '../common/CommonOrderItem'
  import ChooseTicketType from './ChooseTicketType'

  export default {
    name: 'ChooseTicket',
    components: {ChooseTicketType, CommonOrderItem},
    data () {
      return {
        price: 138,
        count: 1,
        orderList: [
          {
            imgSrc: '/static/images/pic.png',
            title: '王音：礼物',
            status: '已选：早鸟全日期通票',
            validityPeriod: '2019.5.12-2019.6-21',
            type: '早鸟票全日期通票',
            money: '￥138',
            number: '1张'
          }
        ]
      }
    },
    methods: {
      subtract () {
        if (this.count === 1) return
        this.count -= 1
      },
      add () {
        this.count += 1
      },
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="less" scoped>
  .choose-ticket {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    &__content {
      position: absolute;
      left: 0;
      bottom: 200rpx;
      width: 100%;
      padding-bottom: 12rpx;
      background-color: #fff;
      border-radius: 0 20rpx 0 0;
      overflow: hidden;
    }
    &__close {
      position: absolute;
      top: 30rpx;
      right: 30rpx;
      z-index: 10;
      width: 24rpx;
      height: 24rpx;
    }
    &__count {
      position: absolute;
      left: 0;
      bottom: 100rpx;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100rpx;
      padding-left: 40rpx;
      padding-right: 35rpx;
      border-top: 1rpx solid rgba(0, 0, 0, .1);
      background-color: #fff;
      p {
        flex: 1;
        font-size: 24rpx;
        color: #232323;
        font-weight: bold;
      }
      .num {
        display: flex;
        align-items: center;
        width: 178rpx;
        a {
          width: 50rpx;
          height: 50rpx;
          line-height: 50rpx;
          text-align: center;
          font-size: 35rpx;
          font-weight: bold;
          &.subtract {
            background: rgba(0, 0, 0, 0.05);
            color:rgba(0,0,0,.1);
          }
          &.add {
            background: rgba(0, 0, 0, 0.1);
            color:rgba(0,0,0,.2);
          }
        }
        span {
          flex: 1;
          padding: 0 10rpx;
          line-height: 50rpx;
          font-size: 24rpx;
          font-weight: bold;
          text-align: center;
        }
      }
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 100rpx;
      border-top: 1rpx solid rgba(0, 0, 0, .1);
      background-color: #fff;
      .price {
        flex: 1;
        padding-left: 40rpx;
        line-height: 100rpx;
        font-weight: bold;
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
        display: block;
        width: 240rpx;
        height: 100rpx;
        background-color: #000;
        line-height: 100rpx;
        font-size: 30rpx;
        font-weight: bold;
        color:#fff;
        text-align: center;
      }
    }
  }
</style>
