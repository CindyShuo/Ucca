<template>
  <div class="purchase-index">
    <common-header :have-border="false" />
    <common-tab :tab-list="arrList" v-model="showContent" @handleChange="tabHandle" />
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-if="showContent === 1"></activity>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonTab from '../../components/common/CommonTab'
  import Exhibition from '../../components/list/Exhibition'
  import Activity from '../../components/list/Activity'
  import store from '../../store'

  export default {
    name: 'PurchaseIndex',
    components: {
      CommonHeader,
      CommonTab,
      Exhibition,
      Activity
    },

    data () {
      return {
        arrList: ['展览', '活动'],
        showContent: null
      }
    },
    computed: {
      purchaseType () {
        return store.state.purchaseType
      }
    },
    methods: {
      tabHandle (val) {
        this.showContent = val
      },
      getList () {
        this.$http.getList('exhibition', '', 1)
          .then(res => {
            console.log(res)
          })
      }
    },
    onShow () {
      this.showContent = this.purchaseType || 0
    },
    onHide () {
      this.showContent = null
      store.commit('changePurchaseType', null)
    }
  }
</script>

<style>
  .purchase-index {
    padding-bottom: 30rpx;
  }
</style>
