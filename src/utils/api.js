
export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
      '[object Boolean]'  : 'boolean',
      '[object Number]'   : 'number',
      '[object String]'   : 'string',
      '[object Function]' : 'function',
      '[object Array]'    : 'array',
      '[object Date]'     : 'date',
      '[object RegExp]'   : 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]'     : 'null',
      '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}

export function deepCopy (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export function trim (str) {
  if (String.prototype.trim) {
    return str === null ? '' : String.prototype.trim.call(str)
  } else {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
}

export function isArray (arr) {
  if (!Array.isArray) {
    Array.isArray = (arg) => {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
  }
  return Array.isArray(arr)
}

export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isNumber (val) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function isJSON (str) {
  if (typeof str !== 'string') throw new Error('isJSON argment "str" must be a string!')
  try {
    var obj = JSON.parse(str)
    if (typeof obj === 'object' && obj) {
      return true
    } else {
      return false
    }
  } catch (e) {
    console.log('error：' + str + '!!!' + e)
    return false
  }
}

export function isEmpty (str) {
  // eslint-disable-next-line
  if (typeof str === 'undefined' || str === null || !(str === str) || str.toString().includes('NaN')) str = ''
  const reg = new RegExp(/^[\s]*$/)
  str = trim(str)
  return reg.test(str)
}
