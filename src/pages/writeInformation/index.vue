<template>
  <div class="write-information" :style="step ? 'padding-bottom: 230rpx' : ''">
    <common-header :title="step ? '确认会员信息' : '填写会员信息'" navBackgroundColor="#fff" titleColor="#232323"></common-header>
    <div class='write-information__top'>
      <image class='pic' :src='orderList.imgSrc'></image>
      <div class='font'>
        <div class='font-1'>{{ orderList.title }}</div>
        <div class='font-2'>{{ orderList.status }}</div>
        <div class='font-3'>{{ orderList.money }} <span>X {{ orderList.number }}</span></div>
      </div>
    </div>
    <div class="write-information__information" v-if="!step">
      <h3>填写你的会员信息</h3>
      <div class="write">
        <input type="text" placeholder="姓名" />
        <input type="text" style="margin-top: 40rpx;" placeholder="出生日期" />
        <input type="text" style="margin: 40rpx 0;" placeholder="手机号" />
        <input type="text" placeholder="验证码" />
        <a class="send">发送验证码</a>
      </div>
    </div>
    <div class="write-information__information" v-else-if="step">
      <h3>你的会员信息</h3>
      <div class="confirm">
        <div>
          <span>姓名</span>
          <p>曾庆芬</p>
        </div>
        <div style="margin: 40rpx 0;">
          <span>出生日期</span>
          <p>1993/07/11</p>
        </div>
        <div>
          <span>手机号</span>
          <p>15521328933</p>
        </div>
      </div>
    </div>
    <div class="write-information__information" style="padding-top: 0" v-if="!step">
      <h3>填写同办人的会员信息</h3>
      <div class="write">
        <input type="text" placeholder="姓名" />
        <input type="text" style="margin-top: 40rpx;" placeholder="出生日期（非必填）" />
        <input type="text" placeholder="手机号" style="margin: 40rpx 0;" />
        <input type="text" placeholder="验证码" />
        <a class="send">发送验证码</a>
      </div>
    </div>
    <div class="write-information__information" style="padding: 0 40rpx;" v-else-if="step">
      <h3>同办人的会员信息</h3>
      <div class="confirm">
        <div>
          <span>姓名</span>
          <p>曾庆芬</p>
        </div>
        <div style="margin: 40rpx 0;">
          <span>出生日期</span>
          <p>1993/07/11</p>
        </div>
        <div>
          <span>手机号</span>
          <p>15521328933</p>
        </div>
      </div>
    </div>
    <p class="write-information__tip" v-if="step">该会员已是UCCA会员，会员有效期将延长一年</p>
    <a class="write-information__btn" v-if="!step" @click="firstStep">下一步</a>
    <div class="write-information__footer" v-else-if="step">
      <div class="choose-check">
        <checkbox checked color="#232323" class="box" />同意<span>《UCCA用户协议》</span>
      </div>
      <div class="footer-btn">
        <div class="price">
          <span class="title">合计</span>
          <span class="total">{{ orderList.money }}</span>
        </div>
        <a class="button" @click="nextStep">下一步</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'WriteInformation',
    components: { CommonHeader },
    data () {
      return {
        step: false,
        orderList: {
          imgSrc: '/static/images/me-banner3.png',
          title: 'UCCA双人年卡',
          status: '标准卡',
          type: '活动普通票',
          money: '￥138',
          number: '1张'
        }
      }
    },
    methods: {
      firstStep () {
        this.step = true
      },
      nextStep () {
        wx.navigateTo({
          url: '/pages/verifyInformation/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .write-information {
    position: relative;
    padding-bottom: 130rpx;
    &__top {
      position: relative;
      padding: 30rpx 40rpx;
      width: 670rp;
      height: 250rpx;
      background: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      .pic {
        margin: 0 auto 30rpx;
        width: 230rpx;
        height: 180rpx;
        float: left;
      }
      .font {
        float: left;
        margin-left: 30rpx;
        .font-1 {
          margin-top: 5rpx;
          font-size: 34rpx;
        }
        .font-2 {
          margin-top: 10rpx;
          font-size: 24rpx;
          opacity: 0.7;
        }
        .font-3 {
          font-size: 30rpx;
          margin-top: 20rpx;
          span {
            font-size: 24rpx;
          }
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
    &__information {
      padding: 40rpx;
      clear: both;
      h3 {
        margin: 0 0 20rpx;
        font-size: 34rpx;
        color: #232323;
      }
      .write {
        position: relative;
        padding: 40rpx;
        background: #fff;
        input {
          height: 40rpx;
          line-height: 40rpx;
          font-size: 28rpx;
          color: #232323;
          &::placeholder {
            font-size: 28rpx;
            color: #eee;
          }
        }
        .send {
          position: absolute;
          right: 40rpx;
          bottom: 40rpx;
          z-index: 10;
          font-size: 28rpx;
          font-weight: bold;
          line-height: 40rpx;
          color: #ED3024;
        }
      }
      .confirm {
        position: relative;
        padding: 40rpx;
        background: #fff;
        div {
          height: 40rpx;
          line-height: 40rpx;
          span {
            display: inline-block;
            min-width: 112rpx;
            font-size: 28rpx;
            opacity: 0.4;
          }
          p {
            margin-left: 100rpx;
            display: inline-block;
            font-size: 28rpx;
          }
        }
      }
    }
    &__tip {
      margin-top: 20rpx;
      padding: 0 40rpx;
      font-size: 24rpx;
      line-height: 24rpx;
      color: #ED3024;
    }
    &__btn {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 30rpx;
      text-align: center;
      color: #FFF;
      background: #232323;
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      .choose-check {
        padding-left: 40rpx;
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 24rpx;
        color: #000012;
        background: #fff;
        border-top: 1rpx solid rgba(0, 0, 0, .1);
        .box {
          transform: scale(.6);
        }
        span {
          color: #ED3024;
        }
      }
      .footer-btn {
        display: flex;
        width: 100%;
        height: 100rpx;
        background-color: #fff;
        border-top: 1rpx solid rgba(0, 0, 0, .1);
        .price {
          flex: 1;
          padding-left: 40rpx;
          line-height: 100rpx;
          .title {
            margin-right: 10rpx;
            font-size: 24rpx;
            color: rgba(0,0,0,.6);
          }
          .total {
            font-size: 42rpx;
            color: #ed3024;
          }
        }
        .button {
          display: block;
          width: 240rpx;
          height: 100rpx;
          background-color: #000;
          line-height: 100rpx;
          font-size: 30rpx;
          color:#fff;
          text-align: center;
        }
      }
    }
  }
</style>
