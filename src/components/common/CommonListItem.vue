<template>
  <div
    class="common-list-item"
    :style="{
      margin: margin,
      padding: padding
    }"
    @click="clickHandle"
  >
    <image
      :src='icon'
      class='icon'
    ></image>
    <p>{{ text }}</p>
    <div class="blank"></div>
    <common-arrow area-width="24rpx" area-height="24rpx" arrow-width="12rpx" arrow-height="20rpx" />
  </div>
</template>

<script>
  import CommonArrow from './CommonArrow'

  export default {
    name: 'CommonListItem',
    components: { CommonArrow },
    props: {
      icon: String,
      text: String,
      margin: {
        type: String,
        default: '0 0 60rpx 0'
      },
      padding: String,
      clickHandle: Function
    }
  }
</script>

<style lang="less" scoped>
  .common-list-item {
    display: flex;
    align-items: center;
    .icon {
      display: block;
      margin-right: 30rpx;
      width: 54rpx;
      height: 54rpx;
    }
    p {
      line-height: 54rpx;
      font-size: 30rpx;
      color: #232323;
    }
    .blank {
      flex-grow: 1;
    }
  }
</style>
