<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="m-version" style="text-align:left;">
      <version
        v-model="iosOsv"
        :data="iOSVersion"
        title="iOS版本" />
    </div>
  </div>
</template>
<script>
const iOSVersion = ['11.3', '11.2', '11.1', '10.3', '10.2', '10.1', '9.3', '9.2', '9.1', '9.0', '8.2', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0']
export default {
  name: 'About',
  data () {
    return {
      iosOsv: '10.3',
      iOSVersion
    }
  }
}
</script>
<style>
.m-version {
  width: 400px;
  margin: 0 auto;
}
</style>
