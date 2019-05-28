<template>
  <scroll-view scroll-y class="guide-list__content">
    <div class="guide-list__arrow" @click="showPic" v-if="!showOrHiddenPic">
      <image class="arrow-pic" src="/static/images/arrow-white.png"></image>
    </div>
    <div class="item">
      <image class="pic" src="/static/images/pic.png"></image>
      <div class="card">
        <h2><span class="hall">序</span>文明：当代生活启示录</h2>
      </div>
    </div>
    <h2 class="title">一、蜂巢</h2>
    <div style="position: relative" @click="goDetail">
      <div class="item noBoxShadow">
        <image class="pic" src="/static/images/pic.png" @click="player(0)">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">1</span>《墨西哥城鸟瞰图，XIII》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2006</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" @click="goGuideContent" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png" @click="player(1)">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">2</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2006</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">3</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2009</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">3</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2009</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">3</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2009</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">3</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2009</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
    <div style="position: relative">
      <div class="item noBoxShadow" style="clear: both">
        <image class="pic" src="/static/images/pic.png">
          <div class='list-image-play'>
            <div class='list-image-play-font'>01:23</div>
            <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
          </div>
        </image>
        <div class="card">
          <h2><span class="hall">3</span>《无题》</h2>
          <p>帕布罗·洛佩兹·鲁兹 | 2009</p>
        </div>
      </div>
      <image src="/static/images/arrow.png" class="guide-list__pointer"></image>
      <div class="line"></div>
    </div>
  </scroll-view>
</template>

<script>
  export default {
    name: 'GuideList',
    props: ['showOrHiddenPic'],
    methods: {
      showPic () {
        this.$emit('showOrHiddenPic', true)
      },
      goDetail () {
        wx.navigateTo({
          url: ''
        })
      },
      player (id) {
        // 切换播放音频
        this.$emit('playerId', id)
      },
      goGuideContent () {
        wx.navigateTo({
          url: '/pages/guideContent/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .guide-list {
    &__arrow {
      position: fixed;
      top: 68px;
      left: 50%;
      transform: translate(-50%);
      display: inline-block;
      width: 100rpx;
      height: 30rpx;
      line-height: 30rpx;
      text-align: center;
      background: #000;
      opacity: 0.6;
      .arrow-pic {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        width: 30rpx;
        height: 54rpx;
        transform: translate(-50%, -50%) rotate(90deg) scale(.4);
      }
    }
    &__content {
      padding: 30rpx;
      .item {
        padding: 20rpx;
        display: flex;
        align-items: center;
        background: #fff;
        box-shadow: 0 12px 34px 0 rgba(0,0,0,0.05);
        .pic {
          position: relative;
          width: 166rpx;
          height: 166rpx;
          .list-image-play {
            position: absolute;
            bottom: 10rpx;
            width: 100%;
            font-size: 24rpx;
            line-height: 33rpx;
            color: #fff;
            height: 33rpx;
            font-weight: bold;
            text-align: center;
          }
          .list-image-play-font {
            position:absolute;
            left: 10rpx;
            right: 30rpx;
            margin-left: 10rpx;
          }
          .list-image-play-icon {
            width: 16rpx;
            height: 16rpx;
            position: absolute;
            top: 8rpx;
            right: 15rpx;
          }
        }
        .card {
          margin-left: 30rpx;
          display: flex;
          flex-direction: column;
          .hall {
            margin-right: 4rpx;
            display: inline-block;
            width: 32rpx;
            height: 32rpx;
            font-size: 16rpx;
            line-height: 32rpx;
            color: #FFF;
            text-align: center;
            background: #232323;
            border-radius: 50%;
            vertical-align: top;
          }
          h2 {
            margin: 14rpx 0 20rpx;
            font-size: 28rpx;
            line-height: 28rpx;
          }
          p {
            padding-left: 36rpx;
            font-size: 24rpx;
            line-height: 24rpx;
            opacity: 0.6;
          }
        }
      }
      .noBoxShadow {
        box-shadow: none;
      }
      .line {
        margin-top: -1rpx;
        float: right;
        width: 500rpx;
        height: 1rpx;
        border-bottom: 2rpx solid #232323;
        opacity: 0.1;
      }
      .title {
        margin: 30rpx 0;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
    &__pointer {
      position: absolute;
      top: 94rpx;
      right: 40rpx;
      width: 20rpx;
      height: 22rpx;
    }
  }
</style>
