<template>
  <div class="my-collection">
    <common-header :back-visible="true" title="我的收藏" :have-border="false" />
    <common-tab :tab-list="arrList" v-model="showContent" @handleChange="tabHandle" />
    <exhibition :is-collection="true" v-if="showContent === 0"></exhibition>
    <activity :is-collection="true" v-if="showContent === 1"></activity>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonTab from '../../components/common/CommonTab'
  import Exhibition from '../../components/list/Exhibition'
  import Activity from '../../components/list/Activity'

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
      tabHandle (val) {
        this.showContent = val
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-collection {
    padding-bottom: 30rpx;
  }
</style>
