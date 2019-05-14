<template>
  <view class='bottom-menu'>
    <p v-for="(item, index) in navList"
       @click="bindViewTap(index, item.pagePath)"
       :key="index">
      <img class='bottom-div' :src="selectNavIndex - 0 === index ? item.selectedIconPath : item.iconPath" alt="iconPath" />
    </p>
  </view>
</template>

<style scoped>
  .bottom-menu{
    position: fixed;
    bottom: 0;
    width: 750rpx;
    height: 100rpx;
    background: #fff;
    z-index: 10009;
    box-shadow: 1rpx -1rpx 1rpx rgba(0,0,0,.05);
    display: flex;
    justify-content: center;
  }
  .bottom-div{
    float: left;
    width: 55rpx;
    height: 81rpx;
    margin: 12rpx 60rpx;
  }

</style>

<script>
  export default {
    props: ['selectNavIndex'],
    data () {
      return {
        flag: 1,
        selectNavIndex: 0,
        navList: [
          {
            pagePath: '/pages/index/main',
            iconPath: '/static/images/footerMenu/bottom1.png',
            selectedIconPath: '/static/images/footerMenu/bottom1-.png'
          },
          {
            pagePath: '/pages/logs/main',
            iconPath: '/static/images/footerMenu/bottom2.png',
            selectedIconPath: '/static/images/footerMenu/bottom2-.png'
          },
          {
            pagePath: '/pages/index/main',
            iconPath: '/static/images/footerMenu/bottom3.png',
            selectedIconPath: '/static/images/footerMenu/bottom3.png'
          },
          {
            pagePath: '/pages/logs/main',
            iconPath: '/static/images/footerMenu/bottom4.png',
            selectedIconPath: '/static/images/footerMenu/bottom4.png'
          }
        ]
      }
    },
    methods: {
      /**
       * tabBar路由跳转
       */
      bindViewTap (index, url) {
        this.selectNavIndex = index
        if (mpvuePlatform === 'wx') {
          wx.navigateTo({
            url
          })
        } else {
          wx.switchTab({
            url
          })
        }
      }
    }
  }
</script>
