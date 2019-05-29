<template>
  <div class="my-exhibition">
    <common-header :back-visible="true" title="我的收藏" />
    <common-tab :arr="arrList" @flag="flagShow"></common-tab>
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonTab from '@/components/common/CommonTab'
  import Exhibition from '@/components/user/Exhibition'
  import Activity from '@/components/user/Activity'

  export default {
    name: 'MyExhibition',
    components: { CommonHeader, CommonTab, Exhibition, Activity },
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

<style lang="less" scoped>
  .my-exhibition {
    // padding-bottom: 130rpx;
  }
</style>
