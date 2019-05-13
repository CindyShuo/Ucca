<template>
  <div class="common-exhibition-item">
    <image
      src="/static/images/banner.png"
      class="common-exhibition-item__image"
    ></image>
    <div class="common-exhibition-item__text">
      <h2 class="title">文明：当代生活启示录</h2>
      <p class="time">2019.3.9-2019.5.19</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonExhibitionItem'
  }
</script>

<style lang="less" scoped>
  .common-exhibition-item {
    width: 500rpx;
    border-radius: 0 20rpx 0 0;
    background-color: #fff;
    box-shadow: 0 8rpx 34rpx 0 rgba(0, 0, 0, .1);
    &__image {
      display: block;
       width:500rpx;
       height:280rpx;
       border-radius:0 20rpx 0 0;
    }
    &__text {
      padding: 30rpx 0 30rpx 40rpx;
      .title {
        line-height: 48rpx;
        font-size: 34rpx;
        color: #232323;
      }
      .time {
        margin-top: 10rpx;
        line-height: 32rpx;
        font-size: 24rpx;
        color: #232323;
        opacity: .4;
      }
    }
  }
</style>
