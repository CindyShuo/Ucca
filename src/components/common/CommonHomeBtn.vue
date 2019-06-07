<template>
  <navigator url="/pages/index/main" open-type="switchTab" class="common-home-btn">
    <image class='button' src='/static/images/footerHandle/index.png'></image>
    <p class="text">首页</p>
  </navigator>
</template>

<script>
  export default {
    name: 'CommonHomeBtn'
  }
</script>

<style lang="less" scoped>
  .common-home-btn {
    width: 54rpx;
    .button {
      display: block;
      width: 54rpx;
      height: 54rpx;
    }
    .text {
      line-height: 28rpx;
      font-size: 20rpx;
      color: #232323;
      text-align: center;
    }
  }
</style>
