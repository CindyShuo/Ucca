<template>
  <div class="common-header">
    <!-- 占位栏 -->
    <cover-view class="placeholder-bar" :style="{ height: navBarHeight + 'px'}"> </cover-view>
    <!-- 导航栏主体 -->
    <cover-view class="nav-bar" :style="{ height: navBarHeight + 'px', backgroundColor: navBackgroundColor }">
      <!-- 状态栏 -->
      <cover-view class="nav-bar__status" :style="{ height: statusBarHeight + 'px' }"></cover-view>
      <!-- 标题栏 -->
      <cover-view class="nav-bar__main" :style="{ height: titleBarHeight + 'px' }">
        <a v-if="backToPrevious && !showOrHidden" class="arrow" :class="titleColor !== '#fff' ? 'arrow-black' : 'arrow-white'" @click="goBack"></a>
        <a v-else-if="backToPrevious && showOrHidden" class="arrow" :class="!showOrHidden ? 'arrow-black' : 'hall'" @click="goBack"></a>
        <common-language :flag="backToPrevious" :colorFlag="titleColor"></common-language>
        <!-- 标题 -->
        <cover-view class="title" :style="{ color:titleColor }">{{ title }}</cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  import CommonLanguage from '@/components/common/CommonLanguage'
  export default {
    name: 'CommonHeader',
    components: { CommonLanguage },
    props: {
      // 导航栏背景色
      navBackgroundColor: {
        default: '#232323'
      },
      // 标题颜色
      titleColor: {
        default: '#fff'
      },
      // 标题文字
      title: {
        required: false,
        default: 'UCAA'
      },
      // 是否显示后退按钮
      backVisible: {
        required: false,
        default: false
      },
      // home按钮的路径
      homePath: {
        required: false,
        default: ''
      },
      // 返回箭头
      backToPrevious: {
        required: false,
        default: false
      },
      // 导览模块title
      showOrHidden: {
        required: false,
        default: false
      }
    },
    data () {
      return {
        statusBarHeight: '', // 状态栏高度
        titleBarHeight: '', // 标题栏高度
        navBarHeight: '', // 导航栏总高度
        platform: '',
        model: '',
        brand: '',
        system: ''
      }
    },
    beforeMount () {
      const self = this
      wx.getSystemInfo({
        success (system) {
          console.log(`system:`, system)
          self.statusBarHeight = system.statusBarHeight
          self.platform = system.platform
          self.model = system.model
          self.brand = system.brand
          self.system = system.system
          let platformReg = /ios/i
          if (platformReg.test(system.platform)) {
            self.titleBarHeight = 44
          } else {
            self.titleBarHeight = 48
          }
          self.navBarHeight = self.statusBarHeight + self.titleBarHeight
        }
      })
    },
    methods: {
      goBack () {
        wx.navigateBack({
          delta: 1
        })
      }
    },
    mounted () {
      console.log(`this.backVisible:`, this.backVisible)
    }
  }
</script>

<style lang="less" scoped>
  .common-header {
    width: 100%;
    .placeholder-bar {
      width: 100%;
      background-color: transparent;
    }
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      &__main {
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          position: absolute;
          position: absolute;
          left: 24rpx;
          top: 36rpx;
        }
        .hall {
          &:after {
            content: '';
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border: 20rpx solid #fff;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-radius: 5rpx;
          }
          &:before {
            content: '';
            position: absolute;
            left: 10rpx;
            top: 6rpx;
            z-index: 100;
            display: inline-block;
            width: 0;
            height: 0;
            border: 16rpx solid #6F5654;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
          }
        }
        .arrow-white {
          &:after {
            content: '';
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border: 20rpx solid white;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-radius: 5rpx;
          }
          &:before {
            content: '';
            position: absolute;
            left: 10rpx;
            top: 6rpx;
            z-index: 100;
            display: inline-block;
            width: 0;
            height: 0;
            border: 16rpx solid #232323;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
          }
        }
        .arrow-black {
          &:after {
            content: '';
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border: 20rpx solid #232323;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-radius: 5rpx;
          }
          &:before {
            content: '';
            position: absolute;
            left: 10rpx;
            top: 6rpx;
            z-index: 100;
            display: inline-block;
            width: 0;
            height: 0;
            border: 16rpx solid white;
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-top-color: transparent;
          }
        }
        .title {
          margin: 0 auto;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
