<template>
  <div class="common-scroll-header">
    <!-- 导航栏主体 -->
    <cover-view class="nav-bar" :style="{ height: navBarHeight + 'px', backgroundColor: navBackgroundColor }">
      <!-- 状态栏 -->
      <cover-view class="nav-bar__status" :style="{ height: statusBarHeight + 'px' }"></cover-view>
      <!-- 标题栏 -->
      <cover-view class="nav-bar__main" :style="{ height: titleBarHeight + 'px' }">
        <cover-view v-if="backToPrevious" class="title arrow" :style="{ color: titleColor }" @click="goBack">{{ '<' }}</cover-view>
        <!-- 标题 -->
        <cover-view class="title" :style="{ color:titleColor }">{{ title }}</cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  export default {
    name: 'CommonScrollHeader',
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
      }
    },
    data () {
      return {
        statusBarHeight: '', // 状态栏高度
        titleBarHeight: '', // 标题栏高度
        navBarHeight: '', // 导航栏总高度
        navBackgroundColor: '', // 导航栏背景色
        titleColor: '#fff' // 标题颜色
      }
    },
    watch: {
      isTop (bool) {
        this.navBackgroundColor = bool ? '' : '#ffffff'
        this.titleColor = bool ? '#ffffff' : '#000000'
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
        justify-content: center;
        align-items: center;
        .arrow {
          position: absolute;
          left: 24px;
          top: 10px;
          z-index: 1000;
          font-size: 22px !important;
          font-weight: 300;
        }
        .title {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
