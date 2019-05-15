<template>
  <scroll-view scroll-y class='body activity' style="padding-top: 50rpx">
    <common-entry title="近期活动" type="none" />
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
<!--    <view class='activity-topic'>-->
<!--      <view class='topic-p'>历史活动</view>-->
<!--      <image class='topic-icon1' src='/static/images/arrow1.png'></image>-->
<!--      <view class='topic-icon-p'>2019</view>-->
<!--    </view>-->
    <view class='topic' style="margin-top: 50rpx">
      <common-entry title="历史活动" type="date" />
    </view>
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
    <view class='activity-unit'>
      <view class='activity-unit_bg'></view>
      <image class='activity-unit_pic' src='/static/images/pic.png'></image>
      <view class='activity-unit_span'>2019.5.12-2019.5.28</view>
      <view class='activity-unit_p'>影像艺术交流</view>
      <view class='activity-unit_p'>文明：人类的影像</view>
      <view class='activity-ucca_p3 activity-ucca_p3-1'>￥138-￥188</view>
      <view class='activity-ucca_p4'>UCAA会员</view>
      <view class='activity-ucca_p5'>￥100</view>
    </view>
  </scroll-view>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'Activity',
    components: {
      CommonEntry
    }
  }
</script>

<style scoped>
  .activity-unit{
    position: relative;
    margin: 30rpx auto 0;
    width:670rpx;
    height:335rpx;
  }
  .activity-unit_pic{
    float:left;
    width:240rpx;
    height:300rpx;
    margin-left:30rpx;
    border-radius:0 30rpx 0 0;
    position: relative;
    z-index: 100;
  }
  .activity-unit_bg {
    width: 670rpx;
    height: 295rpx;
    background: #fff;
    position: absolute;
    bottom: 0;
    box-shadow: 3rpx 3rpx 35rpx rgba(0,0,0,.1);
    z-index: 0;
  }
  .activity-unit_p {
    float: right;
    position: relative;
    margin: 0 40rpx 0 30rpx;
    font-size: 30rpx;
    width: 330rpx;
    z-index: 100;
  }
  .activity-unit_span {
    float: right;
    position: relative;
    margin: 100rpx 40rpx 10rpx 30rpx;
    width: 330rpx;
    font-size: 24rpx;
    opacity: .4;
    z-index: 100;
  }
  .activity-ucca_p3 {
    font-size: 28rpx;
    float: left;
    margin-right: 30rpx;
    line-height: 20rpx;
  }
  .activity-ucca_p3-1 {
    position: relative;
    margin: 28rpx 15rpx 0 25rpx;
  }
  .activity-ucca_p4 {
    position: relative;
    margin-top: 28rpx;
    font-size: 16rpx;
    float: left;
    margin-right: 10rpx;
    color: red;
    border: 1rpx solid red;
    border-radius: 0 8rpx 0 0;
    line-height: 15rpx;
    padding: 3rpx;
  }
  .activity-ucca_p5 {
    position: relative;
    margin-top: 30rpx;
    font-size: 24rpx;
    color: red;
    line-height: 20rpx;
    float: left;
  }
</style>
