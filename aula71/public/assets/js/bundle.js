(() => {
  "use strict";
  function t(o) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(o)
    );
  }
  function o(t, o) {
    for (var r = 0; r < o.length; r++) {
      var n = o[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, e(n.key), n);
    }
  }
  function r(t, r, e) {
    return (
      r && o(t.prototype, r),
      e && o(t, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function e(o) {
    var r = (function (o) {
      if ("object" != t(o) || !o) return o;
      var r = o[Symbol.toPrimitive];
      if (void 0 !== r) {
        var e = r.call(o, "string");
        if ("object" != t(e)) return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(o);
    })(o);
    return "symbol" == t(r) ? r : r + "";
  }
  var n = new (r(function t(o, r) {
    !(function (t, o) {
      if (!(t instanceof o))
        throw new TypeError("Cannot call a class as a function");
    })(this, t),
      (this.nome = o),
      (this.sobrenome = r);
  }))("João", "Oliveira");
  console.log(n);
})();
//# sourceMappingURL=bundle.js.map
