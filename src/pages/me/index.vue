<template>
  <div class="user-info">
    <common-header title="UCCA" theme="black" />
    <div class='user-info__content'>
      <div class="info">
        <image
          src='/static/images/photo.png'
          class='photo'
        ></image>
        <div class="text">
          <p class='name'>Anapple</p>
          <p class='identity'>普通用户</p>
        </div>
        <div class="blank"></div>
        <common-arrow
          area-width="32rpx"
          area-height="32rpx"
          arrow="/static/images/arrow-white.png"
          arrow-width="15rpx"
          arrow-height="27rpx"
          :click-handle="goUserCenter"
        />
      </div>
    </div>
    <div class="user-info__vip">
      <!-- 会员 -->
      <div class="card is-vip" @click="goMyCard" v-if="isVip">
        <image
          src='/static/images/me-banner1.png'
          class='bg'
        ></image>
        <div class="content">
          <p class='card-name'>VIP会员年卡</p>
          <p class='card-number'>NO.23492353</p>
        </div>
      </div>
      <!-- 普通用户 -->
      <div class="card is-normal" @click="goMemberBenefits" v-else>
        <image
          src="/static/images/me-banner2.png"
          class="bg"
        ></image>
        <div class="content">
          <p class="add-member">加入UCCA会员，免费畅享艺术展览</p>
        </div>
      </div>
    </div>
    <div class="user-info__list">
      <common-list-item icon="/static/images/me-icon1.png" text="我的票" :click-handle="goMyTicket" />
      <common-list-item icon="/static/images/me-icon2.png" text="我的收藏" :click-handle="goMyCollection" />
      <common-list-item icon="/static/images/me-icon3.png" text="意见反馈" />
      <common-list-item icon="/static/images/me-icon4.png" text="关于我们" margin="0" />
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'
  import CommonArrow from '../../components/common/CommonArrow'
  import CommonListItem from '../../components/common/CommonListItem'

  export default {
    name: 'UserInfo',
    components: { CommonHeader, CommonArrow, CommonListItem },
    data () {
      return {
        isVip: true
      }
    },
    methods: {
      goUserCenter () {
        // 跳个人中心，昵称等显示
        wx.navigateTo({
          url: '/pages/userCenter/main'
        })
      },
      goMemberBenefits () {
        // 跳会员权益页面
        wx.navigateTo({
          url: '/pages/memberBenefits/main'
        })
      },
      goMyCard () {
        // 跳我的会员卡页面
        wx.navigateTo({
          url: '/pages/memberCard/main'
        })
      },
      goMyTicket () {
        // 跳到我的票页面
        wx.navigateTo({
          url: '/pages/myTicket/main'
        })
      },
      goMyCollection () {
        // 跳到我的收藏
        wx.navigateTo({
          url: '/pages/myCollection/main'
        })
      },
      // 验证会员身份
      getVerify () {
        this.$http.getMemberVerify()
          .then(res => {
            console.log(res, 'res 验证会员身份')
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    mounted () {
      this.getVerify()
    }
  }
</script>

<style lang="less" scoped>
  .user-info {
    &__content {
      width: 750rpx;
      height: 292rpx;
      padding-top: 40rpx;
      background-color: #232323;
      border-radius: 0 0 90rpx 90rpx;
      .info {
        display: flex;
        align-items: center;
        padding: 0 40rpx;
        .photo {
          display: block;
          margin-right: 30rpx;
          width:120rpx;
          height:120rpx;
        }
        .text {
          color: #fff;
          .name {
            line-height: 56rpx;
            font-size: 42rpx;
            font-weight: bold;
          }
          .identity {
            margin-top: 10rpx;
            line-height: 34rpx;
            font-size: 24rpx;
            opacity: .6;
          }
        }
        .blank {
          flex-grow: 1;
        }
      }
  }
    &__vip {
      .card {
        position: relative;
        margin: 0 auto;
        width: 600rpx;
        color: #fff;
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
        }
        .content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
        }
        &.is-normal {
          margin-top: -60rpx;
          height: 105rpx;
          .add-member {
            padding-left: 30rpx;
            line-height: 105rpx;
            font-size: 28rpx;
          }
        }
        &.is-vip {
          margin-top: -92rpx;
          height: 168rpx;
          .card-name {
            position: absolute;
            top: 34rpx;
            left: 100rpx;
            line-height: 44rpx;
            font-size: 30rpx;
          }
          .card-number {
            position: absolute;
            left: 30rpx;
            bottom: 20rpx;
            line-height: 28rpx;
            font-size: 20rpx;
          }
        }
      }
      /*.bg {*/
        /*position: absolute;*/
        /*width: 600rpx;*/
        /*height: 106rpx;*/
        /*top: 232rpx;*/
        /*left: 74rpx;*/
      /*}*/

      /*.card {*/
        /*position: absolute;*/
        /*top: 200rpx;*/
        /*left: 74rpx;*/
        /*.card1 {*/
          /*width: 600rpx;*/
          /*height: 168rpx;*/
          /*font-size: 30rpx;*/
          /*color: #fff;*/
        /*}*/
      /*}*/
    }
    &__list {
      margin: 40rpx auto 0;
      width: 670rpx;
      padding: 50rpx 40rpx;
      border-radius: 0 20rpx 0 0;
      background-color: #fff;
      box-shadow: 0 3rpx 20rpx 0 rgba(0,0,0,.05);
    }
  }
</style>
