import DragWeektime from './drag-weektime/index.vue'
import DropTree from './droptree/index'
import Selecter from './selecter/select.vue'
import Version from './version/index.vue'
import Steper from './steper/index.vue'
import InputLen from './len/input.vue'
import TextareaLen from './len/textarea.vue'
import ICheckbox from './i-checkbox.vue'

const components = [
  DragWeektime,
  DropTree,
  Selecter,
  Steper,
  InputLen,
  TextareaLen,
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
  DropTree,
  Selecter,
  Steper,
  InputLen,
  TextareaLen,
  Version,
  ICheckbox
}
