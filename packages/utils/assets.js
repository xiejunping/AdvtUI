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

// Find components upward
export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find brothers components
export function findBrothersComponents (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}
