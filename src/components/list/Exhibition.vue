<template>
  <div class='exhibition' style="padding-top: 134rpx">
    <div v-if="isCollection">
      <div class="collection">
        <common-entry title="我收藏的展览" />
        <common-exhibition-item
          v-for="(item, i) in collectionList"
          :key="i"
          :item="item"
          :is-collection="true"
        />
      </div>
    </div>
    <div v-else>
      <div class="future">
        <common-entry title="展览预告" />
        <common-exhibition-item
          v-for="(item, i) in futureList"
          :key="i"
          :item="item"
        />
      </div>
      <div class="current">
        <common-entry title="当前展览" />
        <common-exhibition-item
          v-for="(item, i) in currentList"
          :key="i"
          :item="item"
        />
      </div>
      <div class="history">
        <common-entry title="历史展览" type="date" @dateChange="dateChange" />
        <common-exhibition-item
          v-for="(item, i) in historyList"
          :key="i"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'
  import CommonExhibitionItem from '../common/CommonExhibitionItem'

  export default {
    name: 'Exhibition',
    components: {
      CommonEntry,
      CommonExhibitionItem
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
        this.$http.getList('exhibition', year || '', filterLike)
          .then(res => {
            if (filterLike === 0) {
              this.collectionList = res.data.items || []
            }
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
  .exhibition {
    .current,
    .history {
      margin-top: 50rpx;
    }
  }
</style>
