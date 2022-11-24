<template>
  <div class="page">
    <h2>Textarea-Len 区域长度控制</h2>

    <textarea-len v-model="descript" width="420" :max="100" placeholder="最大100个字符，1个中文等于2个字符" /><br>
    {{descript}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      descript: ''
    }
  }
}
</script>
