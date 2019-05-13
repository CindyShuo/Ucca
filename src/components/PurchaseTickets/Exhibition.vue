<template>
  <scroll-view scroll-y class='body'>
    <common-entry title="展览预告" type="none" />
    <view class='ucca'>
      <image class='ucca-pic' src='/static/images/pic.png'></image>
      <view class='ucca-p'>
        <view class='ucca-p1'>2019.6.15-2019.9.1</view>
        <view class='ucca-p2'>毕加索：一位天才的降生</view>
        <view class='ucca-p3'>￥138-￥188</view>
        <view class='ucca-p4'>UCAA会员</view>
        <view class='ucca-p5'>￥100</view>
      </view>
    </view>
    <view class='topic'>
      <common-entry title="当前展览" type="none" />
    </view>
    <view class='ucca'>
      <image class='ucca-pic' src='/static/images/pic.png'></image>
      <view class='ucca-p'>
        <view class='ucca-p1'>2019.6.15-2019.9.1</view>
        <view class='ucca-p2'>毕加索：一位天才的降生</view>
        <view class='ucca-p3'>￥138-￥188</view>
        <view class='ucca-p4'>UCAA会员</view>
        <view class='ucca-p5'>￥100</view>
      </view>
    </view>
    <view class='ucca'>
      <image class='ucca-pic' src='/static/images/pic.png'></image>
      <view class='ucca-p'>
        <view class='ucca-p1'>2019.6.15-2019.9.1</view>
        <view class='ucca-p2'>毕加索：一位天才的降生</view>
        <view class='ucca-p3'>￥138-￥188</view>
        <view class='ucca-p4'>UCAA会员</view>
        <view class='ucca-p5'>￥100</view>
      </view>
    </view>
    <!--      <view class='topic'>-->
    <!--        <view class='topic-p'>历史展览</view>-->
    <!--        <image class='topic-icon1' src='/static/images/arrow1.png'></image>-->
    <!--        <view class='topic-icon-p'>2019</view>-->
    <!--      </view>-->
    <common-entry title="历史展览" type="date" />
    <view class='ucca'>
      <image class='ucca-pic' src='/static/images/pic.png'></image>
      <view class='ucca-p'>
        <view class='ucca-p1'>2019.6.15-2019.9.1</view>
        <view class='ucca-p2'>毕加索：一位天才的降生</view>
        <view class='ucca-p3'>￥138-￥188</view>
        <view class='ucca-p4'>UCAA会员</view>
        <view class='ucca-p5'>￥100</view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'Exhibition',
    components: {
      CommonEntry
    }
  }
</script>

<style scoped>
  .ucca {
    margin: 30rpx auto 0;
    width: 670rpx;
    height: 594rpx;
    background: #fff;
    border-radius: 0 20rpx 0 0;
    box-shadow: 3rpx 3rpx 35rpx rgba(0, 0, 0, 0.05);
  }
  .ucca-pic {
    height: 375rpx;
    width: 670rpx;
    border-radius: 0 20rpx 0 0;
  }
  .ucca-p{
    padding: 20rpx 40rpx;
  }
  .ucca-p1 {
    font-size: 24rpx;
    opacity: .4;
  }
  .ucca-p2 {
    font-size: 34rpx;
    margin: 10rpx 0 35rpx;
  }
  .ucca-p3 {
    font-size: 28rpx;
    float: left;
    margin-right: 30rpx;
    line-height: 20rpx;
  }
  .ucca-p4 {
    font-size: 16rpx;
    float: left;
    margin-right: 10rpx;
    color: red;
    border: 1rpx solid red;
    border-radius: 0 8rpx 0 0;
    line-height: 15rpx;
    padding: 3rpx;
  }
  .ucca-p5 {
    font-size: 24rpx;
    color: red;
    line-height: 20rpx;
    float: left;
  }
</style>
