<template>
  <div class="exhibition-hall">
    <common-header backToPrevious="true" title="当代文明启示录" :navBackgroundColor="showOrHiddenPic ? '#6F5654' : '#000'" titleColor="#fff" />
    <div class="exhibition-hall__map" v-if="showOrHiddenPic">
      <image src="" class="img"></image>
      <div class="arrow" @click="hiddenPic">
        <image class="arrow-pic" src="/static/images/arrow-white.png"></image>
      </div>
    </div>
    <guide-list :showOrHiddenPic="showOrHiddenPic" @showOrHiddenPic="getShowOrHiddenFlag"></guide-list>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import GuideList from '@/components/guide/GuideList'
  export default {
    name: 'ExhibitionHall',
    components: { CommonHeader, GuideList },
    data () {
      return {
        showOrHiddenPic: true
      }
    },
    methods: {
      hiddenPic () {
        this.showOrHiddenPic = false
      },
      getShowOrHiddenFlag () {
        this.showOrHiddenPic = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .exhibition-hall {
    &__map {
      position: relative;
      padding: 40rpx 62rpx;
      background: #6F5654;
      .img {
        width: 620rpx;
        height: 308rpx;
        border: 2rpx solid #fff;
      }
      .arrow {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        display: inline-block;
        width: 100rpx;
        height: 30rpx;
        line-height: 30rpx;
        text-align: center;
        background: #000;
        opacity: 0.6;
        .arrow-pic {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 100;
          width: 30rpx;
          height: 54rpx;
          transform: translate(-50%, -50%) rotate(-90deg) scale(.4);
        }
      }
    }
  }
</style>
