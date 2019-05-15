<template>
  <div style="padding-bottom: 100rpx">
    <common-header/>
    <common-tab :arr="arrList" @flag="flagShow"></common-tab>
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
    <common-footer selectNavIndex="1"></common-footer>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import CommonHeader from '../../components/common/CommonHeader'
import CommonTab from '@/components/common/CommonTab'
import card from '@/components/card'
import Exhibition from '@/components/PurchaseTickets/Exhibition'
import Activity from '@/components/PurchaseTickets/Activity'
import CommonFooter from '../../components/common/CommonFooter'

export default {
  components: {
    CommonHeader,
    card,
    CommonTab,
    CommonFooter,
    Exhibition,
    Activity
  },

  data () {
    return {
      logs: [],
      imgUrls: [],
      arrList: ['展览', '活动'],
      showContent: 0
    }
  },
  watch: {
    'showContent' (val) {
      this.showContent = val
    }
  },
  methods: {
    flagShow (val) {
      this.showContent = val
    }
  },
  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  onLoad (option) {
    if (option.type) {
      this.showContent = Number(option.type)
    }
  }
}
</script>

<style>


</style>
