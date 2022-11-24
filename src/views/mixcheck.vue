<template>
  <div class="page">
    <h2>Mixcheck 混合选择器</h2>

    <div>
      <mixcheck v-model="carrier">
        <radio-item label="NONE">不限</radio-item>
        <check-item label="MOBILE">移动</check-item>
        <check-item label="UNICOM">联通</check-item>
        <check-item label="TELCOM">电信</check-item>
      </mixcheck>
    </div>
    {{carrier}}

    <div>
      <mixcheck v-model="carrier1">
        <radio-item label="NONE">不限</radio-item>
        <radio-item label="MOBILE">移动</radio-item>
        <radio-item label="UNICOM">联通</radio-item>
        <radio-item label="TELCOM">电信</radio-item>
      </mixcheck>
    </div>
    {{carrier1}}

    <div>
      <mixcheck v-model="carrier2">
        <check-item label="NONE">不限</check-item>
        <check-item label="MOBILE">移动</check-item>
        <check-item label="UNICOM">联通</check-item>
        <check-item label="TELCOM">电信</check-item>
      </mixcheck>
    </div>
    {{carrier2}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      carrier: 'NONE',
      carrier1: 'MOBILE',
      carrier2: ['MOBILE', 'TELCOM']
    }
  }
}
</script>
