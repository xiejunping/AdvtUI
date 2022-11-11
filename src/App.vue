<template>
  <a-layout :style="{height: '100vh'}">
    <a-layout-header>
      <div class="c-header g-container">
        <div class="">ssss</div>
      </div>
    </a-layout-header>

    <a-layout-content>
      <div class="g-container">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  components: {  }
}
</script>
<style scoped>
.c-header {
  text-align: center;
}
</style>
