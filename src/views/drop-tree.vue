<template>
  <div class="page">
    <h2>Drop-Tree 下拉选择（搜索*多选）</h2>

    <drop-tree v-model="gameId" :options="gameData" no-results-text="无匹配数据" placeholder="请选择游戏" /><br>
  </div>
</template>
<script>
import Games from '../data/toutiao/games.json'
export default {
  data() {
    return {
      gameId: null,
      gameData: Games.map(ret => ({id: ret.id, label: ret.name}))
    }
  }
}
</script>
