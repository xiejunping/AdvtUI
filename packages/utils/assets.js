import { isArray } from './api'

export function getKeyOfData (list, key, value) {
  if (!isArray(list)) throw new Error('clearTagOfData params list invalid !')
  let i = -1
  const len = list.length
  let homeItem = {}

  while (++i < len) {
    const item = list[i]

    if (item[key] === value) {
      homeItem = item
      break
    } else if (item.children && item.children.length) {
      const res = getKeyOfData(item.children, key, value)
      if (res[key]) return res
    }
  }

  return homeItem
}

// 选中
export function findCheck (list, arr = []) {
  list.forEach(ret => {
    if (ret.check) arr.push(ret)
    else if (ret.children && ret.children.length !== 0) {
      findCheck(ret.children, arr)
    }
  })
  return arr
}

// 清空选中
export function clearTagOfData (list, Vue) {
  if (!isArray(list)) throw new Error('clearTagOfData params list invalid !')
  let i = -1
  const len = list.length
  while (++i < len) {
    const item = list[i]
    if (item.children && item.children.length) {
      clearTagOfData(item.children, Vue)
    } else if (item.child && item.child.length) {
      clearTagOfData(item.child, Vue)
    }
    Vue.$set(item, 'check', false)
  }
}