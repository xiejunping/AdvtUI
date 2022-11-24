<template>
  <div
    class="c-caption"
    :style="styleValue">
    <a-textarea
      ref="textarea"
      v-model="text"
      :placeholder="placeholder"
      :rows="rows"
      @focus="$emit('focus')"
      @blur="$emit('blur')" />
    <span class="c-caption-length">
      <ins :class="warnClass">
        {{len}}
      </ins>/{{max}}
    </span>
  </div>
</template>
<script>
import { getByteLen } from '../utils/assets'
export default {
  name: 'TextareaLen',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
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
    rows: {
      type: Number,
      default: 4
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
    text: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    styleValue () {
      return {
        width: `${this.width}px`
      }
    },
    len () {
      let charLen = 1
      if (this.charset === 'utf-8') charLen = 3
      else if (this.charset === 'gb2312') charLen = 2
      return this.bc ? Math.ceil(getByteLen(this.text, charLen) / charLen) : getByteLen(this.text, charLen)
    },
    warnClass () {
      return {
        'c-error': this.len > this.max
      }
    }
  }
}
</script>
<style lang="less" scoped>
.c-caption {
  position: relative;
  textarea {
    padding-right: 46px;
  }
  .c-caption-length {
    position: absolute;
    right: 4px;
    bottom: 4px;
    color: #8e8e8e;
    .c-error {
      color: #ff4900;
    }
    ins {
      text-decoration: none;
    }
  }
}
</style>
