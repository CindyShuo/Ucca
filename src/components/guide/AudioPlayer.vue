<template>
  <div class="audio-player">
    <div id="myAudio">
      <div class="audio-player__controller">
        <div class="time-bar">
          <div class="time-play" v-bind:style="{ transform: 'translateX(' + songState.progress + '%)' }"></div>
        </div>
      </div>
      <div class="audio-player__content">
        <div class="audio_name">
          <image class="left" src="/static/images/pic.png"></image>
          <h2 class="right">《墨西哥城鸟瞰图，XIII》</h2>
        </div>
        <div class="state">
          <image class="state_chose" bindtap="before" src="/static/images/audio/play-left.png"></image>
          <image class="state_play" @click="playAndPause" :src="!isPlaying ? '/static/images/audio/pause.png' : '/static/images/audio/play.png'"></image>
          <image class="state_chose" bindtap="next" src="/static/images/audio/play-right.png"></image>
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
        audioCtx: null,
        isPlaying: true,
        currentIndex: 0,
        marginTop: 0,
        lrcHeight: 200,
        songState: {
          progress: 10,
          currentPosition: '00:00',
          duration: '00:00',
          datalist: [],
          lry: []
        }
      }
    },
    methods: {
      requestDataSong (songId) {},
      playSong () {},
      playAndPause () {},
      // 上一首
      before () {
      },
      // 下一首
      next: function () {}
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
