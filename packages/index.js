import DragWeektime from './drag-weektime/index.vue'
import DropTree from './droptree/index'
import Selecter from './selecter/select.vue'
import Version from './version/index.vue'
import Steper from './steper/index.vue'
import InputLen from './len/input.vue'
import TextareaLen from './len/textarea.vue'
import Mixcheck from './mixcheck/index'
import RowForm from './form/index'
import ICheckbox from './i-checkbox.vue'

const RadioItem = Mixcheck.Radio
const CheckItem = Mixcheck.Check
const RowItem = RowForm.Item
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
  RowForm,
  RowItem,
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
  RowForm,
  ICheckbox
}
