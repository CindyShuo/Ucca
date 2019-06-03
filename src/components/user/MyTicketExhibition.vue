<template>
  <div class="my-ticket-exhibition">
    <div class="my-ticket-exhibition__future">
      <common-entry title="待参观的展览" type="none" />
      <div class="list">
        <my-ticket-item type="e1" />
        <my-ticket-item type="e2" />
        <my-ticket-item type="e3" />
        <my-ticket-item type="e4" />
        <my-ticket-item type="e5" />
      </div>
    </div>
    <div class="my-ticket-exhibition__history">
      <common-entry title="历史展票" type="none" />
      <div class="list">
        <my-ticket-item type="e6" />
        <my-ticket-item type="e7" />
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import MyTicketItem from './MyTicketItem'

  export default {
    name: 'MyTicketExhibition',
    components: {
      CommonEntry,
      MyTicketItem
    },
    methods: {
      getList () {
        this.$http.getTicketList('exhibition')
          .then(res => {
            console.log(res)
          })
      },
      goPurchaseSuccess () {
        // 跳转 我的展览票
        wx.navigateTo({
          url: '/pages/purchaseSuccess/main?type=exhibition'
        })
      },
      goReservation () {
        // 去预约
        wx.navigateTo({
          url: '/pages/reservation/main'
        })
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>

<style lang="less" scoped>
  .my-ticket-exhibition {
    padding-top: 134rpx;
    padding-bottom: 30rpx;
    &__history {
      margin-top: 60rpx;
    }
  }
</style>
