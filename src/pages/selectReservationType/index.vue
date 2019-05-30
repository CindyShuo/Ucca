<template>
  <div class="select-reservation-type">
    <common-header title="展览预约" :back-visible="true" :have-border="false" />
    <div class='select-reservation-type__window-top select-reservation-type__order-top'>
      <image class='pic' src='/static/images/pic.png'></image>
      <div class='font'>
        <div class='font-1'>王音：礼物</div>
        <div class='font-2'>已选：早鸟全日期通票</div>
        <div class='font-2'>2019.5.12-2019.6-21</div>
      </div>
    </div>
    <!-- 选择预约时间类型 -->
    <div class="select-reservation-type__content" v-if="!ticketType">
      <div class='order-title'>您购买了3张展票，请选择预约观展的时间</div>
      <div class='mode' @click="reservationTime">与朋友一起，预约相同时间观展</div>
      <div class='mode mode-down' @click="reservationTime">与朋友分开，预约不同时间观展</div>
    </div>
    <!-- 选择需要预约的票 -->
    <reservation-time v-if="ticketType"></reservation-time>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import ReservationTime from '@/components/user/ReservationTime'
  export default {
    name: 'SelectReservationType',
    components: { CommonHeader, ReservationTime },
    data () {
      return {
        ticketType: false
      }
    },
    methods: {
      reservationTime () {
        this.ticketType = true
      }
    },
    onLoad (e) {
      if (e.flag) {
        this.ticketType = true
      } else {
        this.ticketType = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .select-reservation-type {
    &__order-top {
      position: relative;
      padding: 40rpx;
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #fff;
      border-top: 1rpx solid rgba(0, 0, 0, 0.1);
      .pic {
        width: 230rpx;
        height: 180rpx;
        float: left;
      }
      .font {
        float: left;
        margin-left: 30rpx;
      }
      .font-1 {
        margin-top: 6rpx;
        font-size: 34rpx;
        font-weight: bold;
      }
      .font-2 {
        font-size: 24rpx;
        margin-top: 10rpx;
      }
    }
    &__content {
      .order-title {
        width: 670rpx;
        height: 50rpx;
        margin: 40rpx 40rpx 20rpx 40rpx;
        height: 50rpx;
        line-height: 50rpx;
        font-size: 34rpx;
      }
      .mode {
        width: 670rpx;
        height: 100rpx;
        font-size: 30rpx;
        background: #fff;
        line-height: 100rpx;
        text-align: center;
        margin: auto;
        margin-top: 30rpx;
      }
      .mode-down {
        background: #000;
        color: #fff;
      }
    }
  }
</style>
