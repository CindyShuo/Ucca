<template>
  <scroll-view scroll-y class='choose-ticket-type'>
    <div class="choose-ticket-type__content">
      <div class='choose-ticket-type__topic'>早鸟票
        <div class='topic-span'>库存紧张</div>
      </div>
      <div class='choose-ticket-type__kuang'>
        早鸟票全日期通票
        <div class='kuang-span'>适用于展期内任何日期</div>
      </div>
      <div class='choose-ticket-type__kuang choose-ticket-type__kuang1'>
        早鸟票全日期通票
        <div class='kuang-span kuang1-span'>适用于展期内任何日期</div>
      </div>
      <div class='choose-ticket-type__kuang'>
        早鸟票全日期通票
        <div class='kuang-span'>适用于展期内任何日期</div>
      </div>
      <div class='choose-ticket-type__topic'>早鸟票
        <div class='topic-span'>库存紧张</div>
      </div>
      <div class='choose-ticket-type__kuang'>
        早鸟票全日期通票
        <div class='kuang-span'>适用于展期内任何日期</div>
      </div>
      <div class='choose-ticket-type__kuang choose-ticket-type__kuang1'>
        早鸟票全日期通票
        <div class='kuang-span kuang1-span'>适用于展期内任何日期</div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
  export default {
    name: 'ChooseTicketType'
  }
</script>

<style lang="less" scoped>
  .choose-ticket-type {
    height: 520rpx;
    padding: 0 40rpx;
    &__content {
      height: 100%;
    }
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
      height: 120rpx;
      border-radius: 0 20rpx 0 0;
      background: rgba(0, 0, 0, 0.1);
      font-size: 28rpx;
      padding: 20rpx 30rpx 0;
      margin-top: 20rpx;
      font-weight: bold;
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
  }
</style>
