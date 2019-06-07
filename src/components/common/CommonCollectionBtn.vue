<template>
  <div class="common-collection-btn" @click="submitLike">
    <image class="button" :src="isCollection ? '/static/images/footerHandle/is_collect.png' : '/static/images/footerHandle/collect.png'"></image>
    <p class="text">收藏</p>
  </div>
</template>

<script>
  export default {
    name: 'CommonCollectionBtn',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        isCollection: false
      }
    },
    methods: {
      submitLike () {
        this.$http.submitLike(this.id)
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-collection-btn {
    width: 54rpx;
    .button {
      display: block;
      width: 54rpx;
      height: 54rpx;
    }
    .text {
      line-height: 28rpx;
      font-size: 20rpx;
      color: #232323;
      text-align: center;
    }
  }
</style>
