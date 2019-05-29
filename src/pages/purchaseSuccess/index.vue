<template>
  <div class="purchase-success">
    <common-header :back-visible="true" :title="flag === 'exhibition' ? '我的展览票' : flag === 'activity' ? '我的活动' : '购票成功'" />
    <div class="purchase-success__content">
      <image class="pic" src="/static/images/pic.png"></image>
      <div class="details">
        <h3>王音：礼物</h3>
        <p class="time">2019.6.15 - 2019.9.1</p>
        <p class="address">UCCA尤伦斯当代艺术中心（北京798）</p>
        <image class="erweima"></image>
        <!-- 未预约状态 -->
        <div class="status">
          <div class="ticket">
            <p>早鸟全日期通票</p>
            <p>x1</p>
          </div>
          <div class="operating">
            <a @click="goReservation">去预约 ></a>
          </div>
        </div>
        <!-- 已预约状态 -->
        <!-- <div class="status"> -->
        <!--    <div class="operating"> -->
        <!--       <p>已约待参观</p> -->
        <!--       <p>19.08.19 13:00-14:00</p> -->
        <!--    </div>-->
        <!--    <div class="ticket" style="text-align: right"> -->
        <!--       <p>毕加索+文明 联展票</p> -->
        <!--       <p>x1</p> -->
        <!--    </div> -->
        <!-- </div> -->
        <!-- 普通票状态 -->
        <!-- <div class="status"> -->
        <!--    <div class="operating"> -->
        <!--       <a>待参观</a> -->
        <!--    </div> -->
        <!--    <div class="ticket" style="text-align: right"> -->
        <!--       <p>会员免费票</p> -->
        <!--       <p>x1</p> -->
        <!--    </div> -->
        <!-- </div> -->
      </div>
    </div>
    <div class="purchase-success__precautions">
      <p class="tip">注意事项</p>
      <p class="tip-content">1、票务一经售出不退不换；</p>
    </div>
    <div class="purchase-success__footer">
      <a @click="goHome">返回首页</a>
      <a @click="goMyTicket">查看我的展览票</a>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'PurchaseSuccess',
    components: { CommonHeader },
    data () {
      return {
        flag: ''
      }
    },
    methods: {
      goHome () {
        // 返回首页
        wx.navigateTo({
          url: '/pages/index/main'
        })
      },
      goMyTicket () {
        // 跳转 查看我的展览票
        wx.navigateTo({
          url: '/pages/myTicket/main'
        })
      },
      goReservation () {
        // 去预约
        wx.navigateTo({
          url: '/pages/reservation/main'
        })
      }
    },
    onLoad (option) {
      if (option.type) {
        this.flag = option.type
      }
    }
  }
</script>

<style lang="less" scoped>
  .purchase-success {
    position: relative;
    padding-bottom: 130rpx;
    height: 100%;
    &__content {
      position: relative;
      padding: 40rpx 76rpx 30rpx;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 225rpx;
        left: 64rpx;
        z-index: 100;
        width: 24rpx;
        height: 30rpx;
        background: #f8f8f8;
        box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
        border-radius: 50%;
      }
      &:before {
        content: '';
        position: absolute;
        top: 225rpx;
        right: 64rpx;
        width: 24rpx;
        height: 30rpx;
        background: #f8f8f8;
        box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
        border-radius: 50%;
      }
      .pic {
        margin: 0 auto;
        display: table;
        width: 600rpx;
        height: 200rpx;
      }
      .details {
        padding: 40rpx;
        display: table;
        width: 100%;
        background: #fff;
        box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
        border-radius: 0 0 10rpx 10rpx;
        h3 {
          font-size: 34rpx;
          line-height: 34rpx;
          color: #232323;
        }
        .time, .address {
          font-size: 24rpx;
          line-height: 24rpx;
          color: #232323;
          opacity: 0.8;
        }
        .time {
          margin: 20rpx 0;
        }
        .erweima {
          margin: 40rpx auto 86rpx;
          display: block;
          width: 340rpx;
          height: 340rpx;
          border: 1px solid #232323;
        }
      }
      .status {
        display: flex;
        height: 60rpx;
        line-height: 60rpx;
        .ticket {
          flex: 1;
          p {
            font-size: 24rpx;
            line-height: 24rpx;
            color: #232323;
            opacity: 0.6;
            &:last-child {
              margin-top: 10rpx;
            }
          }
        }
        .operating {
          a {
            font-size: 28rpx;
            line-height: 60rpx;
            color: #232323;
          }
          p {
            font-size: 28rpx;
            line-height: 28rpx;
            color: #232323;
            &:last-child {
              margin-top: 10rpx;
              font-size: 24rpx;
              line-height: 24rpx;
              opacity: 0.6;
            }
          }
        }
      }
    }
    &__precautions {
      padding: 0 76rpx;
      p {
        font-size: 24rpx;
        line-height: 30rpx;
        color: #232323;
      }
      .tip {
        margin-bottom: 10rpx;
      }
      .tip-content {
        opacity: 0.6;
      }
    }
    &__footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid rgba(0,0,0,0.1);
      a {
        display: inline-block;
        width: 50%;
        height: 98rpx;
        font-size: 30rpx;
        line-height: 98rpx;
        color: #232323;
        text-align: center;
        background: #fff;
        &:first-child {
          border-right: 1px solid #D4D4D4;
        }
      }
    }
  }
</style>
