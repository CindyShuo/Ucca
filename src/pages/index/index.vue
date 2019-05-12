<template>
  <div class="home-page">
    <div class="home-page__top">

    </div>
    <image
      src="/static/images/banner.png"
      class="home-page__banner"
    ></image>
    <inner-exhibition />
    <near-activity />
  </div>
</template>

<script>
  import InnerExhibition from '../../components/homepage/InnerExhibition'
  import NearActivity from '../../components/homepage/NearActivity'

  export default {
    name: 'HomePage',
    components: { InnerExhibition, NearActivity },
    data () {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },
    methods: {
      bindViewTap () {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({ url })
        } else {
          mpvue.navigateTo({ url })
        }
      },
      clickHandle (ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    &__top {
      width: 100%;
      height: 302rpx;
      border-radius: 0 0 90rpx 90rpx;
      background-color: #232323;
    }
    &__banner {
      display: block;
      margin: -212rpx auto 0;
      width: 670rpx;
      height: 340rpx;
    }
  }
</style>
