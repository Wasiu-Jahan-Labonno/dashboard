/*
 CanvasJS HTML5 & JavaScript Charts - v3.4.5 GA - https://canvasjs.com/ 
 Copyright 2021 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function () {
    function oa(g, l) {
        g.prototype = cb(l.prototype);
        g.prototype.constructor = g;
        g.base = l.prototype;
    }
    function cb(g) {
        function l() {}
        l.prototype = g;
        return new l();
    }
    function Va(g, l, v) {
        "millisecond" === v
            ? g.setMilliseconds(g.getMilliseconds() + 1 * l)
            : "second" === v
            ? g.setSeconds(g.getSeconds() + 1 * l)
            : "minute" === v
            ? g.setMinutes(g.getMinutes() + 1 * l)
            : "hour" === v
            ? g.setHours(g.getHours() + 1 * l)
            : "day" === v
            ? g.setDate(g.getDate() + 1 * l)
            : "week" === v
            ? g.setDate(g.getDate() + 7 * l)
            : "month" === v
            ? g.setMonth(g.getMonth() + 1 * l)
            : "year" === v && g.setFullYear(g.getFullYear() + 1 * l);
        return g;
    }
    function X(g, l) {
        var v = !1;
        0 > g && ((v = !0), (g *= -1));
        g = "" + g;
        for (l = l ? l : 1; g.length < l; ) g = "0" + g;
        return v ? "-" + g : g;
    }
    function Fa(g) {
        if (!g) return g;
        g = g.replace(/^\s\s*/, "");
        for (var l = /\s/, v = g.length; l.test(g.charAt(--v)); );
        return g.slice(0, v + 1);
    }
    function Ba(g) {
        g.roundRect = function (g, v, s, w, ra, E, y, F) {
            y && (this.fillStyle = y);
            F && (this.strokeStyle = F);
            "undefined" === typeof ra && (ra = 5);
            this.lineWidth = E;
            this.beginPath();
            this.moveTo(g + ra, v);
            this.lineTo(g + s - ra, v);
            this.quadraticCurveTo(g + s, v, g + s, v + ra);
            this.lineTo(g + s, v + w - ra);
            this.quadraticCurveTo(g + s, v + w, g + s - ra, v + w);
            this.lineTo(g + ra, v + w);
            this.quadraticCurveTo(g, v + w, g, v + w - ra);
            this.lineTo(g, v + ra);
            this.quadraticCurveTo(g, v, g + ra, v);
            this.closePath();
            y && this.fill();
            F && 0 < E && this.stroke();
        };
    }
    function Pa(g, l) {
        return g - l;
    }
    function P(g) {
        var l = ((g & 16711680) >> 16).toString(16),
            v = ((g & 65280) >> 8).toString(16);
        g = ((g & 255) >> 0).toString(16);
        l = 2 > l.length ? "0" + l : l;
        v = 2 > v.length ? "0" + v : v;
        g = 2 > g.length ? "0" + g : g;
        return "#" + l + v + g;
    }
    function db(g, l) {
        var v = this.length >>> 0,
            s = Number(l) || 0,
            s = 0 > s ? Math.ceil(s) : Math.floor(s);
        for (0 > s && (s += v); s < v; s++) if (s in this && this[s] === g) return s;
        return -1;
    }
    function s(g) {
        return null === g || "undefined" === typeof g;
    }
    function Ca(g) {
        g.indexOf || (g.indexOf = db);
        return g;
    }
    function eb(g) {
        if (S.fSDec)
            g[W("`eeDwdouMhrudods")](W("e`u`@ohl`uhnoHuds`uhnoDoe"), function () {
                S._fTWm && S._fTWm(g);
            });
    }
    function Wa(g, l, v) {
        v = v || "normal";
        var s = g + "_" + l + "_" + v,
            w = Xa[s];
        if (isNaN(w)) {
            try {
                g = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + g + "; font-size:" + l + "px; font-weight:" + v + ";";
                if (!wa) {
                    var ra = document.body;
                    wa = document.createElement("span");
                    wa.innerHTML = "";
                    var E = document.createTextNode("Mpgyi");
                    wa.appendChild(E);
                    ra.appendChild(wa);
                }
                wa.style.display = "";
                wa.setAttribute("style", g);
                w = Math.round(wa.offsetHeight);
                wa.style.display = "none";
            } catch (y) {
                w = Math.ceil(1.1 * l);
            }
            w = Math.max(w, l);
            Xa[s] = w;
        }
        return w;
    }
    function N(g, l) {
        var v = [];
        if (
            (v = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2],
            }[g || "solid"])
        )
            for (var s = 0; s < v.length; s++) v[s] *= l;
        else v = [];
        return v;
    }
    function J(g, l, v, w, qa) {
        w = w || [];
        qa = s(qa) ? (fb ? { passive: !1, capture: !1 } : !1) : qa;
        w.push([g, l, v, qa]);
        return g.addEventListener
            ? (g.addEventListener(l, v, qa), v)
            : g.attachEvent
            ? ((w = function (l) {
                  l = l || window.event;
                  l.preventDefault =
                      l.preventDefault ||
                      function () {
                          l.returnValue = !1;
                      };
                  l.stopPropagation =
                      l.stopPropagation ||
                      function () {
                          l.cancelBubble = !0;
                      };
                  v.call(g, l);
              }),
              g.attachEvent("on" + l, w),
              w)
            : !1;
    }
    function gb(g) {
        if (g._menuButton) g.exportEnabled ? (ga(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }), Ka(g._menuButton), (g._menuButton.title = g._cultureInfo.menuText)) : ua(g._menuButton);
        else if (g.exportEnabled && w) {
            var l = !1;
            g._menuButton = document.createElement("button");
            va(g, g._menuButton, "menu");
            g._toolBar.appendChild(g._menuButton);
            J(
                g._menuButton,
                "touchstart",
                function (g) {
                    l = !0;
                },
                g.allDOMEventHandlers
            );
            J(
                g._menuButton,
                "click",
                function () {
                    "none" !== g._dropdownMenu.style.display ||
                        (g._dropDownCloseTime && 500 >= new Date().getTime() - g._dropDownCloseTime.getTime()) ||
                        ((g._dropdownMenu.style.display = "block"), g._menuButton.blur(), g._dropdownMenu.focus());
                },
                g.allDOMEventHandlers,
                !0
            );
            J(
                g._menuButton,
                "mouseover",
                function () {
                    l ||
                        (ga(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColorOnHover, color: g.toolbar.fontColorOnHover }),
                        0 >= navigator.userAgent.search("MSIE") && ga(g._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                },
                g.allDOMEventHandlers,
                !0
            );
            J(
                g._menuButton,
                "mouseout",
                function () {
                    l ||
                        (ga(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }),
                        0 >= navigator.userAgent.search("MSIE") && ga(g._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                },
                g.allDOMEventHandlers,
                !0
            );
        }
        if (g.exportEnabled && g._dropdownMenu) {
            ga(g._dropdownMenu, { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor });
            for (var v = g._dropdownMenu.childNodes, s = [g._cultureInfo.printText, g._cultureInfo.saveJPGText, g._cultureInfo.savePNGText], qa = 0; qa < v.length; qa++)
                ga(v[qa], { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }), (v[qa].innerHTML = s[qa]);
        } else
            !g._dropdownMenu &&
                g.exportEnabled &&
                w &&
                ((l = !1),
                (g._dropdownMenu = document.createElement("div")),
                g._dropdownMenu.setAttribute("tabindex", -1),
                (v = -1 !== g.theme.indexOf("dark") ? "black" : "#888888"),
                (g._dropdownMenu.style.cssText =
                    "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" +
                    g.toolbar.itemBackgroundColor +
                    ";box-shadow: 2px 2px 10px " +
                    v),
                (g._dropdownMenu.style.display = "none"),
                g._toolBar.appendChild(g._dropdownMenu),
                J(
                    g._dropdownMenu,
                    "blur",
                    function () {
                        ua(g._dropdownMenu);
                        g._dropDownCloseTime = new Date();
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                (v = document.createElement("div")),
                (v.style.cssText = "padding: 12px 8px 12px 8px"),
                (v.innerHTML = g._cultureInfo.printText),
                (v.style.backgroundColor = g.toolbar.itemBackgroundColor),
                (v.style.color = g.toolbar.fontColor),
                g._dropdownMenu.appendChild(v),
                J(
                    v,
                    "touchstart",
                    function (g) {
                        l = !0;
                    },
                    g.allDOMEventHandlers
                ),
                J(
                    v,
                    "mouseover",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover), (this.style.color = g.toolbar.fontColorOnHover));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "mouseout",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColor), (this.style.color = g.toolbar.fontColor));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "click",
                    function () {
                        g.print();
                        ua(g._dropdownMenu);
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                (v = document.createElement("div")),
                (v.style.cssText = "padding: 12px 8px 12px 8px"),
                (v.innerHTML = g._cultureInfo.saveJPGText),
                (v.style.backgroundColor = g.toolbar.itemBackgroundColor),
                (v.style.color = g.toolbar.fontColor),
                g._dropdownMenu.appendChild(v),
                J(
                    v,
                    "touchstart",
                    function (g) {
                        l = !0;
                    },
                    g.allDOMEventHandlers
                ),
                J(
                    v,
                    "mouseover",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover), (this.style.color = g.toolbar.fontColorOnHover));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "mouseout",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColor), (this.style.color = g.toolbar.fontColor));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "click",
                    function () {
                        g.exportChart({ format: "jpeg", fileName: g.exportFileName });
                        ua(g._dropdownMenu);
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                (v = document.createElement("div")),
                (v.style.cssText = "padding: 12px 8px 12px 8px"),
                (v.innerHTML = g._cultureInfo.savePNGText),
                (v.style.backgroundColor = g.toolbar.itemBackgroundColor),
                (v.style.color = g.toolbar.fontColor),
                g._dropdownMenu.appendChild(v),
                J(
                    v,
                    "touchstart",
                    function (g) {
                        l = !0;
                    },
                    g.allDOMEventHandlers
                ),
                J(
                    v,
                    "mouseover",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover), (this.style.color = g.toolbar.fontColorOnHover));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "mouseout",
                    function () {
                        l || ((this.style.backgroundColor = g.toolbar.itemBackgroundColor), (this.style.color = g.toolbar.fontColor));
                    },
                    g.allDOMEventHandlers,
                    !0
                ),
                J(
                    v,
                    "click",
                    function () {
                        g.exportChart({ format: "png", fileName: g.exportFileName });
                        ua(g._dropdownMenu);
                    },
                    g.allDOMEventHandlers,
                    !0
                ));
    }
    function Ya(g, l, v) {
        g *= ka;
        l *= ka;
        g = v.getImageData(g, l, 2, 2).data;
        l = !0;
        for (v = 0; 4 > v; v++)
            if ((g[v] !== g[v + 4]) | (g[v] !== g[v + 8]) | (g[v] !== g[v + 12])) {
                l = !1;
                break;
            }
        return l ? (g[0] << 16) | (g[1] << 8) | g[2] : 0;
    }
    function la(g, l, v) {
        return g in l ? l[g] : v[g];
    }
    function La(g, l, v) {
        if (w && Za) {
            var s = g.getContext("2d");
            Ma = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
            ka = Qa / Ma;
            g.width = l * ka;
            g.height = v * ka;
            Qa !== Ma && ((g.style.width = l + "px"), (g.style.height = v + "px"), s.scale(ka, ka));
        } else (g.width = l), (g.height = v);
    }
    function hb(g) {
        if (!ib) {
            var l = !1,
                v = !1;
            "undefined" === typeof pa.Chart.creditHref ? ((g.creditHref = W("iuuqr;..b`ow`rkr/bnl.")), (g.creditText = W("B`ow`rKR/bnl"))) : ((l = g.updateOption("creditText")), (v = g.updateOption("creditHref")));
            if (g.creditHref && g.creditText) {
                g._creditLink ||
                    ((g._creditLink = document.createElement("a")),
                    g._creditLink.setAttribute("class", "canvasjs-chart-credit"),
                    g._creditLink.setAttribute("title", "JavaScript Charts"),
                    g._creditLink.setAttribute(
                        "style",
                        "outline:none;margin:0px;position:absolute;right:2px;top:" + (g.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"
                    ),
                    g._creditLink.setAttribute("tabIndex", -1),
                    g._creditLink.setAttribute("target", "_blank"));
                if (0 === g.renderCount || l || v) g._creditLink.setAttribute("href", g.creditHref), (g._creditLink.innerHTML = g.creditText);
                g._creditLink && g.creditHref && g.creditText
                    ? (g._creditLink.parentElement || g._canvasJSContainer.appendChild(g._creditLink), (g._creditLink.style.top = g.height - 14 + "px"))
                    : g._creditLink.parentElement && g._canvasJSContainer.removeChild(g._creditLink);
            }
        }
    }
    function ta(g, l) {
        Ga && ((this.canvasCount |= 0), window.console.log(++this.canvasCount));
        var v = document.createElement("canvas");
        v.setAttribute("class", "canvasjs-chart-canvas");
        La(v, g, l);
        w || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(v);
        return v;
    }
    function ga(g, l) {
        for (var v in l) g.style[v] = l[v];
    }
    function va(g, l, v) {
        l.getAttribute("state") ||
            ((l.style.backgroundColor = g.toolbar.itemBackgroundColor), (l.style.color = g.toolbar.fontColor), (l.style.border = "none"), ga(l, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        l.getAttribute("state") !== v &&
            (l.setAttribute("state", v),
            l.setAttribute("type", "button"),
            ga(l, { padding: "5px 12px", cursor: "pointer", float: "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }),
            l.setAttribute("title", g._cultureInfo[v + "Text"]),
            (l.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + jb[v].image + "' alt='" + g._cultureInfo[v + "Text"] + "' />"));
    }
    function Ka() {
        for (var g = null, l = 0; l < arguments.length; l++) (g = arguments[l]), g.style && (g.style.display = "inline");
    }
    function ua() {
        for (var g = null, l = 0; l < arguments.length; l++) (g = arguments[l]) && g.style && (g.style.display = "none");
    }
    function Ra(g, l, v, s, w) {
        if (null === g || "undefined" === typeof g) return "undefined" === typeof v ? l : v;
        g = parseFloat(g.toString()) * (0 <= g.toString().indexOf("%") ? l / 100 : 1);
        "undefined" !== typeof s && ((g = Math.min(s, g)), "undefined" !== typeof w && (g = Math.max(w, g)));
        return !isNaN(g) && g <= l && 0 <= g ? g : "undefined" === typeof v ? l : v;
    }
    function U(g, l, v, w, qa) {
        this._defaultsKey = g;
        this._themeOptionsKey = l;
        this._index = w;
        this.parent = qa;
        this._eventListeners = [];
        g = {};
        this.theme && s(this.parent) && s(l) && s(w)
            ? (g = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme])
            : this.parent &&
              this.parent.themeOptions &&
              this.parent.themeOptions[l] &&
              (null === w ? (g = this.parent.themeOptions[l]) : 0 < this.parent.themeOptions[l].length && ((w = Math.min(this.parent.themeOptions[l].length - 1, w)), (g = this.parent.themeOptions[l][w])));
        this.themeOptions = g;
        this.options = v ? v : { _isPlaceholder: !0 };
        this.setOptions(this.options, g);
    }
    function Da(g, l, v, s, w) {
        "undefined" === typeof w && (w = 0);
        this._padding = w;
        this._x1 = g;
        this._y1 = l;
        this._x2 = v;
        this._y2 = s;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    }
    function ia(g, l) {
        ia.base.constructor.call(this, "TextBlock", null, l, null, null);
        this.ctx = g;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize();
    }
    function Sa(g, l) {
        Sa.base.constructor.call(this, "Toolbar", "toolbar", l, null, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
    }
    function ya(g, l) {
        ya.base.constructor.call(this, "Title", "title", l, null, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (s(this.options.margin) && g.options.subtitles)
            for (var v = g.options.subtitles, w = 0; w < v.length; w++)
                if (
                    ((s(v[w].horizontalAlign) && "center" === this.horizontalAlign) || v[w].horizontalAlign === this.horizontalAlign) &&
                    ((s(v[w].verticalAlign) && "top" === this.verticalAlign) || v[w].verticalAlign === this.verticalAlign) &&
                    !v[w].dockInsidePlotArea === !this.dockInsidePlotArea
                ) {
                    this.margin = 0;
                    break;
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Ha(g, l, v) {
        Ha.base.constructor.call(this, "Subtitle", "subtitles", l, v, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Ta() {
        this.pool = [];
    }
    function Ia(g) {
        var l;
        g && Ja[g] && (l = Ja[g]);
        Ia.base.constructor.call(this, "CultureInfo", null, l, null, null);
    }
    var Ga = !1,
        S = {},
        w = !!document.createElement("canvas").getContext,
        pa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly",
                    selectedColorSet: "readOnly",
                },
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: w ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            Toolbar: {
                itemBackgroundColor: "white",
                itemBackgroundColorOnHover: "#2196f3",
                buttonBorderColor: "#2196f3",
                buttonBorderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: { options: "readWrite", chart: "readOnly" },
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: w ? "transparent" : null,
                borderColor: w ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", chart: "readOnly" },
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: w ? "transparent" : null,
                titleBorderColor: w ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: w ? "transparent" : null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: w ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: w ? "grey" : null,
                labelBorderColor: w ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: w ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelTextAlign: "left",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: w ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: w ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" },
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                textAlign: "left",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top",
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            },
        },
        Ja = { en: {} },
        y = w ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        Ea = w ? "Impact, Charcoal, sans-serif" : "Arial",
        za = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" "),
        },
        H,
        $,
        Z,
        da,
        ha;
    $ = "#333333";
    Z = "#000000";
    H = "#666666";
    ha = da = "#000000";
    var T = 20,
        F = 14,
        Ua = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: { fontFamily: Ea, fontSize: 32, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: Ea, fontSize: F, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: y, indexLabelFontSize: F, indexLabelFontColor: $, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: $,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: Z,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 0,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisX2: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: $,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: Z,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 0,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: $,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: Z,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 1,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY2: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: $,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: Z,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 1,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            legend: { fontFamily: y, fontSize: 14, fontColor: $, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" },
        };
    Z = $ = "#F5F5F5";
    H = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var T = 20,
        F = 14,
        $a = {
            colorSet: "colorSet2",
            title: { fontFamily: y, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: y, fontSize: F, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: y, indexLabelFontSize: F, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: "#BBBBBB",
                    tickThickness: 1,
                    tickColor: "#BBBBBB",
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisX2: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY2: [
                {
                    titleFontFamily: y,
                    titleFontSize: T,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: F,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            legend: { fontFamily: y, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" },
        };
    Z = $ = "#F5F5F5";
    H = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    T = 20;
    F = 14;
    Ea = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Ea, fontSize: 32, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Ea, fontSize: F, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
        data: [{ indexLabelFontFamily: y, indexLabelFontSize: F, indexLabelFontColor: Z, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [
            {
                titleFontFamily: y,
                titleFontSize: T,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisX2: [
            {
                titleFontFamily: y,
                titleFontSize: T,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisY: [
            {
                titleFontFamily: y,
                titleFontSize: T,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisY2: [
            {
                titleFontFamily: y,
                titleFontSize: T,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: F,
                labelFontColor: Z,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        legend: { fontFamily: y, fontSize: 14, fontColor: $, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: Z, backgroundColor: "rgba(0, 0, 0, .7)" },
    };
    H = "#FFFFFF";
    Z = $ = "#FAFAFA";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var T = 20,
        F = 14,
        ab = {
            light1: Ua,
            light2: $a,
            dark1: Ea,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: { fontFamily: y, fontSize: 32, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 },
                subtitles: [{ fontFamily: y, fontSize: F, fontColor: $, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
                toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
                data: [{ indexLabelFontFamily: y, indexLabelFontSize: F, indexLabelFontColor: Z, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
                axisX: [
                    {
                        titleFontFamily: y,
                        titleFontSize: T,
                        titleFontColor: Z,
                        titleFontWeight: "normal",
                        labelFontFamily: y,
                        labelFontSize: F,
                        labelFontColor: Z,
                        labelFontWeight: "normal",
                        lineThickness: 1,
                        lineColor: H,
                        tickThickness: 1,
                        tickColor: H,
                        gridThickness: 0,
                        gridColor: H,
                        stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisX2: [
                    {
                        titleFontFamily: y,
                        titleFontSize: T,
                        titleFontColor: Z,
                        titleFontWeight: "normal",
                        labelFontFamily: y,
                        labelFontSize: F,
                        labelFontColor: Z,
                        labelFontWeight: "normal",
                        lineThickness: 1,
                        lineColor: H,
                        tickThickness: 1,
                        tickColor: H,
                        gridThickness: 0,
                        gridColor: H,
                        stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisY: [
                    {
                        titleFontFamily: y,
                        titleFontSize: T,
                        titleFontColor: Z,
                        titleFontWeight: "normal",
                        labelFontFamily: y,
                        labelFontSize: F,
                        labelFontColor: Z,
                        labelFontWeight: "normal",
                        lineThickness: 0,
                        lineColor: H,
                        tickThickness: 1,
                        tickColor: H,
                        gridThickness: 1,
                        gridColor: H,
                        stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisY2: [
                    {
                        titleFontFamily: y,
                        titleFontSize: T,
                        titleFontColor: Z,
                        titleFontWeight: "normal",
                        labelFontFamily: y,
                        labelFontSize: F,
                        labelFontColor: Z,
                        labelFontWeight: "normal",
                        lineThickness: 0,
                        lineColor: H,
                        tickThickness: 1,
                        tickColor: H,
                        gridThickness: 1,
                        gridColor: H,
                        stripLines: [{ labelFontFamily: y, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: y, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                legend: { fontFamily: y, fontSize: 14, fontColor: $, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
                toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: Z, backgroundColor: "rgba(0, 0, 0, .7)" },
            },
            theme1: Ua,
            theme2: $a,
            theme3: Ua,
        },
        R = {
            numberDuration: 1,
            yearDuration: 314496e5,
            monthDuration: 2592e6,
            weekDuration: 6048e5,
            dayDuration: 864e5,
            hourDuration: 36e5,
            minuteDuration: 6e4,
            secondDuration: 1e3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        };
    (function () {
        S.fSDec = function (g) {
            for (var l = "", v = 0; v < g.length; v++) l += String.fromCharCode(Math.ceil(g.length / 57 / 5) ^ g.charCodeAt(v));
            return l;
        };
        delete pa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")];
        S.pro = { sCH: pa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")] };
        S.pos = ["cm", "cs", "um"];
        S._fTWm = function (g) {
            if ("undefined" === typeof S.pro.sCH && !bb)
                try {
                    var l = new Date().getMonth() % 3,
                        v,
                        s,
                        w = g[S.fSDec("buy")];
                    w[S.fSDec("udyuC`rdmhod")] = S.fSDec("unq");
                    w[S.fSDec("gnou")] = 11 + S.fSDec("qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg");
                    w[S.fSDec("ghmmRuxmd")] = S.fSDec("fsdx");
                    v = "cm" === S.pos[l] || "um" === S.pos[l] ? 0 : g.width - w[S.fSDec("ld`rtsdUdyu")](S.fSDec("B`ow`rKR!Ush`m")).width;
                    s = "um" === S.pos[l] ? 0 : g.height - 11;
                    w[S.fSDec("ghmmUdyu")](S.fSDec("B`ow`rKR!Ush`m"), v, s);
                    "cs" === S.pos[l] && (g[S.fSDec("^bsdehuMhoj")].style.right = S.fSDec("`tun"));
                } catch (y) {}
        };
    })();
    var fb = (function () {
            var g = !1;
            try {
                var l =
                    Object.defineProperty &&
                    Object.defineProperty({}, "passive", {
                        get: function () {
                            g = !0;
                            return !1;
                        },
                    });
                window.addEventListener && (window.addEventListener("test", null, l), window.removeEventListener("test", null, l));
            } catch (v) {
                g = !1;
            }
            return g;
        })(),
        Xa = {},
        wa = null,
        kb = function () {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && ((this.ctx.fillStyle = this.backgroundColor), this.ctx.fillRect(0, 0, this.width, this.height));
        },
        lb = function (g, l, v) {
            l = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= l ? 12 : 11, Math.round(l * (g / 400)));
        },
        Aa = (function () {
            var g = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                l = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                v = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                s = "January February March April May June July August September October November December".split(" "),
                w = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                E = /[^-+\dA-Z]/g;
            return function (F, N, M) {
                var H = M ? M.days : l,
                    P = M ? M.months : s,
                    J = M ? M.shortDays : v,
                    R = M ? M.shortMonths : w;
                M = "";
                var S = !1;
                F = F && F.getTime ? F : F ? new Date(F) : new Date();
                if (isNaN(F)) throw SyntaxError("invalid date");
                "UTC:" === N.slice(0, 4) && ((N = N.slice(4)), (S = !0));
                M = S ? "getUTC" : "get";
                var U = F[M + "Date"](),
                    K = F[M + "Day"](),
                    V = F[M + "Month"](),
                    a = F[M + "FullYear"](),
                    d = F[M + "Hours"](),
                    b = F[M + "Minutes"](),
                    c = F[M + "Seconds"](),
                    e = F[M + "Milliseconds"](),
                    f = S ? 0 : F.getTimezoneOffset();
                return (M = N.replace(g, function (p) {
                    switch (p) {
                        case "D":
                            return U;
                        case "DD":
                            return X(U, 2);
                        case "DDD":
                            return J[K];
                        case "DDDD":
                            return H[K];
                        case "M":
                            return V + 1;
                        case "MM":
                            return X(V + 1, 2);
                        case "MMM":
                            return R[V];
                        case "MMMM":
                            return P[V];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return X(String(a).slice(-2), 2);
                        case "YYY":
                            return X(String(a).slice(-3), 3);
                        case "YYYY":
                            return X(a, 4);
                        case "h":
                            return d % 12 || 12;
                        case "hh":
                            return X(d % 12 || 12, 2);
                        case "H":
                            return d;
                        case "HH":
                            return X(d, 2);
                        case "m":
                            return b;
                        case "mm":
                            return X(b, 2);
                        case "s":
                            return c;
                        case "ss":
                            return X(c, 2);
                        case "f":
                            return X(String(e), 3).slice(0, 1);
                        case "ff":
                            return X(String(e), 3).slice(0, 2);
                        case "fff":
                            return X(String(e), 3).slice(0, 3);
                        case "t":
                            return 12 > d ? "a" : "p";
                        case "tt":
                            return 12 > d ? "am" : "pm";
                        case "T":
                            return 12 > d ? "A" : "P";
                        case "TT":
                            return 12 > d ? "AM" : "PM";
                        case "K":
                            return S ? "UTC" : (String(F).match(y) || [""]).pop().replace(E, "");
                        case "z":
                            return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);
                        case "zz":
                            return (0 < f ? "-" : "+") + X(Math.floor(Math.abs(f) / 60), 2);
                        case "zzz":
                            return (0 < f ? "-" : "+") + X(Math.floor(Math.abs(f) / 60), 2) + X(Math.abs(f) % 60, 2);
                        default:
                            return p.slice(1, p.length - 1);
                    }
                }));
            };
        })(),
        ea = function (g, l, v) {
            if (null === g) return "";
            if (!isFinite(g)) return g;
            g = Number(g);
            var s = 0 > g ? !0 : !1;
            s && (g *= -1);
            var w = v ? v.decimalSeparator : ".",
                y = v ? v.digitGroupSeparator : ",",
                E = "";
            l = String(l);
            var E = 1,
                F = (v = ""),
                N = -1,
                M = [],
                H = [],
                P = 0,
                J = 0,
                R = 0,
                S = !1,
                U = 0,
                F = l.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            l = null;
            for (var K = 0; F && K < F.length; K++)
                if (((l = F[K]), "." === l && 0 > N)) N = K;
                else {
                    if ("%" === l) E *= 100;
                    else if ("\u2030" === l) {
                        E *= 1e3;
                        continue;
                    } else if ("," === l[0] && "." === l[l.length - 1]) {
                        E /= Math.pow(1e3, l.length - 1);
                        N = K + l.length - 1;
                        continue;
                    } else ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || (S = !0);
                    0 > N ? (M.push(l), "#" === l || "0" === l ? P++ : "," === l && R++) : (H.push(l), ("#" !== l && "0" !== l) || J++);
                }
            S && ((l = Math.floor(g)), (F = -Math.floor(Math.log(g) / Math.LN10 + 1)), (U = 0 === g ? 0 : 0 === l ? -(P + F) : String(l).length - P), (E /= Math.pow(10, U)));
            0 > N && (N = K);
            E = (g * E).toFixed(J);
            l = E.split(".");
            E = (l[0] + "").split("");
            g = (l[1] + "").split("");
            E && "0" === E[0] && E.shift();
            for (S = F = K = J = N = 0; 0 < M.length; )
                if (((l = M.pop()), "#" === l || "0" === l))
                    if ((N++, N === P)) {
                        var V = E,
                            E = [];
                        if ("0" === l) for (l = P - J - (V ? V.length : 0); 0 < l; ) V.unshift("0"), l--;
                        for (; 0 < V.length; ) (v = V.pop() + v), S++, 0 === S % F && K === R && 0 < V.length && (v = y + v);
                    } else 0 < E.length ? ((v = E.pop() + v), J++, S++) : "0" === l && ((v = "0" + v), J++, S++), 0 === S % F && K === R && 0 < E.length && (v = y + v);
                else
                    ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l)
                        ? "," === l
                            ? (K++, (F = S), (S = 0), 0 < E.length && (v = y + v))
                            : (v = 1 < l.length && (('"' === l[0] && '"' === l[l.length - 1]) || ("'" === l[0] && "'" === l[l.length - 1])) ? l.slice(1, l.length - 1) + v : l + v)
                        : ((l = 0 > U ? l.replace("+", "").replace("-", "") : l.replace("-", "")),
                          (v += l.replace(/[0]+/, function (a) {
                              return X(U, a.length);
                          })));
            y = "";
            for (M = !1; 0 < H.length; )
                (l = H.shift()),
                    "#" === l || "0" === l
                        ? 0 < g.length && 0 !== Number(g.join(""))
                            ? ((y += g.shift()), (M = !0))
                            : "0" === l && ((y += "0"), (M = !0))
                        : 1 < l.length && (('"' === l[0] && '"' === l[l.length - 1]) || ("'" === l[0] && "'" === l[l.length - 1]))
                        ? (y += l.slice(1, l.length - 1))
                        : ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l)
                        ? (y += l)
                        : ((l = 0 > U ? l.replace("+", "").replace("-", "") : l.replace("-", "")),
                          (y += l.replace(/[0]+/, function (a) {
                              return X(U, a.length);
                          })));
            v += (M ? w : "") + y;
            return s ? "-" + v : v;
        },
        Na = function (g) {
            var l = 0,
                v = 0;
            g = g || window.event;
            g.offsetX || 0 === g.offsetX ? ((l = g.offsetX), (v = g.offsetY)) : g.layerX || 0 == g.layerX ? ((l = g.layerX), (v = g.layerY)) : ((l = g.pageX - g.target.offsetLeft), (v = g.pageY - g.target.offsetTop));
            return { x: l, y: v };
        },
        Za = !0,
        Qa = window.devicePixelRatio || 1,
        Ma = 1,
        ka = Za ? Qa / Ma : 1,
        ca = function (g, l, v, s, w, y, E, F, N, M, P, S, H) {
            "undefined" === typeof H && (H = 1);
            E = E || 0;
            F = F || "black";
            var J = 15 < s - l && 15 < w - v ? 8 : 0.35 * Math.min(s - l, w - v);
            g.beginPath();
            g.moveTo(l, v);
            g.save();
            g.fillStyle = y;
            g.globalAlpha = H;
            g.fillRect(l, v, s - l, w - v);
            g.globalAlpha = 1;
            0 < E && ((H = 0 === E % 2 ? 0 : 0.5), g.beginPath(), (g.lineWidth = E), (g.strokeStyle = F), g.moveTo(l, v), g.rect(l - H, v - H, s - l + 2 * H, w - v + 2 * H), g.stroke());
            g.restore();
            !0 === N &&
                (g.save(),
                g.beginPath(),
                g.moveTo(l, v),
                g.lineTo(l + J, v + J),
                g.lineTo(s - J, v + J),
                g.lineTo(s, v),
                g.closePath(),
                (E = g.createLinearGradient((s + l) / 2, v + J, (s + l) / 2, v)),
                E.addColorStop(0, y),
                E.addColorStop(1, "rgba(255, 255, 255, .4)"),
                (g.fillStyle = E),
                g.fill(),
                g.restore());
            !0 === M &&
                (g.save(),
                g.beginPath(),
                g.moveTo(l, w),
                g.lineTo(l + J, w - J),
                g.lineTo(s - J, w - J),
                g.lineTo(s, w),
                g.closePath(),
                (E = g.createLinearGradient((s + l) / 2, w - J, (s + l) / 2, w)),
                E.addColorStop(0, y),
                E.addColorStop(1, "rgba(255, 255, 255, .4)"),
                (g.fillStyle = E),
                g.fill(),
                g.restore());
            !0 === P &&
                (g.save(),
                g.beginPath(),
                g.moveTo(l, v),
                g.lineTo(l + J, v + J),
                g.lineTo(l + J, w - J),
                g.lineTo(l, w),
                g.closePath(),
                (E = g.createLinearGradient(l + J, (w + v) / 2, l, (w + v) / 2)),
                E.addColorStop(0, y),
                E.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (g.fillStyle = E),
                g.fill(),
                g.restore());
            !0 === S &&
                (g.save(),
                g.beginPath(),
                g.moveTo(s, v),
                g.lineTo(s - J, v + J),
                g.lineTo(s - J, w - J),
                g.lineTo(s, w),
                (E = g.createLinearGradient(s - J, (w + v) / 2, s, (w + v) / 2)),
                E.addColorStop(0, y),
                E.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (g.fillStyle = E),
                E.addColorStop(0, y),
                E.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (g.fillStyle = E),
                g.fill(),
                g.closePath(),
                g.restore());
        },
        W = function (g) {
            for (var l = "", s = 0; s < g.length; s++) l += String.fromCharCode(Math.ceil(g.length / 57 / 5) ^ g.charCodeAt(s));
            return l;
        },
        bb =
            window &&
            window[W("mnb`uhno")] &&
            window[W("mnb`uhno")].href &&
            window[W("mnb`uhno")].href.indexOf &&
            (-1 !== window[W("mnb`uhno")].href.indexOf(W("b`ow`rkr/bnl")) || -1 !== window[W("mnb`uhno")].href.indexOf(W("gdonqhy/bnl")) || -1 !== window[W("mnb`uhno")].href.indexOf(W("gheemd"))),
        ib = bb && -1 === window[W("mnb`uhno")].href.indexOf(W("gheemd")),
        jb = {
            reset: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==",
            },
            pan: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC",
            },
            zoom: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=",
            },
            menu: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC",
            },
        };
    U.prototype.setOptions = function (g, l) {
        if (pa[this._defaultsKey]) {
            var s = pa[this._defaultsKey],
                w;
            for (w in s) "publicProperties" !== w && s.hasOwnProperty(w) && (this[w] = g && w in g ? g[w] : l && w in l ? l[w] : s[w]);
        } else Ga && window.console && console.log("defaults not set");
    };
    U.prototype.get = function (g) {
        var l = pa[this._defaultsKey];
        if ("options" === g) return this.options && this.options._isPlaceholder ? null : this.options;
        if (l.hasOwnProperty(g) || (l.publicProperties && l.publicProperties.hasOwnProperty(g))) return this[g];
        window.console && window.console.log('Property "' + g + "\" doesn't exist. Please check for typo.");
    };
    U.prototype.set = function (g, l, s) {
        s = "undefined" === typeof s ? !0 : s;
        var w = pa[this._defaultsKey];
        if ("options" === g) this.createUserOptions(l);
        else if (w.hasOwnProperty(g) || (w.publicProperties && w.publicProperties.hasOwnProperty(g) && "readWrite" === w.publicProperties[g])) this.options._isPlaceholder && this.createUserOptions(), (this.options[g] = l);
        else {
            window.console &&
                (w.publicProperties && w.publicProperties.hasOwnProperty(g) && "readOnly" === w.publicProperties[g]
                    ? window.console.log('Property "' + g + '" is read-only.')
                    : window.console.log('Property "' + g + "\" doesn't exist. Please check for typo."));
            return;
        }
        s && (this.stockChart || this.chart || this).render();
    };
    U.prototype.addTo = function (g, l, s, w) {
        w = "undefined" === typeof w ? !0 : w;
        var y = pa[this._defaultsKey];
        y.hasOwnProperty(g) || (y.publicProperties && y.publicProperties.hasOwnProperty(g) && "readWrite" === y.publicProperties[g])
            ? (this.options._isPlaceholder && this.createUserOptions(),
              "undefined" === typeof this.options[g] && (this.options[g] = []),
              (g = this.options[g]),
              (s = "undefined" === typeof s || null === s ? g.length : s),
              g.splice(s, 0, l),
              w && (this.stockChart || this.chart || this).render())
            : window.console &&
              (y.publicProperties && y.publicProperties.hasOwnProperty(g) && "readOnly" === y.publicProperties[g]
                  ? window.console.log('Property "' + g + '" is read-only.')
                  : window.console.log('Property "' + g + "\" doesn't exist. Please check for typo."));
    };
    U.prototype.createUserOptions = function (g) {
        if ("undefined" !== typeof g || this.options._isPlaceholder)
            if ((this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray)) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var l = this.parent.options[this.optionsName],
                    s = l.length;
                this.options._isPlaceholder || (Ca(l), (s = l.indexOf(this.options)));
                this.options = "undefined" === typeof g ? {} : g;
                l[s] = this.options;
            } else
                (this.options = "undefined" === typeof g ? {} : g),
                    (g = this.parent.options),
                    this.optionsName ? (l = this.optionsName) : (l = this._defaultsKey) && 0 !== l.length ? ((s = l.charAt(0).toLowerCase()), 1 < l.length && (s = s.concat(l.slice(1))), (l = s)) : (l = void 0),
                    (g[l] = this.options);
    };
    U.prototype.remove = function (g) {
        g = "undefined" === typeof g ? !0 : g;
        if (this.isOptionsInArray) {
            var l = this.parent.options[this.optionsName];
            Ca(l);
            var s = l.indexOf(this.options);
            0 <= s && l.splice(s, 1);
        } else delete this.parent.options[this.optionsName];
        g && (this.stockChart || this.chart || this).render();
    };
    U.prototype.updateOption = function (g) {
        !pa[this._defaultsKey] && Ga && window.console && console.log("defaults not set");
        var l = pa[this._defaultsKey],
            w = {},
            y = this[g],
            F = this._themeOptionsKey,
            J = this._index;
        this.theme && s(this.parent) && s(F) && s(J)
            ? (w = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme])
            : this.parent &&
              this.parent.themeOptions &&
              this.parent.themeOptions[F] &&
              (null === J ? (w = this.parent.themeOptions[F]) : 0 < this.parent.themeOptions[F].length && ((w = Math.min(this.parent.themeOptions[F].length - 1, J)), (w = this.parent.themeOptions[F][w])));
        this.themeOptions = w;
        g in l && (y = g in this.options ? this.options[g] : w && g in w ? w[g] : l[g]);
        if (y === this[g]) return !1;
        this[g] = y;
        return !0;
    };
    U.prototype.trackChanges = function (g) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[g] = this.options[g];
    };
    U.prototype.isBeingTracked = function (g) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[g] ? !0 : !1;
    };
    U.prototype.hasOptionChanged = function (g) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[g] !== this.options[g];
    };
    U.prototype.addEventListener = function (g, l, s) {
        g && l && ((this._eventListeners[g] = this._eventListeners[g] || []), this._eventListeners[g].push({ context: s || this, eventHandler: l }));
    };
    U.prototype.removeEventListener = function (g, l) {
        if (g && l && this._eventListeners[g])
            for (var s = this._eventListeners[g], w = 0; w < s.length; w++)
                if (s[w].eventHandler === l) {
                    s[w].splice(w, 1);
                    break;
                }
    };
    U.prototype.removeAllEventListeners = function () {
        this._eventListeners = [];
    };
    U.prototype.dispatchEvent = function (g, l, s) {
        if (g && this._eventListeners[g]) {
            l = l || {};
            for (var w = this._eventListeners[g], y = 0; y < w.length; y++) w[y].eventHandler.call(w[y].context, l);
        }
        "function" === typeof this[g] && this[g].call(s || this.chart, l);
    };
    Da.prototype.registerSpace = function (g, l) {
        "top" === g ? (this._topOccupied += l.height) : "bottom" === g ? (this._bottomOccupied += l.height) : "left" === g ? (this._leftOccupied += l.width) : "right" === g && (this._rightOccupied += l.width);
    };
    Da.prototype.unRegisterSpace = function (g, l) {
        "top" === g ? (this._topOccupied -= l.height) : "bottom" === g ? (this._bottomOccupied -= l.height) : "left" === g ? (this._leftOccupied -= l.width) : "right" === g && (this._rightOccupied -= l.width);
    };
    Da.prototype.getFreeSpace = function () {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied,
        };
    };
    Da.prototype.reset = function () {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    };
    oa(ia, U);
    ia.prototype._initialize = function () {
        s(this.padding) || "object" !== typeof this.padding
            ? (this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0)
            : ((this.topPadding = s(this.padding.top) ? 0 : Number(this.padding.top) | 0),
              (this.rightPadding = s(this.padding.right) ? 0 : Number(this.padding.right) | 0),
              (this.bottomPadding = s(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0),
              (this.leftPadding = s(this.padding.left) ? 0 : Number(this.padding.left) | 0));
    };
    ia.prototype.render = function (g) {
        if (0 !== this.fontSize) {
            g && this.ctx.save();
            var l = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var s = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + s);
            "middle" === this.textBaseline && (s = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate((Math.PI / 180) * this.angle);
            var w = 0,
                y = this.topPadding,
                F = null;
            this.ctx.roundRect || Ba(this.ctx);
            ((0 < this.borderThickness && this.borderColor) || this.backgroundColor) && this.ctx.roundRect(0, s, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (s = 0; s < this._wrappedText.lines.length; s++) {
                F = this._wrappedText.lines[s];
                if ("right" === this.horizontalAlign || "right" === this.textAlign) w = this.width - F.width - this.rightPadding;
                else if ("left" === this.horizontalAlign || "left" === this.textAlign) w = this.leftPadding;
                else if ("center" === this.horizontalAlign || "center" === this.textAlign) w = (this.width - (this.leftPadding + this.rightPadding)) / 2 - F.width / 2 + this.leftPadding;
                this.ctx.fillText(F.text, w, y);
                y += F.height;
            }
            this.ctx.font = l;
            g && this.ctx.restore();
        }
    };
    ia.prototype.setText = function (g) {
        this.text = g;
        this._isDirty = !0;
        this._wrappedText = null;
    };
    ia.prototype.measureText = function () {
        this._lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return { width: this.width, height: this.height };
    };
    ia.prototype._getLineWithWidth = function (g, l, s) {
        g = String(g);
        if (!g) return { text: "", width: 0 };
        var w = (s = 0),
            y = g.length - 1,
            F = Infinity;
        for (this.ctx.font = this._getFontString(); w <= y; ) {
            var F = Math.floor((w + y) / 2),
                E = g.substr(0, F + 1);
            s = this.ctx.measureText(E).width;
            if (s < l) w = F + 1;
            else if (s > l) y = F - 1;
            else break;
        }
        s > l && 1 < E.length && ((E = E.substr(0, E.length - 1)), (s = this.ctx.measureText(E).width));
        l = !0;
        if (E.length === g.length || " " === g[E.length]) l = !1;
        l && ((g = E.split(" ")), 1 < g.length && g.pop(), (E = g.join(" ")), (s = this.ctx.measureText(E).width));
        return { text: E, width: s };
    };
    ia.prototype._wrapText = function () {
        var g = new String(Fa(String(this.text))),
            l = [],
            s = this.ctx.font,
            w = 0,
            y = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) y = w = 0;
        else
            for (; 0 < g.length; ) {
                var F = this.maxHeight - (this.topPadding + this.bottomPadding),
                    E = this._getLineWithWidth(g, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                E.height = this._lineHeight;
                l.push(E);
                var J = y,
                    y = Math.max(y, E.width),
                    w = w + E.height,
                    g = Fa(g.slice(E.text.length, g.length));
                F && w > F && ((E = l.pop()), (w -= E.height), (y = J));
            }
        this._wrappedText = { lines: l, width: y, height: w };
        this.width = y + (this.leftPadding + this.rightPadding);
        this.height = w + (this.topPadding + this.bottomPadding);
        this.ctx.font = s;
    };
    ia.prototype._getFontString = function () {
        var g;
        g = "" + (this.fontStyle ? this.fontStyle + " " : "");
        g += this.fontWeight ? this.fontWeight + " " : "";
        g += this.fontSize ? this.fontSize + "px " : "";
        var l = this.fontFamily ? this.fontFamily + "" : "";
        !w && l && ((l = l.split(",")[0]), "'" !== l[0] && '"' !== l[0] && (l = "'" + l + "'"));
        return (g += l);
    };
    oa(Sa, U);
    oa(ya, U);
    ya.prototype.setLayout = function () {
        if (this.text) {
            var g = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                l = g.layoutManager.getFreeSpace(),
                w = l.x1,
                y = l.y1,
                F = 0,
                J = 0,
                E = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                N,
                H;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign
                ? (null === this.maxWidth && (this.maxWidth = l.width - 4 - E * ("center" === this.horizontalAlign ? 2 : 1)), (J = 0.5 * l.height - this.margin - 2), (F = 0))
                : "center" === this.verticalAlign &&
                  ("left" === this.horizontalAlign || "right" === this.horizontalAlign
                      ? (null === this.maxWidth && (this.maxWidth = l.height - 4), (J = 0.5 * l.width - this.margin - 2))
                      : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = l.width - 4), (J = 0.5 * l.height - 4)));
            var M;
            s(this.padding) || "number" !== typeof this.padding
                ? s(this.padding) ||
                  "object" !== typeof this.padding ||
                  ((M = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0), (M += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0))
                : (M = 2 * this.padding);
            this.wrap || (J = Math.min(J, 1.5 * this.fontSize + M));
            J = new ia(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: J,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top",
            });
            M = J.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign
                ? ("top" === this.verticalAlign ? ((y = l.y1 + 2), (H = "top")) : "bottom" === this.verticalAlign && ((y = l.y2 - 2 - M.height), (H = "bottom")),
                  "left" === this.horizontalAlign ? (w = l.x1 + 2) : "center" === this.horizontalAlign ? (w = l.x1 + l.width / 2 - M.width / 2) : "right" === this.horizontalAlign && (w = l.x2 - 2 - M.width - E),
                  (N = this.horizontalAlign),
                  (this.width = M.width),
                  (this.height = M.height))
                : "center" === this.verticalAlign &&
                  ("left" === this.horizontalAlign
                      ? ((w = l.x1 + 2), (y = l.y2 - 2 - (this.maxWidth / 2 - M.width / 2)), (F = -90), (H = "left"), (this.width = M.height), (this.height = M.width))
                      : "right" === this.horizontalAlign
                      ? ((w = l.x2 - 2), (y = l.y1 + 2 + (this.maxWidth / 2 - M.width / 2)), (F = 90), (H = "right"), (this.width = M.height), (this.height = M.width))
                      : "center" === this.horizontalAlign && ((y = g.y1 + (g.height / 2 - M.height / 2)), (w = g.x1 + (g.width / 2 - M.width / 2)), (H = "center"), (this.width = M.width), (this.height = M.height)),
                  (N = "center"));
            J.x = w;
            J.y = y;
            J.angle = F;
            J.horizontalAlign = N;
            this._textBlock = J;
            g.layoutManager.registerSpace(H, { width: this.width + ("left" === H || "right" === H ? this.margin + 2 : 0), height: this.height + ("top" === H || "bottom" === H ? this.margin + 2 : 0) });
            this.bounds = { x1: w, y1: y, x2: w + this.width, y2: y + this.height };
            this.ctx.textBaseline = "top";
        }
    };
    ya.prototype.render = function () {
        this._textBlock && this._textBlock.render(!0);
    };
    oa(Ha, U);
    Ha.prototype.setLayout = ya.prototype.setLayout;
    Ha.prototype.render = ya.prototype.render;
    Ta.prototype.get = function (g, l) {
        var w = null;
        0 < this.pool.length ? ((w = this.pool.pop()), La(w, g, l)) : (w = ta(g, l));
        return w;
    };
    Ta.prototype.release = function (g) {
        this.pool.push(g);
    };
    oa(Ia, U);
    var Oa = {
        addTheme: function (g, l) {
            ab[g] = l;
        },
        addColorSet: function (g, l) {
            za[g] = l;
        },
        addCultureInfo: function (g, l) {
            Ja[g] = l;
        },
        formatNumber: function (g, l, w) {
            w = w || "en";
            if (Ja[w]) return ea(g, l || "#,##0.##", new Ia(w));
            throw "Unknown Culture Name";
        },
        formatDate: function (g, l, w) {
            w = w || "en";
            if (Ja[w]) return Aa(g, l || "DD MMM YYYY", new Ia(w));
            throw "Unknown Culture Name";
        },
    };
    "undefined" !== typeof module && "undefined" !== typeof module.exports
        ? (module.exports = Oa)
        : "function" === typeof define && define.amd
        ? define([], function () {
              return Oa;
          })
        : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."),
          (window.CanvasJS = window.CanvasJS ? window.CanvasJS : Oa));
    y = Oa.Chart = (function () {
        function g(a, d) {
            return a.x - d.x;
        }
        function l(a, d, b) {
            d = d || {};
            s(b)
                ? ((this.predefinedThemes = ab), (this.optionsName = this.parent = this.index = null))
                : ((this.parent = b.parent),
                  (this.index = b.index),
                  (this.predefinedThemes = b.predefinedThemes),
                  (this.optionsName = b.optionsName),
                  (this.stockChart = b.stockChart),
                  (this.panel = a),
                  (this.isOptionsInArray = b.isOptionsInArray));
            this.theme = s(d.theme) || s(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
            l.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var c = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Ta();
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId)
                ? ((this.container.innerHTML = ""),
                  (d = a = 0),
                  (a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width),
                  (d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height),
                  (this.width = a),
                  (this.height = d),
                  (this.x1 = this.y1 = 0),
                  (this.x2 = this.width),
                  (this.y2 = this.height),
                  (this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1),
                  (this._canvasJSContainer = document.createElement("div")),
                  this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"),
                  (this._canvasJSContainer.style.position = "relative"),
                  (this._canvasJSContainer.style.textAlign = "left"),
                  (this._canvasJSContainer.style.cursor = "auto"),
                  (this._canvasJSContainer.style.direction = "ltr"),
                  w || (this._canvasJSContainer.style.height = "0px"),
                  this.container.appendChild(this._canvasJSContainer),
                  (this.canvas = ta(a, d)),
                  (this._preRenderCanvas = ta(a, d)),
                  (this.canvas.style.position = "absolute"),
                  (this.canvas.style.WebkitUserSelect = "none"),
                  (this.canvas.style.MozUserSelect = "none"),
                  (this.canvas.style.msUserSelect = "none"),
                  (this.canvas.style.userSelect = "none"),
                  this.canvas.getContext &&
                      (this._canvasJSContainer.appendChild(this.canvas),
                      (this.ctx = this.canvas.getContext("2d")),
                      (this.ctx.textBaseline = "top"),
                      Ba(this.ctx),
                      (this._preRenderCtx = this._preRenderCanvas.getContext("2d")),
                      (this._preRenderCtx.textBaseline = "top"),
                      Ba(this._preRenderCtx),
                      w
                          ? (this.plotArea.ctx = this.ctx)
                          : ((this.plotArea.canvas = ta(a, d)),
                            (this.plotArea.canvas.style.position = "absolute"),
                            this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
                            this._canvasJSContainer.appendChild(this.plotArea.canvas),
                            (this.plotArea.ctx = this.plotArea.canvas.getContext("2d"))),
                      (this.overlaidCanvas = ta(a, d)),
                      (this.overlaidCanvas.style.position = "absolute"),
                      (this.overlaidCanvas.style.webkitTapHighlightColor = "transparent"),
                      (this.overlaidCanvas.style.WebkitUserSelect = "none"),
                      (this.overlaidCanvas.style.MozUserSelect = "none"),
                      (this.overlaidCanvas.style.msUserSelect = "none"),
                      (this.overlaidCanvas.style.userSelect = "none"),
                      this.overlaidCanvas.getContext &&
                          (this._canvasJSContainer.appendChild(this.overlaidCanvas), (this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d")), (this.overlaidCanvasCtx.textBaseline = "top"), Ba(this.overlaidCanvasCtx)),
                      (this._eventManager = new da(this)),
                      (this.windowResizeHandler = J(
                          window,
                          "resize",
                          function () {
                              c._updateSize() && c.render();
                          },
                          this.allDOMEventHandlers
                      )),
                      (this._toolBar = document.createElement("div")),
                      this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
                      (this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;"),
                      this._canvasJSContainer.appendChild(this._toolBar),
                      (this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }),
                      J(
                          this.overlaidCanvas,
                          "click",
                          function (a) {
                              c._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          "mousemove",
                          function (a) {
                              c._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          "mouseup",
                          function (a) {
                              c._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          "mousedown",
                          function (a) {
                              c._mouseEventHandler(a);
                              ua(c._dropdownMenu);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          "mouseout",
                          function (a) {
                              c._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart",
                          function (a) {
                              c._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
                          function (a) {
                              c._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
                          function (a) {
                              c._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel",
                          function (a) {
                              c._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      (this.toolTip = new X(this, this.options.toolTip)),
                      (this.data = null),
                      (this.axisX = []),
                      (this.axisX2 = []),
                      (this.axisY = []),
                      (this.axisY2 = []),
                      (this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })))
                : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function v(a, d) {
            for (var b = [], c, e = 0; e < a.length; e++)
                if (0 == e) b.push(a[0]);
                else {
                    var f, p, t;
                    t = e - 1;
                    f = 0 === t ? 0 : t - 1;
                    p = t === a.length - 1 ? t : t + 1;
                    c = (Math.abs((a[p].x - a[f].x) / (0 === a[p].x - a[t].x ? 0.01 : a[p].x - a[t].x)) * (d - 1)) / 2 + 1;
                    var B = (a[p].x - a[f].x) / c;
                    c = (a[p].y - a[f].y) / c;
                    b[b.length] = (a[t].x > a[f].x && 0 < B) || (a[t].x < a[f].x && 0 > B) ? { x: a[t].x + B / 3, y: a[t].y + c / 3 } : { x: a[t].x, y: a[t].y + c / 9 };
                    t = e;
                    f = 0 === t ? 0 : t - 1;
                    p = t === a.length - 1 ? t : t + 1;
                    c = (Math.abs((a[p].x - a[f].x) / (0 === a[t].x - a[f].x ? 0.01 : a[t].x - a[f].x)) * (d - 1)) / 2 + 1;
                    B = (a[p].x - a[f].x) / c;
                    c = (a[p].y - a[f].y) / c;
                    b[b.length] = (a[t].x > a[f].x && 0 < B) || (a[t].x < a[f].x && 0 > B) ? { x: a[t].x - B / 3, y: a[t].y - c / 3 } : { x: a[t].x, y: a[t].y - c / 9 };
                    b[b.length] = a[e];
                }
            return b;
        }
        function y(a, d, b, c, e, f, p, t, B, k) {
            var m = 0;
            k ? ((p.color = f), (t.color = f)) : (k = 1);
            m = B ? Math.abs(e - b) : Math.abs(c - d);
            m = 0 < p.trimLength ? Math.abs((m * p.trimLength) / 100) : Math.abs(m - p.length);
            B ? ((b += m / 2), (e -= m / 2)) : ((d += m / 2), (c -= m / 2));
            var m = 1 === Math.round(p.thickness) % 2 ? 0.5 : 0,
                n = 1 === Math.round(t.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = k;
            a.strokeStyle = t.color || f;
            a.lineWidth = t.thickness || 2;
            a.setLineDash && a.setLineDash(N(t.dashType, t.thickness));
            a.beginPath();
            B && 0 < t.thickness
                ? (a.moveTo(c - p.thickness / 2, Math.round((b + e) / 2) - n), a.lineTo(d + p.thickness / 2, Math.round((b + e) / 2) - n))
                : 0 < t.thickness && (a.moveTo(Math.round((d + c) / 2) - n, b + p.thickness / 2), a.lineTo(Math.round((d + c) / 2) - n, e - p.thickness / 2));
            a.stroke();
            a.strokeStyle = p.color || f;
            a.lineWidth = p.thickness || 2;
            a.setLineDash && a.setLineDash(N(p.dashType, p.thickness));
            a.beginPath();
            B && 0 < p.thickness ? (a.moveTo(c - m, b), a.lineTo(c - m, e), a.moveTo(d + m, b), a.lineTo(d + m, e)) : 0 < p.thickness && (a.moveTo(d, b + m), a.lineTo(c, b + m), a.moveTo(d, e - m), a.lineTo(c, e - m));
            a.stroke();
            a.restore();
        }
        function F(a, d) {
            F.base.constructor.call(this, "Legend", "legend", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = { x1: null, y1: null, x2: null, y2: null };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize;
        }
        function H(a, d, b, c) {
            H.base.constructor.call(this, "DataSeries", "data", d, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = b;
            this.noDataPointsInPlotArea = 0;
            this.id = c;
            this.chart._eventManager.objectMap[c] = { id: c, objectType: "dataSeries", dataSeriesIndex: b };
            a = d.dataPoints ? d.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? (this.fillOpacity = 0.7) : (this.fillOpacity = 1));
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function E(a, d, b, c, e, f) {
            E.base.constructor.call(this, "Axis", d, b, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
            this.isOptionsInArray = !0;
            "axisX" === e
                ? ("left" === f || "bottom" === f
                      ? ((this.optionsName = "axisX"), s(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), (this.sessionVariables = this.chart.sessionVariables.axisX[c]))
                      : ((this.optionsName = "axisX2"), s(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}), (this.sessionVariables = this.chart.sessionVariables.axisX2[c])),
                  this.options.interval || (this.intervalType = null))
                : "left" === f || "bottom" === f
                ? ((this.optionsName = "axisY"), s(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), (this.sessionVariables = this.chart.sessionVariables.axisY[c]))
                : ((this.optionsName = "axisY2"), s(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}), (this.sessionVariables = this.chart.sessionVariables.axisY2[c]));
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || (b && "undefined" !== typeof b.gridThickness) || (this.gridThickness = 0);
            this._position = f;
            this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
            this.labelAngle = ((this.labelAngle % 360) + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? (this.labelAngle -= 180) : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new Z(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new M(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new $(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && ((this.options.viewportMinimum = void 0), (this.sessionVariables.viewportMinimum = null));
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum
                ? (this.sessionVariables.newViewportMinimum = null)
                : (this.viewportMinimum = this.sessionVariables.newViewportMinimum);
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && ((this.options.viewportMaximum = void 0), (this.sessionVariables.viewportMaximum = null));
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum
                ? (this.sessionVariables.newViewportMaximum = null)
                : (this.viewportMaximum = this.sessionVariables.newViewportMaximum);
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum");
        }
        function Z(a, d, b, c) {
            Z.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, c);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? ((this.spacing = parseFloat(this.spacing)), (this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%")) : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++)
                    this.customBreaks.push(new T(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)),
                        "number" === typeof this.customBreaks[a].startValue &&
                            "number" === typeof this.customBreaks[a].endValue &&
                            this.customBreaks[a].endValue !== this.customBreaks[a].startValue &&
                            this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function (a, c) {
                    return a.startValue - c.startValue;
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++)
                    this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue &&
                        ((this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue)),
                        window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."),
                        this._appliedBreaks.splice(a, 2),
                        a--);
            }
        }
        function T(a, d, b, c, e, f) {
            T.base.constructor.call(this, "Break", d, b, c, f);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = f;
            this.optionsName = d;
            this.isOptionsInArray = !0;
            this.type = b.type ? this.type : f.type;
            this.fillOpacity = s(b.fillOpacity) ? f.fillOpacity : this.fillOpacity;
            this.lineThickness = s(b.lineThickness) ? f.lineThickness : this.lineThickness;
            this.color = b.color ? this.color : f.color;
            this.lineColor = b.lineColor ? this.lineColor : f.lineColor;
            this.lineDashType = b.lineDashType ? this.lineDashType : f.lineDashType;
            !s(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !s(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && "number" === typeof this.endValue && this.endValue < this.startValue && ((a = this.startValue), (this.startValue = this.endValue), (this.endValue = a));
            this.spacing = "undefined" === typeof b.spacing ? f.spacing : b.spacing;
            "string" === typeof this.options.spacing
                ? ((this.spacing = parseFloat(this.spacing)), (this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%"))
                : "number" !== typeof this.options.spacing && (this.spacing = f.spacing);
            this.size = f.parent.logarithmic ? 1 : 0;
        }
        function M(a, d, b, c, e) {
            M.base.constructor.call(this, "StripLine", "stripLines", d, b, e);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue &&
                null !== this.endValue &&
                ((this.value = e.logarithmic
                    ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue))
                    : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2),
                (this._thicknessType = null));
        }
        function $(a, d, b) {
            $.base.constructor.call(this, "Crosshair", "crosshair", d, null, b);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel";
        }
        function X(a, d) {
            X.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize();
        }
        function da(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ta(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = [];
        }
        function ha(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null;
        }
        oa(l, U);
        l.prototype.destroy = function () {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) {
                var b = a[d][0],
                    c = a[d][1],
                    e = a[d][2],
                    f = a[d][3],
                    f = f || !1;
                b.removeEventListener ? b.removeEventListener(c, e, f) : b.detachEvent && b.detachEvent("on" + c, e);
            }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null;
        };
        l.prototype._updateOptions = function () {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new Ia(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && w;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this.toolbar = new Sa(this, this.options.toolbar);
            if (this.options.zoomEnabled || this.panEnabled) {
                if (this._zoomButton)
                    ga(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }),
                        (this._zoomButton.title = this._cultureInfo.zoomText);
                else {
                    var d = !1;
                    ua((this._zoomButton = document.createElement("button")));
                    va(this, this._zoomButton, "pan");
                    this._zoomButton.title = this._cultureInfo.panText;
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
                    J(
                        this._zoomButton,
                        "touchstart",
                        function (a) {
                            d = !0;
                        },
                        this.allDOMEventHandlers
                    );
                    J(
                        this._zoomButton,
                        "click",
                        function () {
                            a.zoomEnabled ? ((a.zoomEnabled = !1), (a.panEnabled = !0), va(a, a._zoomButton, "zoom")) : ((a.zoomEnabled = !0), (a.panEnabled = !1), va(a, a._zoomButton, "pan"));
                            a.render();
                        },
                        this.allDOMEventHandlers
                    );
                    J(
                        this._zoomButton,
                        "mouseover",
                        function () {
                            d
                                ? (d = !1)
                                : (ga(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && ga(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                        },
                        this.allDOMEventHandlers
                    );
                    J(
                        this._zoomButton,
                        "mouseout",
                        function () {
                            d ||
                                (ga(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }),
                                0 >= navigator.userAgent.search("MSIE") && ga(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                        },
                        this.allDOMEventHandlers
                    );
                }
                this._resetButton
                    ? (ga(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }),
                      (this._resetButton.title = this._cultureInfo.resetText))
                    : ((d = !1),
                      ua((this._resetButton = document.createElement("button"))),
                      va(this, this._resetButton, "reset"),
                      (this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor),
                      this._toolBar.appendChild(this._resetButton),
                      J(
                          this._resetButton,
                          "touchstart",
                          function (a) {
                              d = !0;
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this._resetButton,
                          "click",
                          function () {
                              a.toolTip.hide();
                              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip }, a.toolTip);
                              a.zoomEnabled || a.panEnabled
                                  ? ((a.zoomEnabled = !0), (a.panEnabled = !1), va(a, a._zoomButton, "pan"), (a._defaultCursor = "default"), (a.overlaidCanvas.style.cursor = a._defaultCursor))
                                  : ((a.zoomEnabled = !1), (a.panEnabled = !1));
                              if (a.sessionVariables.axisX) for (var c = 0; c < a.sessionVariables.axisX.length; c++) (a.sessionVariables.axisX[c].newViewportMinimum = null), (a.sessionVariables.axisX[c].newViewportMaximum = null);
                              if (a.sessionVariables.axisX2) for (c = 0; c < a.sessionVariables.axisX2.length; c++) (a.sessionVariables.axisX2[c].newViewportMinimum = null), (a.sessionVariables.axisX2[c].newViewportMaximum = null);
                              if (a.sessionVariables.axisY) for (c = 0; c < a.sessionVariables.axisY.length; c++) (a.sessionVariables.axisY[c].newViewportMinimum = null), (a.sessionVariables.axisY[c].newViewportMaximum = null);
                              if (a.sessionVariables.axisY2) for (c = 0; c < a.sessionVariables.axisY2.length; c++) (a.sessionVariables.axisY2[c].newViewportMinimum = null), (a.sessionVariables.axisY2[c].newViewportMaximum = null);
                              a.resetOverlayedCanvas();
                              ua(a._zoomButton, a._resetButton);
                              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
                              a._dispatchRangeEvent("rangeChanging", "reset");
                              a.stockChart && ((a.stockChart._rangeEventParameter.type = "rangeChanging"), a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                              a.render();
                              a.syncCharts && a.syncCharts(null, null);
                              a._dispatchRangeEvent("rangeChanged", "reset");
                              a.stockChart && ((a.stockChart._rangeEventParameter.type = "rangeChanged"), a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this._resetButton,
                          "mouseover",
                          function () {
                              d ||
                                  (ga(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && ga(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                          },
                          this.allDOMEventHandlers
                      ),
                      J(
                          this._resetButton,
                          "mouseout",
                          function () {
                              d ||
                                  (ga(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && ga(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                          },
                          this.allDOMEventHandlers
                      ),
                      (this.overlaidCanvas.style.cursor = a._defaultCursor));
                this.zoomEnabled ||
                    this.panEnabled ||
                    (this._zoomButton
                        ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? ((this.panEnabled = !0), (this.zoomEnabled = !1)) : ((this.zoomEnabled = !0), (this.panEnabled = !1)), Ka(a._zoomButton, a._resetButton))
                        : ((this.zoomEnabled = !0), (this.panEnabled = !1)));
            } else this.panEnabled = this.zoomEnabled = !1;
            gb(this);
            "none" !== this._toolBar.style.display &&
                this._zoomButton &&
                (this.panEnabled ? va(a, a._zoomButton, "zoom") : va(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && va(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b);
        };
        l.prototype._updateSize = function () {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var d = 0,
                b = 0;
            this.options.width ? (d = this.width) : (this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width);
            this.options.height ? (b = this.height) : (this.height = b = 0 < this.container.clientHeight ? this.container.clientHeight : this.height);
            if (this.canvas.width !== d * ka || this.canvas.height !== b * ka) {
                for (var c = 0; c < a.length; c++) La(a[c], d, b);
                this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
                a = !0;
            } else a = !1;
            return a;
        };
        l.prototype._initialize = function () {
            this.isNavigator = s(this.parent) || s(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this._animator ? this._animator.cancelAllAnimations() : (this._animator = new ha(this));
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = w && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = { axisPlacement: null, plotTypes: [] };
            this.layoutManager = new Da(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            this.title = null;
            this.subtitles = [];
            var a = 0,
                d = null;
            if (this.options.data) {
                for (var b = 0; b < this.options.data.length; b++)
                    if ((a++, !this.options.data[b].type || 0 <= l._supportedChartTypes.indexOf(this.options.data[b].type))) {
                        var c = new H(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
                        "error" === c.type &&
                            ((c.linkedDataSeriesIndex = s(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex),
                            0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex || "error" === this.options.data[c.linkedDataSeriesIndex].type) &&
                            (c.linkedDataSeriesIndex = null);
                        null === c.name && (c.name = "DataSeries " + a);
                        null === c.color
                            ? 1 < this.options.data.length
                                ? ((c._colorSet = [this.selectedColorSet[c.index % this.selectedColorSet.length]]), (c.color = this.selectedColorSet[c.index % this.selectedColorSet.length]))
                                : (c._colorSet =
                                      "line" === c.type ||
                                      "stepLine" === c.type ||
                                      "spline" === c.type ||
                                      "area" === c.type ||
                                      "stepArea" === c.type ||
                                      "splineArea" === c.type ||
                                      "stackedArea" === c.type ||
                                      "stackedArea100" === c.type ||
                                      "rangeArea" === c.type ||
                                      "rangeSplineArea" === c.type ||
                                      "candlestick" === c.type ||
                                      "ohlc" === c.type ||
                                      "waterfall" === c.type ||
                                      "boxAndWhisker" === c.type
                                          ? [this.selectedColorSet[0]]
                                          : this.selectedColorSet)
                            : (c._colorSet = [c.color]);
                        null === c.markerSize &&
                            ((("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16) || "scatter" === c.type) &&
                            (c.markerSize = 8);
                        ("bubble" !== c.type && "scatter" !== c.type) ||
                            !c.dataPoints ||
                            (c.dataPoints.some
                                ? c.dataPoints.some(function (a) {
                                      return a.x;
                                  }) && c.dataPoints.sort(g)
                                : c.dataPoints.sort(g));
                        this.data.push(c);
                        var e = c.axisPlacement,
                            d = d || e,
                            f;
                        "normal" === e
                            ? "xySwapped" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with bar chart')
                                : "none" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with pie chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal")
                            : "xySwapped" === e
                            ? "normal" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with line, area, column or pie chart')
                                : "none" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with pie chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped")
                            : "none" === e
                            ? "normal" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with line, area, column or bar chart')
                                : "xySwapped" === this.plotInfo.axisPlacement
                                ? (f = 'You cannot combine "' + c.type + '" with bar chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none")
                            : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + c.type + '" with pie chart');
                        if (f && window.console) {
                            window.console.log(f);
                            return;
                        }
                    }
                for (b = 0; b < this.data.length; b++) {
                    if ("none" == d && "error" === this.data[b].type && window.console) {
                        window.console.log('You cannot combine "' + c.type + '" with error chart');
                        return;
                    }
                    "error" === this.data[b].type &&
                        ((this.data[b].axisPlacement = this.plotInfo.axisPlacement = d || "normal"), (this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex]));
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = [];
        };
        l._supportedChartTypes = Ca(
            "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(
                " "
            )
        );
        l.prototype.setLayout = function () {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var b = 0; b < this.options.axisY.length; b++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisY[b] = new E(this, "axisY", this.options.axisY[b], b, "axisY", "left")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY[b] = new E(this, "axisY", this.options.axisY[b], b, "axisY", "bottom")));
                            this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                            this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisY.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisY[0] = new E(this, "axisY", this.options.axisY, 0, "axisY", "left")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY[0] = new E(this, "axisY", this.options.axisY, 0, "axisY", "bottom")))),
                                (this.data[d].axisY = this.axisY[0]),
                                this.axisY[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (b = 0; b < this.options.axisY2.length; b++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisY2[b] = new E(this, "axisY2", this.options.axisY2[b], b, "axisY", "right")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY2[b] = new E(this, "axisY2", this.options.axisY2[b], b, "axisY", "top")));
                            this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                            this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisY2.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisY2[0] = new E(this, "axisY2", this.options.axisY2, 0, "axisY", "right")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY2[0] = new E(this, "axisY2", this.options.axisY2, 0, "axisY", "top")))),
                                (this.data[d].axisY = this.axisY2[0]),
                                this.axisY2[0].dataSeries.push(this.data[d]);
                    if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (b = 0; b < this.options.axisX.length; b++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisX[b] = new E(this, "axisX", this.options.axisX[b], b, "axisX", "bottom")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX[b] = new E(this, "axisX", this.options.axisX[b], b, "axisX", "left")));
                            this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                            this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisX.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisX[0] = new E(this, "axisX", this.options.axisX, 0, "axisX", "bottom")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX[0] = new E(this, "axisX", this.options.axisX, 0, "axisX", "left")))),
                                (this.data[d].axisX = this.axisX[0]),
                                this.axisX[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (b = 0; b < this.options.axisX2.length; b++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisX2[b] = new E(this, "axisX2", this.options.axisX2[b], b, "axisX", "top")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX2[b] = new E(this, "axisX2", this.options.axisX2[b], b, "axisX", "right")));
                            this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                            this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisX2.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisX2[0] = new E(this, "axisX2", this.options.axisX2, 0, "axisX", "top")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX2[0] = new E(this, "axisX2", this.options.axisX2, 0, "axisX", "right")))),
                                (this.data[d].axisX = this.axisX2[0]),
                                this.axisX2[0].dataSeries.push(this.data[d]);
                }
            if (this.axisY) {
                for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
                for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10);
            }
            if (this.axisY2) {
                for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
                for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10);
            }
            this.axisY &&
                0 < this.axisY.length &&
                this.axisY2 &&
                0 < this.axisY2.length &&
                (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness
                    ? (this.axisY2[0].gridThickness = 0)
                    : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX) for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
            if (this.axisX2) for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
            this.axisX &&
                0 < this.axisX.length &&
                this.axisX2 &&
                0 < this.axisX2.length &&
                (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness
                    ? (this.axisX2[0].gridThickness = 0)
                    : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            b = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (d = 0; d < this._axes.length; d++)
                    if (null !== this._axes[d].viewportMinimum || null !== this._axes[d].viewportMaximum) {
                        b = !0;
                        break;
                    }
            b
                ? (Ka(this._zoomButton, this._resetButton),
                  (this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor),
                  (this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor),
                  (this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor))
                : (ua(this._zoomButton, this._resetButton), (this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent"), this.options.zoomEnabled && ((this.zoomEnabled = !0), (this.panEnabled = !1)));
            eb(this);
            this._processData();
            this.options.title && ((this.title = new ya(this, this.options.title)), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            if (this.options.subtitles) for (d = 0; d < this.options.subtitles.length; d++) (b = new Ha(this, this.options.subtitles[d], d)), this.subtitles.push(b), b.dockInsidePlotArea ? a.push(b) : b.setLayout();
            this.legend = new F(this, this.options.legend);
            for (d = 0; d < this.data.length; d++)
                (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (d = 0; d < this._axes.length; d++)
                if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
                    w ? ((this._breaksCanvas = ta(this.width, this.height, !0)), (this._breaksCanvasCtx = this._breaksCanvas.getContext("2d"))) : ((this._breaksCanvas = this.canvas), (this._breaksCanvasCtx = this.ctx));
                    break;
                }
            this._preRenderCanvas = ta(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            ("normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement) || E.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        l.prototype.renderElements = function () {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) E.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
            var b = [];
            if (this.animatedRender) {
                var c = ta(this.width, this.height);
                c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            hb(this);
            var a = this.ctx.miterLimit,
                e;
            this.ctx.miterLimit = 3;
            w &&
                this._breaksCanvas &&
                (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height),
                this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height),
                (this._breaksCanvasCtx.globalCompositeOperation = "source-atop"),
                this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (var f = this.plotInfo.plotTypes[d], p = 0; p < f.plotUnits.length; p++) {
                    var t = f.plotUnits[p],
                        B = null;
                    t.targetCanvas = null;
                    this.animatedRender && ((t.targetCanvas = ta(this.width, this.height)), (t.targetCanvasCtx = t.targetCanvas.getContext("2d")), (e = t.targetCanvasCtx.miterLimit), (t.targetCanvasCtx.miterLimit = 3));
                    "line" === t.type
                        ? (B = this.renderLine(t))
                        : "stepLine" === t.type
                        ? (B = this.renderStepLine(t))
                        : "spline" === t.type
                        ? (B = this.renderSpline(t))
                        : "column" === t.type
                        ? (B = this.renderColumn(t))
                        : "bar" === t.type
                        ? (B = this.renderBar(t))
                        : "area" === t.type
                        ? (B = this.renderArea(t))
                        : "stepArea" === t.type
                        ? (B = this.renderStepArea(t))
                        : "splineArea" === t.type
                        ? (B = this.renderSplineArea(t))
                        : "stackedColumn" === t.type
                        ? (B = this.renderStackedColumn(t))
                        : "stackedColumn100" === t.type
                        ? (B = this.renderStackedColumn100(t))
                        : "stackedBar" === t.type
                        ? (B = this.renderStackedBar(t))
                        : "stackedBar100" === t.type
                        ? (B = this.renderStackedBar100(t))
                        : "stackedArea" === t.type
                        ? (B = this.renderStackedArea(t))
                        : "stackedArea100" === t.type
                        ? (B = this.renderStackedArea100(t))
                        : "bubble" === t.type
                        ? (B = B = this.renderBubble(t))
                        : "scatter" === t.type
                        ? (B = this.renderScatter(t))
                        : "pie" === t.type
                        ? this.renderPie(t)
                        : "doughnut" === t.type
                        ? this.renderPie(t)
                        : "funnel" === t.type
                        ? (B = this.renderFunnel(t))
                        : "pyramid" === t.type
                        ? (B = this.renderFunnel(t))
                        : "candlestick" === t.type
                        ? (B = this.renderCandlestick(t))
                        : "ohlc" === t.type
                        ? (B = this.renderCandlestick(t))
                        : "rangeColumn" === t.type
                        ? (B = this.renderRangeColumn(t))
                        : "error" === t.type
                        ? (B = this.renderError(t))
                        : "rangeBar" === t.type
                        ? (B = this.renderRangeBar(t))
                        : "rangeArea" === t.type
                        ? (B = this.renderRangeArea(t))
                        : "rangeSplineArea" === t.type
                        ? (B = this.renderRangeSplineArea(t))
                        : "waterfall" === t.type
                        ? (B = this.renderWaterfall(t))
                        : "boxAndWhisker" === t.type && (B = this.renderBoxAndWhisker(t));
                    for (var k = 0; k < t.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[k]]);
                    this.animatedRender && ((t.targetCanvasCtx.miterLimit = e), B && b.push(B));
                }
            this.ctx.miterLimit = a;
            this.animatedRender &&
                this._breaksCanvasCtx &&
                b.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && ((e = ta(this.width, this.height).getContext("2d")), b.push(this.renderIndexLabels(e)));
            var m = this;
            if (0 < b.length)
                (m.disableToolTip = !0),
                    m._animator.animate(
                        200,
                        m.animationDuration,
                        function (a) {
                            m.ctx.clearRect(0, 0, m.width, m.height);
                            m.ctx.drawImage(c, 0, 0, Math.floor(m.width * ka), Math.floor(m.height * ka), 0, 0, m.width, m.height);
                            for (var e = 0; e < b.length; e++)
                                (B = b[e]),
                                    1 > a && "undefined" !== typeof B.startTimePercent
                                        ? a >= B.startTimePercent && B.animationCallback(B.easingFunction(a - B.startTimePercent, 0, 1, 1 - B.startTimePercent), B)
                                        : B.animationCallback(B.easingFunction(a, 0, 1, 1), B);
                            m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                        },
                        function () {
                            b = [];
                            for (var a = 0; a < m.plotInfo.plotTypes.length; a++) for (var e = m.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) e.plotUnits[d].targetCanvas = null;
                            c = null;
                            m.disableToolTip = !1;
                            m.dispatchEvent("dataAnimationEnd", { chart: m });
                        }
                    );
            else {
                if (m._breaksCanvas)
                    if (w) m.plotArea.ctx.drawImage(m._breaksCanvas, 0, 0, this.width, this.height);
                    else for (k = 0; k < m._axes.length; k++) m._axes[k].createMask();
                0 < m._indexLabels.length && m.renderIndexLabels();
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                m.dispatchEvent("dataAnimationEnd", { chart: m });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display || ua(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ga &&
                ((m = this),
                setTimeout(function () {
                    var a = document.getElementById("ghostCanvasCopy");
                    a && (La(a, m.width, m.height), a.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
                }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
        };
        l.prototype.render = function (a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas = null;
        };
        l.prototype.attachPlotAreaEventHandlers = function () {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea,
            });
        };
        l.prototype.categoriseDataSeries = function () {
            for (var a = "", d = 0; d < this.data.length; d++)
                if (((a = this.data[d]), a.dataPoints && 0 !== a.dataPoints.length && a.visible && 0 <= l._supportedChartTypes.indexOf(a.type))) {
                    for (var b = null, c = !1, e = null, f = !1, p = 0; p < this.plotInfo.plotTypes.length; p++)
                        if (this.plotInfo.plotTypes[p].type === a.type) {
                            c = !0;
                            b = this.plotInfo.plotTypes[p];
                            break;
                        }
                    c || ((b = { type: a.type, totalDataSeries: 0, plotUnits: [] }), this.plotInfo.plotTypes.push(b));
                    for (p = 0; p < b.plotUnits.length; p++)
                        if (b.plotUnits[p].axisYType === a.axisYType && b.plotUnits[p].axisXType === a.axisXType && b.plotUnits[p].axisYIndex === a.axisYIndex && b.plotUnits[p].axisXIndex === a.axisXIndex) {
                            f = !0;
                            e = b.plotUnits[p];
                            break;
                        }
                    f ||
                        ((e = {
                            type: a.type,
                            previousDataSeriesCount: 0,
                            index: b.plotUnits.length,
                            plotType: b,
                            axisXType: a.axisXType,
                            axisYType: a.axisYType,
                            axisYIndex: a.axisYIndex,
                            axisXIndex: a.axisXIndex,
                            axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                            axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                            dataSeriesIndexes: [],
                            yTotals: [],
                            yAbsTotals: [],
                        }),
                        b.plotUnits.push(e));
                    b.totalDataSeries++;
                    e.dataSeriesIndexes.push(d);
                    a.plotUnit = e;
                }
            for (d = 0; d < this.plotInfo.plotTypes.length; d++) for (b = this.plotInfo.plotTypes[d], p = a = 0; p < b.plotUnits.length; p++) (b.plotUnits[p].previousDataSeriesCount = a), (a += b.plotUnits[p].dataSeriesIndexes.length);
        };
        l.prototype.assignIdToDataPoints = function () {
            for (var a = 0; a < this.data.length; a++) {
                var d = this.data[a];
                if (d.dataPoints) for (var b = d.dataPoints.length, c = 0; c < b; c++) d.dataPointIds[c] = ++this._eventManager.lastObjectId;
            }
        };
        l.prototype._processData = function () {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var d = this.plotInfo.plotTypes[a], b = 0; b < d.plotUnits.length; b++) {
                    var c = d.plotUnits[b];
                    "line" === c.type ||
                    "stepLine" === c.type ||
                    "spline" === c.type ||
                    "column" === c.type ||
                    "area" === c.type ||
                    "stepArea" === c.type ||
                    "splineArea" === c.type ||
                    "bar" === c.type ||
                    "bubble" === c.type ||
                    "scatter" === c.type
                        ? this._processMultiseriesPlotUnit(c)
                        : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type
                        ? this._processStackedPlotUnit(c)
                        : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type
                        ? this._processStacked100PlotUnit(c)
                        : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type
                        ? this._processMultiYPlotUnit(c)
                        : "waterfall" === c.type && this._processSpecificPlotUnit(c);
                }
            this.calculateAutoBreaks();
        };
        l.prototype._processMultiseriesPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, f = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var t = this.data[a.dataSeriesIndexes[p]],
                        B = 0,
                        k = !1,
                        m = !1,
                        n;
                    if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
                        var q = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : this.options.axisX && this.options.axisX.viewportMinimum
                                ? this.options.axisX.viewportMinimum
                                : this.options.axisX && this.options.axisX.minimum
                                ? this.options.axisX.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            h = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : this.options.axisX && this.options.axisX.viewportMaximum
                                ? this.options.axisX.viewportMaximum
                                : this.options.axisX && this.options.axisX.maximum
                                ? this.options.axisX.maximum
                                : Infinity;
                    if ((t.dataPoints[B].x && t.dataPoints[B].x.getTime) || "dateTime" === t.xValueType) f = !0;
                    for (B = 0; B < t.dataPoints.length; B++) {
                        "undefined" === typeof t.dataPoints[B].x && (t.dataPoints[B].x = B + (a.axisX.logarithmic ? 1 : 0));
                        t.dataPoints[B].x.getTime ? ((f = !0), (c = t.dataPoints[B].x.getTime())) : (c = t.dataPoints[B].x);
                        e = t.dataPoints[B].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        e < d.min && "number" === typeof e && (d.min = e);
                        e > d.max && "number" === typeof e && (d.max = e);
                        if (0 < B) {
                            if (a.axisX.logarithmic) {
                                var r = c / t.dataPoints[B - 1].x;
                                1 > r && (r = 1 / r);
                                b.minDiff > r && 1 !== r && (b.minDiff = r);
                            } else (r = c - t.dataPoints[B - 1].x), 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r);
                            null !== e &&
                                null !== t.dataPoints[B - 1].y &&
                                (a.axisY.logarithmic
                                    ? ((r = e / t.dataPoints[B - 1].y), 1 > r && (r = 1 / r), d.minDiff > r && 1 !== r && (d.minDiff = r))
                                    : ((r = e - t.dataPoints[B - 1].y), 0 > r && (r *= -1), d.minDiff > r && 0 !== r && (d.minDiff = r)));
                        }
                        if (c < q && !k) null !== e && (n = c);
                        else {
                            if (!k && ((k = !0), 0 < B)) {
                                B -= 2;
                                continue;
                            }
                            if (c > h && !m) m = !0;
                            else if (c > h && m) continue;
                            t.dataPoints[B].label && (a.axisX.labels[c] = t.dataPoints[B].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === e ? b.viewPortMin === c && n < c && (b.viewPortMin = n) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e));
                        }
                    }
                    t.axisX.valueType = t.xValueType = f ? "dateTime" : "number";
                }
        };
        l.prototype._processStackedPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, f = !1, p = [], t = [], B = Infinity, k = -Infinity, m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = this.data[a.dataSeriesIndexes[m]],
                        q = 0,
                        h = !1,
                        r = !1,
                        g;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                        var l = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : this.options.axisX && this.options.axisX.viewportMinimum
                                ? this.options.axisX.viewportMinimum
                                : this.options.axisX && this.options.axisX.minimum
                                ? this.options.axisX.minimum
                                : -Infinity,
                            u = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : this.options.axisX && this.options.axisX.viewportMaximum
                                ? this.options.axisX.viewportMaximum
                                : this.options.axisX && this.options.axisX.maximum
                                ? this.options.axisX.maximum
                                : Infinity;
                    if ((n.dataPoints[q].x && n.dataPoints[q].x.getTime) || "dateTime" === n.xValueType) f = !0;
                    for (q = 0; q < n.dataPoints.length; q++) {
                        "undefined" === typeof n.dataPoints[q].x && (n.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        n.dataPoints[q].x.getTime ? ((f = !0), (c = n.dataPoints[q].x.getTime())) : (c = n.dataPoints[q].x);
                        e = s(n.dataPoints[q].y) ? 0 : n.dataPoints[q].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < q) {
                            if (a.axisX.logarithmic) {
                                var x = c / n.dataPoints[q - 1].x;
                                1 > x && (x = 1 / x);
                                b.minDiff > x && 1 !== x && (b.minDiff = x);
                            } else (x = c - n.dataPoints[q - 1].x), 0 > x && (x *= -1), b.minDiff > x && 0 !== x && (b.minDiff = x);
                            null !== e &&
                                null !== n.dataPoints[q - 1].y &&
                                (a.axisY.logarithmic
                                    ? 0 < e && ((x = e / n.dataPoints[q - 1].y), 1 > x && (x = 1 / x), d.minDiff > x && 1 !== x && (d.minDiff = x))
                                    : ((x = e - n.dataPoints[q - 1].y), 0 > x && (x *= -1), d.minDiff > x && 0 !== x && (d.minDiff = x)));
                        }
                        if (c < l && !h) null !== n.dataPoints[q].y && (g = c);
                        else {
                            if (!h && ((h = !0), 0 < q)) {
                                q -= 2;
                                continue;
                            }
                            if (c > u && !r) r = !0;
                            else if (c > u && r) continue;
                            n.dataPoints[q].label && (a.axisX.labels[c] = n.dataPoints[q].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === n.dataPoints[q].y
                                ? b.viewPortMin === c && g < c && (b.viewPortMin = g)
                                : ((a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e),
                                  (a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(e)),
                                  0 <= e ? (p[c] ? (p[c] += e) : ((p[c] = e), (B = Math.min(e, B)))) : t[c] ? (t[c] += e) : ((t[c] = e), (k = Math.max(e, k))));
                        }
                    }
                    a.axisY.scaleBreaks &&
                        a.axisY.scaleBreaks.autoCalculate &&
                        1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks &&
                        (d.dataPointYPositiveSums
                            ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, p), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, t))
                            : ((d.dataPointYPositiveSums = p), (d.dataPointYNegativeSums = t)));
                    n.axisX.valueType = n.xValueType = f ? "dateTime" : "number";
                }
                for (q in p)
                    p.hasOwnProperty(q) &&
                        !isNaN(q) &&
                        ((a = p[q]),
                        a < d.min && (d.min = Math.min(a, B)),
                        a > d.max && (d.max = a),
                        q < b.viewPortMin || q > b.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, B)), a > d.viewPortMax && (d.viewPortMax = a)));
                for (q in t)
                    t.hasOwnProperty(q) &&
                        !isNaN(q) &&
                        ((a = t[q]),
                        a < d.min && (d.min = a),
                        a > d.max && (d.max = Math.max(a, k)),
                        q < b.viewPortMin || q > b.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
            }
        };
        l.prototype._processStacked100PlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, f = !1, p = !1, t = !1, B = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var m = this.data[a.dataSeriesIndexes[k]],
                        n = 0,
                        q = !1,
                        h = !1,
                        r;
                    if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement)
                        var g = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : this.options.axisX && this.options.axisX.viewportMinimum
                                ? this.options.axisX.viewportMinimum
                                : this.options.axisX && this.options.axisX.minimum
                                ? this.options.axisX.minimum
                                : -Infinity,
                            l = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : this.options.axisX && this.options.axisX.viewportMaximum
                                ? this.options.axisX.viewportMaximum
                                : this.options.axisX && this.options.axisX.maximum
                                ? this.options.axisX.maximum
                                : Infinity;
                    if ((m.dataPoints[n].x && m.dataPoints[n].x.getTime) || "dateTime" === m.xValueType) f = !0;
                    for (n = 0; n < m.dataPoints.length; n++) {
                        "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        m.dataPoints[n].x.getTime ? ((f = !0), (c = m.dataPoints[n].x.getTime())) : (c = m.dataPoints[n].x);
                        e = s(m.dataPoints[n].y) ? null : m.dataPoints[n].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < n) {
                            if (a.axisX.logarithmic) {
                                var u = c / m.dataPoints[n - 1].x;
                                1 > u && (u = 1 / u);
                                b.minDiff > u && 1 !== u && (b.minDiff = u);
                            } else (u = c - m.dataPoints[n - 1].x), 0 > u && (u *= -1), b.minDiff > u && 0 !== u && (b.minDiff = u);
                            s(e) ||
                                null === m.dataPoints[n - 1].y ||
                                (a.axisY.logarithmic
                                    ? 0 < e && ((u = e / m.dataPoints[n - 1].y), 1 > u && (u = 1 / u), d.minDiff > u && 1 !== u && (d.minDiff = u))
                                    : ((u = e - m.dataPoints[n - 1].y), 0 > u && (u *= -1), d.minDiff > u && 0 !== u && (d.minDiff = u)));
                        }
                        if (c < g && !q) null !== e && (r = c);
                        else {
                            if (!q && ((q = !0), 0 < n)) {
                                n -= 2;
                                continue;
                            }
                            if (c > l && !h) h = !0;
                            else if (c > l && h) continue;
                            m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === e
                                ? b.viewPortMin === c && r < c && (b.viewPortMin = r)
                                : ((a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e),
                                  (a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(e)),
                                  0 <= e ? (p = !0) : 0 > e && (t = !0),
                                  (B[c] = B[c] ? B[c] + Math.abs(e) : Math.abs(e)));
                        }
                    }
                    m.axisX.valueType = m.xValueType = f ? "dateTime" : "number";
                }
                a.axisY.logarithmic
                    ? ((d.max = s(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05))), (d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)))
                    : p && !t
                    ? ((d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99)), (d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)))
                    : p && t
                    ? ((d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99)), (d.min = s(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)))
                    : !p && t && ((d.max = s(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1)), (d.min = s(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)));
                d.viewPortMin = d.min;
                d.viewPortMax = d.max;
                a.dataPointYSums = B;
            }
        };
        l.prototype._processMultiYPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, f, p, t = !1, B = 0; B < a.dataSeriesIndexes.length; B++) {
                    var k = this.data[a.dataSeriesIndexes[B]],
                        m = 0,
                        n = !1,
                        q = !1,
                        h,
                        r,
                        g;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                        var l = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : this.options.axisX && this.options.axisX.viewportMinimum
                                ? this.options.axisX.viewportMinimum
                                : this.options.axisX && this.options.axisX.minimum
                                ? this.options.axisX.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            u = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : this.options.axisX && this.options.axisX.viewportMaximum
                                ? this.options.axisX.viewportMaximum
                                : this.options.axisX && this.options.axisX.maximum
                                ? this.options.axisX.maximum
                                : Infinity;
                    if ((k.dataPoints[m].x && k.dataPoints[m].x.getTime) || "dateTime" === k.xValueType) t = !0;
                    for (m = 0; m < k.dataPoints.length; m++) {
                        "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                        k.dataPoints[m].x.getTime ? ((t = !0), (c = k.dataPoints[m].x.getTime())) : (c = k.dataPoints[m].x);
                        if ((e = k.dataPoints[m].y) && e.length) {
                            f = Math.min.apply(null, e);
                            p = Math.max.apply(null, e);
                            r = !0;
                            for (var x = 0; x < e.length; x++) null === e.k && (r = !1);
                            r && (n || (g = h), (h = c));
                        }
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        f < d.min && (d.min = f);
                        p > d.max && (d.max = p);
                        0 < m &&
                            (a.axisX.logarithmic
                                ? ((r = c / k.dataPoints[m - 1].x), 1 > r && (r = 1 / r), b.minDiff > r && 1 !== r && (b.minDiff = r))
                                : ((r = c - k.dataPoints[m - 1].x), 0 > r && (r *= -1), b.minDiff > r && 0 !== r && (b.minDiff = r)),
                            e &&
                                null !== e[0] &&
                                k.dataPoints[m - 1].y &&
                                null !== k.dataPoints[m - 1].y[0] &&
                                (a.axisY.logarithmic
                                    ? ((r = e[0] / k.dataPoints[m - 1].y[0]), 1 > r && (r = 1 / r), d.minDiff > r && 1 !== r && (d.minDiff = r))
                                    : ((r = e[0] - k.dataPoints[m - 1].y[0]), 0 > r && (r *= -1), d.minDiff > r && 0 !== r && (d.minDiff = r))));
                        if (!(c < l) || n) {
                            if (!n && ((n = !0), 0 < m)) {
                                m -= 2;
                                h = g;
                                continue;
                            }
                            if (c > u && !q) q = !0;
                            else if (c > u && q) continue;
                            k.dataPoints[m].label && (a.axisX.labels[c] = k.dataPoints[m].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            if (b.viewPortMin === c && e)
                                for (x = 0; x < e.length; x++)
                                    if (null === e[x] && h < c) {
                                        b.viewPortMin = h;
                                        break;
                                    }
                            null === e ? b.viewPortMin === c && h < c && (b.viewPortMin = h) : (f < d.viewPortMin && (d.viewPortMin = f), p > d.viewPortMax && (d.viewPortMax = p));
                        }
                    }
                    k.axisX.valueType = k.xValueType = t ? "dateTime" : "number";
                }
        };
        l.prototype._processSpecificPlotUnit = function (a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, f = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var t = this.data[a.dataSeriesIndexes[p]],
                        B = 0,
                        k = !1,
                        m = !1,
                        n = (c = 0);
                    if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
                        var q = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : this.options.axisX && this.options.axisX.viewportMinimum
                                ? this.options.axisX.viewportMinimum
                                : this.options.axisX && this.options.axisX.minimum
                                ? this.options.axisX.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            h = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : this.options.axisX && this.options.axisX.viewportMaximum
                                ? this.options.axisX.viewportMaximum
                                : this.options.axisX && this.options.axisX.maximum
                                ? this.options.axisX.maximum
                                : Infinity;
                    if ((t.dataPoints[B].x && t.dataPoints[B].x.getTime) || "dateTime" === t.xValueType) f = !0;
                    for (B = 0; B < t.dataPoints.length; B++)
                        "undefined" !== typeof t.dataPoints[B].isCumulativeSum && !0 === t.dataPoints[B].isCumulativeSum
                            ? ((t.dataPointEOs[B].cumulativeSumYStartValue = 0), (t.dataPointEOs[B].cumulativeSum = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum), (t.dataPoints[B].y = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum))
                            : "undefined" !== typeof t.dataPoints[B].isIntermediateSum && !0 === t.dataPoints[B].isIntermediateSum
                            ? ((t.dataPointEOs[B].cumulativeSumYStartValue = n),
                              (t.dataPointEOs[B].cumulativeSum = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum),
                              (t.dataPoints[B].y = 0 === B ? 0 : c),
                              (n = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum),
                              (c = 0))
                            : ((e = "number" !== typeof t.dataPoints[B].y ? 0 : t.dataPoints[B].y),
                              (t.dataPointEOs[B].cumulativeSumYStartValue = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum),
                              (t.dataPointEOs[B].cumulativeSum = 0 === B ? e : t.dataPointEOs[B - 1].cumulativeSum + e),
                              (c += e));
                    for (B = 0; B < t.dataPoints.length; B++)
                        if (
                            ("undefined" === typeof t.dataPoints[B].x && (t.dataPoints[B].x = B + (a.axisX.logarithmic ? 1 : 0)),
                            t.dataPoints[B].x.getTime ? ((f = !0), (c = t.dataPoints[B].x.getTime())) : (c = t.dataPoints[B].x),
                            (e = t.dataPoints[B].y),
                            c < b.min && (b.min = c),
                            c > b.max && (b.max = c),
                            t.dataPointEOs[B].cumulativeSum < d.min && (d.min = t.dataPointEOs[B].cumulativeSum),
                            t.dataPointEOs[B].cumulativeSum > d.max && (d.max = t.dataPointEOs[B].cumulativeSum),
                            0 < B &&
                                (a.axisX.logarithmic
                                    ? ((n = c / t.dataPoints[B - 1].x), 1 > n && (n = 1 / n), b.minDiff > n && 1 !== n && (b.minDiff = n))
                                    : ((n = c - t.dataPoints[B - 1].x), 0 > n && (n *= -1), b.minDiff > n && 0 !== n && (b.minDiff = n)),
                                null !== e &&
                                    null !== t.dataPoints[B - 1].y &&
                                    (a.axisY.logarithmic
                                        ? ((e = t.dataPointEOs[B].cumulativeSum / t.dataPointEOs[B - 1].cumulativeSum), 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e))
                                        : ((e = t.dataPointEOs[B].cumulativeSum - t.dataPointEOs[B - 1].cumulativeSum), 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))),
                            !(c < q) || k)
                        ) {
                            if (!k && ((k = !0), 0 < B)) {
                                B -= 2;
                                continue;
                            }
                            if (c > h && !m) m = !0;
                            else if (c > h && m) continue;
                            t.dataPoints[B].label && (a.axisX.labels[c] = t.dataPoints[B].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            0 < B &&
                                (t.dataPointEOs[B - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[B - 1].cumulativeSum),
                                t.dataPointEOs[B - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[B - 1].cumulativeSum));
                            t.dataPointEOs[B].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[B].cumulativeSum);
                            t.dataPointEOs[B].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[B].cumulativeSum);
                        }
                    t.axisX.valueType = t.xValueType = f ? "dateTime" : "number";
                }
        };
        l.prototype.calculateAutoBreaks = function () {
            function a(a, c, b, e) {
                if (e) return (b = Math.pow(Math.min((b * a) / c, c / a), 0.2)), 1 >= b && (b = Math.pow(1 > a ? 1 / a : Math.min(c / a, a), 0.25)), { startValue: a * b, endValue: c / b };
                b = 0.2 * Math.min(b - c + a, c - a);
                0 >= b && (b = 0.25 * Math.min(c - a, Math.abs(a)));
                return { startValue: a + b, endValue: c - b };
            }
            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var c = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (c || b)
                        for (var d = a.axisY.dataInfo, f = a.axisX.dataInfo, h, k = f.min, p = f.max, m = d.min, n = d.max, f = f._dataRanges, d = d._dataRanges, q, t = 0, B = 0; B < a.dataSeriesIndexes.length; B++) {
                            var g = e.data[a.dataSeriesIndexes[B]];
                            if (!(4 > g.dataPoints.length))
                                for (t = 0; t < g.dataPoints.length; t++)
                                    if (
                                        (c &&
                                            ((q = ((p + 1 - k) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100),
                                            (h = g.dataPoints[t].x.getTime ? g.dataPoints[t].x.getTime() : g.dataPoints[t].x),
                                            (q = Math.floor((h - k) / q)),
                                            h < f[q].min && (f[q].min = h),
                                            h > f[q].max && (f[q].max = h)),
                                        b)
                                    ) {
                                        var l = ((n + 1 - m) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100;
                                        if ((h = "waterfall" === a.type ? g.dataPointEOs[t].cumulativeSum : g.dataPoints[t].y) && h.length)
                                            for (var w = 0; w < h.length; w++) (q = Math.floor((h[w] - m) / l)), h[w] < d[q].min && (d[q].min = h[w]), h[w] > d[q].max && (d[q].max = h[w]);
                                        else s(h) || ((q = Math.floor((h - m) / l)), h < d[q].min && (d[q].min = h), h > d[q].max && (d[q].max = h));
                                    }
                        }
                }
            }
            function b(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var c = a.axisX.dataInfo, b = c.min, d = c.max, f = c._dataRanges, h, k = 0, p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var m = e.data[a.dataSeriesIndexes[p]];
                        if (!(4 > m.dataPoints.length))
                            for (k = 0; k < m.dataPoints.length; k++)
                                (h = ((d + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100),
                                    (c = m.dataPoints[k].x.getTime ? m.dataPoints[k].x.getTime() : m.dataPoints[k].x),
                                    (h = Math.floor((c - b) / h)),
                                    c < f[h].min && (f[h].min = c),
                                    c > f[h].max && (f[h].max = c);
                    }
            }
            for (var c, e = this, f = !1, p = 0; p < this._axes.length; p++)
                if (this._axes[p].scaleBreaks && this._axes[p].scaleBreaks.autoCalculate && 1 <= this._axes[p].scaleBreaks.maxNumberOfAutoBreaks) {
                    f = !0;
                    this._axes[p].dataInfo._dataRanges = [];
                    for (var t = 0; t < 100 / Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) || 10, 10); t++) this._axes[p].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
                }
            if (f) {
                for (p = 0; p < this.plotInfo.plotTypes.length; p++)
                    for (f = this.plotInfo.plotTypes[p], t = 0; t < f.plotUnits.length; t++)
                        (c = f.plotUnits[t]),
                            "line" === c.type ||
                            "stepLine" === c.type ||
                            "spline" === c.type ||
                            "column" === c.type ||
                            "area" === c.type ||
                            "stepArea" === c.type ||
                            "splineArea" === c.type ||
                            "bar" === c.type ||
                            "bubble" === c.type ||
                            "scatter" === c.type ||
                            "candlestick" === c.type ||
                            "ohlc" === c.type ||
                            "rangeColumn" === c.type ||
                            "rangeBar" === c.type ||
                            "rangeArea" === c.type ||
                            "rangeSplineArea" === c.type ||
                            "waterfall" === c.type ||
                            "error" === c.type ||
                            "boxAndWhisker" === c.type
                                ? d(c)
                                : 0 <= c.type.indexOf("stacked") && b(c);
                for (p = 0; p < this._axes.length; p++)
                    if (this._axes[p].dataInfo._dataRanges) {
                        var B = this._axes[p].dataInfo.min;
                        c = ((this._axes[p].dataInfo.max + 1 - B) * Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) || 10, 10)) / 100;
                        var k = this._axes[p].dataInfo._dataRanges,
                            m,
                            n,
                            f = [];
                        if (this._axes[p].dataInfo.dataPointYPositiveSums) {
                            var q = this._axes[p].dataInfo.dataPointYPositiveSums;
                            m = k;
                            for (t in q)
                                if (q.hasOwnProperty(t) && !isNaN(t) && ((n = q[t]), !s(n))) {
                                    var h = Math.floor((n - B) / c);
                                    n < m[h].min && (m[h].min = n);
                                    n > m[h].max && (m[h].max = n);
                                }
                            delete this._axes[p].dataInfo.dataPointYPositiveSums;
                        }
                        if (this._axes[p].dataInfo.dataPointYNegativeSums) {
                            q = this._axes[p].dataInfo.dataPointYNegativeSums;
                            m = k;
                            for (t in q) q.hasOwnProperty(t) && !isNaN(t) && ((n = -1 * q[t]), s(n) || ((h = Math.floor((n - B) / c)), n < m[h].min && (m[h].min = n), n > m[h].max && (m[h].max = n)));
                            delete this._axes[p].dataInfo.dataPointYNegativeSums;
                        }
                        for (t = 0; t < k.length - 1; t++)
                            if (((m = k[t].max), isFinite(m)))
                                for (; t < k.length - 1; )
                                    if (((B = k[t + 1].min), isFinite(B))) {
                                        n = B - m;
                                        n > c && f.push({ diff: n, start: m, end: B });
                                        break;
                                    } else t++;
                        if (this._axes[p].scaleBreaks.customBreaks)
                            for (t = 0; t < this._axes[p].scaleBreaks.customBreaks.length; t++)
                                for (c = 0; c < f.length; c++)
                                    if (
                                        (this._axes[p].scaleBreaks.customBreaks[t].startValue <= f[c].start && f[c].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue) ||
                                        (this._axes[p].scaleBreaks.customBreaks[t].startValue <= f[c].start && f[c].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue) ||
                                        (f[c].start <= this._axes[p].scaleBreaks.customBreaks[t].startValue && this._axes[p].scaleBreaks.customBreaks[t].startValue <= f[c].end) ||
                                        (f[c].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue && this._axes[p].scaleBreaks.customBreaks[t].endValue <= f[c].end)
                                    )
                                        f.splice(c, 1), c--;
                        f.sort(function (a, c) {
                            return c.diff - a.diff;
                        });
                        for (t = 0; t < Math.min(f.length, this._axes[p].scaleBreaks.maxNumberOfAutoBreaks); t++)
                            (c = a(f[t].start, f[t].end, this._axes[p].logarithmic ? this._axes[p].dataInfo.max / this._axes[p].dataInfo.min : this._axes[p].dataInfo.max - this._axes[p].dataInfo.min, this._axes[p].logarithmic)),
                                this._axes[p].scaleBreaks.autoBreaks.push(new T(this, "autoBreaks", c, t, ++this._eventManager.lastObjectId, this._axes[p].scaleBreaks)),
                                this._axes[p].scaleBreaks._appliedBreaks.push(this._axes[p].scaleBreaks.autoBreaks[this._axes[p].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[p].scaleBreaks._appliedBreaks.sort(function (a, c) {
                            return a.startValue - c.startValue;
                        });
                    }
            }
        };
        l.prototype.renderCrosshairs = function (a) {
            for (var d = 0; d < this.axisX.length; d++)
                this.axisX[d] != a && this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
            for (d = 0; d < this.axisX2.length; d++)
                this.axisX2[d] != a && this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY.length; d++) this.axisY[d] != a && this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden && this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY2.length; d++)
                this.axisY2[d] != a && this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue);
        };
        l.prototype.getDataPointAtXY = function (a, d, b) {
            b = b || !1;
            for (var c = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var f = null;
                (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, b)) && c.push(f);
            }
            a = null;
            d = !1;
            for (b = 0; b < c.length; b++)
                if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                    if (((e = la("markerSize", c[b].dataPoint, c[b].dataSeries) || 8), c[b].distance <= e / 2)) {
                        d = !0;
                        break;
                    }
            for (b = 0; b < c.length; b++)
                (d && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type) || (a ? c[b].distance <= a.distance && (a = c[b]) : (a = c[b]));
            return a;
        };
        l.prototype.getObjectAtXY = function (a, d, b) {
            var c = null;
            if ((b = this.getDataPointAtXY(a, d, b || !1))) c = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (w) c = Ya(a, d, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var e = this.legend.items[b];
                    a >= e.x1 && a <= e.x2 && d >= e.y1 && d <= e.y2 && (c = e.id);
                }
            return c;
        };
        l.prototype.getAutoFontSize = lb;
        l.prototype.resetOverlayedCanvas = function () {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        l.prototype.clearCanvas = kb;
        l.prototype.attachEvent = function (a) {
            this._events.push(a);
        };
        l.prototype._touchEventHandler = function (a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var d = [],
                    b = a.changedTouches,
                    c = b ? b[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        d = ["mousemove", "mousedown"];
                        this._lastTouchData = Na(c);
                        this._lastTouchData.time = new Date();
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        d = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var f = this._lastTouchData && this._lastTouchData.time ? new Date() - this._lastTouchData.time : 0,
                            d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return;
                }
                if (!(b && 1 < b.length)) {
                    e = Na(c);
                    e.time = new Date();
                    try {
                        var p = e.y - this._lastTouchData.y,
                            f = e.time - this._lastTouchData.time;
                        if ((1 < Math.abs(p) && this._lastTouchData.scroll) || (5 < Math.abs(p) && 250 > f)) this._lastTouchData.scroll = !0;
                    } catch (t) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), (this.isDrag = !1);
                    else
                        for (b = 0; b < d.length; b++)
                            if (
                                ((e = d[b]),
                                (p = document.createEvent("MouseEvent")),
                                p.initMouseEvent(e, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null),
                                c.target.dispatchEvent(p),
                                (!s(this._lastTouchData.scroll) && !this._lastTouchData.scroll) || (!this._lastTouchData.scroll && 250 < f) || "click" === e)
                            )
                                a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
                }
            }
        };
        l.prototype._dispatchRangeEvent = function (a, d) {
            var b = { chart: this };
            b.type = a;
            b.trigger = d;
            var c = [];
            this.axisX && 0 < this.axisX.length && c.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
            this.axisY && 0 < this.axisY.length && c.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
            for (var e = 0; e < c.length; e++)
                if ((s(b[c[e]]) && (b[c[e]] = []), "axisY" === c[e]))
                    for (var f = 0; f < this.axisY.length; f++) b[c[e]].push({ viewportMinimum: this[c[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[c[e]][f].sessionVariables.newViewportMaximum });
                else if ("axisY2" === c[e]) for (f = 0; f < this.axisY2.length; f++) b[c[e]].push({ viewportMinimum: this[c[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[c[e]][f].sessionVariables.newViewportMaximum });
                else if ("axisX" === c[e]) for (f = 0; f < this.axisX.length; f++) b[c[e]].push({ viewportMinimum: this[c[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[c[e]][f].sessionVariables.newViewportMaximum });
                else if ("axisX2" === c[e]) for (f = 0; f < this.axisX2.length; f++) b[c[e]].push({ viewportMinimum: this[c[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[c[e]][f].sessionVariables.newViewportMaximum });
            this.dispatchEvent(a, b, this);
        };
        l.prototype._mouseEventHandler = function (a) {
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var d = Na(a),
                b = a.type,
                c,
                e;
            a.which ? (e = 3 == a.which) : a.button && (e = 2 == a.button);
            l.capturedEventParam &&
                ((c = l.capturedEventParam),
                "mouseup" === b && ((l.capturedEventParam = null), c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, !1)),
                c.hasOwnProperty(b) &&
                    ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? (a.target !== c.chart.overlaidCanvas && w) || c[b].call(c.context, d.x, d.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (
                    (a.preventManipulation && a.preventManipulation(),
                    a.preventDefault && a.preventDefault(),
                    Ga && window.console && (window.console.log(b + " --\x3e x: " + d.x + "; y:" + d.y), e && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup")),
                    !e)
                ) {
                    if (!l.capturedEventParam && this._events) {
                        for (var f = 0; f < this._events.length; f++)
                            if (this._events[f].hasOwnProperty(b))
                                if (((c = this._events[f]), (e = c.bounds), d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2)) {
                                    c[b].call(c.context, d.x, d.y);
                                    "mousedown" === b && !0 === c.capture
                                        ? ((l.capturedEventParam = c), this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1))
                                        : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break;
                                } else c = null;
                        a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor;
                    }
                    b = this.plotArea;
                    if (d.x < b.x1 || d.x > b.x2 || d.y < b.y1 || d.y > b.y2) {
                        this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                        for (f = 0; f < this.axisX.length; f++)
                            this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && this.axisX[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[f].options }, this.axisX[f].crosshair);
                        for (f = 0; f < this.axisX2.length; f++)
                            this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && this.axisX2[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[f].options }, this.axisX2[f].crosshair);
                        for (f = 0; f < this.axisY.length; f++)
                            this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && this.axisY[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[f].options }, this.axisY[f].crosshair);
                        for (f = 0; f < this.axisY2.length; f++)
                            this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && this.axisY2[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[f].options }, this.axisY2[f].crosshair);
                    }
                    (this.isDrag && this.zoomEnabled) || !this._eventManager || this._eventManager.mouseEventHandler(a);
                }
        };
        l.prototype._plotAreaMouseDown = function (a, d) {
            this.isDrag = !0;
            this.dragStartPoint = { x: a, y: d };
        };
        l.prototype._plotAreaMouseUp = function (a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var b = d - this.dragStartPoint.y,
                    c = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    p = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement)
                    var t = f,
                        f = e,
                        e = t;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = f = 0; e < this._axes.length; e++)
                            (b = this._axes[e]),
                                b.logarithmic
                                    ? b.viewportMinimum < b.minimum
                                        ? ((f = b.minimum / b.viewportMinimum), (b.sessionVariables.newViewportMinimum = b.viewportMinimum * f), (b.sessionVariables.newViewportMaximum = b.viewportMaximum * f), (p = !0))
                                        : b.viewportMaximum > b.maximum &&
                                          ((f = b.viewportMaximum / b.maximum), (b.sessionVariables.newViewportMinimum = b.viewportMinimum / f), (b.sessionVariables.newViewportMaximum = b.viewportMaximum / f), (p = !0))
                                    : b.viewportMinimum < b.minimum
                                    ? ((f = b.minimum - b.viewportMinimum), (b.sessionVariables.newViewportMinimum = b.viewportMinimum + f), (b.sessionVariables.newViewportMaximum = b.viewportMaximum + f), (p = !0))
                                    : b.viewportMaximum > b.maximum &&
                                      ((f = b.viewportMaximum - b.maximum), (b.sessionVariables.newViewportMinimum = b.viewportMinimum - f), (b.sessionVariables.newViewportMaximum = b.viewportMaximum - f), (p = !0));
                    else if ((!e || 2 < Math.abs(c)) && (!f || 2 < Math.abs(b)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        b = e ? this.dragStartPoint.x : this.plotArea.x1;
                        c = f ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        f = f ? d : this.plotArea.y2;
                        2 < Math.abs(b - e) && 2 < Math.abs(c - f) && this._zoomPanToSelectedRegion(b, c, e, f) && (p = !0);
                    }
                    p &&
                        ((this._ignoreNextEvent = !0),
                        this._dispatchRangeEvent("rangeChanging", "zoom"),
                        this.stockChart &&
                            this.stockChart.navigator &&
                            this.stockChart.navigator.enabled &&
                            (this.stockChart._rangeEventParameter ||
                                (this.stockChart._rangeEventParameter = {
                                    stockChart: this.stockChart,
                                    source: "chart",
                                    index: this.stockChart.charts.indexOf(this),
                                    minimum: this.stockChart.sessionVariables._axisXMin,
                                    maximum: this.stockChart.sessionVariables._axisXMax,
                                }),
                            (this.stockChart._rangeEventParameter.type = "rangeChanging"),
                            this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)),
                        this.render(),
                        this._dispatchRangeEvent("rangeChanged", "zoom"),
                        this.stockChart &&
                            this.stockChart.navigator &&
                            this.stockChart.navigator.enabled &&
                            ((this.stockChart._rangeEventParameter.type = "rangeChanged"), this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)),
                        p && this.zoomEnabled && "none" === this._zoomButton.style.display && (Ka(this._zoomButton, this._resetButton), va(this, this._zoomButton, "pan"), va(this, this._resetButton, "reset")));
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length) for (p = 0; p < this.axisX.length; p++) this.axisX[p].crosshair && this.axisX[p].crosshair.enabled && this.axisX[p].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (p = 0; p < this.axisX2.length; p++) this.axisX2[p].crosshair && this.axisX2[p].crosshair.enabled && this.axisX2[p].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (p = 0; p < this.axisY.length; p++) this.axisY[p].crosshair && this.axisY[p].crosshair.enabled && this.axisY[p].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (p = 0; p < this.axisY2.length; p++) this.axisY2[p].crosshair && this.axisY2[p].crosshair.enabled && this.axisY2[p].renderCrosshair(a, d);
            }
        };
        l.prototype._plotAreaMouseMove = function (a, d) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var b = 0,
                    c = 0,
                    e = (b = null),
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    p = this;
                "xySwapped" === this.plotInfo.axisPlacement && ((b = f), (f = e), (e = b));
                b = this.dragStartPoint.x - a;
                c = this.dragStartPoint.y - d;
                if (2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled)) {
                    this.toolTip.hide();
                    this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
                    for (var t = 0; t < this.axisX.length; t++)
                        this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && (this.axisX[t].crosshair.hide(), this.axisX[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[t].options }, this.axisX[t].crosshair));
                    for (t = 0; t < this.axisX2.length; t++)
                        this.axisX2[t].crosshair &&
                            this.axisX2[t].crosshair.enabled &&
                            (this.axisX2[t].crosshair.hide(), this.axisX2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[t].options }, this.axisX2[t].crosshair));
                    for (t = 0; t < this.axisY.length; t++)
                        this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && (this.axisY[t].crosshair.hide(), this.axisY[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[t].options }, this.axisY[t].crosshair));
                    for (t = 0; t < this.axisY2.length; t++)
                        this.axisY2[t].crosshair &&
                            this.axisY2[t].crosshair.enabled &&
                            (this.axisY2[t].crosshair.hide(), this.axisY2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[t].options }, this.axisY2[t].crosshair));
                } else this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
                if ((!e || 2 < Math.abs(b) || !f || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled)
                        (e = { x1: e ? this.plotArea.x1 + b : this.plotArea.x1, y1: f ? this.plotArea.y1 + c : this.plotArea.y1, x2: e ? this.plotArea.x2 + b : this.plotArea.x2, y2: f ? this.plotArea.y2 + c : this.plotArea.y2 }),
                            clearTimeout(p._panTimerId),
                            (p._panTimerId = setTimeout(
                                (function (c, b, e, f) {
                                    return function () {
                                        p._zoomPanToSelectedRegion(c, b, e, f, !0) &&
                                            (p._dispatchRangeEvent("rangeChanging", "pan"),
                                            p.stockChart &&
                                                p.stockChart.navigator &&
                                                p.stockChart.navigator.enabled &&
                                                ((p.stockChart._rangeEventParameter.type = "rangeChanging"), p.stockChart.dispatchEvent("rangeChanging", p.stockChart._rangeEventParameter, p.stockChart)),
                                            p.render(),
                                            p._dispatchRangeEvent("rangeChanged", "pan"),
                                            p.stockChart &&
                                                p.stockChart.navigator &&
                                                p.stockChart.navigator.enabled &&
                                                ((p.stockChart._rangeEventParameter.type = "rangeChanged"), p.stockChart.dispatchEvent("rangeChanged", p.stockChart._rangeEventParameter, p.stockChart)),
                                            (p.dragStartPoint.x = a),
                                            (p.dragStartPoint.y = d));
                                    };
                                })(e.x1, e.y1, e.x2, e.y2),
                                0
                            ));
                    else if (this.zoomEnabled) {
                        this.resetOverlayedCanvas();
                        b = this.overlaidCanvasCtx.globalAlpha;
                        this.overlaidCanvasCtx.fillStyle = "#A89896";
                        var c = e ? this.dragStartPoint.x : this.plotArea.x1,
                            t = f ? this.dragStartPoint.y : this.plotArea.y1,
                            B = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                            k = f ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                        this.validateRegion(c, t, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid &&
                            (this.resetOverlayedCanvas(), (this.overlaidCanvasCtx.fillStyle = "#99B2B5"));
                        this.overlaidCanvasCtx.globalAlpha = 0.7;
                        this.overlaidCanvasCtx.fillRect(c, t, B, k);
                        this.overlaidCanvasCtx.globalAlpha = b;
                    }
            } else if ((this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement)) {
                if (this.axisX && 0 < this.axisX.length) for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d);
            }
        };
        l.prototype._zoomPanToSelectedRegion = function (a, d, b, c, e) {
            a = this.validateRegion(a, d, b, c, e);
            d = a.axesWithValidRange;
            b = a.axesRanges;
            if (a.isValid)
                for (c = 0; c < d.length; c++)
                    (e = b[c]),
                        d[c].setViewPortRange(e.val1, e.val2),
                        this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2),
                        this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
            return a.isValid;
        };
        l.prototype.validateRegion = function (a, d, b, c, e) {
            e = e || !1;
            for (var f = 0 <= this.zoomType.indexOf("x"), p = 0 <= this.zoomType.indexOf("y"), t = !1, B = [], k = [], m = [], n = 0; n < this._axes.length; n++)
                (("axisX" === this._axes[n].type && f) || ("axisY" === this._axes[n].type && p)) && k.push(this._axes[n]);
            for (p = 0; p < k.length; p++) {
                var n = k[p],
                    f = !1,
                    q = n.convertPixelToValue({ x: a, y: d }),
                    h = n.convertPixelToValue({ x: b, y: c });
                if (q > h)
                    var r = h,
                        h = q,
                        q = r;
                if (n.scaleBreaks) for (r = 0; !f && r < n.scaleBreaks._appliedBreaks.length; r++) f = n.scaleBreaks._appliedBreaks[r].startValue <= q && n.scaleBreaks._appliedBreaks[r].endValue >= h;
                if (isFinite(n.dataInfo.minDiff))
                    if (
                        ((r = n.getApparentDifference(q, h, null, !0)),
                        !(
                            f ||
                            (!(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && ((n.logarithmic && r < Math.pow(n.dataInfo.minDiff, 3)) || (!n.logarithmic && r < 3 * Math.abs(n.dataInfo.minDiff)))) ||
                            q < n.minimum ||
                            h > n.maximum
                        ))
                    )
                        B.push(n), m.push({ val1: q, val2: h }), (t = !0);
                    else if (!e) {
                        t = !1;
                        break;
                    }
            }
            return { isValid: t, axesWithValidRange: B, axesRanges: m };
        };
        l.prototype.preparePlotArea = function () {
            var a = this.plotArea;
            !w && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var b = this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : b.lineCoordinates.x1;
                    a.y1 = d.y1 < b.lineCoordinates.y1 ? d.y1 : b.lineCoordinates.y1;
                    a.x2 = d.x2 > b.lineCoordinates.x2 ? d.x2 : b.lineCoordinates.x2;
                    a.y2 = d.y2 > d.y1 ? d.y2 : b.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1;
                }
                this.axisY2 &&
                    0 < this.axisY2.length &&
                    this.axisY2[0] &&
                    ((b = this.axisY2[0]),
                    (a.x1 = d.x1 < d.x2 ? d.x1 : b.lineCoordinates.x1),
                    (a.y1 = d.y1 < b.lineCoordinates.y1 ? d.y1 : b.lineCoordinates.y1),
                    (a.x2 = d.x2 > b.lineCoordinates.x2 ? d.x2 : b.lineCoordinates.x2),
                    (a.y2 = d.y2 > d.y1 ? d.y2 : b.lineCoordinates.y2),
                    (a.width = a.x2 - a.x1),
                    (a.height = a.y2 - a.y1));
            } else (d = this.layoutManager.getFreeSpace()), (a.x1 = d.x1), (a.x2 = d.x2), (a.y1 = d.y1), (a.y2 = d.y2), (a.width = d.width), (a.height = d.height);
            w || ((a.canvas.width = a.width), (a.canvas.height = a.height), (a.canvas.style.left = a.x1 + "px"), (a.canvas.style.top = a.y1 + "px"), (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Da(a.x1, a.y1, a.x2, a.y2, 2);
        };
        l.prototype.renderIndexLabels = function (a) {
            var d = a || this.plotArea.ctx,
                b = this.plotArea,
                c = 0,
                e = 0,
                f = 0,
                p = (f = e = 0),
                t = 0,
                B = (c = 0),
                k = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var m = this._indexLabels[a],
                    n = m.chartType.toLowerCase(),
                    q,
                    h,
                    p = la("indexLabelFontColor", m.dataPoint, m.dataSeries),
                    r = la("indexLabelFontSize", m.dataPoint, m.dataSeries),
                    t = la("indexLabelFontFamily", m.dataPoint, m.dataSeries),
                    B = la("indexLabelFontStyle", m.dataPoint, m.dataSeries),
                    k = la("indexLabelFontWeight", m.dataPoint, m.dataSeries),
                    g = la("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
                q = la("indexLabelMaxWidth", m.dataPoint, m.dataSeries);
                h = la("indexLabelWrap", m.dataPoint, m.dataSeries);
                var l = la("indexLabelLineDashType", m.dataPoint, m.dataSeries),
                    u = la("indexLabelLineColor", m.dataPoint, m.dataSeries),
                    x = s(m.dataPoint.indexLabelLineThickness) ? (s(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness) : m.dataPoint.indexLabelLineThickness,
                    c = 0 < x ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    A = { percent: null, total: null },
                    C = null;
                if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type) A = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
                if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter) C = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: A.total, percent: A.percent };
                var D = m.dataPoint.indexLabelFormatter
                    ? m.dataPoint.indexLabelFormatter(C)
                    : m.dataPoint.indexLabel
                    ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword)
                    : m.dataSeries.indexLabelFormatter
                    ? m.dataSeries.indexLabelFormatter(C)
                    : m.dataSeries.indexLabel
                    ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword)
                    : null;
                if (null !== D && "" !== D) {
                    var A = la("indexLabelPlacement", m.dataPoint, m.dataSeries),
                        C = la("indexLabelOrientation", m.dataPoint, m.dataSeries),
                        z = la("indexLabelTextAlign", m.dataPoint, m.dataSeries),
                        v = m.direction,
                        e = m.dataSeries.axisX,
                        f = m.dataSeries.axisY,
                        y = !1,
                        g = new ia(d, {
                            x: 0,
                            y: 0,
                            maxWidth: q ? q : 0.5 * this.width,
                            maxHeight: h ? 5 * r : 1.5 * r,
                            angle: "horizontal" === C ? 0 : -90,
                            text: D,
                            padding: 0,
                            backgroundColor: g,
                            textAlign: z,
                            fontSize: r,
                            fontFamily: t,
                            fontWeight: k,
                            fontColor: p,
                            fontStyle: B,
                            textBaseline: "middle",
                        });
                    g.measureText();
                    m.dataSeries.indexLabelMaxWidth = g.maxWidth;
                    if ("stackedarea100" === n) {
                        if (m.point.x < b.x1 || m.point.x > b.x2 || m.point.y < b.y1 - 1 || m.point.y > b.y2 + 1) continue;
                    } else if ("rangearea" === n || "rangesplinearea" === n) {
                        if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > f.viewportMaximum) continue;
                    } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                        if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.dataPoint.y < f.viewportMinimum || m.dataPoint.y > f.viewportMaximum) continue;
                    } else if (0 <= n.indexOf("column") || "waterfall" === n || ("error" === n && !m.axisSwapped)) {
                        if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.y1 > b.y2 || m.bounds.y2 < b.y1) continue;
                    } else if (0 <= n.indexOf("bar") || "error" === n) {
                        if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.x1 > b.x2 || m.bounds.x2 < b.x1) continue;
                    } else if ("candlestick" === n || "ohlc" === n) {
                        if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > f.viewportMaximum) continue;
                    } else if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum) continue;
                    p = t = 2;
                    "horizontal" === C ? ((B = g.width), (k = g.height)) : ((k = g.width), (B = g.height));
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) (A = "auto"), (t = 4);
                        else if (0 <= n.indexOf("stacked")) "auto" === A && (A = "inside");
                        else if ("bubble" === n || "scatter" === n) A = "inside";
                        q = m.point.x - ("horizontal" === C ? B / 2 : B / 2 - r / 2);
                        "inside" !== A
                            ? ((e = b.y1),
                              (f = b.y2),
                              0 < v
                                  ? ((h = m.point.y + ("horizontal" === C ? r / 2 : 0) - k - t - c), h < e && ((h = "auto" === A ? Math.max(m.point.y, e) + r / 2 + t : e + r / 2 + t), (y = h + k > m.point.y)))
                                  : ((h = m.point.y + r / 2 + t + c), h > f - k && ((h = "auto" === A ? Math.min(m.point.y, f) + r / 2 - k - t : f + r / 2 - k), (y = h < m.point.y))))
                            : ((e = Math.max(m.bounds.y1, b.y1)),
                              (f = Math.min(m.bounds.y2, b.y2 - k + r / 2)),
                              (c =
                                  0 <= n.indexOf("range") || "error" === n
                                      ? 0 < v
                                          ? Math.max(m.bounds.y1, b.y1) + r / 2 + t
                                          : Math.min(m.bounds.y2, b.y2) + r / 2 - k + t
                                      : (Math.max(m.bounds.y1, b.y1) + Math.min(m.bounds.y2, b.y2)) / 2 - k / 2 + r / 2 + ("horizontal" === C ? t : 0)),
                              0 < v
                                  ? ((h = Math.max(m.point.y, c)), h < e && ("bubble" === n || "scatter" === n) && (h = Math.max(m.point.y - k - t, b.y1 + t)))
                                  : ((h = Math.min(m.point.y, c)), h > f - k - t && ("bubble" === n || "scatter" === n) && (h = Math.min(m.point.y + t, b.y2 - k - t))),
                              (h = Math.min(h, f)));
                    } else
                        0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? ((A = "auto"), (p = 4)) : 0 <= n.indexOf("stacked") ? "auto" === A && (A = "inside") : "bubble" === n && (A = "inside"),
                            (h = m.point.y + r / 2 - k / 2 + t),
                            "inside" !== A
                                ? ((e = b.x1),
                                  (f = b.x2),
                                  0 > v
                                      ? ((q = m.point.x - ("horizontal" === C ? B : B - r / 2) - p - c), q < e && ((q = "auto" === A ? Math.max(m.point.x, e) + p : e + p), (y = q + B > m.point.x)))
                                      : ((q = m.point.x + ("horizontal" === C ? 0 : r / 2) + p + c),
                                        q > f - B - p - c && ((q = "auto" === A ? Math.min(m.point.x, f) - ("horizontal" === C ? B : B / 2) - p : f - B - p), (y = q < m.point.x))))
                                : ((e = Math.max(m.bounds.x1, b.x1)),
                                  Math.min(m.bounds.x2, b.x2),
                                  (c =
                                      0 <= n.indexOf("range") || "error" === n
                                          ? 0 > v
                                              ? Math.max(m.bounds.x1, b.x1) + r / 2 + p
                                              : Math.min(m.bounds.x2, b.x2) - B / 2 - p + ("horizontal" === C ? 0 : r / 2)
                                          : (Math.max(m.bounds.x1, b.x1) + Math.min(m.bounds.x2, b.x2)) / 2 + ("horizontal" === C ? 0 : r / 2)),
                                  (q = 0 > v ? Math.max(m.point.x, c) - ("horizontal" === C ? B / 2 : 0) : Math.min(m.point.x, c) - B / 2),
                                  (q = Math.max(q, e)));
                    "vertical" === C && (h += k - r / 2);
                    g.x = q;
                    g.y = h;
                    g.render(!0);
                    x &&
                        "inside" !== A &&
                        ((0 > n.indexOf("bar") && ("error" !== n || !m.axisSwapped) && m.point.x > b.x1 && m.point.x < b.x2) || !y) &&
                        ((0 > n.indexOf("column") && ("error" !== n || m.axisSwapped) && m.point.y > b.y1 && m.point.y < b.y2) || !y) &&
                        ((d.lineWidth = x),
                        (d.strokeStyle = u ? u : "gray"),
                        d.setLineDash && d.setLineDash(N(l, x)),
                        d.beginPath(),
                        d.moveTo(m.point.x, m.point.y),
                        0 <= n.indexOf("bar") || ("error" === n && m.axisSwapped)
                            ? d.lineTo(q + (0 < m.direction ? -p : B + p) + ("vertical" === C ? -r / 2 : 0), h + ("vertical" === C ? -k / 2 : k / 2 - r / 2) - t)
                            : 0 <= n.indexOf("column") || ("error" === n && !m.axisSwapped)
                            ? d.lineTo(q + B / 2 - ("horizontal" === C ? 0 : r / 2), h + ("vertical" === C ? (h - k < m.point.y ? 0 : -k) + t : (h - r / 2 < m.point.y ? k : 0) - r / 2))
                            : d.lineTo(q + B / 2 - ("horizontal" === C ? 0 : r / 2), h + ("vertical" === C ? (h - k < m.point.y ? 0 : -k) : (h - r / 2 < m.point.y ? k : 0) - r / 2)),
                        d.stroke());
                }
            }
            d = { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
            for (a = 0; a < this._indexLabels.length; a++) (m = this._indexLabels[a]), (g = la("indexLabelBackgroundColor", m.dataPoint, m.dataSeries)), (m.dataSeries.indexLabelBackgroundColor = s(g) ? (w ? "transparent" : null) : g);
            return d;
        };
        l.prototype.renderLine = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var e = this.plotArea;
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                for (var f = [], p, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    b.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (b.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            h = N(n, k.lineThickness);
                        b.setLineDash(h);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: B };
                    r = P(r);
                    c.strokeStyle = r;
                    c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var r = k._colorSet,
                        g = (r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0]);
                    b.strokeStyle = r;
                    var l = !0,
                        u = 0,
                        x,
                        s;
                    b.beginPath();
                    if (0 < m.length) {
                        for (var C = !1, u = 0; u < m.length; u++)
                            if (((x = m[u].x.getTime ? m[u].x.getTime() : m[u].x), !(x < a.axisX.dataInfo.viewPortMin || (x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))))
                                if ("number" !== typeof m[u].y) 0 < u && !(k.connectNullData || C || l) && (b.stroke(), w && c.stroke()), (C = !0);
                                else {
                                    x = a.axisX.convertValueToPixel(x);
                                    s = a.axisY.convertValueToPixel(m[u].y);
                                    var D = k.dataPointIds[u];
                                    this._eventManager.objectMap[D] = { id: D, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: u, x1: x, y1: s };
                                    l || C
                                        ? (!l && k.connectNullData
                                              ? (b.setLineDash &&
                                                    (k.options.nullDataLineDashType || (n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType)) &&
                                                    (b.stroke(), b.beginPath(), b.moveTo(p.x, p.y), (n = k.nullDataLineDashType), b.setLineDash(q)),
                                                b.lineTo(x, s),
                                                w && c.lineTo(x, s))
                                              : (b.beginPath(), b.moveTo(x, s), w && (c.beginPath(), c.moveTo(x, s))),
                                          (C = l = !1))
                                        : (b.lineTo(x, s), w && c.lineTo(x, s), 0 == u % 500 && (b.stroke(), b.beginPath(), b.moveTo(x, s), w && (c.stroke(), c.beginPath(), c.moveTo(x, s))));
                                    p = { x: x, y: s };
                                    u < m.length - 1 &&
                                        (g !== (m[u].lineColor || r) || n !== (m[u].lineDashType || k.lineDashType)) &&
                                        (b.stroke(),
                                        b.beginPath(),
                                        b.moveTo(x, s),
                                        (g = m[u].lineColor || r),
                                        (b.strokeStyle = g),
                                        b.setLineDash && (m[u].lineDashType ? ((n = m[u].lineDashType), b.setLineDash(N(n, k.lineThickness))) : ((n = k.lineDashType), b.setLineDash(h))));
                                    if (0 < m[u].markerSize || 0 < k.markerSize) {
                                        var z = k.getMarkerProperties(u, x, s, b);
                                        f.push(z);
                                        D = P(D);
                                        w && f.push({ x: x, y: s, ctx: c, type: z.type, size: z.size, color: D, borderColor: D, borderThickness: z.borderThickness });
                                    }
                                    (m[u].indexLabel || k.indexLabel || m[u].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "line", dataPoint: m[u], dataSeries: k, point: { x: x, y: s }, direction: 0 > m[u].y === a.axisY.reversed ? 1 : -1, color: r });
                                }
                        b.stroke();
                        w && c.stroke();
                    }
                }
                V.drawMarkers(f);
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    c.beginPath());
                b.restore();
                b.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderStepLine = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var e = this.plotArea;
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                for (var f = [], p, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    b.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (b.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            h = N(n, k.lineThickness);
                        b.setLineDash(h);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: B };
                    r = P(r);
                    c.strokeStyle = r;
                    c.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var r = k._colorSet,
                        g = (r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0]);
                    b.strokeStyle = r;
                    var l = !0,
                        u = 0,
                        x,
                        s;
                    b.beginPath();
                    if (0 < m.length) {
                        for (var C = !1, u = 0; u < m.length; u++)
                            if (((x = m[u].getTime ? m[u].x.getTime() : m[u].x), !(x < a.axisX.dataInfo.viewPortMin || (x > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))))
                                if ("number" !== typeof m[u].y) 0 < u && !(k.connectNullData || C || l) && (b.stroke(), w && c.stroke()), (C = !0);
                                else {
                                    var D = s;
                                    x = a.axisX.convertValueToPixel(x);
                                    s = a.axisY.convertValueToPixel(m[u].y);
                                    var z = k.dataPointIds[u];
                                    this._eventManager.objectMap[z] = { id: z, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: u, x1: x, y1: s };
                                    l || C
                                        ? (!l && k.connectNullData
                                              ? (b.setLineDash &&
                                                    (k.options.nullDataLineDashType || (n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType)) &&
                                                    (b.stroke(), b.beginPath(), b.moveTo(p.x, p.y), (n = k.nullDataLineDashType), b.setLineDash(q)),
                                                b.lineTo(x, D),
                                                b.lineTo(x, s),
                                                w && (c.lineTo(x, D), c.lineTo(x, s)))
                                              : (b.beginPath(), b.moveTo(x, s), w && (c.beginPath(), c.moveTo(x, s))),
                                          (C = l = !1))
                                        : (b.lineTo(x, D), w && c.lineTo(x, D), b.lineTo(x, s), w && c.lineTo(x, s), 0 == u % 500 && (b.stroke(), b.beginPath(), b.moveTo(x, s), w && (c.stroke(), c.beginPath(), c.moveTo(x, s))));
                                    p = { x: x, y: s };
                                    u < m.length - 1 &&
                                        (g !== (m[u].lineColor || r) || n !== (m[u].lineDashType || k.lineDashType)) &&
                                        (b.stroke(),
                                        b.beginPath(),
                                        b.moveTo(x, s),
                                        (g = m[u].lineColor || r),
                                        (b.strokeStyle = g),
                                        b.setLineDash && (m[u].lineDashType ? ((n = m[u].lineDashType), b.setLineDash(N(n, k.lineThickness))) : ((n = k.lineDashType), b.setLineDash(h))));
                                    if (0 < m[u].markerSize || 0 < k.markerSize)
                                        (D = k.getMarkerProperties(u, x, s, b)), f.push(D), (z = P(z)), w && f.push({ x: x, y: s, ctx: c, type: D.type, size: D.size, color: z, borderColor: z, borderThickness: D.borderThickness });
                                    (m[u].indexLabel || k.indexLabel || m[u].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stepLine", dataPoint: m[u], dataSeries: k, point: { x: x, y: s }, direction: 0 > m[u].y === a.axisY.reversed ? 1 : -1, color: r });
                                }
                        b.stroke();
                        w && c.stroke();
                    }
                }
                V.drawMarkers(f);
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    c.beginPath());
                b.restore();
                b.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderSpline = function (a) {
            function d(a) {
                a = v(a, 2);
                if (0 < a.length) {
                    c.beginPath();
                    w && e.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                    w && e.moveTo(a[0].x, a[0].y);
                    for (var b = 0; b < a.length - 3; b += 3)
                        if (
                            (c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y),
                            w && e.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y),
                            (0 < b && 0 === b % 3e3) || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray)
                        )
                            c.stroke(),
                                c.beginPath(),
                                c.moveTo(a[b + 3].x, a[b + 3].y),
                                a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle),
                                a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray),
                                w && (e.stroke(), e.beginPath(), e.moveTo(a[b + 3].x, a[b + 3].y));
                    c.stroke();
                    w && e.stroke();
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                c.save();
                var f = this.plotArea;
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                for (var p = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    c.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (c.setLineDash) {
                        var q = N(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            h = N(n, k.lineThickness);
                        c.setLineDash(h);
                    }
                    var r = k.id;
                    this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: B };
                    r = P(r);
                    e.strokeStyle = r;
                    e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var r = k._colorSet,
                        g = (r = k.lineColor = k.options.lineColor ? k.options.lineColor : r[0]);
                    c.strokeStyle = r;
                    var l = 0,
                        u,
                        x,
                        s = [];
                    c.beginPath();
                    if (0 < m.length)
                        for (x = !1, l = 0; l < m.length; l++)
                            if (((u = m[l].getTime ? m[l].x.getTime() : m[l].x), !(u < a.axisX.dataInfo.viewPortMin || (u > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !x)))))
                                if ("number" !== typeof m[l].y)
                                    0 < l &&
                                        !x &&
                                        (k.connectNullData
                                            ? c.setLineDash && 0 < s.length && (k.options.nullDataLineDashType || !m[l - 1].lineDashType) && ((s[s.length - 1].newLineDashArray = q), (n = k.nullDataLineDashType))
                                            : (d(s), (s = []))),
                                        (x = !0);
                                else {
                                    u = a.axisX.convertValueToPixel(u);
                                    x = a.axisY.convertValueToPixel(m[l].y);
                                    var C = k.dataPointIds[l];
                                    this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: l, x1: u, y1: x };
                                    s[s.length] = { x: u, y: x };
                                    l < m.length - 1 &&
                                        (g !== (m[l].lineColor || r) || n !== (m[l].lineDashType || k.lineDashType)) &&
                                        ((g = m[l].lineColor || r),
                                        (s[s.length - 1].newStrokeStyle = g),
                                        c.setLineDash && (m[l].lineDashType ? ((n = m[l].lineDashType), (s[s.length - 1].newLineDashArray = N(n, k.lineThickness))) : ((n = k.lineDashType), (s[s.length - 1].newLineDashArray = h))));
                                    if (0 < m[l].markerSize || 0 < k.markerSize) {
                                        var D = k.getMarkerProperties(l, u, x, c);
                                        p.push(D);
                                        C = P(C);
                                        w && p.push({ x: u, y: x, ctx: e, type: D.type, size: D.size, color: C, borderColor: C, borderThickness: D.borderThickness });
                                    }
                                    (m[l].indexLabel || k.indexLabel || m[l].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "spline", dataPoint: m[l], dataSeries: k, point: { x: u, y: x }, direction: 0 > m[l].y === a.axisY.reversed ? 1 : -1, color: r });
                                    x = !1;
                                }
                    d(s);
                }
                V.drawMarkers(p);
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(f.x1, f.y1, f.width, f.height),
                    e.beginPath());
                c.restore();
                c.beginPath();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = 0,
                    p,
                    t,
                    B,
                    k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.dataPointWidth = this.options.dataPointWidth
                    ? this.dataPointWidth
                    : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && f > m && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < f && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > m && (n = m);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = a.dataSeriesIndexes[m],
                        h = this.data[q],
                        r = h.dataPoints;
                    if (0 < r.length)
                        for (var g = 5 < n && h.bevelEnabled ? !0 : !1, f = 0; f < r.length; f++)
                            if ((r[f].getTime ? (B = r[f].x.getTime()) : (B = r[f].x), !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[f].y)) {
                                p = a.axisX.convertValueToPixel(B);
                                t = a.axisY.convertValueToPixel(r[f].y);
                                p = a.axisX.reversed ? (p + (a.plotType.totalDataSeries * n) / 2 - (a.previousDataSeriesCount + m) * n) << 0 : (p - (a.plotType.totalDataSeries * n) / 2 + (a.previousDataSeriesCount + m) * n) << 0;
                                var l = a.axisX.reversed ? (p - n) << 0 : (p + n) << 0,
                                    u;
                                0 <= r[f].y ? (u = k) : ((u = t), (t = k));
                                t > u && ((c = t), (t = u), (u = c));
                                c = r[f].color ? r[f].color : h._colorSet[f % h._colorSet.length];
                                ca(b, p, t, l, u, c, 0, null, g && 0 <= r[f].y, 0 > r[f].y && g, !1, !1, h.fillOpacity);
                                c = h.dataPointIds[f];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: p, y1: t, x2: l, y2: u };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, p, t, l, u, c, 0, null, !1, !1, !1, !1);
                                (r[f].indexLabel || h.indexLabel || r[f].indexLabelFormatter || h.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "column",
                                        dataPoint: r[f],
                                        dataSeries: h,
                                        point: { x: p + (l - p) / 2, y: 0 > r[f].y === a.axisY.reversed ? t : u },
                                        direction: 0 > r[f].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: p, y1: Math.min(t, u), x2: l, y2: Math.max(t, u) },
                                        color: c,
                                    });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.yScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k,
                };
            }
        };
        l.prototype.renderStackedColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    t = [],
                    B = [],
                    k = 0,
                    m,
                    n,
                    q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.width) << 0;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > m && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < k && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                h < k && (h = k);
                h > m && (h = m);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var g = a.dataSeriesIndexes[r],
                        l = this.data[g],
                        u = l.dataPoints;
                    if (0 < u.length) {
                        var x = 5 < h && l.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (((c = u[k].x.getTime ? u[k].x.getTime() : u[k].x), !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y)) {
                                m = a.axisX.convertValueToPixel(c);
                                var s = (m - (a.plotType.plotUnits.length * h) / 2 + a.index * h) << 0,
                                    C = (s + h) << 0,
                                    D;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y))
                                    (t[c] = u[k].y + (t[c] ? t[c] : 0)), 0 < t[c] && ((n = a.axisY.convertValueToPixel(t[c])), (D = "undefined" !== typeof f[c] ? f[c] : q), (f[c] = n));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y)
                                    (B[c] = u[k].y + (B[c] ? B[c] : 0)), (D = a.axisY.convertValueToPixel(B[c])), (n = "undefined" !== typeof p[c] ? p[c] : q), (p[c] = D);
                                else if (((n = a.axisY.convertValueToPixel(u[k].y)), 0 <= u[k].y)) {
                                    var z = "undefined" !== typeof f[c] ? f[c] : 0;
                                    n -= z;
                                    D = q - z;
                                    f[c] = z + (D - n);
                                } else (z = p[c] ? p[c] : 0), (D = n + z), (n = q + z), (p[c] = z + (D - n));
                                c = u[k].color ? u[k].color : l._colorSet[k % l._colorSet.length];
                                ca(b, s, n, C, D, c, 0, null, x && 0 <= u[k].y, 0 > u[k].y && x, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[k];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: k, x1: s, y1: n, x2: C, y2: D };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, s, n, C, D, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || l.indexLabel || u[k].indexLabelFormatter || l.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedColumn",
                                        dataPoint: u[k],
                                        dataSeries: l,
                                        point: { x: m, y: 0 <= u[k].y ? n : D },
                                        direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: s, y1: Math.min(n, D), x2: C, y2: Math.max(n, D) },
                                        color: c,
                                    });
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.yScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q,
                };
            }
        };
        l.prototype.renderStackedColumn100 = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    t = [],
                    B = [],
                    k = 0,
                    m,
                    n,
                    q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.width) << 0;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > m && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < k && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                h < k && (h = k);
                h > m && (h = m);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var g = a.dataSeriesIndexes[r],
                        l = this.data[g],
                        u = l.dataPoints;
                    if (0 < u.length)
                        for (var x = 5 < h && l.bevelEnabled ? !0 : !1, k = 0; k < u.length; k++)
                            if (((c = u[k].x.getTime ? u[k].x.getTime() : u[k].x), !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y)) {
                                m = a.axisX.convertValueToPixel(c);
                                n = 0 !== a.dataPointYSums[c] ? 100 * (u[k].y / a.dataPointYSums[c]) : 0;
                                var s = (m - (a.plotType.plotUnits.length * h) / 2 + a.index * h) << 0,
                                    C = (s + h) << 0,
                                    D;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y)) {
                                    t[c] = n + ("undefined" !== typeof t[c] ? t[c] : 0);
                                    if (0 >= t[c]) continue;
                                    n = a.axisY.convertValueToPixel(t[c]);
                                    D = f[c] ? f[c] : q;
                                    f[c] = n;
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y)
                                    (B[c] = n + ("undefined" !== typeof B[c] ? B[c] : 0)), (D = a.axisY.convertValueToPixel(B[c])), (n = p[c] ? p[c] : q), (p[c] = D);
                                else if (((n = a.axisY.convertValueToPixel(n)), 0 <= u[k].y)) {
                                    var z = "undefined" !== typeof f[c] ? f[c] : 0;
                                    n -= z;
                                    D = q - z;
                                    a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                                    f[c] = z + (D - n);
                                } else (z = "undefined" !== typeof p[c] ? p[c] : 0), (D = n + z), (n = q + z), a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.y2 - D) && (D = e.y2), (p[c] = z + (D - n));
                                c = u[k].color ? u[k].color : l._colorSet[k % l._colorSet.length];
                                ca(b, s, n, C, D, c, 0, null, x && 0 <= u[k].y, 0 > u[k].y && x, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[k];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: k, x1: s, y1: n, x2: C, y2: D };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, s, n, C, D, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || l.indexLabel || u[k].indexLabelFormatter || l.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedColumn100",
                                        dataPoint: u[k],
                                        dataSeries: l,
                                        point: { x: m, y: 0 <= u[k].y ? n : D },
                                        direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: s, y1: Math.min(n, D), x2: C, y2: Math.max(n, D) },
                                        color: c,
                                    });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.yScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q,
                };
            }
        };
        l.prototype.renderBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = 0,
                    p,
                    t,
                    B,
                    k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && f > m && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < f && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > m && (n = m);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var q = a.dataSeriesIndexes[m],
                        h = this.data[q],
                        r = h.dataPoints;
                    if (0 < r.length) {
                        var g = 5 < n && h.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (f = 0; f < r.length; f++)
                            if ((r[f].getTime ? (B = r[f].x.getTime()) : (B = r[f].x), !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[f].y)) {
                                t = a.axisX.convertValueToPixel(B);
                                p = a.axisY.convertValueToPixel(r[f].y);
                                t = a.axisX.reversed ? (t + (a.plotType.totalDataSeries * n) / 2 - (a.previousDataSeriesCount + m) * n) << 0 : (t - (a.plotType.totalDataSeries * n) / 2 + (a.previousDataSeriesCount + m) * n) << 0;
                                var l = a.axisX.reversed ? (t - n) << 0 : (t + n) << 0,
                                    u;
                                0 <= r[f].y ? (u = k) : ((u = p), (p = k));
                                c = r[f].color ? r[f].color : h._colorSet[f % h._colorSet.length];
                                ca(b, u, t, p, l, c, 0, null, g, !1, !1, !1, h.fillOpacity);
                                c = h.dataPointIds[f];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: u, y1: t, x2: p, y2: l };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, u, t, p, l, c, 0, null, !1, !1, !1, !1);
                                (r[f].indexLabel || h.indexLabel || r[f].indexLabelFormatter || h.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "bar",
                                        dataPoint: r[f],
                                        dataSeries: h,
                                        point: { x: 0 <= r[f].y ? p : u, y: t + (l - t) / 2 },
                                        direction: 0 > r[f].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(u, p), y1: t, x2: Math.max(u, p), y2: l },
                                        color: c,
                                    });
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.xScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k,
                };
            }
        };
        l.prototype.renderStackedBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    t = [],
                    B = [],
                    k = 0,
                    m,
                    n,
                    q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.height) << 0;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < k && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                h < k && (h = k);
                h > n && (h = n);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var g = a.dataSeriesIndexes[r],
                        l = this.data[g],
                        u = l.dataPoints;
                    if (0 < u.length) {
                        var x = 5 < h && l.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (((c = u[k].x.getTime ? u[k].x.getTime() : u[k].x), !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y)) {
                                n = a.axisX.convertValueToPixel(c);
                                var s = (n - (a.plotType.plotUnits.length * h) / 2 + a.index * h) << 0,
                                    C = (s + h) << 0,
                                    D;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y))
                                    (t[c] = u[k].y + (t[c] ? t[c] : 0)), 0 < t[c] && ((D = f[c] ? f[c] : q), (f[c] = m = a.axisY.convertValueToPixel(t[c])));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) (B[c] = u[k].y + (B[c] ? B[c] : 0)), (m = p[c] ? p[c] : q), (p[c] = D = a.axisY.convertValueToPixel(B[c]));
                                else if (((m = a.axisY.convertValueToPixel(u[k].y)), 0 <= u[k].y)) {
                                    var z = f[c] ? f[c] : 0;
                                    D = q + z;
                                    m += z;
                                    f[c] = z + (m - D);
                                } else (z = p[c] ? p[c] : 0), (D = m - z), (m = q - z), (p[c] = z + (m - D));
                                c = u[k].color ? u[k].color : l._colorSet[k % l._colorSet.length];
                                ca(b, D, s, m, C, c, 0, null, x, !1, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[k];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: k, x1: D, y1: s, x2: m, y2: C };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, D, s, m, C, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || l.indexLabel || u[k].indexLabelFormatter || l.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedBar",
                                        dataPoint: u[k],
                                        dataSeries: l,
                                        point: { x: 0 <= u[k].y ? m : D, y: n },
                                        direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(D, m), y1: s, x2: Math.max(D, m), y2: C },
                                        color: c,
                                    });
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.xScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q,
                };
            }
        };
        l.prototype.renderStackedBar100 = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    t = [],
                    B = [],
                    k = 0,
                    m,
                    n,
                    q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.height) << 0;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && this.dataPointMinWidth && n < k && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                h < k && (h = k);
                h > n && (h = n);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var g = a.dataSeriesIndexes[r],
                        l = this.data[g],
                        u = l.dataPoints;
                    if (0 < u.length) {
                        var s = 5 < h && l.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (((c = u[k].x.getTime ? u[k].x.getTime() : u[k].x), !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y)) {
                                n = a.axisX.convertValueToPixel(c);
                                var A;
                                A = 0 !== a.dataPointYSums[c] ? 100 * (u[k].y / a.dataPointYSums[c]) : 0;
                                var C = (n - (a.plotType.plotUnits.length * h) / 2 + a.index * h) << 0,
                                    D = (C + h) << 0;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y)) {
                                    t[c] = A + (t[c] ? t[c] : 0);
                                    if (0 >= t[c]) continue;
                                    A = f[c] ? f[c] : q;
                                    f[c] = m = a.axisY.convertValueToPixel(t[c]);
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) (B[c] = A + (B[c] ? B[c] : 0)), (m = p[c] ? p[c] : q), (p[c] = A = a.axisY.convertValueToPixel(B[c]));
                                else if (((m = a.axisY.convertValueToPixel(A)), 0 <= u[k].y)) {
                                    var z = f[c] ? f[c] : 0;
                                    A = q + z;
                                    m += z;
                                    a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                                    f[c] = z + (m - A);
                                } else (z = p[c] ? p[c] : 0), (A = m - z), (m = q - z), a.dataSeriesIndexes.length - 1 === r && 1 >= Math.abs(e.x1 - A) && (A = e.x1), (p[c] = z + (m - A));
                                c = u[k].color ? u[k].color : l._colorSet[k % l._colorSet.length];
                                ca(b, A, C, m, D, c, 0, null, s, !1, !1, !1, l.fillOpacity);
                                c = l.dataPointIds[k];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: k, x1: A, y1: C, x2: m, y2: D };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, A, C, m, D, c, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || l.indexLabel || u[k].indexLabelFormatter || l.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedBar100",
                                        dataPoint: u[k],
                                        dataSeries: l,
                                        point: { x: 0 <= u[k].y ? m : A, y: n },
                                        direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(A, m), y1: C, x2: Math.max(A, m), y2: D },
                                        color: c,
                                    });
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.xScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q,
                };
            }
        };
        l.prototype.renderArea = function (a) {
            var d, b;
            function c() {
                D &&
                    (0 < h.lineThickness && f.stroke(),
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (C = A) : 0 > a.axisY.viewportMaximum ? (C = t.y1) : 0 < a.axisY.viewportMinimum && (C = A),
                    f.lineTo(l, C),
                    f.lineTo(D.x, C),
                    f.closePath(),
                    (f.globalAlpha = h.fillOpacity),
                    f.fill(),
                    (f.globalAlpha = 1),
                    w && (p.lineTo(l, C), p.lineTo(D.x, C), p.closePath(), p.fill()),
                    f.beginPath(),
                    f.moveTo(l, u),
                    p.beginPath(),
                    p.moveTo(l, u),
                    (D = { x: l, y: u }));
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = w ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var p = this._eventManager.ghostCtx,
                    t = a.axisY.lineCoordinates,
                    B = [],
                    k = this.plotArea,
                    m;
                f.save();
                w && p.save();
                f.beginPath();
                f.rect(k.x1, k.y1, k.width, k.height);
                f.clip();
                w && (p.beginPath(), p.rect(k.x1, k.y1, k.width, k.height), p.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        h = this.data[q],
                        r = h.dataPoints,
                        B = h.id;
                    this._eventManager.objectMap[B] = { objectType: "dataSeries", dataSeriesIndex: q };
                    B = P(B);
                    p.fillStyle = B;
                    B = [];
                    d = !0;
                    var g = 0,
                        l,
                        u,
                        s,
                        A = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        C,
                        D = null;
                    if (0 < r.length) {
                        var z = h._colorSet[g % h._colorSet.length],
                            v = (h.lineColor = h.options.lineColor || z),
                            y = v;
                        f.fillStyle = z;
                        f.strokeStyle = v;
                        f.lineWidth = h.lineThickness;
                        b = "solid";
                        if (f.setLineDash) {
                            var Q = N(h.nullDataLineDashType, h.lineThickness);
                            b = h.lineDashType;
                            var aa = N(b, h.lineThickness);
                            f.setLineDash(aa);
                        }
                        for (var ja = !0; g < r.length; g++)
                            if (((s = r[g].x.getTime ? r[g].x.getTime() : r[g].x), !(s < a.axisX.dataInfo.viewPortMin || (s > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !ja)))))
                                if ("number" !== typeof r[g].y) h.connectNullData || ja || d || c(), (ja = !0);
                                else {
                                    l = a.axisX.convertValueToPixel(s);
                                    u = a.axisY.convertValueToPixel(r[g].y);
                                    d || ja
                                        ? (!d && h.connectNullData
                                              ? (f.setLineDash &&
                                                    (h.options.nullDataLineDashType || (b === h.lineDashType && h.lineDashType !== h.nullDataLineDashType)) &&
                                                    ((d = l), (b = u), (l = m.x), (u = m.y), c(), f.moveTo(m.x, m.y), (l = d), (u = b), (D = m), (b = h.nullDataLineDashType), f.setLineDash(Q)),
                                                f.lineTo(l, u),
                                                w && p.lineTo(l, u))
                                              : (f.beginPath(), f.moveTo(l, u), w && (p.beginPath(), p.moveTo(l, u)), (D = { x: l, y: u })),
                                          (ja = d = !1))
                                        : (f.lineTo(l, u), w && p.lineTo(l, u), 0 == g % 250 && c());
                                    m = { x: l, y: u };
                                    g < r.length - 1 &&
                                        (y !== (r[g].lineColor || v) || b !== (r[g].lineDashType || h.lineDashType)) &&
                                        (c(),
                                        (y = r[g].lineColor || v),
                                        (f.strokeStyle = y),
                                        f.setLineDash && (r[g].lineDashType ? ((b = r[g].lineDashType), f.setLineDash(N(b, h.lineThickness))) : ((b = h.lineDashType), f.setLineDash(aa))));
                                    var Y = h.dataPointIds[g];
                                    this._eventManager.objectMap[Y] = { id: Y, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: g, x1: l, y1: u };
                                    0 !== r[g].markerSize &&
                                        (0 < r[g].markerSize || 0 < h.markerSize) &&
                                        ((s = h.getMarkerProperties(g, l, u, f)), B.push(s), (Y = P(Y)), w && B.push({ x: l, y: u, ctx: p, type: s.type, size: s.size, color: Y, borderColor: Y, borderThickness: s.borderThickness }));
                                    (r[g].indexLabel || h.indexLabel || r[g].indexLabelFormatter || h.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "area", dataPoint: r[g], dataSeries: h, point: { x: l, y: u }, direction: 0 > r[g].y === a.axisY.reversed ? 1 : -1, color: z });
                                }
                        c();
                        V.drawMarkers(B);
                    }
                }
                w &&
                    (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (f.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    f.clearRect(k.x1, k.y1, k.width, k.height),
                    this._eventManager.ghostCtx.restore());
                f.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderSplineArea = function (a) {
            function d() {
                var b = v(s, 2);
                if (0 < b.length) {
                    if (0 < m.lineThickness) {
                        c.beginPath();
                        c.moveTo(b[0].x, b[0].y);
                        b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                        b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                        for (var d = 0; d < b.length - 3; d += 3)
                            if (
                                (c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y),
                                w && e.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y),
                                b[d + 3].newStrokeStyle || b[d + 3].newLineDashArray)
                            )
                                c.stroke(), c.beginPath(), c.moveTo(b[d + 3].x, b[d + 3].y), b[d + 3].newStrokeStyle && (c.strokeStyle = b[d + 3].newStrokeStyle), b[d + 3].newLineDashArray && c.setLineDash(b[d + 3].newLineDashArray);
                        c.stroke();
                    }
                    c.beginPath();
                    c.moveTo(b[0].x, b[0].y);
                    w && (e.beginPath(), e.moveTo(b[0].x, b[0].y));
                    for (d = 0; d < b.length - 3; d += 3) c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), w && e.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y);
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (l = g) : 0 > a.axisY.viewportMaximum ? (l = f.y1) : 0 < a.axisY.viewportMinimum && (l = g);
                    u = { x: b[0].x, y: b[0].y };
                    c.lineTo(b[b.length - 1].x, l);
                    c.lineTo(u.x, l);
                    c.closePath();
                    c.globalAlpha = m.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    w && (e.lineTo(b[b.length - 1].x, l), e.lineTo(u.x, l), e.closePath(), e.fill());
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = a.axisY.lineCoordinates,
                    p = [],
                    t = this.plotArea;
                c.save();
                w && e.save();
                c.beginPath();
                c.rect(t.x1, t.y1, t.width, t.height);
                c.clip();
                w && (e.beginPath(), e.rect(t.x1, t.y1, t.width, t.height), e.clip());
                for (var B = 0; B < a.dataSeriesIndexes.length; B++) {
                    var k = a.dataSeriesIndexes[B],
                        m = this.data[k],
                        n = m.dataPoints,
                        p = m.id;
                    this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: k };
                    p = P(p);
                    e.fillStyle = p;
                    var p = [],
                        q = 0,
                        h,
                        r,
                        g = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        l,
                        u = null,
                        s = [];
                    if (0 < n.length) {
                        var A = m._colorSet[q % m._colorSet.length],
                            C = (m.lineColor = m.options.lineColor || A),
                            D = C;
                        c.fillStyle = A;
                        c.strokeStyle = C;
                        c.lineWidth = m.lineThickness;
                        var z = "solid";
                        if (c.setLineDash) {
                            var y = N(m.nullDataLineDashType, m.lineThickness),
                                z = m.lineDashType,
                                E = N(z, m.lineThickness);
                            c.setLineDash(E);
                        }
                        for (r = !1; q < n.length; q++)
                            if (((h = n[q].x.getTime ? n[q].x.getTime() : n[q].x), !(h < a.axisX.dataInfo.viewPortMin || (h > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !r)))))
                                if ("number" !== typeof n[q].y)
                                    0 < q &&
                                        !r &&
                                        (m.connectNullData
                                            ? c.setLineDash && 0 < s.length && (m.options.nullDataLineDashType || !n[q - 1].lineDashType) && ((s[s.length - 1].newLineDashArray = y), (z = m.nullDataLineDashType))
                                            : (d(), (s = []))),
                                        (r = !0);
                                else {
                                    h = a.axisX.convertValueToPixel(h);
                                    r = a.axisY.convertValueToPixel(n[q].y);
                                    var Q = m.dataPointIds[q];
                                    this._eventManager.objectMap[Q] = { id: Q, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: q, x1: h, y1: r };
                                    s[s.length] = { x: h, y: r };
                                    q < n.length - 1 &&
                                        (D !== (n[q].lineColor || C) || z !== (n[q].lineDashType || m.lineDashType)) &&
                                        ((D = n[q].lineColor || C),
                                        (s[s.length - 1].newStrokeStyle = D),
                                        c.setLineDash && (n[q].lineDashType ? ((z = n[q].lineDashType), (s[s.length - 1].newLineDashArray = N(z, m.lineThickness))) : ((z = m.lineDashType), (s[s.length - 1].newLineDashArray = E))));
                                    if (0 !== n[q].markerSize && (0 < n[q].markerSize || 0 < m.markerSize)) {
                                        var aa = m.getMarkerProperties(q, h, r, c);
                                        p.push(aa);
                                        Q = P(Q);
                                        w && p.push({ x: h, y: r, ctx: e, type: aa.type, size: aa.size, color: Q, borderColor: Q, borderThickness: aa.borderThickness });
                                    }
                                    (n[q].indexLabel || m.indexLabel || n[q].indexLabelFormatter || m.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "splineArea", dataPoint: n[q], dataSeries: m, point: { x: h, y: r }, direction: 0 > n[q].y === a.axisY.reversed ? 1 : -1, color: A });
                                    r = !1;
                                }
                        d();
                        V.drawMarkers(p);
                    }
                }
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(t.x1, t.y1, t.width, t.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderStepArea = function (a) {
            var d, b;
            function c() {
                D &&
                    (0 < h.lineThickness && f.stroke(),
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (C = A) : 0 > a.axisY.viewportMaximum ? (C = t.y1) : 0 < a.axisY.viewportMinimum && (C = A),
                    f.lineTo(l, C),
                    f.lineTo(D.x, C),
                    f.closePath(),
                    (f.globalAlpha = h.fillOpacity),
                    f.fill(),
                    (f.globalAlpha = 1),
                    w && (p.lineTo(l, C), p.lineTo(D.x, C), p.closePath(), p.fill()),
                    f.beginPath(),
                    f.moveTo(l, u),
                    p.beginPath(),
                    p.moveTo(l, u),
                    (D = { x: l, y: u }));
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = w ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var p = this._eventManager.ghostCtx,
                    t = a.axisY.lineCoordinates,
                    B = [],
                    k = this.plotArea,
                    m;
                f.save();
                w && p.save();
                f.beginPath();
                f.rect(k.x1, k.y1, k.width, k.height);
                f.clip();
                w && (p.beginPath(), p.rect(k.x1, k.y1, k.width, k.height), p.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        h = this.data[q],
                        r = h.dataPoints,
                        B = h.id;
                    this._eventManager.objectMap[B] = { objectType: "dataSeries", dataSeriesIndex: q };
                    B = P(B);
                    p.fillStyle = B;
                    B = [];
                    d = !0;
                    var g = 0,
                        l,
                        u,
                        s,
                        A = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        C,
                        D = null;
                    b = !1;
                    if (0 < r.length) {
                        var z = h._colorSet[g % h._colorSet.length],
                            v = (h.lineColor = h.options.lineColor || z),
                            y = v;
                        f.fillStyle = z;
                        f.strokeStyle = v;
                        f.lineWidth = h.lineThickness;
                        var Q = "solid";
                        if (f.setLineDash) {
                            var aa = N(h.nullDataLineDashType, h.lineThickness),
                                Q = h.lineDashType,
                                E = N(Q, h.lineThickness);
                            f.setLineDash(E);
                        }
                        for (; g < r.length; g++)
                            if (((s = r[g].x.getTime ? r[g].x.getTime() : r[g].x), !(s < a.axisX.dataInfo.viewPortMin || (s > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !b))))) {
                                var Y = u;
                                "number" !== typeof r[g].y
                                    ? (h.connectNullData || b || d || c(), (b = !0))
                                    : ((l = a.axisX.convertValueToPixel(s)),
                                      (u = a.axisY.convertValueToPixel(r[g].y)),
                                      d || b
                                          ? (!d && h.connectNullData
                                                ? (f.setLineDash &&
                                                      (h.options.nullDataLineDashType || (Q === h.lineDashType && h.lineDashType !== h.nullDataLineDashType)) &&
                                                      ((d = l), (b = u), (l = m.x), (u = m.y), c(), f.moveTo(m.x, m.y), (l = d), (u = b), (D = m), (Q = h.nullDataLineDashType), f.setLineDash(aa)),
                                                  f.lineTo(l, Y),
                                                  f.lineTo(l, u),
                                                  w && (p.lineTo(l, Y), p.lineTo(l, u)))
                                                : (f.beginPath(), f.moveTo(l, u), w && (p.beginPath(), p.moveTo(l, u)), (D = { x: l, y: u })),
                                            (b = d = !1))
                                          : (f.lineTo(l, Y), w && p.lineTo(l, Y), f.lineTo(l, u), w && p.lineTo(l, u), 0 == g % 250 && c()),
                                      (m = { x: l, y: u }),
                                      g < r.length - 1 &&
                                          (y !== (r[g].lineColor || v) || Q !== (r[g].lineDashType || h.lineDashType)) &&
                                          (c(),
                                          (y = r[g].lineColor || v),
                                          (f.strokeStyle = y),
                                          f.setLineDash && (r[g].lineDashType ? ((Q = r[g].lineDashType), f.setLineDash(N(Q, h.lineThickness))) : ((Q = h.lineDashType), f.setLineDash(E)))),
                                      (s = h.dataPointIds[g]),
                                      (this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: g, x1: l, y1: u }),
                                      0 !== r[g].markerSize &&
                                          (0 < r[g].markerSize || 0 < h.markerSize) &&
                                          ((Y = h.getMarkerProperties(g, l, u, f)), B.push(Y), (s = P(s)), w && B.push({ x: l, y: u, ctx: p, type: Y.type, size: Y.size, color: s, borderColor: s, borderThickness: Y.borderThickness })),
                                      (r[g].indexLabel || h.indexLabel || r[g].indexLabelFormatter || h.indexLabelFormatter) &&
                                          this._indexLabels.push({ chartType: "stepArea", dataPoint: r[g], dataSeries: h, point: { x: l, y: u }, direction: 0 > r[g].y === a.axisY.reversed ? 1 : -1, color: z }));
                            }
                        c();
                        V.drawMarkers(B);
                    }
                }
                w &&
                    (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (f.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    f.clearRect(k.x1, k.y1, k.width, k.height),
                    this._eventManager.ghostCtx.restore());
                f.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderStackedArea = function (a) {
            function d() {
                if (!(1 > k.length)) {
                    for (0 < z.lineThickness && c.stroke(); 0 < k.length; ) {
                        var a = k.pop();
                        c.lineTo(a.x, a.y);
                        w && s.lineTo(a.x, a.y);
                    }
                    c.closePath();
                    c.globalAlpha = z.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    c.beginPath();
                    w && (s.closePath(), s.fill(), s.beginPath());
                    k = [];
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    p = [],
                    t = this.plotArea,
                    g = [],
                    k = [],
                    m = [],
                    n = [],
                    q = 0,
                    h,
                    r,
                    l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    s = this._eventManager.ghostCtx,
                    u,
                    x,
                    A;
                w && s.beginPath();
                c.save();
                w && s.save();
                c.beginPath();
                c.rect(t.x1, t.y1, t.width, t.height);
                c.clip();
                w && (s.beginPath(), s.rect(t.x1, t.y1, t.width, t.height), s.clip());
                for (var e = [], C = 0; C < a.dataSeriesIndexes.length; C++) {
                    var D = a.dataSeriesIndexes[C],
                        z = this.data[D],
                        v = z.dataPoints;
                    z.dataPointIndexes = [];
                    for (q = 0; q < v.length; q++) (D = v[q].x.getTime ? v[q].x.getTime() : v[q].x), (z.dataPointIndexes[D] = q), e[D] || (m.push(D), (e[D] = !0));
                    m.sort(Pa);
                }
                for (C = 0; C < a.dataSeriesIndexes.length; C++) {
                    D = a.dataSeriesIndexes[C];
                    z = this.data[D];
                    v = z.dataPoints;
                    x = !0;
                    k = [];
                    q = z.id;
                    this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: D };
                    q = P(q);
                    s.fillStyle = q;
                    if (0 < m.length) {
                        var e = z._colorSet[0],
                            y = (z.lineColor = z.options.lineColor || e),
                            Q = y;
                        c.fillStyle = e;
                        c.strokeStyle = y;
                        c.lineWidth = z.lineThickness;
                        A = "solid";
                        if (c.setLineDash) {
                            var aa = N(z.nullDataLineDashType, z.lineThickness);
                            A = z.lineDashType;
                            var E = N(A, z.lineThickness);
                            c.setLineDash(E);
                        }
                        for (var Y = !0, q = 0; q < m.length; q++) {
                            var f = m[q],
                                fa = null,
                                fa = 0 <= z.dataPointIndexes[f] ? v[z.dataPointIndexes[f]] : { x: f, y: null };
                            if (!(f < a.axisX.dataInfo.viewPortMin || (f > a.axisX.dataInfo.viewPortMax && (!z.connectNullData || !Y))))
                                if ("number" !== typeof fa.y) z.connectNullData || Y || x || d(), (Y = !0);
                                else {
                                    h = a.axisX.convertValueToPixel(f);
                                    var ma = g[f] ? g[f] : 0;
                                    if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length)) {
                                        n[f] = fa.y + (n[f] ? n[f] : 0);
                                        if (0 >= n[f] && a.axisY.logarithmic) continue;
                                        r = a.axisY.convertValueToPixel(n[f]);
                                    } else (r = a.axisY.convertValueToPixel(fa.y)), (r -= ma);
                                    k.push({ x: h, y: l - ma });
                                    g[f] = l - r;
                                    x || Y
                                        ? (!x && z.connectNullData
                                              ? (c.setLineDash &&
                                                    (z.options.nullDataLineDashType || (A === z.lineDashType && z.lineDashType !== z.nullDataLineDashType)) &&
                                                    ((x = k.pop()), (A = k[k.length - 1]), d(), c.moveTo(u.x, u.y), k.push(A), k.push(x), (A = z.nullDataLineDashType), c.setLineDash(aa)),
                                                c.lineTo(h, r),
                                                w && s.lineTo(h, r))
                                              : (c.beginPath(), c.moveTo(h, r), w && (s.beginPath(), s.moveTo(h, r))),
                                          (Y = x = !1))
                                        : (c.lineTo(h, r), w && s.lineTo(h, r), 0 == q % 250 && (d(), c.moveTo(h, r), w && s.moveTo(h, r), k.push({ x: h, y: l - ma })));
                                    u = { x: h, y: r };
                                    q < v.length - 1 &&
                                        (Q !== (v[q].lineColor || y) || A !== (v[q].lineDashType || z.lineDashType)) &&
                                        (d(),
                                        c.beginPath(),
                                        c.moveTo(h, r),
                                        k.push({ x: h, y: l - ma }),
                                        (Q = v[q].lineColor || y),
                                        (c.strokeStyle = Q),
                                        c.setLineDash && (v[q].lineDashType ? ((A = v[q].lineDashType), c.setLineDash(N(A, z.lineThickness))) : ((A = z.lineDashType), c.setLineDash(E))));
                                    if (0 <= z.dataPointIndexes[f]) {
                                        var F = z.dataPointIds[z.dataPointIndexes[f]];
                                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: z.dataPointIndexes[f], x1: h, y1: r };
                                    }
                                    0 <= z.dataPointIndexes[f] &&
                                        0 !== fa.markerSize &&
                                        (0 < fa.markerSize || 0 < z.markerSize) &&
                                        ((ma = z.getMarkerProperties(z.dataPointIndexes[f], h, r, c)),
                                        p.push(ma),
                                        (f = P(F)),
                                        w && p.push({ x: h, y: r, ctx: s, type: ma.type, size: ma.size, color: f, borderColor: f, borderThickness: ma.borderThickness }));
                                    (fa.indexLabel || z.indexLabel || fa.indexLabelFormatter || z.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stackedArea", dataPoint: fa, dataSeries: z, point: { x: h, y: r }, direction: 0 > v[q].y === a.axisY.reversed ? 1 : -1, color: e });
                                }
                        }
                        d();
                        c.moveTo(h, r);
                        w && s.moveTo(h, r);
                    }
                    delete z.dataPointIndexes;
                }
                V.drawMarkers(p);
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(t.x1, t.y1, t.width, t.height),
                    s.restore());
                c.restore();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderStackedArea100 = function (a) {
            function d() {
                for (0 < z.lineThickness && c.stroke(); 0 < k.length; ) {
                    var a = k.pop();
                    c.lineTo(a.x, a.y);
                    w && A.lineTo(a.x, a.y);
                }
                c.closePath();
                c.globalAlpha = z.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                c.beginPath();
                w && (A.closePath(), A.fill(), A.beginPath());
                k = [];
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    p = this.plotArea,
                    t = [],
                    g = [],
                    k = [],
                    m = [],
                    n = [],
                    q = 0,
                    h,
                    r,
                    l,
                    s,
                    u,
                    x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    A = this._eventManager.ghostCtx;
                c.save();
                w && A.save();
                c.beginPath();
                c.rect(p.x1, p.y1, p.width, p.height);
                c.clip();
                w && (A.beginPath(), A.rect(p.x1, p.y1, p.width, p.height), A.clip());
                for (var e = [], C = 0; C < a.dataSeriesIndexes.length; C++) {
                    var v = a.dataSeriesIndexes[C],
                        z = this.data[v],
                        y = z.dataPoints;
                    z.dataPointIndexes = [];
                    for (q = 0; q < y.length; q++) (v = y[q].x.getTime ? y[q].x.getTime() : y[q].x), (z.dataPointIndexes[v] = q), e[v] || (m.push(v), (e[v] = !0));
                    m.sort(Pa);
                }
                for (C = 0; C < a.dataSeriesIndexes.length; C++) {
                    v = a.dataSeriesIndexes[C];
                    z = this.data[v];
                    y = z.dataPoints;
                    s = !0;
                    e = z.id;
                    this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: v };
                    e = P(e);
                    A.fillStyle = e;
                    k = [];
                    if (0 < m.length) {
                        var e = z._colorSet[q % z._colorSet.length],
                            E = (z.lineColor = z.options.lineColor || e),
                            Q = E;
                        c.fillStyle = e;
                        c.strokeStyle = E;
                        c.lineWidth = z.lineThickness;
                        u = "solid";
                        if (c.setLineDash) {
                            var aa = N(z.nullDataLineDashType, z.lineThickness);
                            u = z.lineDashType;
                            var F = N(u, z.lineThickness);
                            c.setLineDash(F);
                        }
                        for (var Y = !0, q = 0; q < m.length; q++) {
                            var f = m[q],
                                fa = null,
                                fa = 0 <= z.dataPointIndexes[f] ? y[z.dataPointIndexes[f]] : { x: f, y: null };
                            if (!(f < a.axisX.dataInfo.viewPortMin || (f > a.axisX.dataInfo.viewPortMax && (!z.connectNullData || !Y))))
                                if ("number" !== typeof fa.y) z.connectNullData || Y || s || d(), (Y = !0);
                                else {
                                    var ma;
                                    ma = 0 !== a.dataPointYSums[f] ? 100 * (fa.y / a.dataPointYSums[f]) : 0;
                                    h = a.axisX.convertValueToPixel(f);
                                    var ba = g[f] ? g[f] : 0;
                                    if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length)) {
                                        n[f] = ma + (n[f] ? n[f] : 0);
                                        if (0 >= n[f] && a.axisY.logarithmic) continue;
                                        r = a.axisY.convertValueToPixel(n[f]);
                                    } else (r = a.axisY.convertValueToPixel(ma)), (r -= ba);
                                    k.push({ x: h, y: x - ba });
                                    g[f] = x - r;
                                    s || Y
                                        ? (!s && z.connectNullData
                                              ? (c.setLineDash &&
                                                    (z.options.nullDataLineDashType || (u === z.lineDashType && z.lineDashType !== z.nullDataLineDashType)) &&
                                                    ((s = k.pop()), (u = k[k.length - 1]), d(), c.moveTo(l.x, l.y), k.push(u), k.push(s), (u = z.nullDataLineDashType), c.setLineDash(aa)),
                                                c.lineTo(h, r),
                                                w && A.lineTo(h, r))
                                              : (c.beginPath(), c.moveTo(h, r), w && (A.beginPath(), A.moveTo(h, r))),
                                          (Y = s = !1))
                                        : (c.lineTo(h, r), w && A.lineTo(h, r), 0 == q % 250 && (d(), c.moveTo(h, r), w && A.moveTo(h, r), k.push({ x: h, y: x - ba })));
                                    l = { x: h, y: r };
                                    q < y.length - 1 &&
                                        (Q !== (y[q].lineColor || E) || u !== (y[q].lineDashType || z.lineDashType)) &&
                                        (d(),
                                        c.beginPath(),
                                        c.moveTo(h, r),
                                        k.push({ x: h, y: x - ba }),
                                        (Q = y[q].lineColor || E),
                                        (c.strokeStyle = Q),
                                        c.setLineDash && (y[q].lineDashType ? ((u = y[q].lineDashType), c.setLineDash(N(u, z.lineThickness))) : ((u = z.lineDashType), c.setLineDash(F))));
                                    if (0 <= z.dataPointIndexes[f]) {
                                        var G = z.dataPointIds[z.dataPointIndexes[f]];
                                        this._eventManager.objectMap[G] = { id: G, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: z.dataPointIndexes[f], x1: h, y1: r };
                                    }
                                    0 <= z.dataPointIndexes[f] &&
                                        0 !== fa.markerSize &&
                                        (0 < fa.markerSize || 0 < z.markerSize) &&
                                        ((ba = z.getMarkerProperties(q, h, r, c)), t.push(ba), (f = P(G)), w && t.push({ x: h, y: r, ctx: A, type: ba.type, size: ba.size, color: f, borderColor: f, borderThickness: ba.borderThickness }));
                                    (fa.indexLabel || z.indexLabel || fa.indexLabelFormatter || z.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stackedArea100", dataPoint: fa, dataSeries: z, point: { x: h, y: r }, direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1, color: e });
                                }
                        }
                        d();
                        c.moveTo(h, r);
                        w && A.moveTo(h, r);
                    }
                    delete z.dataPointIndexes;
                }
                V.drawMarkers(t);
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(p.x1, p.y1, p.width, p.height),
                    A.restore());
                c.restore();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderBubble = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    e = 0,
                    f,
                    p;
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var t = -Infinity, g = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
                    for (var m = a.dataSeriesIndexes[k], n = this.data[m], q = n.dataPoints, h = 0, e = 0; e < q.length; e++)
                        (f = q[e].getTime ? (f = q[e].x.getTime()) : (f = q[e].x)), f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || ((h = q[e].z), h > t && (t = h), h < g && (g = h));
                for (var r = 25 * Math.PI, l = Math.max(Math.pow((0.25 * Math.min(c.height, c.width)) / 2, 2) * Math.PI, r), k = 0; k < a.dataSeriesIndexes.length; k++)
                    if (((m = a.dataSeriesIndexes[k]), (n = this.data[m]), (q = n.dataPoints), 0 < q.length))
                        for (b.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                            if (((f = q[e].getTime ? (f = q[e].x.getTime()) : (f = q[e].x)), !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y)) {
                                f = a.axisX.convertValueToPixel(f);
                                p = a.axisY.convertValueToPixel(q[e].y);
                                var h = q[e].z,
                                    s = 2 * Math.max(Math.sqrt((t === g ? l / 2 : r + ((l - r) / (t - g)) * (h - g)) / Math.PI) << 0, 1),
                                    h = n.getMarkerProperties(e, b);
                                h.size = s;
                                b.globalAlpha = n.fillOpacity;
                                V.drawMarker(f, p, b, h.type, h.size, h.color, h.borderColor, h.borderThickness);
                                b.globalAlpha = 1;
                                var u = n.dataPointIds[e];
                                this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: e, x1: f, y1: p, size: s };
                                s = P(u);
                                w && V.drawMarker(f, p, this._eventManager.ghostCtx, h.type, h.size, s, s, h.borderThickness);
                                (q[e].indexLabel || n.indexLabel || q[e].indexLabelFormatter || n.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "bubble",
                                        dataPoint: q[e],
                                        dataSeries: n,
                                        point: { x: f, y: p },
                                        direction: 1,
                                        bounds: { x1: f - h.size / 2, y1: p - h.size / 2, x2: f + h.size / 2, y2: p + h.size / 2 },
                                        color: null,
                                    });
                            }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(c.x1, c.y1, c.width, c.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderScatter = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    e = 0,
                    f,
                    p;
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var g = a.dataSeriesIndexes[t],
                        k = this.data[g],
                        m = k.dataPoints;
                    if (0 < m.length) {
                        b.strokeStyle = "#4572A7 ";
                        Math.pow((0.3 * Math.min(c.height, c.width)) / 2, 2);
                        for (var n = 0, q = 0, e = 0; e < m.length; e++)
                            if (((f = m[e].getTime ? (f = m[e].x.getTime()) : (f = m[e].x)), !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y)) {
                                f = a.axisX.convertValueToPixel(f);
                                p = a.axisY.convertValueToPixel(m[e].y);
                                var h = k.getMarkerProperties(e, f, p, b);
                                b.globalAlpha = k.fillOpacity;
                                V.drawMarker(h.x, h.y, h.ctx, h.type, h.size, h.color, h.borderColor, h.borderThickness);
                                b.globalAlpha = 1;
                                (Math.sqrt((n - f) * (n - f) + (q - p) * (q - p)) < Math.min(h.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height)) ||
                                    ((n = k.dataPointIds[e]),
                                    (this._eventManager.objectMap[n] = { id: n, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: e, x1: f, y1: p }),
                                    (n = P(n)),
                                    w && V.drawMarker(h.x, h.y, this._eventManager.ghostCtx, h.type, h.size, n, n, h.borderThickness),
                                    (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({
                                            chartType: "scatter",
                                            dataPoint: m[e],
                                            dataSeries: k,
                                            point: { x: f, y: p },
                                            direction: 1,
                                            bounds: { x1: f - h.size / 2, y1: p - h.size / 2, x2: f + h.size / 2, y2: p + h.size / 2 },
                                            color: null,
                                        }),
                                    (n = f),
                                    (q = p));
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(c.x1, c.y1, c.width, c.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderCandlestick = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    p = this.plotArea,
                    t = 0,
                    g,
                    k,
                    m,
                    n,
                    q,
                    h,
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    r = a.axisX.dataInfo.minDiff;
                isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                r = this.options.dataPointWidth ? this.dataPointWidth : (0.7 * p.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range))) << 0;
                this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && this.dataPointMinWidth && f < e && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                r < e && (r = e);
                r > f && (r = f);
                b.save();
                w && c.save();
                b.beginPath();
                b.rect(p.x1, p.y1, p.width, p.height);
                b.clip();
                w && (c.beginPath(), c.rect(p.x1, p.y1, p.width, p.height), c.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var v = a.dataSeriesIndexes[l],
                        u = this.data[v],
                        x = u.dataPoints;
                    if (0 < x.length)
                        for (var A = 5 < r && u.bevelEnabled ? !0 : !1, t = 0; t < x.length; t++)
                            if (
                                (x[t].getTime ? (h = x[t].x.getTime()) : (h = x[t].x),
                                !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) &&
                                    !s(x[t].y) &&
                                    x[t].y.length &&
                                    "number" === typeof x[t].y[0] &&
                                    "number" === typeof x[t].y[1] &&
                                    "number" === typeof x[t].y[2] &&
                                    "number" === typeof x[t].y[3])
                            ) {
                                g = a.axisX.convertValueToPixel(h);
                                k = a.axisY.convertValueToPixel(x[t].y[0]);
                                m = a.axisY.convertValueToPixel(x[t].y[1]);
                                n = a.axisY.convertValueToPixel(x[t].y[2]);
                                q = a.axisY.convertValueToPixel(x[t].y[3]);
                                var C = (g - r / 2) << 0,
                                    D = (C + r) << 0,
                                    f = u.options.fallingColor ? u.fallingColor : u._colorSet[0],
                                    e = x[t].color ? x[t].color : u._colorSet[0],
                                    z = Math.round(Math.max(1, 0.15 * r)),
                                    y = 0 === z % 2 ? 0 : 0.5,
                                    E = u.dataPointIds[t];
                                this._eventManager.objectMap[E] = { id: E, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: t, x1: C, y1: k, x2: D, y2: m, x3: g, y3: n, x4: g, y4: q, borderThickness: z, color: e };
                                b.strokeStyle = e;
                                b.beginPath();
                                b.lineWidth = z;
                                c.lineWidth = Math.max(z, 4);
                                "candlestick" === u.type
                                    ? (b.moveTo(g - y, m),
                                      b.lineTo(g - y, Math.min(k, q)),
                                      b.stroke(),
                                      b.moveTo(g - y, Math.max(k, q)),
                                      b.lineTo(g - y, n),
                                      b.stroke(),
                                      ca(b, C, Math.min(k, q), D, Math.max(k, q), x[t].y[0] <= x[t].y[3] ? u.risingColor : f, z, e, A, A, !1, !1, u.fillOpacity),
                                      w &&
                                          ((e = P(E)),
                                          (c.strokeStyle = e),
                                          c.moveTo(g - y, m),
                                          c.lineTo(g - y, Math.min(k, q)),
                                          c.stroke(),
                                          c.moveTo(g - y, Math.max(k, q)),
                                          c.lineTo(g - y, n),
                                          c.stroke(),
                                          ca(c, C, Math.min(k, q), D, Math.max(k, q), e, 0, null, !1, !1, !1, !1)))
                                    : "ohlc" === u.type &&
                                      (b.moveTo(g - y, m),
                                      b.lineTo(g - y, n),
                                      b.stroke(),
                                      b.beginPath(),
                                      b.moveTo(g, k),
                                      b.lineTo(C, k),
                                      b.stroke(),
                                      b.beginPath(),
                                      b.moveTo(g, q),
                                      b.lineTo(D, q),
                                      b.stroke(),
                                      w &&
                                          ((e = P(E)),
                                          (c.strokeStyle = e),
                                          c.moveTo(g - y, m),
                                          c.lineTo(g - y, n),
                                          c.stroke(),
                                          c.beginPath(),
                                          c.moveTo(g, k),
                                          c.lineTo(C, k),
                                          c.stroke(),
                                          c.beginPath(),
                                          c.moveTo(g, q),
                                          c.lineTo(D, q),
                                          c.stroke()));
                                (x[t].indexLabel || u.indexLabel || x[t].indexLabelFormatter || u.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: u.type,
                                        dataPoint: x[t],
                                        dataSeries: u,
                                        point: { x: C + (D - C) / 2, y: a.axisY.reversed ? n : m },
                                        direction: 1,
                                        bounds: { x1: C, y1: Math.min(m, n), x2: D, y2: Math.max(m, n) },
                                        color: e,
                                    });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(p.x1, p.y1, p.width, p.height),
                    c.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderBoxAndWhisker = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = this.plotArea,
                    p = 0,
                    t,
                    g,
                    k,
                    m,
                    n,
                    q,
                    h,
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    r = a.axisX.dataInfo.minDiff;
                isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                r = this.options.dataPointWidth ? this.dataPointWidth : (0.7 * f.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range))) << 0;
                this.dataPointMaxWidth && e > p && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && this.dataPointMinWidth && p < e && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                r < e && (r = e);
                r > p && (r = p);
                b.save();
                w && c.save();
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                w && (c.beginPath(), c.rect(f.x1, f.y1, f.width, f.height), c.clip());
                for (var l = !1, l = !!a.axisY.reversed, v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var u = a.dataSeriesIndexes[v],
                        x = this.data[u],
                        A = x.dataPoints;
                    if (0 < A.length)
                        for (var C = 5 < r && x.bevelEnabled ? !0 : !1, p = 0; p < A.length; p++)
                            if (
                                (A[p].getTime ? (h = A[p].x.getTime()) : (h = A[p].x),
                                !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) &&
                                    !s(A[p].y) &&
                                    A[p].y.length &&
                                    "number" === typeof A[p].y[0] &&
                                    "number" === typeof A[p].y[1] &&
                                    "number" === typeof A[p].y[2] &&
                                    "number" === typeof A[p].y[3] &&
                                    "number" === typeof A[p].y[4] &&
                                    5 === A[p].y.length)
                            ) {
                                t = a.axisX.convertValueToPixel(h);
                                g = a.axisY.convertValueToPixel(A[p].y[0]);
                                k = a.axisY.convertValueToPixel(A[p].y[1]);
                                m = a.axisY.convertValueToPixel(A[p].y[2]);
                                n = a.axisY.convertValueToPixel(A[p].y[3]);
                                q = a.axisY.convertValueToPixel(A[p].y[4]);
                                var D = (t - r / 2) << 0,
                                    z = (t + r / 2) << 0,
                                    e = A[p].color ? A[p].color : x._colorSet[0],
                                    y = Math.round(Math.max(1, 0.15 * r)),
                                    E = 0 === y % 2 ? 0 : 0.5,
                                    Q = A[p].whiskerColor ? A[p].whiskerColor : A[p].color ? (x.whiskerColor ? x.whiskerColor : A[p].color) : x.whiskerColor ? x.whiskerColor : e,
                                    aa = "number" === typeof A[p].whiskerThickness ? A[p].whiskerThickness : "number" === typeof x.options.whiskerThickness ? x.whiskerThickness : y,
                                    F = A[p].whiskerDashType ? A[p].whiskerDashType : x.whiskerDashType,
                                    Y = s(A[p].whiskerLength) ? (s(x.options.whiskerLength) ? r : x.whiskerLength) : A[p].whiskerLength,
                                    Y = "number" === typeof Y ? (0 >= Y ? 0 : Y >= r ? r : Y) : "string" === typeof Y ? ((parseInt(Y) * r) / 100 > r ? r : (parseInt(Y) * r) / 100) : r,
                                    fa = 1 === Math.round(aa) % 2 ? 0.5 : 0,
                                    ma = A[p].stemColor ? A[p].stemColor : A[p].color ? (x.stemColor ? x.stemColor : A[p].color) : x.stemColor ? x.stemColor : e,
                                    ba = "number" === typeof A[p].stemThickness ? A[p].stemThickness : "number" === typeof x.options.stemThickness ? x.stemThickness : y,
                                    G = 1 === Math.round(ba) % 2 ? 0.5 : 0,
                                    J = A[p].stemDashType ? A[p].stemDashType : x.stemDashType,
                                    H = A[p].lineColor ? A[p].lineColor : A[p].color ? (x.lineColor ? x.lineColor : A[p].color) : x.lineColor ? x.lineColor : e,
                                    M = "number" === typeof A[p].lineThickness ? A[p].lineThickness : "number" === typeof x.options.lineThickness ? x.lineThickness : y,
                                    S = A[p].lineDashType ? A[p].lineDashType : x.lineDashType,
                                    L = 1 === Math.round(M) % 2 ? 0.5 : 0,
                                    R = x.upperBoxColor,
                                    xa = x.lowerBoxColor,
                                    sa = s(x.options.fillOpacity) ? 1 : x.fillOpacity,
                                    O = x.dataPointIds[p];
                                this._eventManager.objectMap[O] = {
                                    id: O,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: p,
                                    x1: D,
                                    y1: g,
                                    x2: z,
                                    y2: k,
                                    x3: t,
                                    y3: m,
                                    x4: t,
                                    y4: n,
                                    y5: q,
                                    borderThickness: y,
                                    color: e,
                                    stemThickness: ba,
                                    stemColor: ma,
                                    whiskerThickness: aa,
                                    whiskerLength: Y,
                                    whiskerColor: Q,
                                    lineThickness: M,
                                    lineColor: H,
                                };
                                b.save();
                                0 < ba &&
                                    (b.beginPath(), (b.strokeStyle = ma), (b.lineWidth = ba), b.setLineDash && b.setLineDash(N(J, ba)), b.moveTo(t - G, k), b.lineTo(t - G, g), b.stroke(), b.moveTo(t - G, n), b.lineTo(t - G, m), b.stroke());
                                b.restore();
                                c.lineWidth = Math.max(y, 4);
                                b.beginPath();
                                ca(b, D, Math.min(q, k), z, Math.max(k, q), xa, 0, e, l ? C : !1, l ? !1 : C, !1, !1, sa);
                                b.beginPath();
                                ca(b, D, Math.min(m, q), z, Math.max(q, m), R, 0, e, l ? !1 : C, l ? C : !1, !1, !1, sa);
                                b.beginPath();
                                b.lineWidth = y;
                                b.strokeStyle = e;
                                b.rect(D - E, Math.min(k, m) - E, z - D + 2 * E, Math.max(k, m) - Math.min(k, m) + 2 * E);
                                b.stroke();
                                b.save();
                                0 < M && (b.beginPath(), (b.globalAlpha = 1), b.setLineDash && b.setLineDash(N(S, M)), (b.strokeStyle = H), (b.lineWidth = M), b.moveTo(D, q - L), b.lineTo(z, q - L), b.stroke());
                                b.restore();
                                b.save();
                                0 < aa &&
                                    (b.beginPath(),
                                    b.setLineDash && b.setLineDash(N(F, aa)),
                                    (b.strokeStyle = Q),
                                    (b.lineWidth = aa),
                                    b.moveTo((t - Y / 2) << 0, n - fa),
                                    b.lineTo((t + Y / 2) << 0, n - fa),
                                    b.stroke(),
                                    b.moveTo((t - Y / 2) << 0, g + fa),
                                    b.lineTo((t + Y / 2) << 0, g + fa),
                                    b.stroke());
                                b.restore();
                                w &&
                                    ((e = P(O)),
                                    (c.strokeStyle = e),
                                    (c.lineWidth = ba),
                                    0 < ba && (c.moveTo(t - E - G, k), c.lineTo(t - E - G, Math.max(g, n)), c.stroke(), c.moveTo(t - E - G, Math.min(g, n)), c.lineTo(t - E - G, m), c.stroke()),
                                    ca(c, D, Math.max(k, m), z, Math.min(k, m), e, 0, null, !1, !1, !1, !1),
                                    0 < aa && (c.beginPath(), (c.lineWidth = aa), c.moveTo(t + Y / 2, n - fa), c.lineTo(t - Y / 2, n - fa), c.stroke(), c.moveTo(t + Y / 2, g + fa), c.lineTo(t - Y / 2, g + fa), c.stroke()));
                                (A[p].indexLabel || x.indexLabel || A[p].indexLabelFormatter || x.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: x.type,
                                        dataPoint: A[p],
                                        dataSeries: x,
                                        point: { x: D + (z - D) / 2, y: a.axisY.reversed ? g : n },
                                        direction: 1,
                                        bounds: { x1: D, y1: Math.min(g, n), x2: z, y2: Math.max(g, n) },
                                        color: e,
                                    });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(f.x1, f.y1, f.width, f.height),
                    c.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderRangeColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = 0,
                    p,
                    t,
                    g,
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && this.dataPointMinWidth && p < f && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                k < f && (k = f);
                k > p && (k = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        q = this.data[n],
                        h = q.dataPoints;
                    if (0 < h.length)
                        for (var r = 5 < k && q.bevelEnabled ? !0 : !1, f = 0; f < h.length; f++)
                            if (
                                (h[f].getTime ? (g = h[f].x.getTime()) : (g = h[f].x),
                                !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !s(h[f].y) && h[f].y.length && "number" === typeof h[f].y[0] && "number" === typeof h[f].y[1])
                            ) {
                                c = a.axisX.convertValueToPixel(g);
                                p = a.axisY.convertValueToPixel(h[f].y[0]);
                                t = a.axisY.convertValueToPixel(h[f].y[1]);
                                var l = a.axisX.reversed ? (c + (a.plotType.totalDataSeries * k) / 2 - (a.previousDataSeriesCount + m) * k) << 0 : (c - (a.plotType.totalDataSeries * k) / 2 + (a.previousDataSeriesCount + m) * k) << 0,
                                    v = a.axisX.reversed ? (l - k) << 0 : (l + k) << 0,
                                    c = h[f].color ? h[f].color : q._colorSet[f % q._colorSet.length];
                                if (p > t) {
                                    var u = p;
                                    p = t;
                                    t = u;
                                }
                                u = q.dataPointIds[f];
                                this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: f, x1: l, y1: p, x2: v, y2: t };
                                ca(b, l, p, v, t, c, 0, c, r, r, !1, !1, q.fillOpacity);
                                c = P(u);
                                w && ca(this._eventManager.ghostCtx, l, p, v, t, c, 0, null, !1, !1, !1, !1);
                                if (h[f].indexLabel || q.indexLabel || h[f].indexLabelFormatter || q.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeColumn",
                                        dataPoint: h[f],
                                        dataSeries: q,
                                        indexKeyword: 0,
                                        point: { x: l + (v - l) / 2, y: h[f].y[1] >= h[f].y[0] ? t : p },
                                        direction: h[f].y[1] >= h[f].y[0] ? -1 : 1,
                                        bounds: { x1: l, y1: Math.min(p, t), x2: v, y2: Math.max(p, t) },
                                        color: c,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "rangeColumn",
                                            dataPoint: h[f],
                                            dataSeries: q,
                                            indexKeyword: 1,
                                            point: { x: l + (v - l) / 2, y: h[f].y[1] >= h[f].y[0] ? p : t },
                                            direction: h[f].y[1] >= h[f].y[0] ? 1 : -1,
                                            bounds: { x1: l, y1: Math.min(p, t), x2: v, y2: Math.max(p, t) },
                                            color: c,
                                        });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderError = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d,
                c = a.axisY._position ? ("left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0) : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = !1,
                    p = this.plotArea,
                    t = 0,
                    g,
                    k,
                    m,
                    n,
                    q,
                    h,
                    r,
                    l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(p.x1, p.y1, p.width, p.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.clip());
                for (var v = 0, u = 0; u < this.data.length; u++) !this.data[u].type.match(/(bar|column)/gi) || !this.data[u].visible || (this.data[u].type.match(/(stacked)/gi) && v) || v++;
                for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var A = a.dataSeriesIndexes[x],
                        C = this.data[A],
                        D = C.dataPoints,
                        z = s(C._linkedSeries) ? !1 : C._linkedSeries.type.match(/(bar|column)/gi) && C._linkedSeries.visible ? !0 : !1,
                        E = 0;
                    if (z)
                        for (e = C._linkedSeries.id, u = 0; u < e; u++)
                            !this.data[u].type.match(/(bar|column)/gi) || !this.data[u].visible || (this.data[u].type.match(/(stacked)/gi) && E) || (this.data[u].type.match(/(range)/gi) && (f = !0), E++);
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (z ? v : 1))) << 0 : 0.3 * this.width;
                    f &&
                        (t = this.options.dataPointMaxWidth
                            ? this.dataPointMaxWidth
                            : this.options.dataPointWidth
                            ? this.dataPointWidth
                            : c
                            ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (z ? v : 1))) << 0
                            : 0.03 * this.width);
                    u = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * (((c ? p.height : p.width) * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range))) / (z ? v : 1))) << 0;
                    this.dataPointMaxWidth && e > t && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
                    !this.dataPointMaxWidth && this.dataPointMinWidth && t < e && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    u < e && (u = e);
                    u > t && (u = t);
                    if (0 < D.length)
                        for (var F = C._colorSet, t = 0; t < D.length; t++) {
                            var e = (C.lineColor = C.options.color ? C.options.color : F[0]),
                                Q = {
                                    color: D[t].whiskerColor ? D[t].whiskerColor : D[t].color ? (C.whiskerColor ? C.whiskerColor : D[t].color) : C.whiskerColor ? C.whiskerColor : e,
                                    thickness: s(D[t].whiskerThickness) ? C.whiskerThickness : D[t].whiskerThickness,
                                    dashType: D[t].whiskerDashType ? D[t].whiskerDashType : C.whiskerDashType,
                                    length: s(D[t].whiskerLength) ? (s(C.options.whiskerLength) ? u : C.options.whiskerLength) : D[t].whiskerLength,
                                    trimLength: s(D[t].whiskerLength) ? (s(C.options.whiskerLength) ? 50 : 0) : 0,
                                };
                            Q.length = "number" === typeof Q.length ? (0 >= Q.length ? 0 : Q.length >= u ? u : Q.length) : "string" === typeof Q.length ? ((parseInt(Q.length) * u) / 100 > u ? u : (parseInt(Q.length) * u) / 100 > u) : u;
                            Q.thickness = "number" === typeof Q.thickness ? (0 > Q.thickness ? 0 : Math.round(Q.thickness)) : 2;
                            var aa = {
                                color: D[t].stemColor ? D[t].stemColor : D[t].color ? (C.stemColor ? C.stemColor : D[t].color) : C.stemColor ? C.stemColor : e,
                                thickness: D[t].stemThickness ? D[t].stemThickness : C.stemThickness,
                                dashType: D[t].stemDashType ? D[t].stemDashType : C.stemDashType,
                            };
                            aa.thickness = "number" === typeof aa.thickness ? (0 > aa.thickness ? 0 : Math.round(aa.thickness)) : 2;
                            D[t].getTime ? (r = D[t].x.getTime()) : (r = D[t].x);
                            if (!(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax) && !s(D[t].y) && D[t].y.length && "number" === typeof D[t].y[0] && "number" === typeof D[t].y[1]) {
                                var ja = a.axisX.convertValueToPixel(r);
                                c ? (k = ja) : (g = ja);
                                ja = a.axisY.convertValueToPixel(D[t].y[0]);
                                c ? (m = ja) : (q = ja);
                                ja = a.axisY.convertValueToPixel(D[t].y[1]);
                                c ? (n = ja) : (h = ja);
                                c
                                    ? ((q = a.axisX.reversed ? (k + ((z ? v : 1) * u) / 2 - (z ? E - 1 : 0) * u) << 0 : (k - ((z ? v : 1) * u) / 2 + (z ? E - 1 : 0) * u) << 0), (h = a.axisX.reversed ? (q - u) << 0 : (q + u) << 0))
                                    : ((m = a.axisX.reversed ? (g + ((z ? v : 1) * u) / 2 - (z ? E - 1 : 0) * u) << 0 : (g - ((z ? v : 1) * u) / 2 + (z ? E - 1 : 0) * u) << 0), (n = a.axisX.reversed ? (m - u) << 0 : (m + u) << 0));
                                !c && q > h && ((ja = q), (q = h), (h = ja));
                                c && m > n && ((ja = m), (m = n), (n = ja));
                                ja = C.dataPointIds[t];
                                this._eventManager.objectMap[ja] = {
                                    id: ja,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: A,
                                    dataPointIndex: t,
                                    x1: Math.min(m, n),
                                    y1: Math.min(q, h),
                                    x2: Math.max(n, m),
                                    y2: Math.max(h, q),
                                    isXYSwapped: c,
                                    stemProperties: aa,
                                    whiskerProperties: Q,
                                };
                                y(b, Math.min(m, n), Math.min(q, h), Math.max(n, m), Math.max(h, q), e, Q, aa, c);
                                w && y(this._eventManager.ghostCtx, m, q, n, h, e, Q, aa, c);
                                if (D[t].indexLabel || C.indexLabel || D[t].indexLabelFormatter || C.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "error",
                                        dataPoint: D[t],
                                        dataSeries: C,
                                        indexKeyword: 0,
                                        point: { x: c ? (D[t].y[1] >= D[t].y[0] ? m : n) : m + (n - m) / 2, y: c ? q + (h - q) / 2 : D[t].y[1] >= D[t].y[0] ? h : q },
                                        direction: D[t].y[1] >= D[t].y[0] ? -1 : 1,
                                        bounds: { x1: c ? Math.min(m, n) : m, y1: c ? q : Math.min(q, h), x2: c ? Math.max(m, n) : n, y2: c ? h : Math.max(q, h) },
                                        color: e,
                                        axisSwapped: c,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "error",
                                            dataPoint: D[t],
                                            dataSeries: C,
                                            indexKeyword: 1,
                                            point: { x: c ? (D[t].y[1] >= D[t].y[0] ? n : m) : m + (n - m) / 2, y: c ? q + (h - q) / 2 : D[t].y[1] >= D[t].y[0] ? q : h },
                                            direction: D[t].y[1] >= D[t].y[0] ? 1 : -1,
                                            bounds: { x1: c ? Math.min(m, n) : m, y1: c ? q : Math.min(q, h), x2: c ? Math.max(m, n) : n, y2: c ? h : Math.max(q, h) },
                                            color: e,
                                            axisSwapped: c,
                                        });
                            }
                        }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(p.x1, p.y1, p.width, p.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderRangeBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    f = 0,
                    p,
                    t,
                    g,
                    k,
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && this.dataPointMinWidth && p < f && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                m < f && (m = f);
                m > p && (m = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        h = this.data[q],
                        r = h.dataPoints;
                    if (0 < r.length) {
                        var l = 5 < m && h.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (f = 0; f < r.length; f++)
                            if (
                                (r[f].getTime ? (k = r[f].x.getTime()) : (k = r[f].x),
                                !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !s(r[f].y) && r[f].y.length && "number" === typeof r[f].y[0] && "number" === typeof r[f].y[1])
                            ) {
                                p = a.axisY.convertValueToPixel(r[f].y[0]);
                                t = a.axisY.convertValueToPixel(r[f].y[1]);
                                g = a.axisX.convertValueToPixel(k);
                                g = a.axisX.reversed ? (g + (a.plotType.totalDataSeries * m) / 2 - (a.previousDataSeriesCount + n) * m) << 0 : (g - (a.plotType.totalDataSeries * m) / 2 + (a.previousDataSeriesCount + n) * m) << 0;
                                var v = a.axisX.reversed ? (g - m) << 0 : (g + m) << 0;
                                p > t && ((c = p), (p = t), (t = c));
                                c = r[f].color ? r[f].color : h._colorSet[f % h._colorSet.length];
                                ca(b, p, g, t, v, c, 0, null, l, !1, !1, !1, h.fillOpacity);
                                c = h.dataPointIds[f];
                                this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: p, y1: g, x2: t, y2: v };
                                c = P(c);
                                w && ca(this._eventManager.ghostCtx, p, g, t, v, c, 0, null, !1, !1, !1, !1);
                                if (r[f].indexLabel || h.indexLabel || r[f].indexLabelFormatter || h.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeBar",
                                        dataPoint: r[f],
                                        dataSeries: h,
                                        indexKeyword: 0,
                                        point: { x: r[f].y[1] >= r[f].y[0] ? p : t, y: g + (v - g) / 2 },
                                        direction: r[f].y[1] >= r[f].y[0] ? -1 : 1,
                                        bounds: { x1: Math.min(p, t), y1: g, x2: Math.max(p, t), y2: v },
                                        color: c,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "rangeBar",
                                            dataPoint: r[f],
                                            dataSeries: h,
                                            indexKeyword: 1,
                                            point: { x: r[f].y[1] >= r[f].y[0] ? t : p, y: g + (v - g) / 2 },
                                            direction: r[f].y[1] >= r[f].y[0] ? 1 : -1,
                                            bounds: { x1: Math.min(p, t), y1: g, x2: Math.max(p, t), y2: v },
                                            color: c,
                                        });
                            }
                    }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        l.prototype.renderRangeArea = function (a) {
            function d() {
                if (x) {
                    for (var a = null, b = g.length - 1; 0 <= b; b--) (a = g[b]), c.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
                    c.closePath();
                    c.globalAlpha = m.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    e.fill();
                    if (0 < m.lineThickness) {
                        c.beginPath();
                        c.moveTo(a.x, a.y2);
                        for (b = 0; b < g.length; b++) (a = g[b]), c.lineTo(a.x, a.y2);
                        c.moveTo(g[0].x, g[0].y1);
                        for (b = 0; b < g.length; b++) (a = g[b]), c.lineTo(a.x, a.y1);
                        c.stroke();
                    }
                    c.beginPath();
                    c.moveTo(r, l);
                    e.beginPath();
                    e.moveTo(r, l);
                    x = { x: r, y: l };
                    g = [];
                    g.push({ x: r, y1: l, y2: s });
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    p = this.plotArea;
                c.save();
                w && e.save();
                c.beginPath();
                c.rect(p.x1, p.y1, p.width, p.height);
                c.clip();
                w && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var g = [],
                        k = a.dataSeriesIndexes[t],
                        m = this.data[k],
                        n = m.dataPoints,
                        f = m.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: k };
                    f = P(f);
                    e.fillStyle = f;
                    var f = [],
                        q = !0,
                        h = 0,
                        r,
                        l,
                        s,
                        u,
                        x = null;
                    if (0 < n.length) {
                        var v = m._colorSet[h % m._colorSet.length],
                            C = (m.lineColor = m.options.lineColor || v),
                            D = C;
                        c.fillStyle = v;
                        c.strokeStyle = C;
                        c.lineWidth = m.lineThickness;
                        var z = "solid";
                        if (c.setLineDash) {
                            var y = N(m.nullDataLineDashType, m.lineThickness),
                                z = m.lineDashType,
                                E = N(z, m.lineThickness);
                            c.setLineDash(E);
                        }
                        for (var Q = !0; h < n.length; h++)
                            if (((u = n[h].x.getTime ? n[h].x.getTime() : n[h].x), !(u < a.axisX.dataInfo.viewPortMin || (u > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !Q)))))
                                if (null !== n[h].y && n[h].y.length && "number" === typeof n[h].y[0] && "number" === typeof n[h].y[1]) {
                                    r = a.axisX.convertValueToPixel(u);
                                    l = a.axisY.convertValueToPixel(n[h].y[0]);
                                    s = a.axisY.convertValueToPixel(n[h].y[1]);
                                    q || Q
                                        ? (m.connectNullData && !q
                                              ? (c.setLineDash &&
                                                    (m.options.nullDataLineDashType || (z === m.lineDashType && m.lineDashType !== m.nullDataLineDashType)) &&
                                                    ((g[g.length - 1].newLineDashArray = E), (z = m.nullDataLineDashType), c.setLineDash(y)),
                                                c.lineTo(r, l),
                                                w && e.lineTo(r, l),
                                                g.push({ x: r, y1: l, y2: s }))
                                              : (c.beginPath(), c.moveTo(r, l), (x = { x: r, y: l }), (g = []), g.push({ x: r, y1: l, y2: s }), w && (e.beginPath(), e.moveTo(r, l))),
                                          (Q = q = !1))
                                        : (c.lineTo(r, l), g.push({ x: r, y1: l, y2: s }), w && e.lineTo(r, l), 0 == h % 250 && d());
                                    u = m.dataPointIds[h];
                                    this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: h, x1: r, y1: l, y2: s };
                                    h < n.length - 1 &&
                                        (D !== (n[h].lineColor || C) || z !== (n[h].lineDashType || m.lineDashType)) &&
                                        (d(),
                                        (D = n[h].lineColor || C),
                                        (g[g.length - 1].newStrokeStyle = D),
                                        (c.strokeStyle = D),
                                        c.setLineDash &&
                                            (n[h].lineDashType
                                                ? ((z = n[h].lineDashType), (g[g.length - 1].newLineDashArray = N(z, m.lineThickness)), c.setLineDash(g[g.length - 1].newLineDashArray))
                                                : ((z = m.lineDashType), (g[g.length - 1].newLineDashArray = E), c.setLineDash(E))));
                                    if (0 !== n[h].markerSize && (0 < n[h].markerSize || 0 < m.markerSize)) {
                                        var aa = m.getMarkerProperties(h, r, s, c);
                                        f.push(aa);
                                        var F = P(u);
                                        w && f.push({ x: r, y: s, ctx: e, type: aa.type, size: aa.size, color: F, borderColor: F, borderThickness: aa.borderThickness });
                                        aa = m.getMarkerProperties(h, r, l, c);
                                        f.push(aa);
                                        F = P(u);
                                        w && f.push({ x: r, y: l, ctx: e, type: aa.type, size: aa.size, color: F, borderColor: F, borderThickness: aa.borderThickness });
                                    }
                                    if (n[h].indexLabel || m.indexLabel || n[h].indexLabelFormatter || m.indexLabelFormatter)
                                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[h], dataSeries: m, indexKeyword: 0, point: { x: r, y: l }, direction: n[h].y[0] > n[h].y[1] === a.axisY.reversed ? -1 : 1, color: v }),
                                            this._indexLabels.push({
                                                chartType: "rangeArea",
                                                dataPoint: n[h],
                                                dataSeries: m,
                                                indexKeyword: 1,
                                                point: { x: r, y: s },
                                                direction: n[h].y[0] > n[h].y[1] === a.axisY.reversed ? 1 : -1,
                                                color: v,
                                            });
                                } else Q || q || d(), (Q = !0);
                        d();
                        V.drawMarkers(f);
                    }
                }
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(p.x1, p.y1, p.width, p.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderRangeSplineArea = function (a) {
            function d(a, b) {
                var d = v(l, 2);
                if (0 < d.length) {
                    if (0 < k.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray)
                                c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (c.strokeStyle = d[f].newStrokeStyle), d[f].newLineDashArray && c.setLineDash(d[f].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                        }
                    }
                    c.beginPath();
                    c.moveTo(d[0].x, d[0].y);
                    w && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), w && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = v(s, 2);
                    c.lineTo(s[s.length - 1].x, s[s.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) c.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y), w && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    c.closePath();
                    c.globalAlpha = k.fillOpacity;
                    c.fill();
                    w && (e.closePath(), e.fill());
                    c.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var h = (f = 0); f < d.length - 3; f += 3, h++) {
                            if (l[h].newStrokeStyle || l[h].newLineDashArray)
                                c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), l[h].newStrokeStyle && (c.strokeStyle = l[h].newStrokeStyle), l[h].newLineDashArray && c.setLineDash(l[h].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                        }
                        d = v(l, 2);
                        c.moveTo(d[0].x, d[0].y);
                        for (h = f = 0; f < d.length - 3; f += 3, h++) {
                            if (l[h].newStrokeStyle || l[h].newLineDashArray)
                                c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), l[h].newStrokeStyle && (c.strokeStyle = l[h].newStrokeStyle), l[h].newLineDashArray && c.setLineDash(l[h].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                        }
                        c.stroke();
                    }
                    c.beginPath();
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    p = this.plotArea;
                c.save();
                w && e.save();
                c.beginPath();
                c.rect(p.x1, p.y1, p.width, p.height);
                c.clip();
                w && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var g = a.dataSeriesIndexes[t],
                        k = this.data[g],
                        m = k.dataPoints,
                        f = k.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: g };
                    f = P(f);
                    e.fillStyle = f;
                    var f = [],
                        n = 0,
                        q,
                        h,
                        r,
                        l = [],
                        s = [];
                    if (0 < m.length) {
                        var u = k._colorSet[n % k._colorSet.length],
                            x = (k.lineColor = k.options.lineColor || u),
                            A = x;
                        c.fillStyle = u;
                        c.lineWidth = k.lineThickness;
                        var C = "solid",
                            D;
                        if (c.setLineDash) {
                            var z = N(k.nullDataLineDashType, k.lineThickness),
                                C = k.lineDashType;
                            D = N(C, k.lineThickness);
                        }
                        for (h = !1; n < m.length; n++)
                            if (((q = m[n].x.getTime ? m[n].x.getTime() : m[n].x), !(q < a.axisX.dataInfo.viewPortMin || (q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !h)))))
                                if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    h = a.axisY.convertValueToPixel(m[n].y[0]);
                                    r = a.axisY.convertValueToPixel(m[n].y[1]);
                                    var y = k.dataPointIds[n];
                                    this._eventManager.objectMap[y] = { id: y, objectType: "dataPoint", dataSeriesIndex: g, dataPointIndex: n, x1: q, y1: h, y2: r };
                                    l[l.length] = { x: q, y: h };
                                    s[s.length] = { x: q, y: r };
                                    n < m.length - 1 &&
                                        (A !== (m[n].lineColor || x) || C !== (m[n].lineDashType || k.lineDashType)) &&
                                        ((A = m[n].lineColor || x),
                                        (l[l.length - 1].newStrokeStyle = A),
                                        c.setLineDash && (m[n].lineDashType ? ((C = m[n].lineDashType), (l[l.length - 1].newLineDashArray = N(C, k.lineThickness))) : ((C = k.lineDashType), (l[l.length - 1].newLineDashArray = D))));
                                    if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                                        var E = k.getMarkerProperties(n, q, h, c);
                                        f.push(E);
                                        var Q = P(y);
                                        w && f.push({ x: q, y: h, ctx: e, type: E.type, size: E.size, color: Q, borderColor: Q, borderThickness: E.borderThickness });
                                        E = k.getMarkerProperties(n, q, r, c);
                                        f.push(E);
                                        Q = P(y);
                                        w && f.push({ x: q, y: r, ctx: e, type: E.type, size: E.size, color: Q, borderColor: Q, borderThickness: E.borderThickness });
                                    }
                                    if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter)
                                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 0, point: { x: q, y: h }, direction: m[n].y[0] <= m[n].y[1] ? -1 : 1, color: u }),
                                            this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 1, point: { x: q, y: r }, direction: m[n].y[0] <= m[n].y[1] ? 1 : -1, color: u });
                                    h = !1;
                                } else
                                    0 < n &&
                                        !h &&
                                        (k.connectNullData
                                            ? c.setLineDash && 0 < l.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType) && ((l[l.length - 1].newLineDashArray = z), (C = k.nullDataLineDashType))
                                            : (d(D, x), (l = []), (s = []))),
                                        (h = !0);
                        d(D, x);
                        V.drawMarkers(f);
                    }
                }
                w &&
                    (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(p.x1, p.y1, p.width, p.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: b, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 };
            }
        };
        l.prototype.renderWaterfall = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx,
                    e = null,
                    f = this.plotArea,
                    p = 0,
                    t,
                    g,
                    k,
                    m,
                    n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    p = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : (0.6 * ((f.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && p > g && (p = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && this.dataPointMinWidth && g < p && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, p));
                q < p && (q = p);
                q > g && (q = g);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
                for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var l = a.dataSeriesIndexes[h],
                        s = this.data[l],
                        v = s.dataPoints,
                        e = s._colorSet[0];
                    s.risingColor = s.options.risingColor ? s.options.risingColor : e;
                    s.fallingColor = s.options.fallingColor ? s.options.fallingColor : "#e40a0a";
                    var u = "number" === typeof s.options.lineThickness ? Math.round(s.lineThickness) : 1,
                        x = 1 === Math.round(u) % 2 ? -0.5 : 0;
                    if (0 < v.length)
                        for (var A = 5 < q && s.bevelEnabled ? !0 : !1, C = !1, D = null, z = null, p = 0; p < v.length; p++)
                            if ((v[p].getTime ? (m = v[p].x.getTime()) : (m = v[p].x), "number" !== typeof v[p].y)) {
                                if (0 < p && !C && s.connectNullData) var y = s.options.nullDataLineDashType || !v[p - 1].lineDashType ? s.nullDataLineDashType : v[p - 1].lineDashType;
                                C = !0;
                            } else {
                                t = a.axisX.convertValueToPixel(m);
                                g = 0 === s.dataPointEOs[p].cumulativeSum ? n : a.axisY.convertValueToPixel(s.dataPointEOs[p].cumulativeSum);
                                k = 0 === s.dataPointEOs[p].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(s.dataPointEOs[p].cumulativeSumYStartValue);
                                t = a.axisX.reversed ? (t + (a.plotType.totalDataSeries * q) / 2 - (a.previousDataSeriesCount + h) * q) << 0 : (t - (a.plotType.totalDataSeries * q) / 2 + (a.previousDataSeriesCount + h) * q) << 0;
                                var E = a.axisX.reversed ? (t - q) << 0 : (t + q) << 0;
                                g > k && ((e = g), (g = k), (k = e));
                                a.axisY.reversed && ((e = g), (g = k), (k = e));
                                e = s.dataPointIds[p];
                                this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: p, x1: t, y1: g, x2: E, y2: k };
                                var Q = v[p].color ? v[p].color : 0 < v[p].y ? s.risingColor : s.fallingColor;
                                ca(b, t, g, E, k, Q, 0, Q, A, A, !1, !1, s.fillOpacity);
                                e = P(e);
                                w && ca(this._eventManager.ghostCtx, t, g, E, k, e, 0, null, !1, !1, !1, !1);
                                var aa,
                                    Q = t;
                                aa =
                                    ("undefined" !== typeof v[p].isIntermediateSum && !0 === v[p].isIntermediateSum) || ("undefined" !== typeof v[p].isCumulativeSum && !0 === v[p].isCumulativeSum)
                                        ? 0 < v[p].y
                                            ? g
                                            : k
                                        : 0 < v[p].y
                                        ? k
                                        : g;
                                0 < p &&
                                    D &&
                                    (!C || s.connectNullData) &&
                                    (C && b.setLineDash && b.setLineDash(N(y, u)),
                                    b.beginPath(),
                                    b.moveTo(D, z - x),
                                    b.lineTo(Q, aa - x),
                                    0 < u && b.stroke(),
                                    w && (c.beginPath(), c.moveTo(D, z - x), c.lineTo(Q, aa - x), 0 < u && c.stroke()));
                                C = !1;
                                D = E;
                                z = 0 < v[p].y ? g : k;
                                Q = v[p].lineDashType ? v[p].lineDashType : s.options.lineDashType ? s.options.lineDashType : "shortDash";
                                b.strokeStyle = v[p].lineColor ? v[p].lineColor : s.options.lineColor ? s.options.lineColor : "#9e9e9e";
                                b.lineWidth = u;
                                b.setLineDash && ((Q = N(Q, u)), b.setLineDash(Q));
                                (v[p].indexLabel || s.indexLabel || v[p].indexLabelFormatter || s.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "waterfall",
                                        dataPoint: v[p],
                                        dataSeries: s,
                                        point: { x: t + (E - t) / 2, y: 0 <= v[p].y ? g : k },
                                        direction: 0 > v[p].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: t, y1: Math.min(g, k), x2: E, y2: Math.max(g, k) },
                                        color: e,
                                    });
                            }
                }
                w &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(f.x1, f.y1, f.width, f.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 };
            }
        };
        var W = function (a, d, b, c, e, f, p, g, l) {
            if (!(0 > b)) {
                "undefined" === typeof g && (g = 1);
                if (!w) {
                    var k = Number((p % (2 * Math.PI)).toFixed(8));
                    Number((f % (2 * Math.PI)).toFixed(8)) === k && (p -= 1e-4);
                }
                a.save();
                a.globalAlpha = g;
                "pie" === e
                    ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, b, f, p, !1), (a.fillStyle = c), (a.strokeStyle = "white"), (a.lineWidth = 2), a.closePath(), a.fill())
                    : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, b, f, p, !1), 0 <= l && a.arc(d.x, d.y, l * b, p, f, !0), a.closePath(), (a.fillStyle = c), (a.strokeStyle = "white"), (a.lineWidth = 2), a.fill());
                a.globalAlpha = 1;
                a.restore();
            }
        };
        l.prototype.renderPie = function (a) {
            function d() {
                if (k && m) {
                    for (var a = 0, c = 0, b = 0, d = 0, e = 0; e < m.length; e++) {
                        var f = m[e],
                            p = k.dataPointIds[e];
                        h[e].id = p;
                        h[e].objectType = "dataPoint";
                        h[e].dataPointIndex = e;
                        h[e].dataSeriesIndex = 0;
                        var g = h[e],
                            n = { percent: null, total: null },
                            t = null,
                            n = l.getPercentAndTotal(k, f);
                        if (k.indexLabelFormatter || f.indexLabelFormatter) t = { chart: l.options, dataSeries: k, dataPoint: f, total: n.total, percent: n.percent };
                        n = f.indexLabelFormatter
                            ? f.indexLabelFormatter(t)
                            : f.indexLabel
                            ? l.replaceKeywordsWithValue(f.indexLabel, f, k, e)
                            : k.indexLabelFormatter
                            ? k.indexLabelFormatter(t)
                            : k.indexLabel
                            ? l.replaceKeywordsWithValue(k.indexLabel, f, k, e)
                            : f.label
                            ? f.label
                            : "";
                        l._eventManager.objectMap[p] = g;
                        g.center = { x: A.x, y: A.y };
                        g.y = f.y;
                        g.radius = z;
                        g.percentInnerRadius = E;
                        g.indexLabelText = n;
                        g.indexLabelPlacement = k.indexLabelPlacement;
                        g.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : f.color ? f.color : k._colorSet[e % k._colorSet.length];
                        g.indexLabelLineThickness = s(f.indexLabelLineThickness) ? k.indexLabelLineThickness : f.indexLabelLineThickness;
                        g.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : k.indexLabelLineDashType;
                        g.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : k.indexLabelFontColor;
                        g.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : k.indexLabelFontStyle;
                        g.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : k.indexLabelFontWeight;
                        g.indexLabelFontSize = s(f.indexLabelFontSize) ? k.indexLabelFontSize : f.indexLabelFontSize;
                        g.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : k.indexLabelFontFamily;
                        g.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                        g.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * q.width;
                        g.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ? f.indexLabelWrap : k.indexLabelWrap;
                        g.indexLabelTextAlign = f.indexLabelTextAlign ? f.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                        g.startAngle = 0 === e ? (k.startAngle ? (k.startAngle / 180) * Math.PI : 0) : h[e - 1].endAngle;
                        g.startAngle = (g.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        g.endAngle = g.startAngle + ((2 * Math.PI) / C) * Math.abs(f.y);
                        f = (g.endAngle + g.startAngle) / 2;
                        f = (f + 2 * Math.PI) % (2 * Math.PI);
                        g.midAngle = f;
                        if (g.midAngle > Math.PI / 2 - u && g.midAngle < Math.PI / 2 + u) {
                            if (0 === a || h[b].midAngle > g.midAngle) b = e;
                            a++;
                        } else if (g.midAngle > (3 * Math.PI) / 2 - u && g.midAngle < (3 * Math.PI) / 2 + u) {
                            if (0 === c || h[d].midAngle > g.midAngle) d = e;
                            c++;
                        }
                        g.hemisphere = f > Math.PI / 2 && f <= (3 * Math.PI) / 2 ? "left" : "right";
                        g.indexLabelTextBlock = new ia(l.plotArea.ctx, {
                            fontSize: g.indexLabelFontSize,
                            fontFamily: g.indexLabelFontFamily,
                            fontColor: g.indexLabelFontColor,
                            fontStyle: g.indexLabelFontStyle,
                            fontWeight: g.indexLabelFontWeight,
                            textAlign: g.indexLabelTextAlign,
                            backgroundColor: g.indexLabelBackgroundColor,
                            maxWidth: g.indexLabelMaxWidth,
                            maxHeight: g.indexLabelWrap ? 5 * g.indexLabelFontSize : 1.5 * g.indexLabelFontSize,
                            text: g.indexLabelText,
                            padding: 0,
                            textBaseline: "top",
                        });
                        g.indexLabelTextBlock.measureText();
                    }
                    p = f = 0;
                    n = !1;
                    for (e = 0; e < m.length; e++)
                        (g = h[(b + e) % m.length]), 1 < a && g.midAngle > Math.PI / 2 - u && g.midAngle < Math.PI / 2 + u && (f <= a / 2 && !n ? ((g.hemisphere = "right"), f++) : ((g.hemisphere = "left"), (n = !0)));
                    n = !1;
                    for (e = 0; e < m.length; e++)
                        (g = h[(d + e) % m.length]), 1 < c && g.midAngle > (3 * Math.PI) / 2 - u && g.midAngle < (3 * Math.PI) / 2 + u && (p <= c / 2 && !n ? ((g.hemisphere = "left"), p++) : ((g.hemisphere = "right"), (n = !0)));
                }
            }
            function b(a) {
                var c = l.plotArea.ctx;
                c.clearRect(q.x1, q.y1, q.width, q.height);
                c.fillStyle = l.backgroundColor;
                c.fillRect(q.x1, q.y1, q.width, q.height);
                for (c = 0; c < m.length; c++) {
                    var b = h[c].startAngle,
                        d = h[c].endAngle;
                    if (d > b) {
                        var e = 0.07 * z * Math.cos(h[c].midAngle),
                            f = 0.07 * z * Math.sin(h[c].midAngle),
                            p = !1;
                        if (m[c].exploded) {
                            if (1e-9 < Math.abs(h[c].center.x - (A.x + e)) || 1e-9 < Math.abs(h[c].center.y - (A.y + f))) (h[c].center.x = A.x + e * a), (h[c].center.y = A.y + f * a), (p = !0);
                        } else if (0 < Math.abs(h[c].center.x - A.x) || 0 < Math.abs(h[c].center.y - A.y)) (h[c].center.x = A.x + e * (1 - a)), (h[c].center.y = A.y + f * (1 - a)), (p = !0);
                        p && ((e = {}), (e.dataSeries = k), (e.dataPoint = k.dataPoints[c]), (e.index = c), l.toolTip.highlightObjects([e]));
                        W(l.plotArea.ctx, h[c].center, h[c].radius, m[c].color ? m[c].color : k._colorSet[c % k._colorSet.length], k.type, b, d, k.fillOpacity, h[c].percentInnerRadius);
                    }
                }
                a = l.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (c = c = 0; c < m.length; c++)
                    (b = h[c]),
                        b.indexLabelText &&
                            ((b.indexLabelTextBlock.y -= b.indexLabelTextBlock.height / 2),
                            (d = 0),
                            (d =
                                "left" === b.hemisphere
                                    ? "inside" !== k.indexLabelPlacement
                                        ? -(b.indexLabelTextBlock.width + n)
                                        : -b.indexLabelTextBlock.width / 2
                                    : "inside" !== k.indexLabelPlacement
                                    ? n
                                    : -b.indexLabelTextBlock.width / 2),
                            (b.indexLabelTextBlock.x += d),
                            b.indexLabelTextBlock.render(!0),
                            (b.indexLabelTextBlock.x -= d),
                            (b.indexLabelTextBlock.y += b.indexLabelTextBlock.height / 2),
                            "inside" !== b.indexLabelPlacement &&
                                0 < b.indexLabelLineThickness &&
                                ((d = b.center.x + z * Math.cos(b.midAngle)),
                                (e = b.center.y + z * Math.sin(b.midAngle)),
                                (a.strokeStyle = b.indexLabelLineColor),
                                (a.lineWidth = b.indexLabelLineThickness),
                                a.setLineDash && a.setLineDash(N(b.indexLabelLineDashType, b.indexLabelLineThickness)),
                                a.beginPath(),
                                a.moveTo(d, e),
                                a.lineTo(b.indexLabelTextBlock.x, b.indexLabelTextBlock.y),
                                a.lineTo(b.indexLabelTextBlock.x + ("left" === b.hemisphere ? -n : n), b.indexLabelTextBlock.y),
                                a.stroke()),
                            (a.lineJoin = "miter"));
                a.save();
            }
            function c(a, c) {
                var b = 0,
                    b = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    e = c.indexLabelTextBlock.y - c.indexLabelTextBlock.height / 2,
                    f = c.indexLabelTextBlock.y + c.indexLabelTextBlock.height / 2;
                return (b = c.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : b - f);
            }
            function e(a) {
                for (var b = null, d = 1; d < m.length; d++)
                    if (((b = (a + d + h.length) % h.length), h[b].hemisphere !== h[a].hemisphere)) {
                        b = null;
                        break;
                    } else if (h[b].indexLabelText && b !== a && (0 > c(h[b], h[a]) || ("right" === h[a].hemisphere ? h[b].indexLabelTextBlock.y >= h[a].indexLabelTextBlock.y : h[b].indexLabelTextBlock.y <= h[a].indexLabelTextBlock.y)))
                        break;
                    else b = null;
                return b;
            }
            function f(a, b, d) {
                d = (d || 0) + 1;
                if (1e3 < d) return 0;
                b = b || 0;
                var k = 0,
                    p = A.y - 1 * w,
                    g = A.y + 1 * w;
                if (0 <= a && a < m.length) {
                    var n = h[a];
                    if ((0 > b && n.indexLabelTextBlock.y < p) || (0 < b && n.indexLabelTextBlock.y > g)) return 0;
                    var q = 0,
                        t = 0,
                        t = (q = q = 0);
                    0 > b
                        ? n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 > p && n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + b < p && (b = -(p - (n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + b)))
                        : n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 < p && n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 + b > g && (b = n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 + b - g);
                    b = n.indexLabelTextBlock.y + b;
                    p = 0;
                    p = "right" === n.hemisphere ? A.x + Math.sqrt(Math.pow(w, 2) - Math.pow(b - A.y, 2)) : A.x - Math.sqrt(Math.pow(w, 2) - Math.pow(b - A.y, 2));
                    t = A.x + z * Math.cos(n.midAngle);
                    q = A.y + z * Math.sin(n.midAngle);
                    q = Math.sqrt(Math.pow(p - t, 2) + Math.pow(b - q, 2));
                    t = Math.acos(z / w);
                    q = Math.acos((w * w + z * z - q * q) / (2 * z * w));
                    b = q < t ? b - n.indexLabelTextBlock.y : 0;
                    p = null;
                    for (g = 1; g < m.length; g++)
                        if (((p = (a - g + h.length) % h.length), h[p].hemisphere !== h[a].hemisphere)) {
                            p = null;
                            break;
                        } else if (
                            h[p].indexLabelText &&
                            h[p].hemisphere === h[a].hemisphere &&
                            p !== a &&
                            (0 > c(h[p], h[a]) || ("right" === h[a].hemisphere ? h[p].indexLabelTextBlock.y <= h[a].indexLabelTextBlock.y : h[p].indexLabelTextBlock.y >= h[a].indexLabelTextBlock.y))
                        )
                            break;
                        else p = null;
                    t = p;
                    q = e(a);
                    g = p = 0;
                    0 > b
                        ? ((g = "right" === n.hemisphere ? t : q),
                          (k = b),
                          null !== g &&
                              ((t = -b),
                              (b = n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 - (h[g].indexLabelTextBlock.y + h[g].indexLabelTextBlock.height / 2)),
                              b - t < r && ((p = -t), (g = f(g, p, d + 1)), +g.toFixed(x) > +p.toFixed(x) && (k = b > r ? -(b - r) : -(t - (g - p))))))
                        : 0 < b &&
                          ((g = "right" === n.hemisphere ? q : t),
                          (k = b),
                          null !== g &&
                              ((t = b),
                              (b = h[g].indexLabelTextBlock.y - h[g].indexLabelTextBlock.height / 2 - (n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2)),
                              b - t < r && ((p = t), (g = f(g, p, d + 1)), +g.toFixed(x) < +p.toFixed(x) && (k = b > r ? b - r : t - (p - g)))));
                    k &&
                        ((d = n.indexLabelTextBlock.y + k),
                        (b = 0),
                        (b = "right" === n.hemisphere ? A.x + Math.sqrt(Math.pow(w, 2) - Math.pow(d - A.y, 2)) : A.x - Math.sqrt(Math.pow(w, 2) - Math.pow(d - A.y, 2))),
                        n.midAngle > Math.PI / 2 - u && n.midAngle < Math.PI / 2 + u
                            ? ((p = (a - 1 + h.length) % h.length),
                              (p = h[p]),
                              (a = h[(a + 1 + h.length) % h.length]),
                              "left" === n.hemisphere && "right" === p.hemisphere && b > p.indexLabelTextBlock.x
                                  ? (b = p.indexLabelTextBlock.x - 15)
                                  : "right" === n.hemisphere && "left" === a.hemisphere && b < a.indexLabelTextBlock.x && (b = a.indexLabelTextBlock.x + 15))
                            : n.midAngle > (3 * Math.PI) / 2 - u &&
                              n.midAngle < (3 * Math.PI) / 2 + u &&
                              ((p = (a - 1 + h.length) % h.length),
                              (p = h[p]),
                              (a = h[(a + 1 + h.length) % h.length]),
                              "right" === n.hemisphere && "left" === p.hemisphere && b < p.indexLabelTextBlock.x
                                  ? (b = p.indexLabelTextBlock.x + 15)
                                  : "left" === n.hemisphere && "right" === a.hemisphere && b > a.indexLabelTextBlock.x && (b = a.indexLabelTextBlock.x - 15)),
                        (n.indexLabelTextBlock.y = d),
                        (n.indexLabelTextBlock.x = b),
                        (n.indexLabelAngle = Math.atan2(n.indexLabelTextBlock.y - A.y, n.indexLabelTextBlock.x - A.x)));
                }
                return k;
            }
            function p() {
                var a = l.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var b = (a = 0), d = 0, p = !0, b = 0; 10 > b && (1 > b || 0 < d); b++) {
                    if (k.radius || (!k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && z - d <= y)) p = !1;
                    p && (z -= d);
                    d = 0;
                    if ("inside" !== k.indexLabelPlacement) {
                        w = z * v;
                        for (a = 0; a < m.length; a++) {
                            var g = h[a];
                            g.indexLabelTextBlock.x = A.x + w * Math.cos(g.midAngle);
                            g.indexLabelTextBlock.y = A.y + w * Math.sin(g.midAngle);
                            g.indexLabelAngle = g.midAngle;
                            g.radius = z;
                            g.percentInnerRadius = E;
                        }
                        for (var t, u, a = 0; a < m.length; a++) {
                            var g = h[a],
                                s = e(a);
                            if (null !== s) {
                                t = h[a];
                                u = h[s];
                                var C = 0,
                                    C = c(t, u) - r;
                                if (0 > C) {
                                    for (var D = (u = 0), F = 0; F < m.length; F++) F !== a && h[F].hemisphere === g.hemisphere && (h[F].indexLabelTextBlock.y < g.indexLabelTextBlock.y ? u++ : D++);
                                    u = (C / (u + D || 1)) * D;
                                    var D = -1 * (C - u),
                                        J = (F = 0);
                                    "right" === g.hemisphere
                                        ? ((F = f(a, u)), (D = -1 * (C - F)), (J = f(s, D)), +J.toFixed(x) < +D.toFixed(x) && +F.toFixed(x) <= +u.toFixed(x) && f(a, -(D - J)))
                                        : ((F = f(s, u)), (D = -1 * (C - F)), (J = f(a, D)), +J.toFixed(x) < +D.toFixed(x) && +F.toFixed(x) <= +u.toFixed(x) && f(s, -(D - J)));
                                }
                            }
                        }
                    } else
                        for (a = 0; a < m.length; a++)
                            (g = h[a]), (w = "pie" === k.type ? 0.7 * z : 0.8 * z), (s = A.x + w * Math.cos(g.midAngle)), (u = A.y + w * Math.sin(g.midAngle)), (g.indexLabelTextBlock.x = s), (g.indexLabelTextBlock.y = u);
                    for (a = 0; a < m.length; a++)
                        if (((g = h[a]), (s = g.indexLabelTextBlock.measureText()), 0 !== s.height && 0 !== s.width))
                            (s = s = 0),
                                "right" === g.hemisphere ? ((s = q.x2 - (g.indexLabelTextBlock.x + g.indexLabelTextBlock.width + n)), (s *= -1)) : (s = q.x1 - (g.indexLabelTextBlock.x - g.indexLabelTextBlock.width - n)),
                                0 < s &&
                                    (!p &&
                                        g.indexLabelText &&
                                        ((u = "right" === g.hemisphere ? q.x2 - g.indexLabelTextBlock.x : g.indexLabelTextBlock.x - q.x1),
                                        0.3 * g.indexLabelTextBlock.maxWidth > u ? (g.indexLabelText = "") : (g.indexLabelTextBlock.maxWidth = 0.85 * u),
                                        0.3 * g.indexLabelTextBlock.maxWidth < u && (g.indexLabelTextBlock.x -= "right" === g.hemisphere ? 2 : -2)),
                                    Math.abs(g.indexLabelTextBlock.y - g.indexLabelTextBlock.height / 2 - A.y) < z || Math.abs(g.indexLabelTextBlock.y + g.indexLabelTextBlock.height / 2 - A.y) < z) &&
                                    ((s /= Math.abs(Math.cos(g.indexLabelAngle))), 9 < s && (s *= 0.3), s > d && (d = s)),
                                (s = s = 0),
                                0 < g.indexLabelAngle && g.indexLabelAngle < Math.PI
                                    ? ((s = q.y2 - (g.indexLabelTextBlock.y + g.indexLabelTextBlock.height / 2 + 5)), (s *= -1))
                                    : (s = q.y1 - (g.indexLabelTextBlock.y - g.indexLabelTextBlock.height / 2 - 5)),
                                0 < s &&
                                    (!p && g.indexLabelText && ((u = 0 < g.indexLabelAngle && g.indexLabelAngle < Math.PI ? -1 : 1), 0 === f(a, s * u) && f(a, 2 * u)),
                                    Math.abs(g.indexLabelTextBlock.x - A.x) < z && ((s /= Math.abs(Math.sin(g.indexLabelAngle))), 9 < s && (s *= 0.3), s > d && (d = s)));
                    var H = function (a, c, b) {
                        for (var d = [], e = 0; d.push(h[c]), c !== b; c = (c + 1 + m.length) % m.length);
                        d.sort(function (a, c) {
                            return a.y - c.y;
                        });
                        for (c = 0; c < d.length; c++)
                            if (((b = d[c]), e < 0.7 * a)) (e += b.indexLabelTextBlock.height), (b.indexLabelTextBlock.text = ""), (b.indexLabelText = ""), b.indexLabelTextBlock.measureText();
                            else break;
                    };
                    (function () {
                        for (var a = -1, b = -1, d = 0, f = !1, k = 0; k < m.length; k++)
                            if (((f = !1), (t = h[k]), t.indexLabelText)) {
                                var p = e(k);
                                if (null !== p) {
                                    var g = h[p];
                                    C = 0;
                                    C = c(t, g);
                                    var q;
                                    if ((q = 0 > C)) {
                                        q = t.indexLabelTextBlock.x;
                                        var l = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2,
                                            r = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2,
                                            s = g.indexLabelTextBlock.y - g.indexLabelTextBlock.height / 2,
                                            u = g.indexLabelTextBlock.x + g.indexLabelTextBlock.width,
                                            B = g.indexLabelTextBlock.y + g.indexLabelTextBlock.height / 2;
                                        q = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width < g.indexLabelTextBlock.x - n || q > u + n || l > B + n || r < s - n ? !1 : !0;
                                    }
                                    q ? (0 > a && (a = k), p !== a && ((b = p), (d += -C)), 0 === k % Math.max(m.length / 10, 3) && (f = !0)) : (f = !0);
                                    f && 0 < d && 0 <= a && 0 <= b && (H(d, a, b), (b = a = -1), (d = 0));
                                }
                            }
                        0 < d && H(d, a, b);
                    })();
                }
            }
            function g() {
                l.plotArea.layoutManager.reset();
                l.title && (l.title.dockInsidePlotArea || ("center" === l.title.horizontalAlign && "center" === l.title.verticalAlign)) && l.title.render();
                if (l.subtitles)
                    for (var a = 0; a < l.subtitles.length; a++) {
                        var c = l.subtitles[a];
                        (c.dockInsidePlotArea || ("center" === c.horizontalAlign && "center" === c.verticalAlign)) && c.render();
                    }
                l.legend && (l.legend.dockInsidePlotArea || ("center" === l.legend.horizontalAlign && "center" === l.legend.verticalAlign)) && (l.legend.setLayout(), l.legend.render());
            }
            var l = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var k = this.data[a.dataSeriesIndexes[0]],
                    m = k.dataPoints,
                    n = 10,
                    q = this.plotArea,
                    h = k.dataPointEOs,
                    r = 2,
                    w,
                    v = 1.3,
                    u = (20 / 180) * Math.PI,
                    x = 6,
                    A = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 },
                    C = 0;
                a = !1;
                for (var D = 0; D < m.length; D++)
                    (C += Math.abs(m[D].y)),
                        !a && "undefined" !== typeof m[D].indexLabel && null !== m[D].indexLabel && 0 < m[D].indexLabel.toString().length && (a = !0),
                        !a && "undefined" !== typeof m[D].label && null !== m[D].label && 0 < m[D].label.toString().length && (a = !0);
                if (0 !== C) {
                    a = a || ("undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length);
                    var z = "inside" !== k.indexLabelPlacement && a ? (0.75 * Math.min(q.width, q.height)) / 2 : (0.92 * Math.min(q.width, q.height)) / 2;
                    k.radius && (z = Ra(k.radius, z));
                    var y = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ra(k.innerRadius, z) : 0.7 * z;
                    k.radius = z;
                    "doughnut" === k.type && (k.innerRadius = y);
                    var E = Math.min(y / z, (z - 1) / z);
                    this.pieDoughnutClickHandler = function (a) {
                        l.isAnimating ||
                            (!s(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick) ||
                            ((a = a.dataPoint),
                            (a.exploded = a.exploded ? !1 : !0),
                            1 < this.dataPoints.length &&
                                l._animator.animate(0, 500, function (a) {
                                    b(a);
                                    g();
                                    l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
                                    l.dispatchEvent("dataAnimationEnd", { chart: l });
                                }));
                    };
                    d();
                    p();
                    p();
                    p();
                    p();
                    this.disableToolTip = !0;
                    this._animator.animate(
                        0,
                        this.animatedRender ? this.animationDuration : 0,
                        function (a) {
                            var c = l.plotArea.ctx;
                            c.clearRect(q.x1, q.y1, q.width, q.height);
                            c.fillStyle = l.backgroundColor;
                            c.fillRect(q.x1, q.y1, q.width, q.height);
                            for (var c = h[0].startAngle + 2 * Math.PI * a, b = 0; b < m.length; b++) {
                                var d = 0 === b ? h[b].startAngle : e,
                                    e = d + (h[b].endAngle - h[b].startAngle),
                                    f = !1;
                                e > c && ((e = c), (f = !0));
                                var p = m[b].color ? m[b].color : k._colorSet[b % k._colorSet.length];
                                e > d && W(l.plotArea.ctx, h[b].center, h[b].radius, p, k.type, d, e, k.fillOpacity, h[b].percentInnerRadius);
                                if (f) break;
                            }
                            g();
                            l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
                            1 <= a && l.dispatchEvent("dataAnimationEnd", { chart: l });
                        },
                        function () {
                            l.disableToolTip = !1;
                            l._animator.animate(0, l.animatedRender ? 500 : 0, function (a) {
                                b(a);
                                g();
                                l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
                            });
                            l.dispatchEvent("dataAnimationEnd", { chart: l });
                        }
                    );
                }
            }
        };
        var pa = function (a, d, b, c) {
            "undefined" === typeof b && (b = 1);
            0 >= Math.round(d.y4 - d.y1) ||
                (a.save(),
                (a.globalAlpha = b),
                a.beginPath(),
                a.moveTo(Math.round(d.x1), Math.round(d.y1)),
                a.lineTo(Math.round(d.x2), Math.round(d.y2)),
                a.lineTo(Math.round(d.x3), Math.round(d.y3)),
                a.lineTo(Math.round(d.x4), Math.round(d.y4)),
                "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))),
                a.closePath(),
                (a.fillStyle = c ? c : d.color),
                a.fill(),
                (a.globalAplha = 1),
                a.restore());
        };
        l.prototype.renderFunnel = function (a) {
            function d() {
                for (var a = 0, c = [], b = 0; b < x.length; b++) {
                    if ("undefined" === typeof x[b].y) return -1;
                    x[b].y = "number" === typeof x[b].y ? x[b].y : 0;
                    a += Math.abs(x[b].y);
                }
                if (0 === a) return -1;
                for (b = c[0] = 0; b < x.length; b++) c.push((Math.abs(x[b].y) * E) / a);
                return c;
            }
            function b() {
                var a = X,
                    b = Z,
                    c = L,
                    d = V,
                    e,
                    f;
                e = Y;
                f = P - ba;
                d = Math.abs(((f - e) * (b - a + (d - c))) / 2);
                c = V - L;
                e = f - e;
                f = c * (f - P);
                f = Math.abs(f);
                f = d + f;
                for (var d = [], h = 0, k = 0; k < x.length; k++) {
                    if ("undefined" === typeof x[k].y) return -1;
                    x[k].y = "number" === typeof x[k].y ? x[k].y : 0;
                    h += Math.abs(x[k].y);
                }
                if (0 === h) return -1;
                for (var p = (d[0] = 0), g = 0, m, n, b = b - a, p = !1, k = 0; k < x.length; k++)
                    (a = (Math.abs(x[k].y) * f) / h),
                        p
                            ? (m = 0 == Number(c.toFixed(3)) ? 0 : a / c)
                            : ((n = $ * $ * b * b - 4 * Math.abs($) * a),
                              0 > n
                                  ? ((n = c), (p = ((b + n) * (e - g)) / 2), (a -= p), (m = e - g), (g += e - g), (m += 0 == n ? 0 : a / n), (g += a / n), (p = !0))
                                  : ((m = (Math.abs($) * b - Math.sqrt(n)) / 2),
                                    (n = b - (2 * m) / Math.abs($)),
                                    (g += m),
                                    g > e && ((g -= m), (n = c), (p = ((b + n) * (e - g)) / 2), (a -= p), (m = e - g), (g += e - g), (m += a / n), (g += a / n), (p = !0)),
                                    (b = n))),
                        d.push(m);
                return d;
            }
            function c() {
                if (u && x) {
                    for (var a, b, c, d, e, f, k, p, g, m, n, q, t, l, r, B = [], v = [], A = { percent: null, total: null }, C = null, z = 0; z < x.length; z++)
                        (r = O[z]), (r = "undefined" !== typeof r.x5 ? (r.y2 + r.y4) / 2 : (r.y2 + r.y3) / 2), (r = h(r).x2 + 1), (B[z] = M - r - U);
                    r = 0.5 * U;
                    for (var z = 0, D = x.length - 1; z < x.length || 0 <= D; z++, D--) {
                        b = u.reversed ? x[D] : x[z];
                        a = b.color ? b.color : u.reversed ? u._colorSet[(x.length - 1 - z) % u._colorSet.length] : u._colorSet[z % u._colorSet.length];
                        c = b.indexLabelPlacement || u.indexLabelPlacement || "outside";
                        l = b.indexLabelTextAlign || u.indexLabelTextAlign || "left";
                        d = b.indexLabelBackgroundColor || u.indexLabelBackgroundColor || (w ? "transparent" : null);
                        e = b.indexLabelFontColor || u.indexLabelFontColor || "#979797";
                        f = s(b.indexLabelFontSize) ? u.indexLabelFontSize : b.indexLabelFontSize;
                        k = b.indexLabelFontStyle || u.indexLabelFontStyle || "normal";
                        p = b.indexLabelFontFamily || u.indexLabelFontFamily || "arial";
                        g = b.indexLabelFontWeight || u.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || u.options.indexLabelLineColor || a;
                        m = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof u.indexLabelLineThickness ? u.indexLabelLineThickness : 2;
                        n = b.indexLabelLineDashType || u.indexLabelLineDashType || "solid";
                        q = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof u.indexLabelWrap ? u.indexLabelWrap : !0;
                        t = u.dataPointIds[z];
                        y._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataPointIndex: z, dataSeriesIndex: 0, funnelSection: O[u.reversed ? x.length - 1 - z : z] };
                        "inside" === u.indexLabelPlacement &&
                            ((B[z] = z !== ca ? (u.reversed ? O[z].x2 - O[z].x1 : O[z].x3 - O[z].x4) : O[z].x3 - O[z].x6),
                            20 > B[z] && ((B[z] = z !== ca ? (u.reversed ? O[z].x3 - O[z].x4 : O[z].x2 - O[z].x1) : O[z].x2 - O[z].x1), (B[z] /= 2)));
                        t = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : u.options.indexLabelMaxWidth ? u.indexLabelMaxWidth : B[z];
                        if (t > B[z] || 0 > t) t = B[z];
                        v[z] = "inside" === u.indexLabelPlacement ? O[z].height : !1;
                        A = y.getPercentAndTotal(u, b);
                        if (u.indexLabelFormatter || b.indexLabelFormatter) C = { chart: y.options, dataSeries: u, dataPoint: b, total: A.total, percent: A.percent };
                        b = b.indexLabelFormatter
                            ? b.indexLabelFormatter(C)
                            : b.indexLabel
                            ? y.replaceKeywordsWithValue(b.indexLabel, b, u, z)
                            : u.indexLabelFormatter
                            ? u.indexLabelFormatter(C)
                            : u.indexLabel
                            ? y.replaceKeywordsWithValue(u.indexLabel, b, u, z)
                            : b.label
                            ? b.label
                            : "";
                        0 >= m && (m = 0);
                        1e3 > t && 1e3 - t < r && (t += 1e3 - t);
                        R.roundRect || Ba(R);
                        c = new ia(R, {
                            fontSize: f,
                            fontFamily: p,
                            fontColor: e,
                            fontStyle: k,
                            fontWeight: g,
                            horizontalAlign: c,
                            textAlign: l,
                            backgroundColor: d,
                            maxWidth: t,
                            maxHeight: !1 === v[z] ? (q ? 4.28571429 * f : 1.5 * f) : v[z],
                            text: b,
                            padding: da,
                        });
                        c.measureText();
                        I.push({
                            textBlock: c,
                            id: u.reversed ? D : z,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: m,
                            lineDashType: n,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth,
                        });
                    }
                }
            }
            function e() {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f = [];
                e = !1;
                c = 0;
                for (var h, k = M - Z - U / 2, k = u.options.indexLabelMaxWidth ? (u.indexLabelMaxWidth > k ? k : u.indexLabelMaxWidth) : k, p = I.length - 1; 0 <= p; p--) {
                    h = x[I[p].id];
                    c = I[p];
                    d = c.textBlock;
                    b = (a = q(p) < O.length ? I[q(p)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + da > b.y && (e = !0);
                    c = h.indexLabelMaxWidth || k;
                    if (c > k || 0 > c) c = k;
                    f.push(c);
                }
                if (e)
                    for (p = I.length - 1; 0 <= p; p--)
                        (a = O[p]),
                            (I[p].textBlock.maxWidth = f[f.length - (p + 1)]),
                            I[p].textBlock.measureText(),
                            (I[p].textBlock.x = M - k),
                            (c = I[p].textBlock.height < I[p].textBlock.maxHeight ? I[p].textBlock.height : I[p].textBlock.maxHeight),
                            (e = I[p].textBlock.width < I[p].textBlock.maxWidth ? I[p].textBlock.width : I[p].textBlock.maxWidth),
                            (I[p].height = c),
                            (I[p].width = e),
                            (c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2),
                            (I[p].textBlock.y = c - I[p].height / 2),
                            u.reversed
                                ? (I[p].textBlock.y + I[p].height > na + C && (I[p].textBlock.y = na + C - I[p].height), I[p].textBlock.y < sa - C && (I[p].textBlock.y = sa - C))
                                : (I[p].textBlock.y < na - C && (I[p].textBlock.y = na - C), I[p].textBlock.y + I[p].height > sa + C && (I[p].textBlock.y = sa + C - I[p].height));
            }
            function f() {
                var a, b, c, d;
                if ("inside" !== u.indexLabelPlacement)
                    for (var e = 0; e < O.length; e++)
                        0 == I[e].textBlock.text.length
                            ? (I[e].isDirty = !0)
                            : ((a = O[e]),
                              (c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2),
                              (b = u.reversed
                                  ? "undefined" !== typeof a.x5
                                      ? c > xa
                                          ? h(c).x2 + 1
                                          : (a.x2 + a.x3) / 2 + 1
                                      : (a.x2 + a.x3) / 2 + 1
                                  : "undefined" !== typeof a.x5
                                  ? c < xa
                                      ? h(c).x2 + 1
                                      : (a.x4 + a.x3) / 2 + 1
                                  : (a.x2 + a.x3) / 2 + 1),
                              (I[e].textBlock.x = b + U),
                              (I[e].textBlock.y = c - I[e].height / 2),
                              u.reversed
                                  ? (I[e].textBlock.y + I[e].height > na + C && (I[e].textBlock.y = na + C - I[e].height), I[e].textBlock.y < sa - C && (I[e].textBlock.y = sa - C))
                                  : (I[e].textBlock.y < na - C && (I[e].textBlock.y = na - C), I[e].textBlock.y + I[e].height > sa + C && (I[e].textBlock.y = sa + C - I[e].height)));
                else
                    for (e = 0; e < O.length; e++)
                        0 == I[e].textBlock.text.length
                            ? (I[e].isDirty = !0)
                            : ((a = O[e]),
                              (b = a.height),
                              (c = I[e].height),
                              (d = I[e].width),
                              b >= c
                                  ? ((b = e != ca ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2), (c = e != ca ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2), (I[e].textBlock.x = b), (I[e].textBlock.y = c))
                                  : (I[e].isDirty = !0));
            }
            function p() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= I.length) return 0;
                    var e,
                        f = I[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = n(b);
                        d = g(e, b);
                        if (d >= c) return (f.y -= c), c;
                        if (0 == b) return 0 < d && (f.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -= d);
                        return d;
                    }
                    e = q(b);
                    d = g(b, e);
                    if (d >= c) return (f.y += c), c;
                    if (b == O.length - 1) return 0 < d && (f.y += d), d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d;
                }
                function b() {
                    var a,
                        d,
                        e,
                        f,
                        h = 0,
                        k;
                    f = (P - Y + 2 * C) / m;
                    k = m;
                    for (var p, g = 1; g < k; g++) {
                        e = g * f;
                        for (var t = I.length - 1; 0 <= t; t--)
                            !I[t].isDirty &&
                                I[t].textBlock.y < e &&
                                I[t].textBlock.y + I[t].height > e &&
                                ((p = q(t)), !(p >= I.length - 1) && I[t].textBlock.y + I[t].height + da > I[p].textBlock.y && (I[t].textBlock.y = I[t].textBlock.y + I[t].height - e > e - I[t].textBlock.y ? e + 1 : e - I[t].height - 1));
                    }
                    for (p = O.length - 1; 0 < p; p--)
                        if (!I[p].isDirty) {
                            e = n(p);
                            if (0 > e && ((e = 0), I[e].isDirty)) break;
                            if (I[p].textBlock.y < I[e].textBlock.y + I[e].height) {
                                d = d || p;
                                f = p;
                                for (k = 0; I[f].textBlock.y < I[e].textBlock.y + I[e].height + da; ) {
                                    a = a || I[f].textBlock.y + I[f].height;
                                    k += I[f].height;
                                    k += da;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        k += I[f].height;
                                        break;
                                    }
                                    e = n(f);
                                    if (0 > e) {
                                        f = 0;
                                        k += I[f].height;
                                        break;
                                    }
                                }
                                if (f != p) {
                                    h = I[f].textBlock.y;
                                    a -= h;
                                    a = k - a;
                                    h = c(a, d, f);
                                    break;
                                }
                            }
                        }
                    return h;
                }
                function c(a, b, d) {
                    var e = [],
                        f = 0,
                        h = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(O[d]);
                    e.sort(function (a, b) {
                        return a.height - b.height;
                    });
                    for (d = 0; d < e.length; d++)
                        if (((b = e[d]), f < a)) h++, (f += I[b.id].height + da), (I[b.id].textBlock.text = ""), (I[b.id].indexLabelText = ""), (I[b.id].isDirty = !0), I[b.id].textBlock.measureText();
                        else break;
                    return h;
                }
                for (var d, e, f, h, k, p, m = 1, l = 0; l < 2 * m; l++) {
                    for (
                        var r = I.length - 1;
                        0 <= r &&
                        !(0 <= n(r) && n(r),
                        (f = I[r]),
                        (h = f.textBlock),
                        (p = (k = q(r) < O.length ? I[q(r)] : null) ? k.textBlock : null),
                        (d = +f.height.toFixed(6)),
                        (e = +h.y.toFixed(6)),
                        !f.isDirty && k && e + d + da > +p.y.toFixed(6) && ((d = h.y + d + da - p.y), (e = a(r, -d)), e < d && (0 < e && (d -= e), (e = a(q(r), d)), e != d)));
                        r--
                    );
                    b();
                }
            }
            function g(a, b) {
                return (b < O.length ? I[b].textBlock.y : u.reversed ? na + C : sa + C) - (0 > a ? (u.reversed ? sa - C : na - C) : I[a].textBlock.y + I[a].height + da);
            }
            function l(a, b, c) {
                var d,
                    e,
                    h,
                    p = [],
                    g = C,
                    n = [];
                -1 !== b &&
                    (0 <= W.indexOf(b)
                        ? ((e = W.indexOf(b)), W.splice(e, 1))
                        : (W.push(b),
                          (W = W.sort(function (a, b) {
                              return a - b;
                          }))));
                if (0 === W.length) p = ga;
                else {
                    e = (C * (1 != W.length || (0 != W[0] && W[0] != O.length - 1) ? 2 : 1)) / k();
                    for (var t = 0; t < O.length; t++) {
                        if (1 == W.length && 0 == W[0]) {
                            if (0 === t) {
                                p.push(ga[t]);
                                d = g;
                                continue;
                            }
                        } else 0 === t && (d = -1 * g);
                        p.push(ga[t] + d);
                        if (0 <= W.indexOf(t) || (t < O.length && 0 <= W.indexOf(t + 1))) d += e;
                    }
                }
                h = (function () {
                    for (var a = [], b = 0; b < O.length; b++) a.push(p[b] - O[b].y1);
                    return a;
                })();
                var q = {
                    startTime: new Date().getTime(),
                    duration: c || 500,
                    easingFunction: function (a, b, c, d) {
                        return K.easing.easeOutQuart(a, b, c, d);
                    },
                    changeSection: function (a) {
                        for (var b, c, d = 0; d < O.length; d++)
                            (b = h[d]),
                                (c = O[d]),
                                (b *= a),
                                "undefined" === typeof n[d] && (n[d] = 0),
                                0 > n && (n *= -1),
                                (c.y1 += b - n[d]),
                                (c.y2 += b - n[d]),
                                (c.y3 += b - n[d]),
                                (c.y4 += b - n[d]),
                                c.y5 && ((c.y5 += b - n[d]), (c.y6 += b - n[d])),
                                (n[d] = b);
                    },
                };
                a._animator.animate(
                    0,
                    c,
                    function (c) {
                        var d = a.plotArea.ctx || a.ctx;
                        ha = !0;
                        d.clearRect(A.x1, A.y1, A.x2 - A.x1, A.y2 - A.y1);
                        d.fillStyle = a.backgroundColor;
                        d.fillRect(A.x1, A.y1, A.width, A.height);
                        q.changeSection(c, b);
                        var e = {};
                        e.dataSeries = u;
                        e.dataPoint = u.reversed ? u.dataPoints[x.length - 1 - b] : u.dataPoints[b];
                        e.index = u.reversed ? x.length - 1 - b : b;
                        a.toolTip.highlightObjects([e]);
                        for (e = 0; e < O.length; e++) pa(d, O[e], u.fillOpacity);
                        v(d);
                        J && ("inside" !== u.indexLabelPlacement ? m(d) : f(), r(d));
                        1 <= c && (ha = !1);
                    },
                    null,
                    K.easing.easeOutQuart
                );
            }
            function k() {
                for (var a = 0, b = 0; b < O.length - 1; b++) (0 <= W.indexOf(b) || 0 <= W.indexOf(b + 1)) && a++;
                return a;
            }
            function m(a) {
                for (var b, c, d, e, f = 0; f < O.length; f++)
                    (e = 1 === I[f].lineThickness % 2 ? 0.5 : 0),
                        (c = (((O[f].y2 + O[f].y4) / 2) << 0) + e),
                        (b = h(c).x2 - 1),
                        (d = I[f].textBlock.x),
                        (e = ((I[f].textBlock.y + I[f].height / 2) << 0) + e),
                        I[f].isDirty ||
                            0 == I[f].lineThickness ||
                            ((a.strokeStyle = I[f].lineColor), (a.lineWidth = I[f].lineThickness), a.setLineDash && a.setLineDash(N(I[f].lineDashType, I[f].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke());
            }
            function n(a) {
                for (a -= 1; -1 <= a && -1 != a && I[a].isDirty; a--);
                return a;
            }
            function q(a) {
                for (a += 1; a <= O.length && a != O.length && I[a].isDirty; a++);
                return a;
            }
            function h(a) {
                for (var b, c = 0; c < x.length; c++)
                    if (O[c].y1 < a && O[c].y4 > a) {
                        b = O[c];
                        break;
                    }
                return b ? ((a = b.y6 ? (a > b.y6 ? b.x3 + ((b.x4 - b.x3) / (b.y4 - b.y3)) * (a - b.y3) : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)) : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)), { x1: a, x2: a }) : -1;
            }
            function r(a) {
                for (var b = 0; b < O.length; b++) I[b].isDirty || (a && (I[b].textBlock.ctx = a), I[b].textBlock.render(!0));
            }
            function v(a) {
                y.plotArea.layoutManager.reset();
                a.roundRect || Ba(a);
                y.title && (y.title.dockInsidePlotArea || ("center" === y.title.horizontalAlign && "center" === y.title.verticalAlign)) && ((y.title.ctx = a), y.title.render());
                if (y.subtitles)
                    for (var b = 0; b < y.subtitles.length; b++) {
                        var c = y.subtitles[b];
                        if (c.dockInsidePlotArea || ("center" === c.horizontalAlign && "center" === c.verticalAlign)) (y.subtitles.ctx = a), c.render();
                    }
                y.legend && (y.legend.dockInsidePlotArea || ("center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign)) && ((y.legend.ctx = a), y.legend.setLayout(), y.legend.render());
                S.fNg && S.fNg(y);
            }
            var y = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (
                    var u = this.data[a.dataSeriesIndexes[0]], x = u.dataPoints, A = this.plotArea, C = 0.025 * A.width, D = 0.01 * A.width, z = 0, E = A.height - 2 * C, F = Math.min(A.width - 2 * D, 2.8 * A.height), J = !1, H = 0;
                    H < x.length;
                    H++
                )
                    if (
                        (!J && "undefined" !== typeof x[H].indexLabel && null !== x[H].indexLabel && 0 < x[H].indexLabel.toString().length && (J = !0),
                        !J && "undefined" !== typeof x[H].label && null !== x[H].label && 0 < x[H].label.toString().length && (J = !0),
                        (!J && "function" === typeof u.indexLabelFormatter) || "function" === typeof x[H].indexLabelFormatter)
                    )
                        J = !0;
                J = J || ("undefined" !== typeof u.indexLabel && null !== u.indexLabel && 0 < u.indexLabel.toString().length);
                ("inside" !== u.indexLabelPlacement && J) || (D = (A.width - 0.75 * F) / 2);
                var H = A.x1 + D,
                    M = A.x2 - D,
                    Y = A.y1 + C,
                    P = A.y2 - C,
                    R = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != u.length && u.dataPoints && u.visible && 0 !== x.length) {
                    var ba, G;
                    a = (75 * F) / 100;
                    var U = (30 * (M - a)) / 100;
                    "funnel" === u.type
                        ? ((ba = s(u.options.neckHeight) ? 0.35 * E : u.neckHeight),
                          (G = s(u.options.neckWidth) ? 0.25 * a : u.neckWidth),
                          "string" === typeof ba && ba.match(/%$/) ? ((ba = parseInt(ba)), (ba = (ba * E) / 100)) : (ba = parseInt(ba)),
                          "string" === typeof G && G.match(/%$/) ? ((G = parseInt(G)), (G = (G * a) / 100)) : (G = parseInt(G)),
                          ba > E ? (ba = E) : 0 >= ba && (ba = 0),
                          G > a ? (G = a - 0.5) : 0 >= G && (G = 0))
                        : "pyramid" === u.type && ((G = ba = 0), (u.reversed = u.reversed ? !1 : !0));
                    var D = H + a / 2,
                        X = H,
                        Z = H + a,
                        na = u.reversed ? P : Y,
                        L = D - G / 2,
                        V = D + G / 2,
                        xa = u.reversed ? Y + ba : P - ba,
                        sa = u.reversed ? Y : P;
                    a = [];
                    var D = [],
                        O = [],
                        F = [],
                        T = Y,
                        ca,
                        $ = (xa - na) / (L - X),
                        ea = -$,
                        H = "area" === (u.valueRepresents ? u.valueRepresents : "height") ? b() : d();
                    if (-1 !== H) {
                        if (u.reversed) for (F.push(T), G = H.length - 1; 0 < G; G--) (T += H[G]), F.push(T);
                        else for (G = 0; G < H.length; G++) (T += H[G]), F.push(T);
                        if (u.reversed) for (G = 0; G < H.length; G++) F[G] < xa ? (a.push(L), D.push(V), (ca = G)) : (a.push((F[G] - na + $ * X) / $), D.push((F[G] - na + ea * Z) / ea));
                        else for (G = 0; G < H.length; G++) F[G] < xa ? (a.push((F[G] - na + $ * X) / $), D.push((F[G] - na + ea * Z) / ea), (ca = G)) : (a.push(L), D.push(V));
                        for (G = 0; G < H.length - 1; G++)
                            (T = u.reversed ? (x[x.length - 1 - G].color ? x[x.length - 1 - G].color : u._colorSet[(x.length - 1 - G) % u._colorSet.length]) : x[G].color ? x[G].color : u._colorSet[G % u._colorSet.length]),
                                G === ca
                                    ? O.push({ x1: a[G], y1: F[G], x2: D[G], y2: F[G], x3: V, y3: xa, x4: D[G + 1], y4: F[G + 1], x5: a[G + 1], y5: F[G + 1], x6: L, y6: xa, id: G, height: F[G + 1] - F[G], color: T })
                                    : O.push({ x1: a[G], y1: F[G], x2: D[G], y2: F[G], x3: D[G + 1], y3: F[G + 1], x4: a[G + 1], y4: F[G + 1], id: G, height: F[G + 1] - F[G], color: T });
                        var da = 2,
                            I = [],
                            ha = !1,
                            W = [],
                            ga = [],
                            H = !1;
                        a = a = 0;
                        Ca(W);
                        for (G = 0; G < x.length; G++) x[G].exploded && ((H = !0), u.reversed ? W.push(x.length - 1 - G) : W.push(G));
                        R.clearRect(A.x1, A.y1, A.width, A.height);
                        R.fillStyle = y.backgroundColor;
                        R.fillRect(A.x1, A.y1, A.width, A.height);
                        if (J && u.visible && (c(), f(), e(), "inside" !== u.indexLabelPlacement)) {
                            p();
                            for (G = 0; G < x.length; G++) I[G].isDirty || ((a = I[G].textBlock.x + I[G].width), (a = (M - a) / 2), 0 == G && (z = a), z > a && (z = a));
                            for (G = 0; G < O.length; G++) (O[G].x1 += z), (O[G].x2 += z), (O[G].x3 += z), (O[G].x4 += z), O[G].x5 && ((O[G].x5 += z), (O[G].x6 += z)), (I[G].textBlock.x += z);
                        }
                        for (G = 0; G < O.length; G++) (z = O[G]), pa(R, z, u.fillOpacity), ga.push(z.y1);
                        v(R);
                        J && u.visible && ("inside" === u.indexLabelPlacement || y.animationEnabled || m(R), y.animationEnabled || r());
                        if (!J)
                            for (G = 0; G < x.length; G++)
                                (z = u.dataPointIds[G]), (a = { id: z, objectType: "dataPoint", dataPointIndex: G, dataSeriesIndex: 0, funnelSection: O[u.reversed ? x.length - 1 - G : G] }), (y._eventManager.objectMap[z] = a);
                        !y.animationEnabled && H ? l(y, -1, 0) : y.animationEnabled && !y.animatedRender && l(y, -1, 0);
                        this.funnelPyramidClickHandler = function (a) {
                            var b = -1;
                            if (!ha && !y.isAnimating && (s(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && ((b = u.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex), 0 <= b)) {
                                a = b;
                                if ("funnel" === u.type || "pyramid" === u.type) u.reversed ? (x[x.length - 1 - a].exploded = x[x.length - 1 - a].exploded ? !1 : !0) : (x[a].exploded = x[a].exploded ? !1 : !0);
                                l(y, b, 500);
                            }
                        };
                        return {
                            source: R,
                            dest: this.plotArea.ctx,
                            animationCallback: function (a, b) {
                                K.fadeInAnimation(a, b);
                                1 <= a && (l(y, -1, 500), v(y.plotArea.ctx || y.ctx));
                            },
                            easingFunction: K.easing.easeInQuad,
                            animationBase: 0,
                        };
                    }
                }
            }
        };
        l.prototype.requestAnimFrame = (function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (a) {
                    window.setTimeout(a, 1e3 / 60);
                }
            );
        })();
        l.prototype.cancelRequestAnimFrame =
            window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        l.prototype.set = function (a, d, b) {
            b = "undefined" === typeof b ? !0 : b;
            "options" === a ? ((this.options = d), b && this.render()) : l.base.set.call(this, a, d, b);
        };
        l.prototype.exportChart = function (a) {
            a = "undefined" === typeof a ? {} : a;
            var d = a.format ? a.format : "png",
                b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
            var c = this.canvas;
            if (c && d && b) {
                b = b + "." + d;
                a = "image/" + d;
                var c = c.toDataURL(a),
                    e = !1,
                    f = document.createElement("a");
                f.download = b;
                f.href = c;
                if ("undefined" !== typeof Blob && new Blob()) {
                    for (var p = c.replace(/^data:[a-z\/]*;base64,/, ""), p = atob(p), g = new ArrayBuffer(p.length), g = new Uint8Array(g), l = 0; l < p.length; l++) g[l] = p.charCodeAt(l);
                    d = new Blob([g.buffer], { type: "image/" + d });
                    try {
                        window.navigator.msSaveBlob(d, b), (e = !0);
                    } catch (k) {
                        (f.dataset.downloadurl = [a, f.download, f.href].join(":")), (f.href = window.URL.createObjectURL(d));
                    }
                }
                if (!e)
                    try {
                        (event = document.createEvent("MouseEvents")), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick");
                    } catch (m) {
                        (d = window.open()), d.document.write("<img src='" + c + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close();
                    }
            }
        };
        l.prototype.print = function () {
            var a = this.exportChart({ toDataURL: !0 }),
                d = document.createElement("iframe");
            d.setAttribute("class", "canvasjs-chart-print-frame");
            d.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            d.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(d);
            var b = this,
                c = d.contentWindow || d.contentDocument.document || d.contentDocument;
            c.document.open();
            c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
            c.document.close();
            setTimeout(function () {
                c.focus();
                c.print();
                setTimeout(function () {
                    b._canvasJSContainer.removeChild(d);
                }, 1e3);
            }, 500);
        };
        l.prototype.getPercentAndTotal = function (a, d) {
            var b = null,
                c = null,
                e = (b = null);
            if (0 <= a.type.indexOf("stacked"))
                (c = 0), (b = d.x.getTime ? d.x.getTime() : d.x), b in a.plotUnit.yTotals && ((c = a.plotUnit.yTotals[b]), (b = a.plotUnit.yAbsTotals[b]), (e = isNaN(d.y) ? 0 : 0 === b ? 0 : 100 * (d.y / b)));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (b = c = 0; b < a.dataPoints.length; b++) isNaN(a.dataPoints[b].y) || (c += a.dataPoints[b].y);
                e = isNaN(d.y) ? 0 : 100 * (d.y / c);
            }
            return { percent: e, total: c };
        };
        l.prototype.replaceKeywordsWithValue = function (a, d, b, c, e) {
            var f = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var p = "#percent",
                    g = "#total",
                    l = this.getPercentAndTotal(b, d),
                    g = isNaN(l.total) ? g : l.total,
                    p = isNaN(l.percent) ? p : l.percent;
                do {
                    l = "";
                    if (b.percentFormatString) l = b.percentFormatString;
                    else {
                        var l = "#,##0.",
                            k = Math.max(Math.ceil(Math.log(1 / Math.abs(p)) / Math.LN10), 2);
                        if (isNaN(k) || !isFinite(k)) k = 2;
                        for (var m = 0; m < k; m++) l += "#";
                        b.percentFormatString = l;
                    }
                    a = a.replace("#percent", ea(p, l, f._cultureInfo));
                    a = a.replace("#total", ea(g, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", f._cultureInfo));
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
                if (('"' === a[0] && '"' === a[a.length - 1]) || ("'" === a[0] && "'" === a[a.length - 1])) return a.slice(1, a.length - 1);
                a = Fa(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var k = null;
                try {
                    var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    h && 0 < h.length && ((k = Fa(h[2])), (a = Fa(h[1])));
                } catch (p) {}
                h = null;
                if ("color" === a)
                    return "waterfall" === b.type
                        ? d.color
                            ? d.color
                            : 0 < d.y
                            ? b.risingColor
                            : b.fallingColor
                        : "error" === b.type
                        ? b.color
                            ? b.color
                            : b._colorSet[k % b._colorSet.length]
                        : d.color
                        ? d.color
                        : b.color
                        ? b.color
                        : b._colorSet[c % b._colorSet.length];
                if (d.hasOwnProperty(a)) h = d;
                else if (b.hasOwnProperty(a)) h = b;
                else return "";
                h = h[a];
                null !== k && (h = h[k]);
                if ("x" === a)
                    if ((b.axisX && "dateTime" === b.axisX.valueType) || "dateTime" === b.xValueType || (d.x && d.x.getTime)) {
                        if (!b.axisX.logarithmic)
                            return Aa(
                                h,
                                d.xValueFormatString ? d.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : (b.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY"),
                                f._cultureInfo
                            );
                    } else return ea(h, d.xValueFormatString ? d.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : (b.xValueFormatString = "#,##0.########"), f._cultureInfo);
                else
                    return "y" === a
                        ? ea(h, d.yValueFormatString ? d.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : (b.yValueFormatString = "#,##0.########"), f._cultureInfo)
                        : "z" === a
                        ? ea(h, d.zValueFormatString ? d.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : (b.zValueFormatString = "#,##0.########"), f._cultureInfo)
                        : h;
            });
        };
        oa(F, U);
        F.prototype.setLayout = function () {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                b = null,
                c = 0,
                e = 0,
                f = 0,
                p = 0,
                g = (this.markerMargin = this.chart.options.legend && !s(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize);
            this.height = 0;
            var l = [],
                k = [];
            if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
                (this.orientation = "horizontal"), (b = this.verticalAlign), (f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width), (p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height);
            else if ("center" === this.verticalAlign) {
                this.orientation = "vertical";
                if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) b = this.horizontalAlign;
                f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
                p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height;
            }
            this.errorMarkerColor = [];
            for (var m = 0; m < this.dataSeries.length; m++) {
                var n = this.dataSeries[m];
                if (n.dataPoints && n.dataPoints.length)
                    if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                        var q = (n.legendMarkerType = n.legendMarkerType
                                ? n.legendMarkerType
                                : ("line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type) || !n.markerType
                                ? "error" === n.type && n._linkedSeries
                                    ? n._linkedSeries.legendMarkerType
                                        ? n._linkedSeries.legendMarkerType
                                        : H.getDefaultLegendMarker(n._linkedSeries.type)
                                    : H.getDefaultLegendMarker(n.type)
                                : n.markerType),
                            h = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: null }) : n.name,
                            r = (n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? (s(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor) : n._colorSet[0]),
                            w = n.markerSize || ("line" !== n.type && "stepLine" !== n.type && "spline" !== n.type) ? 0.75 * this.lineHeight : 0,
                            v = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor,
                            u = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                        "error" === n.type && this.errorMarkerColor.push(r);
                        h = this.chart.replaceKeywordsWithValue(h, n.dataPoints[0], n, m);
                        q = {
                            markerType: q,
                            markerColor: r,
                            text: h,
                            textBlock: null,
                            chartType: n.type,
                            markerSize: w,
                            lineColor: n._colorSet[0],
                            dataSeriesIndex: n.index,
                            dataPointIndex: null,
                            markerBorderColor: v,
                            markerBorderThickness: u,
                        };
                        l.push(q);
                    } else
                        for (var x = 0; x < n.dataPoints.length; x++) {
                            var A = n.dataPoints[x],
                                q = A.legendMarkerType ? A.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : H.getDefaultLegendMarker(n.type),
                                h = A.legendText
                                    ? A.legendText
                                    : n.legendText
                                    ? n.legendText
                                    : this.itemTextFormatter
                                    ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: A })
                                    : A.name
                                    ? A.name
                                    : "DataPoint: " + (x + 1),
                                r = A.legendMarkerColor ? A.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : A.color ? A.color : n.color ? n.color : n._colorSet[x % n._colorSet.length],
                                w = 0.75 * this.lineHeight,
                                v = A.legendMarkerBorderColor ? A.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : A.markerBorderColor ? A.markerBorderColor : n.markerBorderColor,
                                u = A.legendMarkerBorderThickness
                                    ? A.legendMarkerBorderThickness
                                    : n.legendMarkerBorderThickness
                                    ? n.legendMarkerBorderThickness
                                    : A.markerBorderThickness || n.markerBorderThickness
                                    ? Math.max(1, Math.round(0.2 * w))
                                    : 0,
                                h = this.chart.replaceKeywordsWithValue(h, A, n, x),
                                q = { markerType: q, markerColor: r, text: h, textBlock: null, chartType: n.type, markerSize: w, dataSeriesIndex: m, dataPointIndex: x, markerBorderColor: v, markerBorderThickness: u };
                            (A.showInLegend || (n.showInLegend && !1 !== A.showInLegend)) && l.push(q);
                        }
            }
            !0 === this.reversed && l.reverse();
            if (0 < l.length) {
                n = null;
                r = h = A = x = 0;
                A =
                    null !== this.itemWidth
                        ? null !== this.itemMaxWidth
                            ? Math.min(this.itemWidth, this.itemMaxWidth, f)
                            : (this.itemMaxWidth = Math.min(this.itemWidth, f))
                        : null !== this.itemMaxWidth
                        ? Math.min(this.itemMaxWidth, f)
                        : (this.itemMaxWidth = f);
                w = 0 === w ? 0.75 * this.lineHeight : w;
                A -= w + g;
                for (m = 0; m < l.length; m++) {
                    q = l[m];
                    v = A;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) v -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= p || "undefined" === typeof p || 0 >= v || "undefined" === typeof v)) {
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new ia(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: v,
                                maxHeight: this.itemWrap ? p : this.lineHeight,
                                angle: 0,
                                text: q.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle",
                            });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + g + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (
                                !n ||
                                n.width +
                                    Math.round(q.textBlock.width + w + g + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) >
                                    f
                            )
                                (n = { items: [], width: 0 }), k.push(n), (this.height += h), (h = 0);
                            h = Math.max(h, q.textBlock.height);
                        } else
                            (q.textBlock = new ia(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: A,
                                maxHeight: !0 === this.itemWrap ? p : 1.5 * this.fontSize,
                                angle: 0,
                                text: q.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle",
                            })),
                                q.textBlock.measureText(),
                                null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + g + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))),
                                this.height < p - this.lineHeight ? ((n = { items: [], width: 0 }), k.push(n)) : ((n = k[x]), (x = (x + 1) % k.length)),
                                (this.height += q.textBlock.height);
                        q.textBlock.x = n.width;
                        q.textBlock.y = 0;
                        n.width += Math.round(q.textBlock.width + w + g + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        n.items.push(q);
                        this.width = Math.max(n.width, this.width);
                        r = q.textBlock.width + (w + g + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    }
                }
                this.itemWidth = r;
                this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + h;
                this.height = Math.min(p, this.height);
                this.width = Math.min(f, this.width);
            }
            "top" === this.verticalAlign
                ? ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (c = d.y1))
                : "center" === this.verticalAlign
                ? ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (c = d.y1 + d.height / 2 - this.height / 2))
                : "bottom" === this.verticalAlign && ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (c = d.y2 - this.height));
            this.items = l;
            for (m = 0; m < this.items.length; m++)
                (q = l[m]),
                    (q.id = ++this.chart._eventManager.lastObjectId),
                    (this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex });
            this.markerSize = w;
            this.rows = k;
            0 < l.length && a.layoutManager.registerSpace(b, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
            this.bounds = { x1: e, y1: c, x2: e + this.width, y2: c + this.height };
        };
        F.prototype.render = function () {
            var a = this.bounds.x1,
                d = this.bounds.y1,
                b = this.markerMargin,
                c = this.maxWidth,
                e = this.maxHeight,
                f = this.markerSize,
                p = this.rows;
            ((0 < this.borderThickness && this.borderColor) || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var g = 0, l = 0; l < p.length; l++) {
                for (var k = p[l], m = 0, n = 0; n < k.items.length; n++) {
                    var q = k.items[n],
                        h = q.textBlock.x + a + (0 === n ? 0.2 * f : this.horizontalSpacing),
                        r = d + g,
                        s = h;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, d, c, Math.max(e - (e % this.lineHeight), 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                        (this.ctx.strokeStyle = q.lineColor),
                            (this.ctx.lineWidth = Math.ceil(this.lineHeight / 8)),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(h - 0.1 * this.lineHeight, r + this.lineHeight / 2),
                            this.ctx.lineTo(h + 0.85 * this.lineHeight, r + this.lineHeight / 2),
                            this.ctx.stroke(),
                            (s -= 0.1 * this.lineHeight);
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = f / 8;
                        this.ctx.beginPath();
                        var w = h - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            u = r + 0.15 * this.lineHeight,
                            x = 0.7 * this.lineHeight,
                            v = x + 0.02 * this.lineHeight;
                        this.ctx.moveTo(w, u);
                        this.ctx.lineTo(w + x, u);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(w + x / 2, u);
                        this.ctx.lineTo(w + x / 2, u + v);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(w, u + v);
                        this.ctx.lineTo(w + x, u + v);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift();
                    }
                    V.drawMarker(
                        h + f / 2,
                        r + this.lineHeight / 2,
                        this.ctx,
                        q.markerType,
                        "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize,
                        q.markerColor,
                        q.markerBorderColor,
                        q.markerBorderThickness
                    );
                    q.textBlock.x = h + b + f;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(r + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    m = 0 < n ? Math.max(m, q.textBlock.height) : q.textBlock.height;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    h = P(q.id);
                    this.ghostCtx.fillStyle = h;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2;
                }
                g += m;
            }
        };
        oa(H, U);
        H.prototype.getDefaultAxisPlacement = function () {
            var a = this.type;
            if (
                "column" === a ||
                "line" === a ||
                "stepLine" === a ||
                "spline" === a ||
                "area" === a ||
                "stepArea" === a ||
                "splineArea" === a ||
                "stackedColumn" === a ||
                "stackedLine" === a ||
                "bubble" === a ||
                "scatter" === a ||
                "stackedArea" === a ||
                "stackedColumn100" === a ||
                "stackedLine100" === a ||
                "stackedArea100" === a ||
                "candlestick" === a ||
                "ohlc" === a ||
                "rangeColumn" === a ||
                "rangeArea" === a ||
                "rangeSplineArea" === a ||
                "boxAndWhisker" === a ||
                "waterfall" === a
            )
                return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null;
        };
        H.getDefaultLegendMarker = function (a) {
            if (
                "column" === a ||
                "stackedColumn" === a ||
                "stackedLine" === a ||
                "bar" === a ||
                "stackedBar" === a ||
                "stackedBar100" === a ||
                "bubble" === a ||
                "scatter" === a ||
                "stackedColumn100" === a ||
                "stackedLine100" === a ||
                "stepArea" === a ||
                "candlestick" === a ||
                "ohlc" === a ||
                "rangeColumn" === a ||
                "rangeBar" === a ||
                "rangeArea" === a ||
                "rangeSplineArea" === a ||
                "boxAndWhisker" === a ||
                "waterfall" === a
            )
                return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null;
        };
        H.prototype.getDataPointAtX = function (a, d) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var b = { dataPoint: null, distance: Infinity, index: NaN },
                c = null,
                e = 0,
                f = 0,
                p = 1,
                g = Infinity,
                l = 0,
                k = 0,
                m = 0;
            "none" !== this.chart.plotInfo.axisPlacement &&
                (this.axisX.logarithmic
                    ? ((m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x)),
                      (m = 1 < m ? Math.min(Math.max((((this.dataPoints.length - 1) / m) * Math.log(a / this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0))
                    : ((m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x), (m = 0 < m ? Math.min(Math.max((((this.dataPoints.length - 1) / m) * (a - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0)));
            for (;;) {
                f = 0 < p ? m + e : m - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var c = this.dataPoints[f],
                        n = this.axisX.logarithmic ? (c.x > a ? c.x / a : a / c.x) : Math.abs(c.x - a);
                    n < b.distance && ((b.dataPoint = c), (b.distance = n), (b.index = f));
                    c = n;
                    c <= g ? (g = c) : 0 < p ? l++ : k++;
                    if (1e3 < l && 1e3 < k) break;
                } else if (0 > m - e && m + e >= this.dataPoints.length) break;
                -1 === p ? (e++, (p = 1)) : (p = -1);
            }
            return d || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? (d && null !== b.dataPoint ? b : null) : b;
        };
        H.prototype.getDataPointAtXY = function (a, d, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            b = b || !1;
            var c = [],
                e = 0,
                f = 0,
                p = 1,
                g = !1,
                l = Infinity,
                k = 0,
                m = 0,
                n = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (((n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d })), this.axisX.logarithmic))
                    var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                        n = 1 < q ? Math.min(Math.max((((this.dataPoints.length - 1) / q) * Math.log(n / this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0;
                else (q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x), (n = 0 < q ? Math.min(Math.max((((this.dataPoints.length - 1) / q) * (n - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0);
            for (;;) {
                f = 0 < p ? n + e : n - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                        h = this.dataPoints[f],
                        r = null;
                    if (q) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= q.x1 &&
                                    a <= q.x2 &&
                                    d >= q.y1 &&
                                    d <= q.y2 &&
                                    (c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d)) }), (g = !0));
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var s = la("markerSize", h, this) || 4,
                                    w = b ? 20 : s,
                                    r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                r <= w && c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: r });
                                q = Math.abs(q.x1 - a);
                                q <= l ? (l = q) : 0 < p ? k++ : m++;
                                r <= s / 2 && (g = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                s = la("markerSize", h, this) || 4;
                                w = b ? 20 : s;
                                r = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                                r <= w && c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: r });
                                q = Math.abs(q.x1 - a);
                                q <= l ? (l = q) : 0 < p ? k++ : m++;
                                r <= s / 2 && (g = !0);
                                break;
                            case "bubble":
                                s = q.size;
                                r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                r <= s / 2 && (c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: r }), (g = !0));
                                break;
                            case "pie":
                            case "doughnut":
                                s = q.center;
                                w = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                                r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - d, 2));
                                r < q.radius &&
                                    r > w &&
                                    ((r = Math.atan2(d - s.y, a - s.x)),
                                    0 > r && (r += 2 * Math.PI),
                                    (r = Number(((((180 * (r / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    (s = Number(((((180 * (q.startAngle / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    (w = Number(((((180 * (q.endAngle / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    0 === w && 1 < q.endAngle && (w = 360),
                                    s >= w && 0 !== h.y && ((w += 360), r < s && (r += 360)),
                                    r > s && r < w && (c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: 0 }), (g = !0)));
                                break;
                            case "funnel":
                            case "pyramid":
                                r = q.funnelSection;
                                d > r.y1 &&
                                    d < r.y4 &&
                                    (r.y6
                                        ? d > r.y6
                                            ? ((f = r.x6 + ((r.x5 - r.x6) / (r.y5 - r.y6)) * (d - r.y6)), (r = r.x3 + ((r.x4 - r.x3) / (r.y4 - r.y3)) * (d - r.y3)))
                                            : ((f = r.x1 + ((r.x6 - r.x1) / (r.y6 - r.y1)) * (d - r.y1)), (r = r.x2 + ((r.x3 - r.x2) / (r.y3 - r.y2)) * (d - r.y2)))
                                        : ((f = r.x1 + ((r.x4 - r.x1) / (r.y4 - r.y1)) * (d - r.y1)), (r = r.x2 + ((r.x3 - r.x2) / (r.y3 - r.y2)) * (d - r.y2))),
                                    a > f && a < r && (c.push({ dataPoint: h, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), (g = !0)));
                                break;
                            case "boxAndWhisker":
                                if (
                                    (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2) ||
                                    (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                                )
                                    c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), (g = !0);
                                break;
                            case "candlestick":
                                if (
                                    (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2) ||
                                    (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                                )
                                    c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), (g = !0);
                                break;
                            case "ohlc":
                                if (
                                    (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3) ||
                                    (a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2) ||
                                    (a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2)
                                )
                                    c.push({ dataPoint: h, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), (g = !0);
                        }
                        if (g || (1e3 < k && 1e3 < m)) break;
                    }
                } else if (0 > n - e && n + e >= this.dataPoints.length) break;
                -1 === p ? (e++, (p = 1)) : (p = -1);
            }
            a = null;
            for (d = 0; d < c.length; d++) a ? c[d].distance <= a.distance && (a = c[d]) : (a = c[d]);
            return a;
        };
        H.prototype.getMarkerProperties = function (a, d, b, c) {
            var e = this.dataPoints;
            return {
                x: d,
                y: b,
                ctx: c,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null,
            };
        };
        oa(E, U);
        E.prototype.createExtraLabelsForLog = function (a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
                    for (var b = E.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < d; c += b)
                        c < this.viewportMinimum || this.logLabelValues.push(c);
                    this.logLabelValues.sort(Pa);
                    this.createExtraLabelsForLog(a);
                }
            }
        };
        E.prototype.createLabels = function () {
            var a,
                d,
                b = 0,
                c = 0,
                e,
                f = 0,
                p = 0,
                c = 0,
                c = this.interval,
                g = 0,
                l,
                k = 0.6 * this.chart.height,
                m;
            a = !1;
            var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                q = n.length ? (s(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex) : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(c);
                    for (var c = Math.ceil(this.intervalStartPosition), h = !1, b = c; b < this.viewportMaximum; b += a)
                        if (this.labels[b]) h = !0;
                        else {
                            h = !1;
                            break;
                        }
                    h && ((this.interval = a), (this.intervalStartPosition = c));
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || ((this.logLabelValues = []), this.createExtraLabelsForLog()), c = 0, h = q; c < this.logLabelValues.length; c++)
                        if (((b = this.logLabelValues[c]), b < this.viewportMinimum)) c++;
                        else {
                            for (; h < n.length && b > n[h].endValue; h++);
                            a = h < n.length && b >= n[h].startValue && b <= n[h].endValue;
                            m = b;
                            a ||
                                ((a = this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null })
                                    : "axisX" === this.type && this.labels[m]
                                    ? this.labels[m]
                                    : ea(m, this.valueFormatString, this.chart._cultureInfo)),
                                (a = new ia(this.ctx, {
                                    x: 0,
                                    y: 0,
                                    maxWidth: f,
                                    maxHeight: p,
                                    angle: this.labelAngle,
                                    text: this.prefix + a + this.suffix,
                                    backgroundColor: this.labelBackgroundColor,
                                    borderColor: this.labelBorderColor,
                                    cornerRadius: this.labelCornerRadius,
                                    textAlign: this.labelTextAlign,
                                    fontSize: this.labelFontSize,
                                    fontFamily: this.labelFontFamily,
                                    fontWeight: this.labelFontWeight,
                                    fontColor: this.labelFontColor,
                                    fontStyle: this.labelFontStyle,
                                    textBaseline: "middle",
                                    borderThickness: 0,
                                })),
                                this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                        }
                h = q;
                for (
                    b = this.intervalStartPosition;
                    b <= e;
                    b = parseFloat(
                        1e-12 > this.interval
                            ? this.logarithmic && this.equidistantInterval
                                ? b * Math.pow(this.logarithmBase, this.interval)
                                : b + this.interval
                            : (this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval).toFixed(12)
                    )
                ) {
                    for (; h < n.length && b > n[h].endValue; h++);
                    a = h < n.length && b >= n[h].startValue && b <= n[h].endValue;
                    m = b;
                    a ||
                        ((a = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null })
                            : "axisX" === this.type && this.labels[m]
                            ? this.labels[m]
                            : ea(m, this.valueFormatString, this.chart._cultureInfo)),
                        (a = new ia(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: f,
                            maxHeight: p,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle",
                        })),
                        this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                }
            } else
                for (
                    this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval),
                        e = Va(new Date(this.viewportMaximum), this.interval, this.intervalType),
                        h = q,
                        b = this.intervalStartPosition;
                    b < e;
                    Va(b, c, this.intervalType)
                ) {
                    for (a = b.getTime(); h < n.length && a > n[h].endValue; h++);
                    m = a;
                    a = h < n.length && a >= n[h].startValue && a <= n[h].endValue;
                    a ||
                        ((a = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(m), label: this.labels[m] ? this.labels[m] : null })
                            : "axisX" === this.type && this.labels[m]
                            ? this.labels[m]
                            : Aa(m, this.valueFormatString, this.chart._cultureInfo)),
                        (a = new ia(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: f,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: p,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle",
                        })),
                        this._labels.push({ position: m, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
                }
            if ("bottom" === this._position || "top" === this._position)
                (g =
                    this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length
                        ? (this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position))) /
                          Math.log(this.range)
                        : (this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range))) * R[this.intervalType + "Duration"] * this.interval),
                    (f = "undefined" === typeof this.options.labelMaxWidth ? (0.5 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                    this.chart.panEnabled || (p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.8 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position)
                (g =
                    this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length
                        ? (this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position))) /
                          Math.log(this.range)
                        : (this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range))) * R[this.intervalType + "Duration"] * this.interval),
                    this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? (0.3 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                    (p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.3 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
            for (c = 0; c < this._labels.length; c++) {
                a = this._labels[c].textBlock;
                a.maxWidth = f;
                a.maxHeight = p;
                var r = a.measureText();
                l = r.height;
            }
            e = [];
            q = n = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (
                    (s(this.labelAngle) ||
                        ((this.labelAngle = ((this.labelAngle % 360) + 360) % 360), 90 < this.labelAngle && 270 > this.labelAngle ? (this.labelAngle -= 180) : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)),
                    "bottom" === this._position || "top" === this._position)
                )
                    if (((f = (0.9 * g) >> 0), (q = 0), !this.chart.panEnabled && 1 <= this._labels.length)) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = p;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                for (var v, h = a.text.split(" "), c = 0; c < h.length; c++)
                                    (m = h[c]), (this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily), (m = this.ctx.measureText(m)), m.width > q && ((v = b), (q = m.width));
                            }
                        b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                r = a.measureText();
                                for (h = b + 1; h < this._labels.length; h++)
                                    if (!this._labels[h].breaksLabelType) {
                                        d = this._labels[h].textBlock;
                                        d = d.measureText();
                                        break;
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                                c = f * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                if (s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (
                                        ((this.sessionVariables.labelMaxHeight =
                                            0 === this.labelAngle ? p : Math.min((c - f * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)), c)),
                                        (m = (k - (l + a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(-25))) / Math.sin((Math.PI / 180) * Math.abs(-25))),
                                        !s(this.options.labelWrap))
                                    )
                                        this.labelWrap
                                            ? s(this.options.labelMaxWidth)
                                                ? ((this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), m)),
                                                  (this.sessionVariables.labelWrap = this.labelWrap),
                                                  d && (r.width + d.width) >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                                : ((this.sessionVariables.labelWrap = this.labelWrap),
                                                  (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth),
                                                  (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle))
                                            : s(this.options.labelMaxWidth)
                                            ? ((this.sessionVariables.labelWrap = this.labelWrap),
                                              (this.sessionVariables.labelMaxHeight = p),
                                              (this.sessionVariables.labelMaxWidth = f),
                                              d && (r.width + d.width) >> 0 > 2 * f && ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = m)))
                                            : ((this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle),
                                              (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth),
                                              (this.sessionVariables.labelMaxHeight = p),
                                              (this.sessionVariables.labelWrap = this.labelWrap));
                                    else {
                                        if (s(this.options.labelWrap))
                                            if (!s(this.options.labelMaxWidth))
                                                this.options.labelMaxWidth < f
                                                    ? ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth), (this.sessionVariables.labelMaxHeight = c))
                                                    : ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth), (this.sessionVariables.labelMaxHeight = p));
                                            else if (!s(d))
                                                if (((c = (r.width + d.width) >> 0), (h = this.labelFontSize), q < f))
                                                    c - 2 * f > n &&
                                                        ((n = c - 2 * f),
                                                        c >= 2 * f && c < 2.2 * f
                                                            ? ((this.sessionVariables.labelMaxWidth = f),
                                                              s(this.options.labelFontSize) && 12 < h && ((h = Math.floor((12 / 13) * h)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? h : this.options.labelFontSize),
                                                              (this.sessionVariables.labelAngle = this.labelAngle))
                                                            : c >= 2.2 * f && c < 2.8 * f
                                                            ? ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = m), (this.sessionVariables.labelFontSize = h))
                                                            : c >= 2.8 * f && c < 3.2 * f
                                                            ? ((this.sessionVariables.labelMaxWidth = Math.max(f, q)),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              s(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? h : this.options.labelFontSize),
                                                              (this.sessionVariables.labelAngle = this.labelAngle))
                                                            : c >= 3.2 * f && c < 3.6 * f
                                                            ? ((this.sessionVariables.labelAngle = -25),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelMaxWidth = m),
                                                              (this.sessionVariables.labelFontSize = this.labelFontSize))
                                                            : c > 3.6 * f && c < 5 * f
                                                            ? (s(this.options.labelFontSize) && 12 < h && ((h = Math.floor((12 / 13) * h)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? h : this.options.labelFontSize),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelAngle = -25),
                                                              (this.sessionVariables.labelMaxWidth = m))
                                                            : c > 5 * f &&
                                                              ((this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelMaxWidth = f),
                                                              (this.sessionVariables.labelFontSize = h),
                                                              (this.sessionVariables.labelMaxHeight = p),
                                                              (this.sessionVariables.labelAngle = this.labelAngle)));
                                                else if (
                                                    v === b &&
                                                    ((0 === v && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > n) ||
                                                        (v === this._labels.length - 1 && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > n) ||
                                                        (0 < v && v < this._labels.length - 1 && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > n && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > n))
                                                )
                                                    (n = 0 === v ? q + this._labels[v + 1].textBlock.measureText().width - 2 * f : q + this._labels[v - 1].textBlock.measureText().width - 2 * f),
                                                        (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? h : this.options.labelFontSize),
                                                        (this.sessionVariables.labelWrap = !0),
                                                        (this.sessionVariables.labelAngle = -25),
                                                        (this.sessionVariables.labelMaxWidth = m);
                                                else if (0 === n)
                                                    for (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? h : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++)
                                                        (a = this._labels[c].textBlock),
                                                            (a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), m)),
                                                            (r = a.measureText()),
                                                            c < this._labels.length - 1 &&
                                                                ((h = c + 1),
                                                                (d = this._labels[h].textBlock),
                                                                (d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), m)),
                                                                (d = d.measureText()),
                                                                (r.width + d.width) >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25));
                                    }
                                else
                                    ((this.sessionVariables.labelAngle = this.labelAngle),
                                    (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : Math.min((c - f * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)), c)),
                                    (m = 0 != this.labelAngle ? (k - (l + a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) : f),
                                    (this.sessionVariables.labelMaxHeight = this.labelWrap
                                        ? (k - m * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))
                                        : 1.5 * this.labelFontSize),
                                    s(this.options.labelWrap))
                                        ? s(this.options.labelWrap) &&
                                          (this.labelWrap && !s(this.options.labelMaxWidth)
                                              ? ((this.sessionVariables.labelWrap = this.labelWrap),
                                                (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m),
                                                (this.sessionVariables.labelMaxHeight = p))
                                              : ((this.sessionVariables.labelAngle = this.labelAngle),
                                                (this.sessionVariables.labelMaxWidth = m),
                                                (this.sessionVariables.labelMaxHeight = c < 0.9 * g ? 0.9 * g : c),
                                                (this.sessionVariables.labelWrap = this.labelWrap)))
                                        : (this.options.labelWrap
                                              ? ((this.sessionVariables.labelWrap = this.labelWrap), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m))
                                              : (s(this.options.labelMaxWidth), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m), (this.sessionVariables.labelWrap = this.labelWrap)),
                                          (this.sessionVariables.labelMaxHeight = p));
                            }
                        for (c = 0; c < this._labels.length; c++)
                            (a = this._labels[c].textBlock),
                                (a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth),
                                (a.fontSize = this.sessionVariables.labelFontSize),
                                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                                a.measureText();
                    } else
                        for (b = 0; b < this._labels.length; b++)
                            (a = this._labels[b].textBlock),
                                (a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth)
                                    ? s(this.sessionVariables.labelMaxWidth)
                                        ? (this.sessionVariables.labelMaxWidth = f)
                                        : this.sessionVariables.labelMaxWidth
                                    : this.options.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = s(this.options.labelFontSize)
                                    ? s(this.sessionVariables.labelFontSize)
                                        ? (this.sessionVariables.labelFontSize = this.labelFontSize)
                                        : this.sessionVariables.labelFontSize
                                    : this.options.labelFontSize),
                                (a.angle = this.labelAngle = s(this.options.labelAngle) ? (s(this.sessionVariables.labelAngle) ? (this.sessionVariables.labelAngle = this.labelAngle) : this.sessionVariables.labelAngle) : this.labelAngle),
                                (a.wrap = this.labelWrap = s(this.options.labelWrap) ? (s(this.sessionVariables.labelWrap) ? (this.sessionVariables.labelWrap = this.labelWrap) : this.sessionVariables.labelWrap) : this.options.labelWrap),
                                (a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? (this.sessionVariables.labelMaxHeight = p) : this.sessionVariables.labelMaxHeight),
                                a.measureText();
                else if ("left" === this._position || "right" === this._position)
                    if (
                        ((f = s(this.options.labelMaxWidth) ? (0.3 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                        (p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.3 * this.chart.height) >> 0 : 1.5 * this.labelFontSize),
                        !this.chart.panEnabled && 1 <= this._labels.length)
                    ) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = p;
                        this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                r = a.measureText();
                                for (h = b + 1; h < this._labels.length; h++)
                                    if (!this._labels[h].breaksLabelType) {
                                        d = this._labels[h].textBlock;
                                        d = d.measureText();
                                        break;
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                c = f * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                                s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle
                                    ? s(this.options.labelWrap)
                                        ? s(this.options.labelWrap) &&
                                          (s(this.options.labelMaxWidth)
                                              ? s(d) ||
                                                ((g = (r.height + d.height) >> 0),
                                                g - 2 * p > q &&
                                                    ((q = g - 2 * p),
                                                    g >= 2 * p && g < 2.4 * p
                                                        ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelMaxHeight = p),
                                                          (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize))
                                                        : g >= 2.4 * p && g < 2.8 * p
                                                        ? ((this.sessionVariables.labelMaxHeight = c), (this.sessionVariables.labelFontSize = this.labelFontSize), (this.sessionVariables.labelWrap = !0))
                                                        : g >= 2.8 * p && g < 3.2 * p
                                                        ? ((this.sessionVariables.labelMaxHeight = p),
                                                          (this.sessionVariables.labelWrap = !0),
                                                          s(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))
                                                        : g >= 3.2 * p && g < 3.6 * p
                                                        ? ((this.sessionVariables.labelMaxHeight = c), (this.sessionVariables.labelWrap = !0), (this.sessionVariables.labelFontSize = this.labelFontSize))
                                                        : g > 3.6 * p && g < 10 * p
                                                        ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelMaxWidth = f),
                                                          (this.sessionVariables.labelMaxHeight = p),
                                                          (this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))
                                                        : g > 10 * p &&
                                                          g < 50 * p &&
                                                          (s(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelMaxHeight = p),
                                                          (this.sessionVariables.labelMaxWidth = f),
                                                          (this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))))
                                              : ((this.sessionVariables.labelMaxHeight = p), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)))
                                        : ((this.sessionVariables.labelMaxWidth = this.labelWrap
                                              ? this.options.labelMaxWidth
                                                  ? this.options.labelMaxWidth
                                                  : this.sessionVariables.labelMaxWidth
                                              : this.labelMaxWidth
                                              ? this.options.labelMaxWidth
                                                  ? this.options.labelMaxWidth
                                                  : this.sessionVariables.labelMaxWidth
                                              : f),
                                          (this.sessionVariables.labelMaxHeight = p))
                                    : ((this.sessionVariables.labelAngle = this.labelAngle),
                                      (this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((c - p * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)), p)),
                                      s(this.options.labelWrap))
                                    ? s(this.options.labelWrap) &&
                                      (this.labelWrap && !s(this.options.labelMaxWidth)
                                          ? ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth),
                                            (this.sessionVariables.labelWrap = this.labelWrap),
                                            (this.sessionVariables.labelMaxHeight = c))
                                          : ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f),
                                            (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : c),
                                            s(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle)))
                                    : this.options.labelWrap
                                    ? ((this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : c), (this.sessionVariables.labelWrap = this.labelWrap), (this.sessionVariables.labelMaxWidth = f))
                                    : ((this.sessionVariables.labelMaxHeight = p),
                                      s(this.options.labelMaxWidth),
                                      (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth),
                                      (this.sessionVariables.labelWrap = this.labelWrap));
                            }
                        for (c = 0; c < this._labels.length; c++)
                            (a = this._labels[c].textBlock),
                                (a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize),
                                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                                a.measureText();
                    } else
                        for (b = 0; b < this._labels.length; b++)
                            (a = this._labels[b].textBlock),
                                (a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth)
                                    ? s(this.sessionVariables.labelMaxWidth)
                                        ? (this.sessionVariables.labelMaxWidth = f)
                                        : this.sessionVariables.labelMaxWidth
                                    : this.options.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = s(this.options.labelFontSize)
                                    ? s(this.sessionVariables.labelFontSize)
                                        ? (this.sessionVariables.labelFontSize = this.labelFontSize)
                                        : this.sessionVariables.labelFontSize
                                    : this.options.labelFontSize),
                                (a.angle = this.labelAngle = s(this.options.labelAngle) ? (s(this.sessionVariables.labelAngle) ? (this.sessionVariables.labelAngle = this.labelAngle) : this.sessionVariables.labelAngle) : this.labelAngle),
                                (a.wrap = this.labelWrap = s(this.options.labelWrap) ? (s(this.sessionVariables.labelWrap) ? (this.sessionVariables.labelWrap = this.labelWrap) : this.sessionVariables.labelWrap) : this.options.labelWrap),
                                (a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? (this.sessionVariables.labelMaxHeight = p) : this.sessionVariables.labelMaxHeight),
                                a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var f = this.stripLines[b],
                    y;
                if ("outside" === f.labelPlacement) {
                    p = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position)
                        s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight)
                            ? (y = this.sessionVariables.stripLineLabelMaxHeight)
                            : (this.sessionVariables.stripLineLabelMaxHeight = y = f.labelWrap ? (0.8 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
                    if ("left" === this._position || "right" === this._position)
                        s(f.options.labelWrap) && !s(this.sessionVariables.stripLineLabelMaxHeight)
                            ? (y = this.sessionVariables.stripLineLabelMaxHeight)
                            : (this.sessionVariables.stripLineLabelMaxHeight = y = f.labelWrap ? (0.8 * this.chart.width) >> 0 : 1.5 * this.labelFontSize);
                    s(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE");
                } else
                    (p = "bottom" === this._position || "top" === this._position ? (0.9 * this.chart.width) >> 0 : (0.9 * this.chart.height) >> 0),
                        (y = s(f.options.labelWrap) || f.labelWrap ? ("bottom" === this._position || "top" === this._position ? (0.8 * this.chart.width) >> 0 : (0.8 * this.chart.height) >> 0) : 1.5 * this.labelFontSize),
                        s(f.labelBackgroundColor) && (s(f.startValue) && 0 !== f.startValue ? (f.labelBackgroundColor = w ? "transparent" : null) : (f.labelBackgroundColor = "#EEEEEE"));
                a = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: f.labelBackgroundColor,
                    borderColor: f.labelBorderColor,
                    borderThickness: f.labelBorderThickness,
                    cornerRadius: f.labelCornerRadius,
                    maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : p,
                    maxHeight: y,
                    angle: this.labelAngle,
                    text: f.labelFormatter ? f.labelFormatter({ chart: this.chart, axis: this, stripLine: f }) : f.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === f.labelPlacement ? (f.options.labelFontSize ? f.labelFontSize : this.labelFontSize) : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? (f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily) : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? (f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight) : f.labelFontWeight,
                    fontColor: f.labelFontColor || f.color,
                    fontStyle: "outside" === f.labelPlacement ? (f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight) : f.labelFontStyle,
                    textBaseline: "middle",
                });
                this._stripLineLabels.push({ position: f.value, textBlock: a, effectiveHeight: null, stripLine: f });
            }
        };
        E.prototype.createLabelsAndCalculateWidth = function () {
            var a = 0,
                d = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var b = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || ("inside" === this.labelPlacement && 0 < this._index))
                    for (d = 0; d < this._labels.length; d++) {
                        var c = this._labels[d].textBlock,
                            e = c.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.width : e.width * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) + (e.height - c.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[d].effectiveWidth = f;
                    }
                for (d = 0; d < this._stripLineLabels.length; d++)
                    "outside" === this._stripLineLabels[d].stripLine.labelPlacement &&
                        this._stripLineLabels[d].stripLine.value >= this.viewportMinimum &&
                        this._stripLineLabels[d].stripLine.value <= this.viewportMaximum &&
                        ((c = this._stripLineLabels[d].textBlock),
                        (e = c.measureText()),
                        (f = 0 === this.labelAngle ? e.width : e.width * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) + (e.height - c.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))),
                        a < f && (a = f),
                        (this._stripLineLabels[d].effectiveWidth = f));
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b;
        };
        E.prototype.createLabelsAndCalculateHeight = function () {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var d,
                b = 0,
                c = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || ("inside" === this.labelPlacement && 0 < this._index))
                    for (b = 0; b < this._labels.length; b++) {
                        d = this._labels[b].textBlock;
                        var e = d.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.height : e.width * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[b].effectiveHeight = f;
                    }
                for (b = 0; b < this._stripLineLabels.length; b++)
                    "outside" === this._stripLineLabels[b].stripLine.labelPlacement &&
                        this._stripLineLabels[b].stripLine.value >= this.viewportMinimum &&
                        this._stripLineLabels[b].stripLine.value <= this.viewportMaximum &&
                        ((d = this._stripLineLabels[b].textBlock),
                        (e = d.measureText()),
                        (f = 0 === this.labelAngle ? e.height : e.width * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))),
                        a < f && (a = f),
                        (this._stripLineLabels[b].effectiveHeight = f));
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c;
        };
        E.setLayout = function (a, d, b, c, e, f) {
            var p,
                g,
                l,
                k,
                m = a[0] ? a[0].chart : d[0].chart,
                n = m.isNavigator ? 0 : 10,
                q = m._axes;
            if (a && 0 < a.length) for (var h = 0; h < a.length; h++) a[h] && a[h].calculateAxisParameters();
            if (d && 0 < d.length) for (h = 0; h < d.length; h++) d[h].calculateAxisParameters();
            if (b && 0 < b.length) for (h = 0; h < b.length; h++) b[h].calculateAxisParameters();
            if (c && 0 < c.length) for (h = 0; h < c.length; h++) c[h].calculateAxisParameters();
            for (h = 0; h < q.length; h++)
                if (q[h] && q[h].scaleBreaks && q[h].scaleBreaks._appliedBreaks.length)
                    for (var r = q[h].scaleBreaks._appliedBreaks, w = 0; w < r.length && !(r[w].startValue > q[h].viewportMaximum); w++)
                        r[w].endValue < q[h].viewportMinimum || (s(q[h].scaleBreaks.firstBreakIndex) && (q[h].scaleBreaks.firstBreakIndex = w), r[w].startValue >= q[h].viewPortMinimum && (q[h].scaleBreaks.lastBreakIndex = w));
            for (var v = (w = 0), u = 0, x = 0, A = 0, y = 0, D = 0, z, E, F = (g = 0), H, J, K, r = (H = J = K = !1), h = 0; h < q.length; h++)
                q[h] &&
                    q[h].title &&
                    (q[h]._titleTextBlock = new ia(q[h].ctx, {
                        text: q[h].title,
                        horizontalAlign: "center",
                        fontSize: q[h].titleFontSize,
                        fontFamily: q[h].titleFontFamily,
                        fontWeight: q[h].titleFontWeight,
                        fontColor: q[h].titleFontColor,
                        fontStyle: q[h].titleFontStyle,
                        borderColor: q[h].titleBorderColor,
                        borderThickness: q[h].titleBorderThickness,
                        backgroundColor: q[h].titleBackgroundColor,
                        cornerRadius: q[h].titleCornerRadius,
                        textBaseline: "top",
                    }));
            for (h = 0; h < q.length; h++)
                if (q[h].title)
                    switch (q[h]._position) {
                        case "left":
                            q[h]._titleTextBlock.maxWidth = q[h].titleMaxWidth || f.height;
                            q[h]._titleTextBlock.maxHeight = q[h].titleWrap ? 0.8 * f.width : 1.5 * q[h].titleFontSize;
                            q[h]._titleTextBlock.angle = -90;
                            break;
                        case "right":
                            q[h]._titleTextBlock.maxWidth = q[h].titleMaxWidth || f.height;
                            q[h]._titleTextBlock.maxHeight = q[h].titleWrap ? 0.8 * f.width : 1.5 * q[h].titleFontSize;
                            q[h]._titleTextBlock.angle = 90;
                            break;
                        default:
                            (q[h]._titleTextBlock.maxWidth = q[h].titleMaxWidth || f.width), (q[h]._titleTextBlock.maxHeight = q[h].titleWrap ? 0.8 * f.height : 1.5 * q[h].titleFontSize), (q[h]._titleTextBlock.angle = 0);
                    }
            if ("normal" === e) {
                for (var x = [], A = [], y = [], D = [], M = [], N = [], P = [], R = []; 4 > w; ) {
                    var G = 0,
                        S = 0,
                        U = 0,
                        X = 0,
                        W = (e = 0),
                        L = 0,
                        Z = 0,
                        T = 0,
                        V = 0,
                        O = 0,
                        $ = 0;
                    if (b && 0 < b.length) for (y = [], h = O = 0; h < b.length; h++) y.push(Math.ceil(b[h] ? b[h].createLabelsAndCalculateWidth() : 0)), (O += y[h]), (L += b[h] && !m.isNavigator ? b[h].margin : 0);
                    else y.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    P.push(y);
                    if (c && 0 < c.length) for (D = [], h = $ = 0; h < c.length; h++) D.push(Math.ceil(c[h] ? c[h].createLabelsAndCalculateWidth() : 0)), ($ += D[h]), (Z += c[h] ? c[h].margin : 0);
                    else D.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    R.push(D);
                    p = Math.round(f.x1 + O + L);
                    l = Math.round(f.x2 - $ - Z > m.width - n ? m.width - n : f.x2 - $ - Z);
                    if (a && 0 < a.length)
                        for (x = [], h = T = 0; h < a.length; h++)
                            a[h] && (a[h].lineCoordinates = {}),
                                (a[h].lineCoordinates.width = Math.abs(l - p)),
                                a[h].title && (a[h]._titleTextBlock.maxWidth = 0 < a[h].titleMaxWidth && a[h].titleMaxWidth < a[h].lineCoordinates.width ? a[h].titleMaxWidth : a[h].lineCoordinates.width),
                                x.push(Math.ceil(a[h] ? a[h].createLabelsAndCalculateHeight() : 0)),
                                (T += x[h]),
                                (e += a[h] && !m.isNavigator ? a[h].margin : 0);
                    else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    M.push(x);
                    if (d && 0 < d.length)
                        for (A = [], h = V = 0; h < d.length; h++)
                            d[h] && (d[h].lineCoordinates = {}),
                                (d[h].lineCoordinates.width = Math.abs(l - p)),
                                d[h].title && (d[h]._titleTextBlock.maxWidth = 0 < d[h].titleMaxWidth && d[h].titleMaxWidth < d[h].lineCoordinates.width ? d[h].titleMaxWidth : d[h].lineCoordinates.width),
                                A.push(Math.ceil(d[h] ? d[h].createLabelsAndCalculateHeight() : 0)),
                                (V += A[h]),
                                (W += d[h] && !m.isNavigator ? d[h].margin : 0);
                    else A.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                    N.push(A);
                    if (a && 0 < a.length)
                        for (h = 0; h < a.length; h++)
                            a[h] &&
                                ((a[h].lineCoordinates.x1 = p),
                                (l = Math.round(f.x2 - $ - Z > m.width - n ? m.width - n : f.x2 - $ - Z)),
                                a[h]._labels &&
                                    1 < a[h]._labels.length &&
                                    ((g = k = 0),
                                    (k = a[h]._labels[1]),
                                    (g = "dateTime" === a[h].valueType ? a[h]._labels[a[h]._labels.length - 2] : a[h]._labels[a[h]._labels.length - 1]),
                                    (v = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                    (u = g.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(g.textBlock.angle)) + (g.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(g.textBlock.angle)))),
                                !a[h] ||
                                    !a[h].labelAutoFit ||
                                    s(z) ||
                                    s(E) ||
                                    m.isNavigator ||
                                    m.stockChart ||
                                    ((g = 0),
                                    0 < a[h].labelAngle
                                        ? E + u > l && (g += 0 < a[h].labelAngle ? E + u - l - $ : 0)
                                        : 0 > a[h].labelAngle
                                        ? z - v < p && z - v < a[h].viewportMinimum && (F = p - (L + a[h].tickLength + y + z - v + a[h].labelFontSize / 2))
                                        : 0 === a[h].labelAngle && (E + u > l && (g = E + u / 2 - l - $), z - v < p && z - v < a[h].viewportMinimum && (F = p - L - a[h].tickLength - y - z + v / 2)),
                                    a[h].viewportMaximum === a[h].maximum && a[h].viewportMinimum === a[h].minimum && 0 < a[h].labelAngle && 0 < g
                                        ? (l -= g)
                                        : a[h].viewportMaximum === a[h].maximum && a[h].viewportMinimum === a[h].minimum && 0 > a[h].labelAngle && 0 < F
                                        ? (p += F)
                                        : a[h].viewportMaximum === a[h].maximum && a[h].viewportMinimum === a[h].minimum && 0 === a[h].labelAngle && (0 < F && (p += F), 0 < g && (l -= g))),
                                m.panEnabled ? (T = s(m.sessionVariables.axisX.height) ? (m.sessionVariables.axisX.height = T) : m.sessionVariables.axisX.height) : (m.sessionVariables.axisX.height = T),
                                (g = Math.round(f.y2 - T - e + G)),
                                (k = Math.round(f.y2)),
                                (a[h].lineCoordinates.x2 = l),
                                (a[h].lineCoordinates.width = l - p),
                                (a[h].lineCoordinates.y1 = g),
                                (a[h].lineCoordinates.y2 = g + a[h].lineThickness / 2),
                                "inside" === a[h].labelPlacement &&
                                    0 < h &&
                                    ((a[h].lineCoordinates.y1 = a[h].lineCoordinates.y1 + x[h] - (a[h]._titleTextBlock ? a[h]._titleTextBlock.height : 0) - ("inside" === a[h].tickPlacement ? a[h].tickLength : 0)),
                                    (a[h].lineCoordinates.y2 = a[h].lineCoordinates.y1 + a[h].lineThickness / 2)),
                                (a[h].bounds = { x1: p, y1: g, x2: l, y2: k - (T + e - x[h] - G), width: l - p, height: k - g })),
                                (G += x[h] + a[h].margin);
                    if (d && 0 < d.length)
                        for (h = 0; h < d.length; h++)
                            (d[h].lineCoordinates.x1 = Math.round(f.x1 + O + L)),
                                (d[h].lineCoordinates.x2 = Math.round(f.x2 - $ - Z > m.width - n ? m.width - n : f.x2 - $ - Z)),
                                (d[h].lineCoordinates.width = Math.abs(l - p)),
                                d[h]._labels &&
                                    1 < d[h]._labels.length &&
                                    ((k = d[h]._labels[1]),
                                    (g = "dateTime" === d[h].valueType ? d[h]._labels[d[h]._labels.length - 2] : d[h]._labels[d[h]._labels.length - 1]),
                                    (v = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                    (u = g.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(g.textBlock.angle)) + (g.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(g.textBlock.angle)))),
                                m.panEnabled ? (V = s(m.sessionVariables.axisX2.height) ? (m.sessionVariables.axisX2.height = V) : m.sessionVariables.axisX2.height) : (m.sessionVariables.axisX2.height = V),
                                (g = Math.round(f.y1)),
                                (k = Math.round(f.y2 + d[h].margin)),
                                (d[h].lineCoordinates.y1 = g + V + W - S),
                                (d[h].lineCoordinates.y2 = g),
                                "inside" === d[h].labelPlacement && 0 < h && (d[h].lineCoordinates.y1 = d[h - 1].bounds.y1 - A[h] + (d[h]._titleTextBlock ? d[h]._titleTextBlock.height : 0)),
                                (d[h].bounds = { x1: p, y1: g + (V + W - A[h] - S), x2: l, y2: k, width: l - p, height: k - g }),
                                (S += A[h] + d[h].margin);
                    if (b && 0 < b.length)
                        for (h = 0; h < b.length; h++)
                            (L = m.isNavigator ? 0 : 10),
                                b[h] &&
                                    ((p = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1)),
                                    (L = b[h]._labels && 0 < b[h]._labels.length ? b[h]._labels[b[h]._labels.length - 1].textBlock.height / 2 : n),
                                    (g = Math.round(f.y1 + V + W < Math.max(L, n) ? Math.max(L, n) : f.y1 + V + W)),
                                    (l = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1)),
                                    (L = 0 < a.length ? 0 : b[h]._labels && 0 < b[h]._labels.length ? b[h]._labels[0].textBlock.height / 2 : n),
                                    (k = Math.round(f.y2 - T - e - L)),
                                    (b[h].lineCoordinates = { x1: p - U, y1: g, x2: l - U, y2: k, height: Math.abs(k - g) }),
                                    "inside" === b[h].labelPlacement &&
                                        0 < h &&
                                        ((b[h].lineCoordinates.x1 = b[h].lineCoordinates.x1 - (y[h] - (b[h]._titleTextBlock ? b[h]._titleTextBlock.height : 0)) + ("outside" === b[h].tickPlacement ? b[h].tickLength : 0)),
                                        (b[h].lineCoordinates.x2 = b[h].lineCoordinates.x1 + b[h].lineThickness / 2)),
                                    (b[h].bounds = { x1: p - (y[h] + U), y1: g, x2: l, y2: k, width: l - p, height: k - g }),
                                    b[h].title && (b[h]._titleTextBlock.maxWidth = 0 < b[h].titleMaxWidth && b[h].titleMaxWidth < b[h].lineCoordinates.height ? b[h].titleMaxWidth : b[h].lineCoordinates.height),
                                    (U += y[h] + b[h].margin));
                    if (c && 0 < c.length)
                        for (h = 0; h < c.length; h++)
                            c[h] &&
                                ((p = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2)),
                                (l = Math.round(p)),
                                (L = c[h]._labels && 0 < c[h]._labels.length ? c[h]._labels[c[h]._labels.length - 1].textBlock.height / 2 : 0),
                                (g = Math.round(f.y1 + V + W < Math.max(L, n) ? Math.max(L, n) : f.y1 + V + W)),
                                (L = 0 < a.length ? 0 : c[h]._labels && 0 < c[h]._labels.length ? c[h]._labels[0].textBlock.height / 2 : 0),
                                (k = Math.round(f.y2 - (T + e + L))),
                                (c[h].lineCoordinates = { x1: p + X, y1: g, x2: p + X, y2: k, height: Math.abs(k - g) }),
                                "inside" === c[h].labelPlacement &&
                                    0 < h &&
                                    ((c[h].lineCoordinates.x1 = c[h].lineCoordinates.x1 + (D[h] - (c[h]._titleTextBlock ? c[h]._titleTextBlock.height : 0)) - ("outside" === c[h].tickPlacement ? c[h].tickLength : 0) - 2),
                                    (c[h].lineCoordinates.x2 = c[h].lineCoordinates.x1 + c[h].lineThickness / 2)),
                                (c[h].bounds = { x1: p, y1: g, x2: l + (D[h] + X), y2: k, width: l - p, height: k - g }),
                                c[h].title && (c[h]._titleTextBlock.maxWidth = 0 < c[h].titleMaxWidth && c[h].titleMaxWidth < c[h].lineCoordinates.height ? c[h].titleMaxWidth : c[h].lineCoordinates.height),
                                (X += D[h] + c[h].margin));
                    if (a && 0 < a.length)
                        for (h = 0; h < a.length; h++)
                            a[h] &&
                                (a[h].calculateValueToPixelConversionParameters(),
                                a[h].calculateBreaksSizeInValues(),
                                a[h]._labels &&
                                    1 < a[h]._labels.length &&
                                    ((z =
                                        (a[h].logarithmic ? Math.log(a[h]._labels[1].position / a[h].viewportMinimum) / a[h].conversionParameters.lnLogarithmBase : a[h]._labels[1].position - a[h].viewportMinimum) *
                                            Math.abs(a[h].conversionParameters.pixelPerUnit) +
                                        a[h].lineCoordinates.x1),
                                    (p = a[h]._labels[a[h]._labels.length - ("dateTime" === a[h].valueType ? 2 : 1)].position),
                                    (p = a[h].getApparentDifference(a[h].viewportMinimum, p)),
                                    (E = a[h].logarithmic
                                        ? (1 < p ? (Math.log(p) / a[h].conversionParameters.lnLogarithmBase) * Math.abs(a[h].conversionParameters.pixelPerUnit) : 0) + a[h].lineCoordinates.x1
                                        : (0 < p ? p * Math.abs(a[h].conversionParameters.pixelPerUnit) : 0) + a[h].lineCoordinates.x1)));
                    if (d && 0 < d.length)
                        for (h = 0; h < d.length; h++)
                            d[h].calculateValueToPixelConversionParameters(),
                                d[h].calculateBreaksSizeInValues(),
                                d[h]._labels &&
                                    1 < d[h]._labels.length &&
                                    ((z =
                                        (d[h].logarithmic ? Math.log(d[h]._labels[1].position / d[h].viewportMinimum) / d[h].conversionParameters.lnLogarithmBase : d[h]._labels[1].position - d[h].viewportMinimum) *
                                            Math.abs(d[h].conversionParameters.pixelPerUnit) +
                                        d[h].lineCoordinates.x1),
                                    (p = d[h]._labels[d[h]._labels.length - ("dateTime" === d[h].valueType ? 2 : 1)].position),
                                    (p = d[h].getApparentDifference(d[h].viewportMinimum, p)),
                                    (E = d[h].logarithmic
                                        ? (1 < p ? (Math.log(p) / d[h].conversionParameters.lnLogarithmBase) * Math.abs(d[h].conversionParameters.pixelPerUnit) : 0) + d[h].lineCoordinates.x1
                                        : (0 < p ? p * Math.abs(d[h].conversionParameters.pixelPerUnit) : 0) + d[h].lineCoordinates.x1));
                    for (h = 0; h < q.length; h++) "axisY" === q[h].type && (q[h].calculateValueToPixelConversionParameters(), q[h].calculateBreaksSizeInValues());
                    if (0 < w) {
                        if (a && 0 < a.length) for (h = 0; h < a.length; h++) r = M[w - 1][h] === M[w][h] ? !0 : !1;
                        else r = !0;
                        if (d && 0 < d.length) for (h = 0; h < d.length; h++) H = N[w - 1][h] === N[w][h] ? !0 : !1;
                        else H = !0;
                        if (b && 0 < b.length) for (h = 0; h < b.length; h++) J = P[w - 1][h] === P[w][h] ? !0 : !1;
                        else J = !0;
                        if (c && 0 < c.length) for (h = 0; h < c.length; h++) K = R[w - 1][h] === R[w][h] ? !0 : !1;
                        else K = !0;
                    }
                    if (r && H && J && K) break;
                    w++;
                }
                if (a && 0 < a.length) for (h = 0; h < a.length; h++) a[h].calculateStripLinesThicknessInValues(), a[h].calculateBreaksInPixels();
                if (d && 0 < d.length) for (h = 0; h < d.length; h++) d[h].calculateStripLinesThicknessInValues(), d[h].calculateBreaksInPixels();
                if (b && 0 < b.length) for (h = 0; h < b.length; h++) b[h].calculateStripLinesThicknessInValues(), b[h].calculateBreaksInPixels();
                if (c && 0 < c.length) for (h = 0; h < c.length; h++) c[h].calculateStripLinesThicknessInValues(), c[h].calculateBreaksInPixels();
            } else {
                n = [];
                z = [];
                F = [];
                v = [];
                E = [];
                u = [];
                M = [];
                for (N = []; 4 > w; ) {
                    T = X = S = U = Z = L = W = e = R = P = G = V = 0;
                    if (a && 0 < a.length) for (F = [], h = X = 0; h < a.length; h++) F.push(Math.ceil(a[h] ? a[h].createLabelsAndCalculateWidth() : 0)), (X += F[h]), (e += a[h] && !m.isNavigator ? a[h].margin : 0);
                    else F.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    M.push(F);
                    if (d && 0 < d.length) for (v = [], h = T = 0; h < d.length; h++) v.push(Math.ceil(d[h] ? d[h].createLabelsAndCalculateWidth() : 0)), (T += v[h]), (W += d[h] ? d[h].margin : 0);
                    else v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                    N.push(v);
                    if (b && 0 < b.length)
                        for (h = 0; h < b.length; h++)
                            (b[h].lineCoordinates = {}),
                                (p = Math.round(f.x1 + X + e)),
                                (l = Math.round(f.x2 - T - W > m.width - 10 ? m.width - 10 : f.x2 - T - W)),
                                b[h].labelAutoFit &&
                                    !s(x) &&
                                    (0 < !a.length && (p = 0 > b[h].labelAngle ? Math.max(p, x) : 0 === b[h].labelAngle ? Math.max(p, x / 2) : p),
                                    0 < !d.length && (l = 0 < b[h].labelAngle ? l - A / 2 : 0 === b[h].labelAngle ? l - A / 2 : l)),
                                (b[h].lineCoordinates.x1 = p),
                                (b[h].lineCoordinates.x2 = l),
                                (b[h].lineCoordinates.width = Math.abs(l - p)),
                                b[h].title && (b[h]._titleTextBlock.maxWidth = 0 < b[h].titleMaxWidth && b[h].titleMaxWidth < b[h].lineCoordinates.width ? b[h].titleMaxWidth : b[h].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (h = 0; h < c.length; h++)
                            (c[h].lineCoordinates = {}),
                                (p = Math.round(f.x1 + X + e)),
                                (l = Math.round(f.x2 - T - W > c[h].chart.width - 10 ? c[h].chart.width - 10 : f.x2 - T - W)),
                                c[h] && c[h].labelAutoFit && !s(y) && (0 < !a.length && (p = 0 < c[h].labelAngle ? Math.max(p, y) : 0 === c[h].labelAngle ? Math.max(p, y / 2) : p), 0 < !d.length && (l -= D / 2)),
                                (c[h].lineCoordinates.x1 = p),
                                (c[h].lineCoordinates.x2 = l),
                                (c[h].lineCoordinates.width = Math.abs(l - p)),
                                c[h].title && (c[h]._titleTextBlock.maxWidth = 0 < c[h].titleMaxWidth && c[h].titleMaxWidth < c[h].lineCoordinates.width ? c[h].titleMaxWidth : c[h].lineCoordinates.width);
                    if (b && 0 < b.length) for (n = [], h = U = 0; h < b.length; h++) n.push(Math.ceil(b[h] ? b[h].createLabelsAndCalculateHeight() : 0)), (U += n[h] + b[h].margin), (L += b[h].margin);
                    else n.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    E.push(n);
                    if (c && 0 < c.length) for (z = [], h = S = 0; h < c.length; h++) z.push(Math.ceil(c[h] ? c[h].createLabelsAndCalculateHeight() : 0)), (S += z[h]), (Z += c[h].margin);
                    else z.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    u.push(z);
                    if (b && 0 < b.length)
                        for (h = 0; h < b.length; h++)
                            0 < b[h]._labels.length &&
                                ((k = b[h]._labels[0]),
                                (g = b[h]._labels[b[h]._labels.length - 1]),
                                (x = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                (A = g.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(g.textBlock.angle)) + (g.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(g.textBlock.angle))));
                    if (c && 0 < c.length)
                        for (h = 0; h < c.length; h++)
                            c[h] &&
                                0 < c[h]._labels.length &&
                                ((k = c[h]._labels[0]),
                                (g = c[h]._labels[c[h]._labels.length - 1]),
                                (y = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                (D = g.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(g.textBlock.angle)) + (g.textBlock.height - g.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(g.textBlock.angle))));
                    if (m.panEnabled) for (h = 0; h < b.length; h++) n[h] = s(m.sessionVariables.axisY.height) ? (m.sessionVariables.axisY.height = n[h]) : m.sessionVariables.axisY.height;
                    else for (h = 0; h < b.length; h++) m.sessionVariables.axisY.height = n[h];
                    if (b && 0 < b.length)
                        for (h = b.length - 1; 0 <= h; h--)
                            (g = Math.round(f.y2)),
                                (k = Math.round(f.y2 > b[h].chart.height ? b[h].chart.height : f.y2)),
                                (b[h].lineCoordinates.y1 = g - (n[h] + b[h].margin + V)),
                                (b[h].lineCoordinates.y2 = g - (n[h] + b[h].margin + V)),
                                "inside" === b[h].labelPlacement &&
                                    0 < h &&
                                    ((b[h].lineCoordinates.y1 = b[h].lineCoordinates.y1 + n[h] - (b[h]._titleTextBlock ? b[h]._titleTextBlock.height : 0) - ("inside" === b[h].tickPlacement ? b[h].tickLength : 0)),
                                    (b[h].lineCoordinates.y2 = b[h].lineCoordinates.y1 + b[h].lineThickness / 2)),
                                (b[h].bounds = { x1: p, y1: g - (n[h] + V + b[h].margin), x2: l, y2: k - (V + b[h].margin), width: l - p, height: n[h] }),
                                b[h].title && (b[h]._titleTextBlock.maxWidth = 0 < b[h].titleMaxWidth && b[h].titleMaxWidth < b[h].lineCoordinates.width ? b[h].titleMaxWidth : b[h].lineCoordinates.width),
                                (V += n[h] + b[h].margin);
                    if (c && 0 < c.length)
                        for (h = c.length - 1; 0 <= h; h--)
                            c[h] &&
                                ((g = Math.round(f.y1)),
                                (k = Math.round(f.y1 + (z[h] + c[h].margin + G))),
                                (c[h].lineCoordinates.y1 = k),
                                (c[h].lineCoordinates.y2 = k),
                                "inside" === c[h].labelPlacement && 0 < h && (c[h].lineCoordinates.y1 = k - z[h] + (c[h]._titleTextBlock ? c[h]._titleTextBlock.height : 0)),
                                (c[h].bounds = { x1: p, y1: g + (c[h].margin + G), x2: l, y2: k, width: l - p, height: S }),
                                c[h].title && (c[h]._titleTextBlock.maxWidth = 0 < c[h].titleMaxWidth && c[h].titleMaxWidth < c[h].lineCoordinates.width ? c[h].titleMaxWidth : c[h].lineCoordinates.width),
                                (G += z[h] + c[h].margin));
                    if (a && 0 < a.length)
                        for (h = 0; h < a.length; h++) {
                            L = a[h]._labels && 0 < a[h]._labels.length ? a[h]._labels[0].textBlock.fontSize / 2 : 0;
                            p = Math.round(f.x1 + e);
                            g = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1) : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1;
                            l = Math.round(f.x1 + X + e);
                            k =
                                b && 0 < b.length
                                    ? Math.round(b[0] ? b[0].lineCoordinates.y1 : f.y2 - U > m.height - Math.max(L, 10) ? m.height - Math.max(L, 10) : f.y2 - U)
                                    : f.y2 > m.height - Math.max(L, 10)
                                    ? m.height - Math.max(L, 10)
                                    : f.y2;
                            if (b && 0 < b.length)
                                for (L = 0; L < b.length; L++)
                                    b[L] && b[L].labelAutoFit && ((l = 0 > b[L].labelAngle ? Math.max(l, x) : 0 === b[L].labelAngle ? Math.max(l, x / 2) : l), (p = 0 > b[L].labelAngle || 0 === b[L].labelAngle ? l - X : p));
                            if (c && 0 < c.length) for (L = 0; L < c.length; L++) c[L] && c[L].labelAutoFit && ((l = c[L].lineCoordinates.x1), (p = l - X));
                            a[h].lineCoordinates = { x1: l - P, y1: g, x2: l - P, y2: k, height: Math.abs(k - g) };
                            "inside" === a[h].labelPlacement &&
                                0 < h &&
                                ((a[h].lineCoordinates.x1 = a[h].lineCoordinates.x1 - (F[h] - (a[h]._titleTextBlock ? a[h]._titleTextBlock.height : 0)) + ("outside" === a[h].tickPlacement ? a[h].tickLength : 0)),
                                (a[h].lineCoordinates.x2 = a[h].lineCoordinates.x1 + a[h].lineThickness / 2));
                            a[h].bounds = { x1: l - (F[h] + P), y1: g, x2: l, y2: k, width: l - p, height: k - g };
                            a[h].title && (a[h]._titleTextBlock.maxWidth = 0 < a[h].titleMaxWidth && a[h].titleMaxWidth < a[h].lineCoordinates.height ? a[h].titleMaxWidth : a[h].lineCoordinates.height);
                            a[h].calculateValueToPixelConversionParameters();
                            a[h].calculateBreaksSizeInValues();
                            P += F[h] + a[h].margin;
                        }
                    if (d && 0 < d.length)
                        for (h = 0; h < d.length; h++) {
                            L = d[h]._labels && 0 < d[h]._labels.length ? d[h]._labels[0].textBlock.fontSize / 2 : 0;
                            p = Math.round(f.x1 - e);
                            g = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1) : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1;
                            l = Math.round(f.x2 - T - W);
                            k =
                                b && 0 < b.length
                                    ? Math.round(b[0] ? b[0].lineCoordinates.y1 : f.y2 - U > m.height - Math.max(L, 10) ? m.height - Math.max(L, 10) : f.y2 - U)
                                    : f.y2 > m.height - Math.max(L, 10)
                                    ? m.height - Math.max(L, 10)
                                    : f.y2;
                            if (b && 0 < b.length)
                                for (L = 0; L < b.length; L++)
                                    b[L] && b[L].labelAutoFit && ((l = 0 > b[L].labelAngle ? Math.max(l, x) : 0 === b[L].labelAngle ? Math.max(l, x / 2) : l), (p = 0 > b[L].labelAngle || 0 === b[L].labelAngle ? l - T : p));
                            if (c && 0 < c.length) for (L = 0; L < c.length; L++) c[L] && c[L].labelAutoFit && ((l = c[L].lineCoordinates.x2), (p = l - T));
                            d[h].lineCoordinates = { x1: l + R, y1: g, x2: l + R, y2: k, height: Math.abs(k - g) };
                            "inside" === d[h].labelPlacement &&
                                0 < h &&
                                ((d[h].lineCoordinates.x1 = d[h].lineCoordinates.x1 + (v[h] - (d[h]._titleTextBlock ? d[h]._titleTextBlock.height : 0) - 2) - ("outside" === d[h].tickPlacement ? d[h].tickLength : 0)),
                                (d[h].lineCoordinates.x2 = d[h].lineCoordinates.x1 + d[h].lineThickness / 2));
                            d[h].bounds = { x1: d[h].lineCoordinates.x1, y1: g, x2: l + v[h] + R, y2: k, width: l - p, height: k - g };
                            d[h].title && (d[h]._titleTextBlock.maxWidth = 0 < d[h].titleMaxWidth && d[h].titleMaxWidth < d[h].lineCoordinates.height ? d[h].titleMaxWidth : d[h].lineCoordinates.height);
                            d[h].calculateValueToPixelConversionParameters();
                            d[h].calculateBreaksSizeInValues();
                            R += v[h] + d[h].margin;
                        }
                    for (h = 0; h < q.length; h++) "axisY" === q[h].type && (q[h].calculateValueToPixelConversionParameters(), q[h].calculateBreaksSizeInValues());
                    if (0 < w) {
                        if (a && 0 < a.length) for (h = 0; h < a.length; h++) r = M[w - 1][h] === M[w][h] ? !0 : !1;
                        else r = !0;
                        if (d && 0 < d.length) for (h = 0; h < d.length; h++) H = N[w - 1][h] === N[w][h] ? !0 : !1;
                        else H = !0;
                        if (b && 0 < b.length) for (h = 0; h < b.length; h++) J = E[w - 1][h] === E[w][h] ? !0 : !1;
                        else J = !0;
                        if (c && 0 < c.length) for (h = 0; h < c.length; h++) K = u[w - 1][h] === u[w][h] ? !0 : !1;
                        else K = !0;
                    }
                    if (r && H && J && K) break;
                    w++;
                }
                if (b && 0 < b.length) for (h = 0; h < b.length; h++) b[h].calculateStripLinesThicknessInValues(), b[h].calculateBreaksInPixels();
                if (c && 0 < c.length) for (h = 0; h < c.length; h++) c[h].calculateStripLinesThicknessInValues(), c[h].calculateBreaksInPixels();
                if (a && 0 < a.length) for (h = 0; h < a.length; h++) a[h].calculateStripLinesThicknessInValues(), a[h].calculateBreaksInPixels();
                if (d && 0 < d.length) for (h = 0; h < d.length; h++) d[h].calculateStripLinesThicknessInValues(), d[h].calculateBreaksInPixels();
            }
        };
        E.render = function (a, d, b, c, e) {
            var f = a[0] ? a[0].chart : d[0].chart;
            e = f.ctx;
            f.alignVerticalAxes && f.alignVerticalAxes();
            e.save();
            e.beginPath();
            a[0] && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            d[0] && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height);
            e.clip();
            if (a && 0 < a.length) for (var g = 0; g < a.length; g++) a[g].renderLabelsTicksAndTitle();
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderLabelsTicksAndTitle();
            e.restore();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderLabelsTicksAndTitle();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderLabelsTicksAndTitle();
            f.preparePlotArea();
            f = f.plotArea;
            e.save();
            e.beginPath();
            e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
            e.clip();
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].renderInterlacedColors();
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderInterlacedColors();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderInterlacedColors();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderInterlacedColors();
            e.restore();
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].renderGrid(), w && (a[g].createMask(), a[g].renderBreaksBackground());
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderGrid(), w && (d[g].createMask(), d[g].renderBreaksBackground());
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderGrid(), w && (b[g].createMask(), b[g].renderBreaksBackground());
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderGrid(), w && (c[g].createMask(), c[g].renderBreaksBackground());
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].renderAxisLine();
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderAxisLine();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderAxisLine();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderAxisLine();
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].renderStripLinesOfThicknessType("pixel");
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].renderStripLinesOfThicknessType("pixel");
        };
        E.prototype.calculateStripLinesThicknessInValues = function () {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        d = this.getApparentDifference(d, b);
                    this.stripLines[a].value = this.logarithmic
                        ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) / Math.log(d))
                        : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2;
                    this.stripLines[a].thickness = d;
                    this.stripLines[a]._thicknessType = "value";
                }
        };
        E.prototype.calculateBreaksSizeInValues = function () {
            for (
                var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width,
                    d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                    b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum),
                    c = this.scaleBreaks && !s(this.scaleBreaks.options.spacing),
                    e,
                    f = 0;
                f < d.length;
                f++
            )
                (e = c || !s(d[f].options.spacing)),
                    (d[f].spacing = Ra(d[f].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0),
                    (d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / b)),
                    this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size));
        };
        E.prototype.calculateBreaksInPixels = function () {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++)
                    a[d].endValue < this.conversionParameters.minimum ||
                        (s(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d),
                        a[d].startValue >= this.conversionParameters.minimum && ((a[d].startPixel = this.convertValueToPixel(a[d].startValue)), (this.scaleBreaks.lastBreakIndex = d)),
                        a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
            }
        };
        E.prototype.renderLabelsTicksAndTitle = function () {
            var a = this,
                d = !1,
                b = 0,
                c = 0,
                e = 1,
                f = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, g, l = this.viewportMaximum, s = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            n = this._labels[k];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum ||
                                !(k === this._labels.length - 1 || g < (Math.log(l / n.position) * s) / e) ||
                                (b.push(n), (l = n.position), (g = n.textBlock.width * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
                        }
                        this._labels = b;
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            (n = this._labels[k]),
                                n.position < this.viewportMinimum || ((g = n.textBlock.width * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))), (b += g));
                        b > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0);
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], m, l = this.viewportMaximum, s = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            n = this._labels[k];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum ||
                                !(k === this._labels.length - 1 || m < Math.log(l / n.position) * s) ||
                                (b.push(n), (l = n.position), (m = n.textBlock.height * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
                        }
                        this._labels = b;
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            (n = this._labels[k]),
                                n.position < this.viewportMinimum || ((m = n.textBlock.height * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))), (c += m));
                        c > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0);
                    }
            }
            this.logarithmic &&
                !this.equidistantInterval &&
                this.labelAutoFit &&
                this._labels.sort(function (a, b) {
                    return a.position - b.position;
                });
            var k = 0,
                n,
                q;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((q = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(c, q.y << 0),
                                this.ctx.lineTo(c, (q.y + this.tickLength) << 0),
                                this.ctx.stroke()),
                            (d && 0 !== f++ % 2 && this.labelAutoFit) ||
                                (0 === n.textBlock.angle
                                    ? ((q.x -= n.textBlock.width / 2),
                                      (q.y =
                                          "inside" === this.labelPlacement
                                              ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2)
                                              : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5))
                                    : ((q.x =
                                          "inside" === this.labelPlacement
                                              ? 0 > this.labelAngle
                                                  ? q.x
                                                  : q.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : q.x - (0 > this.labelAngle ? n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0)),
                                      (q.y =
                                          "inside" === this.labelPlacement
                                              ? 0 > this.labelAngle
                                                  ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5
                                                  : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) + 5)
                                              : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) - 5 : 5))),
                                (n.textBlock.x = q.x),
                                (n.textBlock.y = q.y)));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((q = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(b, q.y << 0);
                                    a.ctx.lineTo(b, (q.y - a.tickLength) << 0);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2),
                    (this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((q = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(c, q.y << 0),
                                this.ctx.lineTo(c, (q.y - this.tickLength) << 0),
                                this.ctx.stroke()),
                            (d && 0 !== f++ % 2 && this.labelAutoFit) ||
                                (0 === n.textBlock.angle
                                    ? ((q.x -= n.textBlock.width / 2),
                                      (q.y =
                                          "inside" === this.labelPlacement
                                              ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)))
                                    : ((q.x =
                                          "inside" === this.labelPlacement
                                              ? 0 < this.labelAngle
                                                  ? q.x
                                                  : q.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : q.x + (n.textBlock.height - this.labelFontSize) * Math.sin((Math.PI / 180) * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0)),
                                      (q.y =
                                          "inside" === this.labelPlacement
                                              ? 0 < this.labelAngle
                                                  ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                                  : q.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : q.y -
                                                (("inside" === this.tickPlacement ? 0 : this.tickLength) +
                                                    ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle) +
                                                        (0 < this.labelAngle ? n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) : 0))))),
                                (n.textBlock.x = q.x),
                                (n.textBlock.y = q.y)));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((q = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(b, q.y << 0);
                                    a.ctx.lineTo(b, (q.y + a.tickLength) << 0);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2),
                    (this._titleTextBlock.y = this.bounds.y1 + 1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("left" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((q = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(q.x << 0, c),
                                this.ctx.lineTo((q.x - this.tickLength) << 0, c),
                                this.ctx.stroke()),
                            (d && 0 !== f++ % 2 && this.labelAutoFit) ||
                                (0 === this.labelAngle
                                    ? ((n.textBlock.y = q.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : q.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5))
                                    : ((n.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : 0 < this.labelAngle
                                              ? q.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5
                                              : q.x -
                                                n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) +
                                                (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                ("inside" === this.tickPlacement ? 0 : this.tickLength)))));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((q = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(q.x << 0, b);
                                    a.ctx.lineTo((q.x + a.tickLength) << 0, b);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.bounds.x1 + 1),
                    (this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("right" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((q = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(q.x << 0, c),
                                this.ctx.lineTo((q.x + this.tickLength) << 0, c),
                                this.ctx.stroke()),
                            (d && 0 !== f++ % 2 && this.labelAutoFit) ||
                                (0 === this.labelAngle
                                    ? ((n.textBlock.y = q.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement ? q.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5))
                                    : ((n.textBlock.y =
                                          "inside" === this.labelPlacement
                                              ? q.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)
                                              : 0 > this.labelAngle
                                              ? q.y
                                              : q.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos((Math.PI / 180) * this.labelAngle)),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? q.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5
                                              : 0 < this.labelAngle
                                              ? q.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength)
                                              : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5))));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((q = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(q.x << 0, b);
                                    a.ctx.lineTo((q.x - a.tickLength) << 0, b);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.bounds.x2 - 1),
                    (this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            }
            f = 0;
            if ("inside" === this.labelPlacement)
                this.chart.addEventListener(
                    "dataAnimationEnd",
                    function () {
                        for (k = 0; k < a._labels.length; k++)
                            (n = a._labels[k]), n.position < a.viewportMinimum || n.position > a.viewportMaximum || (d && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(!0), a.ctx.restore());
                    },
                    this
                );
            else for (k = 0; k < this._labels.length; k++) (n = this._labels[k]), n.position < this.viewportMinimum || n.position > this.viewportMaximum || (d && 0 !== f++ % 2 && this.labelAutoFit) || n.textBlock.render(!0);
        };
        E.prototype.renderInterlacedColors = function () {
            var a = this.chart.plotArea.ctx,
                d,
                b,
                c = this.chart.plotArea,
                e = 0;
            d = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
                    d
                        ? ((d = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
                          (b = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position)),
                          a.fillRect(Math.min(b.x, d.x), c.y1, Math.abs(b.x - d.x), Math.abs(c.y1 - c.y2)),
                          (d = !1))
                        : (d = !0);
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
                    d
                        ? ((b = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
                          (d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position)),
                          a.fillRect(c.x1, Math.min(b.y, d.y), Math.abs(c.x1 - c.x2), Math.abs(d.y - b.y)),
                          (d = !1))
                        : (d = !0);
            a.beginPath();
        };
        E.prototype.renderStripLinesOfThicknessType = function (a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                for (var d = this, b, c = 0, e = 0, f = !1, g = !1, l = [], w = [], g = !1, c = 0; c < this.stripLines.length; c++) {
                    var k = this.stripLines[c];
                    k._thicknessType === a &&
                        (("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum || s(k.value) || isNaN(this.range))) ||
                            ("value" === a &&
                                ((k.startValue <= this.viewportMinimum && k.endValue <= this.viewportMinimum) ||
                                    (k.startValue >= this.viewportMaximum && k.endValue >= this.viewportMaximum) ||
                                    s(k.startValue) ||
                                    s(k.endValue) ||
                                    isNaN(this.range))) ||
                            l.push(k));
                }
                for (c = 0; c < this._stripLineLabels.length; c++)
                    if (((k = this.stripLines[c]), (b = this._stripLineLabels[c]), !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range)))) {
                        a = this.getPixelCoordinatesOnAxis(b.position);
                        if ("outside" === b.stripLine.labelPlacement)
                            if ((k && ((this.ctx.strokeStyle = k.color), "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position)) {
                                var m = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(m, a.y << 0);
                                this.ctx.lineTo(m, (a.y + this.tickLength) << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle
                                    ? ((a.x -= b.textBlock.width / 2), (a.y += this.tickLength + b.textBlock.fontSize / 2))
                                    : ((a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0),
                                      (a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) - 5 : 5)));
                            } else
                                "top" === this._position
                                    ? ((m = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(m, a.y << 0),
                                      this.ctx.lineTo(m, (a.y - this.tickLength) << 0),
                                      this.ctx.stroke(),
                                      0 === this.labelAngle
                                          ? ((a.x -= b.textBlock.width / 2), (a.y -= this.tickLength + b.textBlock.height))
                                          : ((a.x +=
                                                (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                (0 < this.labelAngle ? b.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0)),
                                            (a.y -= this.tickLength + (b.textBlock.height * Math.cos((Math.PI / 180) * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) : 0)))))
                                    : "left" === this._position
                                    ? ((m = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(a.x << 0, m),
                                      this.ctx.lineTo((a.x - this.tickLength) << 0, m),
                                      this.ctx.stroke(),
                                      0 === this.labelAngle
                                          ? (a.x = a.x - b.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - this.tickLength - 5)
                                          : ((a.y -= b.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)),
                                            (a.x =
                                                0 < this.labelAngle
                                                    ? a.x - b.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - this.tickLength - 5
                                                    : a.x -
                                                      b.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) +
                                                      (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                      this.tickLength)))
                                    : "right" === this._position &&
                                      ((m = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(a.x << 0, m),
                                      this.ctx.lineTo((a.x + this.tickLength) << 0, m),
                                      this.ctx.stroke(),
                                      0 === this.labelAngle
                                          ? (a.x = a.x + this.tickLength + 5)
                                          : ((a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos((Math.PI / 180) * this.labelAngle)),
                                            (a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin((Math.PI / 180) * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5)));
                        else
                            (b.textBlock.angle = -90),
                                "bottom" === this._position
                                    ? ((b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3),
                                      b.textBlock.measureText(),
                                      a.x - b.textBlock.height > this.chart.plotArea.x1
                                          ? s(k.startValue)
                                              ? (a.x -= b.textBlock.height - b.textBlock.fontSize / 2)
                                              : (a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3)
                                          : ((b.textBlock.angle = 90), s(k.startValue) ? (a.x += b.textBlock.height - b.textBlock.fontSize / 2) : (a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3)),
                                      (a.y =
                                          -90 === b.textBlock.angle
                                              ? "near" === b.stripLine.labelAlign
                                                  ? this.chart.plotArea.y2 - 3
                                                  : "center" === b.stripLine.labelAlign
                                                  ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2
                                                  : this.chart.plotArea.y1 + b.textBlock.width + 3
                                              : "near" === b.stripLine.labelAlign
                                              ? this.chart.plotArea.y2 - b.textBlock.width - 3
                                              : "center" === b.stripLine.labelAlign
                                              ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2
                                              : this.chart.plotArea.y1 + 3))
                                    : "top" === this._position
                                    ? ((b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3),
                                      b.textBlock.measureText(),
                                      a.x - b.textBlock.height > this.chart.plotArea.x1
                                          ? s(k.startValue)
                                              ? (a.x -= b.textBlock.height - b.textBlock.fontSize / 2)
                                              : (a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3)
                                          : ((b.textBlock.angle = 90), s(k.startValue) ? (a.x += b.textBlock.height - b.textBlock.fontSize / 2) : (a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3)),
                                      (a.y =
                                          -90 === b.textBlock.angle
                                              ? "near" === b.stripLine.labelAlign
                                                  ? this.chart.plotArea.y1 + b.textBlock.width + 3
                                                  : "center" === b.stripLine.labelAlign
                                                  ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2
                                                  : this.chart.plotArea.y2 - 3
                                              : "near" === b.stripLine.labelAlign
                                              ? this.chart.plotArea.y1 + 3
                                              : "center" === b.stripLine.labelAlign
                                              ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2
                                              : this.chart.plotArea.y2 - b.textBlock.width - 3))
                                    : "left" === this._position
                                    ? ((b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3),
                                      (b.textBlock.angle = 0),
                                      b.textBlock.measureText(),
                                      a.y - b.textBlock.height > this.chart.plotArea.y1
                                          ? s(k.startValue)
                                              ? (a.y -= b.textBlock.height - b.textBlock.fontSize / 2)
                                              : (a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3)
                                          : a.y - b.textBlock.height < this.chart.plotArea.y2
                                          ? (a.y += b.textBlock.fontSize / 2 + 3)
                                          : s(k.startValue)
                                          ? (a.y -= b.textBlock.height - b.textBlock.fontSize / 2)
                                          : (a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3),
                                      (a.x =
                                          "near" === b.stripLine.labelAlign
                                              ? this.chart.plotArea.x1 + 3
                                              : "center" === b.stripLine.labelAlign
                                              ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2
                                              : this.chart.plotArea.x2 - b.textBlock.width - 3))
                                    : "right" === this._position &&
                                      ((b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3),
                                      (b.textBlock.angle = 0),
                                      b.textBlock.measureText(),
                                      a.y - +b.textBlock.height > this.chart.plotArea.y1
                                          ? s(k.startValue)
                                              ? (a.y -= b.textBlock.height - b.textBlock.fontSize / 2)
                                              : (a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3)
                                          : a.y - b.textBlock.height < this.chart.plotArea.y2
                                          ? (a.y += b.textBlock.fontSize / 2 + 3)
                                          : s(k.startValue)
                                          ? (a.y -= b.textBlock.height - b.textBlock.fontSize / 2)
                                          : (a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3),
                                      (a.x =
                                          "near" === b.stripLine.labelAlign
                                              ? this.chart.plotArea.x2 - b.textBlock.width - 3
                                              : "center" === b.stripLine.labelAlign
                                              ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2
                                              : this.chart.plotArea.x1 + 3));
                        b.textBlock.x = a.x;
                        b.textBlock.y = a.y;
                        w.push(b);
                    }
                if (!g) {
                    g = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (c = 0; c < l.length; c++)
                        (k = l[c]),
                            k.showOnTop
                                ? f ||
                                  ((f = !0),
                                  this.chart.addEventListener(
                                      "dataAnimationIterationEnd",
                                      function () {
                                          this.ctx.save();
                                          this.ctx.beginPath();
                                          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                                          this.ctx.clip();
                                          for (e = 0; e < l.length; e++) (k = l[e]), k.showOnTop && k.render();
                                          this.ctx.restore();
                                      },
                                      k
                                  ))
                                : k.render();
                    for (c = 0; c < w.length; c++)
                        (b = w[c]),
                            b.stripLine.showOnTop
                                ? g ||
                                  ((g = !0),
                                  this.chart.addEventListener(
                                      "dataAnimationIterationEnd",
                                      function () {
                                          for (e = 0; e < w.length; e++)
                                              (b = w[e]),
                                                  "inside" === b.stripLine.labelPlacement &&
                                                      b.stripLine.showOnTop &&
                                                      (d.ctx.save(),
                                                      d.ctx.beginPath(),
                                                      d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height),
                                                      d.ctx.clip(),
                                                      b.textBlock.render(!0),
                                                      d.ctx.restore());
                                      },
                                      b.textBlock
                                  ))
                                : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                    this.ctx.restore();
                    g = !0;
                }
                if (g) for (g = !1, c = 0; c < w.length; c++) (b = w[c]), "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
            }
        };
        E.prototype.renderBreaksBackground = function () {
            this.chart._breaksCanvas &&
                this.scaleBreaks &&
                0 < this.scaleBreaks._appliedBreaks.length &&
                this.maskCanvas &&
                (this.chart._breaksCanvasCtx.save(),
                this.chart._breaksCanvasCtx.beginPath(),
                this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height),
                this.chart._breaksCanvasCtx.clip(),
                this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height),
                this.chart._breaksCanvasCtx.restore());
        };
        E.prototype.createMask = function () {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                w ? ((this.maskCanvas = ta(this.chart.width, this.chart.height)), (this.maskCtx = this.maskCanvas.getContext("2d"))) : ((this.maskCanvas = this.chart.plotArea.canvas), (this.maskCtx = this.chart.plotArea.ctx));
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum || a[d].startValue > this.viewportMaximum || isNaN(this.range) || a[d].render(this.maskCtx);
                this.maskCtx.restore();
            }
        };
        E.prototype.renderCrosshair = function (a, d) {
            isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, d), this.crosshair.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this, value: this.crosshair.value }, this));
        };
        E.prototype.showCrosshair = function (a) {
            s(a) ||
                a < this.viewportMinimum ||
                a > this.viewportMaximum ||
                ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        E.prototype.renderGrid = function () {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var d,
                    b = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(N(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (c = 0; c < this._labels.length; c++)
                        this._labels[c].position < this.viewportMinimum ||
                            this._labels[c].position > this.viewportMaximum ||
                            this._labels[c].breaksLabelType ||
                            (a.beginPath(), (d = this.getPixelCoordinatesOnAxis(this._labels[c].position)), (d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0), a.moveTo(d, b.y1 << 0), a.lineTo(d, b.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var c = 0; c < this._labels.length; c++)
                        this._labels[c].position < this.viewportMinimum ||
                            this._labels[c].position > this.viewportMaximum ||
                            this._labels[c].breaksLabelType ||
                            (a.beginPath(), (d = this.getPixelCoordinatesOnAxis(this._labels[c].position)), (d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0), a.moveTo(b.x1 << 0, d), a.lineTo(b.x2 << 0, d), a.stroke());
                a.restore();
            }
        };
        E.prototype.renderAxisLine = function () {
            var a = this.chart.ctx,
                d = w ? this.chart._preRenderCtx : a,
                b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                e,
                f;
            d.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? ((e = this.lineCoordinates.x2), (f = this.lineCoordinates.x1)) : ((e = this.lineCoordinates.x1), (f = this.lineCoordinates.x2));
                    d.lineWidth = this.lineThickness;
                    d.strokeStyle = this.lineColor ? this.lineColor : "black";
                    d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                    var g = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    d.beginPath();
                    if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                        if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                        else
                            for (var l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++)
                                d.moveTo(e, g), d.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel + b, g), (e = this.scaleBreaks._appliedBreaks[l].endPixel + c);
                    e && (d.moveTo(e, g), d.lineTo(f, g));
                    d.stroke();
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? ((e = this.lineCoordinates.y1), (f = this.lineCoordinates.y2)) : ((e = this.lineCoordinates.y2), (f = this.lineCoordinates.y1));
                d.lineWidth = this.lineThickness;
                d.strokeStyle = this.lineColor;
                d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                g = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                d.beginPath();
                if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                    if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                    else
                        for (l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++)
                            d.moveTo(g, e), d.lineTo(g, this.scaleBreaks._appliedBreaks[l].startPixel + c), (e = this.scaleBreaks._appliedBreaks[l].endPixel + b);
                e && (d.moveTo(g, e), d.lineTo(g, f));
                d.stroke();
            }
            w &&
                (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
                this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
                d.clearRect(0, 0, this.chart.width, this.chart.height));
            d.restore();
        };
        E.prototype.getPixelCoordinatesOnAxis = function (a) {
            var d = {};
            if ("bottom" === this._position || "top" === this._position) (d.x = this.convertValueToPixel(a)), (d.y = this.lineCoordinates.y1);
            if ("left" === this._position || "right" === this._position) (d.y = this.convertValueToPixel(a)), (d.x = this.lineCoordinates.x2);
            return d;
        };
        E.prototype.convertPixelToValue = function (a) {
            if ("undefined" === typeof a) return null;
            var d = 0,
                b = 0,
                c,
                d = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if ((b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position)) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[b].startValue < this.conversionParameters.minimum) {
                                    if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) < e[b].endValue) {
                                        a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                        break;
                                    } else
                                        (a *= e[b].endValue / this.conversionParameters.minimum / Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue))),
                                            (c /= Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)));
                                    d = !1;
                                } else if (c > e[b].startValue / this.conversionParameters.minimum) {
                                    c /= e[b].startValue / this.conversionParameters.minimum;
                                    if (c < e[b].size) {
                                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) / c;
                                        break;
                                    } else a *= e[b].endValue / e[b].startValue / e[b].size;
                                    c /= e[b].size;
                                    d = !1;
                                } else break;
                            else if (c > e[b].startValue / e[b - 1].endValue) {
                                c /= e[b].startValue / e[b - 1].endValue;
                                if (c < e[b].size) {
                                    a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) / c;
                                    break;
                                } else a *= e[b].endValue / e[b].startValue / e[b].size;
                                c /= e[b].size;
                            } else break;
                    }
                else
                    for (b = e.length - 1; 0 <= b; b--)
                        if (!(e[b].startValue > this.conversionParameters.minimum))
                            if (d)
                                if (e[b].endValue > this.conversionParameters.minimum) {
                                    if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) > e[b].startValue) {
                                        a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                        break;
                                    } else
                                        (a *= (e[b].startValue / this.conversionParameters.minimum) * Math.pow(e[b].size, Math.log(e[b].startValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)) * c),
                                            (c *= Math.pow(e[b].size, Math.log(this.conversionParameters.minimum / e[b].startValue) / Math.log(e[b].endValue / e[b].startValue)));
                                    d = !1;
                                } else if (c < e[b].endValue / this.conversionParameters.minimum) {
                                    c /= e[b].endValue / this.conversionParameters.minimum;
                                    if (c > 1 / e[b].size) {
                                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) * c;
                                        break;
                                    } else a /= e[b].endValue / e[b].startValue / e[b].size;
                                    c *= e[b].size;
                                    d = !1;
                                } else break;
                            else if (c < e[b].endValue / e[b + 1].startValue) {
                                c /= e[b].endValue / e[b + 1].startValue;
                                if (c > 1 / e[b].size) {
                                    a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) * c;
                                    break;
                                } else a /= e[b].endValue / e[b].startValue / e[b].size;
                                c *= e[b].size;
                            } else break;
                d = a * this.viewportMinimum;
            } else {
                a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if ((b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position)) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[b].startValue < this.conversionParameters.minimum) {
                                    if (e[b].size && this.conversionParameters.minimum + (c * (e[b].endValue - e[b].startValue)) / e[b].size < e[b].endValue) {
                                        a = 0 >= e[b].size ? 0 : (c * (e[b].endValue - e[b].startValue)) / e[b].size;
                                        break;
                                    } else
                                        (a += e[b].endValue - this.conversionParameters.minimum - (e[b].size * (e[b].endValue - this.conversionParameters.minimum)) / (e[b].endValue - e[b].startValue)),
                                            (c -= (e[b].size * (e[b].endValue - this.conversionParameters.minimum)) / (e[b].endValue - e[b].startValue));
                                    d = !1;
                                } else if (c > e[b].startValue - this.conversionParameters.minimum) {
                                    c -= e[b].startValue - this.conversionParameters.minimum;
                                    if (c < e[b].size) {
                                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                        break;
                                    } else a += e[b].endValue - e[b].startValue - e[b].size;
                                    c -= e[b].size;
                                    d = !1;
                                } else break;
                            else if (c > e[b].startValue - e[b - 1].endValue) {
                                c -= e[b].startValue - e[b - 1].endValue;
                                if (c < e[b].size) {
                                    a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                    break;
                                } else a += e[b].endValue - e[b].startValue - e[b].size;
                                c -= e[b].size;
                            } else break;
                    }
                else
                    for (b = e.length - 1; 0 <= b; b--)
                        if (!(e[b].startValue > this.conversionParameters.minimum))
                            if (d)
                                if (e[b].endValue > this.conversionParameters.minimum)
                                    if (e[b].size && this.conversionParameters.minimum + (c * (e[b].endValue - e[b].startValue)) / e[b].size > e[b].startValue) {
                                        a = 0 >= e[b].size ? 0 : (c * (e[b].endValue - e[b].startValue)) / e[b].size;
                                        break;
                                    } else
                                        (a += e[b].startValue - this.conversionParameters.minimum + (e[b].size * (this.conversionParameters.minimum - e[b].startValue)) / (e[b].endValue - e[b].startValue)),
                                            (c += (e[b].size * (this.conversionParameters.minimum - e[b].startValue)) / (e[b].endValue - e[b].startValue)),
                                            (d = !1);
                                else if (c < e[b].endValue - this.conversionParameters.minimum) {
                                    c -= e[b].endValue - this.conversionParameters.minimum;
                                    if (c > -1 * e[b].size) {
                                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                                        break;
                                    } else a -= e[b].endValue - e[b].startValue - e[b].size;
                                    c += e[b].size;
                                    d = !1;
                                } else break;
                            else if (c < e[b].endValue - e[b + 1].startValue) {
                                c -= e[b].endValue - e[b + 1].startValue;
                                if (c > -1 * e[b].size) {
                                    a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                                    break;
                                } else a -= e[b].endValue - e[b].startValue - e[b].size;
                                c += e[b].size;
                            } else break;
                d = this.conversionParameters.minimum + a;
            }
            return d;
        };
        E.prototype.convertValueToPixel = function (a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic
                ? (this.conversionParameters.reference + (this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum)) / this.conversionParameters.lnLogarithmBase + 0.5) << 0
                : "axisX" === this.type
                ? (this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5) << 0
                : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        E.prototype.getApparentDifference = function (a, d, b, c) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                b = s(b) ? d / a : b;
                for (var f = 0; f < e.length && !(d < e[f].startValue); f++)
                    a > e[f].endValue ||
                        (a <= e[f].startValue && d >= e[f].endValue
                            ? (b = (b / e[f].endValue) * e[f].startValue * e[f].size)
                            : a >= e[f].startValue && d >= e[f].endValue
                            ? (b = (b / e[f].endValue) * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)))
                            : a <= e[f].startValue && d <= e[f].endValue
                            ? (b = (b / d) * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)))
                            : !c && a > e[f].startValue && d < e[f].endValue && (b = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))));
            } else
                for (b = s(b) ? Math.abs(d - a) : b, f = 0; f < e.length && !(d < e[f].startValue); f++)
                    a > e[f].endValue ||
                        (a <= e[f].startValue && d >= e[f].endValue
                            ? (b = b - e[f].endValue + e[f].startValue + e[f].size)
                            : a > e[f].startValue && d >= e[f].endValue
                            ? (b = b - e[f].endValue + a + (e[f].size * (e[f].endValue - a)) / (e[f].endValue - e[f].startValue))
                            : a <= e[f].startValue && d < e[f].endValue
                            ? (b = b - d + e[f].startValue + (e[f].size * (d - e[f].startValue)) / (e[f].endValue - e[f].startValue))
                            : !c && a > e[f].startValue && d < e[f].endValue && (b = a + (e[f].size * (d - a)) / (e[f].endValue - e[f].startValue)));
            return b;
        };
        E.prototype.setViewPortRange = function (a, d) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
        };
        E.prototype.getXValueAt = function (a) {
            if (!a) return null;
            var d = null;
            "left" === this._position ? (d = this.convertPixelToValue(a.y)) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
            return d;
        };
        E.prototype.calculateValueToPixelConversionParameters = function (a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var d = { pixelPerUnit: null, minimum: null, reference: null },
                b = this.lineCoordinates.width,
                c = this.lineCoordinates.height,
                b = "bottom" === this._position || "top" === this._position ? b : c,
                c = Math.abs(this.range);
            if (this.logarithmic)
                for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
                    this.viewportMinimum > a[e].endValue ||
                        (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue
                            ? (b = 0)
                            : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((c = (c / a[e].endValue) * a[e].startValue), (b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b - Math.min(a[e].spacing, 0.1 * b)))
                            : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((c = (c / a[e].endValue) * this.viewportMinimum),
                              (b =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? b * (1 - ((parseFloat(a[e].spacing) / 100) * Math.log(a[e].endValue / this.viewportMinimum)) / Math.log(a[e].endValue / a[e].startValue))
                                      : b - (Math.min(a[e].spacing, 0.1 * b) * Math.log(a[e].endValue / this.viewportMinimum)) / Math.log(a[e].endValue / a[e].startValue)))
                            : this.viewportMinimum <= a[e].startValue &&
                              this.viewportMaximum < a[e].endValue &&
                              ((c = (c / this.viewportMaximum) * a[e].startValue),
                              (b =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? b * (1 - ((parseFloat(a[e].spacing) / 100) * Math.log(this.viewportMaximum / a[e].startValue)) / Math.log(a[e].endValue / a[e].startValue))
                                      : b - (Math.min(a[e].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[e].startValue)) / Math.log(a[e].endValue / a[e].startValue))));
            else
                for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
                    this.viewportMinimum > a[e].endValue ||
                        (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue
                            ? (b = 0)
                            : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((c = c - a[e].endValue + a[e].startValue), (b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b - Math.min(a[e].spacing, 0.1 * b)))
                            : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((c = c - a[e].endValue + this.viewportMinimum),
                              (b =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? b * (1 - ((parseFloat(a[e].spacing) / 100) * (a[e].endValue - this.viewportMinimum)) / (a[e].endValue - a[e].startValue))
                                      : b - (Math.min(a[e].spacing, 0.1 * b) * (a[e].endValue - this.viewportMinimum)) / (a[e].endValue - a[e].startValue)))
                            : this.viewportMinimum <= a[e].startValue &&
                              this.viewportMaximum < a[e].endValue &&
                              ((c = c - this.viewportMaximum + a[e].startValue),
                              (b =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? b * (1 - ((parseFloat(a[e].spacing) / 100) * (this.viewportMaximum - a[e].startValue)) / (a[e].endValue - a[e].startValue))
                                      : b - (Math.min(a[e].spacing, 0.1 * b) * (this.viewportMaximum - a[e].startValue)) / (a[e].endValue - a[e].startValue))));
            d.minimum = this.viewportMinimum;
            d.maximum = this.viewportMaximum;
            d.range = c;
            if ("bottom" === this._position || "top" === this._position)
                this.logarithmic
                    ? ((d.lnLogarithmBase = Math.log(this.logarithmBase)), (d.pixelPerUnit = ((this.reversed ? -1 : 1) * b * d.lnLogarithmBase) / Math.log(Math.abs(c))))
                    : (d.pixelPerUnit = ((this.reversed ? -1 : 1) * b) / Math.abs(c)),
                    (d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1);
            if ("left" === this._position || "right" === this._position)
                this.logarithmic
                    ? ((d.lnLogarithmBase = Math.log(this.logarithmBase)), (d.pixelPerUnit = ((this.reversed ? 1 : -1) * b * d.lnLogarithmBase) / Math.log(Math.abs(c))))
                    : (d.pixelPerUnit = ((this.reversed ? 1 : -1) * b) / Math.abs(c)),
                    (d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2);
            this.conversionParameters = d;
        };
        E.prototype.calculateAxisParameters = function () {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    b = !1;
                "bottom" === this._position || "top" === this._position ? ((this.maxWidth = a.width), (this.maxHeight = a.height)) : ((this.maxWidth = a.height), (this.maxHeight = a.width));
                var a = "axisX" === this.type ? ("xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70) : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth / a)),
                    e,
                    f,
                    g,
                    c = 0;
                !s(this.options.viewportMinimum) && !s(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum && (this.viewportMinimum = this.viewportMaximum = null);
                if (s(this.options.viewportMinimum) && !s(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (s(this.options.viewportMaximum) && !s(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                        if (
                            ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) ||
                                (!s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue) ||
                                (!s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue)) &&
                            ((!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue) ||
                                (!s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue) ||
                                (!s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue))
                        ) {
                            this.scaleBreaks._appliedBreaks.splice(c, 1);
                            break;
                        }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length) for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (b = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === f - e && ((c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), (f += c), (e -= c));
                    Infinity !== this.dataInfo.minDiff ? (g = this.dataInfo.minDiff) : 1 < f - e ? (g = 0.5 * Math.abs(f - e)) : ((g = 1), b && (d = !0));
                } else
                    "axisY" === this.type &&
                        ((e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                        (f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                        isFinite(e) || isFinite(f)
                            ? isFinite(e)
                                ? isFinite(f) || (f = e)
                                : (e = f)
                            : ((f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval), (e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity)),
                        0 === e && 0 === f
                            ? ((f += 9), (e = 0))
                            : 0 === f - e
                            ? ((c = Math.min(Math.abs(0.01 * Math.abs(f)), 5)), (f += c), (e -= c))
                            : e > f
                            ? ((c = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5)), 0 <= f ? (e = f - c) : (f = isFinite(e) ? e + c : 0))
                            : ((c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05)), 0 !== f && (f += c), 0 !== e && (e -= c)),
                        (g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1),
                        this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0),
                        this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
                c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && b) {
                    this.intervalType ||
                        (c / 1 <= a
                            ? ((this.interval = 1), (this.intervalType = "millisecond"))
                            : c / 2 <= a
                            ? ((this.interval = 2), (this.intervalType = "millisecond"))
                            : c / 5 <= a
                            ? ((this.interval = 5), (this.intervalType = "millisecond"))
                            : c / 10 <= a
                            ? ((this.interval = 10), (this.intervalType = "millisecond"))
                            : c / 20 <= a
                            ? ((this.interval = 20), (this.intervalType = "millisecond"))
                            : c / 50 <= a
                            ? ((this.interval = 50), (this.intervalType = "millisecond"))
                            : c / 100 <= a
                            ? ((this.interval = 100), (this.intervalType = "millisecond"))
                            : c / 200 <= a
                            ? ((this.interval = 200), (this.intervalType = "millisecond"))
                            : c / 250 <= a
                            ? ((this.interval = 250), (this.intervalType = "millisecond"))
                            : c / 300 <= a
                            ? ((this.interval = 300), (this.intervalType = "millisecond"))
                            : c / 400 <= a
                            ? ((this.interval = 400), (this.intervalType = "millisecond"))
                            : c / 500 <= a
                            ? ((this.interval = 500), (this.intervalType = "millisecond"))
                            : c / (1 * R.secondDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "second"))
                            : c / (2 * R.secondDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "second"))
                            : c / (5 * R.secondDuration) <= a
                            ? ((this.interval = 5), (this.intervalType = "second"))
                            : c / (10 * R.secondDuration) <= a
                            ? ((this.interval = 10), (this.intervalType = "second"))
                            : c / (15 * R.secondDuration) <= a
                            ? ((this.interval = 15), (this.intervalType = "second"))
                            : c / (20 * R.secondDuration) <= a
                            ? ((this.interval = 20), (this.intervalType = "second"))
                            : c / (30 * R.secondDuration) <= a
                            ? ((this.interval = 30), (this.intervalType = "second"))
                            : c / (1 * R.minuteDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "minute"))
                            : c / (2 * R.minuteDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "minute"))
                            : c / (5 * R.minuteDuration) <= a
                            ? ((this.interval = 5), (this.intervalType = "minute"))
                            : c / (10 * R.minuteDuration) <= a
                            ? ((this.interval = 10), (this.intervalType = "minute"))
                            : c / (15 * R.minuteDuration) <= a
                            ? ((this.interval = 15), (this.intervalType = "minute"))
                            : c / (20 * R.minuteDuration) <= a
                            ? ((this.interval = 20), (this.intervalType = "minute"))
                            : c / (30 * R.minuteDuration) <= a
                            ? ((this.interval = 30), (this.intervalType = "minute"))
                            : c / (1 * R.hourDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "hour"))
                            : c / (2 * R.hourDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "hour"))
                            : c / (3 * R.hourDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "hour"))
                            : c / (6 * R.hourDuration) <= a
                            ? ((this.interval = 6), (this.intervalType = "hour"))
                            : c / (1 * R.dayDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "day"))
                            : c / (2 * R.dayDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "day"))
                            : c / (4 * R.dayDuration) <= a
                            ? ((this.interval = 4), (this.intervalType = "day"))
                            : c / (1 * R.weekDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "week"))
                            : c / (2 * R.weekDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "week"))
                            : c / (3 * R.weekDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "week"))
                            : c / (1 * R.monthDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "month"))
                            : c / (2 * R.monthDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "month"))
                            : c / (3 * R.monthDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "month"))
                            : c / (6 * R.monthDuration) <= a
                            ? ((this.interval = 6), (this.intervalType = "month"))
                            : ((this.interval = c / (1 * R.yearDuration) <= a ? 1 : c / (2 * R.yearDuration) <= a ? 2 : c / (4 * R.yearDuration) <= a ? 4 : Math.floor(E.getNiceNumber(c / (a - 1), !0) / R.yearDuration)),
                              (this.intervalType = "year")));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - g / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = f + g / 2;
                    d
                        ? (this.autoValueFormatString = "MMM DD YYYY HH:mm")
                        : "year" === this.intervalType
                        ? (this.autoValueFormatString = "YYYY")
                        : "month" === this.intervalType
                        ? (this.autoValueFormatString = "MMM YYYY")
                        : "week" === this.intervalType
                        ? (this.autoValueFormatString = "MMM DD YYYY")
                        : "day" === this.intervalType
                        ? (this.autoValueFormatString = "MMM DD YYYY")
                        : "hour" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm TT")
                        : "minute" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm TT")
                        : "second" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm:ss TT")
                        : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
                } else {
                    this.intervalType = "number";
                    c = E.getNiceNumber(c, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : E.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - g / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + g / 2 : Math.ceil(f / this.interval) * this.interval;
                    0 === this.viewportMaximum &&
                        0 === this.viewportMinimum &&
                        (0 === this.options.viewportMinimum ? (this.viewportMaximum += 10) : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10),
                        this.options && "undefined" === typeof this.options.interval && (this.interval = E.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
                }
                if (null === this.minimum || null === this.maximum)
                    if (
                        ("axisX" === this.type
                            ? ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                              (f = null !== this.maximum ? this.maximum : this.dataInfo.max),
                              0 === f - e && ((c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), (f += c), (e -= c)),
                              (g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1))
                            : "axisY" === this.type &&
                              ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                              (f = null !== this.maximum ? this.maximum : this.dataInfo.max),
                              isFinite(e) || isFinite(f)
                                  ? 0 === e && 0 === f
                                      ? ((f += 9), (e = 0))
                                      : 0 === f - e
                                      ? ((c = Math.min(Math.abs(0.01 * Math.abs(f)), 5)), (f += c), (e -= c))
                                      : e > f
                                      ? ((c = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5)), 0 <= f ? (e = f - c) : (f = isFinite(e) ? e + c : 0))
                                      : ((c = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05)), 0 !== f && (f += c), 0 !== e && (e -= c))
                                  : ((f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval), (e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity)),
                              (g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1),
                              this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0),
                              this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)),
                        Math.abs(this.getApparentDifference(e, f, null, !0)),
                        "axisX" === this.type && b)
                    ) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum))
                            (this.minimum = e - g / 2),
                                (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum));
                        if (null === this.maximum || isNaN(this.maximum))
                            (this.maximum = f + g / 2),
                                (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum));
                    } else
                        (this.intervalType = this.valueType = "number"),
                            null === this.minimum &&
                                ((this.minimum = "axisX" === this.type ? e - g / 2 : Math.floor(e / this.interval) * this.interval),
                                (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum))),
                            null === this.maximum &&
                                ((this.maximum = "axisX" === this.type ? f + g / 2 : Math.ceil(f / this.interval) * this.interval),
                                (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum))),
                            0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? (this.maximum += 10) : 0 === this.options.maximum && (this.minimum -= 10));
                s(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                s(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition =
                    "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = E.generateValueFormatString(this.range, 2));
            }
        };
        E.prototype.calculateLogarithmicAxisParameters = function () {
            var a = this.chart.layoutManager.getFreeSpace(),
                d = Math.log(this.logarithmBase),
                b;
            "bottom" === this._position || "top" === this._position ? ((this.maxWidth = a.width), (this.maxHeight = a.height)) : ((this.maxWidth = a.height), (this.maxHeight = a.width));
            var a = "axisX" === this.type ? (500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100))) : Math.max(Math.floor(this.maxWidth / 50), 3),
                c,
                e,
                f,
                g;
            g = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (g = 0; g < this.scaleBreaks._appliedBreaks.length; g++)
                    if (
                        ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[g].startValue) ||
                            (!s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[g].startValue) ||
                            (!s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[g].startValue)) &&
                        ((!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[g].endValue) ||
                            (!s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[g].endValue) ||
                            (!s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[g].endValue))
                    ) {
                        this.scaleBreaks._appliedBreaks.splice(g, 1);
                        break;
                    }
            "axisX" === this.type
                ? ((c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                  (e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                  1 === e / c && ((g = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval)), (e *= g), (c /= g)),
                  (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? (e / c) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase))
                : "axisY" === this.type &&
                  ((c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                  (e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                  0 >= c && !isFinite(e) ? ((e = "undefined" === typeof this.options.interval ? 0 : this.options.interval), (c = 1)) : 0 >= c ? (c = e) : isFinite(e) || (e = c),
                  1 === c && 1 === e
                      ? ((e *= this.logarithmBase - 1 / this.logarithmBase), (c = 1))
                      : 1 === e / c
                      ? ((g = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5))), (e *= g), (c /= g))
                      : c > e
                      ? ((g = Math.min((c / e) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5))), 1 <= e ? (c = e / g) : (e = c * g))
                      : ((g = Math.min((e / c) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04))), 1 !== e && (e *= g), 1 !== c && (c /= g)),
                  (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? (e / c) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase),
                  this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1),
                  this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            g = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            var l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            this.intervalType = "number";
            g = Math.pow(this.logarithmBase, E.getNiceNumber(Math.abs(Math.log(g) / d), !1));
            this.options && 0 < this.options.interval ? (this.interval = this.options.interval) : ((this.interval = E.getNiceExponent(Math.log(g) / d / (a - 1), !0)), (b = E.getNiceNumber(l / (a - 1), !0)));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
            1 === this.viewportMaximum &&
                1 === this.viewportMinimum &&
                (1 === this.options.viewportMinimum ? (this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase) : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase),
                this.options &&
                    "undefined" === typeof this.options.interval &&
                    ((this.interval = E.getNiceExponent(Math.ceil(Math.log(g) / d) / (a - 1))), (b = E.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0))));
            if (null === this.minimum || null === this.maximum)
                "axisX" === this.type
                    ? ((c = null !== this.minimum ? this.minimum : this.dataInfo.min),
                      (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
                      1 === e / c && ((g = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval)), (e *= g), (c /= g)),
                      (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? (e / c) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase))
                    : "axisY" === this.type &&
                      ((c = null !== this.minimum ? this.minimum : this.dataInfo.min),
                      (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
                      isFinite(c) || isFinite(e)
                          ? 1 === c && 1 === e
                              ? ((e *= this.logarithmBase), (c /= this.logarithmBase))
                              : 1 === e / c
                              ? ((g = Math.pow(this.logarithmBase, this.interval)), (e *= g), (c /= g))
                              : c > e
                              ? ((g = Math.min(0.01 * (c / e), 5)), 1 <= e ? (c = e / g) : (e = c * g))
                              : ((g = Math.min((e / c) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04))), 1 !== e && (e *= g), 1 !== c && (c /= g))
                          : ((e = "undefined" === typeof this.options.interval ? 0 : this.options.interval), (c = 1)),
                      (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? (e / c) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase),
                      this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1),
                      this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)),
                    (this.intervalType = "number"),
                    null === this.minimum &&
                        ((this.minimum = "axisX" === this.type ? c / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d / this.interval))),
                        s(
                            null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum)
                                ? "undefined" === typeof this.sessionVariables.newViewportMinimum
                                    ? Infinity
                                    : this.sessionVariables.newViewportMinimum
                                : this.sessionVariables.viewportMinimum
                        ) ||
                            (this.minimum = Math.min(
                                this.minimum,
                                null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum)
                                    ? "undefined" === typeof this.sessionVariables.newViewportMinimum
                                        ? Infinity
                                        : this.sessionVariables.newViewportMinimum
                                    : this.sessionVariables.viewportMinimum
                            ))),
                    null === this.maximum &&
                        ((this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval))),
                        s(
                            null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum)
                                ? "undefined" === typeof this.sessionVariables.newViewportMaximum
                                    ? 0
                                    : this.sessionVariables.newViewportMaximum
                                : this.sessionVariables.viewportMaximum
                        ) ||
                            (this.maximum = Math.max(
                                this.maximum,
                                null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum)
                                    ? "undefined" === typeof this.sessionVariables.newViewportMaximum
                                        ? 0
                                        : this.sessionVariables.newViewportMaximum
                                    : this.sessionVariables.viewportMaximum
                            ))),
                    1 === this.maximum &&
                        1 === this.minimum &&
                        (1 === this.options.minimum ? (this.maximum *= this.logarithmBase - 1 / this.logarithmBase) : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum &&
                ((!this.options.viewportMinimum && !this.options.minimum) || this.options.viewportMaximum || this.options.maximum
                    ? this.options.viewportMinimum ||
                      this.options.minimum ||
                      (!this.options.viewportMaximum && !this.options.maximum) ||
                      (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval)))
                    : (this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum));
            c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (d = Math.floor(this.viewportMinimum / b + 0.5) * b; d < this.viewportMinimum; ) d += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = d;
                this.interval = b;
            } else
                this.options.interval ||
                    ((b = Math.ceil(this.interval)), this.range > this.interval && ((this.interval = b), (c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval)))),
                    (this.equidistantInterval = !0),
                    (this.intervalStartPosition = c);
            if (!this.valueFormatString && ((this.valueFormatString = "#,##0.##"), 1 > this.viewportMinimum)) {
                d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(d) || !isFinite(d)) d = 2;
                if (2 < d) for (g = 0; g < d - 2; g++) this.valueFormatString += "#";
            }
        };
        E.generateValueFormatString = function (a, d) {
            var b = "#,##0.",
                c = d;
            1 > a && ((c += Math.floor(Math.abs(Math.log(a) / Math.LN10))), isNaN(c) || !isFinite(c)) && (c = d);
            for (var e = 0; e < c; e++) b += "#";
            return b;
        };
        E.getNiceExponent = function (a, d) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = 0 > b ? (1 >= c ? 1 : 5 >= c ? 5 : 10) : Math.max(Math.floor(c), 1);
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20));
        };
        E.getNiceNumber = function (a, d) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = d ? (1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10) : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10;
            return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20));
        };
        E.prototype.getLabelStartPoint = function () {
            var a = R[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                    if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("hour" === this.intervalType) {
                    if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("day" === this.intervalType) {
                    if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("week" === this.intervalType) {
                    if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("month" === this.intervalType) {
                    if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else
                    "year" === this.intervalType &&
                        (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) &&
                        (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a;
        };
        oa(Z, U);
        oa(T, U);
        T.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ca(this.parent[this.optionsName]), (d = this.parent.options[this.optionsName].indexOf(this.options)));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options;
            }
        };
        T.prototype.render = function (a) {
            if (0 !== this.spacing || (0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness))) {
                var d = this.ctx,
                    b = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                P(this.id);
                var f, g, l, s, k, m;
                a = Math.max(this.spacing, 3);
                var n = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = n;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, n));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (
                        ((c = 1 === n % 2 ? (c.x << 0) + 0.5 : c.x << 0),
                        (g = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0),
                        "top" === this.scaleBreaks.parent._position
                            ? ((e = this.chart.plotArea.y1), (l = (this.chart.plotArea.y2 + n / 2 + 0.5) << 0))
                            : ((e = this.chart.plotArea.y2), (l = (this.chart.plotArea.y1 - n / 2 + 0.5) << 0), (a *= -1)),
                        (this.bounds = { x1: c - n / 2, y1: e, x2: g + n / 2, y2: l }),
                        this.ctx.moveTo(c, e),
                        "straight" === this.type || ("top" === this.scaleBreaks.parent._position && 0 >= a) || ("bottom" === this.scaleBreaks.parent._position && 0 <= a))
                    )
                        this.ctx.lineTo(c, l), this.ctx.lineTo(g, l), this.ctx.lineTo(g, e);
                    else if ("wavy" === this.type) {
                        s = c;
                        k = e;
                        f = 0.5;
                        m = (l - k) / a / 3;
                        for (var q = 0; q < m; q++) this.ctx.bezierCurveTo(s + f * a, k + a, s + f * a, k + 2 * a, s, k + 3 * a), (k += 3 * a), (f *= -1);
                        this.ctx.bezierCurveTo(s + f * a, k + a, s + f * a, k + 2 * a, s, k + 3 * a);
                        s = g;
                        f *= -1;
                        this.ctx.lineTo(s, k);
                        for (q = 0; q < m; q++) this.ctx.bezierCurveTo(s + f * a, k - a, s + f * a, k - 2 * a, s, k - 3 * a), (k -= 3 * a), (f *= -1);
                    } else {
                        if ("zigzag" === this.type) {
                            f = -1;
                            k = e + a;
                            s = c + a;
                            m = (l - k) / a / 2;
                            for (q = 0; q < m; q++) this.ctx.lineTo(s, k), (s += 2 * f * a), (k += 2 * a), (f *= -1);
                            this.ctx.lineTo(s, k);
                            s += g - c;
                            for (q = 0; q < m + 1; q++) this.ctx.lineTo(s, k), (s += 2 * f * a), (k -= 2 * a), (f *= -1);
                            this.ctx.lineTo(s + f * a, k + a);
                        }
                    }
                else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (
                        ((e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y << 0),
                        (l = 1 === n % 2 ? (c.y << 0) + 0.5 : c.y << 0),
                        "left" === this.scaleBreaks.parent._position
                            ? ((c = this.chart.plotArea.x1), (g = (this.chart.plotArea.x2 + n / 2 + 0.5) << 0))
                            : ((c = this.chart.plotArea.x2), (g = (this.chart.plotArea.x1 - n / 2 + 0.5) << 0), (a *= -1)),
                        (this.bounds = { x1: c, y1: e - n / 2, x2: g, y2: l + n / 2 }),
                        this.ctx.moveTo(c, e),
                        "straight" === this.type || ("left" === this.scaleBreaks.parent._position && 0 >= a) || ("right" === this.scaleBreaks.parent._position && 0 <= a))
                    )
                        this.ctx.lineTo(g, e), this.ctx.lineTo(g, l), this.ctx.lineTo(c, l);
                    else if ("wavy" === this.type) {
                        s = c;
                        k = e;
                        f = 0.5;
                        m = (g - s) / a / 3;
                        for (q = 0; q < m; q++) this.ctx.bezierCurveTo(s + a, k + f * a, s + 2 * a, k + f * a, s + 3 * a, k), (s += 3 * a), (f *= -1);
                        this.ctx.bezierCurveTo(s + a, k + f * a, s + 2 * a, k + f * a, s + 3 * a, k);
                        k = l;
                        f *= -1;
                        this.ctx.lineTo(s, k);
                        for (q = 0; q < m; q++) this.ctx.bezierCurveTo(s - a, k + f * a, s - 2 * a, k + f * a, s - 3 * a, k), (s -= 3 * a), (f *= -1);
                    } else if ("zigzag" === this.type) {
                        f = 1;
                        k = e - a;
                        s = c + a;
                        m = (g - s) / a / 2;
                        for (q = 0; q < m; q++) this.ctx.lineTo(s, k), (k += 2 * f * a), (s += 2 * a), (f *= -1);
                        this.ctx.lineTo(s, k);
                        k += l - e;
                        for (q = 0; q < m + 1; q++) this.ctx.lineTo(s, k), (k += 2 * f * a), (s -= 2 * a), (f *= -1);
                        this.ctx.lineTo(s + a, k + f * a);
                    }
                0 < n && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = b;
                this.ctx = d;
            }
        };
        oa(M, U);
        M.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ca(this.parent.stripLines), (d = this.parent.options.stripLines.indexOf(this.options)));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options;
            }
        };
        M.prototype.render = function () {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var b = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var c = this.ctx.globalAlpha;
                this.ctx.globalAlpha = b;
                P(this.id);
                var e, f, g, l;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    (e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0), (g = this.chart.plotArea.y1), (l = this.chart.plotArea.y2), (this.bounds = { x1: e - d / 2, y1: g, x2: f + d / 2, y2: l });
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    (g = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0), (e = this.chart.plotArea.x1), (f = this.chart.plotArea.x2), (this.bounds = { x1: e, y1: g - d / 2, x2: f, y2: l + d / 2 });
                this.ctx.moveTo(e, g);
                this.ctx.lineTo(f, l);
                this.ctx.stroke();
                this.ctx.globalAlpha = c;
            }
            this.ctx.restore();
        };
        oa($, U);
        $.prototype.showAt = function (a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                b = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas = this.parent.type;
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position) for (var c = 0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
                else if ("top" === this.parent._position) for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum && a <= d.axisY2[c].viewportMaximum ? a : null);
                else if ("left" === this.parent._position) for (c = 0; c < d.axisX.length; c++) this.parent === d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
                else {
                    if ("right" === this.parent._position) for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue = a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null);
                }
            else if ("bottom" === this.parent._position) for (c = 0; c < d.axisX.length; c++) this.parent === d.axisX[c] && (d.axisX[c]._crosshairValue = a >= d.axisX[c].viewportMinimum && a <= d.axisX[c].viewportMaximum ? a : null);
            else if ("top" === this.parent._position) for (c = 0; c < d.axisX2.length; c++) this.parent === d.axisX2[c] && (d.axisX2[c]._crosshairValue = a >= d.axisX2[c].viewportMinimum && a <= d.axisX2[c].viewportMaximum ? a : null);
            else if ("left" === this.parent._position) for (c = 0; c < d.axisY.length; c++) this.parent === d.axisY[c] && (d.axisY[c]._crosshairValue = a >= d.axisY[c].viewportMinimum && a <= d.axisY[c].viewportMaximum ? a : null);
            else if ("right" === this.parent._position) for (c = 0; c < d.axisY2.length; c++) this.parent === d.axisY2[c] && (d.axisY2[c]._crosshairValue = a >= d.axisY2[c].viewportMinimum && a <= d.axisY2[c].viewportMaximum ? a : null);
            for (c = 0; c < d.axisX.length; c++)
                (a = d.axisX[c]._crosshairValue),
                    d.axisX[c].crosshair &&
                        d.axisX[c].crosshair.enabled &&
                        !s(a) &&
                        a >= d.axisX[c].viewportMinimum &&
                        a <= d.axisX[c].viewportMaximum &&
                        (d.axisX[c].showCrosshair(a), (d.axisX[c].crosshair._updatedValue = a), this === d.axisX[c].crosshair && (b = !0));
            for (c = 0; c < d.axisX2.length; c++)
                (a = d.axisX2[c]._crosshairValue),
                    d.axisX2[c].crosshair &&
                        d.axisX2[c].crosshair.enabled &&
                        !s(a) &&
                        a >= d.axisX2[c].viewportMinimum &&
                        a <= d.axisX2[c].viewportMaximum &&
                        (d.axisX2[c].showCrosshair(a), (d.axisX2[c].crosshair._updatedValue = a), this === d.axisX2[c].crosshair && (b = !0));
            for (c = 0; c < d.axisY.length; c++)
                (a = d.axisY[c]._crosshairValue),
                    d.axisY[c].crosshair &&
                        d.axisY[c].crosshair.enabled &&
                        !s(a) &&
                        a >= d.axisY[c].viewportMinimum &&
                        a <= d.axisY[c].viewportMaximum &&
                        (d.axisY[c].showCrosshair(a), (d.axisY[c].crosshair._updatedValue = a), this === d.axisY[c].crosshair && (b = !0));
            for (c = 0; c < d.axisY2.length; c++)
                (a = d.axisY2[c]._crosshairValue),
                    d.axisY2[c].crosshair &&
                        d.axisY2[c].crosshair.enabled &&
                        !s(a) &&
                        a >= d.axisY2[c].viewportMinimum &&
                        a <= d.axisY2[c].viewportMaximum &&
                        (d.axisY2[c].showCrosshair(a), (d.axisY2[c].crosshair._updatedValue = a), this === d.axisY2[c].crosshair && (b = !0));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return b;
        };
        $.prototype.hide = function () {
            this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0;
        };
        $.prototype.render = function (a, d, b) {
            var c,
                e,
                f,
                g,
                l = null,
                w = null,
                k = null,
                m = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
                else {
                    var n = 0,
                        n =
                            "xySwapped" === this.chart.plotInfo.axisPlacement
                                ? 50 < this.parent.range
                                    ? 0
                                    : 500 < this.chart.width && 25 > this.parent.range
                                    ? 2
                                    : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)
                                : 50 < this.parent.range
                                ? 0
                                : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = E.generateValueFormatString(this.parent.range, n);
                }
            var k = null === this.opacity ? 1 : this.opacity,
                n = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                q = this.chart.overlaidCanvasCtx,
                h = q.globalAlpha;
            q.globalAlpha = k;
            q.beginPath();
            q.strokeStyle = this.color;
            q.lineWidth = n;
            q.save();
            this.labelFontSize = Math.abs(s(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
            this.labelMaxWidth = s(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = s(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < n && q.setLineDash && q.setLineDash(N(this.lineDashType, n));
            k = new ia(q, {
                x: 0,
                y: 0,
                padding: { top: 2, right: 3, bottom: 2, left: 4 },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: m,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
            });
            if (this.snapToDataPoint) {
                var r = 0,
                    m = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var v = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) r = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
                    else if ("left" === this.parent._position || "right" === this.parent._position) r = this.parent.convertPixelToValue({ y: d });
                    for (var y = 0; y < this.parent.dataSeries.length; y++)
                        (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) && 0 <= v.index && ((v.dataSeries = this.parent.dataSeries[y]), null !== v.dataPoint.y && v.dataSeries.visible && m.push(v));
                    v = null;
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
                    y = 0;
                    if ("rangeBar" === m[0].dataSeries.type || "error" === m[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y[0])), u = 0, r = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (var x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y))), u < v && ((v = u), (y = r));
                    else if ("stackedBar" === m[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), A = (u = 0), r = (y = 0); r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (A += m[r].dataPoint.y), (u = Math.abs(a - this.parent.convertValueToPixel(A))), u < v && ((v = u), (y = r));
                    else if ("stackedBar100" === m[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), C = (A = u = 0), r = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else
                                (A += m[r].dataPoint.y),
                                    (C = m[r].dataPoint.x.getTime ? m[r].dataPoint.x.getTime() : m[r].dataPoint.x),
                                    (C = 100 * (A / m[r].dataSeries.plotUnit.dataPointYSums[C])),
                                    (u = Math.abs(a - this.parent.convertValueToPixel(C))),
                                    u < v && ((v = u), (y = r));
                    else
                        for (v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), r = y = u = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (u = Math.abs(a - this.parent.convertValueToPixel(m[r].dataPoint.y))), u < v && ((v = u), (y = r));
                    x = m[y];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        c = 0;
                        if ("rangeBar" === this.parent.dataSeries[y].type || "error" === this.parent.dataSeries[y].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                            for (r = u = 0; r < x.dataPoint.y.length; r++) (u = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[r]))), u < v && ((v = u), (c = r));
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[c]) << 0;
                            this.value = x.dataPoint.y[c];
                            k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.y[c] })
                                : s(this.options.label)
                                ? ea(b ? b : x.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                        } else if ("stackedBar" === this.parent.dataSeries[y].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
                            A = u = 0;
                            for (r = y; 0 <= r; r--) (A += m[r].dataPoint.y), (u = Math.abs(a - this.parent.convertValueToPixel(A))), u < v && ((v = u), (c = r));
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
                            this.value = A;
                            k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.y })
                                : s(this.options.label)
                                ? ea(b ? b : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                        } else if ("stackedBar100" === this.parent.dataSeries[y].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
                            C = A = u = 0;
                            for (r = y; 0 <= r; r--)
                                (A += m[r].dataPoint.y),
                                    (C = m[r].dataPoint.x.getTime ? m[r].dataPoint.x.getTime() : m[r].dataPoint.x),
                                    (C = 100 * (A / m[r].dataSeries.plotUnit.dataPointYSums[C])),
                                    (u = Math.abs(a - this.parent.convertValueToPixel(C))),
                                    u < v && ((v = u), (c = r));
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) << 0;
                            this.value = C;
                            k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : C })
                                : s(this.options.label)
                                ? ea(b ? b : C, this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                        } else
                            (l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y) << 0),
                                (this.value = x.dataPoint.y),
                                (k.text = this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.y })
                                    : s(this.options.label)
                                    ? ea(b ? b : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo)
                                    : this.label);
                        c = e = l;
                        f = this.chart.plotArea.y1;
                        g = this.chart.plotArea.y2;
                        this.bounds = { x1: c - n / 2, y1: f, x2: e + n / 2, y2: g };
                        k.x = c - k.measureText().width / 2;
                        k.x + k.width > this.chart.bounds.x2 ? (k.x = this.chart.bounds.x2 - k.width) : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                        k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                        k.y + k.height > this.chart.bounds.y2 ? (k.y = this.chart.bounds.y2 - k.height) : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        f = g = w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                        c = this.chart.plotArea.x1;
                        e = this.chart.plotArea.x2;
                        this.bounds = { x1: c, y1: f - n / 2, x2: e, y2: g + n / 2 };
                        C = !1;
                        if (this.parent.labels)
                            for (m = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += m)
                                if (this.parent.labels[r]) C = !0;
                                else {
                                    C = !1;
                                    break;
                                }
                        if (C) {
                            if ("axisX" === this.parent.type)
                                for (r = this.parent.convertPixelToValue({ y: d }), v = null, y = 0; y < this.parent.dataSeries.length; y++)
                                    (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) &&
                                        0 <= v.index &&
                                        (k.text = this.labelFormatter
                                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x })
                                            : s(this.options.label)
                                            ? v.dataPoint.label
                                            : this.label);
                        } else
                            "dateTime" === this.parent.valueType
                                ? (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.x })
                                      : s(this.options.label)
                                      ? Aa(b ? b : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                      : this.label)
                                : "number" === this.parent.valueType &&
                                  (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.x })
                                      : s(this.options.label)
                                      ? ea(b ? b : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                      : this.label);
                        this.value = x.dataPoint.x;
                        k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    r = this.parent.convertPixelToValue({ x: a });
                    for (y = 0; y < this.parent.dataSeries.length; y++)
                        (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) && 0 <= v.index && ((v.dataSeries = this.parent.dataSeries[y]), null !== v.dataPoint.y && v.dataSeries.visible && m.push(v));
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    x = m[0];
                    c = e = l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                    f = this.chart.plotArea.y1;
                    g = this.chart.plotArea.y2;
                    this.bounds = { x1: c - n / 2, y1: f, x2: e + n / 2, y2: g };
                    C = !1;
                    if (this.parent.labels)
                        for (m = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += m)
                            if (this.parent.labels[r]) C = !0;
                            else {
                                C = !1;
                                break;
                            }
                    if (C) {
                        if ("axisX" === this.parent.type)
                            for (r = this.parent.convertPixelToValue({ x: a }), v = null, y = 0; y < this.parent.dataSeries.length; y++)
                                (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) &&
                                    0 <= v.index &&
                                    (k.text = this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x })
                                        : s(this.options.label)
                                        ? v.dataPoint.label
                                        : this.label);
                    } else
                        "dateTime" === this.parent.valueType
                            ? (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x })
                                  : s(this.options.label)
                                  ? Aa(b ? b : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label)
                            : "number" === this.parent.valueType &&
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x })
                                  : s(this.options.label)
                                  ? ea(b ? b : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label);
                    this.value = x.dataPoint.x;
                    k.x = c - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !s(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (r = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
                    for (y = 0; y < this.parent.dataSeries.length; y++)
                        (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) && 0 <= v.index && ((v.dataSeries = this.parent.dataSeries[y]), null !== v.dataPoint.y && v.dataSeries.visible && m.push(v));
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    y = 0;
                    if (
                        "rangeColumn" === m[0].dataSeries.type ||
                        "rangeArea" === m[0].dataSeries.type ||
                        "error" === m[0].dataSeries.type ||
                        "rangeSplineArea" === m[0].dataSeries.type ||
                        "candlestick" === m[0].dataSeries.type ||
                        "ohlc" === m[0].dataSeries.type ||
                        "boxAndWhisker" === m[0].dataSeries.type
                    )
                        for (v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y[0])), r = u = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y))), u < v && ((v = u), (y = r));
                    else if ("stackedColumn" === m[0].dataSeries.type || "stackedArea" === m[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), r = A = u = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (A += m[r].dataPoint.y), (u = Math.abs(d - this.parent.convertValueToPixel(A))), u < v && ((v = u), (y = r));
                    else if ("stackedColumn100" === m[0].dataSeries.type || "stackedArea100" === m[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), r = C = A = u = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else
                                (A += m[r].dataPoint.y),
                                    (C = m[r].dataPoint.x.getTime ? m[r].dataPoint.x.getTime() : m[r].dataPoint.x),
                                    (C = 100 * (A / m[r].dataSeries.plotUnit.dataPointYSums[C])),
                                    (u = Math.abs(d - this.parent.convertValueToPixel(C))),
                                    u < v && ((v = u), (y = r));
                    else
                        for (v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), r = u = 0; r < m.length; r++)
                            if (m[r].dataPoint.y && m[r].dataPoint.y.length) for (x = 0; x < m[r].dataPoint.y.length; x++) (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y[x]))), u < v && ((v = u), (y = r));
                            else (u = Math.abs(d - this.parent.convertValueToPixel(m[r].dataPoint.y))), u < v && ((v = u), (y = r));
                    x = m[y];
                    c = 0;
                    if (
                        "rangeColumn" === this.parent.dataSeries[y].type ||
                        "rangeArea" === this.parent.dataSeries[y].type ||
                        "error" === this.parent.dataSeries[y].type ||
                        "rangeSplineArea" === this.parent.dataSeries[y].type ||
                        "candlestick" === this.parent.dataSeries[y].type ||
                        "ohlc" === this.parent.dataSeries[y].type ||
                        "boxAndWhisker" === this.parent.dataSeries[y].type
                    ) {
                        v = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                        for (r = u = 0; r < x.dataPoint.y.length; r++) (u = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[r]))), u < v && ((v = u), (c = r));
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[c]) << 0;
                        k.text = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.y[c] })
                            : s(this.options.label)
                            ? ea(b ? b : x.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo)
                            : this.label;
                        this.value = x.dataPoint.y[c];
                    } else if ("stackedColumn" === this.parent.dataSeries[y].type || "stackedArea" === this.parent.dataSeries[y].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y));
                        A = u = 0;
                        for (r = y; 0 <= r; r--) (A += m[r].dataPoint.y), (u = Math.abs(d - this.parent.convertValueToPixel(A))), u < v && ((v = u), (c = r));
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
                        k.text = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataPoint.y })
                            : s(this.options.label)
                            ? ea(b ? b : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo)
                            : this.label;
                        this.value = A;
                    } else if ("stackedColumn100" === this.parent.dataSeries[y].type || "stackedArea100" === this.parent.dataSeries[y].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y));
                        A = u = 0;
                        for (r = y; 0 <= r; r--)
                            (A += m[r].dataPoint.y),
                                (C = m[r].dataPoint.x.getTime ? m[r].dataPoint.x.getTime() : m[r].dataPoint.x),
                                (C = 100 * (A / m[r].dataSeries.plotUnit.dataPointYSums[C])),
                                (u = Math.abs(d - this.parent.convertValueToPixel(C))),
                                u < v && ((v = u), (c = r));
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) << 0;
                        k.text = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : C })
                            : s(this.options.label)
                            ? ea(b ? b : C, this.valueFormatString, this.chart._cultureInfo)
                            : this.label;
                        this.value = C;
                    } else
                        "waterfall" === this.parent.dataSeries[y].type
                            ? ((w =
                                  1 === q.lineWidth % 2
                                      ? (this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0) + 0.5
                                      : this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : x.dataSeries.dataPointEOs[x.index].cumulativeSum })
                                  : s(this.options.label)
                                  ? ea(b ? b : x.dataSeries.dataPointEOs[x.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = x.dataSeries.dataPointEOs[x.index].cumulativeSum))
                            : ((w = 1 === q.lineWidth % 2 ? (s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0) + 0.5 : s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.y })
                                  : s(this.options.label)
                                  ? ea(b ? b : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = x.dataPoint.y));
                    f = g = w;
                    c = this.chart.plotArea.x1;
                    e = this.chart.plotArea.x2;
                    this.bounds = { x1: c, y1: f - n / 2, x2: e, y2: g + n / 2 };
                    k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                    k.y - k.fontSize / 2 < this.chart.bounds.y1
                        ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                        : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                    "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                }
                m = null;
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2),
                        "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2),
                        c >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) &&
                            e <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) &&
                            (0 < n && (q.moveTo(c, f), q.lineTo(e, g), q.stroke(), (this._hidden = !1)), q.restore(), !s(k.text) && ("number" === typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0));
                if ("left" === this.parent._position || "right" === this.parent._position)
                    "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                        "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width),
                        g >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) &&
                            f <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) &&
                            (0 < n && (q.moveTo(c, f), q.lineTo(e, g), q.stroke(), (this._hidden = !1)), q.restore(), !s(k.text) && ("number" === typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0));
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    (c = e = l = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0), (f = this.chart.plotArea.y1), (g = this.chart.plotArea.y2), (this.bounds = { x1: c - n / 2, y1: f, x2: e + n / 2, y2: g });
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    (f = g = w = 1 === q.lineWidth % 2 ? (d << 0) + 0.5 : d << 0), (c = this.chart.plotArea.x1), (e = this.chart.plotArea.x2), (this.bounds = { x1: c, y1: f - n / 2, x2: e, y2: g + n / 2 });
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        C = !1;
                        if (this.parent.labels)
                            for (m = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += m)
                                if (this.parent.labels[r]) C = !0;
                                else {
                                    C = !1;
                                    break;
                                }
                        if (C) {
                            if ("axisX" === this.parent.type)
                                for (r = this.parent.convertPixelToValue({ y: d }), v = null, y = 0; y < this.parent.dataSeries.length; y++)
                                    (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) &&
                                        0 <= v.index &&
                                        (k.text = this.labelFormatter
                                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) })
                                            : s(this.options.label)
                                            ? v.dataPoint.label
                                            : this.label);
                        } else
                            "dateTime" === this.parent.valueType
                                ? (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d) })
                                      : s(this.options.label)
                                      ? Aa(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo)
                                      : this.label)
                                : "number" === this.parent.valueType &&
                                  (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d) })
                                      : s(this.options.label)
                                      ? ea(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo)
                                      : this.label);
                        k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x1 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position)
                            (k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) })
                                : s(this.options.label)
                                ? ea(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo)
                                : this.label),
                                (k.x = c - k.measureText().width / 2),
                                k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width),
                                k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                                "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    C = !1;
                    m = "";
                    if (this.parent.labels)
                        for (m = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += m)
                            if (this.parent.labels[r]) C = !0;
                            else {
                                C = !1;
                                break;
                            }
                    if (C) {
                        if ("axisX" === this.parent.type)
                            for (r = this.parent.convertPixelToValue({ x: a }), v = null, y = 0; y < this.parent.dataSeries.length; y++)
                                (v = this.parent.dataSeries[y].getDataPointAtX(r, !0)) &&
                                    0 <= v.index &&
                                    (k.text = this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) })
                                        : s(this.options.label)
                                        ? b
                                            ? b
                                            : v.dataPoint.label
                                        : this.label);
                    } else
                        "dateTime" === this.parent.valueType
                            ? (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) })
                                  : s(this.options.label)
                                  ? Aa(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo)
                                  : this.label)
                            : "number" === this.parent.valueType &&
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" })
                                  : s(this.options.label)
                                  ? ea(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo)
                                  : this.label);
                    k.x = c - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else if ("left" === this.parent._position || "right" === this.parent._position)
                    (k.text = this.labelFormatter
                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d) })
                        : s(this.options.label)
                        ? ea(b ? b : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo)
                        : this.label),
                        (k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2),
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2),
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && k.x < this.chart.bounds.x1
                    ? (k.x = this.chart.bounds.x1)
                    : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2
                    ? (k.x = this.chart.bounds.x2 - k.measureText().width)
                    : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1
                    ? (k.y = this.chart.bounds.y1 + k.fontSize / 2)
                    : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
                0 < n && (q.moveTo(c, f), q.lineTo(e, g), q.stroke(), (this._hidden = !1));
                q.restore();
                !s(k.text) && ("number" === typeof k.text.valueOf() || 0 < k.text.length) && k.render(!0);
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(l);
            if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(w);
            q.globalAlpha = h;
        };
        oa(X, U);
        X.prototype._initialize = function () {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " + (w ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += w ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                w || ((a += "filter: alpha(opacity = 90);"), (a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');"));
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container);
            }
        };
        X.prototype.mouseMoveHandler = function (a, d) {
            (this._lastUpdated && 4 > new Date().getTime() - this._lastUpdated) || ((this._lastUpdated = new Date().getTime()), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d));
        };
        X.prototype._updateToolTip = function (a, d, b) {
            b = "undefined" === typeof b ? !0 : b;
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY;
                } else (this._prevX = a), (this._prevY = d);
                var c = null,
                    e = null,
                    f = [],
                    g = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var l = [];
                        if (this.chart.axisX)
                            for (var v = 0; v < this.chart.axisX.length; v++) {
                                for (var g = this.chart.axisX[v].convertPixelToValue({ y: d }), k = null, c = 0; c < this.chart.axisX[v].dataSeries.length; c++)
                                    (k = this.chart.axisX[v].dataSeries[c].getDataPointAtX(g, b)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX[v].dataSeries[c]), null !== k.dataPoint.y && l.push(k));
                                k = null;
                            }
                        if (this.chart.axisX2)
                            for (v = 0; v < this.chart.axisX2.length; v++) {
                                g = this.chart.axisX2[v].convertPixelToValue({ y: d });
                                k = null;
                                for (c = 0; c < this.chart.axisX2[v].dataSeries.length; c++)
                                    (k = this.chart.axisX2[v].dataSeries[c].getDataPointAtX(g, b)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX2[v].dataSeries[c]), null !== k.dataPoint.y && l.push(k));
                                k = null;
                            }
                    } else {
                        l = [];
                        if (this.chart.axisX)
                            for (v = 0; v < this.chart.axisX.length; v++)
                                for (g = this.chart.axisX[v].convertPixelToValue({ x: a }), k = null, c = 0; c < this.chart.axisX[v].dataSeries.length; c++)
                                    (k = this.chart.axisX[v].dataSeries[c].getDataPointAtX(g, b)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX[v].dataSeries[c]), null !== k.dataPoint.y && l.push(k));
                        if (this.chart.axisX2)
                            for (v = 0; v < this.chart.axisX2.length; v++)
                                for (g = this.chart.axisX2[v].convertPixelToValue({ x: a }), k = null, c = 0; c < this.chart.axisX2[v].dataSeries.length; c++)
                                    (k = this.chart.axisX2[v].dataSeries[c].getDataPointAtX(g, b)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX2[v].dataSeries[c]), null !== k.dataPoint.y && l.push(k));
                    }
                    if (0 === l.length) return;
                    l.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    b = l[0];
                    for (c = 0; c < l.length; c++) l[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && f.push(l[c]);
                    l = null;
                } else {
                    if ((k = this.chart.getDataPointAtXY(a, d, b))) (this.currentDataPointIndex = k.dataPointIndex), (this.currentSeriesIndex = k.dataSeries.index);
                    else if (w)
                        if (((k = Ya(a, d, this.chart._eventManager.ghostCtx)), 0 < k && "undefined" !== typeof this.chart._eventManager.objectMap[k])) {
                            k = this.chart._eventManager.objectMap[k];
                            if ("legendItem" === k.objectType) return;
                            this.currentSeriesIndex = k.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= k.dataPointIndex ? k.dataPointIndex : -1;
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        k = {};
                        if (0 <= this.currentDataPointIndex)
                            (c = e.dataPoints[this.currentDataPointIndex]),
                                (k.dataSeries = e),
                                (k.dataPoint = c),
                                (k.index = this.currentDataPointIndex),
                                (k.distance = Math.abs(c.x - g)),
                                "waterfall" === e.type && ((k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue), (k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum));
                        else {
                            if (
                                !this.enabled ||
                                ("line" !== e.type &&
                                    "stepLine" !== e.type &&
                                    "spline" !== e.type &&
                                    "area" !== e.type &&
                                    "stepArea" !== e.type &&
                                    "splineArea" !== e.type &&
                                    "stackedArea" !== e.type &&
                                    "stackedArea100" !== e.type &&
                                    "rangeArea" !== e.type &&
                                    "rangeSplineArea" !== e.type &&
                                    "candlestick" !== e.type &&
                                    "ohlc" !== e.type &&
                                    "boxAndWhisker" !== e.type)
                            )
                                return;
                            g = e.axisX.convertPixelToValue({ x: a });
                            k = e.getDataPointAtX(g, b);
                            s(k) || ((k.dataSeries = e), (this.currentDataPointIndex = k.index), (c = k.dataPoint));
                        }
                        if (!s(k) && !s(k.dataPoint) && !s(k.dataPoint.y))
                            if (k.dataSeries.axisY)
                                if (0 < k.dataPoint.y.length) {
                                    for (c = b = 0; c < k.dataPoint.y.length; c++) k.dataPoint.y[c] < k.dataSeries.axisY.viewportMinimum ? b-- : k.dataPoint.y[c] > k.dataSeries.axisY.viewportMaximum && b++;
                                    b < k.dataPoint.y.length && b > -k.dataPoint.y.length && f.push(k);
                                } else
                                    "column" === e.type || "bar" === e.type
                                        ? 0 > k.dataPoint.y
                                            ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && f.push(k)
                                            : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && f.push(k)
                                        : "bubble" === e.type
                                        ? ((b = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2),
                                          k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - b && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + b && f.push(k))
                                        : "waterfall" === e.type
                                        ? ((b = 0),
                                          k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && b++,
                                          k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? b-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && b++,
                                          2 > b && -2 < b && f.push(k))
                                        : (0 <= k.dataSeries.type.indexOf("100") ||
                                              "stackedColumn" === e.type ||
                                              "stackedBar" === e.type ||
                                              (k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum)) &&
                                          f.push(k);
                            else f.push(k);
                    }
                }
                if (0 < f.length) {
                    if ((this.highlightObjects(f), this.enabled)) {
                        b = "";
                        b = this.getToolTipInnerHTML({ entries: f });
                        if (null !== b) {
                            this.contentDiv.innerHTML = b;
                            g = !1;
                            "none" === this.container.style.display && ((g = !0), (this.container.style.display = "block"));
                            try {
                                (this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)"),
                                    (this.borderColor =
                                        "waterfall" === f[0].dataSeries.type
                                            ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : f[0].dataPoint.color
                                                  ? f[0].dataPoint.color
                                                  : 0 < f[0].dataPoint.y
                                                  ? f[0].dataSeries.risingColor
                                                  : f[0].dataSeries.fallingColor)
                                            : "error" === f[0].dataSeries.type
                                            ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : f[0].dataSeries.color
                                                  ? f[0].dataSeries.color
                                                  : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length])
                                            : (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : f[0].dataPoint.color
                                                  ? f[0].dataPoint.color
                                                  : f[0].dataSeries.color
                                                  ? f[0].dataSeries.color
                                                  : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length])),
                                    (this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px"),
                                    (this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px"),
                                    (this.container.style.borderRadius = this.contentDiv.style.borderRadius),
                                    (this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px"),
                                    (this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000"),
                                    (this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;"),
                                    (this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal"),
                                    (this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal");
                            } catch (m) {}
                            "pie" === f[0].dataSeries.type ||
                            "doughnut" === f[0].dataSeries.type ||
                            "funnel" === f[0].dataSeries.type ||
                            "pyramid" === f[0].dataSeries.type ||
                            "bar" === f[0].dataSeries.type ||
                            "rangeBar" === f[0].dataSeries.type ||
                            "stackedBar" === f[0].dataSeries.type ||
                            "stackedBar100" === f[0].dataSeries.type
                                ? (a = a - 10 - this.container.clientWidth)
                                : ((a = (f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth) << 0), (a -= 10));
                            0 > a && (a += this.container.clientWidth + 20);
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d =
                                1 !== f.length ||
                                this.shared ||
                                ("line" !== f[0].dataSeries.type &&
                                    "stepLine" !== f[0].dataSeries.type &&
                                    "spline" !== f[0].dataSeries.type &&
                                    "area" !== f[0].dataSeries.type &&
                                    "stepArea" !== f[0].dataSeries.type &&
                                    "splineArea" !== f[0].dataSeries.type)
                                    ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type
                                        ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x)
                                        : d
                                    : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || g ? this.disableAnimation() : (this.enableAnimation(), (this.container.style.MozTransition = this.mozContainerTransition));
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px";
                        } else this.hide(!1), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                        d = [];
                        for (c = 0; c < f.length; c++) d.push({ xValue: f[c].dataPoint.x, dataPoint: f[c].dataPoint, dataSeries: f[c].dataSeries, dataPointIndex: f[c].index, dataSeriesIndex: f[c].dataSeries._index });
                        d = { chart: this.chart, toolTip: this.options, content: b, entries: d };
                        this._entries = f;
                        this.dispatchEvent("updated", d, this);
                    }
                } else this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            }
        };
        X.prototype.highlightObjects = function (a) {
            var d = this.chart.overlaidCanvasCtx;
            if (s(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas)
                this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), (this.chart.clearedOverlayedCanvas = "toolTip");
            d.save();
            var b = this.chart.plotArea,
                c = 0;
            d.beginPath();
            d.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
            d.clip();
            for (b = 0; b < a.length; b++) {
                var e = a[b];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var c = this.chart.data[e.dataSeriesIndex],
                        f = c.dataPoints[e.dataPointIndex],
                        g = e.dataPointIndex;
                    !1 === f.highlightEnabled ||
                        (!0 !== c.highlightEnabled && !0 !== f.highlightEnabled) ||
                        ("line" === c.type ||
                        "stepLine" === c.type ||
                        "spline" === c.type ||
                        "scatter" === c.type ||
                        "area" === c.type ||
                        "stepArea" === c.type ||
                        "splineArea" === c.type ||
                        "stackedArea" === c.type ||
                        "stackedArea100" === c.type ||
                        "rangeArea" === c.type ||
                        "rangeSplineArea" === c.type
                            ? ((f = c.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx)),
                              (f.size = Math.max((1.5 * f.size) << 0, 10)),
                              (f.borderColor = f.borderColor || "#FFFFFF"),
                              (f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size)),
                              V.drawMarkers([f]),
                              "undefined" !== typeof e.y2 &&
                                  ((f = c.getMarkerProperties(g, e.x1, e.y2, this.chart.overlaidCanvasCtx)),
                                  (f.size = Math.max((1.5 * f.size) << 0, 10)),
                                  (f.borderColor = f.borderColor || "#FFFFFF"),
                                  (f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size)),
                                  V.drawMarkers([f])))
                            : "bubble" === c.type
                            ? ((f = c.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx)), (f.size = e.size), (f.color = "white"), (f.borderColor = "white"), (d.globalAlpha = 0.3), V.drawMarkers([f]), (d.globalAlpha = 1))
                            : "column" === c.type ||
                              "stackedColumn" === c.type ||
                              "stackedColumn100" === c.type ||
                              "bar" === c.type ||
                              "rangeBar" === c.type ||
                              "stackedBar" === c.type ||
                              "stackedBar100" === c.type ||
                              "rangeColumn" === c.type ||
                              "waterfall" === c.type
                            ? ca(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3)
                            : "pie" === c.type || "doughnut" === c.type
                            ? W(d, e.center, e.radius, "white", c.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius)
                            : "funnel" === c.type || "pyramid" === c.type
                            ? pa(d, e.funnelSection, 0.3, "white")
                            : "candlestick" === c.type
                            ? ((d.globalAlpha = 1),
                              (d.strokeStyle = e.color),
                              (d.lineWidth = 2 * e.borderThickness),
                              (c = 0 === d.lineWidth % 2 ? 0 : 0.5),
                              d.beginPath(),
                              d.moveTo(e.x3 - c, Math.min(e.y2, e.y3)),
                              d.lineTo(e.x3 - c, Math.min(e.y1, e.y4)),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3 - c, Math.max(e.y1, e.y4)),
                              d.lineTo(e.x3 - c, Math.max(e.y2, e.y3)),
                              d.stroke(),
                              ca(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1),
                              (d.globalAlpha = 1))
                            : "ohlc" === c.type
                            ? ((d.globalAlpha = 1),
                              (d.strokeStyle = e.color),
                              (d.lineWidth = 2 * e.borderThickness),
                              (c = 0 === d.lineWidth % 2 ? 0 : 0.5),
                              d.beginPath(),
                              d.moveTo(e.x3 - c, e.y2),
                              d.lineTo(e.x3 - c, e.y3),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3, e.y1),
                              d.lineTo(e.x1, e.y1),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3, e.y4),
                              d.lineTo(e.x2, e.y4),
                              d.stroke(),
                              (d.globalAlpha = 1))
                            : "boxAndWhisker" === c.type
                            ? (d.save(),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.stemColor),
                              (d.lineWidth = 2 * e.stemThickness),
                              0 < e.stemThickness &&
                                  (d.beginPath(),
                                  d.moveTo(e.x3, e.y2 + e.borderThickness / 2),
                                  d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2),
                                  d.stroke(),
                                  d.beginPath(),
                                  d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2),
                                  d.lineTo(e.x3, e.y3 - e.borderThickness / 2),
                                  d.stroke()),
                              d.beginPath(),
                              ca(
                                  d,
                                  e.x1 - e.borderThickness / 2,
                                  Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2),
                                  e.x2 + e.borderThickness / 2,
                                  Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2),
                                  "transparent",
                                  e.borderThickness,
                                  e.color,
                                  !1,
                                  !1,
                                  !1,
                                  !1
                              ),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.whiskerColor),
                              (d.lineWidth = 2 * e.whiskerThickness),
                              0 < e.whiskerThickness &&
                                  (d.beginPath(),
                                  d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4),
                                  d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4),
                                  d.stroke(),
                                  d.beginPath(),
                                  d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1),
                                  d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1),
                                  d.stroke()),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.lineColor),
                              (d.lineWidth = 2 * e.lineThickness),
                              0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()),
                              d.restore(),
                              (d.globalAlpha = 1))
                            : "error" === c.type && y(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
                }
            }
            d.restore();
            d.globalAlpha = 1;
            d.beginPath();
        };
        X.prototype.getToolTipInnerHTML = function (a) {
            a = a.entries;
            for (var d = null, b = null, c = null, e = 0, f = "", g = !0, l = 0; l < a.length; l++)
                if (a[l].dataSeries.toolTipContent || a[l].dataPoint.toolTipContent) {
                    g = !1;
                    break;
                }
            if (g && ((this.content && "function" === typeof this.content) || this.contentFormatter)) (a = { chart: this.chart, toolTip: this.options, entries: a }), (d = this.contentFormatter ? this.contentFormatter(a) : this.content(a));
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var s = null, k = "", l = 0; l < a.length; l++)
                    (b = a[l].dataSeries),
                        (c = a[l].dataPoint),
                        (e = a[l].index),
                        (f = ""),
                        0 === l &&
                            g &&
                            !this.content &&
                            (this.chart.axisX && 0 < this.chart.axisX.length
                                ? (k += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}")
                                : this.chart.axisX2 && 0 < this.chart.axisX2.length && (k += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}"),
                            (k += "</br>"),
                            (k = this.chart.replaceKeywordsWithValue(k, c, b, e))),
                        null === c.toolTipContent ||
                            ("undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) ||
                            ("line" === b.type ||
                            "stepLine" === b.type ||
                            "spline" === b.type ||
                            "area" === b.type ||
                            "stepArea" === b.type ||
                            "splineArea" === b.type ||
                            "column" === b.type ||
                            "bar" === b.type ||
                            "scatter" === b.type ||
                            "stackedColumn" === b.type ||
                            "stackedColumn100" === b.type ||
                            "stackedBar" === b.type ||
                            "stackedBar100" === b.type ||
                            "stackedArea" === b.type ||
                            "stackedArea100" === b.type ||
                            "waterfall" === b.type
                                ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != b.axisXIndex ? (b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                                  (f += c.toolTipContent
                                      ? c.toolTipContent
                                      : b.toolTipContent
                                      ? b.toolTipContent
                                      : this.content && "function" !== typeof this.content
                                      ? this.content
                                      : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}"),
                                  (s = b.axisXIndex))
                                : "bubble" === b.type
                                ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != b.axisXIndex ? (b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                                  (f += c.toolTipContent
                                      ? c.toolTipContent
                                      : b.toolTipContent
                                      ? b.toolTipContent
                                      : this.content && "function" !== typeof this.content
                                      ? this.content
                                      : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"))
                                : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type
                                ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != b.axisXIndex ? (b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                                  (f += c.toolTipContent
                                      ? c.toolTipContent
                                      : b.toolTipContent
                                      ? b.toolTipContent
                                      : this.content && "function" !== typeof this.content
                                      ? this.content
                                      : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"))
                                : "candlestick" === b.type || "ohlc" === b.type
                                ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != b.axisXIndex ? (b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                                  (f += c.toolTipContent
                                      ? c.toolTipContent
                                      : b.toolTipContent
                                      ? b.toolTipContent
                                      : this.content && "function" !== typeof this.content
                                      ? this.content
                                      : "<span style='\"" +
                                        (this.options.fontColor ? "" : "'color:{color};'") +
                                        "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"))
                                : "boxAndWhisker" === b.type &&
                                  (this.chart.axisX && 1 < this.chart.axisX.length && (f += s != b.axisXIndex ? (b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                                  (f += c.toolTipContent
                                      ? c.toolTipContent
                                      : b.toolTipContent
                                      ? b.toolTipContent
                                      : this.content && "function" !== typeof this.content
                                      ? this.content
                                      : "<span style='\"" +
                                        (this.options.fontColor ? "" : "'color:{color};'") +
                                        "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}")),
                            null === d && (d = ""),
                            !0 === this.reversed
                                ? ((d = this.chart.replaceKeywordsWithValue(f, c, b, e) + d), l < a.length - 1 && (d = "</br>" + d))
                                : ((d += this.chart.replaceKeywordsWithValue(f, c, b, e)), l < a.length - 1 && (d += "</br>")));
                null !== d && (d = k + d);
            } else {
                b = a[0].dataSeries;
                c = a[0].dataPoint;
                e = a[0].index;
                if (null === c.toolTipContent || ("undefined" === typeof c.toolTipContent && null === b.options.toolTipContent)) return null;
                "line" === b.type ||
                "stepLine" === b.type ||
                "spline" === b.type ||
                "area" === b.type ||
                "stepArea" === b.type ||
                "splineArea" === b.type ||
                "column" === b.type ||
                "bar" === b.type ||
                "scatter" === b.type ||
                "stackedColumn" === b.type ||
                "stackedColumn100" === b.type ||
                "stackedBar" === b.type ||
                "stackedBar100" === b.type ||
                "stackedArea" === b.type ||
                "stackedArea100" === b.type ||
                "waterfall" === b.type
                    ? (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}")
                    : "bubble" === b.type
                    ? (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
                    : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type
                    ? (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}")
                    : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type
                    ? (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}")
                    : "candlestick" === b.type || "ohlc" === b.type
                    ? (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" +
                            (this.options.fontColor ? "" : "'color:{color};'") +
                            "\"'>" +
                            (c.label ? "{label}" : "{x}") +
                            "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}")
                    : "boxAndWhisker" === b.type &&
                      (f = c.toolTipContent
                          ? c.toolTipContent
                          : b.toolTipContent
                          ? b.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span style='\"" +
                            (this.options.fontColor ? "" : "'color:{color};'") +
                            "\"'>" +
                            (c.label ? "{label}" : "{x}") +
                            "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(f, c, b, e);
            }
            return d;
        };
        X.prototype.enableAnimation = function () {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition;
            }
        };
        X.prototype.disableAnimation = function () {
            this.container.style.WebkitTransition && ((this.container.style.WebkitTransition = ""), (this.container.style.MozTransition = ""), (this.container.style.MsTransition = ""), (this.container.style.transition = ""));
        };
        X.prototype.hide = function (a) {
            this.container && ((this.container.style.display = "none"), (this.currentSeriesIndex = -1), (this._prevY = this._prevX = NaN), ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        X.prototype.show = function (a, d, b) {
            this._updateToolTip(a, d, "undefined" === typeof b ? !1 : b);
        };
        X.prototype.showAtIndex = function (a, d) {};
        X.prototype.showAtX = function (a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var b,
                c,
                e,
                f = [];
            e = !1;
            d = !s(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared) for (var g = 0; g < this.chart.data.length; g++) (b = this.chart.data[g]), (c = b.getDataPointAtX(a, !1)) && c.dataPoint && !s(c.dataPoint.y) && b.visible && ((c.dataSeries = b), f.push(c));
            else (b = this.chart.data[d]), (c = b.getDataPointAtX(a, !1)) && c.dataPoint && !s(c.dataPoint.y) && b.visible && ((c.dataSeries = b), f.push(c));
            if (0 < f.length) {
                for (g = 0; g < f.length; g++)
                    if (
                        ((c = f[g]),
                        c.dataPoint.x < c.dataSeries.axisX.viewportMinimum || c.dataPoint.x > c.dataSeries.axisX.viewportMaximum || c.dataPoint.y < c.dataSeries.axisY.viewportMinimum || c.dataPoint.y > c.dataSeries.axisY.viewportMaximum)
                    )
                        e = !0;
                    else {
                        e = !1;
                        break;
                    }
                if (e) return this.hide(), !1;
                this.highlightObjects(f);
                this._entries = f;
                c = "";
                c = this.getToolTipInnerHTML({ entries: f });
                if (null !== c) {
                    this.contentDiv.innerHTML = c;
                    c = !1;
                    "none" === this.container.style.display && ((c = !0), (this.container.style.display = "block"));
                    try {
                        (this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)"),
                            (this.borderColor =
                                "waterfall" === f[0].dataSeries.type
                                    ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataPoint.color
                                          ? f[0].dataPoint.color
                                          : 0 < f[0].dataPoint.y
                                          ? f[0].dataSeries.risingColor
                                          : f[0].dataSeries.fallingColor)
                                    : "error" === f[0].dataSeries.type
                                    ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataSeries.color
                                          ? f[0].dataSeries.color
                                          : f[0].dataSeries._colorSet[b.index % f[0].dataSeries._colorSet.length])
                                    : (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataPoint.color
                                          ? f[0].dataPoint.color
                                          : f[0].dataSeries.color
                                          ? f[0].dataSeries.color
                                          : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length])),
                            (this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px"),
                            (this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px"),
                            (this.container.style.borderRadius = this.contentDiv.style.borderRadius),
                            (this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px"),
                            (this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000"),
                            (this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;"),
                            (this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal"),
                            (this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal");
                    } catch (l) {}
                    "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type
                        ? (b = mouseX - 10 - this.container.clientWidth)
                        : ((b =
                              "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type
                                  ? (f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) - this.container.clientWidth) << 0
                                  : (f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth) << 0),
                          (b -= 10));
                    0 > b && (b += this.container.clientWidth + 20);
                    b + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (b = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    f =
                        1 !== f.length ||
                        this.shared ||
                        ("line" !== f[0].dataSeries.type &&
                            "stepLine" !== f[0].dataSeries.type &&
                            "spline" !== f[0].dataSeries.type &&
                            "area" !== f[0].dataSeries.type &&
                            "stepArea" !== f[0].dataSeries.type &&
                            "splineArea" !== f[0].dataSeries.type)
                            ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type
                                ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x)
                                : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y)
                            : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                    f = -f + 10;
                    0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(b, f);
                    !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), (this.container.style.MozTransition = this.mozContainerTransition));
                    this.container.style.left = b + "px";
                    this.container.style.bottom = f + "px";
                } else return this.hide(!1), !1;
            } else return this.hide(), !1;
            return !0;
        };
        X.prototype.fixMozTransitionDelay = function (a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var b = parseFloat(this.container.style.left),
                    b = isNaN(b) ? 0 : b,
                    c = parseFloat(this.container.style.bottom),
                    c = isNaN(c) ? 0 : c;
                10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - d, 2)) ? (this.mozContainerTransition = this.getContainerTransition(0.1)) : (this.mozContainerTransition = this.getContainerTransition(0));
            }
        };
        X.prototype.getContainerTransition = function (a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        da.prototype.reset = function () {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            w && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        da.prototype.getNewObjectTrackingId = function () {
            return ++this.lastObjectId;
        };
        da.prototype.mouseEventHandler = function (a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    b = Na(a),
                    c = null;
                if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                    if (((c = this.objectMap[c]), "dataPoint" === c.objectType)) {
                        var e = this.chart.data[c.dataSeriesIndex],
                            f = e.dataPoints[c.dataPointIndex],
                            g = c.dataPointIndex;
                        c.eventParameter = { x: b.x, y: b.y, dataPoint: f, dataSeries: e.options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart };
                        c.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(c);
                        c = this.objectMap[e.id];
                        c.eventParameter = { x: b.x, y: b.y, dataPoint: f, dataSeries: e.options, dataPointIndex: g, dataSeriesIndex: e.index, chart: this.chart };
                        c.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(this.objectMap[e.id]);
                    } else
                        "legendItem" === c.objectType &&
                            ((e = this.chart.data[c.dataSeriesIndex]),
                            (f = null !== c.dataPointIndex ? e.dataPoints[c.dataPointIndex] : null),
                            (c.eventParameter = { x: b.x, y: b.y, dataSeries: e.options, dataPoint: f, dataPointIndex: c.dataPointIndex, dataSeriesIndex: c.dataSeriesIndex, chart: this.chart }),
                            (c.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }),
                            d.push(c));
                e = [];
                for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                    f = !0;
                    for (c = 0; c < d.length; c++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                            f = !1;
                            break;
                        }
                    f ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : e.push(this.mouseoveredObjectMaps[b]);
                }
                this.mouseoveredObjectMaps = e;
                for (b = 0; b < d.length; b++) {
                    e = !1;
                    for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                            e = !0;
                            break;
                        }
                    e || (this.fireEvent(d[b], "mouseover", a), this.mouseoveredObjectMaps.push(d[b]));
                    "click" === a.type ? this.fireEvent(d[b], "click", a) : "mousemove" === a.type && this.fireEvent(d[b], "mousemove", a);
                }
            }
        };
        da.prototype.fireEvent = function (a, d, b) {
            if (a && d) {
                var c = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && e && f[e[d]] && f[e[d]].call(f, c);
                "mouseout" !== d ? f.cursor && f.cursor !== b.target.style.cursor && (b.target.style.cursor = f.cursor) : ((b.target.style.cursor = this.chart._defaultCursor), delete a.eventParameter, delete a.eventContext);
                "click" === d && "dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
                "click" === d && "dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
            }
        };
        ha.prototype.animate = function (a, d, b, c, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || K.easing.linear;
            b && this.animations.push({ startTime: new Date().getTime() + (a ? a : 0), duration: d, animationCallback: b, onComplete: c });
            for (a = []; 0 < this.animations.length; )
                if (
                    ((d = this.animations.shift()),
                    (b = new Date().getTime()),
                    (c = 0),
                    d.startTime <= b && ((c = e(Math.min(b - d.startTime, d.duration), 0, 1, d.duration)), (c = Math.min(c, 1)), isNaN(c) || !isFinite(c)) && (c = 1),
                    1 > c && a.push(d),
                    d.animationCallback(c),
                    1 <= c && d.onComplete)
                )
                    d.onComplete();
            this.animations = a;
            0 < this.animations.length
                ? (this.animationRequestId = this.chart.requestAnimFrame.call(window, function () {
                      f.animate.call(f);
                  }))
                : (this.chart.isAnimating = !1);
        };
        ha.prototype.cancelAllAnimations = function () {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1;
        };
        var K = {
                yScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas,
                            e = d.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, e - e * a, b.canvas.width / ka, (a * b.canvas.height) / ka);
                    }
                },
                xScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas,
                            e = d.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, e - e * a, 0, (a * b.canvas.width) / ka, b.canvas.height / ka);
                    }
                },
                xClipAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas;
                        b.save();
                        0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, (c.width * a) / ka, c.height / ka);
                        b.restore();
                    }
                },
                fadeInAnimation: function (a, d) {
                    if (0 !== a) {
                        var b = d.dest,
                            c = d.source.canvas;
                        b.save();
                        b.globalAlpha = a;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ka, b.canvas.height / ka);
                        b.restore();
                    }
                },
                easing: {
                    linear: function (a, d, b, c) {
                        return (b * a) / c + d;
                    },
                    easeOutQuad: function (a, d, b, c) {
                        return -b * (a /= c) * (a - 2) + d;
                    },
                    easeOutQuart: function (a, d, b, c) {
                        return -b * ((a = a / c - 1) * a * a * a - 1) + d;
                    },
                    easeInQuad: function (a, d, b, c) {
                        return b * (a /= c) * a + d;
                    },
                    easeInQuart: function (a, d, b, c) {
                        return b * (a /= c) * a * a * a + d;
                    },
                },
            },
            V = {
                drawMarker: function (a, d, b, c, e, f, g, l) {
                    if (b) {
                        var s = 1;
                        b.fillStyle = f ? f : "#000000";
                        b.strokeStyle = g ? g : "#000000";
                        b.lineWidth = l ? l : 0;
                        b.setLineDash && b.setLineDash(N("solid", l));
                        "circle" === c
                            ? (b.moveTo(a, d),
                              b.beginPath(),
                              b.arc(a, d, e / 2, 0, 2 * Math.PI, !1),
                              f && b.fill(),
                              l && (g ? b.stroke() : ((s = b.globalAlpha), (b.globalAlpha = 0.15), (b.strokeStyle = "black"), b.stroke(), (b.globalAlpha = s))))
                            : "square" === c
                            ? (b.beginPath(), b.rect(a - e / 2, d - e / 2, e, e), f && b.fill(), l && (g ? b.stroke() : ((s = b.globalAlpha), (b.globalAlpha = 0.15), (b.strokeStyle = "black"), b.stroke(), (b.globalAlpha = s))))
                            : "triangle" === c
                            ? (b.beginPath(),
                              b.moveTo(a - e / 2, d + e / 2),
                              b.lineTo(a + e / 2, d + e / 2),
                              b.lineTo(a, d - e / 2),
                              b.closePath(),
                              f && b.fill(),
                              l && (g ? b.stroke() : ((s = b.globalAlpha), (b.globalAlpha = 0.15), (b.strokeStyle = "black"), b.stroke(), (b.globalAlpha = s))),
                              b.beginPath())
                            : "cross" === c &&
                              ((b.strokeStyle = f),
                              (b.lineWidth = e / 4),
                              b.beginPath(),
                              b.moveTo(a - e / 2, d - e / 2),
                              b.lineTo(a + e / 2, d + e / 2),
                              b.stroke(),
                              b.moveTo(a + e / 2, d - e / 2),
                              b.lineTo(a - e / 2, d + e / 2),
                              b.stroke());
                    }
                },
                drawMarkers: function (a) {
                    for (var d = 0; d < a.length; d++) {
                        var b = a[d];
                        V.drawMarker(b.x, b.y, b.ctx, b.type, b.size, b.color, b.borderColor, b.borderThickness);
                    }
                },
            };
        return l;
    })();
    y.version = "v3.4.5 GA";
    window.CanvasJS && y && !window.CanvasJS.Chart && (window.CanvasJS.Chart = y);
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext ||
    (function () {
        function V() {
            return this.context_ || (this.context_ = new C(this));
        }
        function W(a, b, c) {
            var g = M.call(arguments, 2);
            return function () {
                return a.apply(b, g.concat(M.call(arguments)));
            };
        }
        function N(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        }
        function O(a) {
            a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
            a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
            a.styleSheets.ex_canvas_ || ((a = a.createStyleSheet()), (a.owningElement.id = "ex_canvas_"), (a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"));
        }
        function X(a) {
            var b = a.srcElement;
            switch (a.propertyName) {
                case "width":
                    b.getContext().clearRect();
                    b.style.width = b.attributes.width.nodeValue + "px";
                    b.firstChild.style.width = b.clientWidth + "px";
                    break;
                case "height":
                    b.getContext().clearRect(), (b.style.height = b.attributes.height.nodeValue + "px"), (b.firstChild.style.height = b.clientHeight + "px");
            }
        }
        function Y(a) {
            a = a.srcElement;
            a.firstChild && ((a.firstChild.style.width = a.clientWidth + "px"), (a.firstChild.style.height = a.clientHeight + "px"));
        }
        function D() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ];
        }
        function t(a, b) {
            for (var c = D(), g = 0; 3 > g; g++)
                for (var e = 0; 3 > e; e++) {
                    for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                    c[g][e] = f;
                }
            return c;
        }
        function P(a, b) {
            b.fillStyle = a.fillStyle;
            b.lineCap = a.lineCap;
            b.lineJoin = a.lineJoin;
            b.lineWidth = a.lineWidth;
            b.miterLimit = a.miterLimit;
            b.shadowBlur = a.shadowBlur;
            b.shadowColor = a.shadowColor;
            b.shadowOffsetX = a.shadowOffsetX;
            b.shadowOffsetY = a.shadowOffsetY;
            b.strokeStyle = a.strokeStyle;
            b.globalAlpha = a.globalAlpha;
            b.font = a.font;
            b.textAlign = a.textAlign;
            b.textBaseline = a.textBaseline;
            b.arcScaleX_ = a.arcScaleX_;
            b.arcScaleY_ = a.arcScaleY_;
            b.lineScale_ = a.lineScale_;
        }
        function Q(a) {
            var b = a.indexOf("(", 3),
                c = a.indexOf(")", b + 1),
                b = a.substring(b + 1, c).split(",");
            if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
            return b;
        }
        function E(a, b, c) {
            return Math.min(c, Math.max(b, a));
        }
        function F(a, b, c) {
            0 > c && c++;
            1 < c && c--;
            return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
        }
        function G(a) {
            if (a in H) return H[a];
            var b,
                c = 1;
            a = String(a);
            if ("#" == a.charAt(0)) b = a;
            else if (/^rgb/.test(a)) {
                c = Q(a);
                b = "#";
                for (var g, e = 0; 3 > e; e++) (g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e]), (b += v[E(g, 0, 255)]);
                c = +c[3];
            } else if (/^hsl/.test(a)) {
                e = c = Q(a);
                b = (parseFloat(e[0]) / 360) % 360;
                0 > b && b++;
                g = E(parseFloat(e[1]) / 100, 0, 1);
                e = E(parseFloat(e[2]) / 100, 0, 1);
                if (0 == g) g = e = b = e;
                else {
                    var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                        d = 2 * e - f;
                    g = F(d, f, b + 1 / 3);
                    e = F(d, f, b);
                    b = F(d, f, b - 1 / 3);
                }
                b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
                c = c[3];
            } else b = Z[a] || a;
            return (H[a] = { color: b, alpha: c });
        }
        function C(a) {
            this.m_ = D();
            this.mStack_ = [];
            this.aStack_ = [];
            this.currentPath_ = [];
            this.fillStyle = this.strokeStyle = "#000";
            this.lineWidth = 1;
            this.lineJoin = "miter";
            this.lineCap = "butt";
            this.miterLimit = 1 * q;
            this.globalAlpha = 1;
            this.font = "10px sans-serif";
            this.textAlign = "left";
            this.textBaseline = "alphabetic";
            this.canvas = a;
            var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
                c = a.ownerDocument.createElement("div");
            c.style.cssText = b;
            a.appendChild(c);
            b = c.cloneNode(!1);
            b.style.backgroundColor = "red";
            b.style.filter = "alpha(opacity=0)";
            a.appendChild(b);
            this.element_ = c;
            this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
        }
        function R(a, b, c, g) {
            a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
            a.currentX_ = g.x;
            a.currentY_ = g.y;
        }
        function S(a, b) {
            var c = G(a.strokeStyle),
                g = c.color,
                c = c.alpha * a.globalAlpha,
                e = a.lineScale_ * a.lineWidth;
            1 > e && (c *= e);
            b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />');
        }
        function T(a, b, c, g) {
            var e = a.fillStyle,
                f = a.arcScaleX_,
                d = a.arcScaleY_,
                k = g.x - c.x,
                n = g.y - c.y;
            if (e instanceof w) {
                var h = 0,
                    l = (g = 0),
                    u = 0,
                    m = 1;
                if ("gradient" == e.type_) {
                    h = e.x1_ / f;
                    c = e.y1_ / d;
                    var p = s(a, e.x0_ / f, e.y0_ / d),
                        h = s(a, h, c),
                        h = (180 * Math.atan2(h.x - p.x, h.y - p.y)) / Math.PI;
                    0 > h && (h += 360);
                    1e-6 > h && (h = 0);
                } else (p = s(a, e.x0_, e.y0_)), (g = (p.x - c.x) / k), (l = (p.y - c.y) / n), (k /= f * q), (n /= d * q), (m = x.max(k, n)), (u = (2 * e.r0_) / m), (m = (2 * e.r1_) / m - u);
                f = e.colors_;
                f.sort(function (a, b) {
                    return a.offset - b.offset;
                });
                d = f.length;
                p = f[0].color;
                c = f[d - 1].color;
                k = f[0].alpha * a.globalAlpha;
                a = f[d - 1].alpha * a.globalAlpha;
                for (var n = [], r = 0; r < d; r++) {
                    var t = f[r];
                    n.push(t.offset * m + u + " " + t.color);
                }
                b.push(
                    '<g_vml_:fill type="',
                    e.type_,
                    '"',
                    ' method="none" focus="100%"',
                    ' color="',
                    p,
                    '"',
                    ' color2="',
                    c,
                    '"',
                    ' colors="',
                    n.join(","),
                    '"',
                    ' opacity="',
                    a,
                    '"',
                    ' g_o_:opacity2="',
                    k,
                    '"',
                    ' angle="',
                    h,
                    '"',
                    ' focusposition="',
                    g,
                    ",",
                    l,
                    '" />'
                );
            } else
                e instanceof I
                    ? k && n && b.push("<g_vml_:fill", ' position="', (-c.x / k) * f * f, ",", (-c.y / n) * d * d, '"', ' type="tile"', ' src="', e.src_, '" />')
                    : ((e = G(a.fillStyle)), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
        }
        function s(a, b, c) {
            a = a.m_;
            return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
        }
        function z(a, b, c) {
            isFinite(b[0][0]) && isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1]) && ((a.m_ = b), c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
        }
        function w(a) {
            this.type_ = a;
            this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
            this.colors_ = [];
        }
        function I(a, b) {
            if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
            if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
            switch (b) {
                case "repeat":
                case null:
                case "":
                    this.repetition_ = "repeat";
                    break;
                case "repeat-x":
                case "repeat-y":
                case "no-repeat":
                    this.repetition_ = b;
                    break;
                default:
                    throw new A("SYNTAX_ERR");
            }
            this.src_ = a.src;
            this.width_ = a.width;
            this.height_ = a.height;
        }
        function A(a) {
            this.code = this[a];
            this.message = a + ": DOM Exception " + this.code;
        }
        var x = Math,
            k = x.round,
            J = x.sin,
            K = x.cos,
            ba = x.abs,
            aa = x.sqrt,
            q = 10,
            r = q / 2;
        navigator.userAgent.match(/MSIE ([\d.]+)?/);
        var M = Array.prototype.slice;
        O(document);
        var U = {
            init: function (a) {
                a = a || document;
                a.createElement("canvas");
                a.attachEvent("onreadystatechange", W(this.init_, this, a));
            },
            init_: function (a) {
                a = a.getElementsByTagName("canvas");
                for (var b = 0; b < a.length; b++) this.initElement(a[b]);
            },
            initElement: function (a) {
                if (!a.getContext) {
                    a.getContext = V;
                    O(a.ownerDocument);
                    a.innerHTML = "";
                    a.attachEvent("onpropertychange", X);
                    a.attachEvent("onresize", Y);
                    var b = a.attributes;
                    b.width && b.width.specified ? (a.style.width = b.width.nodeValue + "px") : (a.width = a.clientWidth);
                    b.height && b.height.specified ? (a.style.height = b.height.nodeValue + "px") : (a.height = a.clientHeight);
                }
                return a;
            },
        };
        U.init();
        for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
        var Z = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                grey: "#808080",
                greenyellow: "#ADFF2F",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                oldlace: "#FDF5E6",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                whitesmoke: "#F5F5F5",
                yellowgreen: "#9ACD32",
            },
            H = {},
            L = {},
            $ = { butt: "flat", round: "round" },
            d = C.prototype;
        d.clearRect = function () {
            this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), (this.textMeasureEl_ = null));
            this.element_.innerHTML = "";
        };
        d.beginPath = function () {
            this.currentPath_ = [];
        };
        d.moveTo = function (a, b) {
            var c = s(this, a, b);
            this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
            this.currentX_ = c.x;
            this.currentY_ = c.y;
        };
        d.lineTo = function (a, b) {
            var c = s(this, a, b);
            this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
            this.currentX_ = c.x;
            this.currentY_ = c.y;
        };
        d.bezierCurveTo = function (a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e);
        };
        d.quadraticCurveTo = function (a, b, c, g) {
            a = s(this, a, b);
            c = s(this, c, g);
            g = { x: this.currentX_ + (2 / 3) * (a.x - this.currentX_), y: this.currentY_ + (2 / 3) * (a.y - this.currentY_) };
            R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
        };
        d.arc = function (a, b, c, g, e, f) {
            c *= q;
            var d = f ? "at" : "wa",
                k = a + K(g) * c - r,
                n = b + J(g) * c - r;
            g = a + K(e) * c - r;
            e = b + J(e) * c - r;
            k != g || f || (k += 0.125);
            a = s(this, a, b);
            k = s(this, k, n);
            g = s(this, g, e);
            this.currentPath_.push({ type: d, x: a.x, y: a.y, radius: c, xStart: k.x, yStart: k.y, xEnd: g.x, yEnd: g.y });
        };
        d.rect = function (a, b, c, g) {
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
        };
        d.strokeRect = function (a, b, c, g) {
            var e = this.currentPath_;
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
            this.stroke();
            this.currentPath_ = e;
        };
        d.fillRect = function (a, b, c, g) {
            var e = this.currentPath_;
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
            this.fill();
            this.currentPath_ = e;
        };
        d.createLinearGradient = function (a, b, c, g) {
            var e = new w("gradient");
            e.x0_ = a;
            e.y0_ = b;
            e.x1_ = c;
            e.y1_ = g;
            return e;
        };
        d.createRadialGradient = function (a, b, c, g, e, f) {
            var d = new w("gradientradial");
            d.x0_ = a;
            d.y0_ = b;
            d.r0_ = c;
            d.x1_ = g;
            d.y1_ = e;
            d.r1_ = f;
            return d;
        };
        d.drawImage = function (a, b) {
            var c, g, e, d, r, y, n, h;
            e = a.runtimeStyle.width;
            d = a.runtimeStyle.height;
            a.runtimeStyle.width = "auto";
            a.runtimeStyle.height = "auto";
            var l = a.width,
                u = a.height;
            a.runtimeStyle.width = e;
            a.runtimeStyle.height = d;
            if (3 == arguments.length) (c = arguments[1]), (g = arguments[2]), (r = y = 0), (n = e = l), (h = d = u);
            else if (5 == arguments.length) (c = arguments[1]), (g = arguments[2]), (e = arguments[3]), (d = arguments[4]), (r = y = 0), (n = l), (h = u);
            else if (9 == arguments.length) (r = arguments[1]), (y = arguments[2]), (n = arguments[3]), (h = arguments[4]), (c = arguments[5]), (g = arguments[6]), (e = arguments[7]), (d = arguments[8]);
            else throw Error("Invalid number of arguments");
            var m = s(this, c, g),
                p = [];
            p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
            if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
                var t = [];
                t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
                var v = s(this, c + e, g),
                    w = s(this, c, g + d);
                c = s(this, c + e, g + d);
                m.x = x.max(m.x, v.x, w.x, c.x);
                m.y = x.max(m.y, v.y, w.y, c.y);
                p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');");
            } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
            p.push(
                ' ">',
                '<g_vml_:image src="',
                a.src,
                '"',
                ' style="width:',
                q * e,
                "px;",
                " height:",
                q * d,
                'px"',
                ' cropleft="',
                r / l,
                '"',
                ' croptop="',
                y / u,
                '"',
                ' cropright="',
                (l - r - n) / l,
                '"',
                ' cropbottom="',
                (u - y - h) / u,
                '"',
                " />",
                "</g_vml_:group>"
            );
            this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
        };
        d.stroke = function (a) {
            var b = [];
            b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"', ' stroked="', !a, '"', ' path="');
            for (var c = { x: null, y: null }, d = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
                var f = this.currentPath_[e];
                switch (f.type) {
                    case "moveTo":
                        b.push(" m ", k(f.x), ",", k(f.y));
                        break;
                    case "lineTo":
                        b.push(" l ", k(f.x), ",", k(f.y));
                        break;
                    case "close":
                        b.push(" x ");
                        f = null;
                        break;
                    case "bezierCurveTo":
                        b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                        break;
                    case "at":
                    case "wa":
                        b.push(
                            " ",
                            f.type,
                            " ",
                            k(f.x - this.arcScaleX_ * f.radius),
                            ",",
                            k(f.y - this.arcScaleY_ * f.radius),
                            " ",
                            k(f.x + this.arcScaleX_ * f.radius),
                            ",",
                            k(f.y + this.arcScaleY_ * f.radius),
                            " ",
                            k(f.xStart),
                            ",",
                            k(f.yStart),
                            " ",
                            k(f.xEnd),
                            ",",
                            k(f.yEnd)
                        );
                }
                if (f) {
                    if (null == c.x || f.x < c.x) c.x = f.x;
                    if (null == d.x || f.x > d.x) d.x = f.x;
                    if (null == c.y || f.y < c.y) c.y = f.y;
                    if (null == d.y || f.y > d.y) d.y = f.y;
                }
            }
            b.push(' ">');
            a ? T(this, b, c, d) : S(this, b);
            b.push("</g_vml_:shape>");
            this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
        };
        d.fill = function () {
            this.stroke(!0);
        };
        d.closePath = function () {
            this.currentPath_.push({ type: "close" });
        };
        d.save = function () {
            var a = {};
            P(this, a);
            this.aStack_.push(a);
            this.mStack_.push(this.m_);
            this.m_ = t(D(), this.m_);
        };
        d.restore = function () {
            this.aStack_.length && (P(this.aStack_.pop(), this), (this.m_ = this.mStack_.pop()));
        };
        d.translate = function (a, b) {
            z(
                this,
                t(
                    [
                        [1, 0, 0],
                        [0, 1, 0],
                        [a, b, 1],
                    ],
                    this.m_
                ),
                !1
            );
        };
        d.rotate = function (a) {
            var b = K(a);
            a = J(a);
            z(
                this,
                t(
                    [
                        [b, a, 0],
                        [-a, b, 0],
                        [0, 0, 1],
                    ],
                    this.m_
                ),
                !1
            );
        };
        d.scale = function (a, b) {
            this.arcScaleX_ *= a;
            this.arcScaleY_ *= b;
            z(
                this,
                t(
                    [
                        [a, 0, 0],
                        [0, b, 0],
                        [0, 0, 1],
                    ],
                    this.m_
                ),
                !0
            );
        };
        d.transform = function (a, b, c, d, e, f) {
            z(
                this,
                t(
                    [
                        [a, b, 0],
                        [c, d, 0],
                        [e, f, 1],
                    ],
                    this.m_
                ),
                !0
            );
        };
        d.setTransform = function (a, b, c, d, e, f) {
            z(
                this,
                [
                    [a, b, 0],
                    [c, d, 0],
                    [e, f, 1],
                ],
                !0
            );
        };
        d.drawText_ = function (a, b, c, d, e) {
            var f = this.m_;
            d = 0;
            var r = 1e3,
                t = 0,
                n = [],
                h;
            h = this.font;
            if (L[h]) h = L[h];
            else {
                var l = document.createElement("div").style;
                try {
                    l.font = h;
                } catch (u) {}
                h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
            }
            var l = h,
                m = this.element_;
            h = {};
            for (var p in l) h[p] = l[p];
            p = parseFloat(m.currentStyle.fontSize);
            m = parseFloat(l.size);
            "number" == typeof l.size
                ? (h.size = l.size)
                : -1 != l.size.indexOf("px")
                ? (h.size = m)
                : -1 != l.size.indexOf("em")
                ? (h.size = p * m)
                : -1 != l.size.indexOf("%")
                ? (h.size = (p / 100) * m)
                : -1 != l.size.indexOf("pt")
                ? (h.size = m / 0.75)
                : (h.size = p);
            h.size *= 0.981;
            p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
            m = this.element_.currentStyle;
            l = this.textAlign.toLowerCase();
            switch (l) {
                case "left":
                case "center":
                case "right":
                    break;
                case "end":
                    l = "ltr" == m.direction ? "right" : "left";
                    break;
                case "start":
                    l = "rtl" == m.direction ? "right" : "left";
                    break;
                default:
                    l = "left";
            }
            switch (this.textBaseline) {
                case "hanging":
                case "top":
                    t = h.size / 1.75;
                    break;
                case "middle":
                    break;
                default:
                case null:
                case "alphabetic":
                case "ideographic":
                case "bottom":
                    t = -h.size / 2.25;
            }
            switch (l) {
                case "right":
                    d = 1e3;
                    r = 0.05;
                    break;
                case "center":
                    d = r = 500;
            }
            b = s(this, b + 0, c + t);
            n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
            e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
            e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
            b = k(b.x / q) + "," + k(b.y / q);
            n.push(
                '<g_vml_:skew on="t" matrix="',
                e,
                '" ',
                ' offset="',
                b,
                '" origin="',
                d,
                ' 0" />',
                '<g_vml_:path textpathok="true" />',
                '<g_vml_:textpath on="true" string="',
                N(a),
                '" style="v-text-align:',
                l,
                ";font:",
                N(p),
                '" /></g_vml_:line>'
            );
            this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
        };
        d.fillText = function (a, b, c, d) {
            this.drawText_(a, b, c, d, !1);
        };
        d.strokeText = function (a, b, c, d) {
            this.drawText_(a, b, c, d, !0);
        };
        d.measureText = function (a) {
            this.textMeasureEl_ ||
                (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), (this.textMeasureEl_ = this.element_.lastChild));
            var b = this.element_.ownerDocument;
            this.textMeasureEl_.innerHTML = "";
            this.textMeasureEl_.style.font = this.font;
            this.textMeasureEl_.appendChild(b.createTextNode(a));
            return { width: this.textMeasureEl_.offsetWidth };
        };
        d.clip = function () {};
        d.arcTo = function () {};
        d.createPattern = function (a, b) {
            return new I(a, b);
        };
        w.prototype.addColorStop = function (a, b) {
            b = G(b);
            this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
        };
        d = A.prototype = Error();
        d.INDEX_SIZE_ERR = 1;
        d.DOMSTRING_SIZE_ERR = 2;
        d.HIERARCHY_REQUEST_ERR = 3;
        d.WRONG_DOCUMENT_ERR = 4;
        d.INVALID_CHARACTER_ERR = 5;
        d.NO_DATA_ALLOWED_ERR = 6;
        d.NO_MODIFICATION_ALLOWED_ERR = 7;
        d.NOT_FOUND_ERR = 8;
        d.NOT_SUPPORTED_ERR = 9;
        d.INUSE_ATTRIBUTE_ERR = 10;
        d.INVALID_STATE_ERR = 11;
        d.SYNTAX_ERR = 12;
        d.INVALID_MODIFICATION_ERR = 13;
        d.NAMESPACE_ERR = 14;
        d.INVALID_ACCESS_ERR = 15;
        d.VALIDATION_ERR = 16;
        d.TYPE_MISMATCH_ERR = 17;
        G_vmlCanvasManager = U;
        CanvasRenderingContext2D = C;
        CanvasGradient = w;
        CanvasPattern = I;
        DOMException = A;
    })();
/*eslint-enable*/
/*jshint ignore:end*/
