<template>
  <view class="top-menu">
    <a v-for="(item, index) in arr" class='top-menu-p' >{{ item }}</a>
  </view>
</template>

<script>
  export default {
    name: 'CommonTab',
    props: {
      arr: {
        type: String,
        required: true
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
  .active {
    border-bottom: solid 4rpx red;
  }
</style>
