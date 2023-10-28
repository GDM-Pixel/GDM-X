import { e as ke, f as N, b2 as wt, bL as qn, J as Rt, bM as _n, j as F, bN as Vn, O as Hn, C as Un, _ as zn, U as $n, P as Gn, Q as Kn } from "./index-2cbdc6fc.mjs";
import { E as p, F as fe, v as Ee, S as we, o as d, w as qe, C as Jn, x as jn, y as Tt, z as Ot, A as Se, B as It, G as Pt, H as Wt, J as ze, K as Xe, M as R, O as Z, g as et, b as $e, Q as Qn, R as ee, V as Ft, U as x, W as Yn, X as Zn, Y as ce, Z as M, _ as Xn, $ as er, a0 as tt, a1 as he, a2 as tr, a3 as nr, a4 as rr, a5 as or, a6 as ir, a7 as sr, a8 as lr, a9 as ar, aa as cr, ab as hr, ac as ur, ad as fr, ae as dr, af as mr, ag as Nt, ah as gr, ai as pr, aj as yr, ak as xr, al as kr, am as br, an as qt, ao as Sr, ap as Cr, t as f, aq as vr } from "./index-9cc1df42.mjs";
const Ar = (t) => {
  let { state: e } = t, r = e.doc.lineAt(e.selection.main.from), n = rt(t.state, r.from);
  return n.line ? Mr(t) : n.block ? Dr(t) : !1;
};
function nt(t, e) {
  return ({ state: r, dispatch: n }) => {
    if (r.readOnly)
      return !1;
    let o = t(e, r);
    return o ? (n(r.update(o)), !0) : !1;
  };
}
const Mr = /* @__PURE__ */ nt(
  wr,
  0
  /* CommentOption.Toggle */
), Lr = /* @__PURE__ */ nt(
  _t,
  0
  /* CommentOption.Toggle */
), Dr = /* @__PURE__ */ nt(
  (t, e) => _t(t, e, Er(e)),
  0
  /* CommentOption.Toggle */
);
function rt(t, e) {
  let r = t.languageDataAt("commentTokens", e);
  return r.length ? r[0] : {};
}
const ae = 50;
function Br(t, { open: e, close: r }, n, o) {
  let i = t.sliceDoc(n - ae, n), s = t.sliceDoc(o, o + ae), l = /\s*$/.exec(i)[0].length, a = /^\s*/.exec(s)[0].length, c = i.length - l;
  if (i.slice(c - e.length, c) == e && s.slice(a, a + r.length) == r)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: o + a, margin: a && 1 }
    };
  let h, u;
  o - n <= 2 * ae ? h = u = t.sliceDoc(n, o) : (h = t.sliceDoc(n, n + ae), u = t.sliceDoc(o - ae, o));
  let m = /^\s*/.exec(h)[0].length, k = /\s*$/.exec(u)[0].length, S = u.length - k - r.length;
  return h.slice(m, m + e.length) == e && u.slice(S, S + r.length) == r ? {
    open: {
      pos: n + m + e.length,
      margin: /\s/.test(h.charAt(m + e.length)) ? 1 : 0
    },
    close: {
      pos: o - k - r.length,
      margin: /\s/.test(u.charAt(S - 1)) ? 1 : 0
    }
  } : null;
}
function Er(t) {
  let e = [];
  for (let r of t.selection.ranges) {
    let n = t.doc.lineAt(r.from), o = r.to <= n.to ? n : t.doc.lineAt(r.to), i = e.length - 1;
    i >= 0 && e[i].to > n.from ? e[i].to = o.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: o.to });
  }
  return e;
}
function _t(t, e, r = e.selection.ranges) {
  let n = r.map((i) => rt(e, i.from).block);
  if (!n.every((i) => i))
    return null;
  let o = r.map((i, s) => Br(e, n[s], i.from, i.to));
  if (t != 2 && !o.every((i) => i))
    return { changes: e.changes(r.map((i, s) => o[s] ? [] : [{ from: i.from, insert: n[s].open + " " }, { from: i.to, insert: " " + n[s].close }])) };
  if (t != 1 && o.some((i) => i)) {
    let i = [];
    for (let s = 0, l; s < o.length; s++)
      if (l = o[s]) {
        let a = n[s], { open: c, close: h } = l;
        i.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: i };
  }
  return null;
}
function wr(t, e, r = e.selection.ranges) {
  let n = [], o = -1;
  for (let { from: i, to: s } of r) {
    let l = n.length, a = 1e9, c = rt(e, i).line;
    if (c) {
      for (let h = i; h <= s; ) {
        let u = e.doc.lineAt(h);
        if (u.from > o && (i == s || s > u.from)) {
          o = u.from;
          let m = /^\s*/.exec(u.text)[0].length, k = m == u.length, S = u.text.slice(m, m + c.length) == c ? m : -1;
          m < u.text.length && m < a && (a = m), n.push({ line: u, comment: S, token: c, indent: m, empty: k, single: !1 });
        }
        h = u.to + 1;
      }
      if (a < 1e9)
        for (let h = l; h < n.length; h++)
          n[h].indent < n[h].line.text.length && (n[h].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (t != 2 && n.some((i) => i.comment < 0 && (!i.empty || i.single))) {
    let i = [];
    for (let { line: l, token: a, indent: c, empty: h, single: u } of n)
      (u || !h) && i.push({ from: l.from + c, insert: a + " " });
    let s = e.changes(i);
    return { changes: s, selection: e.selection.map(s, 1) };
  } else if (t != 1 && n.some((i) => i.comment >= 0)) {
    let i = [];
    for (let { line: s, comment: l, token: a } of n)
      if (l >= 0) {
        let c = s.from + l, h = c + a.length;
        s.text[h - s.from] == " " && h++, i.push({ from: c, to: h });
      }
    return { changes: i };
  }
  return null;
}
const Ge = /* @__PURE__ */ Xe.define(), Rr = /* @__PURE__ */ Xe.define(), Tr = /* @__PURE__ */ fe.define(), Vt = /* @__PURE__ */ fe.define({
  combine(t) {
    return Ee(t, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, r) => r
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, r) => (n, o) => e(n, o) || r(n, o)
    });
  }
});
function Or(t) {
  let e = 0;
  return t.iterChangedRanges((r, n) => e = n), e;
}
const Ht = /* @__PURE__ */ we.define({
  create() {
    return O.empty;
  },
  update(t, e) {
    let r = e.state.facet(Vt), n = e.annotation(Ge);
    if (n) {
      let a = e.docChanged ? d.single(Or(e.changes)) : void 0, c = C.fromTransaction(e, a), h = n.side, u = h == 0 ? t.undone : t.done;
      return c ? u = Ce(u, u.length, r.minDepth, c) : u = $t(u, e.startState.selection), new O(h == 0 ? n.rest : u, h == 0 ? u : n.rest);
    }
    let o = e.annotation(Rr);
    if ((o == "full" || o == "before") && (t = t.isolate()), e.annotation(qe.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let i = C.fromTransaction(e), s = e.annotation(qe.time), l = e.annotation(qe.userEvent);
    return i ? t = t.addChanges(i, s, l, r, e) : e.selection && (t = t.addSelection(e.startState.selection, s, l, r.newGroupDelay)), (o == "full" || o == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new O(t.done.map(C.fromJSON), t.undone.map(C.fromJSON));
  }
});
function Ir(t = {}) {
  return [
    Ht,
    Vt.of(t),
    p.domEventHandlers({
      beforeinput(e, r) {
        let n = e.inputType == "historyUndo" ? Ut : e.inputType == "historyRedo" ? Ke : null;
        return n ? (e.preventDefault(), n(r)) : !1;
      }
    })
  ];
}
function Re(t, e) {
  return function({ state: r, dispatch: n }) {
    if (!e && r.readOnly)
      return !1;
    let o = r.field(Ht, !1);
    if (!o)
      return !1;
    let i = o.pop(t, r, e);
    return i ? (n(i), !0) : !1;
  };
}
const Ut = /* @__PURE__ */ Re(0, !1), Ke = /* @__PURE__ */ Re(1, !1), Pr = /* @__PURE__ */ Re(0, !0), Wr = /* @__PURE__ */ Re(1, !0);
class C {
  constructor(e, r, n, o, i) {
    this.changes = e, this.effects = r, this.mapped = n, this.startSelection = o, this.selectionsAfter = i;
  }
  setSelAfter(e) {
    return new C(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, r, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (r = this.mapped) === null || r === void 0 ? void 0 : r.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((o) => o.toJSON())
    };
  }
  static fromJSON(e) {
    return new C(e.changes && Jn.fromJSON(e.changes), [], e.mapped && jn.fromJSON(e.mapped), e.startSelection && d.fromJSON(e.startSelection), e.selectionsAfter.map(d.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, r) {
    let n = L;
    for (let o of e.startState.facet(Tr)) {
      let i = o(e);
      i.length && (n = n.concat(i));
    }
    return !n.length && e.changes.empty ? null : new C(e.changes.invert(e.startState.doc), n, void 0, r || e.startState.selection, L);
  }
  static selection(e) {
    return new C(void 0, L, void 0, void 0, e);
  }
}
function Ce(t, e, r, n) {
  let o = e + 1 > r + 20 ? e - r - 1 : 0, i = t.slice(o, e);
  return i.push(n), i;
}
function Fr(t, e) {
  let r = [], n = !1;
  return t.iterChangedRanges((o, i) => r.push(o, i)), e.iterChangedRanges((o, i, s, l) => {
    for (let a = 0; a < r.length; ) {
      let c = r[a++], h = r[a++];
      l >= c && s <= h && (n = !0);
    }
  }), n;
}
function Nr(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((r, n) => r.empty != e.ranges[n].empty).length === 0;
}
function zt(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const L = [], qr = 200;
function $t(t, e) {
  if (t.length) {
    let r = t[t.length - 1], n = r.selectionsAfter.slice(Math.max(0, r.selectionsAfter.length - qr));
    return n.length && n[n.length - 1].eq(e) ? t : (n.push(e), Ce(t, t.length - 1, 1e9, r.setSelAfter(n)));
  } else
    return [C.selection([e])];
}
function _r(t) {
  let e = t[t.length - 1], r = t.slice();
  return r[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), r;
}
function _e(t, e) {
  if (!t.length)
    return t;
  let r = t.length, n = L;
  for (; r; ) {
    let o = Vr(t[r - 1], e, n);
    if (o.changes && !o.changes.empty || o.effects.length) {
      let i = t.slice(0, r);
      return i[r - 1] = o, i;
    } else
      e = o.mapped, r--, n = o.selectionsAfter;
  }
  return n.length ? [C.selection(n)] : L;
}
function Vr(t, e, r) {
  let n = zt(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : L, r);
  if (!t.changes)
    return C.selection(n);
  let o = t.changes.map(e), i = e.mapDesc(t.changes, !0), s = t.mapped ? t.mapped.composeDesc(i) : i;
  return new C(o, R.mapEffects(t.effects, e), s, t.startSelection.map(i), n);
}
const Hr = /^(input\.type|delete)($|\.)/;
class O {
  constructor(e, r, n = 0, o = void 0) {
    this.done = e, this.undone = r, this.prevTime = n, this.prevUserEvent = o;
  }
  isolate() {
    return this.prevTime ? new O(this.done, this.undone) : this;
  }
  addChanges(e, r, n, o, i) {
    let s = this.done, l = s[s.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || Hr.test(n)) && (!l.selectionsAfter.length && r - this.prevTime < o.newGroupDelay && o.joinToEvent(i, Fr(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? s = Ce(s, s.length - 1, o.minDepth, new C(e.changes.compose(l.changes), zt(e.effects, l.effects), l.mapped, l.startSelection, L)) : s = Ce(s, s.length, o.minDepth, e), new O(s, L, r, n);
  }
  addSelection(e, r, n, o) {
    let i = this.done.length ? this.done[this.done.length - 1].selectionsAfter : L;
    return i.length > 0 && r - this.prevTime < o && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && Nr(i[i.length - 1], e) ? this : new O($t(this.done, e), this.undone, r, n);
  }
  addMapping(e) {
    return new O(_e(this.done, e), _e(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, r, n) {
    let o = e == 0 ? this.done : this.undone;
    if (o.length == 0)
      return null;
    let i = o[o.length - 1];
    if (n && i.selectionsAfter.length)
      return r.update({
        selection: i.selectionsAfter[i.selectionsAfter.length - 1],
        annotations: Ge.of({ side: e, rest: _r(o) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (i.changes) {
      let s = o.length == 1 ? L : o.slice(0, o.length - 1);
      return i.mapped && (s = _e(s, i.mapped)), r.update({
        changes: i.changes,
        selection: i.startSelection,
        effects: i.effects,
        annotations: Ge.of({ side: e, rest: s }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
O.empty = /* @__PURE__ */ new O(L, L);
const Ur = [
  { key: "Mod-z", run: Ut, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ke, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ke, preventDefault: !0 },
  { key: "Mod-u", run: Pr, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Wr, preventDefault: !0 }
];
function re(t, e) {
  return d.create(t.ranges.map(e), t.mainIndex);
}
function I(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function T({ state: t, dispatch: e }, r) {
  let n = re(t.selection, r);
  return n.eq(t.selection) ? !1 : (e(I(t, n)), !0);
}
function Te(t, e) {
  return d.cursor(e ? t.to : t.from);
}
function Gt(t, e) {
  return T(t, (r) => r.empty ? t.moveByChar(r, e) : Te(r, e));
}
function b(t) {
  return t.textDirectionAt(t.state.selection.main.head) == Qn.LTR;
}
const Kt = (t) => Gt(t, !b(t)), Jt = (t) => Gt(t, b(t));
function jt(t, e) {
  return T(t, (r) => r.empty ? t.moveByGroup(r, e) : Te(r, e));
}
const zr = (t) => jt(t, !b(t)), $r = (t) => jt(t, b(t));
function Gr(t, e, r) {
  if (e.type.prop(r))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Oe(t, e, r) {
  let n = et(t).resolveInner(e.head), o = r ? $e.closedBy : $e.openedBy;
  for (let a = e.head; ; ) {
    let c = r ? n.childAfter(a) : n.childBefore(a);
    if (!c)
      break;
    Gr(t, c, o) ? n = c : a = r ? c.to : c.from;
  }
  let i = n.type.prop(o), s, l;
  return i && (s = r ? Z(t, n.from, 1) : Z(t, n.to, -1)) && s.matched ? l = r ? s.end.to : s.end.from : l = r ? n.to : n.from, d.cursor(l, r ? -1 : 1);
}
const Kr = (t) => T(t, (e) => Oe(t.state, e, !b(t))), Jr = (t) => T(t, (e) => Oe(t.state, e, b(t)));
function Qt(t, e) {
  return T(t, (r) => {
    if (!r.empty)
      return Te(r, e);
    let n = t.moveVertically(r, e);
    return n.head != r.head ? n : t.moveToLineBoundary(r, e);
  });
}
const Yt = (t) => Qt(t, !1), Zt = (t) => Qt(t, !0);
function Xt(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, r = 0, n = 0, o;
  if (e) {
    for (let i of t.state.facet(p.scrollMargins)) {
      let s = i(t);
      s != null && s.top && (r = Math.max(s == null ? void 0 : s.top, r)), s != null && s.bottom && (n = Math.max(s == null ? void 0 : s.bottom, n));
    }
    o = t.scrollDOM.clientHeight - r - n;
  } else
    o = (t.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: r,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(t.defaultLineHeight, o - 5)
  };
}
function en(t, e) {
  let r = Xt(t), { state: n } = t, o = re(n.selection, (s) => s.empty ? t.moveVertically(s, e, r.height) : Te(s, e));
  if (o.eq(n.selection))
    return !1;
  let i;
  if (r.selfScroll) {
    let s = t.coordsAtPos(n.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), a = l.top + r.marginTop, c = l.bottom - r.marginBottom;
    s && s.top > a && s.bottom < c && (i = p.scrollIntoView(o.main.head, { y: "start", yMargin: s.top - a }));
  }
  return t.dispatch(I(n, o), { effects: i }), !0;
}
const ht = (t) => en(t, !1), Je = (t) => en(t, !0);
function _(t, e, r) {
  let n = t.lineBlockAt(e.head), o = t.moveToLineBoundary(e, r);
  if (o.head == e.head && o.head != (r ? n.to : n.from) && (o = t.moveToLineBoundary(e, r, !1)), !r && o.head == n.from && n.length) {
    let i = /^\s*/.exec(t.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    i && e.head != n.from + i && (o = d.cursor(n.from + i));
  }
  return o;
}
const jr = (t) => T(t, (e) => _(t, e, !0)), Qr = (t) => T(t, (e) => _(t, e, !1)), Yr = (t) => T(t, (e) => _(t, e, !b(t))), Zr = (t) => T(t, (e) => _(t, e, b(t))), Xr = (t) => T(t, (e) => d.cursor(t.lineBlockAt(e.head).from, 1)), eo = (t) => T(t, (e) => d.cursor(t.lineBlockAt(e.head).to, -1));
function to(t, e, r) {
  let n = !1, o = re(t.selection, (i) => {
    let s = Z(t, i.head, -1) || Z(t, i.head, 1) || i.head > 0 && Z(t, i.head - 1, 1) || i.head < t.doc.length && Z(t, i.head + 1, -1);
    if (!s || !s.end)
      return i;
    n = !0;
    let l = s.start.from == i.head ? s.end.to : s.end.from;
    return r ? d.range(i.anchor, l) : d.cursor(l);
  });
  return n ? (e(I(t, o)), !0) : !1;
}
const no = ({ state: t, dispatch: e }) => to(t, e, !1);
function D(t, e) {
  let r = re(t.state.selection, (n) => {
    let o = e(n);
    return d.range(n.anchor, o.head, o.goalColumn, o.bidiLevel || void 0);
  });
  return r.eq(t.state.selection) ? !1 : (t.dispatch(I(t.state, r)), !0);
}
function tn(t, e) {
  return D(t, (r) => t.moveByChar(r, e));
}
const nn = (t) => tn(t, !b(t)), rn = (t) => tn(t, b(t));
function on(t, e) {
  return D(t, (r) => t.moveByGroup(r, e));
}
const ro = (t) => on(t, !b(t)), oo = (t) => on(t, b(t)), io = (t) => D(t, (e) => Oe(t.state, e, !b(t))), so = (t) => D(t, (e) => Oe(t.state, e, b(t)));
function sn(t, e) {
  return D(t, (r) => t.moveVertically(r, e));
}
const ln = (t) => sn(t, !1), an = (t) => sn(t, !0);
function cn(t, e) {
  return D(t, (r) => t.moveVertically(r, e, Xt(t).height));
}
const ut = (t) => cn(t, !1), ft = (t) => cn(t, !0), lo = (t) => D(t, (e) => _(t, e, !0)), ao = (t) => D(t, (e) => _(t, e, !1)), co = (t) => D(t, (e) => _(t, e, !b(t))), ho = (t) => D(t, (e) => _(t, e, b(t))), uo = (t) => D(t, (e) => d.cursor(t.lineBlockAt(e.head).from)), fo = (t) => D(t, (e) => d.cursor(t.lineBlockAt(e.head).to)), dt = ({ state: t, dispatch: e }) => (e(I(t, { anchor: 0 })), !0), mt = ({ state: t, dispatch: e }) => (e(I(t, { anchor: t.doc.length })), !0), gt = ({ state: t, dispatch: e }) => (e(I(t, { anchor: t.selection.main.anchor, head: 0 })), !0), pt = ({ state: t, dispatch: e }) => (e(I(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), mo = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), go = ({ state: t, dispatch: e }) => {
  let r = Pe(t).map(({ from: n, to: o }) => d.range(n, Math.min(o + 1, t.doc.length)));
  return e(t.update({ selection: d.create(r), userEvent: "select" })), !0;
}, po = ({ state: t, dispatch: e }) => {
  let r = re(t.selection, (n) => {
    var o;
    let i = et(t).resolveInner(n.head, 1);
    for (; !(i.from < n.from && i.to >= n.to || i.to > n.to && i.from <= n.from || !(!((o = i.parent) === null || o === void 0) && o.parent)); )
      i = i.parent;
    return d.range(i.to, i.from);
  });
  return e(I(t, r)), !0;
}, yo = ({ state: t, dispatch: e }) => {
  let r = t.selection, n = null;
  return r.ranges.length > 1 ? n = d.create([r.main]) : r.main.empty || (n = d.create([d.cursor(r.main.head)])), n ? (e(I(t, n)), !0) : !1;
};
function Ie(t, e) {
  if (t.state.readOnly)
    return !1;
  let r = "delete.selection", { state: n } = t, o = n.changeByRange((i) => {
    let { from: s, to: l } = i;
    if (s == l) {
      let a = e(s);
      a < s ? (r = "delete.backward", a = ge(t, a, !1)) : a > s && (r = "delete.forward", a = ge(t, a, !0)), s = Math.min(s, a), l = Math.max(l, a);
    } else
      s = ge(t, s, !1), l = ge(t, l, !0);
    return s == l ? { range: i } : { changes: { from: s, to: l }, range: d.cursor(s) };
  });
  return o.changes.empty ? !1 : (t.dispatch(n.update(o, {
    scrollIntoView: !0,
    userEvent: r,
    effects: r == "delete.selection" ? p.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function ge(t, e, r) {
  if (t instanceof p)
    for (let n of t.state.facet(p.atomicRanges).map((o) => o(t)))
      n.between(e, e, (o, i) => {
        o < e && i > e && (e = r ? i : o);
      });
  return e;
}
const hn = (t, e) => Ie(t, (r) => {
  let { state: n } = t, o = n.doc.lineAt(r), i, s;
  if (!e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(i = o.text.slice(0, r - o.from))) {
    if (i[i.length - 1] == "	")
      return r - 1;
    let l = Wt(i, n.tabSize), a = l % ze(n) || ze(n);
    for (let c = 0; c < a && i[i.length - 1 - c] == " "; c++)
      r--;
    s = r;
  } else
    s = ee(o.text, r - o.from, e, e) + o.from, s == r && o.number != (e ? n.doc.lines : 1) && (s += e ? 1 : -1);
  return s;
}), je = (t) => hn(t, !1), un = (t) => hn(t, !0), fn = (t, e) => Ie(t, (r) => {
  let n = r, { state: o } = t, i = o.doc.lineAt(n), s = o.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? i.to : i.from)) {
      n == r && i.number != (e ? o.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = ee(i.text, n - i.from, e) + i.from, c = i.text.slice(Math.min(n, a) - i.from, Math.max(n, a) - i.from), h = s(c);
    if (l != null && h != l)
      break;
    (c != " " || n != r) && (l = h), n = a;
  }
  return n;
}), dn = (t) => fn(t, !1), xo = (t) => fn(t, !0), mn = (t) => Ie(t, (e) => {
  let r = t.lineBlockAt(e).to;
  return e < r ? r : Math.min(t.state.doc.length, e + 1);
}), ko = (t) => Ie(t, (e) => {
  let r = t.lineBlockAt(e).from;
  return e > r ? r : Math.max(0, e - 1);
}), bo = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = t.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: It.of(["", ""]) },
    range: d.cursor(n.from)
  }));
  return e(t.update(r, { scrollIntoView: !0, userEvent: "input" })), !0;
}, So = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = t.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == t.doc.length)
      return { range: n };
    let o = n.from, i = t.doc.lineAt(o), s = o == i.from ? o - 1 : ee(i.text, o - i.from, !1) + i.from, l = o == i.to ? o + 1 : ee(i.text, o - i.from, !0) + i.from;
    return {
      changes: { from: s, to: l, insert: t.doc.slice(o, l).append(t.doc.slice(s, o)) },
      range: d.cursor(l)
    };
  });
  return r.changes.empty ? !1 : (e(t.update(r, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Pe(t) {
  let e = [], r = -1;
  for (let n of t.selection.ranges) {
    let o = t.doc.lineAt(n.from), i = t.doc.lineAt(n.to);
    if (!n.empty && n.to == i.from && (i = t.doc.lineAt(n.to - 1)), r >= o.number) {
      let s = e[e.length - 1];
      s.to = i.to, s.ranges.push(n);
    } else
      e.push({ from: o.from, to: i.to, ranges: [n] });
    r = i.number + 1;
  }
  return e;
}
function gn(t, e, r) {
  if (t.readOnly)
    return !1;
  let n = [], o = [];
  for (let i of Pe(t)) {
    if (r ? i.to == t.doc.length : i.from == 0)
      continue;
    let s = t.doc.lineAt(r ? i.to + 1 : i.from - 1), l = s.length + 1;
    if (r) {
      n.push({ from: i.to, to: s.to }, { from: i.from, insert: s.text + t.lineBreak });
      for (let a of i.ranges)
        o.push(d.range(Math.min(t.doc.length, a.anchor + l), Math.min(t.doc.length, a.head + l)));
    } else {
      n.push({ from: s.from, to: i.from }, { from: i.to, insert: t.lineBreak + s.text });
      for (let a of i.ranges)
        o.push(d.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(t.update({
    changes: n,
    scrollIntoView: !0,
    selection: d.create(o, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Co = ({ state: t, dispatch: e }) => gn(t, e, !1), vo = ({ state: t, dispatch: e }) => gn(t, e, !0);
function pn(t, e, r) {
  if (t.readOnly)
    return !1;
  let n = [];
  for (let o of Pe(t))
    r ? n.push({ from: o.from, insert: t.doc.slice(o.from, o.to) + t.lineBreak }) : n.push({ from: o.to, insert: t.lineBreak + t.doc.slice(o.from, o.to) });
  return e(t.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Ao = ({ state: t, dispatch: e }) => pn(t, e, !1), Mo = ({ state: t, dispatch: e }) => pn(t, e, !0), Lo = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, r = e.changes(Pe(e).map(({ from: o, to: i }) => (o > 0 ? o-- : i < e.doc.length && i++, { from: o, to: i }))), n = re(e.selection, (o) => t.moveVertically(o, !0)).map(r);
  return t.dispatch({ changes: r, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Do(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let r = et(t).resolveInner(e), n = r.childBefore(e), o = r.childAfter(e), i;
  return n && o && n.to <= e && o.from >= e && (i = n.type.prop($e.closedBy)) && i.indexOf(o.name) > -1 && t.doc.lineAt(n.to).from == t.doc.lineAt(o.from).from ? { from: n.to, to: o.from } : null;
}
const Bo = /* @__PURE__ */ yn(!1), Eo = /* @__PURE__ */ yn(!0);
function yn(t) {
  return ({ state: e, dispatch: r }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((o) => {
      let { from: i, to: s } = o, l = e.doc.lineAt(i), a = !t && i == s && Do(e, i);
      t && (i = s = (s <= l.to ? l : e.doc.lineAt(s)).to);
      let c = new Tt(e, { simulateBreak: i, simulateDoubleBreak: !!a }), h = Ot(c, i);
      for (h == null && (h = /^\s*/.exec(e.doc.lineAt(i).text)[0].length); s < l.to && /\s/.test(l.text[s - l.from]); )
        s++;
      a ? { from: i, to: s } = a : i > l.from && i < l.from + 100 && !/\S/.test(l.text.slice(0, i)) && (i = l.from);
      let u = ["", Se(e, h)];
      return a && u.push(Se(e, c.lineIndent(l.from, -1))), {
        changes: { from: i, to: s, insert: It.of(u) },
        range: d.cursor(i + 1 + u[1].length)
      };
    });
    return r(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function ot(t, e) {
  let r = -1;
  return t.changeByRange((n) => {
    let o = [];
    for (let s = n.from; s <= n.to; ) {
      let l = t.doc.lineAt(s);
      l.number > r && (n.empty || n.to > l.from) && (e(l, o, n), r = l.number), s = l.to + 1;
    }
    let i = t.changes(o);
    return {
      changes: o,
      range: d.range(i.mapPos(n.anchor, 1), i.mapPos(n.head, 1))
    };
  });
}
const wo = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let r = /* @__PURE__ */ Object.create(null), n = new Tt(t, { overrideIndentation: (i) => {
    let s = r[i];
    return s ?? -1;
  } }), o = ot(t, (i, s, l) => {
    let a = Ot(n, i.from);
    if (a == null)
      return;
    /\S/.test(i.text) || (a = 0);
    let c = /^\s*/.exec(i.text)[0], h = Se(t, a);
    (c != h || l.from < i.from + c.length) && (r[i.from] = a, s.push({ from: i.from, to: i.from + c.length, insert: h }));
  });
  return o.changes.empty || e(t.update(o, { userEvent: "indent" })), !0;
}, xn = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(ot(t, (r, n) => {
  n.push({ from: r.from, insert: t.facet(Pt) });
}), { userEvent: "input.indent" })), !0), kn = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(ot(t, (r, n) => {
  let o = /^\s*/.exec(r.text)[0];
  if (!o)
    return;
  let i = Wt(o, t.tabSize), s = 0, l = Se(t, Math.max(0, i - ze(t)));
  for (; s < o.length && s < l.length && o.charCodeAt(s) == l.charCodeAt(s); )
    s++;
  n.push({ from: r.from + s, to: r.from + o.length, insert: l.slice(s) });
}), { userEvent: "delete.dedent" })), !0), Ro = [
  { key: "Ctrl-b", run: Kt, shift: nn, preventDefault: !0 },
  { key: "Ctrl-f", run: Jt, shift: rn },
  { key: "Ctrl-p", run: Yt, shift: ln },
  { key: "Ctrl-n", run: Zt, shift: an },
  { key: "Ctrl-a", run: Xr, shift: uo },
  { key: "Ctrl-e", run: eo, shift: fo },
  { key: "Ctrl-d", run: un },
  { key: "Ctrl-h", run: je },
  { key: "Ctrl-k", run: mn },
  { key: "Ctrl-Alt-h", run: dn },
  { key: "Ctrl-o", run: bo },
  { key: "Ctrl-t", run: So },
  { key: "Ctrl-v", run: Je }
], To = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Kt, shift: nn, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: zr, shift: ro, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Yr, shift: co, preventDefault: !0 },
  { key: "ArrowRight", run: Jt, shift: rn, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: $r, shift: oo, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Zr, shift: ho, preventDefault: !0 },
  { key: "ArrowUp", run: Yt, shift: ln, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: dt, shift: gt },
  { mac: "Ctrl-ArrowUp", run: ht, shift: ut },
  { key: "ArrowDown", run: Zt, shift: an, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: mt, shift: pt },
  { mac: "Ctrl-ArrowDown", run: Je, shift: ft },
  { key: "PageUp", run: ht, shift: ut },
  { key: "PageDown", run: Je, shift: ft },
  { key: "Home", run: Qr, shift: ao, preventDefault: !0 },
  { key: "Mod-Home", run: dt, shift: gt },
  { key: "End", run: jr, shift: lo, preventDefault: !0 },
  { key: "Mod-End", run: mt, shift: pt },
  { key: "Enter", run: Bo },
  { key: "Mod-a", run: mo },
  { key: "Backspace", run: je, shift: je },
  { key: "Delete", run: un },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: dn },
  { key: "Mod-Delete", mac: "Alt-Delete", run: xo },
  { mac: "Mod-Backspace", run: ko },
  { mac: "Mod-Delete", run: mn }
].concat(/* @__PURE__ */ Ro.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), Oo = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Kr, shift: io },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Jr, shift: so },
  { key: "Alt-ArrowUp", run: Co },
  { key: "Shift-Alt-ArrowUp", run: Ao },
  { key: "Alt-ArrowDown", run: vo },
  { key: "Shift-Alt-ArrowDown", run: Mo },
  { key: "Escape", run: yo },
  { key: "Mod-Enter", run: Eo },
  { key: "Alt-l", mac: "Ctrl-l", run: go },
  { key: "Mod-i", run: po, preventDefault: !0 },
  { key: "Mod-[", run: kn },
  { key: "Mod-]", run: xn },
  { key: "Mod-Alt-\\", run: wo },
  { key: "Shift-Mod-k", run: Lo },
  { key: "Shift-Mod-\\", run: no },
  { key: "Mod-/", run: Ar },
  { key: "Alt-A", run: Lr }
].concat(To), Io = { key: "Tab", run: xn, shift: kn };
function g() {
  var t = arguments[0];
  typeof t == "string" && (t = document.createElement(t));
  var e = 1, r = arguments[1];
  if (r && typeof r == "object" && r.nodeType == null && !Array.isArray(r)) {
    for (var n in r)
      if (Object.prototype.hasOwnProperty.call(r, n)) {
        var o = r[n];
        typeof o == "string" ? t.setAttribute(n, o) : o != null && (t[n] = o);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    bn(t, arguments[e]);
  return t;
}
function bn(t, e) {
  if (typeof e == "string")
    t.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      t.appendChild(e);
    else if (Array.isArray(e))
      for (var r = 0; r < e.length; r++)
        bn(t, e[r]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const yt = typeof String.prototype.normalize == "function" ? (t) => t.normalize("NFKD") : (t) => t;
class te {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, r, n = 0, o = e.length, i, s) {
    this.test = s, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, o), this.bufferStart = n, this.normalize = i ? (l) => i(yt(l)) : yt, this.query = this.normalize(r);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Yn(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let r = er(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += Zn(e);
      let o = this.normalize(r);
      for (let i = 0, s = n; ; i++) {
        let l = o.charCodeAt(i), a = this.match(l, s);
        if (i == o.length - 1) {
          if (a)
            return this.value = a, this;
          break;
        }
        s == n && i < r.length && r.charCodeAt(i) == l && s++;
      }
    }
  }
  match(e, r) {
    let n = null;
    for (let o = 0; o < this.matches.length; o += 2) {
      let i = this.matches[o], s = !1;
      this.query.charCodeAt(i) == e && (i == this.query.length - 1 ? n = { from: this.matches[o + 1], to: r + 1 } : (this.matches[o]++, s = !0)), s || (this.matches.splice(o, 2), o -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = { from: r, to: r + 1 } : this.matches.push(1, r)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferPos) && (n = null), n;
  }
}
typeof Symbol < "u" && (te.prototype[Symbol.iterator] = function() {
  return this;
});
const Sn = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, it = "gm" + (/x/.unicode == null ? "" : "u");
class Cn {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, r, n, o = 0, i = e.length) {
    if (this.text = e, this.to = i, this.curLine = "", this.done = !1, this.value = Sn, /\\[sWDnr]|\n|\r|\[\^/.test(r))
      return new vn(e, r, n, o, i);
    this.re = new RegExp(r, it + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let s = e.lineAt(o);
    this.curLineStart = s.from, this.matchPos = ve(e, o), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let r = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (r) {
        let n = this.curLineStart + r.index, o = n + r[0].length;
        if (this.matchPos = ve(this.text, o + (n == o ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < o || n > this.value.to) && (!this.test || this.test(n, o, r)))
          return this.value = { from: n, to: o, match: r }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ve = /* @__PURE__ */ new WeakMap();
class X {
  constructor(e, r) {
    this.from = e, this.text = r;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, r, n) {
    let o = Ve.get(e);
    if (!o || o.from >= n || o.to <= r) {
      let l = new X(r, e.sliceString(r, n));
      return Ve.set(e, l), l;
    }
    if (o.from == r && o.to == n)
      return o;
    let { text: i, from: s } = o;
    return s > r && (i = e.sliceString(r, s) + i, s = r), o.to < n && (i += e.sliceString(o.to, n)), Ve.set(e, new X(s, i)), new X(r, i.slice(r - s, n - s));
  }
}
class vn {
  constructor(e, r, n, o, i) {
    this.text = e, this.to = i, this.done = !1, this.value = Sn, this.matchPos = ve(e, o), this.re = new RegExp(r, it + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = X.get(e, o, this.chunkEnd(
      o + 5e3
      /* Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, r = this.re.exec(this.flat.text);
      if (r && !r[0] && r.index == e && (this.re.lastIndex = e + 1, r = this.re.exec(this.flat.text)), r) {
        let n = this.flat.from + r.index, o = n + r[0].length;
        if ((this.flat.to >= this.to || r.index + r[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, o, r)))
          return this.value = { from: n, to: o, match: r }, this.matchPos = ve(this.text, o + (n == o ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = X.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Cn.prototype[Symbol.iterator] = vn.prototype[Symbol.iterator] = function() {
  return this;
});
function Po(t) {
  try {
    return new RegExp(t, it), !0;
  } catch {
    return !1;
  }
}
function ve(t, e) {
  if (e >= t.length)
    return e;
  let r = t.lineAt(e), n;
  for (; e < r.to && (n = r.text.charCodeAt(e - r.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
function Qe(t) {
  let e = g("input", { class: "cm-textfield", name: "line" }), r = g("form", {
    class: "cm-gotoLine",
    onkeydown: (o) => {
      o.keyCode == 27 ? (o.preventDefault(), t.dispatch({ effects: Ae.of(!1) }), t.focus()) : o.keyCode == 13 && (o.preventDefault(), n());
    },
    onsubmit: (o) => {
      o.preventDefault(), n();
    }
  }, g("label", t.state.phrase("Go to line"), ": ", e), " ", g("button", { class: "cm-button", type: "submit" }, t.state.phrase("go")));
  function n() {
    let o = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!o)
      return;
    let { state: i } = t, s = i.doc.lineAt(i.selection.main.head), [, l, a, c, h] = o, u = c ? +c.slice(1) : 0, m = a ? +a : s.number;
    if (a && h) {
      let B = m / 100;
      l && (B = B * (l == "-" ? -1 : 1) + s.number / i.doc.lines), m = Math.round(i.doc.lines * B);
    } else
      a && l && (m = m * (l == "-" ? -1 : 1) + s.number);
    let k = i.doc.line(Math.max(1, Math.min(i.doc.lines, m))), S = d.cursor(k.from + Math.max(0, Math.min(u, k.length)));
    t.dispatch({
      effects: [Ae.of(!1), p.scrollIntoView(S.from, { y: "center" })],
      selection: S
    }), t.focus();
  }
  return { dom: r };
}
const Ae = /* @__PURE__ */ R.define(), xt = /* @__PURE__ */ we.define({
  create() {
    return !0;
  },
  update(t, e) {
    for (let r of e.effects)
      r.is(Ae) && (t = r.value);
    return t;
  },
  provide: (t) => tt.from(t, (e) => e ? Qe : null)
}), Wo = (t) => {
  let e = ce(t, Qe);
  if (!e) {
    let r = [Ae.of(!0)];
    t.state.field(xt, !1) == null && r.push(R.appendConfig.of([xt, Fo])), t.dispatch({ effects: r }), e = ce(t, Qe);
  }
  return e && e.dom.querySelector("input").focus(), !0;
}, Fo = /* @__PURE__ */ p.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), No = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, An = /* @__PURE__ */ fe.define({
  combine(t) {
    return Ee(t, No, {
      highlightWordAroundCursor: (e, r) => e || r,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function qo(t) {
  let e = [zo, Uo];
  return t && e.push(An.of(t)), e;
}
const _o = /* @__PURE__ */ x.mark({ class: "cm-selectionMatch" }), Vo = /* @__PURE__ */ x.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function kt(t, e, r, n) {
  return (r == 0 || t(e.sliceDoc(r - 1, r)) != M.Word) && (n == e.doc.length || t(e.sliceDoc(n, n + 1)) != M.Word);
}
function Ho(t, e, r, n) {
  return t(e.sliceDoc(r, r + 1)) == M.Word && t(e.sliceDoc(n - 1, n)) == M.Word;
}
const Uo = /* @__PURE__ */ Ft.fromClass(class {
  constructor(t) {
    this.decorations = this.getDeco(t);
  }
  update(t) {
    (t.selectionSet || t.docChanged || t.viewportChanged) && (this.decorations = this.getDeco(t.view));
  }
  getDeco(t) {
    let e = t.state.facet(An), { state: r } = t, n = r.selection;
    if (n.ranges.length > 1)
      return x.none;
    let o = n.main, i, s = null;
    if (o.empty) {
      if (!e.highlightWordAroundCursor)
        return x.none;
      let a = r.wordAt(o.head);
      if (!a)
        return x.none;
      s = r.charCategorizer(o.head), i = r.sliceDoc(a.from, a.to);
    } else {
      let a = o.to - o.from;
      if (a < e.minSelectionLength || a > 200)
        return x.none;
      if (e.wholeWords) {
        if (i = r.sliceDoc(o.from, o.to), s = r.charCategorizer(o.head), !(kt(s, r, o.from, o.to) && Ho(s, r, o.from, o.to)))
          return x.none;
      } else if (i = r.sliceDoc(o.from, o.to).trim(), !i)
        return x.none;
    }
    let l = [];
    for (let a of t.visibleRanges) {
      let c = new te(r.doc, i, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: u } = c.value;
        if ((!s || kt(s, r, h, u)) && (o.empty && h <= o.from && u >= o.to ? l.push(Vo.range(h, u)) : (h >= o.to || u <= o.from) && l.push(_o.range(h, u)), l.length > e.maxMatches))
          return x.none;
      }
    }
    return x.set(l);
  }
}, {
  decorations: (t) => t.decorations
}), zo = /* @__PURE__ */ p.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), $o = ({ state: t, dispatch: e }) => {
  let { selection: r } = t, n = d.create(r.ranges.map((o) => t.wordAt(o.head) || d.cursor(o.head)), r.mainIndex);
  return n.eq(r) ? !1 : (e(t.update({ selection: n })), !0);
};
function Go(t, e) {
  let { main: r, ranges: n } = t.selection, o = t.wordAt(r.head), i = o && o.from == r.from && o.to == r.to;
  for (let s = !1, l = new te(t.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (s)
        return null;
      l = new te(t.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), s = !0;
    } else {
      if (s && n.some((a) => a.from == l.value.from))
        continue;
      if (i) {
        let a = t.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Ko = ({ state: t, dispatch: e }) => {
  let { ranges: r } = t.selection;
  if (r.some((i) => i.from === i.to))
    return $o({ state: t, dispatch: e });
  let n = t.sliceDoc(r[0].from, r[0].to);
  if (t.selection.ranges.some((i) => t.sliceDoc(i.from, i.to) != n))
    return !1;
  let o = Go(t, n);
  return o ? (e(t.update({
    selection: t.selection.addRange(d.range(o.from, o.to), !1),
    effects: p.scrollIntoView(o.to)
  })), !0) : !1;
}, oe = /* @__PURE__ */ fe.define({
  combine(t) {
    return Ee(t, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new ii(e),
      scrollToMatch: (e) => p.scrollIntoView(e)
    });
  }
});
class Mn {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Po(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (r, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Yo(this) : new jo(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, r = 0, n) {
    let o = e.doc ? e : he.create({ doc: e });
    return n == null && (n = o.doc.length), this.regexp ? Y(this, o, r, n) : Q(this, o, r, n);
  }
}
class Ln {
  constructor(e) {
    this.spec = e;
  }
}
function Q(t, e, r, n) {
  return new te(e.doc, t.unquoted, r, n, t.caseSensitive ? void 0 : (o) => o.toLowerCase(), t.wholeWord ? Jo(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function Jo(t, e) {
  return (r, n, o, i) => ((i > r || i + o.length < n) && (i = Math.max(0, r - 2), o = t.sliceString(i, Math.min(t.length, n + 2))), (e(Me(o, r - i)) != M.Word || e(Le(o, r - i)) != M.Word) && (e(Le(o, n - i)) != M.Word || e(Me(o, n - i)) != M.Word));
}
class jo extends Ln {
  constructor(e) {
    super(e);
  }
  nextMatch(e, r, n) {
    let o = Q(this.spec, e, n, e.doc.length).nextOverlapping();
    return o.done && (o = Q(this.spec, e, 0, r).nextOverlapping()), o.done ? null : o.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, r, n) {
    for (let o = n; ; ) {
      let i = Math.max(r, o - 1e4 - this.spec.unquoted.length), s = Q(this.spec, e, i, o), l = null;
      for (; !s.nextOverlapping().done; )
        l = s.value;
      if (l)
        return l;
      if (i == r)
        return null;
      o -= 1e4;
    }
  }
  prevMatch(e, r, n) {
    return this.prevMatchInRange(e, 0, r) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, r) {
    let n = Q(this.spec, e, 0, e.doc.length), o = [];
    for (; !n.next().done; ) {
      if (o.length >= r)
        return null;
      o.push(n.value);
    }
    return o;
  }
  highlight(e, r, n, o) {
    let i = Q(this.spec, e, Math.max(0, r - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !i.next().done; )
      o(i.value.from, i.value.to);
  }
}
function Y(t, e, r, n) {
  return new Cn(e.doc, t.search, {
    ignoreCase: !t.caseSensitive,
    test: t.wholeWord ? Qo(e.charCategorizer(e.selection.main.head)) : void 0
  }, r, n);
}
function Me(t, e) {
  return t.slice(ee(t, e, !1), e);
}
function Le(t, e) {
  return t.slice(e, ee(t, e));
}
function Qo(t) {
  return (e, r, n) => !n[0].length || (t(Me(n.input, n.index)) != M.Word || t(Le(n.input, n.index)) != M.Word) && (t(Le(n.input, n.index + n[0].length)) != M.Word || t(Me(n.input, n.index + n[0].length)) != M.Word);
}
class Yo extends Ln {
  nextMatch(e, r, n) {
    let o = Y(this.spec, e, n, e.doc.length).next();
    return o.done && (o = Y(this.spec, e, 0, r).next()), o.done ? null : o.value;
  }
  prevMatchInRange(e, r, n) {
    for (let o = 1; ; o++) {
      let i = Math.max(
        r,
        n - o * 1e4
        /* ChunkSize */
      ), s = Y(this.spec, e, i, n), l = null;
      for (; !s.next().done; )
        l = s.value;
      if (l && (i == r || l.from > i + 10))
        return l;
      if (i == r)
        return null;
    }
  }
  prevMatch(e, r, n) {
    return this.prevMatchInRange(e, 0, r) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (r, n) => n == "$" ? "$" : n == "&" ? e.match[0] : n != "0" && +n < e.match.length ? e.match[n] : r));
  }
  matchAll(e, r) {
    let n = Y(this.spec, e, 0, e.doc.length), o = [];
    for (; !n.next().done; ) {
      if (o.length >= r)
        return null;
      o.push(n.value);
    }
    return o;
  }
  highlight(e, r, n, o) {
    let i = Y(this.spec, e, Math.max(
      0,
      r - 250
      /* HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !i.next().done; )
      o(i.value.from, i.value.to);
  }
}
const ue = /* @__PURE__ */ R.define(), st = /* @__PURE__ */ R.define(), q = /* @__PURE__ */ we.define({
  create(t) {
    return new He(Ye(t).create(), null);
  },
  update(t, e) {
    for (let r of e.effects)
      r.is(ue) ? t = new He(r.value.create(), t.panel) : r.is(st) && (t = new He(t.query, r.value ? lt : null));
    return t;
  },
  provide: (t) => tt.from(t, (e) => e.panel)
});
class He {
  constructor(e, r) {
    this.query = e, this.panel = r;
  }
}
const Zo = /* @__PURE__ */ x.mark({ class: "cm-searchMatch" }), Xo = /* @__PURE__ */ x.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), ei = /* @__PURE__ */ Ft.fromClass(class {
  constructor(t) {
    this.view = t, this.decorations = this.highlight(t.state.field(q));
  }
  update(t) {
    let e = t.state.field(q);
    (e != t.startState.field(q) || t.docChanged || t.selectionSet || t.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: t, panel: e }) {
    if (!e || !t.spec.valid)
      return x.none;
    let { view: r } = this, n = new tr();
    for (let o = 0, i = r.visibleRanges, s = i.length; o < s; o++) {
      let { from: l, to: a } = i[o];
      for (; o < s - 1 && a > i[o + 1].from - 2 * 250; )
        a = i[++o].to;
      t.highlight(r.state, l, a, (c, h) => {
        let u = r.state.selection.ranges.some((m) => m.from == c && m.to == h);
        n.add(c, h, u ? Xo : Zo);
      });
    }
    return n.finish();
  }
}, {
  decorations: (t) => t.decorations
});
function de(t) {
  return (e) => {
    let r = e.state.field(q, !1);
    return r && r.query.spec.valid ? t(e, r) : En(e);
  };
}
const De = /* @__PURE__ */ de((t, { query: e }) => {
  let { to: r } = t.state.selection.main, n = e.nextMatch(t.state, r, r);
  if (!n)
    return !1;
  let o = d.single(n.from, n.to), i = t.state.facet(oe);
  return t.dispatch({
    selection: o,
    effects: [at(t, n), i.scrollToMatch(o.main, t)],
    userEvent: "select.search"
  }), Bn(t), !0;
}), Be = /* @__PURE__ */ de((t, { query: e }) => {
  let { state: r } = t, { from: n } = r.selection.main, o = e.prevMatch(r, n, n);
  if (!o)
    return !1;
  let i = d.single(o.from, o.to), s = t.state.facet(oe);
  return t.dispatch({
    selection: i,
    effects: [at(t, o), s.scrollToMatch(i.main, t)],
    userEvent: "select.search"
  }), Bn(t), !0;
}), ti = /* @__PURE__ */ de((t, { query: e }) => {
  let r = e.matchAll(t.state, 1e3);
  return !r || !r.length ? !1 : (t.dispatch({
    selection: d.create(r.map((n) => d.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), ni = ({ state: t, dispatch: e }) => {
  let r = t.selection;
  if (r.ranges.length > 1 || r.main.empty)
    return !1;
  let { from: n, to: o } = r.main, i = [], s = 0;
  for (let l = new te(t.doc, t.sliceDoc(n, o)); !l.next().done; ) {
    if (i.length > 1e3)
      return !1;
    l.value.from == n && (s = i.length), i.push(d.range(l.value.from, l.value.to));
  }
  return e(t.update({
    selection: d.create(i, s),
    userEvent: "select.search.matches"
  })), !0;
}, bt = /* @__PURE__ */ de((t, { query: e }) => {
  let { state: r } = t, { from: n, to: o } = r.selection.main;
  if (r.readOnly)
    return !1;
  let i = e.nextMatch(r, n, n);
  if (!i)
    return !1;
  let s = [], l, a, c = [];
  if (i.from == n && i.to == o && (a = r.toText(e.getReplacement(i)), s.push({ from: i.from, to: i.to, insert: a }), i = e.nextMatch(r, i.from, i.to), c.push(p.announce.of(r.phrase("replaced match on line $", r.doc.lineAt(n).number) + "."))), i) {
    let h = s.length == 0 || s[0].from >= i.to ? 0 : i.to - i.from - a.length;
    l = d.single(i.from - h, i.to - h), c.push(at(t, i)), c.push(r.facet(oe).scrollToMatch(l.main, t));
  }
  return t.dispatch({
    changes: s,
    selection: l,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), ri = /* @__PURE__ */ de((t, { query: e }) => {
  if (t.state.readOnly)
    return !1;
  let r = e.matchAll(t.state, 1e9).map((o) => {
    let { from: i, to: s } = o;
    return { from: i, to: s, insert: e.getReplacement(o) };
  });
  if (!r.length)
    return !1;
  let n = t.state.phrase("replaced $ matches", r.length) + ".";
  return t.dispatch({
    changes: r,
    effects: p.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function lt(t) {
  return t.state.facet(oe).createPanel(t);
}
function Ye(t, e) {
  var r, n, o, i, s;
  let l = t.selection.main, a = l.empty || l.to > l.from + 100 ? "" : t.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = t.facet(oe);
  return new Mn({
    search: ((r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : c.caseSensitive,
    literal: (o = e == null ? void 0 : e.literal) !== null && o !== void 0 ? o : c.literal,
    regexp: (i = e == null ? void 0 : e.regexp) !== null && i !== void 0 ? i : c.regexp,
    wholeWord: (s = e == null ? void 0 : e.wholeWord) !== null && s !== void 0 ? s : c.wholeWord
  });
}
function Dn(t) {
  let e = ce(t, lt);
  return e && e.dom.querySelector("[main-field]");
}
function Bn(t) {
  let e = Dn(t);
  e && e == t.root.activeElement && e.select();
}
const En = (t) => {
  let e = t.state.field(q, !1);
  if (e && e.panel) {
    let r = Dn(t);
    if (r && r != t.root.activeElement) {
      let n = Ye(t.state, e.query.spec);
      n.valid && t.dispatch({ effects: ue.of(n) }), r.focus(), r.select();
    }
  } else
    t.dispatch({ effects: [
      st.of(!0),
      e ? ue.of(Ye(t.state, e.query.spec)) : R.appendConfig.of(li)
    ] });
  return !0;
}, wn = (t) => {
  let e = t.state.field(q, !1);
  if (!e || !e.panel)
    return !1;
  let r = ce(t, lt);
  return r && r.dom.contains(t.root.activeElement) && t.focus(), t.dispatch({ effects: st.of(!1) }), !0;
}, oi = [
  { key: "Mod-f", run: En, scope: "editor search-panel" },
  { key: "F3", run: De, shift: Be, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: De, shift: Be, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: wn, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: ni },
  { key: "Alt-g", run: Wo },
  { key: "Mod-d", run: Ko, preventDefault: !0 }
];
class ii {
  constructor(e) {
    this.view = e;
    let r = this.query = e.state.field(q).query.spec;
    this.commit = this.commit.bind(this), this.searchField = g("input", {
      value: r.search,
      placeholder: v(e, "Find"),
      "aria-label": v(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = g("input", {
      value: r.replace,
      placeholder: v(e, "Replace"),
      "aria-label": v(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = g("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: r.caseSensitive,
      onchange: this.commit
    }), this.reField = g("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: r.regexp,
      onchange: this.commit
    }), this.wordField = g("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: r.wholeWord,
      onchange: this.commit
    });
    function n(o, i, s) {
      return g("button", { class: "cm-button", name: o, onclick: i, type: "button" }, s);
    }
    this.dom = g("div", { onkeydown: (o) => this.keydown(o), class: "cm-search" }, [
      this.searchField,
      n("next", () => De(e), [v(e, "next")]),
      n("prev", () => Be(e), [v(e, "previous")]),
      n("select", () => ti(e), [v(e, "all")]),
      g("label", null, [this.caseField, v(e, "match case")]),
      g("label", null, [this.reField, v(e, "regexp")]),
      g("label", null, [this.wordField, v(e, "by word")]),
      ...e.state.readOnly ? [] : [
        g("br"),
        this.replaceField,
        n("replace", () => bt(e), [v(e, "replace")]),
        n("replaceAll", () => ri(e), [v(e, "replace all")])
      ],
      g("button", {
        name: "close",
        onclick: () => wn(e),
        "aria-label": v(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new Mn({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: ue.of(e) }));
  }
  keydown(e) {
    nr(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Be : De)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), bt(this.view));
  }
  update(e) {
    for (let r of e.transactions)
      for (let n of r.effects)
        n.is(ue) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(oe).top;
  }
}
function v(t, e) {
  return t.state.phrase(e);
}
const pe = 30, ye = /[\s\.,:;?!]/;
function at(t, { from: e, to: r }) {
  let n = t.state.doc.lineAt(e), o = t.state.doc.lineAt(r).to, i = Math.max(n.from, e - pe), s = Math.min(o, r + pe), l = t.state.sliceDoc(i, s);
  if (i != n.from) {
    for (let a = 0; a < pe; a++)
      if (!ye.test(l[a + 1]) && ye.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (s != o) {
    for (let a = l.length - 1; a > l.length - pe; a--)
      if (!ye.test(l[a - 1]) && ye.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return p.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`);
}
const si = /* @__PURE__ */ p.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), li = [
  q,
  /* @__PURE__ */ Xn.lowest(ei),
  si
];
class ai {
  constructor(e, r, n) {
    this.from = e, this.to = r, this.diagnostic = n;
  }
}
class z {
  constructor(e, r, n) {
    this.diagnostics = e, this.panel = r, this.selected = n;
  }
  static init(e, r, n) {
    let o = e, i = n.facet(On).markerFilter;
    i && (o = i(o));
    let s = x.set(o.map((l) => l.from == l.to || l.from == l.to - 1 && n.doc.lineAt(l.from).to == l.from ? x.widget({
      widget: new yi(l),
      diagnostic: l
    }).range(l.from) : x.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new z(s, r, ne(s));
  }
}
function ne(t, e = null, r = 0) {
  let n = null;
  return t.between(r, 1e9, (o, i, { spec: s }) => {
    if (!(e && s.diagnostic != e))
      return n = new ai(o, i, s.diagnostic), !1;
  }), n;
}
function ci(t, e) {
  let r = t.startState.doc.lineAt(e.pos);
  return !!(t.effects.some((n) => n.is(Rn)) || t.changes.touchesRange(r.from, r.to));
}
function hi(t, e) {
  return t.field(A, !1) ? e : e.concat(R.appendConfig.of(bi));
}
const Rn = /* @__PURE__ */ R.define(), ct = /* @__PURE__ */ R.define(), Tn = /* @__PURE__ */ R.define(), A = /* @__PURE__ */ we.define({
  create() {
    return new z(x.none, null, null);
  },
  update(t, e) {
    if (e.docChanged) {
      let r = t.diagnostics.map(e.changes), n = null;
      if (t.selected) {
        let o = e.changes.mapPos(t.selected.from, 1);
        n = ne(r, t.selected.diagnostic, o) || ne(r, null, o);
      }
      t = new z(r, t.panel, n);
    }
    for (let r of e.effects)
      r.is(Rn) ? t = z.init(r.value, t.panel, e.state) : r.is(ct) ? t = new z(t.diagnostics, r.value ? We.open : null, t.selected) : r.is(Tn) && (t = new z(t.diagnostics, t.panel, r.value));
    return t;
  },
  provide: (t) => [
    tt.from(t, (e) => e.panel),
    p.decorations.from(t, (e) => e.diagnostics)
  ]
}), ui = /* @__PURE__ */ x.mark({ class: "cm-lintRange cm-lintRange-active" });
function fi(t, e, r) {
  let { diagnostics: n } = t.state.field(A), o = [], i = 2e8, s = 0;
  n.between(e - (r < 0 ? 1 : 0), e + (r > 0 ? 1 : 0), (a, c, { spec: h }) => {
    e >= a && e <= c && (a == c || (e > a || r > 0) && (e < c || r < 0)) && (o.push(h.diagnostic), i = Math.min(a, i), s = Math.max(c, s));
  });
  let l = t.state.facet(On).tooltipFilter;
  return l && (o = l(o)), o.length ? {
    pos: i,
    end: s,
    above: t.state.doc.lineAt(i).to < s,
    create() {
      return { dom: di(t, o) };
    }
  } : null;
}
function di(t, e) {
  return g("ul", { class: "cm-tooltip-lint" }, e.map((r) => Pn(t, r, !1)));
}
const mi = (t) => {
  let e = t.state.field(A, !1);
  (!e || !e.panel) && t.dispatch({ effects: hi(t.state, [ct.of(!0)]) });
  let r = ce(t, We.open);
  return r && r.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, St = (t) => {
  let e = t.state.field(A, !1);
  return !e || !e.panel ? !1 : (t.dispatch({ effects: ct.of(!1) }), !0);
}, gi = (t) => {
  let e = t.state.field(A, !1);
  if (!e)
    return !1;
  let r = t.state.selection.main, n = e.diagnostics.iter(r.to + 1);
  return !n.value && (n = e.diagnostics.iter(0), !n.value || n.from == r.from && n.to == r.to) ? !1 : (t.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, pi = [
  { key: "Mod-Shift-m", run: mi, preventDefault: !0 },
  { key: "F8", run: gi }
], On = /* @__PURE__ */ fe.define({
  combine(t) {
    return Object.assign({ sources: t.map((e) => e.source) }, Ee(t.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, r) => e ? r ? (n) => e(n) || r(n) : e : r
    }));
  }
});
function In(t) {
  let e = [];
  if (t)
    e:
      for (let { name: r } of t) {
        for (let n = 0; n < r.length; n++) {
          let o = r[n];
          if (/[a-zA-Z]/.test(o) && !e.some((i) => i.toLowerCase() == o.toLowerCase())) {
            e.push(o);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function Pn(t, e, r) {
  var n;
  let o = r ? In(e.actions) : [];
  return g("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, g("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((i, s) => {
    let l = !1, a = (m) => {
      if (m.preventDefault(), l)
        return;
      l = !0;
      let k = ne(t.state.field(A).diagnostics, e);
      k && i.apply(t, k.from, k.to);
    }, { name: c } = i, h = o[s] ? c.indexOf(o[s]) : -1, u = h < 0 ? c : [
      c.slice(0, h),
      g("u", c.slice(h, h + 1)),
      c.slice(h + 1)
    ];
    return g("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${h < 0 ? "" : ` (access key "${o[s]})"`}.`
    }, u);
  }), e.source && g("div", { class: "cm-diagnosticSource" }, e.source));
}
class yi extends or {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return g("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class Ct {
  constructor(e, r) {
    this.diagnostic = r, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Pn(e, r, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class We {
  constructor(e) {
    this.view = e, this.items = [];
    let r = (o) => {
      if (o.keyCode == 27)
        St(this.view), this.view.focus();
      else if (o.keyCode == 38 || o.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (o.keyCode == 40 || o.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (o.keyCode == 36)
        this.moveSelection(0);
      else if (o.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (o.keyCode == 13)
        this.view.focus();
      else if (o.keyCode >= 65 && o.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: i } = this.items[this.selectedIndex], s = In(i.actions);
        for (let l = 0; l < s.length; l++)
          if (s[l].toUpperCase().charCodeAt(0) == o.keyCode) {
            let a = ne(this.view.state.field(A).diagnostics, i);
            a && i.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      o.preventDefault();
    }, n = (o) => {
      for (let i = 0; i < this.items.length; i++)
        this.items[i].dom.contains(o.target) && this.moveSelection(i);
    };
    this.list = g("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: r,
      onclick: n
    }), this.dom = g("div", { class: "cm-panel-lint" }, this.list, g("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => St(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(A).selected;
    if (!e)
      return -1;
    for (let r = 0; r < this.items.length; r++)
      if (this.items[r].diagnostic == e.diagnostic)
        return r;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: r } = this.view.state.field(A), n = 0, o = !1, i = null;
    for (e.between(0, this.view.state.doc.length, (s, l, { spec: a }) => {
      let c = -1, h;
      for (let u = n; u < this.items.length; u++)
        if (this.items[u].diagnostic == a.diagnostic) {
          c = u;
          break;
        }
      c < 0 ? (h = new Ct(this.view, a.diagnostic), this.items.splice(n, 0, h), o = !0) : (h = this.items[c], c > n && (this.items.splice(n, c - n), o = !0)), r && h.diagnostic == r.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), i = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), n++;
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      o = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Ct(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), o = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: i.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: s, panel: l }) => {
        s.top < l.top ? this.list.scrollTop -= l.top - s.top : s.bottom > l.bottom && (this.list.scrollTop += s.bottom - l.bottom);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), o && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function r() {
      let n = e;
      e = n.nextSibling, n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; e != n.dom; )
          r();
        e = n.dom.nextSibling;
      } else
        this.list.insertBefore(n.dom, e);
    for (; e; )
      r();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let r = this.view.state.field(A), n = ne(r.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: Tn.of(n)
    });
  }
  static open(e) {
    return new We(e);
  }
}
function xi(t, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function xe(t) {
  return xi(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const ki = /* @__PURE__ */ p.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ xe("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ xe("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ xe("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ xe("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
}), bi = [
  A,
  /* @__PURE__ */ p.decorations.compute([A], (t) => {
    let { selected: e, panel: r } = t.field(A);
    return !e || !r || e.from == e.to ? x.none : x.set([
      ui.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ rr(fi, { hideOn: ci }),
  ki
];
var vt = function(e) {
  e === void 0 && (e = {});
  var {
    crosshairCursor: r = !1
  } = e, n = [];
  e.closeBracketsKeymap !== !1 && (n = n.concat(ir)), e.defaultKeymap !== !1 && (n = n.concat(Oo)), e.searchKeymap !== !1 && (n = n.concat(oi)), e.historyKeymap !== !1 && (n = n.concat(Ur)), e.foldKeymap !== !1 && (n = n.concat(sr)), e.completionKeymap !== !1 && (n = n.concat(lr)), e.lintKeymap !== !1 && (n = n.concat(pi));
  var o = [];
  return e.lineNumbers !== !1 && o.push(ar()), e.highlightActiveLineGutter !== !1 && o.push(cr()), e.highlightSpecialChars !== !1 && o.push(hr()), e.history !== !1 && o.push(Ir()), e.foldGutter !== !1 && o.push(ur()), e.drawSelection !== !1 && o.push(fr()), e.dropCursor !== !1 && o.push(dr()), e.allowMultipleSelections !== !1 && o.push(he.allowMultipleSelections.of(!0)), e.indentOnInput !== !1 && o.push(mr()), e.syntaxHighlighting !== !1 && o.push(Nt(Sr, {
    fallback: !0
  })), e.bracketMatching !== !1 && o.push(gr()), e.closeBrackets !== !1 && o.push(pr()), e.autocompletion !== !1 && o.push(yr()), e.rectangularSelection !== !1 && o.push(xr()), r !== !1 && o.push(kr()), e.highlightActiveLine !== !1 && o.push(br()), e.highlightSelectionMatches !== !1 && o.push(qo()), e.tabSize && typeof e.tabSize == "number" && o.push(Pt.of(" ".repeat(e.tabSize))), o.concat([qt.of(n.flat())]).filter(Boolean);
};
const Si = "#e5c07b", At = "#e06c75", Ci = "#56b6c2", vi = "#ffffff", be = "#abb2bf", Ze = "#7d8799", Ai = "#61afef", Mi = "#98c379", Mt = "#d19a66", Li = "#c678dd", Di = "#21252b", Lt = "#2c313a", Dt = "#282c34", Ue = "#353a42", Bi = "#3E4451", Bt = "#528bff", Ei = /* @__PURE__ */ p.theme({
  "&": {
    color: be,
    backgroundColor: Dt
  },
  ".cm-content": {
    caretColor: Bt
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: Bt },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: Bi },
  ".cm-panels": { backgroundColor: Di, color: be },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: Dt,
    color: Ze,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: Lt
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: Ue
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: Ue,
    borderBottomColor: Ue
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: Lt,
      color: be
    }
  }
}, { dark: !0 }), wi = /* @__PURE__ */ Cr.define([
  {
    tag: f.keyword,
    color: Li
  },
  {
    tag: [f.name, f.deleted, f.character, f.propertyName, f.macroName],
    color: At
  },
  {
    tag: [/* @__PURE__ */ f.function(f.variableName), f.labelName],
    color: Ai
  },
  {
    tag: [f.color, /* @__PURE__ */ f.constant(f.name), /* @__PURE__ */ f.standard(f.name)],
    color: Mt
  },
  {
    tag: [/* @__PURE__ */ f.definition(f.name), f.separator],
    color: be
  },
  {
    tag: [f.typeName, f.className, f.number, f.changed, f.annotation, f.modifier, f.self, f.namespace],
    color: Si
  },
  {
    tag: [f.operator, f.operatorKeyword, f.url, f.escape, f.regexp, f.link, /* @__PURE__ */ f.special(f.string)],
    color: Ci
  },
  {
    tag: [f.meta, f.comment],
    color: Ze
  },
  {
    tag: f.strong,
    fontWeight: "bold"
  },
  {
    tag: f.emphasis,
    fontStyle: "italic"
  },
  {
    tag: f.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: f.link,
    color: Ze,
    textDecoration: "underline"
  },
  {
    tag: f.heading,
    fontWeight: "bold",
    color: At
  },
  {
    tag: [f.atom, f.bool, /* @__PURE__ */ f.special(f.variableName)],
    color: Mt
  },
  {
    tag: [f.processingInstruction, f.string, f.inserted],
    color: Mi
  },
  {
    tag: f.invalid,
    color: vi
  }
]), Ri = [Ei, /* @__PURE__ */ Nt(wi)];
var Ti = p.theme({
  "&": {
    backgroundColor: "#fff"
  }
}, {
  dark: !1
}), Oi = function(e) {
  e === void 0 && (e = {});
  var {
    indentWithTab: r = !0,
    editable: n = !0,
    readOnly: o = !1,
    theme: i = "light",
    placeholder: s = "",
    basicSetup: l = !0
  } = e, a = [];
  switch (r && a.unshift(qt.of([Io])), l && (typeof l == "boolean" ? a.unshift(vt()) : a.unshift(vt(l))), s && a.unshift(vr(s)), i) {
    case "light":
      a.push(Ti);
      break;
    case "dark":
      a.push(Ri);
      break;
    case "none":
      break;
    default:
      a.push(i);
      break;
  }
  return n === !1 && a.push(p.editable.of(!1)), o && a.push(he.readOnly.of(!0)), [...a];
}, Ii = (t) => ({
  line: t.state.doc.lineAt(t.state.selection.main.from),
  lineCount: t.state.doc.lines,
  lineBreak: t.state.lineBreak,
  length: t.state.doc.length,
  readOnly: t.state.readOnly,
  tabSize: t.state.tabSize,
  selection: t.state.selection,
  selectionAsSingle: t.state.selection.asSingle().main,
  ranges: t.state.selection.ranges,
  selectionCode: t.state.sliceDoc(t.state.selection.main.from, t.state.selection.main.to),
  selections: t.state.selection.ranges.map((e) => t.state.sliceDoc(e.from, e.to)),
  selectedText: t.state.selection.ranges.some((e) => !e.empty)
}), Et = Xe.define(), Pi = [];
function Wi(t) {
  var {
    value: e,
    selection: r,
    onChange: n,
    onStatistics: o,
    onCreateEditor: i,
    onUpdate: s,
    extensions: l = Pi,
    autoFocus: a,
    theme: c = "light",
    height: h = null,
    minHeight: u = null,
    maxHeight: m = null,
    width: k = null,
    minWidth: S = null,
    maxWidth: B = null,
    placeholder: $ = "",
    editable: G = !0,
    readOnly: V = !1,
    indentWithTab: K = !0,
    basicSetup: H = !0,
    root: ie,
    initialState: U
  } = t, [W, E] = ke(), [y, P] = ke(), [J, j] = ke(), Fe = p.theme({
    "&": {
      height: h,
      minHeight: u,
      maxHeight: m,
      width: k,
      minWidth: S,
      maxWidth: B
    },
    "& .cm-scroller": {
      height: "100% !important"
    }
  }), Ne = p.updateListener.of((w) => {
    if (w.docChanged && typeof n == "function" && // Fix echoing of the remote changes:
    // If transaction is market as remote we don't have to call `onChange` handler again
    !w.transactions.some((Nn) => Nn.annotation(Et))) {
      var le = w.state.doc, me = le.toString();
      n(me, w);
    }
    o && o(Ii(w));
  }), Fn = Oi({
    theme: c,
    editable: G,
    readOnly: V,
    placeholder: $,
    indentWithTab: K,
    basicSetup: H
  }), se = [Ne, Fe, ...Fn];
  return s && typeof s == "function" && se.push(p.updateListener.of(s)), se = se.concat(l), N(() => {
    if (W && !J) {
      var w = {
        doc: e,
        selection: r,
        extensions: se
      }, le = U ? he.fromJSON(U.json, w, U.fields) : he.create(w);
      if (j(le), !y) {
        var me = new p({
          state: le,
          parent: W,
          root: ie
        });
        P(me), i && i(me, le);
      }
    }
    return () => {
      y && (j(void 0), P(void 0));
    };
  }, [W, J]), N(() => E(t.container), [t.container]), N(() => () => {
    y && (y.destroy(), P(void 0));
  }, [y]), N(() => {
    a && y && y.focus();
  }, [a, y]), N(() => {
    y && y.dispatch({
      effects: R.reconfigure.of(se)
    });
  }, [c, l, h, u, m, k, S, B, $, G, V, K, H, n, s]), N(() => {
    if (e !== void 0) {
      var w = y ? y.state.doc.toString() : "";
      y && e !== w && y.dispatch({
        changes: {
          from: 0,
          to: w.length,
          insert: e || ""
        },
        annotations: [Et.of(!0)]
      });
    }
  }, [e, y]), {
    state: J,
    setState: j,
    view: y,
    setView: P,
    container: W,
    setContainer: E
  };
}
var Fi = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"], Wn = /* @__PURE__ */ wt((t, e) => {
  var {
    className: r,
    value: n = "",
    selection: o,
    extensions: i = [],
    onChange: s,
    onStatistics: l,
    onCreateEditor: a,
    onUpdate: c,
    autoFocus: h,
    theme: u = "light",
    height: m,
    minHeight: k,
    maxHeight: S,
    width: B,
    minWidth: $,
    maxWidth: G,
    basicSetup: V,
    placeholder: K,
    indentWithTab: H,
    editable: ie,
    readOnly: U,
    root: W,
    initialState: E
  } = t, y = qn(t, Fi), P = Rt(null), {
    state: J,
    view: j,
    container: Fe
  } = Wi({
    container: P.current,
    root: W,
    value: n,
    autoFocus: h,
    theme: u,
    height: m,
    minHeight: k,
    maxHeight: S,
    width: B,
    minWidth: $,
    maxWidth: G,
    basicSetup: V,
    placeholder: K,
    indentWithTab: H,
    editable: ie,
    readOnly: U,
    selection: o,
    onChange: s,
    onStatistics: l,
    onCreateEditor: a,
    onUpdate: c,
    extensions: i,
    initialState: E
  });
  if (_n(e, () => ({
    editor: P.current,
    state: J,
    view: j
  }), [P, Fe, J, j]), typeof n != "string")
    throw new Error("value must be typeof string but got " + typeof n);
  var Ne = typeof u == "string" ? "cm-theme-" + u : "cm-theme";
  return /* @__PURE__ */ F.jsx("div", Vn({
    ref: P,
    className: "" + Ne + (r ? " " + r : "")
  }, y));
});
Wn.displayName = "CodeMirror";
const Ni = [
  "[&_.cm-editor]:bg-transparent",
  "[&_.cm-editor]:border-transparent",
  "[&_.cm-scroller]:font-mono",
  "[&_.cm-scroller]:border-transparent",
  "[&_.cm-activeLine]:bg-transparent",
  "[&_.cm-activeLineGutter]:bg-transparent",
  "[&_.cm-gutters]:bg-grey-75 dark:[&_.cm-gutters]:bg-grey-950",
  "[&_.cm-gutters]:text-grey-600 dark:[&_.cm-gutters]:text-grey-500",
  "[&_.cm-gutters]:border-grey-500 dark:[&_.cm-gutters]:border-grey-800",
  "[&_.cm-cursor]:border-grey-900 dark:[&_.cm-cursor]:border-grey-75"
].join(" "), Vi = wt(function({
  title: e,
  value: r,
  height: n = "200px",
  error: o,
  hint: i,
  clearBg: s = !0,
  extensions: l,
  onChange: a,
  onFocus: c,
  onBlur: h,
  className: u,
  ...m
}, k) {
  const S = Hn(), B = Rt(null), [$, G] = ke(100), [V, K] = Un.useState(null), { setFocusState: H } = zn(), ie = (E) => {
    c == null || c(E), H(!0);
  }, U = (E) => {
    h == null || h(E), H(!1);
  };
  N(() => {
    Promise.all(l).then(K);
  }, [l]), N(() => {
    const E = new ResizeObserver(([y]) => {
      G(y.contentRect.width);
    });
    return E.observe(B.current), () => E.disconnect();
  }, []);
  let W = $n(
    "peer order-2 w-full max-w-full overflow-hidden rounded-sm border",
    s ? "bg-transparent" : "bg-grey-75",
    o ? "border-red" : "border-grey-500 dark:border-grey-800",
    e && "mt-2",
    n === "full" && "h-full",
    Ni,
    u
  );
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx("div", { ref: B }),
    V && /* @__PURE__ */ F.jsxs("div", { className: n === "full" ? "h-full" : "", style: { width: $ }, children: [
      /* @__PURE__ */ F.jsx(
        Wn,
        {
          ref: k,
          className: W,
          extensions: V,
          height: n === "full" ? "100%" : n,
          value: r,
          onBlur: U,
          onChange: a,
          onFocus: ie,
          ...m
        }
      ),
      e && /* @__PURE__ */ F.jsx(Gn, { className: "order-1 !text-grey-700 peer-focus:!text-black", htmlFor: S, useLabelTag: !0, children: e }),
      i && /* @__PURE__ */ F.jsx(Kn, { className: "order-3", color: o ? "red" : "", children: i })
    ] })
  ] });
});
export {
  Vi as default
};
//# sourceMappingURL=CodeEditorView-cf9b94da.mjs.map
