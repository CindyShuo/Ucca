<template>
  <div class="common-entry">
    <p class="common-entry__title">{{ title }}</p>
    <a class="common-entry__arrow" v-if="!type">
      <image
        src="/static/images/arrow.png"
        mode="widthFix"
        class="icon-arrow"
      ></image>
    </a>
    <picker
      v-else-if="type === 'date'"
      mode="date"
      fields="year"
      start="2005"
      end="2019"
      bindchange="bindDateChange"
    >
      <view class="common-entry_picker">
        {{ defaultDate }}
      </view>
    </picker>
  </div>
</template>

<script>
  export default {
    name: 'CommonEntry',
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String
      }
    },
    data () {
      return {
        defaultDate: '2010'
      }
    },
    methods: {
      bindDateChange (e) {
        this.setData({
          defaultDate: e.detail.value
        })
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
  .common-entry_picker {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
</style>
