<template>
  <div class='user-exhibition'>
    <common-entry title="我收藏的展览" titleFontStyle="font-weight: 700;" type="none" />
    <div class='user-exhibition-ucca' @click="direction">
      <image class='user-exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='user-exhibition-ucca__p'>
        <div class='user-exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='user-exhibition-ucca__p2'>毕加索：一位天才的降生</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  export default {
    name: 'UserExhibition',
    components: {
      CommonEntry
    }
  }
</script>

<style lang="less" scoped>
  .user-exhibition {
    padding-top: 134rpx;
    padding-bottom: 30rpx;
  }
  .user-exhibition-ucca {
    margin: 30rpx auto 0;
    width: 670rpx;
    background: #fff;
    border-radius: 0 20rpx 0 0;
    box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
    &__pic {
      height: 375rpx;
      width: 670rpx;
      border-radius: 0 20rpx 0 0;
    }
    &__p {
      padding: 20rpx 40rpx;
    }
    &__p1 {
      font-size: 24rpx;
      opacity: .4;
    }
    &__p2 {
      margin: 10rpx 0 35rpx;
      font-size: 34rpx;
      font-weight: 700;
    }
  }
</style>
