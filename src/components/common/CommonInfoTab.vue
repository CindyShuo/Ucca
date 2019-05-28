<template>
  <div class="common-info-tab">
    <a
      v-for="(item, i) in tabList"
      :key="i"
      @click="tabFlag(i)"
      class="common-info-tab__item"
      :class="{ 'is-active': i === value }"
    >{{ item }}</a>
  </div>
</template>

<script>
  export default {
    name: 'CommonInfoTab',
    props: {
      tabList: {
        type: Array,
        required: true
      },
      value: {
        type: Number,
        default: 0
      }
    },
    methods: {
      tabFlag (index) {
        this.$emit('handleChange', index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-info-tab {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    padding: 0 70rpx;
    border-bottom: 1rpx solid rgba(0, 0, 0, .1);
    background: #fff;
    &__item {
      position: relative;
      line-height: 90rpx;
      font-size: 28rpx;
      &.is-active:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1rpx;
        display: block;
        width: 100%;
        height: 4rpx;
        background-color: #ed3024;
      }
    }
  }
</style>
