<template>
  <div class="page">
    <h2>Selecter 级联选择器</h2>

    <selecter v-model="city" :data="cityData" :title="['省份', '城市', '县市']" /><br>
    {{city}}
    <!-- <selecter v-model="" /> -->
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
