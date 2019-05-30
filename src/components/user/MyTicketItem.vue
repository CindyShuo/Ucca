<template>
  <div class="my-ticket-item">
    <image
      src="/static/images/pic.png"
      class="my-ticket-item__background"
    >
      <div class="my-ticket-item__content">
        <div class="info">
          <h3>王音：礼物</h3>
          <p class="time">2019.6.15 - 2019.9.1</p>
          <p class="local">UCCA尤伦斯当代艺术中心（北京798）</p>
        </div>
        <image
          src="/static/images/small-ma.png"
          class="ercode"
          @click="codeClickHandle"
        ></image>
      </div>
    </image>
    <!--待参观-->
    <div class="my-ticket-item__type" v-if="type === 'e1'">
      <div class="left">
        <p class="size-28">待参观</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">早鸟全日期通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--已预约待参观-->
    <div class="my-ticket-item__type" v-if="type === 'e2'">
      <div class="left">
        <p class="size-28">已约待参观</p>
        <p class="size-24 opacity-6">时间：19.08.19 13:00-14:00</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">早鸟全日期通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--去预约-->
    <div class="my-ticket-item__type" v-if="type === 'e3'">
      <div class="left">
        <p class="size-24 opacity-6">早鸟全日期通票</p>
        <p class="size-24 opacity-6">x1</p>
      </div>
      <div class="right flex">
        <a class="size-28">去预约</a>
        <div class="arrow">
          <image
            src="/static/images/arrow.png"
            class="arrow__icon"
          ></image>
        </div>
      </div>
    </div>
    <!--重新预约-->
    <div class="my-ticket-item__type" v-if="type === 'e4'">
      <div class="left">
        <p class="size-24 opacity-6">早鸟全日期通票</p>
        <p class="size-24 opacity-6">x1</p>
      </div>
      <div class="right flex">
        <a class="size-28">重新预约</a>
        <div class="arrow">
          <image
            src="/static/images/arrow.png"
            class="arrow__icon"
          ></image>
        </div>
      </div>
    </div>
    <!--即将过期-->
    <div class="my-ticket-item__type" v-if="type === 'e5'">
      <div class="left">
        <p class="size-28 color-ed3024">即将过期</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">早鸟全日期通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--已参观-->
    <div class="my-ticket-item__type" v-if="type === 'e6'">
      <div class="left">
        <p class="size-28">已参观</p>
        <p class="size-24 opacity-6">时间：19.08.19 13:00-14:00</p>
      </div>
      <div class="right">
        <div class="flex">
          <common-member margin="0 10rpx 0 0" />
          <p class="size-24 opacity-6">会员票</p>
        </div>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--已过期-->
    <div class="my-ticket-item__type" v-if="type === 'e7'">
      <div class="left">
        <p class="size-28">已过期</p>
      </div>
      <div class="right">
        <div class="flex">
          <common-member margin="0 10rpx 0 0" />
          <p class="size-24 opacity-6">会员票</p>
        </div>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--活动已预约-->
    <div class="my-ticket-item__type" v-if="type === 'a1'">
      <div class="left">
        <p class="size-28">活动已预约</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">活动普通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--活动已参与-->
    <div class="my-ticket-item__type" v-if="type === 'a2'">
      <div class="left">
        <p class="size-28 opacity-6">活动已参与</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">活动普通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
    <!--活动已过期-->
    <div class="my-ticket-item__type" v-if="type === 'a3'">
      <div class="left">
        <p class="size-28 opacity-6">活动已过期</p>
      </div>
      <div class="right">
        <p class="size-24 opacity-6">活动普通票</p>
        <p class="size-24 opacity-6">x3</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonMember from '../common/CommonMember'

  export default {
    name: 'MyTicketItem',
    components: { CommonMember },
    props: {
      type: {
        type: String
      }
    },
    methods: {
      codeClickHandle () {}
    }
  }
</script>

<style lang="less" scoped>
  .my-ticket-item {
    position: relative;
    margin: 30rpx auto 0;
    width: 670rpx;
    border-radius: 10rpx;
    box-shadow: 0 12px 34px 0 rgba(0,0,0,.05);
    overflow: hidden;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 200rpx;
      z-index: 100;
      width: 24rpx;
      height: 28rpx;
      background-color: #fcfcfc;
      box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
      border-radius: 50%;
    }
    &:before {
      left: -12rpx;
    }
    &:after {
      right: -12rpx;
    }
    &__background {
      position: relative;
      display: block;
      width: 100%;
      height: 214rpx;
    }
    &__content {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 40rpx;
      .info {
        color: #fff;
        h3 {
          height: 48rpx;
          line-height: 40rpx;
          font-size: 34rpx;
        }
        .time {
          margin-top: 10rpx;
          height: 32rpx;
          line-height: 28rpx;
          font-size: 24rpx;
          opacity: .8;
        }
        .local {
          margin-top: 10rpx;
          height: 34rpx;
          line-height: 28rpx;
          font-size: 24rpx;
          opacity: .8;
        }
      }
      .ercode {
        display: block;
        width: 44rpx;
        height: 44rpx;
      }
    }
    &__type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 162rpx;
      padding: 0 40rpx;
      background-color: #fff;
      line-height: 46rpx;
      color: #232323;
      .left {
        text-align: left;
      }
      .right {
        text-align: right;
      }
      .size-28 {
        font-size: 28rpx;
      }
      .size-24 {
        font-size: 24rpx;
      }
      .color-ed3024 {
        color: #ed3024;
      }
      .opacity-6 {
        opacity: .6;
      }
      .flex {
        display: flex;
        align-items: center;
      }
      .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10rpx;
        width: 24rpx;
        height: 24rpx;
        &__icon {
          display: block;
          width: 10rpx;
          height: 18rpx;
        }
      }
    }
  }
</style>
