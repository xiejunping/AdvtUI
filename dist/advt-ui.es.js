var render$6 = function() {
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
  }), _c("table", {
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
  }, [_vm._l(_vm.data, function(t) {
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
  }), _c("tr", [_c("td", {
    staticClass: "c-weektime-preview",
    attrs: {
      "colspan": "49"
    }
  }, [_c("div", {
    staticClass: "g-clearfix c-weektime-con"
  }, [_c("span", {
    staticClass: "g-pull-left"
  }, [_vm._v(_vm._s(_vm.selectState ? "\u5DF2\u9009\u62E9\u65F6\u95F4\u6BB5" : "\u53EF\u62D6\u52A8\u9F20\u6807\u9009\u62E9\u65F6\u95F4\u6BB5"))]), _c("a", {
    staticClass: "g-pull-right",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.$emit("on-clear");
      }
    }
  }, [_vm._v("\u6E05\u7A7A\u9009\u62E9")])]), _vm.selectState ? _c("div", {
    staticClass: "c-weektime-time"
  }, _vm._l(_vm.selectValue, function(t) {
    return _c("div", {
      key: t.id
    }, [t.value ? _c("p", [_c("span", {
      staticClass: "g-tip-text"
    }, [_vm._v(_vm._s(t.week) + "\uFF1A")]), _c("span", [_vm._v(_vm._s(t.value))])]) : _vm._e()]);
  }), 0) : _vm._e()])])], 2)])]);
};
var staticRenderFns$6 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
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
const createArr = (len) => {
  return Array.from(Array(len)).map((ret, id) => id);
};
const __vue2_script$6 = {
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
      return this.value.some((ret) => ret.value);
    },
    selectClasses() {
      return (n) => n.check ? "ui-selected" : "";
    }
  },
  methods: {
    cellEnter(item) {
      const ele = document.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`);
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
      const ele = document.querySelector(`td[data-week='${item.row}'][data-time='${item.col}']`);
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
    this.theadArr = createArr(24);
  }
};
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$6,
  render$6,
  staticRenderFns$6,
  false,
  __vue2_injectStyles$6,
  "684c0e26",
  null,
  null
);
function __vue2_injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var DragWeektime = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var render$5 = function() {
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
var staticRenderFns$5 = [];
var selectItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$5 = {
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
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$5,
  render$5,
  staticRenderFns$5,
  false,
  __vue2_injectStyles$5,
  "3d2f2883",
  null,
  null
);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var SelectItem = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var render$4 = function() {
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
var staticRenderFns$4 = [];
const __vue2_script$4 = {
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
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$4,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  null,
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var ICheckbox = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var render$3 = function() {
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
var staticRenderFns$3 = [];
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
const __vue2_script$3 = {
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
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$3,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  "6fdc22c7",
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var SelectBox = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var render$2 = function() {
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
      "title": "\u5DF2\u9009",
      "clear": ""
    },
    on: {
      "on-clear": function($event) {
        return _vm.$emit("on-clear", {
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
var staticRenderFns$2 = [];
var select_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$2 = {
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
      return this.value;
    },
    resultLen() {
      return Boolean(this.value.length);
    }
  },
  watch: {
    data(nVal) {
      if (nVal && nVal.length)
        this.updateResource();
      else
        this.resource = [];
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
      this.$emit("on-delete", { list: this.data, id });
    },
    selectAll({ level, check, cat }) {
      let index2 = level - 2;
      let current = index2 > -1 ? this.resource[index2].current : 0;
      cat && (current = cat);
      this.$emit("on-select", {
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
    }
  },
  created() {
    this.updateResource();
  }
};
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$2,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  "24829cb6",
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var Selecter = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var render$1 = function() {
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
var staticRenderFns$1 = [];
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const __vue2_script$1 = {
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
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  __vue2_script$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "9efd1348",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var Version = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
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
var staticRenderFns = [];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
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
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "5dd9f6d0",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var Steper = /* @__PURE__ */ function() {
  return __component__.exports;
}();
const components = [
  DragWeektime,
  Selecter,
  Steper,
  Version,
  ICheckbox
];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
var index = {
  install,
  DragWeektime,
  Selecter,
  Steper,
  Version,
  ICheckbox
};
export { index as default };
