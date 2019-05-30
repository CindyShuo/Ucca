<template>
  <div class="guide-content">
    <common-header :back-visible="true" title="《墨西哥城鸟瞰图，XIII》" />
    <image class="guide-content__banner" src="/static/images/pic.png"></image>
    <div class="guide-content__bottom">
      <h2 class="title">《墨西哥城鸟瞰图，XIII》</h2>
      <p class="year">帕布罗·洛佩兹·鲁兹 | 2006</p>
      <div class="audio">
        <div class="left">
          <image src="/static/images/pic.png">
            <div class='list-image-play'>
              <div class='list-image-play-font'>01:23</div>
              <image class='list-image-play-icon' src='/static/images/audio/arrow-white1.png'></image>
            </div>
          </image>
          <p class="explain">作品语音讲解</p>
        </div>
        <div class="left">
          <span class="time">4:03</span>
          <image src="/static/images/audio/arrow-black.png" class="play"></image>
        </div>
      </div>
      <p class="description">
        展览“王音：礼物”由策展人秦思源与UCCA馆长田霏宇联合策划，助理策展人张张协助呈现，由建筑设计师田军赞助并提供展览设计。
        展览同名出版物《王音：礼物》由新世纪当代艺术基金会（NCAF）支持出版，于尤伦斯艺术商店（UCCASTORE）有售。该画册由新星出版社出版，不仅收录了约四十件王音近年来创作的油画，且田霏宇、秦思源、赵汀阳等撰稿人文章提供的多重解析视角——王音不断成熟的职业生涯历程、多件重要作品的个案分析、观看其作品的方法论——与图像互为补充，更为立体、丰富和隽永地呈现艺术家的作品。
        本次展览亦延伸出一系列精心策划的公共项目对话，包括“礼物：王音的‘出发’‘游离’与‘还乡’暨新书发布会”“礼物的文化政治”“礼物：鲁迅公园——王音的绘画和青岛城市历史”，以及有关戏剧的讨论
      </p>
    </div>
    <image class='go-icon go-home' @click="goHome" src='/static/images/go-home.png'></image>
    <!--<audio-player></audio-player>-->
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import AudioPlayer from '@/components/guide/AudioPlayer'
  export default {
    name: 'GuideContent',
    components: { AudioPlayer, CommonHeader },
    methods: {
      goHome () {
        wx.switchTab({
          url: '/pages/index/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .guide-content {
    padding-bottom: 130rpx;
    &__banner {
      width: 100%;
      height: 534rpx;
    }
    &__bottom {
      padding: 30rpx;
      .title {
        font-size: 42rpx;
        line-height: 42rpx;
      }
      .year {
        margin: 20rpx 0 40rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        opacity: 0.6;
      }
      .audio {
        padding: 0 70rpx 0 20rpx ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 160rpx;
        background: #fff;
        border-left: 4rpx solid #232323;
        box-shadow: 0 8rpx 20rpx 0 rgba(0,0,0,0.04);
        .left {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .list-image-play {
          position: absolute;
          bottom: 10rpx;
          text-align: center;
          width: 120rpx;
          font-size: 24rpx;
          line-height: 33rpx;
          color: #fff;
          height:33rpx;
          font-weight: bold;
          .list-image-play-font {
            position:absolute;
            left:10rpx;
            right:30rpx;
          }
          .list-image-play-icon {
            width: 16rpx;
            height: 16rpx;
            position:absolute;
            top:8rpx;
            right:15rpx;
          }
        }
        image {
          position: relative;
          width: 120rpx;
          height: 120rpx;
        }
        .explain {
          margin-left: 30rpx;
          font-size: 28rpx;
        }
        .time {
          font-size: 28rpx;
        }
        .play {
          margin-left: 22rpx;
          width: 20rpx;
          height: 20rpx;
        }
      }
      .description {
        margin-top: 40rpx;
        font-size: 30rpx;
        line-height: 54rpx;
      }
    }
    .go-icon{
      width: 70rpx;
      height: 70rpx;
      position: fixed;
      right: 30rpx;
    }
    .go-home{
      bottom: 130rpx;
    }
  }
</style>
