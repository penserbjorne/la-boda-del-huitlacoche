/*! jQuery UI - v1.12.1 - 2021-02-17
 * http://jqueryui.com
 * Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
! function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (b) {
  b.ui = b.ui || {};
  b.ui.version = "1.12.1";
  var l, u, a, d, t, h, p, g, s, m, r, o, f, c, y, e, i, n, v, x, w = "ui-effects-",
    C = "ui-effects-style",
    T = "ui-effects-animated",
    k = b;

  function W(t, e, i) {
    var n = g[e.type] || {};
    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : t < 0 ? 0 : n.max < t ? n.max : t)
  }

  function q(n) {
    var o = h(),
      r = o._rgba = [];
    return n = n.toLowerCase(), m(t, function (t, e) {
      var i = e.re.exec(n),
        i = i && e.parse(i),
        e = e.space || "rgba";
      if (i) return i = o[e](i), o[p[e].cache] = i[p[e].cache], r = o._rgba = i._rgba, !1
    }), r.length ? ("0,0,0,0" === r.join() && l.extend(r, a.transparent), o) : a[n]
  }

  function B(t, e, i) {
    return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
  }

  function H(t) {
    var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
      o = {};
    if (n && n.length && n[0] && n[n[0]])
      for (i = n.length; i--;) "string" == typeof n[e = n[i]] && (o[b.camelCase(e)] = n[e]);
    else
      for (e in n) "string" == typeof n[e] && (o[e] = n[e]);
    return o
  }

  function _(t, e, i, n) {
    return b.isPlainObject(t) && (t = (e = t).effect), t = {
      effect: t
    }, null == e && (e = {}), b.isFunction(e) && (n = e, i = null, e = {}), "number" != typeof e && !b.fx.speeds[e] || (n = i, i = e, e = {}), b.isFunction(i) && (n = i, i = null), e && b.extend(t, e), i = i || e.duration, t.duration = b.fx.off ? 0 : "number" == typeof i ? i : i in b.fx.speeds ? b.fx.speeds[i] : b.fx.speeds._default, t.complete = n || e.complete, t
  }

  function M(t) {
    return !t || "number" == typeof t || b.fx.speeds[t] || ("string" == typeof t && !b.effects.effect[t] || (b.isFunction(t) || "object" == typeof t && !t.effect))
  }

  function S(t, e) {
    var i = e.outerWidth(),
      e = e.outerHeight(),
      t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: "auto" === t[2] ? i : parseFloat(t[2]),
      bottom: "auto" === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0
    }
  }
  b.effects = {
    effect: {}
  }, d = /^([\-+])=\s*(\d+\.?\d*)/, t = [{
    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function (t) {
      return [t[1], t[2], t[3], t[4]]
    }
  }, {
    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function (t) {
      return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
    }
  }, {
    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
    parse: function (t) {
      return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
    }
  }, {
    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
    parse: function (t) {
      return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
    }
  }, {
    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    space: "hsla",
    parse: function (t) {
      return [t[1], t[2] / 100, t[3] / 100, t[4]]
    }
  }], h = (l = k).Color = function (t, e, i, n) {
    return new l.Color.fn.parse(t, e, i, n)
  }, p = {
    rgba: {
      props: {
        red: {
          idx: 0,
          type: "byte"
        },
        green: {
          idx: 1,
          type: "byte"
        },
        blue: {
          idx: 2,
          type: "byte"
        }
      }
    },
    hsla: {
      props: {
        hue: {
          idx: 0,
          type: "degrees"
        },
        saturation: {
          idx: 1,
          type: "percent"
        },
        lightness: {
          idx: 2,
          type: "percent"
        }
      }
    }
  }, g = {
    byte: {
      floor: !0,
      max: 255
    },
    percent: {
      max: 1
    },
    degrees: {
      mod: 360,
      floor: !0
    }
  }, s = h.support = {}, I = l("<p>")[0], m = l.each, I.style.cssText = "background-color:rgba(1,1,1,.5)", s.rgba = -1 < I.style.backgroundColor.indexOf("rgba"), m(p, function (t, e) {
    e.cache = "_" + t, e.props.alpha = {
      idx: 3,
      type: "percent",
      def: 1
    }
  }), h.fn = l.extend(h.prototype, {
    parse: function (o, t, e, i) {
      if (o === u) return this._rgba = [null, null, null, null], this;
      (o.jquery || o.nodeType) && (o = l(o).css(t), t = u);
      var r = this,
        n = l.type(o),
        s = this._rgba = [];
      return t !== u && (o = [o, t, e, i], n = "array"), "string" === n ? this.parse(q(o) || a._default) : "array" === n ? (m(p.rgba.props, function (t, e) {
        s[e.idx] = W(o[e.idx], e)
      }), this) : "object" === n ? (m(p, o instanceof h ? function (t, e) {
        o[e.cache] && (r[e.cache] = o[e.cache].slice())
      } : function (t, i) {
        var n = i.cache;
        m(i.props, function (t, e) {
          if (!r[n] && i.to) {
            if ("alpha" === t || null == o[t]) return;
            r[n] = i.to(r._rgba)
          }
          r[n][e.idx] = W(o[t], e, !0)
        }), r[n] && l.inArray(null, r[n].slice(0, 3)) < 0 && (r[n][3] = 1, i.from && (r._rgba = i.from(r[n])))
      }), this) : void 0
    },
    is: function (t) {
      var o = h(t),
        r = !0,
        s = this;
      return m(p, function (t, e) {
        var i, n = o[e.cache];
        return n && (i = s[e.cache] || e.to && e.to(s._rgba) || [], m(e.props, function (t, e) {
          if (null != n[e.idx]) return r = n[e.idx] === i[e.idx]
        })), r
      }), r
    },
    _space: function () {
      var i = [],
        n = this;
      return m(p, function (t, e) {
        n[e.cache] && i.push(t)
      }), i.pop()
    },
    transition: function (t, s) {
      var e = (c = h(t))._space(),
        i = p[e],
        t = 0 === this.alpha() ? h("transparent") : this,
        a = t[i.cache] || i.to(t._rgba),
        f = a.slice(),
        c = c[i.cache];
      return m(i.props, function (t, e) {
        var i = e.idx,
          n = a[i],
          o = c[i],
          r = g[e.type] || {};
        null !== o && (null === n ? f[i] = o : (r.mod && (r.mod / 2 < o - n ? n += r.mod : r.mod / 2 < n - o && (n -= r.mod)), f[i] = W((o - n) * s + n, e)))
      }), this[e](f)
    },
    blend: function (t) {
      if (1 === this._rgba[3]) return this;
      var e = this._rgba.slice(),
        i = e.pop(),
        n = h(t)._rgba;
      return h(l.map(e, function (t, e) {
        return (1 - i) * n[e] + i * t
      }))
    },
    toRgbaString: function () {
      var t = "rgba(",
        e = l.map(this._rgba, function (t, e) {
          return null == t ? 2 < e ? 1 : 0 : t
        });
      return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
    },
    toHslaString: function () {
      var t = "hsla(",
        e = l.map(this.hsla(), function (t, e) {
          return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
        });
      return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
    },
    toHexString: function (t) {
      var e = this._rgba.slice(),
        i = e.pop();
      return t && e.push(~~(255 * i)), "#" + l.map(e, function (t) {
        return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
      }).join("")
    },
    toString: function () {
      return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
    }
  }), h.fn.parse.prototype = h.fn, p.hsla.to = function (t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e = t[0] / 255,
      i = t[1] / 255,
      n = t[2] / 255,
      o = t[3],
      r = Math.max(e, i, n),
      s = Math.min(e, i, n),
      a = r - s,
      f = r + s,
      t = .5 * f,
      i = s === r ? 0 : e === r ? 60 * (i - n) / a + 360 : i === r ? 60 * (n - e) / a + 120 : 60 * (e - i) / a + 240,
      f = 0 == a ? 0 : t <= .5 ? a / f : a / (2 - f);
    return [Math.round(i) % 360, f, t, null == o ? 1 : o]
  }, p.hsla.from = function (t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e = t[0] / 360,
      i = t[1],
      n = t[2],
      t = t[3],
      i = n <= .5 ? n * (1 + i) : n + i - n * i,
      n = 2 * n - i;
    return [Math.round(255 * B(n, i, e + 1 / 3)), Math.round(255 * B(n, i, e)), Math.round(255 * B(n, i, e - 1 / 3)), t]
  }, m(p, function (f, t) {
    var r = t.props,
      s = t.cache,
      a = t.to,
      c = t.from;
    h.fn[f] = function (t) {
      if (a && !this[s] && (this[s] = a(this._rgba)), t === u) return this[s].slice();
      var e, i = l.type(t),
        n = "array" === i || "object" === i ? t : arguments,
        o = this[s].slice();
      return m(r, function (t, e) {
        t = n["object" === i ? t : e.idx];
        null == t && (t = o[e.idx]), o[e.idx] = W(t, e)
      }), c ? ((e = h(c(o)))[s] = o, e) : h(o)
    }, m(r, function (s, a) {
      h.fn[s] || (h.fn[s] = function (t) {
        var e, i = l.type(t),
          n = "alpha" === s ? this._hsla ? "hsla" : "rgba" : f,
          o = this[n](),
          r = o[a.idx];
        return "undefined" === i ? r : ("function" === i && (t = t.call(this, r), i = l.type(t)), null == t && a.empty ? this : ("string" === i && (e = d.exec(t)) && (t = r + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), o[a.idx] = t, this[n](o)))
      })
    })
  }), h.hook = function (t) {
    t = t.split(" ");
    m(t, function (t, r) {
      l.cssHooks[r] = {
        set: function (t, e) {
          var i, n, o = "";
          if ("transparent" !== e && ("string" !== l.type(e) || (i = q(e)))) {
            if (e = h(i || e), !s.rgba && 1 !== e._rgba[3]) {
              for (n = "backgroundColor" === r ? t.parentNode : t;
                ("" === o || "transparent" === o) && n && n.style;) try {
                o = l.css(n, "backgroundColor"), n = n.parentNode
              } catch (t) {}
              e = e.blend(o && "transparent" !== o ? o : "_default")
            }
            e = e.toRgbaString()
          }
          try {
            t.style[r] = e
          } catch (t) {}
        }
      }, l.fx.step[r] = function (t) {
        t.colorInit || (t.start = h(t.elem, r), t.end = h(t.end), t.colorInit = !0), l.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
      }
    })
  }, h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), l.cssHooks.borderColor = {
    expand: function (i) {
      var n = {};
      return m(["Top", "Right", "Bottom", "Left"], function (t, e) {
        n["border" + e + "Color"] = i
      }), n
    }
  }, a = l.Color.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
  }, c = ["add", "remove", "toggle"], y = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
  }, b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
    b.fx.step[e] = function (t) {
      ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (k.style(t.elem, e, t.end), t.setAttr = !0)
    }
  }), b.fn.addBack || (b.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
  }), b.effects.animateClass = function (o, t, e, i) {
    var r = b.speed(t, e, i);
    return this.queue(function () {
      var i = b(this),
        t = i.attr("class") || "",
        e = (e = r.children ? i.find("*").addBack() : i).map(function () {
          return {
            el: b(this),
            start: H(this)
          }
        }),
        n = function () {
          b.each(c, function (t, e) {
            o[e] && i[e + "Class"](o[e])
          })
        };
      n(), e = e.map(function () {
        return this.end = H(this.el[0]), this.diff = function (t, e) {
          var i, n, o = {};
          for (i in e) n = e[i], t[i] !== n && (y[i] || !b.fx.step[i] && isNaN(parseFloat(n)) || (o[i] = n));
          return o
        }(this.start, this.end), this
      }), i.attr("class", t), e = e.map(function () {
        var t = this,
          e = b.Deferred(),
          i = b.extend({}, r, {
            queue: !1,
            complete: function () {
              e.resolve(t)
            }
          });
        return this.el.animate(this.diff, i), e.promise()
      }), b.when.apply(b, e.get()).done(function () {
        n(), b.each(arguments, function () {
          var e = this.el;
          b.each(this.diff, function (t) {
            e.css(t, "")
          })
        }), r.complete.call(i[0])
      })
    })
  }, b.fn.extend({
    addClass: (f = b.fn.addClass, function (t, e, i, n) {
      return e ? b.effects.animateClass.call(this, {
        add: t
      }, e, i, n) : f.apply(this, arguments)
    }),
    removeClass: (o = b.fn.removeClass, function (t, e, i, n) {
      return 1 < arguments.length ? b.effects.animateClass.call(this, {
        remove: t
      }, e, i, n) : o.apply(this, arguments)
    }),
    toggleClass: (r = b.fn.toggleClass, function (t, e, i, n, o) {
      return "boolean" == typeof e || void 0 === e ? i ? b.effects.animateClass.call(this, e ? {
        add: t
      } : {
        remove: t
      }, i, n, o) : r.apply(this, arguments) : b.effects.animateClass.call(this, {
        toggle: t
      }, e, i, n)
    }),
    switchClass: function (t, e, i, n, o) {
      return b.effects.animateClass.call(this, {
        add: e,
        remove: t
      }, i, n, o)
    }
  }), b.expr && b.expr.filters && b.expr.filters.animated && (b.expr.filters.animated = (e = b.expr.filters.animated, function (t) {
    return !!b(t).data(T) || e(t)
  })), !1 !== b.uiBackCompat && b.extend(b.effects, {
    save: function (t, e) {
      for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(w + e[i], t[0].style[e[i]])
    },
    restore: function (t, e) {
      for (var i, n = 0, o = e.length; n < o; n++) null !== e[n] && (i = t.data(w + e[n]), t.css(e[n], i))
    },
    setMode: function (t, e) {
      return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
    },
    createWrapper: function (i) {
      if (i.parent().is(".ui-effects-wrapper")) return i.parent();
      var n = {
          width: i.outerWidth(!0),
          height: i.outerHeight(!0),
          float: i.css("float")
        },
        t = b("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
        e = {
          width: i.width(),
          height: i.height()
        },
        o = document.activeElement;
      try {
        o.id
      } catch (t) {
        o = document.body
      }
      return i.wrap(t), i[0] !== o && !b.contains(i[0], o) || b(o).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({
        position: "relative"
      }), i.css({
        position: "relative"
      })) : (b.extend(n, {
        position: i.css("position"),
        zIndex: i.css("z-index")
      }), b.each(["top", "left", "bottom", "right"], function (t, e) {
        n[e] = i.css(e), isNaN(parseInt(n[e], 10)) && (n[e] = "auto")
      }), i.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      })), i.css(e), t.css(n).show()
    },
    removeWrapper: function (t) {
      var e = document.activeElement;
      return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !b.contains(t[0], e) || b(e).trigger("focus")), t
    }
  }), b.extend(b.effects, {
    version: "1.12.1",
    define: function (t, e, i) {
      return i || (i = e, e = "effect"), b.effects.effect[t] = i, b.effects.effect[t].mode = e, i
    },
    scaledDimensions: function (t, e, i) {
      if (0 === e) return {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      };
      var n = "horizontal" !== i ? (e || 100) / 100 : 1,
        e = "vertical" !== i ? (e || 100) / 100 : 1;
      return {
        height: t.height() * e,
        width: t.width() * n,
        outerHeight: t.outerHeight() * e,
        outerWidth: t.outerWidth() * n
      }
    },
    clipToBox: function (t) {
      return {
        width: t.clip.right - t.clip.left,
        height: t.clip.bottom - t.clip.top,
        left: t.clip.left,
        top: t.clip.top
      }
    },
    unshift: function (t, e, i) {
      var n = t.queue();
      1 < e && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
    },
    saveStyle: function (t) {
      t.data(C, t[0].style.cssText)
    },
    restoreStyle: function (t) {
      t[0].style.cssText = t.data(C) || "", t.removeData(C)
    },
    mode: function (t, e) {
      t = t.is(":hidden");
      return "toggle" === e && (e = t ? "show" : "hide"), (t ? "hide" === e : "show" === e) && (e = "none"), e
    },
    getBaseline: function (t, e) {
      var i, n;
      switch (t[0]) {
        case "top":
          i = 0;
          break;
        case "middle":
          i = .5;
          break;
        case "bottom":
          i = 1;
          break;
        default:
          i = t[0] / e.height
      }
      switch (t[1]) {
        case "left":
          n = 0;
          break;
        case "center":
          n = .5;
          break;
        case "right":
          n = 1;
          break;
        default:
          n = t[1] / e.width
      }
      return {
        x: n,
        y: i
      }
    },
    createPlaceholder: function (t) {
      var e, i = t.css("position"),
        n = t.position();
      return t.css({
        marginTop: t.css("marginTop"),
        marginBottom: t.css("marginBottom"),
        marginLeft: t.css("marginLeft"),
        marginRight: t.css("marginRight")
      }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = b("<" + t[0].nodeName + ">").insertAfter(t).css({
        display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
        visibility: "hidden",
        marginTop: t.css("marginTop"),
        marginBottom: t.css("marginBottom"),
        marginLeft: t.css("marginLeft"),
        marginRight: t.css("marginRight"),
        float: t.css("float")
      }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(w + "placeholder", e)), t.css({
        position: i,
        left: n.left,
        top: n.top
      }), e
    },
    removePlaceholder: function (t) {
      var e = w + "placeholder",
        i = t.data(e);
      i && (i.remove(), t.removeData(e))
    },
    cleanUp: function (t) {
      b.effects.restoreStyle(t), b.effects.removePlaceholder(t)
    },
    setTransition: function (n, t, o, r) {
      return r = r || {}, b.each(t, function (t, e) {
        var i = n.cssUnit(e);
        0 < i[0] && (r[e] = i[0] * o + i[1])
      }), r
    }
  }), b.fn.extend({
    effect: function () {
      function t(t) {
        var e = b(this),
          i = b.effects.mode(e, a) || r;
        e.data(T, !0), f.push(i), r && ("show" === i || i === r && "hide" === i) && e.show(), r && "none" === i || b.effects.saveStyle(e), b.isFunction(t) && t()
      }
      var n = _.apply(this, arguments),
        o = b.effects.effect[n.effect],
        r = o.mode,
        e = n.queue,
        i = e || "fx",
        s = n.complete,
        a = n.mode,
        f = [];
      return b.fx.off || !o ? a ? this[a](n.duration, s) : this.each(function () {
        s && s.call(this)
      }) : !1 === e ? this.each(t).each(c) : this.queue(i, t).queue(i, c);

      function c(t) {
        var e = b(this);

        function i() {
          b.isFunction(s) && s.call(e[0]), b.isFunction(t) && t()
        }
        n.mode = f.shift(), !1 === b.uiBackCompat || r ? "none" === n.mode ? (e[a](), i()) : o.call(e[0], n, function () {
          e.removeData(T), b.effects.cleanUp(e), "hide" === n.mode && e.hide(), i()
        }) : (e.is(":hidden") ? "hide" === a : "show" === a) ? (e[a](), i()) : o.call(e[0], n, i)
      }
    },
    show: (v = b.fn.show, function (t) {
      if (M(t)) return v.apply(this, arguments);
      var e = _.apply(this, arguments);
      return e.mode = "show", this.effect.call(this, e)
    }),
    hide: (n = b.fn.hide, function (t) {
      if (M(t)) return n.apply(this, arguments);
      var e = _.apply(this, arguments);
      return e.mode = "hide", this.effect.call(this, e)
    }),
    toggle: (i = b.fn.toggle, function (t) {
      if (M(t) || "boolean" == typeof t) return i.apply(this, arguments);
      var e = _.apply(this, arguments);
      return e.mode = "toggle", this.effect.call(this, e)
    }),
    cssUnit: function (t) {
      var i = this.css(t),
        n = [];
      return b.each(["em", "px", "%", "pt"], function (t, e) {
        0 < i.indexOf(e) && (n = [parseFloat(i), e])
      }), n
    },
    cssClip: function (t) {
      return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : S(this.css("clip"), this)
    },
    transfer: function (t, e) {
      var i = b(this),
        n = b(t.to),
        o = "fixed" === n.css("position"),
        r = b("body"),
        s = o ? r.scrollTop() : 0,
        a = o ? r.scrollLeft() : 0,
        r = n.offset(),
        r = {
          top: r.top - s,
          left: r.left - a,
          height: n.innerHeight(),
          width: n.innerWidth()
        },
        n = i.offset(),
        f = b("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
          top: n.top - s,
          left: n.left - a,
          height: i.innerHeight(),
          width: i.innerWidth(),
          position: o ? "fixed" : "absolute"
        }).animate(r, t.duration, t.easing, function () {
          f.remove(), b.isFunction(e) && e()
        })
    }
  }), b.fx.step.clip = function (t) {
    t.clipInit || (t.start = b(t.elem).cssClip(), "string" == typeof t.end && (t.end = S(t.end, t.elem)), t.clipInit = !0), b(t.elem).cssClip({
      top: t.pos * (t.end.top - t.start.top) + t.start.top,
      right: t.pos * (t.end.right - t.start.right) + t.start.right,
      bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
      left: t.pos * (t.end.left - t.start.left) + t.start.left
    })
  }, x = {}, b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
    x[t] = function (t) {
      return Math.pow(t, e + 2)
    }
  }), b.extend(x, {
    Sine: function (t) {
      return 1 - Math.cos(t * Math.PI / 2)
    },
    Circ: function (t) {
      return 1 - Math.sqrt(1 - t * t)
    },
    Elastic: function (t) {
      return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
    },
    Back: function (t) {
      return t * t * (3 * t - 2)
    },
    Bounce: function (t) {
      for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
      return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
    }
  }), b.each(x, function (t, e) {
    b.easing["easeIn" + t] = e, b.easing["easeOut" + t] = function (t) {
      return 1 - e(1 - t)
    }, b.easing["easeInOut" + t] = function (t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
    }
  });
  var I = b.effects;
  b.effects.define("blind", "hide", function (t, e) {
    var i = {
        up: ["bottom", "top"],
        vertical: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        horizontal: ["right", "left"],
        right: ["left", "right"]
      },
      n = b(this),
      o = t.direction || "up",
      r = n.cssClip(),
      s = {
        clip: b.extend({}, r)
      },
      a = b.effects.createPlaceholder(n);
    s.clip[i[o][0]] = s.clip[i[o][1]], "show" === t.mode && (n.cssClip(s.clip), a && a.css(b.effects.clipToBox(s)), s.clip = r), a && a.animate(b.effects.clipToBox(s), t.duration, t.easing), n.animate(s, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  }), b.effects.define("bounce", function (t, e) {
    var i, n, o = b(this),
      r = t.mode,
      s = "hide" === r,
      a = "show" === r,
      f = t.direction || "up",
      c = t.distance,
      l = t.times || 5,
      r = 2 * l + (a || s ? 1 : 0),
      u = t.duration / r,
      d = t.easing,
      h = "up" === f || "down" === f ? "top" : "left",
      p = "up" === f || "left" === f,
      g = 0,
      t = o.queue().length;
    for (b.effects.createPlaceholder(o), f = o.css(h), c = c || o["top" == h ? "outerHeight" : "outerWidth"]() / 3, a && ((n = {
        opacity: 1
      })[h] = f, o.css("opacity", 0).css(h, p ? 2 * -c : 2 * c).animate(n, u, d)), s && (c /= Math.pow(2, l - 1)), (n = {})[h] = f; g < l; g++)(i = {})[h] = (p ? "-=" : "+=") + c, o.animate(i, u, d).animate(n, u, d), c = s ? 2 * c : c / 2;
    s && ((i = {
      opacity: 0
    })[h] = (p ? "-=" : "+=") + c, o.animate(i, u, d)), o.queue(e), b.effects.unshift(o, t, 1 + r)
  }), b.effects.define("clip", "hide", function (t, e) {
    var i = {},
      n = b(this),
      o = t.direction || "vertical",
      r = "both" === o,
      s = r || "horizontal" === o,
      r = r || "vertical" === o,
      o = n.cssClip();
    i.clip = {
      top: r ? (o.bottom - o.top) / 2 : o.top,
      right: s ? (o.right - o.left) / 2 : o.right,
      bottom: r ? (o.bottom - o.top) / 2 : o.bottom,
      left: s ? (o.right - o.left) / 2 : o.left
    }, b.effects.createPlaceholder(n), "show" === t.mode && (n.cssClip(i.clip), i.clip = o), n.animate(i, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  }), b.effects.define("drop", "hide", function (t, e) {
    var i = b(this),
      n = "show" === t.mode,
      o = t.direction || "left",
      r = "up" === o || "down" === o ? "top" : "left",
      s = "up" === o || "left" === o ? "-=" : "+=",
      a = "+=" == s ? "-=" : "+=",
      f = {
        opacity: 0
      };
    b.effects.createPlaceholder(i), o = t.distance || i["top" == r ? "outerHeight" : "outerWidth"](!0) / 2, f[r] = s + o, n && (i.css(f), f[r] = a + o, f.opacity = 1), i.animate(f, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  }), b.effects.define("explode", "hide", function (t, e) {
    var i, n, o, r, s, a, f = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      c = f,
      l = b(this),
      u = "show" === t.mode,
      d = l.show().css("visibility", "hidden").offset(),
      h = Math.ceil(l.outerWidth() / c),
      p = Math.ceil(l.outerHeight() / f),
      g = [];

    function m() {
      g.push(this), g.length === f * c && (l.css({
        visibility: "visible"
      }), b(g).remove(), e())
    }
    for (i = 0; i < f; i++)
      for (r = d.top + i * p, a = i - (f - 1) / 2, n = 0; n < c; n++) o = d.left + n * h, s = n - (c - 1) / 2, l.clone().appendTo("body").wrap("<div></div>").css({
        position: "absolute",
        visibility: "visible",
        left: -n * h,
        top: -i * p
      }).parent().addClass("ui-effects-explode").css({
        position: "absolute",
        overflow: "hidden",
        width: h,
        height: p,
        left: o + (u ? s * h : 0),
        top: r + (u ? a * p : 0),
        opacity: u ? 0 : 1
      }).animate({
        left: o + (u ? 0 : s * h),
        top: r + (u ? 0 : a * p),
        opacity: u ? 1 : 0
      }, t.duration || 500, t.easing, m)
  }), b.effects.define("fade", "toggle", function (t, e) {
    var i = "show" === t.mode;
    b(this).css("opacity", i ? 0 : 1).animate({
      opacity: i ? 1 : 0
    }, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  }), b.effects.define("fold", "hide", function (e, t) {
    var i = b(this),
      n = e.mode,
      o = "show" === n,
      r = "hide" === n,
      s = e.size || 15,
      a = /([0-9]+)%/.exec(s),
      f = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
      c = e.duration / 2,
      l = b.effects.createPlaceholder(i),
      u = i.cssClip(),
      d = {
        clip: b.extend({}, u)
      },
      h = {
        clip: b.extend({}, u)
      },
      p = [u[f[0]], u[f[1]]],
      n = i.queue().length;
    a && (s = parseInt(a[1], 10) / 100 * p[r ? 0 : 1]), d.clip[f[0]] = s, h.clip[f[0]] = s, h.clip[f[1]] = 0, o && (i.cssClip(h.clip), l && l.css(b.effects.clipToBox(h)), h.clip = u), i.queue(function (t) {
      l && l.animate(b.effects.clipToBox(d), c, e.easing).animate(b.effects.clipToBox(h), c, e.easing), t()
    }).animate(d, c, e.easing).animate(h, c, e.easing).queue(t), b.effects.unshift(i, n, 4)
  }), b.effects.define("highlight", "show", function (t, e) {
    var i = b(this),
      n = {
        backgroundColor: i.css("backgroundColor")
      };
    "hide" === t.mode && (n.opacity = 0), b.effects.saveStyle(i), i.css({
      backgroundImage: "none",
      backgroundColor: t.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  }), b.effects.define("size", function (n, e) {
    var o, i = b(this),
      t = ["fontSize"],
      r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      s = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      a = n.mode,
      f = "effect" !== a,
      c = n.scale || "both",
      l = n.origin || ["middle", "center"],
      u = i.css("position"),
      d = i.position(),
      h = b.effects.scaledDimensions(i),
      p = n.from || h,
      g = n.to || b.effects.scaledDimensions(i, 0);
    b.effects.createPlaceholder(i), "show" === a && (a = p, p = g, g = a), o = {
      from: {
        y: p.height / h.height,
        x: p.width / h.width
      },
      to: {
        y: g.height / h.height,
        x: g.width / h.width
      }
    }, "box" !== c && "both" !== c || (o.from.y !== o.to.y && (p = b.effects.setTransition(i, r, o.from.y, p), g = b.effects.setTransition(i, r, o.to.y, g)), o.from.x !== o.to.x && (p = b.effects.setTransition(i, s, o.from.x, p), g = b.effects.setTransition(i, s, o.to.x, g))), "content" !== c && "both" !== c || o.from.y !== o.to.y && (p = b.effects.setTransition(i, t, o.from.y, p), g = b.effects.setTransition(i, t, o.to.y, g)), l && (l = b.effects.getBaseline(l, h), p.top = (h.outerHeight - p.outerHeight) * l.y + d.top, p.left = (h.outerWidth - p.outerWidth) * l.x + d.left, g.top = (h.outerHeight - g.outerHeight) * l.y + d.top, g.left = (h.outerWidth - g.outerWidth) * l.x + d.left), i.css(p), "content" !== c && "both" !== c || (r = r.concat(["marginTop", "marginBottom"]).concat(t), s = s.concat(["marginLeft", "marginRight"]), i.find("*[width]").each(function () {
      var t = b(this),
        e = b.effects.scaledDimensions(t),
        i = {
          height: e.height * o.from.y,
          width: e.width * o.from.x,
          outerHeight: e.outerHeight * o.from.y,
          outerWidth: e.outerWidth * o.from.x
        },
        e = {
          height: e.height * o.to.y,
          width: e.width * o.to.x,
          outerHeight: e.height * o.to.y,
          outerWidth: e.width * o.to.x
        };
      o.from.y !== o.to.y && (i = b.effects.setTransition(t, r, o.from.y, i), e = b.effects.setTransition(t, r, o.to.y, e)), o.from.x !== o.to.x && (i = b.effects.setTransition(t, s, o.from.x, i), e = b.effects.setTransition(t, s, o.to.x, e)), f && b.effects.saveStyle(t), t.css(i), t.animate(e, n.duration, n.easing, function () {
        f && b.effects.restoreStyle(t)
      })
    })), i.animate(g, {
      queue: !1,
      duration: n.duration,
      easing: n.easing,
      complete: function () {
        var t = i.offset();
        0 === g.opacity && i.css("opacity", p.opacity), f || (i.css("position", "static" === u ? "relative" : u).offset(t), b.effects.saveStyle(i)), e()
      }
    })
  }), b.effects.define("scale", function (t, e) {
    var i = b(this),
      n = t.mode,
      n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== n ? 0 : 100),
      n = b.extend(!0, {
        from: b.effects.scaledDimensions(i),
        to: b.effects.scaledDimensions(i, n, t.direction || "both"),
        origin: t.origin || ["middle", "center"]
      }, t);
    t.fade && (n.from.opacity = 1, n.to.opacity = 0), b.effects.effect.size.call(this, n, e)
  }), b.effects.define("puff", "hide", function (t, e) {
    t = b.extend(!0, {}, t, {
      fade: !0,
      percent: parseInt(t.percent, 10) || 150
    });
    b.effects.effect.scale.call(this, t, e)
  }), b.effects.define("pulsate", "show", function (t, e) {
    var i = b(this),
      n = t.mode,
      o = "show" === n,
      n = o || "hide" === n,
      r = 2 * (t.times || 5) + (n ? 1 : 0),
      s = t.duration / r,
      a = 0,
      f = 1,
      n = i.queue().length;
    for (!o && i.is(":visible") || (i.css("opacity", 0).show(), a = 1); f < r; f++) i.animate({
      opacity: a
    }, s, t.easing), a = 1 - a;
    i.animate({
      opacity: a
    }, s, t.easing), i.queue(e), b.effects.unshift(i, n, 1 + r)
  }), b.effects.define("shake", function (t, e) {
    var i = 1,
      n = b(this),
      o = t.direction || "left",
      r = t.distance || 20,
      s = t.times || 3,
      a = 2 * s + 1,
      f = Math.round(t.duration / a),
      c = "up" === o || "down" === o ? "top" : "left",
      l = "up" === o || "left" === o,
      u = {},
      d = {},
      h = {},
      o = n.queue().length;
    for (b.effects.createPlaceholder(n), u[c] = (l ? "-=" : "+=") + r, d[c] = (l ? "+=" : "-=") + 2 * r, h[c] = (l ? "-=" : "+=") + 2 * r, n.animate(u, f, t.easing); i < s; i++) n.animate(d, f, t.easing).animate(h, f, t.easing);
    n.animate(d, f, t.easing).animate(u, f / 2, t.easing).queue(e), b.effects.unshift(n, o, 1 + a)
  }), b.effects.define("slide", "show", function (t, e) {
    var i, n, o = b(this),
      r = {
        up: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        right: ["left", "right"]
      },
      s = t.mode,
      a = t.direction || "left",
      f = "up" === a || "down" === a ? "top" : "left",
      c = "up" === a || "left" === a,
      l = t.distance || o["top" == f ? "outerHeight" : "outerWidth"](!0),
      u = {};
    b.effects.createPlaceholder(o), i = o.cssClip(), n = o.position()[f], u[f] = (c ? -1 : 1) * l + n, u.clip = o.cssClip(), u.clip[r[a][1]] = u.clip[r[a][0]], "show" === s && (o.cssClip(u.clip), o.css(f, u[f]), u.clip = i, u[f] = n), o.animate(u, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    })
  });
  !1 !== b.uiBackCompat && (I = b.effects.define("transfer", function (t, e) {
    b(this).transfer(t, e)
  }))
});


/*!
 * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach((function (n) {
      if ("default" !== n) {
        var i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, i.get ? i : {
          enumerable: !0,
          get: function () {
            return t[n]
          }
        })
      }
    })), e.default = t, Object.freeze(e)
  }
  var n = e(t);

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function s() {
    return (s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }).apply(this, arguments)
  }

  function r(t, e) {
    var n, i;
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n = t, i = e, (Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    })(n, i)
  }
  var a, l, c = function (t) {
      do {
        t += Math.floor(1e6 * Math.random())
      } while (document.getElementById(t));
      return t
    },
    u = function (t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
        n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), e = n && "#" !== n ? n.trim() : null
      }
      return e
    },
    h = function (t) {
      var e = u(t);
      return e && document.querySelector(e) ? e : null
    },
    d = function (t) {
      var e = u(t);
      return e ? document.querySelector(e) : null
    },
    f = function (t) {
      if (!t) return 0;
      var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = Number.parseFloat(n),
        s = Number.parseFloat(i);
      return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
    },
    p = function (t) {
      t.dispatchEvent(new Event("transitionend"))
    },
    g = function (t) {
      return (t[0] || t).nodeType
    },
    m = function (t, e) {
      var n = !1,
        i = e + 5;
      t.addEventListener("transitionend", (function e() {
        n = !0, t.removeEventListener("transitionend", e)
      })), setTimeout((function () {
        n || p(t)
      }), i)
    },
    _ = function (t, e, n) {
      Object.keys(n).forEach((function (i) {
        var o, s = n[i],
          r = e[i],
          a = r && g(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s).test(a)) throw new TypeError(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + s + '".')
      }))
    },
    v = function (t) {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
        return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
      }
      return !1
    },
    b = function () {
      return function () {}
    },
    y = function (t) {
      return t.offsetHeight
    },
    w = function () {
      var t = window.jQuery;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    },
    E = "rtl" === document.documentElement.dir,
    T = function (t, e) {
      var n;
      n = function () {
        var n = w();
        if (n) {
          var i = n.fn[t];
          n.fn[t] = e.jQueryInterface, n.fn[t].Constructor = e, n.fn[t].noConflict = function () {
            return n.fn[t] = i, e.jQueryInterface
          }
        }
      }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n()
    },
    A = (a = {}, l = 1, {
      set: function (t, e, n) {
        void 0 === t.bsKey && (t.bsKey = {
          key: e,
          id: l
        }, l++), a[t.bsKey.id] = n
      },
      get: function (t, e) {
        if (!t || void 0 === t.bsKey) return null;
        var n = t.bsKey;
        return n.key === e ? a[n.id] : null
      },
      delete: function (t, e) {
        if (void 0 !== t.bsKey) {
          var n = t.bsKey;
          n.key === e && (delete a[n.id], delete t.bsKey)
        }
      }
    }),
    k = function (t, e, n) {
      A.set(t, e, n)
    },
    L = function (t, e) {
      return A.get(t, e)
    },
    C = /[^.]*(?=\..*)\.|.*/,
    D = /\..*/,
    S = /::\d+$/,
    N = {},
    O = 1,
    I = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    j = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function P(t, e) {
    return e && e + "::" + O++ || t.uidEvent || O++
  }

  function x(t) {
    var e = P(t);
    return t.uidEvent = e, N[e] = N[e] || {}, N[e]
  }

  function H(t, e, n) {
    void 0 === n && (n = null);
    for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
      var r = t[i[o]];
      if (r.originalHandler === e && r.delegationSelector === n) return r
    }
    return null
  }

  function B(t, e, n) {
    var i = "string" == typeof e,
      o = i ? n : e,
      s = t.replace(D, ""),
      r = I[s];
    return r && (s = r), j.has(s) || (s = t), [i, o, s]
  }

  function M(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || (n = i, i = null);
      var s = B(e, n, i),
        r = s[0],
        a = s[1],
        l = s[2],
        c = x(t),
        u = c[l] || (c[l] = {}),
        h = H(u, a, r ? n : null);
      if (h) h.oneOff = h.oneOff && o;
      else {
        var d = P(a, e.replace(C, "")),
          f = r ? function (t, e, n) {
            return function i(o) {
              for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode)
                for (var a = s.length; a--;)
                  if (s[a] === r) return o.delegateTarget = r, i.oneOff && K.off(t, o.type, n), n.apply(r, [o]);
              return null
            }
          }(t, n, i) : function (t, e) {
            return function n(i) {
              return i.delegateTarget = t, n.oneOff && K.off(t, i.type, e), e.apply(t, [i])
            }
          }(t, n);
        f.delegationSelector = r ? n : null, f.originalHandler = a, f.oneOff = o, f.uidEvent = d, u[d] = f, t.addEventListener(l, f, r)
      }
    }
  }

  function R(t, e, n, i, o) {
    var s = H(e[n], i, o);
    s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent])
  }
  var K = {
      on: function (t, e, n, i) {
        M(t, e, n, i, !1)
      },
      one: function (t, e, n, i) {
        M(t, e, n, i, !0)
      },
      off: function (t, e, n, i) {
        if ("string" == typeof e && t) {
          var o = B(e, n, i),
            s = o[0],
            r = o[1],
            a = o[2],
            l = a !== e,
            c = x(t),
            u = e.startsWith(".");
          if (void 0 === r) {
            u && Object.keys(c).forEach((function (n) {
              ! function (t, e, n, i) {
                var o = e[n] || {};
                Object.keys(o).forEach((function (s) {
                  if (s.includes(i)) {
                    var r = o[s];
                    R(t, e, n, r.originalHandler, r.delegationSelector)
                  }
                }))
              }(t, c, n, e.slice(1))
            }));
            var h = c[a] || {};
            Object.keys(h).forEach((function (n) {
              var i = n.replace(S, "");
              if (!l || e.includes(i)) {
                var o = h[n];
                R(t, c, a, o.originalHandler, o.delegationSelector)
              }
            }))
          } else {
            if (!c || !c[a]) return;
            R(t, c, a, r, s ? n : null)
          }
        }
      },
      trigger: function (t, e, n) {
        if ("string" != typeof e || !t) return null;
        var i, o = w(),
          s = e.replace(D, ""),
          r = e !== s,
          a = j.has(s),
          l = !0,
          c = !0,
          u = !1,
          h = null;
        return r && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (h = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : h = new CustomEvent(e, {
          bubbles: l,
          cancelable: !0
        }), void 0 !== n && Object.keys(n).forEach((function (t) {
          Object.defineProperty(h, t, {
            get: function () {
              return n[t]
            }
          })
        })), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== i && i.preventDefault(), h
      }
    },
    W = function () {
      function t(t) {
        t && (this._element = t, k(t, this.constructor.DATA_KEY, this))
      }
      return t.prototype.dispose = function () {
        var t, e;
        t = this._element, e = this.constructor.DATA_KEY, A.delete(t, e), this._element = null
      }, t.getInstance = function (t) {
        return L(t, this.DATA_KEY)
      }, o(t, null, [{
        key: "VERSION",
        get: function () {
          return "5.0.0-beta2"
        }
      }]), t
    }(),
    U = function (t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      r(e, t);
      var n = e.prototype;
      return n.close = function (t) {
        var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);
        null === n || n.defaultPrevented || this._removeElement(e)
      }, n._getRootElement = function (t) {
        return d(t) || t.closest(".alert")
      }, n._triggerCloseEvent = function (t) {
        return K.trigger(t, "close.bs.alert")
      }, n._removeElement = function (t) {
        var e = this;
        if (t.classList.remove("show"), t.classList.contains("fade")) {
          var n = f(t);
          K.one(t, "transitionend", (function () {
            return e._destroyElement(t)
          })), m(t, n)
        } else this._destroyElement(t)
      }, n._destroyElement = function (t) {
        t.parentNode && t.parentNode.removeChild(t), K.trigger(t, "closed.bs.alert")
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          var n = L(this, "bs.alert");
          n || (n = new e(this)), "close" === t && n[t](this)
        }))
      }, e.handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }, o(e, null, [{
        key: "DATA_KEY",
        get: function () {
          return "bs.alert"
        }
      }]), e
    }(W);
  K.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U)), T("alert", U);
  var F = function (t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    return r(e, t), e.prototype.toggle = function () {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }, e.jQueryInterface = function (t) {
      return this.each((function () {
        var n = L(this, "bs.button");
        n || (n = new e(this)), "toggle" === t && n[t]()
      }))
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function () {
        return "bs.button"
      }
    }]), e
  }(W);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
  }

  function Y(t) {
    return t.replace(/[A-Z]/g, (function (t) {
      return "-" + t.toLowerCase()
    }))
  }
  K.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]'),
      n = L(e, "bs.button");
    n || (n = new F(e)), n.toggle()
  })), T("button", F);
  var X = {
      setDataAttribute: function (t, e, n) {
        t.setAttribute("data-bs-" + Y(e), n)
      },
      removeDataAttribute: function (t, e) {
        t.removeAttribute("data-bs-" + Y(e))
      },
      getDataAttributes: function (t) {
        if (!t) return {};
        var e = {};
        return Object.keys(t.dataset).filter((function (t) {
          return t.startsWith("bs")
        })).forEach((function (n) {
          var i = n.replace(/^bs/, "");
          i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[n])
        })), e
      },
      getDataAttribute: function (t, e) {
        return z(t.getAttribute("data-bs-" + Y(e)))
      },
      offset: function (t) {
        var e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft
        }
      },
      position: function (t) {
        return {
          top: t.offsetTop,
          left: t.offsetLeft
        }
      }
    },
    q = function (t, e) {
      var n;
      return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
    },
    Q = function (t, e) {
      return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
    },
    V = function (t, e) {
      var n;
      return (n = []).concat.apply(n, t.children).filter((function (t) {
        return t.matches(e)
      }))
    },
    $ = function (t, e) {
      for (var n = t.previousElementSibling; n;) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling
      }
      return []
    },
    G = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    Z = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    J = function (t) {
      function e(e, n) {
        var i;
        return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Q(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
      }
      r(e, t);
      var n = e.prototype;
      return n.next = function () {
        this._isSliding || this._slide("next")
      }, n.nextWhenVisible = function () {
        !document.hidden && v(this._element) && this.next()
      }, n.prev = function () {
        this._isSliding || this._slide("prev")
      }, n.pause = function (t) {
        t || (this._isPaused = !0), Q(".carousel-item-next, .carousel-item-prev", this._element) && (p(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, n.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, n.to = function (t) {
        var e = this;
        this._activeElement = Q(".active.carousel-item", this._element);
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding) K.one(this._element, "slid.bs.carousel", (function () {
            return e.to(t)
          }));
          else {
            if (n === t) return this.pause(), void this.cycle();
            var i = t > n ? "next" : "prev";
            this._slide(i, this._items[t])
          }
      }, n.dispose = function () {
        t.prototype.dispose.call(this), K.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, n._getConfig = function (t) {
        return t = s({}, G, t), _("carousel", t, Z), t
      }, n._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          this.touchDeltaX = 0, e > 0 && (E ? this.next() : this.prev()), e < 0 && (E ? this.prev() : this.next())
        }
      }, n._addEventListeners = function () {
        var t = this;
        this._config.keyboard && K.on(this._element, "keydown.bs.carousel", (function (e) {
          return t._keydown(e)
        })), "hover" === this._config.pause && (K.on(this._element, "mouseenter.bs.carousel", (function (e) {
          return t.pause(e)
        })), K.on(this._element, "mouseleave.bs.carousel", (function (e) {
          return t.cycle(e)
        }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
      }, n._addTouchEventListeners = function () {
        var t = this,
          e = function (e) {
            !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType ? t._pointerEvent || (t.touchStartX = e.touches[0].clientX) : t.touchStartX = e.clientX
          },
          n = function (e) {
            !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
              return t.cycle(e)
            }), 500 + t._config.interval))
          };
        q(".carousel-item img", this._element).forEach((function (t) {
          K.on(t, "dragstart.bs.carousel", (function (t) {
            return t.preventDefault()
          }))
        })), this._pointerEvent ? (K.on(this._element, "pointerdown.bs.carousel", (function (t) {
          return e(t)
        })), K.on(this._element, "pointerup.bs.carousel", (function (t) {
          return n(t)
        })), this._element.classList.add("pointer-event")) : (K.on(this._element, "touchstart.bs.carousel", (function (t) {
          return e(t)
        })), K.on(this._element, "touchmove.bs.carousel", (function (e) {
          return function (e) {
            e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
          }(e)
        })), K.on(this._element, "touchend.bs.carousel", (function (t) {
          return n(t)
        })))
      }, n._keydown = function (t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), E ? this.next() : this.prev()) : "ArrowRight" === t.key && (t.preventDefault(), E ? this.prev() : this.next()))
      }, n._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? q(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
      }, n._getItemByDirection = function (t, e) {
        var n = "next" === t,
          i = "prev" === t,
          o = this._getItemIndex(e),
          s = this._items.length - 1;
        if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
        var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r]
      }, n._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(Q(".active.carousel-item", this._element));
        return K.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: i,
          to: n
        })
      }, n._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var e = Q(".active", this._indicatorsElement);
          e.classList.remove("active"), e.removeAttribute("aria-current");
          for (var n = q("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++)
            if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              n[i].classList.add("active"), n[i].setAttribute("aria-current", "true");
              break
            }
        }
      }, n._updateInterval = function () {
        var t = this._activeElement || Q(".active.carousel-item", this._element);
        if (t) {
          var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
      }, n._slide = function (t, e) {
        var n = this,
          i = Q(".active.carousel-item", this._element),
          o = this._getItemIndex(i),
          s = e || i && this._getItemByDirection(t, i),
          r = this._getItemIndex(s),
          a = Boolean(this._interval),
          l = "next" === t ? "carousel-item-start" : "carousel-item-end",
          c = "next" === t ? "carousel-item-next" : "carousel-item-prev",
          u = "next" === t ? "left" : "right";
        if (s && s.classList.contains("active")) this._isSliding = !1;
        else if (!this._triggerSlideEvent(s, u).defaultPrevented && i && s) {
          if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s, this._element.classList.contains("slide")) {
            s.classList.add(c), y(s), i.classList.add(l), s.classList.add(l);
            var h = f(i);
            K.one(i, "transitionend", (function () {
              s.classList.remove(l, c), s.classList.add("active"), i.classList.remove("active", c, l), n._isSliding = !1, setTimeout((function () {
                K.trigger(n._element, "slid.bs.carousel", {
                  relatedTarget: s,
                  direction: u,
                  from: o,
                  to: r
                })
              }), 0)
            })), m(i, h)
          } else i.classList.remove("active"), s.classList.add("active"), this._isSliding = !1, K.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: s,
            direction: u,
            from: o,
            to: r
          });
          a && this.cycle()
        }
      }, e.carouselInterface = function (t, n) {
        var i = L(t, "bs.carousel"),
          o = s({}, G, X.getDataAttributes(t));
        "object" == typeof n && (o = s({}, o, n));
        var r = "string" == typeof n ? n : o.slide;
        if (i || (i = new e(t, o)), "number" == typeof n) i.to(n);
        else if ("string" == typeof r) {
          if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
          i[r]()
        } else o.interval && o.ride && (i.pause(), i.cycle())
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          e.carouselInterface(this, t)
        }))
      }, e.dataApiClickHandler = function (t) {
        var n = d(this);
        if (n && n.classList.contains("carousel")) {
          var i = s({}, X.getDataAttributes(n), X.getDataAttributes(this)),
            o = this.getAttribute("data-bs-slide-to");
          o && (i.interval = !1), e.carouselInterface(n, i), o && L(n, "bs.carousel").to(o), t.preventDefault()
        }
      }, o(e, null, [{
        key: "Default",
        get: function () {
          return G
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.carousel"
        }
      }]), e
    }(W);
  K.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), K.on(window, "load.bs.carousel.data-api", (function () {
    for (var t = q('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) J.carouselInterface(t[e], L(t[e], "bs.carousel"))
  })), T("carousel", J);
  var tt = {
      toggle: !0,
      parent: ""
    },
    et = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    nt = function (t) {
      function e(e, n) {
        var i;
        (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
        for (var o = q('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
          var a = o[s],
            l = h(a),
            c = q(l).filter((function (t) {
              return t === e
            }));
          null !== l && c.length && (i._selector = l, i._triggerArray.push(a))
        }
        return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
      }
      r(e, t);
      var n = e.prototype;
      return n.toggle = function () {
        this._element.classList.contains("show") ? this.hide() : this.show()
      }, n.show = function () {
        var t = this;
        if (!this._isTransitioning && !this._element.classList.contains("show")) {
          var n, i;
          this._parent && 0 === (n = q(".show, .collapsing", this._parent).filter((function (e) {
            return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
          }))).length && (n = null);
          var o = Q(this._selector);
          if (n) {
            var s = n.find((function (t) {
              return o !== t
            }));
            if ((i = s ? L(s, "bs.collapse") : null) && i._isTransitioning) return
          }
          if (!K.trigger(this._element, "show.bs.collapse").defaultPrevented) {
            n && n.forEach((function (t) {
              o !== t && e.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null)
            }));
            var r = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
              t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
            })), this.setTransitioning(!0);
            var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              l = f(this._element);
            K.one(this._element, "transitionend", (function () {
              t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), K.trigger(t._element, "shown.bs.collapse")
            })), m(this._element, l), this._element.style[r] = this._element[a] + "px"
          }
        }
      }, n.hide = function () {
        var t = this;
        if (!this._isTransitioning && this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
          var e = this._getDimension();
          this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
          var n = this._triggerArray.length;
          if (n > 0)
            for (var i = 0; i < n; i++) {
              var o = this._triggerArray[i],
                s = d(o);
              s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
            }
          this.setTransitioning(!0), this._element.style[e] = "";
          var r = f(this._element);
          K.one(this._element, "transitionend", (function () {
            t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), K.trigger(t._element, "hidden.bs.collapse")
          })), m(this._element, r)
        }
      }, n.setTransitioning = function (t) {
        this._isTransitioning = t
      }, n.dispose = function () {
        t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
      }, n._getConfig = function (t) {
        return (t = s({}, tt, t)).toggle = Boolean(t.toggle), _("collapse", t, et), t
      }, n._getDimension = function () {
        return this._element.classList.contains("width") ? "width" : "height"
      }, n._getParent = function () {
        var t = this,
          e = this._config.parent;
        return g(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Q(e), q('[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]', e).forEach((function (e) {
          var n = d(e);
          t._addAriaAndCollapsedClass(n, [e])
        })), e
      }, n._addAriaAndCollapsedClass = function (t, e) {
        if (t && e.length) {
          var n = t.classList.contains("show");
          e.forEach((function (t) {
            n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
          }))
        }
      }, e.collapseInterface = function (t, n) {
        var i = L(t, "bs.collapse"),
          o = s({}, tt, X.getDataAttributes(t), "object" == typeof n && n ? n : {});
        if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(t, o)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
          i[n]()
        }
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          e.collapseInterface(this, t)
        }))
      }, o(e, null, [{
        key: "Default",
        get: function () {
          return tt
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.collapse"
        }
      }]), e
    }(W);
  K.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = X.getDataAttributes(this),
      n = h(this);
    q(n).forEach((function (t) {
      var n, i = L(t, "bs.collapse");
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n)
    }))
  })), T("collapse", nt);
  var it = new RegExp("ArrowUp|ArrowDown|Escape"),
    ot = E ? "top-end" : "top-start",
    st = E ? "top-start" : "top-end",
    rt = E ? "bottom-end" : "bottom-start",
    at = E ? "bottom-start" : "bottom-end",
    lt = E ? "left-start" : "right-start",
    ct = E ? "right-start" : "left-start",
    ut = {
      offset: [0, 2],
      flip: !0,
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
    ht = {
      offset: "(array|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)"
    },
    dt = function (e) {
      function i(t, n) {
        var i;
        return (i = e.call(this, t) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
      }
      r(i, e);
      var a = i.prototype;
      return a.toggle = function () {
        if (!this._element.disabled && !this._element.classList.contains("disabled")) {
          var t = this._element.classList.contains("show");
          i.clearMenus(), t || this.show()
        }
      }, a.show = function () {
        if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
          var e = i.getParentFromElement(this._element),
            o = {
              relatedTarget: this._element
            };
          if (!K.trigger(this._element, "show.bs.dropdown", o).defaultPrevented) {
            if (this._inNavbar) X.setDataAttribute(this._menu, "popper", "none");
            else {
              if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var s = this._element;
              "parent" === this._config.reference ? s = e : g(this._config.reference) ? (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])) : "object" == typeof this._config.reference && (s = this._config.reference);
              var r = this._getPopperConfig(),
                a = r.modifiers.find((function (t) {
                  return "applyStyles" === t.name && !1 === t.enabled
                }));
              this._popper = t.createPopper(s, this._menu, r), a && X.setDataAttribute(this._menu, "popper", "static")
            }
            var l;
            "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
              return K.on(t, "mouseover", null, (function () {}))
            })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), K.trigger(this._element, "shown.bs.dropdown", o)
          }
        }
      }, a.hide = function () {
        if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
          var t = {
            relatedTarget: this._element
          };
          K.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), X.removeDataAttribute(this._menu, "popper"), K.trigger(this._element, "hidden.bs.dropdown", t))
        }
      }, a.dispose = function () {
        e.prototype.dispose.call(this), K.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
      }, a.update = function () {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }, a._addEventListeners = function () {
        var t = this;
        K.on(this._element, "click.bs.dropdown", (function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        }))
      }, a._getConfig = function (t) {
        if (t = s({}, this.constructor.Default, X.getDataAttributes(this._element), t), _("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !g(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t
      }, a._getMenuElement = function () {
        return function (t, e) {
          for (var n = t.nextElementSibling; n;) {
            if (n.matches(e)) return [n];
            n = n.nextElementSibling
          }
          return []
        }(this._element, ".dropdown-menu")[0]
      }, a._getPlacement = function () {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return lt;
        if (t.classList.contains("dropstart")) return ct;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? st : ot : e ? at : rt
      }, a._detectNavbar = function () {
        return null !== this._element.closest(".navbar")
      }, a._getOffset = function () {
        var t = this,
          e = this._config.offset;
        return "string" == typeof e ? e.split(",").map((function (t) {
          return Number.parseInt(t, 10)
        })) : "function" == typeof e ? function (n) {
          return e(n, t._element)
        } : e
      }, a._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              altBoundary: this._config.flip,
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), s({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
      }, i.dropdownInterface = function (t, e) {
        var n = L(t, "bs.dropdown");
        if (n || (n = new i(t, "object" == typeof e ? e : null)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]()
        }
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          i.dropdownInterface(this, t)
        }))
      }, i.clearMenus = function (t) {
        if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
          for (var e = q('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
            var o = L(e[n], "bs.dropdown"),
              s = {
                relatedTarget: e[n]
              };
            if (t && "click" === t.type && (s.clickEvent = t), o) {
              var r, a = o._menu;
              if (e[n].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && a.contains(t.target) || K.trigger(e[n], "hide.bs.dropdown", s).defaultPrevented)) "ontouchstart" in document.documentElement && (r = []).concat.apply(r, document.body.children).forEach((function (t) {
                return K.off(t, "mouseover", null, (function () {}))
              })), e[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), a.classList.remove("show"), e[n].classList.remove("show"), X.removeDataAttribute(a, "popper"), K.trigger(e[n], "hidden.bs.dropdown", s)
            }
          }
      }, i.getParentFromElement = function (t) {
        return d(t) || t.parentNode
      }, i.dataApiKeydownHandler = function (t) {
        if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
          var e = i.getParentFromElement(this),
            n = this.classList.contains("show");
          if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void i.clearMenus();
          if (n || "ArrowUp" !== t.key && "ArrowDown" !== t.key)
            if (n && "Space" !== t.key) {
              var o = q(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(v);
              if (o.length) {
                var s = o.indexOf(t.target);
                "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < o.length - 1 && s++, o[s = -1 === s ? 0 : s].focus()
              }
            } else i.clearMenus();
          else(this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).click()
        }
      }, o(i, null, [{
        key: "Default",
        get: function () {
          return ut
        }
      }, {
        key: "DefaultType",
        get: function () {
          return ht
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.dropdown"
        }
      }]), i
    }(W);
  K.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', dt.dataApiKeydownHandler), K.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", dt.dataApiKeydownHandler), K.on(document, "click.bs.dropdown.data-api", dt.clearMenus), K.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus), K.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
    t.preventDefault(), t.stopPropagation(), dt.dropdownInterface(this, "toggle")
  })), K.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
    return t.stopPropagation()
  })), T("dropdown", dt);
  var ft = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
    pt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
    gt = function (t) {
      function e(e, n) {
        var i;
        return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = Q(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
      }
      r(e, t);
      var n = e.prototype;
      return n.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t)
      }, n.show = function (t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          this._element.classList.contains("fade") && (this._isTransitioning = !0);
          var n = K.trigger(this._element, "show.bs.modal", {
            relatedTarget: t
          });
          this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), K.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function (t) {
            return e.hide(t)
          })), K.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
            K.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
              t.target === e._element && (e._ignoreBackdropClick = !0)
            }))
          })), this._showBackdrop((function () {
            return e._showElement(t)
          })))
        }
      }, n.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !K.trigger(this._element, "hide.bs.modal").defaultPrevented) {
          this._isShown = !1;
          var n = this._element.classList.contains("fade");
          if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), K.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.modal"), K.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
            var i = f(this._element);
            K.one(this._element, "transitionend", (function (t) {
              return e._hideModal(t)
            })), m(this._element, i)
          } else this._hideModal()
        }
      }, n.dispose = function () {
        [window, this._element, this._dialog].forEach((function (t) {
          return K.off(t, ".bs.modal")
        })), t.prototype.dispose.call(this), K.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
      }, n.handleUpdate = function () {
        this._adjustDialog()
      }, n._getConfig = function (t) {
        return t = s({}, ft, t), _("modal", t, pt), t
      }, n._showElement = function (t) {
        var e = this,
          n = this._element.classList.contains("fade"),
          i = Q(".modal-body", this._dialog);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && y(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
        var o = function () {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, K.trigger(e._element, "shown.bs.modal", {
            relatedTarget: t
          })
        };
        if (n) {
          var s = f(this._dialog);
          K.one(this._dialog, "transitionend", o), m(this._dialog, s)
        } else o()
      }, n._enforceFocus = function () {
        var t = this;
        K.off(document, "focusin.bs.modal"), K.on(document, "focusin.bs.modal", (function (e) {
          document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
        }))
      }, n._setEscapeEvent = function () {
        var t = this;
        this._isShown ? K.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
          t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
        })) : K.off(this._element, "keydown.dismiss.bs.modal")
      }, n._setResizeEvent = function () {
        var t = this;
        this._isShown ? K.on(window, "resize.bs.modal", (function () {
          return t._adjustDialog()
        })) : K.off(window, "resize.bs.modal")
      }, n._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
          document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), K.trigger(t._element, "hidden.bs.modal")
        }))
      }, n._removeBackdrop = function () {
        this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
      }, n._showBackdrop = function (t) {
        var e = this,
          n = this._element.classList.contains("fade") ? "fade" : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), K.on(this._element, "click.dismiss.bs.modal", (function (t) {
              e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
            })), n && y(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
          var i = f(this._backdrop);
          K.one(this._backdrop, "transitionend", t), m(this._backdrop, i)
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");
          var o = function () {
            e._removeBackdrop(), t()
          };
          if (this._element.classList.contains("fade")) {
            var s = f(this._backdrop);
            K.one(this._backdrop, "transitionend", o), m(this._backdrop, s)
          } else o()
        } else t()
      }, n._triggerBackdropTransition = function () {
        var t = this;
        if (!K.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
          var n = f(this._dialog);
          K.off(this._element, "transitionend"), K.one(this._element, "transitionend", (function () {
            t._element.classList.remove("modal-static"), e || (K.one(t._element, "transitionend", (function () {
              t._element.style.overflowY = ""
            })), m(t._element, n))
          })), m(this._element, n), this._element.focus()
        }
      }, n._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        (!this._isBodyOverflowing && t && !E || this._isBodyOverflowing && !t && E) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !E || !this._isBodyOverflowing && t && E) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, n._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, n._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, n._setScrollbar = function () {
        var t = this;
        this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (function (e) {
          return e + t._scrollbarWidth
        })), this._setElementAttributes(".sticky-top", "marginRight", (function (e) {
          return e - t._scrollbarWidth
        })), this._setElementAttributes("body", "paddingRight", (function (e) {
          return e + t._scrollbarWidth
        }))), document.body.classList.add("modal-open")
      }, n._setElementAttributes = function (t, e, n) {
        q(t).forEach((function (t) {
          var i = t.style[e],
            o = window.getComputedStyle(t)[e];
          X.setDataAttribute(t, e, i), t.style[e] = n(Number.parseFloat(o)) + "px"
        }))
      }, n._resetScrollbar = function () {
        this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight")
      }, n._resetElementAttributes = function (t, e) {
        q(t).forEach((function (t) {
          var n = X.getDataAttribute(t, e);
          void 0 === n && t === document.body ? t.style[e] = "" : (X.removeDataAttribute(t, e), t.style[e] = n)
        }))
      }, n._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e
      }, e.jQueryInterface = function (t, n) {
        return this.each((function () {
          var i = L(this, "bs.modal"),
            o = s({}, ft, X.getDataAttributes(this), "object" == typeof t && t ? t : {});
          if (i || (i = new e(this, o)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t](n)
          }
        }))
      }, o(e, null, [{
        key: "Default",
        get: function () {
          return ft
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.modal"
        }
      }]), e
    }(W);
  K.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
    var e = this,
      n = d(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), K.one(n, "show.bs.modal", (function (t) {
      t.defaultPrevented || K.one(n, "hidden.bs.modal", (function () {
        v(e) && e.focus()
      }))
    }));
    var i = L(n, "bs.modal");
    if (!i) {
      var o = s({}, X.getDataAttributes(n), X.getDataAttributes(this));
      i = new gt(n, o)
    }
    i.toggle(this)
  })), T("modal", gt);
  var mt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function bt(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (var o = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), r = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function (t, n) {
        var i, o = r[t],
          a = o.nodeName.toLowerCase();
        if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
        var l = (i = []).concat.apply(i, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
        l.forEach((function (t) {
          (function (t, e) {
            var n = t.nodeName.toLowerCase();
            if (e.includes(n)) return !mt.has(n) || Boolean(_t.test(t.nodeValue) || vt.test(t.nodeValue));
            for (var i = e.filter((function (t) {
                return t instanceof RegExp
              })), o = 0, s = i.length; o < s; o++)
              if (i[o].test(n)) return !0;
            return !1
          })(t, c) || o.removeAttribute(t.nodeName)
        }))
      }, l = 0, c = r.length; l < c; l++) a(l);
    return o.body.innerHTML
  }
  var yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    wt = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Et = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
    Tt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: E ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: E ? "right" : "left"
    },
    At = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
    kt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    Lt = function (e) {
      function i(t, i) {
        var o;
        if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        return (o = e.call(this, t) || this)._isEnabled = !0, o._timeout = 0, o._hoverState = "", o._activeTrigger = {}, o._popper = null, o.config = o._getConfig(i), o.tip = null, o._setListeners(), o
      }
      r(i, e);
      var a = i.prototype;
      return a.enable = function () {
        this._isEnabled = !0
      }, a.disable = function () {
        this._isEnabled = !1
      }, a.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, a.toggle = function (t) {
        if (this._isEnabled)
          if (t) {
            var e = this._initializeOnDelegatedTarget(t);
            e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
          } else {
            if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
            this._enter(null, this)
          }
      }, a.dispose = function () {
        clearTimeout(this._timeout), K.off(this._element, this.constructor.EVENT_KEY), K.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, e.prototype.dispose.call(this)
      }, a.show = function () {
        var e = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (this.isWithContent() && this._isEnabled) {
          var n = K.trigger(this._element, this.constructor.Event.SHOW),
            i = function t(e) {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                var n = e.getRootNode();
                return n instanceof ShadowRoot ? n : null
              }
              return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
            }(this._element),
            o = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
          if (!n.defaultPrevented && o) {
            var s = this.getTipElement(),
              r = c(this.constructor.NAME);
            s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && s.classList.add("fade");
            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement,
              l = this._getAttachment(a);
            this._addAttachmentClass(l);
            var u = this._getContainer();
            k(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(s), K.trigger(this._element, this.constructor.Event.INSERTED), this._popper = t.createPopper(this._element, s, this._getPopperConfig(l)), s.classList.add("show");
            var h, d, p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            p && (h = s.classList).add.apply(h, p.split(" ")), "ontouchstart" in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach((function (t) {
              K.on(t, "mouseover", (function () {}))
            }));
            var g = function () {
              var t = e._hoverState;
              e._hoverState = null, K.trigger(e._element, e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
            };
            if (this.tip.classList.contains("fade")) {
              var _ = f(this.tip);
              K.one(this.tip, "transitionend", g), m(this.tip, _)
            } else g()
          }
        }
      }, a.hide = function () {
        var t = this;
        if (this._popper) {
          var e = this.getTipElement(),
            n = function () {
              "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), K.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
            };
          if (!K.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
            var i;
            if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach((function (t) {
                return K.off(t, "mouseover", b)
              })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
              var o = f(e);
              K.one(e, "transitionend", n), m(e, o)
            } else n();
            this._hoverState = ""
          }
        }
      }, a.update = function () {
        null !== this._popper && this._popper.update()
      }, a.isWithContent = function () {
        return Boolean(this.getTitle())
      }, a.getTipElement = function () {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
      }, a.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(Q(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
      }, a.setElementContent = function (t, e) {
        if (null !== t) return "object" == typeof e && g(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = bt(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
      }, a.getTitle = function () {
        var t = this._element.getAttribute("data-bs-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
      }, a.updateAttachment = function (t) {
        return "right" === t ? "end" : "left" === t ? "start" : t
      }, a._initializeOnDelegatedTarget = function (t, e) {
        var n = this.constructor.DATA_KEY;
        return (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), e
      }, a._getOffset = function () {
        var t = this,
          e = this.config.offset;
        return "string" == typeof e ? e.split(",").map((function (t) {
          return Number.parseInt(t, 10)
        })) : "function" == typeof e ? function (n) {
          return e(n, t._element)
        } : e
      }, a._getPopperConfig = function (t) {
        var e = this,
          n = {
            placement: t,
            modifiers: [{
              name: "flip",
              options: {
                altBoundary: !0,
                fallbackPlacements: this.config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this.config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: "." + this.constructor.NAME + "-arrow"
              }
            }, {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: function (t) {
                return e._handlePopperPlacementChange(t)
              }
            }],
            onFirstUpdate: function (t) {
              t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
            }
          };
        return s({}, n, "function" == typeof this.config.popperConfig ? this.config.popperConfig(n) : this.config.popperConfig)
      }, a._addAttachmentClass = function (t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
      }, a._getContainer = function () {
        return !1 === this.config.container ? document.body : g(this.config.container) ? this.config.container : Q(this.config.container)
      }, a._getAttachment = function (t) {
        return Tt[t.toUpperCase()]
      }, a._setListeners = function () {
        var t = this;
        this.config.trigger.split(" ").forEach((function (e) {
          if ("click" === e) K.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
            return t.toggle(e)
          }));
          else if ("manual" !== e) {
            var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
            K.on(t._element, n, t.config.selector, (function (e) {
              return t._enter(e)
            })), K.on(t._element, i, t.config.selector, (function (e) {
              return t._leave(e)
            }))
          }
        })), this._hideModalHandler = function () {
          t._element && t.hide()
        }, K.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, a._fixTitle = function () {
        var t = this._element.getAttribute("title"),
          e = typeof this._element.getAttribute("data-bs-original-title");
        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
      }, a._enter = function (t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
          "show" === e._hoverState && e.show()
        }), e.config.delay.show) : e.show())
      }, a._leave = function (t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
          "out" === e._hoverState && e.hide()
        }), e.config.delay.hide) : e.hide())
      }, a._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, a._getConfig = function (t) {
        var e = X.getDataAttributes(this._element);
        return Object.keys(e).forEach((function (t) {
          wt.has(t) && delete e[t]
        })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = s({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = bt(t.template, t.allowList, t.sanitizeFn)), t
      }, a._getDelegateConfig = function () {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, a._cleanTipClass = function () {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(yt);
        null !== e && e.length > 0 && e.map((function (t) {
          return t.trim()
        })).forEach((function (e) {
          return t.classList.remove(e)
        }))
      }, a._handlePopperPlacementChange = function (t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
      }, i.jQueryInterface = function (t) {
        return this.each((function () {
          var e = L(this, "bs.tooltip"),
            n = "object" == typeof t && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        }))
      }, o(i, null, [{
        key: "Default",
        get: function () {
          return At
        }
      }, {
        key: "NAME",
        get: function () {
          return "tooltip"
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.tooltip"
        }
      }, {
        key: "Event",
        get: function () {
          return kt
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.tooltip"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Et
        }
      }]), i
    }(W);
  T("tooltip", Lt);
  var Ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Dt = s({}, Lt.Default, {
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    St = s({}, Lt.DefaultType, {
      content: "(string|element|function)"
    }),
    Nt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
    Ot = function (t) {
      function e() {
        return t.apply(this, arguments) || this
      }
      r(e, t);
      var n = e.prototype;
      return n.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, n.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(Q(".popover-header", t), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Q(".popover-body", t), e), t.classList.remove("fade", "show")
      }, n._addAttachmentClass = function (t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
      }, n._getContent = function () {
        return this._element.getAttribute("data-bs-content") || this.config.content
      }, n._cleanTipClass = function () {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ct);
        null !== e && e.length > 0 && e.map((function (t) {
          return t.trim()
        })).forEach((function (e) {
          return t.classList.remove(e)
        }))
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          var n = L(this, "bs.popover"),
            i = "object" == typeof t ? t : null;
          if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), k(this, "bs.popover", n)), "string" == typeof t)) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
            n[t]()
          }
        }))
      }, o(e, null, [{
        key: "Default",
        get: function () {
          return Dt
        }
      }, {
        key: "NAME",
        get: function () {
          return "popover"
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.popover"
        }
      }, {
        key: "Event",
        get: function () {
          return Nt
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.popover"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return St
        }
      }]), e
    }(Lt);
  T("popover", Ot);
  var It = {
      offset: 10,
      method: "auto",
      target: ""
    },
    jt = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    Pt = function (t) {
      function e(e, n) {
        var i;
        return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, K.on(i._scrollElement, "scroll.bs.scrollspy", (function () {
          return i._process()
        })), i.refresh(), i._process(), i
      }
      r(e, t);
      var n = e.prototype;
      return n.refresh = function () {
        var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? e : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q(this._selector).map((function (t) {
          var e = h(t),
            o = e ? Q(e) : null;
          if (o) {
            var s = o.getBoundingClientRect();
            if (s.width || s.height) return [X[n](o).top + i, e]
          }
          return null
        })).filter((function (t) {
          return t
        })).sort((function (t, e) {
          return t[0] - e[0]
        })).forEach((function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        }))
      }, n.dispose = function () {
        t.prototype.dispose.call(this), K.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, n._getConfig = function (t) {
        if ("string" != typeof (t = s({}, It, "object" == typeof t && t ? t : {})).target && g(t.target)) {
          var e = t.target.id;
          e || (e = c("scrollspy"), t.target.id = e), t.target = "#" + e
        }
        return _("scrollspy", t, jt), t
      }, n._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, n._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, n._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, n._process = function () {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
        }
      }, n._activate = function (t) {
        this._activeTarget = t, this._clear();
        var e = this._selector.split(",").map((function (e) {
            return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
          })),
          n = Q(e.join(","));
        n.classList.contains("dropdown-item") ? (Q(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), function (t, e) {
          for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
          return n
        }(n, ".nav, .list-group").forEach((function (t) {
          $(t, ".nav-link, .list-group-item").forEach((function (t) {
            return t.classList.add("active")
          })), $(t, ".nav-item").forEach((function (t) {
            V(t, ".nav-link").forEach((function (t) {
              return t.classList.add("active")
            }))
          }))
        }))), K.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        })
      }, n._clear = function () {
        q(this._selector).filter((function (t) {
          return t.classList.contains("active")
        })).forEach((function (t) {
          return t.classList.remove("active")
        }))
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          var n = L(this, "bs.scrollspy");
          if (n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
            n[t]()
          }
        }))
      }, o(e, null, [{
        key: "Default",
        get: function () {
          return It
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.scrollspy"
        }
      }]), e
    }(W);
  K.on(window, "load.bs.scrollspy.data-api", (function () {
    q('[data-bs-spy="scroll"]').forEach((function (t) {
      return new Pt(t, X.getDataAttributes(t))
    }))
  })), T("scrollspy", Pt);
  var xt = function (t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r(e, t);
    var n = e.prototype;
    return n.show = function () {
      var t = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
        var e, n = d(this._element),
          i = this._element.closest(".nav, .list-group");
        if (i) {
          var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
          e = (e = q(o, i))[e.length - 1]
        }
        var s = e ? K.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (!(K.trigger(this._element, "show.bs.tab", {
            relatedTarget: e
          }).defaultPrevented || null !== s && s.defaultPrevented)) {
          this._activate(this._element, i);
          var r = function () {
            K.trigger(e, "hidden.bs.tab", {
              relatedTarget: t._element
            }), K.trigger(t._element, "shown.bs.tab", {
              relatedTarget: e
            })
          };
          n ? this._activate(n, n.parentNode, r) : r()
        }
      }
    }, n._activate = function (t, e, n) {
      var i = this,
        o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V(e, ".active") : q(":scope > li > .active", e))[0],
        s = n && o && o.classList.contains("fade"),
        r = function () {
          return i._transitionComplete(t, o, n)
        };
      if (o && s) {
        var a = f(o);
        o.classList.remove("show"), K.one(o, "transitionend", r), m(o, a)
      } else r()
    }, n._transitionComplete = function (t, e, n) {
      if (e) {
        e.classList.remove("active");
        var i = Q(":scope > .dropdown-menu .active", e.parentNode);
        i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
      }
      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && q(".dropdown-toggle").forEach((function (t) {
        return t.classList.add("active")
      })), t.setAttribute("aria-expanded", !0)), n && n()
    }, e.jQueryInterface = function (t) {
      return this.each((function () {
        var n = L(this, "bs.tab") || new e(this);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]()
        }
      }))
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function () {
        return "bs.tab"
      }
    }]), e
  }(W);
  K.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
    t.preventDefault(), (L(this, "bs.tab") || new xt(this)).show()
  })), T("tab", xt);
  var Ht = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    Bt = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    },
    Mt = function (t) {
      function e(e, n) {
        var i;
        return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
      }
      r(e, t);
      var n = e.prototype;
      return n.show = function () {
        var t = this;
        if (!K.trigger(this._element, "show.bs.toast").defaultPrevented) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
          var e = function () {
            t._element.classList.remove("showing"), t._element.classList.add("show"), K.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
              t.hide()
            }), t._config.delay))
          };
          if (this._element.classList.remove("hide"), y(this._element), this._element.classList.add("showing"), this._config.animation) {
            var n = f(this._element);
            K.one(this._element, "transitionend", e), m(this._element, n)
          } else e()
        }
      }, n.hide = function () {
        var t = this;
        if (this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.toast").defaultPrevented) {
          var e = function () {
            t._element.classList.add("hide"), K.trigger(t._element, "hidden.bs.toast")
          };
          if (this._element.classList.remove("show"), this._config.animation) {
            var n = f(this._element);
            K.one(this._element, "transitionend", e), m(this._element, n)
          } else e()
        }
      }, n.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
      }, n._getConfig = function (t) {
        return t = s({}, Bt, X.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), _("toast", t, this.constructor.DefaultType), t
      }, n._setListeners = function () {
        var t = this;
        K.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function () {
          return t.hide()
        }))
      }, n._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null
      }, e.jQueryInterface = function (t) {
        return this.each((function () {
          var n = L(this, "bs.toast");
          if (n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
            n[t](this)
          }
        }))
      }, o(e, null, [{
        key: "DefaultType",
        get: function () {
          return Ht
        }
      }, {
        key: "Default",
        get: function () {
          return Bt
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.toast"
        }
      }]), e
    }(W);
  return T("toast", Mt), {
    Alert: U,
    Button: F,
    Carousel: J,
    Collapse: nt,
    Dropdown: dt,
    Modal: gt,
    Popover: Ot,
    ScrollSpy: Pt,
    Tab: xt,
    Toast: Mt,
    Tooltip: Lt
  }
}));
//# sourceMappingURL=bootstrap.min.js.map


/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
! function (e, n) {
  var o = e();
  e.fn.dropdownHover = function (t) {
    return "ontouchstart" in document ? this : (o = o.add(this.parent()), this.each(function () {
      function r() {
        d.parents(".navbar").find(".navbar-toggle").is(":visible") || (n.clearTimeout(a), n.clearTimeout(i), i = n.setTimeout(function () {
          o.find(":focus").blur(), v.instantlyCloseOthers === !0 && o.removeClass("open"), n.clearTimeout(i), d.attr("aria-expanded", "true"), s.addClass("open"), d.trigger(h)
        }, v.hoverDelay))
      }
      var a, i, d = e(this),
        s = d.parent(),
        u = {
          delay: 500,
          hoverDelay: 0,
          instantlyCloseOthers: !0
        },
        l = {
          delay: e(this).data("delay"),
          hoverDelay: e(this).data("hover-delay"),
          instantlyCloseOthers: e(this).data("close-others")
        },
        h = "show.bs.dropdown",
        c = "hide.bs.dropdown",
        v = e.extend(!0, {}, u, t, l);
      s.hover(function (e) {
        return s.hasClass("open") || d.is(e.target) ? void r(e) : !0
      }, function () {
        n.clearTimeout(i), a = n.setTimeout(function () {
          d.attr("aria-expanded", "false"), s.removeClass("open"), d.trigger(c)
        }, v.delay)
      }), d.hover(function (e) {
        return s.hasClass("open") || s.is(e.target) ? void r(e) : !0
      }), s.find(".dropdown-submenu").each(function () {
        var o, t = e(this);
        t.hover(function () {
          n.clearTimeout(o), t.children(".dropdown-menu").show(), t.siblings().children(".dropdown-menu").hide()
        }, function () {
          var e = t.children(".dropdown-menu");
          o = n.setTimeout(function () {
            e.hide()
          }, v.delay)
        })
      })
    }))
  }, e(document).ready(function () {
    e('[data-hover="dropdown"]').dropdownHover()
  })
}(jQuery, window);


/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }
  var e = 0,
    i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function () {
    return this.enabled = !1, this
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function () {
    return this.group.next(this)
  }, t.prototype.previous = function () {
    return this.group.previous(this)
  }, t.invokeAll = function (t) {
    var e = [];
    for (var o in i) e.push(i[o]);
    for (var n = 0, r = e.length; r > n; n++) e[n][t]()
  }, t.destroyAll = function () {
    t.invokeAll("destroy")
  }, t.disableAll = function () {
    t.invokeAll("disable")
  }, t.enableAll = function () {
    t.Context.refreshAll();
    for (var e in i) i[e].enabled = !0;
    return this
  }, t.refreshAll = function () {
    t.Context.refreshAll()
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(),
function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var i = 0,
    o = {},
    n = window.Waypoint,
    r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical),
      i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll()
  }, e.prototype.handleScroll = function () {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var o = e[i],
        n = o.newScroll > o.oldScroll,
        r = n ? o.forward : o.backward;
      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s];
        if (null !== a.triggerPoint) {
          var l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;
          (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
        }
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function () {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
  }, e.prototype.refresh = function () {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var r in t) {
      var s = t[r];
      for (var a in this.waypoints[r]) {
        var l, h, p, u, c, d = this.waypoints[r][a],
          f = d.options.offset,
          w = d.triggerPoint,
          y = 0,
          g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
      }
    }
    return n.requestAnimationFrame(function () {
      for (var t in o) o[t].flushTriggers()
    }), this
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function () {
    for (var t in o) o[t].refresh()
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey]
  }, window.onload = function () {
    r && r(), e.refreshAll()
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e)
  }, n.Context = e
}(),
function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
  }
  var o = {
      vertical: {},
      horizontal: {}
    },
    n = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
        n = "up" === i || "left" === i;
      o.sort(n ? e : t);
      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
      o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function () {
    return this.waypoints[0]
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t)
  }, n.Group = i
}(),
function () {
  "use strict";

  function t(t) {
    this.$element = e(t)
  }
  var e = window.jQuery,
    i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t)
    }
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o]
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t
}(),
function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
        o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
      }), i
    }
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
  "use strict";

  function t(s) {
    this.options = e.extend({}, i.defaults, t.defaults, s), this.element = this.options.element, this.$element = e(this.element), this.createWrapper(), this.createWaypoint()
  }
  var e = window.jQuery,
    i = window.Waypoint;
  t.prototype.createWaypoint = function () {
    var t = this.options.handler;
    this.waypoint = new i(e.extend({}, this.options, {
      element: this.wrapper,
      handler: e.proxy(function (e) {
        var i = this.options.direction.indexOf(e) > -1,
          s = i ? this.$element.outerHeight(!0) : "";
        this.$wrapper.height(s), this.$element.toggleClass(this.options.stuckClass, i), t && t.call(this, e)
      }, this)
    }))
  }, t.prototype.createWrapper = function () {
    this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
  }, t.prototype.destroy = function () {
    this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
  }, t.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: "stuck",
    direction: "down right"
  }, i.Sticky = t
}();


/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
! function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
  "use strict";
  var o = !1,
    t = !1,
    r = 0,
    i = 2e3,
    s = 0,
    n = e,
    l = document,
    a = window,
    c = n(a),
    d = [],
    u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
    h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
  if (u) a.cancelAnimationFrame || (h = function (e) {});
  else {
    var p = 0;
    u = function (e, o) {
      var t = (new Date).getTime(),
        r = Math.max(0, 16 - (t - p)),
        i = a.setTimeout(function () {
          e(t + r)
        }, r);
      return p = t + r, i
    }, h = function (e) {
      a.clearTimeout(e)
    }
  }
  var m = a.MutationObserver || a.WebKitMutationObserver || !1,
    f = Date.now || function () {
      return (new Date).getTime()
    },
    g = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 40,
      mousescrollstep: 27,
      touchbehavior: !1,
      emulatetouch: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: .3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: function () {
        var e = l.currentScript || function () {
            var e = l.getElementsByTagName("script");
            return !!e.length && e[e.length - 1]
          }(),
          o = e ? e.src.split("?")[0] : "";
        return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
      }(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
      enableobserver: !0,
      scrollbarid: !1
    },
    v = !1,
    w = function () {
      if (v) return v;
      var e = l.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        r = navigator.platform,
        i = {};
      return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
        for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++)
          if (void 0 !== o[e[t]]) {
            i.trstyle = e[t];
            break
          } i.hastransform = !!i.trstyle
      }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
        i.transitionend = !1;
        for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++)
          if (e[s] in o) {
            i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
            break
          } i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
      }(), i.cursorgrabvalue = function () {
        var e = ["grab", "-webkit-grab", "-moz-grab"];
        (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
        for (var t = 0, r = e.length; t < r; t++) {
          var s = e[t];
          if (o.cursor = s, o.cursor == s) return s
        }
        return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
      }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i
    },
    b = function (e, p) {
      function v() {
        var e = T.doc.css(P.trstyle);
        return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
      }

      function b() {
        var e = T.win;
        if ("zIndex" in e) return e.zIndex();
        for (; e.length > 0;) {
          if (9 == e[0].nodeType) return !1;
          var o = e.css("zIndex");
          if (!isNaN(o) && 0 !== o) return parseInt(o);
          e = e.parent()
        }
        return !1
      }

      function x(e, o, t) {
        var r = e.css(o),
          i = parseFloat(r);
        if (isNaN(i)) {
          var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
          return T.isie8 && i && (i += 1), s ? i : 0
        }
        return i
      }

      function S(e, o, t, r) {
        T._bind(e, o, function (r) {
          var i = {
            original: r = r || a.event,
            target: r.target || r.srcElement,
            type: "wheel",
            deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault: function () {
              return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
            },
            stopImmediatePropagation: function () {
              r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
            }
          };
          return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
        }, r)
      }

      function z(e, o, t, r) {
        T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
        var i = f() - D;
        if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
          if (r)
            if (e < 0) {
              if (T.getScrollLeft() >= T.page.maxw) return !0
            } else if (T.getScrollLeft() <= 0) return !0;
          var s = e > 0 ? 1 : -1;
          X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e
        }
        if (o) {
          if (function () {
              var e = T.getScrollTop();
              if (o < 0) {
                if (e >= T.page.maxh) return !0
              } else if (e <= 0) return !0
            }()) {
            if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
            var n = T.view.h >> 1;
            T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0
          }
          var l = o > 0 ? 1 : -1;
          B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o
        }(o || e) && T.synched("relativexy", function () {
          var e = T.lastdeltay + T.newscrolly;
          T.lastdeltay = 0;
          var o = T.lastdeltax + T.newscrollx;
          T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
        })
      }

      function k(e, o, t) {
        var r, i;
        return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void(t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()))
      }
      var T = this;
      this.version = "3.7.6", this.name = "nicescroll", this.me = p;
      var E = n("body"),
        M = this.opt = {
          doc: E,
          win: !1
        };
      if (n.extend(M, g), M.snapbackspeed = 80, e)
        for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
      if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
          x: 0,
          y: 0
        }, this.scrollratio = {
          x: 0,
          y: 0
        }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
        var C = this.win[0] == a ? this.body : this.win,
          N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
        "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
      } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;
      if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid;
      else
        do {
          this.id = "ascrail" + i++
        } while (l.getElementById(this.id));
      this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
      var P = n.extend({}, this.detected);
      this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
        T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
          h: u(function () {
            T.delaylist[e].fn.call(T), T.delaylist[e] = !1
          }, t)
        }, o.call(T)), T.delaylist[e].fn = o)
      }, this.synched = function (e, o) {
        T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
          T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
        }))
      }, this.unsynched = function (e) {
        T.synclist[e] && (T.synclist[e] = !1)
      }, this.css = function (e, o) {
        for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
      }, this.scrollTop = function (e) {
        return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
      }, this.scrollLeft = function (e) {
        return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
      };
      var R = function (e, o, t, r, i, s, n) {
        this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e
      };
      if (R.prototype = {
          B2: function (e) {
            return 3 * (1 - e) * (1 - e) * e
          },
          B3: function (e) {
            return 3 * (1 - e) * e * e
          },
          B4: function (e) {
            return e * e * e
          },
          getPos: function () {
            return (f() - this.ts) / this.spd
          },
          getNow: function () {
            var e = (f() - this.ts) / this.spd,
              o = this.B2(e) + this.B3(e) + this.B4(e);
            return e >= 1 ? this.ed : this.st + this.df * o | 0
          },
          update: function (e, o) {
            return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this
          }
        }, this.ishwscroll) {
        this.doc.translate = {
          x: 0,
          y: 0,
          tx: "0px",
          ty: "0px"
        }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
          if (!e) {
            var o = v();
            if (o) return 16 == o.length ? -o[13] : -o[5];
            if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
          }
          return T.doc.translate.y
        }, this.getScrollLeft = function (e) {
          if (!e) {
            var o = v();
            if (o) return 16 == o.length ? -o[12] : -o[4];
            if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
          }
          return T.doc.translate.x
        }, this.notifyScrollEvent = function (e) {
          var o = l.createEvent("UIEvents");
          o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o)
        };
        var _ = this.isrtlmode ? 1 : -1;
        P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
          T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
        }, this.setScrollLeft = function (e, o) {
          T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
        }) : (this.setScrollTop = function (e, o) {
          T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
        }, this.setScrollLeft = function (e, o) {
          T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
        })
      } else this.getScrollTop = function () {
        return T.docscroll.scrollTop()
      }, this.setScrollTop = function (e) {
        T.docscroll.scrollTop(e)
      }, this.getScrollLeft = function () {
        return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
      }, this.setScrollLeft = function (e) {
        return setTimeout(function () {
          if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
        }, 1)
      };
      this.getTarget = function (e) {
        return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
      }, this.hasParent = function (e, o) {
        if (!e) return !1;
        for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
        return !1 !== t
      };
      var I = {
        thin: 1,
        medium: 3,
        thick: 5
      };
      this.getDocumentScrollOffset = function () {
        return {
          top: a.pageYOffset || l.documentElement.scrollTop,
          left: a.pageXOffset || l.documentElement.scrollLeft
        }
      }, this.getOffset = function () {
        if (T.isfixed) {
          var e = T.win.offset(),
            o = T.getDocumentScrollOffset();
          return e.top -= o.top, e.left -= o.left, e
        }
        var t = T.win.offset();
        if (!T.viewport) return t;
        var r = T.viewport.offset();
        return {
          top: t.top - r.top,
          left: t.left - r.left
        }
      }, this.updateScrollBar = function (e) {
        var o, t;
        if (T.ishwscroll) T.rail.css({
          height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
        }), T.railh && T.railh.css({
          width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
        });
        else {
          var r = T.getOffset();
          if (o = {
              top: r.top,
              left: r.left - (M.railpadding.left + M.railpadding.right)
            }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
              top: o.top,
              left: o.left,
              height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
            }), T.zoom && T.zoom.css({
              top: o.top + 1,
              left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
            }), T.railh && !T.railslocked) {
            o = {
              top: r.top,
              left: r.left
            }, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
            var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
              s = o.left + x(T.win, "border-left-width");
            T.railh.css({
              top: i - (M.railpadding.top + M.railpadding.bottom),
              left: s,
              width: T.railh.width
            })
          }
        }
      }, this.doRailClick = function (e, o, t) {
        var r, i, s, n;
        T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
      }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
        if (T.saved.css = [], P.isoperamini) return !0;
        if (P.isandroid && !("hidden" in l)) return !0;
        M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
        var e = {
          "overflow-y": "hidden"
        };
        if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
          var i = T.docscroll;
          T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
            "-webkit-overflow-scrolling": "touch"
          });
          var d = n(l.createElement("div"));
          d.css({
            position: "relative",
            top: 0,
            float: "right",
            width: M.cursorwidth,
            height: 0,
            "background-color": M.cursorcolor,
            border: M.cursorborder,
            "background-clip": "padding-box",
            "-webkit-border-radius": M.cursorborderradius,
            "-moz-border-radius": M.cursorborderradius,
            "border-radius": M.cursorborderradius
          }), d.addClass("nicescroll-cursors"), T.cursor = d;
          var u = n(l.createElement("div"));
          u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
          var h, p, f = ["left", "right", "top", "bottom"];
          for (var g in f) p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
          u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
            width: u.width + "px",
            zIndex: T.zindex,
            background: M.background,
            cursor: "default"
          }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
          var v = !1;
          !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
            T.zoom.css("opacity", M.cursoropacitymax)
          }), T.bind(v, "mouseleave", function () {
            T.zoom.css("opacity", M.cursoropacitymin)
          }), T.zoom = n(v), T.zoom.css({
            cursor: "pointer",
            zIndex: T.zindex,
            backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
            height: 18,
            width: 18,
            backgroundPosition: "0 0"
          }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
            return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
          }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
          var w;
          if (M.horizrailenabled && (T.css(i, {
              overflowX: "hidden"
            }), (d = n(l.createElement("div"))).css({
              position: "absolute",
              top: 0,
              height: M.cursorwidth,
              width: 0,
              backgroundColor: M.cursorcolor,
              border: M.cursorborder,
              backgroundClip: "padding-box",
              "-webkit-border-radius": M.cursorborderradius,
              "-moz-border-radius": M.cursorborderradius,
              "border-radius": M.cursorborderradius
            }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
              height: w.height + "px",
              zIndex: T.zindex,
              background: M.background
            }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
            position: "fixed",
            top: 0,
            height: "100%"
          }), u.css(u.align ? {
            right: 0
          } : {
            left: 0
          }), T.body.append(u), T.railh && (w.css({
            position: "fixed",
            left: 0,
            width: "100%"
          }), w.css(w.align ? {
            bottom: 0
          } : {
            top: 0
          }), T.body.append(w));
          else {
            if (T.ishwscroll) {
              "static" == T.win.css("position") && T.css(T.win, {
                position: "relative"
              });
              var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
              n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
                position: "absolute",
                top: 1,
                right: 0,
                "margin-right": u.width + 4
              }), x.append(T.zoom)), u.css({
                position: "absolute",
                top: 0
              }), u.css(u.align ? {
                right: 0
              } : {
                left: 0
              }), x.append(u), w && (w.css({
                position: "absolute",
                left: 0,
                bottom: 0
              }), w.css(w.align ? {
                bottom: 0
              } : {
                top: 0
              }), x.append(w))
            } else {
              T.isfixed = "fixed" == T.win.css("position");
              var S = T.isfixed ? "fixed" : "absolute";
              T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
                position: "relative"
              })), u.css({
                position: S
              }), T.zoom && T.zoom.css({
                position: S
              }), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
                position: S
              }), T.body.append(w))
            }
            P.isios && T.css(T.win, {
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
              "-webkit-touch-callout": "none"
            }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
          }
          if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({
              opacity: M.cursoropacitymax
            }), T.railh && T.railh.css({
              opacity: M.cursoropacitymax
            })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
            T.scrollmom = new y(T);
            T.ontouchstart = function (e) {
              if (T.locked) return !1;
              if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
              if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
                var o = T.getTarget(e);
                if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
                var t = "mousedown" === e.type;
                if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                  var r = e;
                  (e = {
                    original: e.original ? e.original : e
                  }).clientX = r.screenX, e.clientY = r.screenY
                }
                if (T.rail.drag = {
                    x: e.clientX,
                    y: e.clientY,
                    sx: T.scroll.x,
                    sy: T.scroll.y,
                    st: T.getScrollTop(),
                    sl: T.getScrollLeft(),
                    pt: 2,
                    dl: !1,
                    tg: o
                  }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";
                else {
                  var i = {
                      w: c.width(),
                      h: c.height()
                    },
                    s = T.getContentSize(),
                    l = s.h - i.h,
                    a = s.w - i.w;
                  T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                }
                if (M.emulatetouch && T.isiframe && P.isie) {
                  var d = T.win.position();
                  T.rail.drag.x += d.left, T.rail.drag.y += d.top
                }
                if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                  if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                    if (T.hasmoving) return !1;
                    o._onclick.call(this, e)
                  }), T.cancelEvent(e)) : T.stopPropagation(e);
                  /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                    tg: o,
                    click: !1
                  })
                }
              }
            }, T.ontouchend = function (e) {
              if (!T.rail.drag) return !0;
              if (2 == T.rail.drag.pt) {
                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                T.rail.drag = !1;
                var o = "mouseup" === e.type;
                if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e)
              } else if (1 == T.rail.drag.pt) return T.onmouseup(e)
            };
            var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
              k = .3 * M.directionlockdeadzone | 0;
            T.ontouchmove = function (e, o) {
              if (!T.rail.drag) return !0;
              if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
              if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
              if (2 == T.rail.drag.pt) {
                "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
                var t, r;
                if (r = t = 0, z && !o) {
                  var i = T.win.position();
                  r = -i.left, t = -i.top
                }
                var s = e.clientY + t,
                  n = s - T.rail.drag.y,
                  a = e.clientX + r,
                  c = a - T.rail.drag.x,
                  d = T.rail.drag.st - n;
                if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
                var u = T.getScrollLeft();
                if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                  if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                  var h = Math.abs(n),
                    p = Math.abs(c),
                    m = M.directionlockdeadzone;
                  if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                  T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
                }
                return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                  T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear())
                }), T.cancelEvent(e)
              }
              return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
            }, T.ontouchstartCursor = function (e, o) {
              if (!T.rail.drag || 3 == T.rail.drag.pt) {
                if (T.locked) return T.cancelEvent(e);
                T.cancelScroll(), T.rail.drag = {
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                  sx: T.scroll.x,
                  sy: T.scroll.y,
                  pt: 3,
                  hr: !!o
                };
                var t = T.getTarget(e);
                return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                  "pointer-events": "none"
                })), T.cancelEvent(e)
              }
            }, T.ontouchendCursor = function (e) {
              if (T.rail.drag) {
                if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
                return T.rail.drag = !1, T.cancelEvent(e)
              }
            }, T.ontouchmoveCursor = function (e) {
              if (T.rail.drag) {
                if (3 != T.rail.drag.pt) return;
                if (T.cursorfreezed = !0, T.rail.drag.hr) {
                  T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                  var o = T.scrollvaluemaxw;
                  T.scroll.x > o && (T.scroll.x = o)
                } else {
                  T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                  var t = T.scrollvaluemax;
                  T.scroll.y > t && (T.scroll.y = t)
                }
                return T.synched("touchmove", function () {
                  T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                }), T.cancelEvent(e)
              }
            }
          }
          if (T.onmousedown = function (e, o) {
              if (!T.rail.drag || 1 == T.rail.drag.pt) {
                if (T.railslocked) return T.cancelEvent(e);
                T.cancelScroll(), T.rail.drag = {
                  x: e.clientX,
                  y: e.clientY,
                  sx: T.scroll.x,
                  sy: T.scroll.y,
                  pt: 1,
                  hr: o || !1
                };
                var t = T.getTarget(e);
                return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                  "pointer-events": "none"
                })), T.hasmoving = !1, T.cancelEvent(e)
              }
            }, T.onmouseup = function (e) {
              if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
            }, T.onmousemove = function (e) {
              if (T.rail.drag) {
                if (1 !== T.rail.drag.pt) return;
                if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
                  T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                  var o = T.scrollvaluemaxw;
                  T.scroll.x > o && (T.scroll.x = o)
                } else {
                  T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                  var t = T.scrollvaluemax;
                  T.scroll.y > t && (T.scroll.y = t)
                }
                return T.synched("mousemove", function () {
                  T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                }), T.cancelEvent(e)
              }
              T.checkarea = 0
            }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
            if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
          }, T.onclick = !P.isios && function (e) {
            return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
          }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
            cursor: P.cursorgrabvalue
          }), T.css(T.rail, {
            cursor: P.cursorgrabvalue
          }));
          else {
            var L = function (e) {
              if (T.selectiondrag) {
                if (e) {
                  var o = T.win.outerHeight(),
                    t = e.pageY - T.selectiondrag.top;
                  t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
                }
                if (0 !== T.selectiondrag.df) {
                  var r = -2 * T.selectiondrag.df / 6 | 0;
                  T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                    L()
                  }, 50)
                }
              }
            };
            T.hasTextSelected = "getSelection" in l ? function () {
              return l.getSelection().rangeCount > 0
            } : "selection" in l ? function () {
              return "None" != l.selection.type
            } : function () {
              return !1
            }, T.onselectionstart = function (e) {
              T.ispage || (T.selectiondrag = T.win.offset())
            }, T.onselectionend = function (e) {
              T.selectiondrag = !1
            }, T.onselectiondrag = function (e) {
              T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                L(e)
              }, 250)
            }
          }
          if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
              "touch-action": "none"
            }), T.css(T.rail, {
              "touch-action": "none"
            }), T.css(T.cursor, {
              "touch-action": "none"
            }), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
              "-ms-touch-action": "none"
            }), T.css(T.rail, {
              "-ms-touch-action": "none"
            }), T.css(T.cursor, {
              "-ms-touch-action": "none"
            }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
              e.preventDefault()
            }), T.bind(T.cursor, "contextmenu", function (e) {
              e.preventDefault()
            })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
              cursor: "default"
            }), T.railh && T.railh.css({
              cursor: "default"
            }), T.jqbind(T.rail, "mouseenter", function () {
              if (!T.ispage && !T.win.is(":visible")) return !1;
              T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
            }), T.jqbind(T.rail, "mouseleave", function () {
              T.rail.active = !1, T.rail.drag || T.hideCursor()
            }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
              T.doRailClick(e, !1, !1)
            }), T.bind(T.rail, "dblclick", function (e) {
              T.doRailClick(e, !0, !1)
            }), T.bind(T.cursor, "click", function (e) {
              T.cancelEvent(e)
            }), T.bind(T.cursor, "dblclick", function (e) {
              T.cancelEvent(e)
            })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
              if (!T.ispage && !T.win.is(":visible")) return !1;
              T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
            }), T.jqbind(T.railh, "mouseleave", function () {
              T.rail.active = !1, T.rail.drag || T.hideCursor()
            }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
              T.doRailClick(e, !1, !0)
            }), T.bind(T.railh, "dblclick", function (e) {
              T.doRailClick(e, !0, !0)
            }), T.bind(T.cursorh, "click", function (e) {
              T.cancelEvent(e)
            }), T.bind(T.cursorh, "dblclick", function (e) {
              T.cancelEvent(e)
            })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
              T.ontouchstartCursor(e, !0)
            }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
              T.onmousedown(e, !0)
            }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
              e.preventDefault()
            }), T.railh && T.bind(T.railh, "mousedown", function (e) {
              e.preventDefault()
            }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
              T.onmousedown(e, !0)
            }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
              T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
            }), T.jqbind(T.zoom, "mouseleave", function () {
              T.rail.active = !1, T.rail.drag || T.hideCursor()
            }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
              tabindex: ++r
            }), T.bind(T.win, "focus", function (e) {
              o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
            }), T.bind(T.win, "blur", function (e) {
              o = !1, T.hasfocus = !1
            }), T.bind(T.win, "mouseenter", function (e) {
              t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
            }), T.bind(T.win, "mouseleave", function (e) {
              t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
            })), T.onkeypress = function (e) {
              if (T.railslocked && 0 === T.page.maxh) return !0;
              e = e || a.event;
              var r = T.getTarget(e);
              if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
              if (n(r).attr("contenteditable")) return !0;
              if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                var i = e.keyCode;
                if (T.railslocked && 27 != i) return T.cancelEvent(e);
                var s = e.ctrlKey || !1,
                  l = e.shiftKey || !1,
                  c = !1;
                switch (i) {
                  case 38:
                  case 63233:
                    T.doScrollBy(72), c = !0;
                    break;
                  case 40:
                  case 63235:
                    T.doScrollBy(-72), c = !0;
                    break;
                  case 37:
                  case 63232:
                    T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                    break;
                  case 39:
                  case 63234:
                    T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                    break;
                  case 33:
                  case 63276:
                    T.doScrollBy(T.view.h), c = !0;
                    break;
                  case 34:
                  case 63277:
                    T.doScrollBy(-T.view.h), c = !0;
                    break;
                  case 36:
                  case 63273:
                    T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                    break;
                  case 35:
                  case 63275:
                    T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                    break;
                  case 32:
                    M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                    break;
                  case 27:
                    T.zoomactive && (T.doZoom(), c = !0)
                }
                if (c) return T.cancelEvent(e)
              }
            }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
              (e.ctrlKey || !1) && (T.wheelprevented = !0)
            }), T.bind(l, "keyup", function (e) {
              e.ctrlKey || !1 || (T.wheelprevented = !1)
            }), T.bind(a, "blur", function (e) {
              T.wheelprevented = !1
            }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
            var C = T.win.attr("style"),
              N = parseFloat(T.win.css("width")) + 1;
            T.win.css("width", N), T.synched("chromefix", function () {
              T.win.attr("style", C)
            })
          }
          if (T.onAttributeChange = function (e) {
              T.lazyResize(T.isieold ? 250 : 30)
            }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
              if (e.forEach(function (e) {
                  if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30)
            }), T.observerbody.observe(l.body, {
              childList: !0,
              subtree: !0,
              characterData: !1,
              attributes: !0,
              attributeFilter: ["class"]
            })), !T.ispage && !T.haswrapper)) {
            var R = T.win[0];
            !1 !== m ? (T.observer = new m(function (e) {
              e.forEach(T.onAttributeChange)
            }), T.observer.observe(R, {
              childList: !0,
              characterData: !1,
              attributes: !0,
              subtree: !1
            }), T.observerremover = new m(function (e) {
              e.forEach(function (e) {
                if (e.removedNodes.length > 0)
                  for (var o in e.removedNodes)
                    if (T && e.removedNodes[o] === R) return T.remove()
              })
            }), T.observerremover.observe(R.parentNode, {
              childList: !0,
              characterData: !1,
              attributes: !1,
              subtree: !1
            })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
              e.target === R && T.remove()
            }))
          }!T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
        }
        if ("IFRAME" == this.doc[0].nodeName) {
          var _ = function () {
            T.iframexd = !1;
            var o;
            try {
              (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain
            } catch (e) {
              T.iframexd = !0, o = !1
            }
            if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;
            if (T.forcescreen = !0, T.isiframe && (T.iframe = {
                doc: n(o),
                html: T.doc.contents().find("html")[0],
                body: T.doc.contents().find("body")[0]
              }, T.getContentSize = function () {
                return {
                  w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                  h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                }
              }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
              T.win.scrollTop(0), T.doc.height("");
              var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
              T.doc.height(t)
            }
            T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {
              "-webkit-transform": "translate3d(0,0,0)"
            }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
              return T.ontouchmove(e, !0)
            }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
              cursor: P.cursorgrabvalue
            })), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
          };
          this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
            _.call(T.doc[0], !1)
          }, 500), T.bind(this.doc, "load", _)
        }
      }, this.showCursor = function (e, o) {
        if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
          if (T.autohidedom && (T.autohidedom.stop().css({
              opacity: M.cursoropacitymax
            }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
              height: T.cursorheight,
              top: T.scroll.y
            }), T.cursorh) {
            var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
            T.cursorh.css({
              width: T.cursorwidth,
              left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
            }), T.cursoractive = !0
          }
          T.zoom && T.zoom.stop().css({
            opacity: M.cursoropacitymax
          })
        }
      }, this.hideCursor = function (e) {
        T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
          T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
            opacity: M.cursoropacitymin
          }), T.zoom && T.zoom.stop().animate({
            opacity: M.cursoropacitymin
          }), T.cursoractive = !1), T.cursortimeout = 0
        }, e || M.hidecursordelay)))
      }, this.noticeCursor = function (e, o, t) {
        T.showCursor(o, t), T.rail.active || T.hideCursor(e)
      }, this.getContentSize = T.ispage ? function () {
        return {
          w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
          h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
        }
      } : T.haswrapper ? function () {
        return {
          w: T.doc[0].offsetWidth,
          h: T.doc[0].offsetHeight
        }
      } : function () {
        return {
          w: T.docscroll[0].scrollWidth,
          h: T.docscroll[0].scrollHeight
        }
      }, this.onResize = function (e, o) {
        if (!T || !T.win) return !1;
        var t = T.page.maxh,
          r = T.page.maxw,
          i = T.view.h,
          s = T.view.w;
        if (T.view = {
            w: T.ispage ? T.win.width() : T.win[0].clientWidth,
            h: T.ispage ? T.win.height() : T.win[0].clientHeight
          }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
          if (T.ispage) return T;
          var n = T.win.offset();
          if (T.lastposition) {
            var l = T.lastposition;
            if (l.top == n.top && l.left == n.left) return T
          }
          T.lastposition = n
        }
        return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
          x: T.page.maxw / T.scrollvaluemaxw,
          y: T.page.maxh / T.scrollvaluemax
        }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T)
      }, this.resize = T.onResize;
      var O = 0;
      this.onscreenresize = function (e) {
        clearTimeout(O);
        var o = !T.ispage && !T.haswrapper;
        o && T.hideRails(), O = setTimeout(function () {
          T && (o && T.showRails(), T.resize()), O = 0
        }, 120)
      }, this.lazyResize = function (e) {
        return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
          T && T.resize(), O = 0
        }, e), T
      }, this.jqbind = function (e, o, t) {
        T.events.push({
          e: e,
          n: o,
          f: t,
          q: !0
        }), n(e).on(o, t)
      }, this.mousewheel = function (e, o, t) {
        var r = "jquery" in e ? e[0] : e;
        if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1);
        else {
          var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
          S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
        }
      };
      var Y = !1;
      if (P.haseventlistener) {
        try {
          var H = Object.defineProperty({}, "passive", {
            get: function () {
              Y = !0
            }
          });
          a.addEventListener("test", null, H)
        } catch (e) {}
        this.stopPropagation = function (e) {
          return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
        }, this.cancelEvent = function (e) {
          return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
        }
      } else Event.prototype.preventDefault = function () {
        this.returnValue = !1
      }, Event.prototype.stopPropagation = function () {
        this.cancelBubble = !0
      }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
        this.attachEvent("on" + e, o)
      }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
        this.detachEvent("on" + e, o)
      }, this.cancelEvent = function (e) {
        return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
      }, this.stopPropagation = function (e) {
        return (e = e || a.event) && (e.cancelBubble = !0), !1
      };
      this.delegate = function (e, o, t, r, i) {
        var s = d[o] || !1;
        s || (s = {
          a: [],
          l: [],
          f: function (e) {
            for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
              if (!1 === (t = o[r].call(e.target, e))) return !1;
            return t
          }
        }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
      }, this.undelegate = function (e, o, t, r, i) {
        var s = d[o] || !1;
        if (s && s.l)
          for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null))
      }, this.bind = function (e, o, t, r, i) {
        var s = "jquery" in e ? e[0] : e;
        T._bind(s, o, t, r || !1, i || !1)
      }, this._bind = function (e, o, t, r, i) {
        T.events.push({
          e: e,
          n: o,
          f: t,
          b: r,
          q: !1
        }), Y && i ? e.addEventListener(o, t, {
          passive: !1,
          capture: r
        }) : e.addEventListener(o, t, r || !1)
      }, this._unbind = function (e, o, t, r) {
        d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
      }, this.unbindAll = function () {
        for (var e = 0; e < T.events.length; e++) {
          var o = T.events[e];
          o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
        }
      }, this.showRails = function () {
        return T.showRail().showRailHr()
      }, this.showRail = function () {
        return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
      }, this.showRailHr = function () {
        return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
      }, this.hideRails = function () {
        return T.hideRail().hideRailHr()
      }, this.hideRail = function () {
        return T.rail.visibility = !1, T.rail.css("display", "none"), T
      }, this.hideRailHr = function () {
        return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
      }, this.show = function () {
        return T.hidden = !1, T.railslocked = !1, T.showRails()
      }, this.hide = function () {
        return T.hidden = !0, T.railslocked = !0, T.hideRails()
      }, this.toggle = function () {
        return T.hidden ? T.show() : T.hide()
      }, this.remove = function () {
        T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
        for (var e in T.delaylist) T.delaylist[e] && h(T.delaylist[e].h);
        T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
        for (var o = 0; o < T.saved.css.length; o++) {
          var t = T.saved.css[o];
          t[0].css(t[1], void 0 === t[2] ? "" : t[2])
        }
        T.saved = !1, T.me.data("__nicescroll", "");
        var r = n.nicescroll;
        r.each(function (e) {
          if (this && this.id === T.id) {
            delete r[e];
            for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
            --r.length && delete r[r.length]
          }
        });
        for (var i in T) T[i] = null, delete T[i];
        T = null
      }, this.scrollstart = function (e) {
        return this.onscrollstart = e, T
      }, this.scrollend = function (e) {
        return this.onscrollend = e, T
      }, this.scrollcancel = function (e) {
        return this.onscrollcancel = e, T
      }, this.zoomin = function (e) {
        return this.onzoomin = e, T
      }, this.zoomout = function (e) {
        return this.onzoomout = e, T
      }, this.isScrollable = function (e) {
        var o = e.target ? e.target : e;
        if ("OPTION" == o.nodeName) return !0;
        for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
          var t = n(o),
            r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
          if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
          o = !!o.parentNode && o.parentNode
        }
        return !1
      }, this.getViewport = function (e) {
        for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
          var t = n(o);
          if (/fixed|absolute/.test(t.css("position"))) return t;
          var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
          if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
          if (t.getNiceScroll().length > 0) return t;
          o = !!o.parentNode && o.parentNode
        }
        return !1
      }, this.triggerScrollStart = function (e, o, t, r, i) {
        if (T.onscrollstart) {
          var s = {
            type: "scrollstart",
            current: {
              x: e,
              y: o
            },
            request: {
              x: t,
              y: r
            },
            end: {
              x: T.newscrollx,
              y: T.newscrolly
            },
            speed: i
          };
          T.onscrollstart.call(T, s)
        }
      }, this.triggerScrollEnd = function () {
        if (T.onscrollend) {
          var e = T.getScrollLeft(),
            o = T.getScrollTop(),
            t = {
              type: "scrollend",
              current: {
                x: e,
                y: o
              },
              end: {
                x: e,
                y: o
              }
            };
          T.onscrollend.call(T, t)
        }
      };
      var B = 0,
        X = 0,
        D = 0,
        A = 1,
        q = !1;
      if (this.onmousewheel = function (e) {
          if (T.wheelprevented || T.locked) return !1;
          if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
          if (T.rail.drag) return T.cancelEvent(e);
          if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
          var o = f(),
            t = !1;
          if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
          var r = k(e, !1, t);
          return r && (T.checkarea = 0), r
        }, this.onmousewheelhr = function (e) {
          if (!T.wheelprevented) {
            if (T.railslocked || !T.railh.scrollable) return !0;
            if (T.rail.drag) return T.cancelEvent(e);
            var o = f(),
              t = !1;
            return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
          }
        }, this.stop = function () {
          return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
        }, this.getTransitionSpeed = function (e) {
          return 80 + e / 72 * M.scrollspeed | 0
        }, M.smoothscroll)
        if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
          var j = "";
          this.resetTransition = function () {
            j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
          }, this.prepareTransition = function (e, o) {
            var t = o ? e : T.getTransitionSpeed(e),
              r = t + "ms";
            return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
          }, this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o)
          }, this.doScrollTop = function (e, o) {
            var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
            T.doScrollPos(t, e, o)
          }, this.cursorupdate = {
            running: !1,
            start: function () {
              var e = this;
              if (!e.running) {
                e.running = !0;
                var o = function () {
                  e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
                };
                u(o)
              }
            },
            stop: function () {
              this.running = !1
            }
          }, this.doScrollPos = function (e, o, t) {
            var r = T.getScrollTop(),
              i = T.getScrollLeft();
            if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
            T.newscrolly = o, T.newscrollx = e;
            var s = T.getScrollTop(),
              n = T.getScrollLeft(),
              l = {};
            l.x = e - n, l.y = o - s;
            var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
              c = T.prepareTransition(a);
            T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
          }, this.cancelScroll = function () {
            if (!T.scrollendtrapped) return !0;
            var e = T.getScrollTop(),
              o = T.getScrollLeft();
            return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
          }, this.onScrollTransitionEnd = function () {
            if (T.scrollendtrapped) {
              var e = T.getScrollTop(),
                o = T.getScrollLeft();
              if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
              T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
            }
          }
        } else this.doScrollLeft = function (e, o) {
          var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
          T.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
          var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
          T.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
          var r = T.getScrollTop(),
            i = T.getScrollLeft();
          ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
          var s = !1;
          if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
          T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
          var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
            l = T.getTransitionSpeed(n);
          T.bzscroll = {};
          var a = s ? 1 : .58;
          T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
          f();
          var c = function () {
            if (T.scrollrunning) {
              var e = T.bzscroll.y.getPos();
              T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
            }
          };
          T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c))
        }, this.cancelScroll = function () {
          return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
        };
      else this.doScrollLeft = function (e, o) {
        var t = T.getScrollTop();
        T.doScrollPos(e, t, o)
      }, this.doScrollTop = function (e, o) {
        var t = T.getScrollLeft();
        T.doScrollPos(t, e, o)
      }, this.doScrollPos = function (e, o, t) {
        var r = e > T.page.maxw ? T.page.maxw : e;
        r < 0 && (r = 0);
        var i = o > T.page.maxh ? T.page.maxh : o;
        i < 0 && (i = 0), T.synched("scroll", function () {
          T.setScrollTop(i), T.setScrollLeft(r)
        })
      }, this.cancelScroll = function () {};
      this.doScrollBy = function (e, o) {
        z(0, e)
      }, this.doScrollLeftBy = function (e, o) {
        z(e, 0)
      }, this.doScrollTo = function (e, o) {
        var t = o ? Math.round(e * T.scrollratio.y) : e;
        t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
      }, this.checkContentSize = function () {
        var e = T.getContentSize();
        e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
      }, T.onscroll = function (e) {
        T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
          T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
        })
      }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
        if (!T.zoomactive) {
          T.zoomactive = !0, T.zoomrestore = {
            style: {}
          };
          var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
            t = T.win[0].style;
          for (var r in o) {
            var i = o[r];
            T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
          }
          T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
            w: T.win.outerWidth() - T.win.width(),
            h: T.win.outerHeight() - T.win.height()
          }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
            position: P.isios4 ? "absolute" : "fixed",
            top: 0,
            left: 0,
            zIndex: s + 100,
            margin: 0
          });
          var n = T.win.css("backgroundColor");
          return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
            zIndex: s + 101
          }), T.zoom.css({
            zIndex: s + 102
          }), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
        }
      }, this.doZoomOut = function (e) {
        if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
          "z-index": T.zindex
        }), T.zoom.css({
          "z-index": T.zindex
        }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
      }, this.doZoom = function (e) {
        return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
      }, this.resizeZoom = function () {
        if (T.zoomactive) {
          var e = T.getScrollTop();
          T.win.css({
            width: c.width() - T.zoomrestore.padding.w + "px",
            height: c.height() - T.zoomrestore.padding.h + "px"
          }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
        }
      }, this.init(), n.nicescroll.push(this)
    },
    y = function (e) {
      var o = this;
      this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
        o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
      }, this.update = function (e, t) {
        var r = f();
        o.steptime = r - o.lasttime, o.lasttime = r;
        var i = t - o.lasty,
          s = e - o.lastx,
          n = o.nc.getScrollTop() + i,
          l = o.nc.getScrollLeft() + s;
        o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
      }, this.stop = function () {
        o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
      }, this.doSnapy = function (e, t) {
        var r = !1;
        t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
      }, this.doMomentum = function (e) {
        var t = f(),
          r = e ? t + e : o.lasttime,
          i = o.nc.getScrollLeft(),
          s = o.nc.getScrollTop(),
          n = o.nc.page.maxh,
          l = o.nc.page.maxw;
        o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
        var a = r && t - r <= 60;
        (s < 0 || s > n || i < 0 || i > l) && (a = !1);
        var c = !(!o.speedy || !a) && o.speedy,
          d = !(!o.speedx || !a) && o.speedx;
        if (c || d) {
          var u = Math.max(16, o.steptime);
          if (u > 50) {
            var h = u / 50;
            o.speedx *= h, o.speedy *= h, u = 50
          }
          o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
          var p = o.lastscrollx,
            m = o.lastscrolly,
            g = function () {
              var e = f() - t > 600 ? .04 : .02;
              o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                if (o.speedx) {
                  o.nc.getScrollLeft();
                  o.chkx = p, o.nc.setScrollLeft(p)
                }
                if (o.speedy) {
                  o.nc.getScrollTop();
                  o.chky = m, o.nc.setScrollTop(m)
                }
                o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
              }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
            };
          g()
        } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
      }
    },
    x = e.fn.scrollTop;
  e.cssHooks.pageYOffset = {
    get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
    },
    set: function (e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
    }
  }, e.fn.scrollTop = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
    }
    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
    })
  };
  var S = e.fn.scrollLeft;
  n.cssHooks.pageXOffset = {
    get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
    },
    set: function (e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
    }
  }, e.fn.scrollLeft = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
    }
    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
    })
  };
  var z = function (e) {
    var o = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
        return n.each(o, e), o
      }, this.push = function (e) {
        o[o.length] = e, o.length++
      }, this.eq = function (e) {
        return o[e]
      }, e)
      for (var t = 0; t < e.length; t++) {
        var r = n.data(e[t], "__nicescroll") || !1;
        r && (this[this.length] = r, this.length++)
      }
    return this
  };
  ! function (e, o, t) {
    for (var r = 0, i = o.length; r < i; r++) t(e, o[r])
  }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
    e[o] = function () {
      var e = arguments;
      return this.each(function () {
        this[o].apply(this, e)
      })
    }
  }), e.fn.getNiceScroll = function (e) {
    return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
  }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
    return void 0 !== n.data(e, "__nicescroll")
  }, n.fn.niceScroll = function (e, o) {
    void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
    var t = new z;
    return this.each(function () {
      var r = n(this),
        i = n.extend({}, o);
      if (e) {
        var s = n(e);
        i.doc = s.length > 1 ? n(e, r) : s, i.win = r
      }!("doc" in i) || "win" in i || (i.win = r);
      var l = r.data("__nicescroll") || !1;
      l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l)
    }), 1 === t.length ? t[0] : t
  }, a.NiceScroll = {
    getjQuery: function () {
      return e
    }
  }, n.nicescroll || (n.nicescroll = new z, n.nicescroll.options = g)
});


/* jquery.nicescroll.plus
-- the addon for nicescroll
-- version 1.0.0 BETA
-- copyright 13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/
! function (r) {
  function o(r) {
    var o = {};
    switch (r) {
      case "fb":
        o.autohidemode = !1, o.cursorcolor = "#7B7C7E", o.railcolor = "", o.cursoropacitymax = .8, o.cursorwidth = 10, o.cursorborder = "1px solid #868688", o.cursorborderradius = "10px"
    }
    return o
  }

  function i(r, o) {
    function i() {
      o._stylerfbstate = !1, o.rail.css({
        backgroundColor: ""
      }), o.cursor.stop().animate({
        width: 3
      }, 200)
    }
    if (o.rail) switch (r) {
      case "fb":
        o.rail.css({
          "-webkit-border-radius": "10px",
          "-moz-border-radius": "10px",
          "border-radius": "10px"
        }), o.cursor.css({
          width: 3
        });
        var t = o.ispage ? o.rail : o.win;
        t.hover(function () {
          o._stylerfbstate = !0, o.rail.css({
            backgroundColor: "transparent"
          }), o.cursor.stop().css({
            width: 10
          })
        }, function () {
          o.rail.drag || i()
        }), c(document).mouseup(function () {
          o._stylerfbstate && i()
        })
    }
  }
  var c = r;
  if (c && "nicescroll" in c) {
    c.extend(c.nicescroll.options, {
      styler: !1
    });
    var t = {
      niceScroll: c.fn.niceScroll,
      getNiceScroll: c.fn.getNiceScroll
    };
    c.fn.niceScroll = function (r, s) {
      "undefined" != typeof r && "object" == typeof r && (s = r, r = !1);
      var n = s && s.styler || c.nicescroll.options.styler || !1;
      n && (nw = o(n), c.extend(nw, s), s = nw);
      var l = t.niceScroll.call(this, r, s);
      return n && i(n, l), l.scrollTo = function (r) {
        var o = this.win.position(),
          i = this.win.find(r).position();
        if (i) {
          var c = Math.floor(i.top - o.top + this.scrollTop());
          this.doScrollTop(c)
        }
      }, l
    }, c.fn.getNiceScroll = function (r) {
      var o = t.getNiceScroll.call(this, r);
      return o.scrollTo = function (r) {
        this.each(function () {
          this.scrollTo.call(this, r)
        })
      }, o
    }
  }
}(jQuery);


/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function (a) {
  function b(b) {
    var c = {},
      d = /^jQuery\d+$/;
    return a.each(b.attributes, function (a, b) {
      b.specified && !d.test(b.name) && (c[b.name] = b.value)
    }), c
  }

  function c(b, c) {
    var d = this,
      f = a(this);
    if (d.value === f.attr(h ? "placeholder-x" : "placeholder") && f.hasClass(n.customClass))
      if (d.value = "", f.removeClass(n.customClass), f.data("placeholder-password")) {
        if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c, c;
        f.focus()
      } else d == e() && d.select()
  }

  function d(d) {
    var e, f = this,
      g = a(this),
      i = f.id;
    if (!d || "blur" !== d.type || !g.hasClass(n.customClass))
      if ("" === f.value) {
        if ("password" === f.type) {
          if (!g.data("placeholder-textinput")) {
            try {
              e = g.clone().prop({
                type: "text"
              })
            } catch (j) {
              e = a("<input>").attr(a.extend(b(this), {
                type: "text"
              }))
            }
            e.removeAttr("name").data({
              "placeholder-enabled": !0,
              "placeholder-password": g,
              "placeholder-id": i
            }).bind("focus.placeholder", c), g.data({
              "placeholder-textinput": e,
              "placeholder-id": i
            }).before(e)
          }
          f.value = "", g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
        } else {
          var k = g.data("placeholder-password");
          k && (k[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
        }
        g.addClass(n.customClass), g[0].value = g.attr(h ? "placeholder-x" : "placeholder")
      } else g.removeClass(n.customClass)
  }

  function e() {
    try {
      return document.activeElement
    } catch (a) {}
  }
  var f, g, h = !1,
    i = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
    j = "placeholder" in document.createElement("input") && !i && !h,
    k = "placeholder" in document.createElement("textarea") && !i && !h,
    l = a.valHooks,
    m = a.propHooks,
    n = {};
  j && k ? (g = a.fn.placeholder = function () {
    return this
  }, g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function (b) {
    var e = {
      customClass: "placeholder"
    };
    return n = a.extend({}, e, b), this.filter((j ? "textarea" : ":input") + "[" + (h ? "placeholder-x" : "placeholder") + "]").not("." + n.customClass).not(":radio, :checkbox, [type=hidden]").bind({
      "focus.placeholder": c,
      "blur.placeholder": d
    }).data("placeholder-enabled", !0).trigger("blur.placeholder")
  }, g.input = j, g.textarea = k, f = {
    get: function (b) {
      var c = a(b),
        d = c.data("placeholder-password");
      return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(n.customClass) ? "" : b.value
    },
    set: function (b, f) {
      var g, h, i = a(b);
      return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)), i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(n.customClass) && c.call(b), b.value = f), i) : (b.value = f, i)
    }
  }, j || (l.input = f, m.value = f), k || (l.textarea = f, m.value = f), a(function () {
    a(document).delegate("form", "submit.placeholder", function () {
      var b = a("." + n.customClass, this).each(function () {
        c.call(this, !0, "")
      });
      setTimeout(function () {
        b.each(d)
      }, 10)
    })
  }), a(window).bind("beforeunload.placeholder", function () {
    var b = !0;
    try {
      "javascript:void(0)" === document.activeElement.toString() && (b = !1)
    } catch (c) {}
    b && a("." + n.customClass).each(function () {
      this.value = ""
    })
  }))
});


/*!
 * Retina.js v2.1.0
 *
 * Copyright 2016 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
! function () {
  function t(t) {
    return Array.prototype.slice.call(t)
  }

  function e(t) {
    var e = parseInt(t, 10);
    return e > f ? f : e
  }

  function r(t) {
    return t.hasAttribute("data-no-resize") || (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))), t
  }

  function n(t, e) {
    var n = t.nodeName.toLowerCase(),
      i = document.createElement("img");
    i.addEventListener("load", function () {
      "img" === n ? r(t).setAttribute("src", e) : t.style.backgroundImage = "url(" + e + ")"
    }), i.setAttribute("src", e), t.setAttribute(h, !0)
  }

  function i(t, r) {
    var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
      o = e(i);
    if (r && o > 1) {
      var a = r.replace(c, "@" + o + "x$1");
      n(t, a)
    }
  }

  function o(t, e, r) {
    f > 1 && n(t, r)
  }

  function a(e) {
    return e ? "function" == typeof e.forEach ? e : t(e) : "undefined" != typeof document ? t(document.querySelectorAll(g)) : []
  }

  function u(t) {
    return t.style.backgroundImage.replace(l, "$2")
  }

  function d(t) {
    a(t).forEach(function (t) {
      if (!t.getAttribute(h)) {
        var e = "img" === t.nodeName.toLowerCase(),
          r = e ? t.getAttribute("src") : u(t),
          n = t.getAttribute("data-rjs"),
          a = !isNaN(parseInt(n, 10));
        a ? i(t, r, n) : o(t, r, n)
      }
    })
  }
  "undefined" == typeof exports && (exports = {}), Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var s = "undefined" != typeof window,
    f = s ? window.devicePixelRatio || 1 : 1,
    c = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
    l = /url\(('|")?([^\)'"]+)('|")?\)/i,
    g = "[data-rjs]",
    h = "data-rjs-processed";
  s && (window.addEventListener("load", d), window.retinajs = d), exports["default"] = d
}();


/**
 * Arctext.js
 * A jQuery plugin for curved text
 * http://www.codrops.com
 *
 * Copyright 2011, Pedro Botelho / Codrops
 * Free to use under the MIT license.
 *
 * Date: Mon Jan 23 2012
 */
! function (t, i) {
  function s(i, s, n, a) {
    var e, r = i.text().split(s),
      o = "";
    r.length && (t(r).each(function (t, i) {
      e = "", " " === i && (e = " empty", i = "&nbsp;"), o += '<span class="' + n + (t + 1) + e + '">' + i + "</span>" + a
    }), i.empty().append(o))
  }
  t.fn.fitText = function (i, s) {
    var n = {
      minFontSize: Number.NEGATIVE_INFINITY,
      maxFontSize: Number.POSITIVE_INFINITY
    };
    return this.each(function () {
      var a = t(this),
        e = i || 1;
      s && t.extend(n, s);
      var r = function () {
        a.css("font-size", Math.max(Math.min(a.width() / (10 * e), parseFloat(n.maxFontSize)), parseFloat(n.minFontSize)))
      };
      r(), t(window).resize(r)
    })
  };
  var n = {
    init: function () {
      return this.each(function () {
        s(t(this), "", "char", "")
      })
    },
    words: function () {
      return this.each(function () {
        s(t(this), " ", "word", " ")
      })
    },
    lines: function () {
      return this.each(function () {
        var i = "eefec303079ad17405c889e092e105b0";
        s(t(this).children("br").replaceWith(i).end(), i, "line", "")
      })
    }
  };
  t.fn.lettering = function (i) {
    return i && n[i] ? n[i].apply(this, [].slice.call(arguments, 1)) : "letters" !== i && i ? (t.error("Method " + i + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0))
  }, t.Arctext = function (i, s) {
    this.$el = t(s), this._init(i)
  }, t.Arctext.defaults = {
    radius: 0,
    dir: 1,
    rotate: !0,
    fitText: !1
  }, t.Arctext.prototype = {
    _init: function (i) {
      this.options = t.extend(!0, {}, t.Arctext.defaults, i), this._applyLettering(), this.$el.data("arctext", !0), this._calc(), this._rotateWord(), this._loadEvents()
    },
    _applyLettering: function () {
      this.$el.lettering(), this.options.fitText && this.$el.fitText(), this.$letters = this.$el.find("span").css("display", "inline-block")
    },
    _calc: function () {
      return -1 === this.options.radius ? !1 : (this._calcBase(), void this._calcLetters())
    },
    _calcBase: function () {
      this.dtWord = 0;
      var i = this;
      this.$letters.each(function () {
        var s = t(this),
          n = s.outerWidth(!0);
        i.dtWord += n, s.data("center", i.dtWord - n / 2)
      });
      var s = this.dtWord / 2;
      this.options.radius < s && (this.options.radius = s), this.dtArcBase = this.dtWord;
      var n = 2 * Math.asin(this.dtArcBase / (2 * this.options.radius));
      this.dtArc = this.options.radius * n
    },
    _calcLetters: function () {
      var i = this,
        s = 0;
      this.$letters.each(function () {
        var n = t(this),
          a = n.outerWidth(!0) / i.dtWord * i.dtArc,
          e = a / i.options.radius,
          r = i.options.radius * Math.cos(e / 2),
          o = Math.acos((i.dtWord / 2 - s) / i.options.radius),
          c = o + e / 2,
          h = Math.cos(c) * r,
          d = Math.sin(c) * r,
          u = s + Math.abs(i.dtWord / 2 - h - s),
          l = 0 | u - n.data("center"),
          f = 0 | i.options.radius - d,
          p = i.options.rotate ? 0 | -Math.asin(h / i.options.radius) * (180 / Math.PI) : 0;
        s = 2 * u - s, n.data({
          x: l,
          y: 1 === i.options.dir ? f : -f,
          a: 1 === i.options.dir ? p : -p
        })
      })
    },
    _rotateWord: function (i) {
      if (!this.$el.data("arctext")) return !1;
      var s = this;
      this.$letters.each(function () {
        var n = t(this),
          a = -1 === s.options.radius ? "none" : "translateX(" + n.data("x") + "px) translateY(" + n.data("y") + "px) rotate(" + n.data("a") + "deg)",
          e = i ? "all " + (i.speed || 0) + "ms " + (i.easing || "linear") : "none";
        n.css({
          "-webkit-transition": e,
          "-moz-transition": e,
          "-o-transition": e,
          "-ms-transition": e,
          transition: e
        }).css({
          "-webkit-transform": a,
          "-moz-transform": a,
          "-o-transform": a,
          "-ms-transform": a,
          transform: a
        })
      })
    },
    _loadEvents: function () {
      if (this.options.fitText) {
        var i = this;
        t(window).on("resize.arctext", function () {
          i._calc(), i._rotateWord()
        })
      }
    },
    set: function (t) {
      return t.radius || t.dir || "undefined" !== t.rotate ? (this.options.radius = t.radius || this.options.radius, this.options.dir = t.dir || this.options.dir, t.rotate !== i && (this.options.rotate = t.rotate), this._calc(), void this._rotateWord(t.animation)) : !1
    },
    destroy: function () {
      this.options.radius = -1, this._rotateWord(), this.$letters.removeData("x y a center"), this.$el.removeData("arctext"), t(window).off(".arctext")
    }
  };
  var a = function (t) {
    this.console && console.error(t)
  };
  t.fn.arctext = function (i) {
    if ("string" == typeof i) {
      var s = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var n = t.data(this, "arctext");
        return n ? t.isFunction(n[i]) && "_" !== i.charAt(0) ? void n[i].apply(n, s) : void a("no such method '" + i + "' for arctext instance") : void a("cannot call methods on arctext prior to initialization; attempted to call method '" + i + "'")
      })
    } else this.each(function () {
      var s = t.data(this, "arctext");
      s || t.data(this, "arctext", new t.Arctext(i, this))
    });
    return this
  }
}(jQuery);


/**
 * A RichMarker that allows any HTML/DOM to be added to a map and be draggable.
 *
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
if (typeof google !== 'undefined') {
  ! function () {
    function t(t) {
      var e = t || {};
      this.d = this.c = c, void 0 == t.visible && (t.visible = l), void 0 == t.shadow && (t.shadow = "7px -3px 5px rgba(88,88,88,0.7)"), void 0 == t.anchor && (t.anchor = y.BOTTOM), this.setValues(e)
    }

    function e(t, e) {
      var o = document.createElement("DIV");
      if (o.innerHTML = e, 1 == o.childNodes.length) return o.removeChild(o.firstChild);
      for (var i = document.createDocumentFragment(); o.firstChild;) i.appendChild(o.firstChild);
      return i
    }

    function o(t, e) {
      if (e)
        for (var o; o = e.firstChild;) e.removeChild(o)
    }

    function i(t, e) {
      if (t.c) {
        var o = ""; - 1 !== navigator.userAgent.indexOf("Gecko/") ? ("dragging" == e && (o = "-moz-grabbing"), "dragready" == e && (o = "-moz-grab")) : ("dragging" == e || "dragready" == e) && (o = "move"), "draggable" == e && (o = "pointer"), t.a.style.cursor != o && (t.a.style.cursor = o)
      }
    }

    function n(t, e) {
      if (t.getDraggable() && !t.d) {
        t.d = l;
        var o = t.getMap();
        t.m = o.get("draggable"), o.set("draggable", c), t.h = e.clientX, t.i = e.clientY, i(t, "dragready"), t.a.style.MozUserSelect = "none", t.a.style.KhtmlUserSelect = "none", t.a.style.WebkitUserSelect = "none", t.a.unselectable = "on", t.a.onselectstart = function () {
          return c
        }, g(t), google.maps.event.trigger(t, "dragstart")
      }
    }

    function r(t) {
      t.getDraggable() && t.d && (t.d = c, t.getMap().set("draggable", t.m), t.h = t.i = t.m = null, t.a.style.MozUserSelect = "", t.a.style.KhtmlUserSelect = "", t.a.style.WebkitUserSelect = "", t.a.unselectable = "off", t.a.onselectstart = function () {}, h(t), i(t, "draggable"), google.maps.event.trigger(t, "dragend"), t.draw())
    }

    function s(t, e) {
      if (t.getDraggable() && t.d) {
        var o = t.h - e.clientX,
          n = t.i - e.clientY;
        t.h = e.clientX, t.i = e.clientY, o = parseInt(t.a.style.left, 10) - o, n = parseInt(t.a.style.top, 10) - n, t.a.style.left = o + "px", t.a.style.top = n + "px";
        var s = d(t);
        t.setPosition(t.getProjection().fromDivPixelToLatLng(new google.maps.Point(o - s.width, n - s.height))), i(t, "dragging"), google.maps.event.trigger(t, "drag")
      } else r(t)
    }

    function a(t) {
      t.f && (google.maps.event.removeListener(t.f), delete t.f), i(t, "")
    }

    function p(t, e) {
      e && (t.f = google.maps.event.addDomListener(e, "mousedown", function (e) {
        n(t, e)
      }), i(t, "draggable"))
    }

    function g(t) {
      t.a.setCapture ? (t.a.setCapture(l), t.e = [google.maps.event.addDomListener(t.a, "mousemove", function (e) {
        s(t, e)
      }, l), google.maps.event.addDomListener(t.a, "mouseup", function () {
        r(t), t.a.releaseCapture()
      }, l)]) : t.e = [google.maps.event.addDomListener(window, "mousemove", function (e) {
        s(t, e)
      }, l), google.maps.event.addDomListener(window, "mouseup", function () {
        r(t)
      }, l)]
    }

    function h(t) {
      if (t.e) {
        for (var e, o = 0; e = t.e[o]; o++) google.maps.event.removeListener(e);
        t.e.length = 0
      }
    }

    function d(t) {
      var e = t.l();
      if ("object" == typeof e) return e;
      var o = new google.maps.Size(0, 0);
      if (!t.b) return o;
      var i = t.b.offsetWidth;
      switch (t = t.b.offsetHeight, e) {
        case y.TOP:
          o.width = -i / 2;
          break;
        case y.TOP_RIGHT:
          o.width = -i;
          break;
        case y.LEFT:
          o.height = -t / 2;
          break;
        case y.MIDDLE:
          o.width = -i / 2, o.height = -t / 2;
          break;
        case y.RIGHT:
          o.width = -i, o.height = -t / 2;
          break;
        case y.BOTTOM_LEFT:
          o.height = -t;
          break;
        case y.BOTTOM:
          o.width = -i / 2, o.height = -t;
          break;
        case y.BOTTOM_RIGHT:
          o.width = -i, o.height = -t
      }
      return o
    }
    var l = !0,
      c = !1;
    t.prototype = new google.maps.OverlayView, window.RichMarker = t, t.prototype.getVisible = function () {
      return this.get("visible")
    }, t.prototype.getVisible = t.prototype.getVisible, t.prototype.setVisible = function (t) {
      this.set("visible", t)
    }, t.prototype.setVisible = t.prototype.setVisible, t.prototype.s = function () {
      this.c && (this.a.style.display = this.getVisible() ? "" : "none", this.draw())
    }, t.prototype.visible_changed = t.prototype.s, t.prototype.setFlat = function (t) {
      this.set("flat", !!t)
    }, t.prototype.setFlat = t.prototype.setFlat, t.prototype.getFlat = function () {
      return this.get("flat")
    }, t.prototype.getFlat = t.prototype.getFlat, t.prototype.p = function () {
      return this.get("width")
    }, t.prototype.getWidth = t.prototype.p, t.prototype.o = function () {
      return this.get("height")
    }, t.prototype.getHeight = t.prototype.o, t.prototype.setShadow = function (t) {
      this.set("shadow", t), this.g()
    }, t.prototype.setShadow = t.prototype.setShadow, t.prototype.getShadow = function () {
      return this.get("shadow")
    }, t.prototype.getShadow = t.prototype.getShadow, t.prototype.g = function () {
      this.c && (this.a.style.boxShadow = this.a.style.webkitBoxShadow = this.a.style.MozBoxShadow = this.getFlat() ? "" : this.getShadow())
    }, t.prototype.flat_changed = t.prototype.g, t.prototype.setZIndex = function (t) {
      this.set("zIndex", t)
    }, t.prototype.setZIndex = t.prototype.setZIndex, t.prototype.getZIndex = function () {
      return this.get("zIndex")
    }, t.prototype.getZIndex = t.prototype.getZIndex, t.prototype.t = function () {
      this.getZIndex() && this.c && (this.a.style.zIndex = this.getZIndex())
    }, t.prototype.zIndex_changed = t.prototype.t, t.prototype.getDraggable = function () {
      return this.get("draggable")
    }, t.prototype.getDraggable = t.prototype.getDraggable, t.prototype.setDraggable = function (t) {
      this.set("draggable", !!t)
    }, t.prototype.setDraggable = t.prototype.setDraggable, t.prototype.k = function () {
      this.c && (this.getDraggable() ? p(this, this.a) : a(this))
    }, t.prototype.draggable_changed = t.prototype.k, t.prototype.getPosition = function () {
      return this.get("position")
    }, t.prototype.getPosition = t.prototype.getPosition, t.prototype.setPosition = function (t) {
      this.set("position", t)
    }, t.prototype.setPosition = t.prototype.setPosition, t.prototype.q = function () {
      this.draw()
    }, t.prototype.position_changed = t.prototype.q, t.prototype.l = function () {
      return this.get("anchor")
    }, t.prototype.getAnchor = t.prototype.l, t.prototype.r = function (t) {
      this.set("anchor", t)
    }, t.prototype.setAnchor = t.prototype.r, t.prototype.n = function () {
      this.draw()
    }, t.prototype.anchor_changed = t.prototype.n, t.prototype.setContent = function (t) {
      this.set("content", t)
    }, t.prototype.setContent = t.prototype.setContent, t.prototype.getContent = function () {
      return this.get("content")
    }, t.prototype.getContent = t.prototype.getContent, t.prototype.j = function () {
      if (this.b) {
        o(this, this.b);
        var t = this.getContent();
        if (t) {
          "string" == typeof t && (t = t.replace(/^\s*([\S\s]*)\b\s*$/, "$1"), t = e(this, t)), this.b.appendChild(t);
          var i = this;
          t = this.b.getElementsByTagName("IMG");
          for (var n, r = 0; n = t[r]; r++) google.maps.event.addDomListener(n, "mousedown", function (t) {
            i.getDraggable() && (t.preventDefault && t.preventDefault(), t.returnValue = c)
          }), google.maps.event.addDomListener(n, "load", function () {
            i.draw()
          });
          google.maps.event.trigger(this, "domready")
        }
        this.c && this.draw()
      }
    }, t.prototype.content_changed = t.prototype.j, t.prototype.onAdd = function () {
      if (this.a || (this.a = document.createElement("DIV"), this.a.style.position = "absolute"), this.getZIndex() && (this.a.style.zIndex = this.getZIndex()), this.a.style.display = this.getVisible() ? "" : "none", !this.b) {
        this.b = document.createElement("DIV"), this.a.appendChild(this.b);
        var t = this;
        google.maps.event.addDomListener(this.b, "click", function () {
          google.maps.event.trigger(t, "click")
        }), google.maps.event.addDomListener(this.b, "mouseover", function () {
          google.maps.event.trigger(t, "mouseover")
        }), google.maps.event.addDomListener(this.b, "mouseout", function () {
          google.maps.event.trigger(t, "mouseout")
        })
      }
      this.c = l, this.j(), this.g(), this.k();
      var e = this.getPanes();
      e && e.overlayImage.appendChild(this.a), google.maps.event.trigger(this, "ready")
    }, t.prototype.onAdd = t.prototype.onAdd, t.prototype.draw = function () {
      if (this.c && !this.d) {
        var t = this.getProjection();
        if (t) {
          var e = this.get("position");
          t = t.fromLatLngToDivPixel(e), e = d(this), this.a.style.top = t.y + e.height + "px", this.a.style.left = t.x + e.width + "px", t = this.b.offsetHeight, e = this.b.offsetWidth, e != this.get("width") && this.set("width", e), t != this.get("height") && this.set("height", t)
        }
      }
    }, t.prototype.draw = t.prototype.draw, t.prototype.onRemove = function () {
      this.a && this.a.parentNode && this.a.parentNode.removeChild(this.a), a(this)
    }, t.prototype.onRemove = t.prototype.onRemove;
    var y = {
      TOP_LEFT: 1,
      TOP: 2,
      TOP_RIGHT: 3,
      LEFT: 4,
      MIDDLE: 5,
      RIGHT: 6,
      BOTTOM_LEFT: 7,
      BOTTOM: 8,
      BOTTOM_RIGHT: 9
    };
    window.RichMarkerPosition = y
  }();
}


/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
! function (e) {
  function t() {
    var e = location.href;
    return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
  }

  function i() {
    "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
  }

  function p() {
    -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
  }

  function o(e, t) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = "[\\?&]" + e + "=([^&#]*)",
      p = new RegExp(i),
      o = p.exec(t);
    return null == o ? "" : o[1]
  }
  e.prettyPhoto = {
    version: "3.1.6"
  }, e.fn.prettyPhoto = function (a) {
    function s() {
      e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
        height: f.contentHeight,
        width: f.contentWidth
      }, settings.animation_speed), $pp_pic_holder.animate({
        top: projectedTop,
        left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
        width: f.containerWidth
      }, settings.animation_speed, function () {
        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
      }), m(), a.ajaxcallback()
    }

    function n(t) {
      $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
        e(".pp_loaderIcon").show(), t()
      })
    }

    function r(t) {
      t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
    }

    function l(e, t) {
      if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
        for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
        (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
      }
      return {
        width: Math.floor(imageWidth),
        height: Math.floor(imageHeight),
        containerHeight: Math.floor(b),
        containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
        contentHeight: Math.floor(y),
        contentWidth: Math.floor(w),
        resized: resized
      }
    }

    function d(t, i) {
      t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
    }

    function h(e) {
      return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
    }

    function c() {
      if (doresize && "undefined" != typeof $pp_pic_holder) {
        if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
        $pp_pic_holder.css({
          top: projectedTop,
          left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
        })
      }
    }

    function _() {
      return self.pageYOffset ? {
        scrollTop: self.pageYOffset,
        scrollLeft: self.pageXOffset
      } : document.documentElement && document.documentElement.scrollTop ? {
        scrollTop: document.documentElement.scrollTop,
        scrollLeft: document.documentElement.scrollLeft
      } : document.body ? {
        scrollTop: document.body.scrollTop,
        scrollLeft: document.body.scrollLeft
      } : void 0
    }

    function g() {
      I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
    }

    function m() {
      isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
    }

    function u() {
      if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
        currentGalleryPage = 0, toInject = "";
        for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
          return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_gallery.find(".pp_arrow_previous").click(function () {
          return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_pic_holder.find(".pp_content").hover(function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
        }, function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
        }), itemWidth = 57, $pp_gallery_li.each(function (t) {
          e(this).find("a").click(function () {
            return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
          })
        })
      }
      settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
        opacity: 0,
        height: e(document).height(),
        width: e(window).width()
      }).bind("click", function () {
        settings.modal || e.prettyPhoto.close()
      }), e("a.pp_close").bind("click", function () {
        return e.prettyPhoto.close(), !1
      }), settings.allow_expand && e("a.pp_expand").bind("click", function () {
        return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
          e.prettyPhoto.open()
        }), !1
      }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
        return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
      }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
        return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
      }), c()
    }
    a = jQuery.extend({
      hook: "rel",
      animation_speed: "fast",
      ajaxcallback: function () {},
      slideshow: 5e3,
      autoplay_slideshow: !1,
      opacity: .8,
      show_title: !0,
      allow_resize: !0,
      allow_expand: !0,
      default_width: 500,
      default_height: 344,
      counter_separator_label: "/",
      theme: "pp_default",
      horizontal_padding: 20,
      hideflash: !1,
      wmode: "opaque",
      autoplay: !0,
      modal: !1,
      deeplinking: !0,
      overlay_gallery: !0,
      overlay_gallery_max: 30,
      keyboard_shortcuts: !0,
      changepicturecallback: function () {},
      callback: function () {},
      ie6_fallback: !0,
      markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
      gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
      image_markup: '<img id="fullResImage" src="{path}" />',
      flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup: '<div class="pp_inline">{content}</div>',
      custom_markup: "",
      social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
    }, a);
    var f, v, y, w, b, k, P, x = this,
      $ = !1,
      I = e(window).height(),
      j = e(window).width();
    return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
      c(), g()
    }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
      if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
        case 37:
          e.prettyPhoto.changePage("previous"), t.preventDefault();
          break;
        case 39:
          e.prettyPhoto.changePage("next"), t.preventDefault();
          break;
        case 27:
          settings.modal || e.prettyPhoto.close(), t.preventDefault()
      }
    }), e.prettyPhoto.initialize = function () {
      return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
      }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
      }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
      }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function () {
        c()
      }), e.prettyPhoto.open(), !1
    }, e.prettyPhoto.open = function (t) {
      return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
        switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
          case "image":
            imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
              f = l(imgPreloader.width, imgPreloader.height), s()
            }, imgPreloader.onerror = function () {
              alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
            }, imgPreloader.src = pp_images[set_position];
            break;
          case "youtube":
            f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
            break;
          case "vimeo":
            f = l(movie_width, movie_height), movie_id = pp_images[set_position];
            var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
              i = movie_id.match(t);
            movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
            break;
          case "quicktime":
            f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
            break;
          case "flash":
            f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
            break;
          case "iframe":
            f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
            break;
          case "ajax":
            doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function (e) {
              toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
            });
            break;
          case "custom":
            f = l(movie_width, movie_height), toInject = settings.custom_markup;
            break;
          case "inline":
            myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
              width: settings.default_width
            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
        }
        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
      }), !1
    }, e.prettyPhoto.changePage = function (t) {
      currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
        e.prettyPhoto.open()
      })
    }, e.prettyPhoto.changeGalleryPage = function (e) {
      "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
        left: -slide_to
      }, slide_speed)
    }, e.prettyPhoto.startSlideshow = function () {
      "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
        return e.prettyPhoto.stopSlideshow(), !1
      }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
    }, e.prettyPhoto.stopSlideshow = function () {
      $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      }), clearInterval(P), P = void 0
    }, e.prettyPhoto.close = function () {
      $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
        e(this).remove()
      }), $pp_overlay.fadeOut(settings.animation_speed, function () {
        settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
      }))
    }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
      e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
    }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
  }
}(jQuery);
var pp_alreadyInitialized = !1;


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
! function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function () {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this.settings.margin || "",
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [];
      for (a.items = {
          merge: !1,
          width: b
        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      var b = [],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
        h = "",
        i = "";
      for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
      if (c && a.items.merge)
        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"],
    run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"],
    run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function () {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
      class: this.settings.stageClass
    }).wrap(a("<div/>", {
      class: this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()))
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b)
    }), this._mergers = this._items.map(function () {
      return 1
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
    }
    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible")
  }, e.prototype.setup = function () {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
        return this[a]
      }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function () {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function (a) {
    var b = null,
      c = null,
      d = null,
      e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
      e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function (b, c) {
    var e = -1,
      f = 30,
      g = this.width(),
      h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    })
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b
    })
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
      e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function (a) {
    var b, c, d, e = this.settings,
      f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
    else if (e.autoWidth || e.merge) {
      if (b = this._items.length)
        for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function (a) {
        return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function (b) {
    var c, e = 1,
      f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
      d = null,
      e = a - this.relative(c),
      f = (e > 0) - (e < 0),
      g = this._items.length,
      h = this.minimum(),
      i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : a < c;
      case ">":
        return d ? a < c : a > c;
      case ">=":
        return d ? a <= c : a >= c;
      case "<=":
        return d ? a >= c : a <= c
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a))
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
        f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings,
            e = c.center && Math.ceil(c.items / 2) || c.items,
            f = c.center && -1 * e || 0,
            g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
            h = this._core.clones().length,
            i = a.proxy(function (a, b) {
              this.load(b)
            }, this);
          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update()
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update()
      }, 250))
    })
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
      c = b + this._core.settings.items,
      d = this._core.settings.lazyLoad,
      e = this._core.$stage.children().toArray().slice(b, c),
      f = [],
      g = 0;
    a.each(e, function (b, c) {
      f.push(a(c).height())
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(),
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
    else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function (b, c) {
    var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function (c) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
          class: "owl-video-tn " + j,
          srcType: c
        }) : a("<div/>", {
          class: "owl-video-tn",
          style: "opacity:1;background-image:url(" + c + ")"
        }), b.after(d), b.after(e)
      };
    if (b.wrap(a("<div/>", {
        class: "owl-video-wrapper",
        style: g
      })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f)
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a.framegrab_url, l(f)
      }
    })
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function (b) {
    var c, d = a(b.target),
      e = d.closest("." + this._core.settings.itemClass),
      f = this._videos[e.attr("data-video")],
      g = f.width || "100%",
      h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function () {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
  }, e.prototype.read = function () {
    return (new Date).getTime() - this._time
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function () {
    var a, b, c, d = this._core.clones().length / 2,
      e = d + this._core.items().length,
      f = this._core.maximum(!0),
      g = this._core.settings,
      h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
              start: Math.min(f, a - d),
              end: a - d + h - 1
            }), Math.min(f, a - d) === f) break;
          b = 0, ++c
        }
        b += this._core.mergers(this._core.relative(a))
      }
  }, e.prototype.draw = function () {
    var b, c = this._core.settings,
      d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()),
      f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function (b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
            e = a.map(this._hashes, function (a, b) {
              return a === d ? b : null
            }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
        e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
      f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1
    }), e
  }

  function f(a) {
    return e(a, !0)
  }
  var g = a("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    j = {
      csstransforms: function () {
        return !!e("transform")
      },
      csstransforms3d: function () {
        return !!e("perspective")
      },
      csstransitions: function () {
        return !!e("transition")
      },
      cssanimations: function () {
        return !!e("animation")
      }
    };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function (a, b, c, d) {
  function e(b, c) {
    this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide()
      },
      showElement: function (a) {
        a.show()
      }
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft()
        },
        setLeft: function (a, b) {
          a.scrollLeft(b)
        },
        getTop: function (a) {
          return a.scrollTop()
        },
        setTop: function (a, b) {
          a.scrollTop(b)
        }
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10)
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10)
        }
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10)
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10)
        }
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
        }
      }
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b)
        },
        setTop: function (a, b) {
          a.css("top", b)
        }
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
        }
      }
    },
    j = function () {
      var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break
        } return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(),
    k = j("transform"),
    l = a("<div />", {
      style: "background:#fff"
    }).css("background-position-x") !== d,
    m = l ? function (a, b, c) {
      a.css({
        "background-position-x": b,
        "background-position-y": c
      })
    } : function (a, b, c) {
      a.css("background-position", b + " " + c)
    },
    n = l ? function (a) {
      return [a.css("background-position-x"), a.css("background-position-y")]
    } : function (a) {
      return a.css("background-position").split(" ")
    },
    o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
      setTimeout(a, 1e3 / 60)
    };
  e.prototype = {
    init: function () {
      this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
        firstLoad: !0
      }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement)
      }, this._getScrollTop = function () {
        return b.getTop(a.$scrollElement)
      }
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      this._setScrollLeft = "function" == typeof e ? function (a) {
        e(b.$scrollElement, a)
      } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
        f(b.$scrollElement, a)
      } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
        b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
      }
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive && d.bind("load." + this.name, function () {
        c.refresh()
      }), d.bind("resize." + this.name, function () {
        c._detectViewport(), c.options.responsive && c.refresh()
      })
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
        var a = d._getScrollLeft(),
          b = d._getScrollTop();
        d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
      }), this._setScrollLeft(e), this._setScrollTop(f)
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop()
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
      this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
        var c, e, f, g, h, i, j, k, l, m = a(this),
          n = 0,
          o = 0,
          p = 0,
          q = 0;
        if (m.data("stellar-elementIsActive")) {
          if (m.data("stellar-elementIsActive") !== this) return
        } else m.data("stellar-elementIsActive", this);
        b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
        }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
          $element: m,
          $offsetParent: j,
          isFixed: "fixed" === m.css("position"),
          horizontalOffset: c,
          verticalOffset: e,
          startingPositionLeft: f,
          startingPositionTop: g,
          startingOffsetLeft: k,
          startingOffsetTop: l,
          parentOffsetLeft: n,
          parentOffsetTop: o,
          stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
          width: m.outerWidth(!0),
          height: m.outerHeight(!0),
          isHidden: !1
        })
      })
    },
    _findBackgrounds: function () {
      var b, c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
        var b, g, h, i, j, k, l, o = a(this),
          p = n(o),
          q = 0,
          r = 0,
          s = 0,
          t = 0;
        if (o.data("stellar-backgroundIsActive")) {
          if (o.data("stellar-backgroundIsActive") !== this) return
        } else o.data("stellar-backgroundIsActive", this);
        o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
        }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
          $element: o,
          $offsetParent: l,
          isFixed: "fixed" === o.css("background-attachment"),
          horizontalOffset: b,
          verticalOffset: g,
          startingValueLeft: p[0],
          startingValueTop: p[1],
          startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
          startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
          startingPositionLeft: o.position().left,
          startingPositionTop: o.position().top,
          startingOffsetLeft: j,
          startingOffsetTop: k,
          parentOffsetLeft: q,
          parentOffsetTop: r,
          stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
        })
      }))
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
    },
    destroy: function () {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
        c.horizontalOffset = c.options.horizontalOffset()
      })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
        c.verticalOffset = c.options.verticalOffset()
      })) : this.verticalOffset = this.options.verticalOffset
    },
    _repositionElements: function () {
      var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
        for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
        for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), b = !1
        },
        d = function () {
          b || (o(c), b = !0)
        };
      this.$scrollElement.bind("scroll." + this.name, d), d()
    },
    _startAnimationLoop: function () {
      var a = this;
      this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements()
      }, this._animationLoop()
    }
  }, a.fn[f] = function (b) {
    var c = arguments;
    return b === d || "object" == typeof b ? this.each(function () {
      a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
    }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
      var d = a.data(this, "plugin_" + f);
      d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
    }) : void 0
  }, a[f] = function () {
    var c = a(b);
    return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
  }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


! function (e) {
  "use strict";
  e(document).ready(function () {
    var o = {
      initialized: !1,
      init: function () {
        var o = this;
        o.initialized || (o.initialized = !0, e("head").append('<link href="css/jquery.minicolors.min.css" rel="stylesheet" type="text/css" />'), e.getScript("js/jquery.minicolors.js", function () {
          o.construct(), o.events()
        }).fail(function () {
          // :D
        }))
      },
      construct: function () {
        var o = this;
        e(".minicolors").minicolors({
          theme: "bootstrap",
          change: function (e) {
            o.configColor(e)
          }
        })
      },
      events: function () {
        var o = !1;
        e("#template-settings>i").click(function () {
          o ? (e("#template-settings").animate({
            left: "-188px"
          }, 400, "easeInExpo"), o = !1) : (e("#template-settings").animate({
            left: "0px"
          }, 400, "easeOutExpo"), o = !0)
        })
      },
      configColor: function (o) {
        var t = this;
        t.convertHex(o, 90), e("#custom_color").remove(), e("head").append('<style type="text/css" id="custom_color" />'), e("#custom_color").html("h1, h2, h3, h4, h5, h6, .color, a, a:hover, a:focus, .btn-default:hover, .btn-default:active, .btn-default.active, .open > .dropdown-toggle.btn-default, .btn.ribbon::before, .btn.ribbon::after, .btn.ribbon:hover, .btn.ribbon.btn-color::before, .btn.ribbon.btn-color::after, .nav .open > a, .nav .open > a:hover, .nav .open > a:focus, .nav > li > a:hover, .nav > li > a:focus, .navbar-nav > li > a.active, .navbar-nav .dropdown-menu > li > a:hover, .navbar-nav .dropdown-menu > li > a:focus, .navbar-nav .dropdown-menu > li > a.active, .nav-mobile a:hover, .timeline .year .ribbon, .timeline_footer .punchline, .marker, .location-info .event_left .event_panel h4 small, .location-info .event_right .event_panel h4 small, .bridesmaids-groomsmen-slider .item .image .info h3, .wedding-gifts li, .gallery-scroller li > span i, .gallery-scroller li > span .fa, .blog-listing .item .info-blog h3 a, .blog-listing .ribbon, .blog-main-image .ribbon, .categories li a:hover, .categories li a:hover span, .categories li:hover:before, .blog-accordion.panel-group .panel .panel-body ul li a:hover, .blog-accordion.panel-group .panel .panel-body ul li:hover:before, .blog-bottom-info #post-author i, .post-content .highlight-color, .post-content .quote span, .share-wrapper .print-button:hover, .form-control, .add_list .input-group-addon:hover, #footer a, #footer a:hover, .sn-icons a {color:" + o + ";}.bg-color, #preloader > div.heartbeat:not(:required):after, #preloader > div.heartbeat:not(:required):before, .section-title::before, .section-title::after, .btn-color, .btn-color:focus, .btn-color.focus, .btn-color:hover, .btn-color:active, .btn-color.active, .open > .dropdown-toggle.btn-color, .btn.ribbon.btn-color, .bg-color .btn.ribbon.btn-color, .bg-color-overlay .btn.ribbon.btn-color, .owl-controls .owl-buttons div.owl-prev:hover, .owl-controls .owl-buttons div.owl-next:hover, .divider-bottom-2.divider-bg-color::after, .divider-bottom-2.divider-pattern.divider-bg-color::before, #nav-mobile-btn, .story-elem h3::after, .balloon-left::before, .balloon-right::before, .timeline::before, .timeline .event_left::before, .timeline .event_right::before, .timeline .event_left .event_panel h3::after, .timeline .event_right .event_panel h3::after, .timeline .event_left:hover .event_panel::before, .timeline .event_right:hover .event_panel::before, .marker:hover, .gallery-wrapper .gallery-left:hover, .gallery-wrapper .gallery-right:hover, .gallery-scroller li, .gallery-scroller li > span i:hover, .gallery-scroller li > span .fa:hover, .sidebar h2::after, .tags li a:hover, .blog-title::before, .blog-title::after, .post-content h2::after, .comments .comment::before, .comments .comment h4::after, .bg-color .btn .line_above::after, .bg-color-overlay .btn .line_above::after, #footer.bg-color, #footer.bg-color-overlay, div.lilac .pp_details, a.pp_next:hover, a.pp_previous:hover, .blog-listing .item .info-blog h3::after {background-color:" + o + ";}.btn-default:hover, .btn-default:active, .btn-default.active, .open > .dropdown-toggle.btn-default, .btn.ribbon, .owl-controls .owl-buttons, .owl-controls .owl-page span, .timeline .year .ribbon, .timeline .event_left:hover::after, .timeline .event_right:hover::after, .timeline .event_left:hover .event_panel, .timeline .event_right:hover .event_panel, .marker, .wedding-gifts li, .gallery-scroller li > span i, .gallery-scroller li > span .fa, .blog-listing .ribbon, .blog-main-image .ribbon, .form-control:focus, .sn-icons a {border-color:" + o + ";}.navbar-nav .dropdown-submenu:hover > a:after {border-left-color:" + o + ";}.balloon-left::after, .balloon-right::after, .marker::before, .marker:hover::after {border-top-color:" + o + ";}.btn-default, .btn-default:focus, .btn-default.focus, .btn.ribbon {color:" + t.convertHex(o, 65) + ";}.add_list .input-group-addon {color:" + t.convertHex(o, 50) + ";}.form-control {border-color:" + t.convertHex(o, 70) + ";}.btn-default, .btn-default:focus, .btn-default.focus {border-color:" + t.convertHex(o, 65) + ";}.timeline .event_left::after, .timeline .event_right::after, .timeline .event_left .event_panel, .timeline .event_right .event_panel, .timeline_footer::before, .comments > ul > li .comment_image, .comments > ul > li .comment_image::after, .comments .comment, .form-wrap, .form-wrap::before, .form-wrap .line_above::after, .add_list .form-control, .btn .line_above::after {border-color:" + t.convertHex(o, 50) + ";}.story-elem h3, .timeline .event_left .event_panel h3, .timeline .event_right .event_panel h3, .sidebar h2, .post-content h2, .comments .comment h4, .form-wrap section.highlighted, .add_list .input-group:last-child .form-control, .add_list .input-group:last-child .input-group-addon, .blog-listing .item .info-blog h3 {border-bottom-color:" + t.convertHex(o, 50) + ";}.add_list .input-group-addon::after {border-left-color:" + t.convertHex(o, 50) + ";}.form-wrap section.highlighted, #footer {border-top-color:" + t.convertHex(o, 50) + ";}.wedding-gifts li:hover::before {background-color:" + t.convertHex(o, 90) + ";}.timeline-gallery .item a, .blog-listing .item .image a {background-color:" + t.convertHex(o, 80) + ";}.owl-controls .owl-page.active span, .owl-controls.clickable .owl-page:hover span, .bg-color .owl-controls .owl-page.active span, .bg-color-overlay .owl-controls .owl-page.active span, .bg-color .owl-controls.clickable .owl-page:hover span, .bg-color-overlay .owl-controls.clickable .owl-page:hover span, .story-elem .image .hover-info, .gallery-scroller li > span {background-color:" + t.convertHex(o, 70) + ";}.timeline .event_left .event_panel::before, .timeline .event_right .event_panel::before, .timeline_footer::after, .comments > ul > li .comment_image::before, .form-wrap .line_above, .form-wrap .line_above::before, .btn .line_above, .btn .line_above::before {background-color:" + t.convertHex(o, 50) + ";}.bg-color .owl-controls .owl-page span, .bg-color-overlay .owl-controls .owl-page span, #footer::before {background-color:" + t.convertHex(o, 20) + ";}.form-wrap section.highlighted, .add_list .form-control, .add_list .input-group-addon {background-color:" + t.convertHex(o, 10) + ";}.bridesmaids-groomsmen-slider .item .image .info {-webkit-box-shadow: inset 0px 0px 0px 2px " + t.convertHex(o, 20) + ";}.bridesmaids-groomsmen-slider .item .image .info {-moz-box-shadow: inset 0px 0px 0px 2px " + t.convertHex(o, 20) + ";}.bridesmaids-groomsmen-slider .item .image .info {box-shadow: inset 0px 0px 0px 2px " + t.convertHex(o, 20) + ";}#home::before, .bg-color-overlay::before {background-color:" + t.colorLuminance(o, -.23) + ";}")
      },
      convertHex: function (e, o) {
        e = e.replace("#", "");
        var t = parseInt(e.substring(0, 2), 16),
          r = parseInt(e.substring(2, 4), 16),
          n = parseInt(e.substring(4, 6), 16),
          l = "rgba(" + t + "," + r + "," + n + "," + o / 100 + ")";
        return l
      },
      colorLuminance: function (e, o) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), o = o || 0;
        var t, r, n = "#";
        for (r = 0; 3 > r; r++) t = parseInt(e.substr(2 * r, 2), 16), t = Math.round(Math.min(Math.max(0, t + t * o), 255)).toString(16), n += ("00" + t).substr(t.length);
        return n
      }
    };
    o.init()
  })
}(jQuery);