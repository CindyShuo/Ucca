<template>
  <div class="exhibition-hall">
    <common-header backToPrevious="true" title="当代文明启示录" :navBackgroundColor="showOrHiddenPic ? '#6F5654' : '#000'" titleColor="#fff" />
    <div class="exhibition-hall__map" v-if="showOrHiddenPic">
      <image src="" class="img"></image>
      <div class="arrow" @click="hiddenPic">
        <image class="arrow-pic" src="/static/images/arrow-white.png"></image>
      </div>
    </div>
    <guide-list @playerId="player" :showOrHiddenPic="showOrHiddenPic" @showOrHiddenPic="getShowOrHiddenFlag"></guide-list>
    <audio-player></audio-player>
    <image class='go-icon go-home' @click="goHome" src='/static/images/go-home.png'></image>
    <image class='go-icon go-top' @click="goTop" src='/static/images/go-top.png'></image>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import GuideList from '@/components/guide/GuideList'
  import AudioPlayer from '@/components/guide/AudioPlayer'
  export default {
    name: 'ExhibitionHall',
    components: { CommonHeader, GuideList, AudioPlayer },
    data () {
      return {
        showOrHiddenPic: true,
        list: [
          {
            poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
            name: '此时此刻111111',
            author: '许巍',
            src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          },
          {
            poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
            name: '此时此刻222222',
            author: '许巍',
            src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          }
        ]
      }
    },
    methods: {
      hiddenPic () {
        this.showOrHiddenPic = false
      },
      getShowOrHiddenFlag () {
        this.showOrHiddenPic = true
      },
      goHome () {
        wx.navigateTo({
          url: '/pages/index/main'
        })
      },
      goTop () {}
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-hall {
    padding-bottom: 130rpx;
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
