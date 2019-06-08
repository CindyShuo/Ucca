<template>
  <div class='common-footer-handle'>
    <div class='common-footer-handle__button'>
      <common-home-btn></common-home-btn>
      <common-collection-btn :id="id"></common-collection-btn>
      <common-share-btn @share="showShareBox"></common-share-btn>
    </div>
    <div @click="groupAppointment" class='common-footer-handle__controller common-footer-handle__controller--border' v-if="!type">团体预约</div>
    <div @click="buyTicket" class='common-footer-handle__controller common-footer-handle__controller--background' v-if="!type">立即购票</div>
    <div @click="participate" class='common-footer-handle__controller common-footer-handle__controller--background' v-else-if="type">参与活动</div>
  </div>
</template>

<script>
  import CommonHomeBtn from './CommonHomeBtn'
  import CommonCollectionBtn from './CommonCollectionBtn'
  import CommonShareBtn from './CommonShareBtn'

  export default {
    name: 'CommonFooterHandle',
    props: {
      type: String,
      id: {
        type: String,
        required: true
      }
    },
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
        this.$emit('buyTicket', {'buyTicket': this.isParticipate, 'type': 'participate'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-footer-handle {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10009;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100rpx;
    padding: 0 30rpx;
    background-color: #fff;
    box-shadow: 1rpx -1rpx 1rpx rgba(0, 0, 0, 0.05);
    &__button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 222rpx;
      height: 100%;
    }
    &__controller {
      flex: 1;
      margin-left: 30rpx;
      height: 64rpx;
      border-radius: 64rpx;
      line-height: 64rpx;
      font-size: 28rpx;
      text-align: center;
      &--border {
        border: 1rpx solid rgba(0, 0, 0, 0.2);
        color: #232323;
      }
      &--background {
        background-color: #232323;
        color: #fff;
      }
    }
  }
</style>
