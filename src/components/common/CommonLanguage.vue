<template>
  <div class="common-language">
    <a class="common-language__text" :style="{ color: textColor }" @click="changeLanguage">{{ language }}</a>
  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: 'CommonLanguage',
    props: {
      textColor: String
    },
    computed: {
      language () {
        return store.state.language
      }
    },
    methods: {
      changeLanguage () {
        switch (this.language) {
          case 'EN':
            store.commit('changeLanguage', 'CN')
            break
          case 'CN':
            store.commit('changeLanguage', 'EN')
            break
          default:
            store.commit('changeLanguage', 'EN')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-language {
    &__text {
      font-size: 28rpx;
    }
  }
</style>
