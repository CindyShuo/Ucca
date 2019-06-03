<template>
  <div class="audio-player">
    <div id="myAudio">
      <div class="audio-player__controller">
        <div class="time-bar">
          <div class="time-play" v-bind:style="{ transform: 'translateX(' + sliderProgress + '%)' }"></div>
        </div>
      </div>
      <div class="audio-player__content">
        <div class="audio_name">
          <image class="left" src="/static/images/pic.png"></image>
          <h2 class="right">《墨西哥城鸟瞰图，XIII》</h2>
        </div>
        <div class="state">
          <image class="state_chose" src="/static/images/audio/play-left.png"></image>
          <image class="state_play" @click="playHandle" :src="!isPlay ? '/static/images/audio/pause.png' : '/static/images/audio/play.png'"></image>
          <image class="state_chose" src="/static/images/audio/play-right.png"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AudioPlayer',
    props: ['playAudio'],
    data () {
      return {
        innerAudioContext: null, // 音频对象
        isPlay: false, // 是否播放
        sliderProgress: 0 // 滑动控制条进度
      }
    },
    watch: {
      isPlay (value) {
        this.innerAudioContext.offCanplay()
        if (value) {
          this.innerAudioContext.play()
        } else {
          this.innerAudioContext.pause()
        }
      }
    },
    methods: {
      // 播放暂停
      playHandle () {
        this.isPlay = !this.isPlay
      }
    },
    created () {
      // 创建音频播放对象
      this.innerAudioContext = wx.createInnerAudioContext()
      // 设置音频播放来源
      this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
      // 音频进入可以播放状态
      this.innerAudioContext.onCanplay(res => {
        this.isPlay = true
      })
      // 音频自然播放结束事件
      this.innerAudioContext.onEnded(res => {
        // 当音频播放结束后，将滑动条滑到末尾
        this.sliderProgress = 100
        this.isPlay = false
      })
      // 音频播放中
      this.innerAudioContext.onTimeUpdate(res => {
        let duration = this.innerAudioContext.duration
        let currentTime = this.innerAudioContext.currentTime
        // 设置滑动条位置，小数计算不精确，转为整数计算
        this.sliderProgress = (currentTime * 1000000) / (duration * 1000000) * 100
      })
    },
    destroyed () {
      this.innerAudioContext.destroy()
    }
  }
</script>

<style lang="less" scoped>
  .audio-player {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 100rpx;
    background: #fff;
    &__content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30rpx 0 10rpx;
      height: 98rpx;
      .audio_name {
        display: flex;
        align-items: center;
        .left {
          width: 80rpx;
          height: 80rpx;
          background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.50) 100%);
        }
        .right {
          margin-left: 20rpx;
          font-size: 28rpx;
        }
      }
    }
    .state {
      display: flex;
      align-items: center;
      .state_chose {
        width: 28rpx;
        height: 28rpx;
      }
      .state_play {
        margin: 0 26rpx;
        width: 44rpx;
        height: 44rpx;
      }
    }
    &__controller{
      height: 2rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time-start, .time-total{
        flex: none;
        color: #808080;
        width: 110rpx;
        text-align: center;
        font-size: 24rpx;
      }
      .time-bar{
        position: relative;
        flex: auto;
        height: 2rpx;
        overflow: hidden;
        background: lightgray;
      }
      .time-play{
        position: absolute;
        left: -100%;
        width: 100%;
        height: 100%;
        background: #ED3024;
        transition: all 1s linear;
      }
      .progress{
        height: 80rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
