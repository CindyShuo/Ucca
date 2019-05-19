<template>
  <div class="common-picker">
    <slot></slot>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: 'CommonPicker',
    computed: {
      isScroll () {
        return store.state.isScroll
      }
    },
    created () {
      store.commit('disableScroll')
    },
    destroyed () {
      store.commit('ableScroll')
    }
  }
</script>

<style lang="less" scoped>
  .common-picker {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10010;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
  }
</style>
