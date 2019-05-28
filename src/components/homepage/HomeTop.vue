<template>
  <image
    :src="banner || ''"
    class="home-top"
  >
    <div class="home-top__content">
      <a class="address">
        <image
          src='/static/images/address.png'
          class='address__icon'
        ></image>
        <span>{{ location }}</span>
      </a>
      <a class="locale">EN</a>
    </div>
  </image>
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
    width: 100%;
    height: 282rpx;
    border-radius: 0 0 90rpx 90rpx;
    background-color: #232323;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40rpx;
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
