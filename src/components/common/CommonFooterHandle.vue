<template>
  <div class='common-footer-handle'>
    <div class='common-footer-handle__div' v-bind:style="[type? 'width: 270rpx': '']">
      <common-home-btn></common-home-btn>
      <common-collection-btn></common-collection-btn>
      <common-share-btn @share="showShareBox"></common-share-btn>
    </div>
    <div @click="groupAppointment" class='common-footer-handle__div2' v-if="!type">团体预约</div>
    <div @click="buyTicket" class='common-footer-handle__div3' v-if="!type">立即购票</div>
    <div @click="participate" class='common-footer-handle__div3' style="width: 450rpx" v-else-if="type">参与活动</div>
  </div>
</template>

<script>
  import CommonHomeBtn from './CommonHomeBtn'
  import CommonCollectionBtn from './CommonCollectionBtn'
  import CommonShareBtn from './CommonShareBtn'
  export default {
    name: 'CommonFooterHandle',
    props: ['type'],
    components: {
      CommonHomeBtn,
      CommonCollectionBtn,
      CommonShareBtn
    },
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
      showShareBox (val) {
        this.share = val
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
        console.log(this.isParticipate, 'this.isParticipate')
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
    width: 100%;
    height: 100rpx;
    background: #fff;
    z-index: 10009;
    box-shadow: 1rpx -1rpx 1rpx rgba(0, 0, 0, 0.05);
    &__div {
      float: left;
      width: 250rpx;
      height: 100%;
      // border-right: 1rpx solid rgba(0, 0, 0, 0.1);
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
      position: relative;
      margin: 20rpx 30rpx 0 0;
      padding: 0 50rpx;
      font-size: 28rpx;
      height: 64rpx;
      line-height: 64rpx;
      text-align: center;
      border-radius: 64rpx;
      border: 1rpx solid rgba(0, 0, 0, 0.2);
      .content {
        position: absolute;
        font-size: 20rpx;
        opacity: 0.6;
        width: 100%;
        top: 30rpx;
      }
    }
    &__div3 {
      margin: 20rpx 30rpx 20rpx 0rpx;
      padding: 0 50rpx;
      background: #000;
      color: #fff;
      font-size: 28rpx;
      height: 64rpx;
      line-height: 64rpx;
      text-align: center;
      border-radius: 64rpx;
    }
  }
</style>
