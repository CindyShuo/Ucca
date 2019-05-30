<template>
  <div class='common-footer-handle'>
    <div class='common-footer-handle__div' v-bind:style="[type? 'width: 270rpx': '']">
      <navigator url="/pages/index/main" open-type="switchTab" class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon1.png'></image>
      </navigator>
      <a class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon2.png'></image>
      </a>
      <a @click="showShareBox" class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon3.png'></image>
      </a>
    </div>
    <div @click="groupAppointment" class='common-footer-handle__div common-footer-handle__div2' v-if="!type">团体预约<div class='content'>20人以上</div></div>
    <div @click="buyTicket" class='common-footer-handle__div common-footer-handle__div3' v-if="!type">立即购票</div>
    <div @click="participate" class='common-footer-handle__div common-footer-handle__div3' style="width: 480rpx" v-else-if="type">参与活动</div>
  </div>
</template>

<script>
  export default {
    name: 'CommonFooterHandle',
    props: ['type'],
    data () {
      return {
        isGroupAppointment: false,
        isBuyTicket: false,
        isParticipate: false,
        share: false
      }
    },
    methods: {
      // 分享
      showShareBox () {
        this.share = true
        this.$emit('buyTicket', {'buyTicket': this.share, 'type': 'share'})
      },
      // 团体预约
      groupAppointment () {
        this.isGroupAppointment = true
        this.$emit('buyTicket', {'buyTicket': this.isGroupAppointment, 'type': 'groupAppointment'})
      },
      // 立即购票
      buyTicket () {
        this.isBuyTicket = true
        this.$emit('buyTicket', {'buyTicket': this.isBuyTicket, 'type': 'buyTicket'})
      },
      // 参与活动
      participate () {
        this.isParticipate = true
        this.$emit('buyTicket', {'buyTicket': this.isParticipate, 'type': 'participate'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-footer-handle {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 750rpx;
    height: 100rpx;
    background: #fff;
    z-index: 10009;
    box-shadow: 1rpx -1rpx 1rpx rgba(0, 0, 0, 0.05);
    &__div {
      float: left;
      width: 250rpx;
      height: 100%;
      border-right: 1rpx solid rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    &__a {
      display: inline-block;
      width: 82rpx;
      height: 100%;
      .div1 {
        width: 82rpx;
        height: 100%;
      }
    }
    &__div2 {
      font-size: 30rpx;
      line-height: 80rpx;
      position: relative;
      .content {
        position: absolute;
        font-size: 20rpx;
        opacity: 0.6;
        width: 100%;
        top: 30rpx;
      }
    }
    &__div3 {
      background: #000;
      color: #fff;
      font-size: 30rpx;
      line-height: 100rpx;
    }
  }
</style>
