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
          src="https://pics0.baidu.com/feed/18d8bc3eb13533fafa50b63de782251b40345b90.jpeg?token=c744c4b8b930106c3eef7025a19bca6b&s=935B30C682B7D9CC1C5724810300709A"
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
