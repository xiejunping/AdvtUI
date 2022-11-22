<template>
  <div class="c-selecter">
    <a-row :gutter="12">
      <a-col :span="16">
        <a-row>
          <a-col
            :span="col"
            v-for="(box, idx) in resource"
            :key="idx">
            <select-item :title="box.title">
              <select-box
                v-model="box.current"
                :data="box.data"
                :level="box.level"
                @on-child="pushChild"
                @on-select="selectAll" />
            </select-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="7" offset="1">
        <select-item
          v-if="resultLen && transfer"
          :title="`已选${resultLen?'('+result.length+')':''}`"
          clear
          @on-clear="clearTag({list: data})">
          <div
            v-for="item in result"
            :key="item.id"
            class="c-pop-tip">
            <a-tag
              closable
              class="c-tag-item"
              @close="handleClose(item.id)">{{item.value}}</a-tag>
          </div>
        </select-item>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { getKeyOfData, findCheck, clearTagOfData } from '../utils/assets'
import SelectItem from './select-item.vue'
import SelectBox from './select-box.vue'
export default {
  name: 'selecter',
  components: { SelectItem, SelectBox },
  props: {
    value: {
      type: Array
    },
    title: {
      type: Array
    },
    data: {
      type: Array
    },
    transfer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      resource: []
    }
  },
  computed: {
    col () {
      return this.resource.length > 1 ? 24 / this.resource.length : 12
    },
    result () {
      const checkItems = findCheck(this.data)
      this.$emit('input', checkItems.map(ret => ret.id))
      return checkItems
    },
    resultLen () {
      return Boolean(this.result.length)
    }
  },
  watch: {
    data (nVal) {
      if (nVal && nVal.length) this.updateResource()
      else this.resource = []
    }
  },
  methods: {
    updateResource () {
      this.resource = []
      this.resource.push({
        data: this.data,
        current: 0,
        level: 1,
        title: this.title[0]
      })
    },
    // 删除已选
    handleClose (id) {
      const data = getKeyOfData(this.data, 'id', id)
      if (data.children && data.children.length) {
        this.selectFinalAll({ list: this.data, check: false, id: data.value })
      } else {
        this.$set(data, 'check', false)
      }
    },
    selectAll ({ level, check, cat }) {
      let index = level - 2
      let current = index > -1 ? this.resource[index].current : 0
      cat && (current = cat)
      this.selectFinalAll({
        check,
        current,
        list: this.data
      })
    },
    pushChild (params) {
      const { item, level } = params
      const len = this.resource.length
      if (level <= len - 1) {
        this.resource.splice(level, len - level)
      }
      this.resource.push({
        data: item.children,
        current: 0,
        level: level + 1,
        title: this.title[level] || item.value
      })
      this.resource[level - 1].current = item.id
    },
    // 全选
    selectFinalAll ({ list, check = true, current = '' }) {
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
    // 清空全部
    clearTag ({ list }) {
      clearTagOfData(list, this)
    }
  },
  created () {
    this.updateResource()
  }
}
</script>
<style lang="less" scoped>
.c-pop-tip {
  width: 100%;
}
.c-tag-item {
  width: 95%;
  margin: 8px 8px 0;
  padding: 2px 6px;
  display: block;
  height: 28px;
  /deep/ .anticon-close {
    float: right;
    line-height: 25px;
  }
}
</style>
