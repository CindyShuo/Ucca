<template>
  <div class='activity' style="padding-top: 134rpx">
    <div class="near">
      <common-entry title="近期活动" />
      <common-activity-item />
    </div>
    <div class="history">
      <common-entry title="历史活动" type="date" />
      <common-activity-item />
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../../components/common/CommonEntry'
  import CommonActivityItem from '../common/CommonActivityItem'

  export default {
    name: 'Activity',
    components: {
      CommonEntry,
      CommonActivityItem
    },
    methods: {
      getList (year) {
        this.$http.getList('event', year, 1)
          .then(res => {
            if (year) {
              this.historyList = res.data.items || []
            } else {
              let futureList = []
              let currentList = []
              res.data.items.map(item => {
                if (item.timeType === 'future') {
                  futureList.push(item)
                }
                if (item.timeType === 'current') {
                  currentList.push(item)
                }
              })
              this.futureList = futureList
              this.currentList = currentList
            }
          })
      }
    },
    mounted () {
      this.getList()
      this.getList('2019')
    }
  }
</script>

<style lang="less" scoped>
  .activity {
    .history {
      margin-top: 50rpx;
    }
  }
</style>
