(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const De = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', He = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', Re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fe(e) {
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
var v = {}, P = {}, j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.allInputsSelector = We;
function We() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = j;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(P);
var c = {}, T = {};
Object.defineProperty(T, "__esModule", { value: !0 });
T.isNativeInput = Ue;
function Ue(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = T;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(c);
var ie = {}, C = {};
Object.defineProperty(C, "__esModule", { value: !0 });
C.append = qe;
function qe(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = C;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(ie);
var L = {}, S = {};
Object.defineProperty(S, "__esModule", { value: !0 });
S.blockElements = ze;
function ze() {
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
  var t = S;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(L);
var ae = {}, M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.calculateBaseline = Ge;
function Ge(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), u = n * 0.8, d = (r - n) / 2, s = l + a + i + d + u;
  return s;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = M;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(ae);
var le = {}, k = {}, w = {}, N = {};
Object.defineProperty(N, "__esModule", { value: !0 });
N.isContentEditable = Ke;
function Ke(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = N;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(w);
Object.defineProperty(k, "__esModule", { value: !0 });
k.canSetCaret = Qe;
var Xe = c, Ye = w;
function Qe(e) {
  var t = !0;
  if ((0, Xe.isNativeInput)(e))
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
    t = (0, Ye.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = k;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(le);
var y = {}, I = {};
function Ve(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(u) {
      delete e[a], l.apply(this, u);
    };
  }
  return n;
}
function ue() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function A(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Ze(e) {
  return !A(e);
}
const Je = () => typeof window < "u" && window.navigator !== null && A(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function xe(e) {
  const t = ue();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function et(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function tt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function nt(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, u = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), u && e.apply(a, i);
  };
}
function o(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function rt(e) {
  return o(e) === "boolean";
}
function oe(e) {
  return o(e) === "function" || o(e) === "asyncfunction";
}
function it(e) {
  return oe(e) && /^\s*class\s+/.test(e.toString());
}
function at(e) {
  return o(e) === "number";
}
function g(e) {
  return o(e) === "object";
}
function lt(e) {
  return Promise.resolve(e) === e;
}
function ut(e) {
  return o(e) === "string";
}
function ot(e) {
  return o(e) === "undefined";
}
function O(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (g(e) && g(n))
    for (const r in n)
      g(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), O(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return O(e, ...t);
}
function st(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function ct(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function dt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const ft = {
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
}, pt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class vt {
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
function gt(e, t, n = void 0) {
  let r, i, a, l = null, u = 0;
  n || (n = {});
  const d = function() {
    u = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const s = Date.now();
    !u && n.leading === !1 && (u = s);
    const f = t - (s - u);
    return r = this, i = arguments, f <= 0 || f > t ? (l && (clearTimeout(l), l = null), u = s, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(d, f)), a;
  };
}
const mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: vt,
  beautifyShortcut: xe,
  cacheable: Ve,
  capitalize: et,
  copyTextToClipboard: tt,
  debounce: nt,
  deepMerge: O,
  deprecationAssert: st,
  getUserOS: ue,
  getValidUrl: ct,
  isBoolean: rt,
  isClass: it,
  isEmpty: Ze,
  isFunction: oe,
  isIosDevice: Je,
  isNumber: at,
  isObject: g,
  isPrintableKey: dt,
  isPromise: lt,
  isString: ut,
  isUndefined: ot,
  keyCodes: ft,
  mouseButtons: pt,
  notEmpty: A,
  throttle: gt,
  typeOf: o
}, Symbol.toStringTag, { value: "Module" })), $ = /* @__PURE__ */ Fe(mt);
Object.defineProperty(I, "__esModule", { value: !0 });
I.containsOnlyInlineElements = _t;
var bt = $, yt = L;
function _t(e) {
  var t;
  (0, bt.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, yt.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = I;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(y);
var se = {}, B = {}, _ = {}, D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
D.make = ht;
function ht(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(u) {
      return u !== void 0;
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
  var t = D;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(_);
Object.defineProperty(B, "__esModule", { value: !0 });
B.fragmentToString = Ot;
var Et = _;
function Ot(e) {
  var t = (0, Et.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = B;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(se);
var ce = {}, H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.getContentLength = jt;
var Pt = c;
function jt(e) {
  var t, n;
  return (0, Pt.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = H;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(ce);
var R = {}, F = {}, re = b && b.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(F, "__esModule", { value: !0 });
F.getDeepestBlockElements = de;
var Tt = y;
function de(e) {
  return (0, Tt.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return re(re([], t, !0), de(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = F;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(R);
var fe = {}, W = {}, h = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.isLineBreakTag = Ct;
function Ct(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = U;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(h);
var E = {}, q = {};
Object.defineProperty(q, "__esModule", { value: !0 });
q.isSingleTag = Lt;
function Lt(e) {
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
  var t = q;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(E);
Object.defineProperty(W, "__esModule", { value: !0 });
W.getDeepestNode = pe;
var St = c, Mt = h, kt = E;
function pe(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, kt.isSingleTag)(i) && !(0, St.isNativeInput)(i) && !(0, Mt.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return pe(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = W;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(fe);
var ve = {}, z = {}, p = b && b.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(z, "__esModule", { value: !0 });
z.findAllInputs = $t;
var wt = y, Nt = R, It = P, At = c;
function $t(e) {
  return Array.from(e.querySelectorAll((0, It.allInputsSelector)())).reduce(function(t, n) {
    return (0, At.isNativeInput)(n) || (0, wt.containsOnlyInlineElements)(n) ? p(p([], t, !0), [n], !1) : p(p([], t, !0), (0, Nt.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = z;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(ve);
var ge = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.isCollapsedWhitespaces = Bt;
function Bt(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = G;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(ge);
var K = {}, X = {};
Object.defineProperty(X, "__esModule", { value: !0 });
X.isElement = Ht;
var Dt = $;
function Ht(e) {
  return (0, Dt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = X;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(K);
var me = {}, Y = {}, Q = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.isLeaf = Rt;
function Rt(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = V;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(Q);
var Z = {}, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.isNodeEmpty = zt;
var Ft = h, Wt = K, Ut = c, qt = E;
function zt(e, t) {
  var n = "";
  return (0, qt.isSingleTag)(e) && !(0, Ft.isLineBreakTag)(e) ? !1 : ((0, Wt.isElement)(e) && (0, Ut.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = J;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(Z);
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.isEmpty = Xt;
var Gt = Q, Kt = Z;
function Xt(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Gt.isLeaf)(e) && !(0, Kt.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = Y;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(me);
var be = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.isFragment = Qt;
var Yt = $;
function Qt(e) {
  return (0, Yt.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = x;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(be);
var ye = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isHTMLString = Zt;
var Vt = _;
function Zt(e) {
  var t = (0, Vt.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = ee;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(ye);
var _e = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.offset = Jt;
function Jt(e) {
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
  var t = te;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(_e);
var he = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.prepend = xt;
function xt(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = ne;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(he);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = P;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = c;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = ie;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = L;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = ae;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = le;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var u = y;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return u.containsOnlyInlineElements;
  } });
  var d = se;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return d.fragmentToString;
  } });
  var s = ce;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return s.getContentLength;
  } });
  var f = R;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return f.getDeepestBlockElements;
  } });
  var Oe = fe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return Oe.getDeepestNode;
  } });
  var Pe = ve;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return Pe.findAllInputs;
  } });
  var je = ge;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return je.isCollapsedWhitespaces;
  } });
  var Te = w;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return Te.isContentEditable;
  } });
  var Ce = K;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return Ce.isElement;
  } });
  var Le = me;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Le.isEmpty;
  } });
  var Se = be;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return Se.isFragment;
  } });
  var Me = ye;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return Me.isHTMLString;
  } });
  var ke = Q;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return ke.isLeaf;
  } });
  var we = Z;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return we.isNodeEmpty;
  } });
  var Ne = h;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return Ne.isLineBreakTag;
  } });
  var Ie = E;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return Ie.isSingleTag;
  } });
  var Ae = _;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return Ae.make;
  } });
  var $e = _e;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return $e.offset;
  } });
  var Be = he;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return Be.prepend;
  } });
})(v);
var Ee = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee || {});
class m {
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - Quote Tool constructor params
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - editor.js api
   * @param params.readOnly - read only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    const { DEFAULT_ALIGNMENT: l } = m;
    this.api = r, this.readOnly = i, this.quotePlaceholder = r.i18n.t((n == null ? void 0 : n.quotePlaceholder) ?? m.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r.i18n.t((n == null ? void 0 : n.captionPlaceholder) ?? m.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
      text: t.text || "",
      caption: t.caption || "",
      alignment: Object.values(Ee).includes(t.alignment) ? t.alignment : (n == null ? void 0 : n.defaultAlignment) ?? l
    }, this.css = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    }, this.block = a;
  }
  /**
   * Notify core that read-only mode is supported
   * @returns true
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   * @returns icon and title of the toolbox
   */
  static get toolbox() {
    return {
      icon: Re,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   * @returns true
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   * @returns true
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   * @returns 'Enter a quote'
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   * @returns 'Enter a caption'
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default quote alignment
   * @returns Alignment.Left
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   * @returns conversion config object
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       * @param quoteData - Quote data object
       * @returns string
       */
      export: function(t) {
        return t.caption ? `${t.text} — ${t.caption}` : t.text;
      }
    };
  }
  /**
   * Tool`s styles
   * @returns CSS classes names
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   * @returns settings properties
   */
  get settings() {
    return [
      {
        name: "left",
        icon: He
      },
      {
        name: "center",
        icon: De
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   * @returns blockquote DOM element - Quote Tool container
   */
  render() {
    const t = v.make("blockquote", [
      this.css.baseClass,
      this.css.wrapper
    ]), n = v.make("div", [this.css.input, this.css.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text
    }), r = v.make("div", [this.css.input, this.css.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption
    });
    return n.dataset.placeholder = this.quotePlaceholder, r.dataset.placeholder = this.captionPlaceholder, t.appendChild(n), t.appendChild(r), t;
  }
  /**
   * Extract Quote data from Quote Tool element
   * @param quoteElement - Quote DOM element to save
   * @returns Quote data object
   */
  save(t) {
    const n = t.querySelector(`.${this.css.text}`), r = t.querySelector(`.${this.css.caption}`);
    return Object.assign(this.data, {
      text: (n == null ? void 0 : n.innerHTML) ?? "",
      caption: (r == null ? void 0 : r.innerHTML) ?? ""
    });
  }
  /**
   * Sanitizer rules
   * @returns sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      },
      caption: {
        br: !0
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   * @returns settings menu
   */
  renderSettings() {
    const t = (n) => n && n[0].toUpperCase() + n.slice(1);
    return this.settings.map((n) => ({
      icon: n.icon,
      label: this.api.i18n.t(`Align ${t(n.name)}`),
      onActivate: () => this._toggleTune(n.name),
      isActive: this.data.alignment === n.name,
      closeOnActivate: !0
    }));
  }
  /**
   * Toggle quote`s alignment
   * @param tune - alignment
   */
  _toggleTune(t) {
    this.data.alignment = t, this.block.dispatchChange();
  }
}
export {
  m as default
};
