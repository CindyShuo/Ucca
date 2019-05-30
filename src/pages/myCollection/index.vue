<template>
  <div class="my-collection">
    <common-header :back-visible="true" title="我的收藏" :have-border="false" />
    <common-tab :ifFixed="fixedStyle" :tab-list="arrList" v-model="showContent" @handleChange="tabHandle" />
    <exhibition v-if="showContent === 0"></exhibition>
    <activity v-else></activity>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonTab from '../../components/common/CommonTab'
  import Exhibition from '../../components/user/Exhibition'
  import Activity from '../../components/user/Activity'

  export default {
    name: 'MyExhibition',
    components: { CommonHeader, CommonTab, Exhibition, Activity },
    data () {
      return {
        arrList: ['展览', '活动'],
        showContent: 0,
        fixedStyle: 'position: fixed; top: 128rpx; left: 0;z-index: 102'
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
  .my-collection {

  }
</style>
