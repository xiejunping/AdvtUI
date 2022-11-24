<template>
  <div
    :class="classes"
    :style="styleValue">
    <a-input
      ref="input"
      v-model="data"
      :disabled="disabled"
      :placeholder="placeholder"
      autocomplete="on"
      @blur="$emit('blur')"
      @focus="$emit('focus')" />
    <span class="c-length">
      <ins :class="warnClass">
        {{len}}
      </ins>/{{max}}
    </span>
  </div>
</template>
<script>
import { getByteLen } from '../utils/assets'
export default {
  name: 'InputLen',
  props: {
    value: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      required: true
    },
    charset: {
      type: String,
      default: 'gb2312'
    },
    bc: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    data: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    classes () {
      return [
        'c-len',
        { 'c-len-large': this.max > 99 }
      ]
    },
    styleValue () {
      return this.width && {
        width: `${this.width}px`
      }
    },
    len () {
      let charLen = 1
      if (this.charset === 'utf-8') charLen = 3
      else if (this.charset === 'gb2312') charLen = 2
      return this.bc ? Math.ceil(getByteLen(this.data, charLen) / charLen) : getByteLen(this.data, charLen)
    },
    warnClass () {
      return {
        'c-text-err': this.len > this.max
      }
    }
  }
}
</script>
<style lang="less" scoped>
.c-len {
  position: relative;
  height: inherit;
  display: inline-block;
  input {
    padding-right: 36px;
  }
  .c-length {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 4px;
    line-height: 32px;
    color: #8e8e8e;
    .c-text-err {
      color: #ff4900;
    }
    ins {
      text-decoration: none;
    }
  }
  &.c-len-large {
    input {
      padding-right: 50px;
    }
  }
}
</style>
