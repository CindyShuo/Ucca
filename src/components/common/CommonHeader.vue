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
        <!-- 标题 -->
        <cover-view class="title" :style="{ color:titleColor }">{{ title }}</cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
  export default {
    name: 'CommonHeader',
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
        justify-content: center;
        align-items: center;
        .title {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>
