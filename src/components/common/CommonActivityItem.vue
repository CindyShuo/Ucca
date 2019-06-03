<template>
  <div class='common-activity-item' @click="direction">
    <image
      src='/static/images/pic.png'
      class='common-activity-item__image'
    ></image>
    <div class="common-activity-item__content">
      <p class="time">2019.5.12-2019.5.28</p>
      <p class="title">影像艺术交流文明：人类的影像</p>
      <div class="item-info" v-if="!isCollection">
        <p class="price">￥138-￥188</p>
        <common-member />
        <p class="vip-price">￥100</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonMember from './CommonMember'

  export default {
    name: 'CommonActivityItem',
    components: { CommonMember },
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      },
      isCollection: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      direction () {
        wx.navigateTo({
          url: '/pages/activeInfo/main?id=' + this.item.id
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-activity-item {
    position: relative;
    margin: 30rpx auto 0;
    width: 670rpx;
    height: 335rpx;
    &__image {
      position: absolute;
      top: 0;
      left: 30rpx;
      z-index: 99;
      display: block;
      width: 240rpx;
      height: 300rpx;
      border-radius: 0 20rpx 0 0;
    }
    &__content {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 98;
      width: 100%;
      height: 295rpx;
      padding-top: 40rpx;
      padding-left: 300rpx;
      background-color: #fff;
      box-shadow: 0 12px 34px 0 rgba(0,0,0,.05);
      .time {
        height: 32rpx;
        line-height: 28rpx;
        font-size: 24rpx;
        color: #232323;
        opacity: .4;
      }
      .title {
        margin-top: 12rpx;
        height: 90rpx;
        padding-right: 40rpx;
        line-height: 45rpx;
        font-size: 30rpx;
        font-weight: bold;
        color: #232323;
      }
      .item-info {
        display: flex;
        align-items: center;
        margin-top: 18rpx;
        height: 40rpx;
        .price {
          margin-right: 12rpx;
          line-height: 40rpx;
          font-size: 28rpx;
          color: #232323;
        }
        .vip-price {
          margin-left: 12rpx;
          font-size: 24rpx;
          color: #ed3024;
        }
      }
    }
  }
</style>
