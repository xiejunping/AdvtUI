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
        <radio-item label="PRICING_OCPM">转化量</radio-item>
        <radio-item label="PRICING_CPC">点击量</radio-item>
        <radio-item label="PRICING_CPM">展示量</radio-item>
        <radio-item label="PRICING_CPV">有效播放量</radio-item>
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
      carrier1: 'PRICING_OCPM',
      carrier2: ['MOBILE', 'TELCOM']
    }
  }
}
</script>
