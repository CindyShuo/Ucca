<template>
  <div class="choose-ticket">
    <div class="choose-ticket__count">
      <p>购买数量</p>
      <div class="num">
        <a class="subtract" @click="subtract">-</a>
        <span>{{ count }}</span>
        <a class="add" @click="add">+</a>
      </div>
    </div>
    <div class="choose-ticket__footer">
      <div class="price">
        <span class="title">合计</span>
        <span class="total">￥{{ price * count }}</span>
      </div>
      <a class="button">下一步</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChooseTicket',
    data () {
      return {
        price: 138,
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .choose-ticket {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &__count {
      display: flex;
      align-items: center;
      height: 100rpx;
      padding-left: 40rpx;
      padding-right: 35rpx;
      border-top: 1rpx solid rgba(0, 0, 0, .1);
      border-bottom: 1rpx solid rgba(0, 0, 0, .1);
      background-color: #fff;
      p {
        flex: 1;
        font-size: 24rpx;
        color: #232323;
      }
      .num {
        display: flex;
        align-items: center;
        width: 178rpx;
        a {
          width: 50rpx;
          height: 50rpx;
          background-color: rgba(0, 0, 0, 0.04);
          line-height: 50rpx;
          text-align: center;
          font-size: 35rpx;
          &.subtract {
            color: rgba(35, 35, 35, .2);
          }
          &.add {
            color: #232323;
          }
        }
        span {
          flex: 1;
          padding: 0 10rpx;
          line-height: 50rpx;
          text-align: center;
        }
      }
    }
    &__footer {
      display: flex;
      width: 100%;
      height: 100rpx;
      background-color: #fff;
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
</style>
