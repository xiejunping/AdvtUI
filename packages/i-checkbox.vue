<template>
  <a-checkbox
    :checked="value"
    :disabled="disabled"
    :indeterminate="indeterminate"
    @change="change">{{label}}</a-checkbox>
</template>
<script>
export default {
  name: 'ICheckbox',
  props: {
    value: {
      type: Boolean
    },
    label: {
      type: String
    },
    indeterminate: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    change (e) {
      this.$emit('input', e.target.checked)
    }
  }
}
</script>
