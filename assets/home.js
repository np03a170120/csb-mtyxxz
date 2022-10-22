!(function (e) {
  function t(t) {
    for (
      var o, a, c = t[0], l = t[1], d = t[2], u = 0, g = [];
      u < c.length;
      u++
    )
      (a = c[u]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && g.push(r[a][0]),
        (r[a] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (s && s(t); g.length; ) g.shift()();
    return i.push.apply(i, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, c = 1; c < n.length; c++) {
        var l = n[c];
        0 !== r[l] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 0: 0 },
    i = [];
  function a(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = o),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var s = l;
  i.push([10, 1]), n();
})({
  10: function (e, t, n) {
    "use strict";
    n.r(t);
    n(5);
    var o = n(3),
      r = n.n(o),
      i = n(0),
      a = n.n(i),
      c = n(1),
      l = n(4),
      d = n(2);
    c.a.registerPlugin(l.a, d.a),
      new r.a("#fullpage", {
        anchors: [
          "section-home",
          "section-about",
          "section-election",
          "section-challenge",
          "section-contact"
        ],
        responsiveWidth: 800,
        autoScrolling: !0,
        scrollHorizontally: !0,
        navigation: !1,
        normalScrollElements:
          ".section-about__description--hidden, .outer-tab-content,.modal",
        menu: "#navigationMenuWeb"
      }),
      a()("#challenge_national").click(function () {
        a()("#content_national").slideToggle();
      }),
      a()("#challenge_international").click(function () {
        a()("#content_international").slideToggle();
      }),
      window.screen.width < 1200 && fullpage_api.destroy("all");
    var s = "-360px",
      u = "100%",
      g = "25%",
      p = "75%";
    console.log(s),
      window.screen.width <= 485
        ? ((s = "-408px"), "0%", (u = "0"), (p = "100%"), (g = "100%"))
        : window.screen.width <= 768
        ? ((s = "-370px"), "0%", (p = "100%"), (g = "100%"))
        : window.screen.width < 1200
        ? ((p = "100%"), (g = "100%"))
        : window.screen.width <= 1200 && ("0%", (s = "-430px"));
    var f = document.getElementById("trigger-eng-btn"),
      v = document.getElementById("trigger-np-btn"),
      y = c.a.timeline();
    y.to(".section-about__img", { css: { maxWidth: g, flex: "0 0 " + g } }),
      y.to(
        ".section-left",
        {
          ease: d.a.create("custom", "M0,0 C0.3,0 0.2,1 1,1"),
          css: { maxWidth: p, flex: "0 0 " + p }
        },
        "-=0.5"
      ),
      y.fromTo(
        ".section-about__description--hidden",
        { opacity: 0, y: u, display: "none" },
        { opacity: 1, y: "0", display: "block" },
        "-=0.35"
      );
    var b = document.getElementById("trigger-eng-btn");
    void 0 !== b &&
      null != b &&
      (y.reverse(),
      (f.onclick = function () {
        y.reversed(!y.reversed());
      }),
      y.reverse(),
      (f.onclick = function () {
        y.reversed(!y.reversed());
      }),
      b.addEventListener("click", function () {
        b.textContent.toLowerCase().includes("Read More".toLowerCase())
          ? (b.textContent = "Read Less")
          : (b.textContent = "Read More");
      }));
    var m = document.getElementById("trigger-np-btn");
    void 0 !== m &&
      null != m &&
      (y.reverse(),
      (v.onclick = function () {
        y.reversed(!y.reversed());
      }),
      y.reverse(),
      (v.onclick = function () {
        y.reversed(!y.reversed());
      }),
      m.addEventListener("click", function () {
        m.textContent.toLowerCase().includes("थप पढ्नुहोस्".toLowerCase())
          ? (m.textContent = "कम पढ्नुहोस्")
          : (m.textContent = "थप पढ्नुहोस्");
      }));
    var w = document.getElementById("trigger-agenda"),
      h = document.getElementById("trigger-agenda-0"),
      x = document.getElementById("trigger-agenda-1"),
      k = document.getElementById("reverse-agenda"),
      _ = c.a.timeline();
    _.to(".agenda-wrapper", {
      css: { transform: "translateX(calc(-1 * (9 / 12 * 100%) + 1.25rem))" },
      duration: "0.6"
    }),
      _.to(
        ".agenda-wrapper-left",
        { x: "calc(5 / 12 * 100%)", duration: "0.6", opacity: "0" },
        "-=0.6"
      ),
      _.to(
        ".section-election--agenda-container",
        { paddingLeft: "0", duration: "0.6" },
        "-=0.6"
      ),
      _.to(
        ".section-election--agenda-cat",
        { visibility: "visible", duration: "0.6", opacity: "1" },
        "-=0.6"
      ),
      _.to("#reverse-agenda", { opacity: "1", display: "block" }, "-=0.6"),
      _.to(
        ".abstract-box",
        { x: "calc(5 / 12 * 100%)", duration: "0.6", opacity: "0" },
        "-=0.6"
      ),
      _.pause(),
      w.addEventListener("click", function () {
        _.play();
      }),
      h.addEventListener("click", function () {
        _.play();
      }),
      x.addEventListener("click", function () {
        _.play();
      }),
      (k.onclick = function () {
        _.pause() && _.reverse();
      }),
      a()(".navbar-toggler").click(function () {
        a()("body").toggleClass("overflow-hidden");
      }),
      a()(".navbar-menu").click(function () {
        a()("body").toggleClass("overflow-hidden"),
          a()(".navbar-nav").toggleClass("show");
      });
  }
});
