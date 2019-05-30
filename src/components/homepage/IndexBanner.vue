<template>
  <div class="index-banner">
    <swiper
      autoplay
      circular
      indicator-dots
      indicator-color="rgba(255, 255, 255, .5)"
      indicator-active-color="#ffffff"
      class="swipe"
    >
      <swiper-item
        v-for="(item, i) in list"
        :key="i"
      >
        <image
          :src="item"
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
    .swipe {
      height: 340rpx;
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
