<template>
  <div>
    <common-tab :arr="arrList" @flag="flagShow"></common-tab>
<!--    <view class='top-menu'>-->
<!--      <view class='top-menu-p'>展览</view>-->
<!--      <view class='top-menu-p1'>活动</view>-->
<!--    </view>-->
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
    <common-footer></common-footer>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import CommonTab from '@/components/common/CommonTab'
import card from '@/components/card'
import Exhibition from '@/components/PurchaseTickets/Exhibition'
import Activity from '@/components/PurchaseTickets/Activity'
import CommonFooter from '../../components/common/CommonFooter'

export default {
  components: {
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
  }
}
</script>

<style>


</style>
