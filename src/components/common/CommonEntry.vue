<template>
  <div class="common-entry">
    <p class="common-entry__title" v-bind:style="titleFontStyle">{{ title }}</p>
    <a class="common-entry__arrow" v-if="!type">
      <p v-if="description" class="description-content">共24件作品</p>
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
      <image class='topic-icon1' src='/static/images/arrow1.png'></image>
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
      },
      titleFontStyle: {
        type: String
      },
      description: {
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
      // width: 32rpx;
      height: 32rpx;
      line-height: 32rpx;
      .description-content {
        margin-right: 20rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        color: #232323;
        vertical-align: top;
      }
      .icon-arrow {
        width: 15rpx;
        height: 27rpx;
      }
    }
  }
  .common-entry_picker {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
  }
  .topic-icon1 {
    display: inline-block;
    width: 21rpx;
    height: 12rpx;
    margin-top: 32rpx;
    margin-left: 15rpx;
  }
</style>
