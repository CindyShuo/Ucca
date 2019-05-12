<template>
  <div class="common-activity-item">
    <image
      src="/static/images/banner.png"
      class="common-activity-item__image"
    ></image>
    <div class="common-activity-item__text">
      <p class="time">2019.3.9-2019.5.19</p>
      <h2 class="title">
        影像艺术交流<br/>
        VCD影促会2019春：流动的顿悟
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonActivityItem'
  }
</script>

<style lang="less" scoped>
  .common-activity-item {
    position: relative;
    width: 640rpx;
    height: 290rpx;
    background-color: #fff;
    box-shadow: 0 12px 34px 0 rgba(0, 0, 0, 0.05);
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
      padding: 60rpx 40rpx 0 310rpx;
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
