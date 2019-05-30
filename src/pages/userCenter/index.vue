<template>
  <div class="user-center">
    <common-header :back-visible="true" title="个人信息" />
    <div class="user-center__info">
      <div class="avatar">
        <p>头像</p>
        <image class="pic" src="/static/images/photo.png"></image>
      </div>
      <div class="nickName">
        <p>昵称</p>
        <p>...</p>
      </div>
    </div>
    <div class="user-center__info" style="margin-top: 30rpx">
      <div class="nickName" style="margin-top: 0">
        <p>姓名</p>
        <p>曾庆芬</p>
      </div>
      <div class="nickName">
        <p>出生日期</p>
        <p>1993/07/11</p>
      </div>
      <div class="nickName">
        <p>手机号</p>
        <p>177********</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  export default {
    name: 'UserCenter',
    components: { CommonHeader }
  }
</script>

<style lang="less" scoped>
  .user-center {
    &__info {
      padding: 50rpx;
      background: #fff;
      .avatar {
        display: flex;
        justify-content: space-between;
        height: 80rpx;
        line-height: 80rpx;
        p {
          font-size: 28rpx;
          color: #232323;
        }
        .pic {
          width: 80rpx;
          height: 80rpx;
        }
      }
      .nickName {
        margin-top: 80rpx;
        display: flex;
        justify-content: space-between;
        p {
          font-size: 28rpx;
          line-height: 28rpx;
          color: #232323;
        }
      }
    }
  }
</style>
