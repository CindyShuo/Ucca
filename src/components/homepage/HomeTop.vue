<template>
  <div class="home-top">
    <image
      :src="banner || ''"
      class="home-top__banner"
    >
    </image>
    <div class="home-top__content">
      <a class="address">
        <image
          src='/static/images/address.png'
          class='address__icon'
        ></image>
        <span>{{ location }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeTop',
    props: {
      banner: String,
      location: String
    }
  }
</script>

<style lang="less" scoped>
  .home-top {
    position: relative;
    width: 100%;
    height: 430rpx;
    border-radius: 0 0 90rpx 90rpx;
    background-color: #232323;
    overflow: hidden;
    &__banner {
      width: 100%;
      height: 100%;
    }
    &__content {
      position: absolute;
      top: 148rpx;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40rpx;
      line-height: 40rpx;
      font-size: 28rpx;
      color: #fff;
      .address {
        display: flex;
        align-items: center;
        &__icon {
          display: block;
          margin-right: 10rpx;
          width: 26rpx;
          height: 32rpx;
        }
      }
    }
  }
</style>
