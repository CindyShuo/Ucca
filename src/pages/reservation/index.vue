<template>
  <div class="reservation-index">
    <common-header :back-visible="true" title="展览预约" />
    <div class='reservation-index__top'>
      <image class='pic' src='/static/images/pic.png'></image>
      <div class='font'>
        <div class='font-1'>王音：礼物</div>
        <div class='font-2'>尤伦斯当代艺术中心（北京798）</div>
        <div class='font-2'>2019.6.15-2019.9.1</div>
      </div>
    </div>
    <common-entry titleFontStyle="font-size: 34rpx" title="请选择预约日期" type="none" />
    <div v-if="calendar" :animation="animationData" class='reservation-index__date'>
      <in-calendar :calendarFlag="calendar" @flag="selectCalendar" />
    </div>
    <div class='reservation-index__time'>
      <div class='time'>
        <div class='time-font'>2019年8月18日</div>
        <image class='time-icon'  src='/static/images/date.png' @click="chooseGCalendar"></image>
      </div>
      <div class='choice-topic'>选择时段</div>
      <div class='choice-bg choice-bg1'>10:00-12:00</div>
      <div class='choice-bg choice-bg2'>10:00-12:00
        <div class='choice-bg2-span'>约满</div>
      </div>
      <div class='choice-bg choice-bg3'>10:00-12:00
        <div class='choice-bg3-span'>约满</div>
      </div>
      <div class='choice-bg choice-bg3'>10:00-12:00</div>
    </div>
    <a class='reservation-index__button'>确认预约</a>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonEntry from '@/components/common/CommonEntry'
  import InCalendar from '@/components/common/calendar/src/calendar'
  export default {
    name: 'Reservation',
    components: { CommonHeader, CommonEntry, InCalendar },
    data () {
      return {
        calendar: true,
        animationData: {}
      }
    },
    methods: {
      chooseGCalendar () {
        // 用that取代this，防止不必要的情况发生
        let that = this
        // 创建一个动画实例
        let animation = wx.createAnimation({
          // 动画持续时间
          duration: 600,
          // 定义动画效果，当前是匀速
          timingFunction: 'linear'
        })
        // 将该变量赋值给当前动画
        that.animation = animation
        // 先在y轴偏移，然后用step()完成一个动画
        animation.translateY(300).step()
        // 通过export()方法导出数据
        that.animationData = animation.export()
        // 改变view里面的Wx：if
        that.calendar = true
        // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
        setTimeout(function () {
          animation.translateY(0).step()
          that.animationData = animation.export()
        }, 100)
      },
      hideModal () {
        let that = this
        let animation = wx.createAnimation({
          duration: 600,
          timingFunction: 'linear'
        })
        that.animation = animation
        animation.translateY(500).step()
        that.animationData = animation.export()
        setTimeout(function () {
          animation.translateY(0).step()
          that.animationData = animation.export()
          that.calendar = false
        }, 500)
      },
      selectCalendar (val) {
        // 选择完日期后关闭日历框
        this.hideModal()
      }
    }
  }
</script>

<style lang="less" scoped>
  .reservation-index {
    position: relative;
    padding-bottom: 130rpx;
    &__top {
      position: relative;
      padding: 40rpx;
      margin-bottom: 40rpx;
      width: 670rp;
      height: 262rpx;
      background: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      .pic {
        margin: 0 auto 30rpx;
        width: 230rpx;
        height: 180rpx;
        float: left;
        border-radius: 4rpx;
      }
      .font {
        float: left;
        margin-left: 30rpx;
        .font-1 {
          margin-top: 5rpx;
          font-size: 34rpx;
        }
        .font-2 {
          font-size: 24rpx;
          margin-top: 10rpx;
          opacity: 0.6;
        }
        .font-3 {
          font-size: 42rpx;
          margin-top: 25rpx;
        }
      }
      .list {
        font-size: 30rpx;
        color: #232323;
        font-weight: bold;
        line-height: 30rpx;
        .list-span {
          font-size: 30rpx;
          line-height: 30rpx;
          float: right;
        }
        .list-span1 span {
          font-size: 30rpx;
          line-height: 30rpx;
        }
      }
      .order-font {
        width: 670rpx;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
    &__date {
      position: absolute;
      top: 500rpx;
      left: 0;
      z-index: 101;
      margin-top: 30rpx;
      padding: 50rpx 0;
      background: #fff;
    }
    &__time {
      width: 100%;
      margin-top: 30rpx;
      height: 552rpx;
      border-radius: 0 20rpx 0 0;
      padding: 30rpx 40rpx;
      background: #fff;
      box-shadow: 3rpx 3rpx 25rpx rgba(0,0,0,.1);
      .time {
        width: 100%;
        height: 70rpx;
        border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
      }

      .time-font {
        font-size: 34rpx;
        float: left;
        height: 40rpx;
        line-height: 40rpx;
      }

      .time-icon {
        width: 44rpx;
        height: 40rpx;
        float: right;
      }

      .choice-topic {
        margin: 30rpx 0 0;
        font-size: 24rpx;
        opacity: 0.7;
      }

      .choice-bg {
        margin-top: 30rpx;
        float: left;
        width: 320rpx;
        height: 80rpx;
        text-indent: 30rpx;
        line-height: 80rpx;
        border-radius: 0 20rpx 0 0;
        font-size: 28rpx;
        background: rgba(0,0,0,0.4);
      }
      .choice-bg:nth-child(even) {
        margin-right: 30rpx;
      }
      .choice-bg1 {
        background: rgba(237,48,36,.1);
        color: red;
        float: none;
      }
      .choice-bg2 {
        position: relative;
        background: rgba(0,0,0,.1);
        color: rgba(0,0,0,.6);
      }
      .choice-bg2-span {
        opacity: .5;
        position: absolute;
        right: 30rpx;
        top: 0;
      }
      .choice-bg3 {
        position: relative;
        background: rgba(0,0,0,.04);
        color: rgba(0,0,0,.6);
      }
      .choice-bg3-span {
        position: absolute;
        right: 30rpx;
        top: 0;
        color: red;
      }
    }
    &__button {
      position: fixed;
      bottom: 0;
      display: inline-block;
      height: 100rpx;
      line-height: 100rpx;
      width: 100%;
      background: #000;
      font-size: 30rpx;
      color: #fff;
      text-align: center;
    }
  }
</style>
