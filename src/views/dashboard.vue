<template>
  <div class="c-dashboard">
    <h2>演示组件目录</h2>

    <a-row :gutter="20">
      <a-col :span="8">
        <div><span> 基础 </span></div>
        <router-link to="/drag-weektime">Drag-Weektime</router-link><br>
        <router-link to="/selecter">Selecter</router-link><br>
        <router-link to="/version">Version</router-link><br>
        <router-link to="/drag-weektime">Drag-Weektime</router-link><br>
      </a-col>
      <a-col :span="8">
        <div><span> 布局 </span></div>
        <router-link to="/steper">Steper</router-link><br>
        <router-link to="/drag-weektime">Drag-Weektime</router-link><br>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>
<style scoped>
.c-dashboard {
  padding: 20px 0;
}
.c-dashboard h2 {
  text-align: center;
  line-height: 60px;
}
</style>
