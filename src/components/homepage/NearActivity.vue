<template>
  <div class="near-activity">
    <common-entry title="近期活动" type="arrow" @navigate="navigate" />
    <div class="near-activity__content">
      <scroll-view scroll-x class="near-activity__scroll">
        <div v-for="(item, i) in list" :key="i" class="item">
          <near-activity-item :item="item" />
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import NearActivityItem from './NearActivityItem'
  import store from '../../store'

  export default {
    name: 'NearActivity',
    components: { CommonEntry, NearActivityItem },
    props: {
      list: Array
    },
    methods: {
      navigate () {
        store.commit('changePurchaseType', 1)
        wx.switchTab({
          url: '/pages/purchase/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .near-activity {
    &__content {
      margin-top: 30rpx;
      padding-left: 40rpx;
    }
    &__scroll {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      width: 100%;
      height: 390rpx;
      .item {
        display: inline-block;
        margin-right: 40rpx;
        &:last-child {
          margin-right: 40rpx;
        }
      }
    }
  }
</style>
