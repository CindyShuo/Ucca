<template>
  <p class="common-member" :style="{ margin: margin }">UCCA会员</p>
</template>

<script>
  export default {
    name: 'CommonMember',
    props: {
      margin: String
    }
  }
</script>

<style lang="less" scoped>
  .common-member {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86rpx;
    height: 24rpx;
    border: 1rpx solid #ed3024;
    border-radius: 0 8rpx 0 0;
    font-size: 16rpx;
    color: #ed3024;
  }
</style>
