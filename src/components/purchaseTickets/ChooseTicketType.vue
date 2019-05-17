<template>
  <div class='most'>
    <div class='topic'>早鸟票
      <div class='topic-span'>库存紧张</div>
    </div>
    <div class='kuang'>
      早鸟票全日期通票
      <div class='kuang-span'>适用于展期内任何日期</div>
    </div>
    <div class='kuang kuang1'>
      早鸟票全日期通票
      <div class='kuang-span kuang1-span'>适用于展期内任何日期</div>
    </div>
    <div class='kuang'>
      早鸟票全日期通票
      <div class='kuang-span'>适用于展期内任何日期</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChooseTicketType'
  }
</script>

<style lang="less" scoped>
  .most {
    padding-top: 60rpx;
    width: 100%;
    height: 520rpx;
    overflow: hidden;
    border-radius: 0 20rpx 0 0;
  }

  .topic {
    width: 100%;
    font-size: 24rpx;
    font-weight: bold;
  }

  .topic-span {
    float: right;
    color: red;
    font-weight: normal;
  }

  .kuang {
    width: 610rpx;
    height: 100rpx;
    border-radius: 0 20rpx 0 0;
    background: rgba(0, 0, 0, 0.1);
    font-size: 28rpx;
    padding: 20rpx 30rpx 0;
    margin-top: 20rpx;
    font-weight: bold;
  }

  .kuang-span {
    font-size: 24rpx;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 10rpx;
    font-weight: normal;
  }

  .kuang1 {
    background: rgba(237, 48, 36, 0.1);
    color: rgb(237, 48, 36);
  }

  .kuang1-span {
    color: rgba(237, 48, 36, 0.4);
  }
</style>
