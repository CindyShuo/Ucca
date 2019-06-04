<template>
  <div class="member-benefits">
    <common-header :back-visible="true" theme="black" />
    <div class="member-benefits__title">
      <image class="card" src="/static/images/me-banner4.png"></image>
      <h3>VIP 会员年卡</h3>
      <p class="benefits">办理UCCA会员卡，即享6大权益！</p>
    </div>
    <div class="member-benefits__interests">
      <div class="first-row">
        <div class="detail" @click="switchTicket(1)">
          <image src="/static/images/mfgz.png"></image>
          <p>免费观展</p>
        </div>
        <div class="detail" @click="switchTicket(2)">
          <image src="/static/images/zstd.png"></image>
          <p>专属通道</p>
        </div>
        <div class="detail" @click="switchTicket(3)">
          <image src="/static/images/zshd.png"></image>
          <p>专属活动</p>
        </div>
      </div>
      <div class="first-row second-row">
        <div class="detail" @click="switchTicket(4)">
          <image src="/static/images/jthk.png"></image>
          <p>家庭回馈</p>
        </div>
        <div class="detail" @click="switchTicket(5)">
          <image src="/static/images/xfzk.png"></image>
          <p>消费折扣</p>
        </div>
        <div class="detail" @click="switchTicket(6)">
          <image src="/static/images/qtyh.png"></image>
          <p>其他优惠</p>
        </div>
      </div>
    </div>
    <div class="member-benefits__line"></div>
    <div class="member-benefits__description" v-if="showTicketFlag === 1">
      <h2>免费观展</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__description" v-if="showTicketFlag === 2">
      <h2>专属通道</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__description" v-if="showTicketFlag === 3">
      <h2>专属活动</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__description" v-if="showTicketFlag === 4">
      <h2>家庭回馈</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__description" v-if="showTicketFlag === 5">
      <h2>消费折扣</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__description" v-if="showTicketFlag === 6">
      <h2>其他优惠</h2>
      <p>免费观看 UCCA 尤伦斯当代艺术中心及 UCCA 沙丘美术馆全年所有常规艺术展 览，同行的一位同伴可享受优惠价购票(特殊项目除外)</p>
    </div>
    <div class="member-benefits__footer">
      <div class="left" @click="goVerify">
        <span class="already">已是会员？</span>
        <span class="confirm">立即验证</span>
      </div>
      <a class="button" @click="chooseHandle">立即办理会员</a>
    </div>
    <common-picker v-if="handle">
      <div v-if="handle" :animation="animationData" style="position: absolute;left: 0;bottom: 0;width: 100%;height: 100%;">
        <card @close="hideModal"></card>
      </div>
    </common-picker>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonPicker from '@/components/common/CommonPicker'
  import Card from '@/components/user/Card'
  export default {
    name: 'MemberBenefits',
    components: { CommonHeader, CommonPicker, Card },
    data () {
      return {
        handle: false,
        animationData: {},
        showTicketFlag: 1
      }
    },
    methods: {
      nextStep () {
        this.handle = true
      },
      // 关闭弹框
      close () {
        this.handle = false
      },
      goVerify () {
        // 验证会员身份
        wx.navigateTo({
          url: '/pages/verifyInformation/main'
        })
      },
      chooseHandle () {
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
        that.handle = true
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
          that.handle = false
        }, 500)
      },
      // 切换展示内容介绍
      switchTicket (val) {
        this.showTicketFlag = val
      },
      getMember () {
        this.$http.getMemberInfo()
          .then(res => {
            console.log(res, 'res 获取会员权益信息')
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    onLoad (option) {
      if (option.handle) {
        this.handle = Boolean(option.handle)
      }
    },
    mounted () {
      this.getMember()
    }
  }
</script>

<style lang="less" scoped>
  .member-benefits {
    padding-bottom: 170rpx;
    &__title {
      position: relative;
      width: 750rpx;
      height: 232rpx;
      background: #232323;
      border-radius: 0 0 90rpx 90rpx;
      color: #fff;
      .card {
        position: absolute;
        top: 20rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 600rpx;
        height: 340rpx;
      }
      h3 {
        position: absolute;
        top: 76rpx;
        left: 180rpx;
        font-size: 30rpx;
        color: #FFFFFF;
      }
      .benefits {
        position: absolute;
        top: 146rpx;
        left: 120rpx;
        font-size: 24rpx;
        color: #fff;
        opacity: .6;
      }
    }
    &__interests {
      .first-row {
        margin: 218rpx 74rpx 0;
        // padding: 0 74rpx;
        display: flex;
        justify-content: space-around;
        .detail {
          width: 100rpx;
          image {
            display: table;
            width: 100%;
            height: 100rpx;
            border-radius: 50%;
          }
          p {
            margin-top: 20rpx;
            font-size: 24rpx;
            line-height: 24rpx;
            color: #232323;
          }
        }
      }
      .second-row {
        margin: 40rpx 74rpx 0 !important;
        padding-bottom: 25rpx;
      }
    }
    &__line {
      margin: 0 auto;
      width: 610rpx;
      height: 1rpx;
      border: 1rpx solid #232323;
      opacity: 0.1;
    }
    &__description {
      margin: 30rpx 80rpx 0;
      h2 {
        margin-bottom: 20rpx;
        font-size: 28rpx;
        line-height: 28rpx;
        color: #232323;
      }
      p {
        font-size: 24rpx;
        line-height: 40rpx;
        opacity: 0.6;
        color: #232323;
      }
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 100rpx;
      background: #232323;
      .left {
        position: relative;
        padding-top: 16rpx;
        flex: 1;
        line-height: 100rpx;
        text-align: center;
        .already {
          position: absolute;
          top: 14rpx;
          left: 74rpx;
          width: 90rpx;
          font-size: 30rpx;
          line-height: 30rpx;
          color: #fff;
          font-weight: 400;
        }
        .confirm {
          font-size: 20rpx;
          line-height: 20rpx;
          color: #FFF;
          opacity: 0.6;
        }
      }
      .button {
        display: block;
        width: 520rpx;
        height: 100rpx;
        background: #ED3024;
        line-height: 100rpx;
        font-size: 30rpx;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
