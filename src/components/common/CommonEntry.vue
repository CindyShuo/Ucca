<template>
  <div class="common-entry">
    <p class="common-entry__title" v-bind:style="titleFontStyle">{{ title }}</p>
    <a class="common-entry__arrow" v-if="!type" :href="goLink">
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
      :value="defaultDate"
      fields="year"
      start="2005-01-01"
      end="2019-01-01"
      bindchange="bindDateChange"
    >
      <div class="common-entry_picker">
        {{ defaultDate }}
      </div>
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
      },
      goLink: {
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
        console.log(e.detail, 'e.detail')
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
        width: 16rpx;
        height: 28rpx;
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
    width: 20rpx;
    height: 12rpx;
    margin-top: 20rpx;
    margin-left: 14rpx;
  }
</style>
