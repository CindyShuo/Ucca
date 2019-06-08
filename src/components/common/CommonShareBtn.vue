<template>
  <div class="common-share-btn">
    <a @click="showShareBox" class="common-share-btn__a">
      <image class='div1' src='/static/images/footerHandle/details-icon3.png'></image>
    </a>
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
