<template>
  <div class="c-dashboard">
    <h1>演示组件目录</h1>

    <a-row :gutter="20">
      <a-col :span="8">
        <router-link to="/drag-weektime">Drag-Weektime</router-link>
      </a-col>
      <a-col :span="8"></a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>
<style scoped>
.c-dashboard {
  padding: 20px 0;
}
.c-dashboard h1 {
  text-align: center;
  line-height: 60px;
}
</style>
