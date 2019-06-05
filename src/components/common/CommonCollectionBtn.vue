<template>
  <div class="common-collection-btn">
    <a class="common-collection-btn__a">
      <image class='div1' src='/static/images/footerHandle/details-icon2.png'></image>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'CommonCollectionBtn'
  }
</script>

<style lang="less" scoped>
  .common-collection-btn {
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
