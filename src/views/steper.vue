<template>
  <div class="page">
    <h2>Steper 步骤显示器</h2>

    <div>
      <steper :data="modulers" :current="current" />
    </div>
  </div>
</template>
<script>
import modulers from '../data/toutiao/modulers.json'
export default {
  data() {
    return {
      modulers,
      current: 2
    }
  }
}
</script>
