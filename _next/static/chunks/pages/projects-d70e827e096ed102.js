(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        7670: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects", function() {
                return n(3897)
            }])
        },
        5144: function(t, e, n) {
            "use strict";
            n.d(e, {
                x: function() {
                    return o
                }
            });
            var r = n(837);
            let o = (0, r.zo)("p", {
                display: "block",
                margin: 0,
                variants: {
                    family: {
                        body: {
                            fontFamily: "$body"
                        }
                    },
                    variant: {
                        heading: {
                            fontFamily: "$head",
                            fontWeight: "600 !important"
                        }
                    },
                    size: {
                        10: {
                            fontSize: "$10"
                        },
                        12: {
                            fontSize: "$12"
                        },
                        13: {
                            fontSize: "13px"
                        },
                        14: {
                            fontSize: "$14"
                        },
                        15: {
                            fontSize: "15px"
                        },
                        16: {
                            fontSize: "$16"
                        },
                        20: {
                            fontSize: "$20"
                        },
                        24: {
                            fontSize: "$24"
                        },
                        32: {
                            fontSize: "$32"
                        },
                        40: {
                            fontSize: "$40"
                        },
                        48: {
                            fontSize: "$48"
                        }
                    },
                    lineHeight: {
                        12: {
                            lineHeight: "$12"
                        },
                        16: {
                            lineHeight: "$16"
                        },
                        20: {
                            lineHeight: "$20"
                        },
                        24: {
                            lineHeight: "$24"
                        },
                        28: {
                            lineHeight: "28px"
                        },
                        32: {
                            lineHeight: "$32"
                        },
                        40: {
                            lineHeight: "$40"
                        },
                        48: {
                            lineHeight: "$48"
                        },
                        56: {
                            lineHeight: "$56"
                        }
                    },
                    weight: {
                        400: {
                            fontWeight: "400"
                        },
                        500: {
                            fontWeight: "500"
                        },
                        600: {
                            fontWeight: "600"
                        },
                        700: {
                            fontWeight: "700"
                        },
                        800: {
                            fontWeight: "800"
                        }
                    },
                    color: {
                        gray11: {
                            color: "$gray11"
                        },
                        gray12: {
                            color: "$gray12"
                        },
                        red: {
                            color: "$red11"
                        }
                    }
                },
                defaultVariants: {
                    size: "14",
                    lineHeight: "28",
                    weight: "400",
                    color: "gray12",
                    family: "body"
                }
            })
        },
        3897: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Project: function() {
                    return h
                },
                default: function() {
                    return u
                }
            });
            var r = n(5893),
                o = n(7294),
                i = n(9675),
                a = n(5960),
                s = n(7497),
                l = n(5144),
                c = n(837),
                f = n(5990);
            let p = [{
                name: "Disney Streaming",
                description: "Build, maintain, & optimize core subscriber pipeline",
                href: "https://disneystreaming.com",
                photoUrl: "/static/cmdk.png",
                variant: "border",
                year: 2022
            }, {
                name: "Bristol - Studios",
                description: "Storytelling at the intersection of fashion & basketball",
                href: "https://bristol-studios.com",
                photoUrl: "/static/uig.png",
                variant: "border",
                year: 2022
            }, {
                name: "Progressive",
                description: "Accelerate the pace of migration to the cloud",
                href: "https://progressive.com",
                photoUrl: "/static/ultra.png",
                year: 2021
            }, {
                name: "Streets Ahead",
                description: "Scaled high-fashion eCommerce with a hint of operations",
                href: "https://streetsaheadinc.com",
                photoUrl: "/static/uiwtf.png",
                year: 2021
            }, {
                name: "Farmers",
                description: "Automated the deployment of Rate Manuals",
                href: "https://farmers.com",
                photoUrl: "/static/flow-light.png",
                year: 2021
            }, {
                name: "UI Playbook",
                description: "An insipred collection of UI components",
                href: "/craft",
                photoUrl: "/static/playbook-light.png",
                year: 2021
            }, {
                name: "Indiana University",
                description: "Fundamentals of Python instructor",
                href: "https://iu.edu",
                photoUrl: "/static/inspx-light.png",
                year: 2021
            }];

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.h, {
                        title: "Projects"
                    }), (0, r.jsx)(s.x, {
                        css: {
                            mt: "$4",
                            display: "flex",
                            flexDirection: "column",
                            gap: 28
                        },
                        children: p.map((t, e) => (0, r.jsx)(h, {
                            ...t,
                            index: e
                        }, t.href))
                    })]
                })
            }

            function h(t) {
                let {
                    href: e,
                    name: n,
                    description: a,
                    css: c,
                    year: p,
                    index: u
                } = t, h = o.useRef(), m = o.useRef(), b = o.useRef();
                o.useEffect(() => {
                    (0, i.Z)(h.current, {
                        iterations: 10
                    }), (0, i.Z)(m.current, {
                        iterations: 10
                    }), (0, i.Z)(b.current, {
                        iterations: 10
                    })
                }, []);
                let x = .1 * u;
                return (0, r.jsxs)(f.E.a, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: x
                    },
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: g({
                        css: c
                    }),
                    children: [(0, r.jsx)(l.x, {
                        ref: h,
                        as: "span",
                        color: "gray12",
                        weight: "500",
                        css: {
                            d: "inline-block"
                        },
                        children: n
                    }), (0, r.jsx)(l.x, {
                        ref: m,
                        as: "span",
                        color: "gray11",
                        css: {
                            ml: -8,
                            d: "inline-block",
                            "@mobile": {
                                d: "none"
                            }
                        },
                        children: a
                    }), (0, r.jsx)(s.x, {
                        as: f.E.div,
                        css: {
                            flex: 1,
                            position: "relative",
                            "&:after": {
                                content: "",
                                position: "absolute",
                                bottom: -1,
                                height: 1,
                                width: "0",
                                animation: "".concat(d(), " 1s ease forwards"),
                                animationDelay: "".concat(.05 * u, "s")
                            },
                            "&:before": {
                                content: "",
                                position: "absolute",
                                bottom: -1,
                                height: 1,
                                width: "0",
                                zIndex: 3,
                                animation: "".concat(y(), " 1s ease forwards"),
                                animationDelay: "".concat(x, "s")
                            }
                        }
                    }), (0, r.jsx)(l.x, {
                        ref: b,
                        css: {
                            color: "$gray9"
                        },
                        children: p
                    })]
                })
            }
            let g = (0, c.iv)({
                    display: "flex",
                    ai: "center",
                    gap: 12,
                    width: "calc(100% + 32px)",
                    position: "relative",
                    overflow: "hidden",
                    padding: "12px",
                    margin: -12,
                    br: 12,
                    outline: 0,
                    "&:hover, &:focus": {
                        background: "$gray3"
                    }
                }),
                d = (0, c.F4)({
                    "0%": {
                        background: "transparent"
                    },
                    "50%": {
                        background: "$gray10"
                    },
                    "100%": {
                        width: "100%",
                        background: "$gray5"
                    }
                }),
                y = (0, c.F4)({
                    "0%": {
                        background: "transparent"
                    },
                    "50%": {
                        background: "$gray10"
                    },
                    "100%": {
                        width: "100%",
                        background: "transparent"
                    }
                })
        },
        9675: function(t, e) {
            "use strict";
            /*!
             * shuffle-letters
             * A JavaScript library to shuffle the text content of a DOM element with an animated effect.
             *
             * @version v1.0.2
             * @author George Raptis <georapbox@gmail.com>
             * @homepage https://github.com/georapbox/shuffle-letters#readme
             * @repository git+https://github.com/georapbox/shuffle-letters.git
             * @license MIT
             */
            function n(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = t, o = r[e], e in n ? Object.defineProperty(n, e, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[e] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            e.Z = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = r(r({}, {
                        text: "",
                        iterations: 8,
                        fps: 30,
                        onComplete: function() {}
                    }), e);
                if (!(t && 1 === t.nodeType && t instanceof Element == !0)) throw TypeError("Expected element to be a valid HTML element.");
                for (var i = n.text && "string" == typeof n.text ? n.text.split("") : t.textContent.split(""), a = [], s = [], l = 0; l < i.length; l += 1) {
                    var c = i[l];
                    /\s/.test(c) ? a[l] = "space" : (/[a-z]/.test(c) ? a[l] = "lowerCase" : /[A-Z]/.test(c) ? a[l] = "upperCase" : a[l] = "symbol", s.push(l))
                }
                t.textContent = "";
                var f = null;
                return function e(r) {
                        var l = function(t) {
                                if (Array.isArray(t)) return o(t)
                            }(i) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(i) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return o(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
                                }
                            }(i) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            c = s.length;
                        if (r > c) "function" == typeof n.onComplete && n.onComplete(t);
                        else {
                            for (var p = Math.max(r, 0); p < c; p += 1) p < r + n.iterations ? l[s[p]] = function(t) {
                                var e = "";
                                "lowerCase" === t ? e = "abcdefghijklmnopqrstuvwxyz0123456789" : "upperCase" === t ? e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "symbol" === t && (e = ",.?/\\(^)![]{}*&^%$#'\"");
                                var n = e.split("");
                                return n[Math.floor(Math.random() * n.length)]
                            }(a[s[p]]) : l[s[p]] = "";
                            t.textContent = l.join(""), f = setTimeout(function() {
                                e(r + 1)
                            }, 1e3 / n.fps)
                        }
                    }(-n.iterations),
                    function() {
                        clearTimeout(f), f = null
                    }
            }
        }
    },
    function(t) {
        t.O(0, [774, 888, 179], function() {
            return t(t.s = 7670)
        }), _N_E = t.O()
    }
]);