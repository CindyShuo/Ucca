<template>
  <view class="top-menu">
    <a v-for="(item, index) in arr" :key="index" @click="tabFlag(index)" class='top-menu-p' v-bind:class="[ tabFontStyle ? 'top-menu-small_p' : 'top-menu', index === flag ? 'active' : '']">{{ item }}</a>
  </view>
</template>

<script>
  export default {
    name: 'CommonTab',
    props: {
      arr: {
        type: String,
        required: true
      },
      tabFontStyle: {
        type: String
      }
    },
    data () {
      return {
        flag: 0
      }
    },
    methods: {
      tabFlag (index) {
        console.log(this.flag)
        this.flag = index
        this.$emit('flag', this.flag)
      }
    }
  }
</script>

<style scoped>
  .top-menu {
    display: flex;
    justify-content: center;
    width: 750rpx;
    height: 93rpx;
    background: #fff;
    border-bottom: 1rpx solid rgba(0,0,0,.1)
  }
  .top-menu-p {
    float: left;
    width: 84rpx;
    font-size: 42rpx;
    margin: 0 80rpx;
    line-height: 80rpx;
  }
  .top-menu-small_p {
    float: left;
    width: 112rpx;
    font-size: 28rpx;
    font-weight: bold;
    color: #232323;
    margin: 0 70rpx;
    line-height: 80rpx;
  }
  .active {
    border-bottom: solid 4rpx red;
  }
</style>
