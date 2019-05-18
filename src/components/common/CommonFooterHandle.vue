<template>
  <div class='common-footer-handle'>
    <div class='common-footer-handle__div' v-bind:style="[type? 'width: 270rpx': '']">
      <a href="/pages/index/main" class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon1.png'></image>
      </a>
      <a class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon2.png'></image>
      </a>
      <a @click="onShareAppMessage" class="common-footer-handle__a">
        <image class='div1' src='/static/images/footerHandle/details-icon3.png'></image>
      </a>
    </div>
    <div @click="groupAppointment" class='common-footer-handle__div common-footer-handle__div2' v-if="!type">团体预约<div class='content'>20人以上</div></div>
    <div @click="buyTicket" class='common-footer-handle__div common-footer-handle__div3' v-if="!type">立即购票</div>
    <div @click="participate" class='common-footer-handle__div common-footer-handle__div3' style="width: 480rpx" v-else-if="type">参与活动</div>
  </div>
</template>

<script>
  export default {
    name: 'CommonFooterHandle',
    props: ['type'],
    data () {
      return {
        isGroupAppointment: false,
        isBuyTicket: false,
        isParticipate: false
      }
    },
    methods: {
      // 团体预约
      groupAppointment () {
        this.isGroupAppointment = true
        this.$emit('buyTicket', {'buyTicket': this.isGroupAppointment, 'type': 'groupAppointment'})
      },
      // 立即购票
      buyTicket () {
        this.isBuyTicket = true
        this.$emit('buyTicket', {'buyTicket': this.isBuyTicket, 'type': 'buyTicket'})
      },
      // 参与活动
      participate () {
        this.participate = true
        this.$emit('buyTicket', {'buyTicket': this.isParticipate, 'type': 'participate'})
      },
      onShareAppMessage (options) {
        // var that = this
        // 设置菜单中的转发按钮触发转发事件时的转发内容
        var shareObj = {
          title: '转发的标题', // 默认是小程序的名称(可以写slogan等)
          path: '/pages/index/main', // 默认是当前页面，必须是以‘/’开头的完整路径
          imageUrl: '', // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
          success: function (res) {
            // 转发成功之后的回调
            if (res.errMsg === 'shareAppMessage:ok') {
            }
          },
          fail: function (e) {
            // 转发失败之后的回调
            if (e.errMsg === 'shareAppMessage:fail cancel') {
              // 用户取消转发
            } else if (e.errMsg === 'shareAppMessage:fail') {
              // 转发失败，其中 detail message 为详细失败信息
            }
          },
          complete () {
          // 转发结束之后的回调（转发成不成功都会执行）
          }
        }
        // 来自页面内的按钮的转发
        if (options.from === 'button') {
          var eData = options.target.dataset
          console.log(eData.name)// shareBtn
          // 此处可以修改 shareObj 中的内容
          shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name
        }
        // 返回shareObj
        return shareObj
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-footer-handle {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 750rpx;
    height: 100rpx;
    background: #fff;
    z-index: 10009;
    box-shadow: 1rpx -1rpx 1rpx rgba(0, 0, 0, 0.05);
    &__div {
      float: left;
      width: 248rpx;
      height: 100%;
      border-right: 1rpx solid rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    &__a {
      display: inline-block;
      width: 82rpx;
      height: 100%;
      .div1 {
        width: 82rpx;
        height: 100%;
      }
    }
    &__div2 {
      font-size: 30rpx;
      line-height: 80rpx;
      position: relative;
      .content {
        position: absolute;
        font-size: 20rpx;
        opacity: 0.6;
        width: 100%;
        top: 30rpx;
      }
    }
    &__div3 {
      background: #000;
      color: #fff;
      font-size: 30rpx;
      line-height: 100rpx;
    }
  }
</style>
