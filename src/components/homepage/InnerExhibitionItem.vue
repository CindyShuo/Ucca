<template>
  <div @click="direction" class="inner-exhibition-item">
    <image
      :src="item.image"
      class="inner-exhibition-item__image"
    ></image>
    <div class="inner-exhibition-item__text">
      <h2 class="title">{{ item.title }}</h2>
      <p class="time">{{ item.open }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InnerExhibitionItem',
    props: {
      item: Object
    },
    methods: {
      direction () {
        wx.navigateTo({
          url: '/pages/exhibitionInfo/main?id=' + this.item.id
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .inner-exhibition-item {
    width: 500rpx;
    border-radius: 0 20rpx 0 0;
    background-color: #fff;
    box-shadow: 0 8rpx 34rpx 0 rgba(0, 0, 0, .1);
    &__image {
      display: block;
       width:500rpx;
       height:280rpx;
       border-radius:0 20rpx 0 0;
    }
    &__text {
      padding: 30rpx 0 30rpx 40rpx;
      .title {
        line-height: 48rpx;
        font-size: 34rpx;
        color: #232323;
      }
      .time {
        margin-top: 10rpx;
        line-height: 32rpx;
        font-size: 24rpx;
        color: #232323;
        opacity: .4;
      }
    }
  }
</style>
