import DragWeektime from './drag-weektime/index.vue'
import Selecter from './selecter/select.vue'
import Version from './version/index.vue'
import Steper from './steper/index.vue'
import ICheckbox from './i-checkbox.vue'

const components = [
  DragWeektime,
  Selecter,
  Steper,
  Version,
  ICheckbox
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  DragWeektime,
  Selecter,
  Steper,
  Version,
  ICheckbox
}
