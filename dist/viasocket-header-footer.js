import Pe, { useState as Ae, useRef as xr, useEffect as vr } from "react";
var ne = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function mr() {
  if (Te) return U;
  Te = 1;
  var a = Pe, l = Symbol.for("react.element"), x = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(C, b, E) {
    var d, w = {}, y = null, R = null;
    E !== void 0 && (y = "" + E), b.key !== void 0 && (y = "" + b.key), b.ref !== void 0 && (R = b.ref);
    for (d in b) p.call(b, d) && !m.hasOwnProperty(d) && (w[d] = b[d]);
    if (C && C.defaultProps) for (d in b = C.defaultProps, b) w[d] === void 0 && (w[d] = b[d]);
    return { $$typeof: l, type: C, key: y, ref: R, props: w, _owner: f.current };
  }
  return U.Fragment = x, U.jsx = g, U.jsxs = g, U;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Pe, l = Symbol.for("react.element"), x = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), C = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), z = Symbol.iterator, T = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[T];
      return typeof r == "function" ? r : null;
    }
    var S = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        De("error", e, n);
      }
    }
    function De(e, r, n) {
      {
        var s = S.ReactDebugCurrentFrame, c = s.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var u = n.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Fe = !1, Ie = !1, $e = !1, Me = !1, We = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === m || We || e === f || e === E || e === d || Me || e === R || Fe || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === w || e.$$typeof === g || e.$$typeof === C || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ue(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case x:
          return "Portal";
        case m:
          return "Profiler";
        case f:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return se(r) + ".Consumer";
          case g:
            var n = e;
            return se(n._context) + ".Provider";
          case b:
            return Ue(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : P(e.type) || "Memo";
          case y: {
            var c = e, u = c._payload, o = c._init;
            try {
              return P(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, le, ie, oe, ce, ue, fe, de;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (W === 0) {
          le = console.log, ie = console.info, oe = console.warn, ce = console.error, ue = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function ze() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: le
            }),
            info: D({}, e, {
              value: ie
            }),
            warn: D({}, e, {
              value: oe
            }),
            error: D({}, e, {
              value: ce
            }),
            group: D({}, e, {
              value: ue
            }),
            groupCollapsed: D({}, e, {
              value: fe
            }),
            groupEnd: D({}, e, {
              value: de
            })
          });
        }
        W < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, G;
    function B(e, r, n) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var s = c.stack.trim().match(/\n( *(at )?)/);
            G = s && s[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, L;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Be();
    }
    function he(e, r) {
      if (!e || H)
        return "";
      {
        var n = L.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              s = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              s = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            s = _;
          }
          e();
        }
      } catch (_) {
        if (_ && s && typeof _.stack == "string") {
          for (var i = _.stack.split(`
`), k = s.stack.split(`
`), h = i.length - 1, v = k.length - 1; h >= 1 && v >= 0 && i[h] !== k[v]; )
            v--;
          for (; h >= 1 && v >= 0; h--, v--)
            if (i[h] !== k[v]) {
              if (h !== 1 || v !== 1)
                do
                  if (h--, v--, v < 0 || i[h] !== k[v]) {
                    var N = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, N), N;
                  }
                while (h >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        H = !1, q.current = u, ze(), Error.prepareStackTrace = c;
      }
      var M = e ? e.displayName || e.name : "", F = M ? B(M) : "";
      return typeof e == "function" && L.set(e, F), F;
    }
    function Le(e, r, n) {
      return he(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Je(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case E:
          return B("Suspense");
        case d:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Le(e.render);
          case w:
            return J(e.type, r, n);
          case y: {
            var s = e, c = s._payload, u = s._init;
            try {
              return J(u(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, xe = {}, ve = S.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = J(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(n);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ke(e, r, n, s, c) {
      {
        var u = Function.call.bind(Y);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var k = Error((s || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              i = e[o](r, o, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (K(c), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, o, typeof i), K(null)), i instanceof Error && !(i.message in xe) && (xe[i.message] = !0, K(c), j("Failed %s type: %s", n, i.message), K(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function He(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (He(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), me(e);
    }
    var ge = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, je;
    function Ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var n = function() {
          ye || (ye = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var n = function() {
          je || (je = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, n, s, c, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ar(e, r, n, s, c) {
      {
        var u, o = {}, i = null, k = null;
        n !== void 0 && (be(n), i = "" + n), Qe(r) && (be(r.key), i = "" + r.key), Ze(r) && (k = r.ref, er(r, c));
        for (u in r)
          Y.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (u in h)
            o[u] === void 0 && (o[u] = h[u]);
        }
        if (i || k) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(o, v), k && tr(o, v);
        }
        return nr(e, i, k, c, s, ge.current, o);
      }
    }
    var Z = S.ReactCurrentOwner, we = S.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, n = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ee() {
      {
        if (Z.current) {
          var e = P(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var ke = {};
    function lr(e) {
      {
        var r = Ee();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = lr(r);
        if (ke[n])
          return;
        ke[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Z.current && (s = " It was passed a child from " + P(e._owner.type) + "."), $(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), $(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            ee(s) && _e(s, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = A(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), o; !(o = u.next()).done; )
              ee(o.value) && _e(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = P(r);
          Ke(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = P(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            $(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ce = {};
    function Ne(e, r, n, s, c, u) {
      {
        var o = Ye(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = sr();
          k ? i += k : i += Ee();
          var h;
          e === null ? h = "null" : X(e) ? h = "array" : e !== void 0 && e.$$typeof === l ? (h = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var v = ar(e, r, n, c, u);
        if (v == null)
          return v;
        if (o) {
          var N = r.children;
          if (N !== void 0)
            if (s)
              if (X(N)) {
                for (var M = 0; M < N.length; M++)
                  Re(N[M], e);
                Object.freeze && Object.freeze(N);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(N, e);
        }
        if (Y.call(r, "key")) {
          var F = P(e), _ = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), re = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[F + re]) {
            var pr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, F, pr, F), Ce[F + re] = !0;
          }
        }
        return e === p ? or(v) : ir(v), v;
      }
    }
    function cr(e, r, n) {
      return Ne(e, r, n, !0);
    }
    function ur(e, r, n) {
      return Ne(e, r, n, !1);
    }
    var fr = ur, dr = cr;
    V.Fragment = p, V.jsx = fr, V.jsxs = dr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ne.exports = mr() : ne.exports = br();
var t = ne.exports;
function O(...a) {
  return a.filter(Boolean).join(" ");
}
const gr = ({ className: a }) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
      /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
      /* @__PURE__ */ t.jsx("line", { x1: "4", y1: "18", x2: "20", y2: "18" })
    ]
  }
), yr = ({ className: a }) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ t.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ t.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
), jr = ({ className: a }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    className: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ t.jsx("polyline", { points: "6 9 12 15 18 9" })
  }
), wr = ({ items: a }) => {
  const [l, x] = Ae(!1), p = xr(null);
  return vr(() => {
    if (!l) return;
    const f = (g) => {
      p.current && !p.current.contains(g.target) && x(!1);
    }, m = (g) => {
      g.key === "Escape" && x(!1);
    };
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", m);
    };
  }, [l]), /* @__PURE__ */ t.jsxs("div", { className: "relative mx-4 lg:mr-0", ref: p, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "flex items-center justify-center text-white px-4 bg-red-800 !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full gap-2",
        "aria-haspopup": "menu",
        "aria-expanded": l,
        "aria-label": "Open account menu",
        onClick: () => x((f) => !f),
        children: [
          "Account",
          /* @__PURE__ */ t.jsx(jr, { className: "w-4 h-4" })
        ]
      }
    ),
    l && /* @__PURE__ */ t.jsx(
      "div",
      {
        role: "menu",
        className: "absolute right-0 z-[120] mt-2 w-48 origin-top-right rounded-md border border-gray-200 bg-white py-1 shadow-lg",
        children: a.map((f, m) => /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            role: "menuitem",
            className: "block w-full px-4 py-2 text-left !text-xs uppercase text-dark hover:text-accent",
            onClick: () => {
              f.onClick(), x(!1);
            },
            children: f.label
          },
          m
        ))
      }
    )
  ] });
}, Er = ({
  logo: a,
  navLinks: l,
  actions: x,
  userMenu: p,
  isLoggedIn: f = !1,
  onLogin: m,
  onLogout: g,
  theme: C = "light",
  className: b
}) => {
  const [E, d] = Ae(!1), w = p && p.length ? p : g ? [{ label: "Logout", onClick: g }] : void 0;
  return /* @__PURE__ */ t.jsx("div", { className: C === "dark" ? "dark" : "", children: /* @__PURE__ */ t.jsxs(
    "header",
    {
      role: "banner",
      className: O(
        "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 max-h-none overflow-visible translate-y-0 opacity-100 pointer-events-auto",
        b
      ),
      children: [
        x ? /* @__PURE__ */ t.jsx("div", { className: "border-gray-300 border-b lg:block hidden bg-gray-200/80 supports-[backdrop-filter]:bg-gray-200/70 supports-[-webkit-backdrop-filter:blur(0)]:bg-gray-200/70 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]", children: /* @__PURE__ */ t.jsx("div", { className: "items-center justify-end flex !h-[30px]", children: x }) }) : null,
        /* @__PURE__ */ t.jsx("div", { className: "border-b border-gray-300 transition-all duration-300 ease-in-out overflow-hidden h-[48px] bg-[#faf9f6]/80 supports-[backdrop-filter]:bg-[#faf9f6]/60 supports-[-webkit-backdrop-filter:blur(0)]:bg-[#faf9f6]/60 backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)]", children: /* @__PURE__ */ t.jsxs("div", { className: "justify-between items-center flex px-4 h-[48px]", children: [
          /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ t.jsx(
            "a",
            {
              href: "/",
              "aria-label": "logo",
              className: "min-w-[120px] flex !justify-start text-dark !uppercase",
              children: /* @__PURE__ */ t.jsx("img", { src: a, alt: "logo", className: "h-[24px] w-auto" })
            }
          ) }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ t.jsx("div", { className: "flex", children: (l == null ? void 0 : l.length) > 0 && l.map((y, R) => /* @__PURE__ */ t.jsx(
              "a",
              {
                href: y.link,
                className: O(
                  R === 0 ? "border-l border-gray-300" : "",
                  "border-r border-gray-300 hidden lg:flex w-fit !h-[54px] px-6 hover:text-red-800 !text-xs items-center justify-center text-dark !uppercase"
                ),
                children: y.label
              },
              R
            )) }),
            f ? w ? /* @__PURE__ */ t.jsx(wr, { items: w }) : null : m ? /* @__PURE__ */ t.jsx(
              "button",
              {
                type: "button",
                className: "flex items-center justify-center text-white px-4 mx-4 lg:mr-0 bg-red-800 !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full",
                onClick: m,
                children: "Login/Sign Up"
              }
            ) : null,
            /* @__PURE__ */ t.jsx(
              "button",
              {
                type: "button",
                onClick: () => d(!0),
                className: "items-center outline-none flex lg:hidden ml-2",
                "aria-label": "Menu",
                "aria-expanded": E,
                "aria-controls": "viasocket-ui-mobile-panel",
                children: /* @__PURE__ */ t.jsx(gr, { className: "w-6 h-6" })
              }
            )
          ] })
        ] }) }),
        E && /* @__PURE__ */ t.jsxs(
          "div",
          {
            id: "viasocket-ui-mobile-panel",
            className: "fixed inset-0 z-[110] lg:hidden",
            role: "dialog",
            "aria-modal": "true",
            children: [
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  onClick: () => d(!1),
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ t.jsxs("div", { className: "absolute right-0 top-0 h-72 w-72 bg-[#faf9f6] shadow-xl flex flex-col", children: [
                /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between px-4 h-[48px] border-b border-gray-300", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "!text-xs uppercase text-dark", children: "Menu" }),
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => d(!1),
                      "aria-label": "Close menu",
                      className: "outline-none",
                      children: /* @__PURE__ */ t.jsx(yr, { className: "w-6 h-6" })
                    }
                  )
                ] }),
                /* @__PURE__ */ t.jsx("nav", { className: "flex flex-col", "aria-label": "Mobile", children: l == null ? void 0 : l.map((y, R) => /* @__PURE__ */ t.jsx(
                  "a",
                  {
                    href: y.link,
                    className: "px-4 py-3 border-b border-gray-200 !text-xs uppercase text-dark hover:text-accent",
                    onClick: () => d(!1),
                    children: y.label
                  },
                  R
                )) }),
                /* @__PURE__ */ t.jsxs("div", { className: "p-4 flex flex-col gap-2 mt-auto", children: [
                  !f && m && /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      type: "button",
                      className: "flex items-center justify-center text-white px-4 bg-red-800 !text-xs text-nowrap hover:bg-black !h-[32px] !font-normal rounded-full",
                      onClick: () => {
                        m(), d(!1);
                      },
                      children: "Login/Sign Up"
                    }
                  ),
                  f && (w == null ? void 0 : w.map((y, R) => /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-left px-2 py-2 !text-xs uppercase text-dark hover:text-accent",
                      onClick: () => {
                        y.onClick(), d(!1);
                      },
                      children: y.label
                    },
                    R
                  )))
                ] })
              ] })
            ]
          }
        )
      ]
    }
  ) });
};
Er.displayName = "Header";
const I = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": !0
}, Se = {
  instagram: /* @__PURE__ */ t.jsxs("svg", { ...I, className: "w-5 h-5", children: [
    /* @__PURE__ */ t.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    /* @__PURE__ */ t.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    /* @__PURE__ */ t.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
  ] }),
  linkedin: /* @__PURE__ */ t.jsxs("svg", { ...I, className: "w-5 h-5", children: [
    /* @__PURE__ */ t.jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ t.jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
    /* @__PURE__ */ t.jsx("circle", { cx: "4", cy: "4", r: "2" })
  ] }),
  twitter: /* @__PURE__ */ t.jsx("svg", { ...I, className: "w-5 h-5", children: /* @__PURE__ */ t.jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }) }),
  youtube: /* @__PURE__ */ t.jsxs("svg", { ...I, className: "w-5 h-5", children: [
    /* @__PURE__ */ t.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" }),
    /* @__PURE__ */ t.jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })
  ] }),
  facebook: /* @__PURE__ */ t.jsx("svg", { ...I, className: "w-5 h-5", children: /* @__PURE__ */ t.jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }) }),
  github: /* @__PURE__ */ t.jsx("svg", { ...I, className: "w-5 h-5", children: /* @__PURE__ */ t.jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) }),
  discord: /* @__PURE__ */ t.jsx("svg", { ...I, className: "w-5 h-5", children: /* @__PURE__ */ t.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) })
}, kr = (a) => a == null ? null : typeof a == "string" ? /^(https?:)?\/\/|\.(png|jpe?g|svg|webp|gif)(\?|$)/i.test(
  a
) ? /* @__PURE__ */ t.jsx("img", { src: a, alt: "logo", className: "w-full object-contain" }) : (
  // Default rendering matches the original rotated brand mark — text reads
  // top-to-bottom with letters rotated 90deg clockwise.
  /* @__PURE__ */ t.jsx("div", { className: "flex h-full w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ t.jsx("p", { className: "rotate-viasocket font-extrabold leading-none", children: a }) })
) : a, _r = (a) => {
  var l, x;
  return a.icon ? a.icon : a.type && Se[a.type] ? Se[a.type] : /* @__PURE__ */ t.jsx("span", { className: "flex h-5 w-5 items-center justify-center text-xs font-bold", children: ((x = (l = a.label) == null ? void 0 : l[0]) == null ? void 0 : x.toUpperCase()) ?? "?" });
}, Rr = (a, l) => /* @__PURE__ */ t.jsx(
  "img",
  {
    src: a.src,
    alt: a.alt,
    width: a.width ?? 100,
    height: a.height ?? 100,
    className: O("object-contain", a.className),
    style: a.style
  },
  l
), Cr = (a) => {
  if (!(a != null && a.length)) return [[], [], []];
  const l = Math.ceil(a.length / 3);
  return [a.slice(0, l), a.slice(l, 2 * l), a.slice(2 * l)];
}, te = ({ groups: a }) => /* @__PURE__ */ t.jsx(t.Fragment, { children: a.map(
  (l, x) => {
    var p;
    return ((p = l.links) == null ? void 0 : p.length) > 0 || l.extra ? /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "font-bold", children: l.title }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-2", children: [
        l.links.map((f, m) => /* @__PURE__ */ t.jsx(
          "a",
          {
            href: f.link,
            target: f.external !== !1 ? "_blank" : void 0,
            rel: f.external !== !1 ? "noopener noreferrer" : void 0,
            "aria-label": f.label,
            className: O(
              "hover:text-blue-500 transition-colors duration-300",
              f.highlight && "text-blue-500"
            ),
            children: /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: f.label })
          },
          m
        )),
        l.extra
      ] })
    ] }, x) : null;
  }
) }), Nr = ({
  logo: a,
  linkGroups: l,
  socialLinks: x = [],
  badges: p = [],
  copyright: f,
  legalLine: m,
  bottomLinks: g = [],
  theme: C = "light",
  className: b
}) => {
  const E = C === "dark" ? "border-white" : "border-gray-200", [d, w, y] = Cr(l), R = typeof f > "u" ? typeof a == "string" ? `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${a}` : `© ${(/* @__PURE__ */ new Date()).getFullYear()}` : f, z = O(
    "viasocket-footer-wrapper bg-white grid lg:grid-rows-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 ms:grid-cols-4 grid-cols-1 border",
    E,
    b
  );
  return /* @__PURE__ */ t.jsx("div", { className: C === "dark" ? "dark" : "", children: /* @__PURE__ */ t.jsxs("footer", { role: "contentinfo", className: z, children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: O(
          "row-span-1 justify-center col-span-4 lg:col-span-1 order-last lg:order-first md:p-10 p-4 h-full lg:border-r border-r-0 flex flex-col",
          E
        ),
        children: kr(a)
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "row-span-1 col-span-4 lg:col-span-3 grid sm:grid-cols-3 grid-cols-1", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: O(
            "flex flex-col gap-12 md:p-10 p-4 lg:border-b-0 border-b sm:border-r",
            E
          ),
          children: /* @__PURE__ */ t.jsx(te, { groups: d })
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: O(
            "flex flex-col gap-12 md:p-10 p-4 sm:border-r lg:border-b-0 border-b",
            E
          ),
          children: [
            /* @__PURE__ */ t.jsx(te, { groups: w }),
            (p.length > 0 || x.length > 0) && /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-6 mt-auto p-4", children: [
              p.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "flex gap-2 justify-center items-center", children: p.map(Rr) }),
              x.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "flex gap-2 justify-center items-center md:gap-6", children: x.map((T, A) => /* @__PURE__ */ t.jsx(
                "a",
                {
                  href: T.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": T.label,
                  children: _r(T)
                },
                A
              )) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: O(
            "flex flex-col lg:border-b-0 border-b gap-12 md:p-10 p-4",
            E
          ),
          children: [
            /* @__PURE__ */ t.jsx(te, { groups: y }),
            /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t.jsxs("p", { className: "text-sm flex items-center gap-1 flex-wrap mt-auto", children: [
                R,
                g.length > 0 && /* @__PURE__ */ t.jsx("span", { children: "|" }),
                g.map((T, A) => {
                  const S = A === g.length - 1, j = A === g.length - 2;
                  return /* @__PURE__ */ t.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ t.jsxs(
                          "a",
                          {
                            href: T.link || "#",
                            onClick: T.onClick,
                            className: "active-link text-link",
                            children: [
                              T.label,
                              !S && !j && /* @__PURE__ */ t.jsx("span", { className: "text-black", children: "," })
                            ]
                          }
                        ),
                        j && g.length > 1 && /* @__PURE__ */ t.jsx("span", { children: "and" })
                      ]
                    },
                    A
                  );
                })
              ] }),
              m && /* @__PURE__ */ t.jsx("p", { className: "text-sm flex items-center gap-1 flex-wrap", children: m })
            ] })
          ]
        }
      )
    ] })
  ] }) });
};
Nr.displayName = "Footer";
export {
  Nr as Footer,
  Er as Header
};
