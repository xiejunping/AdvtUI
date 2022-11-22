<template>
  <div class="page">
    <selecter v-model="city" :data="cityData" :title="['省份', '城市', '县市']" /><br>
    {{city}}
  </div>
</template>
<script>
import cityData from '../data/toutiao/city_province.json'
export default {
  data() {
    return {
      city: [],
      cityData
    }
  },
  methods: {

  }
}
</script>
