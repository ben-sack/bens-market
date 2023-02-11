(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [766], {
        1766: function(e, n, t) {
            var o, r, i, a, u, s, d, _, l, c, p, f, m, h, v;
            (r = function() {
                this.init()
            }).prototype = {
                init: function() {
                    var e = this || i;
                    return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
                },
                volume: function(e) {
                    var n = this || i;
                    if (e = parseFloat(e), n.ctx || p(), void 0 !== e && e >= 0 && e <= 1) {
                        if (n._volume = e, n._muted) return n;
                        n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
                        for (var t = 0; t < n._howls.length; t++)
                            if (!n._howls[t]._webAudio)
                                for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                                    var a = n._howls[t]._soundById(o[r]);
                                    a && a._node && (a._node.volume = a._volume * e)
                                }
                        return n
                    }
                    return n._volume
                },
                mute: function(e) {
                    var n = this || i;
                    n.ctx || p(), n._muted = e, n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, i.ctx.currentTime);
                    for (var t = 0; t < n._howls.length; t++)
                        if (!n._howls[t]._webAudio)
                            for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                                var a = n._howls[t]._soundById(o[r]);
                                a && a._node && (a._node.muted = !!e || a._muted)
                            }
                    return n
                },
                stop: function() {
                    for (var e = this || i, n = 0; n < e._howls.length; n++) e._howls[n].stop();
                    return e
                },
                unload: function() {
                    for (var e = this || i, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
                    return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, p()), e
                },
                codecs: function(e) {
                    return (this || i)._codecs[e.replace(/^x-/, "")]
                },
                _setup: function() {
                    var e = this || i;
                    if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio) {
                        if ("undefined" != typeof Audio) try {
                            var n = new Audio;
                            void 0 === n.oncanplaythrough && (e._canPlayEvent = "canplay")
                        } catch (t) {
                            e.noAudio = !0
                        } else e.noAudio = !0
                    }
                    try {
                        var n = new Audio;
                        n.muted && (e.noAudio = !0)
                    } catch (o) {}
                    return e.noAudio || e._setupCodecs(), e
                },
                _setupCodecs: function() {
                    var e = this || i,
                        n = null;
                    try {
                        n = "undefined" != typeof Audio ? new Audio : null
                    } catch (t) {
                        return e
                    }
                    if (!n || "function" != typeof n.canPlayType) return e;
                    var o = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        r = e._navigator ? e._navigator.userAgent : "",
                        a = r.match(/OPR\/([0-6].)/g),
                        u = a && 33 > parseInt(a[0].split("/")[1], 10),
                        s = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome"),
                        d = r.match(/Version\/(.*?) /),
                        _ = s && d && 15 > parseInt(d[1], 10);
                    return e._codecs = {
                        mp3: !!(!u && (o || n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                        mpeg: !!o,
                        opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")).replace(/^no$/, ""),
                        aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        m4b: !!(n.canPlayType("audio/x-m4b;") || n.canPlayType("audio/m4b;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        weba: !!(!_ && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        webm: !!(!_ && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                        dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
                    }, e
                },
                _unlockAudio: function() {
                    var e = this || i;
                    if (!e._audioUnlocked && e.ctx) {
                        e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                        var n = function(t) {
                            for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                                var o = new Audio;
                                o._unlocked = !0, e._releaseHtml5Audio(o)
                            } catch (r) {
                                e.noAudio = !0;
                                break
                            }
                            for (var i = 0; i < e._howls.length; i++)
                                if (!e._howls[i]._webAudio)
                                    for (var a = e._howls[i]._getSoundIds(), u = 0; u < a.length; u++) {
                                        var s = e._howls[i]._soundById(a[u]);
                                        s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                    }
                            e._autoResume();
                            var d = e.ctx.createBufferSource();
                            d.buffer = e._scratchBuffer, d.connect(e.ctx.destination), void 0 === d.start ? d.noteOn(0) : d.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), d.onended = function() {
                                d.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", n, !0), document.removeEventListener("touchend", n, !0), document.removeEventListener("click", n, !0), document.removeEventListener("keydown", n, !0);
                                for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("unlock")
                            }
                        };
                        return document.addEventListener("touchstart", n, !0), document.addEventListener("touchend", n, !0), document.addEventListener("click", n, !0), document.addEventListener("keydown", n, !0), e
                    }
                },
                _obtainHtml5Audio: function() {
                    var e = this || i;
                    if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                    var n = new Audio().play();
                    return n && "undefined" != typeof Promise && (n instanceof Promise || "function" == typeof n.then) && n.catch(function() {
                        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                    }), new Audio
                },
                _releaseHtml5Audio: function(e) {
                    var n = this || i;
                    return e._unlocked && n._html5AudioPool.push(e), n
                },
                _autoSuspend: function() {
                    var e = this;
                    if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && i.usingWebAudio) {
                        for (var n = 0; n < e._howls.length; n++)
                            if (e._howls[n]._webAudio) {
                                for (var t = 0; t < e._howls[n]._sounds.length; t++)
                                    if (!e._howls[n]._sounds[t]._paused) return e
                            } return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                            if (e.autoSuspend) {
                                e._suspendTimer = null, e.state = "suspending";
                                var n = function() {
                                    e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                };
                                e.ctx.suspend().then(n, n)
                            }
                        }, 3e4), e
                    }
                },
                _autoResume: function() {
                    var e = this;
                    if (e.ctx && void 0 !== e.ctx.resume && i.usingWebAudio) return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then(function() {
                        e.state = "running";
                        for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume")
                    }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                }
            }, i = new r, (a = function(e) {
                if (!e.src || 0 === e.src.length) {
                    console.error("An array of source files must be passed with any new Howl.");
                    return
                }
                this.init(e)
            }).prototype = {
                init: function(e) {
                    var n = this;
                    return i.ctx || p(), n._autoplay = e.autoplay || !1, n._format = "string" != typeof e.format ? e.format : [e.format], n._html5 = e.html5 || !1, n._muted = e.mute || !1, n._loop = e.loop || !1, n._pool = e.pool || 5, n._preload = "boolean" != typeof e.preload && "metadata" !== e.preload || e.preload, n._rate = e.rate || 1, n._sprite = e.sprite || {}, n._src = "string" != typeof e.src ? e.src : [e.src], n._volume = void 0 !== e.volume ? e.volume : 1, n._xhr = {
                        method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                        headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                        withCredentials: !!e.xhr && !!e.xhr.withCredentials && e.xhr.withCredentials
                    }, n._duration = 0, n._state = "unloaded", n._sounds = [], n._endTimers = {}, n._queue = [], n._playLock = !1, n._onend = e.onend ? [{
                        fn: e.onend
                    }] : [], n._onfade = e.onfade ? [{
                        fn: e.onfade
                    }] : [], n._onload = e.onload ? [{
                        fn: e.onload
                    }] : [], n._onloaderror = e.onloaderror ? [{
                        fn: e.onloaderror
                    }] : [], n._onplayerror = e.onplayerror ? [{
                        fn: e.onplayerror
                    }] : [], n._onpause = e.onpause ? [{
                        fn: e.onpause
                    }] : [], n._onplay = e.onplay ? [{
                        fn: e.onplay
                    }] : [], n._onstop = e.onstop ? [{
                        fn: e.onstop
                    }] : [], n._onmute = e.onmute ? [{
                        fn: e.onmute
                    }] : [], n._onvolume = e.onvolume ? [{
                        fn: e.onvolume
                    }] : [], n._onrate = e.onrate ? [{
                        fn: e.onrate
                    }] : [], n._onseek = e.onseek ? [{
                        fn: e.onseek
                    }] : [], n._onunlock = e.onunlock ? [{
                        fn: e.onunlock
                    }] : [], n._onresume = [], n._webAudio = i.usingWebAudio && !n._html5, void 0 !== i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(), i._howls.push(n), n._autoplay && n._queue.push({
                        event: "play",
                        action: function() {
                            n.play()
                        }
                    }), n._preload && "none" !== n._preload && n.load(), n
                },
                load: function() {
                    var e, n, t = this,
                        o = null;
                    if (i.noAudio) {
                        t._emit("loaderror", null, "No audio support.");
                        return
                    }
                    "string" == typeof t._src && (t._src = [t._src]);
                    for (var r = 0; r < t._src.length; r++) {
                        if (t._format && t._format[r]) e = t._format[r];
                        else {
                            if ("string" != typeof(n = t._src[r])) {
                                t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }(e = /^data:audio\/([^;,]+);/i.exec(n)) || (e = /\.([^.]+)$/.exec(n.split("?", 1)[0])), e && (e = e[1].toLowerCase())
                        }
                        if (e || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), e && i.codecs(e)) {
                            o = t._src[r];
                            break
                        }
                    }
                    if (!o) {
                        t._emit("loaderror", null, "No codec support for selected audio sources.");
                        return
                    }
                    return t._src = o, t._state = "loading", "https:" === window.location.protocol && "http:" === o.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new u(t), t._webAudio && d(t), t
                },
                play: function(e, n) {
                    var t = this,
                        o = null;
                    if ("number" == typeof e) o = e, e = null;
                    else if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
                    else if (void 0 === e && (e = "__default", !t._playLock)) {
                        for (var r = 0, a = 0; a < t._sounds.length; a++) t._sounds[a]._paused && !t._sounds[a]._ended && (r++, o = t._sounds[a]._id);
                        1 === r ? e = null : o = null
                    }
                    var u = o ? t._soundById(o) : t._inactiveSound();
                    if (!u) return null;
                    if (o && !e && (e = u._sprite || "__default"), "loaded" !== t._state) {
                        u._sprite = e, u._ended = !1;
                        var s = u._id;
                        return t._queue.push({
                            event: "play",
                            action: function() {
                                t.play(s)
                            }
                        }), s
                    }
                    if (o && !u._paused) return n || t._loadQueue("play"), u._id;
                    t._webAudio && i._autoResume();
                    var d = Math.max(0, u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3),
                        _ = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - d),
                        l = 1e3 * _ / Math.abs(u._rate),
                        c = t._sprite[e][0] / 1e3,
                        p = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
                    u._sprite = e, u._ended = !1;
                    var f = function() {
                        u._paused = !1, u._seek = d, u._start = c, u._stop = p, u._loop = !!(u._loop || t._sprite[e][2])
                    };
                    if (d >= p) {
                        t._ended(u);
                        return
                    }
                    var m = u._node;
                    if (t._webAudio) {
                        var h = function() {
                            t._playLock = !1, f(), t._refreshBuffer(u);
                            var e = u._muted || t._muted ? 0 : u._volume;
                            m.gain.setValueAtTime(e, i.ctx.currentTime), u._playStart = i.ctx.currentTime, void 0 === m.bufferSource.start ? u._loop ? m.bufferSource.noteGrainOn(0, d, 86400) : m.bufferSource.noteGrainOn(0, d, _) : u._loop ? m.bufferSource.start(0, d, 86400) : m.bufferSource.start(0, d, _), l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)), n || setTimeout(function() {
                                t._emit("play", u._id), t._loadQueue()
                            }, 0)
                        };
                        "running" === i.state && "interrupted" !== i.ctx.state ? h() : (t._playLock = !0, t.once("resume", h), t._clearTimer(u._id))
                    } else {
                        var v = function() {
                            m.currentTime = d, m.muted = u._muted || t._muted || i._muted || m.muted, m.volume = u._volume * i.volume(), m.playbackRate = u._rate;
                            try {
                                var o = m.play();
                                if (o && "undefined" != typeof Promise && (o instanceof Promise || "function" == typeof o.then) ? (t._playLock = !0, f(), o.then(function() {
                                        t._playLock = !1, m._unlocked = !0, n ? t._loadQueue() : t._emit("play", u._id)
                                    }).catch(function() {
                                        t._playLock = !1, t._emit("playerror", u._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), u._ended = !0, u._paused = !0
                                    })) : n || (t._playLock = !1, f(), t._emit("play", u._id)), m.playbackRate = u._rate, m.paused) {
                                    t._emit("playerror", u._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    return
                                }
                                "__default" !== e || u._loop ? t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l) : (t._endTimers[u._id] = function() {
                                    t._ended(u), m.removeEventListener("ended", t._endTimers[u._id], !1)
                                }, m.addEventListener("ended", t._endTimers[u._id], !1))
                            } catch (r) {
                                t._emit("playerror", u._id, r)
                            }
                        };
                        "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === m.src && (m.src = t._src, m.load());
                        var A = window && window.ejecta || !m.readyState && i._navigator.isCocoonJS;
                        if (m.readyState >= 3 || A) v();
                        else {
                            t._playLock = !0, t._state = "loading";
                            var y = function() {
                                t._state = "loaded", v(), m.removeEventListener(i._canPlayEvent, y, !1)
                            };
                            m.addEventListener(i._canPlayEvent, y, !1), t._clearTimer(u._id)
                        }
                    }
                    return u._id
                },
                pause: function(e) {
                    var n = this;
                    if ("loaded" !== n._state || n._playLock) return n._queue.push({
                        event: "pause",
                        action: function() {
                            n.pause(e)
                        }
                    }), n;
                    for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                        n._clearTimer(t[o]);
                        var r = n._soundById(t[o]);
                        if (r && !r._paused && (r._seek = n.seek(t[o]), r._rateSeek = 0, r._paused = !0, n._stopFade(t[o]), r._node)) {
                            if (n._webAudio) {
                                if (!r._node.bufferSource) continue;
                                void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node)
                            } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause()
                        }
                        arguments[1] || n._emit("pause", r ? r._id : null)
                    }
                    return n
                },
                stop: function(e, n) {
                    var t = this;
                    if ("loaded" !== t._state || t._playLock) return t._queue.push({
                        event: "stop",
                        action: function() {
                            t.stop(e)
                        }
                    }), t;
                    for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
                        t._clearTimer(o[r]);
                        var i = t._soundById(o[r]);
                        i && (i._seek = i._start || 0, i._rateSeek = 0, i._paused = !0, i._ended = !0, t._stopFade(o[r]), i._node && (t._webAudio ? i._node.bufferSource && (void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), t._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0, i._node.pause(), i._node.duration === 1 / 0 && t._clearSound(i._node))), n || t._emit("stop", i._id))
                    }
                    return t
                },
                mute: function(e, n) {
                    var t = this;
                    if ("loaded" !== t._state || t._playLock) return t._queue.push({
                        event: "mute",
                        action: function() {
                            t.mute(e, n)
                        }
                    }), t;
                    if (void 0 === n) {
                        if ("boolean" != typeof e) return t._muted;
                        t._muted = e
                    }
                    for (var o = t._getSoundIds(n), r = 0; r < o.length; r++) {
                        var a = t._soundById(o[r]);
                        a && (a._muted = e, a._interval && t._stopFade(a._id), t._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime) : a._node && (a._node.muted = !!i._muted || e), t._emit("mute", a._id))
                    }
                    return t
                },
                volume: function() {
                    var e, n, t, o = this,
                        r = arguments;
                    if (0 === r.length) return o._volume;
                    if (1 === r.length || 2 === r.length && void 0 === r[1] ? o._getSoundIds().indexOf(r[0]) >= 0 ? n = parseInt(r[0], 10) : e = parseFloat(r[0]) : r.length >= 2 && (e = parseFloat(r[0]), n = parseInt(r[1], 10)), void 0 === e || !(e >= 0) || !(e <= 1)) return (t = n ? o._soundById(n) : o._sounds[0]) ? t._volume : 0;
                    if ("loaded" !== o._state || o._playLock) return o._queue.push({
                        event: "volume",
                        action: function() {
                            o.volume.apply(o, r)
                        }
                    }), o;
                    void 0 === n && (o._volume = e), n = o._getSoundIds(n);
                    for (var a = 0; a < n.length; a++)(t = o._soundById(n[a])) && (t._volume = e, r[2] || o._stopFade(n[a]), o._webAudio && t._node && !t._muted ? t._node.gain.setValueAtTime(e, i.ctx.currentTime) : t._node && !t._muted && (t._node.volume = e * i.volume()), o._emit("volume", t._id));
                    return o
                },
                fade: function(e, n, t, o) {
                    var r = this;
                    if ("loaded" !== r._state || r._playLock) return r._queue.push({
                        event: "fade",
                        action: function() {
                            r.fade(e, n, t, o)
                        }
                    }), r;
                    e = Math.min(Math.max(0, parseFloat(e)), 1), n = Math.min(Math.max(0, parseFloat(n)), 1), t = parseFloat(t), r.volume(e, o);
                    for (var a = r._getSoundIds(o), u = 0; u < a.length; u++) {
                        var s = r._soundById(a[u]);
                        if (s) {
                            if (o || r._stopFade(a[u]), r._webAudio && !s._muted) {
                                var d = i.ctx.currentTime,
                                    _ = d + t / 1e3;
                                s._volume = e, s._node.gain.setValueAtTime(e, d), s._node.gain.linearRampToValueAtTime(n, _)
                            }
                            r._startFadeInterval(s, e, n, t, a[u], void 0 === o)
                        }
                    }
                    return r
                },
                _startFadeInterval: function(e, n, t, o, r, i) {
                    var a = this,
                        u = n,
                        s = t - n,
                        d = Math.abs(s / .01),
                        _ = Date.now();
                    e._fadeTo = t, e._interval = setInterval(function() {
                        var r = (Date.now() - _) / o;
                        _ = Date.now(), u += s * r, u = Math.round(100 * u) / 100, u = s < 0 ? Math.max(t, u) : Math.min(t, u), a._webAudio ? e._volume = u : a.volume(u, e._id, !0), i && (a._volume = u), (t < n && u <= t || t > n && u >= t) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, a.volume(t, e._id), a._emit("fade", e._id))
                    }, Math.max(4, d > 0 ? o / d : o))
                },
                _stopFade: function(e) {
                    var n = this._soundById(e);
                    return n && n._interval && (this._webAudio && n._node.gain.cancelScheduledValues(i.ctx.currentTime), clearInterval(n._interval), n._interval = null, this.volume(n._fadeTo, e), n._fadeTo = null, this._emit("fade", e)), this
                },
                loop: function() {
                    var e, n, t, o = this,
                        r = arguments;
                    if (0 === r.length) return o._loop;
                    if (1 === r.length) {
                        if ("boolean" != typeof r[0]) return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
                        e = r[0], o._loop = e
                    } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
                    for (var i = o._getSoundIds(n), a = 0; a < i.length; a++)(t = o._soundById(i[a])) && (t._loop = e, o._webAudio && t._node && t._node.bufferSource && (t._node.bufferSource.loop = e, e && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop, o.playing(i[a]) && (o.pause(i[a], !0), o.play(i[a], !0)))));
                    return o
                },
                rate: function() {
                    var e, n, t, o = this,
                        r = arguments;
                    if (0 === r.length ? n = o._sounds[0]._id : 1 === r.length ? o._getSoundIds().indexOf(r[0]) >= 0 ? n = parseInt(r[0], 10) : e = parseFloat(r[0]) : 2 === r.length && (e = parseFloat(r[0]), n = parseInt(r[1], 10)), "number" != typeof e) return (t = o._soundById(n)) ? t._rate : o._rate;
                    if ("loaded" !== o._state || o._playLock) return o._queue.push({
                        event: "rate",
                        action: function() {
                            o.rate.apply(o, r)
                        }
                    }), o;
                    void 0 === n && (o._rate = e), n = o._getSoundIds(n);
                    for (var a = 0; a < n.length; a++)
                        if (t = o._soundById(n[a])) {
                            o.playing(n[a]) && (t._rateSeek = o.seek(n[a]), t._playStart = o._webAudio ? i.ctx.currentTime : t._playStart), t._rate = e, o._webAudio && t._node && t._node.bufferSource ? t._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime) : t._node && (t._node.playbackRate = e);
                            var u = o.seek(n[a]),
                                s = 1e3 * ((o._sprite[t._sprite][0] + o._sprite[t._sprite][1]) / 1e3 - u) / Math.abs(t._rate);
                            (o._endTimers[n[a]] || !t._paused) && (o._clearTimer(n[a]), o._endTimers[n[a]] = setTimeout(o._ended.bind(o, t), s)), o._emit("rate", t._id)
                        } return o
                },
                seek: function() {
                    var e, n, t = this,
                        o = arguments;
                    if (0 === o.length ? t._sounds.length && (n = t._sounds[0]._id) : 1 === o.length ? t._getSoundIds().indexOf(o[0]) >= 0 ? n = parseInt(o[0], 10) : t._sounds.length && (n = t._sounds[0]._id, e = parseFloat(o[0])) : 2 === o.length && (e = parseFloat(o[0]), n = parseInt(o[1], 10)), void 0 === n) return 0;
                    if ("number" == typeof e && ("loaded" !== t._state || t._playLock)) return t._queue.push({
                        event: "seek",
                        action: function() {
                            t.seek.apply(t, o)
                        }
                    }), t;
                    var r = t._soundById(n);
                    if (r) {
                        if ("number" == typeof e && e >= 0) {
                            var a = t.playing(n);
                            a && t.pause(n, !0), r._seek = e, r._ended = !1, t._clearTimer(n), t._webAudio || !r._node || isNaN(r._node.duration) || (r._node.currentTime = e);
                            var u = function() {
                                a && t.play(n, !0), t._emit("seek", n)
                            };
                            if (a && !t._webAudio) {
                                var s = function() {
                                    t._playLock ? setTimeout(s, 0) : u()
                                };
                                setTimeout(s, 0)
                            } else u()
                        } else {
                            if (!t._webAudio) return r._node.currentTime;
                            var d = t.playing(n) ? i.ctx.currentTime - r._playStart : 0,
                                _ = r._rateSeek ? r._rateSeek - r._seek : 0;
                            return r._seek + (_ + d * Math.abs(r._rate))
                        }
                    }
                    return t
                },
                playing: function(e) {
                    if ("number" == typeof e) {
                        var n = this._soundById(e);
                        return !!n && !n._paused
                    }
                    for (var t = 0; t < this._sounds.length; t++)
                        if (!this._sounds[t]._paused) return !0;
                    return !1
                },
                duration: function(e) {
                    var n = this._duration,
                        t = this._soundById(e);
                    return t && (n = this._sprite[t._sprite][1] / 1e3), n
                },
                state: function() {
                    return this._state
                },
                unload: function() {
                    for (var e = this, n = e._sounds, t = 0; t < n.length; t++) n[t]._paused || e.stop(n[t]._id), e._webAudio || (e._clearSound(n[t]._node), n[t]._node.removeEventListener("error", n[t]._errorFn, !1), n[t]._node.removeEventListener(i._canPlayEvent, n[t]._loadFn, !1), n[t]._node.removeEventListener("ended", n[t]._endFn, !1), i._releaseHtml5Audio(n[t]._node)), delete n[t]._node, e._clearTimer(n[t]._id);
                    var o = i._howls.indexOf(e);
                    o >= 0 && i._howls.splice(o, 1);
                    var r = !0;
                    for (t = 0; t < i._howls.length; t++)
                        if (i._howls[t]._src === e._src || e._src.indexOf(i._howls[t]._src) >= 0) {
                            r = !1;
                            break
                        } return s && r && delete s[e._src], i.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                },
                on: function(e, n, t, o) {
                    var r = this["_on" + e];
                    return "function" == typeof n && r.push(o ? {
                        id: t,
                        fn: n,
                        once: o
                    } : {
                        id: t,
                        fn: n
                    }), this
                },
                off: function(e, n, t) {
                    var o = this,
                        r = o["_on" + e],
                        i = 0;
                    if ("number" == typeof n && (t = n, n = null), n || t)
                        for (i = 0; i < r.length; i++) {
                            var a = t === r[i].id;
                            if (n === r[i].fn && a || !n && a) {
                                r.splice(i, 1);
                                break
                            }
                        } else if (e) o["_on" + e] = [];
                        else {
                            var u = Object.keys(o);
                            for (i = 0; i < u.length; i++) 0 === u[i].indexOf("_on") && Array.isArray(o[u[i]]) && (o[u[i]] = [])
                        } return o
                },
                once: function(e, n, t) {
                    return this.on(e, n, t, 1), this
                },
                _emit: function(e, n, t) {
                    for (var o = this["_on" + e], r = o.length - 1; r >= 0; r--)(!o[r].id || o[r].id === n || "load" === e) && (setTimeout((function(e) {
                        e.call(this, n, t)
                    }).bind(this, o[r].fn), 0), o[r].once && this.off(e, o[r].fn, o[r].id));
                    return this._loadQueue(e), this
                },
                _loadQueue: function(e) {
                    if (this._queue.length > 0) {
                        var n = this._queue[0];
                        n.event === e && (this._queue.shift(), this._loadQueue()), e || n.action()
                    }
                    return this
                },
                _ended: function(e) {
                    var n = this,
                        t = e._sprite;
                    if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(n._ended.bind(n, e), 100), n;
                    var o = !!(e._loop || n._sprite[t][2]);
                    if (n._emit("end", e._id), !n._webAudio && o && n.stop(e._id, !0).play(e._id), n._webAudio && o) {
                        n._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = i.ctx.currentTime;
                        var r = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                        n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r)
                    }
                    return n._webAudio && !o && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, n._clearTimer(e._id), n._cleanBuffer(e._node), i._autoSuspend()), n._webAudio || o || n.stop(e._id, !0), n
                },
                _clearTimer: function(e) {
                    if (this._endTimers[e]) {
                        if ("function" != typeof this._endTimers[e]) clearTimeout(this._endTimers[e]);
                        else {
                            var n = this._soundById(e);
                            n && n._node && n._node.removeEventListener("ended", this._endTimers[e], !1)
                        }
                        delete this._endTimers[e]
                    }
                    return this
                },
                _soundById: function(e) {
                    for (var n = 0; n < this._sounds.length; n++)
                        if (e === this._sounds[n]._id) return this._sounds[n];
                    return null
                },
                _inactiveSound: function() {
                    this._drain();
                    for (var e = 0; e < this._sounds.length; e++)
                        if (this._sounds[e]._ended) return this._sounds[e].reset();
                    return new u(this)
                },
                _drain: function() {
                    var e = this._pool,
                        n = 0,
                        t = 0;
                    if (!(this._sounds.length < e)) {
                        for (t = 0; t < this._sounds.length; t++) this._sounds[t]._ended && n++;
                        for (t = this._sounds.length - 1; t >= 0; t--) {
                            if (n <= e) return;
                            this._sounds[t]._ended && (this._webAudio && this._sounds[t]._node && this._sounds[t]._node.disconnect(0), this._sounds.splice(t, 1), n--)
                        }
                    }
                },
                _getSoundIds: function(e) {
                    if (void 0 !== e) return [e];
                    for (var n = [], t = 0; t < this._sounds.length; t++) n.push(this._sounds[t]._id);
                    return n
                },
                _refreshBuffer: function(e) {
                    return e._node.bufferSource = i.ctx.createBufferSource(), e._node.bufferSource.buffer = s[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime), this
                },
                _cleanBuffer: function(e) {
                    var n = i._navigator && i._navigator.vendor.indexOf("Apple") >= 0;
                    if (i._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), n)) try {
                        e.bufferSource.buffer = i._scratchBuffer
                    } catch (t) {}
                    return e.bufferSource = null, this
                },
                _clearSound: function(e) {
                    /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                }
            }, (u = function(e) {
                this._parent = e, this.init()
            }).prototype = {
                init: function() {
                    var e = this,
                        n = e._parent;
                    return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++i._counter, n._sounds.push(e), e.create(), e
                },
                create: function() {
                    var e = this,
                        n = e._parent,
                        t = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
                    return n._webAudio ? (e._node = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), e._node.gain.setValueAtTime(t, i.ctx.currentTime), e._node.paused = !0, e._node.connect(i.masterGain)) : i.noAudio || (e._node = i._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(i._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = n._src, e._node.preload = !0 === n._preload ? "auto" : n._preload, e._node.volume = t * i.volume(), e._node.load()), e
                },
                reset: function() {
                    var e = this,
                        n = e._parent;
                    return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++i._counter, e
                },
                _errorListener: function() {
                    this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorFn, !1)
                },
                _loadListener: function() {
                    var e = this._parent;
                    e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(i._canPlayEvent, this._loadFn, !1)
                },
                _endListener: function() {
                    var e = this._parent;
                    e._duration === 1 / 0 && (e._duration = Math.ceil(10 * this._node.duration) / 10, e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration), e._ended(this)), this._node.removeEventListener("ended", this._endFn, !1)
                }
            }, s = {}, d = function(e) {
                var n = e._src;
                if (s[n]) {
                    e._duration = s[n].duration, c(e);
                    return
                }
                if (/^data:[^;]+;base64,/.test(n)) {
                    for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
                    l(o.buffer, e)
                } else {
                    var i = new XMLHttpRequest;
                    i.open(e._xhr.method, n, !0), i.withCredentials = e._xhr.withCredentials, i.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(n) {
                        i.setRequestHeader(n, e._xhr.headers[n])
                    }), i.onload = function() {
                        var n = (i.status + "")[0];
                        if ("0" !== n && "2" !== n && "3" !== n) {
                            e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".");
                            return
                        }
                        l(i.response, e)
                    }, i.onerror = function() {
                        e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete s[n], e.load())
                    }, _(i)
                }
            }, _ = function(e) {
                try {
                    e.send()
                } catch (n) {
                    e.onerror()
                }
            }, l = function(e, n) {
                var t = function() {
                        n._emit("loaderror", null, "Decoding audio data failed.")
                    },
                    o = function(e) {
                        e && n._sounds.length > 0 ? (s[n._src] = e, c(n, e)) : t()
                    };
                "undefined" != typeof Promise && 1 === i.ctx.decodeAudioData.length ? i.ctx.decodeAudioData(e).then(o).catch(t) : i.ctx.decodeAudioData(e, o, t)
            }, c = function(e, n) {
                n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                    __default: [0, 1e3 * e._duration]
                }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
            }, p = function() {
                if (i.usingWebAudio) {
                    try {
                        "undefined" != typeof AudioContext ? i.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? i.ctx = new webkitAudioContext : i.usingWebAudio = !1
                    } catch (e) {
                        i.usingWebAudio = !1
                    }
                    i.ctx || (i.usingWebAudio = !1);
                    var n = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
                        t = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        o = t ? parseInt(t[1], 10) : null;
                    if (n && o && o < 9) {
                        var r = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                        i._navigator && !r && (i.usingWebAudio = !1)
                    }
                    i.usingWebAudio && (i.masterGain = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), i.masterGain.gain.setValueAtTime(i._muted ? 0 : i._volume, i.ctx.currentTime), i.masterGain.connect(i.ctx.destination)), i._setup()
                }
            }, void 0 !== (o = (function() {
                return {
                    Howler: i,
                    Howl: a
                }
            }).apply(n, [])) && (e.exports = o), n.Howler = i, n.Howl = a, void 0 !== t.g ? (t.g.HowlerGlobal = r, t.g.Howler = i, t.g.Howl = a, t.g.Sound = u) : "undefined" != typeof window && (window.HowlerGlobal = r, window.Howler = i, window.Howl = a, window.Sound = u), HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
                if (!this.ctx || !this.ctx.listener) return this;
                for (var n = this._howls.length - 1; n >= 0; n--) this._howls[n].stereo(e);
                return this
            }, HowlerGlobal.prototype.pos = function(e, n, t) {
                var o = this;
                return o.ctx && o.ctx.listener ? (n = "number" != typeof n ? o._pos[1] : n, t = "number" != typeof t ? o._pos[2] : t, "number" != typeof e) ? o._pos : (o._pos = [e, n, t], void 0 !== o.ctx.listener.positionX ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, .1), o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, .1), o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, .1)) : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]), o) : o
            }, HowlerGlobal.prototype.orientation = function(e, n, t, o, r, i) {
                var a = this;
                if (!a.ctx || !a.ctx.listener) return a;
                var u = a._orientation;
                return (n = "number" != typeof n ? u[1] : n, t = "number" != typeof t ? u[2] : t, o = "number" != typeof o ? u[3] : o, r = "number" != typeof r ? u[4] : r, i = "number" != typeof i ? u[5] : i, "number" != typeof e) ? u : (a._orientation = [e, n, t, o, r, i], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, .1), a.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, .1), a.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1), a.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, n, t, o, r, i), a)
            }, Howl.prototype.init = (f = Howl.prototype.init, function(e) {
                var n = this;
                return n._orientation = e.orientation || [1, 0, 0], n._stereo = e.stereo || null, n._pos = e.pos || null, n._pannerAttr = {
                    coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                    coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                    coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                    distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
                    maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                    panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
                    refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                    rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
                }, n._onstereo = e.onstereo ? [{
                    fn: e.onstereo
                }] : [], n._onpos = e.onpos ? [{
                    fn: e.onpos
                }] : [], n._onorientation = e.onorientation ? [{
                    fn: e.onorientation
                }] : [], f.call(this, e)
            }), Howl.prototype.stereo = function(e, n) {
                var t = this;
                if (!t._webAudio) return t;
                if ("loaded" !== t._state) return t._queue.push({
                    event: "stereo",
                    action: function() {
                        t.stereo(e, n)
                    }
                }), t;
                var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                if (void 0 === n) {
                    if ("number" != typeof e) return t._stereo;
                    t._stereo = e, t._pos = [e, 0, 0]
                }
                for (var r = t._getSoundIds(n), i = 0; i < r.length; i++) {
                    var a = t._soundById(r[i]);
                    if (a) {
                        if ("number" != typeof e) return a._stereo;
                        a._stereo = e, a._pos = [e, 0, 0], a._node && (a._pannerAttr.panningModel = "equalpower", a._panner && a._panner.pan || v(a, o), "spatial" === o ? void 0 !== a._panner.positionX ? (a._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), a._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), a._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : a._panner.setPosition(e, 0, 0) : a._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), t._emit("stereo", a._id)
                    }
                }
                return t
            }, Howl.prototype.pos = function(e, n, t, o) {
                var r = this;
                if (!r._webAudio) return r;
                if ("loaded" !== r._state) return r._queue.push({
                    event: "pos",
                    action: function() {
                        r.pos(e, n, t, o)
                    }
                }), r;
                if (n = "number" != typeof n ? 0 : n, t = "number" != typeof t ? -.5 : t, void 0 === o) {
                    if ("number" != typeof e) return r._pos;
                    r._pos = [e, n, t]
                }
                for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
                    var u = r._soundById(i[a]);
                    if (u) {
                        if ("number" != typeof e) return u._pos;
                        u._pos = [e, n, t], u._node && ((!u._panner || u._panner.pan) && v(u, "spatial"), void 0 !== u._panner.positionX ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), u._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), u._panner.positionZ.setValueAtTime(t, Howler.ctx.currentTime)) : u._panner.setPosition(e, n, t)), r._emit("pos", u._id)
                    }
                }
                return r
            }, Howl.prototype.orientation = function(e, n, t, o) {
                var r = this;
                if (!r._webAudio) return r;
                if ("loaded" !== r._state) return r._queue.push({
                    event: "orientation",
                    action: function() {
                        r.orientation(e, n, t, o)
                    }
                }), r;
                if (n = "number" != typeof n ? r._orientation[1] : n, t = "number" != typeof t ? r._orientation[2] : t, void 0 === o) {
                    if ("number" != typeof e) return r._orientation;
                    r._orientation = [e, n, t]
                }
                for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
                    var u = r._soundById(i[a]);
                    if (u) {
                        if ("number" != typeof e) return u._orientation;
                        u._orientation = [e, n, t], u._node && (u._panner || (u._pos || (u._pos = r._pos || [0, 0, -.5]), v(u, "spatial")), void 0 !== u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), u._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), u._panner.orientationZ.setValueAtTime(t, Howler.ctx.currentTime)) : u._panner.setOrientation(e, n, t)), r._emit("orientation", u._id)
                    }
                }
                return r
            }, Howl.prototype.pannerAttr = function() {
                var e, n, t, o = this,
                    r = arguments;
                if (!o._webAudio) return o;
                if (0 === r.length) return o._pannerAttr;
                if (1 === r.length) {
                    if ("object" != typeof r[0]) return (t = o._soundById(parseInt(r[0], 10))) ? t._pannerAttr : o._pannerAttr;
                    e = r[0], void 0 === n && (e.pannerAttr || (e.pannerAttr = {
                        coneInnerAngle: e.coneInnerAngle,
                        coneOuterAngle: e.coneOuterAngle,
                        coneOuterGain: e.coneOuterGain,
                        distanceModel: e.distanceModel,
                        maxDistance: e.maxDistance,
                        refDistance: e.refDistance,
                        rolloffFactor: e.rolloffFactor,
                        panningModel: e.panningModel
                    }), o._pannerAttr = {
                        coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                        coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                        coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : o._coneOuterGain,
                        distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : o._distanceModel,
                        maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : o._maxDistance,
                        refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : o._refDistance,
                        rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : o._rolloffFactor,
                        panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : o._panningModel
                    })
                } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
                for (var i = o._getSoundIds(n), a = 0; a < i.length; a++)
                    if (t = o._soundById(i[a])) {
                        var u = t._pannerAttr;
                        u = {
                            coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : u.coneInnerAngle,
                            coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : u.coneOuterAngle,
                            coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : u.coneOuterGain,
                            distanceModel: void 0 !== e.distanceModel ? e.distanceModel : u.distanceModel,
                            maxDistance: void 0 !== e.maxDistance ? e.maxDistance : u.maxDistance,
                            refDistance: void 0 !== e.refDistance ? e.refDistance : u.refDistance,
                            rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : u.rolloffFactor,
                            panningModel: void 0 !== e.panningModel ? e.panningModel : u.panningModel
                        };
                        var s = t._panner;
                        s ? (s.coneInnerAngle = u.coneInnerAngle, s.coneOuterAngle = u.coneOuterAngle, s.coneOuterGain = u.coneOuterGain, s.distanceModel = u.distanceModel, s.maxDistance = u.maxDistance, s.refDistance = u.refDistance, s.rolloffFactor = u.rolloffFactor, s.panningModel = u.panningModel) : (t._pos || (t._pos = o._pos || [0, 0, -.5]), v(t, "spatial"))
                    } return o
            }, Sound.prototype.init = (m = Sound.prototype.init, function() {
                var e = this,
                    n = e._parent;
                e._orientation = n._orientation, e._stereo = n._stereo, e._pos = n._pos, e._pannerAttr = n._pannerAttr, m.call(this), e._stereo ? n.stereo(e._stereo) : e._pos && n.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
            }), Sound.prototype.reset = (h = Sound.prototype.reset, function() {
                var e = this,
                    n = e._parent;
                return e._orientation = n._orientation, e._stereo = n._stereo, e._pos = n._pos, e._pannerAttr = n._pannerAttr, e._stereo ? n.stereo(e._stereo) : e._pos ? n.pos(e._pos[0], e._pos[1], e._pos[2], e._id) : e._panner && (e._panner.disconnect(0), e._panner = void 0, n._refreshBuffer(e)), h.call(this)
            }), v = function(e, n) {
                "spatial" === (n = n || "spatial") ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
            }
        }
    }
]);