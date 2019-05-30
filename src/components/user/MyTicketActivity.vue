<template>
  <div class="my-ticket-activity">
    <div class="my-ticket-activity__future">
      <common-entry title="待参加的活动" type="none" />
      <div class="list">
        <my-ticket-item type="a1" />
      </div>
    </div>
    <div class="my-ticket-activity__history">
      <common-entry title="历史展票" type="none" />
      <div class="list">
        <my-ticket-item type="a2" />
        <my-ticket-item type="a3" />
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import MyTicketItem from './MyTicketItem'

  export default {
    name: 'MyTicketActivity',
    components: {
      CommonEntry,
      MyTicketItem
    },
    methods: {
      goPurchaseSuccess () {
        // 跳转 我的展览票
        wx.navigateTo({
          url: '/pages/purchaseSuccess/main?type=activity'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-ticket-activity {
    padding-top: 134rpx;
    padding-bottom: 30rpx;
    &__history {
      margin-top: 60rpx;
    }
  }
</style>
