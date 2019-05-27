<template>
  <div class="audio-player">
    <audio
      :poster="list[0].poster"
      :name="list[0].name"
      :author="list[0].author"
      :src="list[0].src"
      id="myAudio"
      style="width: 100%"
    >
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
          <image class="state_chose" bindtap="before" src="/static/images/audio/pre.png"></image>
          <image class="state_play" @click="playAndPause" :src="!isPlaying ? '/static/images/audio/pause.png' : '/static/images/audio/play.png'"></image>
          <image class="state_chose" bindtap="next" src="/static/images/audio/next.png"></image>
        </div>
      </div>
    </audio>
  </div>
</template>

<script>
  export default {
    name: 'AudioPlayer',
    data () {
      return {
        audioCtx: null,
        list: [
          {
            poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
            name: '此时此刻',
            author: '许巍',
            src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          }
        ],
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
      requestDataSong (songId) {
        var that = this
        // app.requestData('http://ting.baidu.com/data/music/links?songIds=' + songId, {}, (err, data) => {
        //   that.pic = data.data.songList[0].songPicRadio
        //   that.bigData = data.data.songList[0]
        //   wx.playBackgroundAudio({
        //     dataUrl: data.data.songList[0].songLink
        //   })
        // })
        that.playSong()
      },
      playSong () {
        var that = this
        let inv = setInterval(function () {
          wx.getBackgroundAudioPlayerState({
            success: function (res) {
              if (res.status === 1) {
                that.isPlaying = true
                that.songState = {
                  progress: res.currentPosition / res.duration * 100,
                  currentPosition: that.timeToString(res.currentPosition),
                  duration: that.timeToString(res.duration)
                }
                var i = that.currentIndex
                if (i < that.lry.length) {
                  if (res.currentPosition - 4 >= parseInt(that.lry[i][0])) {
                    that.currentIndex = i + 1
                  }
                }
                if (that.currentIndex >= 6) {
                  that.marginTop = -(that.currentIndex - 6) * 20
                  that.lrcHeight = 200 + (that.currentIndex - 6) * 20
                }
              } else {
                that.isPlaying = false
                clearInterval(inv)
              }
            }
          })
        }, 1000)
      },
      playAndPause () {
        var that = this
        if (that.isPlaying) {
          that.audioCtx.play()
        } else {
          that.audioCtx.pause()
        }
        // that.playSong()
        that.isPlaying = !that.isPlaying
      },
      // 上一首
      before () {
        var that = this
        that.currentIndex = 0
        that.marginTop = 0
        that.lrcHeight = 200
        if (that.songIndex === 0) {
          // that.requestDataSong(that.datalist[that.datalist.length - 1].song_id)
          that.songLrc(that.datalist[that.datalist.length - 1].song_id)
          that.songIndex = that.datalist.length - 1
        } else {
          // that.requestDataSong(that.datalist[that.songIndex - 1].song_id)
          that.songLrc(that.datalist[that.songIndex - 1].song_id)
          that.songIndex = that.songIndex - 1
        }
      },
      // 下一首
      next: function () {
        var that = this
        that.currentIndex = 0
        that.marginTop = 0
        that.lrcHeight = 200
        if (that.songIndex === that.datalist.length - 1) {
          that.requestDataSong(that.datalist[0].song_id)
          that.songLrc(that.datalist[0].song_id)
          that.songIndex = 0
        } else {
          that.songIndex = parseInt(that.songIndex) + 1
          that.requestDataSong(that.datalist[that.songIndex].song_id)
          that.songLrc(that.datalist[that.songIndex].song_id)
        }
      }
    },
    onReady () {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = wx.createAudioContext('myAudio')
    },
    onLoad (options) {
      var that = this
      that.datalist = wx.getStorageSync('song')
      that.songIndex = options.songIndex
      that.requestDataSong(options.songId)
      that.songLrc(options.songId)
      // 自动播放下一首
      wx.onBackgroundAudioStop(function () {
        that.next()
      })
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
