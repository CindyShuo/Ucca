<template>
  <div class="common-share-btn" @click="showShareBox">
    <image class='button' src='/static/images/footerHandle/share.png'></image>
    <p class="text">分享</p>
  </div>
</template>

<script>
  export default {
    name: 'CommonShareBtn',
    methods: {
      showShareBox () {
        this.$emit('share', true)
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-share-btn {
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
