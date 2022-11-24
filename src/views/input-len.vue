<template>
  <div class="page">
    <h2>Input-Len 字数长度</h2>

    <div>
      <input-len v-model="name" width="420" :max="50" placeholder="最大50个字符，1个中文等于2个字符" /><br>
    </div>
    {{name}}
    <div>
      <input-len v-model="name1" width="420" charset="utf-8" :max="50" placeholder="最大50个字符，1个中文等于3个字符" /><br>
    </div>
    {{name1}}
    <div>
      <input-len v-model="name2" width="420" bc charset="utf-8" :max="50" placeholder="最大50个字符，3个字符等于1个中文" /><br>
    </div>
    {{name2}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      name1: '一个汉字',
      name2: '123三个数字等于一个中文'
    }
  }
}
</script>
