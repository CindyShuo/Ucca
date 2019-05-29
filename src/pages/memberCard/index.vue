<template>
  <div class="member-card">
    <common-header title="我的会员卡" :back-visible="true" />
    <div class="member-card__card">
      <image class="pic" src="/static/images/me-banner3.png"></image>
      <div class="erweima">
        <p class="number">NO.23492353</p>
        <image class="img" src="/static/images/ma.png"></image>
        <p class="refresh">会员二维码实时刷新</p>
      </div>
    </div>
    <div class="member-card__link">
      <div class="benefits" @click="benefits">
        <a>会员权益</a>
        <image src="/static/images/go.png"></image>
      </div>
      <div class="benefits" style="margin-top: 60rpx;" @click="renewalFee">
        <a>会员续费</a>
        <image src="/static/images/go.png"></image>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'MemberCard',
    components: { CommonHeader },
    methods: {
      benefits () {
        // 跳会员权益页面
        wx.navigateTo({
          url: '/pages/memberBenefits/main'
        })
      },
      renewalFee () {
        // 跳到续费页面
        wx.navigateTo({
          url: '/pages/memberBenefits/main?handle=true'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .member-card {
    &__card {
      padding: 0 76rpx;
      .pic {
        margin-top: 40rpx;
        width: 600rpx;
        height: 378rpx;
      }
      .erweima {
        padding: 40rpx 130rpx 50rpx;
        .number {
          font-size: 24rpx;
          text-align: center;
        }
        .img {
          margin: 20rpx 0 30rpx;
          width: 340rpx;
          height: 340rpx;
        }
        .refresh {
          font-size: 24rpx;
          text-align: center;
          opacity: 0.4;
        }
      }
    }
    &__link {
      margin-top: 40rpx;
      padding: 40rpx 50rpx;
      width: 100%;
      background: #fff;
      .benefits {
        display: flex;
        justify-content: space-between;
        height: 32rpx;
        line-height: 32rpx;
        a {
          font-size: 28rpx;
          color: #232323;
        }
        image {
          width: 20rpx;
          height: 28rpx;
        }
      }
    }
  }
</style>
