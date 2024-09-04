import { p as proxyCustomElement, H, c as createEvent } from './p-f27a3bd0.js';
import { d as defineCustomElement$4 } from './p-5360d3a8.js';
import { d as defineCustomElement$3 } from './p-cc57cdd1.js';
import { d as defineCustomElement$2 } from './p-75005b73.js';

/*
 Stencil Client Platform v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};

const dateRangePickerCss = ".container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-size:larger;position:relative;position:fixed;bottom:0;left:25%;height:4.5rem;width:50%;gap:2rem;background-color:rgb(170, 165, 165);z-index:100}.calendar{display:flex;flex-direction:row;gap:20rem;position:absolute;top:0rem;transform:translateY(-22rem);left:2rem;z-index:100;background-color:whitesmoke}.date-input{padding:0.5rem}input{border:none;background-color:transparent;cursor:default;pointer-events:none;width:5rem}input:focus{outline:none}button{background-color:gray;border:none;height:100%;margin-left:2rem;padding:0 3rem;z-index:10}button:hover{cursor:pointer}";
const RfDateRangePickerStyle0 = dateRangePickerCss;

const DateRangerPicker = /*@__PURE__*/ proxyCustomElement(class DateRangerPicker extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.book = createEvent(this, "book", 7);
        this.show = false;
        this.firstDate = null;
        this.lastDate = null;
        this.guests = undefined;
    }
    open() {
        this.show = !this.show;
    }
    hide(event) {
        this.show = !event.detail;
    }
    getFirstDate(event) {
        this.firstDate = event.detail;
        this.lastDate = null;
    }
    getSecondDate(event) {
        this.lastDate = event.detail;
    }
    closeSecondDate(event) {
        this.lastDate = event.detail;
        this.show = false;
    }
    getGuest(event) {
        this.guests = event.detail;
    }
    handleClick() {
        var _a, _b;
        this.book.emit({
            firstDate: (_a = this.firstDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            lastDate: (_b = this.lastDate) === null || _b === void 0 ? void 0 : _b.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            guests: this.guests,
        });
    }
    render() {
        var _a, _b;
        let first;
        let second;
        if (this.lastDate == null) {
            first = this.firstDate;
            second = this.lastDate;
        }
        else if (this.firstDate < this.lastDate) {
            first = this.firstDate;
            second = this.lastDate;
        }
        else {
            first = this.lastDate;
            second = this.firstDate;
        }
        return (h("div", { key: '6f6d2bea3cc9a4a11d95e9573bde5028062bb241', class: "container" }, h("div", { key: '6516bd81de664c9c59598e91591c558d82c4ca14', class: "date-input", onClick: this.open.bind(this) }, h("span", { key: '7a6ba54268cabb8457d7be76338a1f5527b5c321' }, "Check in: "), h("input", { key: 'b2aa00b7d9fdd7f4d4b2dbe8e275c38530c07099', type: "text", value: (_a = first === null || first === void 0 ? void 0 : first.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) !== null && _a !== void 0 ? _a : '', placeholder: "Select date" }), h("span", { key: 'b2c504164ef0277ec481d8da8ce5d566e6891335' }, "Check out: "), h("input", { key: '99748ae95d5a9e97b142a244a954dcb96287dd3f', type: "text", value: (_b = second === null || second === void 0 ? void 0 : second.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })) !== null && _b !== void 0 ? _b : '', placeholder: "Select date" })), this.show ? (h("div", { class: "calendar" }, h("rf-first", null), h("rf-second", null))) : null, h("rf-guest", { key: '51864e694880e1aa66fd31d4b6f62ab20c92b41b' }), h("button", { key: '529a4a7fb687fa62e3abaf36ad997424be8c2f8d', onClick: this.handleClick.bind(this) }, "Book Now")));
    }
    static get style() { return RfDateRangePickerStyle0; }
}, [1, "rf-date-range-picker", {
        "show": [32],
        "firstDate": [32],
        "lastDate": [32],
        "guests": [32]
    }, [[16, "hide_cal", "hide"], [16, "send_first_date", "getFirstDate"], [16, "send_second_date", "getSecondDate"], [16, "close_cal", "closeSecondDate"], [16, "send_guest", "getGuest"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-date-range-picker", "rf-first", "rf-guest", "rf-second"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-date-range-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DateRangerPicker);
            }
            break;
        case "rf-first":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "rf-guest":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "rf-second":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const RfDateRangePicker = DateRangerPicker;
const defineCustomElement = defineCustomElement$1;

export { RfDateRangePicker, defineCustomElement };

//# sourceMappingURL=rf-date-range-picker.js.map