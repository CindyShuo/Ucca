<template>
  <div class="common-exhibition-item" @click="direction">
    <image
      :src='item.image'
      class='common-exhibition-item__image'
    ></image>
    <div class="common-exhibition-item__content">
      <p class="time">{{ item.open }}</p>
      <p class="title">{{ item.title }}</p>
      <div class="item-info">
        <p class="price">{{ item.price }}</p>
        <common-member />
        <p class="vip-price">{{ item.memberPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonMember from './CommonMember'

  export default {
    name: 'CommonExhibitionItem',
    components: {CommonMember},
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      direction () {
        wx.navigateTo({
          url: '/pages/exhibitionInfo/main?id=' + this.item.id
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-exhibition-item {
    margin: 30rpx auto 0;
    width: 670rpx;
    border-radius: 0 20rpx 0 0;
    box-shadow: 3rpx 3rpx 35rpx rgba(0, 0, 0, 0.05);
    overflow: hidden;
    &__image {
      display: block;
      width: 100%;
      height: 375rpx;
    }
    &__content {
      padding: 30rpx 40rpx;
      background-color: #fff;
      .time {
        height: 32rpx;
        line-height: 32rpx;
        font-size: 24rpx;
        color: #232323;
        opacity: .4;
      }
      .title {
        margin-top: 12rpx;
        height: 48rpx;
        line-height: 48rpx;
        font-size: 34rpx;
        font-weight: bold;
        color: #232323;
      }
      .item-info {
        display: flex;
        align-items: center;
        margin-top: 28rpx;
        height: 40rpx;
        .price {
          margin-right: 24rpx;
          line-height: 40rpx;
          font-size: 28rpx;
          color: #232323;
        }
        .vip-price {
          margin-left: 14rpx;
          font-size: 24rpx;
          color: #ed3024;
        }
      }
    }
  }
</style>
