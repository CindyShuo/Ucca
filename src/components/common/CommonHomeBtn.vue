<template>
  <div class="common-home-btn">
    <navigator url="/pages/index/main" open-type="switchTab" class="common-home-btn__a">
      <image class='div1' src='/static/images/footerHandle/details-icon1.png'></image>
    </navigator>
  </div>
</template>

<script>
  export default {
    name: 'CommonHomeBtn'
  }
</script>

<style lang="less" scoped>
  .common-home-btn {
    display: inline-block;
    width: 82rpx;
    height: 100%;
    &__a {
      display: inline-block;
      width: 82rpx;
      height: 100%;
      .div1 {
        width: 82rpx;
        height: 100%;
      }
    }
  }
</style>
