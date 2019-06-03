<template>
  <div class='exhibition' style="padding-top: 134rpx">
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
</template>

<script>
  import CommonEntry from '../../components/common/CommonEntry'
  import CommonExhibitionItem from '../common/CommonExhibitionItem'

  export default {
    name: 'Exhibition',
    components: {
      CommonEntry,
      CommonExhibitionItem
    },
    props: {
      type: {
        type: String
      }
    },
    data () {
      return {
        futureList: [],
        currentList: [],
        historyList: []
      }
    },
    methods: {
      getList (year) {
        this.$http.getList('exhibition', year, 1)
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
      },
      dateChange (date) {
        this.getList(date)
      }
    },
    mounted () {
      this.getList()
      this.getList('2019')
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
