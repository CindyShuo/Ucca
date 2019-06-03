<template>
  <div class="common-entry">
    <p class="common-entry__title" v-bind:style="titleFontStyle">{{ title }}</p>
    <div class="blank"></div>
    <a
      class="common-entry__arrow"
      @click="navigate"
      v-if="type === 'arrow'"
    >
      <slot></slot>
      <common-arrow
        area-width="32rpx"
        area-height="32rpx"
        arrow-width="15rpx"
        arrow-height="27rpx"
      />
    </a>
    <picker
      mode="date"
      :value="defaultDate"
      fields="year"
      start="2009"
      end="2019"
      @change="bindDateChange"
      v-if="type === 'date'"
    >
      <div class="common-entry__date">
        <p>{{ defaultDate }}</p>
        <image
          src='/static/images/arrow1.png'
          class='select-arrow'
        ></image>
      </div>
    </picker>
  </div>
</template>

<script>
  import CommonArrow from './CommonArrow'

  export default {
    name: 'CommonEntry',
    components: { CommonArrow },
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String
      },
      titleFontStyle: {
        type: String
      },
      goLink: {
        type: String
      }
    },
    data () {
      return {
        defaultDate: 2019
      }
    },
    methods: {
      navigate () {
        this.$emit('navigate')
      },
      bindDateChange (e) {
        this.defaultDate = e.mp.detail.value
        this.$emit('dateChange', e.mp.detail.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .common-entry {
    display: flex;
    align-items: center;
    height: 68rpx;
    padding: 0 40rpx;
    .blank {
      flex-grow: 1;
    }
    &__title {
      font-size: 48rpx;
      font-weight: bold;
      color: #232323;
    }
    &__arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32rpx;
      line-height: 32rpx;
    }
    &__date {
      display: flex;
      align-items: center;
      p {
        font-size: 30rpx;
        color: #232323;
      }
      .select-arrow {
        display: block;
        margin-left: 14rpx;
        width: 20rpx;
        height: 12rpx;
      }
    }
  }
</style>
