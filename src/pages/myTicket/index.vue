<template>
  <div class="my-ticket">
    <common-header title="我的票" :back-visible="true" :have-border="false" />
    <common-tab :tab-list="arrList" v-model="showContent" @handleChange="tabHandle" />
    <my-ticket-exhibition v-if="showContent === 0"></my-ticket-exhibition>
    <my-ticket-activity v-else></my-ticket-activity>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonTab from '../../components/common/CommonTab'
  import MyTicketExhibition from '../../components/user/MyTicketExhibition'
  import MyTicketActivity from '../../components/user/MyTicketActivity'

  export default {
    name: 'MyTicket',
    components: { CommonHeader, CommonTab, MyTicketExhibition, MyTicketActivity },
    data () {
      return {
        arrList: ['展览', '活动'],
        showContent: 0
      }
    },
    methods: {
      tabHandle (val) {
        this.showContent = val
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-ticket {

  }
</style>
