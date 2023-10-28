import { aB as re, g as bl } from "./index-2cbdc6fc.mjs";
function wl(r, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in r)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(r, a, i.get ? i : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var Sl = typeof re == "object" && re && re.Object === Object && re, us = Sl, Tl = us, _l = typeof self == "object" && self && self.Object === Object && self, Ol = Tl || _l || Function("return this")(), gr = Ol, El = gr, Al = El.Symbol, Me = Al;
function Il(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = Array(n); ++t < n; )
    a[t] = e(r[t], t, r);
  return a;
}
var qn = Il, xl = Array.isArray, $r = xl, ci = Me, fs = Object.prototype, Cl = fs.hasOwnProperty, Ml = fs.toString, pe = ci ? ci.toStringTag : void 0;
function Fl(r) {
  var e = Cl.call(r, pe), t = r[pe];
  try {
    r[pe] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ml.call(r);
  return n && (e ? r[pe] = t : delete r[pe]), a;
}
var Nl = Fl, kl = Object.prototype, Dl = kl.toString;
function Pl(r) {
  return Dl.call(r);
}
var Ll = Pl, vi = Me, Ul = Nl, jl = Ll, Rl = "[object Null]", Bl = "[object Undefined]", di = vi ? vi.toStringTag : void 0;
function Vl(r) {
  return r == null ? r === void 0 ? Bl : Rl : di && di in Object(r) ? Ul(r) : jl(r);
}
var xr = Vl;
function zl(r) {
  return r != null && typeof r == "object";
}
var br = zl, Gl = xr, Hl = br, Zl = "[object Symbol]";
function ql(r) {
  return typeof r == "symbol" || Hl(r) && Gl(r) == Zl;
}
var Wn = ql, hi = Me, Wl = qn, Yl = $r, Jl = Wn, Xl = 1 / 0, mi = hi ? hi.prototype : void 0, yi = mi ? mi.toString : void 0;
function ls(r) {
  if (typeof r == "string")
    return r;
  if (Yl(r))
    return Wl(r, ls) + "";
  if (Jl(r))
    return yi ? yi.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -Xl ? "-0" : e;
}
var Kl = ls, Ql = Kl;
function rc(r) {
  return r == null ? "" : Ql(r);
}
var Br = rc;
function ec(r, e, t) {
  var n = -1, a = r.length;
  e < 0 && (e = -e > a ? 0 : a + e), t = t > a ? a : t, t < 0 && (t += a), a = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = r[n + e];
  return i;
}
var cs = ec, tc = cs;
function nc(r, e, t) {
  var n = r.length;
  return t = t === void 0 ? n : t, !e && t >= n ? r : tc(r, e, t);
}
var ac = nc, ic = "\\ud800-\\udfff", oc = "\\u0300-\\u036f", sc = "\\ufe20-\\ufe2f", uc = "\\u20d0-\\u20ff", fc = oc + sc + uc, lc = "\\ufe0e\\ufe0f", cc = "\\u200d", vc = RegExp("[" + cc + ic + fc + lc + "]");
function dc(r) {
  return vc.test(r);
}
var vs = dc;
function hc(r) {
  return r.split("");
}
var mc = hc, ds = "\\ud800-\\udfff", yc = "\\u0300-\\u036f", pc = "\\ufe20-\\ufe2f", gc = "\\u20d0-\\u20ff", $c = yc + pc + gc, bc = "\\ufe0e\\ufe0f", wc = "[" + ds + "]", dn = "[" + $c + "]", hn = "\\ud83c[\\udffb-\\udfff]", Sc = "(?:" + dn + "|" + hn + ")", hs = "[^" + ds + "]", ms = "(?:\\ud83c[\\udde6-\\uddff]){2}", ys = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tc = "\\u200d", ps = Sc + "?", gs = "[" + bc + "]?", _c = "(?:" + Tc + "(?:" + [hs, ms, ys].join("|") + ")" + gs + ps + ")*", Oc = gs + ps + _c, Ec = "(?:" + [hs + dn + "?", dn, ms, ys, wc].join("|") + ")", Ac = RegExp(hn + "(?=" + hn + ")|" + Ec + Oc, "g");
function Ic(r) {
  return r.match(Ac) || [];
}
var xc = Ic, Cc = mc, Mc = vs, Fc = xc;
function Nc(r) {
  return Mc(r) ? Fc(r) : Cc(r);
}
var kc = Nc, Dc = ac, Pc = vs, Lc = kc, Uc = Br;
function jc(r) {
  return function(e) {
    e = Uc(e);
    var t = Pc(e) ? Lc(e) : void 0, n = t ? t[0] : e.charAt(0), a = t ? Dc(t, 1).join("") : e.slice(1);
    return n[r]() + a;
  };
}
var Rc = jc, Bc = Rc, Vc = Bc("toUpperCase"), zc = Vc, Gc = Br, Hc = zc;
function Zc(r) {
  return Hc(Gc(r).toLowerCase());
}
var qc = Zc;
function Wc(r, e, t, n) {
  var a = -1, i = r == null ? 0 : r.length;
  for (n && i && (t = r[++a]); ++a < i; )
    t = e(t, r[a], a, r);
  return t;
}
var Yc = Wc;
function Jc(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var $s = Jc, Xc = $s, Kc = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Qc = Xc(Kc), rv = Qc, ev = rv, tv = Br, nv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, av = "\\u0300-\\u036f", iv = "\\ufe20-\\ufe2f", ov = "\\u20d0-\\u20ff", sv = av + iv + ov, uv = "[" + sv + "]", fv = RegExp(uv, "g");
function lv(r) {
  return r = tv(r), r && r.replace(nv, ev).replace(fv, "");
}
var cv = lv, vv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function dv(r) {
  return r.match(vv) || [];
}
var hv = dv, mv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function yv(r) {
  return mv.test(r);
}
var pv = yv, bs = "\\ud800-\\udfff", gv = "\\u0300-\\u036f", $v = "\\ufe20-\\ufe2f", bv = "\\u20d0-\\u20ff", wv = gv + $v + bv, ws = "\\u2700-\\u27bf", Ss = "a-z\\xdf-\\xf6\\xf8-\\xff", Sv = "\\xac\\xb1\\xd7\\xf7", Tv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", _v = "\\u2000-\\u206f", Ov = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ts = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ev = "\\ufe0e\\ufe0f", _s = Sv + Tv + _v + Ov, Os = "['’]", pi = "[" + _s + "]", Av = "[" + wv + "]", Es = "\\d+", Iv = "[" + ws + "]", As = "[" + Ss + "]", Is = "[^" + bs + _s + Es + ws + Ss + Ts + "]", xv = "\\ud83c[\\udffb-\\udfff]", Cv = "(?:" + Av + "|" + xv + ")", Mv = "[^" + bs + "]", xs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xr = "[" + Ts + "]", Fv = "\\u200d", gi = "(?:" + As + "|" + Is + ")", Nv = "(?:" + Xr + "|" + Is + ")", $i = "(?:" + Os + "(?:d|ll|m|re|s|t|ve))?", bi = "(?:" + Os + "(?:D|LL|M|RE|S|T|VE))?", Ms = Cv + "?", Fs = "[" + Ev + "]?", kv = "(?:" + Fv + "(?:" + [Mv, xs, Cs].join("|") + ")" + Fs + Ms + ")*", Dv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Pv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Lv = Fs + Ms + kv, Uv = "(?:" + [Iv, xs, Cs].join("|") + ")" + Lv, jv = RegExp([
  Xr + "?" + As + "+" + $i + "(?=" + [pi, Xr, "$"].join("|") + ")",
  Nv + "+" + bi + "(?=" + [pi, Xr + gi, "$"].join("|") + ")",
  Xr + "?" + gi + "+" + $i,
  Xr + "+" + bi,
  Pv,
  Dv,
  Es,
  Uv
].join("|"), "g");
function Rv(r) {
  return r.match(jv) || [];
}
var Bv = Rv, Vv = hv, zv = pv, Gv = Br, Hv = Bv;
function Zv(r, e, t) {
  return r = Gv(r), e = t ? void 0 : e, e === void 0 ? zv(r) ? Hv(r) : Vv(r) : r.match(e) || [];
}
var qv = Zv, Wv = Yc, Yv = cv, Jv = qv, Xv = "['’]", Kv = RegExp(Xv, "g");
function Qv(r) {
  return function(e) {
    return Wv(Jv(Yv(e).replace(Kv, "")), r, "");
  };
}
var Ns = Qv, rd = qc, ed = Ns, td = ed(function(r, e, t) {
  return e = e.toLowerCase(), r + (t ? rd(e) : e);
}), nd = td, ad = Object.prototype, id = ad.hasOwnProperty;
function od(r, e) {
  return r != null && id.call(r, e);
}
var sd = od, ud = $r, fd = Wn, ld = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cd = /^\w*$/;
function vd(r, e) {
  if (ud(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || fd(r) ? !0 : cd.test(r) || !ld.test(r) || e != null && r in Object(e);
}
var dd = vd;
function hd(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Cr = hd, md = xr, yd = Cr, pd = "[object AsyncFunction]", gd = "[object Function]", $d = "[object GeneratorFunction]", bd = "[object Proxy]";
function wd(r) {
  if (!yd(r))
    return !1;
  var e = md(r);
  return e == gd || e == $d || e == pd || e == bd;
}
var Yn = wd, Sd = gr, Td = Sd["__core-js_shared__"], _d = Td, Zt = _d, wi = function() {
  var r = /[^.]+$/.exec(Zt && Zt.keys && Zt.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Od(r) {
  return !!wi && wi in r;
}
var Ed = Od, Ad = Function.prototype, Id = Ad.toString;
function xd(r) {
  if (r != null) {
    try {
      return Id.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var ks = xd, Cd = Yn, Md = Ed, Fd = Cr, Nd = ks, kd = /[\\^$.*+?()[\]{}|]/g, Dd = /^\[object .+?Constructor\]$/, Pd = Function.prototype, Ld = Object.prototype, Ud = Pd.toString, jd = Ld.hasOwnProperty, Rd = RegExp(
  "^" + Ud.call(jd).replace(kd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bd(r) {
  if (!Fd(r) || Md(r))
    return !1;
  var e = Cd(r) ? Rd : Dd;
  return e.test(Nd(r));
}
var Vd = Bd;
function zd(r, e) {
  return r == null ? void 0 : r[e];
}
var Gd = zd, Hd = Vd, Zd = Gd;
function qd(r, e) {
  var t = Zd(r, e);
  return Hd(t) ? t : void 0;
}
var Vr = qd, Wd = Vr, Yd = Wd(Object, "create"), vt = Yd, Si = vt;
function Jd() {
  this.__data__ = Si ? Si(null) : {}, this.size = 0;
}
var Xd = Jd;
function Kd(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Qd = Kd, rh = vt, eh = "__lodash_hash_undefined__", th = Object.prototype, nh = th.hasOwnProperty;
function ah(r) {
  var e = this.__data__;
  if (rh) {
    var t = e[r];
    return t === eh ? void 0 : t;
  }
  return nh.call(e, r) ? e[r] : void 0;
}
var ih = ah, oh = vt, sh = Object.prototype, uh = sh.hasOwnProperty;
function fh(r) {
  var e = this.__data__;
  return oh ? e[r] !== void 0 : uh.call(e, r);
}
var lh = fh, ch = vt, vh = "__lodash_hash_undefined__";
function dh(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = ch && e === void 0 ? vh : e, this;
}
var hh = dh, mh = Xd, yh = Qd, ph = ih, gh = lh, $h = hh;
function ae(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
ae.prototype.clear = mh;
ae.prototype.delete = yh;
ae.prototype.get = ph;
ae.prototype.has = gh;
ae.prototype.set = $h;
var bh = ae;
function wh() {
  this.__data__ = [], this.size = 0;
}
var Sh = wh;
function Th(r, e) {
  return r === e || r !== r && e !== e;
}
var Fe = Th, _h = Fe;
function Oh(r, e) {
  for (var t = r.length; t--; )
    if (_h(r[t][0], e))
      return t;
  return -1;
}
var dt = Oh, Eh = dt, Ah = Array.prototype, Ih = Ah.splice;
function xh(r) {
  var e = this.__data__, t = Eh(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Ih.call(e, t, 1), --this.size, !0;
}
var Ch = xh, Mh = dt;
function Fh(r) {
  var e = this.__data__, t = Mh(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var Nh = Fh, kh = dt;
function Dh(r) {
  return kh(this.__data__, r) > -1;
}
var Ph = Dh, Lh = dt;
function Uh(r, e) {
  var t = this.__data__, n = Lh(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var jh = Uh, Rh = Sh, Bh = Ch, Vh = Nh, zh = Ph, Gh = jh;
function ie(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
ie.prototype.clear = Rh;
ie.prototype.delete = Bh;
ie.prototype.get = Vh;
ie.prototype.has = zh;
ie.prototype.set = Gh;
var ht = ie, Hh = Vr, Zh = gr, qh = Hh(Zh, "Map"), Jn = qh, Ti = bh, Wh = ht, Yh = Jn;
function Jh() {
  this.size = 0, this.__data__ = {
    hash: new Ti(),
    map: new (Yh || Wh)(),
    string: new Ti()
  };
}
var Xh = Jh;
function Kh(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Qh = Kh, rm = Qh;
function em(r, e) {
  var t = r.__data__;
  return rm(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var mt = em, tm = mt;
function nm(r) {
  var e = tm(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var am = nm, im = mt;
function om(r) {
  return im(this, r).get(r);
}
var sm = om, um = mt;
function fm(r) {
  return um(this, r).has(r);
}
var lm = fm, cm = mt;
function vm(r, e) {
  var t = cm(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var dm = vm, hm = Xh, mm = am, ym = sm, pm = lm, gm = dm;
function oe(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
oe.prototype.clear = hm;
oe.prototype.delete = mm;
oe.prototype.get = ym;
oe.prototype.has = pm;
oe.prototype.set = gm;
var Ds = oe, Ps = Ds, $m = "Expected a function";
function Xn(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError($m);
  var t = function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = r.apply(this, n);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (Xn.Cache || Ps)(), t;
}
Xn.Cache = Ps;
var bm = Xn, wm = bm, Sm = 500;
function Tm(r) {
  var e = wm(r, function(n) {
    return t.size === Sm && t.clear(), n;
  }), t = e.cache;
  return e;
}
var _m = Tm, Om = _m, Em = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Am = /\\(\\)?/g, Im = Om(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(Em, function(t, n, a, i) {
    e.push(a ? i.replace(Am, "$1") : n || t);
  }), e;
}), xm = Im, Cm = $r, Mm = dd, Fm = xm, Nm = Br;
function km(r, e) {
  return Cm(r) ? r : Mm(r, e) ? [r] : Fm(Nm(r));
}
var yt = km, Dm = xr, Pm = br, Lm = "[object Arguments]";
function Um(r) {
  return Pm(r) && Dm(r) == Lm;
}
var jm = Um, _i = jm, Rm = br, Ls = Object.prototype, Bm = Ls.hasOwnProperty, Vm = Ls.propertyIsEnumerable, zm = _i(function() {
  return arguments;
}()) ? _i : function(r) {
  return Rm(r) && Bm.call(r, "callee") && !Vm.call(r, "callee");
}, pt = zm, Gm = 9007199254740991, Hm = /^(?:0|[1-9]\d*)$/;
function Zm(r, e) {
  var t = typeof r;
  return e = e ?? Gm, !!e && (t == "number" || t != "symbol" && Hm.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var Kn = Zm, qm = 9007199254740991;
function Wm(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= qm;
}
var Qn = Wm, Ym = Wn, Jm = 1 / 0;
function Xm(r) {
  if (typeof r == "string" || Ym(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -Jm ? "-0" : e;
}
var ra = Xm, Km = yt, Qm = pt, ry = $r, ey = Kn, ty = Qn, ny = ra;
function ay(r, e, t) {
  e = Km(e, r);
  for (var n = -1, a = e.length, i = !1; ++n < a; ) {
    var s = ny(e[n]);
    if (!(i = r != null && t(r, s)))
      break;
    r = r[s];
  }
  return i || ++n != a ? i : (a = r == null ? 0 : r.length, !!a && ty(a) && ey(s, a) && (ry(r) || Qm(r)));
}
var iy = ay, oy = sd, sy = iy;
function uy(r, e) {
  return r != null && sy(r, e, oy);
}
var fy = uy, ea = { exports: {} }, Us = {}, gt = {}, $t = {};
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.default = cy;
let ze;
const ly = new Uint8Array(16);
function cy() {
  if (!ze && (ze = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ze))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ze(ly);
}
var Mr = {}, zr = {}, bt = {};
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.default = void 0;
var vy = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
bt.default = vy;
Object.defineProperty(zr, "__esModule", {
  value: !0
});
zr.default = void 0;
var dy = hy(bt);
function hy(r) {
  return r && r.__esModule ? r : { default: r };
}
function my(r) {
  return typeof r == "string" && dy.default.test(r);
}
var yy = my;
zr.default = yy;
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
Mr.default = void 0;
Mr.unsafeStringify = js;
var py = gy(zr);
function gy(r) {
  return r && r.__esModule ? r : { default: r };
}
const V = [];
for (let r = 0; r < 256; ++r)
  V.push((r + 256).toString(16).slice(1));
function js(r, e = 0) {
  return V[r[e + 0]] + V[r[e + 1]] + V[r[e + 2]] + V[r[e + 3]] + "-" + V[r[e + 4]] + V[r[e + 5]] + "-" + V[r[e + 6]] + V[r[e + 7]] + "-" + V[r[e + 8]] + V[r[e + 9]] + "-" + V[r[e + 10]] + V[r[e + 11]] + V[r[e + 12]] + V[r[e + 13]] + V[r[e + 14]] + V[r[e + 15]];
}
function $y(r, e = 0) {
  const t = js(r, e);
  if (!(0, py.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var by = $y;
Mr.default = by;
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.default = void 0;
var wy = Ty($t), Sy = Mr;
function Ty(r) {
  return r && r.__esModule ? r : { default: r };
}
let Oi, qt, Wt = 0, Yt = 0;
function _y(r, e, t) {
  let n = e && t || 0;
  const a = e || new Array(16);
  r = r || {};
  let i = r.node || Oi, s = r.clockseq !== void 0 ? r.clockseq : qt;
  if (i == null || s == null) {
    const p = r.random || (r.rng || wy.default)();
    i == null && (i = Oi = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]), s == null && (s = qt = (p[6] << 8 | p[7]) & 16383);
  }
  let o = r.msecs !== void 0 ? r.msecs : Date.now(), l = r.nsecs !== void 0 ? r.nsecs : Yt + 1;
  const d = o - Wt + (l - Yt) / 1e4;
  if (d < 0 && r.clockseq === void 0 && (s = s + 1 & 16383), (d < 0 || o > Wt) && r.nsecs === void 0 && (l = 0), l >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Wt = o, Yt = l, qt = s, o += 122192928e5;
  const m = ((o & 268435455) * 1e4 + l) % 4294967296;
  a[n++] = m >>> 24 & 255, a[n++] = m >>> 16 & 255, a[n++] = m >>> 8 & 255, a[n++] = m & 255;
  const h = o / 4294967296 * 1e4 & 268435455;
  a[n++] = h >>> 8 & 255, a[n++] = h & 255, a[n++] = h >>> 24 & 15 | 16, a[n++] = h >>> 16 & 255, a[n++] = s >>> 8 | 128, a[n++] = s & 255;
  for (let p = 0; p < 6; ++p)
    a[n + p] = i[p];
  return e || (0, Sy.unsafeStringify)(a);
}
var Oy = _y;
gt.default = Oy;
var wt = {}, Ir = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.default = void 0;
var Ey = Ay(zr);
function Ay(r) {
  return r && r.__esModule ? r : { default: r };
}
function Iy(r) {
  if (!(0, Ey.default)(r))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var xy = Iy;
Ne.default = xy;
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.URL = Ir.DNS = void 0;
Ir.default = ky;
var Cy = Mr, My = Fy(Ne);
function Fy(r) {
  return r && r.__esModule ? r : { default: r };
}
function Ny(r) {
  r = unescape(encodeURIComponent(r));
  const e = [];
  for (let t = 0; t < r.length; ++t)
    e.push(r.charCodeAt(t));
  return e;
}
const Rs = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Ir.DNS = Rs;
const Bs = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Ir.URL = Bs;
function ky(r, e, t) {
  function n(a, i, s, o) {
    var l;
    if (typeof a == "string" && (a = Ny(a)), typeof i == "string" && (i = (0, My.default)(i)), ((l = i) === null || l === void 0 ? void 0 : l.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let d = new Uint8Array(16 + a.length);
    if (d.set(i), d.set(a, i.length), d = t(d), d[6] = d[6] & 15 | e, d[8] = d[8] & 63 | 128, s) {
      o = o || 0;
      for (let m = 0; m < 16; ++m)
        s[o + m] = d[m];
      return s;
    }
    return (0, Cy.unsafeStringify)(d);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = Rs, n.URL = Bs, n;
}
var St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.default = void 0;
function Dy(r) {
  if (typeof r == "string") {
    const e = unescape(encodeURIComponent(r));
    r = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      r[t] = e.charCodeAt(t);
  }
  return Py(Ly(Uy(r), r.length * 8));
}
function Py(r) {
  const e = [], t = r.length * 32, n = "0123456789abcdef";
  for (let a = 0; a < t; a += 8) {
    const i = r[a >> 5] >>> a % 32 & 255, s = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    e.push(s);
  }
  return e;
}
function Vs(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function Ly(r, e) {
  r[e >> 5] |= 128 << e % 32, r[Vs(e) - 1] = e;
  let t = 1732584193, n = -271733879, a = -1732584194, i = 271733878;
  for (let s = 0; s < r.length; s += 16) {
    const o = t, l = n, d = a, m = i;
    t = Z(t, n, a, i, r[s], 7, -680876936), i = Z(i, t, n, a, r[s + 1], 12, -389564586), a = Z(a, i, t, n, r[s + 2], 17, 606105819), n = Z(n, a, i, t, r[s + 3], 22, -1044525330), t = Z(t, n, a, i, r[s + 4], 7, -176418897), i = Z(i, t, n, a, r[s + 5], 12, 1200080426), a = Z(a, i, t, n, r[s + 6], 17, -1473231341), n = Z(n, a, i, t, r[s + 7], 22, -45705983), t = Z(t, n, a, i, r[s + 8], 7, 1770035416), i = Z(i, t, n, a, r[s + 9], 12, -1958414417), a = Z(a, i, t, n, r[s + 10], 17, -42063), n = Z(n, a, i, t, r[s + 11], 22, -1990404162), t = Z(t, n, a, i, r[s + 12], 7, 1804603682), i = Z(i, t, n, a, r[s + 13], 12, -40341101), a = Z(a, i, t, n, r[s + 14], 17, -1502002290), n = Z(n, a, i, t, r[s + 15], 22, 1236535329), t = q(t, n, a, i, r[s + 1], 5, -165796510), i = q(i, t, n, a, r[s + 6], 9, -1069501632), a = q(a, i, t, n, r[s + 11], 14, 643717713), n = q(n, a, i, t, r[s], 20, -373897302), t = q(t, n, a, i, r[s + 5], 5, -701558691), i = q(i, t, n, a, r[s + 10], 9, 38016083), a = q(a, i, t, n, r[s + 15], 14, -660478335), n = q(n, a, i, t, r[s + 4], 20, -405537848), t = q(t, n, a, i, r[s + 9], 5, 568446438), i = q(i, t, n, a, r[s + 14], 9, -1019803690), a = q(a, i, t, n, r[s + 3], 14, -187363961), n = q(n, a, i, t, r[s + 8], 20, 1163531501), t = q(t, n, a, i, r[s + 13], 5, -1444681467), i = q(i, t, n, a, r[s + 2], 9, -51403784), a = q(a, i, t, n, r[s + 7], 14, 1735328473), n = q(n, a, i, t, r[s + 12], 20, -1926607734), t = W(t, n, a, i, r[s + 5], 4, -378558), i = W(i, t, n, a, r[s + 8], 11, -2022574463), a = W(a, i, t, n, r[s + 11], 16, 1839030562), n = W(n, a, i, t, r[s + 14], 23, -35309556), t = W(t, n, a, i, r[s + 1], 4, -1530992060), i = W(i, t, n, a, r[s + 4], 11, 1272893353), a = W(a, i, t, n, r[s + 7], 16, -155497632), n = W(n, a, i, t, r[s + 10], 23, -1094730640), t = W(t, n, a, i, r[s + 13], 4, 681279174), i = W(i, t, n, a, r[s], 11, -358537222), a = W(a, i, t, n, r[s + 3], 16, -722521979), n = W(n, a, i, t, r[s + 6], 23, 76029189), t = W(t, n, a, i, r[s + 9], 4, -640364487), i = W(i, t, n, a, r[s + 12], 11, -421815835), a = W(a, i, t, n, r[s + 15], 16, 530742520), n = W(n, a, i, t, r[s + 2], 23, -995338651), t = Y(t, n, a, i, r[s], 6, -198630844), i = Y(i, t, n, a, r[s + 7], 10, 1126891415), a = Y(a, i, t, n, r[s + 14], 15, -1416354905), n = Y(n, a, i, t, r[s + 5], 21, -57434055), t = Y(t, n, a, i, r[s + 12], 6, 1700485571), i = Y(i, t, n, a, r[s + 3], 10, -1894986606), a = Y(a, i, t, n, r[s + 10], 15, -1051523), n = Y(n, a, i, t, r[s + 1], 21, -2054922799), t = Y(t, n, a, i, r[s + 8], 6, 1873313359), i = Y(i, t, n, a, r[s + 15], 10, -30611744), a = Y(a, i, t, n, r[s + 6], 15, -1560198380), n = Y(n, a, i, t, r[s + 13], 21, 1309151649), t = Y(t, n, a, i, r[s + 4], 6, -145523070), i = Y(i, t, n, a, r[s + 11], 10, -1120210379), a = Y(a, i, t, n, r[s + 2], 15, 718787259), n = Y(n, a, i, t, r[s + 9], 21, -343485551), t = Er(t, o), n = Er(n, l), a = Er(a, d), i = Er(i, m);
  }
  return [t, n, a, i];
}
function Uy(r) {
  if (r.length === 0)
    return [];
  const e = r.length * 8, t = new Uint32Array(Vs(e));
  for (let n = 0; n < e; n += 8)
    t[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return t;
}
function Er(r, e) {
  const t = (r & 65535) + (e & 65535);
  return (r >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function jy(r, e) {
  return r << e | r >>> 32 - e;
}
function Tt(r, e, t, n, a, i) {
  return Er(jy(Er(Er(e, r), Er(n, i)), a), t);
}
function Z(r, e, t, n, a, i, s) {
  return Tt(e & t | ~e & n, r, e, a, i, s);
}
function q(r, e, t, n, a, i, s) {
  return Tt(e & n | t & ~n, r, e, a, i, s);
}
function W(r, e, t, n, a, i, s) {
  return Tt(e ^ t ^ n, r, e, a, i, s);
}
function Y(r, e, t, n, a, i, s) {
  return Tt(t ^ (e | ~n), r, e, a, i, s);
}
var Ry = Dy;
St.default = Ry;
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.default = void 0;
var By = zs(Ir), Vy = zs(St);
function zs(r) {
  return r && r.__esModule ? r : { default: r };
}
const zy = (0, By.default)("v3", 48, Vy.default);
var Gy = zy;
wt.default = Gy;
var _t = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.default = void 0;
const Hy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var Zy = {
  randomUUID: Hy
};
Ot.default = Zy;
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.default = void 0;
var Ei = Gs(Ot), qy = Gs($t), Wy = Mr;
function Gs(r) {
  return r && r.__esModule ? r : { default: r };
}
function Yy(r, e, t) {
  if (Ei.default.randomUUID && !e && !r)
    return Ei.default.randomUUID();
  r = r || {};
  const n = r.random || (r.rng || qy.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (let a = 0; a < 16; ++a)
      e[t + a] = n[a];
    return e;
  }
  return (0, Wy.unsafeStringify)(n);
}
var Jy = Yy;
_t.default = Jy;
var Et = {}, At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.default = void 0;
function Xy(r, e, t, n) {
  switch (r) {
    case 0:
      return e & t ^ ~e & n;
    case 1:
      return e ^ t ^ n;
    case 2:
      return e & t ^ e & n ^ t & n;
    case 3:
      return e ^ t ^ n;
  }
}
function Jt(r, e) {
  return r << e | r >>> 32 - e;
}
function Ky(r) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    const s = unescape(encodeURIComponent(r));
    r = [];
    for (let o = 0; o < s.length; ++o)
      r.push(s.charCodeAt(o));
  } else
    Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  const n = r.length / 4 + 2, a = Math.ceil(n / 16), i = new Array(a);
  for (let s = 0; s < a; ++s) {
    const o = new Uint32Array(16);
    for (let l = 0; l < 16; ++l)
      o[l] = r[s * 64 + l * 4] << 24 | r[s * 64 + l * 4 + 1] << 16 | r[s * 64 + l * 4 + 2] << 8 | r[s * 64 + l * 4 + 3];
    i[s] = o;
  }
  i[a - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), i[a - 1][14] = Math.floor(i[a - 1][14]), i[a - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (let s = 0; s < a; ++s) {
    const o = new Uint32Array(80);
    for (let g = 0; g < 16; ++g)
      o[g] = i[s][g];
    for (let g = 16; g < 80; ++g)
      o[g] = Jt(o[g - 3] ^ o[g - 8] ^ o[g - 14] ^ o[g - 16], 1);
    let l = t[0], d = t[1], m = t[2], h = t[3], p = t[4];
    for (let g = 0; g < 80; ++g) {
      const w = Math.floor(g / 20), _ = Jt(l, 5) + Xy(w, d, m, h) + p + e[w] + o[g] >>> 0;
      p = h, h = m, m = Jt(d, 30) >>> 0, d = l, l = _;
    }
    t[0] = t[0] + l >>> 0, t[1] = t[1] + d >>> 0, t[2] = t[2] + m >>> 0, t[3] = t[3] + h >>> 0, t[4] = t[4] + p >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Qy = Ky;
At.default = Qy;
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.default = void 0;
var r0 = Hs(Ir), e0 = Hs(At);
function Hs(r) {
  return r && r.__esModule ? r : { default: r };
}
const t0 = (0, r0.default)("v5", 80, e0.default);
var n0 = t0;
Et.default = n0;
var It = {};
Object.defineProperty(It, "__esModule", {
  value: !0
});
It.default = void 0;
var a0 = "00000000-0000-0000-0000-000000000000";
It.default = a0;
var xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.default = void 0;
var i0 = o0(zr);
function o0(r) {
  return r && r.__esModule ? r : { default: r };
}
function s0(r) {
  if (!(0, i0.default)(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.slice(14, 15), 16);
}
var u0 = s0;
xt.default = u0;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "NIL", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(r, "parse", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), Object.defineProperty(r, "stringify", {
    enumerable: !0,
    get: function() {
      return l.default;
    }
  }), Object.defineProperty(r, "v1", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(r, "v3", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(r, "v4", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(r, "v5", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(r, "validate", {
    enumerable: !0,
    get: function() {
      return o.default;
    }
  }), Object.defineProperty(r, "version", {
    enumerable: !0,
    get: function() {
      return s.default;
    }
  });
  var e = m(gt), t = m(wt), n = m(_t), a = m(Et), i = m(It), s = m(xt), o = m(zr), l = m(Mr), d = m(Ne);
  function m(h) {
    return h && h.__esModule ? h : { default: h };
  }
})(Us);
var f0 = ht;
function l0() {
  this.__data__ = new f0(), this.size = 0;
}
var c0 = l0;
function v0(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
var d0 = v0;
function h0(r) {
  return this.__data__.get(r);
}
var m0 = h0;
function y0(r) {
  return this.__data__.has(r);
}
var p0 = y0, g0 = ht, $0 = Jn, b0 = Ds, w0 = 200;
function S0(r, e) {
  var t = this.__data__;
  if (t instanceof g0) {
    var n = t.__data__;
    if (!$0 || n.length < w0 - 1)
      return n.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new b0(n);
  }
  return t.set(r, e), this.size = t.size, this;
}
var T0 = S0, _0 = ht, O0 = c0, E0 = d0, A0 = m0, I0 = p0, x0 = T0;
function se(r) {
  var e = this.__data__ = new _0(r);
  this.size = e.size;
}
se.prototype.clear = O0;
se.prototype.delete = E0;
se.prototype.get = A0;
se.prototype.has = I0;
se.prototype.set = x0;
var Zs = se, C0 = Vr, M0 = function() {
  try {
    var r = C0(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), qs = M0, Ai = qs;
function F0(r, e, t) {
  e == "__proto__" && Ai ? Ai(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var ta = F0, N0 = ta, k0 = Fe;
function D0(r, e, t) {
  (t !== void 0 && !k0(r[e], t) || t === void 0 && !(e in r)) && N0(r, e, t);
}
var Ws = D0;
function P0(r) {
  return function(e, t, n) {
    for (var a = -1, i = Object(e), s = n(e), o = s.length; o--; ) {
      var l = s[r ? o : ++a];
      if (t(i[l], l, i) === !1)
        break;
    }
    return e;
  };
}
var L0 = P0, U0 = L0, j0 = U0(), R0 = j0, tt = { exports: {} };
tt.exports;
(function(r, e) {
  var t = gr, n = e && !e.nodeType && e, a = n && !0 && r && !r.nodeType && r, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function l(d, m) {
    if (m)
      return d.slice();
    var h = d.length, p = o ? o(h) : new d.constructor(h);
    return d.copy(p), p;
  }
  r.exports = l;
})(tt, tt.exports);
var Ys = tt.exports, B0 = gr, V0 = B0.Uint8Array, z0 = V0, Ii = z0;
function G0(r) {
  var e = new r.constructor(r.byteLength);
  return new Ii(e).set(new Ii(r)), e;
}
var na = G0, H0 = na;
function Z0(r, e) {
  var t = e ? H0(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.length);
}
var Js = Z0;
function q0(r, e) {
  var t = -1, n = r.length;
  for (e || (e = Array(n)); ++t < n; )
    e[t] = r[t];
  return e;
}
var Xs = q0, W0 = Cr, xi = Object.create, Y0 = function() {
  function r() {
  }
  return function(e) {
    if (!W0(e))
      return {};
    if (xi)
      return xi(e);
    r.prototype = e;
    var t = new r();
    return r.prototype = void 0, t;
  };
}(), J0 = Y0;
function X0(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var Ks = X0, K0 = Ks, Q0 = K0(Object.getPrototypeOf, Object), aa = Q0, rp = Object.prototype;
function ep(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || rp;
  return r === t;
}
var ia = ep, tp = J0, np = aa, ap = ia;
function ip(r) {
  return typeof r.constructor == "function" && !ap(r) ? tp(np(r)) : {};
}
var Qs = ip, op = Yn, sp = Qn;
function up(r) {
  return r != null && sp(r.length) && !op(r);
}
var Ct = up, fp = Ct, lp = br;
function cp(r) {
  return lp(r) && fp(r);
}
var vp = cp, nt = { exports: {} };
function dp() {
  return !1;
}
var hp = dp;
nt.exports;
(function(r, e) {
  var t = gr, n = hp, a = e && !e.nodeType && e, i = a && !0 && r && !r.nodeType && r, s = i && i.exports === a, o = s ? t.Buffer : void 0, l = o ? o.isBuffer : void 0, d = l || n;
  r.exports = d;
})(nt, nt.exports);
var oa = nt.exports, mp = xr, yp = aa, pp = br, gp = "[object Object]", $p = Function.prototype, bp = Object.prototype, ru = $p.toString, wp = bp.hasOwnProperty, Sp = ru.call(Object);
function Tp(r) {
  if (!pp(r) || mp(r) != gp)
    return !1;
  var e = yp(r);
  if (e === null)
    return !0;
  var t = wp.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && ru.call(t) == Sp;
}
var sa = Tp, _p = xr, Op = Qn, Ep = br, Ap = "[object Arguments]", Ip = "[object Array]", xp = "[object Boolean]", Cp = "[object Date]", Mp = "[object Error]", Fp = "[object Function]", Np = "[object Map]", kp = "[object Number]", Dp = "[object Object]", Pp = "[object RegExp]", Lp = "[object Set]", Up = "[object String]", jp = "[object WeakMap]", Rp = "[object ArrayBuffer]", Bp = "[object DataView]", Vp = "[object Float32Array]", zp = "[object Float64Array]", Gp = "[object Int8Array]", Hp = "[object Int16Array]", Zp = "[object Int32Array]", qp = "[object Uint8Array]", Wp = "[object Uint8ClampedArray]", Yp = "[object Uint16Array]", Jp = "[object Uint32Array]", N = {};
N[Vp] = N[zp] = N[Gp] = N[Hp] = N[Zp] = N[qp] = N[Wp] = N[Yp] = N[Jp] = !0;
N[Ap] = N[Ip] = N[Rp] = N[xp] = N[Bp] = N[Cp] = N[Mp] = N[Fp] = N[Np] = N[kp] = N[Dp] = N[Pp] = N[Lp] = N[Up] = N[jp] = !1;
function Xp(r) {
  return Ep(r) && Op(r.length) && !!N[_p(r)];
}
var Kp = Xp;
function Qp(r) {
  return function(e) {
    return r(e);
  };
}
var ua = Qp, at = { exports: {} };
at.exports;
(function(r, e) {
  var t = us, n = e && !e.nodeType && e, a = n && !0 && r && !r.nodeType && r, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(at, at.exports);
var fa = at.exports, r1 = Kp, e1 = ua, Ci = fa, Mi = Ci && Ci.isTypedArray, t1 = Mi ? e1(Mi) : r1, eu = t1;
function n1(r, e) {
  if (!(e === "constructor" && typeof r[e] == "function") && e != "__proto__")
    return r[e];
}
var tu = n1, a1 = ta, i1 = Fe, o1 = Object.prototype, s1 = o1.hasOwnProperty;
function u1(r, e, t) {
  var n = r[e];
  (!(s1.call(r, e) && i1(n, t)) || t === void 0 && !(e in r)) && a1(r, e, t);
}
var nu = u1, f1 = nu, l1 = ta;
function c1(r, e, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = e.length; ++i < s; ) {
    var o = e[i], l = n ? n(t[o], r[o], o, t, r) : void 0;
    l === void 0 && (l = r[o]), a ? l1(t, o, l) : f1(t, o, l);
  }
  return t;
}
var Fr = c1;
function v1(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var d1 = v1, h1 = d1, m1 = pt, y1 = $r, p1 = oa, g1 = Kn, $1 = eu, b1 = Object.prototype, w1 = b1.hasOwnProperty;
function S1(r, e) {
  var t = y1(r), n = !t && m1(r), a = !t && !n && p1(r), i = !t && !n && !a && $1(r), s = t || n || a || i, o = s ? h1(r.length, String) : [], l = o.length;
  for (var d in r)
    (e || w1.call(r, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    g1(d, l))) && o.push(d);
  return o;
}
var au = S1;
function T1(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}
var _1 = T1, O1 = Cr, E1 = ia, A1 = _1, I1 = Object.prototype, x1 = I1.hasOwnProperty;
function C1(r) {
  if (!O1(r))
    return A1(r);
  var e = E1(r), t = [];
  for (var n in r)
    n == "constructor" && (e || !x1.call(r, n)) || t.push(n);
  return t;
}
var M1 = C1, F1 = au, N1 = M1, k1 = Ct;
function D1(r) {
  return k1(r) ? F1(r, !0) : N1(r);
}
var Gr = D1, P1 = Fr, L1 = Gr;
function U1(r) {
  return P1(r, L1(r));
}
var j1 = U1, Fi = Ws, R1 = Ys, B1 = Js, V1 = Xs, z1 = Qs, Ni = pt, ki = $r, G1 = vp, H1 = oa, Z1 = Yn, q1 = Cr, W1 = sa, Y1 = eu, Di = tu, J1 = j1;
function X1(r, e, t, n, a, i, s) {
  var o = Di(r, t), l = Di(e, t), d = s.get(l);
  if (d) {
    Fi(r, t, d);
    return;
  }
  var m = i ? i(o, l, t + "", r, e, s) : void 0, h = m === void 0;
  if (h) {
    var p = ki(l), g = !p && H1(l), w = !p && !g && Y1(l);
    m = l, p || g || w ? ki(o) ? m = o : G1(o) ? m = V1(o) : g ? (h = !1, m = R1(l, !0)) : w ? (h = !1, m = B1(l, !0)) : m = [] : W1(l) || Ni(l) ? (m = o, Ni(o) ? m = J1(o) : (!q1(o) || Z1(o)) && (m = z1(l))) : h = !1;
  }
  h && (s.set(l, m), a(m, l, n, i, s), s.delete(l)), Fi(r, t, m);
}
var K1 = X1, Q1 = Zs, rg = Ws, eg = R0, tg = K1, ng = Cr, ag = Gr, ig = tu;
function iu(r, e, t, n, a) {
  r !== e && eg(e, function(i, s) {
    if (a || (a = new Q1()), ng(i))
      tg(r, e, s, t, iu, n, a);
    else {
      var o = n ? n(ig(r, s), i, s + "", r, e, a) : void 0;
      o === void 0 && (o = i), rg(r, s, o);
    }
  }, ag);
}
var og = iu;
function sg(r) {
  return r;
}
var ou = sg;
function ug(r, e, t) {
  switch (t.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, t[0]);
    case 2:
      return r.call(e, t[0], t[1]);
    case 3:
      return r.call(e, t[0], t[1], t[2]);
  }
  return r.apply(e, t);
}
var su = ug, fg = su, Pi = Math.max;
function lg(r, e, t) {
  return e = Pi(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, i = Pi(n.length - e, 0), s = Array(i); ++a < i; )
      s[a] = n[e + a];
    a = -1;
    for (var o = Array(e + 1); ++a < e; )
      o[a] = n[a];
    return o[e] = t(s), fg(r, this, o);
  };
}
var uu = lg;
function cg(r) {
  return function() {
    return r;
  };
}
var vg = cg, dg = vg, Li = qs, hg = ou, mg = Li ? function(r, e) {
  return Li(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: dg(e),
    writable: !0
  });
} : hg, yg = mg, pg = 800, gg = 16, $g = Date.now;
function bg(r) {
  var e = 0, t = 0;
  return function() {
    var n = $g(), a = gg - (n - t);
    if (t = n, a > 0) {
      if (++e >= pg)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var wg = bg, Sg = yg, Tg = wg, _g = Tg(Sg), fu = _g, Og = ou, Eg = uu, Ag = fu;
function Ig(r, e) {
  return Ag(Eg(r, e, Og), r + "");
}
var lu = Ig, xg = Fe, Cg = Ct, Mg = Kn, Fg = Cr;
function Ng(r, e, t) {
  if (!Fg(t))
    return !1;
  var n = typeof e;
  return (n == "number" ? Cg(t) && Mg(e, t.length) : n == "string" && e in t) ? xg(t[e], r) : !1;
}
var cu = Ng, kg = lu, Dg = cu;
function Pg(r) {
  return kg(function(e, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, s = a > 2 ? t[2] : void 0;
    for (i = r.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && Dg(t[0], t[1], s) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++n < a; ) {
      var o = t[n];
      o && r(e, o, n, i);
    }
    return e;
  });
}
var la = Pg, Lg = og, Ug = la, jg = Ug(function(r, e, t) {
  Lg(r, e, t);
}), vu = jg, Rg = xr, Bg = $r, Vg = br, zg = "[object String]";
function Gg(r) {
  return typeof r == "string" || !Bg(r) && Vg(r) && Rg(r) == zg;
}
var Hg = Gg, ue = {};
function Zg(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n && e(r[t], t, r) !== !1; )
    ;
  return r;
}
var qg = Zg, Wg = Ks, Yg = Wg(Object.keys, Object), Jg = Yg, Xg = ia, Kg = Jg, Qg = Object.prototype, r$ = Qg.hasOwnProperty;
function e$(r) {
  if (!Xg(r))
    return Kg(r);
  var e = [];
  for (var t in Object(r))
    r$.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
var t$ = e$, n$ = au, a$ = t$, i$ = Ct;
function o$(r) {
  return i$(r) ? n$(r) : a$(r);
}
var Mt = o$, s$ = Fr, u$ = Mt;
function f$(r, e) {
  return r && s$(e, u$(e), r);
}
var l$ = f$, c$ = Fr, v$ = Gr;
function d$(r, e) {
  return r && c$(e, v$(e), r);
}
var h$ = d$;
function m$(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
    var s = r[t];
    e(s, t, r) && (i[a++] = s);
  }
  return i;
}
var y$ = m$;
function p$() {
  return [];
}
var du = p$, g$ = y$, $$ = du, b$ = Object.prototype, w$ = b$.propertyIsEnumerable, Ui = Object.getOwnPropertySymbols, S$ = Ui ? function(r) {
  return r == null ? [] : (r = Object(r), g$(Ui(r), function(e) {
    return w$.call(r, e);
  }));
} : $$, ca = S$, T$ = Fr, _$ = ca;
function O$(r, e) {
  return T$(r, _$(r), e);
}
var E$ = O$;
function A$(r, e) {
  for (var t = -1, n = e.length, a = r.length; ++t < n; )
    r[a + t] = e[t];
  return r;
}
var va = A$, I$ = va, x$ = aa, C$ = ca, M$ = du, F$ = Object.getOwnPropertySymbols, N$ = F$ ? function(r) {
  for (var e = []; r; )
    I$(e, C$(r)), r = x$(r);
  return e;
} : M$, hu = N$, k$ = Fr, D$ = hu;
function P$(r, e) {
  return k$(r, D$(r), e);
}
var L$ = P$, U$ = va, j$ = $r;
function R$(r, e, t) {
  var n = e(r);
  return j$(r) ? n : U$(n, t(r));
}
var mu = R$, B$ = mu, V$ = ca, z$ = Mt;
function G$(r) {
  return B$(r, z$, V$);
}
var H$ = G$, Z$ = mu, q$ = hu, W$ = Gr;
function Y$(r) {
  return Z$(r, W$, q$);
}
var yu = Y$, J$ = Vr, X$ = gr, K$ = J$(X$, "DataView"), Q$ = K$, rb = Vr, eb = gr, tb = rb(eb, "Promise"), nb = tb, ab = Vr, ib = gr, ob = ab(ib, "Set"), sb = ob, ub = Vr, fb = gr, lb = ub(fb, "WeakMap"), cb = lb, mn = Q$, yn = Jn, pn = nb, gn = sb, $n = cb, pu = xr, fe = ks, ji = "[object Map]", vb = "[object Object]", Ri = "[object Promise]", Bi = "[object Set]", Vi = "[object WeakMap]", zi = "[object DataView]", db = fe(mn), hb = fe(yn), mb = fe(pn), yb = fe(gn), pb = fe($n), Dr = pu;
(mn && Dr(new mn(new ArrayBuffer(1))) != zi || yn && Dr(new yn()) != ji || pn && Dr(pn.resolve()) != Ri || gn && Dr(new gn()) != Bi || $n && Dr(new $n()) != Vi) && (Dr = function(r) {
  var e = pu(r), t = e == vb ? r.constructor : void 0, n = t ? fe(t) : "";
  if (n)
    switch (n) {
      case db:
        return zi;
      case hb:
        return ji;
      case mb:
        return Ri;
      case yb:
        return Bi;
      case pb:
        return Vi;
    }
  return e;
});
var da = Dr, gb = Object.prototype, $b = gb.hasOwnProperty;
function bb(r) {
  var e = r.length, t = new r.constructor(e);
  return e && typeof r[0] == "string" && $b.call(r, "index") && (t.index = r.index, t.input = r.input), t;
}
var wb = bb, Sb = na;
function Tb(r, e) {
  var t = e ? Sb(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.byteLength);
}
var _b = Tb, Ob = /\w*$/;
function Eb(r) {
  var e = new r.constructor(r.source, Ob.exec(r));
  return e.lastIndex = r.lastIndex, e;
}
var Ab = Eb, Gi = Me, Hi = Gi ? Gi.prototype : void 0, Zi = Hi ? Hi.valueOf : void 0;
function Ib(r) {
  return Zi ? Object(Zi.call(r)) : {};
}
var xb = Ib, Cb = na, Mb = _b, Fb = Ab, Nb = xb, kb = Js, Db = "[object Boolean]", Pb = "[object Date]", Lb = "[object Map]", Ub = "[object Number]", jb = "[object RegExp]", Rb = "[object Set]", Bb = "[object String]", Vb = "[object Symbol]", zb = "[object ArrayBuffer]", Gb = "[object DataView]", Hb = "[object Float32Array]", Zb = "[object Float64Array]", qb = "[object Int8Array]", Wb = "[object Int16Array]", Yb = "[object Int32Array]", Jb = "[object Uint8Array]", Xb = "[object Uint8ClampedArray]", Kb = "[object Uint16Array]", Qb = "[object Uint32Array]";
function rw(r, e, t) {
  var n = r.constructor;
  switch (e) {
    case zb:
      return Cb(r);
    case Db:
    case Pb:
      return new n(+r);
    case Gb:
      return Mb(r, t);
    case Hb:
    case Zb:
    case qb:
    case Wb:
    case Yb:
    case Jb:
    case Xb:
    case Kb:
    case Qb:
      return kb(r, t);
    case Lb:
      return new n();
    case Ub:
    case Bb:
      return new n(r);
    case jb:
      return Fb(r);
    case Rb:
      return new n();
    case Vb:
      return Nb(r);
  }
}
var ew = rw, tw = da, nw = br, aw = "[object Map]";
function iw(r) {
  return nw(r) && tw(r) == aw;
}
var ow = iw, sw = ow, uw = ua, qi = fa, Wi = qi && qi.isMap, fw = Wi ? uw(Wi) : sw, lw = fw, cw = da, vw = br, dw = "[object Set]";
function hw(r) {
  return vw(r) && cw(r) == dw;
}
var mw = hw, yw = mw, pw = ua, Yi = fa, Ji = Yi && Yi.isSet, gw = Ji ? pw(Ji) : yw, $w = gw, bw = Zs, ww = qg, Sw = nu, Tw = l$, _w = h$, Ow = Ys, Ew = Xs, Aw = E$, Iw = L$, xw = H$, Cw = yu, Mw = da, Fw = wb, Nw = ew, kw = Qs, Dw = $r, Pw = oa, Lw = lw, Uw = Cr, jw = $w, Rw = Mt, Bw = Gr, Vw = 1, zw = 2, Gw = 4, gu = "[object Arguments]", Hw = "[object Array]", Zw = "[object Boolean]", qw = "[object Date]", Ww = "[object Error]", $u = "[object Function]", Yw = "[object GeneratorFunction]", Jw = "[object Map]", Xw = "[object Number]", bu = "[object Object]", Kw = "[object RegExp]", Qw = "[object Set]", r2 = "[object String]", e2 = "[object Symbol]", t2 = "[object WeakMap]", n2 = "[object ArrayBuffer]", a2 = "[object DataView]", i2 = "[object Float32Array]", o2 = "[object Float64Array]", s2 = "[object Int8Array]", u2 = "[object Int16Array]", f2 = "[object Int32Array]", l2 = "[object Uint8Array]", c2 = "[object Uint8ClampedArray]", v2 = "[object Uint16Array]", d2 = "[object Uint32Array]", F = {};
F[gu] = F[Hw] = F[n2] = F[a2] = F[Zw] = F[qw] = F[i2] = F[o2] = F[s2] = F[u2] = F[f2] = F[Jw] = F[Xw] = F[bu] = F[Kw] = F[Qw] = F[r2] = F[e2] = F[l2] = F[c2] = F[v2] = F[d2] = !0;
F[Ww] = F[$u] = F[t2] = !1;
function Xe(r, e, t, n, a, i) {
  var s, o = e & Vw, l = e & zw, d = e & Gw;
  if (t && (s = a ? t(r, n, a, i) : t(r)), s !== void 0)
    return s;
  if (!Uw(r))
    return r;
  var m = Dw(r);
  if (m) {
    if (s = Fw(r), !o)
      return Ew(r, s);
  } else {
    var h = Mw(r), p = h == $u || h == Yw;
    if (Pw(r))
      return Ow(r, o);
    if (h == bu || h == gu || p && !a) {
      if (s = l || p ? {} : kw(r), !o)
        return l ? Iw(r, _w(s, r)) : Aw(r, Tw(s, r));
    } else {
      if (!F[h])
        return a ? r : {};
      s = Nw(r, h, o);
    }
  }
  i || (i = new bw());
  var g = i.get(r);
  if (g)
    return g;
  i.set(r, s), jw(r) ? r.forEach(function(O) {
    s.add(Xe(O, e, t, O, r, i));
  }) : Lw(r) && r.forEach(function(O, T) {
    s.set(T, Xe(O, e, t, T, r, i));
  });
  var w = d ? l ? Cw : xw : l ? Bw : Rw, _ = m ? void 0 : w(r);
  return ww(_ || r, function(O, T) {
    _ && (T = O, O = r[T]), Sw(s, T, Xe(O, e, t, T, r, i));
  }), s;
}
var h2 = Xe;
function m2(r) {
  var e = r == null ? 0 : r.length;
  return e ? r[e - 1] : void 0;
}
var y2 = m2, p2 = yt, g2 = ra;
function $2(r, e) {
  e = p2(e, r);
  for (var t = 0, n = e.length; r != null && t < n; )
    r = r[g2(e[t++])];
  return t && t == n ? r : void 0;
}
var b2 = $2, w2 = b2, S2 = cs;
function T2(r, e) {
  return e.length < 2 ? r : w2(r, S2(e, 0, -1));
}
var _2 = T2, O2 = yt, E2 = y2, A2 = _2, I2 = ra;
function x2(r, e) {
  return e = O2(e, r), r = A2(r, e), r == null || delete r[I2(E2(e))];
}
var C2 = x2, M2 = sa;
function F2(r) {
  return M2(r) ? void 0 : r;
}
var N2 = F2, Xi = Me, k2 = pt, D2 = $r, Ki = Xi ? Xi.isConcatSpreadable : void 0;
function P2(r) {
  return D2(r) || k2(r) || !!(Ki && r && r[Ki]);
}
var L2 = P2, U2 = va, j2 = L2;
function wu(r, e, t, n, a) {
  var i = -1, s = r.length;
  for (t || (t = j2), a || (a = []); ++i < s; ) {
    var o = r[i];
    e > 0 && t(o) ? e > 1 ? wu(o, e - 1, t, n, a) : U2(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var R2 = wu, B2 = R2;
function V2(r) {
  var e = r == null ? 0 : r.length;
  return e ? B2(r, 1) : [];
}
var z2 = V2, G2 = z2, H2 = uu, Z2 = fu;
function q2(r) {
  return Z2(H2(r, void 0, G2), r + "");
}
var W2 = q2, Y2 = qn, J2 = h2, X2 = C2, K2 = yt, Q2 = Fr, rS = N2, eS = W2, tS = yu, nS = 1, aS = 2, iS = 4, oS = eS(function(r, e) {
  var t = {};
  if (r == null)
    return t;
  var n = !1;
  e = Y2(e, function(i) {
    return i = K2(i, r), n || (n = i.length > 1), i;
  }), Q2(r, tS(r), t), n && (t = J2(t, nS | aS | iS, rS));
  for (var a = e.length; a--; )
    X2(t, e[a]);
  return t;
}), sS = oS, uS = Fr, fS = la, lS = Gr, cS = fS(function(r, e) {
  uS(e, lS(e), r);
}), vS = cS, dS = vS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function hS() {
  return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
}
var mS = hS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yS = mS, pS = yS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gS = pS, $S = gS();
function bS() {
  return $S && typeof Symbol.toStringTag == "symbol";
}
var wS = bS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SS = wS, Ft = SS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TS = Object.prototype.toString, Su = TS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _S = Su;
function OS(r) {
  return _S.call(r);
}
var ES = OS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var AS = Object.prototype.hasOwnProperty;
function IS(r, e) {
  return r == null ? !1 : AS.call(r, e);
}
var xS = IS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CS = xS, le = CS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MS = typeof Symbol == "function" ? Symbol.toStringTag : "", FS = MS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NS = le, ge = FS, Xt = Su;
function kS(r) {
  var e, t, n;
  if (r == null)
    return Xt.call(r);
  t = r[ge], e = NS(r, ge);
  try {
    r[ge] = void 0;
  } catch {
    return Xt.call(r);
  }
  return n = Xt.call(r), e ? r[ge] = t : delete r[ge], n;
}
var DS = kS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PS = Ft, LS = ES, US = DS, bn;
PS() ? bn = US : bn = LS;
var z = bn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jS = z, wn;
function RS(r) {
  return jS(r) === "[object Array]";
}
Array.isArray ? wn = Array.isArray : wn = RS;
var BS = wn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VS = BS, Nt = VS;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zS = typeof Object.defineProperty == "function" ? Object.defineProperty : null, GS = zS;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var HS = GS;
function ZS() {
  try {
    return HS({}, "x", {}), !0;
  } catch {
    return !1;
  }
}
var qS = ZS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WS = Object.defineProperty, YS = WS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ce = Object.prototype, Qi = ce.toString, ro = ce.__defineGetter__, eo = ce.__defineSetter__, JS = ce.__lookupGetter__, XS = ce.__lookupSetter__;
function KS(r, e, t) {
  var n, a, i, s;
  if (typeof r != "object" || r === null || Qi.call(r) === "[object Array]")
    throw new TypeError("invalid argument. First argument must be an object. Value: `" + r + "`.");
  if (typeof t != "object" || t === null || Qi.call(t) === "[object Array]")
    throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + t + "`.");
  if (a = "value" in t, a && (JS.call(r, e) || XS.call(r, e) ? (n = r.__proto__, r.__proto__ = ce, delete r[e], r[e] = t.value, r.__proto__ = n) : r[e] = t.value), i = "get" in t, s = "set" in t, a && (i || s))
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  return i && ro && ro.call(r, e, t.get), s && eo && eo.call(r, e, t.set), r;
}
var QS = KS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rT = qS, eT = YS, tT = QS, Sn;
rT() ? Sn = eT : Sn = tT;
var Tu = Sn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nT = Tu;
function aT(r, e, t) {
  nT(r, e, {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: t
  });
}
var iT = aT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oT = iT, Tr = oT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function sT(r) {
  return typeof r == "number";
}
var _u = sT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var uT = Number;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fT = uT, ha = fT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lT = ha, cT = lT.prototype.toString, vT = cT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dT = vT;
function hT(r) {
  try {
    return dT.call(r), !0;
  } catch {
    return !1;
  }
}
var mT = hT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yT = Ft, pT = z, gT = ha, $T = mT, bT = yT();
function wT(r) {
  return typeof r == "object" ? r instanceof gT ? !0 : bT ? $T(r) : pT(r) === "[object Number]" : !1;
}
var Ou = wT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ST = _u, TT = Ou;
function _T(r) {
  return ST(r) || TT(r);
}
var OT = _T;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Eu = Tr, ma = OT, ET = _u, AT = Ou;
Eu(ma, "isPrimitive", ET);
Eu(ma, "isObject", AT);
var kt = ma;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IT = Number.POSITIVE_INFINITY, ya = IT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xT = ha, CT = xT.NEGATIVE_INFINITY, MT = CT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FT = Math.floor, NT = FT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kT = NT, DT = kT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PT = DT;
function LT(r) {
  return PT(r) === r;
}
var UT = LT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jT = UT, pa = jT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RT = ya, BT = MT, VT = pa;
function zT(r) {
  return r < RT && r > BT && VT(r);
}
var Au = zT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GT = kt.isPrimitive, HT = Au;
function ZT(r) {
  return GT(r) && HT(r);
}
var Iu = ZT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qT = kt.isObject, WT = Au;
function YT(r) {
  return qT(r) && WT(r.valueOf());
}
var xu = YT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var JT = Iu, XT = xu;
function KT(r) {
  return JT(r) || XT(r);
}
var QT = KT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cu = Tr, ga = QT, r_ = Iu, e_ = xu;
Cu(ga, "isPrimitive", r_);
Cu(ga, "isObject", e_);
var Dt = ga;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var t_ = Dt.isPrimitive;
function n_(r) {
  return t_(r) && r >= 0;
}
var Mu = n_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a_ = Dt.isObject;
function i_(r) {
  return a_(r) && r.valueOf() >= 0;
}
var Fu = i_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o_ = Mu, s_ = Fu;
function u_(r) {
  return o_(r) || s_(r);
}
var f_ = u_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nu = Tr, $a = f_, l_ = Mu, c_ = Fu;
Nu($a, "isPrimitive", l_);
Nu($a, "isObject", c_);
var v_ = $a;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d_ = Nt;
function h_(r) {
  if (typeof r != "function")
    throw new TypeError("invalid argument. Must provide a function. Value: `" + r + "`.");
  return e;
  function e(t) {
    var n, a;
    if (!d_(t) || (n = t.length, n === 0))
      return !1;
    for (a = 0; a < n; a++)
      if (r(t[a]) === !1)
        return !1;
    return !0;
  }
}
var m_ = h_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y_ = m_, p_ = y_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function g_(r) {
  return r !== null && typeof r == "object";
}
var $_ = g_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b_ = Tr, w_ = p_, ba = $_, S_ = w_(ba);
b_(ba, "isObjectLikeArray", S_);
var ku = ba;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var T_ = ku;
function __(r) {
  return T_(r) && // eslint-disable-next-line no-underscore-dangle
  (r._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  r.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r));
}
var O_ = __;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E_ = O_, ke = E_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A_ = /./, I_ = A_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function x_(r) {
  return typeof r == "boolean";
}
var Du = x_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var C_ = Boolean.prototype.toString, M_ = C_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F_ = M_;
function N_(r) {
  try {
    return F_.call(r), !0;
  } catch {
    return !1;
  }
}
var k_ = N_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var D_ = Ft, P_ = z, L_ = k_, U_ = D_();
function j_(r) {
  return typeof r == "object" ? r instanceof Boolean ? !0 : U_ ? L_(r) : P_(r) === "[object Boolean]" : !1;
}
var Pu = j_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R_ = Du, B_ = Pu;
function V_(r) {
  return R_(r) || B_(r);
}
var z_ = V_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Lu = Tr, wa = z_, G_ = Du, H_ = Pu;
Lu(wa, "isPrimitive", G_);
Lu(wa, "isObject", H_);
var Z_ = wa;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function q_() {
  return new Function("return this;")();
}
var W_ = q_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Y_ = typeof self == "object" ? self : null, J_ = Y_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var X_ = typeof window == "object" ? window : null, K_ = X_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Q_ = typeof re == "object" ? re : null, rO = Q_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eO = Z_.isPrimitive, tO = W_, to = J_, no = K_, ao = rO;
function nO(r) {
  if (arguments.length) {
    if (!eO(r))
      throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `" + r + "`.");
    if (r)
      return tO();
  }
  if (to)
    return to;
  if (no)
    return no;
  if (ao)
    return ao;
  throw new Error("unexpected error. Unable to resolve global object.");
}
var aO = nO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iO = aO, oO = iO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sO = oO, io = sO(), uO = io.document && io.document.childNodes, fO = uO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lO = Int8Array, cO = lO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vO = I_, dO = fO, hO = cO;
function mO() {
  return (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof vO == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof hO == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof dO == "function"
  );
}
var yO = mO;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function pO() {
  return /^\s*function\s*([^(]*)/i;
}
var Uu = pO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gO = Uu, $O = gO(), bO = $O;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wO = Tr, ju = Uu, SO = bO;
wO(ju, "REGEXP", SO);
var TO = ju;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _O = z, OO = TO.REGEXP, EO = ke;
function AO(r) {
  var e, t, n;
  if (t = _O(r).slice(8, -1), (t === "Object" || t === "Error") && r.constructor) {
    if (n = r.constructor, typeof n.name == "string")
      return n.name;
    if (e = OO.exec(n.toString()), e)
      return e[1];
  }
  return EO(r) ? "Buffer" : t;
}
var IO = AO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xO = IO, Ru = xO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CO = Ru;
function MO(r) {
  var e;
  return r === null ? "null" : (e = typeof r, e === "object" ? CO(r).toLowerCase() : e);
}
var FO = MO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NO = Ru;
function kO(r) {
  return NO(r).toLowerCase();
}
var DO = kO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PO = yO, LO = FO, UO = DO, jO = PO() ? UO : LO, Sa = jO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RO = Sa;
function BO(r) {
  return RO(r) === "function";
}
var VO = BO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zO = VO, Bu = zO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GO = Object.getPrototypeOf, HO = GO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ZO(r) {
  return r.__proto__;
}
var qO = ZO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WO = z, YO = qO;
function JO(r) {
  var e = YO(r);
  return e || e === null ? e : WO(r.constructor) === "[object Function]" ? r.constructor.prototype : r instanceof Object ? Object.prototype : null;
}
var XO = JO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KO = Bu, QO = HO, rE = XO, Tn;
KO(Object.getPrototypeOf) ? Tn = QO : Tn = rE;
var eE = Tn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tE = eE;
function nE(r) {
  return r == null ? null : (r = Object(r), tE(r));
}
var aE = nE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iE = aE, Vu = iE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oE = Vu, sE = z;
function uE(r) {
  if (typeof r != "object" || r === null)
    return !1;
  if (r instanceof Error)
    return !0;
  for (; r; ) {
    if (sE(r) === "[object Error]")
      return !0;
    r = oE(r);
  }
  return !1;
}
var fE = uE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lE = fE, cE = lE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function vE(r) {
  return typeof r == "string";
}
var zu = vE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dE = String.prototype.valueOf, hE = dE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mE = hE;
function yE(r) {
  try {
    return mE.call(r), !0;
  } catch {
    return !1;
  }
}
var pE = yE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gE = Ft, $E = z, bE = pE, wE = gE();
function SE(r) {
  return typeof r == "object" ? r instanceof String ? !0 : wE ? bE(r) : $E(r) === "[object String]" : !1;
}
var Gu = SE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TE = zu, _E = Gu;
function OE(r) {
  return TE(r) || _E(r);
}
var EE = OE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hu = Tr, Ta = EE, AE = zu, IE = Gu;
Hu(Ta, "isPrimitive", AE);
Hu(Ta, "isObject", IE);
var _a = Ta;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function xE() {
  return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
}
var Zu = xE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CE = Zu, ME = CE(), FE = ME;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NE = Tr, qu = Zu, kE = FE;
NE(qu, "REGEXP", kE);
var DE = qu;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function PE(r) {
  return typeof r == "number";
}
var Wu = PE;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function LE(r) {
  return r[0] === "-";
}
function oo(r) {
  var e = "", t;
  for (t = 0; t < r; t++)
    e += "0";
  return e;
}
function UE(r, e, t) {
  var n = !1, a = e - r.length;
  return a < 0 || (LE(r) && (n = !0, r = r.substr(1)), r = t ? r + oo(a) : oo(a) + r, n && (r = "-" + r)), r;
}
var Yu = UE;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jE = Wu, so = Yu, RE = String.prototype.toLowerCase, uo = String.prototype.toUpperCase;
function BE(r) {
  var e, t, n;
  switch (r.specifier) {
    case "b":
      e = 2;
      break;
    case "o":
      e = 8;
      break;
    case "x":
    case "X":
      e = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      e = 10;
      break;
  }
  if (t = r.arg, n = parseInt(t, 10), !isFinite(n)) {
    if (!jE(t))
      throw new Error("invalid integer. Value: " + t);
    n = 0;
  }
  return n < 0 && (r.specifier === "u" || e !== 10) && (n = 4294967295 + n + 1), n < 0 ? (t = (-n).toString(e), r.precision && (t = so(t, r.precision, r.padRight)), t = "-" + t) : (t = n.toString(e), !n && !r.precision ? t = "" : r.precision && (t = so(t, r.precision, r.padRight)), r.sign && (t = r.sign + t)), e === 16 && (r.alternate && (t = "0x" + t), t = r.specifier === uo.call(r.specifier) ? uo.call(t) : RE.call(t)), e === 8 && r.alternate && t.charAt(0) !== "0" && (t = "0" + t), t;
}
var VE = BE;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zE(r) {
  return typeof r == "string";
}
var GE = zE;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var HE = Wu, ZE = Math.abs, qE = String.prototype.toLowerCase, fo = String.prototype.toUpperCase, Nr = String.prototype.replace, WE = /e\+(\d)$/, YE = /e-(\d)$/, JE = /^(\d+)$/, XE = /^(\d+)e/, KE = /\.0$/, QE = /\.0*e/, rA = /(\..*[^0])0*e/;
function eA(r) {
  var e, t, n = parseFloat(r.arg);
  if (!isFinite(n)) {
    if (!HE(r.arg))
      throw new Error("invalid floating-point number. Value: " + t);
    n = r.arg;
  }
  switch (r.specifier) {
    case "e":
    case "E":
      t = n.toExponential(r.precision);
      break;
    case "f":
    case "F":
      t = n.toFixed(r.precision);
      break;
    case "g":
    case "G":
      ZE(n) < 1e-4 ? (e = r.precision, e > 0 && (e -= 1), t = n.toExponential(e)) : t = n.toPrecision(r.precision), r.alternate || (t = Nr.call(t, rA, "$1e"), t = Nr.call(t, QE, "e"), t = Nr.call(t, KE, ""));
      break;
    default:
      throw new Error("invalid double notation. Value: " + r.specifier);
  }
  return t = Nr.call(t, WE, "e+0$1"), t = Nr.call(t, YE, "e-0$1"), r.alternate && (t = Nr.call(t, JE, "$1."), t = Nr.call(t, XE, "$1.e")), n >= 0 && r.sign && (t = r.sign + t), t = r.specifier === fo.call(r.specifier) ? fo.call(t) : qE.call(t), t;
}
var tA = eA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function lo(r) {
  var e = "", t;
  for (t = 0; t < r; t++)
    e += " ";
  return e;
}
function nA(r, e, t) {
  var n = e - r.length;
  return n < 0 || (r = t ? r + lo(n) : lo(n) + r), r;
}
var aA = nA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iA = VE, oA = GE, sA = tA, uA = aA, fA = Yu, lA = String.fromCharCode, Ge = isNaN, cA = Array.isArray;
function vA(r) {
  var e = {};
  return e.specifier = r.specifier, e.precision = r.precision === void 0 ? 1 : r.precision, e.width = r.width, e.flags = r.flags || "", e.mapping = r.mapping, e;
}
function dA(r) {
  var e, t, n, a, i, s, o, l, d;
  if (!cA(r))
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + r + "`.");
  for (s = "", o = 1, l = 0; l < r.length; l++)
    if (n = r[l], oA(n))
      s += n;
    else {
      if (e = n.precision !== void 0, n = vA(n), !n.specifier)
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + l + "`. Value: `" + n + "`.");
      for (n.mapping && (o = n.mapping), t = n.flags, d = 0; d < t.length; d++)
        switch (a = t.charAt(d), a) {
          case " ":
            n.sign = " ";
            break;
          case "+":
            n.sign = "+";
            break;
          case "-":
            n.padRight = !0, n.padZeros = !1;
            break;
          case "0":
            n.padZeros = t.indexOf("-") < 0;
            break;
          case "#":
            n.alternate = !0;
            break;
          default:
            throw new Error("invalid flag: " + a);
        }
      if (n.width === "*") {
        if (n.width = parseInt(arguments[o], 10), o += 1, Ge(n.width))
          throw new TypeError("the argument for * width at position " + o + " is not a number. Value: `" + n.width + "`.");
        n.width < 0 && (n.padRight = !0, n.width = -n.width);
      }
      if (e && n.precision === "*") {
        if (n.precision = parseInt(arguments[o], 10), o += 1, Ge(n.precision))
          throw new TypeError("the argument for * precision at position " + o + " is not a number. Value: `" + n.precision + "`.");
        n.precision < 0 && (n.precision = 1, e = !1);
      }
      switch (n.arg = arguments[o], n.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          e && (n.padZeros = !1), n.arg = iA(n);
          break;
        case "s":
          n.maxWidth = e ? n.precision : -1;
          break;
        case "c":
          if (!Ge(n.arg)) {
            if (i = parseInt(n.arg, 10), i < 0 || i > 127)
              throw new Error("invalid character code. Value: " + n.arg);
            n.arg = Ge(i) ? String(n.arg) : lA(i);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          e || (n.precision = 6), n.arg = sA(n);
          break;
        default:
          throw new Error("invalid specifier: " + n.specifier);
      }
      n.maxWidth >= 0 && n.arg.length > n.maxWidth && (n.arg = n.arg.substring(0, n.maxWidth)), n.padZeros ? n.arg = fA(n.arg, n.width || n.precision, n.padRight) : n.width && (n.arg = uA(n.arg, n.width, n.padRight)), s += n.arg || "", o += 1;
    }
  return s;
}
var hA = dA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mA = hA, yA = mA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var He = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function pA(r) {
  var e = {
    mapping: r[1] ? parseInt(r[1], 10) : void 0,
    flags: r[2],
    width: r[3],
    precision: r[5],
    specifier: r[6]
  };
  return r[4] === "." && r[5] === void 0 && (e.precision = "1"), e;
}
function gA(r) {
  var e, t, n, a;
  for (t = [], a = 0, n = He.exec(r); n; )
    e = r.slice(a, He.lastIndex - n[0].length), e.length && t.push(e), t.push(pA(n)), a = He.lastIndex, n = He.exec(r);
  return e = r.slice(a), e.length && t.push(e), t;
}
var $A = gA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bA = $A, wA = bA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function SA(r) {
  return typeof r == "string";
}
var TA = SA;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _A = yA, OA = wA, EA = TA;
function Ju(r) {
  var e, t, n;
  if (!EA(r))
    throw new TypeError(Ju("invalid argument. First argument must be a string. Value: `%s`.", r));
  for (e = OA(r), t = new Array(arguments.length), t[0] = e, n = 1; n < t.length; n++)
    t[n] = arguments[n];
  return _A.apply(null, t);
}
var AA = Ju;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IA = AA, xA = IA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CA = _a.isPrimitive, MA = DE, FA = xA;
function NA(r) {
  if (!CA(r))
    throw new TypeError(FA("invalid argument. Must provide a regular expression string. Value: `%s`.", r));
  return r = MA().exec(r), r ? new RegExp(r[1], r[2]) : null;
}
var kA = NA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DA = kA, PA = DA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function LA(r) {
  return r !== r;
}
var UA = LA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jA = UA, Xu = jA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RA = kt.isPrimitive, BA = Xu;
function VA(r) {
  return RA(r) && BA(r);
}
var Ku = VA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zA = kt.isObject, GA = Xu;
function HA(r) {
  return zA(r) && GA(r.valueOf());
}
var Qu = HA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZA = Ku, qA = Qu;
function WA(r) {
  return ZA(r) || qA(r);
}
var YA = WA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rf = Tr, Oa = YA, JA = Ku, XA = Qu;
rf(Oa, "isPrimitive", JA);
rf(Oa, "isObject", XA);
var ef = Oa;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KA = 9007199254740991, QA = KA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rI = pa, eI = QA;
function tI(r) {
  return typeof r == "object" && r !== null && typeof r.length == "number" && rI(r.length) && r.length >= 0 && r.length <= eI;
}
var nI = tI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aI = nI, iI = aI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var co = ef, oI = iI, sI = _a.isPrimitive, uI = Dt.isPrimitive;
function fI(r, e, t) {
  var n, a;
  if (!oI(r) && !sI(r))
    throw new TypeError("invalid argument. First argument must be an array-like object. Value: `" + r + "`.");
  if (n = r.length, n === 0)
    return -1;
  if (arguments.length === 3) {
    if (!uI(t))
      throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `" + t + "`.");
    if (t >= 0) {
      if (t >= n)
        return -1;
      a = t;
    } else
      a = n + t, a < 0 && (a = 0);
  } else
    a = 0;
  if (co(e)) {
    for (; a < n; a++)
      if (co(r[a]))
        return a;
  } else
    for (; a < n; a++)
      if (r[a] === e)
        return a;
  return -1;
}
var lI = fI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cI = lI, tf = cI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function vI(r) {
  return Object.keys(Object(r));
}
var Ea = vI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dI = Ea;
function hI() {
  return (dI(arguments) || "").length !== 2;
}
function mI() {
  return hI(1, 2);
}
var yI = mI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pI = typeof Object.keys < "u", gI = pI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $I = z;
function bI(r) {
  return $I(r) === "[object Arguments]";
}
var nf = bI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wI = nf, af;
function SI() {
  return wI(arguments);
}
af = SI();
var TI = af;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _I = Object.prototype.propertyIsEnumerable, of = _I;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var OI = of, sf;
function EI() {
  return !OI.call("beep", "0");
}
sf = EI();
var AI = sf;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var II = _a, xI = ef.isPrimitive, CI = Dt.isPrimitive, MI = of, FI = AI;
function NI(r, e) {
  var t;
  return r == null ? !1 : (t = MI.call(r, e), !t && FI && II(r) ? (e = +e, !xI(e) && CI(e) && e >= 0 && e < r.length) : t);
}
var kI = NI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DI = kI, Aa = DI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PI = 4294967295, uf = PI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LI = le, UI = Aa, jI = Nt, RI = pa, BI = uf;
function VI(r) {
  return r !== null && typeof r == "object" && !jI(r) && typeof r.length == "number" && RI(r.length) && r.length >= 0 && r.length <= BI && LI(r, "callee") && !UI(r, "callee");
}
var zI = VI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GI = TI, HI = nf, ZI = zI, _n;
GI ? _n = HI : _n = ZI;
var ff = _n;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qI = ff, vo = Ea, WI = Array.prototype.slice;
function YI(r) {
  return qI(r) ? vo(WI.call(r)) : vo(r);
}
var JI = YI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function XI() {
}
var KI = XI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var QI = KI, rx = QI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ex = Aa, tx = rx, nx = ex(tx, "prototype"), ax = nx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ix = Aa, ox = {
  toString: null
}, sx = !ix(ox, "toString"), ux = sx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function fx(r) {
  return r.constructor && r.constructor.prototype === r;
}
var lf = fx;
const lx = [
  "console",
  "external",
  "frame",
  "frameElement",
  "frames",
  "innerHeight",
  "innerWidth",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "scrollLeft",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  "webkitIndexedDB",
  "webkitStorageInfo",
  "window"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cx = typeof window > "u" ? void 0 : window, vx = cx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dx = le, hx = tf, ho = Sa, mx = lf, yx = lx, Wr = vx, cf;
function px() {
  var r;
  if (ho(Wr) === "undefined")
    return !1;
  for (r in Wr)
    try {
      hx(yx, r) === -1 && dx(Wr, r) && Wr[r] !== null && ho(Wr[r]) === "object" && mx(Wr[r]);
    } catch {
      return !0;
    }
  return !1;
}
cf = px();
var gx = cf;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $x = typeof window < "u", bx = $x;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wx = gx, mo = lf, Sx = bx;
function Tx(r) {
  if (Sx === !1 && !wx)
    return mo(r);
  try {
    return mo(r);
  } catch {
    return !1;
  }
}
var _x = Tx;
const Ox = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ex = ku, Kt = le, Ax = ff, Ix = ax, xx = ux, Cx = _x, yo = Ox;
function Mx(r) {
  var e, t, n, a, i, s, o;
  if (a = [], Ax(r)) {
    for (o = 0; o < r.length; o++)
      a.push(o.toString());
    return a;
  }
  if (typeof r == "string") {
    if (r.length > 0 && !Kt(r, "0"))
      for (o = 0; o < r.length; o++)
        a.push(o.toString());
  } else {
    if (n = typeof r == "function", n === !1 && !Ex(r))
      return a;
    t = Ix && n;
  }
  for (i in r)
    !(t && i === "prototype") && Kt(r, i) && a.push(String(i));
  if (xx)
    for (e = Cx(r), o = 0; o < yo.length; o++)
      s = yo[o], !(e && s === "constructor") && Kt(r, s) && a.push(String(s));
  return a;
}
var Fx = Mx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nx = yI, kx = gI, Dx = Ea, Px = JI, Lx = Fx, Ke;
kx ? Nx() ? Ke = Px : Ke = Dx : Ke = Lx;
var Ux = Ke;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jx = Ux, vf = jx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Rx = typeof Object.getOwnPropertyNames < "u", Bx = Rx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vx = Object.getOwnPropertyNames;
function zx(r) {
  return Vx(Object(r));
}
var Gx = zx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hx = vf;
function Zx(r) {
  return Hx(Object(r));
}
var qx = Zx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wx = Bx, Yx = Gx, Jx = qx, On;
Wx ? On = Yx : On = Jx;
var Xx = On;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Kx = typeof Object.getOwnPropertyDescriptor < "u", Qx = Kx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var r3 = Object.getOwnPropertyDescriptor;
function e3(r, e) {
  var t;
  return r == null ? null : (t = r3(r, e), t === void 0 ? null : t);
}
var t3 = e3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n3 = le;
function a3(r, e) {
  return n3(r, e) ? {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r[e]
  } : null;
}
var i3 = a3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o3 = Qx, s3 = t3, u3 = i3, En;
o3 ? En = s3 : En = u3;
var f3 = En;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var l3 = typeof Buffer == "function" ? Buffer : null, c3 = l3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v3 = ke, Ze = c3;
function d3() {
  var r, e;
  if (typeof Ze != "function")
    return !1;
  try {
    typeof Ze.from == "function" ? e = Ze.from([1, 2, 3, 4]) : e = new Ze([1, 2, 3, 4]), r = v3(e) && e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4;
  } catch {
    r = !1;
  }
  return r;
}
var h3 = d3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var m3 = h3, y3 = m3, df = {}, Pt = {};
Pt.byteLength = $3;
Pt.toByteArray = w3;
Pt.fromByteArray = _3;
var hr = [], ar = [], p3 = typeof Uint8Array < "u" ? Uint8Array : Array, Qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Yr = 0, g3 = Qt.length; Yr < g3; ++Yr)
  hr[Yr] = Qt[Yr], ar[Qt.charCodeAt(Yr)] = Yr;
ar["-".charCodeAt(0)] = 62;
ar["_".charCodeAt(0)] = 63;
function hf(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = r.indexOf("=");
  t === -1 && (t = e);
  var n = t === e ? 0 : 4 - t % 4;
  return [t, n];
}
function $3(r) {
  var e = hf(r), t = e[0], n = e[1];
  return (t + n) * 3 / 4 - n;
}
function b3(r, e, t) {
  return (e + t) * 3 / 4 - t;
}
function w3(r) {
  var e, t = hf(r), n = t[0], a = t[1], i = new p3(b3(r, n, a)), s = 0, o = a > 0 ? n - 4 : n, l;
  for (l = 0; l < o; l += 4)
    e = ar[r.charCodeAt(l)] << 18 | ar[r.charCodeAt(l + 1)] << 12 | ar[r.charCodeAt(l + 2)] << 6 | ar[r.charCodeAt(l + 3)], i[s++] = e >> 16 & 255, i[s++] = e >> 8 & 255, i[s++] = e & 255;
  return a === 2 && (e = ar[r.charCodeAt(l)] << 2 | ar[r.charCodeAt(l + 1)] >> 4, i[s++] = e & 255), a === 1 && (e = ar[r.charCodeAt(l)] << 10 | ar[r.charCodeAt(l + 1)] << 4 | ar[r.charCodeAt(l + 2)] >> 2, i[s++] = e >> 8 & 255, i[s++] = e & 255), i;
}
function S3(r) {
  return hr[r >> 18 & 63] + hr[r >> 12 & 63] + hr[r >> 6 & 63] + hr[r & 63];
}
function T3(r, e, t) {
  for (var n, a = [], i = e; i < t; i += 3)
    n = (r[i] << 16 & 16711680) + (r[i + 1] << 8 & 65280) + (r[i + 2] & 255), a.push(S3(n));
  return a.join("");
}
function _3(r) {
  for (var e, t = r.length, n = t % 3, a = [], i = 16383, s = 0, o = t - n; s < o; s += i)
    a.push(T3(r, s, s + i > o ? o : s + i));
  return n === 1 ? (e = r[t - 1], a.push(
    hr[e >> 2] + hr[e << 4 & 63] + "=="
  )) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], a.push(
    hr[e >> 10] + hr[e >> 4 & 63] + hr[e << 2 & 63] + "="
  )), a.join("");
}
var Ia = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ia.read = function(r, e, t, n, a) {
  var i, s, o = a * 8 - n - 1, l = (1 << o) - 1, d = l >> 1, m = -7, h = t ? a - 1 : 0, p = t ? -1 : 1, g = r[e + h];
  for (h += p, i = g & (1 << -m) - 1, g >>= -m, m += o; m > 0; i = i * 256 + r[e + h], h += p, m -= 8)
    ;
  for (s = i & (1 << -m) - 1, i >>= -m, m += n; m > 0; s = s * 256 + r[e + h], h += p, m -= 8)
    ;
  if (i === 0)
    i = 1 - d;
  else {
    if (i === l)
      return s ? NaN : (g ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), i = i - d;
  }
  return (g ? -1 : 1) * s * Math.pow(2, i - n);
};
Ia.write = function(r, e, t, n, a, i) {
  var s, o, l, d = i * 8 - a - 1, m = (1 << d) - 1, h = m >> 1, p = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : i - 1, w = n ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, s = m) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + h >= 1 ? e += p / l : e += p * Math.pow(2, 1 - h), e * l >= 2 && (s++, l /= 2), s + h >= m ? (o = 0, s = m) : s + h >= 1 ? (o = (e * l - 1) * Math.pow(2, a), s = s + h) : (o = e * Math.pow(2, h - 1) * Math.pow(2, a), s = 0)); a >= 8; r[t + g] = o & 255, g += w, o /= 256, a -= 8)
    ;
  for (s = s << a | o, d += a; d > 0; r[t + g] = s & 255, g += w, s /= 256, d -= 8)
    ;
  r[t + g - w] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  var e = Pt, t = Ia, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = o, r.SlowBuffer = L, r.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  r.kMaxLength = a, o.TYPED_ARRAY_SUPPORT = i(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      var c = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(c, u), c.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(c) {
    if (c > a)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
    var u = new Uint8Array(c);
    return Object.setPrototypeOf(u, o.prototype), u;
  }
  function o(c, u, f) {
    if (typeof c == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return h(c);
    }
    return l(c, u, f);
  }
  o.poolSize = 8192;
  function l(c, u, f) {
    if (typeof c == "string")
      return p(c, u);
    if (ArrayBuffer.isView(c))
      return w(c);
    if (c == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
      );
    if (dr(c, ArrayBuffer) || c && dr(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (dr(c, SharedArrayBuffer) || c && dr(c.buffer, SharedArrayBuffer)))
      return _(c, u, f);
    if (typeof c == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var v = c.valueOf && c.valueOf();
    if (v != null && v !== c)
      return o.from(v, u, f);
    var y = O(c);
    if (y)
      return y;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function")
      return o.from(
        c[Symbol.toPrimitive]("string"),
        u,
        f
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
    );
  }
  o.from = function(c, u, f) {
    return l(c, u, f);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function d(c) {
    if (typeof c != "number")
      throw new TypeError('"size" argument must be of type number');
    if (c < 0)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
  }
  function m(c, u, f) {
    return d(c), c <= 0 ? s(c) : u !== void 0 ? typeof f == "string" ? s(c).fill(u, f) : s(c).fill(u) : s(c);
  }
  o.alloc = function(c, u, f) {
    return m(c, u, f);
  };
  function h(c) {
    return d(c), s(c < 0 ? 0 : T(c) | 0);
  }
  o.allocUnsafe = function(c) {
    return h(c);
  }, o.allocUnsafeSlow = function(c) {
    return h(c);
  };
  function p(c, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !o.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    var f = _r(c, u) | 0, v = s(f), y = v.write(c, u);
    return y !== f && (v = v.slice(0, y)), v;
  }
  function g(c) {
    for (var u = c.length < 0 ? 0 : T(c.length) | 0, f = s(u), v = 0; v < u; v += 1)
      f[v] = c[v] & 255;
    return f;
  }
  function w(c) {
    if (dr(c, Uint8Array)) {
      var u = new Uint8Array(c);
      return _(u.buffer, u.byteOffset, u.byteLength);
    }
    return g(c);
  }
  function _(c, u, f) {
    if (u < 0 || c.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (c.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var v;
    return u === void 0 && f === void 0 ? v = new Uint8Array(c) : f === void 0 ? v = new Uint8Array(c, u) : v = new Uint8Array(c, u, f), Object.setPrototypeOf(v, o.prototype), v;
  }
  function O(c) {
    if (o.isBuffer(c)) {
      var u = T(c.length) | 0, f = s(u);
      return f.length === 0 || c.copy(f, 0, 0, u), f;
    }
    if (c.length !== void 0)
      return typeof c.length != "number" || Ht(c.length) ? s(0) : g(c);
    if (c.type === "Buffer" && Array.isArray(c.data))
      return g(c.data);
  }
  function T(c) {
    if (c >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return c | 0;
  }
  function L(c) {
    return +c != c && (c = 0), o.alloc(+c);
  }
  o.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== o.prototype;
  }, o.compare = function(u, f) {
    if (dr(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), dr(f, Uint8Array) && (f = o.from(f, f.offset, f.byteLength)), !o.isBuffer(u) || !o.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    for (var v = u.length, y = f.length, $ = 0, b = Math.min(v, y); $ < b; ++$)
      if (u[$] !== f[$]) {
        v = u[$], y = f[$];
        break;
      }
    return v < y ? -1 : y < v ? 1 : 0;
  }, o.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return o.alloc(0);
    var v;
    if (f === void 0)
      for (f = 0, v = 0; v < u.length; ++v)
        f += u[v].length;
    var y = o.allocUnsafe(f), $ = 0;
    for (v = 0; v < u.length; ++v) {
      var b = u[v];
      if (dr(b, Uint8Array))
        $ + b.length > y.length ? o.from(b).copy(y, $) : Uint8Array.prototype.set.call(
          y,
          b,
          $
        );
      else if (o.isBuffer(b))
        b.copy(y, $);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      $ += b.length;
    }
    return y;
  };
  function _r(c, u) {
    if (o.isBuffer(c))
      return c.length;
    if (ArrayBuffer.isView(c) || dr(c, ArrayBuffer))
      return c.byteLength;
    if (typeof c != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c
      );
    var f = c.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && f === 0)
      return 0;
    for (var y = !1; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return Gt(c).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return ui(c).length;
        default:
          if (y)
            return v ? -1 : Gt(c).length;
          u = ("" + u).toLowerCase(), y = !0;
      }
  }
  o.byteLength = _r;
  function wr(c, u, f) {
    var v = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (c || (c = "utf8"); ; )
      switch (c) {
        case "hex":
          return dl(this, u, f);
        case "utf8":
        case "utf-8":
          return ni(this, u, f);
        case "ascii":
          return cl(this, u, f);
        case "latin1":
        case "binary":
          return vl(this, u, f);
        case "base64":
          return ye(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return hl(this, u, f);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + c);
          c = (c + "").toLowerCase(), v = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function G(c, u, f) {
    var v = c[u];
    c[u] = c[f], c[f] = v;
  }
  o.prototype.swap16 = function() {
    var u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var f = 0; f < u; f += 2)
      G(this, f, f + 1);
    return this;
  }, o.prototype.swap32 = function() {
    var u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var f = 0; f < u; f += 4)
      G(this, f, f + 3), G(this, f + 1, f + 2);
    return this;
  }, o.prototype.swap64 = function() {
    var u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var f = 0; f < u; f += 8)
      G(this, f, f + 7), G(this, f + 1, f + 6), G(this, f + 2, f + 5), G(this, f + 3, f + 4);
    return this;
  }, o.prototype.toString = function() {
    var u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? ni(this, 0, u) : wr.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(u) {
    if (!o.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : o.compare(this, u) === 0;
  }, o.prototype.inspect = function() {
    var u = "", f = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, n && (o.prototype[n] = o.prototype.inspect), o.prototype.compare = function(u, f, v, y, $) {
    if (dr(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), !o.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), v === void 0 && (v = u ? u.length : 0), y === void 0 && (y = 0), $ === void 0 && ($ = this.length), f < 0 || v > u.length || y < 0 || $ > this.length)
      throw new RangeError("out of range index");
    if (y >= $ && f >= v)
      return 0;
    if (y >= $)
      return -1;
    if (f >= v)
      return 1;
    if (f >>>= 0, v >>>= 0, y >>>= 0, $ >>>= 0, this === u)
      return 0;
    for (var b = $ - y, E = v - f, M = Math.min(b, E), k = this.slice(y, $), H = u.slice(f, v), P = 0; P < M; ++P)
      if (k[P] !== H[P]) {
        b = k[P], E = H[P];
        break;
      }
    return b < E ? -1 : E < b ? 1 : 0;
  };
  function Le(c, u, f, v, y) {
    if (c.length === 0)
      return -1;
    if (typeof f == "string" ? (v = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, Ht(f) && (f = y ? 0 : c.length - 1), f < 0 && (f = c.length + f), f >= c.length) {
      if (y)
        return -1;
      f = c.length - 1;
    } else if (f < 0)
      if (y)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = o.from(u, v)), o.isBuffer(u))
      return u.length === 0 ? -1 : Ue(c, u, f, v, y);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(c, u, f) : Uint8Array.prototype.lastIndexOf.call(c, u, f) : Ue(c, [u], f, v, y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ue(c, u, f, v, y) {
    var $ = 1, b = c.length, E = u.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (c.length < 2 || u.length < 2)
        return -1;
      $ = 2, b /= 2, E /= 2, f /= 2;
    }
    function M(fi, li) {
      return $ === 1 ? fi[li] : fi.readUInt16BE(li * $);
    }
    var k;
    if (y) {
      var H = -1;
      for (k = f; k < b; k++)
        if (M(c, k) === M(u, H === -1 ? 0 : k - H)) {
          if (H === -1 && (H = k), k - H + 1 === E)
            return H * $;
        } else
          H !== -1 && (k -= k - H), H = -1;
    } else
      for (f + E > b && (f = b - E), k = f; k >= 0; k--) {
        for (var P = !0, Ve = 0; Ve < E; Ve++)
          if (M(c, k + Ve) !== M(u, Ve)) {
            P = !1;
            break;
          }
        if (P)
          return k;
      }
    return -1;
  }
  o.prototype.includes = function(u, f, v) {
    return this.indexOf(u, f, v) !== -1;
  }, o.prototype.indexOf = function(u, f, v) {
    return Le(this, u, f, v, !0);
  }, o.prototype.lastIndexOf = function(u, f, v) {
    return Le(this, u, f, v, !1);
  };
  function je(c, u, f, v) {
    f = Number(f) || 0;
    var y = c.length - f;
    v ? (v = Number(v), v > y && (v = y)) : v = y;
    var $ = u.length;
    v > $ / 2 && (v = $ / 2);
    for (var b = 0; b < v; ++b) {
      var E = parseInt(u.substr(b * 2, 2), 16);
      if (Ht(E))
        return b;
      c[f + b] = E;
    }
    return b;
  }
  function Bt(c, u, f, v) {
    return Be(Gt(u, c.length - f), c, f, v);
  }
  function Re(c, u, f, v) {
    return Be(pl(u), c, f, v);
  }
  function Vt(c, u, f, v) {
    return Be(ui(u), c, f, v);
  }
  function zt(c, u, f, v) {
    return Be(gl(u, c.length - f), c, f, v);
  }
  o.prototype.write = function(u, f, v, y) {
    if (f === void 0)
      y = "utf8", v = this.length, f = 0;
    else if (v === void 0 && typeof f == "string")
      y = f, v = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(v) ? (v = v >>> 0, y === void 0 && (y = "utf8")) : (y = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var $ = this.length - f;
    if ((v === void 0 || v > $) && (v = $), u.length > 0 && (v < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    y || (y = "utf8");
    for (var b = !1; ; )
      switch (y) {
        case "hex":
          return je(this, u, f, v);
        case "utf8":
        case "utf-8":
          return Bt(this, u, f, v);
        case "ascii":
        case "latin1":
        case "binary":
          return Re(this, u, f, v);
        case "base64":
          return Vt(this, u, f, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return zt(this, u, f, v);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + y);
          y = ("" + y).toLowerCase(), b = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function ye(c, u, f) {
    return u === 0 && f === c.length ? e.fromByteArray(c) : e.fromByteArray(c.slice(u, f));
  }
  function ni(c, u, f) {
    f = Math.min(c.length, f);
    for (var v = [], y = u; y < f; ) {
      var $ = c[y], b = null, E = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
      if (y + E <= f) {
        var M, k, H, P;
        switch (E) {
          case 1:
            $ < 128 && (b = $);
            break;
          case 2:
            M = c[y + 1], (M & 192) === 128 && (P = ($ & 31) << 6 | M & 63, P > 127 && (b = P));
            break;
          case 3:
            M = c[y + 1], k = c[y + 2], (M & 192) === 128 && (k & 192) === 128 && (P = ($ & 15) << 12 | (M & 63) << 6 | k & 63, P > 2047 && (P < 55296 || P > 57343) && (b = P));
            break;
          case 4:
            M = c[y + 1], k = c[y + 2], H = c[y + 3], (M & 192) === 128 && (k & 192) === 128 && (H & 192) === 128 && (P = ($ & 15) << 18 | (M & 63) << 12 | (k & 63) << 6 | H & 63, P > 65535 && P < 1114112 && (b = P));
        }
      }
      b === null ? (b = 65533, E = 1) : b > 65535 && (b -= 65536, v.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), v.push(b), y += E;
    }
    return ll(v);
  }
  var ai = 4096;
  function ll(c) {
    var u = c.length;
    if (u <= ai)
      return String.fromCharCode.apply(String, c);
    for (var f = "", v = 0; v < u; )
      f += String.fromCharCode.apply(
        String,
        c.slice(v, v += ai)
      );
    return f;
  }
  function cl(c, u, f) {
    var v = "";
    f = Math.min(c.length, f);
    for (var y = u; y < f; ++y)
      v += String.fromCharCode(c[y] & 127);
    return v;
  }
  function vl(c, u, f) {
    var v = "";
    f = Math.min(c.length, f);
    for (var y = u; y < f; ++y)
      v += String.fromCharCode(c[y]);
    return v;
  }
  function dl(c, u, f) {
    var v = c.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > v) && (f = v);
    for (var y = "", $ = u; $ < f; ++$)
      y += $l[c[$]];
    return y;
  }
  function hl(c, u, f) {
    for (var v = c.slice(u, f), y = "", $ = 0; $ < v.length - 1; $ += 2)
      y += String.fromCharCode(v[$] + v[$ + 1] * 256);
    return y;
  }
  o.prototype.slice = function(u, f) {
    var v = this.length;
    u = ~~u, f = f === void 0 ? v : ~~f, u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), f < 0 ? (f += v, f < 0 && (f = 0)) : f > v && (f = v), f < u && (f = u);
    var y = this.subarray(u, f);
    return Object.setPrototypeOf(y, o.prototype), y;
  };
  function R(c, u, f) {
    if (c % 1 !== 0 || c < 0)
      throw new RangeError("offset is not uint");
    if (c + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(u, f, v) {
    u = u >>> 0, f = f >>> 0, v || R(u, f, this.length);
    for (var y = this[u], $ = 1, b = 0; ++b < f && ($ *= 256); )
      y += this[u + b] * $;
    return y;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(u, f, v) {
    u = u >>> 0, f = f >>> 0, v || R(u, f, this.length);
    for (var y = this[u + --f], $ = 1; f > 0 && ($ *= 256); )
      y += this[u + --f] * $;
    return y;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || R(u, 1, this.length), this[u];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || R(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || R(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, o.prototype.readIntLE = function(u, f, v) {
    u = u >>> 0, f = f >>> 0, v || R(u, f, this.length);
    for (var y = this[u], $ = 1, b = 0; ++b < f && ($ *= 256); )
      y += this[u + b] * $;
    return $ *= 128, y >= $ && (y -= Math.pow(2, 8 * f)), y;
  }, o.prototype.readIntBE = function(u, f, v) {
    u = u >>> 0, f = f >>> 0, v || R(u, f, this.length);
    for (var y = f, $ = 1, b = this[u + --y]; y > 0 && ($ *= 256); )
      b += this[u + --y] * $;
    return $ *= 128, b >= $ && (b -= Math.pow(2, 8 * f)), b;
  }, o.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || R(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, o.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || R(u, 2, this.length);
    var v = this[u] | this[u + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, o.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || R(u, 2, this.length);
    var v = this[u + 1] | this[u] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, o.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, o.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, o.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), t.read(this, u, !0, 23, 4);
  }, o.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || R(u, 4, this.length), t.read(this, u, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || R(u, 8, this.length), t.read(this, u, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || R(u, 8, this.length), t.read(this, u, !1, 52, 8);
  };
  function Q(c, u, f, v, y, $) {
    if (!o.isBuffer(c))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > y || u < $)
      throw new RangeError('"value" argument is out of bounds');
    if (f + v > c.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(u, f, v, y) {
    if (u = +u, f = f >>> 0, v = v >>> 0, !y) {
      var $ = Math.pow(2, 8 * v) - 1;
      Q(this, u, f, v, $, 0);
    }
    var b = 1, E = 0;
    for (this[f] = u & 255; ++E < v && (b *= 256); )
      this[f + E] = u / b & 255;
    return f + v;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(u, f, v, y) {
    if (u = +u, f = f >>> 0, v = v >>> 0, !y) {
      var $ = Math.pow(2, 8 * v) - 1;
      Q(this, u, f, v, $, 0);
    }
    var b = v - 1, E = 1;
    for (this[f + b] = u & 255; --b >= 0 && (E *= 256); )
      this[f + b] = u / E & 255;
    return f + v;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, o.prototype.writeIntLE = function(u, f, v, y) {
    if (u = +u, f = f >>> 0, !y) {
      var $ = Math.pow(2, 8 * v - 1);
      Q(this, u, f, v, $ - 1, -$);
    }
    var b = 0, E = 1, M = 0;
    for (this[f] = u & 255; ++b < v && (E *= 256); )
      u < 0 && M === 0 && this[f + b - 1] !== 0 && (M = 1), this[f + b] = (u / E >> 0) - M & 255;
    return f + v;
  }, o.prototype.writeIntBE = function(u, f, v, y) {
    if (u = +u, f = f >>> 0, !y) {
      var $ = Math.pow(2, 8 * v - 1);
      Q(this, u, f, v, $ - 1, -$);
    }
    var b = v - 1, E = 1, M = 0;
    for (this[f + b] = u & 255; --b >= 0 && (E *= 256); )
      u < 0 && M === 0 && this[f + b + 1] !== 0 && (M = 1), this[f + b] = (u / E >> 0) - M & 255;
    return f + v;
  }, o.prototype.writeInt8 = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, o.prototype.writeInt16LE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, o.prototype.writeInt16BE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, o.prototype.writeInt32LE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, o.prototype.writeInt32BE = function(u, f, v) {
    return u = +u, f = f >>> 0, v || Q(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function ii(c, u, f, v, y, $) {
    if (f + v > c.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function oi(c, u, f, v, y) {
    return u = +u, f = f >>> 0, y || ii(c, u, f, 4), t.write(c, u, f, v, 23, 4), f + 4;
  }
  o.prototype.writeFloatLE = function(u, f, v) {
    return oi(this, u, f, !0, v);
  }, o.prototype.writeFloatBE = function(u, f, v) {
    return oi(this, u, f, !1, v);
  };
  function si(c, u, f, v, y) {
    return u = +u, f = f >>> 0, y || ii(c, u, f, 8), t.write(c, u, f, v, 52, 8), f + 8;
  }
  o.prototype.writeDoubleLE = function(u, f, v) {
    return si(this, u, f, !0, v);
  }, o.prototype.writeDoubleBE = function(u, f, v) {
    return si(this, u, f, !1, v);
  }, o.prototype.copy = function(u, f, v, y) {
    if (!o.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !y && y !== 0 && (y = this.length), f >= u.length && (f = u.length), f || (f = 0), y > 0 && y < v && (y = v), y === v || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length)
      throw new RangeError("Index out of range");
    if (y < 0)
      throw new RangeError("sourceEnd out of bounds");
    y > this.length && (y = this.length), u.length - f < y - v && (y = u.length - f + v);
    var $ = y - v;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, v, y) : Uint8Array.prototype.set.call(
      u,
      this.subarray(v, y),
      f
    ), $;
  }, o.prototype.fill = function(u, f, v, y) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (y = f, f = 0, v = this.length) : typeof v == "string" && (y = v, v = this.length), y !== void 0 && typeof y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof y == "string" && !o.isEncoding(y))
        throw new TypeError("Unknown encoding: " + y);
      if (u.length === 1) {
        var $ = u.charCodeAt(0);
        (y === "utf8" && $ < 128 || y === "latin1") && (u = $);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= f)
      return this;
    f = f >>> 0, v = v === void 0 ? this.length : v >>> 0, u || (u = 0);
    var b;
    if (typeof u == "number")
      for (b = f; b < v; ++b)
        this[b] = u;
    else {
      var E = o.isBuffer(u) ? u : o.from(u, y), M = E.length;
      if (M === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (b = 0; b < v - f; ++b)
        this[b + f] = E[b % M];
    }
    return this;
  };
  var ml = /[^+/0-9A-Za-z-_]/g;
  function yl(c) {
    if (c = c.split("=")[0], c = c.trim().replace(ml, ""), c.length < 2)
      return "";
    for (; c.length % 4 !== 0; )
      c = c + "=";
    return c;
  }
  function Gt(c, u) {
    u = u || 1 / 0;
    for (var f, v = c.length, y = null, $ = [], b = 0; b < v; ++b) {
      if (f = c.charCodeAt(b), f > 55295 && f < 57344) {
        if (!y) {
          if (f > 56319) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          } else if (b + 1 === v) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          }
          y = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && $.push(239, 191, 189), y = f;
          continue;
        }
        f = (y - 55296 << 10 | f - 56320) + 65536;
      } else
        y && (u -= 3) > -1 && $.push(239, 191, 189);
      if (y = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        $.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        $.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        $.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        $.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return $;
  }
  function pl(c) {
    for (var u = [], f = 0; f < c.length; ++f)
      u.push(c.charCodeAt(f) & 255);
    return u;
  }
  function gl(c, u) {
    for (var f, v, y, $ = [], b = 0; b < c.length && !((u -= 2) < 0); ++b)
      f = c.charCodeAt(b), v = f >> 8, y = f % 256, $.push(y), $.push(v);
    return $;
  }
  function ui(c) {
    return e.toByteArray(yl(c));
  }
  function Be(c, u, f, v) {
    for (var y = 0; y < v && !(y + f >= u.length || y >= c.length); ++y)
      u[y + f] = c[y];
    return y;
  }
  function dr(c, u) {
    return c instanceof u || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === u.name;
  }
  function Ht(c) {
    return c !== c;
  }
  var $l = function() {
    for (var c = "0123456789abcdef", u = new Array(256), f = 0; f < 16; ++f)
      for (var v = f * 16, y = 0; y < 16; ++y)
        u[v + y] = c[f] + c[y];
    return u;
  }();
})(df);
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O3 = df.Buffer, E3 = O3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function A3() {
  throw new Error("not implemented");
}
var I3 = A3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x3 = y3, C3 = E3, M3 = I3, An;
x3() ? An = C3 : An = M3;
var xa = An;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F3 = Bu, N3 = xa, k3 = F3(N3.from), D3 = k3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P3 = ke, L3 = xa;
function U3(r) {
  if (!P3(r))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + r + "`");
  return L3.from(r);
}
var j3 = U3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R3 = ke, B3 = xa;
function V3(r) {
  if (!R3(r))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + r + "`");
  return new B3(r);
}
var z3 = V3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var G3 = D3, H3 = j3, Z3 = z3, In;
G3 ? In = H3 : In = Z3;
var q3 = In;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W3 = z, Y3 = typeof Int8Array == "function";
function J3(r) {
  return Y3 && r instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  W3(r) === "[object Int8Array]";
}
var X3 = J3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K3 = X3, Q3 = K3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var r6 = 127, e6 = r6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var t6 = -128, n6 = t6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a6 = typeof Int8Array == "function" ? Int8Array : null, i6 = a6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o6 = Q3, s6 = e6, u6 = n6, po = i6;
function f6() {
  var r, e;
  if (typeof po != "function")
    return !1;
  try {
    e = new po([1, 3.14, -3.14, s6 + 1]), r = o6(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === u6;
  } catch {
    r = !1;
  }
  return r;
}
var l6 = f6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var c6 = l6, v6 = c6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d6 = typeof Int8Array == "function" ? Int8Array : void 0, h6 = d6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function m6() {
  throw new Error("not implemented");
}
var y6 = m6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var p6 = v6, g6 = h6, $6 = y6, xn;
p6() ? xn = g6 : xn = $6;
var b6 = xn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var w6 = z, S6 = typeof Uint8Array == "function";
function T6(r) {
  return S6 && r instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  w6(r) === "[object Uint8Array]";
}
var _6 = T6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O6 = _6, E6 = O6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A6 = 255, I6 = A6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x6 = typeof Uint8Array == "function" ? Uint8Array : null, C6 = x6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var M6 = E6, rn = I6, go = C6;
function F6() {
  var r, e;
  if (typeof go != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, rn + 1, rn + 2], e = new go(e), r = M6(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === rn - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var N6 = F6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var k6 = N6, D6 = k6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P6 = typeof Uint8Array == "function" ? Uint8Array : void 0, L6 = P6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function U6() {
  throw new Error("not implemented");
}
var j6 = U6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R6 = D6, B6 = L6, V6 = j6, Cn;
R6() ? Cn = B6 : Cn = V6;
var z6 = Cn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var G6 = z, H6 = typeof Uint8ClampedArray == "function";
function Z6(r) {
  return H6 && r instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  G6(r) === "[object Uint8ClampedArray]";
}
var q6 = Z6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W6 = q6, Y6 = W6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var J6 = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null, X6 = J6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K6 = Y6, $o = X6;
function Q6() {
  var r, e;
  if (typeof $o != "function")
    return !1;
  try {
    e = new $o([-1, 0, 1, 3.14, 4.99, 255, 256]), r = K6(e) && e[0] === 0 && // clamped
    e[1] === 0 && e[2] === 1 && e[3] === 3 && // round to nearest
    e[4] === 5 && // round to nearest
    e[5] === 255 && e[6] === 255;
  } catch {
    r = !1;
  }
  return r;
}
var rC = Q6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eC = rC, tC = eC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nC = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0, aC = nC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function iC() {
  throw new Error("not implemented");
}
var oC = iC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sC = tC, uC = aC, fC = oC, Mn;
sC() ? Mn = uC : Mn = fC;
var lC = Mn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cC = z, vC = typeof Int16Array == "function";
function dC(r) {
  return vC && r instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  cC(r) === "[object Int16Array]";
}
var hC = dC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mC = hC, yC = mC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pC = 32767, gC = pC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $C = -32768, bC = $C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wC = typeof Int16Array == "function" ? Int16Array : null, SC = wC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TC = yC, _C = gC, OC = bC, bo = SC;
function EC() {
  var r, e;
  if (typeof bo != "function")
    return !1;
  try {
    e = new bo([1, 3.14, -3.14, _C + 1]), r = TC(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === OC;
  } catch {
    r = !1;
  }
  return r;
}
var AC = EC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IC = AC, xC = IC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CC = typeof Int16Array == "function" ? Int16Array : void 0, MC = CC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function FC() {
  throw new Error("not implemented");
}
var NC = FC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kC = xC, DC = MC, PC = NC, Fn;
kC() ? Fn = DC : Fn = PC;
var LC = Fn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UC = z, jC = typeof Uint16Array == "function";
function RC(r) {
  return jC && r instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  UC(r) === "[object Uint16Array]";
}
var BC = RC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VC = BC, zC = VC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GC = 65535, HC = GC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZC = typeof Uint16Array == "function" ? Uint16Array : null, qC = ZC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WC = zC, en = HC, wo = qC;
function YC() {
  var r, e;
  if (typeof wo != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, en + 1, en + 2], e = new wo(e), r = WC(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === en - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var JC = YC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XC = JC, KC = XC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var QC = typeof Uint16Array == "function" ? Uint16Array : void 0, r4 = QC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function e4() {
  throw new Error("not implemented");
}
var t4 = e4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n4 = KC, a4 = r4, i4 = t4, Nn;
n4() ? Nn = a4 : Nn = i4;
var o4 = Nn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s4 = z, u4 = typeof Int32Array == "function";
function f4(r) {
  return u4 && r instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  s4(r) === "[object Int32Array]";
}
var l4 = f4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var c4 = l4, v4 = c4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d4 = 2147483647, h4 = d4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var m4 = -2147483648, y4 = m4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var p4 = typeof Int32Array == "function" ? Int32Array : null, g4 = p4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $4 = v4, b4 = h4, w4 = y4, So = g4;
function S4() {
  var r, e;
  if (typeof So != "function")
    return !1;
  try {
    e = new So([1, 3.14, -3.14, b4 + 1]), r = $4(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === w4;
  } catch {
    r = !1;
  }
  return r;
}
var T4 = S4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _4 = T4, O4 = _4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E4 = typeof Int32Array == "function" ? Int32Array : void 0, A4 = E4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function I4() {
  throw new Error("not implemented");
}
var x4 = I4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var C4 = O4, M4 = A4, F4 = x4, kn;
C4() ? kn = M4 : kn = F4;
var N4 = kn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var k4 = z, D4 = typeof Uint32Array == "function";
function P4(r) {
  return D4 && r instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  k4(r) === "[object Uint32Array]";
}
var L4 = P4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U4 = L4, j4 = U4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R4 = typeof Uint32Array == "function" ? Uint32Array : null, B4 = R4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var V4 = j4, tn = uf, To = B4;
function z4() {
  var r, e;
  if (typeof To != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, tn + 1, tn + 2], e = new To(e), r = V4(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === tn - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var G4 = z4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H4 = G4, Z4 = H4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var q4 = typeof Uint32Array == "function" ? Uint32Array : void 0, W4 = q4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Y4() {
  throw new Error("not implemented");
}
var J4 = Y4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var X4 = Z4, K4 = W4, Q4 = J4, Dn;
X4() ? Dn = K4 : Dn = Q4;
var rM = Dn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eM = z, tM = typeof Float32Array == "function";
function nM(r) {
  return tM && r instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  eM(r) === "[object Float32Array]";
}
var aM = nM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iM = aM, oM = iM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sM = typeof Float32Array == "function" ? Float32Array : null, uM = sM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fM = oM, lM = ya, _o = uM;
function cM() {
  var r, e;
  if (typeof _o != "function")
    return !1;
  try {
    e = new _o([1, 3.14, -3.14, 5e40]), r = fM(e) && e[0] === 1 && e[1] === 3.140000104904175 && e[2] === -3.140000104904175 && e[3] === lM;
  } catch {
    r = !1;
  }
  return r;
}
var vM = cM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dM = vM, hM = dM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mM = typeof Float32Array == "function" ? Float32Array : void 0, yM = mM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function pM() {
  throw new Error("not implemented");
}
var gM = pM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $M = hM, bM = yM, wM = gM, Pn;
$M() ? Pn = bM : Pn = wM;
var SM = Pn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TM = z, _M = typeof Float64Array == "function";
function OM(r) {
  return _M && r instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  TM(r) === "[object Float64Array]";
}
var EM = OM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var AM = EM, IM = AM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xM = typeof Float64Array == "function" ? Float64Array : null, CM = xM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MM = IM, Oo = CM;
function FM() {
  var r, e;
  if (typeof Oo != "function")
    return !1;
  try {
    e = new Oo([1, 3.14, -3.14, NaN]), r = MM(e) && e[0] === 1 && e[1] === 3.14 && e[2] === -3.14 && e[3] !== e[3];
  } catch {
    r = !1;
  }
  return r;
}
var NM = FM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kM = NM, DM = kM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PM = typeof Float64Array == "function" ? Float64Array : void 0, LM = PM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function UM() {
  throw new Error("not implemented");
}
var jM = UM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RM = DM, BM = LM, VM = jM, Ln;
RM() ? Ln = BM : Ln = VM;
var zM = Ln;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GM = b6, HM = z6, ZM = lC, qM = LC, WM = o4, YM = N4, JM = rM, XM = SM, KM = zM, mf;
function QM(r) {
  return new GM(r);
}
function rF(r) {
  return new HM(r);
}
function eF(r) {
  return new ZM(r);
}
function tF(r) {
  return new qM(r);
}
function nF(r) {
  return new WM(r);
}
function aF(r) {
  return new YM(r);
}
function iF(r) {
  return new JM(r);
}
function oF(r) {
  return new XM(r);
}
function sF(r) {
  return new KM(r);
}
function uF() {
  var r = {
    int8array: QM,
    uint8array: rF,
    uint8clampedarray: eF,
    int16array: tF,
    uint16array: nF,
    int32array: aF,
    uint32array: iF,
    float32array: oF,
    float64array: sF
  };
  return r;
}
mf = uF();
var fF = mf;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var it = le, Ca = Nt, Eo = ke, lF = cE, Ao = Sa, cF = PA, vF = tf, yf = vf, dF = Xx, Ee = f3, hF = Vu, Ae = Tu, mF = q3, yF = fF;
function pF(r) {
  var e, t, n, a, i, s, o, l;
  for (e = [], a = [], o = Object.create(hF(r)), e.push(r), a.push(o), t = dF(r), l = 0; l < t.length; l++)
    n = t[l], i = Ee(r, n), it(i, "value") && (s = Ca(r[n]) ? [] : {}, i.value = Ur(r[n], s, e, a, -1)), Ae(o, n, i);
  return Object.isExtensible(r) || Object.preventExtensions(o), Object.isSealed(r) && Object.seal(o), Object.isFrozen(r) && Object.freeze(o), o;
}
function gF(r) {
  var e = [], t = [], n, a, i, s, o, l;
  for (o = new r.constructor(r.message), e.push(r), t.push(o), r.stack && (o.stack = r.stack), r.code && (o.code = r.code), r.errno && (o.errno = r.errno), r.syscall && (o.syscall = r.syscall), n = yf(r), l = 0; l < n.length; l++)
    s = n[l], a = Ee(r, s), it(a, "value") && (i = Ca(r[s]) ? [] : {}, a.value = Ur(r[s], i, e, t, -1)), Ae(o, s, a);
  return o;
}
function Ur(r, e, t, n, a) {
  var i, s, o, l, d, m, h, p, g, w;
  if (a -= 1, typeof r != "object" || r === null)
    return r;
  if (Eo(r))
    return mF(r);
  if (lF(r))
    return gF(r);
  if (o = Ao(r), o === "date")
    return /* @__PURE__ */ new Date(+r);
  if (o === "regexp")
    return cF(r.toString());
  if (o === "set")
    return new Set(r);
  if (o === "map")
    return new Map(r);
  if (o === "string" || o === "boolean" || o === "number")
    return r.valueOf();
  if (d = yF[o], d)
    return d(r);
  if (o !== "array" && o !== "object")
    return typeof Object.freeze == "function" ? pF(r) : {};
  if (s = yf(r), a > 0)
    for (i = o, w = 0; w < s.length; w++) {
      if (m = s[w], p = r[m], o = Ao(p), typeof p != "object" || p === null || o !== "array" && o !== "object" || Eo(p)) {
        i === "object" ? (l = Ee(r, m), it(l, "value") && (l.value = Ur(p)), Ae(e, m, l)) : e[m] = Ur(p);
        continue;
      }
      if (g = vF(t, p), g !== -1) {
        e[m] = n[g];
        continue;
      }
      h = Ca(p) ? new Array(p.length) : {}, t.push(p), n.push(h), i === "array" ? e[m] = Ur(p, h, t, n, a) : (l = Ee(r, m), it(l, "value") && (l.value = Ur(p, h, t, n, a)), Ae(e, m, l));
    }
  else if (o === "array")
    for (w = 0; w < s.length; w++)
      m = s[w], e[m] = r[m];
  else
    for (w = 0; w < s.length; w++)
      m = s[w], l = Ee(r, m), Ae(e, m, l);
  return Object.isExtensible(r) || Object.preventExtensions(e), Object.isSealed(r) && Object.seal(e), Object.isFrozen(r) && Object.freeze(e), e;
}
var $F = Ur;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bF = Nt, wF = v_.isPrimitive, SF = ya, TF = $F;
function _F(r, e) {
  var t;
  if (arguments.length > 1) {
    if (!wF(e))
      throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `" + e + "`.");
    if (e === 0)
      return r;
  } else
    e = SF;
  return t = bF(r) ? new Array(r.length) : {}, TF(r, t, [r], [t], e);
}
var OF = _F;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var EF = OF, AF = EF;
const IF = sS, xF = vu, pf = dS, CF = AF, J = {};
J.serialize = function(e) {
  try {
    return {
      id: e.id,
      status: e.statusCode,
      code: e.code || e.errorType,
      title: e.name,
      detail: e.message,
      meta: {
        context: e.context,
        help: e.help,
        errorDetails: e.errorDetails,
        level: e.level,
        errorType: e.errorType
      }
    };
  } catch {
    return {
      detail: "Something went wrong."
    };
  }
};
J.deserialize = function(e) {
  return {
    id: e.id,
    message: e.detail || e.error_description || e.message,
    statusCode: e.status,
    code: e.code || e.error,
    level: e.meta && e.meta.level,
    help: e.meta && e.meta.help,
    context: e.meta && e.meta.context
  };
};
J.OAuthSerialize = function(e) {
  const t = {};
  return t[this.NoPermissionError.name] = "access_denied", t[this.MaintenanceError.name] = "temporarily_unavailable", t[this.BadRequestError.name] = t[this.ValidationError.name] = "invalid_request", t.default = "server_error", xF({
    error: e.code || t[e.name] || "server_error",
    error_description: e.message
  }, IF(J.serialize(e), ["detail", "code"]));
};
J.OAuthDeserialize = function(e) {
  try {
    return new this[e.title || e.name || this.InternalServerError.name](J.deserialize(e));
  } catch {
    return new this.InternalServerError(pf({
      errorType: e.title || e.name
    }, J.deserialize(e)));
  }
};
J.JSONAPISerialize = function(e) {
  const t = {
    errors: [J.serialize(e)]
  };
  return t.errors[0].source = {}, e.property && (t.errors[0].source.pointer = "/data/attributes/" + e.property), t;
};
J.JSONAPIDeserialize = function(e) {
  e = e.errors && e.errors[0] || {};
  let t;
  try {
    t = new this[e.title || e.name || this.InternalServerError.name](J.deserialize(e));
  } catch {
    t = new this.InternalServerError(pf({
      errorType: e.title || e.name
    }, J.deserialize(e)));
  }
  return e.source && e.source.pointer && (t.property = e.source.pointer.split("/")[3]), t;
};
ue.wrapStack = function(e, t) {
  const n = e.stack.split(/\n/g)[1], [a, ...i] = t.stack.split(/\n/g);
  return [a, n, ...i].join(`
`);
};
ue.serialize = function(e, t) {
  t = t || { format: "jsonapi" };
  let n = {};
  try {
    t.format === "jsonapi" ? n = J.JSONAPISerialize.bind(this)(e) : n = J.OAuthSerialize.bind(this)(e);
  } catch {
    n.message = "Something went wrong.";
  }
  return n;
};
ue.deserialize = function(e) {
  let t = {};
  return e.errors ? t = J.JSONAPIDeserialize.bind(this)(e) : t = J.OAuthDeserialize.bind(this)(e), t;
};
ue.prepareStackForUser = function(e) {
  let t = e.stack.split(/\n/);
  t.splice(1, t.length - 1), e.help && t.splice(1, 0, `${e.help}`), e.context && t.splice(1, 0, `${e.context}`);
  const n = CF(e);
  return n.stack = t.join(`
`), n;
};
ue.isGhostError = function(e) {
  const t = this.GhostError.name, n = "IgnitionError";
  return function i(s) {
    return !s || !s.name ? !1 : s.name === t || s.name === n ? !0 : i(Object.getPrototypeOf(s));
  }(e.constructor);
};
const MF = Us, C = vu, FF = Hg, Te = ue;
class x extends Error {
  constructor(e = {}) {
    super(), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = MF.v1(), this.id = e.id || this.id, this.statusCode = e.statusCode || this.statusCode, this.level = e.level || this.level, this.context = e.context || this.context, this.help = e.help || this.help, this.errorType = this.name = e.errorType || this.errorType, this.errorDetails = e.errorDetails, this.code = e.code || null, this.property = e.property || null, this.redirect = e.redirect || null, this.message = e.message || this.message, this.hideStack = e.hideStack || !1, e.err && (FF(e.err) && (e.err = new Error(e.err)), Object.getOwnPropertyNames(e.err).forEach((t) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(t) === -1) {
        if (t === "code") {
          this[t] = this[t] || e.err[t];
          return;
        }
        if (t === "stack" && !this.hideStack) {
          this[t] = Te.wrapStack(this, e.err);
          return;
        }
        this[t] = e.err[t] || this[t];
      }
    }));
  }
}
const gf = {
  InternalServerError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 500,
        level: "critical",
        errorType: "InternalServerError",
        message: "The server has encountered an error."
      }, e));
    }
  },
  IncorrectUsageError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 400,
        level: "critical",
        errorType: "IncorrectUsageError",
        message: "We detected a misuse. Please read the stack trace."
      }, e));
    }
  },
  NotFoundError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 404,
        errorType: "NotFoundError",
        message: "Resource could not be found.",
        hideStack: !0
      }, e));
    }
  },
  BadRequestError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 400,
        errorType: "BadRequestError",
        message: "The request could not be understood."
      }, e));
    }
  },
  UnauthorizedError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 401,
        errorType: "UnauthorizedError",
        message: "You are not authorised to make this request."
      }, e));
    }
  },
  NoPermissionError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 403,
        errorType: "NoPermissionError",
        message: "You do not have permission to perform this request."
      }, e));
    }
  },
  ValidationError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 422,
        errorType: "ValidationError",
        message: "The request failed validation."
      }, e));
    }
  },
  UnsupportedMediaTypeError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 415,
        errorType: "UnsupportedMediaTypeError",
        message: "The media in the request is not supported by the server."
      }, e));
    }
  },
  TooManyRequestsError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 429,
        errorType: "TooManyRequestsError",
        message: "Server has received too many similar requests in a short space of time."
      }, e));
    }
  },
  MaintenanceError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 503,
        errorType: "MaintenanceError",
        message: "The server is temporarily down for maintenance."
      }, e));
    }
  },
  MethodNotAllowedError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 405,
        errorType: "MethodNotAllowedError",
        message: "Method not allowed for resource."
      }, e));
    }
  },
  RequestNotAcceptableError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 406,
        errorType: "RequestNotAcceptableError",
        message: "Request not acceptable for provided Accept-Version header.",
        hideStack: !0
      }, e));
    }
  },
  RequestEntityTooLargeError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 413,
        errorType: "RequestEntityTooLargeError",
        message: "Request was too big for the server to handle."
      }, e));
    }
  },
  TokenRevocationError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 503,
        errorType: "TokenRevocationError",
        message: "Token is no longer available."
      }, e));
    }
  },
  VersionMismatchError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 400,
        errorType: "VersionMismatchError",
        message: "Requested version does not match server version."
      }, e));
    }
  },
  DataExportError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 500,
        errorType: "DataExportError",
        message: "The server encountered an error whilst exporting data."
      }, e));
    }
  },
  DataImportError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 500,
        errorType: "DataImportError",
        message: "The server encountered an error whilst importing data."
      }, e));
    }
  },
  EmailError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 500,
        errorType: "EmailError",
        message: "The server encountered an error whilst sending email."
      }, e));
    }
  },
  ThemeValidationError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 422,
        errorType: "ThemeValidationError",
        message: "The theme has a validation error.",
        errorDetails: {}
      }, e));
    }
  },
  DisabledFeatureError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 409,
        errorType: "DisabledFeatureError",
        message: "Unable to complete the request, this feature is disabled."
      }, e));
    }
  },
  UpdateCollisionError: class extends x {
    constructor(e) {
      super(C({
        statusCode: 409,
        errorType: "UpdateCollisionError",
        message: "Unable to complete the request, there was a conflict."
      }, e));
    }
  },
  HostLimitError: class extends x {
    constructor(e) {
      super(C({
        errorType: "HostLimitError",
        hideStack: !0,
        statusCode: 403,
        message: "Unable to complete the request, this resource is limited."
      }, e));
    }
  },
  HelperWarning: class extends x {
    constructor(e) {
      super(C({
        errorType: "HelperWarning",
        hideStack: !0,
        statusCode: 400,
        message: "A theme helper has done something unexpected."
      }, e));
    }
  },
  PasswordResetRequiredError: class extends x {
    constructor(e) {
      super(C({
        errorType: "PasswordResetRequiredError",
        statusCode: 401,
        message: "For security, you need to create a new password. An email has been sent to you with instructions!"
      }, e));
    }
  },
  UnhandledJobError: class extends x {
    constructor(e) {
      super(C({
        errorType: "UnhandledJobError",
        message: "Processed job threw an unhandled error",
        level: "critical"
      }, e));
    }
  },
  NoContentError: class extends x {
    constructor(e) {
      super(C({
        errorType: "NoContentError",
        statusCode: 204,
        hideStack: !0
      }, e));
    }
  },
  ConflictError: class extends x {
    constructor(e) {
      super(C({
        errorType: "ConflictError",
        statusCode: 409,
        message: "The server has encountered an conflict."
      }, e));
    }
  },
  MigrationError: class extends x {
    constructor(e) {
      super(C({
        errorType: "MigrationError",
        message: "An error has occurred applying a database migration.",
        level: "critical"
      }, e));
    }
  }
};
ea.exports = gf;
const nn = Object.assign({}, gf, { GhostError: x });
ea.exports.utils = {
  serialize: Te.serialize.bind(nn),
  deserialize: Te.deserialize.bind(nn),
  isGhostError: Te.isGhostError.bind(nn),
  prepareStackForUser: Te.prepareStackForUser
};
var NF = ea.exports, $f = NF, kF = Ns, DF = kF(function(r, e, t) {
  return r + (t ? " " : "") + e.toLowerCase();
}), PF = DF, LF = Fr, UF = la, jF = Gr, RF = UF(function(r, e, t, n) {
  LF(e, jF(e), r, n);
}), BF = RF, VF = xr, zF = br, GF = sa, HF = "[object DOMException]", ZF = "[object Error]";
function qF(r) {
  if (!zF(r))
    return !1;
  var e = VF(r);
  return e == ZF || e == HF || typeof r.message == "string" && typeof r.name == "string" && !GF(r);
}
var bf = qF, WF = su, YF = lu, JF = bf, XF = YF(function(r, e) {
  try {
    return WF(r, void 0, e);
  } catch (t) {
    return JF(t) ? t : new Error(t);
  }
}), KF = XF, QF = qn;
function rN(r, e) {
  return QF(e, function(t) {
    return r[t];
  });
}
var eN = rN, tN = Fe, wf = Object.prototype, nN = wf.hasOwnProperty;
function aN(r, e, t, n) {
  return r === void 0 || tN(r, wf[t]) && !nN.call(n, t) ? e : r;
}
var iN = aN, oN = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function sN(r) {
  return "\\" + oN[r];
}
var uN = sN, fN = /<%=([\s\S]+?)%>/g, Sf = fN, lN = $s, cN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, vN = lN(cN), dN = vN, hN = dN, mN = Br, Tf = /[&<>"']/g, yN = RegExp(Tf.source);
function pN(r) {
  return r = mN(r), r && yN.test(r) ? r.replace(Tf, hN) : r;
}
var gN = pN, $N = /<%-([\s\S]+?)%>/g, bN = $N, wN = /<%([\s\S]+?)%>/g, SN = wN, TN = gN, _N = bN, ON = SN, EN = Sf, AN = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: _N,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: ON,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: EN,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: TN }
  }
}, IN = AN, Io = BF, xN = KF, CN = eN, xo = iN, MN = uN, FN = bf, NN = cu, kN = Mt, DN = Sf, Co = IN, PN = Br, LN = "Invalid `variable` option passed into `_.template`", UN = /\b__p \+= '';/g, jN = /\b(__p \+=) '' \+/g, RN = /(__e\(.*?\)|\b__t\)) \+\n'';/g, BN = /[()=,{}\[\]\/\s]/, VN = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, qe = /($^)/, zN = /['\n\r\u2028\u2029\\]/g, GN = Object.prototype, Mo = GN.hasOwnProperty;
function HN(r, e, t) {
  var n = Co.imports._.templateSettings || Co;
  t && NN(r, e, t) && (e = void 0), r = PN(r), e = Io({}, e, n, xo);
  var a = Io({}, e.imports, n.imports, xo), i = kN(a), s = CN(a, i), o, l, d = 0, m = e.interpolate || qe, h = "__p += '", p = RegExp(
    (e.escape || qe).source + "|" + m.source + "|" + (m === DN ? VN : qe).source + "|" + (e.evaluate || qe).source + "|$",
    "g"
  ), g = Mo.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  r.replace(p, function(O, T, L, _r, wr, G) {
    return L || (L = _r), h += r.slice(d, G).replace(zN, MN), T && (o = !0, h += `' +
__e(` + T + `) +
'`), wr && (l = !0, h += `';
` + wr + `;
__p += '`), L && (h += `' +
((__t = (` + L + `)) == null ? '' : __t) +
'`), d = G + O.length, O;
  }), h += `';
`;
  var w = Mo.call(e, "variable") && e.variable;
  if (!w)
    h = `with (obj) {
` + h + `
}
`;
  else if (BN.test(w))
    throw new Error(LN);
  h = (l ? h.replace(UN, "") : h).replace(jN, "$1").replace(RN, "$1;"), h = "function(" + (w || "obj") + `) {
` + (w ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + h + `return __p
}`;
  var _ = xN(function() {
    return Function(i, g + "return " + h).apply(void 0, s);
  });
  if (_.source = h, FN(_))
    throw _;
  return _;
}
var ZN = HN, tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
function Fo(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function cr(r, e, t) {
  return e && Fo(r.prototype, e), t && Fo(r, t), r;
}
function sr(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
function Un(r) {
  return Un = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Un(r);
}
function ot(r, e) {
  return ot = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ot(r, e);
}
function qN() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qe(r, e, t) {
  return qN() ? Qe = Reflect.construct : Qe = function(a, i, s) {
    var o = [null];
    o.push.apply(o, i);
    var l = Function.bind.apply(a, o), d = new l();
    return s && ot(d, s.prototype), d;
  }, Qe.apply(null, arguments);
}
function WN(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function jn(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return jn = function(n) {
    if (n === null || !WN(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, a);
    }
    function a() {
      return Qe(n, arguments, Un(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ot(a, n);
  }, jn(r);
}
function YN(r, e) {
  if (r == null)
    return {};
  var t = {}, n = Object.keys(r), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function JN(r, e) {
  if (r) {
    if (typeof r == "string")
      return No(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(t);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return No(r, e);
  }
}
function No(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function Ar(r) {
  var e = 0;
  if (typeof Symbol > "u" || r[Symbol.iterator] == null) {
    if (Array.isArray(r) || (r = JN(r)))
      return function() {
        return e >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[e++]
        };
      };
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return e = r[Symbol.iterator](), e.next.bind(e);
}
var Hr = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(/* @__PURE__ */ jn(Error)), XN = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e(t) {
    return r.call(this, "Invalid DateTime: " + t.toMessage()) || this;
  }
  return e;
}(Hr), KN = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e(t) {
    return r.call(this, "Invalid Interval: " + t.toMessage()) || this;
  }
  return e;
}(Hr), QN = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e(t) {
    return r.call(this, "Invalid Duration: " + t.toMessage()) || this;
  }
  return e;
}(Hr), _e = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(Hr), _f = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e(t) {
    return r.call(this, "Invalid unit " + t) || this;
  }
  return e;
}(Hr), ir = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(Hr), Or = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e() {
    return r.call(this, "Zone is an abstract class") || this;
  }
  return e;
}(Hr), S = "numeric", vr = "short", er = "long", st = {
  year: S,
  month: S,
  day: S
}, Ma = {
  year: S,
  month: vr,
  day: S
}, Of = {
  year: S,
  month: vr,
  day: S,
  weekday: vr
}, Fa = {
  year: S,
  month: er,
  day: S
}, Na = {
  year: S,
  month: er,
  day: S,
  weekday: er
}, ka = {
  hour: S,
  minute: S
}, Da = {
  hour: S,
  minute: S,
  second: S
}, Pa = {
  hour: S,
  minute: S,
  second: S,
  timeZoneName: vr
}, La = {
  hour: S,
  minute: S,
  second: S,
  timeZoneName: er
}, Ua = {
  hour: S,
  minute: S,
  hour12: !1
}, ja = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1
}, Ra = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1,
  timeZoneName: vr
}, Ba = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1,
  timeZoneName: er
}, Va = {
  year: S,
  month: S,
  day: S,
  hour: S,
  minute: S
}, za = {
  year: S,
  month: S,
  day: S,
  hour: S,
  minute: S,
  second: S
}, Ga = {
  year: S,
  month: vr,
  day: S,
  hour: S,
  minute: S
}, Ha = {
  year: S,
  month: vr,
  day: S,
  hour: S,
  minute: S,
  second: S
}, Ef = {
  year: S,
  month: vr,
  day: S,
  weekday: vr,
  hour: S,
  minute: S
}, Za = {
  year: S,
  month: er,
  day: S,
  hour: S,
  minute: S,
  timeZoneName: vr
}, qa = {
  year: S,
  month: er,
  day: S,
  hour: S,
  minute: S,
  second: S,
  timeZoneName: vr
}, Wa = {
  year: S,
  month: er,
  day: S,
  weekday: er,
  hour: S,
  minute: S,
  timeZoneName: er
}, Ya = {
  year: S,
  month: er,
  day: S,
  weekday: er,
  hour: S,
  minute: S,
  second: S,
  timeZoneName: er
};
function A(r) {
  return typeof r > "u";
}
function Rr(r) {
  return typeof r == "number";
}
function Lt(r) {
  return typeof r == "number" && r % 1 === 0;
}
function r8(r) {
  return typeof r == "string";
}
function e8(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function pr() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function De() {
  return !A(Intl.DateTimeFormat.prototype.formatToParts);
}
function Af() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function t8(r) {
  return Array.isArray(r) ? r : [r];
}
function ko(r, e, t) {
  if (r.length !== 0)
    return r.reduce(function(n, a) {
      var i = [e(a), a];
      return n && t(n[0], i[0]) === n[0] ? n : i;
    }, null)[1];
}
function If(r, e) {
  return e.reduce(function(t, n) {
    return t[n] = r[n], t;
  }, {});
}
function ne(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function Sr(r, e, t) {
  return Lt(r) && r >= e && r <= t;
}
function n8(r, e) {
  return r - e * Math.floor(r / e);
}
function ee(r, e) {
  e === void 0 && (e = 2);
  var t = r < 0 ? "-" : "", n = t ? r * -1 : r, a;
  return n.toString().length < e ? a = ("0".repeat(e) + n).slice(-e) : a = n.toString(), "" + t + a;
}
function X(r) {
  if (!(A(r) || r === null || r === ""))
    return parseInt(r, 10);
}
function Ja(r) {
  if (!(A(r) || r === null || r === "")) {
    var e = parseFloat("0." + r) * 1e3;
    return Math.floor(e);
  }
}
function Xa(r, e, t) {
  t === void 0 && (t = !1);
  var n = Math.pow(10, e), a = t ? Math.trunc : Math.round;
  return a(r * n) / n;
}
function Pe(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function Ie(r) {
  return Pe(r) ? 366 : 365;
}
function ut(r, e) {
  var t = n8(e - 1, 12) + 1, n = r + (e - t) / 12;
  return t === 2 ? Pe(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function Ka(r) {
  var e = Date.UTC(r.year, r.month - 1, r.day, r.hour, r.minute, r.second, r.millisecond);
  return r.year < 100 && r.year >= 0 && (e = new Date(e), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
}
function ft(r) {
  var e = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7, t = r - 1, n = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return e === 4 || n === 3 ? 53 : 52;
}
function Rn(r) {
  return r > 99 ? r : r > 60 ? 1900 + r : 2e3 + r;
}
function xf(r, e, t, n) {
  n === void 0 && (n = null);
  var a = new Date(r), i = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (i.timeZone = n);
  var s = Object.assign({
    timeZoneName: e
  }, i), o = pr();
  if (o && De()) {
    var l = new Intl.DateTimeFormat(t, s).formatToParts(a).find(function(g) {
      return g.type.toLowerCase() === "timezonename";
    });
    return l ? l.value : null;
  } else if (o) {
    var d = new Intl.DateTimeFormat(t, i).format(a), m = new Intl.DateTimeFormat(t, s).format(a), h = m.substring(d.length), p = h.replace(/^[, \u200e]+/, "");
    return p;
  } else
    return null;
}
function Ut(r, e) {
  var t = parseInt(r, 10);
  Number.isNaN(t) && (t = 0);
  var n = parseInt(e, 10) || 0, a = t < 0 || Object.is(t, -0) ? -n : n;
  return t * 60 + a;
}
function Cf(r) {
  var e = Number(r);
  if (typeof r == "boolean" || r === "" || Number.isNaN(e))
    throw new ir("Invalid unit value " + r);
  return e;
}
function lt(r, e, t) {
  var n = {};
  for (var a in r)
    if (ne(r, a)) {
      if (t.indexOf(a) >= 0)
        continue;
      var i = r[a];
      if (i == null)
        continue;
      n[e(a)] = Cf(i);
    }
  return n;
}
function ct(r, e) {
  var t = Math.trunc(Math.abs(r / 60)), n = Math.trunc(Math.abs(r % 60)), a = r >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return "" + a + ee(t, 2) + ":" + ee(n, 2);
    case "narrow":
      return "" + a + t + (n > 0 ? ":" + n : "");
    case "techie":
      return "" + a + ee(t, 2) + ee(n, 2);
    default:
      throw new RangeError("Value format " + e + " is out of range for property format");
  }
}
function jt(r) {
  return If(r, ["hour", "minute", "second", "millisecond"]);
}
var Mf = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function D(r) {
  return JSON.stringify(r, Object.keys(r).sort());
}
var a8 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Ff = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i8 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Nf(r) {
  switch (r) {
    case "narrow":
      return [].concat(i8);
    case "short":
      return [].concat(Ff);
    case "long":
      return [].concat(a8);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var kf = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Df = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], o8 = ["M", "T", "W", "T", "F", "S", "S"];
function Pf(r) {
  switch (r) {
    case "narrow":
      return [].concat(o8);
    case "short":
      return [].concat(Df);
    case "long":
      return [].concat(kf);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var Lf = ["AM", "PM"], s8 = ["Before Christ", "Anno Domini"], u8 = ["BC", "AD"], f8 = ["B", "A"];
function Uf(r) {
  switch (r) {
    case "narrow":
      return [].concat(f8);
    case "short":
      return [].concat(u8);
    case "long":
      return [].concat(s8);
    default:
      return null;
  }
}
function l8(r) {
  return Lf[r.hour < 12 ? 0 : 1];
}
function c8(r, e) {
  return Pf(e)[r.weekday - 1];
}
function v8(r, e) {
  return Nf(e)[r.month - 1];
}
function d8(r, e) {
  return Uf(e)[r.year < 0 ? 0 : 1];
}
function h8(r, e, t, n) {
  t === void 0 && (t = "always"), n === void 0 && (n = !1);
  var a = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(r) === -1;
  if (t === "auto" && i) {
    var s = r === "days";
    switch (e) {
      case 1:
        return s ? "tomorrow" : "next " + a[r][0];
      case -1:
        return s ? "yesterday" : "last " + a[r][0];
      case 0:
        return s ? "today" : "this " + a[r][0];
    }
  }
  var o = Object.is(e, -0) || e < 0, l = Math.abs(e), d = l === 1, m = a[r], h = n ? d ? m[1] : m[2] || m[1] : d ? a[r][0] : r;
  return o ? l + " " + h + " ago" : "in " + l + " " + h;
}
function m8(r) {
  var e = If(r, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]), t = D(e), n = "EEEE, LLLL d, yyyy, h:mm a";
  switch (t) {
    case D(st):
      return "M/d/yyyy";
    case D(Ma):
      return "LLL d, yyyy";
    case D(Of):
      return "EEE, LLL d, yyyy";
    case D(Fa):
      return "LLLL d, yyyy";
    case D(Na):
      return "EEEE, LLLL d, yyyy";
    case D(ka):
      return "h:mm a";
    case D(Da):
      return "h:mm:ss a";
    case D(Pa):
      return "h:mm a";
    case D(La):
      return "h:mm a";
    case D(Ua):
      return "HH:mm";
    case D(ja):
      return "HH:mm:ss";
    case D(Ra):
      return "HH:mm";
    case D(Ba):
      return "HH:mm";
    case D(Va):
      return "M/d/yyyy, h:mm a";
    case D(Ga):
      return "LLL d, yyyy, h:mm a";
    case D(Za):
      return "LLLL d, yyyy, h:mm a";
    case D(Wa):
      return n;
    case D(za):
      return "M/d/yyyy, h:mm:ss a";
    case D(Ha):
      return "LLL d, yyyy, h:mm:ss a";
    case D(Ef):
      return "EEE, d LLL yyyy, h:mm a";
    case D(qa):
      return "LLLL d, yyyy, h:mm:ss a";
    case D(Ya):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return n;
  }
}
function Do(r, e) {
  for (var t = "", n = Ar(r), a; !(a = n()).done; ) {
    var i = a.value;
    i.literal ? t += i.val : t += e(i.val);
  }
  return t;
}
var y8 = {
  D: st,
  DD: Ma,
  DDD: Fa,
  DDDD: Na,
  t: ka,
  tt: Da,
  ttt: Pa,
  tttt: La,
  T: Ua,
  TT: ja,
  TTT: Ra,
  TTTT: Ba,
  f: Va,
  ff: Ga,
  fff: Za,
  ffff: Wa,
  F: za,
  FF: Ha,
  FFF: qa,
  FFFF: Ya
}, mr = /* @__PURE__ */ function() {
  r.create = function(n, a) {
    return a === void 0 && (a = {}), new r(n, a);
  }, r.parseFormat = function(n) {
    for (var a = null, i = "", s = !1, o = [], l = 0; l < n.length; l++) {
      var d = n.charAt(l);
      d === "'" ? (i.length > 0 && o.push({
        literal: s,
        val: i
      }), a = null, i = "", s = !s) : s || d === a ? i += d : (i.length > 0 && o.push({
        literal: !1,
        val: i
      }), i = d, a = d);
    }
    return i.length > 0 && o.push({
      literal: s,
      val: i
    }), o;
  }, r.macroTokenToFormatOpts = function(n) {
    return y8[n];
  };
  function r(t, n) {
    this.opts = n, this.loc = t, this.systemLoc = null;
  }
  var e = r.prototype;
  return e.formatWithSystemDefault = function(n, a) {
    this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem());
    var i = this.systemLoc.dtFormatter(n, Object.assign({}, this.opts, a));
    return i.format();
  }, e.formatDateTime = function(n, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(n, Object.assign({}, this.opts, a));
    return i.format();
  }, e.formatDateTimeParts = function(n, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(n, Object.assign({}, this.opts, a));
    return i.formatToParts();
  }, e.resolvedOptions = function(n, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(n, Object.assign({}, this.opts, a));
    return i.resolvedOptions();
  }, e.num = function(n, a) {
    if (a === void 0 && (a = 0), this.opts.forceSimple)
      return ee(n, a);
    var i = Object.assign({}, this.opts);
    return a > 0 && (i.padTo = a), this.loc.numberFormatter(i).format(n);
  }, e.formatDateTimeFromString = function(n, a) {
    var i = this, s = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && De(), l = function(T, L) {
      return i.loc.extract(n, T, L);
    }, d = function(T) {
      return n.isOffsetFixed && n.offset === 0 && T.allowZ ? "Z" : n.isValid ? n.zone.formatOffset(n.ts, T.format) : "";
    }, m = function() {
      return s ? l8(n) : l({
        hour: "numeric",
        hour12: !0
      }, "dayperiod");
    }, h = function(T, L) {
      return s ? v8(n, T) : l(L ? {
        month: T
      } : {
        month: T,
        day: "numeric"
      }, "month");
    }, p = function(T, L) {
      return s ? c8(n, T) : l(L ? {
        weekday: T
      } : {
        weekday: T,
        month: "long",
        day: "numeric"
      }, "weekday");
    }, g = function(T) {
      var L = r.macroTokenToFormatOpts(T);
      return L ? i.formatWithSystemDefault(n, L) : T;
    }, w = function(T) {
      return s ? d8(n, T) : l({
        era: T
      }, "era");
    }, _ = function(T) {
      switch (T) {
        case "S":
          return i.num(n.millisecond);
        case "u":
        case "SSS":
          return i.num(n.millisecond, 3);
        case "s":
          return i.num(n.second);
        case "ss":
          return i.num(n.second, 2);
        case "m":
          return i.num(n.minute);
        case "mm":
          return i.num(n.minute, 2);
        case "h":
          return i.num(n.hour % 12 === 0 ? 12 : n.hour % 12);
        case "hh":
          return i.num(n.hour % 12 === 0 ? 12 : n.hour % 12, 2);
        case "H":
          return i.num(n.hour);
        case "HH":
          return i.num(n.hour, 2);
        case "Z":
          return d({
            format: "narrow",
            allowZ: i.opts.allowZ
          });
        case "ZZ":
          return d({
            format: "short",
            allowZ: i.opts.allowZ
          });
        case "ZZZ":
          return d({
            format: "techie",
            allowZ: i.opts.allowZ
          });
        case "ZZZZ":
          return n.zone.offsetName(n.ts, {
            format: "short",
            locale: i.loc.locale
          });
        case "ZZZZZ":
          return n.zone.offsetName(n.ts, {
            format: "long",
            locale: i.loc.locale
          });
        case "z":
          return n.zoneName;
        case "a":
          return m();
        case "d":
          return o ? l({
            day: "numeric"
          }, "day") : i.num(n.day);
        case "dd":
          return o ? l({
            day: "2-digit"
          }, "day") : i.num(n.day, 2);
        case "c":
          return i.num(n.weekday);
        case "ccc":
          return p("short", !0);
        case "cccc":
          return p("long", !0);
        case "ccccc":
          return p("narrow", !0);
        case "E":
          return i.num(n.weekday);
        case "EEE":
          return p("short", !1);
        case "EEEE":
          return p("long", !1);
        case "EEEEE":
          return p("narrow", !1);
        case "L":
          return o ? l({
            month: "numeric",
            day: "numeric"
          }, "month") : i.num(n.month);
        case "LL":
          return o ? l({
            month: "2-digit",
            day: "numeric"
          }, "month") : i.num(n.month, 2);
        case "LLL":
          return h("short", !0);
        case "LLLL":
          return h("long", !0);
        case "LLLLL":
          return h("narrow", !0);
        case "M":
          return o ? l({
            month: "numeric"
          }, "month") : i.num(n.month);
        case "MM":
          return o ? l({
            month: "2-digit"
          }, "month") : i.num(n.month, 2);
        case "MMM":
          return h("short", !1);
        case "MMMM":
          return h("long", !1);
        case "MMMMM":
          return h("narrow", !1);
        case "y":
          return o ? l({
            year: "numeric"
          }, "year") : i.num(n.year);
        case "yy":
          return o ? l({
            year: "2-digit"
          }, "year") : i.num(n.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? l({
            year: "numeric"
          }, "year") : i.num(n.year, 4);
        case "yyyyyy":
          return o ? l({
            year: "numeric"
          }, "year") : i.num(n.year, 6);
        case "G":
          return w("short");
        case "GG":
          return w("long");
        case "GGGGG":
          return w("narrow");
        case "kk":
          return i.num(n.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return i.num(n.weekYear, 4);
        case "W":
          return i.num(n.weekNumber);
        case "WW":
          return i.num(n.weekNumber, 2);
        case "o":
          return i.num(n.ordinal);
        case "ooo":
          return i.num(n.ordinal, 3);
        case "q":
          return i.num(n.quarter);
        case "qq":
          return i.num(n.quarter, 2);
        case "X":
          return i.num(Math.floor(n.ts / 1e3));
        case "x":
          return i.num(n.ts);
        default:
          return g(T);
      }
    };
    return Do(r.parseFormat(a), _);
  }, e.formatDurationFromString = function(n, a) {
    var i = this, s = function(p) {
      switch (p[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, o = function(p) {
      return function(g) {
        var w = s(g);
        return w ? i.num(p.get(w), g.length) : g;
      };
    }, l = r.parseFormat(a), d = l.reduce(function(h, p) {
      var g = p.literal, w = p.val;
      return g ? h : h.concat(w);
    }, []), m = n.shiftTo.apply(n, d.map(s).filter(function(h) {
      return h;
    }));
    return Do(l, o(m));
  }, r;
}(), lr = /* @__PURE__ */ function() {
  function r(t, n) {
    this.reason = t, this.explanation = n;
  }
  var e = r.prototype;
  return e.toMessage = function() {
    return this.explanation ? this.reason + ": " + this.explanation : this.reason;
  }, r;
}(), ve = /* @__PURE__ */ function() {
  function r() {
  }
  var e = r.prototype;
  return e.offsetName = function(n, a) {
    throw new Or();
  }, e.formatOffset = function(n, a) {
    throw new Or();
  }, e.offset = function(n) {
    throw new Or();
  }, e.equals = function(n) {
    throw new Or();
  }, cr(r, [{
    key: "type",
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function() {
      throw new Or();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function() {
      throw new Or();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "universal",
    get: function() {
      throw new Or();
    }
  }, {
    key: "isValid",
    get: function() {
      throw new Or();
    }
  }]), r;
}(), an = null, jf = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  var t = e.prototype;
  return t.offsetName = function(a, i) {
    var s = i.format, o = i.locale;
    return xf(a, s, o);
  }, t.formatOffset = function(a, i) {
    return ct(this.offset(a), i);
  }, t.offset = function(a) {
    return -new Date(a).getTimezoneOffset();
  }, t.equals = function(a) {
    return a.type === "local";
  }, cr(e, [{
    key: "type",
    /** @override **/
    get: function() {
      return "local";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return pr() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }], [{
    key: "instance",
    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function() {
      return an === null && (an = new e()), an;
    }
  }]), e;
}(ve), p8 = RegExp("^" + Mf.source + "$"), rt = {};
function g8(r) {
  return rt[r] || (rt[r] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: r,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), rt[r];
}
var $8 = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function b8(r, e) {
  var t = r.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t), a = n[1], i = n[2], s = n[3], o = n[4], l = n[5], d = n[6];
  return [s, a, i, o, l, d];
}
function w8(r, e) {
  for (var t = r.formatToParts(e), n = [], a = 0; a < t.length; a++) {
    var i = t[a], s = i.type, o = i.value, l = $8[s];
    A(l) || (n[l] = parseInt(o, 10));
  }
  return n;
}
var We = {}, yr = /* @__PURE__ */ function(r) {
  sr(e, r), e.create = function(a) {
    return We[a] || (We[a] = new e(a)), We[a];
  }, e.resetCache = function() {
    We = {}, rt = {};
  }, e.isValidSpecifier = function(a) {
    return !!(a && a.match(p8));
  }, e.isValidZone = function(a) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: a
      }).format(), !0;
    } catch {
      return !1;
    }
  }, e.parseGMTOffset = function(a) {
    if (a) {
      var i = a.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
      if (i)
        return -60 * parseInt(i[1]);
    }
    return null;
  };
  function e(n) {
    var a;
    return a = r.call(this) || this, a.zoneName = n, a.valid = e.isValidZone(n), a;
  }
  var t = e.prototype;
  return t.offsetName = function(a, i) {
    var s = i.format, o = i.locale;
    return xf(a, s, o, this.name);
  }, t.formatOffset = function(a, i) {
    return ct(this.offset(a), i);
  }, t.offset = function(a) {
    var i = new Date(a);
    if (isNaN(i))
      return NaN;
    var s = g8(this.name), o = s.formatToParts ? w8(s, i) : b8(s, i), l = o[0], d = o[1], m = o[2], h = o[3], p = o[4], g = o[5], w = h === 24 ? 0 : h, _ = Ka({
      year: l,
      month: d,
      day: m,
      hour: w,
      minute: p,
      second: g,
      millisecond: 0
    }), O = +i, T = O % 1e3;
    return O -= T >= 0 ? T : 1e3 + T, (_ - O) / (60 * 1e3);
  }, t.equals = function(a) {
    return a.type === "iana" && a.name === this.name;
  }, cr(e, [{
    key: "type",
    get: function() {
      return "iana";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return this.valid;
    }
  }]), e;
}(ve), on = null, rr = /* @__PURE__ */ function(r) {
  sr(e, r), e.instance = function(a) {
    return a === 0 ? e.utcInstance : new e(a);
  }, e.parseSpecifier = function(a) {
    if (a) {
      var i = a.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (i)
        return new e(Ut(i[1], i[2]));
    }
    return null;
  }, cr(e, null, [{
    key: "utcInstance",
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function() {
      return on === null && (on = new e(0)), on;
    }
  }]);
  function e(n) {
    var a;
    return a = r.call(this) || this, a.fixed = n, a;
  }
  var t = e.prototype;
  return t.offsetName = function() {
    return this.name;
  }, t.formatOffset = function(a, i) {
    return ct(this.fixed, i);
  }, t.offset = function() {
    return this.fixed;
  }, t.equals = function(a) {
    return a.type === "fixed" && a.fixed === this.fixed;
  }, cr(e, [{
    key: "type",
    get: function() {
      return "fixed";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.fixed === 0 ? "UTC" : "UTC" + ct(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function() {
      return !0;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }]), e;
}(ve), Bn = /* @__PURE__ */ function(r) {
  sr(e, r);
  function e(n) {
    var a;
    return a = r.call(this) || this, a.zoneName = n, a;
  }
  var t = e.prototype;
  return t.offsetName = function() {
    return null;
  }, t.formatOffset = function() {
    return "";
  }, t.offset = function() {
    return NaN;
  }, t.equals = function() {
    return !1;
  }, cr(e, [{
    key: "type",
    get: function() {
      return "invalid";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !1;
    }
  }]), e;
}(ve);
function Lr(r, e) {
  var t;
  if (A(r) || r === null)
    return e;
  if (r instanceof ve)
    return r;
  if (r8(r)) {
    var n = r.toLowerCase();
    return n === "local" ? e : n === "utc" || n === "gmt" ? rr.utcInstance : (t = yr.parseGMTOffset(r)) != null ? rr.instance(t) : yr.isValidSpecifier(n) ? yr.create(r) : rr.parseSpecifier(n) || new Bn(r);
  } else
    return Rr(r) ? rr.instance(r) : typeof r == "object" && r.offset && typeof r.offset == "number" ? r : new Bn(r);
}
var Po = function() {
  return Date.now();
}, sn = null, Lo = null, Uo = null, jo = null, Ro = !1, U = /* @__PURE__ */ function() {
  function r() {
  }
  return r.resetCaches = function() {
    B.resetCache(), yr.resetCache();
  }, cr(r, null, [{
    key: "now",
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function() {
      return Po;
    },
    set: function(t) {
      Po = t;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */
  }, {
    key: "defaultZoneName",
    get: function() {
      return r.defaultZone.name;
    },
    set: function(t) {
      t ? sn = Lr(t) : sn = null;
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */
  }, {
    key: "defaultZone",
    get: function() {
      return sn || jf.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultLocale",
    get: function() {
      return Lo;
    },
    set: function(t) {
      Lo = t;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function() {
      return Uo;
    },
    set: function(t) {
      Uo = t;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function() {
      return jo;
    },
    set: function(t) {
      jo = t;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function() {
      return Ro;
    },
    set: function(t) {
      Ro = t;
    }
  }]), r;
}(), Vn = {};
function zn(r, e) {
  e === void 0 && (e = {});
  var t = JSON.stringify([r, e]), n = Vn[t];
  return n || (n = new Intl.DateTimeFormat(r, e), Vn[t] = n), n;
}
var Gn = {};
function S8(r, e) {
  e === void 0 && (e = {});
  var t = JSON.stringify([r, e]), n = Gn[t];
  return n || (n = new Intl.NumberFormat(r, e), Gn[t] = n), n;
}
var Hn = {};
function T8(r, e) {
  e === void 0 && (e = {});
  var t = e;
  t.base;
  var n = YN(t, ["base"]), a = JSON.stringify([r, n]), i = Hn[a];
  return i || (i = new Intl.RelativeTimeFormat(r, e), Hn[a] = i), i;
}
var Pr = null;
function _8() {
  if (Pr)
    return Pr;
  if (pr()) {
    var r = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Pr = !r || r === "und" ? "en-US" : r, Pr;
  } else
    return Pr = "en-US", Pr;
}
function O8(r) {
  var e = r.indexOf("-u-");
  if (e === -1)
    return [r];
  var t, n = r.substring(0, e);
  try {
    t = zn(r).resolvedOptions();
  } catch {
    t = zn(n).resolvedOptions();
  }
  var a = t, i = a.numberingSystem, s = a.calendar;
  return [n, i, s];
}
function E8(r, e, t) {
  return pr() ? ((t || e) && (r += "-u", t && (r += "-ca-" + t), e && (r += "-nu-" + e)), r) : [];
}
function A8(r) {
  for (var e = [], t = 1; t <= 12; t++) {
    var n = j.utc(2016, t, 1);
    e.push(r(n));
  }
  return e;
}
function I8(r) {
  for (var e = [], t = 1; t <= 7; t++) {
    var n = j.utc(2016, 11, 13 + t);
    e.push(r(n));
  }
  return e;
}
function Ye(r, e, t, n, a) {
  var i = r.listingMode(t);
  return i === "error" ? null : i === "en" ? n(e) : a(e);
}
function x8(r) {
  return r.numberingSystem && r.numberingSystem !== "latn" ? !1 : r.numberingSystem === "latn" || !r.locale || r.locale.startsWith("en") || pr() && new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem === "latn";
}
var C8 = /* @__PURE__ */ function() {
  function r(t, n, a) {
    if (this.padTo = a.padTo || 0, this.floor = a.floor || !1, !n && pr()) {
      var i = {
        useGrouping: !1
      };
      a.padTo > 0 && (i.minimumIntegerDigits = a.padTo), this.inf = S8(t, i);
    }
  }
  var e = r.prototype;
  return e.format = function(n) {
    if (this.inf) {
      var a = this.floor ? Math.floor(n) : n;
      return this.inf.format(a);
    } else {
      var i = this.floor ? Math.floor(n) : Xa(n, 3);
      return ee(i, this.padTo);
    }
  }, r;
}(), M8 = /* @__PURE__ */ function() {
  function r(t, n, a) {
    this.opts = a, this.hasIntl = pr();
    var i;
    if (t.zone.universal && this.hasIntl) {
      var s = -1 * (t.offset / 60), o = s >= 0 ? "Etc/GMT+" + s : "Etc/GMT" + s, l = yr.isValidZone(o);
      t.offset !== 0 && l ? (i = o, this.dt = t) : (i = "UTC", a.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : j.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "local" ? this.dt = t : (this.dt = t, i = t.zone.name);
    if (this.hasIntl) {
      var d = Object.assign({}, this.opts);
      i && (d.timeZone = i), this.dtf = zn(n, d);
    }
  }
  var e = r.prototype;
  return e.format = function() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    var n = m8(this.opts), a = B.create("en-US");
    return mr.create(a).formatDateTimeFromString(this.dt, n);
  }, e.formatToParts = function() {
    return this.hasIntl && De() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }, e.resolvedOptions = function() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }, r;
}(), F8 = /* @__PURE__ */ function() {
  function r(t, n, a) {
    this.opts = Object.assign({
      style: "long"
    }, a), !n && Af() && (this.rtf = T8(t, a));
  }
  var e = r.prototype;
  return e.format = function(n, a) {
    return this.rtf ? this.rtf.format(n, a) : h8(a, n, this.opts.numeric, this.opts.style !== "long");
  }, e.formatToParts = function(n, a) {
    return this.rtf ? this.rtf.formatToParts(n, a) : [];
  }, r;
}(), B = /* @__PURE__ */ function() {
  r.fromOpts = function(n) {
    return r.create(n.locale, n.numberingSystem, n.outputCalendar, n.defaultToEN);
  }, r.create = function(n, a, i, s) {
    s === void 0 && (s = !1);
    var o = n || U.defaultLocale, l = o || (s ? "en-US" : _8()), d = a || U.defaultNumberingSystem, m = i || U.defaultOutputCalendar;
    return new r(l, d, m, o);
  }, r.resetCache = function() {
    Pr = null, Vn = {}, Gn = {}, Hn = {};
  }, r.fromObject = function(n) {
    var a = n === void 0 ? {} : n, i = a.locale, s = a.numberingSystem, o = a.outputCalendar;
    return r.create(i, s, o);
  };
  function r(t, n, a, i) {
    var s = O8(t), o = s[0], l = s[1], d = s[2];
    this.locale = o, this.numberingSystem = n || l || null, this.outputCalendar = a || d || null, this.intl = E8(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  var e = r.prototype;
  return e.listingMode = function(n) {
    n === void 0 && (n = !0);
    var a = pr(), i = a && De(), s = this.isEnglish(), o = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !i && !(s && o) && !n ? "error" : !i || s && o ? "en" : "intl";
  }, e.clone = function(n) {
    return !n || Object.getOwnPropertyNames(n).length === 0 ? this : r.create(n.locale || this.specifiedLocale, n.numberingSystem || this.numberingSystem, n.outputCalendar || this.outputCalendar, n.defaultToEN || !1);
  }, e.redefaultToEN = function(n) {
    return n === void 0 && (n = {}), this.clone(Object.assign({}, n, {
      defaultToEN: !0
    }));
  }, e.redefaultToSystem = function(n) {
    return n === void 0 && (n = {}), this.clone(Object.assign({}, n, {
      defaultToEN: !1
    }));
  }, e.months = function(n, a, i) {
    var s = this;
    return a === void 0 && (a = !1), i === void 0 && (i = !0), Ye(this, n, i, Nf, function() {
      var o = a ? {
        month: n,
        day: "numeric"
      } : {
        month: n
      }, l = a ? "format" : "standalone";
      return s.monthsCache[l][n] || (s.monthsCache[l][n] = A8(function(d) {
        return s.extract(d, o, "month");
      })), s.monthsCache[l][n];
    });
  }, e.weekdays = function(n, a, i) {
    var s = this;
    return a === void 0 && (a = !1), i === void 0 && (i = !0), Ye(this, n, i, Pf, function() {
      var o = a ? {
        weekday: n,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: n
      }, l = a ? "format" : "standalone";
      return s.weekdaysCache[l][n] || (s.weekdaysCache[l][n] = I8(function(d) {
        return s.extract(d, o, "weekday");
      })), s.weekdaysCache[l][n];
    });
  }, e.meridiems = function(n) {
    var a = this;
    return n === void 0 && (n = !0), Ye(this, void 0, n, function() {
      return Lf;
    }, function() {
      if (!a.meridiemCache) {
        var i = {
          hour: "numeric",
          hour12: !0
        };
        a.meridiemCache = [j.utc(2016, 11, 13, 9), j.utc(2016, 11, 13, 19)].map(function(s) {
          return a.extract(s, i, "dayperiod");
        });
      }
      return a.meridiemCache;
    });
  }, e.eras = function(n, a) {
    var i = this;
    return a === void 0 && (a = !0), Ye(this, n, a, Uf, function() {
      var s = {
        era: n
      };
      return i.eraCache[n] || (i.eraCache[n] = [j.utc(-40, 1, 1), j.utc(2017, 1, 1)].map(function(o) {
        return i.extract(o, s, "era");
      })), i.eraCache[n];
    });
  }, e.extract = function(n, a, i) {
    var s = this.dtFormatter(n, a), o = s.formatToParts(), l = o.find(function(d) {
      return d.type.toLowerCase() === i;
    });
    return l ? l.value : null;
  }, e.numberFormatter = function(n) {
    return n === void 0 && (n = {}), new C8(this.intl, n.forceSimple || this.fastNumbers, n);
  }, e.dtFormatter = function(n, a) {
    return a === void 0 && (a = {}), new M8(n, this.intl, a);
  }, e.relFormatter = function(n) {
    return n === void 0 && (n = {}), new F8(this.intl, this.isEnglish(), n);
  }, e.isEnglish = function() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || pr() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }, e.equals = function(n) {
    return this.locale === n.locale && this.numberingSystem === n.numberingSystem && this.outputCalendar === n.outputCalendar;
  }, cr(r, [{
    key: "fastNumbers",
    get: function() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = x8(this)), this.fastNumbersCached;
    }
  }]), r;
}();
function de() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  var n = e.reduce(function(a, i) {
    return a + i.source;
  }, "");
  return RegExp("^" + n + "$");
}
function Zr() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return function(n) {
    return e.reduce(function(a, i) {
      var s = a[0], o = a[1], l = a[2], d = i(n, l), m = d[0], h = d[1], p = d[2];
      return [Object.assign(s, m), o || h, p];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function he(r) {
  if (r == null)
    return [null, null];
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  for (var a = 0, i = t; a < i.length; a++) {
    var s = i[a], o = s[0], l = s[1], d = o.exec(r);
    if (d)
      return l(d);
  }
  return [null, null];
}
function Rf() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return function(n, a) {
    var i = {}, s;
    for (s = 0; s < e.length; s++)
      i[e[s]] = X(n[a + s]);
    return [i, null, a + s];
  };
}
var Bf = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Qa = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Vf = RegExp("" + Qa.source + Bf.source + "?"), ri = RegExp("(?:T" + Vf.source + ")?"), N8 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, k8 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, D8 = /(\d{4})-?(\d{3})/, P8 = Rf("weekYear", "weekNumber", "weekDay"), L8 = Rf("year", "ordinal"), U8 = /(\d{4})-(\d\d)-(\d\d)/, zf = RegExp(Qa.source + " ?(?:" + Bf.source + "|(" + Mf.source + "))?"), j8 = RegExp("(?: " + zf.source + ")?");
function te(r, e, t) {
  var n = r[e];
  return A(n) ? t : X(n);
}
function Gf(r, e) {
  var t = {
    year: te(r, e),
    month: te(r, e + 1, 1),
    day: te(r, e + 2, 1)
  };
  return [t, null, e + 3];
}
function qr(r, e) {
  var t = {
    hours: te(r, e, 0),
    minutes: te(r, e + 1, 0),
    seconds: te(r, e + 2, 0),
    milliseconds: Ja(r[e + 3])
  };
  return [t, null, e + 4];
}
function me(r, e) {
  var t = !r[e] && !r[e + 1], n = Ut(r[e + 1], r[e + 2]), a = t ? null : rr.instance(n);
  return [{}, a, e + 3];
}
function Hf(r, e) {
  var t = r[e] ? yr.create(r[e]) : null;
  return [{}, t, e + 1];
}
var R8 = RegExp("^T?" + Qa.source + "$"), B8 = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function V8(r) {
  var e = r[0], t = r[1], n = r[2], a = r[3], i = r[4], s = r[5], o = r[6], l = r[7], d = r[8], m = e[0] === "-", h = l && l[0] === "-", p = function(w, _) {
    return _ === void 0 && (_ = !1), w !== void 0 && (_ || w && m) ? -w : w;
  };
  return [{
    years: p(X(t)),
    months: p(X(n)),
    weeks: p(X(a)),
    days: p(X(i)),
    hours: p(X(s)),
    minutes: p(X(o)),
    seconds: p(X(l), l === "-0"),
    milliseconds: p(Ja(d), h)
  }];
}
var z8 = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ei(r, e, t, n, a, i, s) {
  var o = {
    year: e.length === 2 ? Rn(X(e)) : X(e),
    month: Ff.indexOf(t) + 1,
    day: X(n),
    hour: X(a),
    minute: X(i)
  };
  return s && (o.second = X(s)), r && (o.weekday = r.length > 3 ? kf.indexOf(r) + 1 : Df.indexOf(r) + 1), o;
}
var G8 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function H8(r) {
  var e = r[1], t = r[2], n = r[3], a = r[4], i = r[5], s = r[6], o = r[7], l = r[8], d = r[9], m = r[10], h = r[11], p = ei(e, a, n, t, i, s, o), g;
  return l ? g = z8[l] : d ? g = 0 : g = Ut(m, h), [p, new rr(g)];
}
function Z8(r) {
  return r.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var q8 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, W8 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Y8 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Bo(r) {
  var e = r[1], t = r[2], n = r[3], a = r[4], i = r[5], s = r[6], o = r[7], l = ei(e, a, n, t, i, s, o);
  return [l, rr.utcInstance];
}
function J8(r) {
  var e = r[1], t = r[2], n = r[3], a = r[4], i = r[5], s = r[6], o = r[7], l = ei(e, o, t, n, a, i, s);
  return [l, rr.utcInstance];
}
var X8 = de(N8, ri), K8 = de(k8, ri), Q8 = de(D8, ri), rk = de(Vf), ek = Zr(Gf, qr, me), tk = Zr(P8, qr, me), nk = Zr(L8, qr, me), ak = Zr(qr, me);
function ik(r) {
  return he(r, [X8, ek], [K8, tk], [Q8, nk], [rk, ak]);
}
function ok(r) {
  return he(Z8(r), [G8, H8]);
}
function sk(r) {
  return he(r, [q8, Bo], [W8, Bo], [Y8, J8]);
}
function uk(r) {
  return he(r, [B8, V8]);
}
var fk = Zr(qr);
function lk(r) {
  return he(r, [R8, fk]);
}
var ck = de(U8, j8), vk = de(zf), dk = Zr(Gf, qr, me, Hf), hk = Zr(qr, me, Hf);
function mk(r) {
  return he(r, [ck, dk], [vk, hk]);
}
var yk = "Invalid Duration", Zf = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, pk = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, Zf), nr = 146097 / 400, Jr = 146097 / 4800, gk = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: nr / 7,
    days: nr,
    hours: nr * 24,
    minutes: nr * 24 * 60,
    seconds: nr * 24 * 60 * 60,
    milliseconds: nr * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: nr / 28,
    days: nr / 4,
    hours: nr * 24 / 4,
    minutes: nr * 24 * 60 / 4,
    seconds: nr * 24 * 60 * 60 / 4,
    milliseconds: nr * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Jr / 7,
    days: Jr,
    hours: Jr * 24,
    minutes: Jr * 24 * 60,
    seconds: Jr * 24 * 60 * 60,
    milliseconds: Jr * 24 * 60 * 60 * 1e3
  }
}, Zf), Kr = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], $k = Kr.slice(0).reverse();
function kr(r, e, t) {
  t === void 0 && (t = !1);
  var n = {
    values: t ? e.values : Object.assign({}, r.values, e.values || {}),
    loc: r.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy
  };
  return new K(n);
}
function bk(r) {
  return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function qf(r, e, t, n, a) {
  var i = r[a][t], s = e[t] / i, o = Math.sign(s) === Math.sign(n[a]), l = !o && n[a] !== 0 && Math.abs(s) <= 1 ? bk(s) : Math.trunc(s);
  n[a] += l, e[t] -= l * i;
}
function wk(r, e) {
  $k.reduce(function(t, n) {
    return A(e[n]) ? t : (t && qf(r, e, t, e, n), n);
  }, null);
}
var K = /* @__PURE__ */ function() {
  function r(t) {
    var n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || B.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? gk : pk, this.isLuxonDuration = !0;
  }
  r.fromMillis = function(n, a) {
    return r.fromObject(Object.assign({
      milliseconds: n
    }, a));
  }, r.fromObject = function(n) {
    if (n == null || typeof n != "object")
      throw new ir("Duration.fromObject: argument expected to be an object, got " + (n === null ? "null" : typeof n));
    return new r({
      values: lt(n, r.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
        // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: B.fromObject(n),
      conversionAccuracy: n.conversionAccuracy
    });
  }, r.fromISO = function(n, a) {
    var i = uk(n), s = i[0];
    if (s) {
      var o = Object.assign(s, a);
      return r.fromObject(o);
    } else
      return r.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, r.fromISOTime = function(n, a) {
    var i = lk(n), s = i[0];
    if (s) {
      var o = Object.assign(s, a);
      return r.fromObject(o);
    } else
      return r.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, r.invalid = function(n, a) {
    if (a === void 0 && (a = null), !n)
      throw new ir("need to specify a reason the Duration is invalid");
    var i = n instanceof lr ? n : new lr(n, a);
    if (U.throwOnInvalid)
      throw new QN(i);
    return new r({
      invalid: i
    });
  }, r.normalizeUnit = function(n) {
    var a = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[n && n.toLowerCase()];
    if (!a)
      throw new _f(n);
    return a;
  }, r.isDuration = function(n) {
    return n && n.isLuxonDuration || !1;
  };
  var e = r.prototype;
  return e.toFormat = function(n, a) {
    a === void 0 && (a = {});
    var i = Object.assign({}, a, {
      floor: a.round !== !1 && a.floor !== !1
    });
    return this.isValid ? mr.create(this.loc, i).formatDurationFromString(this, n) : yk;
  }, e.toObject = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return {};
    var a = Object.assign({}, this.values);
    return n.includeConfig && (a.conversionAccuracy = this.conversionAccuracy, a.numberingSystem = this.loc.numberingSystem, a.locale = this.loc.locale), a;
  }, e.toISO = function() {
    if (!this.isValid)
      return null;
    var n = "P";
    return this.years !== 0 && (n += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (n += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (n += this.weeks + "W"), this.days !== 0 && (n += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (n += "T"), this.hours !== 0 && (n += this.hours + "H"), this.minutes !== 0 && (n += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (n += Xa(this.seconds + this.milliseconds / 1e3, 3) + "S"), n === "P" && (n += "T0S"), n;
  }, e.toISOTime = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return null;
    var a = this.toMillis();
    if (a < 0 || a >= 864e5)
      return null;
    n = Object.assign({
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended"
    }, n);
    var i = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), s = n.format === "basic" ? "hhmm" : "hh:mm";
    (!n.suppressSeconds || i.seconds !== 0 || i.milliseconds !== 0) && (s += n.format === "basic" ? "ss" : ":ss", (!n.suppressMilliseconds || i.milliseconds !== 0) && (s += ".SSS"));
    var o = i.toFormat(s);
    return n.includePrefix && (o = "T" + o), o;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toString = function() {
    return this.toISO();
  }, e.toMillis = function() {
    return this.as("milliseconds");
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.plus = function(n) {
    if (!this.isValid)
      return this;
    for (var a = jr(n), i = {}, s = Ar(Kr), o; !(o = s()).done; ) {
      var l = o.value;
      (ne(a.values, l) || ne(this.values, l)) && (i[l] = a.get(l) + this.get(l));
    }
    return kr(this, {
      values: i
    }, !0);
  }, e.minus = function(n) {
    if (!this.isValid)
      return this;
    var a = jr(n);
    return this.plus(a.negate());
  }, e.mapUnits = function(n) {
    if (!this.isValid)
      return this;
    for (var a = {}, i = 0, s = Object.keys(this.values); i < s.length; i++) {
      var o = s[i];
      a[o] = Cf(n(this.values[o], o));
    }
    return kr(this, {
      values: a
    }, !0);
  }, e.get = function(n) {
    return this[r.normalizeUnit(n)];
  }, e.set = function(n) {
    if (!this.isValid)
      return this;
    var a = Object.assign(this.values, lt(n, r.normalizeUnit, []));
    return kr(this, {
      values: a
    });
  }, e.reconfigure = function(n) {
    var a = n === void 0 ? {} : n, i = a.locale, s = a.numberingSystem, o = a.conversionAccuracy, l = this.loc.clone({
      locale: i,
      numberingSystem: s
    }), d = {
      loc: l
    };
    return o && (d.conversionAccuracy = o), kr(this, d);
  }, e.as = function(n) {
    return this.isValid ? this.shiftTo(n).get(n) : NaN;
  }, e.normalize = function() {
    if (!this.isValid)
      return this;
    var n = this.toObject();
    return wk(this.matrix, n), kr(this, {
      values: n
    }, !0);
  }, e.shiftTo = function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    if (!this.isValid)
      return this;
    if (a.length === 0)
      return this;
    a = a.map(function(L) {
      return r.normalizeUnit(L);
    });
    for (var s = {}, o = {}, l = this.toObject(), d, m = Ar(Kr), h; !(h = m()).done; ) {
      var p = h.value;
      if (a.indexOf(p) >= 0) {
        d = p;
        var g = 0;
        for (var w in o)
          g += this.matrix[w][p] * o[w], o[w] = 0;
        Rr(l[p]) && (g += l[p]);
        var _ = Math.trunc(g);
        s[p] = _, o[p] = g - _;
        for (var O in l)
          Kr.indexOf(O) > Kr.indexOf(p) && qf(this.matrix, l, O, s, p);
      } else
        Rr(l[p]) && (o[p] = l[p]);
    }
    for (var T in o)
      o[T] !== 0 && (s[d] += T === d ? o[T] : o[T] / this.matrix[d][T]);
    return kr(this, {
      values: s
    }, !0).normalize();
  }, e.negate = function() {
    if (!this.isValid)
      return this;
    for (var n = {}, a = 0, i = Object.keys(this.values); a < i.length; a++) {
      var s = i[a];
      n[s] = -this.values[s];
    }
    return kr(this, {
      values: n
    }, !0);
  }, e.equals = function(n) {
    if (!this.isValid || !n.isValid || !this.loc.equals(n.loc))
      return !1;
    function a(l, d) {
      return l === void 0 || l === 0 ? d === void 0 || d === 0 : l === d;
    }
    for (var i = Ar(Kr), s; !(s = i()).done; ) {
      var o = s.value;
      if (!a(this.values[o], n.values[o]))
        return !1;
    }
    return !0;
  }, cr(r, [{
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}();
function jr(r) {
  if (Rr(r))
    return K.fromMillis(r);
  if (K.isDuration(r))
    return r;
  if (typeof r == "object")
    return K.fromObject(r);
  throw new ir("Unknown duration argument " + r + " of type " + typeof r);
}
var $e = "Invalid Interval";
function Sk(r, e) {
  return !r || !r.isValid ? xe.invalid("missing or invalid start") : !e || !e.isValid ? xe.invalid("missing or invalid end") : e < r ? xe.invalid("end before start", "The end of an interval must be after its start, but you had start=" + r.toISO() + " and end=" + e.toISO()) : null;
}
var xe = /* @__PURE__ */ function() {
  function r(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  r.invalid = function(n, a) {
    if (a === void 0 && (a = null), !n)
      throw new ir("need to specify a reason the Interval is invalid");
    var i = n instanceof lr ? n : new lr(n, a);
    if (U.throwOnInvalid)
      throw new KN(i);
    return new r({
      invalid: i
    });
  }, r.fromDateTimes = function(n, a) {
    var i = Se(n), s = Se(a), o = Sk(i, s);
    return o ?? new r({
      start: i,
      end: s
    });
  }, r.after = function(n, a) {
    var i = jr(a), s = Se(n);
    return r.fromDateTimes(s, s.plus(i));
  }, r.before = function(n, a) {
    var i = jr(a), s = Se(n);
    return r.fromDateTimes(s.minus(i), s);
  }, r.fromISO = function(n, a) {
    var i = (n || "").split("/", 2), s = i[0], o = i[1];
    if (s && o) {
      var l, d;
      try {
        l = j.fromISO(s, a), d = l.isValid;
      } catch {
        d = !1;
      }
      var m, h;
      try {
        m = j.fromISO(o, a), h = m.isValid;
      } catch {
        h = !1;
      }
      if (d && h)
        return r.fromDateTimes(l, m);
      if (d) {
        var p = K.fromISO(o, a);
        if (p.isValid)
          return r.after(l, p);
      } else if (h) {
        var g = K.fromISO(s, a);
        if (g.isValid)
          return r.before(m, g);
      }
    }
    return r.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, r.isInterval = function(n) {
    return n && n.isLuxonInterval || !1;
  };
  var e = r.prototype;
  return e.length = function(n) {
    return n === void 0 && (n = "milliseconds"), this.isValid ? this.toDuration.apply(this, [n]).get(n) : NaN;
  }, e.count = function(n) {
    if (n === void 0 && (n = "milliseconds"), !this.isValid)
      return NaN;
    var a = this.start.startOf(n), i = this.end.startOf(n);
    return Math.floor(i.diff(a, n).get(n)) + 1;
  }, e.hasSame = function(n) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, n) : !1;
  }, e.isEmpty = function() {
    return this.s.valueOf() === this.e.valueOf();
  }, e.isAfter = function(n) {
    return this.isValid ? this.s > n : !1;
  }, e.isBefore = function(n) {
    return this.isValid ? this.e <= n : !1;
  }, e.contains = function(n) {
    return this.isValid ? this.s <= n && this.e > n : !1;
  }, e.set = function(n) {
    var a = n === void 0 ? {} : n, i = a.start, s = a.end;
    return this.isValid ? r.fromDateTimes(i || this.s, s || this.e) : this;
  }, e.splitAt = function() {
    var n = this;
    if (!this.isValid)
      return [];
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    for (var o = i.map(Se).filter(function(g) {
      return n.contains(g);
    }).sort(), l = [], d = this.s, m = 0; d < this.e; ) {
      var h = o[m] || this.e, p = +h > +this.e ? this.e : h;
      l.push(r.fromDateTimes(d, p)), d = p, m += 1;
    }
    return l;
  }, e.splitBy = function(n) {
    var a = jr(n);
    if (!this.isValid || !a.isValid || a.as("milliseconds") === 0)
      return [];
    for (var i = this.s, s = 1, o, l = []; i < this.e; ) {
      var d = this.start.plus(a.mapUnits(function(m) {
        return m * s;
      }));
      o = +d > +this.e ? this.e : d, l.push(r.fromDateTimes(i, o)), i = o, s += 1;
    }
    return l;
  }, e.divideEqually = function(n) {
    return this.isValid ? this.splitBy(this.length() / n).slice(0, n) : [];
  }, e.overlaps = function(n) {
    return this.e > n.s && this.s < n.e;
  }, e.abutsStart = function(n) {
    return this.isValid ? +this.e == +n.s : !1;
  }, e.abutsEnd = function(n) {
    return this.isValid ? +n.e == +this.s : !1;
  }, e.engulfs = function(n) {
    return this.isValid ? this.s <= n.s && this.e >= n.e : !1;
  }, e.equals = function(n) {
    return !this.isValid || !n.isValid ? !1 : this.s.equals(n.s) && this.e.equals(n.e);
  }, e.intersection = function(n) {
    if (!this.isValid)
      return this;
    var a = this.s > n.s ? this.s : n.s, i = this.e < n.e ? this.e : n.e;
    return a >= i ? null : r.fromDateTimes(a, i);
  }, e.union = function(n) {
    if (!this.isValid)
      return this;
    var a = this.s < n.s ? this.s : n.s, i = this.e > n.e ? this.e : n.e;
    return r.fromDateTimes(a, i);
  }, r.merge = function(n) {
    var a = n.sort(function(o, l) {
      return o.s - l.s;
    }).reduce(function(o, l) {
      var d = o[0], m = o[1];
      return m ? m.overlaps(l) || m.abutsStart(l) ? [d, m.union(l)] : [d.concat([m]), l] : [d, l];
    }, [[], null]), i = a[0], s = a[1];
    return s && i.push(s), i;
  }, r.xor = function(n) {
    for (var a, i = null, s = 0, o = [], l = n.map(function(w) {
      return [{
        time: w.s,
        type: "s"
      }, {
        time: w.e,
        type: "e"
      }];
    }), d = (a = Array.prototype).concat.apply(a, l), m = d.sort(function(w, _) {
      return w.time - _.time;
    }), h = Ar(m), p; !(p = h()).done; ) {
      var g = p.value;
      s += g.type === "s" ? 1 : -1, s === 1 ? i = g.time : (i && +i != +g.time && o.push(r.fromDateTimes(i, g.time)), i = null);
    }
    return r.merge(o);
  }, e.difference = function() {
    for (var n = this, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r.xor([this].concat(i)).map(function(o) {
      return n.intersection(o);
    }).filter(function(o) {
      return o && !o.isEmpty();
    });
  }, e.toString = function() {
    return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : $e;
  }, e.toISO = function(n) {
    return this.isValid ? this.s.toISO(n) + "/" + this.e.toISO(n) : $e;
  }, e.toISODate = function() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : $e;
  }, e.toISOTime = function(n) {
    return this.isValid ? this.s.toISOTime(n) + "/" + this.e.toISOTime(n) : $e;
  }, e.toFormat = function(n, a) {
    var i = a === void 0 ? {} : a, s = i.separator, o = s === void 0 ? " – " : s;
    return this.isValid ? "" + this.s.toFormat(n) + o + this.e.toFormat(n) : $e;
  }, e.toDuration = function(n, a) {
    return this.isValid ? this.e.diff(this.s, n, a) : K.invalid(this.invalidReason);
  }, e.mapEndpoints = function(n) {
    return r.fromDateTimes(n(this.s), n(this.e));
  }, cr(r, [{
    key: "start",
    get: function() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}(), Oe = /* @__PURE__ */ function() {
  function r() {
  }
  return r.hasDST = function(t) {
    t === void 0 && (t = U.defaultZone);
    var n = j.now().setZone(t).set({
      month: 12
    });
    return !t.universal && n.offset !== n.set({
      month: 6
    }).offset;
  }, r.isValidIANAZone = function(t) {
    return yr.isValidSpecifier(t) && yr.isValidZone(t);
  }, r.normalizeZone = function(t) {
    return Lr(t, U.defaultZone);
  }, r.months = function(t, n) {
    t === void 0 && (t = "long");
    var a = n === void 0 ? {} : n, i = a.locale, s = i === void 0 ? null : i, o = a.numberingSystem, l = o === void 0 ? null : o, d = a.locObj, m = d === void 0 ? null : d, h = a.outputCalendar, p = h === void 0 ? "gregory" : h;
    return (m || B.create(s, l, p)).months(t);
  }, r.monthsFormat = function(t, n) {
    t === void 0 && (t = "long");
    var a = n === void 0 ? {} : n, i = a.locale, s = i === void 0 ? null : i, o = a.numberingSystem, l = o === void 0 ? null : o, d = a.locObj, m = d === void 0 ? null : d, h = a.outputCalendar, p = h === void 0 ? "gregory" : h;
    return (m || B.create(s, l, p)).months(t, !0);
  }, r.weekdays = function(t, n) {
    t === void 0 && (t = "long");
    var a = n === void 0 ? {} : n, i = a.locale, s = i === void 0 ? null : i, o = a.numberingSystem, l = o === void 0 ? null : o, d = a.locObj, m = d === void 0 ? null : d;
    return (m || B.create(s, l, null)).weekdays(t);
  }, r.weekdaysFormat = function(t, n) {
    t === void 0 && (t = "long");
    var a = n === void 0 ? {} : n, i = a.locale, s = i === void 0 ? null : i, o = a.numberingSystem, l = o === void 0 ? null : o, d = a.locObj, m = d === void 0 ? null : d;
    return (m || B.create(s, l, null)).weekdays(t, !0);
  }, r.meridiems = function(t) {
    var n = t === void 0 ? {} : t, a = n.locale, i = a === void 0 ? null : a;
    return B.create(i).meridiems();
  }, r.eras = function(t, n) {
    t === void 0 && (t = "short");
    var a = n === void 0 ? {} : n, i = a.locale, s = i === void 0 ? null : i;
    return B.create(s, null, "gregory").eras(t);
  }, r.features = function() {
    var t = !1, n = !1, a = !1, i = !1;
    if (pr()) {
      t = !0, n = De(), i = Af();
      try {
        a = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        a = !1;
      }
    }
    return {
      intl: t,
      intlTokens: n,
      zones: a,
      relative: i
    };
  }, r;
}();
function Vo(r, e) {
  var t = function(i) {
    return i.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf();
  }, n = t(e) - t(r);
  return Math.floor(K.fromMillis(n).as("days"));
}
function Tk(r, e, t) {
  for (var n = [["years", function(_, O) {
    return O.year - _.year;
  }], ["quarters", function(_, O) {
    return O.quarter - _.quarter;
  }], ["months", function(_, O) {
    return O.month - _.month + (O.year - _.year) * 12;
  }], ["weeks", function(_, O) {
    var T = Vo(_, O);
    return (T - T % 7) / 7;
  }], ["days", Vo]], a = {}, i, s, o = 0, l = n; o < l.length; o++) {
    var d = l[o], m = d[0], h = d[1];
    if (t.indexOf(m) >= 0) {
      var p;
      i = m;
      var g = h(r, e);
      if (s = r.plus((p = {}, p[m] = g, p)), s > e) {
        var w;
        r = r.plus((w = {}, w[m] = g - 1, w)), g -= 1;
      } else
        r = s;
      a[m] = g;
    }
  }
  return [r, a, s, i];
}
function _k(r, e, t, n) {
  var a = Tk(r, e, t), i = a[0], s = a[1], o = a[2], l = a[3], d = e - i, m = t.filter(function(w) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(w) >= 0;
  });
  if (m.length === 0) {
    if (o < e) {
      var h;
      o = i.plus((h = {}, h[l] = 1, h));
    }
    o !== i && (s[l] = (s[l] || 0) + d / (o - i));
  }
  var p = K.fromObject(Object.assign(s, n));
  if (m.length > 0) {
    var g;
    return (g = K.fromMillis(d, n)).shiftTo.apply(g, m).plus(p);
  } else
    return p;
}
var ti = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, zo = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Ok = ti.hanidec.replace(/[\[|\]]/g, "").split("");
function Ek(r) {
  var e = parseInt(r, 10);
  if (isNaN(e)) {
    e = "";
    for (var t = 0; t < r.length; t++) {
      var n = r.charCodeAt(t);
      if (r[t].search(ti.hanidec) !== -1)
        e += Ok.indexOf(r[t]);
      else
        for (var a in zo) {
          var i = zo[a], s = i[0], o = i[1];
          n >= s && n <= o && (e += n - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function ur(r, e) {
  var t = r.numberingSystem;
  return e === void 0 && (e = ""), new RegExp("" + ti[t || "latn"] + e);
}
var Ak = "missing Intl.DateTimeFormat.formatToParts support";
function I(r, e) {
  return e === void 0 && (e = function(n) {
    return n;
  }), {
    regex: r,
    deser: function(n) {
      var a = n[0];
      return e(Ek(a));
    }
  };
}
var Ik = String.fromCharCode(160), Wf = "( |" + Ik + ")", Yf = new RegExp(Wf, "g");
function xk(r) {
  return r.replace(/\./g, "\\.?").replace(Yf, Wf);
}
function Go(r) {
  return r.replace(/\./g, "").replace(Yf, " ").toLowerCase();
}
function fr(r, e) {
  return r === null ? null : {
    regex: RegExp(r.map(xk).join("|")),
    deser: function(n) {
      var a = n[0];
      return r.findIndex(function(i) {
        return Go(a) === Go(i);
      }) + e;
    }
  };
}
function Ho(r, e) {
  return {
    regex: r,
    deser: function(n) {
      var a = n[1], i = n[2];
      return Ut(a, i);
    },
    groups: e
  };
}
function Zo(r) {
  return {
    regex: r,
    deser: function(t) {
      var n = t[0];
      return n;
    }
  };
}
function Ck(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Mk(r, e) {
  var t = ur(e), n = ur(e, "{2}"), a = ur(e, "{3}"), i = ur(e, "{4}"), s = ur(e, "{6}"), o = ur(e, "{1,2}"), l = ur(e, "{1,3}"), d = ur(e, "{1,6}"), m = ur(e, "{1,9}"), h = ur(e, "{2,4}"), p = ur(e, "{4,6}"), g = function(T) {
    return {
      regex: RegExp(Ck(T.val)),
      deser: function(_r) {
        var wr = _r[0];
        return wr;
      },
      literal: !0
    };
  }, w = function(T) {
    if (r.literal)
      return g(T);
    switch (T.val) {
      case "G":
        return fr(e.eras("short", !1), 0);
      case "GG":
        return fr(e.eras("long", !1), 0);
      case "y":
        return I(d);
      case "yy":
        return I(h, Rn);
      case "yyyy":
        return I(i);
      case "yyyyy":
        return I(p);
      case "yyyyyy":
        return I(s);
      case "M":
        return I(o);
      case "MM":
        return I(n);
      case "MMM":
        return fr(e.months("short", !0, !1), 1);
      case "MMMM":
        return fr(e.months("long", !0, !1), 1);
      case "L":
        return I(o);
      case "LL":
        return I(n);
      case "LLL":
        return fr(e.months("short", !1, !1), 1);
      case "LLLL":
        return fr(e.months("long", !1, !1), 1);
      case "d":
        return I(o);
      case "dd":
        return I(n);
      case "o":
        return I(l);
      case "ooo":
        return I(a);
      case "HH":
        return I(n);
      case "H":
        return I(o);
      case "hh":
        return I(n);
      case "h":
        return I(o);
      case "mm":
        return I(n);
      case "m":
        return I(o);
      case "q":
        return I(o);
      case "qq":
        return I(n);
      case "s":
        return I(o);
      case "ss":
        return I(n);
      case "S":
        return I(l);
      case "SSS":
        return I(a);
      case "u":
        return Zo(m);
      case "a":
        return fr(e.meridiems(), 0);
      case "kkkk":
        return I(i);
      case "kk":
        return I(h, Rn);
      case "W":
        return I(o);
      case "WW":
        return I(n);
      case "E":
      case "c":
        return I(t);
      case "EEE":
        return fr(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return fr(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return fr(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return fr(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Ho(new RegExp("([+-]" + o.source + ")(?::(" + n.source + "))?"), 2);
      case "ZZZ":
        return Ho(new RegExp("([+-]" + o.source + ")(" + n.source + ")?"), 2);
      case "z":
        return Zo(/[a-z_+-/]{1,256}?/i);
      default:
        return g(T);
    }
  }, _ = w(r) || {
    invalidReason: Ak
  };
  return _.token = r, _;
}
var Fk = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function Nk(r, e, t) {
  var n = r.type, a = r.value;
  if (n === "literal")
    return {
      literal: !0,
      val: a
    };
  var i = t[n], s = Fk[n];
  if (typeof s == "object" && (s = s[i]), s)
    return {
      literal: !1,
      val: s
    };
}
function kk(r) {
  var e = r.map(function(t) {
    return t.regex;
  }).reduce(function(t, n) {
    return t + "(" + n.source + ")";
  }, "");
  return ["^" + e + "$", r];
}
function Dk(r, e, t) {
  var n = r.match(e);
  if (n) {
    var a = {}, i = 1;
    for (var s in t)
      if (ne(t, s)) {
        var o = t[s], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (a[o.token.val[0]] = o.deser(n.slice(i, i + l))), i += l;
      }
    return [n, a];
  } else
    return [n, {}];
}
function Pk(r) {
  var e = function(i) {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  }, t;
  A(r.Z) ? A(r.z) ? t = null : t = yr.create(r.z) : t = new rr(r.Z), A(r.q) || (r.M = (r.q - 1) * 3 + 1), A(r.h) || (r.h < 12 && r.a === 1 ? r.h += 12 : r.h === 12 && r.a === 0 && (r.h = 0)), r.G === 0 && r.y && (r.y = -r.y), A(r.u) || (r.S = Ja(r.u));
  var n = Object.keys(r).reduce(function(a, i) {
    var s = e(i);
    return s && (a[s] = r[i]), a;
  }, {});
  return [n, t];
}
var un = null;
function Lk() {
  return un || (un = j.fromMillis(1555555555555)), un;
}
function Uk(r, e) {
  if (r.literal)
    return r;
  var t = mr.macroTokenToFormatOpts(r.val);
  if (!t)
    return r;
  var n = mr.create(e, t), a = n.formatDateTimeParts(Lk()), i = a.map(function(s) {
    return Nk(s, e, t);
  });
  return i.includes(void 0) ? r : i;
}
function jk(r, e) {
  var t;
  return (t = Array.prototype).concat.apply(t, r.map(function(n) {
    return Uk(n, e);
  }));
}
function Jf(r, e, t) {
  var n = jk(mr.parseFormat(t), r), a = n.map(function(O) {
    return Mk(O, r);
  }), i = a.find(function(O) {
    return O.invalidReason;
  });
  if (i)
    return {
      input: e,
      tokens: n,
      invalidReason: i.invalidReason
    };
  var s = kk(a), o = s[0], l = s[1], d = RegExp(o, "i"), m = Dk(e, d, l), h = m[0], p = m[1], g = p ? Pk(p) : [null, null], w = g[0], _ = g[1];
  if (ne(p, "a") && ne(p, "H"))
    throw new _e("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: n,
    regex: d,
    rawMatches: h,
    matches: p,
    result: w,
    zone: _
  };
}
function Rk(r, e, t) {
  var n = Jf(r, e, t), a = n.result, i = n.zone, s = n.invalidReason;
  return [a, i, s];
}
var Xf = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Kf = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function or(r, e) {
  return new lr("unit out of range", "you specified " + e + " (of type " + typeof e + ") as a " + r + ", which is invalid");
}
function Qf(r, e, t) {
  var n = new Date(Date.UTC(r, e - 1, t)).getUTCDay();
  return n === 0 ? 7 : n;
}
function rl(r, e, t) {
  return t + (Pe(r) ? Kf : Xf)[e - 1];
}
function el(r, e) {
  var t = Pe(r) ? Kf : Xf, n = t.findIndex(function(i) {
    return i < e;
  }), a = e - t[n];
  return {
    month: n + 1,
    day: a
  };
}
function Zn(r) {
  var e = r.year, t = r.month, n = r.day, a = rl(e, t, n), i = Qf(e, t, n), s = Math.floor((a - i + 10) / 7), o;
  return s < 1 ? (o = e - 1, s = ft(o)) : s > ft(e) ? (o = e + 1, s = 1) : o = e, Object.assign({
    weekYear: o,
    weekNumber: s,
    weekday: i
  }, jt(r));
}
function qo(r) {
  var e = r.weekYear, t = r.weekNumber, n = r.weekday, a = Qf(e, 1, 4), i = Ie(e), s = t * 7 + n - a - 3, o;
  s < 1 ? (o = e - 1, s += Ie(o)) : s > i ? (o = e + 1, s -= Ie(e)) : o = e;
  var l = el(o, s), d = l.month, m = l.day;
  return Object.assign({
    year: o,
    month: d,
    day: m
  }, jt(r));
}
function fn(r) {
  var e = r.year, t = r.month, n = r.day, a = rl(e, t, n);
  return Object.assign({
    year: e,
    ordinal: a
  }, jt(r));
}
function Wo(r) {
  var e = r.year, t = r.ordinal, n = el(e, t), a = n.month, i = n.day;
  return Object.assign({
    year: e,
    month: a,
    day: i
  }, jt(r));
}
function Bk(r) {
  var e = Lt(r.weekYear), t = Sr(r.weekNumber, 1, ft(r.weekYear)), n = Sr(r.weekday, 1, 7);
  return e ? t ? n ? !1 : or("weekday", r.weekday) : or("week", r.week) : or("weekYear", r.weekYear);
}
function Vk(r) {
  var e = Lt(r.year), t = Sr(r.ordinal, 1, Ie(r.year));
  return e ? t ? !1 : or("ordinal", r.ordinal) : or("year", r.year);
}
function tl(r) {
  var e = Lt(r.year), t = Sr(r.month, 1, 12), n = Sr(r.day, 1, ut(r.year, r.month));
  return e ? t ? n ? !1 : or("day", r.day) : or("month", r.month) : or("year", r.year);
}
function nl(r) {
  var e = r.hour, t = r.minute, n = r.second, a = r.millisecond, i = Sr(e, 0, 23) || e === 24 && t === 0 && n === 0 && a === 0, s = Sr(t, 0, 59), o = Sr(n, 0, 59), l = Sr(a, 0, 999);
  return i ? s ? o ? l ? !1 : or("millisecond", a) : or("second", n) : or("minute", t) : or("hour", e);
}
var ln = "Invalid DateTime", Yo = 864e13;
function Je(r) {
  return new lr("unsupported zone", 'the zone "' + r.name + '" is not supported');
}
function cn(r) {
  return r.weekData === null && (r.weekData = Zn(r.c)), r.weekData;
}
function be(r, e) {
  var t = {
    ts: r.ts,
    zone: r.zone,
    c: r.c,
    o: r.o,
    loc: r.loc,
    invalid: r.invalid
  };
  return new j(Object.assign({}, t, e, {
    old: t
  }));
}
function al(r, e, t) {
  var n = r - e * 60 * 1e3, a = t.offset(n);
  if (e === a)
    return [n, e];
  n -= (a - e) * 60 * 1e3;
  var i = t.offset(n);
  return a === i ? [n, a] : [r - Math.min(a, i) * 60 * 1e3, Math.max(a, i)];
}
function Jo(r, e) {
  r += e * 60 * 1e3;
  var t = new Date(r);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function et(r, e, t) {
  return al(Ka(r), e, t);
}
function Xo(r, e) {
  var t = r.o, n = r.c.year + Math.trunc(e.years), a = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = Object.assign({}, r.c, {
    year: n,
    month: a,
    day: Math.min(r.c.day, ut(n, a)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }), s = K.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Ka(i), l = al(o, t, r.zone), d = l[0], m = l[1];
  return s !== 0 && (d += s, m = r.zone.offset(d)), {
    ts: d,
    o: m
  };
}
function we(r, e, t, n, a) {
  var i = t.setZone, s = t.zone;
  if (r && Object.keys(r).length !== 0) {
    var o = e || s, l = j.fromObject(Object.assign(r, t, {
      zone: o,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: void 0
    }));
    return i ? l : l.setZone(s);
  } else
    return j.invalid(new lr("unparsable", 'the input "' + a + `" can't be parsed as ` + n));
}
function Qr(r, e, t) {
  return t === void 0 && (t = !0), r.isValid ? mr.create(B.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(r, e) : null;
}
function Ko(r, e) {
  var t = e.suppressSeconds, n = t === void 0 ? !1 : t, a = e.suppressMilliseconds, i = a === void 0 ? !1 : a, s = e.includeOffset, o = e.includePrefix, l = o === void 0 ? !1 : o, d = e.includeZone, m = d === void 0 ? !1 : d, h = e.spaceZone, p = h === void 0 ? !1 : h, g = e.format, w = g === void 0 ? "extended" : g, _ = w === "basic" ? "HHmm" : "HH:mm";
  (!n || r.second !== 0 || r.millisecond !== 0) && (_ += w === "basic" ? "ss" : ":ss", (!i || r.millisecond !== 0) && (_ += ".SSS")), (m || s) && p && (_ += " "), m ? _ += "z" : s && (_ += w === "basic" ? "ZZZ" : "ZZ");
  var O = Qr(r, _);
  return l && (O = "T" + O), O;
}
var il = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, zk = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Gk = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ol = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Hk = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], Zk = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Qo(r) {
  var e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[r.toLowerCase()];
  if (!e)
    throw new _f(r);
  return e;
}
function rs(r, e) {
  for (var t = Ar(ol), n; !(n = t()).done; ) {
    var a = n.value;
    A(r[a]) && (r[a] = il[a]);
  }
  var i = tl(r) || nl(r);
  if (i)
    return j.invalid(i);
  var s = U.now(), o = e.offset(s), l = et(r, o, e), d = l[0], m = l[1];
  return new j({
    ts: d,
    zone: e,
    o: m
  });
}
function es(r, e, t) {
  var n = A(t.round) ? !0 : t.round, a = function(h, p) {
    h = Xa(h, n || t.calendary ? 0 : 2, !0);
    var g = e.loc.clone(t).relFormatter(t);
    return g.format(h, p);
  }, i = function(h) {
    return t.calendary ? e.hasSame(r, h) ? 0 : e.startOf(h).diff(r.startOf(h), h).get(h) : e.diff(r, h).get(h);
  };
  if (t.unit)
    return a(i(t.unit), t.unit);
  for (var s = Ar(t.units), o; !(o = s()).done; ) {
    var l = o.value, d = i(l);
    if (Math.abs(d) >= 1)
      return a(d, l);
  }
  return a(r > e ? -0 : 0, t.units[t.units.length - 1]);
}
var j = /* @__PURE__ */ function() {
  function r(t) {
    var n = t.zone || U.defaultZone, a = t.invalid || (Number.isNaN(t.ts) ? new lr("invalid input") : null) || (n.isValid ? null : Je(n));
    this.ts = A(t.ts) ? U.now() : t.ts;
    var i = null, s = null;
    if (!a) {
      var o = t.old && t.old.ts === this.ts && t.old.zone.equals(n);
      if (o) {
        var l = [t.old.c, t.old.o];
        i = l[0], s = l[1];
      } else {
        var d = n.offset(this.ts);
        i = Jo(this.ts, d), a = Number.isNaN(i.year) ? new lr("invalid input") : null, i = a ? null : i, s = a ? null : d;
      }
    }
    this._zone = n, this.loc = t.loc || B.create(), this.invalid = a, this.weekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  r.now = function() {
    return new r({});
  }, r.local = function(n, a, i, s, o, l, d) {
    return A(n) ? r.now() : rs({
      year: n,
      month: a,
      day: i,
      hour: s,
      minute: o,
      second: l,
      millisecond: d
    }, U.defaultZone);
  }, r.utc = function(n, a, i, s, o, l, d) {
    return A(n) ? new r({
      ts: U.now(),
      zone: rr.utcInstance
    }) : rs({
      year: n,
      month: a,
      day: i,
      hour: s,
      minute: o,
      second: l,
      millisecond: d
    }, rr.utcInstance);
  }, r.fromJSDate = function(n, a) {
    a === void 0 && (a = {});
    var i = e8(n) ? n.valueOf() : NaN;
    if (Number.isNaN(i))
      return r.invalid("invalid input");
    var s = Lr(a.zone, U.defaultZone);
    return s.isValid ? new r({
      ts: i,
      zone: s,
      loc: B.fromObject(a)
    }) : r.invalid(Je(s));
  }, r.fromMillis = function(n, a) {
    if (a === void 0 && (a = {}), Rr(n))
      return n < -Yo || n > Yo ? r.invalid("Timestamp out of range") : new r({
        ts: n,
        zone: Lr(a.zone, U.defaultZone),
        loc: B.fromObject(a)
      });
    throw new ir("fromMillis requires a numerical input, but received a " + typeof n + " with value " + n);
  }, r.fromSeconds = function(n, a) {
    if (a === void 0 && (a = {}), Rr(n))
      return new r({
        ts: n * 1e3,
        zone: Lr(a.zone, U.defaultZone),
        loc: B.fromObject(a)
      });
    throw new ir("fromSeconds requires a numerical input");
  }, r.fromObject = function(n) {
    var a = Lr(n.zone, U.defaultZone);
    if (!a.isValid)
      return r.invalid(Je(a));
    var i = U.now(), s = a.offset(i), o = lt(n, Qo, ["zone", "locale", "outputCalendar", "numberingSystem"]), l = !A(o.ordinal), d = !A(o.year), m = !A(o.month) || !A(o.day), h = d || m, p = o.weekYear || o.weekNumber, g = B.fromObject(n);
    if ((h || l) && p)
      throw new _e("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (m && l)
      throw new _e("Can't mix ordinal dates with month/day");
    var w = p || o.weekday && !h, _, O, T = Jo(i, s);
    w ? (_ = Hk, O = zk, T = Zn(T)) : l ? (_ = Zk, O = Gk, T = fn(T)) : (_ = ol, O = il);
    for (var L = !1, _r = Ar(_), wr; !(wr = _r()).done; ) {
      var G = wr.value, Le = o[G];
      A(Le) ? L ? o[G] = O[G] : o[G] = T[G] : L = !0;
    }
    var Ue = w ? Bk(o) : l ? Vk(o) : tl(o), je = Ue || nl(o);
    if (je)
      return r.invalid(je);
    var Bt = w ? qo(o) : l ? Wo(o) : o, Re = et(Bt, s, a), Vt = Re[0], zt = Re[1], ye = new r({
      ts: Vt,
      zone: a,
      o: zt,
      loc: g
    });
    return o.weekday && h && n.weekday !== ye.weekday ? r.invalid("mismatched weekday", "you can't specify both a weekday of " + o.weekday + " and a date of " + ye.toISO()) : ye;
  }, r.fromISO = function(n, a) {
    a === void 0 && (a = {});
    var i = ik(n), s = i[0], o = i[1];
    return we(s, o, a, "ISO 8601", n);
  }, r.fromRFC2822 = function(n, a) {
    a === void 0 && (a = {});
    var i = ok(n), s = i[0], o = i[1];
    return we(s, o, a, "RFC 2822", n);
  }, r.fromHTTP = function(n, a) {
    a === void 0 && (a = {});
    var i = sk(n), s = i[0], o = i[1];
    return we(s, o, a, "HTTP", a);
  }, r.fromFormat = function(n, a, i) {
    if (i === void 0 && (i = {}), A(n) || A(a))
      throw new ir("fromFormat requires an input string and a format");
    var s = i, o = s.locale, l = o === void 0 ? null : o, d = s.numberingSystem, m = d === void 0 ? null : d, h = B.fromOpts({
      locale: l,
      numberingSystem: m,
      defaultToEN: !0
    }), p = Rk(h, n, a), g = p[0], w = p[1], _ = p[2];
    return _ ? r.invalid(_) : we(g, w, i, "format " + a, n);
  }, r.fromString = function(n, a, i) {
    return i === void 0 && (i = {}), r.fromFormat(n, a, i);
  }, r.fromSQL = function(n, a) {
    a === void 0 && (a = {});
    var i = mk(n), s = i[0], o = i[1];
    return we(s, o, a, "SQL", n);
  }, r.invalid = function(n, a) {
    if (a === void 0 && (a = null), !n)
      throw new ir("need to specify a reason the DateTime is invalid");
    var i = n instanceof lr ? n : new lr(n, a);
    if (U.throwOnInvalid)
      throw new XN(i);
    return new r({
      invalid: i
    });
  }, r.isDateTime = function(n) {
    return n && n.isLuxonDateTime || !1;
  };
  var e = r.prototype;
  return e.get = function(n) {
    return this[n];
  }, e.resolvedLocaleOpts = function(n) {
    n === void 0 && (n = {});
    var a = mr.create(this.loc.clone(n), n).resolvedOptions(this), i = a.locale, s = a.numberingSystem, o = a.calendar;
    return {
      locale: i,
      numberingSystem: s,
      outputCalendar: o
    };
  }, e.toUTC = function(n, a) {
    return n === void 0 && (n = 0), a === void 0 && (a = {}), this.setZone(rr.instance(n), a);
  }, e.toLocal = function() {
    return this.setZone(U.defaultZone);
  }, e.setZone = function(n, a) {
    var i = a === void 0 ? {} : a, s = i.keepLocalTime, o = s === void 0 ? !1 : s, l = i.keepCalendarTime, d = l === void 0 ? !1 : l;
    if (n = Lr(n, U.defaultZone), n.equals(this.zone))
      return this;
    if (n.isValid) {
      var m = this.ts;
      if (o || d) {
        var h = n.offset(this.ts), p = this.toObject(), g = et(p, h, n);
        m = g[0];
      }
      return be(this, {
        ts: m,
        zone: n
      });
    } else
      return r.invalid(Je(n));
  }, e.reconfigure = function(n) {
    var a = n === void 0 ? {} : n, i = a.locale, s = a.numberingSystem, o = a.outputCalendar, l = this.loc.clone({
      locale: i,
      numberingSystem: s,
      outputCalendar: o
    });
    return be(this, {
      loc: l
    });
  }, e.setLocale = function(n) {
    return this.reconfigure({
      locale: n
    });
  }, e.set = function(n) {
    if (!this.isValid)
      return this;
    var a = lt(n, Qo, []), i = !A(a.weekYear) || !A(a.weekNumber) || !A(a.weekday), s = !A(a.ordinal), o = !A(a.year), l = !A(a.month) || !A(a.day), d = o || l, m = a.weekYear || a.weekNumber;
    if ((d || s) && m)
      throw new _e("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (l && s)
      throw new _e("Can't mix ordinal dates with month/day");
    var h;
    i ? h = qo(Object.assign(Zn(this.c), a)) : A(a.ordinal) ? (h = Object.assign(this.toObject(), a), A(a.day) && (h.day = Math.min(ut(h.year, h.month), h.day))) : h = Wo(Object.assign(fn(this.c), a));
    var p = et(h, this.o, this.zone), g = p[0], w = p[1];
    return be(this, {
      ts: g,
      o: w
    });
  }, e.plus = function(n) {
    if (!this.isValid)
      return this;
    var a = jr(n);
    return be(this, Xo(this, a));
  }, e.minus = function(n) {
    if (!this.isValid)
      return this;
    var a = jr(n).negate();
    return be(this, Xo(this, a));
  }, e.startOf = function(n) {
    if (!this.isValid)
      return this;
    var a = {}, i = K.normalizeUnit(n);
    switch (i) {
      case "years":
        a.month = 1;
      case "quarters":
      case "months":
        a.day = 1;
      case "weeks":
      case "days":
        a.hour = 0;
      case "hours":
        a.minute = 0;
      case "minutes":
        a.second = 0;
      case "seconds":
        a.millisecond = 0;
        break;
    }
    if (i === "weeks" && (a.weekday = 1), i === "quarters") {
      var s = Math.ceil(this.month / 3);
      a.month = (s - 1) * 3 + 1;
    }
    return this.set(a);
  }, e.endOf = function(n) {
    var a;
    return this.isValid ? this.plus((a = {}, a[n] = 1, a)).startOf(n).minus(1) : this;
  }, e.toFormat = function(n, a) {
    return a === void 0 && (a = {}), this.isValid ? mr.create(this.loc.redefaultToEN(a)).formatDateTimeFromString(this, n) : ln;
  }, e.toLocaleString = function(n) {
    return n === void 0 && (n = st), this.isValid ? mr.create(this.loc.clone(n), n).formatDateTime(this) : ln;
  }, e.toLocaleParts = function(n) {
    return n === void 0 && (n = {}), this.isValid ? mr.create(this.loc.clone(n), n).formatDateTimeParts(this) : [];
  }, e.toISO = function(n) {
    return n === void 0 && (n = {}), this.isValid ? this.toISODate(n) + "T" + this.toISOTime(n) : null;
  }, e.toISODate = function(n) {
    var a = n === void 0 ? {} : n, i = a.format, s = i === void 0 ? "extended" : i, o = s === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (o = "+" + o), Qr(this, o);
  }, e.toISOWeekDate = function() {
    return Qr(this, "kkkk-'W'WW-c");
  }, e.toISOTime = function(n) {
    var a = n === void 0 ? {} : n, i = a.suppressMilliseconds, s = i === void 0 ? !1 : i, o = a.suppressSeconds, l = o === void 0 ? !1 : o, d = a.includeOffset, m = d === void 0 ? !0 : d, h = a.includePrefix, p = h === void 0 ? !1 : h, g = a.format, w = g === void 0 ? "extended" : g;
    return Ko(this, {
      suppressSeconds: l,
      suppressMilliseconds: s,
      includeOffset: m,
      includePrefix: p,
      format: w
    });
  }, e.toRFC2822 = function() {
    return Qr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }, e.toHTTP = function() {
    return Qr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }, e.toSQLDate = function() {
    return Qr(this, "yyyy-MM-dd");
  }, e.toSQLTime = function(n) {
    var a = n === void 0 ? {} : n, i = a.includeOffset, s = i === void 0 ? !0 : i, o = a.includeZone, l = o === void 0 ? !1 : o;
    return Ko(this, {
      includeOffset: s,
      includeZone: l,
      spaceZone: !0
    });
  }, e.toSQL = function(n) {
    return n === void 0 && (n = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(n) : null;
  }, e.toString = function() {
    return this.isValid ? this.toISO() : ln;
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.toMillis = function() {
    return this.isValid ? this.ts : NaN;
  }, e.toSeconds = function() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toBSON = function() {
    return this.toJSDate();
  }, e.toObject = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return {};
    var a = Object.assign({}, this.c);
    return n.includeConfig && (a.outputCalendar = this.outputCalendar, a.numberingSystem = this.loc.numberingSystem, a.locale = this.loc.locale), a;
  }, e.toJSDate = function() {
    return new Date(this.isValid ? this.ts : NaN);
  }, e.diff = function(n, a, i) {
    if (a === void 0 && (a = "milliseconds"), i === void 0 && (i = {}), !this.isValid || !n.isValid)
      return K.invalid(this.invalid || n.invalid, "created by diffing an invalid DateTime");
    var s = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, i), o = t8(a).map(K.normalizeUnit), l = n.valueOf() > this.valueOf(), d = l ? this : n, m = l ? n : this, h = _k(d, m, o, s);
    return l ? h.negate() : h;
  }, e.diffNow = function(n, a) {
    return n === void 0 && (n = "milliseconds"), a === void 0 && (a = {}), this.diff(r.now(), n, a);
  }, e.until = function(n) {
    return this.isValid ? xe.fromDateTimes(this, n) : this;
  }, e.hasSame = function(n, a) {
    if (!this.isValid)
      return !1;
    var i = n.valueOf(), s = this.setZone(n.zone, {
      keepLocalTime: !0
    });
    return s.startOf(a) <= i && i <= s.endOf(a);
  }, e.equals = function(n) {
    return this.isValid && n.isValid && this.valueOf() === n.valueOf() && this.zone.equals(n.zone) && this.loc.equals(n.loc);
  }, e.toRelative = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return null;
    var a = n.base || r.fromObject({
      zone: this.zone
    }), i = n.padding ? this < a ? -n.padding : n.padding : 0, s = ["years", "months", "days", "hours", "minutes", "seconds"], o = n.unit;
    return Array.isArray(n.unit) && (s = n.unit, o = void 0), es(a, this.plus(i), Object.assign(n, {
      numeric: "always",
      units: s,
      unit: o
    }));
  }, e.toRelativeCalendar = function(n) {
    return n === void 0 && (n = {}), this.isValid ? es(n.base || r.fromObject({
      zone: this.zone
    }), this, Object.assign(n, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    })) : null;
  }, r.min = function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    if (!a.every(r.isDateTime))
      throw new ir("min requires all arguments be DateTimes");
    return ko(a, function(s) {
      return s.valueOf();
    }, Math.min);
  }, r.max = function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    if (!a.every(r.isDateTime))
      throw new ir("max requires all arguments be DateTimes");
    return ko(a, function(s) {
      return s.valueOf();
    }, Math.max);
  }, r.fromFormatExplain = function(n, a, i) {
    i === void 0 && (i = {});
    var s = i, o = s.locale, l = o === void 0 ? null : o, d = s.numberingSystem, m = d === void 0 ? null : d, h = B.fromOpts({
      locale: l,
      numberingSystem: m,
      defaultToEN: !0
    });
    return Jf(h, n, a);
  }, r.fromStringExplain = function(n, a, i) {
    return i === void 0 && (i = {}), r.fromFormatExplain(n, a, i);
  }, cr(r, [{
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function() {
      return this.isValid ? cn(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function() {
      return this.isValid ? cn(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function() {
      return this.isValid ? cn(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function() {
      return this.isValid ? fn(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function() {
      return this.isValid ? Oe.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function() {
      return this.isValid ? Oe.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function() {
      return this.isValid ? Oe.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function() {
      return this.isValid ? Oe.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function() {
      return Pe(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function() {
      return ut(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function() {
      return this.isValid ? Ie(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function() {
      return this.isValid ? ft(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function() {
      return st;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function() {
      return Ma;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function() {
      return Of;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function() {
      return Fa;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function() {
      return Na;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function() {
      return ka;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function() {
      return Da;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function() {
      return Pa;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function() {
      return La;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function() {
      return Ua;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function() {
      return ja;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function() {
      return Ra;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function() {
      return Ba;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function() {
      return Va;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function() {
      return za;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function() {
      return Ga;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function() {
      return Ha;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function() {
      return Ef;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function() {
      return Za;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function() {
      return qa;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function() {
      return Wa;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function() {
      return Ya;
    }
  }]), r;
}();
function Se(r) {
  if (j.isDateTime(r))
    return r;
  if (r && r.valueOf && Rr(r.valueOf()))
    return j.fromJSDate(r);
  if (r && typeof r == "object")
    return j.fromObject(r);
  throw new ir("Unknown datetime argument: " + r + ", of type " + typeof r);
}
var qk = "1.28.0";
tr.DateTime = j;
tr.Duration = K;
tr.FixedOffsetZone = rr;
tr.IANAZone = yr;
tr.Info = Oe;
tr.Interval = xe;
tr.InvalidZone = Bn;
tr.LocalZone = jf;
tr.Settings = U;
tr.VERSION = qk;
tr.Zone = ve;
const { DateTime: ts } = tr, { IncorrectUsageError: Wk } = $f, Yk = {
  invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
}, Jk = ["month"], Xk = (r, e) => {
  if (e === "month") {
    const t = ts.fromISO(r, { zone: "UTC" }), n = ts.now().setZone("UTC"), a = Math.floor(n.diff(t, "months").months);
    return t.plus({ months: a }).toISO();
  }
  throw new Wk({
    message: Yk.invalidInterval
  });
};
var Kk = {
  lastPeriodStart: Xk,
  SUPPORTED_INTERVALS: Jk
};
const Ce = PF, sl = ZN, { lastPeriodStart: Qk, SUPPORTED_INTERVALS: ns } = Kk, ul = /{{([\s\S]+?)}}/g;
class Rt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {String} options.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, error: t, helpLink: n, db: a, errors: i }) {
    this.name = e, this.error = t, this.helpLink = n, this.db = a, this.errors = i;
  }
  generateError() {
    let e = {
      errorDetails: {
        name: this.name
      }
    };
    return this.helpLink && (e.help = this.helpLink), e;
  }
}
let rD = class extends Rt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.max - maximum limit the limit would check against
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {Function} [options.config.formatter] - function to format the limit counts before they are passed to the error message
   * @param {String} [options.config.error] - error message to use when limit is reached
   * @param {String} [options.helpLink] - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: t, helpLink: n, db: a, errors: i }) {
    if (super({ name: e, error: t.error || "", helpLink: n, db: a, errors: i }), t.max === void 0)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
    if (!t.currentCountQuery)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
    this.currentCountQueryFn = t.currentCountQuery, this.max = t.max, this.formatter = t.formatter, this.fallbackMessage = `This action would exceed the ${Ce(this.name)} limit on your current plan.`;
  }
  /**
   *
   * @param {Number} count - current count that acceded the limit
   * @returns {Object} instance of HostLimitError
   */
  generateError(e) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error) {
      const n = this.formatter || Intl.NumberFormat().format;
      try {
        t.message = sl(this.error, { interpolate: ul })(
          {
            max: n(this.max),
            count: n(e),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    }
    return t.errorDetails.limit = this.max, t.errorDetails.total = e, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    var t;
    return await this.currentCountQueryFn(e.transacting ?? ((t = this.db) == null ? void 0 : t.knex));
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: t, addedCount: n = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + n > (t || this.max))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const t = e.currentCount || await this.currentCountQuery(e);
    if (t > (e.max || this.max))
      throw this.generateError(t);
  }
}, eD = class extends Rt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.maxPeriodic - maximum limit the limit would check against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {('month')} options.config.interval - an interval to take into account when checking the limit. Currently only supports 'month' value
   * @param {String} options.config.startDate - start date in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601), used to calculate period intervals
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: t, helpLink: n, db: a, errors: i }) {
    if (super({ name: e, error: t.error || "", helpLink: n, db: a, errors: i }), t.maxPeriodic === void 0)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
    if (!t.currentCountQuery)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
    if (!t.interval)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
    if (!ns.includes(t.interval))
      throw new i.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${ns}` });
    if (!t.startDate)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
    this.currentCountQueryFn = t.currentCountQuery, this.maxPeriodic = t.maxPeriodic, this.interval = t.interval, this.startDate = t.startDate, this.fallbackMessage = `This action would exceed the ${Ce(this.name)} limit on your current plan.`;
  }
  generateError(e) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error)
      try {
        t.message = sl(this.error, { interpolate: ul })(
          {
            max: Intl.NumberFormat().format(this.maxPeriodic),
            count: Intl.NumberFormat().format(e),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    return t.errorDetails.limit = this.maxPeriodic, t.errorDetails.total = e, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    const t = Qk(this.startDate, this.interval);
    return await this.currentCountQueryFn(e.transacting ? e.transacting : this.db ? this.db.knex : void 0, t);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: t, addedCount: n = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + n > (t || this.maxPeriodic))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const { max: t } = e;
    let n = await this.currentCountQuery(e);
    if (n > (t || this.maxPeriodic))
      throw this.generateError(n);
  }
}, tD = class extends Rt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.disabled - disabled/enabled flag for the limit
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: t, helpLink: n, db: a, errors: i }) {
    super({ name: e, error: t.error || "", helpLink: n, db: a, errors: i }), this.disabled = t.disabled, this.fallbackMessage = `Your plan does not support ${Ce(this.name)}. Please upgrade to enable ${Ce(this.name)}.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  /**
   * Flag limits are on/off so using a feature is always over the limit
   */
  async errorIfWouldGoOverLimit() {
    if (this.disabled)
      throw this.generateError();
  }
  /**
   * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
   * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
   */
  async errorIfIsOverLimit() {
  }
}, nD = class extends Rt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {[String]} options.config.allowlist - allowlist values that would be compared against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: t, helpLink: n, errors: a }) {
    if (super({ name: e, error: t.error || "", helpLink: n, errors: a }), !t.allowlist || !t.allowlist.length)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
    this.allowlist = t.allowlist, this.fallbackMessage = `This action would exceed the ${Ce(this.name)} limit on your current plan.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  async errorIfWouldGoOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
  async errorIfIsOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
};
var aD = {
  MaxLimit: rD,
  MaxPeriodicLimit: eD,
  FlagLimit: tD,
  AllowlistLimit: nD
}, iD = {
  members: {
    currentCountQuery: async (r) => (await r("members").count("id", { as: "count" }).first()).count
  },
  newsletters: {
    currentCountQuery: async (r) => (await r("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
  },
  emails: {
    currentCountQuery: async (r, e) => (await r("emails").sum("email_count", { as: "count" }).where("created_at", ">=", e).first()).count
  },
  staff: {
    currentCountQuery: async (r) => (await r("users").select("users.id").leftJoin("roles_users", "users.id", "roles_users.user_id").leftJoin("roles", "roles_users.role_id", "roles.id").whereNot("roles.name", "Contributor").andWhereNot("users.status", "inactive").union([
      r("invites").select("invites.id").leftJoin("roles", "invites.role_id", "roles.id").whereNot("roles.name", "Contributor")
    ])).length
  },
  customIntegrations: {
    currentCountQuery: async (r) => (await r("integrations").count("id", { as: "count" }).whereNotIn("type", ["internal", "builtin"]).first()).count
  },
  customThemes: {},
  uploads: {
    // NOTE: this function should not ever be used as for uploads we compare the size
    //       of the uploaded file with the configured limit. Noop is here to keep the
    //       MaxLimit constructor happy
    currentCountQuery: () => {
    },
    // NOTE: the uploads limit is based on file sizes provided in Bytes
    //       a custom formatter is here for more user-friendly formatting when forming an error
    formatter: (r) => `${r / 1e6}MB`
  }
};
const as = nd, vn = fy, { IncorrectUsageError: is } = $f, { MaxLimit: oD, MaxPeriodicLimit: sD, FlagLimit: uD, AllowlistLimit: fD } = aD, os = iD, ss = {
  missingErrorsConfig: "Config Missing: 'errors' is required.",
  noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
};
class lD {
  constructor() {
    this.limits = {};
  }
  /**
   * Initializes the limits based on configuration
   *
   * @param {Object} options
   * @param {Object} [options.limits] - hash containing limit configurations keyed by limit name and containing
   * @param {Object} [options.subscription] - hash containing subscription configuration with interval and startDate properties
   * @param {String} options.helpLink - URL pointing to help resources for when limit is reached
   * @param {Object} options.db - knex db connection instance or other data source for the limit checks
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  loadLimits({ limits: e = {}, subscription: t, helpLink: n, db: a, errors: i }) {
    if (!i)
      throw new is({
        message: ss.missingErrorsConfig
      });
    this.errors = i, this.limits = {}, Object.keys(e).forEach((s) => {
      if (s = as(s), os[s]) {
        let o = Object.assign({}, os[s], e[s]);
        if (vn(o, "allowlist"))
          this.limits[s] = new fD({ name: s, config: o, helpLink: n, errors: i });
        else if (vn(o, "max"))
          this.limits[s] = new oD({ name: s, config: o, helpLink: n, db: a, errors: i });
        else if (vn(o, "maxPeriodic")) {
          if (t === void 0)
            throw new is({
              message: ss.noSubscriptionParameter
            });
          const l = Object.assign({}, o, t);
          this.limits[s] = new sD({ name: s, config: l, helpLink: n, db: a, errors: i });
        } else
          this.limits[s] = new uD({ name: s, config: o, helpLink: n, errors: i });
      }
    });
  }
  isLimited(e) {
    return !!this.limits[as(e)];
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkIsOverLimit(e, t = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfIsOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkWouldGoOverLimit(e, t = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfWouldGoOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfIsOverLimit(e, t = {}) {
    this.isLimited(e) && await this.limits[e].errorIfIsOverLimit(t);
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfWouldGoOverLimit(e, t = {}) {
    this.isLimited(e) && await this.limits[e].errorIfWouldGoOverLimit(t);
  }
  /**
   * Checks if any of the configured limits acceded
   *
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
   * @returns {Promise<boolean>}
   */
  async checkIfAnyOverLimit(e = {}) {
    for (const t in this.limits)
      if (await this.checkIsOverLimit(t, e))
        return !0;
    return !1;
  }
}
var fl = lD;
const cD = /* @__PURE__ */ bl(fl), HD = /* @__PURE__ */ wl({
  __proto__: null,
  default: cD
}, [fl]);
export {
  HD as l
};
//# sourceMappingURL=limit-service-c2ca5332.mjs.map
