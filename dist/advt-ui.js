import { openBlock as F, createElementBlock as D, createElementVNode as B, normalizeClass as vt, normalizeStyle as _a, Fragment as ae, renderList as ye, toDisplayString as he, withModifiers as Oa, createCommentVNode as gt, pushScopeId as Sa, popScopeId as ka, isVNode as Pa, Comment as Ea, Text as Ta, defineComponent as H, inject as xe, computed as N, createVNode as h, reactive as Ee, provide as de, watch as we, onMounted as Le, onUnmounted as Aa, Teleport as ja, ref as Y, TransitionGroup as $a, render as Pn, h as En, nextTick as on, watchEffect as at, getCurrentInstance as br, onBeforeUnmount as Ct, renderSlot as Ia, createBlock as Me, withCtx as ee, createTextVNode as xt, resolveComponent as Ze } from "vue";
const Re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Ma = (e) => Array.from(Array(e)).map((t, n) => n), Na = {
  name: "DragWeektime",
  props: {
    value: {
      type: Array
    },
    data: {
      type: Array
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
    selectValue() {
      return this.value;
    },
    selectState() {
      return this.value.some((e) => e.value);
    },
    selectClasses() {
      return (e) => e.check ? "ui-selected" : "";
    }
  },
  methods: {
    cellEnter(e) {
      const t = document.querySelector(`td[data-week='${e.row}'][data-time='${e.col}']`);
      t && !this.mode ? (this.left = t.offsetLeft, this.top = t.offsetTop) : e.col <= this.col && e.row <= this.row ? (this.width = (this.col - e.col + 1) * t.offsetWidth, this.height = (this.row - e.row + 1) * t.offsetHeight, this.left = t.offsetLeft, this.top = t.offsetTop) : e.col >= this.col && e.row >= this.row ? (this.width = (e.col - this.col + 1) * t.offsetWidth, this.height = (e.row - this.row + 1) * t.offsetHeight, e.col > this.col && e.row === this.row && (this.top = t.offsetTop), e.col === this.col && e.row > this.row && (this.left = t.offsetLeft)) : e.col > this.col && e.row < this.row ? (this.width = (e.col - this.col + 1) * t.offsetWidth, this.height = (this.row - e.row + 1) * t.offsetHeight, this.top = t.offsetTop) : e.col < this.col && e.row > this.row && (this.width = (this.col - e.col + 1) * t.offsetWidth, this.height = (e.row - this.row + 1) * t.offsetHeight, this.left = t.offsetLeft);
    },
    cellDown(e) {
      const t = document.querySelector(`td[data-week='${e.row}'][data-time='${e.col}']`);
      this.check = Boolean(e.check), this.mode = 1, t && (this.width = t.offsetWidth, this.height = t.offsetHeight), this.row = e.row, this.col = e.col;
    },
    cellUp(e) {
      e.col <= this.col && e.row <= this.row ? this.selectWeek([e.row, this.row], [e.col, this.col], !this.check) : e.col >= this.col && e.row >= this.row ? this.selectWeek([this.row, e.row], [this.col, e.col], !this.check) : e.col > this.col && e.row < this.row ? this.selectWeek([e.row, this.row], [this.col, e.col], !this.check) : e.col < this.col && e.row > this.row && this.selectWeek([this.row, e.row], [e.col, this.col], !this.check), this.width = 0, this.height = 0, this.mode = 0;
    },
    selectWeek(e, t, n) {
      const [r, a] = e, [o, l] = t;
      this.data.forEach((i) => {
        i.child.forEach((f) => {
          f.row >= r && f.row <= a && f.col >= o && f.col <= l && this.$set(f, "check", n);
        });
      });
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
      theadArr: []
    };
  },
  created() {
    this.theadArr = Ma(24);
  }
}, Cr = (e) => (Sa("data-v-7ff1c6b6"), e = e(), ka(), e), Fa = { class: "c-weektime" }, La = /* @__PURE__ */ Cr(() => /* @__PURE__ */ B("div", { class: "c-schedue" }, null, -1)), Ra = { class: "c-weektime-head" }, Ba = /* @__PURE__ */ Cr(() => /* @__PURE__ */ B("th", {
  rowspan: "8",
  class: "week-td"
}, "\u661F\u671F/\u65F6\u95F4", -1)), Va = ["colspan"], Da = ["colspan"], Ga = ["colspan"], Ha = { class: "c-weektime-body" }, za = ["data-week", "data-time", "onMouseenter", "onMousedown", "onMouseup"], Ua = {
  colspan: "49",
  class: "c-weektime-preview"
}, Wa = { class: "g-clearfix c-weektime-con" }, qa = { class: "g-pull-left" }, Ya = {
  key: 0,
  class: "c-weektime-time"
}, Ka = { key: 0 }, Qa = { class: "g-tip-text" };
function Ja(e, t, n, r, a, o) {
  return F(), D("div", Fa, [
    La,
    B("div", {
      class: vt({ "c-schedue": !0, "c-schedue-notransi": a.mode }),
      style: _a(o.styleValue)
    }, null, 6),
    B("table", {
      class: vt(["c-weektime-table", { "c-min-table": n.colspan < 2 }])
    }, [
      B("thead", Ra, [
        B("tr", null, [
          Ba,
          B("th", {
            colspan: 12 * n.colspan
          }, "00:00 - 12:00", 8, Va),
          B("th", {
            colspan: 12 * n.colspan
          }, "12:00 - 24:00", 8, Da)
        ]),
        B("tr", null, [
          (F(!0), D(ae, null, ye(a.theadArr, (l) => (F(), D("td", {
            key: l,
            colspan: n.colspan
          }, he(l), 9, Ga))), 128))
        ])
      ]),
      B("tbody", Ha, [
        (F(!0), D(ae, null, ye(n.data, (l) => (F(), D("tr", {
          key: l.row
        }, [
          B("td", null, he(l.value), 1),
          (F(!0), D(ae, null, ye(l.child, (i) => (F(), D("td", {
            key: `${i.row}-${i.col}`,
            "data-week": i.row,
            "data-time": i.col,
            onMouseenter: (f) => o.cellEnter(i),
            onMousedown: (f) => o.cellDown(i),
            onMouseup: (f) => o.cellUp(i),
            class: vt([o.selectClasses(i), "weektime-atom-item"])
          }, null, 42, za))), 128))
        ]))), 128)),
        B("tr", null, [
          B("td", Ua, [
            B("div", Wa, [
              B("span", qa, he(o.selectState ? "\u5DF2\u9009\u62E9\u65F6\u95F4\u6BB5" : "\u53EF\u62D6\u52A8\u9F20\u6807\u9009\u62E9\u65F6\u95F4\u6BB5"), 1),
              B("a", {
                class: "g-pull-right",
                onClick: t[0] || (t[0] = Oa((l) => e.$emit("on-clear"), ["prevent"]))
              }, "\u6E05\u7A7A\u9009\u62E9")
            ]),
            o.selectState ? (F(), D("div", Ya, [
              (F(!0), D(ae, null, ye(o.selectValue, (l) => (F(), D("div", {
                key: l.id
              }, [
                l.value ? (F(), D("p", Ka, [
                  B("span", Qa, he(l.week) + "\uFF1A", 1),
                  B("span", null, he(l.value), 1)
                ])) : gt("", !0)
              ]))), 128))
            ])) : gt("", !0)
          ])
        ])
      ])
    ], 2)
  ]);
}
const qe = /* @__PURE__ */ Re(Na, [["render", Ja], ["__scopeId", "data-v-7ff1c6b6"]]);
qe.install = function(e) {
  e.component(qe.name, qe);
};
function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tn(Object(n), !0).forEach(function(r) {
      j(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function be(e) {
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, be(e);
}
var Xa = Array.isArray, Za = function(t) {
  return typeof t == "string";
}, eo = function(t) {
  return t !== null && be(t) === "object";
};
function We(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e != null ? e : n;
}
function Q() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (!!n) {
      if (Za(n))
        e.push(n);
      else if (Xa(n))
        for (var r = 0; r < n.length; r++) {
          var a = Q(n[r]);
          a && e.push(a);
        }
      else if (eo(n))
        for (var o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
function to(e) {
  if (Array.isArray(e))
    return e;
}
function no(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, l, i;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Rt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ln(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Rt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rt(e, t);
  }
}
function ro() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function An(e, t) {
  return to(e) || no(e, t) || ln(e, t) || ro();
}
function ao(e) {
  if (Array.isArray(e))
    return Rt(e);
}
function oo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function io() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(e) {
  return ao(e) || oo(e) || ln(e) || io();
}
var lo = function(t) {
  return t != null && t !== "";
};
const co = lo;
var uo = function(t, n) {
  var r = T({}, t);
  return Object.keys(n).forEach(function(a) {
    var o = r[a];
    if (o)
      o.type || o.default ? o.default = n[a] : o.def ? o.def(n[a]) : r[a] = {
        type: o,
        default: n[a]
      };
    else
      throw new Error("not have ".concat(a, " prop"));
  }), r;
};
const so = uo;
var fo = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Array.isArray(t) ? t : [t], a = [];
  return r.forEach(function(o) {
    Array.isArray(o) ? a.push.apply(a, et(e(o, n))) : o && o.type === ae ? a.push.apply(a, et(e(o.children, n))) : o && Pa(o) ? n && !xr(o) ? a.push(o) : n || a.push(o) : co(o) && a.push(o);
  }), a;
}, jn = function(t) {
  for (var n, r = ((n = t == null ? void 0 : t.vnode) === null || n === void 0 ? void 0 : n.el) || t && (t.$el || t); r && !r.tagName; )
    r = r.nextSibling;
  return r;
};
function xr(e) {
  return e && (e.type === Ea || e.type === ae && e.children.length === 0 || e.type === Ta && e.children.trim() === "");
}
function vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
  return e.forEach(function(n) {
    Array.isArray(n) ? t.push.apply(t, et(n)) : n.type === ae ? t.push.apply(t, et(n.children)) : t.push(n);
  }), t.filter(function(n) {
    return !xr(n);
  });
}
var wr = function(t) {
  return setTimeout(t, 16);
}, _r = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (wr = function(t) {
  return window.requestAnimationFrame(t);
}, _r = function(t) {
  return window.cancelAnimationFrame(t);
});
var $n = 0, cn = /* @__PURE__ */ new Map();
function Or(e) {
  cn.delete(e);
}
function Bt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  $n += 1;
  var n = $n;
  function r(a) {
    if (a === 0)
      Or(n), e();
    else {
      var o = wr(function() {
        r(a - 1);
      });
      cn.set(n, o);
    }
  }
  return r(t), n;
}
Bt.cancel = function(e) {
  var t = cn.get(e);
  return Or(t), _r(t);
};
var Be = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n;
}, wt = function(t) {
  var n = t;
  return n.install = function(r) {
    r.component(n.displayName || n.name, t);
  }, t;
};
const po = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
var ho = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const mo = ho;
var go = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const Sr = go;
var yo = {
  lang: T({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, mo),
  timePickerLocale: T({}, Sr)
};
const In = yo;
var X = "${label} is not a valid ${type}", bo = {
  locale: "en",
  Pagination: po,
  DatePicker: In,
  TimePicker: Sr,
  Calendar: In,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: X,
        method: X,
        array: X,
        object: X,
        number: X,
        date: X,
        boolean: X,
        integer: X,
        float: X,
        regexp: X,
        email: X,
        url: X,
        hex: X
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
const Vt = bo, kr = H({
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function(t, n) {
    var r = n.slots, a = xe("localeData", {}), o = N(function() {
      var i = t.componentName, f = i === void 0 ? "global" : i, u = t.defaultLocale, d = u || Vt[f || "global"], c = a.antLocale, v = f && c ? c[f] : {};
      return T(T({}, typeof d == "function" ? d() : d), v || {});
    }), l = N(function() {
      var i = a.antLocale, f = i && i.locale;
      return i && i.exist && !f ? Vt.locale : f;
    });
    return function() {
      var i = t.children || r.default, f = a.antLocale;
      return i == null ? void 0 : i(o.value, l.value, f);
    };
  }
});
var Pr = function() {
  var t = J("empty", {}), n = t.getPrefixCls, r = n("empty-img-default");
  return h("svg", {
    class: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152"
  }, [h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [h("g", {
    transform: "translate(24 31.67)"
  }, [h("ellipse", {
    class: "".concat(r, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }, null), h("path", {
    class: "".concat(r, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }, null), h("path", {
    class: "".concat(r, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }, null), h("path", {
    class: "".concat(r, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }, null), h("path", {
    class: "".concat(r, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  }, null)]), h("path", {
    class: "".concat(r, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }, null), h("g", {
    class: "".concat(r, "-g"),
    transform: "translate(149.65 15.383)"
  }, [h("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }, null), h("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }, null)])])]);
};
Pr.PRESENTED_IMAGE_DEFAULT = !0;
const Co = Pr;
var Er = function() {
  var t = J("empty", {}), n = t.getPrefixCls, r = n("empty-img-simple");
  return h("svg", {
    class: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41"
  }, [h("g", {
    transform: "translate(0 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [h("ellipse", {
    class: "".concat(r, "-ellipse"),
    fill: "#F5F5F5",
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }, null), h("g", {
    class: "".concat(r, "-g"),
    "fill-rule": "nonzero",
    stroke: "#D9D9D9"
  }, [h("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }, null), h("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: "#FAFAFA",
    class: "".concat(r, "-path")
  }, null)])])]);
};
Er.PRESENTED_IMAGE_SIMPLE = !0;
const xo = Er;
function Mn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tr(e, t, n) {
  return t && Mn(e.prototype, t), n && Mn(e, n), e;
}
function pt() {
  return (pt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Ar(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function jr(e, t) {
  if (e == null)
    return {};
  var n, r, a = {}, o = Object.keys(e);
  for (r = 0; r < o.length; r++)
    t.indexOf(n = o[r]) >= 0 || (a[n] = e[n]);
  return a;
}
function Nn(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var $r = Object.prototype, Ir = $r.toString, wo = $r.hasOwnProperty, Mr = /^\s*function (\w+)/;
function Fn(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(Mr);
    return r ? r[1] : "";
  }
  return "";
}
var Pe = function(e) {
  var t, n;
  return Nn(e) !== !1 && typeof (t = e.constructor) == "function" && Nn(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, Nr = function(e) {
  return e;
}, q = Nr;
if (process.env.NODE_ENV !== "production") {
  var _o = typeof console < "u";
  q = _o ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : Nr;
}
var tt = function(e, t) {
  return wo.call(e, t);
}, Oo = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Ne = Array.isArray || function(e) {
  return Ir.call(e) === "[object Array]";
}, Fe = function(e) {
  return Ir.call(e) === "[object Function]";
}, yt = function(e) {
  return Pe(e) && tt(e, "_vueTypes_name");
}, Fr = function(e) {
  return Pe(e) && (tt(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return tt(e, t);
  }));
};
function un(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Te(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var a = !0, o = "";
  r = Pe(e) ? e : { type: e };
  var l = yt(r) ? r._vueTypes_name + " - " : "";
  if (Fr(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return a;
    Ne(r.type) ? (a = r.type.some(function(c) {
      return Te(c, t, !0) === !0;
    }), o = r.type.map(function(c) {
      return Fn(c);
    }).join(" or ")) : a = (o = Fn(r)) === "Array" ? Ne(t) : o === "Object" ? Pe(t) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(c) {
      if (c == null)
        return "";
      var v = c.constructor.toString().match(Mr);
      return v ? v[1] : "";
    }(t) === o : t instanceof r.type;
  }
  if (!a) {
    var i = l + 'value "' + t + '" should be of type "' + o + '"';
    return n === !1 ? (q(i), !1) : i;
  }
  if (tt(r, "validator") && Fe(r.validator)) {
    var f = q, u = [];
    if (q = function(c) {
      u.push(c);
    }, a = r.validator(t), q = f, !a) {
      var d = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, n === !1 ? (q(d), a) : d;
    }
  }
  return a;
}
function ne(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(a) {
    return a !== void 0 || this.default ? Fe(a) || Te(this, a, !0) === !0 ? (this.default = Ne(a) ? function() {
      return [].concat(a);
    } : Pe(a) ? function() {
      return Object.assign({}, a);
    } : a, this) : (q(this._vueTypes_name + ' - invalid default value: "' + a + '"'), this) : this;
  } } }), r = n.validator;
  return Fe(r) && (n.validator = un(r, n)), n;
}
function ve(e, t) {
  var n = ne(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return Fe(this.validator) && q(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = un(r, this), this;
  } });
}
function Ln(e, t, n) {
  var r, a, o = (r = t, a = {}, Object.getOwnPropertyNames(r).forEach(function(c) {
    a[c] = Object.getOwnPropertyDescriptor(r, c);
  }), Object.defineProperties({}, a));
  if (o._vueTypes_name = e, !Pe(n))
    return o;
  var l, i, f = n.validator, u = jr(n, ["validator"]);
  if (Fe(f)) {
    var d = o.validator;
    d && (d = (i = (l = d).__original) !== null && i !== void 0 ? i : l), o.validator = un(d ? function(c) {
      return d.call(this, c) && f.call(this, c);
    } : f, o);
  }
  return Object.assign(o, u);
}
function _t(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var So = function() {
  return ve("any", {});
}, ko = function() {
  return ve("function", { type: Function });
}, Po = function() {
  return ve("boolean", { type: Boolean });
}, Eo = function() {
  return ve("string", { type: String });
}, To = function() {
  return ve("number", { type: Number });
}, Ao = function() {
  return ve("array", { type: Array });
}, jo = function() {
  return ve("object", { type: Object });
}, $o = function() {
  return ne("integer", { type: Number, validator: function(e) {
    return Oo(e);
  } });
}, Io = function() {
  return ne("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Mo(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ne(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || q(this._vueTypes_name + " - " + t), r;
  } });
}
function No(e) {
  if (!Ne(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, a) {
    if (a != null) {
      var o = a.constructor;
      r.indexOf(o) === -1 && r.push(o);
    }
    return r;
  }, []);
  return ne("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var a = e.indexOf(r) !== -1;
    return a || q(t), a;
  } });
}
function Fo(e) {
  if (!Ne(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var a = e[r];
    if (Fr(a)) {
      if (yt(a) && a._vueTypes_name === "oneOf") {
        n = n.concat(a.type);
        continue;
      }
      if (Fe(a.validator) && (t = !0), a.type !== !0 && a.type) {
        n = n.concat(a.type);
        continue;
      }
    }
    n.push(a);
  }
  return n = n.filter(function(o, l) {
    return n.indexOf(o) === l;
  }), ne("oneOfType", t ? { type: n, validator: function(o) {
    var l = [], i = e.some(function(f) {
      var u = Te(yt(f) && f._vueTypes_name === "oneOf" ? f.type || null : f, o, !0);
      return typeof u == "string" && l.push(u), u === !0;
    });
    return i || q("oneOfType - provided value does not match any of the " + l.length + ` passed-in validators:
` + _t(l.join(`
`))), i;
  } } : { type: n });
}
function Lo(e) {
  return ne("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(a) {
      return (n = Te(e, a, !0)) === !0;
    });
    return r || q(`arrayOf - value validation error:
` + _t(n)), r;
  } });
}
function Ro(e) {
  return ne("instanceOf", { type: e });
}
function Bo(e) {
  return ne("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(a) {
      return (n = Te(e, t[a], !0)) === !0;
    });
    return r || q(`objectOf - value validation error:
` + _t(n)), r;
  } });
}
function Vo(e) {
  var t = Object.keys(e), n = t.filter(function(a) {
    var o;
    return !!(!((o = e[a]) === null || o === void 0) && o.required);
  }), r = ne("shape", { type: Object, validator: function(a) {
    var o = this;
    if (!Pe(a))
      return !1;
    var l = Object.keys(a);
    if (n.length > 0 && n.some(function(f) {
      return l.indexOf(f) === -1;
    })) {
      var i = n.filter(function(f) {
        return l.indexOf(f) === -1;
      });
      return q(i.length === 1 ? 'shape - required property "' + i[0] + '" is not defined.' : 'shape - required properties "' + i.join('", "') + '" are not defined.'), !1;
    }
    return l.every(function(f) {
      if (t.indexOf(f) === -1)
        return o._vueTypes_isLoose === !0 || (q('shape - shape definition does not include a "' + f + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = Te(e[f], a[f], !0);
      return typeof u == "string" && q('shape - "' + f + `" property validation error:
 ` + _t(u)), u === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var fe = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (Ne(t))
      return t.forEach(function(c) {
        return n.extend(c);
      }), this;
    var r = t.name, a = t.validate, o = a !== void 0 && a, l = t.getter, i = l !== void 0 && l, f = jr(t, ["name", "validate", "getter"]);
    if (tt(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var u, d = f.type;
    return yt(d) ? (delete f.type, Object.defineProperty(this, r, i ? { get: function() {
      return Ln(r, d, f);
    } } : { value: function() {
      var c, v = Ln(r, d, f);
      return v.validator && (v.validator = (c = v.validator).bind.apply(c, [v].concat([].slice.call(arguments)))), v;
    } })) : (u = i ? { get: function() {
      var c = Object.assign({}, f);
      return o ? ve(r, c) : ne(r, c);
    }, enumerable: !0 } : { value: function() {
      var c, v, s = Object.assign({}, f);
      return c = o ? ve(r, s) : ne(r, s), s.validator && (c.validator = (v = s.validator).bind.apply(v, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, r, u));
  }, Tr(e, null, [{ key: "any", get: function() {
    return So();
  } }, { key: "func", get: function() {
    return ko().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Po().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Eo().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return To().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Ao().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return jo().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return $o().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Io();
  } }]), e;
}();
function Lr(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return Ar(r, n), Tr(r, null, [{ key: "sensibleDefaults", get: function() {
      return pt({}, this.defaults);
    }, set: function(a) {
      this.defaults = a !== !1 ? pt({}, a !== !0 ? a : e) : {};
    } }]), r;
  }(fe)).defaults = pt({}, e), t;
}
fe.defaults = {}, fe.custom = Mo, fe.oneOf = No, fe.instanceOf = Ro, fe.oneOfType = Fo, fe.arrayOf = Lo, fe.objectOf = Bo, fe.shape = Vo, fe.utils = { validate: function(e, t) {
  return Te(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? ve(e, t) : ne(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Ar(t, e), t;
})(Lr());
var Rr = Lr({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Rr.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const me = Rr;
var Do = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Br = h(Co, null, null), Vr = h(xo, null, null), Ve = function(t, n) {
  var r = n.slots, a = r === void 0 ? {} : r, o = n.attrs, l, i = J("empty", t), f = i.direction, u = i.prefixCls, d = u.value, c = T(T({}, t), o), v = c.image, s = v === void 0 ? Br : v, m = c.description, x = m === void 0 ? ((l = a.description) === null || l === void 0 ? void 0 : l.call(a)) || void 0 : m, w = c.imageStyle, O = c.class, g = O === void 0 ? "" : O, _ = Do(c, ["image", "description", "imageStyle", "class"]);
  return h(kr, {
    componentName: "Empty",
    children: function(S) {
      var y, b = typeof x < "u" ? x : S.description, P = typeof b == "string" ? b : "empty", M = null;
      return typeof s == "string" ? M = h("img", {
        alt: P,
        src: s
      }, null) : M = s, h("div", oe({
        class: Q(d, g, (y = {}, j(y, "".concat(d, "-normal"), s === Vr), j(y, "".concat(d, "-rtl"), f.value === "rtl"), y))
      }, _), [h("div", {
        class: "".concat(d, "-image"),
        style: w
      }, [M]), b && h("p", {
        class: "".concat(d, "-description")
      }, [b]), a.default && h("div", {
        class: "".concat(d, "-footer")
      }, [vo(a.default())])]);
    }
  }, null);
};
Ve.displayName = "AEmpty";
Ve.PRESENTED_IMAGE_DEFAULT = Br;
Ve.PRESENTED_IMAGE_SIMPLE = Vr;
Ve.inheritAttrs = !1;
Ve.props = {
  prefixCls: String,
  image: me.any,
  description: me.any,
  imageStyle: {
    type: Object,
    default: void 0
  }
};
const ze = wt(Ve);
var Go = function(t) {
  var n = J("empty", t), r = n.prefixCls, a = function(l) {
    switch (l) {
      case "Table":
      case "List":
        return h(ze, {
          image: ze.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return h(ze, {
          image: ze.PRESENTED_IMAGE_SIMPLE,
          class: "".concat(r.value, "-small")
        }, null);
      default:
        return h(ze, null, null);
    }
  };
  return a(t.componentName);
};
function Dr(e) {
  return h(Go, {
    componentName: e
  }, null);
}
var Rn = {};
function Ho(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function zo(e, t, n) {
  !t && !Rn[n] && (e(!1, n), Rn[n] = !0);
}
function Gr(e, t) {
  zo(Ho, e, t);
}
const Hr = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  Gr(e, "[antdv: ".concat(t, "] ").concat(n));
};
var Dt = "internalMark", ht = H({
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup: function(t, n) {
    var r = n.slots;
    Hr(t.ANT_MARK__ === Dt, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    var a = Ee({
      antLocale: T(T({}, t.locale), {
        exist: !0
      }),
      ANT_MARK__: Dt
    });
    return de("localeData", a), we(function() {
      return t.locale;
    }, function() {
      a.antLocale = T(T({}, t.locale), {
        exist: !0
      });
    }, {
      immediate: !0
    }), function() {
      var o;
      return (o = r.default) === null || o === void 0 ? void 0 : o.call(r);
    };
  }
});
ht.install = function(e) {
  return e.component(ht.name, ht), e;
};
const Uo = wt(ht);
Be("bottomLeft", "bottomRight", "topLeft", "topRight");
var Wo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = T(t ? {
    name: t,
    appear: !0,
    appearActiveClass: "".concat(t),
    appearToClass: "".concat(t, "-appear ").concat(t, "-appear-active"),
    enterFromClass: "".concat(t, "-appear ").concat(t, "-enter ").concat(t, "-appear-prepare ").concat(t, "-enter-prepare"),
    enterActiveClass: "".concat(t),
    enterToClass: "".concat(t, "-enter ").concat(t, "-appear ").concat(t, "-appear-active ").concat(t, "-enter-active"),
    leaveActiveClass: "".concat(t, " ").concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
};
const qo = H({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup: function(t, n) {
    var r = n.attrs, a = n.slots, o, l = N(function() {
      return t.duration === void 0 ? 1.5 : t.duration;
    }), i = function() {
      l.value && (o = setTimeout(function() {
        u();
      }, l.value * 1e3));
    }, f = function() {
      o && (clearTimeout(o), o = null);
    }, u = function(v) {
      v && v.stopPropagation(), f();
      var s = t.onClose, m = t.noticeKey;
      s && s(m);
    }, d = function() {
      f(), i();
    };
    return Le(function() {
      i();
    }), Aa(function() {
      f();
    }), we([l, function() {
      return t.updateMark;
    }, function() {
      return t.visible;
    }], function(c, v) {
      var s = An(c, 3), m = s[0], x = s[1], w = s[2], O = An(v, 3), g = O[0], _ = O[1], k = O[2];
      (m !== g || x !== _ || w !== k && k) && d();
    }, {
      flush: "post"
    }), function() {
      var c, v, s = t.prefixCls, m = t.closable, x = t.closeIcon, w = x === void 0 ? (c = a.closeIcon) === null || c === void 0 ? void 0 : c.call(a) : x, O = t.onClick, g = t.holder, _ = r.class, k = r.style, S = "".concat(s, "-notice"), y = Object.keys(r).reduce(function(P, M) {
        return (M.substr(0, 5) === "data-" || M.substr(0, 5) === "aria-" || M === "role") && (P[M] = r[M]), P;
      }, {}), b = h("div", oe({
        class: Q(S, _, j({}, "".concat(S, "-closable"), m)),
        style: k,
        onMouseenter: f,
        onMouseleave: i,
        onClick: O
      }, y), [h("div", {
        class: "".concat(S, "-content")
      }, [(v = a.default) === null || v === void 0 ? void 0 : v.call(a)]), m ? h("a", {
        tabindex: 0,
        onClick: u,
        class: "".concat(S, "-close")
      }, [w || h("span", {
        class: "".concat(S, "-close-x")
      }, null)]) : null]);
      return g ? h(ja, {
        to: g
      }, {
        default: function() {
          return b;
        }
      }) : b;
    };
  }
});
var Yo = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Bn = 0, Ko = Date.now();
function Vn() {
  var e = Bn;
  return Bn += 1, "rcNotification_".concat(Ko, "_").concat(e);
}
var Gt = H({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon"],
  setup: function(t, n) {
    var r = n.attrs, a = n.expose, o = n.slots, l = /* @__PURE__ */ new Map(), i = Y([]), f = N(function() {
      var c = t.prefixCls, v = t.animation, s = v === void 0 ? "fade" : v, m = t.transitionName;
      return !m && s && (m = "".concat(c, "-").concat(s)), Wo(m);
    }), u = function(v, s) {
      var m = v.key || Vn(), x = T(T({}, v), {
        key: m
      }), w = t.maxCount, O = i.value.map(function(_) {
        return _.notice.key;
      }).indexOf(m), g = i.value.concat();
      O !== -1 ? g.splice(O, 1, {
        notice: x,
        holderCallback: s
      }) : (w && i.value.length >= w && (x.key = g[0].notice.key, x.updateMark = Vn(), x.userPassKey = m, g.shift()), g.push({
        notice: x,
        holderCallback: s
      })), i.value = g;
    }, d = function(v) {
      i.value = i.value.filter(function(s) {
        var m = s.notice, x = m.key, w = m.userPassKey, O = w || x;
        return O !== v;
      });
    };
    return a({
      add: u,
      remove: d,
      notices: i
    }), function() {
      var c, v, s = t.prefixCls, m = t.closeIcon, x = m === void 0 ? (v = o.closeIcon) === null || v === void 0 ? void 0 : v.call(o, {
        prefixCls: s
      }) : m, w = i.value.map(function(g, _) {
        var k = g.notice, S = g.holderCallback, y = _ === i.value.length - 1 ? k.updateMark : void 0, b = k.key, P = k.userPassKey, M = k.content, V = T(T(T({
          prefixCls: s,
          closeIcon: typeof x == "function" ? x({
            prefixCls: s
          }) : x
        }, k), k.props), {
          key: b,
          noticeKey: P || b,
          updateMark: y,
          onClose: function(U) {
            var C;
            d(U), (C = k.onClose) === null || C === void 0 || C.call(k);
          },
          onClick: k.onClick
        });
        return S ? h("div", {
          key: b,
          class: "".concat(s, "-hook-holder"),
          ref: function(U) {
            typeof b > "u" || (U ? (l.set(b, U), S(U, V)) : l.delete(b));
          }
        }, null) : h(qo, V, {
          default: function() {
            return [typeof M == "function" ? M({
              prefixCls: s
            }) : M];
          }
        });
      }), O = (c = {}, j(c, s, 1), j(c, r.class, !!r.class), c);
      return h("div", {
        class: O,
        style: r.style || {
          top: "65px",
          left: "50%"
        }
      }, [h($a, oe({
        tag: "div"
      }, f.value), {
        default: function() {
          return [w];
        }
      })]);
    };
  }
});
Gt.newInstance = function(t, n) {
  var r = t || {}, a = r.name, o = a === void 0 ? "notification" : a, l = r.getContainer, i = r.appContext, f = r.prefixCls, u = r.rootPrefixCls, d = r.transitionName, c = r.hasTransitionName, v = Yo(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"]), s = document.createElement("div");
  if (l) {
    var m = l();
    m.appendChild(s);
  } else
    document.body.appendChild(s);
  var x = H({
    name: "NotificationWrapper",
    setup: function(g, _) {
      var k = _.attrs, S = Y();
      return Le(function() {
        n({
          notice: function(b) {
            var P;
            (P = S.value) === null || P === void 0 || P.add(b);
          },
          removeNotice: function(b) {
            var P;
            (P = S.value) === null || P === void 0 || P.remove(b);
          },
          destroy: function() {
            Pn(null, s), s.parentNode && s.parentNode.removeChild(s);
          },
          component: S
        });
      }), function() {
        var y = re, b = y.getPrefixCls(o, f), P = y.getRootPrefixCls(u, b), M = c ? d : "".concat(P, "-").concat(d);
        return h(Ke, oe(oe({}, y), {}, {
          notUpdateGlobalConfig: !0,
          prefixCls: P
        }), {
          default: function() {
            return [h(Gt, oe(oe({
              ref: S
            }, k), {}, {
              prefixCls: b,
              transitionName: M
            }), null)];
          }
        });
      };
    }
  }), w = h(x, v);
  w.appContext = i || w.appContext, Pn(w, s);
};
const zr = Gt;
var Qo = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Jo = Qo;
function z(e, t) {
  Xo(e) && (e = "100%");
  var n = Zo(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ot(e) {
  return Math.min(1, Math.max(0, e));
}
function Xo(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zo(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ur(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function it(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Se(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ei(e, t, n) {
  return {
    r: z(e, 255) * 255,
    g: z(t, 255) * 255,
    b: z(n, 255) * 255
  };
}
function Dn(e, t, n) {
  e = z(e, 255), t = z(t, 255), n = z(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, l = 0, i = (r + a) / 2;
  if (r === a)
    l = 0, o = 0;
  else {
    var f = r - a;
    switch (l = i > 0.5 ? f / (2 - r - a) : f / (r + a), r) {
      case e:
        o = (t - n) / f + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / f + 2;
        break;
      case n:
        o = (e - t) / f + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, l: i };
}
function kt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ti(e, t, n) {
  var r, a, o;
  if (e = z(e, 360), t = z(t, 100), n = z(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var l = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - l;
    r = kt(i, l, e + 1 / 3), a = kt(i, l, e), o = kt(i, l, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Ht(e, t, n) {
  e = z(e, 255), t = z(t, 255), n = z(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, l = r, i = r - a, f = r === 0 ? 0 : i / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / i + 2;
        break;
      case n:
        o = (e - t) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: f, v: l };
}
function ni(e, t, n) {
  e = z(e, 360) * 6, t = z(t, 100), n = z(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), l = n * (1 - a * t), i = n * (1 - (1 - a) * t), f = r % 6, u = [n, l, o, o, i, n][f], d = [i, n, n, l, o, o][f], c = [o, o, i, n, n, l][f];
  return { r: u * 255, g: d * 255, b: c * 255 };
}
function zt(e, t, n, r) {
  var a = [
    Se(Math.round(e).toString(16)),
    Se(Math.round(t).toString(16)),
    Se(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function ri(e, t, n, r, a) {
  var o = [
    Se(Math.round(e).toString(16)),
    Se(Math.round(t).toString(16)),
    Se(Math.round(n).toString(16)),
    Se(ai(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function ai(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Gn(e) {
  return Z(e) / 255;
}
function Z(e) {
  return parseInt(e, 16);
}
function oi(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Ut = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Ae(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, l = !1, i = !1;
  return typeof e == "string" && (e = ci(e)), typeof e == "object" && (pe(e.r) && pe(e.g) && pe(e.b) ? (t = ei(e.r, e.g, e.b), l = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : pe(e.h) && pe(e.s) && pe(e.v) ? (r = it(e.s), a = it(e.v), t = ni(e.h, r, a), l = !0, i = "hsv") : pe(e.h) && pe(e.s) && pe(e.l) && (r = it(e.s), o = it(e.l), t = ti(e.h, r, o), l = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ur(n), {
    ok: l,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ii = "[-\\+]?\\d+%?", li = "[-\\+]?\\d*\\.\\d+%?", Ce = "(?:".concat(li, ")|(?:").concat(ii, ")"), Pt = "[\\s|\\(]+(".concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")\\s*\\)?"), Et = "[\\s|\\(]+(".concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")[,|\\s]+(").concat(Ce, ")\\s*\\)?"), le = {
  CSS_UNIT: new RegExp(Ce),
  rgb: new RegExp("rgb" + Pt),
  rgba: new RegExp("rgba" + Et),
  hsl: new RegExp("hsl" + Pt),
  hsla: new RegExp("hsla" + Et),
  hsv: new RegExp("hsv" + Pt),
  hsva: new RegExp("hsva" + Et),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ci(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Ut[e])
    e = Ut[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = le.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = le.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = le.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = le.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = le.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = le.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = le.hex8.exec(e), n ? {
    r: Z(n[1]),
    g: Z(n[2]),
    b: Z(n[3]),
    a: Gn(n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex6.exec(e), n ? {
    r: Z(n[1]),
    g: Z(n[2]),
    b: Z(n[3]),
    format: t ? "name" : "hex"
  } : (n = le.hex4.exec(e), n ? {
    r: Z(n[1] + n[1]),
    g: Z(n[2] + n[2]),
    b: Z(n[3] + n[3]),
    a: Gn(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex3.exec(e), n ? {
    r: Z(n[1] + n[1]),
    g: Z(n[2] + n[2]),
    b: Z(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function pe(e) {
  return Boolean(le.CSS_UNIT.exec(String(e)));
}
var Tt = function() {
  function e(t, n) {
    t === void 0 && (t = ""), n === void 0 && (n = {});
    var r;
    if (t instanceof e)
      return t;
    typeof t == "number" && (t = oi(t)), this.originalInput = t;
    var a = Ae(t);
    this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
  }
  return e.prototype.isDark = function() {
    return this.getBrightness() < 128;
  }, e.prototype.isLight = function() {
    return !this.isDark();
  }, e.prototype.getBrightness = function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }, e.prototype.getLuminance = function() {
    var t = this.toRgb(), n, r, a, o = t.r / 255, l = t.g / 255, i = t.b / 255;
    return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), i <= 0.03928 ? a = i / 12.92 : a = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
  }, e.prototype.getAlpha = function() {
    return this.a;
  }, e.prototype.setAlpha = function(t) {
    return this.a = Ur(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }, e.prototype.toHsv = function() {
    var t = Ht(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }, e.prototype.toHsvString = function() {
    var t = Ht(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHsl = function() {
    var t = Dn(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }, e.prototype.toHslString = function() {
    var t = Dn(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
  }, e.prototype.toHex = function(t) {
    return t === void 0 && (t = !1), zt(this.r, this.g, this.b, t);
  }, e.prototype.toHexString = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex(t);
  }, e.prototype.toHex8 = function(t) {
    return t === void 0 && (t = !1), ri(this.r, this.g, this.b, this.a, t);
  }, e.prototype.toHex8String = function(t) {
    return t === void 0 && (t = !1), "#" + this.toHex8(t);
  }, e.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }, e.prototype.toRgbString = function() {
    var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
  }, e.prototype.toPercentageRgb = function() {
    var t = function(n) {
      return "".concat(Math.round(z(n, 255) * 100), "%");
    };
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }, e.prototype.toPercentageRgbString = function() {
    var t = function(n) {
      return Math.round(z(n, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
  }, e.prototype.toName = function() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    for (var t = "#" + zt(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Ut); n < r.length; n++) {
      var a = r[n], o = a[0], l = a[1];
      if (t === l)
        return o;
    }
    return !1;
  }, e.prototype.toString = function(t) {
    var n = Boolean(t);
    t = t != null ? t : this.format;
    var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
    return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  }, e.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }, e.prototype.clone = function() {
    return new e(this.toString());
  }, e.prototype.lighten = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.l += t / 100, n.l = ot(n.l), new e(n);
  }, e.prototype.brighten = function(t) {
    t === void 0 && (t = 10);
    var n = this.toRgb();
    return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
  }, e.prototype.darken = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.l -= t / 100, n.l = ot(n.l), new e(n);
  }, e.prototype.tint = function(t) {
    return t === void 0 && (t = 10), this.mix("white", t);
  }, e.prototype.shade = function(t) {
    return t === void 0 && (t = 10), this.mix("black", t);
  }, e.prototype.desaturate = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.s -= t / 100, n.s = ot(n.s), new e(n);
  }, e.prototype.saturate = function(t) {
    t === void 0 && (t = 10);
    var n = this.toHsl();
    return n.s += t / 100, n.s = ot(n.s), new e(n);
  }, e.prototype.greyscale = function() {
    return this.desaturate(100);
  }, e.prototype.spin = function(t) {
    var n = this.toHsl(), r = (n.h + t) % 360;
    return n.h = r < 0 ? 360 + r : r, new e(n);
  }, e.prototype.mix = function(t, n) {
    n === void 0 && (n = 50);
    var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, l = {
      r: (a.r - r.r) * o + r.r,
      g: (a.g - r.g) * o + r.g,
      b: (a.b - r.b) * o + r.b,
      a: (a.a - r.a) * o + r.a
    };
    return new e(l);
  }, e.prototype.analogous = function(t, n) {
    t === void 0 && (t = 6), n === void 0 && (n = 30);
    var r = this.toHsl(), a = 360 / n, o = [this];
    for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
      r.h = (r.h + a) % 360, o.push(new e(r));
    return o;
  }, e.prototype.complement = function() {
    var t = this.toHsl();
    return t.h = (t.h + 180) % 360, new e(t);
  }, e.prototype.monochromatic = function(t) {
    t === void 0 && (t = 6);
    for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, l = [], i = 1 / t; t--; )
      l.push(new e({ h: r, s: a, v: o })), o = (o + i) % 1;
    return l;
  }, e.prototype.splitcomplement = function() {
    var t = this.toHsl(), n = t.h;
    return [
      this,
      new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
      new e({ h: (n + 216) % 360, s: t.s, l: t.l })
    ];
  }, e.prototype.onBackground = function(t) {
    var n = this.toRgb(), r = new e(t).toRgb();
    return new e({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    });
  }, e.prototype.triad = function() {
    return this.polyad(3);
  }, e.prototype.tetrad = function() {
    return this.polyad(4);
  }, e.prototype.polyad = function(t) {
    for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, l = 1; l < t; l++)
      a.push(new e({ h: (r + l * o) % 360, s: n.s, l: n.l }));
    return a;
  }, e.prototype.equals = function(t) {
    return this.toRgbString() === new e(t).toRgbString();
  }, e;
}(), lt = 2, Hn = 0.16, ui = 0.05, si = 0.05, fi = 0.15, Wr = 5, qr = 4, di = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function zn(e) {
  var t = e.r, n = e.g, r = e.b, a = Ht(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function ct(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(zt(t, n, r, !1));
}
function vi(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function Un(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - lt * t : Math.round(e.h) + lt * t : r = n ? Math.round(e.h) + lt * t : Math.round(e.h) - lt * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Wn(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Hn * t : t === qr ? r = e.s + Hn : r = e.s + ui * t, r > 1 && (r = 1), n && t === Wr && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function qn(e, t, n) {
  var r;
  return n ? r = e.v + si * t : r = e.v - fi * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function nt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Ae(e), a = Wr; a > 0; a -= 1) {
    var o = zn(r), l = ct(Ae({
      h: Un(o, a, !0),
      s: Wn(o, a, !0),
      v: qn(o, a, !0)
    }));
    n.push(l);
  }
  n.push(ct(r));
  for (var i = 1; i <= qr; i += 1) {
    var f = zn(r), u = ct(Ae({
      h: Un(f, i),
      s: Wn(f, i),
      v: qn(f, i)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? di.map(function(d) {
    var c = d.index, v = d.opacity, s = ct(vi(Ae(t.backgroundColor || "#141414"), Ae(n[c]), v * 100));
    return s;
  }) : n;
}
var At = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, jt = {}, $t = {};
Object.keys(At).forEach(function(e) {
  jt[e] = nt(At[e]), jt[e].primary = jt[e][5], $t[e] = nt(At[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), $t[e].primary = $t[e][5];
});
var Yn = [], Ue = [], pi = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function hi() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function mi(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(pi);
  var n = t.prepend === !0 ? "prepend" : "append", r = t.container !== void 0 ? t.container : document.querySelector("head"), a = Yn.indexOf(r);
  a === -1 && (a = Yn.push(r) - 1, Ue[a] = {});
  var o;
  return Ue[a] !== void 0 && Ue[a][n] !== void 0 ? o = Ue[a][n] : (o = Ue[a][n] = hi(), n === "prepend" ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), o.styleSheet ? o.styleSheet.cssText += e : o.textContent += e, o;
}
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      gi(e, a, n[a]);
    });
  }
  return e;
}
function gi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yi(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function bi(e, t) {
  yi(e, "[@ant-design/icons-vue] ".concat(t));
}
function Qn(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Wt(e, t, n) {
  return n ? En(e.tag, Kn({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, a) {
    return Wt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : En(e.tag, Kn({
    key: t
  }, e.attrs), (e.children || []).map(function(r, a) {
    return Wt(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Yr(e) {
  return nt(e)[0];
}
function Kr(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Ci = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Jn = !1, xi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ci;
  on(function() {
    Jn || (typeof window < "u" && window.document && window.document.documentElement && mi(t, {
      prepend: !0
    }), Jn = !0);
  });
}, wi = ["icon", "primaryColor", "secondaryColor"];
function _i(e, t) {
  if (e == null)
    return {};
  var n = Oi(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Oi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Si(e, a, n[a]);
    });
  }
  return e;
}
function Si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ye = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ki(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ye.primaryColor = t, Ye.secondaryColor = n || Yr(t), Ye.calculated = !!n;
}
function Pi() {
  return mt({}, Ye);
}
var De = function(t, n) {
  var r = mt({}, t, n.attrs), a = r.icon, o = r.primaryColor, l = r.secondaryColor, i = _i(r, wi), f = Ye;
  if (o && (f = {
    primaryColor: o,
    secondaryColor: l || Yr(o)
  }), xi(), bi(Qn(a), "icon should be icon definiton, but got ".concat(a)), !Qn(a))
    return null;
  var u = a;
  return u && typeof u.icon == "function" && (u = mt({}, u, {
    icon: u.icon(f.primaryColor, f.secondaryColor)
  })), Wt(u.icon, "svg-".concat(u.name), mt({}, i, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
De.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
De.inheritAttrs = !1;
De.displayName = "IconBase";
De.getTwoToneColors = Pi;
De.setTwoToneColors = ki;
const sn = De;
function Ei(e, t) {
  return $i(e) || ji(e, t) || Ai(e, t) || Ti();
}
function Ti() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ai(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Xn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xn(e, t);
  }
}
function Xn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ji(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, l, i;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function $i(e) {
  if (Array.isArray(e))
    return e;
}
function Qr(e) {
  var t = Kr(e), n = Ei(t, 2), r = n[0], a = n[1];
  return sn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Ii() {
  var e = sn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Mi = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ni(e, t) {
  return Bi(e) || Ri(e, t) || Li(e, t) || Fi();
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Li(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Zn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Zn(e, t);
  }
}
function Zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ri(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, l, i;
    try {
      for (n = n.call(e); !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); a = !0)
        ;
    } catch (f) {
      o = !0, i = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Bi(e) {
  if (Array.isArray(e))
    return e;
}
function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      qt(e, a, n[a]);
    });
  }
  return e;
}
function qt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vi(e, t) {
  if (e == null)
    return {};
  var n = Di(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function Di(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
Qr("#1890ff");
var Ge = function(t, n) {
  var r, a = er({}, t, n.attrs), o = a.class, l = a.icon, i = a.spin, f = a.rotate, u = a.tabindex, d = a.twoToneColor, c = a.onClick, v = Vi(a, Mi), s = (r = {
    anticon: !0
  }, qt(r, "anticon-".concat(l.name), Boolean(l.name)), qt(r, o, o), r), m = i === "" || !!i || l.name === "loading" ? "anticon-spin" : "", x = u;
  x === void 0 && c && (x = -1, v.tabindex = x);
  var w = f ? {
    msTransform: "rotate(".concat(f, "deg)"),
    transform: "rotate(".concat(f, "deg)")
  } : void 0, O = Kr(d), g = Ni(O, 2), _ = g[0], k = g[1];
  return h("span", er({
    role: "img",
    "aria-label": l.name
  }, v, {
    onClick: c,
    class: s
  }), [h(sn, {
    class: m,
    icon: l,
    primaryColor: _,
    secondaryColor: k,
    style: w
  }, null)]);
};
Ge.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Ge.displayName = "AntdIcon";
Ge.inheritAttrs = !1;
Ge.getTwoToneColor = Ii;
Ge.setTwoToneColor = Qr;
const ce = Ge;
function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Gi(e, a, n[a]);
    });
  }
  return e;
}
function Gi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fn = function(t, n) {
  var r = tr({}, t, n.attrs);
  return h(ce, tr({}, r, {
    icon: Jo
  }), null);
};
fn.displayName = "LoadingOutlined";
fn.inheritAttrs = !1;
const Hi = fn;
var zi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const Ui = zi;
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Wi(e, a, n[a]);
    });
  }
  return e;
}
function Wi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dn = function(t, n) {
  var r = nr({}, t, n.attrs);
  return h(ce, nr({}, r, {
    icon: Ui
  }), null);
};
dn.displayName = "ExclamationCircleFilled";
dn.inheritAttrs = !1;
const qi = dn;
var Yi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Ki = Yi;
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Qi(e, a, n[a]);
    });
  }
  return e;
}
function Qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vn = function(t, n) {
  var r = rr({}, t, n.attrs);
  return h(ce, rr({}, r, {
    icon: Ki
  }), null);
};
vn.displayName = "CloseCircleFilled";
vn.inheritAttrs = !1;
const Ji = vn;
var Xi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Zi = Xi;
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      el(e, a, n[a]);
    });
  }
  return e;
}
function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pn = function(t, n) {
  var r = ar({}, t, n.attrs);
  return h(ce, ar({}, r, {
    icon: Zi
  }), null);
};
pn.displayName = "CheckCircleFilled";
pn.inheritAttrs = !1;
const tl = pn;
var nl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const rl = nl;
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      al(e, a, n[a]);
    });
  }
  return e;
}
function al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hn = function(t, n) {
  var r = or({}, t, n.attrs);
  return h(ce, or({}, r, {
    icon: rl
  }), null);
};
hn.displayName = "InfoCircleFilled";
hn.inheritAttrs = !1;
const ol = hn;
var Jr = 3, Xr, K, il = 1, Zr = "", ea = "move-up", ta = !1, na = function() {
  return document.body;
}, ra, aa = !1;
function ll() {
  return il++;
}
function cl(e) {
  e.top !== void 0 && (Xr = e.top, K = null), e.duration !== void 0 && (Jr = e.duration), e.prefixCls !== void 0 && (Zr = e.prefixCls), e.getContainer !== void 0 && (na = e.getContainer, K = null), e.transitionName !== void 0 && (ea = e.transitionName, K = null, ta = !0), e.maxCount !== void 0 && (ra = e.maxCount, K = null), e.rtl !== void 0 && (aa = e.rtl);
}
function ul(e, t) {
  if (K) {
    t(K);
    return;
  }
  zr.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Zr,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: ea,
    hasTransitionName: ta,
    style: {
      top: Xr
    },
    getContainer: na || e.getPopupContainer,
    maxCount: ra,
    name: "message"
  }, function(n) {
    if (K) {
      t(K);
      return;
    }
    K = n, t(n);
  });
}
var sl = {
  info: ol,
  success: tl,
  error: Ji,
  warning: qi,
  loading: Hi
};
function fl(e) {
  var t = e.duration !== void 0 ? e.duration : Jr, n = e.key || ll(), r = new Promise(function(o) {
    var l = function() {
      return typeof e.onClose == "function" && e.onClose(), o(!0);
    };
    ul(e, function(i) {
      i.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: function(u) {
          var d, c = u.prefixCls, v = sl[e.type], s = v ? h(v, null, null) : "", m = Q("".concat(c, "-custom-content"), (d = {}, j(d, "".concat(c, "-").concat(e.type), e.type), j(d, "".concat(c, "-rtl"), aa === !0), d));
          return h("div", {
            class: m
          }, [typeof e.icon == "function" ? e.icon() : e.icon || s, h("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: l,
        onClick: e.onClick
      });
    });
  }), a = function() {
    K && K.removeNotice(n);
  };
  return a.then = function(o, l) {
    return r.then(o, l);
  }, a.promise = r, a;
}
function dl(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var bt = {
  open: fl,
  config: cl,
  destroy: function(t) {
    if (K)
      if (t) {
        var n = K, r = n.removeNotice;
        r(t);
      } else {
        var a = K, o = a.destroy;
        o(), K = null;
      }
  }
};
function vl(e, t) {
  e[t] = function(n, r, a) {
    return dl(n) ? e.open(T(T({}, n), {
      type: t
    })) : (typeof r == "function" && (a = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: a
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  return vl(bt, e);
});
bt.warn = bt.warning;
const pl = bt;
var oa = { exports: {} }, ia = { exports: {} };
(function(e) {
  function t(n) {
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ia);
(function(e) {
  var t = ia.exports.default;
  function n() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    e.exports = n = function() {
      return r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports;
    var r = {}, a = Object.prototype, o = a.hasOwnProperty, l = typeof Symbol == "function" ? Symbol : {}, i = l.iterator || "@@iterator", f = l.asyncIterator || "@@asyncIterator", u = l.toStringTag || "@@toStringTag";
    function d(C, p, E) {
      return Object.defineProperty(C, p, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), C[p];
    }
    try {
      d({}, "");
    } catch {
      d = function(E, A, $) {
        return E[A] = $;
      };
    }
    function c(C, p, E, A) {
      var $ = p && p.prototype instanceof m ? p : m, I = Object.create($.prototype), R = new V(A || []);
      return I._invoke = function(ie, ue, L) {
        var W = "suspendedStart";
        return function(se, Sn) {
          if (W === "executing")
            throw new Error("Generator is already running");
          if (W === "completed") {
            if (se === "throw")
              throw Sn;
            return U();
          }
          for (L.method = se, L.arg = Sn; ; ) {
            var kn = L.delegate;
            if (kn) {
              var St = b(kn, L);
              if (St) {
                if (St === s)
                  continue;
                return St;
              }
            }
            if (L.method === "next")
              L.sent = L._sent = L.arg;
            else if (L.method === "throw") {
              if (W === "suspendedStart")
                throw W = "completed", L.arg;
              L.dispatchException(L.arg);
            } else
              L.method === "return" && L.abrupt("return", L.arg);
            W = "executing";
            var He = v(ie, ue, L);
            if (He.type === "normal") {
              if (W = L.done ? "completed" : "suspendedYield", He.arg === s)
                continue;
              return {
                value: He.arg,
                done: L.done
              };
            }
            He.type === "throw" && (W = "completed", L.method = "throw", L.arg = He.arg);
          }
        };
      }(C, E, R), I;
    }
    function v(C, p, E) {
      try {
        return {
          type: "normal",
          arg: C.call(p, E)
        };
      } catch (A) {
        return {
          type: "throw",
          arg: A
        };
      }
    }
    r.wrap = c;
    var s = {};
    function m() {
    }
    function x() {
    }
    function w() {
    }
    var O = {};
    d(O, i, function() {
      return this;
    });
    var g = Object.getPrototypeOf, _ = g && g(g(G([])));
    _ && _ !== a && o.call(_, i) && (O = _);
    var k = w.prototype = m.prototype = Object.create(O);
    function S(C) {
      ["next", "throw", "return"].forEach(function(p) {
        d(C, p, function(E) {
          return this._invoke(p, E);
        });
      });
    }
    function y(C, p) {
      function E($, I, R, ie) {
        var ue = v(C[$], C, I);
        if (ue.type !== "throw") {
          var L = ue.arg, W = L.value;
          return W && t(W) == "object" && o.call(W, "__await") ? p.resolve(W.__await).then(function(se) {
            E("next", se, R, ie);
          }, function(se) {
            E("throw", se, R, ie);
          }) : p.resolve(W).then(function(se) {
            L.value = se, R(L);
          }, function(se) {
            return E("throw", se, R, ie);
          });
        }
        ie(ue.arg);
      }
      var A;
      this._invoke = function($, I) {
        function R() {
          return new p(function(ie, ue) {
            E($, I, ie, ue);
          });
        }
        return A = A ? A.then(R, R) : R();
      };
    }
    function b(C, p) {
      var E = C.iterator[p.method];
      if (E === void 0) {
        if (p.delegate = null, p.method === "throw") {
          if (C.iterator.return && (p.method = "return", p.arg = void 0, b(C, p), p.method === "throw"))
            return s;
          p.method = "throw", p.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return s;
      }
      var A = v(E, C.iterator, p.arg);
      if (A.type === "throw")
        return p.method = "throw", p.arg = A.arg, p.delegate = null, s;
      var $ = A.arg;
      return $ ? $.done ? (p[C.resultName] = $.value, p.next = C.nextLoc, p.method !== "return" && (p.method = "next", p.arg = void 0), p.delegate = null, s) : $ : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, s);
    }
    function P(C) {
      var p = {
        tryLoc: C[0]
      };
      1 in C && (p.catchLoc = C[1]), 2 in C && (p.finallyLoc = C[2], p.afterLoc = C[3]), this.tryEntries.push(p);
    }
    function M(C) {
      var p = C.completion || {};
      p.type = "normal", delete p.arg, C.completion = p;
    }
    function V(C) {
      this.tryEntries = [{
        tryLoc: "root"
      }], C.forEach(P, this), this.reset(!0);
    }
    function G(C) {
      if (C) {
        var p = C[i];
        if (p)
          return p.call(C);
        if (typeof C.next == "function")
          return C;
        if (!isNaN(C.length)) {
          var E = -1, A = function $() {
            for (; ++E < C.length; )
              if (o.call(C, E))
                return $.value = C[E], $.done = !1, $;
            return $.value = void 0, $.done = !0, $;
          };
          return A.next = A;
        }
      }
      return {
        next: U
      };
    }
    function U() {
      return {
        value: void 0,
        done: !0
      };
    }
    return x.prototype = w, d(k, "constructor", w), d(w, "constructor", x), x.displayName = d(w, u, "GeneratorFunction"), r.isGeneratorFunction = function(C) {
      var p = typeof C == "function" && C.constructor;
      return !!p && (p === x || (p.displayName || p.name) === "GeneratorFunction");
    }, r.mark = function(C) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(C, w) : (C.__proto__ = w, d(C, u, "GeneratorFunction")), C.prototype = Object.create(k), C;
    }, r.awrap = function(C) {
      return {
        __await: C
      };
    }, S(y.prototype), d(y.prototype, f, function() {
      return this;
    }), r.AsyncIterator = y, r.async = function(C, p, E, A, $) {
      $ === void 0 && ($ = Promise);
      var I = new y(c(C, p, E, A), $);
      return r.isGeneratorFunction(p) ? I : I.next().then(function(R) {
        return R.done ? R.value : I.next();
      });
    }, S(k), d(k, u, "Generator"), d(k, i, function() {
      return this;
    }), d(k, "toString", function() {
      return "[object Generator]";
    }), r.keys = function(C) {
      var p = [];
      for (var E in C)
        p.push(E);
      return p.reverse(), function A() {
        for (; p.length; ) {
          var $ = p.pop();
          if ($ in C)
            return A.value = $, A.done = !1, A;
        }
        return A.done = !0, A;
      };
    }, r.values = G, V.prototype = {
      constructor: V,
      reset: function(p) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(M), !p)
          for (var E in this)
            E.charAt(0) === "t" && o.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = void 0);
      },
      stop: function() {
        this.done = !0;
        var p = this.tryEntries[0].completion;
        if (p.type === "throw")
          throw p.arg;
        return this.rval;
      },
      dispatchException: function(p) {
        if (this.done)
          throw p;
        var E = this;
        function A(L, W) {
          return R.type = "throw", R.arg = p, E.next = L, W && (E.method = "next", E.arg = void 0), !!W;
        }
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var I = this.tryEntries[$], R = I.completion;
          if (I.tryLoc === "root")
            return A("end");
          if (I.tryLoc <= this.prev) {
            var ie = o.call(I, "catchLoc"), ue = o.call(I, "finallyLoc");
            if (ie && ue) {
              if (this.prev < I.catchLoc)
                return A(I.catchLoc, !0);
              if (this.prev < I.finallyLoc)
                return A(I.finallyLoc);
            } else if (ie) {
              if (this.prev < I.catchLoc)
                return A(I.catchLoc, !0);
            } else {
              if (!ue)
                throw new Error("try statement without catch or finally");
              if (this.prev < I.finallyLoc)
                return A(I.finallyLoc);
            }
          }
        }
      },
      abrupt: function(p, E) {
        for (var A = this.tryEntries.length - 1; A >= 0; --A) {
          var $ = this.tryEntries[A];
          if ($.tryLoc <= this.prev && o.call($, "finallyLoc") && this.prev < $.finallyLoc) {
            var I = $;
            break;
          }
        }
        I && (p === "break" || p === "continue") && I.tryLoc <= E && E <= I.finallyLoc && (I = null);
        var R = I ? I.completion : {};
        return R.type = p, R.arg = E, I ? (this.method = "next", this.next = I.finallyLoc, s) : this.complete(R);
      },
      complete: function(p, E) {
        if (p.type === "throw")
          throw p.arg;
        return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && E && (this.next = E), s;
      },
      finish: function(p) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var A = this.tryEntries[E];
          if (A.finallyLoc === p)
            return this.complete(A.completion, A.afterLoc), M(A), s;
        }
      },
      catch: function(p) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var A = this.tryEntries[E];
          if (A.tryLoc === p) {
            var $ = A.completion;
            if ($.type === "throw") {
              var I = $.arg;
              M(A);
            }
            return I;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(p, E, A) {
        return this.delegate = {
          iterator: G(p),
          resultName: E,
          nextLoc: A
        }, this.method === "next" && (this.arg = void 0), s;
      }
    }, r;
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(oa);
var It = oa.exports();
try {
  regeneratorRuntime = It;
} catch {
  typeof globalThis == "object" ? globalThis.regeneratorRuntime = It : Function("r", "regeneratorRuntime = r")(It);
}
var hl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const ml = hl;
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      gl(e, a, n[a]);
    });
  }
  return e;
}
function gl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mn = function(t, n) {
  var r = ir({}, t, n.attrs);
  return h(ce, ir({}, r, {
    icon: ml
  }), null);
};
mn.displayName = "CheckCircleOutlined";
mn.inheritAttrs = !1;
const yl = mn;
var bl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const Cl = bl;
function lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      xl(e, a, n[a]);
    });
  }
  return e;
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gn = function(t, n) {
  var r = lr({}, t, n.attrs);
  return h(ce, lr({}, r, {
    icon: Cl
  }), null);
};
gn.displayName = "InfoCircleOutlined";
gn.inheritAttrs = !1;
const wl = gn;
var _l = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { tag: "path", attrs: { d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "close-circle", theme: "outlined" };
const Ol = _l;
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Sl(e, a, n[a]);
    });
  }
  return e;
}
function Sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yn = function(t, n) {
  var r = cr({}, t, n.attrs);
  return h(ce, cr({}, r, {
    icon: Ol
  }), null);
};
yn.displayName = "CloseCircleOutlined";
yn.inheritAttrs = !1;
const kl = yn;
var Pl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const El = Pl;
function ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Tl(e, a, n[a]);
    });
  }
  return e;
}
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bn = function(t, n) {
  var r = ur({}, t, n.attrs);
  return h(ce, ur({}, r, {
    icon: El
  }), null);
};
bn.displayName = "ExclamationCircleOutlined";
bn.inheritAttrs = !1;
const Al = bn;
var jl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const $l = jl;
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Il(e, a, n[a]);
    });
  }
  return e;
}
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cn = function(t, n) {
  var r = sr({}, t, n.attrs);
  return h(ce, sr({}, r, {
    icon: $l
  }), null);
};
Cn.displayName = "CloseOutlined";
Cn.inheritAttrs = !1;
const la = Cn;
globalThis && globalThis.__awaiter;
var Oe = {}, ca = 4.5, ua = "24px", sa = "24px", Yt = "", fa = "topRight", da = function() {
  return document.body;
}, va = null, Kt = !1, pa;
function Ml(e) {
  var t = e.duration, n = e.placement, r = e.bottom, a = e.top, o = e.getContainer, l = e.closeIcon, i = e.prefixCls;
  i !== void 0 && (Yt = i), t !== void 0 && (ca = t), n !== void 0 && (fa = n), r !== void 0 && (sa = typeof r == "number" ? "".concat(r, "px") : r), a !== void 0 && (ua = typeof a == "number" ? "".concat(a, "px") : a), o !== void 0 && (da = o), l !== void 0 && (va = l), e.rtl !== void 0 && (Kt = e.rtl), e.maxCount !== void 0 && (pa = e.maxCount);
}
function Nl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ua, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sa, r;
  switch (e) {
    case "topLeft":
      r = {
        left: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: "0px",
        top: t,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      r = {
        left: "0px",
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: "0px",
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function Fl(e, t) {
  var n = e.prefixCls, r = e.placement, a = r === void 0 ? fa : r, o = e.getContainer, l = o === void 0 ? da : o, i = e.top, f = e.bottom, u = e.closeIcon, d = u === void 0 ? va : u, c = e.appContext, v = Xl(), s = v.getPrefixCls, m = s("notification", n || Yt), x = "".concat(m, "-").concat(a, "-").concat(Kt), w = Oe[x];
  if (w) {
    Promise.resolve(w).then(function(g) {
      t(g);
    });
    return;
  }
  var O = Q("".concat(m, "-").concat(a), j({}, "".concat(m, "-rtl"), Kt === !0));
  zr.newInstance({
    name: "notification",
    prefixCls: n || Yt,
    class: O,
    style: Nl(a, i, f),
    appContext: c,
    getContainer: l,
    closeIcon: function(_) {
      var k = _.prefixCls, S = h("span", {
        class: "".concat(k, "-close-x")
      }, [We(d, {}, h(la, {
        class: "".concat(k, "-close-icon")
      }, null))]);
      return S;
    },
    maxCount: pa,
    hasTransitionName: !0
  }, function(g) {
    Oe[x] = g, t(g);
  });
}
var Ll = {
  success: yl,
  info: wl,
  error: kl,
  warning: Al
};
function Rl(e) {
  var t = e.icon, n = e.type, r = e.description, a = e.message, o = e.btn, l = e.duration === void 0 ? ca : e.duration;
  Fl(e, function(i) {
    i.notice({
      content: function(u) {
        var d = u.prefixCls, c = "".concat(d, "-notice"), v = null;
        if (t)
          v = function() {
            return h("span", {
              class: "".concat(c, "-icon")
            }, [We(t)]);
          };
        else if (n) {
          var s = Ll[n];
          v = function() {
            return h(s, {
              class: "".concat(c, "-icon ").concat(c, "-icon-").concat(n)
            }, null);
          };
        }
        return h("div", {
          class: v ? "".concat(c, "-with-icon") : ""
        }, [v && v(), h("div", {
          class: "".concat(c, "-message")
        }, [!r && v ? h("span", {
          class: "".concat(c, "-message-single-line-auto-margin")
        }, null) : null, We(a)]), h("div", {
          class: "".concat(c, "-description")
        }, [We(r)]), o ? h("span", {
          class: "".concat(c, "-btn")
        }, [We(o)]) : null]);
      },
      duration: l,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
var rt = {
  open: Rl,
  close: function(t) {
    Object.keys(Oe).forEach(function(n) {
      return Promise.resolve(Oe[n]).then(function(r) {
        r.removeNotice(t);
      });
    });
  },
  config: Ml,
  destroy: function() {
    Object.keys(Oe).forEach(function(t) {
      Promise.resolve(Oe[t]).then(function(n) {
        n.destroy();
      }), delete Oe[t];
    });
  }
}, Bl = ["success", "info", "warning", "error"];
Bl.forEach(function(e) {
  rt[e] = function(t) {
    return rt.open(T(T({}, t), {
      type: e
    }));
  };
});
rt.warn = rt.warning;
const Vl = rt;
function xn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Dl = "vc-util-key";
function ha() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Dl;
}
function wn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function fr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, r;
  if (!xn())
    return null;
  var a = document.createElement("style");
  !((n = t.csp) === null || n === void 0) && n.nonce && (a.nonce = (r = t.csp) === null || r === void 0 ? void 0 : r.nonce), a.innerHTML = e;
  var o = wn(t), l = o.firstChild;
  return t.prepend && o.prepend ? o.prepend(a) : t.prepend && l ? o.insertBefore(a, l) : o.appendChild(a), a;
}
var Qt = /* @__PURE__ */ new Map();
function Gl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = wn(t);
  return Array.from(Qt.get(n).children).find(function(r) {
    return r.tagName === "STYLE" && r.getAttribute(ha(t)) === e;
  });
}
function Hl(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, o, l = wn(n);
  if (!Qt.has(l)) {
    var i = fr("", n), f = i.parentNode;
    Qt.set(l, f), f.removeChild(i);
  }
  var u = Gl(t, n);
  if (u)
    return ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && u.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce) && (u.nonce = (o = n.csp) === null || o === void 0 ? void 0 : o.nonce), u.innerHTML !== e && (u.innerHTML = e), u;
  var d = fr(e, n);
  return d.setAttribute(ha(n), t), d;
}
const zl = function(e, t, n) {
  Gr(e, "[ant-design-vue: ".concat(t, "] ").concat(n));
};
var Ul = "-ant-".concat(Date.now(), "-").concat(Math.random());
function Wl(e, t) {
  var n = {}, r = function(d, c) {
    var v = d.clone();
    return v = (c == null ? void 0 : c(v)) || v, v.toRgbString();
  }, a = function(d, c) {
    var v = new Tt(d), s = nt(v.toRgbString());
    n["".concat(c, "-color")] = r(v), n["".concat(c, "-color-disabled")] = s[1], n["".concat(c, "-color-hover")] = s[4], n["".concat(c, "-color-active")] = s[7], n["".concat(c, "-color-outline")] = v.clone().setAlpha(0.2).toRgbString(), n["".concat(c, "-color-deprecated-bg")] = s[1], n["".concat(c, "-color-deprecated-border")] = s[3];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    var o = new Tt(t.primaryColor), l = nt(o.toRgbString());
    l.forEach(function(u, d) {
      n["primary-".concat(d + 1)] = u;
    }), n["primary-color-deprecated-l-35"] = r(o, function(u) {
      return u.lighten(35);
    }), n["primary-color-deprecated-l-20"] = r(o, function(u) {
      return u.lighten(20);
    }), n["primary-color-deprecated-t-20"] = r(o, function(u) {
      return u.tint(20);
    }), n["primary-color-deprecated-t-50"] = r(o, function(u) {
      return u.tint(50);
    }), n["primary-color-deprecated-f-12"] = r(o, function(u) {
      return u.setAlpha(u.getAlpha() * 0.12);
    });
    var i = new Tt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(i, function(u) {
      return u.setAlpha(u.getAlpha() * 0.3);
    }), n["primary-color-active-deprecated-d-02"] = r(i, function(u) {
      return u.darken(2);
    });
  }
  t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info");
  var f = Object.keys(n).map(function(u) {
    return "--".concat(e, "-").concat(u, ": ").concat(n[u], ";");
  });
  xn() ? Hl(`
  :root {
    `.concat(f.join(`
`), `
  }
  `), "".concat(Ul, "-dynamic-theme")) : zl(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
var ql = Symbol("GlobalFormContextKey"), Yl = function(t) {
  de(ql, t);
}, Kl = function() {
  return {
    getTargetContainer: {
      type: Function
    },
    getPopupContainer: {
      type: Function
    },
    prefixCls: String,
    getPrefixCls: {
      type: Function
    },
    renderEmpty: {
      type: Function
    },
    transformCellText: {
      type: Function
    },
    csp: {
      type: Object,
      default: void 0
    },
    input: {
      type: Object
    },
    autoInsertSpaceInButton: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    pageHeader: {
      type: Object
    },
    componentSize: {
      type: String
    },
    direction: {
      type: String
    },
    space: {
      type: Object
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: !0
    },
    form: {
      type: Object,
      default: void 0
    },
    notUpdateGlobalConfig: Boolean
  };
}, Ql = "ant";
function Ie() {
  return re.prefixCls || Ql;
}
var Jt = Ee({}), ma = Ee({}), re = Ee({});
at(function() {
  T(re, Jt, ma), re.prefixCls = Ie(), re.getPrefixCls = function(e, t) {
    return t || (e ? "".concat(re.prefixCls, "-").concat(e) : re.prefixCls);
  }, re.getRootPrefixCls = function(e, t) {
    return e || (re.prefixCls ? re.prefixCls : t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : Ie());
  };
});
var Mt, Jl = function(t) {
  Mt && Mt(), Mt = at(function() {
    T(ma, Ee(t));
  }), t.theme && Wl(Ie(), t.theme);
}, Xl = function() {
  return {
    getPrefixCls: function(n, r) {
      return r || (n ? "".concat(Ie(), "-").concat(n) : Ie());
    },
    getRootPrefixCls: function(n, r) {
      return n || (re.prefixCls ? re.prefixCls : r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : Ie());
    }
  };
}, Ke = H({
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Kl(),
  setup: function(t, n) {
    var r = n.slots, a = function(c, v) {
      var s = t.prefixCls, m = s === void 0 ? "ant" : s;
      return v || (c ? "".concat(m, "-").concat(c) : m);
    }, o = function(c) {
      var v = t.renderEmpty || r.renderEmpty || Dr;
      return v(c);
    }, l = function(c, v) {
      var s = t.prefixCls;
      if (v)
        return v;
      var m = s || a("");
      return c ? "".concat(m, "-").concat(c) : m;
    }, i = Ee(T(T({}, t), {
      getPrefixCls: l,
      renderEmpty: o
    }));
    Object.keys(t).forEach(function(d) {
      we(function() {
        return t[d];
      }, function() {
        i[d] = t[d];
      });
    }), t.notUpdateGlobalConfig || (T(Jt, i), we(i, function() {
      T(Jt, i);
    }));
    var f = N(function() {
      var d, c, v = {};
      return t.locale && (v = ((d = t.locale.Form) === null || d === void 0 ? void 0 : d.defaultValidateMessages) || ((c = Vt.Form) === null || c === void 0 ? void 0 : c.defaultValidateMessages) || {}), t.form && t.form.validateMessages && (v = T(T({}, v), t.form.validateMessages)), v;
    });
    Yl({
      validateMessages: f
    }), de("configProvider", i);
    var u = function(c) {
      var v;
      return h(Uo, {
        locale: t.locale || c,
        ANT_MARK__: Dt
      }, {
        default: function() {
          return [(v = r.default) === null || v === void 0 ? void 0 : v.call(r)];
        }
      });
    };
    return at(function() {
      t.direction && (pl.config({
        rtl: t.direction === "rtl"
      }), Vl.config({
        rtl: t.direction === "rtl"
      }));
    }), function() {
      return h(kr, {
        children: function(c, v, s) {
          return u(s);
        }
      }, null);
    };
  }
}), Zl = Ee({
  getPrefixCls: function(t, n) {
    return n || (t ? "ant-".concat(t) : "ant");
  },
  renderEmpty: Dr,
  direction: "ltr"
});
Ke.config = Jl;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
const J = function(e, t) {
  var n = xe("configProvider", Zl), r = N(function() {
    return n.getPrefixCls(e, t.prefixCls);
  }), a = N(function() {
    var g;
    return (g = t.direction) !== null && g !== void 0 ? g : n.direction;
  }), o = N(function() {
    return n.getPrefixCls();
  }), l = N(function() {
    return n.autoInsertSpaceInButton;
  }), i = N(function() {
    return n.renderEmpty;
  }), f = N(function() {
    return n.space;
  }), u = N(function() {
    return n.pageHeader;
  }), d = N(function() {
    return n.form;
  }), c = N(function() {
    return t.getTargetContainer || n.getTargetContainer;
  }), v = N(function() {
    return t.getPopupContainer || n.getPopupContainer;
  }), s = N(function() {
    var g;
    return (g = t.dropdownMatchSelectWidth) !== null && g !== void 0 ? g : n.dropdownMatchSelectWidth;
  }), m = N(function() {
    return (t.virtual === void 0 ? n.virtual !== !1 : t.virtual !== !1) && s.value !== !1;
  }), x = N(function() {
    return t.size || n.componentSize;
  }), w = N(function() {
    var g;
    return t.autocomplete || ((g = n.input) === null || g === void 0 ? void 0 : g.autocomplete);
  }), O = N(function() {
    return n.csp;
  });
  return {
    configProvider: n,
    prefixCls: r,
    direction: a,
    size: x,
    getTargetContainer: c,
    getPopupContainer: v,
    space: f,
    pageHeader: u,
    form: d,
    autoInsertSpaceInButton: l,
    renderEmpty: i,
    virtual: m,
    dropdownMatchSelectWidth: s,
    rootPrefixCls: o,
    getPrefixCls: n.getPrefixCls,
    autocomplete: w,
    csp: O
  };
};
function ec(e, t) {
  for (var n = T({}, e), r = 0; r < t.length; r += 1) {
    var a = t[r];
    delete n[a];
  }
  return n;
}
var Xt = Symbol("ContextProps"), Zt = Symbol("InternalContextProps"), en = {
  id: N(function() {
  }),
  onFieldBlur: function() {
  },
  onFieldChange: function() {
  },
  clearValidate: function() {
  }
}, tn = {
  addFormItemField: function() {
  },
  removeFormItemField: function() {
  }
}, Ot = function() {
  var t = xe(Zt, tn), n = Symbol("FormItemFieldKey"), r = br();
  return t.addFormItemField(n, r.type), Ct(function() {
    t.removeFormItemField(n);
  }), de(Zt, tn), de(Xt, en), xe(Xt, en);
};
H({
  name: "AFormItemRest",
  setup: function(t, n) {
    var r = n.slots;
    return de(Zt, tn), de(Xt, en), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
});
var dr = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], ut = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)"
}, _e = /* @__PURE__ */ new Map(), Nt = -1, st = {}, tc = {
  matchHandlers: {},
  dispatch: function(t) {
    return st = t, _e.forEach(function(n) {
      return n(st);
    }), _e.size >= 1;
  },
  subscribe: function(t) {
    return _e.size || this.register(), Nt += 1, _e.set(Nt, t), t(st), Nt;
  },
  unsubscribe: function(t) {
    _e.delete(t), _e.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(ut).forEach(function(n) {
      var r = ut[n], a = t.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
    }), _e.clear();
  },
  register: function() {
    var t = this;
    Object.keys(ut).forEach(function(n) {
      var r = ut[n], a = function(i) {
        var f = i.matches;
        t.dispatch(T(T({}, st), j({}, n, f)));
      }, o = window.matchMedia(r);
      o.addListener(a), t.matchHandlers[r] = {
        mql: o,
        listener: a
      }, a(o);
    });
  }
};
const vr = tc;
var nc = Be("success", "processing", "error", "default", "warning"), rc = Be("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"), Ft = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
}, Lt = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
}, je = [], $e = [];
function ac() {
  var e = document.createElement("div"), t = e.style;
  "AnimationEvent" in window || (delete Ft.animationstart.animation, delete Lt.animationend.animation), "TransitionEvent" in window || (delete Ft.transitionstart.transition, delete Lt.transitionend.transition);
  function n(r, a) {
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var l = r[o];
        for (var i in l)
          if (i in t) {
            a.push(l[i]);
            break;
          }
      }
  }
  n(Ft, je), n(Lt, $e);
}
typeof window < "u" && typeof document < "u" && ac();
function pr(e, t, n) {
  e.addEventListener(t, n, !1);
}
function hr(e, t, n) {
  e.removeEventListener(t, n, !1);
}
var oc = {
  startEvents: je,
  addStartEventListener: function(t, n) {
    if (je.length === 0) {
      setTimeout(n, 0);
      return;
    }
    je.forEach(function(r) {
      pr(t, r, n);
    });
  },
  removeStartEventListener: function(t, n) {
    je.length !== 0 && je.forEach(function(r) {
      hr(t, r, n);
    });
  },
  endEvents: $e,
  addEndEventListener: function(t, n) {
    if ($e.length === 0) {
      setTimeout(n, 0);
      return;
    }
    $e.forEach(function(r) {
      pr(t, r, n);
    });
  },
  removeEndEventListener: function(t, n) {
    $e.length !== 0 && $e.forEach(function(r) {
      hr(t, r, n);
    });
  }
};
const ft = oc;
var ge;
function mr(e) {
  return process.env.NODE_ENV === "test" ? !1 : !e || e.offsetParent === null;
}
function ic(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
const lc = H({
  name: "Wave",
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function(t, n) {
    var r = n.slots, a = n.expose, o = br(), l = J("", t), i = l.csp, f = l.prefixCls;
    a({
      csp: i
    });
    var u = null, d = null, c = null, v = !1, s = null, m = !1, x = function(y) {
      if (!m) {
        var b = jn(o);
        !y || y.target !== b || v || _(b);
      }
    }, w = function(y) {
      !y || y.animationName !== "fadeEffect" || _(y.target);
    }, O = function() {
      var y = t.insertExtraNode;
      return y ? "".concat(f.value, "-click-animating") : "".concat(f.value, "-click-animating-without-extra-node");
    }, g = function(y, b) {
      var P, M = t.insertExtraNode, V = t.disabled;
      if (!(V || !y || mr(y) || y.className.indexOf("-leave") >= 0)) {
        s = document.createElement("div"), s.className = "".concat(f.value, "-click-animating-node");
        var G = O();
        y.removeAttribute(G), y.setAttribute(G, "true"), ge = ge || document.createElement("style"), b && b !== "#ffffff" && b !== "rgb(255, 255, 255)" && ic(b) && !/rgba\(\d*, \d*, \d*, 0\)/.test(b) && b !== "transparent" && (!((P = i.value) === null || P === void 0) && P.nonce && (ge.nonce = i.value.nonce), s.style.borderColor = b, ge.innerHTML = `
        [`.concat(f.value, "-click-animating-without-extra-node='true']::after, .").concat(f.value, `-click-animating-node {
          --antd-wave-shadow-color: `).concat(b, `;
        }`), document.body.contains(ge) || document.body.appendChild(ge)), M && y.appendChild(s), ft.addStartEventListener(y, x), ft.addEndEventListener(y, w);
      }
    }, _ = function(y) {
      if (!(!y || y === s || !(y instanceof Element))) {
        var b = t.insertExtraNode, P = O();
        y.setAttribute(P, "false"), ge && (ge.innerHTML = ""), b && s && y.contains(s) && y.removeChild(s), ft.removeStartEventListener(y, x), ft.removeEndEventListener(y, w);
      }
    }, k = function(y) {
      if (!(!y || !y.getAttribute || y.getAttribute("disabled") || y.className.indexOf("disabled") >= 0)) {
        var b = function(M) {
          if (!(M.target.tagName === "INPUT" || mr(M.target))) {
            _(y);
            var V = getComputedStyle(y).getPropertyValue("border-top-color") || getComputedStyle(y).getPropertyValue("border-color") || getComputedStyle(y).getPropertyValue("background-color");
            d = setTimeout(function() {
              return g(y, V);
            }, 0), Bt.cancel(c), v = !0, c = Bt(function() {
              v = !1;
            }, 10);
          }
        };
        return y.addEventListener("click", b, !0), {
          cancel: function() {
            y.removeEventListener("click", b, !0);
          }
        };
      }
    };
    return Le(function() {
      on(function() {
        var S = jn(o);
        S.nodeType === 1 && (u = k(S));
      });
    }), Ct(function() {
      u && u.cancel(), clearTimeout(d), m = !0;
    }), function() {
      var S;
      return (S = r.default) === null || S === void 0 ? void 0 : S.call(r)[0];
    };
  }
});
var cc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const uc = cc;
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      sc(e, a, n[a]);
    });
  }
  return e;
}
function sc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _n = function(t, n) {
  var r = gr({}, t, n.attrs);
  return h(ce, gr({}, r, {
    icon: uc
  }), null);
};
_n.displayName = "RightOutlined";
_n.inheritAttrs = !1;
const fc = _n;
var dc = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, vc = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: void 0
  },
  checked: {
    type: [Boolean, Number],
    default: void 0
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: me.any,
  required: Boolean
};
const ga = H({
  name: "Checkbox",
  inheritAttrs: !1,
  props: so(vc, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: !1
  }),
  emits: ["click", "change"],
  setup: function(t, n) {
    var r = n.attrs, a = n.emit, o = n.expose, l = Y(t.checked === void 0 ? t.defaultChecked : t.checked), i = Y();
    we(function() {
      return t.checked;
    }, function() {
      l.value = t.checked;
    }), o({
      focus: function() {
        var v;
        (v = i.value) === null || v === void 0 || v.focus();
      },
      blur: function() {
        var v;
        (v = i.value) === null || v === void 0 || v.blur();
      }
    });
    var f = Y(), u = function(v) {
      if (!t.disabled) {
        t.checked === void 0 && (l.value = v.target.checked), v.shiftKey = f.value;
        var s = {
          target: T(T({}, t), {
            checked: v.target.checked
          }),
          stopPropagation: function() {
            v.stopPropagation();
          },
          preventDefault: function() {
            v.preventDefault();
          },
          nativeEvent: v
        };
        t.checked !== void 0 && (i.value.checked = !!t.checked), a("change", s), f.value = !1;
      }
    }, d = function(v) {
      a("click", v), f.value = v.shiftKey;
    };
    return function() {
      var c, v = t.prefixCls, s = t.name, m = t.id, x = t.type, w = t.disabled, O = t.readonly, g = t.tabindex, _ = t.autofocus, k = t.value, S = t.required, y = dc(t, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"]), b = r.class, P = r.onFocus, M = r.onBlur, V = r.onKeydown, G = r.onKeypress, U = r.onKeyup, C = T(T({}, y), r), p = Object.keys(C).reduce(function($, I) {
        return (I.substr(0, 5) === "aria-" || I.substr(0, 5) === "data-" || I === "role") && ($[I] = C[I]), $;
      }, {}), E = Q(v, b, (c = {}, j(c, "".concat(v, "-checked"), l.value), j(c, "".concat(v, "-disabled"), w), c)), A = T(T({
        name: s,
        id: m,
        type: x,
        readonly: O,
        disabled: w,
        tabindex: g,
        class: "".concat(v, "-input"),
        checked: !!l.value,
        autofocus: _,
        value: k
      }, p), {
        onChange: u,
        onClick: d,
        onFocus: P,
        onBlur: M,
        onKeydown: V,
        onKeypress: G,
        onKeyup: U,
        required: S
      });
      return h("span", {
        class: E
      }, [h("input", oe({
        ref: i
      }, A), null), h("span", {
        class: "".concat(v, "-inner")
      }, null)]);
    };
  }
});
var pc = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, ya = function() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: me.any,
    name: String,
    id: String,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onClick: Function,
    "onUpdate:checked": Function,
    "onUpdate:value": Function
  };
};
const te = H({
  name: "ARadio",
  props: ya(),
  setup: function(t, n) {
    var r = n.emit, a = n.expose, o = n.slots, l = Ot(), i = Y(), f = xe("radioGroupContext", void 0), u = J("radio", t), d = u.prefixCls, c = u.direction, v = function() {
      i.value.focus();
    }, s = function() {
      i.value.blur();
    };
    a({
      focus: v,
      blur: s
    });
    var m = function(O) {
      var g = O.target.checked;
      r("update:checked", g), r("update:value", g), r("change", O), l.onFieldChange();
    }, x = function(O) {
      r("change", O), f && f.onRadioChange && f.onRadioChange(O);
    };
    return function() {
      var w, O = f;
      t.prefixCls;
      var g = t.id, _ = g === void 0 ? l.id.value : g, k = pc(t, ["prefixCls", "id"]), S = T({
        prefixCls: d.value,
        id: _
      }, ec(k, ["onUpdate:checked", "onUpdate:value"]));
      O ? (S.name = O.props.name, S.onChange = x, S.checked = t.value === O.stateValue.value, S.disabled = t.disabled || O.props.disabled) : S.onChange = m;
      var y = Q((w = {}, j(w, "".concat(d.value, "-wrapper"), !0), j(w, "".concat(d.value, "-wrapper-checked"), S.checked), j(w, "".concat(d.value, "-wrapper-disabled"), S.disabled), j(w, "".concat(d.value, "-wrapper-rtl"), c.value === "rtl"), w));
      return h("label", {
        class: y
      }, [h(ga, oe(oe({}, S), {}, {
        type: "radio",
        ref: i
      }), null), o.default && h("span", null, [o.default()])]);
    };
  }
});
var hc = Be("large", "default", "small"), mc = function() {
  return {
    prefixCls: String,
    value: me.any,
    size: me.oneOf(hc),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    name: String,
    buttonStyle: {
      type: String,
      default: "outline"
    },
    id: String,
    optionType: {
      type: String,
      default: "default"
    },
    onChange: Function,
    "onUpdate:value": Function
  };
};
const ba = H({
  name: "ARadioGroup",
  props: mc(),
  setup: function(t, n) {
    var r = n.slots, a = n.emit, o = Ot(), l = J("radio", t), i = l.prefixCls, f = l.direction, u = l.size, d = Y(t.value), c = Y(!1);
    we(function() {
      return t.value;
    }, function(s) {
      d.value = s, c.value = !1;
    });
    var v = function(m) {
      var x = d.value, w = m.target.value;
      "value" in t || (d.value = w), !c.value && w !== x && (c.value = !0, a("update:value", w), a("change", m), o.onFieldChange()), on(function() {
        c.value = !1;
      });
    };
    return de("radioGroupContext", {
      onRadioChange: v,
      stateValue: d,
      props: t
    }), function() {
      var s, m, x = t.options, w = t.optionType, O = t.buttonStyle, g = t.id, _ = g === void 0 ? o.id.value : g, k = "".concat(i.value, "-group"), S = Q(k, "".concat(k, "-").concat(O), (s = {}, j(s, "".concat(k, "-").concat(u.value), u.value), j(s, "".concat(k, "-rtl"), f.value === "rtl"), s)), y = null;
      if (x && x.length > 0) {
        var b = w === "button" ? "".concat(i.value, "-button") : i.value;
        y = x.map(function(P) {
          if (typeof P == "string" || typeof P == "number")
            return h(te, {
              key: P,
              prefixCls: b,
              disabled: t.disabled,
              value: P,
              checked: d.value === P
            }, {
              default: function() {
                return [P];
              }
            });
          var M = P.value, V = P.disabled, G = P.label;
          return h(te, {
            key: "radio-group-value-options-".concat(M),
            prefixCls: b,
            disabled: V || t.disabled,
            value: M,
            checked: d.value === M
          }, {
            default: function() {
              return [G];
            }
          });
        });
      } else
        y = (m = r.default) === null || m === void 0 ? void 0 : m.call(r);
      return h("div", {
        class: S,
        id: _
      }, [y]);
    };
  }
}), gc = H({
  name: "ARadioButton",
  props: ya(),
  setup: function(t, n) {
    var r = n.slots, a = J("radio-button", t), o = a.prefixCls, l = xe("radioGroupContext", void 0);
    return function() {
      var i, f = T(T({}, t), {
        prefixCls: o.value
      });
      return l && (f.onChange = l.onRadioChange, f.checked = f.value === l.stateValue.value, f.disabled = f.disabled || l.props.disabled), h(te, f, {
        default: function() {
          return [(i = r.default) === null || i === void 0 ? void 0 : i.call(r)];
        }
      });
    };
  }
});
te.Group = ba;
te.Button = gc;
te.install = function(e) {
  return e.component(te.name, te), e.component(te.Group.name, te.Group), e.component(te.Button.name, te.Button), e;
};
var yc = function() {
  return xn() && window.document.documentElement;
}, dt, bc = function() {
  if (!yc())
    return !1;
  if (dt !== void 0)
    return dt;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), dt = t.scrollHeight === 1, document.body.removeChild(t), dt;
};
const Cc = function() {
  var e = Y(!1);
  return Le(function() {
    e.value = bc();
  }), e;
};
var Ca = Symbol("rowContextKey"), xc = function(t) {
  de(Ca, t);
}, wc = function() {
  return xe(Ca, {
    gutter: N(function() {
    }),
    wrap: N(function() {
    }),
    supportFlexGap: N(function() {
    })
  });
};
Be("top", "middle", "bottom", "stretch");
Be("start", "end", "center", "space-around", "space-between");
var _c = function() {
  return {
    align: String,
    justify: String,
    prefixCls: String,
    gutter: {
      type: [Number, Array, Object],
      default: 0
    },
    wrap: {
      type: Boolean,
      default: void 0
    }
  };
}, Oc = H({
  name: "ARow",
  props: _c(),
  setup: function(t, n) {
    var r = n.slots, a = J("row", t), o = a.prefixCls, l = a.direction, i, f = Y({
      xs: !0,
      sm: !0,
      md: !0,
      lg: !0,
      xl: !0,
      xxl: !0,
      xxxl: !0
    }), u = Cc();
    Le(function() {
      i = vr.subscribe(function(s) {
        var m = t.gutter || 0;
        (!Array.isArray(m) && be(m) === "object" || Array.isArray(m) && (be(m[0]) === "object" || be(m[1]) === "object")) && (f.value = s);
      });
    }), Ct(function() {
      vr.unsubscribe(i);
    });
    var d = N(function() {
      var s = [0, 0], m = t.gutter, x = m === void 0 ? 0 : m, w = Array.isArray(x) ? x : [x, 0];
      return w.forEach(function(O, g) {
        if (be(O) === "object")
          for (var _ = 0; _ < dr.length; _++) {
            var k = dr[_];
            if (f.value[k] && O[k] !== void 0) {
              s[g] = O[k];
              break;
            }
          }
        else
          s[g] = O || 0;
      }), s;
    });
    xc({
      gutter: d,
      supportFlexGap: u,
      wrap: N(function() {
        return t.wrap;
      })
    });
    var c = N(function() {
      var s;
      return Q(o.value, (s = {}, j(s, "".concat(o.value, "-no-wrap"), t.wrap === !1), j(s, "".concat(o.value, "-").concat(t.justify), t.justify), j(s, "".concat(o.value, "-").concat(t.align), t.align), j(s, "".concat(o.value, "-rtl"), l.value === "rtl"), s));
    }), v = N(function() {
      var s = d.value, m = {}, x = s[0] > 0 ? "".concat(s[0] / -2, "px") : void 0, w = s[1] > 0 ? "".concat(s[1] / -2, "px") : void 0;
      return x && (m.marginLeft = x, m.marginRight = x), u.value ? m.rowGap = "".concat(s[1], "px") : w && (m.marginTop = w, m.marginBottom = w), m;
    });
    return function() {
      var s;
      return h("div", {
        class: c.value,
        style: v.value
      }, [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
});
const Sc = Oc;
function kc(e) {
  return typeof e == "number" ? "".concat(e, " ").concat(e, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? "0 0 ".concat(e) : e;
}
var Pc = function() {
  return {
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number],
    xs: {
      type: [String, Number, Object],
      default: void 0
    },
    sm: {
      type: [String, Number, Object],
      default: void 0
    },
    md: {
      type: [String, Number, Object],
      default: void 0
    },
    lg: {
      type: [String, Number, Object],
      default: void 0
    },
    xl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxl: {
      type: [String, Number, Object],
      default: void 0
    },
    xxxl: {
      type: [String, Number, Object],
      default: void 0
    },
    prefixCls: String,
    flex: [String, Number]
  };
};
const Ec = H({
  name: "ACol",
  props: Pc(),
  setup: function(t, n) {
    var r = n.slots, a = wc(), o = a.gutter, l = a.supportFlexGap, i = a.wrap, f = J("col", t), u = f.prefixCls, d = f.direction, c = N(function() {
      var s, m = t.span, x = t.order, w = t.offset, O = t.push, g = t.pull, _ = u.value, k = {};
      return ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].forEach(function(S) {
        var y, b = {}, P = t[S];
        typeof P == "number" ? b.span = P : be(P) === "object" && (b = P || {}), k = T(T({}, k), (y = {}, j(y, "".concat(_, "-").concat(S, "-").concat(b.span), b.span !== void 0), j(y, "".concat(_, "-").concat(S, "-order-").concat(b.order), b.order || b.order === 0), j(y, "".concat(_, "-").concat(S, "-offset-").concat(b.offset), b.offset || b.offset === 0), j(y, "".concat(_, "-").concat(S, "-push-").concat(b.push), b.push || b.push === 0), j(y, "".concat(_, "-").concat(S, "-pull-").concat(b.pull), b.pull || b.pull === 0), j(y, "".concat(_, "-rtl"), d.value === "rtl"), y));
      }), Q(_, (s = {}, j(s, "".concat(_, "-").concat(m), m !== void 0), j(s, "".concat(_, "-order-").concat(x), x), j(s, "".concat(_, "-offset-").concat(w), w), j(s, "".concat(_, "-push-").concat(O), O), j(s, "".concat(_, "-pull-").concat(g), g), s), k);
    }), v = N(function() {
      var s = t.flex, m = o.value, x = {};
      if (m && m[0] > 0) {
        var w = "".concat(m[0] / 2, "px");
        x.paddingLeft = w, x.paddingRight = w;
      }
      if (m && m[1] > 0 && !l.value) {
        var O = "".concat(m[1] / 2, "px");
        x.paddingTop = O, x.paddingBottom = O;
      }
      return s && (x.flex = kc(s), i.value === !1 && !x.minWidth && (x.minWidth = 0)), x;
    });
    return function() {
      var s;
      return h("div", {
        class: c.value,
        style: v.value
      }, [(s = r.default) === null || s === void 0 ? void 0 : s.call(r)]);
    };
  }
}), Tc = wt(Sc), Ac = wt(Ec);
var jc = function() {
  return {
    name: String,
    prefixCls: String,
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    disabled: Boolean,
    id: String
  };
}, $c = function() {
  return T(T({}, jc()), {
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    }
  });
}, Ic = function() {
  return {
    prefixCls: String,
    defaultChecked: {
      type: Boolean,
      default: void 0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: me.any,
    name: String,
    id: String,
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    type: {
      type: String,
      default: "checkbox"
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    "onUpdate:checked": Function,
    onClick: Function,
    skipGroup: {
      type: Boolean,
      default: !1
    }
  };
}, Mc = function() {
  return T(T({}, Ic()), {
    indeterminate: {
      type: Boolean,
      default: !1
    }
  });
}, xa = Symbol("CheckboxGroupContext"), yr = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ke = H({
  name: "ACheckbox",
  inheritAttrs: !1,
  __ANT_CHECKBOX: !0,
  props: Mc(),
  setup: function(t, n) {
    var r = n.emit, a = n.attrs, o = n.slots, l = n.expose, i = Ot(), f = J("checkbox", t), u = f.prefixCls, d = f.direction, c = xe(xa, void 0), v = Symbol("checkboxUniId");
    at(function() {
      !t.skipGroup && c && c.registerValue(v, t.value);
    }), Ct(function() {
      c && c.cancelValue(v);
    }), Le(function() {
      Hr(t.checked !== void 0 || c || t.value === void 0, "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    var s = function(g) {
      var _ = g.target.checked;
      r("update:checked", _), r("change", g);
    }, m = Y(), x = function() {
      var g;
      (g = m.value) === null || g === void 0 || g.focus();
    }, w = function() {
      var g;
      (g = m.value) === null || g === void 0 || g.blur();
    };
    return l({
      focus: x,
      blur: w
    }), function() {
      var O, g, _ = fo((g = o.default) === null || g === void 0 ? void 0 : g.call(o)), k = t.indeterminate, S = t.skipGroup, y = t.id, b = y === void 0 ? i.id.value : y, P = yr(t, ["indeterminate", "skipGroup", "id"]), M = a.onMouseenter, V = a.onMouseleave;
      a.onInput;
      var G = a.class, U = a.style, C = yr(a, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]), p = T(T(T({}, P), {
        id: b,
        prefixCls: u.value
      }), C);
      c && !S ? (p.onChange = function() {
        for (var $ = arguments.length, I = new Array($), R = 0; R < $; R++)
          I[R] = arguments[R];
        r.apply(void 0, ["change"].concat(I)), c.toggleOption({
          label: _,
          value: t.value
        });
      }, p.name = c.name.value, p.checked = c.mergedValue.value.indexOf(t.value) !== -1, p.disabled = t.disabled || c.disabled.value, p.indeterminate = k) : p.onChange = s;
      var E = Q((O = {}, j(O, "".concat(u.value, "-wrapper"), !0), j(O, "".concat(u.value, "-rtl"), d.value === "rtl"), j(O, "".concat(u.value, "-wrapper-checked"), p.checked), j(O, "".concat(u.value, "-wrapper-disabled"), p.disabled), O), G), A = Q(j({}, "".concat(u.value, "-indeterminate"), k));
      return h("label", {
        class: E,
        style: U,
        onMouseenter: M,
        onMouseleave: V
      }, [h(ga, oe(oe({}, p), {}, {
        class: A,
        ref: m
      }), null), _.length ? h("span", null, [_]) : null]);
    };
  }
});
function Nc(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = ln(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, i;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return o = u.done, u;
    },
    e: function(u) {
      l = !0, i = u;
    },
    f: function() {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (l)
          throw i;
      }
    }
  };
}
const nn = H({
  name: "ACheckboxGroup",
  props: $c(),
  setup: function(t, n) {
    var r = n.slots, a = n.emit, o = n.expose, l = Ot(), i = J("checkbox", t), f = i.prefixCls, u = i.direction, d = Y((t.value === void 0 ? t.defaultValue : t.value) || []);
    we(function() {
      return t.value;
    }, function() {
      d.value = t.value || [];
    });
    var c = N(function() {
      return t.options.map(function(g) {
        return typeof g == "string" || typeof g == "number" ? {
          label: g,
          value: g
        } : g;
      });
    }), v = Y(Symbol()), s = Y(/* @__PURE__ */ new Map()), m = function(_) {
      s.value.delete(_), v.value = Symbol();
    }, x = function(_, k) {
      s.value.set(_, k), v.value = Symbol();
    }, w = Y(/* @__PURE__ */ new Map());
    we(v, function() {
      var g = /* @__PURE__ */ new Map(), _ = Nc(s.value.values()), k;
      try {
        for (_.s(); !(k = _.n()).done; ) {
          var S = k.value;
          g.set(S, !0);
        }
      } catch (y) {
        _.e(y);
      } finally {
        _.f();
      }
      w.value = g;
    });
    var O = function(_) {
      var k = d.value.indexOf(_.value), S = et(d.value);
      k === -1 ? S.push(_.value) : S.splice(k, 1), t.value === void 0 && (d.value = S);
      var y = S.filter(function(b) {
        return w.value.has(b);
      }).sort(function(b, P) {
        var M = c.value.findIndex(function(G) {
          return G.value === b;
        }), V = c.value.findIndex(function(G) {
          return G.value === P;
        });
        return M - V;
      });
      a("update:value", y), a("change", y), l.onFieldChange();
    };
    return de(xa, {
      cancelValue: m,
      registerValue: x,
      toggleOption: O,
      mergedValue: d,
      name: N(function() {
        return t.name;
      }),
      disabled: N(function() {
        return t.disabled;
      })
    }), o({
      mergedValue: d
    }), function() {
      var g, _ = t.id, k = _ === void 0 ? l.id.value : _, S = null, y = "".concat(f.value, "-group");
      return c.value && c.value.length > 0 && (S = c.value.map(function(b) {
        var P;
        return h(ke, {
          prefixCls: f.value,
          key: b.value.toString(),
          disabled: "disabled" in b ? b.disabled : t.disabled,
          indeterminate: b.indeterminate,
          value: b.value,
          checked: d.value.indexOf(b.value) !== -1,
          onChange: b.onChange,
          class: "".concat(y, "-item")
        }, {
          default: function() {
            return [b.label === void 0 ? (P = r.label) === null || P === void 0 ? void 0 : P.call(r, b) : b.label];
          }
        });
      })), h("div", {
        class: [y, j({}, "".concat(y, "-rtl"), u.value === "rtl")],
        id: k
      }, [S || ((g = r.default) === null || g === void 0 ? void 0 : g.call(r))]);
    };
  }
});
ke.Group = nn;
ke.install = function(e) {
  return e.component(ke.name, ke), e.component(nn.name, nn), e;
};
var Fc = function() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    "onUpdate:checked": Function
  };
}, Lc = H({
  name: "ACheckableTag",
  props: Fc(),
  setup: function(t, n) {
    var r = n.slots, a = n.emit, o = J("tag", t), l = o.prefixCls, i = function(d) {
      var c = t.checked;
      a("update:checked", !c), a("change", !c), a("click", d);
    }, f = N(function() {
      var u;
      return Q(l.value, (u = {}, j(u, "".concat(l.value, "-checkable"), !0), j(u, "".concat(l.value, "-checkable-checked"), t.checked), u));
    });
    return function() {
      var u;
      return h("span", {
        class: f.value,
        onClick: i
      }, [(u = r.default) === null || u === void 0 ? void 0 : u.call(r)]);
    };
  }
});
const rn = Lc;
var Rc = new RegExp("^(".concat(rc.join("|"), ")(-inverse)?$")), Bc = new RegExp("^(".concat(nc.join("|"), ")$")), Vc = function() {
  return {
    prefixCls: String,
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: !1
    },
    closeIcon: me.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    onClose: {
      type: Function
    },
    "onUpdate:visible": Function,
    icon: me.any
  };
}, Qe = H({
  name: "ATag",
  props: Vc(),
  slots: ["closeIcon", "icon"],
  setup: function(t, n) {
    var r = n.slots, a = n.emit, o = n.attrs, l = J("tag", t), i = l.prefixCls, f = l.direction, u = Y(!0);
    at(function() {
      t.visible !== void 0 && (u.value = t.visible);
    });
    var d = function(m) {
      m.stopPropagation(), a("update:visible", !1), a("close", m), !m.defaultPrevented && t.visible === void 0 && (u.value = !1);
    }, c = N(function() {
      var s = t.color;
      return s ? Rc.test(s) || Bc.test(s) : !1;
    }), v = N(function() {
      var s;
      return Q(i.value, (s = {}, j(s, "".concat(i.value, "-").concat(t.color), c.value), j(s, "".concat(i.value, "-has-color"), t.color && !c.value), j(s, "".concat(i.value, "-hidden"), !u.value), j(s, "".concat(i.value, "-rtl"), f.value === "rtl"), s));
    });
    return function() {
      var s, m, x, w = t.icon, O = w === void 0 ? (s = r.icon) === null || s === void 0 ? void 0 : s.call(r) : w, g = t.color, _ = t.closeIcon, k = _ === void 0 ? (m = r.closeIcon) === null || m === void 0 ? void 0 : m.call(r) : _, S = t.closable, y = S === void 0 ? !1 : S, b = function() {
        return y ? k ? h("div", {
          class: "".concat(i.value, "-close-icon"),
          onClick: d
        }, [k]) : h(la, {
          class: "".concat(i.value, "-close-icon"),
          onClick: d
        }, null) : null;
      }, P = {
        backgroundColor: g && !c.value ? g : void 0
      }, M = O || null, V = (x = r.default) === null || x === void 0 ? void 0 : x.call(r), G = M ? h(ae, null, [M, h("span", null, [V])]) : V, U = "onClick" in o, C = h("span", {
        class: v.value,
        style: P
      }, [G, b()]);
      return U ? h(lc, null, {
        default: function() {
          return [C];
        }
      }) : C;
    };
  }
});
Qe.CheckableTag = rn;
Qe.install = function(e) {
  return e.component(Qe.name, Qe), e.component(rn.name, rn), e;
};
const Dc = Qe;
const Gc = {
  name: "selectItem",
  props: {
    title: {
      type: String
    },
    clear: {
      type: Boolean
    }
  }
}, Hc = { class: "c-select-item" }, zc = { class: "c-header" }, Uc = { class: "c-header-title" }, Wc = { class: "c-selecter-content" };
function qc(e, t, n, r, a, o) {
  return F(), D("div", Hc, [
    B("div", zc, [
      B("span", Uc, he(n.title), 1),
      n.clear ? (F(), D("span", {
        key: 0,
        class: "c-header-clear",
        onClick: t[0] || (t[0] = (l) => e.$emit("on-clear"))
      }, " \u6E05\u7A7A\u5168\u90E8 ")) : gt("", !0)
    ]),
    B("div", Wc, [
      Ia(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const wa = /* @__PURE__ */ Re(Gc, [["render", qc], ["__scopeId", "data-v-cd4dcded"]]);
const Yc = {
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
function Kc(e, t, n, r, a, o) {
  const l = ke;
  return F(), Me(l, {
    checked: n.value,
    indeterminate: n.indeterminate,
    onChange: o.change
  }, {
    default: ee(() => [
      xt(he(n.label), 1)
    ]),
    _: 1
  }, 8, ["checked", "indeterminate", "onChange"]);
}
const On = /* @__PURE__ */ Re(Yc, [["render", Kc]]);
const an = (e, t) => {
  e.forEach((n) => {
    if (n.children && n.children.length) {
      const r = n.children;
      r.every((a) => a.check) ? t.$set(n, "check", !0) : t.$set(n, "check", !1), r && an(r, t);
    }
  });
}, Qc = H({
  name: "selectBox",
  components: { ICheckbox: On, RightOutlined: fc },
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
      return (e) => {
        const t = ["c-check-item"];
        return e.value === this.value && t.push("active"), t;
      };
    },
    all() {
      const e = this.data.filter((t) => t.check).length;
      return this.data.length === e;
    }
  },
  methods: {
    selectAll() {
      this.$emit("on-select", {
        check: !this.all,
        level: this.level
      });
    },
    selectItem(e) {
      this.$emit("on-select", {
        check: !e.check,
        level: this.level,
        cat: e.value
      });
    },
    selectItem1(e) {
      console.log(e), console.log(this.data);
    },
    itemIndeterminate(e) {
      const t = (a) => a.children.reduce((o, l) => {
        let i = [];
        return l.check && o.push(l), l.children && (i = t(l)), o.concat(i);
      }, []), n = t(e).length > 0, r = e.children && e.children.every((a) => a.check);
      return n && !r;
    }
  },
  watch: {
    data: {
      handler(e, t) {
        an(e, this);
      },
      deep: !0
    }
  },
  mounted() {
    an(this.data, this);
  }
}), Jc = { class: "c-select-box" }, Xc = { class: "c-check-all" }, Zc = /* @__PURE__ */ xt("\u5168\u9009"), eu = ["onClick"], tu = ["onClick"];
function nu(e, t, n, r, a, o) {
  const l = ke, i = Ze("i-checkbox"), f = Ze("right-outlined");
  return F(), D("div", Jc, [
    B("div", Xc, [
      B("div", {
        class: "c-item-select c-cataract",
        onClick: t[0] || (t[0] = (...u) => e.selectAll && e.selectAll(...u))
      }),
      h(l, {
        class: "c-check-item",
        modelValue: e.all,
        "onUpdate:modelValue": t[1] || (t[1] = (u) => e.all = u)
      }, {
        default: ee(() => [
          Zc
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    (F(!0), D(ae, null, ye(e.data, (u) => (F(), D("div", {
      key: u.id
    }, [
      u.children && u.children.length ? (F(), D("div", {
        key: 0,
        class: vt(e.itemClasses(u)),
        onClick: (d) => e.$emit("on-child", { item: u, level: e.level })
      }, [
        h(i, {
          modelValue: u.check,
          "onUpdate:modelValue": (d) => u.check = d,
          indeterminate: e.itemIndeterminate(u),
          label: u.value
        }, null, 8, ["modelValue", "onUpdate:modelValue", "indeterminate", "label"]),
        h(f, { class: "c-check-arrow" }),
        B("span", {
          class: "c-item-checkbox c-cataract",
          onClick: (d) => e.selectItem(u)
        }, null, 8, tu)
      ], 10, eu)) : (F(), Me(i, {
        key: 1,
        class: "c-check-item",
        modelValue: u.check,
        "onUpdate:modelValue": (d) => u.check = d,
        label: u.value
      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]))
    ]))), 128))
  ]);
}
const ru = /* @__PURE__ */ Re(Qc, [["render", nu], ["__scopeId", "data-v-013d4f51"]]);
const au = {
  name: "selecter",
  components: { SelectItem: wa, SelectBox: ru },
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
      default: !0
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
      return this.value;
    },
    resultLen() {
      return Boolean(this.value.length);
    }
  },
  watch: {
    data(e) {
      e && e.length ? this.updateResource() : this.resource = [];
    }
  },
  methods: {
    updateResource() {
      this.resource = [], this.resource.push({
        data: this.data,
        current: "",
        level: 1,
        title: this.title[0]
      });
    },
    handleClose(e) {
      this.$emit("on-delete", { list: this.data, name: e });
    },
    selectAll({ level: e, check: t, cat: n }) {
      let r = e - 2, a = r > -1 ? this.resource[r].current : "";
      n && (a = n), this.$emit("on-select", {
        check: t,
        current: a,
        list: this.data
      });
    },
    pushChild(e) {
      const { item: t, level: n } = e, r = this.resource.length;
      n <= r - 1 && this.resource.splice(n, r - n), this.resource.push({
        data: t.children,
        current: "",
        level: n + 1,
        title: this.title[n] || t.value
      }), this.resource[n - 1].current = t.value;
    }
  },
  created() {
    this.updateResource();
  }
}, ou = { class: "c-selecter" };
function iu(e, t, n, r, a, o) {
  const l = Ze("select-box"), i = Ze("select-item"), f = Ac, u = Tc, d = Dc;
  return F(), D("div", ou, [
    h(u, { gutter: 12 }, {
      default: ee(() => [
        h(f, { span: 16 }, {
          default: ee(() => [
            h(u, null, {
              default: ee(() => [
                (F(!0), D(ae, null, ye(a.resource, (c, v) => (F(), Me(f, {
                  span: o.col,
                  key: v
                }, {
                  default: ee(() => [
                    h(i, {
                      title: c.title
                    }, {
                      default: ee(() => [
                        h(l, {
                          modelValue: c.current,
                          "onUpdate:modelValue": (s) => c.current = s,
                          data: c.data,
                          level: c.level,
                          onOnChild: o.pushChild,
                          onOnSelect: o.selectAll
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "data", "level", "onOnChild", "onOnSelect"])
                      ]),
                      _: 2
                    }, 1032, ["title"])
                  ]),
                  _: 2
                }, 1032, ["span"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        h(f, {
          span: 7,
          offset: "1"
        }, {
          default: ee(() => [
            o.resultLen && n.transfer ? (F(), Me(i, {
              key: 0,
              title: "\u5DF2\u9009",
              clear: "",
              onOnClear: t[0] || (t[0] = (c) => e.$emit("on-clear", { list: n.data }))
            }, {
              default: ee(() => [
                (F(!0), D(ae, null, ye(o.result, (c) => (F(), D("div", {
                  key: c.id,
                  class: "c-pop-tip"
                }, [
                  h(d, {
                    closable: "",
                    class: "c-tag-item",
                    onClose: (v) => o.handleClose(c.value)
                  }, {
                    default: ee(() => [
                      xt(he(c.value), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClose"])
                ]))), 128))
              ]),
              _: 1
            })) : gt("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const Je = /* @__PURE__ */ Re(au, [["render", iu], ["__scopeId", "data-v-5466b593"]]);
Je.install = function(e) {
  e.component(Je.name, Je);
};
const lu = H({
  name: "Version",
  components: { SelectItem: wa },
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
      required: !0
    },
    android: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    current: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    },
    vername() {
      return this.android ? "Android" : "iOS";
    },
    versions() {
      const e = this.data.map((t) => ({
        label: `${this.vername} ${t}\u53CA\u4EE5\u4E0A`,
        value: t
      }));
      return [{ label: "\u4E0D\u9650", value: "NONE" }, ...e];
    }
  }
});
function cu(e, t, n, r, a, o) {
  const l = te, i = ba, f = Ze("select-item");
  return F(), Me(f, { title: e.title }, {
    default: ee(() => [
      h(i, {
        modelValue: e.current,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.current = u)
      }, {
        default: ee(() => [
          (F(!0), D(ae, null, ye(e.versions, (u) => (F(), Me(l, {
            class: "c-version-item",
            key: u.value,
            value: u.value
          }, {
            default: ee(() => [
              xt(he(u.label), 1)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["title"]);
}
const Xe = /* @__PURE__ */ Re(lu, [["render", cu], ["__scopeId", "data-v-a80f17ab"]]);
Xe.install = function(e) {
  e.component(Xe.name, Xe);
};
const uu = [
  qe,
  Je,
  Xe,
  On
], su = (e) => {
  uu.forEach((t) => {
    e.component(t.name, t);
  });
}, du = {
  install: su,
  DragWeektime: qe,
  Selecter: Je,
  Version: Xe,
  ICheckbox: On
};
export {
  du as default
};
