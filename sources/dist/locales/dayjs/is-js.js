(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[1194],{

/***/ 9099:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (u, r) {
   true ? module.exports = r(__webpack_require__(8570)) : 0;
}(this, function (u) {
  "use strict";

  function r(u) {
    return u && "object" == typeof u && "default" in u ? u : {
      default: u
    };
  }

  var n = r(u),
      e = {
    s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"],
    m: ["mínúta", "mínútu", "mínútu"],
    mm: ["mínútur", "mínútur", "mínútum"],
    h: ["klukkustund", "klukkustund", "klukkustund"],
    hh: ["klukkustundir", "klukkustundir", "klukkustundum"],
    d: ["dagur", "dag", "degi"],
    dd: ["dagar", "daga", "dögum"],
    M: ["mánuður", "mánuð", "mánuði"],
    MM: ["mánuðir", "mánuði", "mánuðum"],
    y: ["ár", "ár", "ári"],
    yy: ["ár", "ár", "árum"]
  };

  function t(u, r, n, t) {
    var a = function (u, r, n, t) {
      var a = t ? 0 : n ? 1 : 2,
          d = 2 === u.length && r % 10 == 1 ? u[0] : u,
          m = e[d][a];
      return 1 === u.length ? m : "%d " + m;
    }(n, u, t, r);

    return a.replace("%d", u);
  }

  var a = {
    name: "is",
    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
    weekStart: 1,
    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
    ordinal: function (u) {
      return u;
    },
    formats: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] H:mm",
      LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
    },
    relativeTime: {
      future: "eftir %s",
      past: "fyrir %s síðan",
      s: t,
      m: t,
      mm: t,
      h: t,
      hh: t,
      d: t,
      dd: t,
      M: t,
      MM: t,
      y: t,
      yy: t
    }
  };
  return n.default.locale(a, null, !0), a;
});

/***/ })

}]);
//# sourceMappingURL=is-js.js.map