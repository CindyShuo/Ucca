<template>
  <div class='user-activity' style="padding-top: 50rpx">
    <common-entry title="我收藏的活动" type="none" />
    <div class='user-activity-unit' @click="direction">
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
    <div class='user-activity-unit'>
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
    <div class='user-activity-unit'>
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="历史活动" type="date" />
    </div>
    <div class='user-activity-unit'>
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
    <div class='user-activity-unit'>
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
    <div class='user-activity-unit'>
      <div class='user-activity-unit__bg'></div>
      <image class='user-activity-unit__pic' src='/static/images/pic.png'></image>
      <div class='user-activity-unit__span'>2019.5.12-2019.5.28</div>
      <div class='user-activity-unit__p'>影像艺术交流</div>
      <div class='user-activity-unit__p'>文明：人类的影像</div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'UserActivity',
    components: {
      CommonEntry
    }
  }
</script>

<style lang="less" scoped>
  .user-activity-unit{
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
</style>
