<template>
  <div class="guide-index">
    <common-header title="UCCA尤伦斯当代艺术中心" navBackgroundColor="#fff" titleColor="#232323" />
    <div class="guide-index__content">
      <image class="map"></image>
      <div class="item" @click="goExhibitionHall">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="card">
          <span class="hall">大展厅</span>
          <h2>文明：当代生活启示录</h2>
          <p>34件作品</p>
        </div>
      </div>
      <div class="item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="card">
          <span class="hall">中展厅</span>
          <h2>“邱志杰：寰宇全图”系列</h2>
          <p>34件作品</p>
        </div>
      </div>
      <div class="item">
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="card">
          <span class="hall">新展厅</span>
          <h2>毕加索：天才的诞生</h2>
          <p>34件作品</p>
        </div>
      </div>
    </div>
    <common-footer selectNavIndex="2"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonFooter from '../../components/common/CommonFooter'
  export default {
    name: 'Guide',
    components: { CommonHeader, CommonFooter },
    methods: {
      goExhibitionHall () {
        wx.navigateTo({
          url: '/pages/exhibitionHall/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .guide-index {
    padding-bottom: 130rpx;
    &__content {
      padding: 40rpx 40rpx 0;
      .map {
        width: 650rpx;
        height: 546rpx;
        opacity: 0.2;
        border: 6px solid #232323;
        border-radius: 5rpx;
      }
      .item {
        margin-top: 20rpx;
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
            display: block;
            width: 64rpx;
            height: 24rpx;
            font-size: 16rpx;
            line-height: 24rpx;
            color: #FFF;
            text-align: center;
            background: #232323;
          }
          h2 {
            margin: 14rpx 0 20rpx;
            font-size: 34rpx;
            line-height: 34rpx;
          }
          p {
            font-size: 24rpx;
            line-height: 24rpx;
            opacity: 0.6;
          }
        }
      }
    }
  }
</style>
