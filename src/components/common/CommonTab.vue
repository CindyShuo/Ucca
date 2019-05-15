<template>
  <view class="top-menu" v-bind:style="[!tabFontStyle ? 'padding: 0 194rpx' : '']">
    <a v-for="(item, index) in arr" :key="index" @click="tabFlag(index)" class="top-menu-p" v-bind:class="[ tabFontStyle ? 'top-menu-small_p' : '', index === flag ? 'active' : '']">{{ item }}</a>
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
        this.flag = index
        this.$emit('flag', this.flag)
      }
    },
    onLoad (options) {
      if (options.type) {
        this.flag = Number(options.type)
      } else {
        this.tabFlag(0)
      }
    }
  }
</script>

<style scoped>
  .top-menu {
    display: flex;
    justify-content: space-between;
    padding: 0 70rpx;
    width: 100%;
    height: 93rpx;
    background: #fff;
    border-bottom: 1rpx solid rgba(0,0,0,.1);
    box-sizing: border-box;
  }
  .top-menu-p {
    float: left;
    /*width: 84rpx;*/
    padding: 0;
    font-size: 42rpx;
    line-height: 80rpx;
  }
  .top-menu-small_p {
    float: left;
    /*width: 112rpx;*/
    font-size: 28rpx;
    font-weight: bold;
    color: #232323;
    line-height: 80rpx;
  }
  .active {
    border-bottom: solid 4rpx red;
  }
</style>
