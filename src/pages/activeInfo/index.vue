<template>
  <div class="active-info">
    <image
      src="/static/images/banner.png"
      class="active-info__banner"
    ></image>
    <div class="active-info__card">
      <div class="intro">
        <h2>
          邱志杰：寰宇全图”系列<br/>
          何波娜、邱志杰与于渺：绘制纠缠物的地图
        </h2>
        <p>时间：2019.6.15 - 2019.9.1</p>
        <p>地址：UCCA尤伦斯当代艺术中心（北京798艺术区）</p>
        <p>语言：英文配中文翻译</p>
      </div>
      <div class="split-line"></div>
      <div class="price">
        <p>￥138</p>
        <span>UCAA会员</span>
        <em>免费</em>
      </div>
    </div>
    <div class="active-info__tip">
      <p>加入<span>UCCA会员</span>，享受更多权益</p>
      <a class="arrow">
        <image
          src="/static/images/arrow.png"
          mode="widthFix"
          class="icon-arrow"
        ></image>
      </a>
    </div>
    <view class='details-most'>
      <view class='details-menu'>
        <view class='details-menu-div details-menu-div1'>活动流程</view>
        <view class='details-menu-div'>关于嘉宾</view>
        <view class='details-menu-div'>活动须知</view>
      </view>
      <view class='details-most-topic'>活动流程</view>
      <view class='details-most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</view>
      <view class='details-most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</view>
      <view class='details-most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</view>
      <view class='details-most-topic'>关于嘉宾</view>
      <view class='details-most-p'>展览“王音：礼物”由策展人秦思源与UCCA馆长田霏宇联合策划，助理策展人张张协助呈现，由建筑设计师田军赞助并提供展览设计。</view>
      <view class='details-most-p'>展览同名出版物《王音：礼物》由新世纪当代艺术基金会（NCAF）支持出版，于尤伦斯艺术商店（UCCASTORE）有售。该画册由新星出版社出版，不仅收录了约四十件王音近年来创作的油画，且田霏宇、秦思源、赵汀阳等撰稿人文章提供的多重解析视角——王音不断成熟的职业生涯历程、多件重要作品的个案分析、观看其作品的方法论——与图像互为补充，更为立体、丰富和隽永地呈现艺术家的作品。</view>
      <view class='details-most-p'>本次展览亦延伸出一系列精心策划的公共项目对话，包括“礼物：王音的‘出发’‘游离’与‘还乡’暨新书发布会”“礼物的文化政治”“礼物：鲁迅公园——王音的绘画和青岛城市历史”，以及有关戏剧的讨论。</view>
      <p></p>
    </view>
  </div>
</template>

<script>
  export default {
    name: 'ActiveInfo'
  }
</script>

<style lang="less" scoped>
  .active-info {
    background-color: #fcfcfc;
    &__banner {
      display: block;
      width: 100%;
      height: 400rpx;
    }
    &__card {
      margin: -100rpx auto 0;
      width: 670rpx;
      border-radius: 0 20rpx 0 0;
      background-color: #fff;
      .intro {
        box-sizing: border-box;
        padding: 40rpx 60rpx 30rpx 40rpx;
        h2 {
          margin-bottom: 10rpx;
          line-height: 48rpx;
          font-size: 34rpx;
          color: #232323;
        }
        p {
          margin-bottom: 12rpx;
          line-height: 32rpx;
          font-size: 24rpx;
          color: #232323;
          opacity: .6;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .split-line {
        margin: 0 auto;
        width: 610rpx;
        height: 0rpx;
        border-bottom: 1rpx solid #232323;
        opacity: .1;
      }
      .price {
        display: flex;
        align-items: center;
        padding: 28rpx 40rpx 40rpx;
        p {
          line-height: 60rpx;
          font-size: 42rpx;
        }
        span {
          margin-left: 20rpx;
          padding: 0 4rpx;
          border: 1rpx solid #ed3024;
          border-radius: 0 8rpx 0 0;
          line-height: 22rpx;
          font-size: 16rpx;
          color: #ed3024;
        }
        em {
          margin-left: 10rpx;
          line-height: 32rpx;
          font-size: 24rpx;
          color: #ed3024;
        }
      }
    }
    &__tip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30rpx auto 0;
      width: 590rpx;
      height: 80rpx;
      padding: 0 40rpx;
      border-radius: 0 20rpx 0 0;
      background-color: rgba(237, 48, 36, 0.08);
      p {
        font-size: 24rpx;
        span {
          color: #ed3024;
        }
      }
      .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32rpx;
        height: 32rpx;
        .icon-arrow {
          width: 15rpx;
          height: 27rpx;
        }
      }
    }
    .details-most {
      width: 100%;
      margin-top: 40rpx;
      background: #fff;
      font-size: 30rpx;
      box-shadow: 1rpx -1rpx 26rpx rgba(0, 0, 0, 0.05);
    }

    .details-menu {
      width: 100%;
      margin-top: 40rpx;
      display: flex;
      justify-content: center;
      height: 90rpx;
      font-size: 28rpx;
      border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    }

    .details-menu-div {
      line-height: 90rpx;
      margin: 0 68rpx;
    }

    .details-menu-div1 {
      border-bottom: 4rpx solid red;
    }

    .details-most-topic {
      font-size: 34rpx;
      margin: 50rpx 40rpx 10rpx;
    }

    .details-most-p {
      width: 670rpx;
      padding: 10rpx 40rpx;
      line-height: 54rpx;
    }

    .details-bottom {
      position: fixed;
      bottom: 0;
      width: 750rpx;
      height: 100rpx;
      background: #fff;
      z-index: 10009;
      box-shadow: 1rpx -1rpx 1rpx rgba(0, 0, 0, 0.05);
    }

    .details-bottom-div {
      float: left;
      width: 248rpx;
      height: 100%;
      border-right: 1rpx solid rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .details-bottom-div1 {
      width: 82rpx;
      height: 100%;
    }

    .details-bottom-div2 {
      font-size: 30rpx;
      line-height: 80rpx;
      position: relative;
    }

    .details-bottom-div2-span {
      position: absolute;
      font-size: 20rpx;
      opacity: 0.6;
      width: 100%;
      top: 30rpx;
    }

    .details-bottom-div3 {
      background: #000;
      color: #fff;
      font-size: 30rpx;
      line-height: 100rpx;
    }
  }
</style>
