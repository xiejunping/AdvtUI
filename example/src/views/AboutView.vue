<template>
  <div class="about">
    <h1>This is an about page</h1>

    <version
      v-model="iosOsv"
      :data="iOSVersion"
      title="iOS版本" />
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'About',
  setup () {
    const iosOsv = ref('9.3')
    const versions = ['11.3', '11.2', '11.1', '10.3', '10.2', '10.1', '9.3', '9.2', '9.1', '9.0', '8.2', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0']
    const iOSVersion = ref(versions)

    return {
      iosOsv,
      iOSVersion
    }
  }
}
</script>
