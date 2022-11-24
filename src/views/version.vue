<template>
  <div class="page">
    <h2>Version 平台版本选择器</h2>

    <version :data="iOSVersion" title="iOS版本" />
    <span>{{ios_osv}}</span>
    <br>
    <version v-model="ios_osv" :data="iOSVersion" title="iOS版本" />
    <span>{{ios_osv}}</span>
    <br>
    <version v-model="android_osv" :data="androidVersion" title="Andriod版本" />
    <span>{{android_osv}}</span>
    <br>
  </div>
</template>
<script>
const iOSVersion = ['11.3', '11.2', '11.1', '10.3', '10.2', '10.1', '9.3', '9.2', '9.1', '9.0', '8.2', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0']
const androidVersion = ['0.0', '11.0', '10.1', '10.0', '9.0', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.5', '4.4', '4.3', '4.2', '4.1', '4.0', '3.2', '3.1', '3.0', '2.3', '2.2', '2.1', '2.0']
export default {
  data () {
    return {
      ios_osv: '9.3',
      android_osv: '0.0',
      iOSVersion,
      androidVersion,
    }
  }
}
</script>
