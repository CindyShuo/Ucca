<template>
  <div class="member-benefits">
    <common-header />
    <div class="member-benefits__title">
      <image class="card" src="/static/images/me-banner4.png"></image>
      <h3>VIP 会员年卡</h3>
      <p class="benefits">办理UCCA会员卡，即享6大权益！</p>
    </div>
    <div class="member-benefits__interests">
      <div class="first-row">
        <div class="detail">
          <image src="/static/images/mfgz.png"></image>
          <p>免费观展</p>
        </div>
        <div class="detail">
          <image src="/static/images/zstd.png"></image>
          <p>专属通道</p>
        </div>
        <div class="detail">
          <image src="/static/images/zshd.png"></image>
          <p>专属活动</p>
        </div>
      </div>
      <div class="first-row second-row">
        <div class="detail">
          <image src="/static/images/jthk.png"></image>
          <p>家庭回馈</p>
        </div>
        <div class="detail">
          <image src="/static/images/xfzk.png"></image>
          <p>消费折扣</p>
        </div>
        <div class="detail">
          <image src="/static/images/qtyh.png"></image>
          <p>其他优惠</p>
        </div>
      </div>
    </div>
    <div class="member-benefits__description">
      <h2>免费观展</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__footer">
      <div class="left">
        <span class="already">已是会员？</span>
        <span class="confirm">立即验证</span>
      </div>
      <a class="button" @click="nextStep">立即办理会员</a>
    </div>
    <common-picker v-if="handle">
      <card @close="close"></card>
    </common-picker>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonPicker from '@/components/common/CommonPicker'
  import Card from '@/components/user/Card'
  export default {
    name: 'MemberBenefits',
    components: { CommonHeader, CommonPicker, Card },
    data () {
      return {
        handle: false
      }
    },
    methods: {
      nextStep () {
        this.handle = true
      },
      // 关闭弹框
      close () {
        this.handle = false
      }
    },
    onLoad (option) {
      if (option.handle) {
        this.handle = Boolean(option.handle)
      }
    }
  }
</script>

<style lang="less" scoped>
  .member-benefits {
    padding-bottom: 170rpx;
    &__title {
      position: relative;
      width: 750rpx;
      height: 232rpx;
      background: #232323;
      border-radius: 0 0 90rpx 90rpx;
      color: #fff;
      .card {
        position: absolute;
        top: 20rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 600rpx;
        height: 340rpx;
      }
      h3 {
        position: absolute;
        top: 76rpx;
        left: 180rpx;
        font-size: 30rpx;
        color: #FFFFFF;
      }
      .benefits {
        position: absolute;
        top: 146rpx;
        left: 120rpx;
        font-size: 24rpx;
        color: #fff;
        opacity: .6;
      }
    }
    &__interests {
      .first-row {
        margin: 218rpx 74rpx 0;
        // padding: 0 74rpx;
        display: flex;
        justify-content: space-around;
        .detail {
          width: 100rpx;
          image {
            display: table;
            width: 100%;
            height: 100rpx;
            border-radius: 50%;
          }
          p {
            margin-top: 20rpx;
            font-size: 24rpx;
            line-height: 24rpx;
            color: #232323;
          }
        }
      }
      .second-row {
        margin: 40rpx 74rpx 0 !important;
        padding-bottom: 30rpx;
        border-bottom: 1rpx solid #ccc;
      }
    }
    &__description {
      margin: 30rpx 80rpx 0;
      h2 {
        margin-bottom: 20rpx;
        font-size: 28rpx;
        line-height: 28rpx;
        color: #232323;
      }
      p {
        font-size: 24rpx;
        line-height: 40rpx;
        opacity: 0.6;
        color: #232323;
      }
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 100rpx;
      background: #232323;
      .left {
        position: relative;
        padding-top: 16rpx;
        flex: 1;
        line-height: 100rpx;
        text-align: center;
        .already {
          position: absolute;
          top: 14rpx;
          left: 74rpx;
          width: 90rpx;
          font-size: 30rpx;
          line-height: 30rpx;
          color: #fff;
          font-weight: 300;
        }
        .confirm {
          font-size: 20rpx;
          line-height: 20rpx;
          color: #FFF;
          opacity: 0.6;
        }
      }
      .button {
        display: block;
        width: 520rpx;
        height: 100rpx;
        background: #ED3024;
        line-height: 100rpx;
        font-size: 30rpx;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
