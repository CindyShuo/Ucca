<template>
  <div class="reservation-index">
    <common-header backToPrevious="true" title="展览预约" navBackgroundColor="#fff" titleColor="#232323"></common-header>
    <div class='reservation-index__top'>
      <image class='pic' src='/static/images/pic.png'></image>
      <div class='font'>
        <div class='font-1'>王音：礼物</div>
        <div class='font-2'>尤伦斯当代艺术中心（北京798）</div>
        <div class='font-2'>2019.6.15-2019.9.1</div>
      </div>
    </div>
    <common-entry title="请选择预约日期" type="none" />
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'Reservation',
    components: { CommonHeader, CommonEntry }
  }
</script>

<style lang="less" scoped>
  .reservation-index {
    &__top {
      position: relative;
      padding: 40rpx;
      margin-bottom: 40rpx;
      width: 670rp;
      height: 262rpx;
      background: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      .pic {
        margin: 0 auto 30rpx;
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
        .font-3 {
          font-size: 42rpx;
          margin-top: 25rpx;
        }
      }
      .list {
        font-size: 30rpx;
        color: #232323;
        font-weight: bold;
        line-height: 30rpx;
        .list-span {
          font-size: 30rpx;
          line-height: 30rpx;
          float: right;
        }
        .list-span1 span {
          font-size: 30rpx;
          line-height: 30rpx;
        }
      }
      .order-font {
        width: 670rpx;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
  }
</style>
