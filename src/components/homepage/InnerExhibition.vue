<template>
  <div class="inner-exhibition">
    <common-entry title="馆内展览" goLink="/pages/purchase/main?type=0" />
    <div class="inner-exhibition__content">
      <!--<swiper-->
        <!--duration="2000"-->
        <!--next-margin="180rpx"-->
        <!--class="swipe"-->
      <!--&gt;-->
        <!--<swiper-item-->
          <!--v-for="(item, i) in list"-->
          <!--:key="i"-->
        <!--&gt;-->
          <!--<common-exhibition-item :item="item" />-->
        <!--</swiper-item>-->
      <!--</swiper>-->
      <scroll-view scroll-x class="inner-exhibition__scroll">
        <div v-for="(item, i) in list" :key="i" class="item">
          <common-exhibition-item :item="item" />
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import CommonExhibitionItem from '../common/CommonExhibitionItem'

  export default {
    name: 'InnerExhibition',
    components: { CommonEntry, CommonExhibitionItem },
    props: {
      list: Array
    }
  }
</script>

<style lang="less" scoped>
  .inner-exhibition {
    margin-top: 60rpx;
    &__content {
      margin-top: 30rpx;
      padding: 0 40rpx;
      .swipe {
        height: 490rpx;
      }
    }
    &__scroll {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      width: 100%;
      height: 490rpx;
      .item {
        display: inline-block;
        margin-right: 30rpx;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
