<template>
  <div class="in-calendar">
    <ul class="in-calendar__month">
      <li @click="PreMonth(myDate, false)">
        <div class="left"></div>
      </li>
      <li class="month-text">{{ dateTop }}</li>
      <li @click="NextMonth(myDate, false)">
        <div class="right"></div>
      </li>
    </ul>
    <div class="in-calendar__week">
      <div
        v-for="(tag, i) in textTop"
        :key="i"
        class="in-calendar__item in-calendar__item--week"
      >
        <p class="week-text">{{ tag }}</p>
      </div>
    </div>
    <div class="in-calendar__day">
      <div
        v-for="(item, index) in list"
        :key="item"
        class="in-calendar__item in-calendar__item--day"
      >
        <a
          class="day-text"
          v-bind:class="[
            {
              wh_isMark: item.isMark,
              'other-day': item.otherMonth !== 'nowMonth',
              'day-hide': item.dayHide,
              'is-today': item.isToday,
              'is-choose': item.chooseDay
            },
            setClass(item)
          ]"
          @click="clickDay(item, index)"
          >{{ item.id }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import timeUtil from './calendarUtils'

export default {
  name: 'InCalendar',
  data () {
    return {
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: ''
    }
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    textTop: {
      type: Array,
      default: () => ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: {
      type: String,
      default: `0`
    },
    futureDayHide: {
      type: String,
      default: `2554387200`
    },
    // 区分有的日历选完是否自动关闭
    calendarFlag: {
      type: Boolean
    }
  },
  created () {
    this.intStart()
    this.myDate = new Date()
  },
  methods: {
    intStart () {
      timeUtil.sundayStart = this.sundayStart
    },
    setClass (data) {
      let obj = {}
      obj[data.markClassName] = data.markClassName
      return obj
    },
    clickDay (item, index) {
      if (item.otherMonth === 'nowMonth' && !item.dayHide) {
        this.getList(this.myDate, item.date)
      }
      if (item.otherMonth !== 'nowMonth') {
        item.otherMonth === 'preMonth'
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date)
      }
      if (this.calendarFlag) {
        this.$emit('flag', false)
      }
    },
    ChoseMonth (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date)
      this.myDate = new Date(date)
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    PreMonth (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date)
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth')
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    NextMonth (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date)
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth')
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate))
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay)
      } else {
        this.getList(this.myDate)
      }
    },
    forMatArgs () {
      let markDate = this.markDate
      let markDateMore = this.markDateMore
      markDate = markDate.map(k => {
        return timeUtil.dateFormat(k)
      })
      markDateMore = markDateMore.map(k => {
        k.date = timeUtil.dateFormat(k.date)
        return k
      })
      return [markDate, markDateMore]
    },
    getList (date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs()
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`
      let arr = timeUtil.getMonthList(this.myDate)
      console.log(arr)
      for (let i = 0; i < arr.length; i++) {
        let markClassName = ''
        let k = arr[i]
        k.chooseDay = false
        const nowTime = k.date
        const t = new Date(nowTime).getTime() / 1000
        // 看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || ''
          }
        }
        // 标记选中某些天 设置class
        k.markClassName = markClassName
        k.isMark = markDate.indexOf(nowTime) > -1
        // 无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide
        if (k.isToday) {
          this.$emit('isToday', nowTime)
        }
        let flag = !k.dayHide && k.otherMonth === 'nowMonth'
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime)
          this.historyChose.push(nowTime)
          k.chooseDay = true
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime &&
          !chooseDay &&
          flag
        ) {
          k.chooseDay = true
        }
      }
      this.list = arr
    }
  },
  mounted () {
    this.getList(this.myDate)
  },
  watch: {
    markDate: {
      handler () {
        this.getList(this.myDate)
      },
      deep: true
    },
    markDateMore: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    agoDayHide: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    futureDayHide: {
      handler (val, oldVal) {
        this.getList(this.myDate)
      },
      deep: true
    },
    sundayStart: {
      handler (val, oldVal) {
        this.intStart()
        this.getList(this.myDate)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .in-calendar {
    width: 100%;
    &__month {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        &.month-text {
          line-height: 36rpx;
          font-size: 34rpx;
        }
      }
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 13.6%;
      &--day {
        height: 68rpx;
      }
    }
    &__week {
      display: flex;
      justify-content: center;
      margin-top: 40rpx;
      .week-text {
        line-height: 34rpx;
        font-size: 24rpx;
        color: rgba(0, 0, 0, .6);
        text-align: center;
      }
    }
    &__day {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 14rpx;
      .day-text {
        display: block;
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
        line-height: 60rpx;
        font-size: 28rpx;
        color: #232323;
        text-align: center;
        &.other-day {
          display: none;
        }
        &.is-today {
          color: #ed3024;
        }
        &.is-choose {
          color: #fff;
          background-color: #ed3024;
        }
        &.day-hide {
          color: rgba(0, 0, 0, .4);
        }
      }
    }
  }
</style>
