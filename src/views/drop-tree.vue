<template>
  <div class="page">
    <h2>Drop-Tree 下拉选择（搜索*多选）</h2>

    <drop-tree v-model="gameId" :options="gameData" no-results-text="无匹配数据" placeholder="请选择游戏" /><br>
    {{gameId}}
    <drop-tree v-model="gameId1" :options="gameData" no-results-text="无匹配数据" placeholder="请选择游戏" /><br>
    {{gameId1}}

    <span>使用ant-design-vue 1</span>
    <a-select v-model="gameId2" show-search :filter-option="filterOption" placeholder="请选择游戏" style="width:280px">
      <a-select-opt-group v-for="group of platformGames" :key="group.id" :label="group.label">
        <a-select-option v-for="game of group.children" :key="game.id" :value="game.id">{{game.label}}</a-select-option>
      </a-select-opt-group>
    </a-select>
  </div>
</template>
<script>
import Games from '../data/toutiao/games.json'
export default {
  data() {
    const android = Games.filter(ret => ret.ch_platform_id === 1).map(ret => ({id: ret.id, label: ret.name}))
    const iso = Games.filter(ret => ret.ch_platform_id === 2).map(ret => ({id: ret.id, label: ret.name}))
    const platformGames = [{
      id: 1,
      label: '安卓游戏',
      children: android
    }, {
      id: 2,
      label: 'iOS游戏',
      children: iso
    }]
    return {
      gameId: null,
      gameId1: 1000048,
      gameId2: 1000046,
      gameData: Games.map(ret => ({id: ret.id, label: ret.name})),
      platformGames
    }
  },
  methods: {
    filterOption(input, option) {
      return option.componentOptions.children[0].text
        && option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  }
}
</script>
