<template>
  <div class="page">
    <selecter v-model="city" :data="cityData" :title="['省份', '城市', '县市']" @on-select="selectAll" /><br>
  </div>
</template>
<script>
import { isArray } from '../utils/api'
import cityData from '../data/toutiao/city_province.json'

function getKeyOfData (list, key, value) {
  if (!isArray(list)) throw new Error('clearTagOfData params list invalid !')
  let i = -1
  const len = list.length
  let homeItem = {}

  while (++i < len) {
    const item = list[i]

    if (item[key] === value) {
      homeItem = item
      break
    } else if (item.children && item.children.length) {
      const res = getKeyOfData(item.children, key, value)
      if (res[key]) return res
    }
  }

  return homeItem
}

function clearTagOfData (list, Vue) {
  if (!isArray(list)) throw new Error('clearTagOfData params list invalid !')
  let i = -1
  const len = list.length
  while (++i < len) {
    const item = list[i]
    if (item.children && item.children.length) {
      clearTagOfData(item.children, Vue)
    } else if (item.child && item.child.length) {
      clearTagOfData(item.child, Vue)
    }
    Vue.$set(item, 'check', false)
  }
}

function findCheck (list, arr = []) {
  list.forEach(ret => {
    if (ret.check) arr.push(ret)
    else if (ret.children && ret.children.length !== 0) {
      findCheck(ret.children, arr)
    }
  })
  return arr
}

export default {
  computed: {
    city() {
      return findCheck(this.cityData)
    }
  },
  data() {
    return {
      cityData
    }
  },
  methods: {
    // 全选
    selectAll ({ list, check = true, current = '' }) {
      let data
      // 无限递归
      const setAllChecked = (data, check) => {
        data.forEach(ret => {
          if (ret.children && ret.children.length) setAllChecked(ret.children, check)
          this.$set(ret, 'check', check)
        })
      }
      if (current) {
        const item = getKeyOfData(list, 'id', current)
        data = item.children
      } else data = list
      setAllChecked(data, check)
    },
    // 删除已选
    delTag ({ list, current }) {
      const data = getKeyOfData(list, 'id', current)
      if (data.children && data.children.length) {
        this.selectAll({ list, check: false, current: data.value })
      } else {
        this.$set(data, 'check', false)
      }
    },
    // 清空全部
    clearTag ({ list }) {
      clearTagOfData(list, this)
    }
  }
}
</script>
