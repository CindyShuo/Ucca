<template>
  <div class="exhibition-hall">
    <common-header :back-visible="true" title="当代文明启示录" :theme="mapStatus ? 'brown' : 'black'" />
    <div class="exhibition-hall__map">
      <div class="image-content" v-if="mapStatus">
        <image class="img"></image>
      </div>
      <div class="arrow" :class="{ 'map-show': mapStatus }" @click="mapHandle">
        <image
          src="/static/images/arrow-white.png"
          class="arrow-icon"
        ></image>
      </div>
    </div>
    <guide-list @playerId="changeMusic" />
    <audio-player v-if="audioItem"></audio-player>
    <image class='go-icon go-home' @click="goHome" src='/static/images/go-home.png'></image>
    <image class='go-icon go-top' @click="goTop" src='/static/images/go-top.png'></image>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import GuideList from '../../components/guide/GuideList'
  import AudioPlayer from '../../components/guide/AudioPlayer'

  export default {
    name: 'ExhibitionHall',
    components: { CommonHeader, GuideList, AudioPlayer },
    data () {
      return {
        mapStatus: true,
        audioItem: null
      }
    },
    methods: {
      mapHandle () {
        this.mapStatus = !this.mapStatus
      },
      goHome () {
        wx.switchTab({
          url: '/pages/index/main'
        })
      },
      goTop () {},
      changeMusic (val) {
        this.audioItem = val
      }
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-hall {
    display: flex;
    flex-direction: column;
    height: 100%;
    &__map {
      position: relative;
      .image-content {
        display: flex;
        align-items: center;
        height: 470rpx;
        background-color: #6f5654;
        .img {
          display: block;
          margin: 0 auto;
          width: 620rpx;
          height: 308rpx;
          border: 2rpx solid #fff;
        }
      }
      .arrow {
        position: absolute;
        bottom: -28rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 100rpx;
        height: 30rpx;
        line-height: 30rpx;
        text-align: center;
        background-color: rgba(0, 0, 0, .6);
        .arrow-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 100;
          width: 30rpx;
          height: 54rpx;
          transform: translate(-50%, -50%) rotate(90deg) scale(.4);
        }
        &.map-show {
          bottom: 0;
          .arrow-icon {
            transform: translate(-50%, -50%) rotate(-90deg) scale(.4);
          }
        }
      }
    }
    .go-icon{
      width: 70rpx;
      height: 70rpx;
      position: fixed;
      right: 30rpx;
    }
    .go-home{
      bottom: 130rpx;
    }
    .go-top{
      bottom: 220rpx;
    }
  }
</style>
