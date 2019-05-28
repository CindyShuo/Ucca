<template>
  <div class="purchase-index">
    <common-header />
    <common-tab :arr="arrList" @flag="flagShow" />
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonTab from '../../components/common/CommonTab'
  import Exhibition from '../../components/purchaseTickets/Exhibition'
  import Activity from '../../components/purchaseTickets/Activity'
  import CommonFooter from '../../components/common/CommonFooter'

  export default {
    name: 'PurchaseIndex',
    components: {
      CommonHeader,
      CommonTab,
      Exhibition,
      Activity,
      CommonFooter
    },

    data () {
      return {
        arrList: ['展览', '活动'],
        showContent: 0
      }
    },
    methods: {
      flagShow (val) {
        this.showContent = val
      },
      getList () {
        this.$http.getList('exhibition', '', 1)
          .then(res => {
            console.log(res)
          })
      }
    },
    onLoad (option) {
      if (option.type) {
        this.showContent = Number(option.type)
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>

<style>
  .purchase-index {
    padding-bottom: 30rpx;
  }
</style>
