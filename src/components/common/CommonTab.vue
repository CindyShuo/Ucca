<template>
  <div class="common-tab">
    <div
      v-for="(item, i) in tabList"
      :key="i"
      class="common-tab__item"
      :class="{ 'is-active': i === value }"
    >
      <a @click="tabFlag(i)">{{ item }}</a>
    </div>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: 'CommonTab',
    props: {
      tabList: {
        type: Array,
        required: true
      },
      value: {
        type: Number,
        default: 0
      }
    },
    computed: {
      navHeight () {
        return store.state.navHeight
      }
    },
    methods: {
      tabFlag (index) {
        this.$emit('handleChange', index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-tab {
    position: fixed;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 94rpx;
    padding: 0 194rpx;
    border-bottom: 1rpx solid rgba(0, 0, 0, .1);
    background: #fff;
    &__item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      a {
        font-size: 28rpx;
        font-weight: bold;
        color: 	rgba(35,35,35,.6);
        transition: all ease-in-out .1s;
      }
      &.is-active{
        a {
          transform: scale(1.5);
          color: #232323;
        }
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1rpx;
          display: block;
          width: 100%;
          height: 4rpx;
          background-color: #ed3024;
        }
      }
    }
  }
</style>
