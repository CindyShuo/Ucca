<template>
  <div class="exhibition-info" :class="{ 'disable-scroll': !isScroll }">
    <image
      src="/static/images/banner.png"
      class="exhibition-info__banner"
    ></image>
    <div class="exhibition-info__card">
      <div class="intro">
        <h2>
          王音：礼物
        </h2>
        <p>时间：2019.6.15 - 2019.9.1</p>
        <p>地址：UCCA尤伦斯当代艺术中心（北京798艺术区）</p>
        <p>语言：英文配中文翻译</p>
      </div>
      <div class="split-line"></div>
      <div class="price">
        <p>￥138-￥188</p>
        <span>UCAA会员</span>
        <em>￥100</em>
      </div>
      <div class='brife-p6'>
        库存紧张
      </div>
    </div>
    <div class="exhibition-info__tip">
      <p>加入<span>UCCA会员</span>，享受更多权益</p>
      <a class="arrow">
        <image
          src="/static/images/arrow.png"
          mode="widthFix"
          class="icon-arrow"
        ></image>
      </a>
    </div>
    <div class="exhibition-info__scroll">
      <common-entry titleFontStyle="font-size: 34rpx;" title="作品导览" description="true" />
      <div class="exhibition-info__content">
        <swiper
          duration="2000"
          next-margin="120rpx"
          class="swipe"
        >
          <swiper-item
            v-for="(item, i) in 10"
            :key="i"
          >
            <image
              src='/static/images/pic.png'
              class='exhibition-info__scroll-div'
            ></image>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div class='exhibition-info__most'>
      <common-tab :arr="arrList" @flag="flagShow" tabFontStyle="true"></common-tab>
      <div v-if="showContent === 0">
        <div class='most-topic'>活动流程</div>
        <div class='most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</div>
        <div class='most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</div>
        <div class='most-p'>15:00 – 15:15  讲座背景及嘉宾介绍</div>
        <div class='most-topic'>关于嘉宾</div>
        <div class='most-p'>展览“王音：礼物”由策展人秦思源与UCCA馆长田霏宇联合策划，助理策展人张张协助呈现，由建筑设计师田军赞助并提供展览设计。</div>
        <div class='most-p'>展览同名出版物《王音：礼物》由新世纪当代艺术基金会（NCAF）支持出版，于尤伦斯艺术商店（UCCASTORE）有售。该画册由新星出版社出版，不仅收录了约四十件王音近年来创作的油画，且田霏宇、秦思源、赵汀阳等撰稿人文章提供的多重解析视角——王音不断成熟的职业生涯历程、多件重要作品的个案分析、观看其作品的方法论——与图像互为补充，更为立体、丰富和隽永地呈现艺术家的作品。</div>
        <div class='most-p'>本次展览亦延伸出一系列精心策划的公共项目对话，包括“礼物：王音的‘出发’‘游离’与‘还乡’暨新书发布会”“礼物的文化政治”“礼物：鲁迅公园——王音的绘画和青岛城市历史”，以及有关戏剧的讨论。</div>
        <p></p>
      </div>
      <div v-if="showContent === 1">
        关于嘉宾
      </div>
      <div v-if="showContent === 2">
        活动须知
      </div>
    </div>
    <common-footer-handle @buyTicket="isBuyTicket"></common-footer-handle>
    <!-- 团体活动 -->
    <common-picker v-if="groupAppointment">
      <div class="exhibition-info__box" style="top: 300rpx;padding: 0;">
        <image @click="close" class='close' src='/static/images/close.png'></image>
        <group-appointment @confirmSuccess="confirmSuccess"></group-appointment>
      </div>
    </common-picker>
    <!-- 立即购票 -->
    <common-picker v-if="buyTicket">
      <choose-ticket buyType="exhibition" @close="close" />
    </common-picker>
    <common-picker v-if="confirmSuccessFlag">
      <div class="exhibition-info__success">
        <image class='ok-icon' src='/static/images/ok.png'></image>
        <div class='font'>提交成功</div>
        <div class='font-span'>感谢您的预约，我们将在两个工作日内联系您进行确认</div>
      </div>
    </common-picker>
  </div>
</template>

<script>
  import CommonFooterHandle from '../../components/common/CommonFooterHandle'
  import CommonTab from '../../components/common/CommonTab'
  import CommonEntry from '../../components/common/CommonEntry'
  import CommonPicker from '../../components/common/CommonPicker'
  import ChooseTicket from '../../components/purchaseTickets/ChooseTicket'
  import ChooseTicketType from '../../components/purchaseTickets/ChooseTicketType'
  import GroupAppointment from '../../components/purchaseTickets/GroupAppointment'
  import CommonOrderItem from '../../components/common/CommonOrderItem'
  import store from '../../store'

  export default {
    name: 'ExhibitionInfo',
    components: {
      ChooseTicket,
      CommonPicker,
      CommonFooterHandle,
      CommonTab,
      CommonEntry,
      ChooseTicketType,
      CommonOrderItem,
      GroupAppointment
    },
    data () {
      return {
        arrList: ['活动流程', '关于嘉宾', '活动须知'],
        showContent: 0,
        orderList: [
          {
            imgSrc: '/static/images/pic.png',
            title: '王音：礼物',
            status: '已选：早鸟全日期通票',
            validityPeriod: '2019.5.12-2019.6-21',
            type: '早鸟票全日期通票',
            money: '￥138',
            number: '1张'
          }
        ],
        groupAppointment: false, // 团购票
        buyTicket: false, // 立即购买
        participate: false, // 参与活动
        confirmSuccessFlag: false // 提交成功
      }
    },
    computed: {
      isScroll () {
        return store.state.isScroll
      }
    },
    methods: {
      flagShow (val) {
        this.showContent = val
      },
      // 关闭弹框
      close () {
        this.groupAppointment = false
        this.buyTicket = false
        this.participate = false
      },
      isBuyTicket (val) {
        this[val.type] = val.buyTicket
      },
      confirmSuccess (val) {
        this.confirmSuccessFlag = val
        setTimeout(() => {
          this.groupAppointment = false
          this.buyTicket = false
          this.participate = false
          this.confirmSuccessFlag = false
        }, 3000)
      }
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-info {
    position: relative;
    padding-bottom: 100rpx;
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
        padding: 28rpx 40rpx 0rpx;
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
      .brife-p6 {
        padding: 0rpx 40rpx 40rpx;
        clear: both;
        font-size: 24rpx;
        line-height: 32rpx;
      }
    }
    &__tip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30rpx auto 0;
      width: 670rpx;
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
    &__most {
      width: 100%;
      margin-top: 40rpx;
      background: #fff;
      font-size: 30rpx;
      box-shadow: 1rpx -1rpx 26rpx rgba(0, 0, 0, 0.05);
      .most-topic {
        font-size: 34rpx;
        margin: 50rpx 40rpx 10rpx;
      }
      .most-p {
        padding: 10rpx 40rpx;
        line-height: 54rpx;
      }
    }

    .exhibition-info__scroll {
      margin-top: 32rpx;
    }
    .exhibition-info__content {
      padding-left: 40rpx;
      width: 3000rpx;
      .swipe {
        height: 180rpx;
      }
    }
    .exhibition-info__scroll-div {
      display: inline-block;
      width: 240rpx;
      height: 180rpx;
      border-radius: 0 20rpx 0 0;
      margin-right: 20rpx;
    }
    &__box {
      position: absolute;
      top: 234rpx;
      left: 0;
      bottom: 0;
      padding: 40rpx;
      background: #fff;
      border-radius: 0 20rpx 0 0;
      .close {
        position: absolute;
        top: 30rpx;
        right: 30rpx;
        z-index: 10;
        width: 24rpx;
        height: 24rpx;
      }
    }
    &__success {
      width: 560rpx;
      height: 550rpx;
      background: #fff;
      border-radius: 10rpx;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -280rpx;
      margin-top: -275rpx;
      .ok-icon{
        width: 200rpx;
        height: 200rpx;
        margin: 80rpx 0 0 180rpx;
      }
      .font{
        font-size: 40rpx;
        text-align: center;
        width: 100%;
        margin: 0;
        clear: both;
      }
      .font-span{
        clear: both;
        float: left;
        width: 380rpx;
        font-size: 24rpx;
        opacity: .4;
        margin: 20rpx 90rpx;
        text-align: center;
      }
    }
  }
</style>
