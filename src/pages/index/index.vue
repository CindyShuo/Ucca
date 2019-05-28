<template>
  <div class="home-page">
    <common-header />
    <home-top :location="location" :banner="banner" />
    <index-banner :list="bannerList" />
    <inner-exhibition :list="exhibitionList" />
    <near-activity :list="activityList" />
    <visit-info :info="info" />
    <common-footer selectNavIndex="0"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import HomeTop from '../../components/homepage/HomeTop'
  import IndexBanner from '../../components/homepage/IndexBanner'
  import InnerExhibition from '../../components/homepage/InnerExhibition'
  import NearActivity from '../../components/homepage/NearActivity'
  import VisitInfo from '../../components/homepage/VisitInfo'
  import CommonFooter from '../../components/common/CommonFooter'

  export default {
    name: 'HomePage',
    components: { CommonHeader, HomeTop, IndexBanner, InnerExhibition, NearActivity, VisitInfo, CommonFooter },
    data () {
      return {
        banner: '',
        location: '',
        bannerList: '',
        exhibitionList: [],
        activityList: [],
        info: {}
      }
    },
    methods: {
      getHomePage () {
        this.$http.getHomePage()
          .then(res => {
            console.log(res)
            this.banner = res.data.background
            this.location = res.data.locations[0]
            this.bannerList = res.data.banner
            this.exhibitionList = res.data.exhibitions
            this.activityList = res.data.events
            this.info = {
              open: res.data.open,
              phone: res.data.phone,
              email: res.data.email,
              address: res.data.address,
              lat: res.data.lat,
              lng: res.data.lng
            }
          })
      }
    },
    mounted () {
      this.getHomePage()
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
