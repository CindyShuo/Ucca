<template>
  <div class="user-center">
    <common-header :back-visible="true" title="个人信息" />
    <div class="user-center__list">
      <div class="item">
        <p>头像</p>
        <image
          src="/static/images/photo.png"
          class="portrait"
        ></image>
      </div>
      <div class="item">
        <p>昵称</p>
        <p>...</p>
      </div>
    </div>
    <div class="user-center__list" style="margin-top: 30rpx">
      <div class="item" style="margin-top: 0">
        <p>姓名</p>
        <p>曾庆芬</p>
      </div>
      <div class="item">
        <p>出生日期</p>
        <p>1993/07/11</p>
      </div>
      <div class="item">
        <p>手机号</p>
        <p>177********</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'

  export default {
    name: 'UserCenter',
    components: { CommonHeader }
  }
</script>

<style lang="less" scoped>
  .user-center {
    &__list {
      width: 100%;
      padding: 52rpx 50rpx;
      background-color: #fff;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60rpx;
        &:last-child {
          margin-bottom: 0;
        }
        .portrait {
          display: block;
          width: 80rpx;
          height: 80rpx;
        }
        p {
          line-height: 40rpx;
          font-size: 28rpx;
          color: #232323;
        }
      }
    }
  }
</style>
