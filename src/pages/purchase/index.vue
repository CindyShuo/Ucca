<template>
  <div class="purchase-index">
    <common-header/>
    <common-tab :arr="arrList" @flag="flagShow"></common-tab>
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
    <common-footer selectNavIndex="1"></common-footer>
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
      }
    }
  }
</script>

<style>
  .purchase-index {
    padding-bottom: 130rpx;
  }
</style>
