import { isArray } from './api'

export function getKeyOfData (list, key, value) {
  if (!isArray(list)) throw new Error('getKeyOfData args list invalid!')
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

export function getByteLen (val, num) {
  let len = 0
  let charLen = num || 2
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i)
    /* eslint-disable-next-line */
    if (a.match(/[^\x00-\xff]/ig) !== null) {
      len += charLen
    } else {
      len += 1
    }
  }
  return len
}
