<template>
  <div class="inner-exhibition">
    <common-entry title="馆内展览" goLink="/pages/logs/main" />
    <div class="inner-exhibition__content">
      <swiper
        duration="2000"
        next-margin="180rpx"
        class="swipe"
      >
        <swiper-item
          v-for="(item, i) in 10"
          :key="i"
        >
          <common-exhibition-item />
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import CommonExhibitionItem from '../common/CommonExhibitionItem'

  export default {
    name: 'InnerExhibition',
    components: { CommonEntry, CommonExhibitionItem }
  }
</script>

<style lang="less" scoped>
  .inner-exhibition {
    margin-top: 60rpx;
    &__content {
      margin-top: 30rpx;
      padding-left: 40rpx;
      .swipe {
        height: 490rpx;
      }
    }
  }
</style>
