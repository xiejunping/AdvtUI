import { createVNode } from "vue"
import * as Icons from '@ant-design/icons-vue'

export const Icon = ({ type }) => {
  return createVNode(Icons[type])
}
