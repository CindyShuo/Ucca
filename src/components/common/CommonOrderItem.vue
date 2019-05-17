<template>
  <div class='order-index'>
    <div class='order-index__top' v-for="(item, index) in orderList" :key="index">
      <image class='pic' :src='item.imgSrc'></image>
      <div class='font'>
        <div class='font-1'>{{ item.title }}</div>
        <div class='font-2'>{{ item.status }}</div>
        <div class='font-2'>{{ item.validityPeriod }}</div>
      </div>
      <div class='line order-line'></div>
      <div class='list order-font'>{{ item.type }}
        <div class='list-span list-span1'><span>{{ item.money }}</span> X {{ item.number }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonOrderItem',
    props: {
      orderList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .order-index {
    &__top {
      position: relative;
      padding: 40rpx;
      width: 670rp;
      height: 285rpx;
      background: #fff;
      border-top: 1rpx solid rgba(0,0,0,.1);
      .pic {
        margin: auto;
        width: 230rpx;
        height: 180rpx;
        float: left;
      }
      .font {
        float: left;
        margin-left: 30rpx;
        .font-1 {
          margin-top: 5rpx;
          font-size: 34rpx;
        }
        .font-2 {
          font-size: 24rpx;
          margin-top: 10rpx;
        }
      }
      .order-line{
        position: absolute;
        width: 670rpx;
        top: 232rpx;
      }
      .line {
        margin-top: 20rpx;
        width: 100%;
        height: 1rpx;
        background: rgba(0, 0, 0, 0.1);
        clear: both;
      }
      .list {
        margin-top: 70rpx;
        font-size: 28rpx;
        font-weight: bold;
        .list-span {
          font-size: 24rpx;
          float: right;
        }
        .list-span1 span {
          font-size: 30rpx;
        }
      }
      .order-font {
        position: absolute;
        bottom: 0;
        width: 670rpx;
        height: 110rpx;
        line-height: 110rpx;
      }
    }
  }
</style>
