(function() {
	var h = {},
		mt = {},
		c = {
			id: "7f5950bea783b73c45a37e835d0daea4",
			dm: ["guanjia.qq.com"],
			js: "tongji.baidu.com/hm-web/js/",
			etrk: [{
				id: "%23download1",
				eventType: "onclick"
			}],
			icon: '',
			ctrk: false,
			align: -1,
			nv: -1,
			vdur: 1800000,
			age: 31536000000,
			rec: 0,
			rp: [],
			trust: 1,
			vcard: 9710635,
			qiao: 0,
			lxb: 0,
			conv: 0,
			med: 0,
			cvcc: '',
			cvcf: [],
			apps: ''
		};
	var q = void 0,
		r = !0,
		u = null,
		v = !1;
	mt.cookie = {};
	mt.cookie.set = function(a, e, d) {
		var b;
		d.O && (b = new Date, b.setTime(b.getTime() + d.O));
		document.cookie = a + "=" + e + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (b ? "; expires=" + b.toGMTString() : "") + (d.Bb ? "; secure" : "")
	};
	mt.cookie.get = function(a) {
		return(a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : u
	};
	mt.g = {};
	mt.g.P = function(a) {
		return document.getElementById(a)
	};
	mt.g.R = function(a, e) {
		var d = [],
			b = [];
		if(!a) return b;
		for(; a.parentNode != u;) {
			for(var g = 0, m = 0, k = a.parentNode.childNodes.length, p = 0; p < k; p++) {
				var f = a.parentNode.childNodes[p];
				if(f.nodeName === a.nodeName && (g++, f === a && (m = g), 0 < m && 1 < g)) break
			}
			if((k = "" !== a.id) && e) {
				d.unshift("#" + encodeURIComponent(a.id));
				break
			} else k && (k = "#" + encodeURIComponent(a.id), k = 0 < d.length ? k + ">" + d.join(">") : k, b.push(k)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + m + "]" : ""));
			a = a.parentNode
		}
		b.push(d.join(">"));
		return b
	};
	mt.g.Pa = function(a) {
		return(a = mt.g.R(a, r)) && a.length ? String(a[0]) : ""
	};
	mt.g.Oa = function(a) {
		return mt.g.R(a, v)
	};
	mt.g.Ga = function(a) {
		var e;
		for(e = "A";
			(a = a.parentNode) && 1 == a.nodeType;)
			if(a.tagName == e) return a;
		return u
	};
	mt.g.Ia = function(a) {
		return 9 === a.nodeType ? a : a.ownerDocument || a.document
	};
	mt.g.Ma = function(a) {
		var e = {
			top: 0,
			left: 0
		};
		if(!a) return e;
		var d = mt.g.Ia(a).documentElement;
		"undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
		return {
			top: e.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
			left: e.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
		}
	};
	(mt.g.ga = function() {
		function a() {
			if(!a.G) {
				a.G = r;
				for(var e = 0, d = b.length; e < d; e++) b[e]()
			}
		}

		function e() {
			try {
				document.documentElement.doScroll("left")
			} catch(b) {
				setTimeout(e, 1);
				return
			}
			a()
		}
		var d = v,
			b = [],
			g;
		document.addEventListener ? g = function() {
			document.removeEventListener("DOMContentLoaded", g, v);
			a()
		} : document.attachEvent && (g = function() {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
		});
		(function() {
			if(!d)
				if(d = r, "complete" === document.readyState) a.G = r;
				else if(document.addEventListener) document.addEventListener("DOMContentLoaded",
				g, v), window.addEventListener("load", a, v);
			else if(document.attachEvent) {
				document.attachEvent("onreadystatechange", g);
				window.attachEvent("onload", a);
				var b = v;
				try {
					b = window.frameElement == u
				} catch(k) {}
				document.documentElement.doScroll && b && e()
			}
		})();
		return function(e) {
			a.G ? e() : b.push(e)
		}
	}()).G = v;
	mt.event = {};
	mt.event.c = function(a, e, d) {
		a.attachEvent ? a.attachEvent("on" + e, function(b) {
			d.call(a, b)
		}) : a.addEventListener && a.addEventListener(e, d, v)
	};
	mt.event.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = v
	};
	(function() {
		var a = mt.event;
		mt.f = {};
		mt.f.da = /msie (\d+\.\d+)/i.test(navigator.userAgent);
		mt.f.$a = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : q;
		mt.f.cookieEnabled = navigator.cookieEnabled;
		mt.f.javaEnabled = navigator.javaEnabled();
		mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
		mt.f.hb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
		mt.f.colorDepth = window.screen.colorDepth || 0;
		mt.f.C = function() {
			var a;
			a = a || document;
			return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
		};
		mt.f.D = function() {
			var a = document;
			return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
		};
		mt.f.orientation = 0;
		(function() {
			function e() {
				var a = 0;
				window.orientation !== q && (a = window.orientation);
				screen && (screen.orientation && screen.orientation.angle !== q) && (a = screen.orientation.angle);
				mt.f.orientation = a
			}
			e();
			a.c(window, "orientationchange", e)
		})();
		return mt.f
	})();
	mt.m = {};
	mt.m.parse = function() {
		return(new Function('return (" + source + ")'))()
	};
	mt.m.stringify = function() {
		function a(a) {
			/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
				var b = d[a];
				if(b) return b;
				b = a.charCodeAt();
				return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
			}));
			return '"' + a + '"'
		}

		function e(a) {
			return 10 > a ? "0" + a : a
		}
		var d = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};
		return function(b) {
			switch(typeof b) {
				case "undefined":
					return "undefined";
				case "number":
					return isFinite(b) ? String(b) : "null";
				case "string":
					return a(b);
				case "boolean":
					return String(b);
				default:
					if(b === u) return "null";
					if(b instanceof Array) {
						var d = ["["],
							m = b.length,
							k, p, f;
						for(p = 0; p < m; p++) switch(f = b[p], typeof f) {
							case "undefined":
							case "function":
							case "unknown":
								break;
							default:
								k && d.push(","), d.push(mt.m.stringify(f)), k = 1
						}
						d.push("]");
						return d.join("")
					}
					if(b instanceof Date) return '"' + b.getFullYear() + "-" + e(b.getMonth() + 1) + "-" + e(b.getDate()) + "T" + e(b.getHours()) + ":" + e(b.getMinutes()) + ":" + e(b.getSeconds()) + '"';
					k = ["{"];
					p = mt.m.stringify;
					for(m in b)
						if(Object.prototype.hasOwnProperty.call(b, m)) switch(f =
							b[m], typeof f) {
							case "undefined":
							case "unknown":
							case "function":
								break;
							default:
								d && k.push(","), d = 1, k.push(p(m) + ":" + p(f))
						}
						k.push("}");
					return k.join("")
			}
		}
	}();
	mt.lang = {};
	mt.lang.d = function(a, e) {
		return "[object " + e + "]" === {}.toString.call(a)
	};
	mt.lang.yb = function(a) {
		return mt.lang.d(a, "Number") && isFinite(a)
	};
	mt.lang.Ab = function(a) {
		return mt.lang.d(a, "String")
	};
	mt.lang.h = function(a) {
		return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
	};
	mt.localStorage = {};
	mt.localStorage.L = function() {
		if(!mt.localStorage.i) try {
			mt.localStorage.i = document.createElement("input"), mt.localStorage.i.type = "hidden", mt.localStorage.i.style.display = "none", mt.localStorage.i.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)
		} catch(a) {
			return v
		}
		return r
	};
	mt.localStorage.set = function(a, e, d) {
		var b = new Date;
		b.setTime(b.getTime() + d || 31536E6);
		try {
			window.localStorage ? (e = b.getTime() + "|" + e, window.localStorage.setItem(a, e)) : mt.localStorage.L() && (mt.localStorage.i.expires = b.toUTCString(), mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.setAttribute(a, e), mt.localStorage.i.save(document.location.hostname))
		} catch(g) {}
	};
	mt.localStorage.get = function(a) {
		if(window.localStorage) {
			if(a = window.localStorage.getItem(a)) {
				var e = a.indexOf("|"),
					d = a.substring(0, e) - 0;
				if(d && d > (new Date).getTime()) return a.substring(e + 1)
			}
		} else if(mt.localStorage.L()) try {
			return mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.getAttribute(a)
		} catch(b) {}
		return u
	};
	mt.localStorage.remove = function(a) {
		if(window.localStorage) window.localStorage.removeItem(a);
		else if(mt.localStorage.L()) try {
			mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.removeAttribute(a), mt.localStorage.i.save(document.location.hostname)
		} catch(e) {}
	};
	mt.sessionStorage = {};
	mt.sessionStorage.set = function(a, e) {
		if(window.sessionStorage) try {
			window.sessionStorage.setItem(a, e)
		} catch(d) {}
	};
	mt.sessionStorage.get = function(a) {
		return window.sessionStorage ? window.sessionStorage.getItem(a) : u
	};
	mt.sessionStorage.remove = function(a) {
		window.sessionStorage && window.sessionStorage.removeItem(a)
	};
	mt.la = {};
	mt.la.log = function(a, e) {
		var d = new Image,
			b = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
		window[b] = d;
		d.onload = d.onerror = d.onabort = function() {
			d.onload = d.onerror = d.onabort = u;
			d = window[b] = u;
			e && e(a)
		};
		d.src = a
	};
	mt.K = {};
	mt.K.Ra = function() {
		var a = "";
		if(navigator.plugins && navigator.mimeTypes.length) {
			var e = navigator.plugins["Shockwave Flash"];
			e && e.description && (a = e.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
		} else if(window.ActiveXObject) try {
			if(e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = e.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
		} catch(d) {}
		return a
	};
	mt.K.za = function(a, e, d, b, g) {
		return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + b + '"><param name="movie" value="' + e + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + b + '" src="' + e + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
	};
	mt.url = {};
	mt.url.k = function(a, e) {
		var d = a.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
		return d ? d[3] : u
	};
	mt.url.xb = function(a) {
		return(a = a.match(/^(https?:)\/\//)) ? a[1] : u
	};
	mt.url.Ka = function(a) {
		return(a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : u
	};
	mt.url.ba = function(a) {
		return(a = mt.url.Ka(a)) ? a.replace(/:\d+$/, "") : a
	};
	mt.url.R = function(a) {
		return(a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : u
	};
	(function() {
		function a() {
			for(var a = v, d = document.getElementsByTagName("script"), b = d.length, b = 100 < b ? 100 : b, g = 0; g < b; g++) {
				var m = d[g].src;
				if(m && 0 === m.indexOf("https://hm.baidu.com/h")) {
					a = r;
					break
				}
			}
			return a
		}
		return h.Fa = a
	})();
	var x = h.Fa;
	h.l = {
		Za: "http://tongji.baidu.com/hm-web/welcome/ico",
		V: "hm.baidu.com/hm.gif",
		sa: "baidu.com",
		Wa: "hmmd",
		Xa: "hmpl",
		tb: "utm_medium",
		Va: "hmkw",
		vb: "utm_term",
		Ta: "hmci",
		rb: "utm_content",
		Ya: "hmsr",
		ub: "utm_source",
		Ua: "hmcu",
		qb: "utm_campaign",
		z: 0,
		o: Math.round(+new Date / 1E3),
		Z: Math.round(+new Date / 1E3) % 65535,
		protocol: "https:" === document.location.protocol ? "https:" : "http:",
		H: x() || "https:" === document.location.protocol ? "https:" : "http:",
		zb: 0,
		xa: 6E5,
		ib: 5E3,
		ya: 5,
		Y: 1024,
		wa: 1,
		w: 2147483647,
		ma: "cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")
	};
	(function() {
		var a = {
			s: {},
			c: function(a, d) {
				this.s[a] = this.s[a] || [];
				this.s[a].push(d)
			},
			B: function(a, d) {
				this.s[a] = this.s[a] || [];
				for(var b = this.s[a].length, g = 0; g < b; g++) this.s[a][g](d)
			}
		};
		return h.p = a
	})();
	(function() {
		function a(a, b) {
			var g = document.createElement("script");
			g.charset = "utf-8";
			e.d(b, "Function") && (g.readyState ? g.onreadystatechange = function() {
				if("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = u, b()
			} : g.onload = function() {
				b()
			});
			g.src = a;
			var m = document.getElementsByTagName("script")[0];
			m.parentNode.insertBefore(g, m)
		}
		var e = mt.lang;
		return h.load = a
	})();
	(function() {
		function a() {
			var a = "";
			h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? d.set("Hm_from_" + c.id, a) : e.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? d.get("Hm_from_" + c.id) : e.get("Hm_from_" + c.id)) || "";
			return a
		}
		var e = mt.localStorage,
			d = mt.sessionStorage;
		return h.$ = a
	})();
	(function() {
		var a = h.l,
			e = mt.K,
			d = {
				init: function() {
					if("" !== c.icon) {
						var b;
						b = c.icon.split("|");
						var d = a.Za + "?s=" + c.id,
							m = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + b[0] + "." + b[1];
						switch(b[1]) {
							case "swf":
								b = e.za("HolmesIcon" + a.o, m, b[2], b[3], "s=" + d);
								break;
							case "gif":
								b = '<a href="' + d + '" target="_blank"><img border="0" src="' + m + '" width="' + b[2] + '" height="' + b[3] + '"></a>';
								break;
							default:
								b = '<a href="' + d + '" target="_blank">' + b[0] + "</a>"
						}
						document.write(b)
					}
				}
			};
		h.p.c("pv-b", d.init);
		return d
	})();
	(function() {
		var a = mt.g,
			e = mt.event,
			d = {
				oa: function() {
					e.c(document, "click", d.Ca());
					for(var b = c.etrk.length, g = 0; g < b; g++) {
						var m = c.etrk[g],
							k = decodeURIComponent(String(m.id)); - 1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.P(decodeURIComponent(k))) && e.c(k, m.eventType, d.N()))
					}
				},
				N: function() {
					return function(a) {
						(a.target || a.srcElement).setAttribute("HM_fix", a.clientX + ":" + a.clientY);
						d.ha("#" + encodeURIComponent(this.id), a.type)
					}
				},
				Ca: function() {
					return function(b) {
						var e = b.target || b.srcElement;
						if(e) {
							var m = e.getAttribute("HM_fix");
							b = b.clientX + ":" + b.clientY;
							if(m && m == b) e.removeAttribute("HM_fix");
							else if(0 < c.etrk.length && (e = a.Oa(e)) && e.length)
								if(m = e.length, b = e[e.length - 1], 1E4 > m * b.split(">").length)
									for(b = 0; b < m; b++) d.ka(e[b]);
								else d.ka(b)
						}
					}
				},
				ka: function(a) {
					for(var e = {}, m = String(a).split(">").length, k = 0; k < m; k++) e[a] = "", a = a.substring(0, a.lastIndexOf(">"));
					a = c.etrk.length;
					for(m = 0; m < a; m++) k = decodeURIComponent(String(c.etrk[m].id)), e.hasOwnProperty(k) && d.ha(k)
				},
				ha: function(a, d) {
					h.b.a.et = 1;
					h.b.a.ep =
						"{id:" + a + ",eventType:" + (d || "click") + "}";
					h.b.j()
				}
			};
		h.p.c("pv-b", d.oa);
		return d
	})();
	(function() {
		var a = mt.g,
			e = mt.lang,
			d = mt.event,
			b = mt.f,
			g = h.l,
			m = h.p,
			k = [],
			p = {
				na: function() {
					c.ctrk && (d.c(document, "mouseup", p.va()), d.c(window, "unload", function() {
						p.I()
					}), setInterval(function() {
						p.I()
					}, g.xa))
				},
				va: function() {
					return function(a) {
						a = p.Ha(a);
						if("" !== a) {
							var d = (g.H + "//" + g.V + "?" + h.b.ia().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
							d + (g.w + "").length > g.Y || (d + encodeURIComponent(k.join("!") + (k.length ? "!" : "")).length + (g.w + "").length > g.Y && p.I(), k.push(a), (k.length >= g.ya || /\*a\*/.test(a)) && p.I())
						}
					}
				},
				Ha: function(l) {
					var d = l.target || l.srcElement;
					if(0 === g.wa) {
						var n = (d.tagName || "").toLowerCase();
						if("embed" == n || "object" == n) return ""
					}
					var s;
					b.da ? (s = Math.max(document.documentElement.scrollTop, document.body.scrollTop), n = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), n = l.clientX + n, s = l.clientY + s) : (n = l.pageX, s = l.pageY);
					l = p.La(l, d, n, s);
					var f = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
					switch(c.align) {
						case 1:
							n -= f / 2;
							break;
						case 2:
							n -= f
					}
					f = [];
					f.push(n);
					f.push(s);
					f.push(l.bb);
					f.push(l.cb);
					f.push(l.fb);
					f.push(e.h(l.eb));
					f.push(l.wb);
					f.push(l.Sa);
					(d = "a" === (d.tagName || "").toLowerCase() ? d : a.Ga(d)) ? (f.push("a"), f.push(e.h(encodeURIComponent(d.href)))) : f.push("b");
					return f.join("*")
				},
				La: function(l, d, n, s) {
					l = a.Pa(d);
					var f = 0,
						t = 0,
						k = 0,
						g = 0;
					if(d && (f = d.offsetWidth || d.clientWidth, t = d.offsetHeight || d.clientHeight, g = a.Ma(d), k = g.left, g = g.top, e.d(d.getBBox, "Function") && (t = d.getBBox(), f = t.width, t = t.height), "html" === (d.tagName || "").toLowerCase())) f = Math.max(f, d.clientWidth),
						t = Math.max(t, d.clientHeight);
					return {
						bb: Math.round(100 * ((n - k) / f)),
						cb: Math.round(100 * ((s - g) / t)),
						fb: b.orientation,
						eb: l,
						wb: f,
						Sa: t
					}
				},
				I: function() {
					0 !== k.length && (h.b.a.et = 2, h.b.a.ep = k.join("!"), h.b.j(), k = [])
				}
			},
			f = {
				qa: function() {
					c.ctrk && setInterval(f.jb, g.ib)
				},
				jb: function() {
					var a = b.C() + b.D();
					0 < a - h.b.a.vl && (h.b.a.vl = a)
				}
			};
		m.c("pv-b", p.na);
		m.c("pv-b", f.qa);
		return p
	})();
	(function() {
		var a = mt.g,
			e = h.l,
			d = h.load,
			b = h.$;
		h.p.c("pv-b", function() {
			var g = e.protocol + "//crs.baidu.com/";
			c.rec && a.ga(function() {
				for(var m = 0, k = c.rp.length; m < k; m++) {
					var p = c.rp[m][0],
						f = c.rp[m][1],
						l = a.P("hm_t_" + p);
					if(f && !(2 == f && !l || l && "" !== l.innerHTML)) l = "", l = Math.round(Math.random() * e.w), l = 4 == f ? g + "hl.js?" + ["siteId=" + c.id, "planId=" + p, "rnd=" + l].join("&") : g + "t.js?" + ["siteId=" + c.id, "planId=" + p, "from=" + b(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
						l
					].join("&"), d(l)
				}
			})
		})
	})();
	(function() {
		var a = h.l,
			e = h.load,
			d = h.$;
		h.p.c("pv-b", function() {
			if(c.trust && c.vcard) {
				var b = "https://tag.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + d(), "rnd=" + Math.round(Math.random() * a.w), "hm=1"].join("&");
				e(b)
			}
		})
	})();
	(function() {
		function a() {
			return function() {
				h.b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.M.Na() + "," + h.M.Ja();
				h.b.j()
			}
		}

		function e() {
			clearTimeout(C);
			var a;
			t && (a = "visible" == document[t]);
			B && (a = !document[B]);
			p = "undefined" == typeof a ? r : a;
			if((!k || !f) && p && l) y = r, n = +new Date;
			else if(k && f && (!p || !l)) y = v, s += +new Date - n;
			k = p;
			f = l;
			C = setTimeout(e, 100)
		}

		function d(a) {
			var l = document,
				d = "";
			if(a in l) d = a;
			else
				for(var n = ["webkit", "ms", "moz", "o"], e = 0; e < n.length; e++) {
					var b = n[e] + a.charAt(0).toUpperCase() + a.slice(1);
					if(b in l) {
						d =
							b;
						break
					}
				}
			return d
		}

		function b(a) {
			if(!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) l = "focus" == a.type || "focusin" == a.type ? r : v, e()
		}
		var g = mt.event,
			m = h.p,
			k = r,
			p = r,
			f = r,
			l = r,
			w = +new Date,
			n = w,
			s = 0,
			y = r,
			t = d("visibilityState"),
			B = d("hidden"),
			C;
		e();
		(function() {
			var a = t.replace(/[vV]isibilityState/, "visibilitychange");
			g.c(document, a, e);
			g.c(window, "pageshow", e);
			g.c(window, "pagehide", e);
			"object" == typeof document.onfocusin ? (g.c(document, "focusin", b), g.c(document, "focusout", b)) : (g.c(window, "focus", b),
				g.c(window, "blur", b))
		})();
		h.M = {
			Na: function() {
				return +new Date - w
			},
			Ja: function() {
				return y ? +new Date - n + s : s
			}
		};
		m.c("pv-b", function() {
			g.c(window, "unload", a())
		});
		return h.M
	})();
	(function() {
		var a = mt.lang,
			e = h.l,
			d = h.load,
			b = {
				ab: function(b) {
					if((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
						var m = h.b.Q();
						d([e.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(m)].join(""), b)
					}
				},
				pb: function(d) {
					if(a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
				}
			};
		return h.Aa = b
	})();
	(function() {
		function a(a, d, n, b) {
			if(!(a === q || d === q || b === q)) {
				if("" === a) return [d, n, b].join("*");
				a = String(a).split("!");
				for(var e, f = v, k = 0; k < a.length; k++)
					if(e = a[k].split("*"), String(d) === e[0]) {
						e[1] = n;
						e[2] = b;
						a[k] = e.join("*");
						f = r;
						break
					}
				f || a.push([d, n, b].join("*"));
				return a.join("!")
			}
		}

		function e(a) {
			for(var b in a)
				if({}.hasOwnProperty.call(a, b)) {
					var n = a[b];
					d.d(n, "Object") || d.d(n, "Array") ? e(n) : a[b] = String(n)
				}
		}
		var d = mt.lang,
			b = mt.m,
			g = mt.f,
			m = h.l,
			k = h.p,
			p = h.Aa,
			f = {
				A: [],
				J: 0,
				ea: v,
				r: {
					X: "",
					page: ""
				},
				init: function() {
					f.e =
						0;
					k.c("pv-b", function() {
						f.Ba();
						f.Da()
					});
					k.c("pv-d", function() {
						f.Ea();
						f.r.page = ""
					});
					k.c("stag-b", function() {
						h.b.a.api = f.e || f.J ? f.e + "_" + f.J : "";
						h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), f.r.X, f.r.page].join("!")
					});
					k.c("stag-d", function() {
						h.b.a.api = 0;
						f.e = 0;
						f.J = 0
					})
				},
				Ba: function() {
					var a = window._hmt || [];
					if(!a || d.d(a, "Array")) window._hmt = {
						id: c.id,
						cmd: {},
						push: function() {
							for(var a = window._hmt, l = 0; l < arguments.length; l++) {
								var b = arguments[l];
								d.d(b, "Array") && (a.cmd[a.id].push(b), "_setAccount" ===
									b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
							}
						}
					}, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
				},
				Da: function() {
					var a = window._hmt;
					if(a && a.cmd && a.cmd[c.id])
						for(var d = a.cmd[c.id], b = /^_track(Event|MobConv|Order|RTEvent)$/, e = 0, k = d.length; e < k; e++) {
							var t = d[e];
							b.test(t[0]) ? f.A.push(t) : f.U(t)
						}
					a.cmd[c.id] = {
						push: f.U
					}
				},
				Ea: function() {
					if(0 < f.A.length)
						for(var a = 0, d = f.A.length; a < d; a++) f.U(f.A[a]);
					f.A = u
				},
				U: function(a) {
					var b = a[0];
					if(f.hasOwnProperty(b) && d.d(f[b],
							"Function")) f[b](a)
				},
				_setAccount: function(a) {
					1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (f.e |= 1)
				},
				_setAutoPageview: function(a) {
					if(1 < a.length && (a = a[1], v === a || r === a)) f.e |= 2, h.b.ca = a
				},
				_trackPageview: function(a) {
					if(1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
						f.e |= 4;
						h.b.a.et = 0;
						h.b.a.ep = "";
						h.b.a.vl = g.C() + g.D();
						h.b.S ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.S = r;
						var d = h.b.a.u,
							b = h.b.a.su;
						h.b.a.u = m.protocol + "//" + document.location.host + a[1];
						f.ea || (h.b.a.su = document.location.href);
						h.b.j();
						h.b.a.u = d;
						h.b.a.su = b
					}
				},
				_trackEvent: function(a) {
					2 <
						a.length && (f.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = d.h(a[1]) + "*" + d.h(a[2]) + (a[3] ? "*" + d.h(a[3]) : "") + (a[4] ? "*" + d.h(a[4]) : ""), h.b.j())
				},
				_setCustomVar: function(a) {
					if(!(4 > a.length)) {
						var b = a[1],
							e = a[4] || 3;
						if(0 < b && 6 > b && 0 < e && 4 > e) {
							f.J++;
							for(var k = (h.b.a.cv || "*").split("!"), g = k.length; g < b - 1; g++) k.push("*");
							k[b - 1] = e + "*" + d.h(a[2]) + "*" + d.h(a[3]);
							h.b.a.cv = k.join("!");
							a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
							"" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.gb("Hm_cv_" +
								c.id)
						}
					}
				},
				_setUserTag: function(b) {
					if(!(3 > b.length)) {
						var e = d.h(b[1]);
						b = d.h(b[2]);
						if(e !== q && b !== q) {
							var n = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""),
								n = a(n, e, 1, b);
							h.b.setData("Hm_ct_" + c.id, encodeURIComponent(n), c.age)
						}
					}
				},
				_setVisitTag: function(b) {
					if(!(3 > b.length)) {
						var e = d.h(b[1]);
						b = d.h(b[2]);
						if(e !== q && b !== q) {
							var n = f.r.X,
								n = a(n, e, 2, b);
							f.r.X = n
						}
					}
				},
				_setPageTag: function(b) {
					if(!(3 > b.length)) {
						var e = d.h(b[1]);
						b = d.h(b[2]);
						if(e !== q && b !== q) {
							var n = f.r.page,
								n = a(n, e, 3, b);
							f.r.page = n
						}
					}
				},
				_setReferrerOverride: function(a) {
					1 <
						a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? m.protocol + "//" + window.location.host + a[1] : a[1], f.ea = r)
				},
				_trackOrder: function(a) {
					a = a[1];
					d.d(a, "Object") && (e(a), f.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = b.stringify(a), h.b.j())
				},
				_trackMobConv: function(a) {
					if(a = {
							webim: 1,
							tel: 2,
							map: 3,
							sms: 4,
							callback: 5,
							share: 6
						}[a[1]]) f.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.j()
				},
				_trackRTPageview: function(a) {
					a = a[1];
					d.d(a, "Object") && (e(a), a = b.stringify(a), 512 >= encodeURIComponent(a).length && (f.e |= 64, h.b.a.rt = a))
				},
				_trackRTEvent: function(a) {
					a =
						a[1];
					if(d.d(a, "Object")) {
						e(a);
						a = encodeURIComponent(b.stringify(a));
						var k = function(a) {
								var b = h.b.a.rt;
								f.e |= 128;
								h.b.a.et = 90;
								h.b.a.rt = a;
								h.b.j();
								h.b.a.rt = b
							},
							n = a.length;
						if(900 >= n) k.call(this, a);
						else
							for(var n = Math.ceil(n / 900), s = "block|" + Math.round(Math.random() * m.w).toString(16) + "|" + n + "|", g = [], t = 0; t < n; t++) g.push(t), g.push(a.substring(900 * t, 900 * t + 900)), k.call(this, s + g.join("|")), g = []
					}
				},
				_setUserId: function(a) {
					a = a[1];
					p.ab();
					p.pb(a)
				}
			};
		f.init();
		h.ta = f;
		return h.ta
	})();
	(function() {
		function a() {
			"undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = r, this.a = {}, this.ca = r, this.S = v, this.init())
		}
		var e = mt.url,
			d = mt.la,
			b = mt.K,
			g = mt.lang,
			m = mt.cookie,
			k = mt.f,
			p = mt.localStorage,
			f = mt.sessionStorage,
			l = h.l,
			w = h.p;
		a.prototype = {
			T: function(a, b) {
				a = "." + a.replace(/:\d+/, "");
				b = "." + b.replace(/:\d+/, "");
				var d = a.indexOf(b);
				return -1 < d && d + b.length === a.length
			},
			fa: function(a, b) {
				a = a.replace(/^https?:\/\//, "");
				return 0 === a.indexOf(b)
			},
			F: function(a) {
				for(var b = 0; b < c.dm.length; b++)
					if(-1 <
						c.dm[b].indexOf("/")) {
						if(this.fa(a, c.dm[b])) return r
					} else {
						var d = e.ba(a);
						if(d && this.T(d, c.dm[b])) return r
					}
				return v
			},
			Q: function() {
				for(var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
					if(this.T(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
				return a
			},
			aa: function() {
				for(var a = 0, b = c.dm.length; a < b; a++) {
					var d = c.dm[a];
					if(-1 < d.indexOf("/") && this.fa(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
				}
				return "/"
			},
			Qa: function() {
				if(!document.referrer) return l.o - l.z > c.vdur ? 1 :
					4;
				var a = v;
				this.F(document.referrer) && this.F(document.location.href) ? a = r : (a = e.ba(document.referrer), a = this.T(a || "", document.location.hostname));
				return a ? l.o - l.z > c.vdur ? 1 : 4 : 3
			},
			getData: function(a) {
				try {
					return m.get(a) || f.get(a) || p.get(a)
				} catch(b) {}
			},
			setData: function(a, b, d) {
				try {
					m.set(a, b, {
						domain: this.Q(),
						path: this.aa(),
						O: d
					}), d ? p.set(a, b, d) : f.set(a, b)
				} catch(e) {}
			},
			gb: function(a) {
				try {
					m.set(a, "", {
						domain: this.Q(),
						path: this.aa(),
						O: -1
					}), f.remove(a), p.remove(a)
				} catch(b) {}
			},
			nb: function() {
				var a, b, d, e, f;
				l.z = this.getData("Hm_lpvt_" +
					c.id) || 0;
				13 === l.z.length && (l.z = Math.round(l.z / 1E3));
				b = this.Qa();
				a = 4 !== b ? 1 : 0;
				if(d = this.getData("Hm_lvt_" + c.id)) {
					e = d.split(",");
					for(f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
					for(; 2592E3 < l.o - e[0];) e.shift();
					f = 4 > e.length ? 2 : 3;
					for(1 === a && e.push(l.o); 4 < e.length;) e.shift();
					d = e.join(",");
					e = e[e.length - 1]
				} else d = l.o, e = "", f = 1;
				this.setData("Hm_lvt_" + c.id, d, c.age);
				this.setData("Hm_lpvt_" + c.id, l.o);
				d = l.o === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
				if(0 === c.nv && this.F(document.location.href) &&
					("" === document.referrer || this.F(document.referrer))) a = 0, b = 4;
				this.a.nv = a;
				this.a.st = b;
				this.a.cc = d;
				this.a.lt = e;
				this.a.lv = f
			},
			ia: function() {
				for(var a = [], b = this.a.et, d = 0, e = l.ma.length; d < e; d++) {
					var f = l.ma[d],
						k = this.a[f];
					"undefined" !== typeof k && "" !== k && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(k))
				}
				switch(b) {
					case 0:
						a.push("sn=" + l.Z);
						this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
						break;
					case 3:
						a.push("sn=" + l.Z);
						break;
					case 90:
						this.a.rt && a.push("rt=" + this.a.rt)
				}
				return a.join("&")
			},
			ob: function() {
				this.nb();
				this.a.si = c.id;
				this.a.su = document.referrer;
				this.a.ds = k.hb;
				this.a.cl = k.colorDepth + "-bit";
				this.a.ln = String(k.language).toLowerCase();
				this.a.ja = k.javaEnabled ? 1 : 0;
				this.a.ck = k.cookieEnabled ? 1 : 0;
				this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
				this.a.fl = b.Ra();
				this.a.v = "1.2.27";
				this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
				this.a.tt = document.title || "";
				this.a.vl = k.C() + k.D();
				var a = document.location.href;
				this.a.cm = e.k(a, l.Wa) || "";
				this.a.cp = e.k(a, l.Xa) || e.k(a, l.tb) || "";
				this.a.cw =
					e.k(a, l.Va) || e.k(a, l.vb) || "";
				this.a.ci = e.k(a, l.Ta) || e.k(a, l.rb) || "";
				this.a.cf = e.k(a, l.Ya) || e.k(a, l.ub) || "";
				this.a.cu = e.k(a, l.Ua) || e.k(a, l.qb) || ""
			},
			init: function() {
				try {
					this.ob(), 0 === this.a.nv ? this.mb() : this.W(".*"), h.b = this, this.ua(), w.B("pv-b"), this.lb()
				} catch(a) {
					var b = [];
					b.push("si=" + c.id);
					b.push("n=" + encodeURIComponent(a.name));
					b.push("m=" + encodeURIComponent(a.message));
					b.push("r=" + encodeURIComponent(document.referrer));
					d.log(l.H + "//" + l.V + "?" + b.join("&"))
				}
			},
			lb: function() {
				function a() {
					w.B("pv-d")
				}
				this.ca ? (this.S = r, this.a.et = 0, this.a.ep = "", this.a.vl = k.C() + k.D(), this.j(a)) : a()
			},
			j: function(a) {
				var b = this;
				b.a.rnd = Math.round(Math.random() * l.w);
				w.B("stag-b");
				var e = l.H + "//" + l.V + "?" + b.ia();
				w.B("stag-d");
				b.ra(e);
				d.log(e, function(d) {
					b.W(d);
					g.d(a, "Function") && a.call(b)
				})
			},
			ua: function() {
				var a = document.location.hash.substring(1),
					b = RegExp(c.id),
					d = -1 < document.referrer.indexOf(l.sa),
					f = e.k(a, "jn"),
					k = /^heatlink$|^select$|^pageclick$/.test(f);
				a && (b.test(a) && d && k) && (this.a.rnd = Math.round(Math.random() * l.w), a =
					document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", l.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
			},
			ra: function(a) {
				var b = f.get("Hm_unsent_" + c.id) || "",
					d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
					b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
				f.set("Hm_unsent_" + c.id, b)
			},
			W: function(a) {
				var b = f.get("Hm_unsent_" + c.id) ||
					"";
				b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? f.set("Hm_unsent_" + c.id, b) : f.remove("Hm_unsent_" + c.id))
			},
			mb: function() {
				var a = this,
					b = f.get("Hm_unsent_" + c.id);
				if(b)
					for(var b = b.split(","), e = function(b) {
							d.log(l.H + "//" + decodeURIComponent(b), function(b) {
								a.W(b)
							})
						}, k = 0, g = b.length; k < g; k++) e(b[k])
			}
		};
		return new a
	})();
	var z = h.l,
		A = h.load;
	if(c.apps) {
		var D = [z.protocol, "//ers.baidu.com/app/s.js?"];
		D.push(c.apps);
		A(D.join(""))
	}
	var E = h.l,
		F = h.load;
	c.lxb && F([E.protocol, "//lxbjs.baidu.com/lxb.js?sid=", c.lxb].join(""));
	var G = h.load,
		H = h.l.protocol;
	if(c.qiao) {
		for(var I = [H + "//goutong.baidu.com/site/"], J = c.id, K = 5381, L = J.length, M = 0; M < L; M++) K = (33 * K + Number(J.charCodeAt(M))) % 4294967296;
		2147483648 < K && (K -= 2147483648);
		I.push(K % 1E3 + "/");
		I.push(c.id + "/b.js");
		I.push("?siteId=" + c.qiao);
		G(I.join(""))
	}
	(function() {
		var a = mt.event,
			e = mt.m;
		try {
			if(window.performance && performance.timing && "undefined" !== typeof h.b) {
				var d = function(a) {
						var b = performance.timing,
							d = b[a + "Start"] ? b[a + "Start"] : 0;
						a = b[a + "End"] ? b[a + "End"] : 0;
						return {
							start: d,
							end: a,
							value: 0 < a - d ? a - d : 0
						}
					},
					b = function() {
						var a;
						a = d("navigation");
						var b = d("request");
						a = {
							netAll: b.start - a.start,
							netDns: d("domainLookup").value,
							netTcp: d("connect").value,
							srv: d("response").start - b.start,
							dom: performance.timing.domInteractive - performance.timing.fetchStart,
							loadEvent: d("loadEvent").end -
								a.start
						};
						h.b.a.et = 87;
						h.b.a.ep = e.stringify(a);
						h.b.j()
					};
				a.c(window, "load", function() {
					setTimeout(b, 500)
				})
			}
		} catch(g) {}
	})();
	(function() {
		var a = mt.f,
			e = mt.lang,
			d = mt.event,
			b = mt.m;
		if("undefined" !== typeof h.b && (c.med || (!a.da || 7 < a.$a) && c.cvcc)) {
			var g, m, k, p, f = function(a) {
					if(a.item) {
						for(var b = a.length, d = Array(b); b--;) d[b] = a[b];
						return d
					}
					return [].slice.call(a)
				},
				l = function(a, b) {
					for(var d in a)
						if(a.hasOwnProperty(d) && b.call(a, d, a[d]) === v) return v
				},
				w = function(a, d) {
					var f = {};
					f.n = g;
					f.t = "clk";
					f.v = a;
					if(d) {
						var l = d.getAttribute("href"),
							m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : u,
							n = d.getAttribute("id") || "";
						k.test(l) ? (f.sn = "mediate",
							f.snv = l) : e.d(m, "String") && k.test(m) && (f.sn = "wrap", f.snv = m);
						f.id = n
					}
					h.b.a.et = 86;
					h.b.a.ep = b.stringify(f);
					h.b.j();
					for(f = +new Date; 400 >= +new Date - f;);
				};
			if(c.med) m = "/zoosnet", g = "swt", k = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
				click: function() {
					for(var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g = 0, l = b.length; g < l; g++) d = b[g], e = d.getAttribute("onclick"),
						d = d.getAttribute("href"), (k.test(e) || k.test(d)) && a.push(b[g]);
					return a
				}
			};
			else if(c.cvcc) {
				m = "/other-comm";
				g = "other";
				k = c.cvcc.q || q;
				var n = c.cvcc.id || q;
				p = {
					click: function() {
						for(var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g, l = 0, m = b.length; l < m; l++) d = b[l], k !== q ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), n ? (d = d.getAttribute("id"), (k.test(e) || k.test(g) || n.test(d)) &&
							a.push(b[l])) : (k.test(e) || k.test(g)) && a.push(b[l])) : n !== q && (d = d.getAttribute("id"), n.test(d) && a.push(b[l]));
						return a
					}
				}
			}
			if("undefined" !== typeof p && "undefined" !== typeof k) {
				var s;
				m += /\/$/.test(m) ? "" : "/";
				var y = function(a, b) {
					if(s === b) return w(m + a, b), v;
					if(e.d(b, "Array") || e.d(b, "NodeList"))
						for(var d = 0, f = b.length; d < f; d++)
							if(s === b[d]) return w(m + a + "/" + (d + 1), b[d]), v
				};
				d.c(document, "mousedown", function(a) {
					a = a || window.event;
					s = a.target || a.srcElement;
					var b = {};
					for(l(p, function(a, d) {
							b[a] = e.d(d, "Function") ? d() : document.getElementById(d)
						}); s &&
						s !== document && l(b, y) !== v;) s = s.parentNode
				})
			}
		}
	})();
	(function() {
		var a = mt.g,
			e = mt.lang,
			d = mt.event,
			b = mt.m;
		if("undefined" !== typeof h.b && e.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
			var g = {
				pa: function() {
					for(var b = c.cvcf.length, e, p = 0; p < b; p++)(e = a.P(decodeURIComponent(c.cvcf[p]))) && d.c(e, "click", g.N())
				},
				N: function() {
					return function() {
						h.b.a.et = 86;
						var a = {
							n: "form",
							t: "clk"
						};
						a.id = this.id;
						h.b.a.ep = b.stringify(a);
						h.b.j()
					}
				}
			};
			a.ga(function() {
				g.pa()
			})
		}
	})();
	(function() {
		var a = mt.event,
			e = mt.m;
		if(c.med && "undefined" !== typeof h.b) {
			var d = +new Date,
				b = {
					n: "anti",
					sb: 0,
					kb: 0,
					clk: 0
				},
				g = function() {
					h.b.a.et = 86;
					h.b.a.ep = e.stringify(b);
					h.b.j()
				};
			a.c(document, "click", function() {
				b.clk++
			});
			a.c(document, "keyup", function() {
				b.kb = 1
			});
			a.c(window, "scroll", function() {
				b.sb++
			});
			a.c(window, "unload", function() {
				b.t = +new Date - d;
				g()
			});
			a.c(window, "load", function() {
				setTimeout(g, 5E3)
			})
		}
	})();
})();