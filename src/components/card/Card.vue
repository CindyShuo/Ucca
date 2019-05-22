<template>
  <div class="year-card">
    <div class="year-card__content">
      <image
        src='/static/images/close.png'
        @click="close"
        class='year-card__close'
      ></image>
      <image class="title-pic" src="/static/images/me-banner3.png"></image>
      <h2>UCCA单人年卡</h2>
      <p>已选：单人年卡</p>
      <div class="line"></div>
      <div class='year-card__topic'>会员卡种类</div>
      <div class='year-card__kuang year-card__kuang1'>
        <div class="card">
          <p>单人年卡</p>
          <p>¥500/年</p>
        </div>
        <div class='kuang-span'>UCCA会员一年有效期（仅限本人使用）</div>
      </div>
      <div class='year-card__kuang'>
        <div class="card">
          <p>双人优惠年卡</p>
          <p>¥800/年</p>
        </div>
        <div class='kuang-span kuang1-span'>UCCA会员一年有效期（仅限本人使用）</div>
      </div>
    </div>
    <div class="year-card__count">
      <p>购买年数</p>
      <div class="num">
        <a class="subtract" @click="subtract">-</a>
        <span>{{ count }}</span>
        <a class="add" @click="add">+</a>
      </div>
    </div>
    <div class="year-card__footer">
      <div class="price">
        <span class="title">合计</span>
        <span class="total">￥{{ price * count }}</span>
      </div>
      <a class="button" @click="nextStep">下一步</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    components: {},
    data () {
      return {
        price: 500,
        count: 1
      }
    },
    methods: {
      subtract () {
        if (this.count === 1) return
        this.count -= 1
      },
      add () {
        this.count += 1
      },
      close () {
        this.$emit('close')
      },
      nextStep () {
        wx.navigateTo({
          url: '/pages/writeInformation/main'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .year-card {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    &__content {
      position: absolute;
      left: 0;
      bottom: 0;
      // top: 360rpx;
      padding: 160rpx 40rpx 250rpx;
      width: 100%;
      // height: 100%;
      background-color: #fff;
      border-radius: 0 20rpx 0 0;
      .title-pic {
        position: absolute;
        top: -102rpx;
        left: 40rpx;
        width: 380rpx;
        height: 240rpx;
      }
      h2 {
        font-size: 34rpx;
        line-height: 34rpx;
        color: #232323;
      }
      p {
        margin-top: 20rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        color: #232323;
        opacity: 0.7;
      }
      .line {
        margin: 30rpx auto 40rpx;
        width: 100%;
        height: 1rpx;
        opacity: 0.1;
        border-bottom: 1rpx solid #232323;
      }
    }
    &__topic {
      margin-top: 40rpx;
      width: 100%;
      font-size: 24rpx;
      font-weight: bold;
      .topic-span {
        float: right;
        color: red;
        font-weight: normal;
      }
    }
    &__kuang {
      height: 120rpx;
      border-radius: 0 20rpx 0 0;
      background: rgba(0, 0, 0, 0.1);
      padding: 20rpx 30rpx 0;
      margin-top: 20rpx;
      .card {
        display: flex;
        justify-content: space-between;
        p {
          margin-top: 0;
          font-size: 28rpx;
          font-weight: bold;
        }
      }
      .kuang-span {
        font-size: 24rpx;
        color: rgba(0, 0, 0, 0.4);
        margin-top: 20rpx;
        font-weight: normal;
      }
    }
    &__kuang1 {
      background: rgba(237, 48, 36, 0.1);
      .card {
        p {
          color: rgb(237, 48, 36);
        }
      }
      .kuang1-span {
        color: rgba(237, 48, 36, 0.4);
      }
    }
    &__close {
      position: absolute;
      top: 30rpx;
      right: 30rpx;
      z-index: 10;
      width: 24rpx;
      height: 24rpx;
    }
    &__count {
      position: absolute;
      left: 0;
      bottom: 100rpx;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100rpx;
      padding-left: 40rpx;
      padding-right: 35rpx;
      border-top: 1rpx solid rgba(0, 0, 0, .1);
      background-color: #fff;
      p {
        flex: 1;
        font-size: 24rpx;
        color: #232323;
        font-weight: bold;
      }
      .num {
        display: flex;
        align-items: center;
        width: 178rpx;
        a {
          width: 50rpx;
          height: 50rpx;
          line-height: 50rpx;
          text-align: center;
          font-size: 35rpx;
          font-weight: bold;
          &.subtract {
            background: rgba(0, 0, 0, 0.05);
            color:rgba(0,0,0,.1);
          }
          &.add {
            background: rgba(0, 0, 0, 0.1);
            color:rgba(0,0,0,.2);
          }
        }
        span {
          flex: 1;
          padding: 0 10rpx;
          line-height: 50rpx;
          font-size: 24rpx;
          font-weight: bold;
          text-align: center;
        }
      }
    }
    &__footer {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 100rpx;
      border-top: 1rpx solid rgba(0, 0, 0, .1);
      background-color: #fff;
      .price {
        flex: 1;
        padding-left: 40rpx;
        line-height: 100rpx;
        font-weight: bold;
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
        font-weight: bold;
        color:#fff;
        text-align: center;
      }
    }
  }
</style>
