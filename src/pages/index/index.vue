<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
    <map
      id="myMap"
      style="width: 670rpx; height: 360rpx;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :covers="covers"
      show-location></map>
    <common-footer></common-footer>
  </div>
</template>

<script>
import card from '@/components/card'
import CommonFooter from '@/components/common/CommonFooter'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.344520
      }, {
        latitude: 23.099994,
        longitude: 113.304520
      }]
    }
  },

  components: {
    card,
    CommonFooter
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    onReady (e) {
      this.mapCtx = wx.createMapContext('myMap')
    },
    getCenterLocation () {
      this.mapCtx.getCenterLocation({
        success: function (res) {
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
    },
    moveToLocation () {
      this.mapCtx.moveToLocation()
    },
    translateMarker () {
      this.mapCtx.translateMarker({
        markerId: 1,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        animationEnd () {
          console.log('animation end')
        }
      })
    },
    includePoints () {
      this.mapCtx.includePoints({
        padding: [10],
        points: [{
          latitude: 23.10229,
          longitude: 113.3345211
        }, {
          latitude: 23.00229,
          longitude: 113.3345211
        }]
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
  #myMap {
    margin: 0 auto;
  }
</style>
