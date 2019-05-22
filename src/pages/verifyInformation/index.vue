<template>
  <div class="verify-info">
    <common-header title="验证会员信息" navBackgroundColor="#fff" titleColor="#232323"></common-header>
    <div class="verify-info__information" v-if="!verifySuccess && !verifyFail">
      <h3>验证会员信息</h3>
      <div class="write">
        <input type="text" placeholder="姓名" />
        <input type="text" style="margin-top: 40rpx;" placeholder="出生日期" />
        <input type="text" style="margin: 40rpx 0;" placeholder="手机号" />
        <input type="text" placeholder="验证码" />
        <a class="send">发送验证码</a>
      </div>
    </div>
    <a class="verify-info__btn" @click="verify" v-if="!verifySuccess && !verifyFail">立即验证</a>
    <div v-if="verifySuccess && !verifyFail">
      <image class="verify-info__img" src="/static/images/ok.png"></image>
      <p class="verify-info__content">验证成功</p>
      <a class="verify-info__goBack" @click="goBack">返回</a>
    </div>
    <div v-if="!verifySuccess && verifyFail">
      <image class="verify-info__img" src="/static/images/result1.png"></image>
      <p class="verify-info__content">验证失败，会员信息不符</p>
      <div class="verify-info__tip">如有任何问题，您也可以联系我们</div>
      <div class="verify-info__tip">电话：+86 10 5780 0220</div>
      <div class="verify-info__tip">邮箱：ve@ucca.org.cn</div>
      <a class="verify-info__goBack" @click="goBack">返回</a>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'VerifyInformation',
    components: { CommonHeader },
    data () {
      return {
        verifySuccess: false, // 验证成功
        verifyFail: false // 验证失败
      }
    },
    methods: {
      verify () {
        this.verifyFail = true
      },
      goBack () {
        this.verifySuccess = false
        this.verifyFail = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .verify-info {
    padding-bottom: 130rpx;
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
    &__img {
      margin: 200rpx auto 0;
      display: block;
      width: 200rpx;
      height: 186rpx;
    }
    &__content {
      margin-top: 60rpx;
      font-size: 42rpx;
      color: #232323;
      text-align: center;
    }
    &__tip {
      margin-top: 12rpx;
      font-size: 24rpx;
      line-height: 24rpx;
      text-align: center;
      opacity: 0.4;
    }
    &__goBack {
      position: absolute;
      left: 50%;
      bottom: 220rpx;
      transform: translateX(-50%);
      padding: 0 80rpx;
      display: block;
      height: 80rpx;
      line-height: 80rpx;
      font-size: 30rpx;
      text-align: center;
      border: 2px solid #232323;
    }
  }
</style>
