<template>
  <div class='choose-activity'>
    <div class='choose-activity__topic'>单次活动票
      <div class='topic-span'>库存紧张</div>
    </div>
    <div class='choose-activity__kuang'>
      普通票
      <div class='kuang-span'>适用于非会员用户购票</div>
    </div>
    <div class='choose-activity__kuang choose-activity__kuang1'>
      <span class="member">UCAA会员</span>免费票
      <div class='kuang-span kuang1-span'>适用于UCCA会员的免费票（仅限会员本人使用）</div>
    </div>
    <div class='choose-activity__topic'>活动时段</div>
    <div class='choose-activity__kuang choose-activity__time'>
      05.10（周五）18:00-21:00 学术交流
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChooseActivity'
  }
</script>

<style lang="less" scoped>
  .choose-activity {
    padding-top: 20rpx;
    width: 100%;
    height: 520rpx;
    overflow: hidden;
    border-radius: 0 20rpx 0 0;
    &__topic {
      margin-top: 40rpx;
      width: 100%;
      font-size: 24rpx;
      font-weight: bold;
      .topic-span {
        float: right;
        color: red;
        font-weight: normal;
      }
    }
    &__kuang {
      width: 610rpx;
      height: 100rpx;
      border-radius: 0 20rpx 0 0;
      background: rgba(0, 0, 0, 0.1);
      font-size: 28rpx;
      padding: 20rpx 30rpx 0;
      margin-top: 20rpx;
      font-weight: bold;
      .member {
        margin-right: 20rpx;
        padding: 0 4rpx;
        border: 1rpx solid #ed3024;
        border-radius: 0 8rpx 0 0;
        line-height: 22rpx;
        font-size: 16rpx;
        color: #ed3024;
      }
      .kuang-span {
        font-size: 24rpx;
        color: rgba(0, 0, 0, 0.4);
        margin-top: 10rpx;
        font-weight: normal;
      }
    }
    &__kuang1 {
      background: rgba(237, 48, 36, 0.1);
      color: rgb(237, 48, 36);
      .kuang1-span {
        color: rgba(237, 48, 36, 0.4);
      }
    }
    &__time {
      background: rgba(237, 48, 36, 0.1);
      color: rgb(237, 48, 36);
      font-weight: normal;
    }
  }
</style>
