(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list__checkbox-check--disabled{pointer-events:none}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
const Ct = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>', Ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', $e = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', Be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>', St = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', Ot = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>', kt = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', _t = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', Et = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', It = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var c = {}, V = {}, Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.allInputsSelector = Pt;
function Pt() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = Y;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(V);
var k = {}, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.isNativeInput = jt;
function jt(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = J;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(k);
var Fe = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.append = Tt;
function Tt(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = Q;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(Fe);
var Z = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.blockElements = Lt;
function Lt() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = x;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(Z);
var Re = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.calculateBaseline = Mt;
function Mt(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), s = n * 0.8, o = (r - n) / 2, d = l + a + i + o + s;
  return d;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = ee;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(Re);
var qe = {}, te = {}, ne = {}, re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.isContentEditable = Nt;
function Nt(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = re;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(ne);
Object.defineProperty(te, "__esModule", { value: !0 });
te.canSetCaret = Bt;
var At = k, $t = ne;
function Bt(e) {
  var t = !0;
  if ((0, At.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, $t.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = te;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(qe);
var $ = {}, ie = {};
function Wt(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(s) {
      delete e[a], l.apply(this, s);
    };
  }
  return n;
}
function Ue() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function ae(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Dt(e) {
  return !ae(e);
}
const Ht = () => typeof window < "u" && window.navigator !== null && ae(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Ft(e) {
  const t = Ue();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function Rt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function qt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function Ut(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, s = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), s && e.apply(a, i);
  };
}
function S(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Kt(e) {
  return S(e) === "boolean";
}
function Ke(e) {
  return S(e) === "function" || S(e) === "asyncfunction";
}
function zt(e) {
  return Ke(e) && /^\s*class\s+/.test(e.toString());
}
function Xt(e) {
  return S(e) === "number";
}
function M(e) {
  return S(e) === "object";
}
function Gt(e) {
  return Promise.resolve(e) === e;
}
function Vt(e) {
  return S(e) === "string";
}
function Yt(e) {
  return S(e) === "undefined";
}
function X(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (M(e) && M(n))
    for (const r in n)
      M(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), X(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return X(e, ...t);
}
function Jt(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function Qt(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function Zt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const xt = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, en = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class tn {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function nn(e, t, n = void 0) {
  let r, i, a, l = null, s = 0;
  n || (n = {});
  const o = function() {
    s = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const d = Date.now();
    !s && n.leading === !1 && (s = d);
    const u = t - (d - s);
    return r = this, i = arguments, u <= 0 || u > t ? (l && (clearTimeout(l), l = null), s = d, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(o, u)), a;
  };
}
const rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: tn,
  beautifyShortcut: Ft,
  cacheable: Wt,
  capitalize: Rt,
  copyTextToClipboard: qt,
  debounce: Ut,
  deepMerge: X,
  deprecationAssert: Jt,
  getUserOS: Ue,
  getValidUrl: Qt,
  isBoolean: Kt,
  isClass: zt,
  isEmpty: Dt,
  isFunction: Ke,
  isIosDevice: Ht,
  isNumber: Xt,
  isObject: M,
  isPrintableKey: Zt,
  isPromise: Gt,
  isString: Vt,
  isUndefined: Yt,
  keyCodes: xt,
  mouseButtons: en,
  notEmpty: ae,
  throttle: nn,
  typeOf: S
}, Symbol.toStringTag, { value: "Module" })), le = /* @__PURE__ */ wt(rn);
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.containsOnlyInlineElements = sn;
var an = le, ln = Z;
function sn(e) {
  var t;
  (0, an.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, ln.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = ie;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})($);
var ze = {}, se = {}, B = {}, oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.make = on;
function on(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(s) {
      return s !== void 0;
    });
    (r = i.classList).add.apply(r, a);
  } else
    t !== null && i.classList.add(t);
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = oe;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(B);
Object.defineProperty(se, "__esModule", { value: !0 });
se.fragmentToString = cn;
var un = B;
function cn(e) {
  var t = (0, un.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = se;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(ze);
var Xe = {}, ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.getContentLength = fn;
var dn = k;
function fn(e) {
  var t, n;
  return (0, dn.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = ue;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(Xe);
var ce = {}, de = {}, We = A && A.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(de, "__esModule", { value: !0 });
de.getDeepestBlockElements = Ge;
var pn = $;
function Ge(e) {
  return (0, pn.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return We(We([], t, !0), Ge(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = de;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(ce);
var Ve = {}, fe = {}, W = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.isLineBreakTag = hn;
function hn(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = pe;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(W);
var D = {}, he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.isSingleTag = mn;
function mn(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = he;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(D);
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.getDeepestNode = Ye;
var gn = k, vn = W, bn = D;
function Ye(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, bn.isSingleTag)(i) && !(0, gn.isNativeInput)(i) && !(0, vn.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return Ye(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = fe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(Ve);
var Je = {}, me = {}, T = A && A.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(me, "__esModule", { value: !0 });
me.findAllInputs = kn;
var yn = $, Cn = ce, Sn = V, On = k;
function kn(e) {
  return Array.from(e.querySelectorAll((0, Sn.allInputsSelector)())).reduce(function(t, n) {
    return (0, On.isNativeInput)(n) || (0, yn.containsOnlyInlineElements)(n) ? T(T([], t, !0), [n], !1) : T(T([], t, !0), (0, Cn.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = me;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(Je);
var Qe = {}, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.isCollapsedWhitespaces = _n;
function _n(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = ge;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(Qe);
var ve = {}, be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
be.isElement = In;
var En = le;
function In(e) {
  return (0, En.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = be;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(ve);
var Ze = {}, ye = {}, Ce = {}, Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.isLeaf = wn;
function wn(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = Se;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(Ce);
var Oe = {}, ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.isNodeEmpty = Mn;
var Pn = W, jn = ve, Tn = k, Ln = D;
function Mn(e, t) {
  var n = "";
  return (0, Ln.isSingleTag)(e) && !(0, Pn.isLineBreakTag)(e) ? !1 : ((0, jn.isElement)(e) && (0, Tn.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = ke;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(Oe);
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.isEmpty = $n;
var Nn = Ce, An = Oe;
function $n(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Nn.isLeaf)(e) && !(0, An.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = ye;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(Ze);
var xe = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFragment = Wn;
var Bn = le;
function Wn(e) {
  return (0, Bn.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = _e;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(xe);
var et = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.isHTMLString = Hn;
var Dn = B;
function Hn(e) {
  var t = (0, Dn.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = Ee;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(et);
var tt = {}, Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.offset = Fn;
function Fn(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
  return {
    top: i,
    left: a,
    bottom: i + t.height,
    right: a + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = Ie;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(tt);
var nt = {}, we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.prepend = Rn;
function Rn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = we;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(nt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = V;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = k;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = Fe;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = Z;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = Re;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = qe;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var s = $;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return s.containsOnlyInlineElements;
  } });
  var o = ze;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return o.fragmentToString;
  } });
  var d = Xe;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return d.getContentLength;
  } });
  var u = ce;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return u.getDeepestBlockElements;
  } });
  var p = Ve;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return p.getDeepestNode;
  } });
  var g = Je;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var w = Qe;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return w.isCollapsedWhitespaces;
  } });
  var _ = ne;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return _.isContentEditable;
  } });
  var ut = ve;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return ut.isElement;
  } });
  var ct = Ze;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return ct.isEmpty;
  } });
  var dt = xe;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return dt.isFragment;
  } });
  var ft = et;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return ft.isHTMLString;
  } });
  var pt = Ce;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return pt.isLeaf;
  } });
  var ht = Oe;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return ht.isNodeEmpty;
  } });
  var mt = W;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return mt.isLineBreakTag;
  } });
  var gt = D;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return gt.isSingleTag;
  } });
  var vt = B;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return vt.make;
  } });
  var bt = tt;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return bt.offset;
  } });
  var yt = nt;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return yt.prepend;
  } });
})(c);
const m = "cdx-list", h = {
  wrapper: m,
  item: `${m}__item`,
  itemContent: `${m}__item-content`,
  itemChildren: `${m}__item-children`
};
class v {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      orderedList: `${m}-ordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ol element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = c.make("ol", [v.CSS.wrapper, v.CSS.orderedList]) : n = c.make("ol", [v.CSS.orderedList, v.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the ordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", v.CSS.item), i = c.make("div", v.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${v.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for ordered list
   * @returns item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
class b {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      unorderedList: `${m}-unordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = c.make("ul", [b.CSS.wrapper, b.CSS.unorderedList]) : n = c.make("ul", [b.CSS.unorderedList, b.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the unordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", b.CSS.item), i = c.make("div", b.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${b.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for unordered list
   * @returns Item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
function O(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
var j = {}, Pe = {}, H = {}, F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.getContenteditableSlice = Un;
var qn = c;
function Un(e, t, n, r, i) {
  var a;
  i === void 0 && (i = !1);
  var l = document.createRange();
  if (r === "left" ? (l.setStart(e, 0), l.setEnd(t, n)) : (l.setStart(t, n), l.setEnd(e, e.childNodes.length)), i === !0) {
    var s = l.extractContents();
    return (0, qn.fragmentToString)(s);
  }
  var o = l.cloneContents(), d = document.createElement("div");
  d.appendChild(o);
  var u = (a = d.textContent) !== null && a !== void 0 ? a : "";
  return u;
}
Object.defineProperty(H, "__esModule", { value: !0 });
H.checkContenteditableSliceForEmptiness = Xn;
var Kn = c, zn = F;
function Xn(e, t, n, r) {
  var i = (0, zn.getContenteditableSlice)(e, t, n, r);
  return (0, Kn.isCollapsedWhitespaces)(i);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkContenteditableSliceForEmptiness = void 0;
  var t = H;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
})(Pe);
var rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContenteditableSlice = void 0;
  var t = F;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
})(rt);
var it = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.focus = Vn;
var Gn = c;
function Vn(e, t) {
  var n, r;
  if (t === void 0 && (t = !0), (0, Gn.isNativeInput)(e)) {
    e.focus();
    var i = t ? 0 : e.value.length;
    e.setSelectionRange(i, i);
  } else {
    var a = document.createRange(), l = window.getSelection();
    if (!l)
      return;
    var s = function(g, w) {
      w === void 0 && (w = !1);
      var _ = document.createTextNode("");
      w ? g.insertBefore(_, g.firstChild) : g.appendChild(_), a.setStart(_, 0), a.setEnd(_, 0);
    }, o = function(g) {
      return g != null;
    }, d = e.childNodes, u = t ? d[0] : d[d.length - 1];
    if (o(u)) {
      for (; o(u) && u.nodeType !== Node.TEXT_NODE; )
        u = t ? u.firstChild : u.lastChild;
      if (o(u) && u.nodeType === Node.TEXT_NODE) {
        var p = (r = (n = u.textContent) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0, i = t ? 0 : p;
        a.setStart(u, i), a.setEnd(u, i);
      } else
        s(e, t);
    } else
      s(e);
    l.removeAllRanges(), l.addRange(a);
  }
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.focus = void 0;
  var t = je;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return t.focus;
  } });
})(it);
var Te = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.getCaretNodeAndOffset = Yn;
function Yn() {
  var e = window.getSelection();
  if (e === null)
    return [null, 0];
  var t = e.focusNode, n = e.focusOffset;
  return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n] !== void 0 ? (t = t.childNodes[n], n = 0) : (t = t.childNodes[n - 1], t.textContent !== null && (n = t.textContent.length))), [t, n]);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getCaretNodeAndOffset = void 0;
  var t = R;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return t.getCaretNodeAndOffset;
  } });
})(Te);
var at = {}, q = {};
Object.defineProperty(q, "__esModule", { value: !0 });
q.getRange = Jn;
function Jn() {
  var e = window.getSelection();
  return e && e.rangeCount ? e.getRangeAt(0) : null;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getRange = void 0;
  var t = q;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return t.getRange;
  } });
})(at);
var lt = {}, Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.isCaretAtEndOfInput = xn;
var De = c, Qn = Te, Zn = Pe;
function xn(e) {
  var t = (0, De.getDeepestNode)(e, !0);
  if (t === null)
    return !0;
  if ((0, De.isNativeInput)(t))
    return t.selectionEnd === t.value.length;
  var n = (0, Qn.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, Zn.checkContenteditableSliceForEmptiness)(e, r, i, "right");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtEndOfInput = void 0;
  var t = Le;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtEndOfInput;
  } });
})(lt);
var st = {}, Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.isCaretAtStartOfInput = nr;
var L = c, er = R, tr = H;
function nr(e) {
  var t = (0, L.getDeepestNode)(e);
  if (t === null || (0, L.isEmpty)(e))
    return !0;
  if ((0, L.isNativeInput)(t))
    return t.selectionEnd === 0;
  if ((0, L.isEmpty)(e))
    return !0;
  var n = (0, er.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, tr.checkContenteditableSliceForEmptiness)(e, r, i, "left");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtStartOfInput = void 0;
  var t = Me;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtStartOfInput;
  } });
})(st);
var ot = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.save = ar;
var rr = c, ir = q;
function ar() {
  var e = (0, ir.getRange)(), t = (0, rr.make)("span");
  if (t.id = "cursor", t.hidden = !0, !!e)
    return e.insertNode(t), function() {
      var r = window.getSelection();
      r && (e.setStartAfter(t), e.setEndAfter(t), r.removeAllRanges(), r.addRange(e), setTimeout(function() {
        t.remove();
      }, 150));
    };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = void 0;
  var t = Ne;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return t.save;
  } });
})(ot);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
  var t = Pe;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
  var n = rt;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return n.getContenteditableSlice;
  } });
  var r = it;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return r.focus;
  } });
  var i = Te;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var a = at;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return a.getRange;
  } });
  var l = lt;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return l.isCaretAtEndOfInput;
  } });
  var s = st;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return s.isCaretAtStartOfInput;
  } });
  var o = ot;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return o.save;
  } });
})(j);
class f {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      checklist: `${m}-checklist`,
      itemChecked: `${m}__checkbox--checked`,
      noHover: `${m}__checkbox--no-hover`,
      checkbox: `${m}__checkbox-check`,
      checkboxContainer: `${m}__checkbox`,
      checkboxCheckDisabled: `${m}__checkbox-check--disabled`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ul wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? (n = c.make("ul", [f.CSS.wrapper, f.CSS.checklist]), n.addEventListener("click", (r) => {
      const i = r.target;
      if (i) {
        const a = i.closest(`.${f.CSS.checkboxContainer}`);
        a && a.contains(i) && this.toggleCheckbox(a);
      }
    })) : n = c.make("ul", [f.CSS.checklist, f.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param meta - meta of the list item used in rendering of the checklist
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", [f.CSS.item, f.CSS.item]), i = c.make("div", f.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    }), a = c.make("span", f.CSS.checkbox), l = c.make("div", f.CSS.checkboxContainer);
    return n.checked === !0 && l.classList.add(f.CSS.itemChecked), this.readOnly && l.classList.add(f.CSS.checkboxCheckDisabled), a.innerHTML = Ct, l.appendChild(a), r.appendChild(l), r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${f.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Return meta object of certain element
   * @param item - will be returned meta information of this item
   * @returns Item meta object
   */
  getItemMeta(t) {
    const n = t.querySelector(`.${f.CSS.checkboxContainer}`);
    return {
      checked: n ? n.classList.contains(f.CSS.itemChecked) : !1
    };
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return { checked: !1 };
  }
  /**
   * Toggle checklist item state
   * @param checkbox - checkbox element to be toggled
   */
  toggleCheckbox(t) {
    t.classList.toggle(f.CSS.itemChecked), t.classList.add(f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: !0 });
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * @param el - item wrapper
   */
  removeSpecialHoverBehavior(t) {
    t.classList.remove(f.CSS.noHover);
  }
}
function U(e, t = "after") {
  const n = [];
  let r;
  function i(a) {
    switch (t) {
      case "after":
        return a.nextElementSibling;
      case "before":
        return a.previousElementSibling;
    }
  }
  for (r = i(e); r !== null; )
    n.push(r), r = i(r);
  return n.length !== 0 ? n : null;
}
function y(e, t = !0) {
  let n = e;
  return e.classList.contains(h.item) && (n = e.querySelector(`.${h.itemChildren}`)), n === null ? [] : t ? Array.from(n.querySelectorAll(`:scope > .${h.item}`)) : Array.from(n.querySelectorAll(`.${h.item}`));
}
function lr(e) {
  return e.nextElementSibling === null;
}
function sr(e) {
  return e.querySelector(`.${h.itemChildren}`) !== null;
}
function C(e) {
  return e.querySelector(`.${h.itemChildren}`);
}
function K(e) {
  let t = e;
  e.classList.contains(h.item) && (t = C(e)), t !== null && y(t).length === 0 && t.remove();
}
function N(e) {
  return e.querySelector(`.${h.itemContent}`);
}
function E(e, t = !0) {
  const n = N(e);
  n && j.focus(n, t);
}
class z {
  /**
   * Getter method to get current item
   * @returns current list item or null if caret position is not undefined
   */
  get currentItem() {
    const t = window.getSelection();
    if (!t)
      return null;
    let n = t.anchorNode;
    return !n || (O(n) || (n = n.parentNode), !n) || !O(n) ? null : n.closest(`.${h.item}`);
  }
  /**
   * Method that returns nesting level of the current item, null if there is no selection
   */
  get currentItemLevel() {
    const t = this.currentItem;
    if (t === null)
      return null;
    let n = t.parentNode, r = 0;
    for (; n !== null && n !== this.listWrapper; )
      O(n) && n.classList.contains(h.item) && (r += 1), n = n.parentNode;
    return r + 1;
  }
  /**
   * Assign all passed params and renderer to relevant class properties
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   * @param renderer - renderer instance initialized in tool class
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }, l) {
    this.config = n, this.data = t, this.readOnly = i, this.api = r, this.block = a, this.renderer = l;
  }
  /**
   * Function that is responsible for rendering list with contents
   * @returns Filled with content wrapper element of the list
   */
  render() {
    return this.listWrapper = this.renderer.renderWrapper(!0), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
      [
        {
          content: "",
          meta: {},
          items: []
        }
      ],
      this.listWrapper
    ), this.readOnly || this.listWrapper.addEventListener(
      "keydown",
      (t) => {
        switch (t.key) {
          case "Enter":
            t.shiftKey || this.enterPressed(t);
            break;
          case "Backspace":
            this.backspace(t);
            break;
          case "Tab":
            t.shiftKey ? this.shiftTab(t) : this.addTab(t);
            break;
        }
      },
      !1
    ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
  }
  /**
   * Function that is responsible for list content saving
   * @param wrapper - optional argument wrapper
   * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
   */
  save(t) {
    const n = t ?? this.listWrapper, r = (l) => y(l).map((o) => {
      const d = C(o), u = this.renderer.getItemContent(o), p = this.renderer.getItemMeta(o), g = d ? r(d) : [];
      return {
        content: u,
        meta: p,
        items: g
      };
    }), i = n ? r(n) : [];
    let a = {
      style: this.data.style,
      meta: {},
      items: i
    };
    return this.data.style === "ordered" && (a.meta = {
      start: this.data.meta.start,
      counterType: this.data.meta.counterType
    }), a;
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - config that determines tags supposted by paste handler
   * @todo - refactor and move to list instance
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Method that specified hot to merge two List blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * Content of the first item of the next List would be merged with deepest item in current list
   * Other items of the next List would be appended to the current list without any changes in nesting levels
   * @param data - data of the second list to be merged with current
   */
  merge(t) {
    const n = this.block.holder.querySelectorAll(`.${h.item}`), r = n[n.length - 1], i = N(r);
    if (r === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
      return;
    const a = y(this.listWrapper);
    if (a.length === 0)
      return;
    const l = a[a.length - 1];
    let s = C(l);
    const o = t.items.shift();
    o !== void 0 && (o.items.length !== 0 && (s === null && (s = this.renderer.renderWrapper(!1)), this.appendItems(o.items, s)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   * @todo - refactor and move to list instance
   */
  onPaste(t) {
    const n = t.detail.data;
    this.data = this.pasteHandler(n);
    const r = this.listWrapper;
    r && r.parentNode && r.parentNode.replaceChild(this.render(), r);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   * @todo - refactor and move to list instance
   */
  pasteHandler(t) {
    const { tagName: n } = t;
    let r = "unordered", i;
    switch (n) {
      case "OL":
        r = "ordered", i = "ol";
        break;
      case "UL":
      case "LI":
        r = "unordered", i = "ul";
    }
    const a = {
      style: r,
      meta: {},
      items: []
    };
    r === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
    const l = (s) => Array.from(s.querySelectorAll(":scope > li")).map((d) => {
      const u = d.querySelector(`:scope > ${i}`), p = u ? l(u) : [];
      return {
        content: d.innerHTML ?? "",
        meta: {},
        items: p
      };
    });
    return a.items = l(t), a;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
  }
  /**
   * Handles Enter keypress
   * @param event - keydown
   */
  enterPressed(t) {
    var s;
    const n = this.currentItem;
    if (t.stopPropagation(), t.preventDefault(), t.isComposing || n === null)
      return;
    const r = ((s = this.renderer) == null ? void 0 : s.getItemContent(n).trim().length) === 0, i = n.parentNode === this.listWrapper, a = n.previousElementSibling === null, l = this.api.blocks.getCurrentBlockIndex();
    if (i && r)
      if (lr(n) && !sr(n)) {
        a ? this.convertItemToDefaultBlock(l, !0) : this.convertItemToDefaultBlock();
        return;
      } else {
        this.splitList(n);
        return;
      }
    else if (r) {
      this.unshiftItem(n);
      return;
    } else
      this.splitItem(n);
  }
  /**
   * Handle backspace
   * @param event - keydown
   */
  backspace(t) {
    var r;
    const n = this.currentItem;
    if (n !== null && j.isCaretAtStartOfInput(n) && ((r = window.getSelection()) == null ? void 0 : r.isCollapsed) !== !1) {
      if (t.stopPropagation(), n.parentNode === this.listWrapper && n.previousElementSibling === null) {
        this.convertFirstItemToDefaultBlock();
        return;
      }
      t.preventDefault(), this.mergeItemWithPrevious(n);
    }
  }
  /**
   * Reduce indentation for current item
   * @param event - keydown
   */
  shiftTab(t) {
    t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
  }
  /**
   * Decrease indentation of the passed item
   * @param item - list item to be unshifted
   */
  unshiftItem(t) {
    if (!t.parentNode || !O(t.parentNode))
      return;
    const n = t.parentNode.closest(`.${h.item}`);
    if (!n)
      return;
    let r = C(t);
    if (t.parentElement === null)
      return;
    const i = U(t);
    i !== null && (r === null && (r = this.renderer.renderWrapper(!1)), i.forEach((a) => {
      r.appendChild(a);
    }), t.appendChild(r)), n.after(t), E(t, !1), K(n);
  }
  /**
   * Method that is used for list splitting and moving trailing items to the new separated list
   * @param item - current item html element
   */
  splitList(t) {
    const n = y(t), r = this.block, i = this.api.blocks.getCurrentBlockIndex();
    if (n.length !== 0) {
      const o = n[0];
      this.unshiftItem(o), E(t, !1);
    }
    if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
      this.convertItemToDefaultBlock(i);
      return;
    }
    const a = U(t);
    if (a === null)
      return;
    const l = this.renderer.renderWrapper(!0);
    a.forEach((o) => {
      l.appendChild(o);
    });
    const s = this.save(l);
    s.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r == null ? void 0 : r.name, s, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l.remove();
  }
  /**
   * Method that is used for splitting item content and moving trailing content to the new sibling item
   * @param currentItem - current item html element
   */
  splitItem(t) {
    const [n, r] = j.getCaretNodeAndOffset();
    if (n === null)
      return;
    const i = N(t);
    let a;
    i === null ? a = "" : a = j.getContenteditableSlice(i, n, r, "right", !0);
    const l = C(t), s = this.renderItem(a);
    t == null || t.after(s), l && s.appendChild(l), E(s);
  }
  /**
   * Method that is used for merging current item with previous one
   * Content of the current item would be appended to the previous item
   * Current item children would not change nesting level
   * @param item - current item html element
   */
  mergeItemWithPrevious(t) {
    const n = t.previousElementSibling, r = t.parentNode;
    if (r === null || !O(r))
      return;
    const i = r.closest(`.${h.item}`);
    if (!n && !i || n && !O(n))
      return;
    let a;
    if (n) {
      const p = y(n, !1);
      p.length !== 0 && p.length !== 0 ? a = p[p.length - 1] : a = n;
    } else
      a = i;
    const l = this.renderer.getItemContent(t);
    if (!a)
      return;
    E(a, !1);
    const s = N(a);
    if (s === null)
      return;
    s.insertAdjacentHTML("beforeend", l);
    const o = y(t);
    if (o.length === 0) {
      t.remove(), K(a);
      return;
    }
    const d = n || i, u = C(d) ?? this.renderer.renderWrapper(!1);
    n ? o.forEach((p) => {
      u.appendChild(p);
    }) : o.forEach((p) => {
      u.prepend(p);
    }), C(d) === null && a.appendChild(u), t.remove();
  }
  /**
   * Add indentation to current item
   * @param event - keydown
   */
  addTab(t) {
    var a;
    t.stopPropagation(), t.preventDefault();
    const n = this.currentItem;
    if (!n)
      return;
    if (((a = this.config) == null ? void 0 : a.maxLevel) !== void 0) {
      const l = this.currentItemLevel;
      if (l !== null && l === this.config.maxLevel)
        return;
    }
    const r = n.previousSibling;
    if (r === null || !O(r))
      return;
    const i = C(r);
    if (i)
      i.appendChild(n), y(n).forEach((s) => {
        i.appendChild(s);
      });
    else {
      const l = this.renderer.renderWrapper(!1);
      l.appendChild(n), y(n).forEach((o) => {
        l.appendChild(o);
      }), r.appendChild(l);
    }
    K(n), E(n, !1);
  }
  /**
   * Convert current item to default block with passed index
   * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
   * @param removeList - optional parameter, that represents condition, if List should be removed
   */
  convertItemToDefaultBlock(t, n) {
    let r;
    const i = this.currentItem, a = i !== null ? this.renderer.getItemContent(i) : "";
    n === !0 && this.api.blocks.delete(), t !== void 0 ? r = this.api.blocks.insert(void 0, { text: a }, void 0, t) : r = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r, "start");
  }
  /**
   * Convert first item of the list to default block
   * This method could be called when backspace button pressed at start of the first item of the list
   * First item of the list would be converted to the paragraph and first item children would be unshifted
   */
  convertFirstItemToDefaultBlock() {
    const t = this.currentItem;
    if (t === null)
      return;
    const n = y(t);
    if (n.length !== 0) {
      const l = n[0];
      this.unshiftItem(l), E(t);
    }
    const r = U(t), i = this.api.blocks.getCurrentBlockIndex(), a = r === null;
    this.convertItemToDefaultBlock(i, a);
  }
  /**
   * Method that calls render function of the renderer with a necessary item meta cast
   * @param itemContent - content to be rendered in new item
   * @param meta - meta used in list item rendering
   * @returns html element of the rendered item
   */
  renderItem(t, n) {
    const r = n ?? this.renderer.composeDefaultMeta();
    switch (!0) {
      case this.renderer instanceof v:
        return this.renderer.renderItem(t, r);
      case this.renderer instanceof b:
        return this.renderer.renderItem(t, r);
      default:
        return this.renderer.renderItem(t, r);
    }
  }
  /**
   * Renders children list
   * @param items - list data used in item rendering
   * @param parentElement - where to append passed items
   */
  appendItems(t, n) {
    t.forEach((r) => {
      var a;
      const i = this.renderItem(r.content, r.meta);
      if (n.appendChild(i), r.items.length) {
        const l = (a = this.renderer) == null ? void 0 : a.renderWrapper(!1);
        this.appendItems(r.items, l), i.appendChild(l);
      }
    });
  }
}
const I = {
  wrapper: `${m}-start-with-field`,
  input: `${m}-start-with-field__input`,
  startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
};
function or(e, { value: t, placeholder: n, attributes: r, sanitize: i }) {
  const a = c.make("div", I.wrapper), l = c.make("input", I.input, {
    placeholder: n,
    /**
     * Used to prevent focusing on the input by Tab key
     * (Popover in the Toolbar lays below the blocks,
     * so Tab in the last block will focus this hidden input if this property is not set)
     */
    tabIndex: -1,
    /**
     * Value of the start property, if it is not specified, then it is set to one
     */
    value: t
  });
  for (const s in r)
    l.setAttribute(s, r[s]);
  return a.appendChild(l), l.addEventListener("input", () => {
    i !== void 0 && (l.value = i(l.value));
    const s = l.checkValidity();
    !s && !a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.add(I.startWithElementWrapperInvalid), s && a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.remove(I.startWithElementWrapperInvalid), s && e(l.value);
  }), a;
}
const P = /* @__PURE__ */ new Map([
  /**
   * Value that represents default arabic numbers for counters
   */
  ["Numeric", "numeric"],
  /**
   * Value that represents lower roman numbers for counteres
   */
  ["Lower Roman", "lower-roman"],
  /**
   * Value that represents upper roman numbers for counters
   */
  ["Upper Roman", "upper-roman"],
  /**
   * Value that represents lower alpha characters for counters
   */
  ["Lower Alpha", "lower-alpha"],
  /**
   * Value that represents upper alpha characters for counters
   */
  ["Upper Alpha", "upper-alpha"]
]), He = /* @__PURE__ */ new Map([
  /**
   * Value that represents Icon for Numeric counter type
   */
  ["numeric", St],
  /**
   * Value that represents Icon for Lower Roman counter type
   */
  ["lower-roman", Ot],
  /**
   * Value that represents Icon for Upper Roman counter type
   */
  ["upper-roman", kt],
  /**
   * Value that represents Icon for Lower Alpha counter type
   */
  ["lower-alpha", Et],
  /**
   * Value that represents Icon for Upper Alpha counter type
   */
  ["upper-alpha", _t]
]);
function ur(e) {
  return e.replace(/\D+/g, "");
}
function cr(e) {
  return typeof e.items[0] == "string";
}
function dr(e) {
  return !("meta" in e);
}
function fr(e) {
  return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
}
function pr(e) {
  const t = [];
  return cr(e) ? (e.items.forEach((n) => {
    t.push({
      content: n,
      meta: {},
      items: []
    });
  }), {
    style: e.style,
    meta: {},
    items: t
  }) : fr(e) ? (e.items.forEach((n) => {
    t.push({
      content: n.text,
      meta: {
        checked: n.checked
      },
      items: []
    });
  }), {
    style: "checklist",
    meta: {},
    items: t
  }) : dr(e) ? {
    style: e.style,
    meta: {},
    items: e.items
  } : structuredClone(e);
}
class G {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return [
      {
        icon: $e,
        title: "Unordered List",
        data: {
          style: "unordered"
        }
      },
      {
        icon: Be,
        title: "Ordered List",
        data: {
          style: "ordered"
        }
      },
      {
        icon: Ae,
        title: "Checklist",
        data: {
          style: "checklist"
        }
      }
    ];
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - paste config object used in editor
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (t) => G.joinRecursive(t),
      import: (t, n) => ({
        meta: {},
        items: [
          {
            content: t,
            meta: {},
            items: []
          }
        ],
        style: (n == null ? void 0 : n.defaultStyle) !== void 0 ? n.defaultStyle : "unordered"
      })
    };
  }
  /**
   * Get list style name
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   * @param style - new style to set
   */
  set listStyle(t) {
    var r;
    this.data.style = t, this.changeTabulatorByStyle();
    const n = this.list.render();
    (r = this.listElement) == null || r.replaceWith(n), this.listElement = n;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    var s;
    this.api = r, this.readOnly = i, this.config = n, this.block = a, this.defaultListStyle = ((s = this.config) == null ? void 0 : s.defaultStyle) || "unordered", this.defaultCounterTypes = this.config.counterTypes || Array.from(P.values());
    const l = {
      style: this.defaultListStyle,
      meta: {},
      items: []
    };
    this.data = Object.keys(t).length ? pr(t) : l, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
  }
  /**
   * Convert from list to text for conversionConfig
   * @param data - current data of the list
   * @returns - string of the recursively merged contents of the items of the list
   */
  static joinRecursive(t) {
    return t.items.map((n) => `${n.content} ${G.joinRecursive(n)}`).join("");
  }
  /**
   * Function that is responsible for content rendering
   * @returns rendered list wrapper with all contents
   */
  render() {
    return this.listElement = this.list.render(), this.listElement;
  }
  /**
   * Function that is responsible for content saving
   * @returns formatted content used in editor
   */
  save() {
    return this.data = this.list.save(), this.data;
  }
  /**
   * Function that is responsible for mergind two lists into one
   * @param data - data of the next standing list, that should be merged with current
   */
  merge(t) {
    this.list.merge(t);
  }
  /**
   * Creates Block Tune allowing to change the list style
   * @returns array of tune configs
   */
  renderSettings() {
    const t = [
      {
        label: this.api.i18n.t("Unordered"),
        icon: $e,
        closeOnActivate: !0,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered";
        }
      },
      {
        label: this.api.i18n.t("Ordered"),
        icon: Be,
        closeOnActivate: !0,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered";
        }
      },
      {
        label: this.api.i18n.t("Checklist"),
        icon: Ae,
        closeOnActivate: !0,
        isActive: this.listStyle == "checklist",
        onActivate: () => {
          this.listStyle = "checklist";
        }
      }
    ];
    if (this.listStyle === "ordered") {
      const n = or(
        (a) => this.changeStartWith(Number(a)),
        {
          value: String(this.data.meta.start ?? 1),
          placeholder: "",
          attributes: {
            required: "true"
          },
          sanitize: (a) => ur(a)
        }
      ), r = [
        {
          label: this.api.i18n.t("Start with"),
          icon: It,
          children: {
            items: [
              {
                element: n,
                // @ts-expect-error ts(2820) can not use PopoverItem enum from editor.js types
                type: "html"
              }
            ]
          }
        }
      ], i = {
        label: this.api.i18n.t("Counter type"),
        icon: He.get(this.data.meta.counterType),
        children: {
          items: []
        }
      };
      P.forEach((a, l) => {
        const s = P.get(l);
        this.defaultCounterTypes.includes(s) && i.children.items.push({
          title: this.api.i18n.t(l),
          icon: He.get(s),
          isActive: this.data.meta.counterType === P.get(l),
          closeOnActivate: !0,
          onActivate: () => {
            this.changeCounters(P.get(l));
          }
        });
      }), i.children.items.length > 1 && r.push(i), t.push({ type: "separator" }, ...r);
    }
    return t;
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   */
  onPaste(t) {
    const { tagName: n } = t.detail.data;
    switch (n) {
      case "OL":
        this.listStyle = "ordered";
        break;
      case "UL":
      case "LI":
        this.listStyle = "unordered";
    }
    this.list.onPaste(t);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   */
  pasteHandler(t) {
    return this.list.pasteHandler(t);
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    var n;
    (n = this.list) == null || n.changeCounters(t), this.data.meta.counterType = t;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    var n;
    (n = this.list) == null || n.changeStartWith(t), this.data.meta.start = t;
  }
  /**
   * This method allows changing tabulator respectfully to passed style
   */
  changeTabulatorByStyle() {
    switch (this.listStyle) {
      case "ordered":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new v(this.readOnly, this.config)
        );
        break;
      case "unordered":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new b(this.readOnly, this.config)
        );
        break;
      case "checklist":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new f(this.readOnly, this.config)
        );
        break;
    }
  }
}
export {
  G as default
};
