<template>
  <div class="common-scroll-header">
    <!-- 导航栏主体 -->
    <div class="nav-bar" :style="{ height: navBarHeight + 'px', backgroundColor: navBackgroundColor }">
      <!-- 状态栏 -->
      <div class="nav-bar__status" :style="{ height: statusBarHeight + 'px' }"></div>
      <!-- 标题栏 -->
      <div class="nav-bar__main" :style="{ height: titleBarHeight + 'px' }">
        <!-- 后退 -->
        <a
          class="arrow"
          @click="goBack"
          v-if="backVisible"
        >
          <image
            :src="arrow"
            class="arrow__icon"
          ></image>
        </a>
        <!-- 多语言 -->
        <div class="language">
          <common-language :text-color="titleColor" />
        </div>
        <!-- 标题 -->
        <h2 class="title" :style="{ color:titleColor }">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonLanguage from './CommonLanguage'

  export default {
    name: 'CommonScrollHeader',
    components: { CommonLanguage },
    props: {
      // 是否在顶部
      isTop: {
        type: Boolean,
        default: true
      },
      // 标题文字
      title: {
        required: false,
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
        navBarHeight: '', // 导航栏总高度
        navBackgroundColor: '', // 导航栏背景色
        titleColor: '#ffffff', // 标题颜色
        arrow: '/static/images/arrow-white.png' // 箭头
      }
    },
    watch: {
      isTop (bool) {
        this.navBackgroundColor = bool ? '' : '#ffffff'
        this.titleColor = bool ? '#ffffff' : '#000000'
        this.arrow = bool ? '/static/images/arrow-white.png' : '/static/images/arrow.png'
        wx.setNavigationBarColor({
          frontColor: bool ? '#ffffff' : '#000000',
          backgroundColor: '',
          animation: {
            duration: 300,
            timingFunc: 'easeIn'
          }
        })
      }
    },
    methods: {
      goBack () {
        wx.navigateBack({
          delta: 1
        })
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
    }
  }
</script>

<style lang="less" scoped>
  .common-scroll-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    .nav-bar {
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
