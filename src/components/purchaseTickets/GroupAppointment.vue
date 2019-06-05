<template>
  <div class="group-appointment">
    <div class='group-appointment__content'>
      <div class='win2-topic'>20人以上团体预约</div>
      <div class='win2-p'>为了提供更好的服务，20人以上团体购票采取登记预约的形式，请登记您的信息，后续我们将会有专人联系您进行接待</div>
      <div class="select-data" v-if="selectData" :animation="animationData">
        <div class='list list-bord'>联系人
          <div class='list-span list-span1'>2019/08/19</div>
        </div>
        <div class='line'></div>
        <div class='date'>
          <in-calendar />
        </div>
      </div>
      <div>
        <div class='list'>联系人
          <input class='list-span' placeholder="请输入联系人姓名" />
        </div>
        <div class='list'>联系电话
          <input class='list-span' placeholder="请输入联系人姓名" />
        </div>
        <div class='list'>参观人数
          <input class='list-span' placeholder="请输入您的联系电话" />
        </div>
        <div class='list'>导览服务
          <div class='list-kuang' v-bind:class="{ 'list-kuang-down': isOrNoNeed === 1 }" @click="isOrNoNeed = 1">需要</div>
          <div class='list-kuang' v-bind:class="{ 'list-kuang-down': isOrNoNeed === 0 }" @click="isOrNoNeed = 0">不需要</div>
        </div>
        <div class='list'>参观日期
          <image class='win-icon' src='/static/images/arrow.png'></image>
          <div class='list-span' @click="chooseSelectData">请选择参观日期</div>
        </div>
        <div class='list list1'>备注(非必填)
          <input class='list1-span' placeholder="您有什么想说的">
        </div>
      </div>
    </div>
    <!-- 点击时的样式还没加 group-appointment__button-down -->
    <div class='win3-button' v-if="selectData" :animation="animationData" @click="hideModal">选好了</div>
    <div v-else class='group-appointment__button' @click='confirmSubmit'>提交预约信息</div>
  </div>
</template>

<script>
  import InCalendar from '../common/calendar/src/calendar'

  export default {
    name: 'GroupAppointment',
    components: {InCalendar},
    data () {
      return {
        isOrNoNeed: 1,
        selectData: false, // 二次确认购买团票
        confirmSuccess: false, // 提交成功
        animationData: {}
      }
    },
    methods: {
      confirmSubmit () {
        this.confirmSuccess = true
        this.$emit('confirmSuccess', this.confirmSuccess)
      },
      chooseSelectData () {
        // 用that取代this，防止不必要的情况发生
        let that = this
        // 创建一个动画实例
        let animation = wx.createAnimation({
          // 动画持续时间
          duration: 600,
          // 定义动画效果，当前是匀速
          timingFunction: 'linear'
        })
        // 将该变量赋值给当前动画
        that.animation = animation
        // 先在y轴偏移，然后用step()完成一个动画
        animation.translateY(300).step()
        // 通过export()方法导出数据
        that.animationData = animation.export()
        // 改变view里面的Wx：if
        that.selectData = true
        // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
        setTimeout(function () {
          animation.translateY(0).step()
          that.animationData = animation.export()
        }, 100)
      },
      hideModal () {
        let that = this
        let animation = wx.createAnimation({
          duration: 600,
          timingFunction: 'linear'
        })
        that.animation = animation
        animation.translateY(500).step()
        that.animationData = animation.export()
        setTimeout(function () {
          animation.translateY(0).step()
          that.animationData = animation.export()
          that.selectData = false
        }, 500)
      }
    }
  }
</script>

<style lang="less" scoped>
  .group-appointment {
    &__content {
      position: relative;
      padding: 40rpx;
      .win2-topic {
        font-size: 34rpx;
        font-weight: bold;
      }
      .win2-p {
        font-size: 24rpx;
        opacity: 0.4;
        margin-top: 10rpx;
      }
      .select-data {
        position: absolute;
        top: 168rpx;
        left: 40rpx;
        z-index: 100;
        background: #fff;
      }
      .list {
        width: 670rpx;
        height: 40rpx;
        line-height: 40rpx;
        font-size: 28rpx;
        font-weight: bold;
        margin-top: 70rpx;
      }
      .list1 {
        height: auto;
      }
      .list1-span {
        clear: both;
        font-size: 24rpx;
        opacity: 0.4;
        margin-top:15rpx;
      }
      .list-span {
        font-style: normal;
        float: right;
        font-size: 24rpx;
        height: 40rpx;
        line-height: normal;
        min-height: 40rpx;
        &::placeholder {
          font-size: 24rpx;
          line-height: 1em;
          opacity: 0.4;
        }
      }
      .list-kuang {
        float: right;
        width: 100rpx;
        height: 54rpx;
        border: 1rpx solid #000;
        text-align: center;
        margin-left: 20rpx;
        line-height: 54rpx;
        margin-top: -8rpx;
        font-weight: normal;
      }
      .list-kuang-down{
        background: #000;
        color: #fff;
      }
      .win-icon {
        float: right;
        width: 20rpx;
        height: 26rpx;
        margin-top: 9rpx;
        margin-left: 30rpx;
      }
    }
    &__button {
      position: fixed;
      bottom: 30rpx;
      padding: 0 40rpx;
      height: 64rpx;
      line-height: 64rpx;
      background: #7b7b7b;
      font-size: 28rpx;
      color: #fff;
      text-align: center;
      border-radius: 64rpx;
    }
    &__button-down {
      background: #000;
    }
    .line {
      clear: both;
      margin: 20rpx 0 80rpx;
      width: 100%;
      height: 1rpx;
      background: rgba(0, 0, 0, 0.1);
    }
    .date{
      width: 686rpx;
      height: 516rpx;
      margin: auto;
    }
    .win3-button {
      position: absolute;
      bottom: 40rpx;
      left: 265rpx;
      width: 220rpx;
      height: 64rpx;
      border: 1rpx solid #232323;
      text-align: center;
      font-size: 28rpx;
      line-height: 62rpx;
      border-radius: 64rpx;
    }
  }
</style>
