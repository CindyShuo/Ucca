<template>
  <div class="share-box">
    <view class='share'>
      <image class='share-card' src='/static/images/pic.png'>
        <image class='logo' src='/static/images/logo.png'></image>
        <view class='image-left-bottom'></view>
        <view class='image-right-bottom'></view>
      </image>
      <view class='share-con'>
        <view class='font-left-top'></view>
        <view class='font-right-top'></view>
        <view class='brief-topic'>王音：礼物</view>
        <view class='brief-span'>2019.6.15 - 2019.9.1</view>
        <view class='brief-span'>UCCA尤伦斯当代艺术中心（北京798）</view>
        <view class='share-line'></view>
        <image class='photo' src='/static/images/photo.png'></image>
        <view class='photo-name'>Anapple</view>
        <view class='photo-name-span'>早鸟全日期通票</view>
        <image class='ma2' src='/static/images/ma2.png'></image>
      </view>
      <view class='share-ps'>长按图片，保持到手机分享朋友圈或点击右上角分享给好</view>
      <image class='close1' @click="close" src='/static/images/close1.png'></image>
    </view>
  </div>
</template>

<script>
  export default {
    name: 'ShareBox',
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="less" scoped>
  .share-box {
    position: absolute;
    top: 170rpx;
    left: 76rpx;
    width: 600rpx;
    height: 910rpx;
    .share {
      width: 100%;
      height: auto;
      margin: auto;
      position: relative;
    }

    .share-card {
      position: relative;
      width: 100%;
      height: 400rpx;
      border-radius: 10rpx;
    }

    .image-left-bottom, .image-right-bottom, .font-left-top, .font-right-top {
      background: #000;
    }

    .share-con {
      position: relative;
      padding: 40rpx;
      width: 100%;
      background: #fff;
      margin-top: -11rpx;
      overflow: hidden;
      border-radius: 10rpx;
    }

    .share-line {
      width: 100%;
      height: 1rpx;
      margin: 50rpx 0 40rpx;
      background: rgba(0, 0, 0, 0.1);
    }
    .photo {
      float: left;
      width: 80rpx;
      height: 80rpx;
      border-radius: 100rpx;
      margin-right: 25rpx;
    }

    .photo-name {
      font-size: 28rpx;
      line-height: 40rpx;
      font-weight: bold;
    }

    .photo-name-span {
      font-size: 24rpx;
      line-height: 40rpx;
      opacity: 0.4;
    }
    .logo{
      position: absolute;
      right: 40rpx;
      bottom: 40rpx;
      width: 80rpx;
      height: 80rpx;
    }
    .ma2{
      width: 120rpx;
      height: 120rpx;
      position: absolute;
      right: 40rpx;
      bottom: 20rpx;
    }
    .share-ps{
      width: 355rpx;
      height: auto;
      margin: auto;
      margin-top: 30rpx;
      text-align: center;
      line-height: 36rpx;
      color: #fff;
      opacity: .6;
      font-size: 24rpx;
    }
    .close1{
      width: 54rpx;
      height: 54rpx;
      margin-left: 275rpx;
      margin-top: 30rpx;
    }
    .share-button {
      width: 260rpx;
      height: 80rpx;
      border: 1rpx solid #fff;
      text-align: center;
      font-size: 30rpx;
      line-height: 80rpx;
      margin:40rpx auto 0;
      color: #fff;
    }
    .brief-topic {
      font-size: 42rpx;
      line-height: 60rpx;
      font-weight: bold;
    }
    .brief-span {
      font-size: 24rpx;
      margin-top: 10rpx;
      opacity: 0.8;
    }
  }
</style>
