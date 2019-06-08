<template>
  <scroll-view scroll-y class="home-page" @scroll="scrollHandle">
    <common-scroll-header title="UCAA" :is-top="isTop" />
    <home-top :location="location" :banner="banner" />
    <index-banner :list="bannerList" />
    <inner-exhibition :list="exhibitionList" />
    <near-activity :list="activityList" />
    <visit-info :info="info" />
  </scroll-view>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import HomeTop from '../../components/homepage/HomeTop'
  import IndexBanner from '../../components/homepage/IndexBanner'
  import InnerExhibition from '../../components/homepage/InnerExhibition'
  import NearActivity from '../../components/homepage/NearActivity'
  import VisitInfo from '../../components/homepage/VisitInfo'
  import CommonFooter from '../../components/common/CommonFooter'
  import CommonScrollHeader from '../../components/common/CommonScrollHeader'

  export default {
    name: 'HomePage',
    components: { CommonScrollHeader, CommonHeader, HomeTop, IndexBanner, InnerExhibition, NearActivity, VisitInfo, CommonFooter },
    data () {
      return {
        isTop: true,
        banner: '',
        location: '',
        bannerList: [],
        exhibitionList: [],
        activityList: [],
        info: {}
      }
    },
    methods: {
      getHomePage () {
        this.$http.getHomePage()
          .then(res => {
            this.banner = res.data.background
            this.location = res.data.locations ? res.data.locations[0] : ''
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
      },
      scrollHandle (e) {
        this.isTop = e.mp.detail.scrollTop < 20
      }
    },
    mounted () {
      this.getHomePage()
      this.$http.orderTicket()
        .then(res => {
          console.log(res)
        })
      // this.$http.sendSms('18310930019')
      //   .then(res => {
      //     console.log(res)
      //   })
      this.$http.submitGroupOrder()
        .then(res => {
          console.log(res)
        })
    }
  }
</script>

<style lang="less" scoped>
  .home-page {
    height: 100%;
    // padding-bottom: 30rpx;
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
