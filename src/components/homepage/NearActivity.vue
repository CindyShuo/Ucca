<template>
  <div class="near-activity">
    <common-entry title="近期活动" />
    <div class="near-activity__content">
      <swiper
        duration="2000"
        next-margin="40rpx"
        class="swipe"
      >
        <swiper-item
          v-for="(item, i) in 10"
          :key="i"
        >
          <common-activity-item />
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import CommonActivityItem from '../common/CommonActivityItem'

  export default {
    name: 'NearActivity',
    components: { CommonEntry, CommonActivityItem }
  }
</script>

<style lang="less" scoped>
  .near-activity {
    margin-top: 60rpx;
    &__content {
      margin-top: 70rpx;
      .item {
        height: 290rpx;
      }
    }
  }
</style>
