<template>
  <div class="page">

    <version v-model="ios_osv" :data="iOSVersion" title="iOS版本" />
    <version v-model="ios_osv" :data="iOSVersion" title="iOS版本" />
  </div>
</template>
<script>
const iOSVersion = [ '11.3', '11.2', '11.1', '10.3', '10.2', '10.1', '9.3', '9.2', '9.1', '9.0', '8.2', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0' ]
const androidVersion = ['0.0', '11.0', '10.1', '10.0']
// [
//   {
//     value: ,
//     label: '不限'
//   },
//   {
//     value: ,
//     label: 'Android 11.0及以上'
//   },
//   {
//     value: ,
//     label: 'Android 10.1及以上'
//   },
//   {
//     value: ,
//     label: 'Android 10.0及以上'
//   },
//   {
//     value: '9.0',
//     label: 'Android 9.0及以上'
//   },
//   {
//     value: '8.1',
//     label: 'Android 8.1及以上'
//   },
//   {
//     value: '8.0',
//     label: 'Android 8.0及以上'
//   },
//   {
//     value: '7.1',
//     label: 'Android 7.1及以上'
//   },
//   {
//     value: '7.0',
//     label: 'Android 7.0及以上'
//   },
//   {
//     value: '6.0',
//     label: 'Android 6.0及以上'
//   },
//   {
//     value: '5.1',
//     label: 'Android 5.1及以上'
//   },
//   {
//     value: '5.0',
//     label: 'Android 5.0及以上'
//   },
//   {
//     value: '4.5',
//     label: 'Android 4.5及以上'
//   },
//   {
//     value: '4.4',
//     label: 'Android 4.4及以上'
//   },
//   {
//     value: '4.3',
//     label: 'Android 4.3及以上'
//   },
//   {
//     value: '4.2',
//     label: 'Android 4.2及以上'
//   },
//   {
//     value: '4.1',
//     label: 'Android 4.1及以上'
//   },
//   {
//     value: '4.0',
//     label: 'Android 4.0及以上'
//   },
//   {
//     value: '3.2',
//     label: 'Android 3.2及以上'
//   },
//   {
//     value: '3.1',
//     label: 'Android 3.1及以上'
//   },
//   {
//     value: '3.0',
//     label: 'Android 3.0及以上'
//   },
//   {
//     value: '2.3',
//     label: 'Android 2.3及以上'
//   },
//   {
//     value: '2.2',
//     label: 'Android 2.2及以上'
//   },
//   {
//     value: '2.1',
//     label: 'Android 2.1及以上'
//   },
//   {
//     value: '2.0',
//     label: 'Android 2.0及以上'
//   }
// ]
export default {
  data () {
    return {
      ios_osv: '9.3',
      android_osv: '',
      iOSVersion: iOSVersion,
    }
  }
}
</script>
