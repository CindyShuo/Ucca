<template>
  <div>
    <common-header />
    <common-order-item :orderList="orderList"></common-order-item>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonOrderItem from '@/components/common/CommonOrderItem'
  export default {
    name: 'OrderList',
    components: {
      CommonHeader,
      CommonOrderItem
    },
    data () {
      return {
        orderList: [
          {
            imgSrc: '/static/images/pic.png',
            title: '王音：礼物',
            status: '已选：早鸟全日期通票',
            validityPeriod: '2019.5.12-2019.6-21',
            type: '早鸟票全日期通票',
            money: '￥138',
            number: '1张'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
