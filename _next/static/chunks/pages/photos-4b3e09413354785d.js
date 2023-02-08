(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [205], {
        8934: function(t, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/photos", function() {
                return i(4036)
            }])
        },
        778: function(t, e, i) {
            "use strict";
            i.d(e, {
                x: function() {
                    return s
                }
            });
            var n = i(5893),
                r = i(837);
            let o = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            function s(t) {
                let {
                    scale: e = 1.2,
                    ...i
                } = t;
                return (0, n.jsx)("img", {
                    "aria-hidden": "true",
                    className: a(),
                    style: {
                        filter: o ? "blur(10px)" : "blur(32px)",
                        transform: "scale(".concat(e, ") translateZ(0)")
                    },
                    ...i
                })
            }
            let a = (0, r.iv)({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                br: "inherit"
            })
        },
        4036: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                __N_SSG: function() {
                    return p
                },
                config: function() {
                    return h
                },
                default: function() {
                    return f
                }
            });
            var n = i(5893);
            i(7294);
            var r = i(5960),
                o = i(7497),
                s = i(5675),
                a = i.n(s),
                l = i(837),
                u = i(778);
            let c = (0, l.zo)("li", {
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                height: 700,
                outline: 0,
                "@mobile": {
                    width: "100%",
                    minWidth: "unset",
                    pointerEvents: "none"
                },
                "@media (max-width: 440px)": {
                    height: 420
                },
                img: {
                    userSelect: "none",
                    objectFit: "cover"
                }
            });

            function d(t) {
                let {
                    base64: e,
                    src: i,
                    alt: r = "Photo",
                    priority: o
                } = t;
                return (0, n.jsxs)(c, {
                    children: [(0, n.jsx)(u.x, {
                        alt: r,
                        src: e
                    }), (0, n.jsx)(a(), {
                        fill: !0,
                        alt: r,
                        src: i,
                        sizes: " (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw ",
                        priority: o
                    })]
                })
            }
            var p = !0;

            function f(t) {
                let {
                    photos: e
                } = t;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(r.h, {
                        title: "Photos"
                    }), (0, n.jsx)(o.x, {
                        as: "ul",
                        id: "gallery",
                        css: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
                            gap: 8,
                            "@mobile": {
                                padding: 0
                            },
                            "@media (max-width: 440px)": {
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
                            }
                        },
                        children: Object.entries(e).map((t, e) => {
                            let [i, r] = t;
                            return (0, n.jsx)(d, {
                                src: i,
                                base64: r,
                                priority: 0 === e
                            }, i)
                        })
                    })]
                })
            }
            let h = {
                unstable_excludeFiles: ["public/**/*"]
            }
        }
    },
    function(t) {
        t.O(0, [675, 774, 888, 179], function() {
            return t(t.s = 8934)
        }), _N_E = t.O()
    }
]);