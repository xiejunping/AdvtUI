<template>
  <div class="c-weektime">
    <div class="c-schedue"></div>
    <div :class="{'c-schedue': true, 'c-schedue-notransi': mode}" :style="styleValue"></div>
    <div class="c-weektime-wrap">
      <table class="c-weektime-table" :class="{'c-min-table': colspan < 2}">
        <thead class="c-weektime-head">
          <tr>
            <th rowspan="8" class="week-td">星期/时间</th>
            <th :colspan="12 * colspan">00:00 - 12:00</th>
            <th :colspan="12 * colspan">12:00 - 24:00</th>
          </tr>
          <tr>
            <td v-for="t in theadArr" :key="t" :colspan="colspan">{{t}}</td>
          </tr>
        </thead>
        <tbody class="c-weektime-body">
          <tr v-for="t in data" :key="t.row">
            <td>{{t.value}}</td>
            <td
              v-for="n in t.child"
              :key="`${n.row}-${n.col}`"
              :data-week="n.row"
              :data-time="n.col"
              @mouseenter="cellEnter(n)"
              @mousedown="cellDown(n)"
              @mouseup="cellUp(n)"
              :class="selectClasses(n)"
              class="weektime-atom-item">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="c-weektime-preview" v-if="selectState">
        <div class="g-clearfix c-weektime-con">
          <!-- {{selectState ? '已选择时间段' : '可拖动鼠标选择时间段'}} -->
          <span class="g-pull-left">已选择时间段</span>
          <a class="g-pull-right" @click.prevent="clearWeektime">清空选择</a>
        </div>
        <div class="c-weektime-time">
          <div v-for="t in selectValue" :key="t.id">
            <p v-if="t.value">
              <span class="g-tip-text">{{t.week}}：</span>
              <span>{{t.value}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../utils/'

const dayHour = 24 // 一天24h
const weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
const createArr = len => {
  return Array.from(Array(len)).map((ret, id) => id)
}
const formatWeektime = col => {
  const timestamp = 1542384000000 // '2018-11-17 00:00:00'
  const beginstamp = timestamp + col * 1800000 // col * 30 * 60 * 1000
  const endstamp = beginstamp + 1800000

  const begin = formatDate(new Date(beginstamp), 'hh:mm')
  const end = formatDate(new Date(endstamp), 'hh:mm')
  return `${begin}~${end}`
}
function splicing (list) {
  let same
  let i = -1
  let len = list.length
  let arr = []

  if (!len) return
  while (++i < len) {
    const item = list[i]
    if (item.check) {
      if (item.check !== Boolean(same)) {
        arr.push(...['、', item.begin, '~', item.end])
      } else if (arr.length) {
        arr.pop()
        arr.push(item.end)
      }
    }
    same = Boolean(item.check)
  }
  arr.shift()
  return arr.join('')
}
export default {
  name: 'DragWeektime',
  props: {
    value: {
      type: String
    },
    colspan: {
      type: Number,
      default () {
        return 2
      }
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    styleValue () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        left: `${this.left}px`,
        top: `${this.top}px`
      }
    },
    data () {
      let idx = 0
      return weekArr.map((ret, index) => {
        const children = (ret, row, max) => {
          return createArr(max).map((t, col) => {
            const n = this.value.substr(idx, 1)
            const check = Boolean(parseInt(n))
            idx++
            return {
              check,
              week: ret,
              value: formatWeektime(col),
              begin: formatWeektime(col).split('~')[0],
              end: formatWeektime(col).split('~')[1],
              row: row,
              col: col
            }
          })
        }
        return {
          value: ret,
          row: index,
          child: children(ret, index, dayHour * this.colspan)
        }
      })
    },
    selectValue () {
      return this.data.map(item => {
        return {
          id: item.row,
          week: item.value,
          value: splicing(item.child)
        }
      })
    },
    selectState () {
      return this.selectValue.some(ret => ret.value)
    },
    selectClasses () {
      return n => n.check ? 'ui-selected' : ''
    }
  },
  methods: {
    cellEnter (item) {
      const ele = this.$el.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`)
      if (ele && !this.mode) {
        this.left = ele.offsetLeft
        this.top = ele.offsetTop
      } else {
        if (item.col <= this.col && item.row <= this.row) {
          this.width = (this.col - item.col + 1) * ele.offsetWidth
          this.height = (this.row - item.row + 1) * ele.offsetHeight
          this.left = ele.offsetLeft
          this.top = ele.offsetTop
        } else if (item.col >= this.col && item.row >= this.row) {
          this.width = (item.col - this.col + 1) * ele.offsetWidth
          this.height = (item.row - this.row + 1) * ele.offsetHeight
          if (item.col > this.col && item.row === this.row) this.top = ele.offsetTop
          if (item.col === this.col && item.row > this.row) this.left = ele.offsetLeft
        } else if (item.col > this.col && item.row < this.row) {
          this.width = (item.col - this.col + 1) * ele.offsetWidth
          this.height = (this.row - item.row + 1) * ele.offsetHeight
          this.top = ele.offsetTop
        } else if (item.col < this.col && item.row > this.row) {
          this.width = (this.col - item.col + 1) * ele.offsetWidth
          this.height = (item.row - this.row + 1) * ele.offsetHeight
          this.left = ele.offsetLeft
        }
      }
    },
    cellDown (item) {
      const ele = this.$el.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`)
      this.check = Boolean(item.check)
      this.mode = 1
      if (ele) {
        this.width = ele.offsetWidth
        this.height = ele.offsetHeight
      }

      this.row = item.row
      this.col = item.col
    },
    cellUp (item) {
      if (item.col <= this.col && item.row <= this.row) {
        this.selectWeek([item.row, this.row], [item.col, this.col], !this.check)
      } else if (item.col >= this.col && item.row >= this.row) {
        this.selectWeek([this.row, item.row], [this.col, item.col], !this.check)
      } else if (item.col > this.col && item.row < this.row) {
        this.selectWeek([item.row, this.row], [this.col, item.col], !this.check)
      } else if (item.col < this.col && item.row > this.row) {
        this.selectWeek([this.row, item.row], [item.col, this.col], !this.check)
      }

      this.width = 0
      this.height = 0
      this.mode = 0
    },
    selectWeek (row, col, check) {
      const [minRow, maxRow] = row
      const [minCol, maxCol] = col
      this.data.forEach(item => {
        item.child.forEach(t => {
          if (t.row >= minRow && t.row <= maxRow && t.col >= minCol && t.col <= maxCol) {
            this.$set(t, 'check', check)
          }
        })
      })
      const data = this.data.map(item => {
        return item.child.map(ret => ret.check ? '1' : '0').join('')
      }).join('')
      this.$emit('input', data)
    },
    clearWeektime () {
      this.$emit('input', createArr(48*7).map(r => '0').join(''))
    }
  },
  data () {
    return {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      mode: 0,
      row: 0,
      col: 0,
      theadArr: createArr(dayHour)
    }
  }
}
</script>
<style lang="less" scoped>

.c-weektime {
  min-width: 640px;
  position: relative;
  display: inline-block;
}
.c-schedue {
  background: #598fe6;
  position: absolute;
  width: 0;
  height: 0;
  opacity: .6;
  pointer-events: none;
}
.c-schedue-notransi {
  transition: width .12s ease, height .12s ease, top .12s ease, left .12s ease;
}
.c-weektime-wrap {
  display: flex;
}
.c-weektime-table {
  border-collapse: collapse;
  th {
    vertical-align: inherit;
    font-weight: bold;
  }
  tr {
    height: 30px;
  }
  tr, td, th {
    user-select: none;
    border: 1px solid #dee4f5;
    text-align: center;
    min-width: 12px;
    line-height: 1.8em;
    transition: background .2s ease;
  }
  .c-weektime-head {
    font-size: 12px;
    .week-td {
      width: 70px;
    }
  }
  .c-weektime-body {
    font-size: 12px;
    td {
      &.weektime-atom-item {
        user-select: unset;
        background-color: #f5f5f5;
      }
      &.ui-selected {
        background-color: #598fe6;
      }
    }
  }
}
.c-weektime-preview {
  min-width: 250px;
  max-width: 420px;
  line-height: 2.4em;
  padding: 0 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dee4f5;
  border-left-width: 0;
  .c-weektime-con {
    line-height: 32px;
    user-select: none;
    height: 60px;
  }
  .c-weektime-time {
    text-align: left;
    line-height: 2.4em;
    p {
      max-width: 625px;
      line-height: 1.4em;
      word-break: break-all;
      margin-bottom: 8px;
    }
  }
}
.c-min-table {
  tr, td, th {
    min-width: 24px;
  }
}
.g-clearfix {
  &:after, &:before {
    clear: both;
    content: " ";
    display: table;
  }
}
.g-pull-left {
  float: left;
}
.g-pull-right {
  float: right;
}
.g-tip-text {
  color: #999;
}
</style>
