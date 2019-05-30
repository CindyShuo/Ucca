<template>
  <div class='exhibition' style="padding-top: 50rpx">
    <common-entry title="展览预告" titleFontStyle="font-weight: 700;" type="none" />
    <div class='exhibition-ucca' @click="direction">
      <image class='exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='exhibition-ucca__p'>
        <div class='exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='exhibition-ucca__p2'>毕加索：一位天才的降生</div>
        <div class='exhibition-ucca__p3'>￥138-￥188</div>
        <div class='exhibition-ucca__p4'>UCAA会员</div>
        <div class='exhibition-ucca__p5'>￥100</div>
      </div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="当前展览" titleFontStyle="font-weight: 700;" type="none" />
    </div>
    <div class='exhibition-ucca'>
      <image class='exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='exhibition-ucca__p'>
        <div class='exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='exhibition-ucca__p2'>毕加索：一位天才的降生</div>
        <div class='exhibition-ucca__p3'>￥138-￥188</div>
        <div class='exhibition-ucca__p4'>UCAA会员</div>
        <div class='exhibition-ucca__p5'>￥100</div>
      </div>
    </div>
    <div class='exhibition-ucca'>
      <image class='exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='exhibition-ucca__p'>
        <div class='exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='exhibition-ucca__p2'>毕加索：一位天才的降生</div>
        <div class='exhibition-ucca__p3'>￥138-￥188</div>
        <div class='exhibition-ucca__p4'>UCAA会员</div>
        <div class='exhibition-ucca__p5'>￥100</div>
      </div>
    </div>
    <div class='topic' style="margin-top: 50rpx">
      <common-entry title="历史展览" titleFontStyle="font-weight: 700;" type="date" />
    </div>
    <div class='exhibition-ucca'>
      <image class='exhibition-ucca__pic' src='/static/images/pic.png'></image>
      <div class='exhibition-ucca__p'>
        <div class='exhibition-ucca__p1'>2019.6.15-2019.9.1</div>
        <div class='exhibition-ucca__p2'>毕加索：一位天才的降生</div>
        <div class='exhibition-ucca__p3'>￥138-￥188</div>
        <div class='exhibition-ucca__p4'>UCAA会员</div>
        <div class='exhibition-ucca__p5'>￥100</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../../components/common/CommonEntry'

  export default {
    name: 'Exhibition',
    components: {
      CommonEntry
    },
    methods: {
      direction () {
        wx.navigateTo({
          url: '/pages/exhibitionInfo/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-ucca {
    margin: 30rpx auto 0;
    width: 670rpx;
    height: 594rpx;
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
      font-weight: 700;
    }
    &__p3 {
      font-size: 28rpx;
      float: left;
      margin-right: 30rpx;
      line-height: 20rpx;
      font-weight: 700;
    }
    &__p4 {
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
      font-size: 24rpx;
      color: red;
      line-height: 20rpx;
      font-weight: 700;
      float: left;
    }
  }
</style>
