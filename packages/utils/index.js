let timer = null

export function formatDate (date, fmt) {
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 防抖函数
 * @param {Function} event 执行事件
 * @param {Number} time 延迟时间
 */
 export function debounce (event, time) {
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time)
  }
}

/**
 * 节流函数
 * @param {Function} event 执行事件
 * @param {Number} time 延迟时间
 */
export function throttle (event, time) {
  return function (...args) {
    if (Date.now() - pre > time) {
      clearTimeout(timer)
      timer = null
      pre = Date.now()
      event.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
      // event.apply(this, args)
      }, time)
    }
  }
}
