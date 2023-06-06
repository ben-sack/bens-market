(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(307)
            }])
        },
        9448: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(837);
            let o = (0, r.zo)("div", {
                boxSizing: "border-box",
                display: "flex",
                variants: {
                    direction: {
                        row: {
                            flexDirection: "row"
                        },
                        column: {
                            flexDirection: "column"
                        },
                        "row-reverse": {
                            flexDirection: "row-reverse"
                        },
                        "column-reverse": {
                            flexDirection: "column-reverse"
                        }
                    },
                    align: {
                        start: {
                            alignItems: "flex-start"
                        },
                        center: {
                            alignItems: "center"
                        },
                        end: {
                            alignItems: "flex-end"
                        },
                        stretch: {
                            alignItems: "stretch"
                        },
                        baseline: {
                            alignItems: "baseline"
                        }
                    },
                    justify: {
                        start: {
                            justifyContent: "flex-start"
                        },
                        center: {
                            justifyContent: "center"
                        },
                        end: {
                            justifyContent: "flex-end"
                        },
                        between: {
                            justifyContent: "space-between"
                        }
                    },
                    wrap: {
                        "no-wrap": {
                            flexWrap: "nowrap"
                        },
                        wrap: {
                            flexWrap: "wrap"
                        },
                        "wrap-reverse": {
                            flexWrap: "wrap-reverse"
                        }
                    },
                    gap: {
                        1: {
                            gap: "$1"
                        },
                        2: {
                            gap: "$2"
                        },
                        3: {
                            gap: "$3"
                        },
                        4: {
                            gap: "$4"
                        },
                        5: {
                            gap: "$5"
                        },
                        6: {
                            gap: "$6"
                        },
                        7: {
                            gap: "$7"
                        },
                        8: {
                            gap: "$8"
                        },
                        9: {
                            gap: "$9"
                        },
                        10: {
                            gap: "$10"
                        }
                    }
                },
                defaultVariants: {
                    direction: "row",
                    align: "stretch",
                    justify: "start",
                    wrap: "no-wrap"
                }
            })
        },
        1390: function(e, t, n) {
            "use strict";
            n.d(t, {
                LZ: function() {
                    return i
                },
                Y4: function() {
                    return a
                },
                sz: function() {
                    return l
                }
            });
            var r = n(5893),
                o = n(7497);

            function i(e) {
                return (0, r.jsx)("svg", {
                    "data-arrow": "",
                    width: "16px",
                    height: "16px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M6 12h12.5m0 0l-6-6m6 6l-6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function a(e) {
                return (0, r.jsx)(o.x, {
                    as: "svg",
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M18.5 12H6m0 0l6-6m-6 6l6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function l(e) {
                return (0, r.jsx)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: (0, r.jsx)("path", {
                        d: "M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
        },
        5144: function(e, t, n) {
            "use strict";
            n.d(t, {
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
        307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return P
                },
                default: function() {
                    return L
                }
            });
            var r = n(5893),
                o = n(5990),
                i = n(7037),
                a = n(1664),
                l = n.n(a),
                s = n(9675),
                c = n(425),
                d = n(5675),
                u = n.n(d),
                f = n(7294),
                h = n(7005),
                g = n(837),
                p = n(7497),
                v = n(5144);
            let y = f.forwardRef(function(e, t) {
                    let {
                        children: n,
                        variant: o,
                        href: i,
                        css: a,
                        internal: l = !1,
                        ...s
                    } = e;
                    return (0, r.jsx)("a", {
                        ref: t,
                        href: i,
                        ...!l && {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        className: x({
                            variant: o,
                            css: a
                        }),
                        ...s,
                        children: n
                    })
                }),
                x = (0, g.iv)({
                    textDecoration: "none",
                    color: "$gray11",
                    transition: "border-color 150ms ease",
                    br: 6,
                    "&:hover": {
                        color: "$gray12"
                    },
                    "&:focus": {
                        outline: 0,
                        boxShadow: "none",
                        "&:focus:focus-visible": {
                            boxShadow: "inset 0 0 0 2px var(--colors-gray7)"
                        }
                    }
                });
            var m = n(9448);
            let A = {
                2: "attribute vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}",
                3: "#version 300 es\nin vec4 position;\nin vec2 uv;\nout vec2 vUv;\nvoid main(){\n	vUv = uv;\n	gl_Position = position;\n}"
            };

            function w(e) {
                let {
                    css: t,
                    version: n,
                    fragment: o,
                    ...i
                } = e, a = f.useRef(null);
                return f.useEffect(() => {
                    let e;
                    let t = a.current;
                    if (!t) return;
                    t.width = window.innerWidth, t.height = window.innerHeight;
                    let r = t.getContext("webgl2");
                    r || console.error("Unable to initialize WebGL.");
                    let i = 0,
                        l = A[n];

                    function s(e, t) {
                        let n = r.createShader(t);
                        if (r.shaderSource(n, e), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) throw "Shader compile failed with: " + r.getShaderInfoLog(n);
                        return n
                    }

                    function c(e, t) {
                        let n = r.getUniformLocation(e, t);
                        if (-1 === n) throw "Cannot find uniform " + t + ".";
                        return n
                    }
                    window.addEventListener("resize", function() {
                        t.width = window.innerWidth, t.height = window.innerHeight, r.viewport(0, 0, t.width, t.height), r.uniform1f(y, window.innerWidth), r.uniform1f(x, window.innerHeight)
                    }, !1);
                    let d = s(l, r.VERTEX_SHADER),
                        u = s(o, r.FRAGMENT_SHADER),
                        f = r.createProgram();
                    r.attachShader(f, d), r.attachShader(f, u), r.linkProgram(f), r.useProgram(f);
                    let h = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
                        g = r.createBuffer();
                    r.bindBuffer(r.ARRAY_BUFFER, g), r.bufferData(r.ARRAY_BUFFER, h, r.STATIC_DRAW);
                    let p = function(e, t) {
                        let n = r.getAttribLocation(e, t);
                        if (-1 === n) throw "Cannot find attribute " + t + ".";
                        return n
                    }(f, "position");
                    r.enableVertexAttribArray(p), r.vertexAttribPointer(p, 2, r.FLOAT, !1, 8, 0);
                    let v = c(f, "time"),
                        y = c(f, "width"),
                        x = c(f, "height");
                    r.uniform1f(y, window.innerWidth), r.uniform1f(x, window.innerHeight);
                    let m = Date.now();
                    ! function t() {
                        i += ((e = Date.now()) - m) / 2e3, m = e, r.uniform1f(v, i), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), requestAnimationFrame(t)
                    }()
                }, []), (0, r.jsx)(p.x, {
                    ref: a,
                    as: "canvas",
                    css: t,
                    width: "400px",
                    height: "400px",
                    ...i
                })
            }

            function b(e) {
                return (0, r.jsx)(w, {
                    version: "3",
                    fragment: "#version 300 es\nprecision mediump float;\n#define GLSLIFY 1\n\nout vec4 fragColor;\n\nuniform float time;\nuniform float width;\nuniform float height;\nfloat blendOverlay(float base, float blend) {\n	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvec3 brightnessContrast(vec3 value, float brightness, float contrast) {\n  return (value - 0.5) * contrast + 0.5 + brightness;\n}\n\nfloat random(in vec2 st) {\n  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\n}\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }\n\nvec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\nvec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n\n// Classic Perlin noise\nfloat cnoise(vec3 P) {\n  vec3 Pi0 = floor(P);        // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P);        // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(\n      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(\n      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),\n                 fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// https://iquilezles.org/www/articles/palettes/palettes.htm\nvec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {\n  return a + b * cos(6.4 * (c * t + d));\n}\n\nvoid main() {\n  vec2 resolution = vec2(width, height);\n  vec2 vUv = gl_FragCoord.xy / resolution.xy;\n  // vec2 vUv = gl_FragCoord.xy / resolution.yx;\n  vec2 uv = vUv * 6.;\n  float t = time * 2.0;\n\n  float n =\n      cnoise(vec3(uv.x - t * 2., uv.y + sin(uv.x + 120.0 * 1. + t) * 3., t) *\n             0.4) *\n      1.;\n\n  vec3 color = palette(n, vec3(0.5, 0.29, 0.45), vec3(0.5, 0.3, 0.1),\n                       vec3(1.0, 1.1, 1.1), vec3(0.35, 0.25, 1.1));\n\n  vec2 st = gl_FragCoord.xy / resolution.xy;\n  st.x *= resolution.y / resolution.y;\n  float noise = random(st * 1.0);\n\n  fragColor =\n      vec4(blendOverlay(\n               palette(cnoise(vec3(uv.x * 1.,\n                                   uv.y + sin(uv.x + 1.15 * 1. + t) * 3., t) *\n                              0.4) *\n                           1.,\n                       vec3(0.45, 0.29, 0.45), vec3(0.5, 0.3, 0.1),\n                       vec3(1.0, 1.1, 1.1), vec3(0.38, 0.25, 1.1)),\n               vec3(noise), 0.2),\n           1.0);\n}\n",
                    ...e
                })
            }
            var j = n(1562);

            function C() {
                let [e, t] = f.useState(!1);
                return f.useEffect(() => {
                    t(!0)
                }, []), e
            }
            var k = n(5332),
                z = n(6744),
                E = n(1390);
            let S = [{
                type: "Shader",
                title: "Gooey",
                href: "/craft",
                src: (0, k.jj)("gooey.mp4")
            }, {
                type: "Shader",
                title: "Stripes",
                href: "/craft",
                src: (0, k.jj)("stripes.mp4")
            }, {
                type: "Shader",
                title: "Flume",
                href: "/craft",
                src: (0, k.jj)("flume.mp4")
            }, {
                type: "Shader",
                title: "Peach",
                href: "/craft",
                src: (0, k.jj)("peach.mp4")
            }, {
                type: "Shader",
                title: "Rainbow",
                href: "/craft",
                src: (0, k.jj)("rainbow.mp4")
            }
            // ,{
            //     type: "Prototype",
            //     title: "Radial Menu",
            //     href: "/craft/radial-menu",
            //     src: (0, k.jj)("radial-menu-3.mp4", 1)
            // }
        ];
            var P = !0;

            function L(e) {
                let {
                    lastVisitor: t
                } = e, n = (0, j.a)("(hover: none)"), o = (0, j.a)(g.vc.media.mobile), i = C();
                return f.useEffect(() => (document.body.style.overflow = "hidden", document.body.style["overscroll-behavior-x"] = "none", () => {
                    document.body.style.overflow = "", document.body.style["overscroll-behavior-x"] = ""
                }), []), (0, r.jsxs)(p.x, {
                    children: [(0, r.jsx)($, {
                        lastVisitor: t
                    }), i && (n || o) ? null : (0, r.jsx)(M, {})]
                })
            }

            function $(e) {
                let {
                    lastVisitor: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(p.x, {
                        css: {
                            maxWidth: 672,
                            margin: "0 auto",
                            mb: 64,
                            position: "relative",
                            zIndex: 10,
                            "@mobile": {
                                mt: 0,
                                mb: 32,
                                mx: "unset"
                            }
                        },
                        children: [(0, r.jsx)(F, {
                            lastVisitor: t
                        }), (0, r.jsx)(O, {})]
                    })
                })
            }

            function O() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("h1", {
                        className: "vh",
                        children: "Sack Benjamin. Creating products that make people feel something. Data engineer unsatisfiably curious about novel interfaces. Trying to paint with code. Relentlessly devoted to fine, detailed polish. Always seeking out the cutting edge in my craft. Currently at Disney. Previously at Progressive."
                    }), (0, r.jsxs)(v.x, {
                        "aria-hidden": !0,
                        as: "div",
                        css: {
                            color: "$gray12",
                            mb: 64,
                            fontSize: 25,
                            lineHeight: "35px",
                            letterSpacing: "-0.5px",
                            textTransform: "lowercase",
                            position: "relative",
                            userSelect: "none",
                            "@mobile": {
                                fontSize: 23,
                                textAlign: "justify",
                                hyphens: "auto"
                            }
                        },
                        children: [(0, r.jsx)(p.x, {
                            as: "span",
                            css: {
                                color: "$gray11"
                            },
                            children: "Bens Market."
                        }), " ", "Creating", (0, r.jsx)(N, {
                            className: T({})
                        }), "products that ", (0, r.jsx)(G, {
                            children: "m"
                        }), "ake people feel something. Da", (0, r.jsx)(G, {
                            children: "t"
                        }), "a engineer - ", (0, r.jsx)(G, {
                        }),
                        // "", (0, r.jsx)(p.x, {
                        //     css: {
                        //         display: "inline-block",
                        //         fontStyle: "italic"
                        //     },
                        //     children: " - "
                        // }), " Trying to", (0, r.jsx)(q, {
                        //     className: T({
                        //         css: {
                        //             transform: "translate(2px, 5px)"
                        //         }
                        //     })
                        // }), "pai", (0, r.jsx)(G, {
                        //     children: "n"
                        // }), "t with code. Relentlessly devoted to the fine details", (0, r.jsx)(Q, {
                            // className: T()
                        // }), 
                        // " Always seeking o", (0, r.jsx)(G, {
                        //     children: "u"
                        // }), "t the", (0, r.jsx)(Y, {
                        //     className: T({
                        //         css: {
                        //             size: 23
                        //         }
                        //     })
                        // }),
                         " Currently at ", (0, r.jsx)(y, {
                            children: "Disney"
                        }), " Previously at", " ", (0, r.jsx)(y, {
                            children: "Progressive"
                        }), "."]
                    })]
                })
            }

            function M() {
                let e = C(),
                    {
                        resolvedTheme: t
                    } = (0, c.F)(),
                    [n] = function(e) {
                        let [t, n] = f.useState(0);
                        return f.useEffect(() => {
                            function t(t) {
                                if (e) {
                                    let r = t.deltaY + t.deltaX;
                                    n(t => (0, k.uZ)(t + r, -e, e))
                                } else n(e => e + t.deltaX + t.deltaY)
                            }

                            function r(t) {
                                let r = t.shiftKey ? 500 : 10;
                                ("ArrowRight" === t.key || "ArrowLeft" === t.key) && (e ? n(n => (0, k.uZ)("ArrowRight" === t.key ? n + r : n - r, -e, e)) : n(e => "ArrowRight" === t.key ? e + r : e - r))
                            }
                            return window.addEventListener("wheel", t), document.addEventListener("keydown", r), () => {
                                window.removeEventListener("wheel", t), document.removeEventListener("keydown", r)
                            }
                        }, [e]), [t, n]
                    }(5e3),
                    i = n < -250 ? -1 * n - 250 : n,
                    a = (0, k.uZ)(.2 * i, 0, 250),
                    l = (0, k.uZ)(1 - .002 * i, 0, 1),
                    s = 1 - l == 1;
                return f.useEffect(() => {
                    let e = document.querySelector("[data-carousel]");
                    if ("light" === t) {
                        let n = (0, k.uZ)(.002 * i, .5, 1);
                        e.style.opacity = String(n)
                    }
                }, [i, t]), f.useEffect(() => {
                    document.querySelectorAll("[data-fake-button]").forEach(e => {
                        s ? e.style.removeProperty("opacity") : e.style.setProperty("opacity", "0")
                    })
                }, [s]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(p.x, {
                        css: {
                            width: "100%",
                            height: "fit-content",
                            position: "relative",
                            "@touch": {
                                display: "block"
                            },
                            "@mobile": {
                                display: "block"
                            }
                        },
                        children: [(0, r.jsxs)(p.x, {
                            "aria-hidden": !0,
                            as: "svg",
                            width: "672",
                            height: "509",
                            viewBox: "0 0 672 509",
                            css: {
                                maxWidth: 620,
                                position: "absolute",
                                overflow: "visible",
                                color: "$gray12",
                                top: "50%",
                                left: "50%",
                                right: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 4,
                                px: 32,
                                pointerEvents: "none",
                                path: {
                                    transform: "translateZ(0)"
                                }
                            },
                            children: [(0, r.jsx)(o.E.path, {
                                d: "M606.722 391.901H528.179V195.543H508.543V391.901H430V117H606.722V391.901Z",
                                fill: "currentColor",
                                id: "R",
                                animate: {
                                    y: (0, k.uZ)(i, 0, 150),
                                    scale: (0, k.uZ)(1 - .003 * i, 0, 1),
                                    filter: "blur(".concat(a, "px)")
                                }
                            }), (0, r.jsx)(o.E.path, {
                                d: "M435 117V195.571H318.333V215.214H435V293.786H318.333V313.429H435V392H225V117H435Z",
                                id: "A",
                                fill: "currentColor",
                                animate: {
                                    y: -(0, k.uZ)(i / 4, 0, 150),
                                    scale: (0, k.uZ)(1 - .004 * i, 0, 1),
                                    filter: "blur(".concat(a, "px)")
                                }
                            }), (0, r.jsx)(o.E.path, {
                                d: "M116.667 195.571H93.3333V215.214H116.667V195.571ZM116.667 313.429V293.786H93.3333V313.429H116.667ZM0 117H210V225.036L163.333 264.321H210V392H0V117Z",
                                fill: "currentColor",
                                id: "U",
                                animate: {
                                    y: (0, k.uZ)(i / 5, 0, 150),
                                    scale: (0, k.uZ)(1 - .005 * i, 0, 1),
                                    filter: "blur(".concat(a, "px)")
                                }
                            })]
                        }), (0, r.jsx)(_, {})]
                    }), (0, r.jsx)(W, {
                        "aria-hidden": !0,
                        as: o.E.div
                    }), (0, r.jsx)(V, {
                        "aria-hidden": !0,
                        as: o.E.div,
                        animate: {
                            opacity: l
                        },
                        mounted: e,
                        children: (0, r.jsx)(b, {})
                    })]
                })
            }
            let R = (0, g.iv)({
                "--blur": "0px",
                width: "auto",
                minWidth: 340,
                listStyle: "none",
                height: "fit-content",
                position: "relative",
                overflow: "hidden",
                filter: "grayscale(1) blur(var(--blur))",
                transition: "filter 500ms ease",
                transform: "translateZ(0)",
                outline: 0,
                "&:hover": {
                    filter: "grayscale(0) blur(var(--blur))",
                    "[data-fake-button]": {
                        opacity: 1
                    }
                },
                "img, video, canvas": {
                    display: "block",
                    width: "100%",
                    height: 340,
                    objectFit: "cover"
                }
            });

            function _() {
                let e = f.useRef(null),
                    t = S.map(e => (0, r.jsx)(I, {
                        ...e
                    }, e.title));
                return function(e) {
                    let {
                        max: t,
                        keyboardSpeed: n = 10,
                        callback: r
                    } = e, o = f.useRef(0);
                    f.useEffect(() => {
                        function e(e) {
                            if (t) {
                                let n = e.deltaY + e.deltaX;
                                o.current = (0, k.uZ)(o.current + n, -t, t), r(o)
                            } else o.current = o.current + e.deltaX + e.deltaY, r(o)
                        }

                        function i(e) {
                            let i = e.shiftKey ? 500 : n;
                            if ("ArrowRight" === e.key || "ArrowLeft" === e.key) {
                                let a = "ArrowRight" === e.key ? o.current + i : o.current - i;
                                t ? (o.current = (0, k.uZ)(a, -t, t), r(o)) : (o.current = a, r(o))
                            }
                        }
                        return window.addEventListener("wheel", e), window.addEventListener("keydown", i), () => {
                            window.removeEventListener("wheel", e), window.removeEventListener("keydown", i)
                        }
                    }, [t, r])
                }({
                    callback: t => {
                        let n = e.current;
                        n && (t.current >= (340 * S.length + 12 * S.length) * 1 && (t.current = 0), t.current < 0 && (t.current = (340 * S.length + 12 * S.length - 1) * 1), n.style.transform = "translate3d(".concat(-t.current / 1, "px, 0, 0) translateZ(0)"))
                    },
                    keyboardSpeed: 250
                }), (0, r.jsxs)(p.x, {
                    as: o.E.div,
                    css: {
                        height: "fit-content",
                        position: "relative"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .15
                    },
                    children: [(0, r.jsx)(Z, {
                        "aria-hidden": !0,
                        variant: "left"
                    }), (0, r.jsx)(Z, {
                        "aria-hidden": !0,
                        variant: "right"
                    }), (0, r.jsxs)(p.x, {
                        ref: e,
                        "data-carousel": "",
                        css: {
                            d: "flex",
                            gap: 12,
                            ai: "center",
                            opacity: .5,
                            ".dark &": {
                                opacity: "1 !important"
                            }
                        },
                        style: {
                            transform: "translate3d(0px, 0, 0) translateZ(0)",
                            willChange: "transform"
                        },
                        children: [t, (0, r.jsx)(p.x, {
                            css: {
                                d: "flex",
                                gap: 12,
                                ai: "center"
                            },
                            children: t
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    src: t,
                    title: n,
                    type: o,
                    href: a,
                    dark: s = !1
                } = e, c = C(), d = f.useRef(null), h = f.useRef(null), g = (0, i.Y)(d);

                function v() {
                    var e;
                    null == h || null === (e = h.current) || void 0 === e || e.play(), Array.from(document.querySelectorAll("[carousel-item]")).filter(e => e !== d.current).forEach(e => {
                        e.style.setProperty("--blur", "2px")
                    })
                }
                f.useEffect(() => {
                    if (!g && h.current) {
                        let e = h.current;
                        e.currentTime = 0, Array.from(document.querySelectorAll("[carousel-item]")).forEach(e => {
                            e.style.setProperty("--blur", "0px")
                        })
                    }
                }, [g]);
                let y = "string" == typeof t ? t : t.src;
                return (0, r.jsxs)(l(), {
                    ref: d,
                    "aria-label": "".concat(n, ", ").concat(o),
                    tabIndex: -1,
                    href: a,
                    "carousel-item": "",
                    className: R(),
                    onClick: v,
                    onPointerEnter: v,
                    onPointerLeave: function() {
                        var e;
                        null == h || null === (e = h.current) || void 0 === e || e.pause(), Array.from(document.querySelectorAll("[carousel-item]")).forEach(e => {
                            e.style.setProperty("--blur", "0px")
                        })
                    },
                    ...a.startsWith("https") && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    children: [t && (0, r.jsx)(r.Fragment, {
                        children: y.includes("gif") || y.includes("png") || y.includes("jpg") ? (0, r.jsx)(u(), {
                            quality: "100",
                            src: t,
                            alt: "Screenshot of ".concat(n, ", ").concat(o),
                            width: "320",
                            height: "320",
                            placeholder: "blur",
                            sizes: "10vw"
                        }) : (0, r.jsx)("video", {
                            ref: h,
                            playsInline: !0,
                            loop: !0,
                            muted: !0,
                            src: c ? t : null
                        })
                    }), (0, r.jsx)(p.x, {
                        "data-fake-button": "",
                        css: {
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            size: 32,
                            br: 9999,
                            background: "rgba(0, 0, 0, 0.2)",
                            backdropFilter: "blur(16px)",
                            center: !0,
                            opacity: 0,
                            transition: "opacity 200ms ease",
                            svg: {
                                transform: "rotate(-45deg)",
                                size: 16,
                                color: "white"
                            },
                            ...s && {
                                background: "rgba(255, 255, 255, 0.1)"
                            }
                        },
                        style: {},
                        children: (0, r.jsx)(E.LZ, {})
                    })]
                })
            }
            let Z = (0, g.zo)("div", {
                    width: "20vw",
                    height: "100%",
                    position: "fixed",
                    bottom: 0,
                    zIndex: 3,
                    opacity: 1,
                    minWidth: 120,
                    backdropFilter: "blur(4px)",
                    pointerEvents: "none",
                    $$fadeColor: "rgba(255, 255, 255, 0.00001)",
                    ".dark &": {
                        $$fadeColor: "rgba(22, 22, 22, 0.00001)"
                    },
                    variants: {
                        variant: {
                            left: {
                                background: "linear-gradient(to left, $$fadeColor, $colors$gray1)",
                                maskImage: "linear-gradient(to right, $colors$gray1, $$fadeColor)",
                                left: -24
                            },
                            right: {
                                background: "linear-gradient(to right, $$fadeColor, $colors$gray1)",
                                maskImage: "linear-gradient(to left, $colors$gray1, $$fadeColor)",
                                right: 0
                            }
                        }
                    }
                }),
                W = (0, g.zo)("div", {
                    background: "$gray1",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    zIndex: 5,
                    pointerEvents: "none",
                    transform: "translateZ(0)",
                    mixBlendMode: "darken",
                    ".dark &": {
                        mixBlendMode: "lighten"
                    }
                }),
                B = (0, z.F4)({
                    "100%": {
                        opacity: 1,
                        mixBlendMode: "color-burn"
                    }
                }),
                V = (0, g.zo)("div", {
                    position: "fixed",
                    zIndex: 4,
                    left: 0,
                    top: 0,
                    width: "100vw",
                    height: "100%",
                    pointerEvents: "none",
                    mixBlendMode: "color-dodge",
                    transform: "translateZ(0)",
                    opacity: 0,
                    ".dark &": {
                        animation: "".concat(B, " 0.1s linear forwards")
                    },
                    canvas: {
                        filter: "grayscale(1)"
                    },
                    variants: {
                        mounted: {
                            true: {
                                ".dark &": {
                                    animation: "none",
                                    mixBlendMode: "color-burn"
                                }
                            }
                        }
                    }
                }),
                H = (0, g.zo)("div", {
                    size: 2,
                    br: 9999,
                    background: "$gray10",
                    opacity: 0,
                    transition: "opacity 500ms ease"
                });

            function D() {
                let e = new Date().toLocaleTimeString([], {
                        timeZone: "PST",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    }),
                    [, t] = e.split(", ");
                return t
            }

            function F(e) {
                let {
                    lastVisitor: t
                } = e, n = f.useRef(null), i = f.useRef(null), a = f.useRef(null), l = f.useRef(null), [d, u] = f.useState(!1), [y, x] = f.useState(!1), [A, w] = f.useState(0), [b, C] = f.useState(0), {
                    resolvedTheme: k
                } = (0, c.F)(), z = (0, j.a)(g.vc.media.mobile), [E, S] = f.useState(""), [P, L] = f.useState(null);
                f.useEffect(() => {
                    if (null == t ? void 0 : t.country) {
                        let e = new Intl.DisplayNames(["en"], {
                                type: "region"
                            }),
                            n = e.of(t.country);
                        L(n)
                    }
                }, [t]), f.useEffect(() => {
                    S(D());
                    let e = setInterval(() => {
                        S(D())
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), f.useEffect(() => {
                    var e, t;
                    if (z) {
                        null === (e = n.current) || void 0 === e || e.style.setProperty("opacity", "1"), w(1), C(1);
                        return
                    }
                    d && (null === (t = n.current) || void 0 === t || t.style.setProperty("opacity", "1"), (0, s.Z)(i.current, {
                        iterations: 10,
                        onComplete: () => {
                            w(1)
                        }
                    }), (0, s.Z)(a.current, {
                        iterations: 10,
                        onComplete: () => {
                            C(1)
                        }
                    }), l.current && (0, s.Z)(l.current, {
                        iterations: 10
                    }))
                }, [d, z]), f.useEffect(() => {
                    u(!0)
                }, []);
                let $ = (0, r.jsxs)(m.k, {
                    as: "span",
                    gap: "1",
                    align: "center",
                    css: {
                        textTransform: "lowercase",
                        userSelect: "none"
                    },
                    children: [(0, r.jsx)(v.x, {
                        ref: i,
                        as: "span",
                        "data-shuffle": "",
                        css: {
                            display: "flex",
                            ai: "center",
                            gap: 4,
                            fontSize: 14,
                            color: "$gray10",
                            whiteSpace: "nowrap",
                            minWidth: 54
                        },
                        children: E
                    }), (0, r.jsx)(H, {
                        "aria-hidden": !0,
                        style: {
                            opacity: A
                        },
                        css: {
                            ml: -4
                        }
                    }), (0, r.jsx)(v.x, {
                        ref: a,
                        "data-shuffle": "",
                        as: "span",
                        css: {
                            color: "$gray10",
                            whiteSpace: "nowrap"
                        },
                        children: "Venice, California"
                    }), !1, t && (0, r.jsxs)(m.k, {
                        align: "center",
                        gap: "1",
                        children: [(0, r.jsx)(H, {
                            "aria-hidden": !0,
                            style: {
                                opacity: b
                            }
                        }), (0, r.jsxs)(v.x, {
                            ref: l,
                            as: "span",
                            css: {
                                fontSize: 14,
                                color: "$gray10",
                                whiteSpace: "nowrap",
                                transition: "color 100ms ease",
                                "&:hover": {
                                    a: {
                                        color: "$gray12"
                                    }
                                },
                                a: {
                                    transition: "color 100ms ease"
                                }
                            },
                            children: ["Last visit from", " ", (0, r.jsxs)("a", {
                                href: "https://en.wikipedia.org/wiki/".concat(t.city),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [t.city, ", ", P || t.country]
                            })]
                        })]
                    })]
                });
                return (0, r.jsx)(m.k, {
                    ref: n,
                    as: "header",
                    css: {
                        mb: 12,
                        height: 28,
                        width: "100%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    style: {
                        opacity: 0
                    },
                    children: d && (0, r.jsx)(r.Fragment, {
                        children: z ? (0, r.jsx)(p.x, {
                            css: {
                                width: "100%"
                            },
                            as: o.E.div,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1
                            },
                            onAnimationComplete: () => {
                                setTimeout(() => {
                                    x(!0)
                                }, 500)
                            },
                            children: (0, r.jsxs)(h.Z, {
                                gradient: y,
                                delay: 2,
                                gradientColor: "dark" === k ? [22, 22, 22] : [252, 252, 252],
                                gradientWidth: 20,
                                children: [$, (0, r.jsx)(H, {
                                    "aria-hidden": !0,
                                    css: {
                                        mx: 8
                                    }
                                }), $, (0, r.jsx)(H, {
                                    "aria-hidden": !0,
                                    css: {
                                        mx: 8
                                    }
                                })]
                            })
                        }) : $
                    })
                })
            }
            let T = (0, g.iv)({
                transform: "translate(2px, 4px)",
                ml: 3,
                mr: 6,
                size: 24
            });

            function N(e) {
                return (0, r.jsxs)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: [(0, r.jsx)("path", {
                        d: "M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function U(e) {
                return (0, r.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: [(0, r.jsx)("path", {
                        d: "M10.5 16.5L7 15M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M8.5 9C8.36739 9 8.24021 8.94732 8.14645 8.85355C8.05268 8.75979 8 8.63261 8 8.5C8 8.36739 8.05268 8.24021 8.14645 8.14645C8.24021 8.05268 8.36739 8 8.5 8C8.63261 8 8.75979 8.05268 8.85355 8.14645C8.94732 8.24021 9 8.36739 9 8.5C9 8.63261 8.94732 8.75979 8.85355 8.85355C8.75979 8.94732 8.63261 9 8.5 9ZM15.5 9C15.3674 9 15.2402 8.94732 15.1464 8.85355C15.0527 8.75979 15 8.63261 15 8.5C15 8.36739 15.0527 8.24021 15.1464 8.14645C15.2402 8.05268 15.3674 8 15.5 8C15.6326 8 15.7598 8.05268 15.8536 8.14645C15.9473 8.24021 16 8.36739 16 8.5C16 8.63261 15.9473 8.75979 15.8536 8.85355C15.7598 8.94732 15.6326 9 15.5 9Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function q(e) {
                return (0, r.jsxs)(p.x, {
                    as: "svg",
                    ...e,
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    fill: "none",
                    color: "currentColor",
                    children: [(0, r.jsxs)("g", {
                        clipPath: "url(#design-nib_svg__clip0_2585_14438)",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [(0, r.jsx)("path", {
                            d: "M17.674 11.408l-1.905 5.715a.6.6 0 01-.398.386L3.693 20.98a.6.6 0 01-.74-.765L6.745 8.841a.6.6 0 01.34-.365l5.387-2.218a.6.6 0 01.653.13l4.404 4.405a.6.6 0 01.145.615zM3.296 20.602l6.364-6.364"
                        }), (0, r.jsx)("path", {
                            d: "M17.792 11.056l2.828-2.829a2 2 0 000-2.828L18.5 3.277a2 2 0 00-2.829 0l-2.828 2.829M11.781 12.116a1.5 1.5 0 10-2.121 2.122 1.5 1.5 0 002.121-2.122z"
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "design-nib_svg__clip0_2585_14438",
                            children: (0, r.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                })
            }

            function Q(e) {
                return (0, r.jsxs)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: [(0, r.jsx)("path", {
                        d: "M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, r.jsx)("path", {
                        d: "M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function Y(e) {
                return (0, r.jsx)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: (0, r.jsx)("path", {
                        d: "M17 12h1M22 12h1M6.236 7a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L19 18M6.236 17a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L19 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
            let G = (0, g.zo)("span", {
                transform: "scaleX(-1)",
                display: "inline-block"
            })
        },
        7005: function(e, t, n) {
            var r = n(7294),
                o = r && "object" == typeof r && "default" in r ? r : {
                    default: r
                },
                i = function() {
                    return (i = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'), t.Z = function(e) {
                var t, n, a, l, s = e.style,
                    c = e.className,
                    d = e.play,
                    u = void 0 === d || d,
                    f = e.pauseOnHover,
                    h = e.pauseOnClick,
                    g = e.direction,
                    p = void 0 === g ? "left" : g,
                    v = e.speed,
                    y = void 0 === v ? 20 : v,
                    x = e.delay,
                    m = void 0 === x ? 0 : x,
                    A = e.loop,
                    w = void 0 === A ? 0 : A,
                    b = e.gradient,
                    j = e.gradientColor,
                    C = void 0 === j ? [255, 255, 255] : j,
                    k = e.gradientWidth,
                    z = void 0 === k ? 200 : k,
                    E = e.onFinish,
                    S = e.onCycleComplete,
                    P = e.children,
                    L = r.useState(0),
                    $ = L[0],
                    O = L[1],
                    M = r.useState(0),
                    R = M[0],
                    _ = M[1],
                    I = r.useState(0),
                    Z = I[0],
                    W = I[1],
                    B = r.useState(!1),
                    V = B[0],
                    H = B[1],
                    D = r.useRef(null),
                    F = r.useRef(null),
                    T = function() {
                        F.current && D.current && (O(D.current.getBoundingClientRect().width), _(F.current.getBoundingClientRect().width)), R < $ ? W($ / y) : W(R / y)
                    };
                r.useEffect(function() {
                    return T(), window.addEventListener("resize", T),
                        function() {
                            window.removeEventListener("resize", T)
                        }
                }), r.useEffect(function() {
                    H(!0)
                }, []);
                var N = "rgba(" + C[0] + ", " + C[1] + ", " + C[2];
                return o.default.createElement(r.Fragment, null, V ? o.default.createElement("div", {
                    ref: D,
                    style: i(i({}, void 0 === s ? {} : s), ((t = {})["--pause-on-hover"] = void 0 !== f && f ? "paused" : "running", t["--pause-on-click"] = void 0 !== h && h ? "paused" : "running", t)),
                    className: (void 0 === c ? "" : c) + " marquee-container"
                }, (void 0 === b || b) && o.default.createElement("div", {
                    style: ((n = {})["--gradient-color"] = N + ", 1), " + N + ", 0)", n["--gradient-width"] = "number" == typeof z ? z + "px" : z, n),
                    className: "overlay"
                }), o.default.createElement("div", {
                    ref: F,
                    style: ((a = {})["--play"] = u ? "running" : "paused", a["--direction"] = "left" === p ? "normal" : "reverse", a["--duration"] = Z + "s", a["--delay"] = m + "s", a["--iteration-count"] = w ? "" + w : "infinite", a),
                    className: "marquee",
                    onAnimationIteration: S,
                    onAnimationEnd: E
                }, P), o.default.createElement("div", {
                    style: ((l = {})["--play"] = u ? "running" : "paused", l["--direction"] = "left" === p ? "normal" : "reverse", l["--duration"] = Z + "s", l["--delay"] = m + "s", l["--iteration-count"] = w ? "" + w : "infinite", l),
                    className: "marquee"
                }, P)) : null)
            }
        },
        9675: function(e, t) {
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
            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = e, o = r[t], t in n ? Object.defineProperty(n, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[t] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.Z = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = r(r({}, {
                        text: "",
                        iterations: 8,
                        fps: 30,
                        onComplete: function() {}
                    }), t);
                if (!(e && 1 === e.nodeType && e instanceof Element == !0)) throw TypeError("Expected element to be a valid HTML element.");
                for (var i = n.text && "string" == typeof n.text ? n.text.split("") : e.textContent.split(""), a = [], l = [], s = 0; s < i.length; s += 1) {
                    var c = i[s];
                    /\s/.test(c) ? a[s] = "space" : (/[a-z]/.test(c) ? a[s] = "lowerCase" : /[A-Z]/.test(c) ? a[s] = "upperCase" : a[s] = "symbol", l.push(s))
                }
                e.textContent = "";
                var d = null;
                return function t(r) {
                        var s = function(e) {
                                if (Array.isArray(e)) return o(e)
                            }(i) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(i) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return o(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                                }
                            }(i) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            c = l.length;
                        if (r > c) "function" == typeof n.onComplete && n.onComplete(e);
                        else {
                            for (var u = Math.max(r, 0); u < c; u += 1) u < r + n.iterations ? s[l[u]] = function(e) {
                                var t = "";
                                "lowerCase" === e ? t = "abcdefghijklmnopqrstuvwxyz0123456789" : "upperCase" === e ? t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "symbol" === e && (t = ",.?/\\(^)![]{}*&^%$#'\"");
                                var n = t.split("");
                                return n[Math.floor(Math.random() * n.length)]
                            }(a[l[u]]) : s[l[u]] = "";
                            e.textContent = s.join(""), d = setTimeout(function() {
                                t(r + 1)
                            }, 1e3 / n.fps)
                        }
                    }(-n.iterations),
                    function() {
                        clearTimeout(d), d = null
                    }
            }
        }
    },
    function(e) {
        e.O(0, [675, 390, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);