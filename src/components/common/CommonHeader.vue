<template>
  <div class="common-header">
    <!-- 占位栏 -->
    <div class="placeholder-bar" :style="{ height: navBarHeight + 'px'}"> </div>
    <!-- 导航栏主体 -->
    <div class="nav-bar" :style="{ height: navBarHeight + 'px', backgroundColor: themeInfo.backgroundColor }">
      <!-- 状态栏 -->
      <div class="nav-bar__status" :style="{ height: statusBarHeight + 'px' }"></div>
      <!-- 标题栏 -->
      <div class="nav-bar__main" :style="{ height: titleBarHeight + 'px', borderBottom: themeInfo.borderBottom }">
        <!-- 后退 -->
        <a
          class="arrow"
          @click="goBack"
          v-if="backVisible"
        >
          <image
            :src="themeInfo.arrow"
            class="arrow__icon"
          ></image>
        </a>
        <!-- 多语言 -->
        <div class="language">
          <common-language :text-color="themeInfo.textColor"></common-language>
        </div>
        <!-- 标题 -->
        <h2 class="title" :style="{ color: themeInfo.textColor }">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonLanguage from './CommonLanguage'

  export default {
    name: 'CommonHeader',
    components: { CommonLanguage },
    props: {
      theme: {
        type: String,
        default: 'white'
      },
      // 标题文字
      title: {
        type: String,
        default: 'UCAA'
      },
      // 是否显示后退按钮
      backVisible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        statusBarHeight: '', // 状态栏高度
        titleBarHeight: '', // 标题栏高度
        navBarHeight: '' // 导航栏总高度
      }
    },
    computed: {
      themeInfo () {
        switch (this.theme) {
          case 'white':
            wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: '',
              animation: {}
            })
            return {
              backgroundColor: '#fff',
              textColor: '#000',
              borderBottom: '1rpx solid rgba(0, 0, 0, .1);',
              arrow: '/static/images/arrow.png'
            }
          case 'black':
            return {
              backgroundColor: '#232323',
              textColor: '#ffffff',
              borderBottom: 'none',
              arrow: '/static/images/arrow-white.png'
            }
          case 'brown':
            return {
              backgroundColor: '#6f5654',
              textColor: '#ffffff',
              borderBottom: 'none',
              arrow: '/static/images/arrow-white.png'
            }
          default:
            return {}
        }
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
            self.titleBarHeight = 44
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
        padding: 0 24rpx;
        .arrow {
          width: 36rpx;
          margin-right: 40rpx;
          &__icon {
            display: block;
            width: 20rpx;
            height: 36rpx;
            transform: rotate(180deg);
          }
        }
        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 45%;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
