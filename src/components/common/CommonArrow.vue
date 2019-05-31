<template>
  <div
    class="common-arrow"
    :style="{
      width: areaWidth,
      height: areaHeight
    }"
    @click="clickHandle"
  >
    <image
      :src="mainArrow"
      class="arrow-icon"
      :style="{
        width: arrowWidth,
        height: arrowHeight
      }"
    ></image>
  </div>
</template>

<script>
  export default {
    name: 'CommonArrow',
    props: {
      areaWidth: String,
      areaHeight: String,
      arrow: String,
      arrowWidth: String,
      arrowHeight: String,
      clickHandle: Function
    },
    data () {
      return {
        mainArrow: ''
      }
    },
    mounted () {
      this.mainArrow = this.arrow || '/static/images/arrow.png'
    }
  }
</script>

<style lang="less" scoped>
  .common-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow-icon {
      display: block;
    }
  }
</style>
