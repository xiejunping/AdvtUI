<template>
  <div class="page">
    <h2>Row-Form 布局</h2>

    <div>
      <row-form v-model="form">
        <row-item label="计划名称" prop="name" required>
          <input-len v-model="form.name" width="420" :max="50" placeholder="最大50个字符，1个中文等于2个字符" />
        </row-item>
        <row-item label="投放目标" prop="" required>
          <mixcheck v-model="form.carrier">
            <radio-item label="NONE">不限</radio-item>
            <radio-item label="PRICING_OCPM">转化量</radio-item>
            <radio-item label="PRICING_CPC">点击量</radio-item>
            <radio-item label="PRICING_CPM">展示量</radio-item>
            <radio-item label="PRICING_CPV">有效播放量</radio-item>
          </mixcheck>
        </row-item>
        <row-item label="搜索框" prop="" required>
          <a-input-search v-model="form.keyword" allow-clear style="width:420px" />
        </row-item>
      </row-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        carrier: 'NONE',
        keyword: ''
      }
    }
  }
}
</script>
