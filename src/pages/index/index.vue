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
        info: {}
      }
    },
    methods: {
      getHomePage () {
        this.$http.getHomePage()
          .then(res => {
            console.log(res)
          })
      }
    },
    mounted () {
      this.getHomePage()
      wx.request({
        url: 'http://47.94.198.193:19516/api/homepage',
        success: function (res) {
          console.log(res)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    padding-bottom: 130rpx;
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
