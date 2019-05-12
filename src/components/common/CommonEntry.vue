<template>
  <div class="common-entry">
    <p class="common-entry__title">{{ title }}</p>
    <a class="common-entry__arrow">
      <image
        src="/static/images/arrow.png"
        mode="widthFix"
        class="icon-arrow"
      ></image>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'CommonEntry',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-entry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68rpx;
    padding: 0 40rpx;
    &__title {
      font-size: 48rpx;
    }
    &__arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32rpx;
      height: 32rpx;
      .icon-arrow {
        width: 15rpx;
        height: 27rpx;
      }
    }
  }
</style>
