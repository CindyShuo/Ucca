<template>
  <view class='bottom-menu'>
    <a href="/pages/index/main" @click="flag = 1">
      <image class="bottom-div" v-if="flag === 1" src='/static/images/footerMenu/bottom1-.png'></image>
      <image class="bottom-div" v-else src='/static/images/footerMenu/bottom1.png'></image>
    </a>
    <a href="/pages/logs/main" @click="flag = 2">
      <image class='bottom-div' v-if="flag === 2" src='/static/images/footerMenu/bottom2-.png'></image>
      <image class='bottom-div' v-else src='/static/images/footerMenu/bottom2.png'></image>
    </a>
    <a href="/pages/index/main" @click="flag = 3">
      <image class='bottom-div' v-if="flag === 3" src='/static/images/footerMenu/bottom3.png'></image>
      <image class='bottom-div' v-else src='/static/images/footerMenu/bottom3.png'></image>
    </a>
    <a href="/pages/logs/main" @click="flag = 4">
      <image class='bottom-div' v-if="flag === 4" src='/static/images/footerMenu/bottom4.png'></image>
      <image class='bottom-div' v-else src='/static/images/footerMenu/bottom4.png'></image>
    </a>
  </view>
</template>

<style scoped>
  .bottom-menu{
    position: fixed;
    bottom :0;
    width: 750rpx;
    height: 100rpx;
    background: #fff;
    z-index: 10009;
    box-shadow: 1rpx -1rpx 1rpx rgba(0,0,0,.05);
    display: flex;
    justify-content: center;
  }
  .bottom-div{
    float: left;
    width: 55rpx;
    height: 81rpx;
    margin: 12rpx 60rpx;
  }
</style>

<script>
  export default {
    data () {
      return {
        flag: 1
      }
    },
    methods: {

    }
  }
</script>
