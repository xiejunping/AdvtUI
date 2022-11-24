<template>
  <div class="page">
    <h2>Selecter 级联选择器</h2>

    <selecter v-model="city" :data="cityData" :title="['省份', '城市', '县市']" /><br>
    {{city}}
    <selecter v-model="city1" :data="cityData1" :title="['省份', '城市', '县市']" /><br>
    {{city1}}
  </div>
</template>
<script>
import { deepCopy } from '../utils/api'
import cityData from '../data/toutiao/city_province.json'
export default {
  data() {
    return {
      city: [],
      city1: [3000, 26217, 26215, 26209],
      cityData: deepCopy(cityData),
      cityData1: deepCopy(cityData)
    }
  },
  methods: {

  }
}
</script>
