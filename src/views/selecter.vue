<template>
  <div class="page">
    <h2>Selecter 级联选择器</h2>

    <selecter v-model="city" :data="cityData" :title="['省份', '城市', '县市']" /><br>
    {{city}}
    <selecter v-model="city1" :data="cityData1" :title="['省份', '城市', '县市']" /><br>
    {{city1}}
    <selecter v-model="city2" :data="cityData2" indeterminate :title="['省份', '城市', '县市']" /><br>
    {{city2}}
    <selecter v-model="city3" :data="cityData3" indeterminate disabled :title="['省份', '城市', '县市']" /><br>
    {{city3}}

    <br><br><br><br><br>
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
      city2: [],
      city3: [ 21155, 21151 ],
      cityData: deepCopy(cityData),
      cityData1: deepCopy(cityData),
      cityData2: deepCopy(cityData),
      cityData3: deepCopy(cityData)
    }
  },
  methods: {

  }
}
</script>
