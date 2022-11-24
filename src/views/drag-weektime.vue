<template>
  <div class="page">
    <h2>Drag-Weektime 时段选择器</h2>

    <drag-weektime v-model="schedule" /><br>
    <div class="min-dt">{{schedule}}</div>
    <drag-weektime v-model="schedule_time" /><br>
    <div class="min-dt">{{schedule_time}}</div>
    <drag-weektime v-model="schedule_time1" :colspan="1" /><br>
    <div class="min-dt">{{schedule_time1}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      schedule: '',
      schedule_time: '000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000',
      schedule_time1: '000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000'
    }
  },
  methods: {
    clearWeektime() {}
  }
}
</script>
<style lang="less" scoped>
.min-dt {
  width: 900px;
  word-break: break-all;
}
</style>
