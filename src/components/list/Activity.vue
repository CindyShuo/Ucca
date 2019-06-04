<template>
  <div class='activity' style="padding-top: 134rpx">
    <div v-if="isCollection">
      <div class="collection">
        <common-entry title="我收藏的活动" />
        <common-activity-item
          v-for="(item, i) in collectionList"
          :key="i"
          :item="item"
          :is-collection="true"
        />
      </div>
    </div>
    <div v-else>
      <div class="near">
        <common-entry title="近期活动" />
        <common-activity-item />
      </div>
      <div class="history">
        <common-entry title="历史活动" type="date" @dateChange="dateChange" />
        <common-activity-item />
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import CommonActivityItem from '../common/CommonActivityItem'

  export default {
    name: 'Activity',
    components: {
      CommonEntry,
      CommonActivityItem
    },
    props: {
      isCollection: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        futureList: [],
        currentList: [],
        historyList: [],
        collectionList: []
      }
    },
    methods: {
      getList (year, filterLike) {
        this.$http.getList('event', year, filterLike)
          .then(res => {
            if (!res.data.items) return
            switch (filterLike) {
              case 0: // 收藏列表
                this.collectionList = res.data.items
                break
              case 1: // 购票列表
                if (year) {
                  this.historyList = res.data.items
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
                break
            }
          })
      },
      dateChange (date) {
        this.getList(date)
      }
    },
    mounted () {
      if (this.isCollection) {
        this.getList('', 0)
      } else {
        this.getList('', 1)
        this.getList('2019', 1)
      }
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
