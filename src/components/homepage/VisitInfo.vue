<template>
  <div class="visit-info">
    <common-entry type="none" title="参观信息" />
    <div class="visit-info__content">
      <div class="text">
        <h3 class="text--style-1">开放时间</h3>
        <div class="text__info">
          <p class="text--style-2"> {{ info.open }}</p>
          <span class="text--style-1">(最后入场时间：18:30)</span>
        </div>
      </div>
      <div class="text">
        <h3 class="text--style-1">联系我们</h3>
        <div class="text__info">
          <image
            src="/static/images/phone.png"
            class="info-image info-image--phone"
          ></image>
          <p class="text--style-2">{{ info.phone }}</p>
        </div>
        <div class="text__info text__info--height-30">
          <image
            src="/static/images/email.png"
            class="info-image info-image--email"
          ></image>
          <p class="text--style-2">{{ info.email }}</p>
        </div>
      </div>
      <div class="text">
        <h3 class="text--style-1">参观地址</h3>
        <div class="text__info">
          <p class="text--style-2">{{ info.address }}</p>
        </div>
      </div>
      <map
        id="myMap"
        style="width: 670rpx; height: 360rpx;"
        :latitude="info.lat"
        :longitude="info.lng"
        :markers="markers"
        :covers="covers"
        show-location
      ></map>
    </div>
  </div>
</template>

<script>
  import CommonEntry from '../common/CommonEntry'

  export default {
    name: 'VisitInfo',
    components: { CommonEntry },
    props: {
      info: Object
    }
  }
</script>

<style lang="less" scoped>
  .visit-info {
    &__content {
      margin: 30rpx auto 0;
      width: 670rpx;
      height: 906rpx;
      background: #fff;
      box-shadow: 3rpx 3rpx 35rpx rgba(0, 0, 0, .1);
      .text {
        padding: 60rpx 0 0 50rpx;
        &__info {
          display: flex;
          align-items: center;
          height: 80rpx;
          &--height-30 {
            height: 30rpx;
          }
        }
        &--style-1 {
          font-size: 24rpx;
          color: #232323;
          opacity: .6;
        }
        &--style-2 {
          line-height: 30rpx;
          font-size: 30rpx;
          color: #232323;
        }
        .info-image {
          display: block;
          margin-right: 20rpx;
          &--phone {
            width: 34rpx;
            height: 35rpx;
          }
          &--email {
            width: 38rpx;
            height: 26rpx;
          }
        }
      }
    }
  }
</style>
