<template>
  <div class='user-exhibition' style="padding-top: 50rpx">
    <common-entry title="我收藏的展览" type="none" />
    <div class='user-exhibition-ucca' @click="direction">
      <image class='user-exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='user-exhibition-ucca__p'>
        <div class='user-exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='user-exhibition-ucca__p2'>毕加索：一位天才的降生</div>
      </div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="当前展览" type="none" />
    </div>
    <div class='user-exhibition-ucca'>
      <image class='user-exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='user-exhibition-ucca__p'>
        <div class='user-exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='user-exhibition-ucca__p2'>毕加索：一位天才的降生</div>
      </div>
    </div>
    <div class='user-exhibition-ucca'>
      <image class='user-exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='user-exhibition-ucca__p'>
        <div class='user-exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='user-exhibition-ucca__p2'>毕加索：一位天才的降生</div>
      </div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="历史展览" type="date" />
    </div>
    <div class='user-exhibition-ucca'>
      <image class='user-exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='user-exhibition-ucca__p'>
        <div class='user-exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='user-exhibition-ucca__p2'>毕加索：一位天才的降生</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'UserExhibition',
    components: {
      CommonEntry
    }
  }
</script>

<style lang="less" scoped>
  .user-exhibition-ucca {
    margin: 30rpx auto 0;
    width: 670rpx;
    background: #fff;
    border-radius: 0 20rpx 0 0;
    box-shadow: 3rpx 3rpx 35rpx rgba(0, 0, 0, 0.05);
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
      font-size: 34rpx;
      margin: 10rpx 0 35rpx;
    }
  }
</style>
