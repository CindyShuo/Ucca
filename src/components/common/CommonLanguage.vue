<template>
  <div class="common-language" v-bind:style="flag ? 'left: 100rpx' : ''">
    <p class="common-language__en" v-if="langugeFlag === 0" :style="{ color: colorFlag }" @click="changeLanguage(1)">EN</p>
    <p class="common-language__en" v-if="langugeFlag === 1" :style="{ color: colorFlag }" @click="changeLanguage(0)">CN</p>
  </div>
</template>

<script>
  export default {
    name: 'CommonLanguage',
    props: ['colorFlag', 'flag'],
    data () {
      return {
        langugeFlag: 0
      }
    },
    methods: {
      changeLanguage (val) {
        this.langugeFlag = val
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-language {
    position: absolute;
    left: 74rpx;
    top: 40rpx;
    &__en {
      font-size: 28rpx;
    }
  }
</style>
