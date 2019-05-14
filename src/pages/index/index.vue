<template>
  <div class="home-page">
    <common-header />
    <home-top />
    <image
      src="/static/images/banner.png"
      class="home-page__banner"
    ></image>
    <inner-exhibition />
    <near-activity />
    <visit-info />
    <common-footer selectNavIndex="0"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import HomeTop from '../../components/homepage/HomeTop'
  import InnerExhibition from '../../components/homepage/InnerExhibition'
  import NearActivity from '../../components/homepage/NearActivity'
  import CommonFooter from '../../components/common/CommonFooter'
  import VisitInfo from '../../components/homepage/VisitInfo'

export default {
    name: 'HomePage',
    components: { CommonHeader, HomeTop, InnerExhibition, NearActivity, VisitInfo, CommonFooter },
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
        const url = '../purchase/main'
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
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    padding-bottom: 130rpx;
    background-color: #fcfcfc;
    &__banner {
      display: block;
      margin: -212rpx auto 0;
      width: 670rpx;
      height: 340rpx;
    }
    #myMap {
      margin: 0 auto;
    }
  }
</style>
