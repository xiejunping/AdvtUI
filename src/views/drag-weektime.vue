<template>
  <div class="">

    <drag-weektime
      v-model="mult_timeRange"
      :data="weektimeData"
      v-peach:event="{category: 'components', action: 'dragWeektime'}"
      @on-clear="clearWeektime">
    </drag-weektime>
  </div>
</template>
