import DragWeektime from './drag-weektime/index.vue'
import DropTree from './droptree/index'
import Selecter from './selecter/select.vue'
import Version from './version/index.vue'
import Steper from './steper/index.vue'
import Moduler from './moduler/index.vue'
import InputLen from './len/input.vue'
import TextareaLen from './len/textarea.vue'
import Mixcheck from './mixcheck/index'
import RowForm from './form/index'
import ErrorPop from './error-pop/index.vue'
import ICheckbox from './i-checkbox.vue'

const RadioItem = Mixcheck.Radio
const CheckItem = Mixcheck.Check
const RowItem = RowForm.Item
const components = [
  DragWeektime,
  DropTree,
  Selecter,
  Steper,
  Moduler,
  InputLen,
  TextareaLen,
  Version,
  Mixcheck,
  RadioItem,
  CheckItem,
  RowForm,
  RowItem,
  ErrorPop,
  ICheckbox
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  DragWeektime,
  DropTree,
  Selecter,
  Steper,
  Moduler,
  InputLen,
  TextareaLen,
  Version,
  Mixcheck,
  RadioItem,
  CheckItem,
  RowForm,
  RowItem,
  ErrorPop,
  ICheckbox
}
