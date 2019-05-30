<template>
  <div class="reservation-time">
    <div class='reservation-time__order-title'>请选择展票预约时间</div>
    <div class='reservation-time__time-list' @click="goReservation">
      <div class='list-icon'>1</div>
      展票_1
      <div class='reservation-time__list-time'>
        <image class='arrow-pic' src='/static/images/arrow.png'></image>
        <div class='date-time'>请选择预约时间</div>
      </div>
    </div>
    <div class='reservation-time__time-list' @click="goReservation">
      <div class='list-icon'>1</div>
      展票_1
      <div class='reservation-time__list-time'>
        <image class='arrow-pic' src='/static/images/arrow.png'></image>
        <div class='date-time date-time-down'>2019.08.12 10:00-12:00</div>
      </div>
    </div>
    <div class='reservation-time__time-list' @click="goReservation">
      <div class='list-icon'>1</div>
      展票_1
      <div class='reservation-time__list-time'>
        <image class='arrow-pic' src='/static/images/arrow.png'></image>
        <div class='date-time'>请选择预约时间</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReservationTime',
    methods: {
      goReservation () {
        // 去预约
        wx.navigateTo({
          url: '/pages/reservation/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .reservation-time {
    &__order-title {
      width: 670rpx;
      height: 50rpx;
      margin: 40rpx 40rpx 20rpx 40rpx;
      height: 50rpx;
      line-height: 50rpx;
      font-size: 34rpx;
    }
    &__time-list {
      width: 670rpx;
      height: 140rpx;
      margin: auto;
      font-size: 28rpx;
      line-height: 140rpx;
      border-radius: 6rpx;
      border-left: 6rpx solid #000;
      background: #fff;
      box-shadow: 3rpx 3rpx 25rpx rgba(0,0,0,.1);
      margin-bottom: 20rpx;
      .list-icon {
        width: 36rpx;
        height: 36rpx;
        float: left;
        margin: 52rpx 15rpx 52rpx 40rpx;
        border-radius: 100rpx;
        background: #000;
        color: #fff;
        line-height: 36rpx;
        text-align: center;
      }
    }
    &__list-time {
      float: right;
      margin-right: 50rpx;
      .arrow-pic {
        width: 14rpx !important;
        height: 26rpx !important;
        float: right;
        margin-top: 56rpx;
        margin-left: 10rpx;
      }
      .date-time {
        font-size: 24rpx;
        opacity: .4;
        float: right;
      }
      .date-time-down {
        font-size: 24rpx;
        opacity: 1;
      }
    }
  }
</style>
