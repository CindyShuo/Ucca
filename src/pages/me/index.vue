<template>
  <div class="user-info">
    <common-header title="UCCA" navBackgroundColor="#fff" titleColor="#232323"></common-header>
    <div class="user-info__content">
      <div class='avatar'>
        <image class='photo' src='/static/images/photo.png'></image>
        <div class='name'>Anapple</div>
        <div class='name-span'>普通用户</div>
        <image class='arrow' src='/static/images/arrow-white.png'></image>
        <div class="card">
          <image class='card1' src='/static/images/me-banner1.png'></image>
          <div class='card-font'>VIP会员年卡</div>
          <div class='card-number'>NO.23492353</div>
        </div>
      </div>
      <div class='list'>
        <div class='list-content'>
          <image class='me-icon' src='/static/images/me-icon1.png'></image>
          我的票
          <image class='topic-icon me-list-arrow' src='/static/images/arrow.png'></image>
        </div>
        <div class='list-content'>
          <image class='me-icon' src='/static/images/me-icon2.png'></image>
          我的收藏
          <image class='topic-icon me-list-arrow' src='/static/images/arrow.png'></image>
        </div>
        <div class='list-content'>
          <image class='me-icon' src='/static/images/me-icon3.png'></image>
          意见反馈
          <image class='topic-icon me-list-arrow' src='/static/images/arrow.png'></image>
        </div>
        <div class='list-content' style="margin-bottom: 0">
          <image class='me-icon' src='/static/images/me-icon4.png'></image>
          关于我们
          <image class='topic-icon me-list-arrow' src='/static/images/arrow.png'></image>
        </div>
      </div>
    </div>
    <common-footer selectNavIndex="3"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonFooter from '@/components/common/CommonFooter'
  export default {
    name: 'UserInfo',
    components: { CommonHeader, CommonFooter }
  }
</script>

<style lang="less" scoped>
  .user-info {
    &__content {
      .avatar {
        position: relative;
        width: 750rpx;
        height: 292rpx;
        background: #232323;
        border-radius: 0 0 90rpx 90rpx;
        color: #fff;
        .photo {
          width:120rpx;
          height:120rpx;
          position:absolute;
          top:40rpx;
          left:40rpx;
        }
        .name {
          font-size: 42rpx;
          position: absolute;
          top: 47rpx;
          left: 190rpx;
        }
        .name-span {
          position: absolute;
          font-size: 24rpx;
          opacity: 0.6;
          top: 114rpx;
          left: 190rpx;
        }
        .arrow {
          position: absolute;
          width: 20rpx;
          height: 27rpx;
          right: 48rpx;
          top: 99rpx;
        }
        .card {
          position: absolute;
          top: 200rpx;
          left: 74rpx;
          .card1 {
            width: 600rpx;
            height: 168rpx;
            font-size: 30rpx;
            color: #fff;
          }
          .card-font {
            position: absolute;
            top: 38rpx;
            left: 100rpx;
          }
          .card-number {
            left: 30rpx;
            bottom: 40rpx;
            position: absolute;
            font-size: 20rpx;
          }
        }
      }
      .list {
        margin: 110rpx auto 0;
        padding: 50rpx 40rpx;
        width: 590rpx;
        background: #fff;
        border-radius: 0 20rpx 0 0;
        box-shadow: 3rpx 3rpx 35rpx rgba(0, 0, 0, 0.1);
        .list-content {
          height: 55rpx;
          line-height: 55rpx;
          margin-bottom: 60rpx;
        }
        .me-icon {
          width: 55rpx;
          height: 55rpx;
          float: left;
          margin-right: 30rpx;
        }
        .me-list-arrow {
          margin-top: 8rpx;
        }
        .topic-icon {
          float: right;
          width: 22rpx;
          height: 28rpx;
        }
      }
    }
  }
</style>
