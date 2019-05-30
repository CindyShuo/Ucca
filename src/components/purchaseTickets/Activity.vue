<template>
  <div class='activity' style="padding-top: 134rpx">
    <common-entry title="近期活动" titleFontStyle="font-weight: 700;" type="none" />
    <div class='activity-unit' @click="direction">
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
    <div class='activity-unit'>
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
    <div class='activity-unit'>
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="历史活动" titleFontStyle="font-weight: 700;" type="date" />
    </div>
    <div class='activity-unit'>
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
    <div class='activity-unit'>
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
    <div class='activity-unit'>
      <div class='activity-unit__bg'></div>
      <image class='activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='activity-unit__p'>影像艺术交流</div>
      <div class='activity-unit__p'>文明：人类的影像</div>
      <div class='activity-ucca__p3 activity-ucca__p3-1'>￥138-￥188</div>
      <div class='activity-ucca__p4'>UCAA会员</div>
      <div class='activity-ucca__p5'>￥100</div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'Activity',
    components: {
      CommonEntry
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
  .activity-unit{
    position: relative;
    margin: 30rpx auto 0;
    width:670rpx;
    height:335rpx;
    &__pic{
      float:left;
      width:240rpx;
      height:300rpx;
      margin-left:30rpx;
      border-radius:0 30rpx 0 0;
      position: relative;
      z-index: 100;
    }
    &__bg {
      width: 670rpx;
      height: 295rpx;
      background: #fff;
      position: absolute;
      bottom: 0;
      box-shadow: 3rpx 3rpx 35rpx rgba(0,0,0,.1);
      z-index: 0;
    }
    &__p {
      float: right;
      position: relative;
      margin: 0 40rpx 0 30rpx;
      font-size: 30rpx;
      width: 330rpx;
      font-weight: 700;
      z-index: 100;
    }
    &__span {
      float: right;
      position: relative;
      margin: 100rpx 40rpx 10rpx 30rpx;
      width: 330rpx;
      font-size: 24rpx;
      opacity: .4;
      z-index: 100;
    }
  }
  .activity-ucca {
    &__p3 {
      font-size: 28rpx;
      float: left;
      margin-right: 30rpx;
      line-height: 20rpx;
      font-weight: 700;
    }
    &__p3-1 {
      position: relative;
      margin: 28rpx 15rpx 0 25rpx;
    }
    &__p4 {
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
    &__p5 {
      position: relative;
      margin-top: 30rpx;
      font-size: 24rpx;
      color: red;
      line-height: 20rpx;
      font-weight: 700;
      float: left;
    }
  }
</style>
