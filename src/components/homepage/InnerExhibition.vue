<template>
  <div class="inner-exhibition">
    <common-entry title="馆内展览" type="arrow" @navigate="navigate" />
    <div class="inner-exhibition__content">
      <scroll-view scroll-x class="inner-exhibition__scroll">
        <div v-for="(item, i) in list" :key="i" class="item">
          <inner-exhibition-item :item="item" />
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import InnerExhibitionItem from './InnerExhibitionItem'
  import store from '../../store'

  export default {
    name: 'InnerExhibition',
    components: { CommonEntry, InnerExhibitionItem },
    props: {
      list: Array
    },
    methods: {
      navigate () {
        store.commit('changePurchaseType', 0)
        wx.switchTab({
          url: '/pages/purchase/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .inner-exhibition {
    margin-top: 60rpx;
    &__content {
      margin-top: 30rpx;
      padding-left: 40rpx;
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
          margin-right: 40rpx;
        }
      }
    }
  }
</style>
