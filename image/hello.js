import {H as T, a1 as Q, P as J, I as v, J as y, U as Z, V as fe, K as n, Z as H, N as p, C as c, v as G, a0 as le, aj as ce, r as m, T as re, _ as L, l as pe, F as ge, E, B as q, S as Y, a7 as k, X as P, W as I, O as B, R as he, aq as ye, ac as ae, aV as be, aW as we, ar as ke, a5 as z, M as se, w as Se, aX as Ce, ae as K, af as $e, aS as Le, aY as Ie, aZ as Te, a_ as Ae, a$ as De, b0 as xe, b1 as Be, b2 as Ee, b3 as Pe, b4 as Ne, b5 as Re, b6 as Ve, b7 as Fe, b8 as Oe, b9 as Ge, ba as Me, bb as Ue, bc as Ke, bd as ze, be as He, bf as Ye, bg as je, bh as We, bi as Xe, bj as qe, bk as Je, bl as Ze, bm as Qe, bn as et, bo as tt, bp as at, bq as st, br as ot, bs as nt, bt as it, bu as lt, bv as ct, bw as rt, bx as ut, by as dt, bz as vt, bA as _t} from "./modules-834d35d4.js";
import {_ as R, G as ue, c as N, k as mt, r as ee, di as de, dj as ft, e as oe, aR as pt, S as ve, q as gt, dk as ht, dl as yt, dm as bt, dn as wt, b7 as kt, aU as St, aV as Ct, H as _e, dp as ne, y as $t} from "./page-activity-fa24e93c.js";
import "./native/index-2baaf77b.js";
import "./en-a9b3637d.js";
import "./rus-be103059.js";
import "./vi-8cadb4e1.js";
import "./id-94d444aa.js";
import "./hd-eadb17fe.js";
import "./tha-3145a154.js";
import "./md-426dfcb9.js";
import "./bra-9252c082.js";
import "./my-c960f939.js";
import "./bdt-611cea81.js";
import "./zh-94c82ee8.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        o(s);
    new MutationObserver(s=>{
        for (const i of s)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function o(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = a(s);
        fetch(s.href, i)
    }
}
)();
const Lt = {
    class: "tabbar__container"
}
  , It = ["onClick"]
  , Tt = T({
    __name: "index",
    setup(t) {
        const e = Q()
          , a = J();
        async function o(i) {
            await e.push({
                name: i
            })
        }
        const s = [{
            name: "home"
        }, {
            name: "activity"
        }, {
            name: "promotion"
        }, {
            name: "wallet"
        }, {
            name: "main"
        }];
        return (i,l)=>(v(),
        y("div", Lt, [(v(),
        y(Z, null, fe(s, (r,u)=>n("div", {
            class: H(["tabbar__container-item", {
                active: r.name === c(a).name
            }]),
            key: r + "" + u,
            onClick: _=>o(r.name)
        }, [n("div", {
            class: H([r.name])
        }, p(i.$t(r.name)), 3)], 10, It)), 64))]))
    }
});
const At = R(Tt, [["__scopeId", "data-v-6730d638"]]);
function Dt() {
    const t = ue()
      , e = ()=>{
        document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0)
    }
    ;
    G(()=>{
        document.addEventListener("visibilitychange", e)
    }
    ),
    le(()=>{
        document.removeEventListener("visibilitychange", e)
    }
    )
}
const xt = T({
    __name: "Customer",
    setup(t) {
        ce(d=>({
            "17a7a9f6": U.value
        }));
        const e = m(!1)
          , a = m({
            x: 0,
            y: 0
        })
          , o = m(0)
          , s = m(0)
          , i = m(0)
          , l = m(0)
          , r = m(0)
          , u = m(0)
          , _ = m();
        let S, V, F, A;
        const D = Q();
        function M() {
            C(S, V, F, A) || D.push({
                name: "CustomerService"
            })
        }
        G(()=>{
            _.value = document.getElementById("customerId")
        }
        );
        function O(d) {
            e.value = !0;
            var g;
            d.touches ? g = d.touches[0] : g = d,
            a.value.x = g.clientX,
            a.value.y = g.clientY,
            o.value = _.value.offsetLeft,
            s.value = _.value.offsetTop,
            S = d.clientX,
            V = d.clientY
        }
        function f(d) {
            if (e.value) {
                var g, $ = document.getElementById("customerId"), x = $.clientWidth, j = $.clientHeight, h = document.documentElement.clientHeight, w = document.documentElement.clientWidth;
                d.touches ? g = d.touches[0] : g = d,
                i.value = g.clientX - a.value.x,
                l.value = g.clientY - a.value.y,
                r.value = o.value + i.value,
                u.value = s.value + l.value,
                r.value <= 0 && (r.value = 0),
                u.value <= 0 && (u.value = 0),
                r.value >= w - x && (r.value = w - x),
                u.value >= h - j && (u.value = h - j),
                _.value.style.left = r.value + "px",
                _.value.style.top = u.value + "px",
                document.addEventListener("touchmove", function() {
                    d.preventDefault()
                }, !1)
            }
            d.stopPropagation(),
            d.preventDefault()
        }
        function b(d) {
            e.value = !1,
            F = d.clientX,
            A = d.clientY
        }
        function C(d, g, $, x) {
            return !(Math.sqrt((d - $) * (d - $) + (g - x) * (g - x)) <= 1)
        }
        const U = m("bahnschrift");
        return (d,g)=>{
            const $ = re("lazy");
            return v(),
            y("div", {
                class: "customer",
                onClick: M,
                onMousedown: O,
                onTouchstart: O,
                onMousemove: f,
                onTouchmove: f,
                onMouseup: b,
                id: "customerId"
            }, [L(n("img", null, null, 512), [[$, c(N)("home", "icon_sevice")]])], 32)
        }
    }
});
const Bt = {
    class: "start-page"
}
  , Et = ["src"]
  , Pt = T({
    __name: "StartPage",
    setup(t) {
        const e = {}.VITE_PNGSTART || 0
          , a = {}.VITE_STARTEXT || "";
        return (o,s)=>(v(),
        y("div", Bt, [n("div", null, [n("div", {
            class: H(["dice", [c(e)]])
        }, null, 2), n("p", null, p(c(a) || o.$t("fairAndSafe")), 1), n("img", {
            class: H(["logo", [c(e)]]),
            src: c(N)("home/StartPage", c(mt)())
        }, null, 10, Et)])]))
    }
});
const Nt = R(Pt, [["__scopeId", "data-v-7a2723eb"]])
  , Rt = {
    class: "header"
}
  , Vt = {
    class: "title"
}
  , Ft = {
    class: "tip"
}
  , Ot = {
    class: "container"
}
  , Gt = {
    class: "footer"
}
  , Mt = T({
    __name: "dialog",
    setup(t) {
        const e = Q()
          , a = J()
          , o = m(!1)
          , {store: s, closeFirstSave: i} = ee()
          , {ActiveSotre: l, getFirstRechargeList: r} = de()
          , u = pe(new Date).format("YYYY-MM-DD")
          , _ = ge("firstSave", null)
          , S = E(()=>_.value == u)
          , V = ()=>{
            S.value ? (_.value = "",
            localStorage.removeItem("firstSave")) : _.value = u
        }
          , F = ()=>{
            o.value = !1,
            i()
        }
          , A = ["activity", "home", "main", "wallet", "promotion"];
        q(()=>a.name, f=>{
            A.includes(a.name) && D()
        }
        );
        const D = ()=>{
            _.value != u && r().then(f=>{
                if (!f.length)
                    return o.value = !1;
                const b = f.find(C=>C.isFinshed);
                b && (l.value.isShowFirstSaveDialog = !1),
                b || (o.value = !0)
            }
            )
        }
          , M = ()=>{
            o.value = !1,
            i(!0),
            e.push({
                name: "FirstRecharge"
            })
        }
          , O = ()=>{
            o.value = !1,
            i(!0),
            e.push({
                name: "Recharge"
            })
        }
        ;
        return G(()=>{
            A.includes(a.name) && D()
        }
        ),
        (f,b)=>{
            const C = Y("van-dialog");
            return v(),
            k(C, {
                show: o.value,
                "onUpdate:show": b[0] || (b[0] = U=>o.value = U),
                className: "firstSaveDialog"
            }, {
                title: P(()=>[n("div", Rt, [n("div", Vt, p(f.$t("firstDialogH")), 1), n("div", Ft, p(f.$t("firstDialogTip")), 1)])]),
                footer: P(()=>[n("div", Gt, [n("div", {
                    class: H(["active", {
                        a: S.value
                    }]),
                    onClick: V
                }, p(f.$t("noTipToday")), 3), n("div", {
                    class: "btn",
                    onClick: M
                }, p(f.$t("activity")), 1)])]),
                default: P(()=>[n("div", Ot, [I(ft, {
                    list: c(l).FirstRechargeList,
                    onGorecharge: O
                }, null, 8, ["list"])]), n("div", {
                    class: "close",
                    onClick: F
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Ut = R(Mt, [["__scopeId", "data-v-2b9d4df3"]])
  , Kt = {
    class: "dialog-window"
}
  , zt = {
    class: "dialog-wrapper"
}
  , Ht = {
    class: "dialog-title"
}
  , Yt = {
    class: "dialog-content"
}
  , jt = {
    class: "dialog-window"
}
  , Wt = {
    class: "dialog-wrapper"
}
  , Xt = {
    class: "dialog-title"
}
  , qt = {
    class: "dialog-tips"
}
  , Jt = {
    class: "dialog-content"
}
  , Zt = {
    class: "dialog-tips",
    style: {
        "margin-bottom": "0"
    }
}
  , Qt = T({
    __name: "AllPageDialog",
    setup(t) {
        J();
        const {ActiveSotre: e} = de()
          , {store: a, closeInvite: o, showFirstSave: s} = ee();
        return (i,l)=>{
            const r = Y("van-dialog")
              , u = re("lazy");
            return v(),
            y(Z, null, [c(s) ? (v(),
            k(Ut, {
                key: 0
            })) : B("", !0), I(r, {
                show: c(e).showReceiveDialog,
                "onUpdate:show": l[1] || (l[1] = _=>c(e).showReceiveDialog = _),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: P(()=>[n("div", Kt, [n("div", zt, [L(n("img", null, null, 512), [[u, c(N)("activity/DailyTask", "confirmationReceived")]]), n("div", Ht, p(i.$t("awardsReceived")), 1), n("div", Yt, [L(n("img", null, null, 512), [[u, c(N)("activity/DailyTask", "amountIcon")]]), n("span", null, p(c(oe)(c(e).receiveAmount)), 1)]), n("div", {
                    class: "dialog-btn",
                    onClick: l[0] || (l[0] = _=>c(e).showReceiveDialog = !1)
                }, p(i.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), I(r, {
                show: c(a).invite,
                "onUpdate:show": l[3] || (l[3] = _=>c(a).invite = _),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: P(()=>[n("div", jt, [n("div", Wt, [L(n("img", null, null, 512), [[u, c(N)("activity/DailyTask", "confirmationReceived")]]), n("div", Xt, p(i.$t("inviteTips")), 1), n("p", qt, p(i.$t("inviteAmount")), 1), n("div", Jt, [n("span", Zt, p(i.$t("commissionAmount")), 1), n("span", null, p(c(oe)(c(a).rebateAmount)), 1)]), n("div", {
                    class: "dialog-btn",
                    onClick: l[2] || (l[2] = _=>c(o)())
                }, p(i.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const ea = R(Qt, [["__scopeId", "data-v-cbb8299a"]])
  , ta = T({
    __name: "App",
    setup(t) {
        ce(h=>({
            "33fc2737": C.value
        }));
        const {openAll: e} = ee()
          , a = kt()
          , o = m(!1)
          , s = m(!1)
          , i = J()
          , l = pt()
          , r = ve()
          , {locale: u} = he()
          , _ = ue()
          , S = m(!1)
          , V = E(()=>i.meta.tabBar)
          , F = E(()=>!["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C"].includes(i.path))
          , A = m(0)
          , D = m(Math.floor(Math.random() * 1e4))
          , M = E(()=>i.name + D.value)
          , O = ()=>{
            a.on("changeKeepAliveKey", ()=>{
                D.value = Math.floor(Math.random() * 1e4)
            }
            )
        }
        ;
        sessionStorage.getItem("isload") ? o.value = !1 : (s.value = !0,
        sessionStorage.setItem("isload", s.value.toString()),
        o.value = !0),
        r.getHomeSetting(),
        q(()=>r.getAreacode, h=>{
            h && l.setNumberType(h.substring(1))
        }
        ),
        q(()=>r.getDL, h=>{
            u.value = h,
            _.updateLanguage(h),
            St(h),
            Ct(_e.global.t)
        }
        ),
        setTimeout(()=>{
            o.value = !1
        }
        , 2e3);
        const f = m(!1)
          , b = gt();
        b.$subscribe((h,w)=>{
            f.value = w.isLoading,
            b.setLoading(f.value)
        }
        );
        const C = m("bahnschrift");
        let U = ht()
          , d = r.getLanguage
          , g = yt(U, d);
        const $ = async h=>{
            const w = [{
                title: "vi",
                fontStyle: "bahnschrift"
            }, {
                title: "else",
                fontStyle: "'Roboto', 'Inter', sans-serif"
            }]
              , W = w.findIndex(X=>X.title == g);
            W >= 0 ? C.value = w[W].fontStyle : C.value = w[w.length - 1].fontStyle
        }
          , x = ()=>{
            a.on("keyChange", ()=>{
                A.value++
            }
            ),
            a.on("changeIsGame", ()=>{
                S.value = !S.value,
                f.value = !f.value
            }
            )
        }
          , j = ()=>{
            a.off("keyChange"),
            a.off("changeKeepAliveKey"),
            a.off("changeIsGame")
        }
        ;
        return l.setNumberType(r.getAreacode.substring(1)),
        $(),
        G(()=>{
            bt() && wt(),
            e(),
            j(),
            x(),
            O()
        }
        ),
        Dt(),
        (h,w)=>{
            const W = Y("LoadingView");
            return v(),
            y(Z, null, [I(W, {
                loading: f.value,
                type: "loading",
                isGame: S.value
            }, {
                default: P(()=>[(v(),
                k(c(be), {
                    key: A.value
                }, {
                    default: P(({Component: X})=>[(v(),
                    k(ye, {
                        max: 1
                    }, [c(i).meta.keepAlive ? (v(),
                    k(ae(X), {
                        key: M.value
                    })) : B("", !0)], 1024)), c(i).meta.keepAlive ? B("", !0) : (v(),
                    k(ae(X), {
                        key: 0
                    }))]),
                    _: 1
                })), F.value ? (v(),
                k(xt, {
                    key: 0
                })) : (v(),
                k(c(we), {
                    key: 1,
                    license: "15861567"
                })), V.value ? (v(),
                k(At, {
                    key: 2
                })) : B("", !0)]),
                _: 1
            }, 8, ["loading", "isGame"]), o.value ? (v(),
            k(Nt, {
                key: 0
            })) : B("", !0), I(ea)], 64)
        }
    }
});
const aa = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-debounce: value must be an array that includes a function and a number");
        let a = null;
        const o = e.value[0]
          , s = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            a = setTimeout(()=>{
                o()
            }
            , s || 500)
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , sa = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-throttle: value must be an array that includes a function and a number");
        let a = null;
        const o = e.value[0]
          , s = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            t.disabled || (t.disabled = !0,
            o(),
            a = setTimeout(()=>{
                t.disabled = !1
            }
            , s || 500))
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , oa = {
    mounted(t, e) {
        t.addEventListener("input", a=>{
            const s = t.value.replace(/\D+/g, "");
            t.value = s,
            e.value = s
        }
        )
    }
}
  , na = t=>({
    beforeMount: (e,a)=>{
        e.classList.add("ar-lazyload");
        const {value: o} = a;
        e.dataset.origin = o,
        t.observe(e)
    }
    ,
    updated(e, a) {
        e.dataset.origin = a.value,
        t.observe(e)
    },
    unmounted(e, a) {
        t.unobserve(e)
    },
    mounted(e, a) {
        t.observe(e)
    }
})
  , ia = {
    mounted(t, e) {
        let a = 0;
        const o = e.value && e.value.wait ? e.value.wait : 3e3
          , s = i=>{
            const l = Date.now();
            l - a >= o && (a = l,
            e.value && e.value.handler && e.value.handler(i))
        }
        ;
        t.addEventListener("click", s),
        t._throttleClickCleanup = ()=>{
            t.removeEventListener("click", s)
        }
    },
    unmounted(t) {
        t._throttleClickCleanup && t._throttleClickCleanup(),
        delete t._throttleClickCleanup
    }
}
  , la = {
    mounted(t, e) {
        const {value: a} = e;
        let o = ke("permission", null);
        o.value === null || !a || (o && (o = JSON.parse(o.value)),
        o && o[a] === !1 && (t.style.display = "none"))
    }
}
  , ie = {
    debounce: aa,
    throttle: sa,
    onlyNum: oa,
    throttleClick: ia,
    haspermission: la
}
  , ca = {
    install: function(t) {
        Object.keys(ie).forEach(a=>{
            t.directive(a, ie[a])
        }
        );
        const e = new IntersectionObserver(a=>{
            a.forEach(o=>{
                if (o.isIntersecting) {
                    const s = o.target;
                    s.src = s.dataset.origin || N("images", "avatar"),
                    s.onerror = ()=>{
                        let i = s.dataset.img;
                        s.src = i || N("images", "avatar"),
                        s.style.objectFit = "contain"
                    }
                    ,
                    s.classList.remove("ar-lazyload"),
                    e.unobserve(s)
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -50px 0px"
        });
        t.directive("lazy", na(e))
    }
}
  , ra = {
    class: "navbar__content"
}
  , ua = {
    key: 0,
    class: "backIcon"
}
  , da = {
    class: "navbar__content-center"
}
  , va = {
    class: "navbar__content-title"
}
  , _a = T({
    __name: "NavBar",
    props: {
        title: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Boolean,
            default: !0
        },
        leftArrow: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "linear-gradient(90deg, #FF9901 0%, #E57201 100%)"
        },
        classN: {
            type: String,
            default: ""
        },
        headLogo: {
            type: Boolean,
            default: !1
        },
        headerUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["click-left", "click-right"],
    setup(t, {emit: e}) {
        const a = m()
          , o = ve()
          , s = E(()=>o.getHeadLogo)
          , i = e
          , l = ()=>{
            i("click-left")
        }
          , r = ()=>{
            i("click-right")
        }
        ;
        return G(()=>{}
        ),
        (u,_)=>(v(),
        y("div", {
            class: "navbar",
            ref_key: "navbar",
            ref: a
        }, [n("div", {
            class: "navbar-fixed",
            style: se({
                background: t.backgroundColor
            })
        }, [n("div", ra, [n("div", {
            class: "navbar__content-left",
            onClick: l
        }, [z(u.$slots, "left", {}, ()=>[t.leftArrow ? (v(),
        y("div", ua)) : B("", !0)], !0)]), n("div", da, [t.headLogo ? (v(),
        y("div", {
            key: 0,
            class: "headLogo",
            style: se({
                backgroundImage: "url(" + (t.headerUrl || s.value) + ")"
            })
        }, null, 4)) : B("", !0), z(u.$slots, "center", {}, ()=>[n("div", va, p(t.title), 1)], !0)]), n("div", {
            class: "navbar__content-right",
            onClick: r
        }, [z(u.$slots, "right", {}, void 0, !0)])])], 4)], 512))
    }
});
const ma = R(_a, [["__scopeId", "data-v-8eb4a5ed"]])
  , fa = {
    class: "ar-loading-view"
}
  , pa = {
    class: "loading-wrapper"
}
  , ga = {
    class: "com__box"
}
  , ha = $e('<div class="loading" data-v-94f2e2ba><div class="shape shape-1" data-v-94f2e2ba></div><div class="shape shape-2" data-v-94f2e2ba></div><div class="shape shape-3" data-v-94f2e2ba></div><div class="shape shape-4" data-v-94f2e2ba></div></div>', 1)
  , ya = [ha]
  , ba = {
    class: "skeleton-wrapper"
}
  , wa = T({
    __name: "LoadingView",
    props: {
        loading: {
            type: Boolean
        },
        type: {},
        isGame: {
            type: Boolean
        }
    },
    setup(t) {
        const e = t
          , a = m();
        let o = null;
        return G(async()=>{
            const s = "tc";
            await Se(),
            o = Ce.loadAnimation({
                container: a.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: `/loading/${s}/data.json`
            })
        }
        ),
        q(()=>e.loading, ()=>{
            e.type === "loading" && !e.isGame && (e.loading ? o && o.play() : o && o.stop())
        }
        ),
        le(()=>{
            o && o.destroy(),
            o = null
        }
        ),
        (s,i)=>{
            const l = Y("VanSkeleton");
            return v(),
            y(Z, null, [L(n("div", fa, [z(s.$slots, "template", {}, ()=>[L(n("div", pa, [L(n("div", {
                ref_key: "element",
                ref: a,
                class: "loading-animat"
            }, null, 512), [[K, !s.isGame]]), L(n("div", ga, ya, 512), [[K, s.isGame]])], 512), [[K, s.type === "loading"]]), L(n("div", ba, [I(l, {
                row: 10
            }), I(l, {
                title: "",
                avatar: "",
                row: 5
            }), I(l, {
                title: "",
                row: 5
            })], 512), [[K, s.type === "skeleton"]])], !0)], 512), [[K, s.loading]]), z(s.$slots, "default", {}, void 0, !0)], 64)
        }
    }
});
const ka = R(wa, [["__scopeId", "data-v-94f2e2ba"]]);
const Sa = ["xlink:href"]
  , Ca = {
    __name: "svgIcons",
    props: {
        name: {
            type: String,
            required: !0
        },
        color: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const e = t
          , a = E(()=>`#icon-${e.name}`)
          , o = E(()=>e.name ? `svg-icon icon-${e.name}` : "svg-icon");
        return (s,i)=>(v(),
        y("svg", Le({
            class: o.value
        }, s.$attrs, {
            style: {
                color: t.color
            }
        }), [n("use", {
            "xlink:href": a.value
        }, null, 8, Sa)], 16))
    }
}
  , $a = {
    class: "ar-searchbar__selector"
}
  , La = {
    class: "ar-searchbar__selector-default"
}
  , Ia = T({
    __name: "ArSelect",
    props: {
        selectName: {
            type: String,
            default: ""
        }
    },
    emits: ["click-select"],
    setup(t, {emit: e}) {
        const a = e
          , o = ()=>{
            a("click-select")
        }
        ;
        return (s,i)=>{
            const l = Y("van-icon");
            return v(),
            y("div", $a, [n("div", {
                onClick: o
            }, [n("span", La, p(t.selectName), 1), I(l, {
                name: "arrow-down"
            })])])
        }
    }
});
const Ta = R(Ia, [["__scopeId", "data-v-f330f1f2"]])
  , Aa = t=>{
    t.component("NavBar", ma),
    t.component("LoadingView", ka),
    t.component("ArSelect", Ta),
    t.component("svg-icon", Ca),
    t.use(Ie).use(Te).use(Ae).use(De).use(xe).use(Be).use(Ee).use(Pe).use(Ne).use(Re).use(Ve).use(Fe).use(Oe).use(Ge).use(Me).use(Ue).use(Ke).use(ze).use(He).use(Ye).use(je).use(We).use(Xe).use(qe).use(Je).use(Ze).use(Qe).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(ct).use(rt).use(_e).use(ca).use(ut);
    let e = t.config.globalProperties
      , a = {};
    a.TopHeight = 38,
    Object.keys(ne.refiter).forEach(o=>{
        a[o] = ne.refiter[o]
    }
    ),
    e.$u = a
}
  , Da = {};
({}).VITE_POINT && Da[{}.VITE_POINT]();
const te = dt(ta)
  , me = vt();
Aa(te);
me.use(_t);
te.use($t).use(me);
te.mount("#app");
