<template>
  <div class="exhibition-hall">
    <common-header title="当代文明启示录" navBackgroundColor="#6F5654" titleColor="#fff" />
    <div class="exhibition-hall__map">
      <image src="" class="img"></image>
      <div class="arrow">
        <image class="arrow-pic" src="/static/images/arrow-white.png"></image>
      </div>
    </div>
    <scroll-view scroll-y class="exhibition-hall__content">
      <div class="item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="card">
          <h2><span class="hall">序</span>文明：当代生活启示录</h2>
        </div>
      </div>
      <h2 class="title">一、蜂巢</h2>
      <div>
        <div class="item">
          <image class="pic" src="/static/images/pic.png"></image>
          <div class="card">
            <h2><span class="hall">1</span>《墨西哥城鸟瞰图，XIII》</h2>
            <p>帕布罗·洛佩兹·鲁兹 | 2006</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div>
        <div class="item" style="clear: both">
          <image class="pic" src="/static/images/pic.png"></image>
          <div class="card">
            <h2><span class="hall">2</span>《无题》</h2>
            <p>帕布罗·洛佩兹·鲁兹 | 2006</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div>
        <div class="item" style="clear: both">
          <image class="pic" src="/static/images/pic.png"></image>
          <div class="card">
            <h2><span class="hall">3</span>《无题》</h2>
            <p>帕布罗·洛佩兹·鲁兹 | 2006</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'ExhibitionHall',
    components: { CommonHeader }
  }
</script>

<style lang="less" scoped>
  .exhibition-hall {
    &__map {
      position: relative;
      padding: 40rpx 62rpx;
      background: #6F5654;
      .img {
        width: 620rpx;
        height: 308rpx;
        border: 2rpx solid #fff;
      }
      .arrow {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        display: inline-block;
        width: 100rpx;
        height: 30rpx;
        line-height: 30rpx;
        text-align: center;
        background: #000;
        opacity: 0.6;
        .arrow-pic {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 100;
          width: 30rpx;
          height: 54rpx;
          transform: translate(-50%, -50%) rotate(-90deg) scale(.4);
        }
      }
    }
    &__content {
      // margin-top: 200rpx;
      padding: 30rpx;
      .item {
        padding: 20rpx;
        display: flex;
        align-items: center;
        background: #fff;
        box-shadow: 0 12px 34px 0 rgba(0,0,0,0.05);
        .pic {
          width: 166rpx;
          height: 166rpx;
        }
        .card {
          margin-left: 30rpx;
          display: flex;
          flex-direction: column;
          .hall {
            margin-right: 4rpx;
            display: inline-block;
            width: 32rpx;
            height: 32rpx;
            font-size: 16rpx;
            line-height: 32rpx;
            color: #FFF;
            text-align: center;
            background: #232323;
            border-radius: 50%;
            vertical-align: top;
          }
          h2 {
            margin: 14rpx 0 20rpx;
            font-size: 34rpx;
            line-height: 34rpx;
          }
          p {
            padding-left: 36rpx;
            font-size: 24rpx;
            line-height: 24rpx;
            opacity: 0.6;
          }
        }
      }
      .line {
        margin-top: -1rpx;
        float: right;
        width: 530rpx;
        height: 1rpx;
        border-bottom: 2rpx solid #232323;
        opacity: 0.1;
      }
      .title {
        margin: 30rpx 0;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
  }
</style>
