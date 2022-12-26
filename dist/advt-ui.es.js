import require$$14 from "vue";
let timer = null;
function formatDate(date, fmt) {
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
}
function debounce$1(event, time) {
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args);
    }, time);
  };
}
var render$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-weektime"
  }, [_c("div", {
    staticClass: "c-schedue"
  }), _c("div", {
    class: {
      "c-schedue": true,
      "c-schedue-notransi": _vm.mode
    },
    style: _vm.styleValue
  }), _c("div", {
    staticClass: "c-weektime-wrap"
  }, [_c("table", {
    staticClass: "c-weektime-table",
    class: {
      "c-min-table": _vm.colspan < 2
    }
  }, [_c("thead", {
    staticClass: "c-weektime-head"
  }, [_c("tr", [_c("th", {
    staticClass: "week-td",
    attrs: {
      "rowspan": "8"
    }
  }, [_vm._v("\u661F\u671F/\u65F6\u95F4")]), _c("th", {
    attrs: {
      "colspan": 12 * _vm.colspan
    }
  }, [_vm._v("00:00 - 12:00")]), _c("th", {
    attrs: {
      "colspan": 12 * _vm.colspan
    }
  }, [_vm._v("12:00 - 24:00")])]), _c("tr", _vm._l(_vm.theadArr, function(t) {
    return _c("td", {
      key: t,
      attrs: {
        "colspan": _vm.colspan
      }
    }, [_vm._v(_vm._s(t))]);
  }), 0)]), _c("tbody", {
    staticClass: "c-weektime-body"
  }, _vm._l(_vm.data, function(t) {
    return _c("tr", {
      key: t.row
    }, [_c("td", [_vm._v(_vm._s(t.value))]), _vm._l(t.child, function(n) {
      return _c("td", {
        key: `${n.row}-${n.col}`,
        staticClass: "weektime-atom-item",
        class: _vm.selectClasses(n),
        attrs: {
          "data-week": n.row,
          "data-time": n.col
        },
        on: {
          "mouseenter": function($event) {
            return _vm.cellEnter(n);
          },
          "mousedown": function($event) {
            return _vm.cellDown(n);
          },
          "mouseup": function($event) {
            return _vm.cellUp(n);
          }
        }
      });
    })], 2);
  }), 0)]), _vm.selectState ? _c("div", {
    staticClass: "c-weektime-preview"
  }, [_c("div", {
    staticClass: "g-clearfix c-weektime-con"
  }, [_c("span", {
    staticClass: "g-pull-left"
  }, [_vm._v("\u5DF2\u9009\u62E9\u65F6\u95F4\u6BB5")]), _c("a", {
    staticClass: "g-pull-right",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.clearWeektime.apply(null, arguments);
      }
    }
  }, [_vm._v("\u6E05\u7A7A\u9009\u62E9")])]), _c("div", {
    staticClass: "c-weektime-time"
  }, _vm._l(_vm.selectValue, function(t) {
    return _c("div", {
      key: t.id
    }, [t.value ? _c("p", [_c("span", {
      staticClass: "g-tip-text"
    }, [_vm._v(_vm._s(t.week) + "\uFF1A")]), _c("span", [_vm._v(_vm._s(t.value))])]) : _vm._e()]);
  }), 0)]) : _vm._e()])]);
};
var staticRenderFns$f = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const dayHour = 24;
const weekArr = ["\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D", "\u661F\u671F\u65E5"];
const createArr = (len) => {
  return Array.from(Array(len)).map((ret, id) => id);
};
const formatWeektime = (col) => {
  const timestamp = 1542384e6;
  const beginstamp = timestamp + col * 18e5;
  const endstamp = beginstamp + 18e5;
  const begin = formatDate(new Date(beginstamp), "hh:mm");
  const end = formatDate(new Date(endstamp), "hh:mm");
  return `${begin}~${end}`;
};
function splicing(list) {
  let same;
  let i = -1;
  let len = list.length;
  let arr = [];
  if (!len)
    return;
  while (++i < len) {
    const item = list[i];
    if (item.check) {
      if (item.check !== Boolean(same)) {
        arr.push(...["\u3001", item.begin, "~", item.end]);
      } else if (arr.length) {
        arr.pop();
        arr.push(item.end);
      }
    }
    same = Boolean(item.check);
  }
  arr.shift();
  return arr.join("");
}
const __vue2_script$f = {
  name: "DragWeektime",
  props: {
    value: {
      type: String
    },
    colspan: {
      type: Number,
      default() {
        return 2;
      }
    }
  },
  computed: {
    styleValue() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        left: `${this.left}px`,
        top: `${this.top}px`
      };
    },
    data() {
      let idx = 0;
      return weekArr.map((ret, index2) => {
        const children = (ret2, row, max) => {
          return createArr(max).map((t, col) => {
            const n = this.value.substr(idx, 1);
            const check = Boolean(parseInt(n));
            idx++;
            return {
              check,
              week: ret2,
              value: formatWeektime(col),
              begin: formatWeektime(col).split("~")[0],
              end: formatWeektime(col).split("~")[1],
              row,
              col
            };
          });
        };
        return {
          value: ret,
          row: index2,
          child: children(ret, index2, dayHour * this.colspan)
        };
      });
    },
    selectValue() {
      return this.data.map((item) => {
        return {
          id: item.row,
          week: item.value,
          value: splicing(item.child)
        };
      });
    },
    selectState() {
      return this.selectValue.some((ret) => ret.value);
    },
    selectClasses() {
      return (n) => n.check ? "ui-selected" : "";
    }
  },
  methods: {
    cellEnter(item) {
      const ele = this.$el.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`);
      if (ele && !this.mode) {
        this.left = ele.offsetLeft;
        this.top = ele.offsetTop;
      } else {
        if (item.col <= this.col && item.row <= this.row) {
          this.width = (this.col - item.col + 1) * ele.offsetWidth;
          this.height = (this.row - item.row + 1) * ele.offsetHeight;
          this.left = ele.offsetLeft;
          this.top = ele.offsetTop;
        } else if (item.col >= this.col && item.row >= this.row) {
          this.width = (item.col - this.col + 1) * ele.offsetWidth;
          this.height = (item.row - this.row + 1) * ele.offsetHeight;
          if (item.col > this.col && item.row === this.row)
            this.top = ele.offsetTop;
          if (item.col === this.col && item.row > this.row)
            this.left = ele.offsetLeft;
        } else if (item.col > this.col && item.row < this.row) {
          this.width = (item.col - this.col + 1) * ele.offsetWidth;
          this.height = (this.row - item.row + 1) * ele.offsetHeight;
          this.top = ele.offsetTop;
        } else if (item.col < this.col && item.row > this.row) {
          this.width = (this.col - item.col + 1) * ele.offsetWidth;
          this.height = (item.row - this.row + 1) * ele.offsetHeight;
          this.left = ele.offsetLeft;
        }
      }
    },
    cellDown(item) {
      const ele = this.$el.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`);
      this.check = Boolean(item.check);
      this.mode = 1;
      if (ele) {
        this.width = ele.offsetWidth;
        this.height = ele.offsetHeight;
      }
      this.row = item.row;
      this.col = item.col;
    },
    cellUp(item) {
      if (item.col <= this.col && item.row <= this.row) {
        this.selectWeek([item.row, this.row], [item.col, this.col], !this.check);
      } else if (item.col >= this.col && item.row >= this.row) {
        this.selectWeek([this.row, item.row], [this.col, item.col], !this.check);
      } else if (item.col > this.col && item.row < this.row) {
        this.selectWeek([item.row, this.row], [this.col, item.col], !this.check);
      } else if (item.col < this.col && item.row > this.row) {
        this.selectWeek([this.row, item.row], [item.col, this.col], !this.check);
      }
      this.width = 0;
      this.height = 0;
      this.mode = 0;
    },
    selectWeek(row, col, check) {
      const [minRow, maxRow] = row;
      const [minCol, maxCol] = col;
      this.data.forEach((item) => {
        item.child.forEach((t) => {
          if (t.row >= minRow && t.row <= maxRow && t.col >= minCol && t.col <= maxCol) {
            this.$set(t, "check", check);
          }
        });
      });
      const data = this.data.map((item) => {
        return item.child.map((ret) => ret.check ? "1" : "0").join("");
      }).join("");
      this.$emit("input", data);
    },
    clearWeektime() {
      this.$emit("input", createArr(48 * 7).map((r) => "0").join(""));
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      mode: 0,
      row: 0,
      col: 0,
      theadArr: createArr(dayHour)
    };
  }
};
const __cssModules$f = {};
var __component__$f = /* @__PURE__ */ normalizeComponent(
  __vue2_script$f,
  render$f,
  staticRenderFns$f,
  false,
  __vue2_injectStyles$f,
  "502d0d99",
  null,
  null
);
function __vue2_injectStyles$f(context) {
  for (let o in __cssModules$f) {
    this[o] = __cssModules$f[o];
  }
}
var DragWeektime = /* @__PURE__ */ function() {
  return __component__$f.exports;
}();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var vueTreeselect_cjs = { exports: {} };
var slicedToArray = { exports: {} };
var arrayWithHoles = { exports: {} };
(function(module) {
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithHoles);
var iterableToArrayLimit = { exports: {} };
(function(module) {
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArrayLimit);
var unsupportedIterableToArray = { exports: {} };
var arrayLikeToArray = { exports: {} };
(function(module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayLikeToArray);
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray$1(o, minLen);
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(unsupportedIterableToArray);
var nonIterableRest = { exports: {} };
(function(module) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableRest);
(function(module) {
  var arrayWithHoles$1 = arrayWithHoles.exports;
  var iterableToArrayLimit$1 = iterableToArrayLimit.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableRest$1 = nonIterableRest.exports;
  function _slicedToArray(arr, i) {
    return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
  }
  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(slicedToArray);
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return arrayLikeToArray$1(arr);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithoutHoles);
var iterableToArray = { exports: {} };
(function(module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArray);
var nonIterableSpread = { exports: {} };
(function(module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableSpread);
(function(module) {
  var arrayWithoutHoles$1 = arrayWithoutHoles.exports;
  var iterableToArray$1 = iterableToArray.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableSpread$1 = nonIterableSpread.exports;
  function _toConsumableArray(arr) {
    return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toConsumableArray);
var defineProperty = { exports: {} };
(function(module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);
function fuzzysearch(needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer:
    for (var i = 0, j = 0; i < qlen; i++) {
      var nch = needle.charCodeAt(i);
      while (j < tlen) {
        if (haystack.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
  return true;
}
var fuzzysearch_1 = fuzzysearch;
function noop() {
}
var noop_1 = noop;
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$2;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var now$1 = function() {
  return root$1.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root = _root;
var Symbol$3 = root.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$2;
var isObject = isObject_1, now = now_1, toNumber$1 = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
var index$2 = function(element, listener) {
  var expand = document.createElement("_");
  var shrink = expand.appendChild(document.createElement("_"));
  var expandChild = expand.appendChild(document.createElement("_"));
  var shrinkChild = shrink.appendChild(document.createElement("_"));
  var lastWidth = void 0, lastHeight = void 0;
  shrink.style.cssText = expand.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1";
  shrinkChild.style.cssText = expandChild.style.cssText = "display:block;height:100%;transition:0s;width:100%";
  shrinkChild.style.width = shrinkChild.style.height = "200%";
  element.appendChild(expand);
  test();
  return stop;
  function test() {
    unbind();
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (width !== lastWidth || height !== lastHeight) {
      lastWidth = width;
      lastHeight = height;
      expandChild.style.width = width * 2 + "px";
      expandChild.style.height = height * 2 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
      shrink.scrollLeft = shrink.scrollWidth;
      shrink.scrollTop = shrink.scrollHeight;
      listener({ width, height });
    }
    shrink.addEventListener("scroll", test);
    expand.addEventListener("scroll", test);
  }
  function unbind() {
    shrink.removeEventListener("scroll", test);
    expand.removeEventListener("scroll", test);
  }
  function stop() {
    unbind();
    element.removeChild(expand);
  }
};
var index_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$2
}, Symbol.toStringTag, { value: "Module" }));
var require$$6 = /* @__PURE__ */ getAugmentedNamespace(index_es);
var isPromise$1 = { exports: {} };
isPromise$1.exports = isPromise;
isPromise$1.exports.default = isPromise;
function isPromise(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var toNumber = toNumber_1;
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var toInteger = toInteger_1;
var FUNC_ERROR_TEXT = "Expected a function";
function before$1(n, func) {
  var result;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = void 0;
    }
    return result;
  };
}
var before_1 = before$1;
var before = before_1;
function once(func) {
  return before(2, func);
}
var once_1 = once;
function identity(value) {
  return value;
}
var identity_1 = identity;
function constant(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant;
var _typeof = { exports: {} };
(function(module) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last;
var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;
var babelHelperVueJsxMergeProps = function mergeJSXProps(objs) {
  return objs.reduce(function(a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        if (key === "class") {
          if (typeof aa === "string") {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === "string") {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === "on" || key === "nativeOn" || key === "hook") {
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }, {});
};
function mergeFn(a, b) {
  return function() {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  };
}
/*!
 * vue-treeselect v0.4.0 | (c) 2017-2019 Riophae Lee
 * Released under the MIT License.
 * https://vue-treeselect.js.org/
 */
(function(module) {
  module.exports = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module2 = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
      module2.l = true;
      return module2.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { enumerable: true, get: getter });
      }
    };
    __webpack_require__.r = function(exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
    __webpack_require__.t = function(value, mode) {
      if (mode & 1)
        value = __webpack_require__(value);
      if (mode & 8)
        return value;
      if (mode & 4 && typeof value === "object" && value && value.__esModule)
        return value;
      var ns = /* @__PURE__ */ Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, "default", { enumerable: true, value });
      if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(ns, key, function(key2) {
            return value[key2];
          }.bind(null, key));
      return ns;
    };
    __webpack_require__.n = function(module2) {
      var getter = module2 && module2.__esModule ? function getDefault() {
        return module2["default"];
      } : function getModuleExports() {
        return module2;
      };
      __webpack_require__.d(getter, "a", getter);
      return getter;
    };
    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "/";
    return __webpack_require__(__webpack_require__.s = 16);
  }([
    function(module2, exports) {
      module2.exports = slicedToArray.exports;
    },
    function(module2, exports) {
      module2.exports = toConsumableArray.exports;
    },
    function(module2, exports) {
      module2.exports = defineProperty.exports;
    },
    function(module2, exports) {
      module2.exports = fuzzysearch_1;
    },
    function(module2, exports) {
      module2.exports = noop_1;
    },
    function(module2, exports) {
      module2.exports = debounce_1;
    },
    function(module2, exports) {
      module2.exports = require$$6;
    },
    function(module2, exports) {
      module2.exports = isPromise$1.exports;
    },
    function(module2, exports) {
      module2.exports = once_1;
    },
    function(module2, exports) {
      module2.exports = identity_1;
    },
    function(module2, exports) {
      module2.exports = constant_1;
    },
    function(module2, exports) {
      module2.exports = _typeof.exports;
    },
    function(module2, exports) {
      module2.exports = last_1;
    },
    function(module2, exports) {
      module2.exports = babelHelperVueJsxMergeProps;
    },
    function(module2, exports) {
      module2.exports = require$$14;
    },
    function(module2, exports, __webpack_require__) {
    },
    function(module2, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var slicedToArray_ = __webpack_require__(0);
      var slicedToArray_default = /* @__PURE__ */ __webpack_require__.n(slicedToArray_);
      var toConsumableArray_ = __webpack_require__(1);
      var toConsumableArray_default = /* @__PURE__ */ __webpack_require__.n(toConsumableArray_);
      var defineProperty_ = __webpack_require__(2);
      var defineProperty_default = /* @__PURE__ */ __webpack_require__.n(defineProperty_);
      var external_fuzzysearch_ = __webpack_require__(3);
      var external_fuzzysearch_default = /* @__PURE__ */ __webpack_require__.n(external_fuzzysearch_);
      var noop_ = __webpack_require__(4);
      var noop_default = /* @__PURE__ */ __webpack_require__.n(noop_);
      var warning_warning = noop_default.a;
      function onLeftClick(mouseDownHandler) {
        return function onMouseDown(evt) {
          if (evt.type === "mousedown" && evt.button === 0) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
          }
        };
      }
      function scrollIntoView($scrollingEl, $focusedEl) {
        var scrollingReact = $scrollingEl.getBoundingClientRect();
        var focusedRect = $focusedEl.getBoundingClientRect();
        var overScroll = $focusedEl.offsetHeight / 3;
        if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
          $scrollingEl.scrollTop = Math.min($focusedEl.offsetTop + $focusedEl.clientHeight - $scrollingEl.offsetHeight + overScroll, $scrollingEl.scrollHeight);
        } else if (focusedRect.top - overScroll < scrollingReact.top) {
          $scrollingEl.scrollTop = Math.max($focusedEl.offsetTop - overScroll, 0);
        }
      }
      var debounce_ = __webpack_require__(5);
      var debounce_default = /* @__PURE__ */ __webpack_require__.n(debounce_);
      var external_watch_size_ = __webpack_require__(6);
      var external_watch_size_default = /* @__PURE__ */ __webpack_require__.n(external_watch_size_);
      function removeFromArray(arr, elem) {
        var idx = arr.indexOf(elem);
        if (idx !== -1)
          arr.splice(idx, 1);
      }
      var intervalId;
      var registered = [];
      var INTERVAL_DURATION = 100;
      function run() {
        intervalId = setInterval(function() {
          registered.forEach(test);
        }, INTERVAL_DURATION);
      }
      function stop() {
        clearInterval(intervalId);
        intervalId = null;
      }
      function test(item) {
        var $el = item.$el, listener = item.listener, lastWidth = item.lastWidth, lastHeight = item.lastHeight;
        var width = $el.offsetWidth;
        var height = $el.offsetHeight;
        if (lastWidth !== width || lastHeight !== height) {
          item.lastWidth = width;
          item.lastHeight = height;
          listener({
            width,
            height
          });
        }
      }
      function watchSizeForIE9($el, listener) {
        var item = {
          $el,
          listener,
          lastWidth: null,
          lastHeight: null
        };
        var unwatch = function unwatch2() {
          removeFromArray(registered, item);
          if (!registered.length)
            stop();
        };
        registered.push(item);
        test(item);
        run();
        return unwatch;
      }
      function watchSize($el, listener) {
        var isIE9 = document.documentMode === 9;
        var locked = true;
        var wrappedListener = function wrappedListener2() {
          return locked || listener.apply(void 0, arguments);
        };
        var implementation = isIE9 ? watchSizeForIE9 : external_watch_size_default.a;
        var removeSizeWatcher = implementation($el, wrappedListener);
        locked = false;
        return removeSizeWatcher;
      }
      function findScrollParents($el) {
        var $scrollParents = [];
        var $parent = $el.parentNode;
        while ($parent && $parent.nodeName !== "BODY" && $parent.nodeType === document.ELEMENT_NODE) {
          if (isScrollElment($parent))
            $scrollParents.push($parent);
          $parent = $parent.parentNode;
        }
        $scrollParents.push(window);
        return $scrollParents;
      }
      function isScrollElment($el) {
        var _getComputedStyle = getComputedStyle($el), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX);
      }
      function setupResizeAndScrollEventListeners($el, listener) {
        var $scrollParents = findScrollParents($el);
        window.addEventListener("resize", listener, {
          passive: true
        });
        $scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", listener, {
            passive: true
          });
        });
        return function removeEventListeners() {
          window.removeEventListener("resize", listener, {
            passive: true
          });
          $scrollParents.forEach(function($scrollParent) {
            $scrollParent.removeEventListener("scroll", listener, {
              passive: true
            });
          });
        };
      }
      function isNaN_isNaN(x) {
        return x !== x;
      }
      var external_is_promise_ = __webpack_require__(7);
      var external_is_promise_default = /* @__PURE__ */ __webpack_require__.n(external_is_promise_);
      var once_ = __webpack_require__(8);
      var once_default = /* @__PURE__ */ __webpack_require__.n(once_);
      var identity_ = __webpack_require__(9);
      var identity_default = /* @__PURE__ */ __webpack_require__.n(identity_);
      var constant_ = __webpack_require__(10);
      var constant_default = /* @__PURE__ */ __webpack_require__.n(constant_);
      var createMap = function createMap2() {
        return /* @__PURE__ */ Object.create(null);
      };
      var typeof_ = __webpack_require__(11);
      var typeof_default = /* @__PURE__ */ __webpack_require__.n(typeof_);
      function isPlainObject(value) {
        if (value == null || typeof_default()(value) !== "object")
          return false;
        return Object.getPrototypeOf(value) === Object.prototype;
      }
      function copy(obj, key, value) {
        if (isPlainObject(value)) {
          obj[key] || (obj[key] = {});
          deepExtend(obj[key], value);
        } else {
          obj[key] = value;
        }
      }
      function deepExtend(target, source) {
        if (isPlainObject(source)) {
          var keys = Object.keys(source);
          for (var i = 0, len = keys.length; i < len; i++) {
            copy(target, keys[i], source[keys[i]]);
          }
        }
        return target;
      }
      var last_ = __webpack_require__(12);
      var last_default = /* @__PURE__ */ __webpack_require__.n(last_);
      function includes(arrOrStr, elem) {
        return arrOrStr.indexOf(elem) !== -1;
      }
      function find(arr, predicate, ctx) {
        for (var i = 0, len = arr.length; i < len; i++) {
          if (predicate.call(ctx, arr[i], i, arr))
            return arr[i];
        }
        return void 0;
      }
      function quickDiff(arrA, arrB) {
        if (arrA.length !== arrB.length)
          return true;
        for (var i = 0; i < arrA.length; i++) {
          if (arrA[i] !== arrB[i])
            return true;
        }
        return false;
      }
      var NO_PARENT_NODE = null;
      var UNCHECKED = 0;
      var INDETERMINATE = 1;
      var CHECKED = 2;
      var ALL_CHILDREN = "ALL_CHILDREN";
      var ALL_DESCENDANTS = "ALL_DESCENDANTS";
      var LEAF_CHILDREN = "LEAF_CHILDREN";
      var LEAF_DESCENDANTS = "LEAF_DESCENDANTS";
      var LOAD_ROOT_OPTIONS = "LOAD_ROOT_OPTIONS";
      var LOAD_CHILDREN_OPTIONS = "LOAD_CHILDREN_OPTIONS";
      var ASYNC_SEARCH = "ASYNC_SEARCH";
      var ALL = "ALL";
      var BRANCH_PRIORITY = "BRANCH_PRIORITY";
      var LEAF_PRIORITY = "LEAF_PRIORITY";
      var ALL_WITH_INDETERMINATE = "ALL_WITH_INDETERMINATE";
      var ORDER_SELECTED = "ORDER_SELECTED";
      var LEVEL = "LEVEL";
      var INDEX = "INDEX";
      var KEY_CODES = {
        BACKSPACE: 8,
        ENTER: 13,
        ESCAPE: 27,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46
      };
      var INPUT_DEBOUNCE_DELAY = 200;
      var MIN_INPUT_WIDTH = 5;
      var MENU_BUFFER = 40;
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(source, true).forEach(function(key) {
              defineProperty_default()(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(source).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function sortValueByIndex(a, b) {
        var i = 0;
        do {
          if (a.level < i)
            return -1;
          if (b.level < i)
            return 1;
          if (a.index[i] !== b.index[i])
            return a.index[i] - b.index[i];
          i++;
        } while (true);
      }
      function sortValueByLevel(a, b) {
        return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
      }
      function createAsyncOptionsStates() {
        return {
          isLoaded: false,
          isLoading: false,
          loadingError: ""
        };
      }
      function stringifyOptionPropValue(value) {
        if (typeof value === "string")
          return value;
        if (typeof value === "number" && !isNaN_isNaN(value))
          return value + "";
        return "";
      }
      function match(enableFuzzyMatch, needle, haystack) {
        return enableFuzzyMatch ? external_fuzzysearch_default()(needle, haystack) : includes(haystack, needle);
      }
      function getErrorMessage(err) {
        return err.message || String(err);
      }
      var instanceId = 0;
      var treeselectMixin = {
        provide: function provide() {
          return {
            instance: this
          };
        },
        props: {
          allowClearingDisabled: {
            type: Boolean,
            default: false
          },
          allowSelectingDisabledDescendants: {
            type: Boolean,
            default: false
          },
          alwaysOpen: {
            type: Boolean,
            default: false
          },
          appendToBody: {
            type: Boolean,
            default: false
          },
          async: {
            type: Boolean,
            default: false
          },
          autoFocus: {
            type: Boolean,
            default: false
          },
          autoLoadRootOptions: {
            type: Boolean,
            default: true
          },
          autoDeselectAncestors: {
            type: Boolean,
            default: false
          },
          autoDeselectDescendants: {
            type: Boolean,
            default: false
          },
          autoSelectAncestors: {
            type: Boolean,
            default: false
          },
          autoSelectDescendants: {
            type: Boolean,
            default: false
          },
          backspaceRemoves: {
            type: Boolean,
            default: true
          },
          beforeClearAll: {
            type: Function,
            default: constant_default()(true)
          },
          branchNodesFirst: {
            type: Boolean,
            default: false
          },
          cacheOptions: {
            type: Boolean,
            default: true
          },
          clearable: {
            type: Boolean,
            default: true
          },
          clearAllText: {
            type: String,
            default: "Clear all"
          },
          clearOnSelect: {
            type: Boolean,
            default: false
          },
          clearValueText: {
            type: String,
            default: "Clear value"
          },
          closeOnSelect: {
            type: Boolean,
            default: true
          },
          defaultExpandLevel: {
            type: Number,
            default: 0
          },
          defaultOptions: {
            default: false
          },
          deleteRemoves: {
            type: Boolean,
            default: true
          },
          delimiter: {
            type: String,
            default: ","
          },
          flattenSearchResults: {
            type: Boolean,
            default: false
          },
          disableBranchNodes: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          },
          disableFuzzyMatching: {
            type: Boolean,
            default: false
          },
          flat: {
            type: Boolean,
            default: false
          },
          instanceId: {
            default: function _default() {
              return "".concat(instanceId++, "$$");
            },
            type: [String, Number]
          },
          joinValues: {
            type: Boolean,
            default: false
          },
          limit: {
            type: Number,
            default: Infinity
          },
          limitText: {
            type: Function,
            default: function limitTextDefault(count) {
              return "and ".concat(count, " more");
            }
          },
          loadingText: {
            type: String,
            default: "Loading..."
          },
          loadOptions: {
            type: Function
          },
          matchKeys: {
            type: Array,
            default: constant_default()(["label"])
          },
          maxHeight: {
            type: Number,
            default: 300
          },
          multiple: {
            type: Boolean,
            default: false
          },
          name: {
            type: String
          },
          noChildrenText: {
            type: String,
            default: "No sub-options."
          },
          noOptionsText: {
            type: String,
            default: "No options available."
          },
          noResultsText: {
            type: String,
            default: "No results found..."
          },
          normalizer: {
            type: Function,
            default: identity_default.a
          },
          openDirection: {
            type: String,
            default: "auto",
            validator: function validator(value) {
              var acceptableValues = ["auto", "top", "bottom", "above", "below"];
              return includes(acceptableValues, value);
            }
          },
          openOnClick: {
            type: Boolean,
            default: true
          },
          openOnFocus: {
            type: Boolean,
            default: false
          },
          options: {
            type: Array
          },
          placeholder: {
            type: String,
            default: "Select..."
          },
          required: {
            type: Boolean,
            default: false
          },
          retryText: {
            type: String,
            default: "Retry?"
          },
          retryTitle: {
            type: String,
            default: "Click to retry"
          },
          searchable: {
            type: Boolean,
            default: true
          },
          searchNested: {
            type: Boolean,
            default: false
          },
          searchPromptText: {
            type: String,
            default: "Type to search..."
          },
          showCount: {
            type: Boolean,
            default: false
          },
          showCountOf: {
            type: String,
            default: ALL_CHILDREN,
            validator: function validator(value) {
              var acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
              return includes(acceptableValues, value);
            }
          },
          showCountOnSearch: null,
          sortValueBy: {
            type: String,
            default: ORDER_SELECTED,
            validator: function validator(value) {
              var acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
              return includes(acceptableValues, value);
            }
          },
          tabIndex: {
            type: Number,
            default: 0
          },
          value: null,
          valueConsistsOf: {
            type: String,
            default: BRANCH_PRIORITY,
            validator: function validator(value) {
              var acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
              return includes(acceptableValues, value);
            }
          },
          valueFormat: {
            type: String,
            default: "id"
          },
          zIndex: {
            type: [Number, String],
            default: 999
          }
        },
        data: function data() {
          return {
            trigger: {
              isFocused: false,
              searchQuery: ""
            },
            menu: {
              isOpen: false,
              current: null,
              lastScrollPosition: 0,
              placement: "bottom"
            },
            forest: {
              normalizedOptions: [],
              nodeMap: createMap(),
              checkedStateMap: createMap(),
              selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
              selectedNodeMap: createMap()
            },
            rootOptionsStates: createAsyncOptionsStates(),
            localSearch: {
              active: false,
              noResults: true,
              countMap: createMap()
            },
            remoteSearch: createMap()
          };
        },
        computed: {
          selectedNodes: function selectedNodes() {
            return this.forest.selectedNodeIds.map(this.getNode);
          },
          internalValue: function internalValue() {
            var _this = this;
            var internalValue2;
            if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
              internalValue2 = this.forest.selectedNodeIds.slice();
            } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
              internalValue2 = this.forest.selectedNodeIds.filter(function(id) {
                var node = _this.getNode(id);
                if (node.isRootNode)
                  return true;
                return !_this.isSelected(node.parentNode);
              });
            } else if (this.valueConsistsOf === LEAF_PRIORITY) {
              internalValue2 = this.forest.selectedNodeIds.filter(function(id) {
                var node = _this.getNode(id);
                if (node.isLeaf)
                  return true;
                return node.children.length === 0;
              });
            } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
              var _internalValue;
              var indeterminateNodeIds = [];
              internalValue2 = this.forest.selectedNodeIds.slice();
              this.selectedNodes.forEach(function(selectedNode) {
                selectedNode.ancestors.forEach(function(ancestor) {
                  if (includes(indeterminateNodeIds, ancestor.id))
                    return;
                  if (includes(internalValue2, ancestor.id))
                    return;
                  indeterminateNodeIds.push(ancestor.id);
                });
              });
              (_internalValue = internalValue2).push.apply(_internalValue, indeterminateNodeIds);
            }
            if (this.sortValueBy === LEVEL) {
              internalValue2.sort(function(a, b) {
                return sortValueByLevel(_this.getNode(a), _this.getNode(b));
              });
            } else if (this.sortValueBy === INDEX) {
              internalValue2.sort(function(a, b) {
                return sortValueByIndex(_this.getNode(a), _this.getNode(b));
              });
            }
            return internalValue2;
          },
          hasValue: function hasValue() {
            return this.internalValue.length > 0;
          },
          single: function single() {
            return !this.multiple;
          },
          visibleOptionIds: function visibleOptionIds() {
            var _this2 = this;
            var visibleOptionIds2 = [];
            this.traverseAllNodesByIndex(function(node) {
              if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
                visibleOptionIds2.push(node.id);
              }
              if (node.isBranch && !_this2.shouldExpand(node)) {
                return false;
              }
            });
            return visibleOptionIds2;
          },
          hasVisibleOptions: function hasVisibleOptions() {
            return this.visibleOptionIds.length !== 0;
          },
          showCountOnSearchComputed: function showCountOnSearchComputed() {
            return typeof this.showCountOnSearch === "boolean" ? this.showCountOnSearch : this.showCount;
          },
          hasBranchNodes: function hasBranchNodes() {
            return this.forest.normalizedOptions.some(function(rootNode) {
              return rootNode.isBranch;
            });
          },
          shouldFlattenOptions: function shouldFlattenOptions() {
            return this.localSearch.active && this.flattenSearchResults;
          }
        },
        watch: {
          alwaysOpen: function alwaysOpen(newValue) {
            if (newValue)
              this.openMenu();
            else
              this.closeMenu();
          },
          branchNodesFirst: function branchNodesFirst() {
            this.initialize();
          },
          disabled: function disabled(newValue) {
            if (newValue && this.menu.isOpen)
              this.closeMenu();
            else if (!newValue && !this.menu.isOpen && this.alwaysOpen)
              this.openMenu();
          },
          flat: function flat() {
            this.initialize();
          },
          internalValue: function internalValue(newValue, oldValue) {
            var hasChanged = quickDiff(newValue, oldValue);
            if (hasChanged)
              this.$emit("input", this.getValue(), this.getInstanceId());
          },
          matchKeys: function matchKeys() {
            this.initialize();
          },
          multiple: function multiple(newValue) {
            if (newValue)
              this.buildForestState();
          },
          options: {
            handler: function handler() {
              if (this.async)
                return;
              this.initialize();
              this.rootOptionsStates.isLoaded = Array.isArray(this.options);
            },
            deep: true,
            immediate: true
          },
          "trigger.searchQuery": function triggerSearchQuery() {
            if (this.async) {
              this.handleRemoteSearch();
            } else {
              this.handleLocalSearch();
            }
            this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
          },
          value: function value() {
            var nodeIdsFromValue = this.extractCheckedNodeIdsFromValue();
            var hasChanged = quickDiff(nodeIdsFromValue, this.internalValue);
            if (hasChanged)
              this.fixSelectedNodeIds(nodeIdsFromValue);
          }
        },
        methods: {
          verifyProps: function verifyProps() {
            var _this3 = this;
            warning_warning(function() {
              return _this3.async ? _this3.searchable : true;
            }, function() {
              return 'For async search mode, the value of "searchable" prop must be true.';
            });
            if (this.options == null && !this.loadOptions) {
              warning_warning(function() {
                return false;
              }, function() {
                return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
              });
            }
            if (this.flat) {
              warning_warning(function() {
                return _this3.multiple;
              }, function() {
                return 'You are using flat mode. But you forgot to add "multiple=true"?';
              });
            }
            if (!this.flat) {
              var propNames = ["autoSelectAncestors", "autoSelectDescendants", "autoDeselectAncestors", "autoDeselectDescendants"];
              propNames.forEach(function(propName) {
                warning_warning(function() {
                  return !_this3[propName];
                }, function() {
                  return '"'.concat(propName, '" only applies to flat mode.');
                });
              });
            }
          },
          resetFlags: function resetFlags() {
            this._blurOnSelect = false;
          },
          initialize: function initialize() {
            var options = this.async ? this.getRemoteSearchEntry().options : this.options;
            if (Array.isArray(options)) {
              var prevNodeMap = this.forest.nodeMap;
              this.forest.nodeMap = createMap();
              this.keepDataOfSelectedNodes(prevNodeMap);
              this.forest.normalizedOptions = this.normalize(NO_PARENT_NODE, options, prevNodeMap);
              this.fixSelectedNodeIds(this.internalValue);
            } else {
              this.forest.normalizedOptions = [];
            }
          },
          getInstanceId: function getInstanceId() {
            return this.instanceId == null ? this.id : this.instanceId;
          },
          getValue: function getValue() {
            var _this4 = this;
            if (this.valueFormat === "id") {
              return this.multiple ? this.internalValue.slice() : this.internalValue[0];
            }
            var rawNodes = this.internalValue.map(function(id) {
              return _this4.getNode(id).raw;
            });
            return this.multiple ? rawNodes : rawNodes[0];
          },
          getNode: function getNode(nodeId) {
            warning_warning(function() {
              return nodeId != null;
            }, function() {
              return "Invalid node id: ".concat(nodeId);
            });
            if (nodeId == null)
              return null;
            return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
          },
          createFallbackNode: function createFallbackNode(id) {
            var raw = this.extractNodeFromValue(id);
            var label = this.enhancedNormalizer(raw).label || "".concat(id, " (unknown)");
            var fallbackNode = {
              id,
              label,
              ancestors: [],
              parentNode: NO_PARENT_NODE,
              isFallbackNode: true,
              isRootNode: true,
              isLeaf: true,
              isBranch: false,
              isDisabled: false,
              isNew: false,
              index: [-1],
              level: 0,
              raw
            };
            return this.$set(this.forest.nodeMap, id, fallbackNode);
          },
          extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
            var _this5 = this;
            if (this.value == null)
              return [];
            if (this.valueFormat === "id") {
              return this.multiple ? this.value.slice() : [this.value];
            }
            return (this.multiple ? this.value : [this.value]).map(function(node) {
              return _this5.enhancedNormalizer(node);
            }).map(function(node) {
              return node.id;
            });
          },
          extractNodeFromValue: function extractNodeFromValue(id) {
            var _this6 = this;
            var defaultNode = {
              id
            };
            if (this.valueFormat === "id") {
              return defaultNode;
            }
            var valueArray = this.multiple ? Array.isArray(this.value) ? this.value : [] : this.value ? [this.value] : [];
            var matched = find(valueArray, function(node) {
              return node && _this6.enhancedNormalizer(node).id === id;
            });
            return matched || defaultNode;
          },
          fixSelectedNodeIds: function fixSelectedNodeIds(nodeIdListOfPrevValue) {
            var _this7 = this;
            var nextSelectedNodeIds = [];
            if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
              nextSelectedNodeIds = nodeIdListOfPrevValue;
            } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
              nodeIdListOfPrevValue.forEach(function(nodeId2) {
                nextSelectedNodeIds.push(nodeId2);
                var node2 = _this7.getNode(nodeId2);
                if (node2.isBranch)
                  _this7.traverseDescendantsBFS(node2, function(descendant) {
                    nextSelectedNodeIds.push(descendant.id);
                  });
              });
            } else if (this.valueConsistsOf === LEAF_PRIORITY) {
              var map = createMap();
              var queue = nodeIdListOfPrevValue.slice();
              while (queue.length) {
                var nodeId = queue.shift();
                var node = this.getNode(nodeId);
                nextSelectedNodeIds.push(nodeId);
                if (node.isRootNode)
                  continue;
                if (!(node.parentNode.id in map))
                  map[node.parentNode.id] = node.parentNode.children.length;
                if (--map[node.parentNode.id] === 0)
                  queue.push(node.parentNode.id);
              }
            } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
              var _map = createMap();
              var _queue = nodeIdListOfPrevValue.filter(function(nodeId2) {
                var node2 = _this7.getNode(nodeId2);
                return node2.isLeaf || node2.children.length === 0;
              });
              while (_queue.length) {
                var _nodeId = _queue.shift();
                var _node = this.getNode(_nodeId);
                nextSelectedNodeIds.push(_nodeId);
                if (_node.isRootNode)
                  continue;
                if (!(_node.parentNode.id in _map))
                  _map[_node.parentNode.id] = _node.parentNode.children.length;
                if (--_map[_node.parentNode.id] === 0)
                  _queue.push(_node.parentNode.id);
              }
            }
            var hasChanged = quickDiff(this.forest.selectedNodeIds, nextSelectedNodeIds);
            if (hasChanged)
              this.forest.selectedNodeIds = nextSelectedNodeIds;
            this.buildForestState();
          },
          keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
            var _this8 = this;
            this.forest.selectedNodeIds.forEach(function(id) {
              if (!prevNodeMap[id])
                return;
              var node = _objectSpread({}, prevNodeMap[id], {
                isFallbackNode: true
              });
              _this8.$set(_this8.forest.nodeMap, id, node);
            });
          },
          isSelected: function isSelected(node) {
            return this.forest.selectedNodeMap[node.id] === true;
          },
          traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
            if (!parentNode.isBranch)
              return;
            var queue = parentNode.children.slice();
            while (queue.length) {
              var currNode = queue[0];
              if (currNode.isBranch)
                queue.push.apply(queue, toConsumableArray_default()(currNode.children));
              callback(currNode);
              queue.shift();
            }
          },
          traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
            var _this9 = this;
            if (!parentNode.isBranch)
              return;
            parentNode.children.forEach(function(child) {
              _this9.traverseDescendantsDFS(child, callback);
              callback(child);
            });
          },
          traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
            var _this10 = this;
            this.forest.normalizedOptions.forEach(function(rootNode) {
              _this10.traverseDescendantsDFS(rootNode, callback);
              callback(rootNode);
            });
          },
          traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
            var walk = function walk2(parentNode) {
              parentNode.children.forEach(function(child) {
                if (callback(child) !== false && child.isBranch) {
                  walk2(child);
                }
              });
            };
            walk({
              children: this.forest.normalizedOptions
            });
          },
          toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
            if (enabled) {
              document.addEventListener("mousedown", this.handleClickOutside, false);
            } else {
              document.removeEventListener("mousedown", this.handleClickOutside, false);
            }
          },
          getValueContainer: function getValueContainer() {
            return this.$refs.control.$refs["value-container"];
          },
          getInput: function getInput() {
            return this.getValueContainer().$refs.input;
          },
          focusInput: function focusInput() {
            this.getInput().focus();
          },
          blurInput: function blurInput() {
            this.getInput().blur();
          },
          handleMouseDown: onLeftClick(function handleMouseDown(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (this.disabled)
              return;
            var isClickedOnValueContainer = this.getValueContainer().$el.contains(evt.target);
            if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
              this.openMenu();
            }
            if (this._blurOnSelect) {
              this.blurInput();
            } else {
              this.focusInput();
            }
            this.resetFlags();
          }),
          handleClickOutside: function handleClickOutside(evt) {
            if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
              this.blurInput();
              this.closeMenu();
            }
          },
          handleLocalSearch: function handleLocalSearch() {
            var _this11 = this;
            var searchQuery = this.trigger.searchQuery;
            var done = function done2() {
              return _this11.resetHighlightedOptionWhenNecessary(true);
            };
            if (!searchQuery) {
              this.localSearch.active = false;
              return done();
            }
            this.localSearch.active = true;
            this.localSearch.noResults = true;
            this.traverseAllNodesDFS(function(node) {
              if (node.isBranch) {
                var _this11$$set;
                node.isExpandedOnSearch = false;
                node.showAllChildrenOnSearch = false;
                node.isMatched = false;
                node.hasMatchedDescendants = false;
                _this11.$set(_this11.localSearch.countMap, node.id, (_this11$$set = {}, defineProperty_default()(_this11$$set, ALL_CHILDREN, 0), defineProperty_default()(_this11$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this11$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this11$$set, LEAF_DESCENDANTS, 0), _this11$$set));
              }
            });
            var lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
            var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, " ").split(" ");
            this.traverseAllNodesDFS(function(node) {
              if (_this11.searchNested && splitSearchQuery.length > 1) {
                node.isMatched = splitSearchQuery.every(function(filterValue) {
                  return match(false, filterValue, node.nestedSearchLabel);
                });
              } else {
                node.isMatched = _this11.matchKeys.some(function(matchKey) {
                  return match(!_this11.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]);
                });
              }
              if (node.isMatched) {
                _this11.localSearch.noResults = false;
                node.ancestors.forEach(function(ancestor) {
                  return _this11.localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++;
                });
                if (node.isLeaf)
                  node.ancestors.forEach(function(ancestor) {
                    return _this11.localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++;
                  });
                if (node.parentNode !== NO_PARENT_NODE) {
                  _this11.localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
                  if (node.isLeaf)
                    _this11.localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
                }
              }
              if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== NO_PARENT_NODE) {
                node.parentNode.isExpandedOnSearch = true;
                node.parentNode.hasMatchedDescendants = true;
              }
            });
            done();
          },
          handleRemoteSearch: function handleRemoteSearch() {
            var _this12 = this;
            var searchQuery = this.trigger.searchQuery;
            var entry = this.getRemoteSearchEntry();
            var done = function done2() {
              _this12.initialize();
              _this12.resetHighlightedOptionWhenNecessary(true);
            };
            if ((searchQuery === "" || this.cacheOptions) && entry.isLoaded) {
              return done();
            }
            this.callLoadOptionsProp({
              action: ASYNC_SEARCH,
              args: {
                searchQuery
              },
              isPending: function isPending() {
                return entry.isLoading;
              },
              start: function start() {
                entry.isLoading = true;
                entry.isLoaded = false;
                entry.loadingError = "";
              },
              succeed: function succeed(options) {
                entry.isLoaded = true;
                entry.options = options;
                if (_this12.trigger.searchQuery === searchQuery)
                  done();
              },
              fail: function fail(err) {
                entry.loadingError = getErrorMessage(err);
              },
              end: function end() {
                entry.isLoading = false;
              }
            });
          },
          getRemoteSearchEntry: function getRemoteSearchEntry() {
            var _this13 = this;
            var searchQuery = this.trigger.searchQuery;
            var entry = this.remoteSearch[searchQuery] || _objectSpread({}, createAsyncOptionsStates(), {
              options: []
            });
            this.$watch(function() {
              return entry.options;
            }, function() {
              if (_this13.trigger.searchQuery === searchQuery)
                _this13.initialize();
            }, {
              deep: true
            });
            if (searchQuery === "") {
              if (Array.isArray(this.defaultOptions)) {
                entry.options = this.defaultOptions;
                entry.isLoaded = true;
                return entry;
              } else if (this.defaultOptions !== true) {
                entry.isLoaded = true;
                return entry;
              }
            }
            if (!this.remoteSearch[searchQuery]) {
              this.$set(this.remoteSearch, searchQuery, entry);
            }
            return entry;
          },
          shouldExpand: function shouldExpand(node) {
            return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
          },
          shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
            if (node.isMatched)
              return true;
            if (node.isBranch && node.hasMatchedDescendants && !this.flattenSearchResults)
              return true;
            if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch)
              return true;
            return false;
          },
          shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
            if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
              return false;
            }
            return true;
          },
          getControl: function getControl() {
            return this.$refs.control.$el;
          },
          getMenu: function getMenu() {
            var ref = this.appendToBody ? this.$refs.portal.portalTarget : this;
            var $menu = ref.$refs.menu.$refs.menu;
            return $menu && $menu.nodeName !== "#comment" ? $menu : null;
          },
          setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
            var _this14 = this;
            var scroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var prev = this.menu.current;
            if (prev != null && prev in this.forest.nodeMap) {
              this.forest.nodeMap[prev].isHighlighted = false;
            }
            this.menu.current = node.id;
            node.isHighlighted = true;
            if (this.menu.isOpen && scroll) {
              var scrollToOption = function scrollToOption2() {
                var $menu = _this14.getMenu();
                var $option = $menu.querySelector('.vue-treeselect__option[data-id="'.concat(node.id, '"]'));
                if ($option)
                  scrollIntoView($menu, $option);
              };
              if (this.getMenu()) {
                scrollToOption();
              } else {
                this.$nextTick(scrollToOption);
              }
            }
          },
          resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
            var forceReset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var current = this.menu.current;
            if (forceReset || current == null || !(current in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(current))) {
              this.highlightFirstOption();
            }
          },
          highlightFirstOption: function highlightFirstOption() {
            if (!this.hasVisibleOptions)
              return;
            var first = this.visibleOptionIds[0];
            this.setCurrentHighlightedOption(this.getNode(first));
          },
          highlightPrevOption: function highlightPrevOption() {
            if (!this.hasVisibleOptions)
              return;
            var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
            if (prev === -1)
              return this.highlightLastOption();
            this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
          },
          highlightNextOption: function highlightNextOption() {
            if (!this.hasVisibleOptions)
              return;
            var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
            if (next === this.visibleOptionIds.length)
              return this.highlightFirstOption();
            this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
          },
          highlightLastOption: function highlightLastOption() {
            if (!this.hasVisibleOptions)
              return;
            var last2 = last_default()(this.visibleOptionIds);
            this.setCurrentHighlightedOption(this.getNode(last2));
          },
          resetSearchQuery: function resetSearchQuery() {
            this.trigger.searchQuery = "";
          },
          closeMenu: function closeMenu() {
            if (!this.menu.isOpen || !this.disabled && this.alwaysOpen)
              return;
            this.saveMenuScrollPosition();
            this.menu.isOpen = false;
            this.toggleClickOutsideEvent(false);
            this.resetSearchQuery();
            this.$emit("close", this.getValue(), this.getInstanceId());
          },
          openMenu: function openMenu() {
            if (this.disabled || this.menu.isOpen)
              return;
            this.menu.isOpen = true;
            this.$nextTick(this.resetHighlightedOptionWhenNecessary);
            this.$nextTick(this.restoreMenuScrollPosition);
            if (!this.options && !this.async)
              this.loadRootOptions();
            this.toggleClickOutsideEvent(true);
            this.$emit("open", this.getInstanceId());
          },
          toggleMenu: function toggleMenu() {
            if (this.menu.isOpen) {
              this.closeMenu();
            } else {
              this.openMenu();
            }
          },
          toggleExpanded: function toggleExpanded(node) {
            var nextState;
            if (this.localSearch.active) {
              nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
              if (nextState)
                node.showAllChildrenOnSearch = true;
            } else {
              nextState = node.isExpanded = !node.isExpanded;
            }
            if (nextState && !node.childrenStates.isLoaded) {
              this.loadChildrenOptions(node);
            }
          },
          buildForestState: function buildForestState() {
            var _this15 = this;
            var selectedNodeMap = createMap();
            this.forest.selectedNodeIds.forEach(function(selectedNodeId) {
              selectedNodeMap[selectedNodeId] = true;
            });
            this.forest.selectedNodeMap = selectedNodeMap;
            var checkedStateMap = createMap();
            if (this.multiple) {
              this.traverseAllNodesByIndex(function(node) {
                checkedStateMap[node.id] = UNCHECKED;
              });
              this.selectedNodes.forEach(function(selectedNode) {
                checkedStateMap[selectedNode.id] = CHECKED;
                if (!_this15.flat && !_this15.disableBranchNodes) {
                  selectedNode.ancestors.forEach(function(ancestorNode) {
                    if (!_this15.isSelected(ancestorNode)) {
                      checkedStateMap[ancestorNode.id] = INDETERMINATE;
                    }
                  });
                }
              });
            }
            this.forest.checkedStateMap = checkedStateMap;
          },
          enhancedNormalizer: function enhancedNormalizer(raw) {
            return _objectSpread({}, raw, {}, this.normalizer(raw, this.getInstanceId()));
          },
          normalize: function normalize(parentNode, nodes, prevNodeMap) {
            var _this16 = this;
            var normalizedOptions = nodes.map(function(node) {
              return [_this16.enhancedNormalizer(node), node];
            }).map(function(_ref, index2) {
              var _ref2 = slicedToArray_default()(_ref, 2), node = _ref2[0], raw = _ref2[1];
              _this16.checkDuplication(node);
              _this16.verifyNodeShape(node);
              var id = node.id, label = node.label, children = node.children, isDefaultExpanded = node.isDefaultExpanded;
              var isRootNode = parentNode === NO_PARENT_NODE;
              var level = isRootNode ? 0 : parentNode.level + 1;
              var isBranch = Array.isArray(children) || children === null;
              var isLeaf = !isBranch;
              var isDisabled = !!node.isDisabled || !_this16.flat && !isRootNode && parentNode.isDisabled;
              var isNew = !!node.isNew;
              var lowerCased = _this16.matchKeys.reduce(function(prev2, key) {
                return _objectSpread({}, prev2, defineProperty_default()({}, key, stringifyOptionPropValue(node[key]).toLocaleLowerCase()));
              }, {});
              var nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + " " + lowerCased.label;
              var normalized = _this16.$set(_this16.forest.nodeMap, id, createMap());
              _this16.$set(normalized, "id", id);
              _this16.$set(normalized, "label", label);
              _this16.$set(normalized, "level", level);
              _this16.$set(normalized, "ancestors", isRootNode ? [] : [parentNode].concat(parentNode.ancestors));
              _this16.$set(normalized, "index", (isRootNode ? [] : parentNode.index).concat(index2));
              _this16.$set(normalized, "parentNode", parentNode);
              _this16.$set(normalized, "lowerCased", lowerCased);
              _this16.$set(normalized, "nestedSearchLabel", nestedSearchLabel);
              _this16.$set(normalized, "isDisabled", isDisabled);
              _this16.$set(normalized, "isNew", isNew);
              _this16.$set(normalized, "isMatched", false);
              _this16.$set(normalized, "isHighlighted", false);
              _this16.$set(normalized, "isBranch", isBranch);
              _this16.$set(normalized, "isLeaf", isLeaf);
              _this16.$set(normalized, "isRootNode", isRootNode);
              _this16.$set(normalized, "raw", raw);
              if (isBranch) {
                var _this16$$set;
                var isLoaded = Array.isArray(children);
                _this16.$set(normalized, "childrenStates", _objectSpread({}, createAsyncOptionsStates(), {
                  isLoaded
                }));
                _this16.$set(normalized, "isExpanded", typeof isDefaultExpanded === "boolean" ? isDefaultExpanded : level < _this16.defaultExpandLevel);
                _this16.$set(normalized, "hasMatchedDescendants", false);
                _this16.$set(normalized, "hasDisabledDescendants", false);
                _this16.$set(normalized, "isExpandedOnSearch", false);
                _this16.$set(normalized, "showAllChildrenOnSearch", false);
                _this16.$set(normalized, "count", (_this16$$set = {}, defineProperty_default()(_this16$$set, ALL_CHILDREN, 0), defineProperty_default()(_this16$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this16$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this16$$set, LEAF_DESCENDANTS, 0), _this16$$set));
                _this16.$set(normalized, "children", isLoaded ? _this16.normalize(normalized, children, prevNodeMap) : []);
                if (isDefaultExpanded === true)
                  normalized.ancestors.forEach(function(ancestor) {
                    ancestor.isExpanded = true;
                  });
                if (!isLoaded && typeof _this16.loadOptions !== "function") {
                  warning_warning(function() {
                    return false;
                  }, function() {
                    return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
                  });
                } else if (!isLoaded && normalized.isExpanded) {
                  _this16.loadChildrenOptions(normalized);
                }
              }
              normalized.ancestors.forEach(function(ancestor) {
                return ancestor.count[ALL_DESCENDANTS]++;
              });
              if (isLeaf)
                normalized.ancestors.forEach(function(ancestor) {
                  return ancestor.count[LEAF_DESCENDANTS]++;
                });
              if (!isRootNode) {
                parentNode.count[ALL_CHILDREN] += 1;
                if (isLeaf)
                  parentNode.count[LEAF_CHILDREN] += 1;
                if (isDisabled)
                  parentNode.hasDisabledDescendants = true;
              }
              if (prevNodeMap && prevNodeMap[id]) {
                var prev = prevNodeMap[id];
                normalized.isMatched = prev.isMatched;
                normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
                normalized.isHighlighted = prev.isHighlighted;
                if (prev.isBranch && normalized.isBranch) {
                  normalized.isExpanded = prev.isExpanded;
                  normalized.isExpandedOnSearch = prev.isExpandedOnSearch;
                  if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
                    normalized.isExpanded = false;
                  } else {
                    normalized.childrenStates = _objectSpread({}, prev.childrenStates);
                  }
                }
              }
              return normalized;
            });
            if (this.branchNodesFirst) {
              var branchNodes = normalizedOptions.filter(function(option) {
                return option.isBranch;
              });
              var leafNodes = normalizedOptions.filter(function(option) {
                return option.isLeaf;
              });
              normalizedOptions = branchNodes.concat(leafNodes);
            }
            return normalizedOptions;
          },
          loadRootOptions: function loadRootOptions() {
            var _this17 = this;
            this.callLoadOptionsProp({
              action: LOAD_ROOT_OPTIONS,
              isPending: function isPending() {
                return _this17.rootOptionsStates.isLoading;
              },
              start: function start() {
                _this17.rootOptionsStates.isLoading = true;
                _this17.rootOptionsStates.loadingError = "";
              },
              succeed: function succeed() {
                _this17.rootOptionsStates.isLoaded = true;
                _this17.$nextTick(function() {
                  _this17.resetHighlightedOptionWhenNecessary(true);
                });
              },
              fail: function fail(err) {
                _this17.rootOptionsStates.loadingError = getErrorMessage(err);
              },
              end: function end() {
                _this17.rootOptionsStates.isLoading = false;
              }
            });
          },
          loadChildrenOptions: function loadChildrenOptions(parentNode) {
            var _this18 = this;
            var id = parentNode.id, raw = parentNode.raw;
            this.callLoadOptionsProp({
              action: LOAD_CHILDREN_OPTIONS,
              args: {
                parentNode: raw
              },
              isPending: function isPending() {
                return _this18.getNode(id).childrenStates.isLoading;
              },
              start: function start() {
                _this18.getNode(id).childrenStates.isLoading = true;
                _this18.getNode(id).childrenStates.loadingError = "";
              },
              succeed: function succeed() {
                _this18.getNode(id).childrenStates.isLoaded = true;
              },
              fail: function fail(err) {
                _this18.getNode(id).childrenStates.loadingError = getErrorMessage(err);
              },
              end: function end() {
                _this18.getNode(id).childrenStates.isLoading = false;
              }
            });
          },
          callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
            var action = _ref3.action, args = _ref3.args, isPending = _ref3.isPending, start = _ref3.start, succeed = _ref3.succeed, fail = _ref3.fail, end = _ref3.end;
            if (!this.loadOptions || isPending()) {
              return;
            }
            start();
            var callback = once_default()(function(err, result2) {
              if (err) {
                fail(err);
              } else {
                succeed(result2);
              }
              end();
            });
            var result = this.loadOptions(_objectSpread({
              id: this.getInstanceId(),
              instanceId: this.getInstanceId(),
              action
            }, args, {
              callback
            }));
            if (external_is_promise_default()(result)) {
              result.then(function() {
                callback();
              }, function(err) {
                callback(err);
              }).catch(function(err) {
                console.error(err);
              });
            }
          },
          checkDuplication: function checkDuplication(node) {
            var _this19 = this;
            warning_warning(function() {
              return !(node.id in _this19.forest.nodeMap && !_this19.forest.nodeMap[node.id].isFallbackNode);
            }, function() {
              return "Detected duplicate presence of node id ".concat(JSON.stringify(node.id), ". ") + 'Their labels are "'.concat(_this19.forest.nodeMap[node.id].label, '" and "').concat(node.label, '" respectively.');
            });
          },
          verifyNodeShape: function verifyNodeShape(node) {
            warning_warning(function() {
              return !(node.children === void 0 && node.isBranch === true);
            }, function() {
              return "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.";
            });
          },
          select: function select(node) {
            if (this.disabled || node.isDisabled) {
              return;
            }
            if (this.single) {
              this.clear();
            }
            var nextState = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === UNCHECKED : !this.isSelected(node);
            if (nextState) {
              this._selectNode(node);
            } else {
              this._deselectNode(node);
            }
            this.buildForestState();
            if (nextState) {
              this.$emit("select", node.raw, this.getInstanceId());
            } else {
              this.$emit("deselect", node.raw, this.getInstanceId());
            }
            if (this.localSearch.active && nextState && (this.single || this.clearOnSelect)) {
              this.resetSearchQuery();
            }
            if (this.single && this.closeOnSelect) {
              this.closeMenu();
              if (this.searchable) {
                this._blurOnSelect = true;
              }
            }
          },
          clear: function clear() {
            var _this20 = this;
            if (this.hasValue) {
              if (this.single || this.allowClearingDisabled) {
                this.forest.selectedNodeIds = [];
              } else {
                this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function(nodeId) {
                  return _this20.getNode(nodeId).isDisabled;
                });
              }
              this.buildForestState();
            }
          },
          _selectNode: function _selectNode(node) {
            var _this21 = this;
            if (this.single || this.disableBranchNodes) {
              return this.addValue(node);
            }
            if (this.flat) {
              this.addValue(node);
              if (this.autoSelectAncestors) {
                node.ancestors.forEach(function(ancestor) {
                  if (!_this21.isSelected(ancestor) && !ancestor.isDisabled)
                    _this21.addValue(ancestor);
                });
              } else if (this.autoSelectDescendants) {
                this.traverseDescendantsBFS(node, function(descendant) {
                  if (!_this21.isSelected(descendant) && !descendant.isDisabled)
                    _this21.addValue(descendant);
                });
              }
              return;
            }
            var isFullyChecked = node.isLeaf || !node.hasDisabledDescendants || this.allowSelectingDisabledDescendants;
            if (isFullyChecked) {
              this.addValue(node);
            }
            if (node.isBranch) {
              this.traverseDescendantsBFS(node, function(descendant) {
                if (!descendant.isDisabled || _this21.allowSelectingDisabledDescendants) {
                  _this21.addValue(descendant);
                }
              });
            }
            if (isFullyChecked) {
              var curr = node;
              while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
                if (curr.children.every(this.isSelected))
                  this.addValue(curr);
                else
                  break;
              }
            }
          },
          _deselectNode: function _deselectNode(node) {
            var _this22 = this;
            if (this.disableBranchNodes) {
              return this.removeValue(node);
            }
            if (this.flat) {
              this.removeValue(node);
              if (this.autoDeselectAncestors) {
                node.ancestors.forEach(function(ancestor) {
                  if (_this22.isSelected(ancestor) && !ancestor.isDisabled)
                    _this22.removeValue(ancestor);
                });
              } else if (this.autoDeselectDescendants) {
                this.traverseDescendantsBFS(node, function(descendant) {
                  if (_this22.isSelected(descendant) && !descendant.isDisabled)
                    _this22.removeValue(descendant);
                });
              }
              return;
            }
            var hasUncheckedSomeDescendants = false;
            if (node.isBranch) {
              this.traverseDescendantsDFS(node, function(descendant) {
                if (!descendant.isDisabled || _this22.allowSelectingDisabledDescendants) {
                  _this22.removeValue(descendant);
                  hasUncheckedSomeDescendants = true;
                }
              });
            }
            if (node.isLeaf || hasUncheckedSomeDescendants || node.children.length === 0) {
              this.removeValue(node);
              var curr = node;
              while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
                if (this.isSelected(curr))
                  this.removeValue(curr);
                else
                  break;
              }
            }
          },
          addValue: function addValue(node) {
            this.forest.selectedNodeIds.push(node.id);
            this.forest.selectedNodeMap[node.id] = true;
          },
          removeValue: function removeValue(node) {
            removeFromArray(this.forest.selectedNodeIds, node.id);
            delete this.forest.selectedNodeMap[node.id];
          },
          removeLastValue: function removeLastValue() {
            if (!this.hasValue)
              return;
            if (this.single)
              return this.clear();
            var lastValue = last_default()(this.internalValue);
            var lastSelectedNode = this.getNode(lastValue);
            this.select(lastSelectedNode);
          },
          saveMenuScrollPosition: function saveMenuScrollPosition() {
            var $menu = this.getMenu();
            if ($menu)
              this.menu.lastScrollPosition = $menu.scrollTop;
          },
          restoreMenuScrollPosition: function restoreMenuScrollPosition() {
            var $menu = this.getMenu();
            if ($menu)
              $menu.scrollTop = this.menu.lastScrollPosition;
          }
        },
        created: function created() {
          this.verifyProps();
          this.resetFlags();
        },
        mounted: function mounted() {
          if (this.autoFocus)
            this.focusInput();
          if (!this.options && !this.async && this.autoLoadRootOptions)
            this.loadRootOptions();
          if (this.alwaysOpen)
            this.openMenu();
          if (this.async && this.defaultOptions)
            this.handleRemoteSearch();
        },
        destroyed: function destroyed() {
          this.toggleClickOutsideEvent(false);
        }
      };
      function stringifyValue(value) {
        if (typeof value === "string")
          return value;
        if (value != null && !isNaN_isNaN(value))
          return JSON.stringify(value);
        return "";
      }
      var HiddenFieldsvue_type_script_lang_js_ = {
        name: "vue-treeselect--hidden-fields",
        inject: ["instance"],
        functional: true,
        render: function render2(_, context) {
          var h = arguments[0];
          var instance = context.injections.instance;
          if (!instance.name || instance.disabled || !instance.hasValue)
            return null;
          var stringifiedValues = instance.internalValue.map(stringifyValue);
          if (instance.multiple && instance.joinValues)
            stringifiedValues = [stringifiedValues.join(instance.delimiter)];
          return stringifiedValues.map(function(stringifiedValue, i) {
            return h("input", {
              attrs: {
                type: "hidden",
                name: instance.name
              },
              domProps: {
                "value": stringifiedValue
              },
              key: "hidden-field-" + i
            });
          });
        }
      };
      var components_HiddenFieldsvue_type_script_lang_js_ = HiddenFieldsvue_type_script_lang_js_;
      function normalizeComponent2(scriptExports, render2, staticRenderFns3, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
        var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
        if (render2) {
          options.render = render2;
          options.staticRenderFns = staticRenderFns3;
          options._compiled = true;
        }
        if (functionalTemplate) {
          options.functional = true;
        }
        if (scopeId) {
          options._scopeId = "data-v-" + scopeId;
        }
        var hook;
        if (moduleIdentifier) {
          hook = function(context) {
            context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__;
            }
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode ? function() {
            injectStyles.call(this, this.$root.$options.shadowRoot);
          } : injectStyles;
        }
        if (hook) {
          if (options.functional) {
            options._injectStyles = hook;
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
        return {
          exports: scriptExports,
          options
        };
      }
      var HiddenFields_render, staticRenderFns2;
      var component = normalizeComponent2(
        components_HiddenFieldsvue_type_script_lang_js_,
        HiddenFields_render,
        staticRenderFns2,
        false,
        null,
        null,
        null
      );
      component.options.__file = "src/components/HiddenFields.vue";
      var HiddenFields = component.exports;
      var external_babel_helper_vue_jsx_merge_props_ = __webpack_require__(13);
      var external_babel_helper_vue_jsx_merge_props_default = /* @__PURE__ */ __webpack_require__.n(external_babel_helper_vue_jsx_merge_props_);
      var keysThatRequireMenuBeingOpen = [KEY_CODES.ENTER, KEY_CODES.END, KEY_CODES.HOME, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN];
      var Inputvue_type_script_lang_js_ = {
        name: "vue-treeselect--input",
        inject: ["instance"],
        data: function data() {
          return {
            inputWidth: MIN_INPUT_WIDTH,
            value: ""
          };
        },
        computed: {
          needAutoSize: function needAutoSize() {
            var instance = this.instance;
            return instance.searchable && !instance.disabled && instance.multiple;
          },
          inputStyle: function inputStyle() {
            return {
              width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
            };
          }
        },
        watch: {
          "instance.trigger.searchQuery": function instanceTriggerSearchQuery(newValue) {
            this.value = newValue;
          },
          value: function value() {
            if (this.needAutoSize)
              this.$nextTick(this.updateInputWidth);
          }
        },
        created: function created() {
          this.debouncedCallback = debounce_default()(this.updateSearchQuery, INPUT_DEBOUNCE_DELAY, {
            leading: true,
            trailing: true
          });
        },
        methods: {
          clear: function clear() {
            this.onInput({
              target: {
                value: ""
              }
            });
          },
          focus: function focus() {
            var instance = this.instance;
            if (!instance.disabled) {
              this.$refs.input && this.$refs.input.focus();
            }
          },
          blur: function blur() {
            this.$refs.input && this.$refs.input.blur();
          },
          onFocus: function onFocus() {
            var instance = this.instance;
            instance.trigger.isFocused = true;
            if (instance.openOnFocus)
              instance.openMenu();
          },
          onBlur: function onBlur() {
            var instance = this.instance;
            var menu = instance.getMenu();
            if (menu && document.activeElement === menu) {
              return this.focus();
            }
            instance.trigger.isFocused = false;
            instance.closeMenu();
          },
          onInput: function onInput(evt) {
            var value = evt.target.value;
            this.value = value;
            if (value) {
              this.debouncedCallback();
            } else {
              this.debouncedCallback.cancel();
              this.updateSearchQuery();
            }
          },
          onKeyDown: function onKeyDown(evt) {
            var instance = this.instance;
            var key = "which" in evt ? evt.which : evt.keyCode;
            if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey)
              return;
            if (!instance.menu.isOpen && includes(keysThatRequireMenuBeingOpen, key)) {
              evt.preventDefault();
              return instance.openMenu();
            }
            switch (key) {
              case KEY_CODES.BACKSPACE: {
                if (instance.backspaceRemoves && !this.value.length) {
                  instance.removeLastValue();
                }
                break;
              }
              case KEY_CODES.ENTER: {
                evt.preventDefault();
                if (instance.menu.current === null)
                  return;
                var current = instance.getNode(instance.menu.current);
                if (current.isBranch && instance.disableBranchNodes)
                  return;
                instance.select(current);
                break;
              }
              case KEY_CODES.ESCAPE: {
                if (this.value.length) {
                  this.clear();
                } else if (instance.menu.isOpen) {
                  instance.closeMenu();
                }
                break;
              }
              case KEY_CODES.END: {
                evt.preventDefault();
                instance.highlightLastOption();
                break;
              }
              case KEY_CODES.HOME: {
                evt.preventDefault();
                instance.highlightFirstOption();
                break;
              }
              case KEY_CODES.ARROW_LEFT: {
                var _current = instance.getNode(instance.menu.current);
                if (_current.isBranch && instance.shouldExpand(_current)) {
                  evt.preventDefault();
                  instance.toggleExpanded(_current);
                } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !instance.shouldExpand(_current))) {
                  evt.preventDefault();
                  instance.setCurrentHighlightedOption(_current.parentNode);
                }
                break;
              }
              case KEY_CODES.ARROW_UP: {
                evt.preventDefault();
                instance.highlightPrevOption();
                break;
              }
              case KEY_CODES.ARROW_RIGHT: {
                var _current2 = instance.getNode(instance.menu.current);
                if (_current2.isBranch && !instance.shouldExpand(_current2)) {
                  evt.preventDefault();
                  instance.toggleExpanded(_current2);
                }
                break;
              }
              case KEY_CODES.ARROW_DOWN: {
                evt.preventDefault();
                instance.highlightNextOption();
                break;
              }
              case KEY_CODES.DELETE: {
                if (instance.deleteRemoves && !this.value.length) {
                  instance.removeLastValue();
                }
                break;
              }
              default: {
                instance.openMenu();
              }
            }
          },
          onMouseDown: function onMouseDown(evt) {
            if (this.value.length) {
              evt.stopPropagation();
            }
          },
          renderInputContainer: function renderInputContainer() {
            var h = this.$createElement;
            var instance = this.instance;
            var props = {};
            var children = [];
            if (instance.searchable && !instance.disabled) {
              children.push(this.renderInput());
              if (this.needAutoSize)
                children.push(this.renderSizer());
            }
            if (!instance.searchable) {
              deepExtend(props, {
                on: {
                  focus: this.onFocus,
                  blur: this.onBlur,
                  keydown: this.onKeyDown
                },
                ref: "input"
              });
            }
            if (!instance.searchable && !instance.disabled) {
              deepExtend(props, {
                attrs: {
                  tabIndex: instance.tabIndex
                }
              });
            }
            return h("div", external_babel_helper_vue_jsx_merge_props_default()([{
              "class": "vue-treeselect__input-container"
            }, props]), [children]);
          },
          renderInput: function renderInput() {
            var h = this.$createElement;
            var instance = this.instance;
            return h("input", {
              ref: "input",
              "class": "vue-treeselect__input",
              attrs: {
                type: "text",
                autocomplete: "off",
                tabIndex: instance.tabIndex,
                required: instance.required && !instance.hasValue
              },
              domProps: {
                "value": this.value
              },
              style: this.inputStyle,
              on: {
                "focus": this.onFocus,
                "input": this.onInput,
                "blur": this.onBlur,
                "keydown": this.onKeyDown,
                "mousedown": this.onMouseDown
              }
            });
          },
          renderSizer: function renderSizer() {
            var h = this.$createElement;
            return h("div", {
              ref: "sizer",
              "class": "vue-treeselect__sizer"
            }, [this.value]);
          },
          updateInputWidth: function updateInputWidth() {
            this.inputWidth = Math.max(MIN_INPUT_WIDTH, this.$refs.sizer.scrollWidth + 15);
          },
          updateSearchQuery: function updateSearchQuery() {
            var instance = this.instance;
            instance.trigger.searchQuery = this.value;
          }
        },
        render: function render2() {
          return this.renderInputContainer();
        }
      };
      var components_Inputvue_type_script_lang_js_ = Inputvue_type_script_lang_js_;
      var Input_render, Input_staticRenderFns;
      var Input_component = normalizeComponent2(
        components_Inputvue_type_script_lang_js_,
        Input_render,
        Input_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Input_component.options.__file = "src/components/Input.vue";
      var Input = Input_component.exports;
      var Placeholdervue_type_script_lang_js_ = {
        name: "vue-treeselect--placeholder",
        inject: ["instance"],
        render: function render2() {
          var h = arguments[0];
          var instance = this.instance;
          var placeholderClass = {
            "vue-treeselect__placeholder": true,
            "vue-treeselect-helper-zoom-effect-off": true,
            "vue-treeselect-helper-hide": instance.hasValue || instance.trigger.searchQuery
          };
          return h("div", {
            "class": placeholderClass
          }, [instance.placeholder]);
        }
      };
      var components_Placeholdervue_type_script_lang_js_ = Placeholdervue_type_script_lang_js_;
      var Placeholder_render, Placeholder_staticRenderFns;
      var Placeholder_component = normalizeComponent2(
        components_Placeholdervue_type_script_lang_js_,
        Placeholder_render,
        Placeholder_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Placeholder_component.options.__file = "src/components/Placeholder.vue";
      var Placeholder = Placeholder_component.exports;
      var SingleValuevue_type_script_lang_js_ = {
        name: "vue-treeselect--single-value",
        inject: ["instance"],
        methods: {
          renderSingleValueLabel: function renderSingleValueLabel() {
            var instance = this.instance;
            var node = instance.selectedNodes[0];
            var customValueLabelRenderer = instance.$scopedSlots["value-label"];
            return customValueLabelRenderer ? customValueLabelRenderer({
              node
            }) : node.label;
          }
        },
        render: function render2() {
          var h = arguments[0];
          var instance = this.instance, renderValueContainer = this.$parent.renderValueContainer;
          var shouldShowValue = instance.hasValue && !instance.trigger.searchQuery;
          return renderValueContainer([shouldShowValue && h("div", {
            "class": "vue-treeselect__single-value"
          }, [this.renderSingleValueLabel()]), h(Placeholder), h(Input, {
            ref: "input"
          })]);
        }
      };
      var components_SingleValuevue_type_script_lang_js_ = SingleValuevue_type_script_lang_js_;
      var SingleValue_render, SingleValue_staticRenderFns;
      var SingleValue_component = normalizeComponent2(
        components_SingleValuevue_type_script_lang_js_,
        SingleValue_render,
        SingleValue_staticRenderFns,
        false,
        null,
        null,
        null
      );
      SingleValue_component.options.__file = "src/components/SingleValue.vue";
      var SingleValue = SingleValue_component.exports;
      var Deletevue_type_template_id_364b6320_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 348.333 348.333"
            }
          },
          [
            _c("path", {
              attrs: {
                d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
              }
            })
          ]
        );
      };
      var Deletevue_type_template_id_364b6320_staticRenderFns = [];
      Deletevue_type_template_id_364b6320_render._withStripped = true;
      var Deletevue_type_script_lang_js_ = {
        name: "vue-treeselect--x"
      };
      var icons_Deletevue_type_script_lang_js_ = Deletevue_type_script_lang_js_;
      var Delete_component = normalizeComponent2(
        icons_Deletevue_type_script_lang_js_,
        Deletevue_type_template_id_364b6320_render,
        Deletevue_type_template_id_364b6320_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Delete_component.options.__file = "src/components/icons/Delete.vue";
      var Delete = Delete_component.exports;
      var MultiValueItemvue_type_script_lang_js_ = {
        name: "vue-treeselect--multi-value-item",
        inject: ["instance"],
        props: {
          node: {
            type: Object,
            required: true
          }
        },
        methods: {
          handleMouseDown: onLeftClick(function handleMouseDown() {
            var instance = this.instance, node = this.node;
            instance.select(node);
          })
        },
        render: function render2() {
          var h = arguments[0];
          var instance = this.instance, node = this.node;
          var itemClass = {
            "vue-treeselect__multi-value-item": true,
            "vue-treeselect__multi-value-item-disabled": node.isDisabled,
            "vue-treeselect__multi-value-item-new": node.isNew
          };
          var customValueLabelRenderer = instance.$scopedSlots["value-label"];
          var labelRenderer = customValueLabelRenderer ? customValueLabelRenderer({
            node
          }) : node.label;
          return h("div", {
            "class": "vue-treeselect__multi-value-item-container"
          }, [h("div", {
            "class": itemClass,
            on: {
              "mousedown": this.handleMouseDown
            }
          }, [h("span", {
            "class": "vue-treeselect__multi-value-label"
          }, [labelRenderer]), h("span", {
            "class": "vue-treeselect__icon vue-treeselect__value-remove"
          }, [h(Delete)])])]);
        }
      };
      var components_MultiValueItemvue_type_script_lang_js_ = MultiValueItemvue_type_script_lang_js_;
      var MultiValueItem_render, MultiValueItem_staticRenderFns;
      var MultiValueItem_component = normalizeComponent2(
        components_MultiValueItemvue_type_script_lang_js_,
        MultiValueItem_render,
        MultiValueItem_staticRenderFns,
        false,
        null,
        null,
        null
      );
      MultiValueItem_component.options.__file = "src/components/MultiValueItem.vue";
      var MultiValueItem = MultiValueItem_component.exports;
      var MultiValuevue_type_script_lang_js_ = {
        name: "vue-treeselect--multi-value",
        inject: ["instance"],
        methods: {
          renderMultiValueItems: function renderMultiValueItems() {
            var h = this.$createElement;
            var instance = this.instance;
            return instance.internalValue.slice(0, instance.limit).map(instance.getNode).map(function(node) {
              return h(MultiValueItem, {
                key: "multi-value-item-".concat(node.id),
                attrs: {
                  node
                }
              });
            });
          },
          renderExceedLimitTip: function renderExceedLimitTip() {
            var h = this.$createElement;
            var instance = this.instance;
            var count = instance.internalValue.length - instance.limit;
            if (count <= 0)
              return null;
            return h("div", {
              "class": "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
              key: "exceed-limit-tip"
            }, [h("span", {
              "class": "vue-treeselect__limit-tip-text"
            }, [instance.limitText(count)])]);
          }
        },
        render: function render2() {
          var h = arguments[0];
          var renderValueContainer = this.$parent.renderValueContainer;
          var transitionGroupProps = {
            props: {
              tag: "div",
              name: "vue-treeselect__multi-value-item--transition",
              appear: true
            }
          };
          return renderValueContainer(h("transition-group", external_babel_helper_vue_jsx_merge_props_default()([{
            "class": "vue-treeselect__multi-value"
          }, transitionGroupProps]), [this.renderMultiValueItems(), this.renderExceedLimitTip(), h(Placeholder, {
            key: "placeholder"
          }), h(Input, {
            ref: "input",
            key: "input"
          })]));
        }
      };
      var components_MultiValuevue_type_script_lang_js_ = MultiValuevue_type_script_lang_js_;
      var MultiValue_render, MultiValue_staticRenderFns;
      var MultiValue_component = normalizeComponent2(
        components_MultiValuevue_type_script_lang_js_,
        MultiValue_render,
        MultiValue_staticRenderFns,
        false,
        null,
        null,
        null
      );
      MultiValue_component.options.__file = "src/components/MultiValue.vue";
      var MultiValue = MultiValue_component.exports;
      var Arrowvue_type_template_id_11186cd4_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 292.362 292.362"
            }
          },
          [
            _c("path", {
              attrs: {
                d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
              }
            })
          ]
        );
      };
      var Arrowvue_type_template_id_11186cd4_staticRenderFns = [];
      Arrowvue_type_template_id_11186cd4_render._withStripped = true;
      var Arrowvue_type_script_lang_js_ = {
        name: "vue-treeselect--arrow"
      };
      var icons_Arrowvue_type_script_lang_js_ = Arrowvue_type_script_lang_js_;
      var Arrow_component = normalizeComponent2(
        icons_Arrowvue_type_script_lang_js_,
        Arrowvue_type_template_id_11186cd4_render,
        Arrowvue_type_template_id_11186cd4_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Arrow_component.options.__file = "src/components/icons/Arrow.vue";
      var Arrow = Arrow_component.exports;
      var Controlvue_type_script_lang_js_ = {
        name: "vue-treeselect--control",
        inject: ["instance"],
        computed: {
          shouldShowX: function shouldShowX() {
            var instance = this.instance;
            return instance.clearable && !instance.disabled && instance.hasValue && (this.hasUndisabledValue || instance.allowClearingDisabled);
          },
          shouldShowArrow: function shouldShowArrow() {
            var instance = this.instance;
            if (!instance.alwaysOpen)
              return true;
            return !instance.menu.isOpen;
          },
          hasUndisabledValue: function hasUndisabledValue() {
            var instance = this.instance;
            return instance.hasValue && instance.internalValue.some(function(id) {
              return !instance.getNode(id).isDisabled;
            });
          }
        },
        methods: {
          renderX: function renderX() {
            var h = this.$createElement;
            var instance = this.instance;
            var title = instance.multiple ? instance.clearAllText : instance.clearValueText;
            if (!this.shouldShowX)
              return null;
            return h("div", {
              "class": "vue-treeselect__x-container",
              attrs: {
                title
              },
              on: {
                "mousedown": this.handleMouseDownOnX
              }
            }, [h(Delete, {
              "class": "vue-treeselect__x"
            })]);
          },
          renderArrow: function renderArrow() {
            var h = this.$createElement;
            var instance = this.instance;
            var arrowClass = {
              "vue-treeselect__control-arrow": true,
              "vue-treeselect__control-arrow--rotated": instance.menu.isOpen
            };
            if (!this.shouldShowArrow)
              return null;
            return h("div", {
              "class": "vue-treeselect__control-arrow-container",
              on: {
                "mousedown": this.handleMouseDownOnArrow
              }
            }, [h(Arrow, {
              "class": arrowClass
            })]);
          },
          handleMouseDownOnX: onLeftClick(function handleMouseDownOnX(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            var instance = this.instance;
            var result = instance.beforeClearAll();
            var handler = function handler2(shouldClear) {
              if (shouldClear)
                instance.clear();
            };
            if (external_is_promise_default()(result)) {
              result.then(handler);
            } else {
              setTimeout(function() {
                return handler(result);
              }, 0);
            }
          }),
          handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var instance = this.instance;
            instance.focusInput();
            instance.toggleMenu();
          }),
          renderValueContainer: function renderValueContainer(children) {
            var h = this.$createElement;
            return h("div", {
              "class": "vue-treeselect__value-container"
            }, [children]);
          }
        },
        render: function render2() {
          var h = arguments[0];
          var instance = this.instance;
          var ValueContainer = instance.single ? SingleValue : MultiValue;
          return h("div", {
            "class": "vue-treeselect__control",
            on: {
              "mousedown": instance.handleMouseDown
            }
          }, [h(ValueContainer, {
            ref: "value-container"
          }), this.renderX(), this.renderArrow()]);
        }
      };
      var components_Controlvue_type_script_lang_js_ = Controlvue_type_script_lang_js_;
      var Control_render, Control_staticRenderFns;
      var Control_component = normalizeComponent2(
        components_Controlvue_type_script_lang_js_,
        Control_render,
        Control_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Control_component.options.__file = "src/components/Control.vue";
      var Control = Control_component.exports;
      var Tipvue_type_script_lang_js_ = {
        name: "vue-treeselect--tip",
        functional: true,
        props: {
          type: {
            type: String,
            required: true
          },
          icon: {
            type: String,
            required: true
          }
        },
        render: function render2(_, context) {
          var h = arguments[0];
          var props = context.props, children = context.children;
          return h("div", {
            "class": "vue-treeselect__tip vue-treeselect__".concat(props.type, "-tip")
          }, [h("div", {
            "class": "vue-treeselect__icon-container"
          }, [h("span", {
            "class": "vue-treeselect__icon-".concat(props.icon)
          })]), h("span", {
            "class": "vue-treeselect__tip-text vue-treeselect__".concat(props.type, "-tip-text")
          }, [children])]);
        }
      };
      var components_Tipvue_type_script_lang_js_ = Tipvue_type_script_lang_js_;
      var Tip_render, Tip_staticRenderFns;
      var Tip_component = normalizeComponent2(
        components_Tipvue_type_script_lang_js_,
        Tip_render,
        Tip_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Tip_component.options.__file = "src/components/Tip.vue";
      var Tip = Tip_component.exports;
      var arrowPlaceholder, checkMark, minusMark;
      var Option = {
        name: "vue-treeselect--option",
        inject: ["instance"],
        props: {
          node: {
            type: Object,
            required: true
          }
        },
        computed: {
          shouldExpand: function shouldExpand() {
            var instance = this.instance, node = this.node;
            return node.isBranch && instance.shouldExpand(node);
          },
          shouldShow: function shouldShow() {
            var instance = this.instance, node = this.node;
            return instance.shouldShowOptionInMenu(node);
          }
        },
        methods: {
          renderOption: function renderOption() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            var optionClass = {
              "vue-treeselect__option": true,
              "vue-treeselect__option--disabled": node.isDisabled,
              "vue-treeselect__option--selected": instance.isSelected(node),
              "vue-treeselect__option--highlight": node.isHighlighted,
              "vue-treeselect__option--matched": instance.localSearch.active && node.isMatched,
              "vue-treeselect__option--hide": !this.shouldShow
            };
            return h("div", {
              "class": optionClass,
              on: {
                "mouseenter": this.handleMouseEnterOption
              },
              attrs: {
                "data-id": node.id
              }
            }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
          },
          renderSubOptionsList: function renderSubOptionsList() {
            var h = this.$createElement;
            if (!this.shouldExpand)
              return null;
            return h("div", {
              "class": "vue-treeselect__list"
            }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]);
          },
          renderArrow: function renderArrow() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            if (instance.shouldFlattenOptions && this.shouldShow)
              return null;
            if (node.isBranch) {
              var transitionProps = {
                props: {
                  name: "vue-treeselect__option-arrow--prepare",
                  appear: true
                }
              };
              var arrowClass = {
                "vue-treeselect__option-arrow": true,
                "vue-treeselect__option-arrow--rotated": this.shouldExpand
              };
              return h("div", {
                "class": "vue-treeselect__option-arrow-container",
                on: {
                  "mousedown": this.handleMouseDownOnArrow
                }
              }, [h("transition", transitionProps, [h(Arrow, {
                "class": arrowClass
              })])]);
            }
            if (instance.hasBranchNodes) {
              if (!arrowPlaceholder)
                arrowPlaceholder = h("div", {
                  "class": "vue-treeselect__option-arrow-placeholder"
                }, ["\xA0"]);
              return arrowPlaceholder;
            }
            return null;
          },
          renderLabelContainer: function renderLabelContainer(children) {
            var h = this.$createElement;
            return h("div", {
              "class": "vue-treeselect__label-container",
              on: {
                "mousedown": this.handleMouseDownOnLabelContainer
              }
            }, [children]);
          },
          renderCheckboxContainer: function renderCheckboxContainer(children) {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            if (instance.single)
              return null;
            if (instance.disableBranchNodes && node.isBranch)
              return null;
            return h("div", {
              "class": "vue-treeselect__checkbox-container"
            }, [children]);
          },
          renderCheckbox: function renderCheckbox() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            var checkedState = instance.forest.checkedStateMap[node.id];
            var checkboxClass = {
              "vue-treeselect__checkbox": true,
              "vue-treeselect__checkbox--checked": checkedState === CHECKED,
              "vue-treeselect__checkbox--indeterminate": checkedState === INDETERMINATE,
              "vue-treeselect__checkbox--unchecked": checkedState === UNCHECKED,
              "vue-treeselect__checkbox--disabled": node.isDisabled
            };
            if (!checkMark)
              checkMark = h("span", {
                "class": "vue-treeselect__check-mark"
              });
            if (!minusMark)
              minusMark = h("span", {
                "class": "vue-treeselect__minus-mark"
              });
            return h("span", {
              "class": checkboxClass
            }, [checkMark, minusMark]);
          },
          renderLabel: function renderLabel() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            var shouldShowCount = node.isBranch && (instance.localSearch.active ? instance.showCountOnSearchComputed : instance.showCount);
            var count = shouldShowCount ? instance.localSearch.active ? instance.localSearch.countMap[node.id][instance.showCountOf] : node.count[instance.showCountOf] : NaN;
            var labelClassName = "vue-treeselect__label";
            var countClassName = "vue-treeselect__count";
            var customLabelRenderer = instance.$scopedSlots["option-label"];
            if (customLabelRenderer)
              return customLabelRenderer({
                node,
                shouldShowCount,
                count,
                labelClassName,
                countClassName
              });
            return h("label", {
              "class": labelClassName
            }, [node.label, shouldShowCount && h("span", {
              "class": countClassName
            }, ["(", count, ")"])]);
          },
          renderSubOptions: function renderSubOptions() {
            var h = this.$createElement;
            var node = this.node;
            if (!node.childrenStates.isLoaded)
              return null;
            return node.children.map(function(childNode) {
              return h(Option, {
                attrs: {
                  node: childNode
                },
                key: childNode.id
              });
            });
          },
          renderNoChildrenTip: function renderNoChildrenTip() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            if (!node.childrenStates.isLoaded || node.children.length)
              return null;
            return h(Tip, {
              attrs: {
                type: "no-children",
                icon: "warning"
              }
            }, [instance.noChildrenText]);
          },
          renderLoadingChildrenTip: function renderLoadingChildrenTip() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            if (!node.childrenStates.isLoading)
              return null;
            return h(Tip, {
              attrs: {
                type: "loading",
                icon: "loader"
              }
            }, [instance.loadingText]);
          },
          renderLoadingChildrenErrorTip: function renderLoadingChildrenErrorTip() {
            var h = this.$createElement;
            var instance = this.instance, node = this.node;
            if (!node.childrenStates.loadingError)
              return null;
            return h(Tip, {
              attrs: {
                type: "error",
                icon: "error"
              }
            }, [node.childrenStates.loadingError, h("a", {
              "class": "vue-treeselect__retry",
              attrs: {
                title: instance.retryTitle
              },
              on: {
                "mousedown": this.handleMouseDownOnRetry
              }
            }, [instance.retryText])]);
          },
          handleMouseEnterOption: function handleMouseEnterOption(evt) {
            var instance = this.instance, node = this.node;
            if (evt.target !== evt.currentTarget)
              return;
            instance.setCurrentHighlightedOption(node, false);
          },
          handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
            var instance = this.instance, node = this.node;
            instance.toggleExpanded(node);
          }),
          handleMouseDownOnLabelContainer: onLeftClick(function handleMouseDownOnLabelContainer() {
            var instance = this.instance, node = this.node;
            if (node.isBranch && instance.disableBranchNodes) {
              instance.toggleExpanded(node);
            } else {
              instance.select(node);
            }
          }),
          handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry() {
            var instance = this.instance, node = this.node;
            instance.loadChildrenOptions(node);
          })
        },
        render: function render2() {
          var h = arguments[0];
          var node = this.node;
          var indentLevel = this.instance.shouldFlattenOptions ? 0 : node.level;
          var listItemClass = defineProperty_default()({
            "vue-treeselect__list-item": true
          }, "vue-treeselect__indent-level-".concat(indentLevel), true);
          var transitionProps = {
            props: {
              name: "vue-treeselect__list--transition"
            }
          };
          return h("div", {
            "class": listItemClass
          }, [this.renderOption(), node.isBranch && h("transition", transitionProps, [this.renderSubOptionsList()])]);
        }
      };
      var Optionvue_type_script_lang_js_ = Option;
      var components_Optionvue_type_script_lang_js_ = Optionvue_type_script_lang_js_;
      var Option_render, Option_staticRenderFns;
      var Option_component = normalizeComponent2(
        components_Optionvue_type_script_lang_js_,
        Option_render,
        Option_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Option_component.options.__file = "src/components/Option.vue";
      var components_Option = Option_component.exports;
      var directionMap = {
        top: "top",
        bottom: "bottom",
        above: "top",
        below: "bottom"
      };
      var Menuvue_type_script_lang_js_ = {
        name: "vue-treeselect--menu",
        inject: ["instance"],
        computed: {
          menuStyle: function menuStyle() {
            var instance = this.instance;
            return {
              maxHeight: instance.maxHeight + "px"
            };
          },
          menuContainerStyle: function menuContainerStyle() {
            var instance = this.instance;
            return {
              zIndex: instance.appendToBody ? null : instance.zIndex
            };
          }
        },
        watch: {
          "instance.menu.isOpen": function instanceMenuIsOpen(newValue) {
            if (newValue) {
              this.$nextTick(this.onMenuOpen);
            } else {
              this.onMenuClose();
            }
          }
        },
        created: function created() {
          this.menuSizeWatcher = null;
          this.menuResizeAndScrollEventListeners = null;
        },
        mounted: function mounted() {
          var instance = this.instance;
          if (instance.menu.isOpen)
            this.$nextTick(this.onMenuOpen);
        },
        destroyed: function destroyed() {
          this.onMenuClose();
        },
        methods: {
          renderMenu: function renderMenu() {
            var h = this.$createElement;
            var instance = this.instance;
            if (!instance.menu.isOpen)
              return null;
            return h("div", {
              ref: "menu",
              "class": "vue-treeselect__menu",
              on: {
                "mousedown": instance.handleMouseDown
              },
              style: this.menuStyle
            }, [this.renderBeforeList(), instance.async ? this.renderAsyncSearchMenuInner() : instance.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]);
          },
          renderBeforeList: function renderBeforeList() {
            var instance = this.instance;
            var beforeListRenderer = instance.$scopedSlots["before-list"];
            return beforeListRenderer ? beforeListRenderer() : null;
          },
          renderAfterList: function renderAfterList() {
            var instance = this.instance;
            var afterListRenderer = instance.$scopedSlots["after-list"];
            return afterListRenderer ? afterListRenderer() : null;
          },
          renderNormalMenuInner: function renderNormalMenuInner() {
            var instance = this.instance;
            if (instance.rootOptionsStates.isLoading) {
              return this.renderLoadingOptionsTip();
            } else if (instance.rootOptionsStates.loadingError) {
              return this.renderLoadingRootOptionsErrorTip();
            } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
              return this.renderNoAvailableOptionsTip();
            } else {
              return this.renderOptionList();
            }
          },
          renderLocalSearchMenuInner: function renderLocalSearchMenuInner() {
            var instance = this.instance;
            if (instance.rootOptionsStates.isLoading) {
              return this.renderLoadingOptionsTip();
            } else if (instance.rootOptionsStates.loadingError) {
              return this.renderLoadingRootOptionsErrorTip();
            } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
              return this.renderNoAvailableOptionsTip();
            } else if (instance.localSearch.noResults) {
              return this.renderNoResultsTip();
            } else {
              return this.renderOptionList();
            }
          },
          renderAsyncSearchMenuInner: function renderAsyncSearchMenuInner() {
            var instance = this.instance;
            var entry = instance.getRemoteSearchEntry();
            var shouldShowSearchPromptTip = instance.trigger.searchQuery === "" && !instance.defaultOptions;
            var shouldShowNoResultsTip = shouldShowSearchPromptTip ? false : entry.isLoaded && entry.options.length === 0;
            if (shouldShowSearchPromptTip) {
              return this.renderSearchPromptTip();
            } else if (entry.isLoading) {
              return this.renderLoadingOptionsTip();
            } else if (entry.loadingError) {
              return this.renderAsyncSearchLoadingErrorTip();
            } else if (shouldShowNoResultsTip) {
              return this.renderNoResultsTip();
            } else {
              return this.renderOptionList();
            }
          },
          renderOptionList: function renderOptionList() {
            var h = this.$createElement;
            var instance = this.instance;
            return h("div", {
              "class": "vue-treeselect__list"
            }, [instance.forest.normalizedOptions.map(function(rootNode) {
              return h(components_Option, {
                attrs: {
                  node: rootNode
                },
                key: rootNode.id
              });
            })]);
          },
          renderSearchPromptTip: function renderSearchPromptTip() {
            var h = this.$createElement;
            var instance = this.instance;
            return h(Tip, {
              attrs: {
                type: "search-prompt",
                icon: "warning"
              }
            }, [instance.searchPromptText]);
          },
          renderLoadingOptionsTip: function renderLoadingOptionsTip() {
            var h = this.$createElement;
            var instance = this.instance;
            return h(Tip, {
              attrs: {
                type: "loading",
                icon: "loader"
              }
            }, [instance.loadingText]);
          },
          renderLoadingRootOptionsErrorTip: function renderLoadingRootOptionsErrorTip() {
            var h = this.$createElement;
            var instance = this.instance;
            return h(Tip, {
              attrs: {
                type: "error",
                icon: "error"
              }
            }, [instance.rootOptionsStates.loadingError, h("a", {
              "class": "vue-treeselect__retry",
              on: {
                "click": instance.loadRootOptions
              },
              attrs: {
                title: instance.retryTitle
              }
            }, [instance.retryText])]);
          },
          renderAsyncSearchLoadingErrorTip: function renderAsyncSearchLoadingErrorTip() {
            var h = this.$createElement;
            var instance = this.instance;
            var entry = instance.getRemoteSearchEntry();
            return h(Tip, {
              attrs: {
                type: "error",
                icon: "error"
              }
            }, [entry.loadingError, h("a", {
              "class": "vue-treeselect__retry",
              on: {
                "click": instance.handleRemoteSearch
              },
              attrs: {
                title: instance.retryTitle
              }
            }, [instance.retryText])]);
          },
          renderNoAvailableOptionsTip: function renderNoAvailableOptionsTip() {
            var h = this.$createElement;
            var instance = this.instance;
            return h(Tip, {
              attrs: {
                type: "no-options",
                icon: "warning"
              }
            }, [instance.noOptionsText]);
          },
          renderNoResultsTip: function renderNoResultsTip() {
            var h = this.$createElement;
            var instance = this.instance;
            return h(Tip, {
              attrs: {
                type: "no-results",
                icon: "warning"
              }
            }, [instance.noResultsText]);
          },
          onMenuOpen: function onMenuOpen() {
            this.adjustMenuOpenDirection();
            this.setupMenuSizeWatcher();
            this.setupMenuResizeAndScrollEventListeners();
          },
          onMenuClose: function onMenuClose() {
            this.removeMenuSizeWatcher();
            this.removeMenuResizeAndScrollEventListeners();
          },
          adjustMenuOpenDirection: function adjustMenuOpenDirection() {
            var instance = this.instance;
            if (!instance.menu.isOpen)
              return;
            var $menu = instance.getMenu();
            var $control = instance.getControl();
            var menuRect = $menu.getBoundingClientRect();
            var controlRect = $control.getBoundingClientRect();
            var menuHeight = menuRect.height;
            var viewportHeight = window.innerHeight;
            var spaceAbove = controlRect.top;
            var spaceBelow = window.innerHeight - controlRect.bottom;
            var isControlInViewport = controlRect.top >= 0 && controlRect.top <= viewportHeight || controlRect.top < 0 && controlRect.bottom > 0;
            var hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER;
            var hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER;
            if (!isControlInViewport) {
              instance.closeMenu();
            } else if (instance.openDirection !== "auto") {
              instance.menu.placement = directionMap[instance.openDirection];
            } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
              instance.menu.placement = "bottom";
            } else {
              instance.menu.placement = "top";
            }
          },
          setupMenuSizeWatcher: function setupMenuSizeWatcher() {
            var instance = this.instance;
            var $menu = instance.getMenu();
            if (this.menuSizeWatcher)
              return;
            this.menuSizeWatcher = {
              remove: watchSize($menu, this.adjustMenuOpenDirection)
            };
          },
          setupMenuResizeAndScrollEventListeners: function setupMenuResizeAndScrollEventListeners() {
            var instance = this.instance;
            var $control = instance.getControl();
            if (this.menuResizeAndScrollEventListeners)
              return;
            this.menuResizeAndScrollEventListeners = {
              remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection)
            };
          },
          removeMenuSizeWatcher: function removeMenuSizeWatcher() {
            if (!this.menuSizeWatcher)
              return;
            this.menuSizeWatcher.remove();
            this.menuSizeWatcher = null;
          },
          removeMenuResizeAndScrollEventListeners: function removeMenuResizeAndScrollEventListeners() {
            if (!this.menuResizeAndScrollEventListeners)
              return;
            this.menuResizeAndScrollEventListeners.remove();
            this.menuResizeAndScrollEventListeners = null;
          }
        },
        render: function render2() {
          var h = arguments[0];
          return h("div", {
            ref: "menu-container",
            "class": "vue-treeselect__menu-container",
            style: this.menuContainerStyle
          }, [h("transition", {
            attrs: {
              name: "vue-treeselect__menu--transition"
            }
          }, [this.renderMenu()])]);
        }
      };
      var components_Menuvue_type_script_lang_js_ = Menuvue_type_script_lang_js_;
      var Menu_render, Menu_staticRenderFns;
      var Menu_component = normalizeComponent2(
        components_Menuvue_type_script_lang_js_,
        Menu_render,
        Menu_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Menu_component.options.__file = "src/components/Menu.vue";
      var Menu = Menu_component.exports;
      var external_vue_ = __webpack_require__(14);
      var external_vue_default = /* @__PURE__ */ __webpack_require__.n(external_vue_);
      function MenuPortalvue_type_script_lang_js_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function MenuPortalvue_type_script_lang_js_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            MenuPortalvue_type_script_lang_js_ownKeys(source, true).forEach(function(key) {
              defineProperty_default()(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            MenuPortalvue_type_script_lang_js_ownKeys(source).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var PortalTarget = {
        name: "vue-treeselect--portal-target",
        inject: ["instance"],
        watch: {
          "instance.menu.isOpen": function instanceMenuIsOpen(newValue) {
            if (newValue) {
              this.setupHandlers();
            } else {
              this.removeHandlers();
            }
          },
          "instance.menu.placement": function instanceMenuPlacement() {
            this.updateMenuContainerOffset();
          }
        },
        created: function created() {
          this.controlResizeAndScrollEventListeners = null;
          this.controlSizeWatcher = null;
        },
        mounted: function mounted() {
          var instance = this.instance;
          if (instance.menu.isOpen)
            this.setupHandlers();
        },
        methods: {
          setupHandlers: function setupHandlers() {
            this.updateWidth();
            this.updateMenuContainerOffset();
            this.setupControlResizeAndScrollEventListeners();
            this.setupControlSizeWatcher();
          },
          removeHandlers: function removeHandlers() {
            this.removeControlResizeAndScrollEventListeners();
            this.removeControlSizeWatcher();
          },
          setupControlResizeAndScrollEventListeners: function setupControlResizeAndScrollEventListeners() {
            var instance = this.instance;
            var $control = instance.getControl();
            if (this.controlResizeAndScrollEventListeners)
              return;
            this.controlResizeAndScrollEventListeners = {
              remove: setupResizeAndScrollEventListeners($control, this.updateMenuContainerOffset)
            };
          },
          setupControlSizeWatcher: function setupControlSizeWatcher() {
            var _this = this;
            var instance = this.instance;
            var $control = instance.getControl();
            if (this.controlSizeWatcher)
              return;
            this.controlSizeWatcher = {
              remove: watchSize($control, function() {
                _this.updateWidth();
                _this.updateMenuContainerOffset();
              })
            };
          },
          removeControlResizeAndScrollEventListeners: function removeControlResizeAndScrollEventListeners() {
            if (!this.controlResizeAndScrollEventListeners)
              return;
            this.controlResizeAndScrollEventListeners.remove();
            this.controlResizeAndScrollEventListeners = null;
          },
          removeControlSizeWatcher: function removeControlSizeWatcher() {
            if (!this.controlSizeWatcher)
              return;
            this.controlSizeWatcher.remove();
            this.controlSizeWatcher = null;
          },
          updateWidth: function updateWidth() {
            var instance = this.instance;
            var $portalTarget = this.$el;
            var $control = instance.getControl();
            var controlRect = $control.getBoundingClientRect();
            $portalTarget.style.width = controlRect.width + "px";
          },
          updateMenuContainerOffset: function updateMenuContainerOffset() {
            var instance = this.instance;
            var $control = instance.getControl();
            var $portalTarget = this.$el;
            var controlRect = $control.getBoundingClientRect();
            var portalTargetRect = $portalTarget.getBoundingClientRect();
            var offsetY = instance.menu.placement === "bottom" ? controlRect.height : 0;
            var left = Math.round(controlRect.left - portalTargetRect.left) + "px";
            var top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + "px";
            var menuContainerStyle = this.$refs.menu.$refs["menu-container"].style;
            var transformVariations = ["transform", "webkitTransform", "MozTransform", "msTransform"];
            var transform = find(transformVariations, function(t) {
              return t in document.body.style;
            });
            menuContainerStyle[transform] = "translate(".concat(left, ", ").concat(top, ")");
          }
        },
        render: function render2() {
          var h = arguments[0];
          var instance = this.instance;
          var portalTargetClass = ["vue-treeselect__portal-target", instance.wrapperClass];
          var portalTargetStyle = {
            zIndex: instance.zIndex
          };
          return h("div", {
            "class": portalTargetClass,
            style: portalTargetStyle,
            attrs: {
              "data-instance-id": instance.getInstanceId()
            }
          }, [h(Menu, {
            ref: "menu"
          })]);
        },
        destroyed: function destroyed() {
          this.removeHandlers();
        }
      };
      var placeholder;
      var MenuPortalvue_type_script_lang_js_ = {
        name: "vue-treeselect--menu-portal",
        created: function created() {
          this.portalTarget = null;
        },
        mounted: function mounted() {
          this.setup();
        },
        destroyed: function destroyed() {
          this.teardown();
        },
        methods: {
          setup: function setup() {
            var el = document.createElement("div");
            document.body.appendChild(el);
            this.portalTarget = new external_vue_default.a(MenuPortalvue_type_script_lang_js_objectSpread({
              el,
              parent: this
            }, PortalTarget));
          },
          teardown: function teardown() {
            document.body.removeChild(this.portalTarget.$el);
            this.portalTarget.$el.innerHTML = "";
            this.portalTarget.$destroy();
            this.portalTarget = null;
          }
        },
        render: function render2() {
          var h = arguments[0];
          if (!placeholder)
            placeholder = h("div", {
              "class": "vue-treeselect__menu-placeholder"
            });
          return placeholder;
        }
      };
      var components_MenuPortalvue_type_script_lang_js_ = MenuPortalvue_type_script_lang_js_;
      var MenuPortal_render, MenuPortal_staticRenderFns;
      var MenuPortal_component = normalizeComponent2(
        components_MenuPortalvue_type_script_lang_js_,
        MenuPortal_render,
        MenuPortal_staticRenderFns,
        false,
        null,
        null,
        null
      );
      MenuPortal_component.options.__file = "src/components/MenuPortal.vue";
      var MenuPortal = MenuPortal_component.exports;
      var Treeselectvue_type_script_lang_js_ = {
        name: "vue-treeselect",
        mixins: [treeselectMixin],
        computed: {
          wrapperClass: function wrapperClass() {
            return {
              "vue-treeselect": true,
              "vue-treeselect--single": this.single,
              "vue-treeselect--multi": this.multiple,
              "vue-treeselect--searchable": this.searchable,
              "vue-treeselect--disabled": this.disabled,
              "vue-treeselect--focused": this.trigger.isFocused,
              "vue-treeselect--has-value": this.hasValue,
              "vue-treeselect--open": this.menu.isOpen,
              "vue-treeselect--open-above": this.menu.placement === "top",
              "vue-treeselect--open-below": this.menu.placement === "bottom",
              "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
              "vue-treeselect--append-to-body": this.appendToBody
            };
          }
        },
        render: function render2() {
          var h = arguments[0];
          return h("div", {
            ref: "wrapper",
            "class": this.wrapperClass
          }, [h(HiddenFields), h(Control, {
            ref: "control"
          }), this.appendToBody ? h(MenuPortal, {
            ref: "portal"
          }) : h(Menu, {
            ref: "menu"
          })]);
        }
      };
      var components_Treeselectvue_type_script_lang_js_ = Treeselectvue_type_script_lang_js_;
      var Treeselect_render, Treeselect_staticRenderFns;
      var Treeselect_component = normalizeComponent2(
        components_Treeselectvue_type_script_lang_js_,
        Treeselect_render,
        Treeselect_staticRenderFns,
        false,
        null,
        null,
        null
      );
      Treeselect_component.options.__file = "src/components/Treeselect.vue";
      var Treeselect = Treeselect_component.exports;
      __webpack_require__(15);
      __webpack_require__.d(__webpack_exports__, "VERSION", function() {
        return VERSION;
      });
      __webpack_require__.d(__webpack_exports__, "Treeselect", function() {
        return Treeselect;
      });
      __webpack_require__.d(__webpack_exports__, "treeselectMixin", function() {
        return treeselectMixin;
      });
      __webpack_require__.d(__webpack_exports__, "LOAD_ROOT_OPTIONS", function() {
        return LOAD_ROOT_OPTIONS;
      });
      __webpack_require__.d(__webpack_exports__, "LOAD_CHILDREN_OPTIONS", function() {
        return LOAD_CHILDREN_OPTIONS;
      });
      __webpack_require__.d(__webpack_exports__, "ASYNC_SEARCH", function() {
        return ASYNC_SEARCH;
      });
      __webpack_exports__["default"] = Treeselect;
      var VERSION = "0.4.0";
    }
  ]);
})(vueTreeselect_cjs);
var TreeSelect = /* @__PURE__ */ getDefaultExportFromCjs(vueTreeselect_cjs.exports);
var vueTreeselect = "";
var index$1 = "";
TreeSelect.name = "drop-tree";
function isArray(arr) {
  if (!Array.isArray) {
    Array.isArray = (arg) => {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
  }
  return Array.isArray(arr);
}
function getKeyOfData(list, key, value) {
  if (!isArray(list))
    throw new Error("getKeyOfData args list invalid!");
  let i = -1;
  const len = list.length;
  let homeItem = {};
  while (++i < len) {
    const item = list[i];
    if (item[key] === value) {
      homeItem = item;
      break;
    } else if (item.children && item.children.length) {
      const res = getKeyOfData(item.children, key, value);
      if (res[key])
        return res;
    }
  }
  return homeItem;
}
function findCheck(list, arr = []) {
  list.forEach((ret) => {
    if (ret.check)
      arr.push(ret);
    else if (ret.children && ret.children.length !== 0) {
      findCheck(ret.children, arr);
    }
  });
  return arr;
}
function getByteLen(val, num) {
  let len = 0;
  let charLen = num || 2;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) !== null) {
      len += charLen;
    } else {
      len += 1;
    }
  }
  return len;
}
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent)
      name = parent.$options.name;
  }
  return parent;
}
function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components2, child) => {
    if (child.$options.name === componentName)
      components2.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components2.concat(foundChilds);
  }, []);
}
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter((item) => {
    return item.$options.name === componentName;
  });
  let index2 = res.findIndex((item) => item._uid === context._uid);
  if (exceptMe)
    res.splice(index2, 1);
  return res;
}
var render$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-select-item"
  }, [_c("div", {
    staticClass: "c-header"
  }, [_c("span", {
    staticClass: "c-header-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm.clear ? _c("span", {
    staticClass: "c-header-clear",
    on: {
      "click": function($event) {
        return _vm.$emit("on-clear");
      }
    }
  }, [_vm._v(" \u6E05\u7A7A\u5168\u90E8 ")]) : _vm._e()]), _c("div", {
    staticClass: "c-selecter-content"
  }, [_vm._t("default")], 2)]);
};
var staticRenderFns$e = [];
var selectItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$e = {
  name: "selectItem",
  props: {
    title: {
      type: String
    },
    clear: {
      type: Boolean
    }
  }
};
const __cssModules$e = {};
var __component__$e = /* @__PURE__ */ normalizeComponent(
  __vue2_script$e,
  render$e,
  staticRenderFns$e,
  false,
  __vue2_injectStyles$e,
  "3d2f2883",
  null,
  null
);
function __vue2_injectStyles$e(context) {
  for (let o in __cssModules$e) {
    this[o] = __cssModules$e[o];
  }
}
var SelectItem = /* @__PURE__ */ function() {
  return __component__$e.exports;
}();
var render$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a-checkbox", {
    attrs: {
      "checked": _vm.value,
      "indeterminate": _vm.indeterminate
    },
    on: {
      "change": _vm.change
    }
  }, [_vm._v(_vm._s(_vm.label))]);
};
var staticRenderFns$d = [];
const __vue2_script$d = {
  name: "ICheckbox",
  props: {
    value: {
      type: Boolean
    },
    label: {
      type: String
    },
    indeterminate: {
      type: Boolean
    }
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.checked);
    }
  }
};
const __cssModules$d = {};
var __component__$d = /* @__PURE__ */ normalizeComponent(
  __vue2_script$d,
  render$d,
  staticRenderFns$d,
  false,
  __vue2_injectStyles$d,
  null,
  null,
  null
);
function __vue2_injectStyles$d(context) {
  for (let o in __cssModules$d) {
    this[o] = __cssModules$d[o];
  }
}
var ICheckbox = /* @__PURE__ */ function() {
  return __component__$d.exports;
}();
var render$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-select-box"
  }, [_c("div", {
    staticClass: "c-check-all"
  }, [_c("div", {
    staticClass: "c-item-select c-cataract",
    on: {
      "click": _vm.selectAll
    }
  }), _c("a-checkbox", {
    staticClass: "c-check-item",
    model: {
      value: _vm.all,
      callback: function($$v) {
        _vm.all = $$v;
      },
      expression: "all"
    }
  }, [_vm._v("\u5168\u9009")])], 1), _vm._l(_vm.data, function(item) {
    return _c("div", {
      key: item.id
    }, [item.children && item.children.length ? _c("div", {
      class: _vm.itemClasses(item),
      on: {
        "click": function($event) {
          return _vm.$emit("on-child", {
            item,
            level: _vm.level
          });
        }
      }
    }, [_c("i-checkbox", {
      attrs: {
        "indeterminate": _vm.itemIndeterminate(item),
        "label": item.value
      },
      model: {
        value: item.check,
        callback: function($$v) {
          _vm.$set(item, "check", $$v);
        },
        expression: "item.check"
      }
    }), _c("a-icon", {
      staticClass: "c-check-arrow",
      attrs: {
        "type": "right"
      }
    }), _c("span", {
      staticClass: "c-item-checkbox c-cataract",
      on: {
        "click": function($event) {
          return _vm.selectItem(item);
        }
      }
    })], 1) : _c("i-checkbox", {
      staticClass: "c-check-item",
      attrs: {
        "label": item.value
      },
      model: {
        value: item.check,
        callback: function($$v) {
          _vm.$set(item, "check", $$v);
        },
        expression: "item.check"
      }
    })], 1);
  })], 2);
};
var staticRenderFns$c = [];
var selectBox_vue_vue_type_style_index_0_scoped_true_lang = "";
const computeChild = (list, Vue) => {
  list.forEach((item) => {
    if (item.children && item.children.length) {
      const child = item.children;
      if (child.every((ret) => ret.check))
        Vue.$set(item, "check", true);
      else
        Vue.$set(item, "check", false);
      child && computeChild(child, Vue);
    }
  });
};
const __vue2_script$c = {
  name: "selectBox",
  components: { ICheckbox },
  props: {
    value: {
      type: [String, Number]
    },
    data: {
      type: Array
    },
    level: {
      type: Number
    }
  },
  computed: {
    itemClasses() {
      return (item) => {
        const cls = ["c-check-item"];
        item.id === this.value && cls.push("active");
        return cls;
      };
    },
    all() {
      const len = this.data.filter((ret) => ret.check).length;
      return this.data.length === len;
    }
  },
  methods: {
    selectAll() {
      this.$emit("on-select", {
        check: !this.all,
        level: this.level
      });
    },
    selectItem(item) {
      this.$emit("on-select", {
        check: !item.check,
        level: this.level,
        cat: item.id
      });
    },
    itemIndeterminate(child) {
      const hasChild = (meta) => {
        return meta.children.reduce((sum, item) => {
          let foundChilds = [];
          if (item.check)
            sum.push(item);
          if (item.children)
            foundChilds = hasChild(item);
          return sum.concat(foundChilds);
        }, []);
      };
      const some = hasChild(child).length > 0;
      const every = child.children && child.children.every((ret) => ret.check);
      return some && !every;
    }
  },
  watch: {
    data: {
      handler(nVal, oVal) {
        computeChild(nVal, this);
      },
      deep: true
    }
  },
  mounted() {
    computeChild(this.data, this);
  }
};
const __cssModules$c = {};
var __component__$c = /* @__PURE__ */ normalizeComponent(
  __vue2_script$c,
  render$c,
  staticRenderFns$c,
  false,
  __vue2_injectStyles$c,
  "6fdc22c7",
  null,
  null
);
function __vue2_injectStyles$c(context) {
  for (let o in __cssModules$c) {
    this[o] = __cssModules$c[o];
  }
}
var SelectBox = /* @__PURE__ */ function() {
  return __component__$c.exports;
}();
var render$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-selecter"
  }, [_c("a-row", {
    attrs: {
      "gutter": 12
    }
  }, [_c("a-col", {
    attrs: {
      "span": 16
    }
  }, [_c("a-row", _vm._l(_vm.resource, function(box, idx) {
    return _c("a-col", {
      key: idx,
      attrs: {
        "span": _vm.col
      }
    }, [_c("select-item", {
      attrs: {
        "title": box.title
      }
    }, [_c("select-box", {
      attrs: {
        "data": box.data,
        "level": box.level
      },
      on: {
        "on-child": _vm.pushChild,
        "on-select": _vm.selectAll
      },
      model: {
        value: box.current,
        callback: function($$v) {
          _vm.$set(box, "current", $$v);
        },
        expression: "box.current"
      }
    })], 1)], 1);
  }), 1)], 1), _c("a-col", {
    attrs: {
      "span": 7,
      "offset": "1"
    }
  }, [_vm.resultLen && _vm.transfer ? _c("select-item", {
    attrs: {
      "title": `\u5DF2\u9009${_vm.resultLen ? "(" + _vm.result.length + ")" : ""}`,
      "clear": ""
    },
    on: {
      "on-clear": function($event) {
        return _vm.clearTag({
          list: _vm.data
        });
      }
    }
  }, _vm._l(_vm.result, function(item) {
    return _c("div", {
      key: item.id,
      staticClass: "c-pop-tip"
    }, [_c("a-tag", {
      staticClass: "c-tag-item",
      attrs: {
        "closable": ""
      },
      on: {
        "close": function($event) {
          return _vm.handleClose(item.id);
        }
      }
    }, [_vm._v(_vm._s(item.value))])], 1);
  }), 0) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns$b = [];
var select_vue_vue_type_style_index_0_scoped_true_lang = "";
function clearTagOfData(list, Vue) {
  if (!isArray(list))
    throw new Error("clearTagOfData args list invalid!");
  let i = -1;
  const len = list.length;
  while (++i < len) {
    const item = list[i];
    const itemChild = item.children || item.child;
    if (itemChild && itemChild.length) {
      clearTagOfData(itemChild, Vue);
    }
    Vue.$set(item, "check", false);
  }
}
const __vue2_script$b = {
  name: "selecter",
  components: { SelectItem, SelectBox },
  props: {
    value: {
      type: Array
    },
    title: {
      type: Array
    },
    data: {
      type: Array
    },
    transfer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      resource: []
    };
  },
  computed: {
    col() {
      return this.resource.length > 1 ? 24 / this.resource.length : 12;
    },
    result() {
      const checkItems = findCheck(this.data);
      this.$emit("input", checkItems.map((ret) => ret.id));
      return checkItems;
    },
    resultLen() {
      return Boolean(this.result.length);
    }
  },
  methods: {
    updateResource() {
      this.resource = [];
      this.resource.push({
        data: this.data,
        current: 0,
        level: 1,
        title: this.title[0]
      });
    },
    handleClose(id) {
      const data = getKeyOfData(this.data, "id", id);
      if (data.children && data.children.length) {
        this.selectFinalAll({ list: this.data, check: false, current: id });
      } else {
        this.$set(data, "check", false);
      }
    },
    selectAll({ level, check, cat }) {
      let index2 = level - 2;
      let current = index2 > -1 ? this.resource[index2].current : 0;
      cat && (current = cat);
      this.selectFinalAll({
        check,
        current,
        list: this.data
      });
    },
    pushChild(params) {
      const { item, level } = params;
      const len = this.resource.length;
      if (level <= len - 1) {
        this.resource.splice(level, len - level);
      }
      this.resource.push({
        data: item.children,
        current: 0,
        level: level + 1,
        title: this.title[level] || item.value
      });
      this.resource[level - 1].current = item.id;
    },
    selectFinalAll({ list, check = true, current = 0 }) {
      let data;
      const setAllChecked = (all, check2) => {
        all.forEach((ret) => {
          if (ret.children && ret.children.length)
            setAllChecked(ret.children, check2);
          this.$set(ret, "check", check2);
        });
      };
      if (current) {
        const item = getKeyOfData(list, "id", current);
        data = item.children;
      } else
        data = list;
      setAllChecked(data, check);
    },
    clearTag({ list }) {
      clearTagOfData(list, this);
    },
    decompile(Ids) {
      const deepSelect = (item) => {
        item.forEach((ret) => {
          if (ret && ret.children && ret.children.length)
            deepSelect(ret.children);
          !ret.disabled && this.$set(ret, "check", true);
        });
      };
      Ids.forEach((ret) => {
        const item = getKeyOfData(this.data, "id", ret);
        deepSelect([item]);
      });
    }
  },
  created() {
    if (isArray(this.value) && this.value.length) {
      this.decompile(this.value);
    }
    this.updateResource();
  }
};
const __cssModules$b = {};
var __component__$b = /* @__PURE__ */ normalizeComponent(
  __vue2_script$b,
  render$b,
  staticRenderFns$b,
  false,
  __vue2_injectStyles$b,
  "1753433f",
  null,
  null
);
function __vue2_injectStyles$b(context) {
  for (let o in __cssModules$b) {
    this[o] = __cssModules$b[o];
  }
}
var Selecter = /* @__PURE__ */ function() {
  return __component__$b.exports;
}();
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("select-item", {
    attrs: {
      "title": _vm.title
    }
  }, [_c("a-radio-group", {
    model: {
      value: _vm.current,
      callback: function($$v) {
        _vm.current = $$v;
      },
      expression: "current"
    }
  }, _vm._l(_vm.versions, function(r) {
    return _c("a-radio", {
      key: r.value,
      staticClass: "c-version-item",
      attrs: {
        "value": r.value
      }
    }, [_vm._v(_vm._s(r.label))]);
  }), 1)], 1);
};
var staticRenderFns$a = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const __vue2_script$a = {
  name: "Version",
  components: { SelectItem },
  props: {
    value: {
      type: [String, Number],
      default: "NONE"
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: "\u7248\u672C",
      required: true
    },
    android: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    current: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    vername() {
      return this.android ? "Android" : "iOS";
    },
    versions() {
      const data = this.data.map((ret) => {
        return {
          label: `${this.vername} ${ret}\u53CA\u4EE5\u4E0A`,
          value: ret
        };
      });
      return [{ label: "\u4E0D\u9650", value: "NONE" }, ...data];
    }
  }
};
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(
  __vue2_script$a,
  render$a,
  staticRenderFns$a,
  false,
  __vue2_injectStyles$a,
  "9efd1348",
  null,
  null
);
function __vue2_injectStyles$a(context) {
  for (let o in __cssModules$a) {
    this[o] = __cssModules$a[o];
  }
}
var Version = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a-steps", {
    attrs: {
      "current": _vm.current,
      "direction": "vertical",
      "size": "small"
    }
  }, _vm._l(_vm.data, function(moduler, index2) {
    return _c("a-step", {
      key: moduler.id,
      attrs: {
        "title": moduler.name
      }
    }, [_vm.anchor(index2) ? _c("template", {
      slot: "description"
    }, [_c("a-anchor", {
      attrs: {
        "show-ink-in-fixed": false
      }
    }, _vm._l(moduler.children, function(t) {
      return _c("a-anchor-link", {
        key: t.id,
        attrs: {
          "href": `#${t.href}`,
          "title": t.name
        }
      });
    }), 1)], 1) : _c("template", {
      slot: "description"
    }, [_c("ul", {
      class: ["nav-ul", {
        "c-disable": index2 > _vm.current
      }]
    }, _vm._l(moduler.children, function(t) {
      return _c("li", {
        key: t.id
      }, [_c("span", [_vm._v(_vm._s(t.name))])]);
    }), 0)])], 2);
  }), 1);
};
var staticRenderFns$9 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const __vue2_script$9 = {
  name: "Steper",
  props: {
    current: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    anchor() {
      return (moduler) => moduler === this.current;
    }
  }
};
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$9,
  render$9,
  staticRenderFns$9,
  false,
  __vue2_injectStyles$9,
  "5dd9f6d0",
  null,
  null
);
function __vue2_injectStyles$9(context) {
  for (let o in __cssModules$9) {
    this[o] = __cssModules$9[o];
  }
}
var Steper = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-moduler",
    attrs: {
      "id": _vm.name
    }
  }, [_c("div", {
    staticClass: "c-moduler-range"
  }, [_c("div", {
    staticClass: "c-moduler-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._t("default")], 2)]);
};
var staticRenderFns$8 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const __vue2_script$8 = {
  name: "Moduler",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$8,
  render$8,
  staticRenderFns$8,
  false,
  __vue2_injectStyles$8,
  "4ae64f8b",
  null,
  null
);
function __vue2_injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var Moduler = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: _vm.classes,
    style: _vm.styleValue
  }, [_c("a-input", {
    ref: "input",
    attrs: {
      "disabled": _vm.disabled,
      "placeholder": _vm.placeholder,
      "autocomplete": "on"
    },
    on: {
      "blur": function($event) {
        return _vm.$emit("blur");
      },
      "focus": function($event) {
        return _vm.$emit("focus");
      }
    },
    model: {
      value: _vm.data,
      callback: function($$v) {
        _vm.data = $$v;
      },
      expression: "data"
    }
  }), _c("span", {
    staticClass: "c-length"
  }, [_c("ins", {
    class: _vm.warnClass
  }, [_vm._v(" " + _vm._s(_vm.len) + " ")]), _vm._v("/" + _vm._s(_vm.max) + " ")])], 1);
};
var staticRenderFns$7 = [];
var input_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$7 = {
  name: "InputLen",
  props: {
    value: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      required: true
    },
    charset: {
      type: String,
      default: "gb2312"
    },
    bc: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    data: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$emit("change", val);
      }
    },
    classes() {
      return [
        "c-len",
        { "c-len-large": this.max > 99 }
      ];
    },
    styleValue() {
      return this.width && {
        width: `${this.width}px`
      };
    },
    len() {
      let charLen = 1;
      if (this.charset === "utf-8")
        charLen = 3;
      else if (this.charset === "gb2312")
        charLen = 2;
      return this.bc ? Math.ceil(getByteLen(this.data, charLen) / charLen) : getByteLen(this.data, charLen);
    },
    warnClass() {
      return {
        "c-text-err": this.len > this.max
      };
    }
  }
};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$7,
  render$7,
  staticRenderFns$7,
  false,
  __vue2_injectStyles$7,
  "9e85231c",
  null,
  null
);
function __vue2_injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var InputLen = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-caption",
    style: _vm.styleValue
  }, [_c("a-textarea", {
    ref: "textarea",
    attrs: {
      "placeholder": _vm.placeholder,
      "rows": _vm.rows
    },
    on: {
      "focus": function($event) {
        return _vm.$emit("focus");
      },
      "blur": function($event) {
        return _vm.$emit("blur");
      }
    },
    model: {
      value: _vm.text,
      callback: function($$v) {
        _vm.text = $$v;
      },
      expression: "text"
    }
  }), _c("span", {
    staticClass: "c-caption-length"
  }, [_c("ins", {
    class: _vm.warnClass
  }, [_vm._v(" " + _vm._s(_vm.len) + " ")]), _vm._v("/" + _vm._s(_vm.max) + " ")])], 1);
};
var staticRenderFns$6 = [];
var textarea_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$6 = {
  name: "TextareaLen",
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    },
    width: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 4
    },
    max: {
      type: Number,
      required: true
    },
    charset: {
      type: String,
      default: "gb2312"
    },
    bc: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    styleValue() {
      return {
        width: `${this.width}px`
      };
    },
    len() {
      let charLen = 1;
      if (this.charset === "utf-8")
        charLen = 3;
      else if (this.charset === "gb2312")
        charLen = 2;
      return this.bc ? Math.ceil(getByteLen(this.text, charLen) / charLen) : getByteLen(this.text, charLen);
    },
    warnClass() {
      return {
        "c-error": this.len > this.max
      };
    }
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$6,
  render$6,
  staticRenderFns$6,
  false,
  __vue2_injectStyles$6,
  "78ab5732",
  null,
  null
);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var TextareaLen = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-mixcheck"
  }, [_vm._t("default")], 2);
};
var staticRenderFns$5 = [];
var mixCheck_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$5 = {
  name: "Mixcheck",
  props: {
    value: {
      type: [Array, String, Number],
      required: true
    }
  },
  methods: {
    updateModel() {
      this.radioChildrens = findComponentsDownward(this, "RadioItem");
      this.checkChildrens = findComponentsDownward(this, "CheckItem");
      if (this.radioChildrens || this.checkChildrens) {
        const { value } = this;
        const childrens = this.$children;
        for (const child of childrens) {
          child.model = value;
          child.currentValue = false;
        }
        if (isArray(value)) {
          this.checkChildrens.forEach((child) => {
            child.currentValue = value.indexOf(child.label) >= 0;
          });
        } else {
          const index2 = this.radioChildrens.findIndex((ret) => ret.label === value);
          if (index2 > -1)
            this.radioChildrens[index2].currentValue = true;
        }
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("change", data);
    }
  },
  watch: {
    value(nVal) {
      debounce$1(this.updateModel(), 1e3);
    }
  },
  data() {
    return {
      currentValue: this.value,
      radioChildrens: [],
      checkChildrens: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateModel();
    });
  }
};
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$5,
  render$5,
  staticRenderFns$5,
  false,
  __vue2_injectStyles$5,
  "39ea64c6",
  null,
  null
);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var MixCheck = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", {
    class: _vm.wrapClasses
  }, [_c("span", {
    staticClass: "c-radio-item"
  }, [_c("input", {
    class: _vm.inputClasses,
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.currentValue
    },
    on: {
      "change": _vm.change
    }
  }), _vm._t("default", function() {
    return [_vm.showSlot ? _c("span", [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()];
  })], 2)]);
};
var staticRenderFns$4 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const __vue2_script$4 = {
  name: "RadioItem",
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  computed: {
    wrapClasses() {
      return [
        "mixcheck-item",
        "c-radio-wrapper",
        {
          "c-wrapper-checked": this.currentValue,
          "c-wrapper-disabled": this.disabled
        }
      ];
    },
    inputClasses() {
      return "c-mix-input";
    }
  },
  methods: {
    change(event) {
      if (this.disabled)
        return false;
      const checked = event.target.checked;
      this.currentValue = checked;
      if (checked)
        this.parent.change(this.label);
      else
        this.parent.change("");
    }
  },
  data() {
    return {
      model: null,
      showSlot: true,
      currentValue: false,
      parent: findComponentUpward(this, "Mixcheck")
    };
  },
  mounted() {
    this.showSlot = this.$slots.default === void 0;
    this.parent.updateModel(true);
  }
};
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$4,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  "cd52d98e",
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var RadioItem$1 = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("label", {
    class: _vm.wrapClasses
  }, [_c("span", {
    staticClass: "c-check-item"
  }, [_c("input", {
    class: _vm.inputClasses,
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.currentValue
    },
    on: {
      "change": _vm.change
    }
  })]), _vm._t("default", function() {
    return [_vm.showSlot ? _c("span", [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()];
  })], 2);
};
var staticRenderFns$3 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const __vue2_script$3 = {
  name: "CheckItem",
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  computed: {
    wrapClasses() {
      return [
        "mixcheck-item",
        "c-check-wrapper",
        {
          "c-wrapper-checked": this.currentValue,
          "c-wrapper-disabled": this.disabled
        }
      ];
    },
    inputClasses() {
      return "c-mix-input";
    }
  },
  methods: {
    change(event) {
      if (this.disabled)
        return false;
      const checked = event.target.checked;
      const brothers = findBrothersComponents(this, "CheckItem", false);
      if (brothers.length) {
        const model = [];
        const allCheck = checked || brothers.filter((ret) => ret.currentValue).length > 1;
        allCheck && (this.currentValue = checked);
        for (const child of brothers) {
          if (child.currentValue)
            model.push(child.label);
        }
        console.log(model, checked);
        this.parent.change(model);
      } else
        this.parent.change([]);
    }
  },
  data() {
    return {
      model: null,
      showSlot: true,
      currentValue: false,
      parent: findComponentUpward(this, "Mixcheck")
    };
  },
  mounted() {
    this.showSlot = this.$slots.default === void 0;
    this.parent.updateModel(true);
  }
};
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$3,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  "72ecd3a7",
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var CheckItem$1 = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
MixCheck.Radio = RadioItem$1;
MixCheck.Check = CheckItem$1;
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "c-base-setting"
  }, [_vm._t("default")], 2);
};
var staticRenderFns$2 = [];
var rowForm_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$2 = {
  name: "rowForm",
  props: {
    value: {
      type: Object
    }
  },
  provide() {
    return {
      form: this
    };
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$2,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  "7250ac6b",
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var RowForm = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a-row", {
    staticClass: "row-item",
    class: {
      "row-item-mini": _vm.mini
    },
    attrs: {
      "type": "flex",
      "justify": _vm.justify,
      "align": _vm.align,
      "gutter": 12
    }
  }, [_vm.indent ? _c("a-col", {
    attrs: {
      "span": 1
    }
  }, [_c("span", [_vm._v("\xA0")])]) : _vm._e(), _c("a-col", {
    staticClass: "col-item",
    attrs: {
      "span": _vm.fieldSpan
    }
  }, [_vm.label ? _c("span", {
    staticClass: "item-field",
    class: {
      "row-item-must": _vm.required
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()]), _c("a-col", {
    attrs: {
      "span": _vm.contentSpan
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns$1 = [];
var rowItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$1 = {
  name: "rowItem",
  props: {
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default() {
        return false;
      }
    },
    prop: {
      type: String
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "middle"
    },
    mini: {
      type: Boolean,
      default: false
    },
    indent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fieldSpan() {
      return this.mini ? this.label ? 8 : 0 : 5;
    },
    contentSpan() {
      return this.mini ? this.label ? 16 : 24 : 16;
    }
  },
  inject: ["form"]
};
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "7b3f9d96",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var RowItem$1 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
RowForm.Item = RowItem$1;
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a-popover", {
    staticClass: "c-error-info",
    attrs: {
      "trigger": "click",
      "placement": "topLeft"
    },
    model: {
      value: _vm.visible,
      callback: function($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_vm.state ? [_c("a-icon", {
    style: {
      size: 24,
      color: "#f45858"
    },
    attrs: {
      "type": "warning"
    }
  }), _c("span", {
    staticClass: "c-info-txt"
  }, [_vm._v("\u6709\u4E9B\u9879\u76EE\u586B\u5199\u9519\u8BEF\uFF0C\u8BF7\u4FEE\u6539")])] : _vm._e(), _c("div", {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c("div", {
    staticClass: "c-pop-content"
  }, [_c("div", {
    staticClass: "c-pop-head"
  }, [_c("a", {
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\xD7")]), _c("h3", [_vm._v("\u8BF7\u68C0\u67E5\u4EE5\u4E0B\u9009\u9879\uFF1A")])]), _c("ul", {
    attrs: {
      "type": "disc"
    }
  }, _vm._l(_vm.data, function(msg, idx) {
    return _c("li", {
      key: idx
    }, [_c("span", [_vm._v(_vm._s(msg.feild))]), _c("ins", [_vm._v("1\u3001" + _vm._s(msg.msg))])]);
  }), 0)])])], 2);
};
var staticRenderFns = [];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "popError",
  props: {
    value: {
      type: Boolean
    },
    state: {
      type: Boolean
    },
    data: {
      type: Array
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$emit("on-close", false);
      }, 300);
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "33fbbe72",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var ErrorPop = /* @__PURE__ */ function() {
  return __component__.exports;
}();
const RadioItem = MixCheck.Radio;
const CheckItem = MixCheck.Check;
const RowItem = RowForm.Item;
const components = [
  DragWeektime,
  TreeSelect,
  Selecter,
  Steper,
  Moduler,
  InputLen,
  TextareaLen,
  Version,
  MixCheck,
  RadioItem,
  CheckItem,
  RowForm,
  RowItem,
  ErrorPop,
  ICheckbox
];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
var index = {
  install
};
export { CheckItem, DragWeektime, TreeSelect as DropTree, ErrorPop, ICheckbox, InputLen, MixCheck as Mixcheck, Moduler, RadioItem, RowForm, RowItem, Selecter, Steper, TextareaLen, Version, index as default };
