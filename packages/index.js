import DragWeektime from './drag-weektime'
import Selecter from './selecter'
import Version from './version'
import ICheckbox from './i-checkbox.vue'

const components = [
  DragWeektime,
  Selecter,
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
  Version,
  ICheckbox
}
