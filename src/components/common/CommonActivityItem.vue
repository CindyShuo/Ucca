<template>
  <div
    @click="direction"
    class="common-activity-item"
  >
    <image
      src="/static/images/banner.png"
      class="common-activity-item__image"
    ></image>
    <div class="common-activity-item__text">
      <p class="time">{{ item.open }}</p>
      <h2 class="title">
        {{ item.title }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonActivityItem',
    props: {
      item: Object
    },
    methods: {
      direction () {
        wx.navigateTo({
          url: '/pages/activeInfo/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-activity-item {
    position: relative;
    width: 640rpx;
    height: 330rpx;
    &__image {
      position: absolute;
      left: 30rpx;
      bottom: 30rpx;
      z-index: 99;
      display: block;
      width: 240rpx;
      height: 300rpx;
      border-radius: 0 20rpx 0 0;
    }
    &__text {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 290rpx;
      padding: 60rpx 40rpx 0 310rpx;
      background-color: #fff;
      box-shadow: 0 12rpx 34rpx 0 rgba(0, 0, 0, 0.05);
      .time {
        margin-bottom: 10rpx;
        line-height: 32rpx;
        font-size: 24rpx;
        color: #232323;
        opacity: .4;
      }
      .title {
        line-height: 45rpx;
        font-size: 30rpx;
        color: #232323;
      }
    }
  }
</style>
