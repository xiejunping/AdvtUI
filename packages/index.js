import DragWeektime from './drag-weektime/index.vue'
import DropTree from './droptree/index'
import Selecter from './selecter/select.vue'
import Version from './version/index.vue'
import Steper from './steper/index.vue'
import InputLen from './len/input.vue'
import TextareaLen from './len/textarea.vue'
import Mixcheck from './mixcheck/index.vue'
import RadioItem from './mixcheck/radio-item/index.vue'
import CheckItem from './mixcheck/check-item/index.vue'
import ICheckbox from './i-checkbox.vue'

const components = [
  DragWeektime,
  DropTree,
  Selecter,
  Steper,
  InputLen,
  TextareaLen,
  Version,
  Mixcheck,
  RadioItem,
  CheckItem,
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
  Mixcheck,
  RadioItem,
  CheckItem,
  ICheckbox
}
