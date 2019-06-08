<template>
  <div class="guide-index">
    <common-header title="UCCA尤伦斯当代艺术中心" />
    <div class="guide-index__content">
      <image
        :src="mapURL"
        class="map"
      ></image>
      <div
        v-for="(item, i) in hallList"
        :key="i"
        class="item"
        @click="goExhibitionHall(item.exhi_id)"
      >
        <image class="pic" src="/static/images/pic.png"></image>
        <div class="card">
          <span class="hall">{{ item.name }}</span>
          <h2>{{ item.title }}</h2>
          <p>34件作品</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '../../components/common/CommonHeader'

  export default {
    name: 'Guide',
    components: { CommonHeader },
    data () {
      return {
        mapURL: '',
        hallList: []
      }
    },
    methods: {
      getHallInfo () {
        this.$http.getHallInfo()
          .then(res => {
            console.log(res)
            this.mapURL = res.data.mapURL
            this.hallList = res.data.halls
          })
      },
      goExhibitionHall (id) {
        wx.navigateTo({
          url: '/pages/exhibitionHall/main?id=' + id
        })
      }
    },
    mounted () {
      this.getHallInfo()
    }
  }
</script>

<style lang="less" scoped>
  .guide-index {
    padding-bottom: 30rpx;
    &__content {
      padding: 40rpx 40rpx 0;
      .map {
        width: 650rpx;
        height: 546rpx;
        opacity: 0.2;
        border: 6px solid #232323;
        border-radius: 5rpx;
      }
      .item {
        display: flex;
        align-items: center;
        margin-top: 20rpx;
        padding: 20rpx;
        background-color: #fff;
        box-shadow: 0 12rpx 34rpx 0 rgba(0,0,0,0.05);
        .pic {
          width: 166rpx;
          height: 166rpx;
        }
        .card {
          margin-left: 30rpx;
          display: flex;
          flex-direction: column;
          .hall {
            display: block;
            width: 64rpx;
            height: 24rpx;
            font-size: 16rpx;
            line-height: 24rpx;
            color: #FFF;
            text-align: center;
            background: #232323;
          }
          h2 {
            margin: 14rpx 0 20rpx;
            font-size: 34rpx;
            line-height: 34rpx;
          }
          p {
            font-size: 24rpx;
            line-height: 24rpx;
            opacity: 0.6;
          }
        }
      }
    }
  }
</style>
