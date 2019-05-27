<template>
  <div class="my-ticket-activity">
    <common-entry title="待参观的展览" type="none" />
    <div style="margin-bottom: 60rpx">
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png" @click="goPurchaseSuccess"></image>
        </div>
        <!-- 普通票状态 -->
        <div class="status">
          <div class="operating">
            <a>活动已预约</a>
          </div>
          <div class="ticket" style="text-align: right">
            <p>活动普通票</p>
            <p>x1</p>
          </div>
        </div>
      </div>
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png"></image>
        </div>
        <div class="status">
          <div class="ticket">
            <p>早鸟全日期通票</p>
            <p>x1</p>
          </div>
          <div class="operating">
            <a>去预约 ></a>
          </div>
        </div>
      </div>
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png"></image>
        </div>
        <!-- 已预约状态 -->
        <div class="status">
          <div class="operating">
            <p>已约待参观</p>
            <p>19.08.19 13:00-14:00</p>
          </div>
          <div class="ticket" style="text-align: right">
            <p>毕加索+文明 联展票</p>
            <p>x1</p>
          </div>
        </div>
      </div>
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png"></image>
        </div>
        <!-- 普通票状态 -->
        <div class="status">
          <div class="operating">
            <a style="color: #ED3024;opacity: 0.6;">即将过期</a>
          </div>
          <div class="ticket" style="text-align: right">
            <p>会员免费票</p>
            <p>x1</p>
          </div>
        </div>
      </div>
    </div>
    <common-entry title="历史展票" type="none" />
    <div>
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png"></image>
        </div>
        <div class="status">
          <div class="operating">
            <a style="opacity: 0.6;">活动已参与</a>
          </div>
          <div class="ticket" style="text-align: right">
            <p>活动普通票</p>
            <p>x3</p>
          </div>
        </div>
      </div>
      <div class="my-ticket-activity__item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="content">
          <div class="top">
            <h3>王音：礼物</h3>
            <p class="time">2019.6.15 - 2019.9.1</p>
            <p class="time">UCCA尤伦斯当代艺术中心（北京798）</p>
          </div>
          <image class="erweima" src="/static/images/ma.png"></image>
        </div>
        <div class="status">
          <div class="operating">
            <a style="opacity: 0.6;">活动已过期</a>
          </div>
          <div class="ticket" style="text-align: right">
            <p>活动普通票</p>
            <p>x1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '@/components/common/CommonEntry'
  export default {
    name: 'MyTicketActivity',
    components: {
      CommonEntry
    },
    methods: {
      goPurchaseSuccess () {
        // 跳转 我的展览票
        wx.navigateTo({
          url: '/pages/purchaseSuccess/main?type=activity'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-ticket-activity {
    padding-top: 50rpx;
    &__item {
      position: relative;
      margin: 30rpx 40rpx 0;
      width: 670rpx;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 200rpx;
        left: -12rpx;
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
        top: 200rpx;
        right: -12rpx;
        z-index: 100;
        width: 24rpx;
        height: 30rpx;
        background: #f8f8f8;
        box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
        border-radius: 50%;
      }
      .pic {
        position: relative;
        width: 100%;
        height: 214rpx;
        display: table;
      }
      .content {
        position: absolute;
        left: 0;
        top: 0;
        padding: 40rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 214rpx;
        h3 {
          font-size: 34rpx;
          line-height: 34rpx;
          color: #FFF;
        }
        .time {
          margin-top: 14rpx;
          font-size: 24rpx;
          color: #fff;
          opacity: 0.8;
        }
        .erweima {
          width: 28rpx;
          height: 28rpx;
        }
      }
      .status {
        padding: 40rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 160rpx;
        line-height: 160rpx;
        background: #fff;
        .ticket {
          p {
            font-size: 24rpx;
            line-height: 24rpx;
            color: #232323;
            opacity: 0.6;
            &:last-child {
              margin-top: 10rpx;
            }
            .ucca {
              display: inline-block;
              padding: 0 4rpx;
              font-size: 16rpx;
              line-height: 20rpx;
              color: #ED3024;
              border: 1px solid #ed3024;
            }
          }
        }
        .operating {
          a {
            display: inline-block;
            font-size: 28rpx;
            line-height: 160rpx;
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
  }
</style>
