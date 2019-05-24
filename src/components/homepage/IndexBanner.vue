<template>
  <div class="index-banner">
    <swiper
      duration="2000"
      next-margin="180rpx"
      class="swipe"
    >
      <swiper-item
        v-for="(item, i) in list"
        :key="i"
      >
        <image
          src="/static/images/banner.png"
          class="image"
        ></image>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'IndexBanner',
    props: {
      list: Array
    }
  }
</script>

<style lang="less" scoped>
  .index-banner {
    display: block;
    margin: -212rpx auto 0;
    width: 670rpx;
    height: 340rpx;
  }
</style>
