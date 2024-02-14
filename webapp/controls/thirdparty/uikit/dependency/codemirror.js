/* CodeMirror - Minified & Bundled
   Generated on 31.3.2016 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
   Modes:
   - css.js
   - gfm.js
   - htmlembedded.js
   - htmlmixed.js
   - javascript.js
   - markdown.js
   - php.js
   - sql.js
   - xml.js
   - xquery.js
   - yaml.js
   Add-ons:
   - active-line.js
   - anyword-hint.js
   - closebrackets.js
   - closetag.js
   - css-hint.js
   - hardwrap.js
   - html-hint.js
   - javascript-hint.js
   - mark-selection.js
   - match-highlighter.js
   - matchbrackets.js
   - matchtags.js
   - overlay.js
   - placeholder.js
   - show-hint.js
   - sql-hint.js
   - xml-fold.js
   - xml-hint.js
 */

   !function(a) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = a();
    else {
        if ("function" == typeof define && define.amd)
            return define([], a);
        (this || window).CodeMirror = a()
    }
}(function() {
    "use strict";
    function x(a, b) {
        if (!(this instanceof x))
            return new x(a,b);
        this.options = b = b ? mg(b) : {},
        mg(Dd, b, !1),
        K(b);
        var c = b.value;
        "string" == typeof c && (c = new df(c,b.mode,null,b.lineSeparator)),
        this.doc = c;
        var d = new x.inputStyles[b.inputStyle](this)
          , e = this.display = new y(a,c,d);
        e.wrapper.CodeMirror = this,
        G(this),
        E(this),
        b.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
        b.autofocus && !p && e.input.focus(),
        O(this),
        this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new bg,
            keySeq: null,
            specialChars: null
        };
        var i = this;
        f && 11 > g && setTimeout(function() {
            i.display.input.reset(!0)
        }, 20),
        sc(this),
        Gg(),
        Yb(this),
        this.curOp.forceUpdate = !0,
        hf(this, c),
        b.autofocus && !p || i.hasFocus() ? setTimeout(ng(ad, this), 20) : bd(this);
        for (var j in Ed)
            Ed.hasOwnProperty(j) && Ed[j](this, b[j], Gd);
        T(this),
        b.finishInit && b.finishInit(this);
        for (var k = 0; k < Kd.length; ++k)
            Kd[k](this);
        $b(this),
        h && b.lineWrapping && "optimizelegibility" == getComputedStyle(e.lineDiv).textRendering && (e.lineDiv.style.textRendering = "auto")
    }
    function y(a, b, d) {
        var e = this;
        this.input = d,
        e.scrollbarFiller = ug("div", null, "CodeMirror-scrollbar-filler"),
        e.scrollbarFiller.setAttribute("cm-not-content", "true"),
        e.gutterFiller = ug("div", null, "CodeMirror-gutter-filler"),
        e.gutterFiller.setAttribute("cm-not-content", "true"),
        e.lineDiv = ug("div", null, "CodeMirror-code"),
        e.selectionDiv = ug("div", null, null, "position: relative; z-index: 1"),
        e.cursorDiv = ug("div", null, "CodeMirror-cursors"),
        e.measure = ug("div", null, "CodeMirror-measure"),
        e.lineMeasure = ug("div", null, "CodeMirror-measure"),
        e.lineSpace = ug("div", [e.measure, e.lineMeasure, e.selectionDiv, e.cursorDiv, e.lineDiv], null, "position: relative; outline: none"),
        e.mover = ug("div", [ug("div", [e.lineSpace], "CodeMirror-lines")], null, "position: relative"),
        e.sizer = ug("div", [e.mover], "CodeMirror-sizer"),
        e.sizerWidth = null,
        e.heightForcer = ug("div", null, null, "position: absolute; height: " + Yf + "px; width: 1px;"),
        e.gutters = ug("div", null, "CodeMirror-gutters"),
        e.lineGutter = null,
        e.scroller = ug("div", [e.sizer, e.heightForcer, e.gutters], "CodeMirror-scroll"),
        e.scroller.setAttribute("tabIndex", "-1"),
        e.wrapper = ug("div", [e.scrollbarFiller, e.gutterFiller, e.scroller], "CodeMirror"),
        f && 8 > g && (e.gutters.style.zIndex = -1,
        e.scroller.style.paddingRight = 0),
        h || c && p || (e.scroller.draggable = !0),
        a && (a.appendChild ? a.appendChild(e.wrapper) : a(e.wrapper)),
        e.viewFrom = e.viewTo = b.first,
        e.reportedViewFrom = e.reportedViewTo = b.first,
        e.view = [],
        e.renderedView = null,
        e.externalMeasured = null,
        e.viewOffset = 0,
        e.lastWrapHeight = e.lastWrapWidth = 0,
        e.updateLineNumbers = null,
        e.nativeBarWidth = e.barHeight = e.barWidth = 0,
        e.scrollbarsClipped = !1,
        e.lineNumWidth = e.lineNumInnerWidth = e.lineNumChars = null,
        e.alignWidgets = !1,
        e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null,
        e.maxLine = null,
        e.maxLineLength = 0,
        e.maxLineChanged = !1,
        e.wheelDX = e.wheelDY = e.wheelStartX = e.wheelStartY = null,
        e.shift = !1,
        e.selForContextMenu = null,
        e.activeTouch = null,
        d.init(e)
    }
    function z(a) {
        a.doc.mode = x.getMode(a.options, a.doc.modeOption),
        A(a)
    }
    function A(a) {
        a.doc.iter(function(a) {
            a.stateAfter && (a.stateAfter = null),
            a.styles && (a.styles = null)
        }),
        a.doc.frontier = a.doc.first,
        lb(a, 100),
        a.state.modeGen++,
        a.curOp && lc(a)
    }
    function B(a) {
        a.options.lineWrapping ? (Cg(a.display.wrapper, "CodeMirror-wrap"),
        a.display.sizer.style.minWidth = "",
        a.display.sizerWidth = null) : (Bg(a.display.wrapper, "CodeMirror-wrap"),
        J(a)),
        D(a),
        lc(a),
        Ib(a),
        setTimeout(function() {
            P(a)
        }, 100)
    }
    function C(a) {
        var b = Ub(a.display)
          , c = a.options.lineWrapping
          , d = c && Math.max(5, a.display.scroller.clientWidth / Vb(a.display) - 3);
        return function(e) {
            if (ze(a.doc, e))
                return 0;
            var f = 0;
            if (e.widgets)
                for (var g = 0; g < e.widgets.length; g++)
                    e.widgets[g].height && (f += e.widgets[g].height);
            return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
        }
    }
    function D(a) {
        var b = a.doc
          , c = C(a);
        b.iter(function(a) {
            var b = c(a);
            b != a.height && mf(a, b)
        })
    }
    function E(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
        Ib(a)
    }
    function F(a) {
        G(a),
        lc(a),
        setTimeout(function() {
            S(a)
        }, 20)
    }
    function G(a) {
        var b = a.display.gutters
          , c = a.options.gutters;
        wg(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d]
              , f = b.appendChild(ug("div", null, "CodeMirror-gutter " + e));
            "CodeMirror-linenumbers" == e && (a.display.lineGutter = f,
            f.style.width = (a.display.lineNumWidth || 1) + "px")
        }
        b.style.display = d ? "" : "none",
        H(a)
    }
    function H(a) {
        var b = a.display.gutters.offsetWidth;
        a.display.sizer.style.marginLeft = b + "px"
    }
    function I(a) {
        if (0 == a.height)
            return 0;
        for (var c, b = a.text.length, d = a; c = se(d); ) {
            var e = c.find(0, !0);
            d = e.from.line,
            b += e.from.ch - e.to.ch
        }
        for (d = a; c = te(d); ) {
            var e = c.find(0, !0);
            b -= d.text.length - e.from.ch,
            d = e.to.line,
            b += d.text.length - e.to.ch
        }
        return b
    }
    function J(a) {
        var b = a.display
          , c = a.doc;
        b.maxLine = jf(c, c.first),
        b.maxLineLength = I(b.maxLine),
        b.maxLineChanged = !0,
        c.iter(function(a) {
            var c = I(a);
            c > b.maxLineLength && (b.maxLineLength = c,
            b.maxLine = a)
        })
    }
    function K(a) {
        var b = ig(a.gutters, "CodeMirror-linenumbers");
        -1 == b && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0),
        a.gutters.splice(b, 1))
    }
    function L(a) {
        var b = a.display
          , c = b.gutters.offsetWidth
          , d = Math.round(a.doc.height + qb(a.display));
        return {
            clientHeight: b.scroller.clientHeight,
            viewHeight: b.wrapper.clientHeight,
            scrollWidth: b.scroller.scrollWidth,
            clientWidth: b.scroller.clientWidth,
            viewWidth: b.wrapper.clientWidth,
            barLeft: a.options.fixedGutter ? c : 0,
            docHeight: d,
            scrollHeight: d + sb(a) + b.barHeight,
            nativeBarWidth: b.nativeBarWidth,
            gutterWidth: c
        }
    }
    function M(a, b, c) {
        this.cm = c;
        var d = this.vert = ug("div", [ug("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
          , e = this.horiz = ug("div", [ug("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        a(d),
        a(e),
        Mf(d, "scroll", function() {
            d.clientHeight && b(d.scrollTop, "vertical")
        }),
        Mf(e, "scroll", function() {
            e.clientWidth && b(e.scrollLeft, "horizontal")
        }),
        this.checkedZeroWidth = !1,
        f && 8 > g && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }
    function N() {}
    function O(a) {
        a.display.scrollbars && (a.display.scrollbars.clear(),
        a.display.scrollbars.addClass && Bg(a.display.wrapper, a.display.scrollbars.addClass)),
        a.display.scrollbars = new x.scrollbarModel[a.options.scrollbarStyle](function(b) {
            a.display.wrapper.insertBefore(b, a.display.scrollbarFiller),
            Mf(b, "mousedown", function() {
                a.state.focused && setTimeout(function() {
                    a.display.input.focus()
                }, 0)
            }),
            b.setAttribute("cm-not-content", "true")
        }
        ,function(b, c) {
            "horizontal" == c ? Lc(a, b) : Kc(a, b)
        }
        ,a),
        a.display.scrollbars.addClass && Cg(a.display.wrapper, a.display.scrollbars.addClass)
    }
    function P(a, b) {
        b || (b = L(a));
        var c = a.display.barWidth
          , d = a.display.barHeight;
        Q(a, b);
        for (var e = 0; 4 > e && c != a.display.barWidth || d != a.display.barHeight; e++)
            c != a.display.barWidth && a.options.lineWrapping && aa(a),
            Q(a, L(a)),
            c = a.display.barWidth,
            d = a.display.barHeight
    }
    function Q(a, b) {
        var c = a.display
          , d = c.scrollbars.update(b);
        c.sizer.style.paddingRight = (c.barWidth = d.right) + "px",
        c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px",
        c.heightForcer.style.borderBottom = d.bottom + "px solid transparent",
        d.right && d.bottom ? (c.scrollbarFiller.style.display = "block",
        c.scrollbarFiller.style.height = d.bottom + "px",
        c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "",
        d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block",
        c.gutterFiller.style.height = d.bottom + "px",
        c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
    }
    function R(a, b, c) {
        var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
        d = Math.floor(d - pb(a));
        var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight
          , f = of(b, d)
          , g = of(b, e);
        if (c && c.ensure) {
            var h = c.ensure.from.line
              , i = c.ensure.to.line;
            f > h ? (f = h,
            g = of(b, pf(jf(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = of(b, pf(jf(b, i)) - a.wrapper.clientHeight),
            g = i)
        }
        return {
            from: f,
            to: Math.max(g, f + 1)
        }
    }
    function S(a) {
        var b = a.display
          , c = b.view;
        if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
            for (var d = V(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)
                if (!c[g].hidden) {
                    a.options.fixedGutter && c[g].gutter && (c[g].gutter.style.left = f);
                    var h = c[g].alignable;
                    if (h)
                        for (var i = 0; i < h.length; i++)
                            h[i].style.left = f
                }
            a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
        }
    }
    function T(a) {
        if (!a.options.lineNumbers)
            return !1;
        var b = a.doc
          , c = U(a.options, b.first + b.size - 1)
          , d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(ug("div", [ug("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
              , f = e.firstChild.offsetWidth
              , g = e.offsetWidth - f;
            return d.lineGutter.style.width = "",
            d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g) + 1,
            d.lineNumWidth = d.lineNumInnerWidth + g,
            d.lineNumChars = d.lineNumInnerWidth ? c.length : -1,
            d.lineGutter.style.width = d.lineNumWidth + "px",
            H(a),
            !0
        }
        return !1
    }
    function U(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber))
    }
    function V(a) {
        return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
    }
    function W(a, b, c) {
        var d = a.display;
        this.viewport = b,
        this.visible = R(d, a.doc, b),
        this.editorIsHidden = !d.wrapper.offsetWidth,
        this.wrapperHeight = d.wrapper.clientHeight,
        this.wrapperWidth = d.wrapper.clientWidth,
        this.oldDisplayWidth = tb(a),
        this.force = c,
        this.dims = ca(a),
        this.events = []
    }
    function X(a) {
        var b = a.display;
        !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth,
        b.heightForcer.style.height = sb(a) + "px",
        b.sizer.style.marginBottom = -b.nativeBarWidth + "px",
        b.sizer.style.borderRightWidth = sb(a) + "px",
        b.scrollbarsClipped = !0)
    }
    function Y(a, b) {
        var c = a.display
          , d = a.doc;
        if (b.editorIsHidden)
            return nc(a),
            !1;
        if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == rc(a))
            return !1;
        T(a) && (nc(a),
        b.dims = ca(a));
        var e = d.first + d.size
          , f = Math.max(b.visible.from - a.options.viewportMargin, d.first)
          , g = Math.min(e, b.visible.to + a.options.viewportMargin);
        c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)),
        c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)),
        w && (f = xe(a.doc, f),
        g = ye(a.doc, g));
        var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
        qc(a, f, g),
        c.viewOffset = pf(jf(a.doc, c.viewFrom)),
        a.display.mover.style.top = c.viewOffset + "px";
        var i = rc(a);
        if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo))
            return !1;
        var j = zg();
        return i > 4 && (c.lineDiv.style.display = "none"),
        da(a, c.updateLineNumbers, b.dims),
        i > 4 && (c.lineDiv.style.display = ""),
        c.renderedView = c.view,
        j && zg() != j && j.offsetHeight && j.focus(),
        wg(c.cursorDiv),
        wg(c.selectionDiv),
        c.gutters.style.height = c.sizer.style.minHeight = 0,
        h && (c.lastWrapHeight = b.wrapperHeight,
        c.lastWrapWidth = b.wrapperWidth,
        lb(a, 400)),
        c.updateLineNumbers = null,
        !0
    }
    function Z(a, b) {
        for (var c = b.viewport, d = !0; (d && a.options.lineWrapping && b.oldDisplayWidth != tb(a) || (c && null != c.top && (c = {
            top: Math.min(a.doc.height + qb(a.display) - ub(a), c.top)
        }),
        b.visible = R(a.display, a.doc, c),
        !(b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo))) && Y(a, b); d = !1) {
            aa(a);
            var e = L(a);
            gb(a),
            P(a, e),
            _(a, e)
        }
        b.signal(a, "update", a),
        (a.display.viewFrom != a.display.reportedViewFrom || a.display.viewTo != a.display.reportedViewTo) && (b.signal(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo),
        a.display.reportedViewFrom = a.display.viewFrom,
        a.display.reportedViewTo = a.display.viewTo)
    }
    function $(a, b) {
        var c = new W(a,b);
        if (Y(a, c)) {
            aa(a),
            Z(a, c);
            var d = L(a);
            gb(a),
            P(a, d),
            _(a, d),
            c.finish()
        }
    }
    function _(a, b) {
        a.display.sizer.style.minHeight = b.docHeight + "px",
        a.display.heightForcer.style.top = b.docHeight + "px",
        a.display.gutters.style.height = b.docHeight + a.display.barHeight + sb(a) + "px"
    }
    function aa(a) {
        for (var b = a.display, c = b.lineDiv.offsetTop, d = 0; d < b.view.length; d++) {
            var h, e = b.view[d];
            if (!e.hidden) {
                if (f && 8 > g) {
                    var i = e.node.offsetTop + e.node.offsetHeight;
                    h = i - c,
                    c = i
                } else {
                    var j = e.node.getBoundingClientRect();
                    h = j.bottom - j.top
                }
                var k = e.line.height - h;
                if (2 > h && (h = Ub(b)),
                (k > .001 || -.001 > k) && (mf(e.line, h),
                ba(e.line),
                e.rest))
                    for (var l = 0; l < e.rest.length; l++)
                        ba(e.rest[l])
            }
        }
    }
    function ba(a) {
        if (a.widgets)
            for (var b = 0; b < a.widgets.length; ++b)
                a.widgets[b].height = a.widgets[b].node.parentNode.offsetHeight
    }
    function ca(a) {
        for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling,
        ++g)
            c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e,
            d[a.options.gutters[g]] = f.clientWidth;
        return {
            fixedPos: V(b),
            gutterTotalWidth: b.gutters.offsetWidth,
            gutterLeft: c,
            gutterWidth: d,
            wrapperWidth: b.wrapper.clientWidth
        }
    }
    function da(a, b, c) {
        function i(b) {
            var c = b.nextSibling;
            return h && q && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b),
            c
        }
        for (var d = a.display, e = a.options.lineNumbers, f = d.lineDiv, g = f.firstChild, j = d.view, k = d.viewFrom, l = 0; l < j.length; l++) {
            var m = j[l];
            if (m.hidden)
                ;
            else if (m.node && m.node.parentNode == f) {
                for (; g != m.node; )
                    g = i(g);
                var o = e && null != b && k >= b && m.lineNumber;
                m.changes && (ig(m.changes, "gutter") > -1 && (o = !1),
                ea(a, m, k, c)),
                o && (wg(m.lineNumber),
                m.lineNumber.appendChild(document.createTextNode(U(a.options, k)))),
                g = m.node.nextSibling
            } else {
                var n = ma(a, m, k, c);
                f.insertBefore(n, g)
            }
            k += m.size
        }
        for (; g; )
            g = i(g)
    }
    function ea(a, b, c, d) {
        for (var e = 0; e < b.changes.length; e++) {
            var f = b.changes[e];
            "text" == f ? ia(a, b) : "gutter" == f ? ka(a, b, c, d) : "class" == f ? ja(b) : "widget" == f && la(a, b, d)
        }
        b.changes = null
    }
    function fa(a) {
        return a.node == a.text && (a.node = ug("div", null, null, "position: relative"),
        a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text),
        a.node.appendChild(a.text),
        f && 8 > g && (a.node.style.zIndex = 2)),
        a.node
    }
    function ga(a) {
        var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
        if (b && (b += " CodeMirror-linebackground"),
        a.background)
            b ? a.background.className = b : (a.background.parentNode.removeChild(a.background),
            a.background = null);
        else if (b) {
            var c = fa(a);
            a.background = c.insertBefore(ug("div", null, b), c.firstChild)
        }
    }
    function ha(a, b) {
        var c = a.display.externalMeasured;
        return c && c.line == b.line ? (a.display.externalMeasured = null,
        b.measure = c.measure,
        c.built) : Te(a, b)
    }
    function ia(a, b) {
        var c = b.text.className
          , d = ha(a, b);
        b.text == b.node && (b.node = d.pre),
        b.text.parentNode.replaceChild(d.pre, b.text),
        b.text = d.pre,
        d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass,
        b.textClass = d.textClass,
        ja(b)) : c && (b.text.className = c)
    }
    function ja(a) {
        ga(a),
        a.line.wrapClass ? fa(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
        var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
        a.text.className = b || ""
    }
    function ka(a, b, c, d) {
        if (b.gutter && (b.node.removeChild(b.gutter),
        b.gutter = null),
        b.gutterBackground && (b.node.removeChild(b.gutterBackground),
        b.gutterBackground = null),
        b.line.gutterClass) {
            var e = fa(b);
            b.gutterBackground = ug("div", null, "CodeMirror-gutter-background " + b.line.gutterClass, "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"),
            e.insertBefore(b.gutterBackground, b.text)
        }
        var f = b.line.gutterMarkers;
        if (a.options.lineNumbers || f) {
            var e = fa(b)
              , g = b.gutter = ug("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px");
            if (a.display.input.setUneditable(g),
            e.insertBefore(g, b.text),
            b.line.gutterClass && (g.className += " " + b.line.gutterClass),
            !a.options.lineNumbers || f && f["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(ug("div", U(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))),
            f)
                for (var h = 0; h < a.options.gutters.length; ++h) {
                    var i = a.options.gutters[h]
                      , j = f.hasOwnProperty(i) && f[i];
                    j && g.appendChild(ug("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
                }
        }
    }
    function la(a, b, c) {
        b.alignable && (b.alignable = null);
        for (var e, d = b.node.firstChild; d; d = e) {
            var e = d.nextSibling;
            "CodeMirror-linewidget" == d.className && b.node.removeChild(d)
        }
        na(a, b, c)
    }
    function ma(a, b, c, d) {
        var e = ha(a, b);
        return b.text = b.node = e.pre,
        e.bgClass && (b.bgClass = e.bgClass),
        e.textClass && (b.textClass = e.textClass),
        ja(b),
        ka(a, b, c, d),
        na(a, b, d),
        b.node
    }
    function na(a, b, c) {
        if (oa(a, b.line, b, c, !0),
        b.rest)
            for (var d = 0; d < b.rest.length; d++)
                oa(a, b.rest[d], b, c, !1)
    }
    function oa(a, b, c, d, e) {
        if (b.widgets)
            for (var f = fa(c), g = 0, h = b.widgets; g < h.length; ++g) {
                var i = h[g]
                  , j = ug("div", [i.node], "CodeMirror-linewidget");
                i.handleMouseEvents || j.setAttribute("cm-ignore-events", "true"),
                pa(i, j, c, d),
                a.display.input.setUneditable(j),
                e && i.above ? f.insertBefore(j, c.gutter || c.text) : f.appendChild(j),
                Sf(i, "redraw")
            }
    }
    function pa(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px",
            a.coverGutter || (e -= d.gutterTotalWidth,
            b.style.paddingLeft = d.gutterTotalWidth + "px"),
            b.style.width = e + "px"
        }
        a.coverGutter && (b.style.zIndex = 5,
        b.style.position = "relative",
        a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
    }
    function sa(a) {
        return qa(a.line, a.ch)
    }
    function ta(a, b) {
        return ra(a, b) < 0 ? b : a
    }
    function ua(a, b) {
        return ra(a, b) < 0 ? a : b
    }
    function va(a) {
        a.state.focused || (a.display.input.focus(),
        ad(a))
    }
    function xa(a, b, c, d, e) {
        var f = a.doc;
        a.display.shift = !1,
        d || (d = f.sel);
        var g = a.state.pasteIncoming || "paste" == e
          , h = f.splitLines(b)
          , i = null;
        if (g && d.ranges.length > 1)
            if (wa && wa.join("\n") == b) {
                if (d.ranges.length % wa.length == 0) {
                    i = [];
                    for (var j = 0; j < wa.length; j++)
                        i.push(f.splitLines(wa[j]))
                }
            } else
                h.length == d.ranges.length && (i = jg(h, function(a) {
                    return [a]
                }));
        for (var j = d.ranges.length - 1; j >= 0; j--) {
            var k = d.ranges[j]
              , l = k.from()
              , m = k.to();
            k.empty() && (c && c > 0 ? l = qa(l.line, l.ch - c) : a.state.overwrite && !g && (m = qa(m.line, Math.min(jf(f, m.line).text.length, m.ch + gg(h).length))));
            var n = a.curOp.updateInput
              , o = {
                from: l,
                to: m,
                text: i ? i[j % i.length] : h,
                origin: e || (g ? "paste" : a.state.cutIncoming ? "cut" : "+input")
            };
            kd(a.doc, o),
            Sf(a, "inputRead", a, o)
        }
        b && !g && za(a, b),
        wd(a),
        a.curOp.updateInput = n,
        a.curOp.typing = !0,
        a.state.pasteIncoming = a.state.cutIncoming = !1
    }
    function ya(a, b) {
        var c = a.clipboardData && a.clipboardData.getData("text/plain");
        return c ? (a.preventDefault(),
        b.isReadOnly() || b.options.disableInput || fc(b, function() {
            xa(b, c, 0, null, "paste")
        }),
        !0) : void 0
    }
    function za(a, b) {
        if (a.options.electricChars && a.options.smartIndent)
            for (var c = a.doc.sel, d = c.ranges.length - 1; d >= 0; d--) {
                var e = c.ranges[d];
                if (!(e.head.ch > 100 || d && c.ranges[d - 1].head.line == e.head.line)) {
                    var f = a.getModeAt(e.head)
                      , g = !1;
                    if (f.electricChars) {
                        for (var h = 0; h < f.electricChars.length; h++)
                            if (b.indexOf(f.electricChars.charAt(h)) > -1) {
                                g = yd(a, e.head.line, "smart");
                                break
                            }
                    } else
                        f.electricInput && f.electricInput.test(jf(a.doc, e.head.line).text.slice(0, e.head.ch)) && (g = yd(a, e.head.line, "smart"));
                    g && Sf(a, "electricInput", a, e.head.line)
                }
            }
    }
    function Aa(a) {
        for (var b = [], c = [], d = 0; d < a.doc.sel.ranges.length; d++) {
            var e = a.doc.sel.ranges[d].head.line
              , f = {
                anchor: qa(e, 0),
                head: qa(e + 1, 0)
            };
            c.push(f),
            b.push(a.getRange(f.anchor, f.head))
        }
        return {
            text: b,
            ranges: c
        }
    }
    function Ba(a) {
        a.setAttribute("autocorrect", "off"),
        a.setAttribute("autocapitalize", "off"),
        a.setAttribute("spellcheck", "false")
    }
    function Ca(a) {
        this.cm = a,
        this.prevInput = "",
        this.pollingFast = !1,
        this.polling = new bg,
        this.inaccurateSelection = !1,
        this.hasSelection = !1,
        this.composing = null
    }
    function Da() {
        var a = ug("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none")
          , b = ug("div", [a], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return h ? a.style.width = "1000px" : a.setAttribute("wrap", "off"),
        o && (a.style.border = "1px solid black"),
        Ba(a),
        b
    }
    function Ea(a) {
        this.cm = a,
        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
        this.polling = new bg,
        this.gracePeriod = !1
    }
    function Fa(a, b) {
        var c = zb(a, b.line);
        if (!c || c.hidden)
            return null;
        var d = jf(a.doc, b.line)
          , e = wb(c, d, b.line)
          , f = qf(d)
          , g = "left";
        if (f) {
            var h = bh(f, b.ch);
            g = h % 2 ? "right" : "left"
        }
        var i = Db(e.map, b.ch, g);
        return i.offset = "right" == i.collapse ? i.end : i.start,
        i
    }
    function Ga(a, b) {
        return b && (a.bad = !0),
        a
    }
    function Ha(a, b, c) {
        var d;
        if (b == a.display.lineDiv) {
            if (d = a.display.lineDiv.childNodes[c],
            !d)
                return Ga(a.clipPos(qa(a.display.viewTo - 1)), !0);
            b = null,
            c = 0
        } else
            for (d = b; ; d = d.parentNode) {
                if (!d || d == a.display.lineDiv)
                    return null;
                if (d.parentNode && d.parentNode == a.display.lineDiv)
                    break
            }
        for (var e = 0; e < a.display.view.length; e++) {
            var f = a.display.view[e];
            if (f.node == d)
                return Ia(f, b, c)
        }
    }
    function Ia(a, b, c) {
        function k(b, c, d) {
            for (var e = -1; e < (j ? j.length : 0); e++)
                for (var f = 0 > e ? i.map : j[e], g = 0; g < f.length; g += 3) {
                    var h = f[g + 2];
                    if (h == b || h == c) {
                        var k = nf(0 > e ? a.line : a.rest[e])
                          , l = f[g] + d;
                        return (0 > d || h != b) && (l = f[g + (d ? 1 : 0)]),
                        qa(k, l)
                    }
                }
        }
        var d = a.text.firstChild
          , e = !1;
        if (!b || !yg(d, b))
            return Ga(qa(nf(a.line), 0), !0);
        if (b == d && (e = !0,
        b = d.childNodes[c],
        c = 0,
        !b)) {
            var f = a.rest ? gg(a.rest) : a.line;
            return Ga(qa(nf(f), f.text.length), e)
        }
        var g = 3 == b.nodeType ? b : null
          , h = b;
        for (g || 1 != b.childNodes.length || 3 != b.firstChild.nodeType || (g = b.firstChild,
        c && (c = g.nodeValue.length)); h.parentNode != d; )
            h = h.parentNode;
        var i = a.measure
          , j = i.maps
          , l = k(g, h, c);
        if (l)
            return Ga(l, e);
        for (var m = h.nextSibling, n = g ? g.nodeValue.length - c : 0; m; m = m.nextSibling) {
            if (l = k(m, m.firstChild, 0))
                return Ga(qa(l.line, l.ch - n), e);
            n += m.textContent.length
        }
        for (var o = h.previousSibling, n = c; o; o = o.previousSibling) {
            if (l = k(o, o.firstChild, -1))
                return Ga(qa(l.line, l.ch + n), e);
            n += m.textContent.length
        }
    }
    function Ja(a, b, c, d, e) {
        function i(a) {
            return function(b) {
                return b.id == a
            }
        }
        function j(b) {
            if (1 == b.nodeType) {
                var c = b.getAttribute("cm-text");
                if (null != c)
                    return "" == c && (c = b.textContent.replace(/\u200b/g, "")),
                    void (f += c);
                var l, k = b.getAttribute("cm-marker");
                if (k) {
                    var m = a.findMarks(qa(d, 0), qa(e + 1, 0), i(+k));
                    return void (m.length && (l = m[0].find()) && (f += kf(a.doc, l.from, l.to).join(h)))
                }
                if ("false" == b.getAttribute("contenteditable"))
                    return;
                for (var n = 0; n < b.childNodes.length; n++)
                    j(b.childNodes[n]);
                /^(pre|div|p)$/i.test(b.nodeName) && (g = !0)
            } else if (3 == b.nodeType) {
                var o = b.nodeValue;
                if (!o)
                    return;
                g && (f += h,
                g = !1),
                f += o
            }
        }
        for (var f = "", g = !1, h = a.doc.lineSeparator(); j(b),
        b != c; )
            b = b.nextSibling;
        return f
    }
    function Ka(a, b) {
        this.ranges = a,
        this.primIndex = b
    }
    function La(a, b) {
        this.anchor = a,
        this.head = b
    }
    function Ma(a, b) {
        var c = a[b];
        a.sort(function(a, b) {
            return ra(a.from(), b.from())
        }),
        b = ig(a, c);
        for (var d = 1; d < a.length; d++) {
            var e = a[d]
              , f = a[d - 1];
            if (ra(f.to(), e.from()) >= 0) {
                var g = ua(f.from(), e.from())
                  , h = ta(f.to(), e.to())
                  , i = f.empty() ? e.from() == e.head : f.from() == f.head;
                b >= d && --b,
                a.splice(--d, 2, new La(i ? h : g,i ? g : h))
            }
        }
        return new Ka(a,b)
    }
    function Na(a, b) {
        return new Ka([new La(a,b || a)],0)
    }
    function Oa(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1))
    }
    function Pa(a, b) {
        if (b.line < a.first)
            return qa(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? qa(c, jf(a, c).text.length) : Qa(b, jf(a, b.line).text.length)
    }
    function Qa(a, b) {
        var c = a.ch;
        return null == c || c > b ? qa(a.line, b) : 0 > c ? qa(a.line, 0) : a
    }
    function Ra(a, b) {
        return b >= a.first && b < a.first + a.size
    }
    function Sa(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = Pa(a, b[d]);
        return c
    }
    function Ta(a, b, c, d) {
        if (a.cm && a.cm.display.shift || a.extend) {
            var e = b.anchor;
            if (d) {
                var f = ra(c, e) < 0;
                f != ra(d, e) < 0 ? (e = c,
                c = d) : f != ra(c, d) < 0 && (c = d)
            }
            return new La(e,c)
        }
        return new La(d || c,c)
    }
    function Ua(a, b, c, d) {
        $a(a, new Ka([Ta(a, a.sel.primary(), b, c)],0), d)
    }
    function Va(a, b, c) {
        for (var d = [], e = 0; e < a.sel.ranges.length; e++)
            d[e] = Ta(a, a.sel.ranges[e], b[e], null);
        var f = Ma(d, a.sel.primIndex);
        $a(a, f, c)
    }
    function Wa(a, b, c, d) {
        var e = a.sel.ranges.slice(0);
        e[b] = c,
        $a(a, Ma(e, a.sel.primIndex), d)
    }
    function Xa(a, b, c, d) {
        $a(a, Na(b, c), d)
    }
    function Ya(a, b, c) {
        var d = {
            ranges: b.ranges,
            update: function(b) {
                this.ranges = [];
                for (var c = 0; c < b.length; c++)
                    this.ranges[c] = new La(Pa(a, b[c].anchor),Pa(a, b[c].head))
            },
            origin: c && c.origin
        };
        return Qf(a, "beforeSelectionChange", a, d),
        a.cm && Qf(a.cm, "beforeSelectionChange", a.cm, d),
        d.ranges != b.ranges ? Ma(d.ranges, d.ranges.length - 1) : b
    }
    function Za(a, b, c) {
        var d = a.history.done
          , e = gg(d);
        e && e.ranges ? (d[d.length - 1] = b,
        _a(a, b, c)) : $a(a, b, c)
    }
    function $a(a, b, c) {
        _a(a, b, c),
        xf(a, a.sel, a.cm ? a.cm.curOp.id : NaN, c)
    }
    function _a(a, b, c) {
        (Wf(a, "beforeSelectionChange") || a.cm && Wf(a.cm, "beforeSelectionChange")) && (b = Ya(a, b, c));
        var d = c && c.bias || (ra(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
        ab(a, cb(a, b, d, !0)),
        c && c.scroll === !1 || !a.cm || wd(a.cm)
    }
    function ab(a, b) {
        b.equals(a.sel) || (a.sel = b,
        a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0,
        Vf(a.cm)),
        Sf(a, "cursorActivity", a))
    }
    function bb(a) {
        ab(a, cb(a, a.sel, null, !1), $f)
    }
    function cb(a, b, c, d) {
        for (var e, f = 0; f < b.ranges.length; f++) {
            var g = b.ranges[f]
              , h = b.ranges.length == a.sel.ranges.length && a.sel.ranges[f]
              , i = eb(a, g.anchor, h && h.anchor, c, d)
              , j = eb(a, g.head, h && h.head, c, d);
            (e || i != g.anchor || j != g.head) && (e || (e = b.ranges.slice(0, f)),
            e[f] = new La(i,j))
        }
        return e ? Ma(e, b.primIndex) : b
    }
    function db(a, b, c, d, e) {
        var f = jf(a, b.line);
        if (f.markedSpans)
            for (var g = 0; g < f.markedSpans.length; ++g) {
                var h = f.markedSpans[g]
                  , i = h.marker;
                if ((null == h.from || (i.inclusiveLeft ? h.from <= b.ch : h.from < b.ch)) && (null == h.to || (i.inclusiveRight ? h.to >= b.ch : h.to > b.ch))) {
                    if (e && (Qf(i, "beforeCursorEnter"),
                    i.explicitlyCleared)) {
                        if (f.markedSpans) {
                            --g;
                            continue
                        }
                        break
                    }
                    if (!i.atomic)
                        continue;
                    if (c) {
                        var k, j = i.find(0 > d ? 1 : -1);
                        if ((0 > d ? i.inclusiveRight : i.inclusiveLeft) && (j = fb(a, j, -d, j && j.line == b.line ? f : null)),
                        j && j.line == b.line && (k = ra(j, c)) && (0 > d ? 0 > k : k > 0))
                            return db(a, j, b, d, e)
                    }
                    var l = i.find(0 > d ? -1 : 1);
                    return (0 > d ? i.inclusiveLeft : i.inclusiveRight) && (l = fb(a, l, d, l.line == b.line ? f : null)),
                    l ? db(a, l, b, d, e) : null
                }
            }
        return b
    }
    function eb(a, b, c, d, e) {
        var f = d || 1
          , g = db(a, b, c, f, e) || !e && db(a, b, c, f, !0) || db(a, b, c, -f, e) || !e && db(a, b, c, -f, !0);
        return g ? g : (a.cantEdit = !0,
        qa(a.first, 0))
    }
    function fb(a, b, c, d) {
        return 0 > c && 0 == b.ch ? b.line > a.first ? Pa(a, qa(b.line - 1)) : null : c > 0 && b.ch == (d || jf(a, b.line)).text.length ? b.line < a.first + a.size - 1 ? qa(b.line + 1, 0) : null : new qa(b.line,b.ch + c)
    }
    function gb(a) {
        a.display.input.showSelection(a.display.input.prepareSelection())
    }
    function hb(a, b) {
        for (var c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++)
            if (b !== !1 || g != c.sel.primIndex) {
                var h = c.sel.ranges[g];
                if (!(h.from().line >= a.display.viewTo || h.to().line < a.display.viewFrom)) {
                    var i = h.empty();
                    (i || a.options.showCursorWhenSelecting) && ib(a, h.head, e),
                    i || jb(a, h, f)
                }
            }
        return d
    }
    function ib(a, b, c) {
        var d = Ob(a, b, "div", null, null, !a.options.singleCursorHeightPerLine)
          , e = c.appendChild(ug("div", "\xa0", "CodeMirror-cursor"));
        if (e.style.left = d.left + "px",
        e.style.top = d.top + "px",
        e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px",
        d.other) {
            var f = c.appendChild(ug("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            f.style.display = "",
            f.style.left = d.other.left + "px",
            f.style.top = d.other.top + "px",
            f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
        }
    }
    function jb(a, b, c) {
        function j(a, b, c, d) {
            0 > b && (b = 0),
            b = Math.round(b),
            d = Math.round(d),
            f.appendChild(ug("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? i - a : c) + "px; height: " + (d - b) + "px"))
        }
        function k(b, c, d) {
            function m(c, d) {
                return Nb(a, qa(b, c), "div", f, d)
            }
            var k, l, f = jf(e, b), g = f.text.length;
            return Tg(qf(f), c || 0, null == d ? g : d, function(a, b, e) {
                var n, o, p, f = m(a, "left");
                if (a == b)
                    n = f,
                    o = p = f.left;
                else {
                    if (n = m(b - 1, "right"),
                    "rtl" == e) {
                        var q = f;
                        f = n,
                        n = q
                    }
                    o = f.left,
                    p = n.right
                }
                null == c && 0 == a && (o = h),
                n.top - f.top > 3 && (j(o, f.top, null, f.bottom),
                o = h,
                f.bottom < n.top && j(o, f.bottom, null, n.top)),
                null == d && b == g && (p = i),
                (!k || f.top < k.top || f.top == k.top && f.left < k.left) && (k = f),
                (!l || n.bottom > l.bottom || n.bottom == l.bottom && n.right > l.right) && (l = n),
                h + 1 > o && (o = h),
                j(o, n.top, p - o, n.bottom)
            }),
            {
                start: k,
                end: l
            }
        }
        var d = a.display
          , e = a.doc
          , f = document.createDocumentFragment()
          , g = rb(a.display)
          , h = g.left
          , i = Math.max(d.sizerWidth, tb(a) - d.sizer.offsetLeft) - g.right
          , l = b.from()
          , m = b.to();
        if (l.line == m.line)
            k(l.line, l.ch, m.ch);
        else {
            var n = jf(e, l.line)
              , o = jf(e, m.line)
              , p = ve(n) == ve(o)
              , q = k(l.line, l.ch, p ? n.text.length + 1 : null).end
              , r = k(m.line, p ? 0 : null, m.ch).start;
            p && (q.top < r.top - 2 ? (j(q.right, q.top, null, q.bottom),
            j(h, r.top, r.left, r.bottom)) : j(q.right, q.top, r.left - q.right, q.bottom)),
            q.bottom < r.top && j(h, q.bottom, null, r.top)
        }
        c.appendChild(f)
    }
    function kb(a) {
        if (a.state.focused) {
            var b = a.display;
            clearInterval(b.blinker);
            var c = !0;
            b.cursorDiv.style.visibility = "",
            a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function() {
                b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
            }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
        }
    }
    function lb(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, ng(mb, a))
    }
    function mb(a) {
        var b = a.doc;
        if (b.frontier < b.first && (b.frontier = b.first),
        !(b.frontier >= a.display.viewTo)) {
            var c = +new Date + a.options.workTime
              , d = Md(b.mode, ob(a, b.frontier))
              , e = [];
            b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function(f) {
                if (b.frontier >= a.display.viewFrom) {
                    var g = f.styles
                      , h = f.text.length > a.options.maxHighlightLength
                      , i = Ne(a, f, h ? Md(b.mode, d) : d, !0);
                    f.styles = i.styles;
                    var j = f.styleClasses
                      , k = i.classes;
                    k ? f.styleClasses = k : j && (f.styleClasses = null);
                    for (var l = !g || g.length != f.styles.length || j != k && (!j || !k || j.bgClass != k.bgClass || j.textClass != k.textClass), m = 0; !l && m < g.length; ++m)
                        l = g[m] != f.styles[m];
                    l && e.push(b.frontier),
                    f.stateAfter = h ? d : Md(b.mode, d)
                } else
                    f.text.length <= a.options.maxHighlightLength && Pe(a, f.text, d),
                    f.stateAfter = b.frontier % 5 == 0 ? Md(b.mode, d) : null;
                return ++b.frontier,
                +new Date > c ? (lb(a, a.options.workDelay),
                !0) : void 0
            }),
            e.length && fc(a, function() {
                for (var b = 0; b < e.length; b++)
                    mc(a, e[b], "text")
            })
        }
    }
    function nb(a, b, c) {
        for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
            if (h <= f.first)
                return f.first;
            var i = jf(f, h - 1);
            if (i.stateAfter && (!c || h <= f.frontier))
                return h;
            var j = cg(i.text, null, a.options.tabSize);
            (null == e || d > j) && (e = h - 1,
            d = j)
        }
        return e
    }
    function ob(a, b, c) {
        var d = a.doc
          , e = a.display;
        if (!d.mode.startState)
            return !0;
        var f = nb(a, b, c)
          , g = f > d.first && jf(d, f - 1).stateAfter;
        return g = g ? Md(d.mode, g) : Nd(d.mode),
        d.iter(f, b, function(c) {
            Pe(a, c.text, g);
            var h = f == b - 1 || f % 5 == 0 || f >= e.viewFrom && f < e.viewTo;
            c.stateAfter = h ? Md(d.mode, g) : null,
            ++f
        }),
        c && (d.frontier = f),
        g
    }
    function pb(a) {
        return a.lineSpace.offsetTop
    }
    function qb(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight
    }
    function rb(a) {
        if (a.cachedPaddingH)
            return a.cachedPaddingH;
        var b = xg(a.measure, ug("pre", "x"))
          , c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle
          , d = {
            left: parseInt(c.paddingLeft),
            right: parseInt(c.paddingRight)
        };
        return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d),
        d
    }
    function sb(a) {
        return Yf - a.display.nativeBarWidth
    }
    function tb(a) {
        return a.display.scroller.clientWidth - sb(a) - a.display.barWidth
    }
    function ub(a) {
        return a.display.scroller.clientHeight - sb(a) - a.display.barHeight
    }
    function vb(a, b, c) {
        var d = a.options.lineWrapping
          , e = d && tb(a);
        if (!b.measure.heights || d && b.measure.width != e) {
            var f = b.measure.heights = [];
            if (d) {
                b.measure.width = e;
                for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                    var i = g[h]
                      , j = g[h + 1];
                    Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
                }
            }
            f.push(c.bottom - c.top)
        }
    }
    function wb(a, b, c) {
        if (a.line == b)
            return {
                map: a.measure.map,
                cache: a.measure.cache
            };
        for (var d = 0; d < a.rest.length; d++)
            if (a.rest[d] == b)
                return {
                    map: a.measure.maps[d],
                    cache: a.measure.caches[d]
                };
        for (var d = 0; d < a.rest.length; d++)
            if (nf(a.rest[d]) > c)
                return {
                    map: a.measure.maps[d],
                    cache: a.measure.caches[d],
                    before: !0
                }
    }
    function xb(a, b) {
        b = ve(b);
        var c = nf(b)
          , d = a.display.externalMeasured = new jc(a.doc,b,c);
        d.lineN = c;
        var e = d.built = Te(a, d);
        return d.text = e.pre,
        xg(a.display.lineMeasure, e.pre),
        d
    }
    function yb(a, b, c, d) {
        return Bb(a, Ab(a, b), c, d)
    }
    function zb(a, b) {
        if (b >= a.display.viewFrom && b < a.display.viewTo)
            return a.display.view[oc(a, b)];
        var c = a.display.externalMeasured;
        return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
    }
    function Ab(a, b) {
        var c = nf(b)
          , d = zb(a, c);
        d && !d.text ? d = null : d && d.changes && (ea(a, d, c, ca(a)),
        a.curOp.forceUpdate = !0),
        d || (d = xb(a, b));
        var e = wb(d, b, c);
        return {
            line: b,
            view: d,
            rect: null,
            map: e.map,
            cache: e.cache,
            before: e.before,
            hasHeights: !1
        }
    }
    function Bb(a, b, c, d, e) {
        b.before && (c = -1);
        var g, f = c + (d || "");
        return b.cache.hasOwnProperty(f) ? g = b.cache[f] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()),
        b.hasHeights || (vb(a, b.view, b.rect),
        b.hasHeights = !0),
        g = Eb(a, b, c, d),
        g.bogus || (b.cache[f] = g)),
        {
            left: g.left,
            right: g.right,
            top: e ? g.rtop : g.top,
            bottom: e ? g.rbottom : g.bottom
        }
    }
    function Db(a, b, c) {
        for (var d, e, f, g, h = 0; h < a.length; h += 3) {
            var i = a[h]
              , j = a[h + 1];
            if (i > b ? (e = 0,
            f = 1,
            g = "left") : j > b ? (e = b - i,
            f = e + 1) : (h == a.length - 3 || b == j && a[h + 3] > b) && (f = j - i,
            e = f - 1,
            b >= j && (g = "right")),
            null != e) {
                if (d = a[h + 2],
                i == j && c == (d.insertLeft ? "left" : "right") && (g = c),
                "left" == c && 0 == e)
                    for (; h && a[h - 2] == a[h - 3] && a[h - 1].insertLeft; )
                        d = a[(h -= 3) + 2],
                        g = "left";
                if ("right" == c && e == j - i)
                    for (; h < a.length - 3 && a[h + 3] == a[h + 4] && !a[h + 5].insertLeft; )
                        d = a[(h += 3) + 2],
                        g = "right";
                break
            }
        }
        return {
            node: d,
            start: e,
            end: f,
            collapse: g,
            coverStart: i,
            coverEnd: j
        }
    }
    function Eb(a, b, c, d) {
        var l, e = Db(b.map, c, d), h = e.node, i = e.start, j = e.end, k = e.collapse;
        if (3 == h.nodeType) {
            for (var m = 0; 4 > m; m++) {
                for (; i && tg(b.line.text.charAt(e.coverStart + i)); )
                    --i;
                for (; e.coverStart + j < e.coverEnd && tg(b.line.text.charAt(e.coverStart + j)); )
                    ++j;
                if (f && 9 > g && 0 == i && j == e.coverEnd - e.coverStart)
                    l = h.parentNode.getBoundingClientRect();
                else if (f && a.options.lineWrapping) {
                    var n = vg(h, i, j).getClientRects();
                    l = n.length ? n["right" == d ? n.length - 1 : 0] : Cb
                } else
                    l = vg(h, i, j).getBoundingClientRect() || Cb;
                if (l.left || l.right || 0 == i)
                    break;
                j = i,
                i -= 1,
                k = "right"
            }
            f && 11 > g && (l = Fb(a.display.measure, l))
        } else {
            i > 0 && (k = d = "right");
            var n;
            l = a.options.lineWrapping && (n = h.getClientRects()).length > 1 ? n["right" == d ? n.length - 1 : 0] : h.getBoundingClientRect()
        }
        if (f && 9 > g && !i && (!l || !l.left && !l.right)) {
            var o = h.parentNode.getClientRects()[0];
            l = o ? {
                left: o.left,
                right: o.left + Vb(a.display),
                top: o.top,
                bottom: o.bottom
            } : Cb
        }
        for (var p = l.top - b.rect.top, q = l.bottom - b.rect.top, r = (p + q) / 2, s = b.view.measure.heights, m = 0; m < s.length - 1 && !(r < s[m]); m++)
            ;
        var t = m ? s[m - 1] : 0
          , u = s[m]
          , v = {
            left: ("right" == k ? l.right : l.left) - b.rect.left,
            right: ("left" == k ? l.left : l.right) - b.rect.left,
            top: t,
            bottom: u
        };
        return l.left || l.right || (v.bogus = !0),
        a.options.singleCursorHeightPerLine || (v.rtop = p,
        v.rbottom = q),
        v
    }
    function Fb(a, b) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Rg(a))
            return b;
        var c = screen.logicalXDPI / screen.deviceXDPI
          , d = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: b.left * c,
            right: b.right * c,
            top: b.top * d,
            bottom: b.bottom * d
        }
    }
    function Gb(a) {
        if (a.measure && (a.measure.cache = {},
        a.measure.heights = null,
        a.rest))
            for (var b = 0; b < a.rest.length; b++)
                a.measure.caches[b] = {}
    }
    function Hb(a) {
        a.display.externalMeasure = null,
        wg(a.display.lineMeasure);
        for (var b = 0; b < a.display.view.length; b++)
            Gb(a.display.view[b])
    }
    function Ib(a) {
        Hb(a),
        a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null,
        a.options.lineWrapping || (a.display.maxLineChanged = !0),
        a.display.lineNumChars = null
    }
    function Jb() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function Kb() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function Lb(a, b, c, d) {
        if (b.widgets)
            for (var e = 0; e < b.widgets.length; ++e)
                if (b.widgets[e].above) {
                    var f = De(b.widgets[e]);
                    c.top += f,
                    c.bottom += f
                }
        if ("line" == d)
            return c;
        d || (d = "local");
        var g = pf(b);
        if ("local" == d ? g += pb(a.display) : g -= a.display.viewOffset,
        "page" == d || "window" == d) {
            var h = a.display.lineSpace.getBoundingClientRect();
            g += h.top + ("window" == d ? 0 : Kb());
            var i = h.left + ("window" == d ? 0 : Jb());
            c.left += i,
            c.right += i
        }
        return c.top += g,
        c.bottom += g,
        c
    }
    function Mb(a, b, c) {
        if ("div" == c)
            return b;
        var d = b.left
          , e = b.top;
        if ("page" == c)
            d -= Jb(),
            e -= Kb();
        else if ("local" == c || !c) {
            var f = a.display.sizer.getBoundingClientRect();
            d += f.left,
            e += f.top
        }
        var g = a.display.lineSpace.getBoundingClientRect();
        return {
            left: d - g.left,
            top: e - g.top
        }
    }
    function Nb(a, b, c, d, e) {
        return d || (d = jf(a.doc, b.line)),
        Lb(a, d, yb(a, d, b.ch, e), c)
    }
    function Ob(a, b, c, d, e, f) {
        function g(b, g) {
            var h = Bb(a, e, b, g ? "right" : "left", f);
            return g ? h.left = h.right : h.right = h.left,
            Lb(a, d, h, c)
        }
        function h(a, b) {
            var c = i[b]
              , d = c.level % 2;
            return a == Ug(c) && b && c.level < i[b - 1].level ? (c = i[--b],
            a = Vg(c) - (c.level % 2 ? 0 : 1),
            d = !0) : a == Vg(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b],
            a = Ug(c) - c.level % 2,
            d = !1),
            d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
        }
        d = d || jf(a.doc, b.line),
        e || (e = Ab(a, d));
        var i = qf(d)
          , j = b.ch;
        if (!i)
            return g(j);
        var k = bh(i, j)
          , l = h(j, k);
        return null != ah && (l.other = h(j, ah)),
        l
    }
    function Pb(a, b) {
        var c = 0
          , b = Pa(a.doc, b);
        a.options.lineWrapping || (c = Vb(a.display) * b.ch);
        var d = jf(a.doc, b.line)
          , e = pf(d) + pb(a.display);
        return {
            left: c,
            right: c,
            top: e,
            bottom: e + d.height
        }
    }
    function Qb(a, b, c, d) {
        var e = qa(a, b);
        return e.xRel = d,
        c && (e.outside = !0),
        e
    }
    function Rb(a, b, c) {
        var d = a.doc;
        if (c += a.display.viewOffset,
        0 > c)
            return Qb(d.first, 0, !0, -1);
        var e = of(d, c)
          , f = d.first + d.size - 1;
        if (e > f)
            return Qb(d.first + d.size - 1, jf(d, f).text.length, !0, 1);
        0 > b && (b = 0);
        for (var g = jf(d, e); ; ) {
            var h = Sb(a, g, e, b, c)
              , i = te(g)
              , j = i && i.find(0, !0);
            if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0))
                return h;
            e = nf(g = j.to.line)
        }
    }
    function Sb(a, b, c, d, e) {
        function j(d) {
            var e = Ob(a, qa(c, d), "line", b, i);
            return g = !0,
            f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1,
            e.left)
        }
        var f = e - pf(b)
          , g = !1
          , h = 2 * a.display.wrapper.clientWidth
          , i = Ab(a, b)
          , k = qf(b)
          , l = b.text.length
          , m = Wg(b)
          , n = Xg(b)
          , o = j(m)
          , p = g
          , q = j(n)
          , r = g;
        if (d > q)
            return Qb(c, n, r, 1);
        for (; ; ) {
            if (k ? n == m || n == dh(b, m, 1) : 1 >= n - m) {
                for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); tg(b.text.charAt(s)); )
                    ++s;
                var u = Qb(c, s, s == m ? p : r, -1 > t ? -1 : t > 1 ? 1 : 0);
                return u
            }
            var v = Math.ceil(l / 2)
              , w = m + v;
            if (k) {
                w = m;
                for (var x = 0; v > x; ++x)
                    w = dh(b, w, 1)
            }
            var y = j(w);
            y > d ? (n = w,
            q = y,
            (r = g) && (q += 1e3),
            l = v) : (m = w,
            o = y,
            p = g,
            l -= v)
        }
    }
    function Ub(a) {
        if (null != a.cachedTextHeight)
            return a.cachedTextHeight;
        if (null == Tb) {
            Tb = ug("pre");
            for (var b = 0; 49 > b; ++b)
                Tb.appendChild(document.createTextNode("x")),
                Tb.appendChild(ug("br"));
            Tb.appendChild(document.createTextNode("x"))
        }
        xg(a.measure, Tb);
        var c = Tb.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c),
        wg(a.measure),
        c || 1
    }
    function Vb(a) {
        if (null != a.cachedCharWidth)
            return a.cachedCharWidth;
        var b = ug("span", "xxxxxxxxxx")
          , c = ug("pre", [b]);
        xg(a.measure, c);
        var d = b.getBoundingClientRect()
          , e = (d.right - d.left) / 10;
        return e > 2 && (a.cachedCharWidth = e),
        e || 10
    }
    function Yb(a) {
        a.curOp = {
            cm: a,
            viewChanged: !1,
            startHeight: a.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Xb
        },
        Wb ? Wb.ops.push(a.curOp) : a.curOp.ownsGroup = Wb = {
            ops: [a.curOp],
            delayedCallbacks: []
        }
    }
    function Zb(a) {
        var b = a.delayedCallbacks
          , c = 0;
        do {
            for (; c < b.length; c++)
                b[c].call(null);
            for (var d = 0; d < a.ops.length; d++) {
                var e = a.ops[d];
                if (e.cursorActivityHandlers)
                    for (; e.cursorActivityCalled < e.cursorActivityHandlers.length; )
                        e.cursorActivityHandlers[e.cursorActivityCalled++].call(null, e.cm)
            }
        } while (c < b.length)
    }
    function $b(a) {
        var b = a.curOp
          , c = b.ownsGroup;
        if (c)
            try {
                Zb(c)
            } finally {
                Wb = null;
                for (var d = 0; d < c.ops.length; d++)
                    c.ops[d].cm.curOp = null;
                _b(c)
            }
    }
    function _b(a) {
        for (var b = a.ops, c = 0; c < b.length; c++)
            ac(b[c]);
        for (var c = 0; c < b.length; c++)
            bc(b[c]);
        for (var c = 0; c < b.length; c++)
            cc(b[c]);
        for (var c = 0; c < b.length; c++)
            dc(b[c]);
        for (var c = 0; c < b.length; c++)
            ec(b[c])
    }
    function ac(a) {
        var b = a.cm
          , c = b.display;
        X(b),
        a.updateMaxLine && J(b),
        a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping,
        a.update = a.mustUpdate && new W(b,a.mustUpdate && {
            top: a.scrollTop,
            ensure: a.scrollToPos
        },a.forceUpdate)
    }
    function bc(a) {
        a.updatedDisplay = a.mustUpdate && Y(a.cm, a.update)
    }
    function cc(a) {
        var b = a.cm
          , c = b.display;
        a.updatedDisplay && aa(b),
        a.barMeasure = L(b),
        c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = yb(b, c.maxLine, c.maxLine.text.length).left + 3,
        b.display.sizerWidth = a.adjustWidthTo,
        a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + sb(b) + b.display.barWidth),
        a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - tb(b))),
        (a.updatedDisplay || a.selectionChanged) && (a.preparedSelection = c.input.prepareSelection())
    }
    function dc(a) {
        var b = a.cm;
        null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px",
        a.maxScrollLeft < b.doc.scrollLeft && Lc(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0),
        b.display.maxLineChanged = !1),
        a.preparedSelection && b.display.input.showSelection(a.preparedSelection),
        (a.updatedDisplay || a.startHeight != b.doc.height) && P(b, a.barMeasure),
        a.updatedDisplay && _(b, a.barMeasure),
        a.selectionChanged && kb(b),
        b.state.focused && a.updateInput && b.display.input.reset(a.typing),
        !a.focus || a.focus != zg() || document.hasFocus && !document.hasFocus() || va(a.cm)
    }
    function ec(a) {
        var b = a.cm
          , c = b.display
          , d = b.doc;
        if (a.updatedDisplay && Z(b, a.update),
        null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null),
        null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)),
        c.scrollbars.setScrollTop(d.scrollTop),
        c.scroller.scrollTop = d.scrollTop),
        null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - c.scroller.clientWidth, a.scrollLeft)),
        c.scrollbars.setScrollLeft(d.scrollLeft),
        c.scroller.scrollLeft = d.scrollLeft,
        S(b)),
        a.scrollToPos) {
            var e = sd(b, Pa(d, a.scrollToPos.from), Pa(d, a.scrollToPos.to), a.scrollToPos.margin);
            a.scrollToPos.isCursor && b.state.focused && rd(b, e)
        }
        var f = a.maybeHiddenMarkers
          , g = a.maybeUnhiddenMarkers;
        if (f)
            for (var h = 0; h < f.length; ++h)
                f[h].lines.length || Qf(f[h], "hide");
        if (g)
            for (var h = 0; h < g.length; ++h)
                g[h].lines.length && Qf(g[h], "unhide");
        c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop),
        a.changeObjs && Qf(b, "changes", b, a.changeObjs),
        a.update && a.update.finish()
    }
    function fc(a, b) {
        if (a.curOp)
            return b();
        Yb(a);
        try {
            return b()
        } finally {
            $b(a)
        }
    }
    function gc(a, b) {
        return function() {
            if (a.curOp)
                return b.apply(a, arguments);
            Yb(a);
            try {
                return b.apply(a, arguments)
            } finally {
                $b(a)
            }
        }
    }
    function hc(a) {
        return function() {
            if (this.curOp)
                return a.apply(this, arguments);
            Yb(this);
            try {
                return a.apply(this, arguments)
            } finally {
                $b(this)
            }
        }
    }
    function ic(a) {
        return function() {
            var b = this.cm;
            if (!b || b.curOp)
                return a.apply(this, arguments);
            Yb(b);
            try {
                return a.apply(this, arguments)
            } finally {
                $b(b)
            }
        }
    }
    function jc(a, b, c) {
        this.line = b,
        this.rest = we(b),
        this.size = this.rest ? nf(gg(this.rest)) - c + 1 : 1,
        this.node = this.text = null,
        this.hidden = ze(a, b)
    }
    function kc(a, b, c) {
        for (var e, d = [], f = b; c > f; f = e) {
            var g = new jc(a.doc,jf(a.doc, f),f);
            e = f + g.size,
            d.push(g)
        }
        return d
    }
    function lc(a, b, c, d) {
        null == b && (b = a.doc.first),
        null == c && (c = a.doc.first + a.doc.size),
        d || (d = 0);
        var e = a.display;
        if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b),
        a.curOp.viewChanged = !0,
        b >= e.viewTo)
            w && xe(a.doc, b) < e.viewTo && nc(a);
        else if (c <= e.viewFrom)
            w && ye(a.doc, c + d) > e.viewFrom ? nc(a) : (e.viewFrom += d,
            e.viewTo += d);
        else if (b <= e.viewFrom && c >= e.viewTo)
            nc(a);
        else if (b <= e.viewFrom) {
            var f = pc(a, c, c + d, 1);
            f ? (e.view = e.view.slice(f.index),
            e.viewFrom = f.lineN,
            e.viewTo += d) : nc(a)
        } else if (c >= e.viewTo) {
            var f = pc(a, b, b, -1);
            f ? (e.view = e.view.slice(0, f.index),
            e.viewTo = f.lineN) : nc(a)
        } else {
            var g = pc(a, b, b, -1)
              , h = pc(a, c, c + d, 1);
            g && h ? (e.view = e.view.slice(0, g.index).concat(kc(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)),
            e.viewTo += d) : nc(a)
        }
        var i = e.externalMeasured;
        i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
    }
    function mc(a, b, c) {
        a.curOp.viewChanged = !0;
        var d = a.display
          , e = a.display.externalMeasured;
        if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null),
        !(b < d.viewFrom || b >= d.viewTo)) {
            var f = d.view[oc(a, b)];
            if (null != f.node) {
                var g = f.changes || (f.changes = []);
                -1 == ig(g, c) && g.push(c)
            }
        }
    }
    function nc(a) {
        a.display.viewFrom = a.display.viewTo = a.doc.first,
        a.display.view = [],
        a.display.viewOffset = 0
    }
    function oc(a, b) {
        if (b >= a.display.viewTo)
            return null;
        if (b -= a.display.viewFrom,
        0 > b)
            return null;
        for (var c = a.display.view, d = 0; d < c.length; d++)
            if (b -= c[d].size,
            0 > b)
                return d
    }
    function pc(a, b, c, d) {
        var f, e = oc(a, b), g = a.display.view;
        if (!w || c == a.doc.first + a.doc.size)
            return {
                index: e,
                lineN: c
            };
        for (var h = 0, i = a.display.viewFrom; e > h; h++)
            i += g[h].size;
        if (i != b) {
            if (d > 0) {
                if (e == g.length - 1)
                    return null;
                f = i + g[e].size - b,
                e++
            } else
                f = i - b;
            b += f,
            c += f
        }
        for (; xe(a.doc, c) != c; ) {
            if (e == (0 > d ? 0 : g.length - 1))
                return null;
            c += d * g[e - (0 > d ? 1 : 0)].size,
            e += d
        }
        return {
            index: e,
            lineN: c
        }
    }
    function qc(a, b, c) {
        var d = a.display
          , e = d.view;
        0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = kc(a, b, c),
        d.viewFrom = b) : (d.viewFrom > b ? d.view = kc(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(oc(a, b))),
        d.viewFrom = b,
        d.viewTo < c ? d.view = d.view.concat(kc(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, oc(a, c)))),
        d.viewTo = c
    }
    function rc(a) {
        for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            e.hidden || e.node && !e.changes || ++c
        }
        return c
    }
    function sc(a) {
        function e() {
            b.activeTouch && (c = setTimeout(function() {
                b.activeTouch = null
            }, 1e3),
            d = b.activeTouch,
            d.end = +new Date)
        }
        function h(a) {
            if (1 != a.touches.length)
                return !1;
            var b = a.touches[0];
            return b.radiusX <= 1 && b.radiusY <= 1
        }
        function i(a, b) {
            if (null == b.left)
                return !0;
            var c = b.left - a.left
              , d = b.top - a.top;
            return c * c + d * d > 400
        }
        var b = a.display;
        Mf(b.scroller, "mousedown", gc(a, xc)),
        f && 11 > g ? Mf(b.scroller, "dblclick", gc(a, function(b) {
            if (!Uf(a, b)) {
                var c = wc(a, b);
                if (c && !Ec(a, b) && !vc(a.display, b)) {
                    Gf(b);
                    var d = a.findWordAt(c);
                    Ua(a.doc, d.anchor, d.head)
                }
            }
        })) : Mf(b.scroller, "dblclick", function(b) {
            Uf(a, b) || Gf(b)
        }),
        u || Mf(b.scroller, "contextmenu", function(b) {
            cd(a, b)
        });
        var c, d = {
            end: 0
        };
        Mf(b.scroller, "touchstart", function(e) {
            if (!Uf(a, e) && !h(e)) {
                clearTimeout(c);
                var f = +new Date;
                b.activeTouch = {
                    start: f,
                    moved: !1,
                    prev: f - d.end <= 300 ? d : null
                },
                1 == e.touches.length && (b.activeTouch.left = e.touches[0].pageX,
                b.activeTouch.top = e.touches[0].pageY)
            }
        }),
        Mf(b.scroller, "touchmove", function() {
            b.activeTouch && (b.activeTouch.moved = !0)
        }),
        Mf(b.scroller, "touchend", function(c) {
            var d = b.activeTouch;
            if (d && !vc(b, c) && null != d.left && !d.moved && new Date - d.start < 300) {
                var g, f = a.coordsChar(b.activeTouch, "page");
                g = !d.prev || i(d, d.prev) ? new La(f,f) : !d.prev.prev || i(d, d.prev.prev) ? a.findWordAt(f) : new La(qa(f.line, 0),Pa(a.doc, qa(f.line + 1, 0))),
                a.setSelection(g.anchor, g.head),
                a.focus(),
                Gf(c)
            }
            e()
        }),
        Mf(b.scroller, "touchcancel", e),
        Mf(b.scroller, "scroll", function() {
            b.scroller.clientHeight && (Kc(a, b.scroller.scrollTop),
            Lc(a, b.scroller.scrollLeft, !0),
            Qf(a, "scroll", a))
        }),
        Mf(b.scroller, "mousewheel", function(b) {
            Pc(a, b)
        }),
        Mf(b.scroller, "DOMMouseScroll", function(b) {
            Pc(a, b)
        }),
        Mf(b.wrapper, "scroll", function() {
            b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
        }),
        b.dragFunctions = {
            enter: function(b) {
                Uf(a, b) || Jf(b)
            },
            over: function(b) {
                Uf(a, b) || (Ic(a, b),
                Jf(b))
            },
            start: function(b) {
                Hc(a, b)
            },
            drop: gc(a, Gc),
            leave: function(b) {
                Uf(a, b) || Jc(a)
            }
        };
        var j = b.input.getField();
        Mf(j, "keyup", function(b) {
            Zc.call(a, b)
        }),
        Mf(j, "keydown", gc(a, Xc)),
        Mf(j, "keypress", gc(a, $c)),
        Mf(j, "focus", ng(ad, a)),
        Mf(j, "blur", ng(bd, a))
    }
    function tc(a, b, c) {
        var d = c && c != x.Init;
        if (!b != !d) {
            var e = a.display.dragFunctions
              , f = b ? Mf : Pf;
            f(a.display.scroller, "dragstart", e.start),
            f(a.display.scroller, "dragenter", e.enter),
            f(a.display.scroller, "dragover", e.over),
            f(a.display.scroller, "dragleave", e.leave),
            f(a.display.scroller, "drop", e.drop)
        }
    }
    function uc(a) {
        var b = a.display;
        (b.lastWrapHeight != b.wrapper.clientHeight || b.lastWrapWidth != b.wrapper.clientWidth) && (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null,
        b.scrollbarsClipped = !1,
        a.setSize())
    }
    function vc(a, b) {
        for (var c = Kf(b); c != a.wrapper; c = c.parentNode)
            if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover)
                return !0
    }
    function wc(a, b, c, d) {
        var e = a.display;
        if (!c && "true" == Kf(b).getAttribute("cm-not-content"))
            return null;
        var f, g, h = e.lineSpace.getBoundingClientRect();
        try {
            f = b.clientX - h.left,
            g = b.clientY - h.top
        } catch (b) {
            return null
        }
        var j, i = Rb(a, f, g);
        if (d && 1 == i.xRel && (j = jf(a.doc, i.line).text).length == i.ch) {
            var k = cg(j, j.length, a.options.tabSize) - j.length;
            i = qa(i.line, Math.max(0, Math.round((f - rb(a.display).left) / Vb(a.display)) - k))
        }
        return i
    }
    function xc(a) {
        var b = this
          , c = b.display;
        if (!(Uf(b, a) || c.activeTouch && c.input.supportsTouch())) {
            if (c.shift = a.shiftKey,
            vc(c, a))
                return void (h || (c.scroller.draggable = !1,
                setTimeout(function() {
                    c.scroller.draggable = !0
                }, 100)));
            if (!Ec(b, a)) {
                var d = wc(b, a);
                switch (window.focus(),
                Lf(a)) {
                case 1:
                    b.state.selectingText ? b.state.selectingText(a) : d ? Ac(b, a, d) : Kf(a) == c.scroller && Gf(a);
                    break;
                case 2:
                    h && (b.state.lastMiddleDown = +new Date),
                    d && Ua(b.doc, d),
                    setTimeout(function() {
                        c.input.focus()
                    }, 20),
                    Gf(a);
                    break;
                case 3:
                    u ? cd(b, a) : _c(b)
                }
            }
        }
    }
    function Ac(a, b, c) {
        f ? setTimeout(ng(va, a), 0) : a.curOp.focus = zg();
        var e, d = +new Date;
        zc && zc.time > d - 400 && 0 == ra(zc.pos, c) ? e = "triple" : yc && yc.time > d - 400 && 0 == ra(yc.pos, c) ? (e = "double",
        zc = {
            time: d,
            pos: c
        }) : (e = "single",
        yc = {
            time: d,
            pos: c
        });
        var i, g = a.doc.sel, h = q ? b.metaKey : b.ctrlKey;
        a.options.dragDrop && Ig && !a.isReadOnly() && "single" == e && (i = g.contains(c)) > -1 && (ra((i = g.ranges[i]).from(), c) < 0 || c.xRel > 0) && (ra(i.to(), c) > 0 || c.xRel < 0) ? Bc(a, b, c, h) : Cc(a, b, c, e, h)
    }
    function Bc(a, b, c, d) {
        var e = a.display
          , i = +new Date
          , j = gc(a, function(k) {
            h && (e.scroller.draggable = !1),
            a.state.draggingText = !1,
            Pf(document, "mouseup", j),
            Pf(e.scroller, "drop", j),
            Math.abs(b.clientX - k.clientX) + Math.abs(b.clientY - k.clientY) < 10 && (Gf(k),
            !d && +new Date - 200 < i && Ua(a.doc, c),
            h || f && 9 == g ? setTimeout(function() {
                document.body.focus(),
                e.input.focus()
            }, 20) : e.input.focus())
        });
        h && (e.scroller.draggable = !0),
        a.state.draggingText = j,
        e.scroller.dragDrop && e.scroller.dragDrop(),
        Mf(document, "mouseup", j),
        Mf(e.scroller, "drop", j)
    }
    function Cc(a, b, c, d, e) {
        function o(b) {
            if (0 != ra(n, b))
                if (n = b,
                "rect" == d) {
                    for (var e = [], f = a.options.tabSize, k = cg(jf(g, c.line).text, c.ch, f), l = cg(jf(g, b.line).text, b.ch, f), m = Math.min(k, l), o = Math.max(k, l), p = Math.min(c.line, b.line), q = Math.min(a.lastLine(), Math.max(c.line, b.line)); q >= p; p++) {
                        var r = jf(g, p).text
                          , s = dg(r, m, f);
                        m == o ? e.push(new La(qa(p, s),qa(p, s))) : r.length > s && e.push(new La(qa(p, s),qa(p, dg(r, o, f))))
                    }
                    e.length || e.push(new La(c,c)),
                    $a(g, Ma(j.ranges.slice(0, i).concat(e), i), {
                        origin: "*mouse",
                        scroll: !1
                    }),
                    a.scrollIntoView(b)
                } else {
                    var t = h
                      , u = t.anchor
                      , v = b;
                    if ("single" != d) {
                        if ("double" == d)
                            var w = a.findWordAt(b);
                        else
                            var w = new La(qa(b.line, 0),Pa(g, qa(b.line + 1, 0)));
                        ra(w.anchor, u) > 0 ? (v = w.head,
                        u = ua(t.from(), w.anchor)) : (v = w.anchor,
                        u = ta(t.to(), w.head))
                    }
                    var e = j.ranges.slice(0);
                    e[i] = new La(Pa(g, u),v),
                    $a(g, Ma(e, i), _f)
                }
        }
        function r(b) {
            var c = ++q
              , e = wc(a, b, !0, "rect" == d);
            if (e)
                if (0 != ra(e, n)) {
                    a.curOp.focus = zg(),
                    o(e);
                    var h = R(f, g);
                    (e.line >= h.to || e.line < h.from) && setTimeout(gc(a, function() {
                        q == c && r(b)
                    }), 150)
                } else {
                    var i = b.clientY < p.top ? -20 : b.clientY > p.bottom ? 20 : 0;
                    i && setTimeout(gc(a, function() {
                        q == c && (f.scroller.scrollTop += i,
                        r(b))
                    }), 50)
                }
        }
        function s(b) {
            a.state.selectingText = !1,
            q = 1 / 0,
            Gf(b),
            f.input.focus(),
            Pf(document, "mousemove", t),
            Pf(document, "mouseup", u),
            g.history.lastSelOrigin = null
        }
        var f = a.display
          , g = a.doc;
        Gf(b);
        var h, i, j = g.sel, k = j.ranges;
        if (e && !b.shiftKey ? (i = g.sel.contains(c),
        h = i > -1 ? k[i] : new La(c,c)) : (h = g.sel.primary(),
        i = g.sel.primIndex),
        b.altKey)
            d = "rect",
            e || (h = new La(c,c)),
            c = wc(a, b, !0, !0),
            i = -1;
        else if ("double" == d) {
            var l = a.findWordAt(c);
            h = a.display.shift || g.extend ? Ta(g, h, l.anchor, l.head) : l
        } else if ("triple" == d) {
            var m = new La(qa(c.line, 0),Pa(g, qa(c.line + 1, 0)));
            h = a.display.shift || g.extend ? Ta(g, h, m.anchor, m.head) : m
        } else
            h = Ta(g, h, c);
        e ? -1 == i ? (i = k.length,
        $a(g, Ma(k.concat([h]), i), {
            scroll: !1,
            origin: "*mouse"
        })) : k.length > 1 && k[i].empty() && "single" == d && !b.shiftKey ? ($a(g, Ma(k.slice(0, i).concat(k.slice(i + 1)), 0), {
            scroll: !1,
            origin: "*mouse"
        }),
        j = g.sel) : Wa(g, i, h, _f) : (i = 0,
        $a(g, new Ka([h],0), _f),
        j = g.sel);
        var n = c
          , p = f.wrapper.getBoundingClientRect()
          , q = 0
          , t = gc(a, function(a) {
            Lf(a) ? r(a) : s(a)
        })
          , u = gc(a, s);
        a.state.selectingText = u,
        Mf(document, "mousemove", t),
        Mf(document, "mouseup", u)
    }
    function Dc(a, b, c, d) {
        try {
            var e = b.clientX
              , f = b.clientY
        } catch (b) {
            return !1
        }
        if (e >= Math.floor(a.display.gutters.getBoundingClientRect().right))
            return !1;
        d && Gf(b);
        var g = a.display
          , h = g.lineDiv.getBoundingClientRect();
        if (f > h.bottom || !Wf(a, c))
            return If(b);
        f -= h.top - g.viewOffset;
        for (var i = 0; i < a.options.gutters.length; ++i) {
            var j = g.gutters.childNodes[i];
            if (j && j.getBoundingClientRect().right >= e) {
                var k = of(a.doc, f)
                  , l = a.options.gutters[i];
                return Qf(a, c, a, k, l, b),
                If(b)
            }
        }
    }
    function Ec(a, b) {
        return Dc(a, b, "gutterClick", !0)
    }
    function Gc(a) {
        var b = this;
        if (Jc(b),
        !Uf(b, a) && !vc(b.display, a)) {
            Gf(a),
            f && (Fc = +new Date);
            var c = wc(b, a, !0)
              , d = a.dataTransfer.files;
            if (c && !b.isReadOnly())
                if (d && d.length && window.FileReader && window.File)
                    for (var e = d.length, g = Array(e), h = 0, i = function(a, d) {
                        if (!b.options.allowDropFileTypes || -1 != ig(b.options.allowDropFileTypes, a.type)) {
                            var f = new FileReader;
                            f.onload = gc(b, function() {
                                var a = f.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(a) && (a = ""),
                                g[d] = a,
                                ++h == e) {
                                    c = Pa(b.doc, c);
                                    var i = {
                                        from: c,
                                        to: c,
                                        text: b.doc.splitLines(g.join(b.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    kd(b.doc, i),
                                    Za(b.doc, Na(c, ed(i)))
                                }
                            }),
                            f.readAsText(a)
                        }
                    }, j = 0; e > j; ++j)
                        i(d[j], j);
                else {
                    if (b.state.draggingText && b.doc.sel.contains(c) > -1)
                        return b.state.draggingText(a),
                        void setTimeout(function() {
                            b.display.input.focus()
                        }, 20);
                    try {
                        var g = a.dataTransfer.getData("Text");
                        if (g) {
                            if (b.state.draggingText && !(q ? a.altKey : a.ctrlKey))
                                var k = b.listSelections();
                            if (_a(b.doc, Na(c, c)),
                            k)
                                for (var j = 0; j < k.length; ++j)
                                    qd(b.doc, "", k[j].anchor, k[j].head, "drag");
                            b.replaceSelection(g, "around", "paste"),
                            b.display.input.focus()
                        }
                    } catch (a) {}
                }
        }
    }
    function Hc(a, b) {
        if (f && (!a.state.draggingText || +new Date - Fc < 100))
            return void Jf(b);
        if (!Uf(a, b) && !vc(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()),
        b.dataTransfer.setDragImage && !l)) {
            var c = ug("img", null, null, "position: fixed; left: 0; top: 0;");
            c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            k && (c.width = c.height = 1,
            a.display.wrapper.appendChild(c),
            c._top = c.offsetTop),
            b.dataTransfer.setDragImage(c, 0, 0),
            k && c.parentNode.removeChild(c)
        }
    }
    function Ic(a, b) {
        var c = wc(a, b);
        if (c) {
            var d = document.createDocumentFragment();
            ib(a, c, d),
            a.display.dragCursor || (a.display.dragCursor = ug("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
            a.display.lineSpace.insertBefore(a.display.dragCursor, a.display.cursorDiv)),
            xg(a.display.dragCursor, d)
        }
    }
    function Jc(a) {
        a.display.dragCursor && (a.display.lineSpace.removeChild(a.display.dragCursor),
        a.display.dragCursor = null)
    }
    function Kc(a, b) {
        Math.abs(a.doc.scrollTop - b) < 2 || (a.doc.scrollTop = b,
        c || $(a, {
            top: b
        }),
        a.display.scroller.scrollTop != b && (a.display.scroller.scrollTop = b),
        a.display.scrollbars.setScrollTop(b),
        c && $(a),
        lb(a, 100))
    }
    function Lc(a, b, c) {
        (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth),
        a.doc.scrollLeft = b,
        S(a),
        a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b),
        a.display.scrollbars.setScrollLeft(b))
    }
    function Pc(a, b) {
        var d = Oc(b)
          , e = d.x
          , f = d.y
          , g = a.display
          , i = g.scroller
          , j = i.scrollWidth > i.clientWidth
          , l = i.scrollHeight > i.clientHeight;
        if (e && j || f && l) {
            if (f && q && h)
                a: for (var m = b.target, n = g.view; m != i; m = m.parentNode)
                    for (var o = 0; o < n.length; o++)
                        if (n[o].node == m) {
                            a.display.currentWheelTarget = m;
                            break a
                        }
            if (e && !c && !k && null != Nc)
                return f && l && Kc(a, Math.max(0, Math.min(i.scrollTop + f * Nc, i.scrollHeight - i.clientHeight))),
                Lc(a, Math.max(0, Math.min(i.scrollLeft + e * Nc, i.scrollWidth - i.clientWidth))),
                (!f || f && l) && Gf(b),
                void (g.wheelStartX = null);
            if (f && null != Nc) {
                var p = f * Nc
                  , r = a.doc.scrollTop
                  , s = r + g.wrapper.clientHeight;
                0 > p ? r = Math.max(0, r + p - 50) : s = Math.min(a.doc.height, s + p + 50),
                $(a, {
                    top: r,
                    bottom: s
                })
            }
            20 > Mc && (null == g.wheelStartX ? (g.wheelStartX = i.scrollLeft,
            g.wheelStartY = i.scrollTop,
            g.wheelDX = e,
            g.wheelDY = f,
            setTimeout(function() {
                if (null != g.wheelStartX) {
                    var a = i.scrollLeft - g.wheelStartX
                      , b = i.scrollTop - g.wheelStartY
                      , c = b && g.wheelDY && b / g.wheelDY || a && g.wheelDX && a / g.wheelDX;
                    g.wheelStartX = g.wheelStartY = null,
                    c && (Nc = (Nc * Mc + c) / (Mc + 1),
                    ++Mc)
                }
            }, 200)) : (g.wheelDX += e,
            g.wheelDY += f))
        }
    }
    function Qc(a, b, c) {
        if ("string" == typeof b && (b = Od[b],
        !b))
            return !1;
        a.display.input.ensurePolled();
        var d = a.display.shift
          , e = !1;
        try {
            a.isReadOnly() && (a.state.suppressEdits = !0),
            c && (a.display.shift = !1),
            e = b(a) != Zf
        } finally {
            a.display.shift = d,
            a.state.suppressEdits = !1
        }
        return e
    }
    function Rc(a, b, c) {
        for (var d = 0; d < a.state.keyMaps.length; d++) {
            var e = Rd(b, a.state.keyMaps[d], c, a);
            if (e)
                return e
        }
        return a.options.extraKeys && Rd(b, a.options.extraKeys, c, a) || Rd(b, a.options.keyMap, c, a)
    }
    function Tc(a, b, c, d) {
        var e = a.state.keySeq;
        if (e) {
            if (Sd(b))
                return "handled";
            Sc.set(50, function() {
                a.state.keySeq == e && (a.state.keySeq = null,
                a.display.input.reset())
            }),
            b = e + " " + b
        }
        var f = Rc(a, b, d);
        return "multi" == f && (a.state.keySeq = b),
        "handled" == f && Sf(a, "keyHandled", a, b, c),
        ("handled" == f || "multi" == f) && (Gf(c),
        kb(a)),
        e && !f && /\'$/.test(b) ? (Gf(c),
        !0) : !!f
    }
    function Uc(a, b) {
        var c = Td(b, !0);
        return c ? b.shiftKey && !a.state.keySeq ? Tc(a, "Shift-" + c, b, function(b) {
            return Qc(a, b, !0)
        }) || Tc(a, c, b, function(b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? Qc(a, b) : void 0
        }) : Tc(a, c, b, function(b) {
            return Qc(a, b)
        }) : !1
    }
    function Vc(a, b, c) {
        return Tc(a, "'" + c + "'", b, function(b) {
            return Qc(a, b, !0)
        })
    }
    function Xc(a) {
        var b = this;
        if (b.curOp.focus = zg(),
        !Uf(b, a)) {
            f && 11 > g && 27 == a.keyCode && (a.returnValue = !1);
            var c = a.keyCode;
            b.display.shift = 16 == c || a.shiftKey;
            var d = Uc(b, a);
            k && (Wc = d ? c : null,
            !d && 88 == c && !Pg && (q ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")),
            18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || Yc(b)
        }
    }
    function Yc(a) {
        function c(a) {
            18 != a.keyCode && a.altKey || (Bg(b, "CodeMirror-crosshair"),
            Pf(document, "keyup", c),
            Pf(document, "mouseover", c))
        }
        var b = a.display.lineDiv;
        Cg(b, "CodeMirror-crosshair"),
        Mf(document, "keyup", c),
        Mf(document, "mouseover", c)
    }
    function Zc(a) {
        16 == a.keyCode && (this.doc.sel.shift = !1),
        Uf(this, a)
    }
    function $c(a) {
        var b = this;
        if (!(vc(b.display, a) || Uf(b, a) || a.ctrlKey && !a.altKey || q && a.metaKey)) {
            var c = a.keyCode
              , d = a.charCode;
            if (k && c == Wc)
                return Wc = null,
                void Gf(a);
            if (!k || a.which && !(a.which < 10) || !Uc(b, a)) {
                var e = String.fromCharCode(null == d ? c : d);
                Vc(b, a, e) || b.display.input.onKeyPress(a)
            }
        }
    }
    function _c(a) {
        a.state.delayingBlurEvent = !0,
        setTimeout(function() {
            a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1,
            bd(a))
        }, 100)
    }
    function ad(a) {
        a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1),
        "nocursor" != a.options.readOnly && (a.state.focused || (Qf(a, "focus", a),
        a.state.focused = !0,
        Cg(a.display.wrapper, "CodeMirror-focused"),
        a.curOp || a.display.selForContextMenu == a.doc.sel || (a.display.input.reset(),
        h && setTimeout(function() {
            a.display.input.reset(!0)
        }, 20)),
        a.display.input.receivedFocus()),
        kb(a))
    }
    function bd(a) {
        a.state.delayingBlurEvent || (a.state.focused && (Qf(a, "blur", a),
        a.state.focused = !1,
        Bg(a.display.wrapper, "CodeMirror-focused")),
        clearInterval(a.display.blinker),
        setTimeout(function() {
            a.state.focused || (a.display.shift = !1)
        }, 150))
    }
    function cd(a, b) {
        vc(a.display, b) || dd(a, b) || Uf(a, b, "contextmenu") || a.display.input.onContextMenu(b)
    }
    function dd(a, b) {
        return Wf(a, "gutterContextMenu") ? Dc(a, b, "gutterContextMenu", !1) : !1
    }
    function fd(a, b) {
        if (ra(a, b.from) < 0)
            return a;
        if (ra(a, b.to) <= 0)
            return ed(b);
        var c = a.line + b.text.length - (b.to.line - b.from.line) - 1
          , d = a.ch;
        return a.line == b.to.line && (d += ed(b).ch - b.to.ch),
        qa(c, d)
    }
    function gd(a, b) {
        for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
            var e = a.sel.ranges[d];
            c.push(new La(fd(e.anchor, b),fd(e.head, b)))
        }
        return Ma(c, a.sel.primIndex)
    }
    function hd(a, b, c) {
        return a.line == b.line ? qa(c.line, a.ch - b.ch + c.ch) : qa(c.line + (a.line - b.line), a.ch)
    }
    function id(a, b, c) {
        for (var d = [], e = qa(a.first, 0), f = e, g = 0; g < b.length; g++) {
            var h = b[g]
              , i = hd(h.from, e, f)
              , j = hd(ed(h), e, f);
            if (e = h.to,
            f = j,
            "around" == c) {
                var k = a.sel.ranges[g]
                  , l = ra(k.head, k.anchor) < 0;
                d[g] = new La(l ? j : i,l ? i : j)
            } else
                d[g] = new La(i,i)
        }
        return new Ka(d,a.sel.primIndex)
    }
    function jd(a, b, c) {
        var d = {
            canceled: !1,
            from: b.from,
            to: b.to,
            text: b.text,
            origin: b.origin,
            cancel: function() {
                this.canceled = !0
            }
        };
        return c && (d.update = function(b, c, d, e) {
            b && (this.from = Pa(a, b)),
            c && (this.to = Pa(a, c)),
            d && (this.text = d),
            void 0 !== e && (this.origin = e)
        }
        ),
        Qf(a, "beforeChange", a, d),
        a.cm && Qf(a.cm, "beforeChange", a.cm, d),
        d.canceled ? null : {
            from: d.from,
            to: d.to,
            text: d.text,
            origin: d.origin
        }
    }
    function kd(a, b, c) {
        if (a.cm) {
            if (!a.cm.curOp)
                return gc(a.cm, kd)(a, b, c);
            if (a.cm.state.suppressEdits)
                return
        }
        if (!(Wf(a, "beforeChange") || a.cm && Wf(a.cm, "beforeChange")) || (b = jd(a, b, !0))) {
            var d = v && !c && le(a, b.from, b.to);
            if (d)
                for (var e = d.length - 1; e >= 0; --e)
                    ld(a, {
                        from: d[e].from,
                        to: d[e].to,
                        text: e ? [""] : b.text
                    });
            else
                ld(a, b)
        }
    }
    function ld(a, b) {
        if (1 != b.text.length || "" != b.text[0] || 0 != ra(b.from, b.to)) {
            var c = gd(a, b);
            vf(a, b, c, a.cm ? a.cm.curOp.id : NaN),
            od(a, b, c, ie(a, b));
            var d = [];
            gf(a, function(a, c) {
                c || -1 != ig(d, a.history) || (Ff(a.history, b),
                d.push(a.history)),
                od(a, b, null, ie(a, b))
            })
        }
    }
    function md(a, b, c) {
        if (!a.cm || !a.cm.state.suppressEdits) {
            for (var e, d = a.history, f = a.sel, g = "undo" == b ? d.done : d.undone, h = "undo" == b ? d.undone : d.done, i = 0; i < g.length && (e = g[i],
            c ? !e.ranges || e.equals(a.sel) : e.ranges); i++)
                ;
            if (i != g.length) {
                for (d.lastOrigin = d.lastSelOrigin = null; e = g.pop(),
                e.ranges; ) {
                    if (yf(e, h),
                    c && !e.equals(a.sel))
                        return void $a(a, e, {
                            clearRedo: !1
                        });
                    f = e
                }
                var j = [];
                yf(f, h),
                h.push({
                    changes: j,
                    generation: d.generation
                }),
                d.generation = e.generation || ++d.maxGeneration;
                for (var k = Wf(a, "beforeChange") || a.cm && Wf(a.cm, "beforeChange"), i = e.changes.length - 1; i >= 0; --i) {
                    var l = e.changes[i];
                    if (l.origin = b,
                    k && !jd(a, l, !1))
                        return void (g.length = 0);
                    j.push(sf(a, l));
                    var m = i ? gd(a, l) : gg(g);
                    od(a, l, m, ke(a, l)),
                    !i && a.cm && a.cm.scrollIntoView({
                        from: l.from,
                        to: ed(l)
                    });
                    var n = [];
                    gf(a, function(a, b) {
                        b || -1 != ig(n, a.history) || (Ff(a.history, l),
                        n.push(a.history)),
                        od(a, l, null, ke(a, l))
                    })
                }
            }
        }
    }
    function nd(a, b) {
        if (0 != b && (a.first += b,
        a.sel = new Ka(jg(a.sel.ranges, function(a) {
            return new La(qa(a.anchor.line + b, a.anchor.ch),qa(a.head.line + b, a.head.ch))
        }),a.sel.primIndex),
        a.cm)) {
            lc(a.cm, a.first, a.first - b, b);
            for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++)
                mc(a.cm, d, "gutter")
        }
    }
    function od(a, b, c, d) {
        if (a.cm && !a.cm.curOp)
            return gc(a.cm, od)(a, b, c, d);
        if (b.to.line < a.first)
            return void nd(a, b.text.length - 1 - (b.to.line - b.from.line));
        if (!(b.from.line > a.lastLine())) {
            if (b.from.line < a.first) {
                var e = b.text.length - 1 - (a.first - b.from.line);
                nd(a, e),
                b = {
                    from: qa(a.first, 0),
                    to: qa(b.to.line + e, b.to.ch),
                    text: [gg(b.text)],
                    origin: b.origin
                }
            }
            var f = a.lastLine();
            b.to.line > f && (b = {
                from: b.from,
                to: qa(f, jf(a, f).text.length),
                text: [b.text[0]],
                origin: b.origin
            }),
            b.removed = kf(a, b.from, b.to),
            c || (c = gd(a, b)),
            a.cm ? pd(a.cm, b, d) : _e(a, b, d),
            _a(a, c, $f)
        }
    }
    function pd(a, b, c) {
        var d = a.doc
          , e = a.display
          , f = b.from
          , g = b.to
          , h = !1
          , i = f.line;
        a.options.lineWrapping || (i = nf(ve(jf(d, f.line))),
        d.iter(i, g.line + 1, function(a) {
            return a == e.maxLine ? (h = !0,
            !0) : void 0
        })),
        d.sel.contains(b.from, b.to) > -1 && Vf(a),
        _e(d, b, c, C(a)),
        a.options.lineWrapping || (d.iter(i, f.line + b.text.length, function(a) {
            var b = I(a);
            b > e.maxLineLength && (e.maxLine = a,
            e.maxLineLength = b,
            e.maxLineChanged = !0,
            h = !1)
        }),
        h && (a.curOp.updateMaxLine = !0)),
        d.frontier = Math.min(d.frontier, f.line),
        lb(a, 400);
        var j = b.text.length - (g.line - f.line) - 1;
        b.full ? lc(a) : f.line != g.line || 1 != b.text.length || $e(a.doc, b) ? lc(a, f.line, g.line + 1, j) : mc(a, f.line, "text");
        var k = Wf(a, "changes")
          , l = Wf(a, "change");
        if (l || k) {
            var m = {
                from: f,
                to: g,
                text: b.text,
                removed: b.removed,
                origin: b.origin
            };
            l && Sf(a, "change", a, m),
            k && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(m)
        }
        a.display.selForContextMenu = null
    }
    function qd(a, b, c, d, e) {
        if (d || (d = c),
        ra(d, c) < 0) {
            var f = d;
            d = c,
            c = f
        }
        "string" == typeof b && (b = a.splitLines(b)),
        kd(a, {
            from: c,
            to: d,
            text: b,
            origin: e
        })
    }
    function rd(a, b) {
        if (!Uf(a, "scrollCursorIntoView")) {
            var c = a.display
              , d = c.sizer.getBoundingClientRect()
              , e = null;
            if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1),
            null != e && !n) {
                var f = ug("div", "\u200b", null, "position: absolute; top: " + (b.top - c.viewOffset - pb(a.display)) + "px; height: " + (b.bottom - b.top + sb(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
                a.display.lineSpace.appendChild(f),
                f.scrollIntoView(e),
                a.display.lineSpace.removeChild(f)
            }
        }
    }
    function sd(a, b, c, d) {
        null == d && (d = 0);
        for (var e = 0; 5 > e; e++) {
            var f = !1
              , g = Ob(a, b)
              , h = c && c != b ? Ob(a, c) : g
              , i = ud(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d)
              , j = a.doc.scrollTop
              , k = a.doc.scrollLeft;
            if (null != i.scrollTop && (Kc(a, i.scrollTop),
            Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)),
            null != i.scrollLeft && (Lc(a, i.scrollLeft),
            Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)),
            !f)
                break
        }
        return g
    }
    function td(a, b, c, d, e) {
        var f = ud(a, b, c, d, e);
        null != f.scrollTop && Kc(a, f.scrollTop),
        null != f.scrollLeft && Lc(a, f.scrollLeft)
    }
    function ud(a, b, c, d, e) {
        var f = a.display
          , g = Ub(a.display);
        0 > c && (c = 0);
        var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop
          , i = ub(a)
          , j = {};
        e - c > i && (e = c + i);
        var k = a.doc.height + qb(f)
          , l = g > c
          , m = e > k - g;
        if (h > c)
            j.scrollTop = l ? 0 : c;
        else if (e > h + i) {
            var n = Math.min(c, (m ? k : e) - i);
            n != h && (j.scrollTop = n)
        }
        var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft
          , p = tb(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0)
          , q = d - b > p;
        return q && (d = b + p),
        10 > b ? j.scrollLeft = 0 : o > b ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p),
        j
    }
    function vd(a, b, c) {
        (null != b || null != c) && xd(a),
        null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b),
        null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c)
    }
    function wd(a) {
        xd(a);
        var b = a.getCursor()
          , c = b
          , d = b;
        a.options.lineWrapping || (c = b.ch ? qa(b.line, b.ch - 1) : b,
        d = qa(b.line, b.ch + 1)),
        a.curOp.scrollToPos = {
            from: c,
            to: d,
            margin: a.options.cursorScrollMargin,
            isCursor: !0
        }
    }
    function xd(a) {
        var b = a.curOp.scrollToPos;
        if (b) {
            a.curOp.scrollToPos = null;
            var c = Pb(a, b.from)
              , d = Pb(a, b.to)
              , e = ud(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
            a.scrollTo(e.scrollLeft, e.scrollTop)
        }
    }
    function yd(a, b, c, d) {
        var f, e = a.doc;
        null == c && (c = "add"),
        "smart" == c && (e.mode.indent ? f = ob(a, b) : c = "prev");
        var g = a.options.tabSize
          , h = jf(e, b)
          , i = cg(h.text, null, g);
        h.stateAfter && (h.stateAfter = null);
        var k, j = h.text.match(/^\s*/)[0];
        if (d || /\S/.test(h.text)) {
            if ("smart" == c && (k = e.mode.indent(f, h.text.slice(j.length), h.text),
            k == Zf || k > 150)) {
                if (!d)
                    return;
                c = "prev"
            }
        } else
            k = 0,
            c = "not";
        "prev" == c ? k = b > e.first ? cg(jf(e, b - 1).text, null, g) : 0 : "add" == c ? k = i + a.options.indentUnit : "subtract" == c ? k = i - a.options.indentUnit : "number" == typeof c && (k = i + c),
        k = Math.max(0, k);
        var l = ""
          , m = 0;
        if (a.options.indentWithTabs)
            for (var n = Math.floor(k / g); n; --n)
                m += g,
                l += "	";
        if (k > m && (l += fg(k - m)),
        l != j)
            return qd(e, l, qa(b, 0), qa(b, j.length), "+input"),
            h.stateAfter = null,
            !0;
        for (var n = 0; n < e.sel.ranges.length; n++) {
            var o = e.sel.ranges[n];
            if (o.head.line == b && o.head.ch < j.length) {
                var m = qa(b, j.length);
                Wa(e, n, new La(m,m));
                break
            }
        }
    }
    function zd(a, b, c, d) {
        var e = b
          , f = b;
        return "number" == typeof b ? f = jf(a, Oa(a, b)) : e = nf(b),
        null == e ? null : (d(f, e) && a.cm && mc(a.cm, e, c),
        f)
    }
    function Ad(a, b) {
        for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
            for (var f = b(c[e]); d.length && ra(f.from, gg(d).to) <= 0; ) {
                var g = d.pop();
                if (ra(g.from, f.from) < 0) {
                    f.from = g.from;
                    break
                }
            }
            d.push(f)
        }
        fc(a, function() {
            for (var b = d.length - 1; b >= 0; b--)
                qd(a.doc, "", d[b].from, d[b].to, "+delete");
            wd(a)
        })
    }
    function Bd(a, b, c, d, e) {
        function j() {
            var b = f + c;
            return b < a.first || b >= a.first + a.size ? !1 : (f = b,
            i = jf(a, b))
        }
        function k(a) {
            var b = (e ? dh : eh)(i, g, c, !0);
            if (null == b) {
                if (a || !j())
                    return !1;
                g = e ? (0 > c ? Xg : Wg)(i) : 0 > c ? i.text.length : 0
            } else
                g = b;
            return !0
        }
        var f = b.line
          , g = b.ch
          , h = c
          , i = jf(a, f);
        if ("char" == d)
            k();
        else if ("column" == d)
            k(!0);
        else if ("word" == d || "group" == d)
            for (var l = null, m = "group" == d, n = a.cm && a.cm.getHelper(b, "wordChars"), o = !0; !(0 > c) || k(!o); o = !1) {
                var p = i.text.charAt(g) || "\n"
                  , q = qg(p, n) ? "w" : m && "\n" == p ? "n" : !m || /\s/.test(p) ? null : "p";
                if (!m || o || q || (q = "s"),
                l && l != q) {
                    0 > c && (c = 1,
                    k());
                    break
                }
                if (q && (l = q),
                c > 0 && !k(!o))
                    break
            }
        var r = eb(a, qa(f, g), b, h, !0);
        return ra(b, r) || (r.hitSide = !0),
        r
    }
    function Cd(a, b, c, d) {
        var g, e = a.doc, f = b.left;
        if ("page" == d) {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            g = b.top + c * (h - (0 > c ? 1.5 : .5) * Ub(a.display))
        } else
            "line" == d && (g = c > 0 ? b.bottom + 3 : b.top - 3);
        for (; ; ) {
            var i = Rb(a, f, g);
            if (!i.outside)
                break;
            if (0 > c ? 0 >= g : g >= e.height) {
                i.hitSide = !0;
                break
            }
            g += 5 * c
        }
        return i
    }
    function Fd(a, b, c, d) {
        x.defaults[a] = b,
        c && (Ed[a] = d ? function(a, b, d) {
            d != Gd && c(a, b, d)
        }
        : c)
    }
    function Qd(a) {
        for (var c, d, e, f, b = a.split(/-(?!$)/), a = b[b.length - 1], g = 0; g < b.length - 1; g++) {
            var h = b[g];
            if (/^(cmd|meta|m)$/i.test(h))
                f = !0;
            else if (/^a(lt)?$/i.test(h))
                c = !0;
            else if (/^(c|ctrl|control)$/i.test(h))
                d = !0;
            else {
                if (!/^s(hift)$/i.test(h))
                    throw new Error("Unrecognized modifier name: " + h);
                e = !0
            }
        }
        return c && (a = "Alt-" + a),
        d && (a = "Ctrl-" + a),
        f && (a = "Cmd-" + a),
        e && (a = "Shift-" + a),
        a
    }
    function Ud(a) {
        return "string" == typeof a ? Pd[a] : a
    }
    function Yd(a, b, c, d, e) {
        if (d && d.shared)
            return $d(a, b, c, d, e);
        if (a.cm && !a.cm.curOp)
            return gc(a.cm, Yd)(a, b, c, d, e);
        var f = new Xd(a,e)
          , g = ra(b, c);
        if (d && mg(d, f, !1),
        g > 0 || 0 == g && f.clearWhenEmpty !== !1)
            return f;
        if (f.replacedWith && (f.collapsed = !0,
        f.widgetNode = ug("span", [f.replacedWith], "CodeMirror-widget"),
        d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"),
        d.insertLeft && (f.widgetNode.insertLeft = !0)),
        f.collapsed) {
            if (ue(a, b.line, b, c, f) || b.line != c.line && ue(a, c.line, b, c, f))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            w = !0
        }
        f.addToHistory && vf(a, {
            from: b,
            to: c,
            origin: "markText"
        }, a.sel, NaN);
        var j, h = b.line, i = a.cm;
        if (a.iter(h, c.line + 1, function(a) {
            i && f.collapsed && !i.options.lineWrapping && ve(a) == i.display.maxLine && (j = !0),
            f.collapsed && h != b.line && mf(a, 0),
            fe(a, new ce(f,h == b.line ? b.ch : null,h == c.line ? c.ch : null)),
            ++h
        }),
        f.collapsed && a.iter(b.line, c.line + 1, function(b) {
            ze(a, b) && mf(b, 0)
        }),
        f.clearOnEnter && Mf(f, "beforeCursorEnter", function() {
            f.clear()
        }),
        f.readOnly && (v = !0,
        (a.history.done.length || a.history.undone.length) && a.clearHistory()),
        f.collapsed && (f.id = ++Wd,
        f.atomic = !0),
        i) {
            if (j && (i.curOp.updateMaxLine = !0),
            f.collapsed)
                lc(i, b.line, c.line + 1);
            else if (f.className || f.title || f.startStyle || f.endStyle || f.css)
                for (var k = b.line; k <= c.line; k++)
                    mc(i, k, "text");
            f.atomic && bb(i.doc),
            Sf(i, "markerAdded", i, f)
        }
        return f
    }
    function $d(a, b, c, d, e) {
        d = mg(d),
        d.shared = !1;
        var f = [Yd(a, b, c, d, e)]
          , g = f[0]
          , h = d.widgetNode;
        return gf(a, function(a) {
            h && (d.widgetNode = h.cloneNode(!0)),
            f.push(Yd(a, Pa(a, b), Pa(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i)
                if (a.linked[i].isParent)
                    return;
            g = gg(f)
        }),
        new Zd(f,g)
    }
    function _d(a) {
        return a.findMarks(qa(a.first, 0), a.clipPos(qa(a.lastLine())), function(a) {
            return a.parent
        })
    }
    function ae(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = d.find()
              , f = a.clipPos(e.from)
              , g = a.clipPos(e.to);
            if (ra(f, g)) {
                var h = Yd(a, f, g, d.primary, d.primary.type);
                d.markers.push(h),
                h.parent = d
            }
        }
    }
    function be(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b]
              , d = [c.primary.doc];
            gf(c.primary.doc, function(a) {
                d.push(a)
            });
            for (var e = 0; e < c.markers.length; e++) {
                var f = c.markers[e];
                -1 == ig(d, f.doc) && (f.parent = null,
                c.markers.splice(e--, 1))
            }
        }
    }
    function ce(a, b, c) {
        this.marker = a,
        this.from = b,
        this.to = c
    }
    function de(a, b) {
        if (a)
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d.marker == b)
                    return d
            }
    }
    function ee(a, b) {
        for (var c, d = 0; d < a.length; ++d)
            a[d] != b && (c || (c = [])).push(a[d]);
        return c
    }
    function fe(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b],
        b.marker.attachLine(a)
    }
    function ge(a, b, c) {
        if (a)
            for (var e, d = 0; d < a.length; ++d) {
                var f = a[d]
                  , g = f.marker
                  , h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                    var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                    (e || (e = [])).push(new ce(g,f.from,i ? null : f.to))
                }
            }
        return e
    }
    function he(a, b, c) {
        if (a)
            for (var e, d = 0; d < a.length; ++d) {
                var f = a[d]
                  , g = f.marker
                  , h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                    var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                    (e || (e = [])).push(new ce(g,i ? null : f.from - b,null == f.to ? null : f.to - b))
                }
            }
        return e
    }
    function ie(a, b) {
        if (b.full)
            return null;
        var c = Ra(a, b.from.line) && jf(a, b.from.line).markedSpans
          , d = Ra(a, b.to.line) && jf(a, b.to.line).markedSpans;
        if (!c && !d)
            return null;
        var e = b.from.ch
          , f = b.to.ch
          , g = 0 == ra(b.from, b.to)
          , h = ge(c, e, g)
          , i = he(d, f, g)
          , j = 1 == b.text.length
          , k = gg(b.text).length + (j ? e : 0);
        if (h)
            for (var l = 0; l < h.length; ++l) {
                var m = h[l];
                if (null == m.to) {
                    var n = de(i, m.marker);
                    n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
                }
            }
        if (i)
            for (var l = 0; l < i.length; ++l) {
                var m = i[l];
                if (null != m.to && (m.to += k),
                null == m.from) {
                    var n = de(h, m.marker);
                    n || (m.from = k,
                    j && (h || (h = [])).push(m))
                } else
                    m.from += k,
                    j && (h || (h = [])).push(m)
            }
        h && (h = je(h)),
        i && i != h && (i = je(i));
        var o = [h];
        if (!j) {
            var q, p = b.text.length - 2;
            if (p > 0 && h)
                for (var l = 0; l < h.length; ++l)
                    null == h[l].to && (q || (q = [])).push(new ce(h[l].marker,null,null));
            for (var l = 0; p > l; ++l)
                o.push(q);
            o.push(i)
        }
        return o
    }
    function je(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
        }
        return a.length ? a : null
    }
    function ke(a, b) {
        var c = Bf(a, b)
          , d = ie(a, b);
        if (!c)
            return d;
        if (!d)
            return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e]
              , g = d[e];
            if (f && g)
                a: for (var h = 0; h < g.length; ++h) {
                    for (var i = g[h], j = 0; j < f.length; ++j)
                        if (f[j].marker == i.marker)
                            continue a;
                    f.push(i)
                }
            else
                g && (c[e] = g)
        }
        return c
    }
    function le(a, b, c) {
        var d = null;
        if (a.iter(b.line, c.line + 1, function(a) {
            if (a.markedSpans)
                for (var b = 0; b < a.markedSpans.length; ++b) {
                    var c = a.markedSpans[b].marker;
                    !c.readOnly || d && -1 != ig(d, c) || (d || (d = [])).push(c)
                }
        }),
        !d)
            return null;
        for (var e = [{
            from: b,
            to: c
        }], f = 0; f < d.length; ++f)
            for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
                var j = e[i];
                if (!(ra(j.to, h.from) < 0 || ra(j.from, h.to) > 0)) {
                    var k = [i, 1]
                      , l = ra(j.from, h.from)
                      , m = ra(j.to, h.to);
                    (0 > l || !g.inclusiveLeft && !l) && k.push({
                        from: j.from,
                        to: h.from
                    }),
                    (m > 0 || !g.inclusiveRight && !m) && k.push({
                        from: h.to,
                        to: j.to
                    }),
                    e.splice.apply(e, k),
                    i += k.length - 1
                }
            }
        return e
    }
    function me(a) {
        var b = a.markedSpans;
        if (b) {
            for (var c = 0; c < b.length; ++c)
                b[c].marker.detachLine(a);
            a.markedSpans = null
        }
    }
    function ne(a, b) {
        if (b) {
            for (var c = 0; c < b.length; ++c)
                b[c].marker.attachLine(a);
            a.markedSpans = b
        }
    }
    function oe(a) {
        return a.inclusiveLeft ? -1 : 0
    }
    function pe(a) {
        return a.inclusiveRight ? 1 : 0
    }
    function qe(a, b) {
        var c = a.lines.length - b.lines.length;
        if (0 != c)
            return c;
        var d = a.find()
          , e = b.find()
          , f = ra(d.from, e.from) || oe(a) - oe(b);
        if (f)
            return -f;
        var g = ra(d.to, e.to) || pe(a) - pe(b);
        return g ? g : b.id - a.id
    }
    function re(a, b) {
        var d, c = w && a.markedSpans;
        if (c)
            for (var e, f = 0; f < c.length; ++f)
                e = c[f],
                e.marker.collapsed && null == (b ? e.from : e.to) && (!d || qe(d, e.marker) < 0) && (d = e.marker);
        return d
    }
    function se(a) {
        return re(a, !0)
    }
    function te(a) {
        return re(a, !1)
    }
    function ue(a, b, c, d, e) {
        var f = jf(a, b)
          , g = w && f.markedSpans;
        if (g)
            for (var h = 0; h < g.length; ++h) {
                var i = g[h];
                if (i.marker.collapsed) {
                    var j = i.marker.find(0)
                      , k = ra(j.from, c) || oe(i.marker) - oe(e)
                      , l = ra(j.to, d) || pe(i.marker) - pe(e);
                    if (!(k >= 0 && 0 >= l || 0 >= k && l >= 0) && (0 >= k && (ra(j.to, c) > 0 || i.marker.inclusiveRight && e.inclusiveLeft) || k >= 0 && (ra(j.from, d) < 0 || i.marker.inclusiveLeft && e.inclusiveRight)))
                        return !0
                }
            }
    }
    function ve(a) {
        for (var b; b = se(a); )
            a = b.find(-1, !0).line;
        return a
    }
    function we(a) {
        for (var b, c; b = te(a); )
            a = b.find(1, !0).line,
            (c || (c = [])).push(a);
        return c
    }
    function xe(a, b) {
        var c = jf(a, b)
          , d = ve(c);
        return c == d ? b : nf(d)
    }
    function ye(a, b) {
        if (b > a.lastLine())
            return b;
        var d, c = jf(a, b);
        if (!ze(a, c))
            return b;
        for (; d = te(c); )
            c = d.find(1, !0).line;
        return nf(c) + 1
    }
    function ze(a, b) {
        var c = w && b.markedSpans;
        if (c)
            for (var d, e = 0; e < c.length; ++e)
                if (d = c[e],
                d.marker.collapsed) {
                    if (null == d.from)
                        return !0;
                    if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && Ae(a, b, d))
                        return !0
                }
    }
    function Ae(a, b, c) {
        if (null == c.to) {
            var d = c.marker.find(1, !0);
            return Ae(a, d.line, de(d.line.markedSpans, c.marker))
        }
        if (c.marker.inclusiveRight && c.to == b.text.length)
            return !0;
        for (var e, f = 0; f < b.markedSpans.length; ++f)
            if (e = b.markedSpans[f],
            e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && Ae(a, b, e))
                return !0
    }
    function Ce(a, b, c) {
        pf(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && vd(a, null, c)
    }
    function De(a) {
        if (null != a.height)
            return a.height;
        var b = a.doc.cm;
        if (!b)
            return 0;
        if (!yg(document.body, a.node)) {
            var c = "position: relative;";
            a.coverGutter && (c += "margin-left: -" + b.display.gutters.offsetWidth + "px;"),
            a.noHScroll && (c += "width: " + b.display.wrapper.clientWidth + "px;"),
            xg(b.display.measure, ug("div", [a.node], null, c))
        }
        return a.height = a.node.parentNode.offsetHeight
    }
    function Ee(a, b, c, d) {
        var e = new Be(a,c,d)
          , f = a.cm;
        return f && e.noHScroll && (f.display.alignWidgets = !0),
        zd(a, b, "widget", function(b) {
            var c = b.widgets || (b.widgets = []);
            if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e),
            e.line = b,
            f && !ze(a, b)) {
                var d = pf(b) < a.scrollTop;
                mf(b, b.height + De(e)),
                d && vd(f, null, e.height),
                f.curOp.forceUpdate = !0
            }
            return !0
        }),
        e
    }
    function Ge(a, b, c, d) {
        a.text = b,
        a.stateAfter && (a.stateAfter = null),
        a.styles && (a.styles = null),
        null != a.order && (a.order = null),
        me(a),
        ne(a, c);
        var e = d ? d(a) : 1;
        e != a.height && mf(a, e)
    }
    function He(a) {
        a.parent = null,
        me(a)
    }
    function Ie(a, b) {
        if (a)
            for (; ; ) {
                var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!c)
                    break;
                a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
                var d = c[1] ? "bgClass" : "textClass";
                null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
            }
        return a
    }
    function Je(a, b) {
        if (a.blankLine)
            return a.blankLine(b);
        if (a.innerMode) {
            var c = x.innerMode(a, b);
            return c.mode.blankLine ? c.mode.blankLine(c.state) : void 0
        }
    }
    function Ke(a, b, c, d) {
        for (var e = 0; 10 > e; e++) {
            d && (d[0] = x.innerMode(a, c).mode);
            var f = a.token(b, c);
            if (b.pos > b.start)
                return f
        }
        throw new Error("Mode " + a.name + " failed to advance stream.")
    }
    function Le(a, b, c, d) {
        function e(a) {
            return {
                start: k.start,
                end: k.pos,
                string: k.current(),
                type: h || null,
                state: a ? Md(f.mode, j) : j
            }
        }
        var h, f = a.doc, g = f.mode;
        b = Pa(f, b);
        var l, i = jf(f, b.line), j = ob(a, b.line, c), k = new Vd(i.text,a.options.tabSize);
        for (d && (l = []); (d || k.pos < b.ch) && !k.eol(); )
            k.start = k.pos,
            h = Ke(g, k, j),
            d && l.push(e(!0));
        return d ? l : e()
    }
    function Me(a, b, c, d, e, f, g) {
        var h = c.flattenSpans;
        null == h && (h = a.options.flattenSpans);
        var l, i = 0, j = null, k = new Vd(b,a.options.tabSize), m = a.options.addModeClass && [null];
        for ("" == b && Ie(Je(c, d), f); !k.eol(); ) {
            if (k.pos > a.options.maxHighlightLength ? (h = !1,
            g && Pe(a, b, d, k.pos),
            k.pos = b.length,
            l = null) : l = Ie(Ke(c, k, d, m), f),
            m) {
                var n = m[0].name;
                n && (l = "m-" + (l ? n + " " + l : n))
            }
            if (!h || j != l) {
                for (; i < k.start; )
                    i = Math.min(k.start, i + 5e4),
                    e(i, j);
                j = l
            }
            k.start = k.pos
        }
        for (; i < k.pos; ) {
            var o = Math.min(k.pos, i + 5e4);
            e(o, j),
            i = o
        }
    }
    function Ne(a, b, c, d) {
        var e = [a.state.modeGen]
          , f = {};
        Me(a, b.text, a.doc.mode, c, function(a, b) {
            e.push(a, b)
        }, f, d);
        for (var g = 0; g < a.state.overlays.length; ++g) {
            var h = a.state.overlays[g]
              , i = 1
              , j = 0;
            Me(a, b.text, h.mode, !0, function(a, b) {
                for (var c = i; a > j; ) {
                    var d = e[i];
                    d > a && e.splice(i, 1, a, e[i + 1], d),
                    i += 2,
                    j = Math.min(a, d)
                }
                if (b)
                    if (h.opaque)
                        e.splice(c, i - c, a, "cm-overlay " + b),
                        i = c + 2;
                    else
                        for (; i > c; c += 2) {
                            var f = e[c + 1];
                            e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                        }
            }, f)
        }
        return {
            styles: e,
            classes: f.bgClass || f.textClass ? f : null
        }
    }
    function Oe(a, b, c) {
        if (!b.styles || b.styles[0] != a.state.modeGen) {
            var d = ob(a, nf(b))
              , e = Ne(a, b, b.text.length > a.options.maxHighlightLength ? Md(a.doc.mode, d) : d);
            b.stateAfter = d,
            b.styles = e.styles,
            e.classes ? b.styleClasses = e.classes : b.styleClasses && (b.styleClasses = null),
            c === a.doc.frontier && a.doc.frontier++
        }
        return b.styles
    }
    function Pe(a, b, c, d) {
        var e = a.doc.mode
          , f = new Vd(b,a.options.tabSize);
        for (f.start = f.pos = d || 0,
        "" == b && Je(e, c); !f.eol(); )
            Ke(e, f, c),
            f.start = f.pos
    }
    function Se(a, b) {
        if (!a || /^\s*$/.test(a))
            return null;
        var c = b.addModeClass ? Re : Qe;
        return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
    }
    function Te(a, b) {
        var c = ug("span", null, null, h ? "padding-right: .1px" : null)
          , d = {
            pre: ug("pre", [c], "CodeMirror-line"),
            content: c,
            col: 0,
            pos: 0,
            cm: a,
            splitSpaces: (f || h) && a.getOption("lineWrapping")
        };
        b.measure = {};
        for (var e = 0; e <= (b.rest ? b.rest.length : 0); e++) {
            var i, g = e ? b.rest[e - 1] : b.line;
            d.pos = 0,
            d.addToken = Ve,
            Mg(a.display.measure) && (i = qf(g)) && (d.addToken = Xe(d.addToken, i)),
            d.map = [];
            var j = b != a.display.externalMeasured && nf(g);
            Ze(g, d, Oe(a, g, j)),
            g.styleClasses && (g.styleClasses.bgClass && (d.bgClass = Dg(g.styleClasses.bgClass, d.bgClass || "")),
            g.styleClasses.textClass && (d.textClass = Dg(g.styleClasses.textClass, d.textClass || ""))),
            0 == d.map.length && d.map.push(0, 0, d.content.appendChild(Kg(a.display.measure))),
            0 == e ? (b.measure.map = d.map,
            b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(d.map),
            (b.measure.caches || (b.measure.caches = [])).push({}))
        }
        return h && /\bcm-tab\b/.test(d.content.lastChild.className) && (d.content.className = "cm-tab-wrap-hack"),
        Qf(a, "renderLine", a, b.line, d.pre),
        d.pre.className && (d.textClass = Dg(d.pre.className, d.textClass || "")),
        d
    }
    function Ue(a) {
        var b = ug("span", "\u2022", "cm-invalidchar");
        return b.title = "\\u" + a.charCodeAt(0).toString(16),
        b.setAttribute("aria-label", b.title),
        b
    }
    function Ve(a, b, c, d, e, h, i) {
        if (b) {
            var j = a.splitSpaces ? b.replace(/ {3,}/g, We) : b
              , k = a.cm.state.specialChars
              , l = !1;
            if (k.test(b))
                for (var m = document.createDocumentFragment(), n = 0; ; ) {
                    k.lastIndex = n;
                    var o = k.exec(b)
                      , p = o ? o.index - n : b.length - n;
                    if (p) {
                        var q = document.createTextNode(j.slice(n, n + p));
                        f && 9 > g ? m.appendChild(ug("span", [q])) : m.appendChild(q),
                        a.map.push(a.pos, a.pos + p, q),
                        a.col += p,
                        a.pos += p
                    }
                    if (!o)
                        break;
                    if (n += p + 1,
                    "	" == o[0]) {
                        var r = a.cm.options.tabSize
                          , s = r - a.col % r
                          , q = m.appendChild(ug("span", fg(s), "cm-tab"));
                        q.setAttribute("role", "presentation"),
                        q.setAttribute("cm-text", "	"),
                        a.col += s
                    } else if ("\r" == o[0] || "\n" == o[0]) {
                        var q = m.appendChild(ug("span", "\r" == o[0] ? "\u240d" : "\u2424", "cm-invalidchar"));
                        q.setAttribute("cm-text", o[0]),
                        a.col += 1
                    } else {
                        var q = a.cm.options.specialCharPlaceholder(o[0]);
                        q.setAttribute("cm-text", o[0]),
                        f && 9 > g ? m.appendChild(ug("span", [q])) : m.appendChild(q),
                        a.col += 1
                    }
                    a.map.push(a.pos, a.pos + 1, q),
                    a.pos++
                }
            else {
                a.col += b.length;
                var m = document.createTextNode(j);
                a.map.push(a.pos, a.pos + b.length, m),
                f && 9 > g && (l = !0),
                a.pos += b.length
            }
            if (c || d || e || l || i) {
                var t = c || "";
                d && (t += d),
                e && (t += e);
                var u = ug("span", [m], t, i);
                return h && (u.title = h),
                a.content.appendChild(u)
            }
            a.content.appendChild(m)
        }
    }
    function We(a) {
        for (var b = " ", c = 0; c < a.length - 2; ++c)
            b += c % 2 ? " " : "\xa0";
        return b += " "
    }
    function Xe(a, b) {
        return function(c, d, e, f, g, h, i) {
            e = e ? e + " cm-force-border" : "cm-force-border";
            for (var j = c.pos, k = j + d.length; ; ) {
                for (var l = 0; l < b.length; l++) {
                    var m = b[l];
                    if (m.to > j && m.from <= j)
                        break
                }
                if (m.to >= k)
                    return a(c, d, e, f, g, h, i);
                a(c, d.slice(0, m.to - j), e, f, null, h, i),
                f = null,
                d = d.slice(m.to - j),
                j = m.to
            }
        }
    }
    function Ye(a, b, c, d) {
        var e = !d && c.widgetNode;
        e && a.map.push(a.pos, a.pos + b, e),
        !d && a.cm.display.input.needsContentAttribute && (e || (e = a.content.appendChild(document.createElement("span"))),
        e.setAttribute("cm-marker", c.id)),
        e && (a.cm.display.input.setUneditable(e),
        a.content.appendChild(e)),
        a.pos += b
    }
    function Ze(a, b, c) {
        var d = a.markedSpans
          , e = a.text
          , f = 0;
        if (d)
            for (var k, l, n, o, p, q, r, h = e.length, i = 0, g = 1, j = "", m = 0; ; ) {
                if (m == i) {
                    n = o = p = q = l = "",
                    r = null,
                    m = 1 / 0;
                    for (var t, s = [], u = 0; u < d.length; ++u) {
                        var v = d[u]
                          , w = v.marker;
                        "bookmark" == w.type && v.from == i && w.widgetNode ? s.push(w) : v.from <= i && (null == v.to || v.to > i || w.collapsed && v.to == i && v.from == i) ? (null != v.to && v.to != i && m > v.to && (m = v.to,
                        o = ""),
                        w.className && (n += " " + w.className),
                        w.css && (l = (l ? l + ";" : "") + w.css),
                        w.startStyle && v.from == i && (p += " " + w.startStyle),
                        w.endStyle && v.to == m && (t || (t = [])).push(w.endStyle, v.to),
                        w.title && !q && (q = w.title),
                        w.collapsed && (!r || qe(r.marker, w) < 0) && (r = v)) : v.from > i && m > v.from && (m = v.from)
                    }
                    if (t)
                        for (var u = 0; u < t.length; u += 2)
                            t[u + 1] == m && (o += " " + t[u]);
                    if (!r || r.from == i)
                        for (var u = 0; u < s.length; ++u)
                            Ye(b, 0, s[u]);
                    if (r && (r.from || 0) == i) {
                        if (Ye(b, (null == r.to ? h + 1 : r.to) - i, r.marker, null == r.from),
                        null == r.to)
                            return;
                        r.to == i && (r = !1)
                    }
                }
                if (i >= h)
                    break;
                for (var x = Math.min(h, m); ; ) {
                    if (j) {
                        var y = i + j.length;
                        if (!r) {
                            var z = y > x ? j.slice(0, x - i) : j;
                            b.addToken(b, z, k ? k + n : n, p, i + z.length == m ? o : "", q, l)
                        }
                        if (y >= x) {
                            j = j.slice(x - i),
                            i = x;
                            break
                        }
                        i = y,
                        p = ""
                    }
                    j = e.slice(f, f = c[g++]),
                    k = Se(c[g++], b.cm.options)
                }
            }
        else
            for (var g = 1; g < c.length; g += 2)
                b.addToken(b, e.slice(f, f = c[g]), Se(c[g + 1], b.cm.options))
    }
    function $e(a, b) {
        return 0 == b.from.ch && 0 == b.to.ch && "" == gg(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
    }
    function _e(a, b, c, d) {
        function e(a) {
            return c ? c[a] : null
        }
        function f(a, c, e) {
            Ge(a, c, e, d),
            Sf(a, "change", a, b)
        }
        function g(a, b) {
            for (var c = a, f = []; b > c; ++c)
                f.push(new Fe(j[c],e(c),d));
            return f
        }
        var h = b.from
          , i = b.to
          , j = b.text
          , k = jf(a, h.line)
          , l = jf(a, i.line)
          , m = gg(j)
          , n = e(j.length - 1)
          , o = i.line - h.line;
        if (b.full)
            a.insert(0, g(0, j.length)),
            a.remove(j.length, a.size - j.length);
        else if ($e(a, b)) {
            var p = g(0, j.length - 1);
            f(l, l.text, n),
            o && a.remove(h.line, o),
            p.length && a.insert(h.line, p)
        } else if (k == l)
            if (1 == j.length)
                f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n);
            else {
                var p = g(1, j.length - 1);
                p.push(new Fe(m + k.text.slice(i.ch),n,d)),
                f(k, k.text.slice(0, h.ch) + j[0], e(0)),
                a.insert(h.line + 1, p)
            }
        else if (1 == j.length)
            f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)),
            a.remove(h.line + 1, o);
        else {
            f(k, k.text.slice(0, h.ch) + j[0], e(0)),
            f(l, m + l.text.slice(i.ch), n);
            var p = g(1, j.length - 1);
            o > 1 && a.remove(h.line + 1, o - 1),
            a.insert(h.line + 1, p)
        }
        Sf(a, "change", a, b)
    }
    function af(a) {
        this.lines = a,
        this.parent = null;
        for (var b = 0, c = 0; b < a.length; ++b)
            a[b].parent = this,
            c += a[b].height;
        this.height = c
    }
    function bf(a) {
        this.children = a;
        for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
            var e = a[d];
            b += e.chunkSize(),
            c += e.height,
            e.parent = this
        }
        this.size = b,
        this.height = c,
        this.parent = null
    }
    function gf(a, b, c) {
        function d(a, e, f) {
            if (a.linked)
                for (var g = 0; g < a.linked.length; ++g) {
                    var h = a.linked[g];
                    if (h.doc != e) {
                        var i = f && h.sharedHist;
                        (!c || i) && (b(h.doc, i),
                        d(h.doc, a, i))
                    }
                }
        }
        d(a, null, !0)
    }
    function hf(a, b) {
        if (b.cm)
            throw new Error("This document is already in use.");
        a.doc = b,
        b.cm = a,
        D(a),
        z(a),
        a.options.lineWrapping || J(a),
        a.options.mode = b.modeOption,
        lc(a)
    }
    function jf(a, b) {
        if (b -= a.first,
        0 > b || b >= a.size)
            throw new Error("There is no line " + (b + a.first) + " in the document.");
        for (var c = a; !c.lines; )
            for (var d = 0; ; ++d) {
                var e = c.children[d]
                  , f = e.chunkSize();
                if (f > b) {
                    c = e;
                    break
                }
                b -= f
            }
        return c.lines[b]
    }
    function kf(a, b, c) {
        var d = []
          , e = b.line;
        return a.iter(b.line, c.line + 1, function(a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)),
            e == b.line && (f = f.slice(b.ch)),
            d.push(f),
            ++e
        }),
        d
    }
    function lf(a, b, c) {
        var d = [];
        return a.iter(b, c, function(a) {
            d.push(a.text)
        }),
        d
    }
    function mf(a, b) {
        var c = b - a.height;
        if (c)
            for (var d = a; d; d = d.parent)
                d.height += c
    }
    function nf(a) {
        if (null == a.parent)
            return null;
        for (var b = a.parent, c = ig(b.lines, a), d = b.parent; d; b = d,
        d = d.parent)
            for (var e = 0; d.children[e] != b; ++e)
                c += d.children[e].chunkSize();
        return c + b.first
    }
    function of(a, b) {
        var c = a.first;
        a: do {
            for (var d = 0; d < a.children.length; ++d) {
                var e = a.children[d]
                  , f = e.height;
                if (f > b) {
                    a = e;
                    continue a
                }
                b -= f,
                c += e.chunkSize()
            }
            return c
        } while (!a.lines);
        for (var d = 0; d < a.lines.length; ++d) {
            var g = a.lines[d]
              , h = g.height;
            if (h > b)
                break;
            b -= h
        }
        return c + d
    }
    function pf(a) {
        a = ve(a);
        for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
            var e = c.lines[d];
            if (e == a)
                break;
            b += e.height
        }
        for (var f = c.parent; f; c = f,
        f = c.parent)
            for (var d = 0; d < f.children.length; ++d) {
                var g = f.children[d];
                if (g == c)
                    break;
                b += g.height
            }
        return b
    }
    function qf(a) {
        var b = a.order;
        return null == b && (b = a.order = fh(a.text)),
        b
    }
    function rf(a) {
        this.done = [],
        this.undone = [],
        this.undoDepth = 1 / 0,
        this.lastModTime = this.lastSelTime = 0,
        this.lastOp = this.lastSelOp = null,
        this.lastOrigin = this.lastSelOrigin = null,
        this.generation = this.maxGeneration = a || 1
    }
    function sf(a, b) {
        var c = {
            from: sa(b.from),
            to: ed(b),
            text: kf(a, b.from, b.to)
        };
        return zf(a, c, b.from.line, b.to.line + 1),
        gf(a, function(a) {
            zf(a, c, b.from.line, b.to.line + 1)
        }, !0),
        c
    }
    function tf(a) {
        for (; a.length; ) {
            var b = gg(a);
            if (!b.ranges)
                break;
            a.pop()
        }
    }
    function uf(a, b) {
        return b ? (tf(a.done),
        gg(a.done)) : a.done.length && !gg(a.done).ranges ? gg(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(),
        gg(a.done)) : void 0
    }
    function vf(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var g, f = +new Date;
        if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (g = uf(e, e.lastOp == d))) {
            var h = gg(g.changes);
            0 == ra(b.from, b.to) && 0 == ra(b.from, h.to) ? h.to = ed(b) : g.changes.push(sf(a, b))
        } else {
            var i = gg(e.done);
            for (i && i.ranges || yf(a.sel, e.done),
            g = {
                changes: [sf(a, b)],
                generation: e.generation
            },
            e.done.push(g); e.done.length > e.undoDepth; )
                e.done.shift(),
                e.done[0].ranges || e.done.shift()
        }
        e.done.push(c),
        e.generation = ++e.maxGeneration,
        e.lastModTime = e.lastSelTime = f,
        e.lastOp = e.lastSelOp = d,
        e.lastOrigin = e.lastSelOrigin = b.origin,
        h || Qf(a, "historyAdded")
    }
    function wf(a, b, c, d) {
        var e = b.charAt(0);
        return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
    }
    function xf(a, b, c, d) {
        var e = a.history
          , f = d && d.origin;
        c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || wf(a, f, gg(e.done), b)) ? e.done[e.done.length - 1] = b : yf(b, e.done),
        e.lastSelTime = +new Date,
        e.lastSelOrigin = f,
        e.lastSelOp = c,
        d && d.clearRedo !== !1 && tf(e.undone)
    }
    function yf(a, b) {
        var c = gg(b);
        c && c.ranges && c.equals(a) || b.push(a)
    }
    function zf(a, b, c, d) {
        var e = b["spans_" + a.id]
          , f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function(c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans),
            ++f
        })
    }
    function Af(a) {
        if (!a)
            return null;
        for (var c, b = 0; b < a.length; ++b)
            a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
        return c ? c.length ? c : null : a
    }
    function Bf(a, b) {
        var c = b["spans_" + a.id];
        if (!c)
            return null;
        for (var d = 0, e = []; d < b.text.length; ++d)
            e.push(Af(c[d]));
        return e
    }
    function Cf(a, b, c) {
        for (var d = 0, e = []; d < a.length; ++d) {
            var f = a[d];
            if (f.ranges)
                e.push(c ? Ka.prototype.deepCopy.call(f) : f);
            else {
                var g = f.changes
                  , h = [];
                e.push({
                    changes: h
                });
                for (var i = 0; i < g.length; ++i) {
                    var k, j = g[i];
                    if (h.push({
                        from: j.from,
                        to: j.to,
                        text: j.text
                    }),
                    b)
                        for (var l in j)
                            (k = l.match(/^spans_(\d+)$/)) && ig(b, Number(k[1])) > -1 && (gg(h)[l] = j[l],
                            delete j[l])
                }
            }
        }
        return e
    }
    function Df(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b,
        a.ch = 0)
    }
    function Ef(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e]
              , g = !0;
            if (f.ranges) {
                f.copied || (f = a[e] = f.deepCopy(),
                f.copied = !0);
                for (var h = 0; h < f.ranges.length; h++)
                    Df(f.ranges[h].anchor, b, c, d),
                    Df(f.ranges[h].head, b, c, d)
            } else {
                for (var h = 0; h < f.changes.length; ++h) {
                    var i = f.changes[h];
                    if (c < i.from.line)
                        i.from = qa(i.from.line + d, i.from.ch),
                        i.to = qa(i.to.line + d, i.to.ch);
                    else if (b <= i.to.line) {
                        g = !1;
                        break
                    }
                }
                g || (a.splice(0, e + 1),
                e = 0)
            }
        }
    }
    function Ff(a, b) {
        var c = b.from.line
          , d = b.to.line
          , e = b.text.length - (d - c) - 1;
        Ef(a.done, c, d, e),
        Ef(a.undone, c, d, e)
    }
    function If(a) {
        return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
    }
    function Kf(a) {
        return a.target || a.srcElement
    }
    function Lf(a) {
        var b = a.which;
        return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)),
        q && a.ctrlKey && 1 == b && (b = 3),
        b
    }
    function Of(a, b, c) {
        var d = a._handlers && a._handlers[b];
        return c ? d && d.length > 0 ? d.slice() : Nf : d || Nf
    }
    function Sf(a, b) {
        function f(a) {
            return function() {
                a.apply(null, d)
            }
        }
        var c = Of(a, b, !1);
        if (c.length) {
            var e, d = Array.prototype.slice.call(arguments, 2);
            Wb ? e = Wb.delayedCallbacks : Rf ? e = Rf : (e = Rf = [],
            setTimeout(Tf, 0));
            for (var g = 0; g < c.length; ++g)
                e.push(f(c[g]))
        }
    }
    function Tf() {
        var a = Rf;
        Rf = null;
        for (var b = 0; b < a.length; ++b)
            a[b]()
    }
    function Uf(a, b, c) {
        return "string" == typeof b && (b = {
            type: b,
            preventDefault: function() {
                this.defaultPrevented = !0
            }
        }),
        Qf(a, c || b.type, a, b),
        If(b) || b.codemirrorIgnore
    }
    function Vf(a) {
        var b = a._handlers && a._handlers.cursorActivity;
        if (b)
            for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d)
                -1 == ig(c, b[d]) && c.push(b[d])
    }
    function Wf(a, b) {
        return Of(a, b).length > 0
    }
    function Xf(a) {
        a.prototype.on = function(a, b) {
            Mf(this, a, b)
        }
        ,
        a.prototype.off = function(a, b) {
            Pf(this, a, b)
        }
    }
    function bg() {
        this.id = null
    }
    function fg(a) {
        for (; eg.length <= a; )
            eg.push(gg(eg) + " ");
        return eg[a]
    }
    function gg(a) {
        return a[a.length - 1]
    }
    function ig(a, b) {
        for (var c = 0; c < a.length; ++c)
            if (a[c] == b)
                return c;
        return -1
    }
    function jg(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c[d] = b(a[d], d);
        return c
    }
    function kg() {}
    function lg(a, b) {
        var c;
        return Object.create ? c = Object.create(a) : (kg.prototype = a,
        c = new kg),
        b && mg(b, c),
        c
    }
    function mg(a, b, c) {
        b || (b = {});
        for (var d in a)
            !a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
        return b
    }
    function ng(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function() {
            return a.apply(null, b)
        }
    }
    function qg(a, b) {
        return b ? b.source.indexOf("\\w") > -1 && pg(a) ? !0 : b.test(a) : pg(a)
    }
    function rg(a) {
        for (var b in a)
            if (a.hasOwnProperty(b) && a[b])
                return !1;
        return !0
    }
    function tg(a) {
        return a.charCodeAt(0) >= 768 && sg.test(a)
    }
    function ug(a, b, c, d) {
        var e = document.createElement(a);
        if (c && (e.className = c),
        d && (e.style.cssText = d),
        "string" == typeof b)
            e.appendChild(document.createTextNode(b));
        else if (b)
            for (var f = 0; f < b.length; ++f)
                e.appendChild(b[f]);
        return e
    }
    function wg(a) {
        for (var b = a.childNodes.length; b > 0; --b)
            a.removeChild(a.firstChild);
        return a
    }
    function xg(a, b) {
        return wg(a).appendChild(b)
    }
    function zg() {
        for (var a = document.activeElement; a && a.root && a.root.activeElement; )
            a = a.root.activeElement;
        return a
    }
    function Ag(a) {
        return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
    }
    function Dg(a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)
            c[d] && !Ag(c[d]).test(b) && (b += " " + c[d]);
        return b
    }
    function Eg(a) {
        if (document.body.getElementsByClassName)
            for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
                var d = b[c].CodeMirror;
                d && a(d)
            }
    }
    function Gg() {
        Fg || (Hg(),
        Fg = !0)
    }
    function Hg() {
        var a;
        Mf(window, "resize", function() {
            null == a && (a = setTimeout(function() {
                a = null,
                Eg(uc)
            }, 100))
        }),
        Mf(window, "blur", function() {
            Eg(bd)
        })
    }
    function Kg(a) {
        if (null == Jg) {
            var b = ug("span", "\u200b");
            xg(a, ug("span", [b, document.createTextNode("x")])),
            0 != a.firstChild.offsetHeight && (Jg = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(f && 8 > g))
        }
        var c = Jg ? ug("span", "\u200b") : ug("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return c.setAttribute("cm-text", ""),
        c
    }
    function Mg(a) {
        if (null != Lg)
            return Lg;
        var b = xg(a, document.createTextNode("A\u062eA"))
          , c = vg(b, 0, 1).getBoundingClientRect();
        if (!c || c.left == c.right)
            return !1;
        var d = vg(b, 1, 2).getBoundingClientRect();
        return Lg = d.right - c.right < 3
    }
    function Rg(a) {
        if (null != Qg)
            return Qg;
        var b = xg(a, ug("span", "x"))
          , c = b.getBoundingClientRect()
          , d = vg(b, 0, 1).getBoundingClientRect();
        return Qg = Math.abs(c.left - d.left) > 1
    }
    function Tg(a, b, c, d) {
        if (!a)
            return d(b, c, "ltr");
        for (var e = !1, f = 0; f < a.length; ++f) {
            var g = a[f];
            (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"),
            e = !0)
        }
        e || d(b, c, "ltr")
    }
    function Ug(a) {
        return a.level % 2 ? a.to : a.from
    }
    function Vg(a) {
        return a.level % 2 ? a.from : a.to
    }
    function Wg(a) {
        var b = qf(a);
        return b ? Ug(b[0]) : 0
    }
    function Xg(a) {
        var b = qf(a);
        return b ? Vg(gg(b)) : a.text.length
    }
    function Yg(a, b) {
        var c = jf(a.doc, b)
          , d = ve(c);
        d != c && (b = nf(d));
        var e = qf(d)
          , f = e ? e[0].level % 2 ? Xg(d) : Wg(d) : 0;
        return qa(b, f)
    }
    function Zg(a, b) {
        for (var c, d = jf(a.doc, b); c = te(d); )
            d = c.find(1, !0).line,
            b = null;
        var e = qf(d)
          , f = e ? e[0].level % 2 ? Wg(d) : Xg(d) : d.text.length;
        return qa(null == b ? nf(d) : b, f)
    }
    function $g(a, b) {
        var c = Yg(a, b.line)
          , d = jf(a.doc, c.line)
          , e = qf(d);
        if (!e || 0 == e[0].level) {
            var f = Math.max(0, d.text.search(/\S/))
              , g = b.line == c.line && b.ch <= f && b.ch;
            return qa(c.line, g ? 0 : f)
        }
        return c
    }
    function _g(a, b, c) {
        var d = a[0].level;
        return b == d ? !0 : c == d ? !1 : c > b
    }
    function bh(a, b) {
        ah = null;
        for (var d, c = 0; c < a.length; ++c) {
            var e = a[c];
            if (e.from < b && e.to > b)
                return c;
            if (e.from == b || e.to == b) {
                if (null != d)
                    return _g(a, e.level, a[d].level) ? (e.from != e.to && (ah = d),
                    c) : (e.from != e.to && (ah = c),
                    d);
                d = c
            }
        }
        return d
    }
    function ch(a, b, c, d) {
        if (!d)
            return b + c;
        do
            b += c;
        while (b > 0 && tg(a.text.charAt(b)));
        return b
    }
    function dh(a, b, c, d) {
        var e = qf(a);
        if (!e)
            return eh(a, b, c, d);
        for (var f = bh(e, b), g = e[f], h = ch(a, b, g.level % 2 ? -c : c, d); ; ) {
            if (h > g.from && h < g.to)
                return h;
            if (h == g.from || h == g.to)
                return bh(e, h) == f ? h : (g = e[f += c],
                c > 0 == g.level % 2 ? g.to : g.from);
            if (g = e[f += c],
            !g)
                return null;
            h = c > 0 == g.level % 2 ? ch(a, g.to, -1, d) : ch(a, g.from, 1, d)
        }
    }
    function eh(a, b, c, d) {
        var e = b + c;
        if (d)
            for (; e > 0 && tg(a.text.charAt(e)); )
                e += c;
        return 0 > e || e > a.text.length ? null : e
    }
    var a = navigator.userAgent
      , b = navigator.platform
      , c = /gecko\/\d/i.test(a)
      , d = /MSIE \d/.test(a)
      , e = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(a)
      , f = d || e
      , g = f && (d ? document.documentMode || 6 : e[1])
      , h = /WebKit\//.test(a)
      , i = h && /Qt\/\d+\.\d+/.test(a)
      , j = /Chrome\//.test(a)
      , k = /Opera\//.test(a)
      , l = /Apple Computer/.test(navigator.vendor)
      , m = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(a)
      , n = /PhantomJS/.test(a)
      , o = /AppleWebKit/.test(a) && /Mobile\/\w+/.test(a)
      , p = o || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(a)
      , q = o || /Mac/.test(b)
      , r = /win/i.test(b)
      , s = k && a.match(/Version\/(\d*\.\d*)/);
    s && (s = Number(s[1])),
    s && s >= 15 && (k = !1,
    h = !0);
    var t = q && (i || k && (null == s || 12.11 > s))
      , u = c || f && g >= 9
      , v = !1
      , w = !1;
    M.prototype = mg({
        update: function(a) {
            var b = a.scrollWidth > a.clientWidth + 1
              , c = a.scrollHeight > a.clientHeight + 1
              , d = a.nativeBarWidth;
            if (c) {
                this.vert.style.display = "block",
                this.vert.style.bottom = b ? d + "px" : "0";
                var e = a.viewHeight - (b ? d : 0);
                this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
            } else
                this.vert.style.display = "",
                this.vert.firstChild.style.height = "0";
            if (b) {
                this.horiz.style.display = "block",
                this.horiz.style.right = c ? d + "px" : "0",
                this.horiz.style.left = a.barLeft + "px";
                var f = a.viewWidth - a.barLeft - (c ? d : 0);
                this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
            } else
                this.horiz.style.display = "",
                this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && a.clientHeight > 0 && (0 == d && this.zeroWidthHack(),
            this.checkedZeroWidth = !0),
            {
                right: c ? d : 0,
                bottom: b ? d : 0
            }
        },
        setScrollLeft: function(a) {
            this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a),
            this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
        },
        setScrollTop: function(a) {
            this.vert.scrollTop != a && (this.vert.scrollTop = a),
            this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
        },
        zeroWidthHack: function() {
            var a = q && !m ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = a,
            this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
            this.disableHoriz = new bg,
            this.disableVert = new bg
        },
        enableZeroWidthBar: function(a, b) {
            function c() {
                var d = a.getBoundingClientRect()
                  , e = document.elementFromPoint(d.left + 1, d.bottom - 1);
                e != a ? a.style.pointerEvents = "none" : b.set(1e3, c)
            }
            a.style.pointerEvents = "auto",
            b.set(1e3, c)
        },
        clear: function() {
            var a = this.horiz.parentNode;
            a.removeChild(this.horiz),
            a.removeChild(this.vert)
        }
    }, M.prototype),
    N.prototype = mg({
        update: function() {
            return {
                bottom: 0,
                right: 0
            }
        },
        setScrollLeft: function() {},
        setScrollTop: function() {},
        clear: function() {}
    }, N.prototype),
    x.scrollbarModel = {
        "native": M,
        "null": N
    },
    W.prototype.signal = function(a, b) {
        Wf(a, b) && this.events.push(arguments)
    }
    ,
    W.prototype.finish = function() {
        for (var a = 0; a < this.events.length; a++)
            Qf.apply(null, this.events[a]);
    }
    ;
    var qa = x.Pos = function(a, b) {
        return this instanceof qa ? (this.line = a,
        void (this.ch = b)) : new qa(a,b)
    }
      , ra = x.cmpPos = function(a, b) {
        return a.line - b.line || a.ch - b.ch
    }
      , wa = null;
    Ca.prototype = mg({
        init: function(a) {
            function h(a) {
                if (!Uf(c, a)) {
                    if (c.somethingSelected())
                        wa = c.getSelections(),
                        b.inaccurateSelection && (b.prevInput = "",
                        b.inaccurateSelection = !1,
                        e.value = wa.join("\n"),
                        hg(e));
                    else {
                        if (!c.options.lineWiseCopyCut)
                            return;
                        var d = Aa(c);
                        wa = d.text,
                        "cut" == a.type ? c.setSelections(d.ranges, null, $f) : (b.prevInput = "",
                        e.value = d.text.join("\n"),
                        hg(e))
                    }
                    "cut" == a.type && (c.state.cutIncoming = !0)
                }
            }
            var b = this
              , c = this.cm
              , d = this.wrapper = Da()
              , e = this.textarea = d.firstChild;
            a.wrapper.insertBefore(d, a.wrapper.firstChild),
            o && (e.style.width = "0px"),
            Mf(e, "input", function() {
                f && g >= 9 && b.hasSelection && (b.hasSelection = null),
                b.poll()
            }),
            Mf(e, "paste", function(a) {
                Uf(c, a) || ya(a, c) || (c.state.pasteIncoming = !0,
                b.fastPoll())
            }),
            Mf(e, "cut", h),
            Mf(e, "copy", h),
            Mf(a.scroller, "paste", function(d) {
                vc(a, d) || Uf(c, d) || (c.state.pasteIncoming = !0,
                b.focus())
            }),
            Mf(a.lineSpace, "selectstart", function(b) {
                vc(a, b) || Gf(b)
            }),
            Mf(e, "compositionstart", function() {
                var a = c.getCursor("from");
                b.composing && b.composing.range.clear(),
                b.composing = {
                    start: a,
                    range: c.markText(a, c.getCursor("to"), {
                        className: "CodeMirror-composing"
                    })
                }
            }),
            Mf(e, "compositionend", function() {
                b.composing && (b.poll(),
                b.composing.range.clear(),
                b.composing = null)
            })
        },
        prepareSelection: function() {
            var a = this.cm
              , b = a.display
              , c = a.doc
              , d = hb(a);
            if (a.options.moveInputWithCursor) {
                var e = Ob(a, c.sel.primary().head, "div")
                  , f = b.wrapper.getBoundingClientRect()
                  , g = b.lineDiv.getBoundingClientRect();
                d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, e.top + g.top - f.top)),
                d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, e.left + g.left - f.left))
            }
            return d
        },
        showSelection: function(a) {
            var b = this.cm
              , c = b.display;
            xg(c.cursorDiv, a.cursors),
            xg(c.selectionDiv, a.selection),
            null != a.teTop && (this.wrapper.style.top = a.teTop + "px",
            this.wrapper.style.left = a.teLeft + "px")
        },
        reset: function(a) {
            if (!this.contextMenuPending) {
                var b, c, d = this.cm, e = d.doc;
                if (d.somethingSelected()) {
                    this.prevInput = "";
                    var h = e.sel.primary();
                    b = Pg && (h.to().line - h.from().line > 100 || (c = d.getSelection()).length > 1e3);
                    var i = b ? "-" : c || d.getSelection();
                    this.textarea.value = i,
                    d.state.focused && hg(this.textarea),
                    f && g >= 9 && (this.hasSelection = i)
                } else
                    a || (this.prevInput = this.textarea.value = "",
                    f && g >= 9 && (this.hasSelection = null));
                this.inaccurateSelection = b
            }
        },
        getField: function() {
            return this.textarea
        },
        supportsTouch: function() {
            return !1
        },
        focus: function() {
            if ("nocursor" != this.cm.options.readOnly && (!p || zg() != this.textarea))
                try {
                    this.textarea.focus()
                } catch (a) {}
        },
        blur: function() {
            this.textarea.blur()
        },
        resetPosition: function() {
            this.wrapper.style.top = this.wrapper.style.left = 0
        },
        receivedFocus: function() {
            this.slowPoll()
        },
        slowPoll: function() {
            var a = this;
            a.pollingFast || a.polling.set(this.cm.options.pollInterval, function() {
                a.poll(),
                a.cm.state.focused && a.slowPoll()
            })
        },
        fastPoll: function() {
            function c() {
                var d = b.poll();
                d || a ? (b.pollingFast = !1,
                b.slowPoll()) : (a = !0,
                b.polling.set(60, c))
            }
            var a = !1
              , b = this;
            b.pollingFast = !0,
            b.polling.set(20, c)
        },
        poll: function() {
            var a = this.cm
              , b = this.textarea
              , c = this.prevInput;
            if (this.contextMenuPending || !a.state.focused || Og(b) && !c && !this.composing || a.isReadOnly() || a.options.disableInput || a.state.keySeq)
                return !1;
            var d = b.value;
            if (d == c && !a.somethingSelected())
                return !1;
            if (f && g >= 9 && this.hasSelection === d || q && /[\uf700-\uf7ff]/.test(d))
                return a.display.input.reset(),
                !1;
            if (a.doc.sel == a.display.selForContextMenu) {
                var e = d.charCodeAt(0);
                if (8203 != e || c || (c = "\u200b"),
                8666 == e)
                    return this.reset(),
                    this.cm.execCommand("undo")
            }
            for (var h = 0, i = Math.min(c.length, d.length); i > h && c.charCodeAt(h) == d.charCodeAt(h); )
                ++h;
            var j = this;
            return fc(a, function() {
                xa(a, d.slice(h), c.length - h, null, j.composing ? "*compose" : null),
                d.length > 1e3 || d.indexOf("\n") > -1 ? b.value = j.prevInput = "" : j.prevInput = d,
                j.composing && (j.composing.range.clear(),
                j.composing.range = a.markText(j.composing.start, a.getCursor("to"), {
                    className: "CodeMirror-composing"
                }))
            }),
            !0
        },
        ensurePolled: function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        },
        onKeyPress: function() {
            f && g >= 9 && (this.hasSelection = null),
            this.fastPoll()
        },
        onContextMenu: function(a) {
            function q() {
                if (null != e.selectionStart) {
                    var a = c.somethingSelected()
                      , f = "\u200b" + (a ? e.value : "");
                    e.value = "\u21da",
                    e.value = f,
                    b.prevInput = a ? "" : "\u200b",
                    e.selectionStart = 1,
                    e.selectionEnd = f.length,
                    d.selForContextMenu = c.doc.sel
                }
            }
            function r() {
                if (b.contextMenuPending = !1,
                b.wrapper.style.cssText = n,
                e.style.cssText = m,
                f && 9 > g && d.scrollbars.setScrollTop(d.scroller.scrollTop = j),
                null != e.selectionStart) {
                    (!f || f && 9 > g) && q();
                    var a = 0
                      , h = function() {
                        d.selForContextMenu == c.doc.sel && 0 == e.selectionStart && e.selectionEnd > 0 && "\u200b" == b.prevInput ? gc(c, Od.selectAll)(c) : a++ < 10 ? d.detectingSelectAll = setTimeout(h, 500) : d.input.reset()
                    };
                    d.detectingSelectAll = setTimeout(h, 200)
                }
            }
            var b = this
              , c = b.cm
              , d = c.display
              , e = b.textarea
              , i = wc(c, a)
              , j = d.scroller.scrollTop;
            if (i && !k) {
                var l = c.options.resetSelectionOnContextMenu;
                l && -1 == c.doc.sel.contains(i) && gc(c, $a)(c.doc, Na(i), $f);
                var m = e.style.cssText
                  , n = b.wrapper.style.cssText;
                b.wrapper.style.cssText = "position: absolute";
                var o = b.wrapper.getBoundingClientRect();
                if (e.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (a.clientY - o.top - 5) + "px; left: " + (a.clientX - o.left - 5) + "px; z-index: 1000; background: " + (f ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
                h)
                    var p = window.scrollY;
                if (d.input.focus(),
                h && window.scrollTo(null, p),
                d.input.reset(),
                c.somethingSelected() || (e.value = b.prevInput = " "),
                b.contextMenuPending = !0,
                d.selForContextMenu = c.doc.sel,
                clearTimeout(d.detectingSelectAll),
                f && g >= 9 && q(),
                u) {
                    Jf(a);
                    var s = function() {
                        Pf(window, "mouseup", s),
                        setTimeout(r, 20)
                    };
                    Mf(window, "mouseup", s)
                } else
                    setTimeout(r, 50)
            }
        },
        readOnlyChanged: function(a) {
            a || this.reset()
        },
        setUneditable: kg,
        needsContentAttribute: !1
    }, Ca.prototype),
    Ea.prototype = mg({
        init: function(a) {
            function e(a) {
                if (!Uf(c, a)) {
                    if (c.somethingSelected())
                        wa = c.getSelections(),
                        "cut" == a.type && c.replaceSelection("", null, "cut");
                    else {
                        if (!c.options.lineWiseCopyCut)
                            return;
                        var b = Aa(c);
                        wa = b.text,
                        "cut" == a.type && c.operation(function() {
                            c.setSelections(b.ranges, 0, $f),
                            c.replaceSelection("", null, "cut")
                        })
                    }
                    if (a.clipboardData && !o)
                        a.preventDefault(),
                        a.clipboardData.clearData(),
                        a.clipboardData.setData("text/plain", wa.join("\n"));
                    else {
                        var d = Da()
                          , e = d.firstChild;
                        c.display.lineSpace.insertBefore(d, c.display.lineSpace.firstChild),
                        e.value = wa.join("\n");
                        var f = document.activeElement;
                        hg(e),
                        setTimeout(function() {
                            c.display.lineSpace.removeChild(d),
                            f.focus()
                        }, 50)
                    }
                }
            }
            var b = this
              , c = b.cm
              , d = b.div = a.lineDiv;
            Ba(d),
            Mf(d, "paste", function(a) {
                Uf(c, a) || ya(a, c)
            }),
            Mf(d, "compositionstart", function(a) {
                var d = a.data;
                if (b.composing = {
                    sel: c.doc.sel,
                    data: d,
                    startData: d
                },
                d) {
                    var e = c.doc.sel.primary()
                      , f = c.getLine(e.head.line)
                      , g = f.indexOf(d, Math.max(0, e.head.ch - d.length));
                    g > -1 && g <= e.head.ch && (b.composing.sel = Na(qa(e.head.line, g), qa(e.head.line, g + d.length)))
                }
            }),
            Mf(d, "compositionupdate", function(a) {
                b.composing.data = a.data
            }),
            Mf(d, "compositionend", function(a) {
                var c = b.composing;
                c && (a.data == c.startData || /\u200b/.test(a.data) || (c.data = a.data),
                setTimeout(function() {
                    c.handled || b.applyComposition(c),
                    b.composing == c && (b.composing = null)
                }, 50))
            }),
            Mf(d, "touchstart", function() {
                b.forceCompositionEnd()
            }),
            Mf(d, "input", function() {
                b.composing || (c.isReadOnly() || !b.pollContent()) && fc(b.cm, function() {
                    lc(c)
                })
            }),
            Mf(d, "copy", e),
            Mf(d, "cut", e)
        },
        prepareSelection: function() {
            var a = hb(this.cm, !1);
            return a.focus = this.cm.state.focused,
            a
        },
        showSelection: function(a) {
            a && this.cm.display.view.length && (a.focus && this.showPrimarySelection(),
            this.showMultipleSelections(a))
        },
        showPrimarySelection: function() {
            var a = window.getSelection()
              , b = this.cm.doc.sel.primary()
              , d = Ha(this.cm, a.anchorNode, a.anchorOffset)
              , e = Ha(this.cm, a.focusNode, a.focusOffset);
            if (!d || d.bad || !e || e.bad || 0 != ra(ua(d, e), b.from()) || 0 != ra(ta(d, e), b.to())) {
                var f = Fa(this.cm, b.from())
                  , g = Fa(this.cm, b.to());
                if (f || g) {
                    var h = this.cm.display.view
                      , i = a.rangeCount && a.getRangeAt(0);
                    if (f) {
                        if (!g) {
                            var j = h[h.length - 1].measure
                              , k = j.maps ? j.maps[j.maps.length - 1] : j.map;
                            g = {
                                node: k[k.length - 1],
                                offset: k[k.length - 2] - k[k.length - 3]
                            }
                        }
                    } else
                        f = {
                            node: h[0].measure.map[2],
                            offset: 0
                        };
                    try {
                        var l = vg(f.node, f.offset, g.offset, g.node)
                    } catch (m) {}
                    l && (!c && this.cm.state.focused ? (a.collapse(f.node, f.offset),
                    l.collapsed || a.addRange(l)) : (a.removeAllRanges(),
                    a.addRange(l)),
                    i && null == a.anchorNode ? a.addRange(i) : c && this.startGracePeriod()),
                    this.rememberSelection()
                }
            }
        },
        startGracePeriod: function() {
            var a = this;
            clearTimeout(this.gracePeriod),
            this.gracePeriod = setTimeout(function() {
                a.gracePeriod = !1,
                a.selectionChanged() && a.cm.operation(function() {
                    a.cm.curOp.selectionChanged = !0
                })
            }, 20)
        },
        showMultipleSelections: function(a) {
            xg(this.cm.display.cursorDiv, a.cursors),
            xg(this.cm.display.selectionDiv, a.selection)
        },
        rememberSelection: function() {
            var a = window.getSelection();
            this.lastAnchorNode = a.anchorNode,
            this.lastAnchorOffset = a.anchorOffset,
            this.lastFocusNode = a.focusNode,
            this.lastFocusOffset = a.focusOffset
        },
        selectionInEditor: function() {
            var a = window.getSelection();
            if (!a.rangeCount)
                return !1;
            var b = a.getRangeAt(0).commonAncestorContainer;
            return yg(this.div, b)
        },
        focus: function() {
            "nocursor" != this.cm.options.readOnly && this.div.focus()
        },
        blur: function() {
            this.div.blur()
        },
        getField: function() {
            return this.div
        },
        supportsTouch: function() {
            return !0
        },
        receivedFocus: function() {
            function b() {
                a.cm.state.focused && (a.pollSelection(),
                a.polling.set(a.cm.options.pollInterval, b))
            }
            var a = this;
            this.selectionInEditor() ? this.pollSelection() : fc(this.cm, function() {
                a.cm.curOp.selectionChanged = !0
            }),
            this.polling.set(this.cm.options.pollInterval, b)
        },
        selectionChanged: function() {
            var a = window.getSelection();
            return a.anchorNode != this.lastAnchorNode || a.anchorOffset != this.lastAnchorOffset || a.focusNode != this.lastFocusNode || a.focusOffset != this.lastFocusOffset
        },
        pollSelection: function() {
            if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
                var a = window.getSelection()
                  , b = this.cm;
                this.rememberSelection();
                var c = Ha(b, a.anchorNode, a.anchorOffset)
                  , d = Ha(b, a.focusNode, a.focusOffset);
                c && d && fc(b, function() {
                    $a(b.doc, Na(c, d), $f),
                    (c.bad || d.bad) && (b.curOp.selectionChanged = !0)
                })
            }
        },
        pollContent: function() {
            var a = this.cm
              , b = a.display
              , c = a.doc.sel.primary()
              , d = c.from()
              , e = c.to();
            if (d.line < b.viewFrom || e.line > b.viewTo - 1)
                return !1;
            var f;
            if (d.line == b.viewFrom || 0 == (f = oc(a, d.line)))
                var g = nf(b.view[0].line)
                  , h = b.view[0].node;
            else
                var g = nf(b.view[f].line)
                  , h = b.view[f - 1].node.nextSibling;
            var i = oc(a, e.line);
            if (i == b.view.length - 1)
                var j = b.viewTo - 1
                  , k = b.lineDiv.lastChild;
            else
                var j = nf(b.view[i + 1].line) - 1
                  , k = b.view[i + 1].node.previousSibling;
            for (var l = a.doc.splitLines(Ja(a, h, k, g, j)), m = kf(a.doc, qa(g, 0), qa(j, jf(a.doc, j).text.length)); l.length > 1 && m.length > 1; )
                if (gg(l) == gg(m))
                    l.pop(),
                    m.pop(),
                    j--;
                else {
                    if (l[0] != m[0])
                        break;
                    l.shift(),
                    m.shift(),
                    g++
                }
            for (var n = 0, o = 0, p = l[0], q = m[0], r = Math.min(p.length, q.length); r > n && p.charCodeAt(n) == q.charCodeAt(n); )
                ++n;
            for (var s = gg(l), t = gg(m), u = Math.min(s.length - (1 == l.length ? n : 0), t.length - (1 == m.length ? n : 0)); u > o && s.charCodeAt(s.length - o - 1) == t.charCodeAt(t.length - o - 1); )
                ++o;
            l[l.length - 1] = s.slice(0, s.length - o),
            l[0] = l[0].slice(n);
            var v = qa(g, n)
              , w = qa(j, m.length ? gg(m).length - o : 0);
            return l.length > 1 || l[0] || ra(v, w) ? (qd(a.doc, l, v, w, "+input"),
            !0) : void 0
        },
        ensurePolled: function() {
            this.forceCompositionEnd()
        },
        reset: function() {
            this.forceCompositionEnd()
        },
        forceCompositionEnd: function() {
            this.composing && !this.composing.handled && (this.applyComposition(this.composing),
            this.composing.handled = !0,
            this.div.blur(),
            this.div.focus())
        },
        applyComposition: function(a) {
            this.cm.isReadOnly() ? gc(this.cm, lc)(this.cm) : a.data && a.data != a.startData && gc(this.cm, xa)(this.cm, a.data, 0, a.sel)
        },
        setUneditable: function(a) {
            a.contentEditable = "false"
        },
        onKeyPress: function(a) {
            a.preventDefault(),
            this.cm.isReadOnly() || gc(this.cm, xa)(this.cm, String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), 0)
        },
        readOnlyChanged: function(a) {
            this.div.contentEditable = String("nocursor" != a)
        },
        onContextMenu: kg,
        resetPosition: kg,
        needsContentAttribute: !0
    }, Ea.prototype),
    x.inputStyles = {
        textarea: Ca,
        contenteditable: Ea
    },
    Ka.prototype = {
        primary: function() {
            return this.ranges[this.primIndex]
        },
        equals: function(a) {
            if (a == this)
                return !0;
            if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length)
                return !1;
            for (var b = 0; b < this.ranges.length; b++) {
                var c = this.ranges[b]
                  , d = a.ranges[b];
                if (0 != ra(c.anchor, d.anchor) || 0 != ra(c.head, d.head))
                    return !1
            }
            return !0
        },
        deepCopy: function() {
            for (var a = [], b = 0; b < this.ranges.length; b++)
                a[b] = new La(sa(this.ranges[b].anchor),sa(this.ranges[b].head));
            return new Ka(a,this.primIndex)
        },
        somethingSelected: function() {
            for (var a = 0; a < this.ranges.length; a++)
                if (!this.ranges[a].empty())
                    return !0;
            return !1
        },
        contains: function(a, b) {
            b || (b = a);
            for (var c = 0; c < this.ranges.length; c++) {
                var d = this.ranges[c];
                if (ra(b, d.from()) >= 0 && ra(a, d.to()) <= 0)
                    return c
            }
            return -1
        }
    },
    La.prototype = {
        from: function() {
            return ua(this.anchor, this.head)
        },
        to: function() {
            return ta(this.anchor, this.head)
        },
        empty: function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
    };
    var Tb, yc, zc, Cb = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, Wb = null, Xb = 0, Fc = 0, Mc = 0, Nc = null;
    f ? Nc = -.53 : c ? Nc = 15 : j ? Nc = -.7 : l && (Nc = -1 / 3);
    var Oc = function(a) {
        var b = a.wheelDeltaX
          , c = a.wheelDeltaY;
        return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail),
        null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta),
        {
            x: b,
            y: c
        }
    };
    x.wheelEventPixels = function(a) {
        var b = Oc(a);
        return b.x *= Nc,
        b.y *= Nc,
        b
    }
    ;
    var Sc = new bg
      , Wc = null
      , ed = x.changeEnd = function(a) {
        return a.text ? qa(a.from.line + a.text.length - 1, gg(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
    }
    ;
    x.prototype = {
        constructor: x,
        focus: function() {
            window.focus(),
            this.display.input.focus()
        },
        setOption: function(a, b) {
            var c = this.options
              , d = c[a];
            (c[a] != b || "mode" == a) && (c[a] = b,
            Ed.hasOwnProperty(a) && gc(this, Ed[a])(this, b, d))
        },
        getOption: function(a) {
            return this.options[a]
        },
        getDoc: function() {
            return this.doc
        },
        addKeyMap: function(a, b) {
            this.state.keyMaps[b ? "push" : "unshift"](Ud(a))
        },
        removeKeyMap: function(a) {
            for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)
                if (b[c] == a || b[c].name == a)
                    return b.splice(c, 1),
                    !0
        },
        addOverlay: hc(function(a, b) {
            var c = a.token ? a : x.getMode(this.options, a);
            if (c.startState)
                throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: c,
                modeSpec: a,
                opaque: b && b.opaque
            }),
            this.state.modeGen++,
            lc(this)
        }),
        removeOverlay: hc(function(a) {
            for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                var d = b[c].modeSpec;
                if (d == a || "string" == typeof a && d.name == a)
                    return b.splice(c, 1),
                    this.state.modeGen++,
                    void lc(this)
            }
        }),
        indentLine: hc(function(a, b, c) {
            "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"),
            Ra(this.doc, a) && yd(this, a, b, c)
        }),
        indentSelection: hc(function(a) {
            for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.empty())
                    e.head.line > c && (yd(this, e.head.line, a, !0),
                    c = e.head.line,
                    d == this.doc.sel.primIndex && wd(this));
                else {
                    var f = e.from()
                      , g = e.to()
                      , h = Math.max(c, f.line);
                    c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                    for (var i = h; c > i; ++i)
                        yd(this, i, a);
                    var j = this.doc.sel.ranges;
                    0 == f.ch && b.length == j.length && j[d].from().ch > 0 && Wa(this.doc, d, new La(f,j[d].to()), $f)
                }
            }
        }),
        getTokenAt: function(a, b) {
            return Le(this, a, b)
        },
        getLineTokens: function(a, b) {
            return Le(this, qa(a), b, !0)
        },
        getTokenTypeAt: function(a) {
            a = Pa(this.doc, a);
            var f, b = Oe(this, jf(this.doc, a.line)), c = 0, d = (b.length - 1) / 2, e = a.ch;
            if (0 == e)
                f = b[2];
            else
                for (; ; ) {
                    var g = c + d >> 1;
                    if ((g ? b[2 * g - 1] : 0) >= e)
                        d = g;
                    else {
                        if (!(b[2 * g + 1] < e)) {
                            f = b[2 * g + 2];
                            break
                        }
                        c = g + 1
                    }
                }
            var h = f ? f.indexOf("cm-overlay ") : -1;
            return 0 > h ? f : 0 == h ? null : f.slice(0, h - 1)
        },
        getModeAt: function(a) {
            var b = this.doc.mode;
            return b.innerMode ? x.innerMode(b, this.getTokenAt(a).state).mode : b
        },
        getHelper: function(a, b) {
            return this.getHelpers(a, b)[0]
        },
        getHelpers: function(a, b) {
            var c = [];
            if (!Ld.hasOwnProperty(b))
                return c;
            var d = Ld[b]
              , e = this.getModeAt(a);
            if ("string" == typeof e[b])
                d[e[b]] && c.push(d[e[b]]);
            else if (e[b])
                for (var f = 0; f < e[b].length; f++) {
                    var g = d[e[b][f]];
                    g && c.push(g)
                }
            else
                e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
            for (var f = 0; f < d._global.length; f++) {
                var h = d._global[f];
                h.pred(e, this) && -1 == ig(c, h.val) && c.push(h.val)
            }
            return c
        },
        getStateAfter: function(a, b) {
            var c = this.doc;
            return a = Oa(c, null == a ? c.first + c.size - 1 : a),
            ob(this, a + 1, b)
        },
        cursorCoords: function(a, b) {
            var c, d = this.doc.sel.primary();
            return c = null == a ? d.head : "object" == typeof a ? Pa(this.doc, a) : a ? d.from() : d.to(),
            Ob(this, c, b || "page")
        },
        charCoords: function(a, b) {
            return Nb(this, Pa(this.doc, a), b || "page")
        },
        coordsChar: function(a, b) {
            return a = Mb(this, a, b || "page"),
            Rb(this, a.left, a.top)
        },
        lineAtHeight: function(a, b) {
            return a = Mb(this, {
                top: a,
                left: 0
            }, b || "page").top,
            of(this.doc, a + this.display.viewOffset)
        },
        heightAtLine: function(a, b) {
            var d, c = !1;
            if ("number" == typeof a) {
                var e = this.doc.first + this.doc.size - 1;
                a < this.doc.first ? a = this.doc.first : a > e && (a = e,
                c = !0),
                d = jf(this.doc, a)
            } else
                d = a;
            return Lb(this, d, {
                top: 0,
                left: 0
            }, b || "page").top + (c ? this.doc.height - pf(d) : 0)
        },
        defaultTextHeight: function() {
            return Ub(this.display)
        },
        defaultCharWidth: function() {
            return Vb(this.display)
        },
        setGutterMarker: hc(function(a, b, c) {
            return zd(this.doc, a, "gutter", function(a) {
                var d = a.gutterMarkers || (a.gutterMarkers = {});
                return d[b] = c,
                !c && rg(d) && (a.gutterMarkers = null),
                !0
            })
        }),
        clearGutter: hc(function(a) {
            var b = this
              , c = b.doc
              , d = c.first;
            c.iter(function(c) {
                c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null,
                mc(b, d, "gutter"),
                rg(c.gutterMarkers) && (c.gutterMarkers = null)),
                ++d
            })
        }),
        lineInfo: function(a) {
            if ("number" == typeof a) {
                if (!Ra(this.doc, a))
                    return null;
                var b = a;
                if (a = jf(this.doc, a),
                !a)
                    return null
            } else {
                var b = nf(a);
                if (null == b)
                    return null
            }
            return {
                line: b,
                handle: a,
                text: a.text,
                gutterMarkers: a.gutterMarkers,
                textClass: a.textClass,
                bgClass: a.bgClass,
                wrapClass: a.wrapClass,
                widgets: a.widgets
            }
        },
        getViewport: function() {
            return {
                from: this.display.viewFrom,
                to: this.display.viewTo
            }
        },
        addWidget: function(a, b, c, d, e) {
            var f = this.display;
            a = Ob(this, Pa(this.doc, a));
            var g = a.bottom
              , h = a.left;
            if (b.style.position = "absolute",
            b.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(b),
            f.sizer.appendChild(b),
            "over" == d)
                g = a.top;
            else if ("above" == d || "near" == d) {
                var i = Math.max(f.wrapper.clientHeight, this.doc.height)
                  , j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom),
                h + b.offsetWidth > j && (h = j - b.offsetWidth)
            }
            b.style.top = g + "px",
            b.style.left = b.style.right = "",
            "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth,
            b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2),
            b.style.left = h + "px"),
            c && td(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
        },
        triggerOnKeyDown: hc(Xc),
        triggerOnKeyPress: hc($c),
        triggerOnKeyUp: Zc,
        execCommand: function(a) {
            return Od.hasOwnProperty(a) ? Od[a].call(null, this) : void 0
        },
        triggerElectric: hc(function(a) {
            za(this, a)
        }),
        findPosH: function(a, b, c, d) {
            var e = 1;
            0 > b && (e = -1,
            b = -b);
            for (var f = 0, g = Pa(this.doc, a); b > f && (g = Bd(this.doc, g, e, c, d),
            !g.hitSide); ++f)
                ;
            return g
        },
        moveH: hc(function(a, b) {
            var c = this;
            c.extendSelectionsBy(function(d) {
                return c.display.shift || c.doc.extend || d.empty() ? Bd(c.doc, d.head, a, b, c.options.rtlMoveVisually) : 0 > a ? d.from() : d.to()
            }, ag)
        }),
        deleteH: hc(function(a, b) {
            var c = this.doc.sel
              , d = this.doc;
            c.somethingSelected() ? d.replaceSelection("", null, "+delete") : Ad(this, function(c) {
                var e = Bd(d, c.head, a, b, !1);
                return 0 > a ? {
                    from: e,
                    to: c.head
                } : {
                    from: c.head,
                    to: e
                }
            })
        }),
        findPosV: function(a, b, c, d) {
            var e = 1
              , f = d;
            0 > b && (e = -1,
            b = -b);
            for (var g = 0, h = Pa(this.doc, a); b > g; ++g) {
                var i = Ob(this, h, "div");
                if (null == f ? f = i.left : i.left = f,
                h = Cd(this, i, e, c),
                h.hitSide)
                    break
            }
            return h
        },
        moveV: hc(function(a, b) {
            var c = this
              , d = this.doc
              , e = []
              , f = !c.display.shift && !d.extend && d.sel.somethingSelected();
            if (d.extendSelectionsBy(function(g) {
                if (f)
                    return 0 > a ? g.from() : g.to();
                var h = Ob(c, g.head, "div");
                null != g.goalColumn && (h.left = g.goalColumn),
                e.push(h.left);
                var i = Cd(c, h, a, b);
                return "page" == b && g == d.sel.primary() && vd(c, null, Nb(c, i, "div").top - h.top),
                i
            }, ag),
            e.length)
                for (var g = 0; g < d.sel.ranges.length; g++)
                    d.sel.ranges[g].goalColumn = e[g]
        }),
        findWordAt: function(a) {
            var b = this.doc
              , c = jf(b, a.line).text
              , d = a.ch
              , e = a.ch;
            if (c) {
                var f = this.getHelper(a, "wordChars");
                (a.xRel < 0 || e == c.length) && d ? --d : ++e;
                for (var g = c.charAt(d), h = qg(g, f) ? function(a) {
                    return qg(a, f)
                }
                : /\s/.test(g) ? function(a) {
                    return /\s/.test(a)
                }
                : function(a) {
                    return !/\s/.test(a) && !qg(a)
                }
                ; d > 0 && h(c.charAt(d - 1)); )
                    --d;
                for (; e < c.length && h(c.charAt(e)); )
                    ++e
            }
            return new La(qa(a.line, d),qa(a.line, e))
        },
        toggleOverwrite: function(a) {
            (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? Cg(this.display.cursorDiv, "CodeMirror-overwrite") : Bg(this.display.cursorDiv, "CodeMirror-overwrite"),
            Qf(this, "overwriteToggle", this, this.state.overwrite))
        },
        hasFocus: function() {
            return this.display.input.getField() == zg()
        },
        isReadOnly: function() {
            return !(!this.options.readOnly && !this.doc.cantEdit)
        },
        scrollTo: hc(function(a, b) {
            (null != a || null != b) && xd(this),
            null != a && (this.curOp.scrollLeft = a),
            null != b && (this.curOp.scrollTop = b)
        }),
        getScrollInfo: function() {
            var a = this.display.scroller;
            return {
                left: a.scrollLeft,
                top: a.scrollTop,
                height: a.scrollHeight - sb(this) - this.display.barHeight,
                width: a.scrollWidth - sb(this) - this.display.barWidth,
                clientHeight: ub(this),
                clientWidth: tb(this)
            }
        },
        scrollIntoView: hc(function(a, b) {
            if (null == a ? (a = {
                from: this.doc.sel.primary().head,
                to: null
            },
            null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                from: qa(a, 0),
                to: null
            } : null == a.from && (a = {
                from: a,
                to: null
            }),
            a.to || (a.to = a.from),
            a.margin = b || 0,
            null != a.from.line)
                xd(this),
                this.curOp.scrollToPos = a;
            else {
                var c = ud(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
                this.scrollTo(c.scrollLeft, c.scrollTop)
            }
        }),
        setSize: hc(function(a, b) {
            function d(a) {
                return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
            }
            var c = this;
            null != a && (c.display.wrapper.style.width = d(a)),
            null != b && (c.display.wrapper.style.height = d(b)),
            c.options.lineWrapping && Hb(this);
            var e = c.display.viewFrom;
            c.doc.iter(e, c.display.viewTo, function(a) {
                if (a.widgets)
                    for (var b = 0; b < a.widgets.length; b++)
                        if (a.widgets[b].noHScroll) {
                            mc(c, e, "widget");
                            break
                        }
                ++e
            }),
            c.curOp.forceUpdate = !0,
            Qf(c, "refresh", this)
        }),
        operation: function(a) {
            return fc(this, a)
        },
        refresh: hc(function() {
            var a = this.display.cachedTextHeight;
            lc(this),
            this.curOp.forceUpdate = !0,
            Ib(this),
            this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop),
            H(this),
            (null == a || Math.abs(a - Ub(this.display)) > .5) && D(this),
            Qf(this, "refresh", this)
        }),
        swapDoc: hc(function(a) {
            var b = this.doc;
            return b.cm = null,
            hf(this, a),
            Ib(this),
            this.display.input.reset(),
            this.scrollTo(a.scrollLeft, a.scrollTop),
            this.curOp.forceScroll = !0,
            Sf(this, "swapDoc", this, b),
            b
        }),
        getInputField: function() {
            return this.display.input.getField()
        },
        getWrapperElement: function() {
            return this.display.wrapper
        },
        getScrollerElement: function() {
            return this.display.scroller
        },
        getGutterElement: function() {
            return this.display.gutters
        }
    },
    Xf(x);
    var Dd = x.defaults = {}
      , Ed = x.optionHandlers = {}
      , Gd = x.Init = {
        toString: function() {
            return "CodeMirror.Init"
        }
    };
    Fd("value", "", function(a, b) {
        a.setValue(b)
    }, !0),
    Fd("mode", null, function(a, b) {
        a.doc.modeOption = b,
        z(a)
    }, !0),
    Fd("indentUnit", 2, z, !0),
    Fd("indentWithTabs", !1),
    Fd("smartIndent", !0),
    Fd("tabSize", 4, function(a) {
        A(a),
        Ib(a),
        lc(a)
    }, !0),
    Fd("lineSeparator", null, function(a, b) {
        if (a.doc.lineSep = b,
        b) {
            var c = []
              , d = a.doc.first;
            a.doc.iter(function(a) {
                for (var e = 0; ; ) {
                    var f = a.text.indexOf(b, e);
                    if (-1 == f)
                        break;
                    e = f + b.length,
                    c.push(qa(d, f))
                }
                d++
            });
            for (var e = c.length - 1; e >= 0; e--)
                qd(a.doc, b, c[e], qa(c[e].line, c[e].ch + b.length))
        }
    }),
    Fd("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(a, b, c) {
        a.state.specialChars = new RegExp(b.source + (b.test("	") ? "" : "|	"),"g"),
        c != x.Init && a.refresh()
    }),
    Fd("specialCharPlaceholder", Ue, function(a) {
        a.refresh()
    }, !0),
    Fd("electricChars", !0),
    Fd("inputStyle", p ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor")
    }, !0),
    Fd("rtlMoveVisually", !r),
    Fd("wholeLineUpdateBefore", !0),
    Fd("theme", "default", function(a) {
        E(a),
        F(a)
    }, !0),
    Fd("keyMap", "default", function(a, b, c) {
        var d = Ud(b)
          , e = c != x.Init && Ud(c);
        e && e.detach && e.detach(a, d),
        d.attach && d.attach(a, e || null)
    }),
    Fd("extraKeys", null),
    Fd("lineWrapping", !1, B, !0),
    Fd("gutters", [], function(a) {
        K(a.options),
        F(a)
    }, !0),
    Fd("fixedGutter", !0, function(a, b) {
        a.display.gutters.style.left = b ? V(a.display) + "px" : "0",
        a.refresh()
    }, !0),
    Fd("coverGutterNextToScrollbar", !1, function(a) {
        P(a)
    }, !0),
    Fd("scrollbarStyle", "native", function(a) {
        O(a),
        P(a),
        a.display.scrollbars.setScrollTop(a.doc.scrollTop),
        a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
    }, !0),
    Fd("lineNumbers", !1, function(a) {
        K(a.options),
        F(a)
    }, !0),
    Fd("firstLineNumber", 1, F, !0),
    Fd("lineNumberFormatter", function(a) {
        return a
    }, F, !0),
    Fd("showCursorWhenSelecting", !1, gb, !0),
    Fd("resetSelectionOnContextMenu", !0),
    Fd("lineWiseCopyCut", !0),
    Fd("readOnly", !1, function(a, b) {
        "nocursor" == b ? (bd(a),
        a.display.input.blur(),
        a.display.disabled = !0) : a.display.disabled = !1,
        a.display.input.readOnlyChanged(b)
    }),
    Fd("disableInput", !1, function(a, b) {
        b || a.display.input.reset()
    }, !0),
    Fd("dragDrop", !0, tc),
    Fd("allowDropFileTypes", null),
    Fd("cursorBlinkRate", 530),
    Fd("cursorScrollMargin", 0),
    Fd("cursorHeight", 1, gb, !0),
    Fd("singleCursorHeightPerLine", !0, gb, !0),
    Fd("workTime", 100),
    Fd("workDelay", 100),
    Fd("flattenSpans", !0, A, !0),
    Fd("addModeClass", !1, A, !0),
    Fd("pollInterval", 100),
    Fd("undoDepth", 200, function(a, b) {
        a.doc.history.undoDepth = b
    }),
    Fd("historyEventDelay", 1250),
    Fd("viewportMargin", 10, function(a) {
        a.refresh()
    }, !0),
    Fd("maxHighlightLength", 1e4, A, !0),
    Fd("moveInputWithCursor", !0, function(a, b) {
        b || a.display.input.resetPosition()
    }),
    Fd("tabindex", null, function(a, b) {
        a.display.input.getField().tabIndex = b || ""
    }),
    Fd("autofocus", null);
    var Hd = x.modes = {}
      , Id = x.mimeModes = {};
    x.defineMode = function(a, b) {
        x.defaults.mode || "null" == a || (x.defaults.mode = a),
        arguments.length > 2 && (b.dependencies = Array.prototype.slice.call(arguments, 2)),
        Hd[a] = b
    }
    ,
    x.defineMIME = function(a, b) {
        Id[a] = b
    }
    ,
    x.resolveMode = function(a) {
        if ("string" == typeof a && Id.hasOwnProperty(a))
            a = Id[a];
        else if (a && "string" == typeof a.name && Id.hasOwnProperty(a.name)) {
            var b = Id[a.name];
            "string" == typeof b && (b = {
                name: b
            }),
            a = lg(b, a),
            a.name = b.name
        } else if ("string" == typeof a && /^[\w\-]+\/[\w\-]+\+xml$/.test(a))
            return x.resolveMode("application/xml");
        return "string" == typeof a ? {
            name: a
        } : a || {
            name: "null"
        }
    }
    ,
    x.getMode = function(a, b) {
        var b = x.resolveMode(b)
          , c = Hd[b.name];
        if (!c)
            return x.getMode(a, "text/plain");
        var d = c(a, b);
        if (Jd.hasOwnProperty(b.name)) {
            var e = Jd[b.name];
            for (var f in e)
                e.hasOwnProperty(f) && (d.hasOwnProperty(f) && (d["_" + f] = d[f]),
                d[f] = e[f])
        }
        if (d.name = b.name,
        b.helperType && (d.helperType = b.helperType),
        b.modeProps)
            for (var f in b.modeProps)
                d[f] = b.modeProps[f];
        return d
    }
    ,
    x.defineMode("null", function() {
        return {
            token: function(a) {
                a.skipToEnd()
            }
        }
    }),
    x.defineMIME("text/plain", "null");
    var Jd = x.modeExtensions = {};
    x.extendMode = function(a, b) {
        var c = Jd.hasOwnProperty(a) ? Jd[a] : Jd[a] = {};
        mg(b, c)
    }
    ,
    x.defineExtension = function(a, b) {
        x.prototype[a] = b
    }
    ,
    x.defineDocExtension = function(a, b) {
        df.prototype[a] = b
    }
    ,
    x.defineOption = Fd;
    var Kd = [];
    x.defineInitHook = function(a) {
        Kd.push(a)
    }
    ;
    var Ld = x.helpers = {};
    x.registerHelper = function(a, b, c) {
        Ld.hasOwnProperty(a) || (Ld[a] = x[a] = {
            _global: []
        }),
        Ld[a][b] = c
    }
    ,
    x.registerGlobalHelper = function(a, b, c, d) {
        x.registerHelper(a, b, d),
        Ld[a]._global.push({
            pred: c,
            val: d
        })
    }
    ;
    var Md = x.copyState = function(a, b) {
        if (b === !0)
            return b;
        if (a.copyState)
            return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])),
            c[d] = e
        }
        return c
    }
      , Nd = x.startState = function(a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    }
    ;
    x.innerMode = function(a, b) {
        for (; a.innerMode; ) {
            var c = a.innerMode(b);
            if (!c || c.mode == a)
                break;
            b = c.state,
            a = c.mode
        }
        return c || {
            mode: a,
            state: b
        }
    }
    ;
    var Od = x.commands = {
        selectAll: function(a) {
            a.setSelection(qa(a.firstLine(), 0), qa(a.lastLine()), $f)
        },
        singleSelection: function(a) {
            a.setSelection(a.getCursor("anchor"), a.getCursor("head"), $f)
        },
        killLine: function(a) {
            Ad(a, function(b) {
                if (b.empty()) {
                    var c = jf(a.doc, b.head.line).text.length;
                    return b.head.ch == c && b.head.line < a.lastLine() ? {
                        from: b.head,
                        to: qa(b.head.line + 1, 0)
                    } : {
                        from: b.head,
                        to: qa(b.head.line, c)
                    }
                }
                return {
                    from: b.from(),
                    to: b.to()
                }
            })
        },
        deleteLine: function(a) {
            Ad(a, function(b) {
                return {
                    from: qa(b.from().line, 0),
                    to: Pa(a.doc, qa(b.to().line + 1, 0))
                }
            })
        },
        delLineLeft: function(a) {
            Ad(a, function(a) {
                return {
                    from: qa(a.from().line, 0),
                    to: a.from()
                }
            })
        },
        delWrappedLineLeft: function(a) {
            Ad(a, function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: 0,
                    top: c
                }, "div");
                return {
                    from: d,
                    to: b.from()
                }
            })
        },
        delWrappedLineRight: function(a) {
            Ad(a, function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div");
                return {
                    from: b.from(),
                    to: d
                }
            })
        },
        undo: function(a) {
            a.undo()
        },
        redo: function(a) {
            a.redo()
        },
        undoSelection: function(a) {
            a.undoSelection()
        },
        redoSelection: function(a) {
            a.redoSelection()
        },
        goDocStart: function(a) {
            a.extendSelection(qa(a.firstLine(), 0))
        },
        goDocEnd: function(a) {
            a.extendSelection(qa(a.lastLine()))
        },
        goLineStart: function(a) {
            a.extendSelectionsBy(function(b) {
                return Yg(a, b.head.line)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineStartSmart: function(a) {
            a.extendSelectionsBy(function(b) {
                return $g(a, b.head)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineEnd: function(a) {
            a.extendSelectionsBy(function(b) {
                return Zg(a, b.head.line)
            }, {
                origin: "+move",
                bias: -1
            })
        },
        goLineRight: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div")
            }, ag)
        },
        goLineLeft: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({
                    left: 0,
                    top: c
                }, "div")
            }, ag)
        },
        goLineLeftSmart: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: 0,
                    top: c
                }, "div");
                return d.ch < a.getLine(d.line).search(/\S/) ? $g(a, b.head) : d
            }, ag)
        },
        goLineUp: function(a) {
            a.moveV(-1, "line")
        },
        goLineDown: function(a) {
            a.moveV(1, "line")
        },
        goPageUp: function(a) {
            a.moveV(-1, "page")
        },
        goPageDown: function(a) {
            a.moveV(1, "page")
        },
        goCharLeft: function(a) {
            a.moveH(-1, "char")
        },
        goCharRight: function(a) {
            a.moveH(1, "char")
        },
        goColumnLeft: function(a) {
            a.moveH(-1, "column")
        },
        goColumnRight: function(a) {
            a.moveH(1, "column")
        },
        goWordLeft: function(a) {
            a.moveH(-1, "word")
        },
        goGroupRight: function(a) {
            a.moveH(1, "group")
        },
        goGroupLeft: function(a) {
            a.moveH(-1, "group")
        },
        goWordRight: function(a) {
            a.moveH(1, "word")
        },
        delCharBefore: function(a) {
            a.deleteH(-1, "char")
        },
        delCharAfter: function(a) {
            a.deleteH(1, "char")
        },
        delWordBefore: function(a) {
            a.deleteH(-1, "word")
        },
        delWordAfter: function(a) {
            a.deleteH(1, "word")
        },
        delGroupBefore: function(a) {
            a.deleteH(-1, "group")
        },
        delGroupAfter: function(a) {
            a.deleteH(1, "group")
        },
        indentAuto: function(a) {
            a.indentSelection("smart")
        },
        indentMore: function(a) {
            a.indentSelection("add")
        },
        indentLess: function(a) {
            a.indentSelection("subtract")
        },
        insertTab: function(a) {
            a.replaceSelection("	")
        },
        insertSoftTab: function(a) {
            for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                var f = c[e].from()
                  , g = cg(a.getLine(f.line), f.ch, d);
                b.push(new Array(d - g % d + 1).join(" "))
            }
            a.replaceSelections(b)
        },
        defaultTab: function(a) {
            a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
        },
        transposeChars: function(a) {
            fc(a, function() {
                for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                    var e = b[d].head
                      , f = jf(a.doc, e.line).text;
                    if (f)
                        if (e.ch == f.length && (e = new qa(e.line,e.ch - 1)),
                        e.ch > 0)
                            e = new qa(e.line,e.ch + 1),
                            a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), qa(e.line, e.ch - 2), e, "+transpose");
                        else if (e.line > a.doc.first) {
                            var g = jf(a.doc, e.line - 1).text;
                            g && a.replaceRange(f.charAt(0) + a.doc.lineSeparator() + g.charAt(g.length - 1), qa(e.line - 1, g.length - 1), qa(e.line, 1), "+transpose")
                        }
                    c.push(new La(e,e))
                }
                a.setSelections(c)
            })
        },
        newlineAndIndent: function(a) {
            fc(a, function() {
                for (var b = a.listSelections().length, c = 0; b > c; c++) {
                    var d = a.listSelections()[c];
                    a.replaceRange(a.doc.lineSeparator(), d.anchor, d.head, "+input"),
                    a.indentLine(d.from().line + 1, null, !0)
                }
                wd(a)
            })
        },
        toggleOverwrite: function(a) {
            a.toggleOverwrite()
        }
    }
      , Pd = x.keyMap = {};
    Pd.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    },
    Pd.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    },
    Pd.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    },
    Pd.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    },
    Pd["default"] = q ? Pd.macDefault : Pd.pcDefault,
    x.normalizeKeyMap = function(a) {
        var b = {};
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (/^(name|fallthrough|(de|at)tach)$/.test(c))
                    continue;
                if ("..." == d) {
                    delete a[c];
                    continue
                }
                for (var e = jg(c.split(" "), Qd), f = 0; f < e.length; f++) {
                    var g, h;
                    f == e.length - 1 ? (h = e.join(" "),
                    g = d) : (h = e.slice(0, f + 1).join(" "),
                    g = "...");
                    var i = b[h];
                    if (i) {
                        if (i != g)
                            throw new Error("Inconsistent bindings for " + h)
                    } else
                        b[h] = g
                }
                delete a[c]
            }
        for (var j in b)
            a[j] = b[j];
        return a
    }
    ;
    var Rd = x.lookupKey = function(a, b, c, d) {
        b = Ud(b);
        var e = b.call ? b.call(a, d) : b[a];
        if (e === !1)
            return "nothing";
        if ("..." === e)
            return "multi";
        if (null != e && c(e))
            return "handled";
        if (b.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(b.fallthrough))
                return Rd(a, b.fallthrough, c, d);
            for (var f = 0; f < b.fallthrough.length; f++) {
                var g = Rd(a, b.fallthrough[f], c, d);
                if (g)
                    return g
            }
        }
    }
      , Sd = x.isModifierKey = function(a) {
        var b = "string" == typeof a ? a : Sg[a.keyCode];
        return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
    }
      , Td = x.keyName = function(a, b) {
        if (k && 34 == a.keyCode && a["char"])
            return !1;
        var c = Sg[a.keyCode]
          , d = c;
        return null == d || a.altGraphKey ? !1 : (a.altKey && "Alt" != c && (d = "Alt-" + d),
        (t ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d),
        (t ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d),
        !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d),
        d)
    }
    ;
    x.fromTextArea = function(a, b) {
        function d() {
            a.value = i.getValue()
        }
        if (b = b ? mg(b) : {},
        b.value = a.value,
        !b.tabindex && a.tabIndex && (b.tabindex = a.tabIndex),
        !b.placeholder && a.placeholder && (b.placeholder = a.placeholder),
        null == b.autofocus) {
            var c = zg();
            b.autofocus = c == a || null != a.getAttribute("autofocus") && c == document.body
        }
        if (a.form && (Mf(a.form, "submit", d),
        !b.leaveSubmitMethodAlone)) {
            var e = a.form
              , f = e.submit;
            try {
                var g = e.submit = function() {
                    d(),
                    e.submit = f,
                    e.submit(),
                    e.submit = g
                }
            } catch (h) {}
        }
        b.finishInit = function(b) {
            b.save = d,
            b.getTextArea = function() {
                return a
            }
            ,
            b.toTextArea = function() {
                b.toTextArea = isNaN,
                d(),
                a.parentNode.removeChild(b.getWrapperElement()),
                a.style.display = "",
                a.form && (Pf(a.form, "submit", d),
                "function" == typeof a.form.submit && (a.form.submit = f))
            }
        }
        ,
        a.style.display = "none";
        var i = x(function(b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }, b);
        return i
    }
    ;
    var Vd = x.StringStream = function(a, b) {
        this.pos = this.start = 0,
        this.string = a,
        this.tabSize = b || 8,
        this.lastColumnPos = this.lastColumnValue = 0,
        this.lineStart = 0
    }
    ;
    Vd.prototype = {
        eol: function() {
            return this.pos >= this.string.length
        },
        sol: function() {
            return this.pos == this.lineStart
        },
        peek: function() {
            return this.string.charAt(this.pos) || void 0
        },
        next: function() {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        },
        eat: function(a) {
            var b = this.string.charAt(this.pos);
            if ("string" == typeof a)
                var c = b == a;
            else
                var c = b && (a.test ? a.test(b) : a(b));
            return c ? (++this.pos,
            b) : void 0
        },
        eatWhile: function(a) {
            for (var b = this.pos; this.eat(a); )
                ;
            return this.pos > b
        },
        eatSpace: function() {
            for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
                ++this.pos;
            return this.pos > a
        },
        skipToEnd: function() {
            this.pos = this.string.length
        },
        skipTo: function(a) {
            var b = this.string.indexOf(a, this.pos);
            return b > -1 ? (this.pos = b,
            !0) : void 0
        },
        backUp: function(a) {
            this.pos -= a
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = cg(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
            this.lastColumnPos = this.start),
            this.lastColumnValue - (this.lineStart ? cg(this.string, this.lineStart, this.tabSize) : 0)
        },
        indentation: function() {
            return cg(this.string, null, this.tabSize) - (this.lineStart ? cg(this.string, this.lineStart, this.tabSize) : 0)
        },
        match: function(a, b, c) {
            if ("string" != typeof a) {
                var f = this.string.slice(this.pos).match(a);
                return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length),
                f)
            }
            var d = function(a) {
                return c ? a.toLowerCase() : a
            }
              , e = this.string.substr(this.pos, a.length);
            return d(e) == d(a) ? (b !== !1 && (this.pos += a.length),
            !0) : void 0
        },
        current: function() {
            return this.string.slice(this.start, this.pos)
        },
        hideFirstChars: function(a, b) {
            this.lineStart += a;
            try {
                return b()
            } finally {
                this.lineStart -= a
            }
        }
    };
    var Wd = 0
      , Xd = x.TextMarker = function(a, b) {
        this.lines = [],
        this.type = b,
        this.doc = a,
        this.id = ++Wd
    }
    ;
    Xf(Xd),
    Xd.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            var a = this.doc.cm
              , b = a && !a.curOp;
            if (b && Yb(a),
            Wf(this, "clear")) {
                var c = this.find();
                c && Sf(this, "clear", c.from, c.to)
            }
            for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
                var g = this.lines[f]
                  , h = de(g.markedSpans, this);
                a && !this.collapsed ? mc(a, nf(g), "text") : a && (null != h.to && (e = nf(g)),
                null != h.from && (d = nf(g))),
                g.markedSpans = ee(g.markedSpans, h),
                null == h.from && this.collapsed && !ze(this.doc, g) && a && mf(g, Ub(a.display))
            }
            if (a && this.collapsed && !a.options.lineWrapping)
                for (var f = 0; f < this.lines.length; ++f) {
                    var i = ve(this.lines[f])
                      , j = I(i);
                    j > a.display.maxLineLength && (a.display.maxLine = i,
                    a.display.maxLineLength = j,
                    a.display.maxLineChanged = !0)
                }
            null != d && a && this.collapsed && lc(a, d, e + 1),
            this.lines.length = 0,
            this.explicitlyCleared = !0,
            this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
            a && bb(a.doc)),
            a && Sf(a, "markerCleared", a, this),
            b && $b(a),
            this.parent && this.parent.clear()
        }
    }
    ,
    Xd.prototype.find = function(a, b) {
        null == a && "bookmark" == this.type && (a = 1);
        for (var c, d, e = 0; e < this.lines.length; ++e) {
            var f = this.lines[e]
              , g = de(f.markedSpans, this);
            if (null != g.from && (c = qa(b ? f : nf(f), g.from),
            -1 == a))
                return c;
            if (null != g.to && (d = qa(b ? f : nf(f), g.to),
            1 == a))
                return d
        }
        return c && {
            from: c,
            to: d
        }
    }
    ,
    Xd.prototype.changed = function() {
        var a = this.find(-1, !0)
          , b = this
          , c = this.doc.cm;
        a && c && fc(c, function() {
            var d = a.line
              , e = nf(a.line)
              , f = zb(c, e);
            if (f && (Gb(f),
            c.curOp.selectionChanged = c.curOp.forceUpdate = !0),
            c.curOp.updateMaxLine = !0,
            !ze(b.doc, d) && null != b.height) {
                var g = b.height;
                b.height = null;
                var h = De(b) - g;
                h && mf(d, d.height + h)
            }
        })
    }
    ,
    Xd.prototype.attachLine = function(a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            b.maybeHiddenMarkers && -1 != ig(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(a)
    }
    ,
    Xd.prototype.detachLine = function(a) {
        if (this.lines.splice(ig(this.lines, a), 1),
        !this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
        }
    }
    ;
    var Wd = 0
      , Zd = x.SharedTextMarker = function(a, b) {
        this.markers = a,
        this.primary = b;
        for (var c = 0; c < a.length; ++c)
            a[c].parent = this
    }
    ;
    Xf(Zd),
    Zd.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var a = 0; a < this.markers.length; ++a)
                this.markers[a].clear();
            Sf(this, "clear")
        }
    }
    ,
    Zd.prototype.find = function(a, b) {
        return this.primary.find(a, b)
    }
    ;
    var Be = x.LineWidget = function(a, b, c) {
        if (c)
            for (var d in c)
                c.hasOwnProperty(d) && (this[d] = c[d]);
        this.doc = a,
        this.node = b
    }
    ;
    Xf(Be),
    Be.prototype.clear = function() {
        var a = this.doc.cm
          , b = this.line.widgets
          , c = this.line
          , d = nf(c);
        if (null != d && b) {
            for (var e = 0; e < b.length; ++e)
                b[e] == this && b.splice(e--, 1);
            b.length || (c.widgets = null);
            var f = De(this);
            mf(c, Math.max(0, c.height - f)),
            a && fc(a, function() {
                Ce(a, c, -f),
                mc(a, d, "widget")
            })
        }
    }
    ,
    Be.prototype.changed = function() {
        var a = this.height
          , b = this.doc.cm
          , c = this.line;
        this.height = null;
        var d = De(this) - a;
        d && (mf(c, c.height + d),
        b && fc(b, function() {
            b.curOp.forceUpdate = !0,
            Ce(b, c, d)
        }))
    }
    ;
    var Fe = x.Line = function(a, b, c) {
        this.text = a,
        ne(this, b),
        this.height = c ? c(this) : 1
    }
    ;
    Xf(Fe),
    Fe.prototype.lineNo = function() {
        return nf(this)
    }
    ;
    var Qe = {}
      , Re = {};
    af.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        removeInner: function(a, b) {
            for (var c = a, d = a + b; d > c; ++c) {
                var e = this.lines[c];
                this.height -= e.height,
                He(e),
                Sf(e, "delete")
            }
            this.lines.splice(a, b)
        },
        collapse: function(a) {
            a.push.apply(a, this.lines)
        },
        insertInner: function(a, b, c) {
            this.height += c,
            this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
            for (var d = 0; d < b.length; ++d)
                b[d].parent = this
        },
        iterN: function(a, b, c) {
            for (var d = a + b; d > a; ++a)
                if (c(this.lines[a]))
                    return !0
        }
    },
    bf.prototype = {
        chunkSize: function() {
            return this.size
        },
        removeInner: function(a, b) {
            this.size -= b;
            for (var c = 0; c < this.children.length; ++c) {
                var d = this.children[c]
                  , e = d.chunkSize();
                if (e > a) {
                    var f = Math.min(b, e - a)
                      , g = d.height;
                    if (d.removeInner(a, f),
                    this.height -= g - d.height,
                    e == f && (this.children.splice(c--, 1),
                    d.parent = null),
                    0 == (b -= f))
                        break;
                    a = 0
                } else
                    a -= e
            }
            if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0]instanceof af))) {
                var h = [];
                this.collapse(h),
                this.children = [new af(h)],
                this.children[0].parent = this
            }
        },
        collapse: function(a) {
            for (var b = 0; b < this.children.length; ++b)
                this.children[b].collapse(a)
        },
        insertInner: function(a, b, c) {
            this.size += b.length,
            this.height += c;
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d]
                  , f = e.chunkSize();
                if (f >= a) {
                    if (e.insertInner(a, b, c),
                    e.lines && e.lines.length > 50) {
                        for (; e.lines.length > 50; ) {
                            var g = e.lines.splice(e.lines.length - 25, 25)
                              , h = new af(g);
                            e.height -= h.height,
                            this.children.splice(d + 1, 0, h),
                            h.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                a -= f
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var a = this;
                do {
                    var b = a.children.splice(a.children.length - 5, 5)
                      , c = new bf(b);
                    if (a.parent) {
                        a.size -= c.size,
                        a.height -= c.height;
                        var e = ig(a.parent.children, a);
                        a.parent.children.splice(e + 1, 0, c)
                    } else {
                        var d = new bf(a.children);
                        d.parent = a,
                        a.children = [d, c],
                        a = d
                    }
                    c.parent = a.parent
                } while (a.children.length > 10);
                a.parent.maybeSpill()
            }
        },
        iterN: function(a, b, c) {
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d]
                  , f = e.chunkSize();
                if (f > a) {
                    var g = Math.min(b, f - a);
                    if (e.iterN(a, g, c))
                        return !0;
                    if (0 == (b -= g))
                        break;
                    a = 0
                } else
                    a -= f
            }
        }
    };
    var cf = 0
      , df = x.Doc = function(a, b, c, d) {
        if (!(this instanceof df))
            return new df(a,b,c,d);
        null == c && (c = 0),
        bf.call(this, [new af([new Fe("",null)])]),
        this.first = c,
        this.scrollTop = this.scrollLeft = 0,
        this.cantEdit = !1,
        this.cleanGeneration = 1,
        this.frontier = c;
        var e = qa(c, 0);
        this.sel = Na(e),
        this.history = new rf(null),
        this.id = ++cf,
        this.modeOption = b,
        this.lineSep = d,
        this.extend = !1,
        "string" == typeof a && (a = this.splitLines(a)),
        _e(this, {
            from: e,
            to: e,
            text: a
        }),
        $a(this, Na(e), $f)
    }
    ;
    df.prototype = lg(bf.prototype, {
        constructor: df,
        iter: function(a, b, c) {
            c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
        },
        insert: function(a, b) {
            for (var c = 0, d = 0; d < b.length; ++d)
                c += b[d].height;
            this.insertInner(a - this.first, b, c)
        },
        remove: function(a, b) {
            this.removeInner(a - this.first, b)
        },
        getValue: function(a) {
            var b = lf(this, this.first, this.first + this.size);
            return a === !1 ? b : b.join(a || this.lineSeparator())
        },
        setValue: ic(function(a) {
            var b = qa(this.first, 0)
              , c = this.first + this.size - 1;
            kd(this, {
                from: b,
                to: qa(c, jf(this, c).text.length),
                text: this.splitLines(a),
                origin: "setValue",
                full: !0
            }, !0),
            $a(this, Na(b))
        }),
        replaceRange: function(a, b, c, d) {
            b = Pa(this, b),
            c = c ? Pa(this, c) : b,
            qd(this, a, b, c, d)
        },
        getRange: function(a, b, c) {
            var d = kf(this, Pa(this, a), Pa(this, b));
            return c === !1 ? d : d.join(c || this.lineSeparator())
        },
        getLine: function(a) {
            var b = this.getLineHandle(a);
            return b && b.text
        },
        getLineHandle: function(a) {
            return Ra(this, a) ? jf(this, a) : void 0
        },
        getLineNumber: function(a) {
            return nf(a)
        },
        getLineHandleVisualStart: function(a) {
            return "number" == typeof a && (a = jf(this, a)),
            ve(a)
        },
        lineCount: function() {
            return this.size
        },
        firstLine: function() {
            return this.first
        },
        lastLine: function() {
            return this.first + this.size - 1
        },
        clipPos: function(a) {
            return Pa(this, a)
        },
        getCursor: function(a) {
            var c, b = this.sel.primary();
            return c = null == a || "head" == a ? b.head : "anchor" == a ? b.anchor : "end" == a || "to" == a || a === !1 ? b.to() : b.from()
        },
        listSelections: function() {
            return this.sel.ranges
        },
        somethingSelected: function() {
            return this.sel.somethingSelected()
        },
        setCursor: ic(function(a, b, c) {
            Xa(this, Pa(this, "number" == typeof a ? qa(a, b || 0) : a), null, c)
        }),
        setSelection: ic(function(a, b, c) {
            Xa(this, Pa(this, a), Pa(this, b || a), c)
        }),
        extendSelection: ic(function(a, b, c) {
            Ua(this, Pa(this, a), b && Pa(this, b), c)
        }),
        extendSelections: ic(function(a, b) {
            Va(this, Sa(this, a), b)
        }),
        extendSelectionsBy: ic(function(a, b) {
            var c = jg(this.sel.ranges, a);
            Va(this, Sa(this, c), b)
        }),
        setSelections: ic(function(a, b, c) {
            if (a.length) {
                for (var d = 0, e = []; d < a.length; d++)
                    e[d] = new La(Pa(this, a[d].anchor),Pa(this, a[d].head));
                null == b && (b = Math.min(a.length - 1, this.sel.primIndex)),
                $a(this, Ma(e, b), c)
            }
        }),
        addSelection: ic(function(a, b, c) {
            var d = this.sel.ranges.slice(0);
            d.push(new La(Pa(this, a),Pa(this, b || a))),
            $a(this, Ma(d, d.length - 1), c)
        }),
        getSelection: function(a) {
            for (var c, b = this.sel.ranges, d = 0; d < b.length; d++) {
                var e = kf(this, b[d].from(), b[d].to());
                c = c ? c.concat(e) : e
            }
            return a === !1 ? c : c.join(a || this.lineSeparator())
        },
        getSelections: function(a) {
            for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
                var e = kf(this, c[d].from(), c[d].to());
                a !== !1 && (e = e.join(a || this.lineSeparator())),
                b[d] = e
            }
            return b
        },
        replaceSelection: function(a, b, c) {
            for (var d = [], e = 0; e < this.sel.ranges.length; e++)
                d[e] = a;
            this.replaceSelections(d, b, c || "+input")
        },
        replaceSelections: ic(function(a, b, c) {
            for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
                var g = e.ranges[f];
                d[f] = {
                    from: g.from(),
                    to: g.to(),
                    text: this.splitLines(a[f]),
                    origin: c
                }
            }
            for (var h = b && "end" != b && id(this, d, b), f = d.length - 1; f >= 0; f--)
                kd(this, d[f]);
            h ? Za(this, h) : this.cm && wd(this.cm)
        }),
        undo: ic(function() {
            md(this, "undo")
        }),
        redo: ic(function() {
            md(this, "redo")
        }),
        undoSelection: ic(function() {
            md(this, "undo", !0)
        }),
        redoSelection: ic(function() {
            md(this, "redo", !0)
        }),
        setExtending: function(a) {
            this.extend = a
        },
        getExtending: function() {
            return this.extend
        },
        historySize: function() {
            for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++)
                a.done[d].ranges || ++b;
            for (var d = 0; d < a.undone.length; d++)
                a.undone[d].ranges || ++c;
            return {
                undo: b,
                redo: c
            }
        },
        clearHistory: function() {
            this.history = new rf(this.history.maxGeneration)
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(a) {
            return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
        },
        isClean: function(a) {
            return this.history.generation == (a || this.cleanGeneration)
        },
        getHistory: function() {
            return {
                done: Cf(this.history.done),
                undone: Cf(this.history.undone)
            }
        },
        setHistory: function(a) {
            var b = this.history = new rf(this.history.maxGeneration);
            b.done = Cf(a.done.slice(0), null, !0),
            b.undone = Cf(a.undone.slice(0), null, !0)
        },
        addLineClass: ic(function(a, b, c) {
            return zd(this, a, "gutter" == b ? "gutter" : "class", function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
                if (a[d]) {
                    if (Ag(c).test(a[d]))
                        return !1;
                    a[d] += " " + c
                } else
                    a[d] = c;
                return !0
            })
        }),
        removeLineClass: ic(function(a, b, c) {
            return zd(this, a, "gutter" == b ? "gutter" : "class", function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass"
                  , e = a[d];
                if (!e)
                    return !1;
                if (null == c)
                    a[d] = null;
                else {
                    var f = e.match(Ag(c));
                    if (!f)
                        return !1;
                    var g = f.index + f[0].length;
                    a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
                }
                return !0
            })
        }),
        addLineWidget: ic(function(a, b, c) {
            return Ee(this, a, b, c)
        }),
        removeLineWidget: function(a) {
            a.clear()
        },
        markText: function(a, b, c) {
            return Yd(this, Pa(this, a), Pa(this, b), c, c && c.type || "range")
        },
        setBookmark: function(a, b) {
            var c = {
                replacedWith: b && (null == b.nodeType ? b.widget : b),
                insertLeft: b && b.insertLeft,
                clearWhenEmpty: !1,
                shared: b && b.shared,
                handleMouseEvents: b && b.handleMouseEvents
            };
            return a = Pa(this, a),
            Yd(this, a, a, c, "bookmark")
        },
        findMarksAt: function(a) {
            a = Pa(this, a);
            var b = []
              , c = jf(this, a.line).markedSpans;
            if (c)
                for (var d = 0; d < c.length; ++d) {
                    var e = c[d];
                    (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
                }
            return b
        },
        findMarks: function(a, b, c) {
            a = Pa(this, a),
            b = Pa(this, b);
            var d = []
              , e = a.line;
            return this.iter(a.line, b.line + 1, function(f) {
                var g = f.markedSpans;
                if (g)
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h];
                        null != i.to && e == a.line && a.ch > i.to || null == i.from && e != a.line || null != i.from && e == b.line && i.from > b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                    }
                ++e
            }),
            d
        },
        getAllMarks: function() {
            var a = [];
            return this.iter(function(b) {
                var c = b.markedSpans;
                if (c)
                    for (var d = 0; d < c.length; ++d)
                        null != c[d].from && a.push(c[d].marker)
            }),
            a
        },
        posFromIndex: function(a) {
            var b, c = this.first, d = this.lineSeparator().length;
            return this.iter(function(e) {
                var f = e.text.length + d;
                return f > a ? (b = a,
                !0) : (a -= f,
                void ++c)
            }),
            Pa(this, qa(c, b))
        },
        indexFromPos: function(a) {
            a = Pa(this, a);
            var b = a.ch;
            if (a.line < this.first || a.ch < 0)
                return 0;
            var c = this.lineSeparator().length;
            return this.iter(this.first, a.line, function(a) {
                b += a.text.length + c
            }),
            b
        },
        copy: function(a) {
            var b = new df(lf(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep);
            return b.scrollTop = this.scrollTop,
            b.scrollLeft = this.scrollLeft,
            b.sel = this.sel,
            b.extend = !1,
            a && (b.history.undoDepth = this.history.undoDepth,
            b.setHistory(this.getHistory())),
            b
        },
        linkedDoc: function(a) {
            a || (a = {});
            var b = this.first
              , c = this.first + this.size;
            null != a.from && a.from > b && (b = a.from),
            null != a.to && a.to < c && (c = a.to);
            var d = new df(lf(this, b, c),a.mode || this.modeOption,b,this.lineSep);
            return a.sharedHist && (d.history = this.history),
            (this.linked || (this.linked = [])).push({
                doc: d,
                sharedHist: a.sharedHist
            }),
            d.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: a.sharedHist
            }],
            ae(d, _d(this)),
            d
        },
        unlinkDoc: function(a) {
            if (a instanceof x && (a = a.doc),
            this.linked)
                for (var b = 0; b < this.linked.length; ++b) {
                    var c = this.linked[b];
                    if (c.doc == a) {
                        this.linked.splice(b, 1),
                        a.unlinkDoc(this),
                        be(_d(this));
                        break
                    }
                }
            if (a.history == this.history) {
                var d = [a.id];
                gf(a, function(a) {
                    d.push(a.id)
                }, !0),
                a.history = new rf(null),
                a.history.done = Cf(this.history.done, d),
                a.history.undone = Cf(this.history.undone, d)
            }
        },
        iterLinkedDocs: function(a) {
            gf(this, a)
        },
        getMode: function() {
            return this.mode
        },
        getEditor: function() {
            return this.cm
        },
        splitLines: function(a) {
            return this.lineSep ? a.split(this.lineSep) : Ng(a)
        },
        lineSeparator: function() {
            return this.lineSep || "\n"
        }
    }),
    df.prototype.eachLine = df.prototype.iter;
    var ef = "iter insert remove copy getEditor constructor".split(" ");
    for (var ff in df.prototype)
        df.prototype.hasOwnProperty(ff) && ig(ef, ff) < 0 && (x.prototype[ff] = function(a) {
            return function() {
                return a.apply(this.doc, arguments)
            }
        }(df.prototype[ff]));
    Xf(df);
    var Gf = x.e_preventDefault = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
      , Hf = x.e_stopPropagation = function(a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }
      , Jf = x.e_stop = function(a) {
        Gf(a),
        Hf(a)
    }
      , Mf = x.on = function(a, b, c) {
        if (a.addEventListener)
            a.addEventListener(b, c, !1);
        else if (a.attachEvent)
            a.attachEvent("on" + b, c);
        else {
            var d = a._handlers || (a._handlers = {})
              , e = d[b] || (d[b] = []);
            e.push(c)
        }
    }
      , Nf = []
      , Pf = x.off = function(a, b, c) {
        if (a.removeEventListener)
            a.removeEventListener(b, c, !1);
        else if (a.detachEvent)
            a.detachEvent("on" + b, c);
        else
            for (var d = Of(a, b, !1), e = 0; e < d.length; ++e)
                if (d[e] == c) {
                    d.splice(e, 1);
                    break
                }
    }
      , Qf = x.signal = function(a, b) {
        var c = Of(a, b, !0);
        if (c.length)
            for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e)
                c[e].apply(null, d)
    }
      , Rf = null
      , Yf = 30
      , Zf = x.Pass = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    }
      , $f = {
        scroll: !1
    }
      , _f = {
        origin: "*mouse"
    }
      , ag = {
        origin: "+move"
    };
    bg.prototype.set = function(a, b) {
        clearTimeout(this.id),
        this.id = setTimeout(b, a)
    }
    ;
    var cg = x.countColumn = function(a, b, c, d, e) {
        null == b && (b = a.search(/[^\s\u00a0]/),
        -1 == b && (b = a.length));
        for (var f = d || 0, g = e || 0; ; ) {
            var h = a.indexOf("	", f);
            if (0 > h || h >= b)
                return g + (b - f);
            g += h - f,
            g += c - g % c,
            f = h + 1
        }
    }
      , dg = x.findColumn = function(a, b, c) {
        for (var d = 0, e = 0; ; ) {
            var f = a.indexOf("	", d);
            -1 == f && (f = a.length);
            var g = f - d;
            if (f == a.length || e + g >= b)
                return d + Math.min(g, b - e);
            if (e += f - d,
            e += c - e % c,
            d = f + 1,
            e >= b)
                return d
        }
    }
      , eg = [""]
      , hg = function(a) {
        a.select()
    };
    o ? hg = function(a) {
        a.selectionStart = 0,
        a.selectionEnd = a.value.length
    }
    : f && (hg = function(a) {
        try {
            a.select()
        } catch (b) {}
    }
    );
    var vg, og = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, pg = x.isWordChar = function(a) {
        return /\w/.test(a) || a > "\x80" && (a.toUpperCase() != a.toLowerCase() || og.test(a))
    }
    , sg = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    vg = document.createRange ? function(a, b, c, d) {
        var e = document.createRange();
        return e.setEnd(d || a, c),
        e.setStart(a, b),
        e
    }
    : function(a, b, c) {
        var d = document.body.createTextRange();
        try {
            d.moveToElementText(a.parentNode)
        } catch (e) {
            return d
        }
        return d.collapse(!0),
        d.moveEnd("character", c),
        d.moveStart("character", b),
        d
    }
    ;
    var yg = x.contains = function(a, b) {
        if (3 == b.nodeType && (b = b.parentNode),
        a.contains)
            return a.contains(b);
        do
            if (11 == b.nodeType && (b = b.host),
            b == a)
                return !0;
        while (b = b.parentNode)
    }
    ;
    f && 11 > g && (zg = function() {
        try {
            return document.activeElement
        } catch (a) {
            return document.body
        }
    }
    );
    var Jg, Lg, Bg = x.rmClass = function(a, b) {
        var c = a.className
          , d = Ag(b).exec(c);
        if (d) {
            var e = c.slice(d.index + d[0].length);
            a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
        }
    }
    , Cg = x.addClass = function(a, b) {
        var c = a.className;
        Ag(b).test(c) || (a.className += (c ? " " : "") + b)
    }
    , Fg = !1, Ig = function() {
        if (f && 9 > g)
            return !1;
        var a = ug("div");
        return "draggable"in a || "dragDrop"in a
    }(), Ng = x.splitLines = 3 != "\n\nb".split(/\n/).length ? function(a) {
        for (var b = 0, c = [], d = a.length; d >= b; ) {
            var e = a.indexOf("\n", b);
            -1 == e && (e = a.length);
            var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e)
              , g = f.indexOf("\r");
            -1 != g ? (c.push(f.slice(0, g)),
            b += g + 1) : (c.push(f),
            b = e + 1)
        }
        return c
    }
    : function(a) {
        return a.split(/\r\n?|\n/)
    }
    , Og = window.getSelection ? function(a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return !1
        }
    }
    : function(a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {}
        return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1
    }
    , Pg = function() {
        var a = ug("div");
        return "oncopy"in a ? !0 : (a.setAttribute("oncopy", "return;"),
        "function" == typeof a.oncopy)
    }(), Qg = null, Sg = x.keyNames = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    !function() {
        for (var a = 0; 10 > a; a++)
            Sg[a + 48] = Sg[a + 96] = String(a);
        for (var a = 65; 90 >= a; a++)
            Sg[a] = String.fromCharCode(a);
        for (var a = 1; 12 >= a; a++)
            Sg[a + 111] = Sg[a + 63235] = "F" + a
    }();
    var ah, fh = function() {
        function c(c) {
            return 247 >= c ? a.charAt(c) : c >= 1424 && 1524 >= c ? "R" : c >= 1536 && 1773 >= c ? b.charAt(c - 1536) : c >= 1774 && 2220 >= c ? "r" : c >= 8192 && 8203 >= c ? "w" : 8204 == c ? "b" : "L"
        }
        function j(a, b, c) {
            this.level = a,
            this.from = b,
            this.to = c
        }
        var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
          , b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm"
          , d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
          , e = /[stwN]/
          , f = /[LRr]/
          , g = /[Lb1n]/
          , h = /[1n]/
          , i = "L";
        return function(a) {
            if (!d.test(a))
                return !1;
            for (var m, b = a.length, k = [], l = 0; b > l; ++l)
                k.push(m = c(a.charCodeAt(l)));
            for (var l = 0, n = i; b > l; ++l) {
                var m = k[l];
                "m" == m ? k[l] = n : n = m
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "1" == m && "r" == o ? k[l] = "n" : f.test(m) && (o = m,
                "r" == m && (k[l] = "R"))
            }
            for (var l = 1, n = k[0]; b - 1 > l; ++l) {
                var m = k[l];
                "+" == m && "1" == n && "1" == k[l + 1] ? k[l] = "1" : "," != m || n != k[l + 1] || "1" != n && "n" != n || (k[l] = n),
                n = m
            }
            for (var l = 0; b > l; ++l) {
                var m = k[l];
                if ("," == m)
                    k[l] = "N";
                else if ("%" == m) {
                    for (var p = l + 1; b > p && "%" == k[p]; ++p)
                        ;
                    for (var q = l && "!" == k[l - 1] || b > p && "1" == k[p] ? "1" : "N", r = l; p > r; ++r)
                        k[r] = q;
                    l = p - 1
                }
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "L" == o && "1" == m ? k[l] = "L" : f.test(m) && (o = m)
            }
            for (var l = 0; b > l; ++l)
                if (e.test(k[l])) {
                    for (var p = l + 1; b > p && e.test(k[p]); ++p)
                        ;
                    for (var s = "L" == (l ? k[l - 1] : i), t = "L" == (b > p ? k[p] : i), q = s || t ? "L" : "R", r = l; p > r; ++r)
                        k[r] = q;
                    l = p - 1
                }
            for (var v, u = [], l = 0; b > l; )
                if (g.test(k[l])) {
                    var w = l;
                    for (++l; b > l && g.test(k[l]); ++l)
                        ;
                    u.push(new j(0,w,l))
                } else {
                    var x = l
                      , y = u.length;
                    for (++l; b > l && "L" != k[l]; ++l)
                        ;
                    for (var r = x; l > r; )
                        if (h.test(k[r])) {
                            r > x && u.splice(y, 0, new j(1,x,r));
                            var z = r;
                            for (++r; l > r && h.test(k[r]); ++r)
                                ;
                            u.splice(y, 0, new j(2,z,r)),
                            x = r
                        } else
                            ++r;
                    l > x && u.splice(y, 0, new j(1,x,l))
                }
            return 1 == u[0].level && (v = a.match(/^\s+/)) && (u[0].from = v[0].length,
            u.unshift(new j(0,0,v[0].length))),
            1 == gg(u).level && (v = a.match(/\s+$/)) && (gg(u).to -= v[0].length,
            u.push(new j(0,b - v[0].length,b))),
            2 == u[0].level && u.unshift(new j(1,u[0].to,u[0].to)),
            u[0].level != gg(u).level && u.push(new j(u[0].level,b,b)),
            u
        }
    }();
    return x.version = "5.13.3",
    x
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a) {
        for (var b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = !0;
        return b
    }
    function x(a, b) {
        for (var d, c = !1; null != (d = a.next()); ) {
            if (c && "/" == d) {
                b.tokenize = null;
                break
            }
            c = "*" == d
        }
        return ["comment", "comment"]
    }
    a.defineMode("css", function(b, c) {
        function u(a, b) {
            return s = b,
            a
        }
        function v(a, b) {
            var c = a.next();
            if (f[c]) {
                var d = f[c](a, b);
                if (d !== !1)
                    return d
            }
            return "@" == c ? (a.eatWhile(/[\w\\\-]/),
            u("def", a.current())) : "=" == c || ("~" == c || "|" == c) && a.eat("=") ? u(null, "compare") : '"' == c || "'" == c ? (b.tokenize = w(c),
            b.tokenize(a, b)) : "#" == c ? (a.eatWhile(/[\w\\\-]/),
            u("atom", "hash")) : "!" == c ? (a.match(/^\s*\w*/),
            u("keyword", "important")) : /\d/.test(c) || "." == c && a.eat(/\d/) ? (a.eatWhile(/[\w.%]/),
            u("number", "unit")) : "-" !== c ? /[,+>*\/]/.test(c) ? u(null, "select-op") : "." == c && a.match(/^-?[_a-z][_a-z0-9-]*/i) ? u("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(c) ? u(null, c) : "u" == c && a.match(/rl(-prefix)?\(/) || "d" == c && a.match("omain(") || "r" == c && a.match("egexp(") ? (a.backUp(1),
            b.tokenize = x,
            u("property", "word")) : /[\w\\\-]/.test(c) ? (a.eatWhile(/[\w\\\-]/),
            u("property", "word")) : u(null, null) : /[\d.]/.test(a.peek()) ? (a.eatWhile(/[\w.%]/),
            u("number", "unit")) : a.match(/^-[\w\\\-]+/) ? (a.eatWhile(/[\w\\\-]/),
            a.match(/^\s*:/, !1) ? u("variable-2", "variable-definition") : u("variable-2", "variable")) : a.match(/^\w+-/) ? u("meta", "meta") : void 0
        }
        function w(a) {
            return function(b, c) {
                for (var e, d = !1; null != (e = b.next()); ) {
                    if (e == a && !d) {
                        ")" == a && b.backUp(1);
                        break
                    }
                    d = !d && "\\" == e
                }
                return (e == a || !d && ")" != a) && (c.tokenize = null),
                u("string", "string")
            }
        }
        function x(a, b) {
            return a.next(),
            a.match(/\s*[\"\')]/, !1) ? b.tokenize = null : b.tokenize = w(")"),
            u(null, "(")
        }
        function y(a, b, c) {
            this.type = a,
            this.indent = b,
            this.prev = c
        }
        function z(a, b, c, d) {
            return a.context = new y(c,b.indentation() + (d === !1 ? 0 : e),a.context),
            c
        }
        function A(a) {
            return a.context.prev && (a.context = a.context.prev),
            a.context.type
        }
        function B(a, b, c) {
            return E[c.context.type](a, b, c)
        }
        function C(a, b, c, d) {
            for (var e = d || 1; e > 0; e--)
                c.context = c.context.prev;
            return B(a, b, c)
        }
        function D(a) {
            var b = a.current().toLowerCase();
            t = p.hasOwnProperty(b) ? "atom" : o.hasOwnProperty(b) ? "keyword" : "variable"
        }
        var d = c.inline;
        c.propertyKeywords || (c = a.resolveMode("text/css"));
        var s, t, e = b.indentUnit, f = c.tokenHooks, g = c.documentTypes || {}, h = c.mediaTypes || {}, i = c.mediaFeatures || {}, j = c.mediaValueKeywords || {}, k = c.propertyKeywords || {}, l = c.nonStandardPropertyKeywords || {}, m = c.fontProperties || {}, n = c.counterDescriptors || {}, o = c.colorKeywords || {}, p = c.valueKeywords || {}, q = c.allowNested, r = c.supportsAtComponent === !0, E = {};
        return E.top = function(a, b, c) {
            if ("{" == a)
                return z(c, b, "block");
            if ("}" == a && c.context.prev)
                return A(c);
            if (r && /@component/.test(a))
                return z(c, b, "atComponentBlock");
            if (/^@(-moz-)?document$/.test(a))
                return z(c, b, "documentTypes");
            if (/^@(media|supports|(-moz-)?document|import)$/.test(a))
                return z(c, b, "atBlock");
            if (/^@(font-face|counter-style)/.test(a))
                return c.stateArg = a,
                "restricted_atBlock_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(a))
                return "keyframes";
            if (a && "@" == a.charAt(0))
                return z(c, b, "at");
            if ("hash" == a)
                t = "builtin";
            else if ("word" == a)
                t = "tag";
            else {
                if ("variable-definition" == a)
                    return "maybeprop";
                if ("interpolation" == a)
                    return z(c, b, "interpolation");
                if (":" == a)
                    return "pseudo";
                if (q && "(" == a)
                    return z(c, b, "parens")
            }
            return c.context.type
        }
        ,
        E.block = function(a, b, c) {
            if ("word" == a) {
                var d = b.current().toLowerCase();
                return k.hasOwnProperty(d) ? (t = "property",
                "maybeprop") : l.hasOwnProperty(d) ? (t = "string-2",
                "maybeprop") : q ? (t = b.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag",
                "block") : (t += " error",
                "maybeprop")
            }
            return "meta" == a ? "block" : q || "hash" != a && "qualifier" != a ? E.top(a, b, c) : (t = "error",
            "block")
        }
        ,
        E.maybeprop = function(a, b, c) {
            return ":" == a ? z(c, b, "prop") : B(a, b, c)
        }
        ,
        E.prop = function(a, b, c) {
            if (";" == a)
                return A(c);
            if ("{" == a && q)
                return z(c, b, "propBlock");
            if ("}" == a || "{" == a)
                return C(a, b, c);
            if ("(" == a)
                return z(c, b, "parens");
            if ("hash" != a || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(b.current())) {
                if ("word" == a)
                    D(b);
                else if ("interpolation" == a)
                    return z(c, b, "interpolation")
            } else
                t += " error";
            return "prop"
        }
        ,
        E.propBlock = function(a, b, c) {
            return "}" == a ? A(c) : "word" == a ? (t = "property",
            "maybeprop") : c.context.type
        }
        ,
        E.parens = function(a, b, c) {
            return "{" == a || "}" == a ? C(a, b, c) : ")" == a ? A(c) : "(" == a ? z(c, b, "parens") : "interpolation" == a ? z(c, b, "interpolation") : ("word" == a && D(b),
            "parens")
        }
        ,
        E.pseudo = function(a, b, c) {
            return "word" == a ? (t = "variable-3",
            c.context.type) : B(a, b, c)
        }
        ,
        E.documentTypes = function(a, b, c) {
            return "word" == a && g.hasOwnProperty(b.current()) ? (t = "tag",
            c.context.type) : E.atBlock(a, b, c)
        }
        ,
        E.atBlock = function(a, b, c) {
            if ("(" == a)
                return z(c, b, "atBlock_parens");
            if ("}" == a || ";" == a)
                return C(a, b, c);
            if ("{" == a)
                return A(c) && z(c, b, q ? "block" : "top");
            if ("interpolation" == a)
                return z(c, b, "interpolation");
            if ("word" == a) {
                var d = b.current().toLowerCase();
                t = "only" == d || "not" == d || "and" == d || "or" == d ? "keyword" : h.hasOwnProperty(d) ? "attribute" : i.hasOwnProperty(d) ? "property" : j.hasOwnProperty(d) ? "keyword" : k.hasOwnProperty(d) ? "property" : l.hasOwnProperty(d) ? "string-2" : p.hasOwnProperty(d) ? "atom" : o.hasOwnProperty(d) ? "keyword" : "error"
            }
            return c.context.type
        }
        ,
        E.atComponentBlock = function(a, b, c) {
            return "}" == a ? C(a, b, c) : "{" == a ? A(c) && z(c, b, q ? "block" : "top", !1) : ("word" == a && (t = "error"),
            c.context.type)
        }
        ,
        E.atBlock_parens = function(a, b, c) {
            return ")" == a ? A(c) : "{" == a || "}" == a ? C(a, b, c, 2) : E.atBlock(a, b, c)
        }
        ,
        E.restricted_atBlock_before = function(a, b, c) {
            return "{" == a ? z(c, b, "restricted_atBlock") : "word" == a && "@counter-style" == c.stateArg ? (t = "variable",
            "restricted_atBlock_before") : B(a, b, c)
        }
        ,
        E.restricted_atBlock = function(a, b, c) {
            return "}" == a ? (c.stateArg = null,
            A(c)) : "word" == a ? (t = "@font-face" == c.stateArg && !m.hasOwnProperty(b.current().toLowerCase()) || "@counter-style" == c.stateArg && !n.hasOwnProperty(b.current().toLowerCase()) ? "error" : "property",
            "maybeprop") : "restricted_atBlock"
        }
        ,
        E.keyframes = function(a, b, c) {
            return "word" == a ? (t = "variable",
            "keyframes") : "{" == a ? z(c, b, "top") : B(a, b, c)
        }
        ,
        E.at = function(a, b, c) {
            return ";" == a ? A(c) : "{" == a || "}" == a ? C(a, b, c) : ("word" == a ? t = "tag" : "hash" == a && (t = "builtin"),
            "at")
        }
        ,
        E.interpolation = function(a, b, c) {
            return "}" == a ? A(c) : "{" == a || ";" == a ? C(a, b, c) : ("word" == a ? t = "variable" : "variable" != a && "(" != a && ")" != a && (t = "error"),
            "interpolation")
        }
        ,
        {
            startState: function(a) {
                return {
                    tokenize: null,
                    state: d ? "block" : "top",
                    stateArg: null,
                    context: new y(d ? "block" : "top",a || 0,null)
                }
            },
            token: function(a, b) {
                if (!b.tokenize && a.eatSpace())
                    return null;
                var c = (b.tokenize || v)(a, b);
                return c && "object" == typeof c && (s = c[1],
                c = c[0]),
                t = c,
                b.state = E[b.state](s, a, b),
                t
            },
            indent: function(a, b) {
                var c = a.context
                  , d = b && b.charAt(0)
                  , f = c.indent;
                return "prop" != c.type || "}" != d && ")" != d || (c = c.prev),
                c.prev && ("}" != d || "block" != c.type && "top" != c.type && "interpolation" != c.type && "restricted_atBlock" != c.type ? (")" == d && ("parens" == c.type || "atBlock_parens" == c.type) || "{" == d && ("at" == c.type || "atBlock" == c.type)) && (f = Math.max(0, c.indent - e),
                c = c.prev) : (c = c.prev,
                f = c.indent)),
                f
            },
            electricChars: "}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            fold: "brace"
        }
    });
    var c = ["domain", "regexp", "url", "url-prefix"]
      , d = b(c)
      , e = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"]
      , f = b(e)
      , g = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"]
      , h = b(g)
      , i = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"]
      , j = b(i)
      , k = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"]
      , l = b(k)
      , m = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"]
      , n = b(m)
      , o = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"]
      , p = b(o)
      , q = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]
      , r = b(q)
      , s = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]
      , t = b(s)
      , u = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"]
      , v = b(u)
      , w = c.concat(e).concat(g).concat(i).concat(k).concat(m).concat(s).concat(u);
    a.registerHelper("hintWords", "css", w),
    a.defineMIME("text/css", {
        documentTypes: d,
        mediaTypes: f,
        mediaFeatures: h,
        mediaValueKeywords: j,
        propertyKeywords: l,
        nonStandardPropertyKeywords: n,
        fontProperties: p,
        counterDescriptors: r,
        colorKeywords: t,
        valueKeywords: v,
        tokenHooks: {
            "/": function(a, b) {
                return a.eat("*") ? (b.tokenize = x,
                x(a, b)) : !1
            }
        },
        name: "css"
    }),
    a.defineMIME("text/x-scss", {
        mediaTypes: f,
        mediaFeatures: h,
        mediaValueKeywords: j,
        propertyKeywords: l,
        nonStandardPropertyKeywords: n,
        colorKeywords: t,
        valueKeywords: v,
        fontProperties: p,
        allowNested: !0,
        tokenHooks: {
            "/": function(a, b) {
                return a.eat("/") ? (a.skipToEnd(),
                ["comment", "comment"]) : a.eat("*") ? (b.tokenize = x,
                x(a, b)) : ["operator", "operator"]
            },
            ":": function(a) {
                return a.match(/\s*\{/) ? [null, "{"] : !1
            },
            $: function(a) {
                return a.match(/^[\w-]+/),
                a.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
            },
            "#": function(a) {
                return a.eat("{") ? [null, "interpolation"] : !1
            }
        },
        name: "css",
        helperType: "scss"
    }),
    a.defineMIME("text/x-less", {
        mediaTypes: f,
        mediaFeatures: h,
        mediaValueKeywords: j,
        propertyKeywords: l,
        nonStandardPropertyKeywords: n,
        colorKeywords: t,
        valueKeywords: v,
        fontProperties: p,
        allowNested: !0,
        tokenHooks: {
            "/": function(a, b) {
                return a.eat("/") ? (a.skipToEnd(),
                ["comment", "comment"]) : a.eat("*") ? (b.tokenize = x,
                x(a, b)) : ["operator", "operator"]
            },
            "@": function(a) {
                return a.eat("{") ? [null, "interpolation"] : a.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) ? !1 : (a.eatWhile(/[\w\\\-]/),
                a.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
            },
            "&": function() {
                return ["atom", "atom"]
            }
        },
        name: "css",
        helperType: "less"
    }),
    a.defineMIME("text/x-gss", {
        documentTypes: d,
        mediaTypes: f,
        mediaFeatures: h,
        propertyKeywords: l,
        nonStandardPropertyKeywords: n,
        fontProperties: p,
        counterDescriptors: r,
        colorKeywords: t,
        valueKeywords: v,
        supportsAtComponent: !0,
        tokenHooks: {
            "/": function(a, b) {
                return a.eat("*") ? (b.tokenize = x,
                x(a, b)) : !1
            }
        },
        name: "css",
        helperType: "gss"
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../markdown/markdown"), require("../../addon/mode/overlay")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    var b = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/i;
    a.defineMode("gfm", function(c, d) {
        function f(a) {
            return a.code = !1,
            null
        }
        var e = 0
          , g = {
            startState: function() {
                return {
                    code: !1,
                    codeBlock: !1,
                    ateSpace: !1
                }
            },
            copyState: function(a) {
                return {
                    code: a.code,
                    codeBlock: a.codeBlock,
                    ateSpace: a.ateSpace
                }
            },
            token: function(a, c) {
                if (c.combineTokens = null,
                c.codeBlock)
                    return a.match(/^```+/) ? (c.codeBlock = !1,
                    null) : (a.skipToEnd(),
                    null);
                if (a.sol() && (c.code = !1),
                a.sol() && a.match(/^```+/))
                    return a.skipToEnd(),
                    c.codeBlock = !0,
                    null;
                if ("`" === a.peek()) {
                    a.next();
                    var f = a.pos;
                    a.eatWhile("`");
                    var g = 1 + a.pos - f;
                    return c.code ? g === e && (c.code = !1) : (e = g,
                    c.code = !0),
                    null
                }
                if (c.code)
                    return a.next(),
                    null;
                if (a.eatSpace())
                    return c.ateSpace = !0,
                    null;
                if ((a.sol() || c.ateSpace) && (c.ateSpace = !1,
                d.gitHubSpice !== !1)) {
                    if (a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/))
                        return c.combineTokens = !0,
                        "link";
                    if (a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                        return c.combineTokens = !0,
                        "link"
                }
                return a.match(b) && "](" != a.string.slice(a.start - 2, a.start) && (0 == a.start || /\W/.test(a.string.charAt(a.start - 1))) ? (c.combineTokens = !0,
                "link") : (a.next(),
                null)
            },
            blankLine: f
        }
          , h = {
            underscoresBreakWords: !1,
            taskLists: !0,
            fencedCodeBlocks: "```",
            strikethrough: !0
        };
        for (var i in d)
            h[i] = d[i];
        return h.name = "markdown",
        a.overlayMode(a.getMode(c, h), g)
    }, "markdown"),
    a.defineMIME("text/x-gfm", "gfm")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../../addon/mode/multiplex")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../../addon/mode/multiplex"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.defineMode("htmlembedded", function(b, c) {
        return a.multiplexingMode(a.getMode(b, "htmlmixed"), {
            open: c.open || c.scriptStartRegex || "<%",
            close: c.close || c.scriptEndRegex || "%>",
            mode: a.getMode(b, c.scriptingModeSpec)
        })
    }, "htmlmixed"),
    a.defineMIME("application/x-ejs", {
        name: "htmlembedded",
        scriptingModeSpec: "javascript"
    }),
    a.defineMIME("application/x-aspx", {
        name: "htmlembedded",
        scriptingModeSpec: "text/x-csharp"
    }),
    a.defineMIME("application/x-jsp", {
        name: "htmlembedded",
        scriptingModeSpec: "text/x-java"
    }),
    a.defineMIME("application/x-erb", {
        name: "htmlembedded",
        scriptingModeSpec: "ruby"
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function c(a, b, c) {
        var d = a.current()
          , e = d.search(b);
        return e > -1 ? a.backUp(d.length - e) : d.match(/<\/?$/) && (a.backUp(d.length),
        a.match(b, !1) || a.match(d)),
        c
    }
    function e(a) {
        var b = d[a];
        return b ? b : d[a] = new RegExp("\\s+" + a + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")
    }
    function f(a, b) {
        var c = a.match(e(b));
        return c ? c[2] : ""
    }
    function g(a, b) {
        return new RegExp((b ? "^" : "") + "</s*" + a + "s*>","i")
    }
    function h(a, b) {
        for (var c in a)
            for (var d = b[c] || (b[c] = []), e = a[c], f = e.length - 1; f >= 0; f--)
                d.unshift(e[f])
    }
    function i(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (!d[0] || d[1].test(f(b, d[0])))
                return d[2]
        }
    }
    var b = {
        script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
        style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
    }
      , d = {};
    a.defineMode("htmlmixed", function(d, e) {
        function n(b, e) {
            var l, h = f.token(b, e.htmlState), k = /\btag\b/.test(h);
            if (k && !/[<>\s\/]/.test(b.current()) && (l = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) && j.hasOwnProperty(l))
                e.inTag = l + " ";
            else if (e.inTag && k && />$/.test(b.current())) {
                var m = /^([\S]+) (.*)/.exec(e.inTag);
                e.inTag = null;
                var o = ">" == b.current() && i(j[m[1]], m[2])
                  , p = a.getMode(d, o)
                  , q = g(m[1], !0)
                  , r = g(m[1], !1);
                e.token = function(a, b) {
                    return a.match(q, !1) ? (b.token = n,
                    b.localState = b.localMode = null,
                    null) : c(a, r, b.localMode.token(a, b.localState))
                }
                ,
                e.localMode = p,
                e.localState = a.startState(p, f.indent(e.htmlState, ""))
            } else
                e.inTag && (e.inTag += b.current(),
                b.eol() && (e.inTag += " "));
            return h
        }
        var f = a.getMode(d, {
            name: "xml",
            htmlMode: !0,
            multilineTagIndentFactor: e.multilineTagIndentFactor,
            multilineTagIndentPastTag: e.multilineTagIndentPastTag
        })
          , j = {}
          , k = e && e.tags
          , l = e && e.scriptTypes;
        if (h(b, j),
        k && h(k, j),
        l)
            for (var m = l.length - 1; m >= 0; m--)
                j.script.unshift(["type", l[m].matches, l[m].mode]);
        return {
            startState: function() {
                var a = f.startState();
                return {
                    token: n,
                    inTag: null,
                    localMode: null,
                    localState: null,
                    htmlState: a
                }
            },
            copyState: function(b) {
                var c;
                return b.localState && (c = a.copyState(b.localMode, b.localState)),
                {
                    token: b.token,
                    inTag: b.inTag,
                    localMode: b.localMode,
                    localState: c,
                    htmlState: a.copyState(f, b.htmlState)
                }
            },
            token: function(a, b) {
                return b.token(a, b)
            },
            indent: function(b, c) {
                return !b.localMode || /^\s*<\//.test(c) ? f.indent(b.htmlState, c) : b.localMode.indent ? b.localMode.indent(b.localState, c) : a.Pass
            },
            innerMode: function(a) {
                return {
                    state: a.localState || a.htmlState,
                    mode: a.localMode || f
                }
            }
        }
    }, "xml", "javascript", "css"),
    a.defineMIME("text/html", "htmlmixed")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a, b, c) {
        return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(b.lastType) || "quasi" == b.lastType && /\{\s*$/.test(a.string.slice(0, a.pos - (c || 0)))
    }
    a.defineMode("javascript", function(c, d) {
        function n(a) {
            for (var c, b = !1, d = !1; null != (c = a.next()); ) {
                if (!b) {
                    if ("/" == c && !d)
                        return;
                    "[" == c ? d = !0 : d && "]" == c && (d = !1)
                }
                b = !b && "\\" == c
            }
        }
        function q(a, b, c) {
            return o = a,
            p = c,
            b
        }
        function r(a, c) {
            var d = a.next();
            if ('"' == d || "'" == d)
                return c.tokenize = s(d),
                c.tokenize(a, c);
            if ("." == d && a.match(/^\d+(?:[eE][+\-]?\d+)?/))
                return q("number", "number");
            if ("." == d && a.match(".."))
                return q("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(d))
                return q(d);
            if ("=" == d && a.eat(">"))
                return q("=>", "operator");
            if ("0" == d && a.eat(/x/i))
                return a.eatWhile(/[\da-f]/i),
                q("number", "number");
            if ("0" == d && a.eat(/o/i))
                return a.eatWhile(/[0-7]/i),
                q("number", "number");
            if ("0" == d && a.eat(/b/i))
                return a.eatWhile(/[01]/i),
                q("number", "number");
            if (/\d/.test(d))
                return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
                q("number", "number");
            if ("/" == d)
                return a.eat("*") ? (c.tokenize = t,
                t(a, c)) : a.eat("/") ? (a.skipToEnd(),
                q("comment", "comment")) : b(a, c, 1) ? (n(a),
                a.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                q("regexp", "string-2")) : (a.eatWhile(l),
                q("operator", "operator", a.current()));
            if ("`" == d)
                return c.tokenize = u,
                u(a, c);
            if ("#" == d)
                return a.skipToEnd(),
                q("error", "error");
            if (l.test(d))
                return a.eatWhile(l),
                q("operator", "operator", a.current());
            if (j.test(d)) {
                a.eatWhile(j);
                var e = a.current()
                  , f = k.propertyIsEnumerable(e) && k[e];
                return f && "." != c.lastType ? q(f.type, f.style, e) : q("variable", "variable", e)
            }
        }
        function s(a) {
            return function(b, c) {
                var e, d = !1;
                if (g && "@" == b.peek() && b.match(m))
                    return c.tokenize = r,
                    q("jsonld-keyword", "meta");
                for (; null != (e = b.next()) && (e != a || d); )
                    d = !d && "\\" == e;
                return d || (c.tokenize = r),
                q("string", "string")
            }
        }
        function t(a, b) {
            for (var d, c = !1; d = a.next(); ) {
                if ("/" == d && c) {
                    b.tokenize = r;
                    break
                }
                c = "*" == d
            }
            return q("comment", "comment")
        }
        function u(a, b) {
            for (var d, c = !1; null != (d = a.next()); ) {
                if (!c && ("`" == d || "$" == d && a.eat("{"))) {
                    b.tokenize = r;
                    break
                }
                c = !c && "\\" == d
            }
            return q("quasi", "string-2", a.current())
        }
        function w(a, b) {
            b.fatArrowAt && (b.fatArrowAt = null);
            var c = a.string.indexOf("=>", a.start);
            if (!(0 > c)) {
                for (var d = 0, e = !1, f = c - 1; f >= 0; --f) {
                    var g = a.string.charAt(f)
                      , h = v.indexOf(g);
                    if (h >= 0 && 3 > h) {
                        if (!d) {
                            ++f;
                            break
                        }
                        if (0 == --d)
                            break
                    } else if (h >= 3 && 6 > h)
                        ++d;
                    else if (j.test(g))
                        e = !0;
                    else {
                        if (/["'\/]/.test(g))
                            return;
                        if (e && !d) {
                            ++f;
                            break
                        }
                    }
                }
                e && !d && (b.fatArrowAt = f)
            }
        }
        function y(a, b, c, d, e, f) {
            this.indented = a,
            this.column = b,
            this.type = c,
            this.prev = e,
            this.info = f,
            null != d && (this.align = d)
        }
        function z(a, b) {
            for (var c = a.localVars; c; c = c.next)
                if (c.name == b)
                    return !0;
            for (var d = a.context; d; d = d.prev)
                for (var c = d.vars; c; c = c.next)
                    if (c.name == b)
                        return !0
        }
        function A(a, b, c, d, e) {
            var f = a.cc;
            for (B.state = a,
            B.stream = e,
            B.marked = null,
            B.cc = f,
            B.style = b,
            a.lexical.hasOwnProperty("align") || (a.lexical.align = !0); ; ) {
                var g = f.length ? f.pop() : h ? M : L;
                if (g(c, d)) {
                    for (; f.length && f[f.length - 1].lex; )
                        f.pop()();
                    return B.marked ? B.marked : "variable" == c && z(a, d) ? "variable-2" : b
                }
            }
        }
        function C() {
            for (var a = arguments.length - 1; a >= 0; a--)
                B.cc.push(arguments[a])
        }
        function D() {
            return C.apply(null, arguments),
            !0
        }
        function E(a) {
            function b(b) {
                for (var c = b; c; c = c.next)
                    if (c.name == a)
                        return !0;
                return !1
            }
            var c = B.state;
            if (B.marked = "def",
            c.context) {
                if (b(c.localVars))
                    return;
                c.localVars = {
                    name: a,
                    next: c.localVars
                }
            } else {
                if (b(c.globalVars))
                    return;
                d.globalVars && (c.globalVars = {
                    name: a,
                    next: c.globalVars
                })
            }
        }
        function G() {
            B.state.context = {
                prev: B.state.context,
                vars: B.state.localVars
            },
            B.state.localVars = F
        }
        function H() {
            B.state.localVars = B.state.context.vars,
            B.state.context = B.state.context.prev
        }
        function I(a, b) {
            var c = function() {
                var c = B.state
                  , d = c.indented;
                if ("stat" == c.lexical.type)
                    d = c.lexical.indented;
                else
                    for (var e = c.lexical; e && ")" == e.type && e.align; e = e.prev)
                        d = e.indented;
                c.lexical = new y(d,B.stream.column(),a,null,c.lexical,b)
            };
            return c.lex = !0,
            c
        }
        function J() {
            var a = B.state;
            a.lexical.prev && (")" == a.lexical.type && (a.indented = a.lexical.indented),
            a.lexical = a.lexical.prev)
        }
        function K(a) {
            function b(c) {
                return c == a ? D() : ";" == a ? C() : D(b)
            }
            return b
        }
        function L(a, b) {
            return "var" == a ? D(I("vardef", b.length), ja, K(";"), J) : "keyword a" == a ? D(I("form"), M, L, J) : "keyword b" == a ? D(I("form"), L, J) : "{" == a ? D(I("}"), fa, J) : ";" == a ? D() : "if" == a ? ("else" == B.state.lexical.info && B.state.cc[B.state.cc.length - 1] == J && B.state.cc.pop()(),
            D(I("form"), M, L, J, oa)) : "function" == a ? D(ua) : "for" == a ? D(I("form"), pa, L, J) : "variable" == a ? D(I("stat"), $) : "switch" == a ? D(I("form"), M, I("}", "switch"), K("{"), fa, J, J) : "case" == a ? D(M, K(":")) : "default" == a ? D(K(":")) : "catch" == a ? D(I("form"), G, K("("), va, K(")"), L, J, H) : "class" == a ? D(I("form"), wa, J) : "export" == a ? D(I("stat"), Aa, J) : "import" == a ? D(I("stat"), Ba, J) : "module" == a ? D(I("form"), ka, I("}"), K("{"), fa, J, J) : C(I("stat"), M, K(";"), J)
        }
        function M(a) {
            return O(a, !1)
        }
        function N(a) {
            return O(a, !0)
        }
        function O(a, b) {
            if (B.state.fatArrowAt == B.stream.start) {
                var c = b ? W : V;
                if ("(" == a)
                    return D(G, I(")"), da(ka, ")"), J, K("=>"), c, H);
                if ("variable" == a)
                    return C(G, ka, K("=>"), c, H)
            }
            var d = b ? S : R;
            return x.hasOwnProperty(a) ? D(d) : "function" == a ? D(ua, d) : "keyword c" == a ? D(b ? Q : P) : "(" == a ? D(I(")"), P, Ha, K(")"), J, d) : "operator" == a || "spread" == a ? D(b ? N : M) : "[" == a ? D(I("]"), Fa, J, d) : "{" == a ? ea(aa, "}", null, d) : "quasi" == a ? C(T, d) : "new" == a ? D(X(b)) : D()
        }
        function P(a) {
            return a.match(/[;\}\)\],]/) ? C() : C(M)
        }
        function Q(a) {
            return a.match(/[;\}\)\],]/) ? C() : C(N)
        }
        function R(a, b) {
            return "," == a ? D(M) : S(a, b, !1)
        }
        function S(a, b, c) {
            var d = 0 == c ? R : S
              , e = 0 == c ? M : N;
            return "=>" == a ? D(G, c ? W : V, H) : "operator" == a ? /\+\+|--/.test(b) ? D(d) : "?" == b ? D(M, K(":"), e) : D(e) : "quasi" == a ? C(T, d) : ";" != a ? "(" == a ? ea(N, ")", "call", d) : "." == a ? D(_, d) : "[" == a ? D(I("]"), P, K("]"), J, d) : void 0 : void 0
        }
        function T(a, b) {
            return "quasi" != a ? C() : "${" != b.slice(b.length - 2) ? D(T) : D(M, U)
        }
        function U(a) {
            return "}" == a ? (B.marked = "string-2",
            B.state.tokenize = u,
            D(T)) : void 0
        }
        function V(a) {
            return w(B.stream, B.state),
            C("{" == a ? L : M)
        }
        function W(a) {
            return w(B.stream, B.state),
            C("{" == a ? L : N)
        }
        function X(a) {
            return function(b) {
                return "." == b ? D(a ? Z : Y) : C(a ? N : M)
            }
        }
        function Y(a, b) {
            return "target" == b ? (B.marked = "keyword",
            D(R)) : void 0
        }
        function Z(a, b) {
            return "target" == b ? (B.marked = "keyword",
            D(S)) : void 0
        }
        function $(a) {
            return ":" == a ? D(J, L) : C(R, K(";"), J)
        }
        function _(a) {
            return "variable" == a ? (B.marked = "property",
            D()) : void 0
        }
        function aa(a, b) {
            return "variable" == a || "keyword" == B.style ? (B.marked = "property",
            D("get" == b || "set" == b ? ba : ca)) : "number" == a || "string" == a ? (B.marked = g ? "property" : B.style + " property",
            D(ca)) : "jsonld-keyword" == a ? D(ca) : "modifier" == a ? D(aa) : "[" == a ? D(M, K("]"), ca) : "spread" == a ? D(M) : void 0
        }
        function ba(a) {
            return "variable" != a ? C(ca) : (B.marked = "property",
            D(ua))
        }
        function ca(a) {
            return ":" == a ? D(N) : "(" == a ? C(ua) : void 0
        }
        function da(a, b) {
            function c(d) {
                if ("," == d) {
                    var e = B.state.lexical;
                    return "call" == e.info && (e.pos = (e.pos || 0) + 1),
                    D(a, c)
                }
                return d == b ? D() : D(K(b))
            }
            return function(d) {
                return d == b ? D() : C(a, c)
            }
        }
        function ea(a, b, c) {
            for (var d = 3; d < arguments.length; d++)
                B.cc.push(arguments[d]);
            return D(I(b, c), da(a, b), J)
        }
        function fa(a) {
            return "}" == a ? D() : C(L, fa)
        }
        function ga(a) {
            return i && ":" == a ? D(ia) : void 0
        }
        function ha(a, b) {
            return "=" == b ? D(N) : void 0
        }
        function ia(a) {
            return "variable" == a ? (B.marked = "variable-3",
            D()) : void 0
        }
        function ja() {
            return C(ka, ga, ma, na)
        }
        function ka(a, b) {
            return "modifier" == a ? D(ka) : "variable" == a ? (E(b),
            D()) : "spread" == a ? D(ka) : "[" == a ? ea(ka, "]") : "{" == a ? ea(la, "}") : void 0
        }
        function la(a, b) {
            return "variable" != a || B.stream.match(/^\s*:/, !1) ? ("variable" == a && (B.marked = "property"),
            "spread" == a ? D(ka) : "}" == a ? C() : D(K(":"), ka, ma)) : (E(b),
            D(ma))
        }
        function ma(a, b) {
            return "=" == b ? D(N) : void 0
        }
        function na(a) {
            return "," == a ? D(ja) : void 0
        }
        function oa(a, b) {
            return "keyword b" == a && "else" == b ? D(I("form", "else"), L, J) : void 0
        }
        function pa(a) {
            return "(" == a ? D(I(")"), qa, K(")"), J) : void 0
        }
        function qa(a) {
            return "var" == a ? D(ja, K(";"), sa) : ";" == a ? D(sa) : "variable" == a ? D(ra) : C(M, K(";"), sa)
        }
        function ra(a, b) {
            return "in" == b || "of" == b ? (B.marked = "keyword",
            D(M)) : D(R, sa)
        }
        function sa(a, b) {
            return ";" == a ? D(ta) : "in" == b || "of" == b ? (B.marked = "keyword",
            D(M)) : C(M, K(";"), ta)
        }
        function ta(a) {
            ")" != a && D(M)
        }
        function ua(a, b) {
            return "*" == b ? (B.marked = "keyword",
            D(ua)) : "variable" == a ? (E(b),
            D(ua)) : "(" == a ? D(G, I(")"), da(va, ")"), J, L, H) : void 0
        }
        function va(a) {
            return "spread" == a ? D(va) : C(ka, ga, ha)
        }
        function wa(a, b) {
            return "variable" == a ? (E(b),
            D(xa)) : void 0
        }
        function xa(a, b) {
            return "extends" == b ? D(M, xa) : "{" == a ? D(I("}"), ya, J) : void 0
        }
        function ya(a, b) {
            return "variable" == a || "keyword" == B.style ? "static" == b ? (B.marked = "keyword",
            D(ya)) : (B.marked = "property",
            "get" == b || "set" == b ? D(za, ua, ya) : D(ua, ya)) : "*" == b ? (B.marked = "keyword",
            D(ya)) : ";" == a ? D(ya) : "}" == a ? D() : void 0
        }
        function za(a) {
            return "variable" != a ? C() : (B.marked = "property",
            D())
        }
        function Aa(a, b) {
            return "*" == b ? (B.marked = "keyword",
            D(Ea, K(";"))) : "default" == b ? (B.marked = "keyword",
            D(M, K(";"))) : C(L)
        }
        function Ba(a) {
            return "string" == a ? D() : C(Ca, Ea)
        }
        function Ca(a, b) {
            return "{" == a ? ea(Ca, "}") : ("variable" == a && E(b),
            "*" == b && (B.marked = "keyword"),
            D(Da))
        }
        function Da(a, b) {
            return "as" == b ? (B.marked = "keyword",
            D(Ca)) : void 0
        }
        function Ea(a, b) {
            return "from" == b ? (B.marked = "keyword",
            D(M)) : void 0
        }
        function Fa(a) {
            return "]" == a ? D() : C(N, Ga)
        }
        function Ga(a) {
            return "for" == a ? C(Ha, K("]")) : "," == a ? D(da(Q, "]")) : C(da(N, "]"))
        }
        function Ha(a) {
            return "for" == a ? D(pa, Ha) : "if" == a ? D(M, Ha) : void 0
        }
        function Ia(a, b) {
            return "operator" == a.lastType || "," == a.lastType || l.test(b.charAt(0)) || /[,.]/.test(b.charAt(0))
        }
        var o, p, e = c.indentUnit, f = d.statementIndent, g = d.jsonld, h = d.json || g, i = d.typescript, j = d.wordCharacters || /[\w$\xa1-\uffff]/, k = function() {
            function a(a) {
                return {
                    type: a,
                    style: "keyword"
                }
            }
            var b = a("keyword a")
              , c = a("keyword b")
              , d = a("keyword c")
              , e = a("operator")
              , f = {
                type: "atom",
                style: "atom"
            }
              , g = {
                "if": a("if"),
                "while": b,
                "with": b,
                "else": c,
                "do": c,
                "try": c,
                "finally": c,
                "return": d,
                "break": d,
                "continue": d,
                "new": a("new"),
                "delete": d,
                "throw": d,
                "debugger": d,
                "var": a("var"),
                "const": a("var"),
                let: a("var"),
                "function": a("function"),
                "catch": a("catch"),
                "for": a("for"),
                "switch": a("switch"),
                "case": a("case"),
                "default": a("default"),
                "in": e,
                "typeof": e,
                "instanceof": e,
                "true": f,
                "false": f,
                "null": f,
                undefined: f,
                NaN: f,
                Infinity: f,
                "this": a("this"),
                "class": a("class"),
                "super": a("atom"),
                "yield": d,
                "export": a("export"),
                "import": a("import"),
                "extends": d
            };
            if (i) {
                var h = {
                    type: "variable",
                    style: "variable-3"
                }
                  , j = {
                    "interface": a("class"),
                    "implements": d,
                    namespace: d,
                    module: a("module"),
                    "enum": a("module"),
                    "public": a("modifier"),
                    "private": a("modifier"),
                    "protected": a("modifier"),
                    "abstract": a("modifier"),
                    as: e,
                    string: h,
                    number: h,
                    "boolean": h,
                    any: h
                };
                for (var k in j)
                    g[k] = j[k]
            }
            return g
        }(), l = /[+\-*&%=<>!?|~^]/, m = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, v = "([{}])", x = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        }, B = {
            state: null,
            column: null,
            marked: null,
            cc: null
        }, F = {
            name: "this",
            next: {
                name: "arguments"
            }
        };
        return J.lex = !0,
        {
            startState: function(a) {
                var b = {
                    tokenize: r,
                    lastType: "sof",
                    cc: [],
                    lexical: new y((a || 0) - e,0,"block",!1),
                    localVars: d.localVars,
                    context: d.localVars && {
                        vars: d.localVars
                    },
                    indented: a || 0
                };
                return d.globalVars && "object" == typeof d.globalVars && (b.globalVars = d.globalVars),
                b
            },
            token: function(a, b) {
                if (a.sol() && (b.lexical.hasOwnProperty("align") || (b.lexical.align = !1),
                b.indented = a.indentation(),
                w(a, b)),
                b.tokenize != t && a.eatSpace())
                    return null;
                var c = b.tokenize(a, b);
                return "comment" == o ? c : (b.lastType = "operator" != o || "++" != p && "--" != p ? o : "incdec",
                A(b, c, o, p, a))
            },
            indent: function(b, c) {
                if (b.tokenize == t)
                    return a.Pass;
                if (b.tokenize != r)
                    return 0;
                var g = c && c.charAt(0)
                  , h = b.lexical;
                if (!/^\s*else\b/.test(c))
                    for (var i = b.cc.length - 1; i >= 0; --i) {
                        var j = b.cc[i];
                        if (j == J)
                            h = h.prev;
                        else if (j != oa)
                            break
                    }
                "stat" == h.type && "}" == g && (h = h.prev),
                f && ")" == h.type && "stat" == h.prev.type && (h = h.prev);
                var k = h.type
                  , l = g == k;
                return "vardef" == k ? h.indented + ("operator" == b.lastType || "," == b.lastType ? h.info + 1 : 0) : "form" == k && "{" == g ? h.indented : "form" == k ? h.indented + e : "stat" == k ? h.indented + (Ia(b, c) ? f || e : 0) : "switch" != h.info || l || 0 == d.doubleIndentSwitch ? h.align ? h.column + (l ? 0 : 1) : h.indented + (l ? 0 : e) : h.indented + (/^(?:case|default)\b/.test(c) ? e : 2 * e)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: h ? null : "/*",
            blockCommentEnd: h ? null : "*/",
            lineComment: h ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: h ? "json" : "javascript",
            jsonldMode: g,
            jsonMode: h,
            expressionAllowed: b,
            skipExpression: function(a) {
                var b = a.cc[a.cc.length - 1];
                (b == M || b == N) && a.cc.pop()
            }
        }
    }),
    a.registerHelper("wordChars", "javascript", /[\w$]/),
    a.defineMIME("text/javascript", "javascript"),
    a.defineMIME("text/ecmascript", "javascript"),
    a.defineMIME("application/javascript", "javascript"),
    a.defineMIME("application/x-javascript", "javascript"),
    a.defineMIME("application/ecmascript", "javascript"),
    a.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }),
    a.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }),
    a.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }),
    a.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }),
    a.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../xml/xml"), require("../meta")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../meta"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.defineMode("markdown", function(b, c) {
        function f(c) {
            if (a.findModeByName) {
                var d = a.findModeByName(c);
                d && (c = d.mime || d.mimes[0])
            }
            var e = a.getMode(b, c);
            return "null" == e.name ? null : e
        }
        function q(a, b, c) {
            return b.f = b.inline = c,
            c(a, b)
        }
        function r(a, b, c) {
            return b.f = b.block = c,
            c(a, b)
        }
        function s(a) {
            return !a || !/\S/.test(a.string)
        }
        function t(a) {
            return a.linkTitle = !1,
            a.em = !1,
            a.strong = !1,
            a.strikethrough = !1,
            a.quote = 0,
            a.indentedCode = !1,
            e && a.f == v && (a.f = A,
            a.block = u),
            a.trailingSpace = 0,
            a.trailingSpaceNewLine = !1,
            a.prevLine = a.thisLine,
            a.thisLine = null,
            null
        }
        function u(a, b) {
            var d = a.sol()
              , e = b.list !== !1
              , h = b.indentedCode;
            b.indentedCode = !1,
            e && (b.indentationDiff >= 0 ? (b.indentationDiff < 4 && (b.indentation -= b.indentationDiff),
            b.list = null) : b.indentation > 0 ? b.list = null : b.list = !1);
            var o = null;
            if (b.indentationDiff >= 4)
                return a.skipToEnd(),
                h || s(b.prevLine) ? (b.indentation -= 4,
                b.indentedCode = !0,
                g.code) : null;
            if (a.eatSpace())
                return null;
            if ((o = a.match(m)) && o[1].length <= 6)
                return b.header = o[1].length,
                c.highlightFormatting && (b.formatting = "header"),
                b.f = b.inline,
                y(b);
            if (!(s(b.prevLine) || b.quote || e || h) && (o = a.match(n)))
                return b.header = "=" == o[0].charAt(0) ? 1 : 2,
                c.highlightFormatting && (b.formatting = "header"),
                b.f = b.inline,
                y(b);
            if (a.eat(">"))
                return b.quote = d ? 1 : b.quote + 1,
                c.highlightFormatting && (b.formatting = "quote"),
                a.eatSpace(),
                y(b);
            if ("[" === a.peek())
                return q(a, b, E);
            if (a.match(i, !0))
                return b.hr = !0,
                g.hr;
            if ((s(b.prevLine) || e) && (a.match(j, !1) || a.match(k, !1))) {
                var r = null;
                for (a.match(j, !0) ? r = "ul" : (a.match(k, !0),
                r = "ol"),
                b.indentation = a.column() + a.current().length,
                b.list = !0; b.listStack && a.column() < b.listStack[b.listStack.length - 1]; )
                    b.listStack.pop();
                return b.listStack.push(b.indentation),
                c.taskLists && a.match(l, !1) && (b.taskList = !0),
                b.f = b.inline,
                c.highlightFormatting && (b.formatting = ["list", "list-" + r]),
                y(b)
            }
            return c.fencedCodeBlocks && (o = a.match(p, !0)) ? (b.fencedChars = o[1],
            b.localMode = f(o[2]),
            b.localMode && (b.localState = b.localMode.startState()),
            b.f = b.block = w,
            c.highlightFormatting && (b.formatting = "code-block"),
            b.code = -1,
            y(b)) : q(a, b, b.inline)
        }
        function v(b, c) {
            var f = d.token(b, c.htmlState);
            if (!e) {
                var g = a.innerMode(d, c.htmlState);
                ("xml" == g.mode.name && null === g.state.tagStart && !g.state.context && g.state.tokenize.isInText || c.md_inside && b.current().indexOf(">") > -1) && (c.f = A,
                c.block = u,
                c.htmlState = null)
            }
            return f
        }
        function w(a, b) {
            return b.fencedChars && a.match(b.fencedChars, !1) ? (b.localMode = b.localState = null,
            b.f = b.block = x,
            null) : b.localMode ? b.localMode.token(a, b.localState) : (a.skipToEnd(),
            g.code)
        }
        function x(a, b) {
            a.match(b.fencedChars),
            b.block = u,
            b.f = A,
            b.fencedChars = null,
            c.highlightFormatting && (b.formatting = "code-block"),
            b.code = 1;
            var d = y(b);
            return b.code = 0,
            d
        }
        function y(a) {
            var b = [];
            if (a.formatting) {
                b.push(g.formatting),
                "string" == typeof a.formatting && (a.formatting = [a.formatting]);
                for (var d = 0; d < a.formatting.length; d++)
                    b.push(g.formatting + "-" + a.formatting[d]),
                    "header" === a.formatting[d] && b.push(g.formatting + "-" + a.formatting[d] + "-" + a.header),
                    "quote" === a.formatting[d] && (!c.maxBlockquoteDepth || c.maxBlockquoteDepth >= a.quote ? b.push(g.formatting + "-" + a.formatting[d] + "-" + a.quote) : b.push("error"))
            }
            if (a.taskOpen)
                return b.push("meta"),
                b.length ? b.join(" ") : null;
            if (a.taskClosed)
                return b.push("property"),
                b.length ? b.join(" ") : null;
            if (a.linkHref ? b.push(g.linkHref, "url") : (a.strong && b.push(g.strong),
            a.em && b.push(g.em),
            a.strikethrough && b.push(g.strikethrough),
            a.linkText && b.push(g.linkText),
            a.code && b.push(g.code)),
            a.header && b.push(g.header, g.header + "-" + a.header),
            a.quote && (b.push(g.quote),
            !c.maxBlockquoteDepth || c.maxBlockquoteDepth >= a.quote ? b.push(g.quote + "-" + a.quote) : b.push(g.quote + "-" + c.maxBlockquoteDepth)),
            a.list !== !1) {
                var e = (a.listStack.length - 1) % 3;
                e ? 1 === e ? b.push(g.list2) : b.push(g.list3) : b.push(g.list1)
            }
            return a.trailingSpaceNewLine ? b.push("trailing-space-new-line") : a.trailingSpace && b.push("trailing-space-" + (a.trailingSpace % 2 ? "a" : "b")),
            b.length ? b.join(" ") : null
        }
        function z(a, b) {
            return a.match(o, !0) ? y(b) : void 0
        }
        function A(b, e) {
            var f = e.text(b, e);
            if ("undefined" != typeof f)
                return f;
            if (e.list)
                return e.list = null,
                y(e);
            if (e.taskList) {
                var h = "x" !== b.match(l, !0)[1];
                return h ? e.taskOpen = !0 : e.taskClosed = !0,
                c.highlightFormatting && (e.formatting = "task"),
                e.taskList = !1,
                y(e)
            }
            if (e.taskOpen = !1,
            e.taskClosed = !1,
            e.header && b.match(/^#+$/, !0))
                return c.highlightFormatting && (e.formatting = "header"),
                y(e);
            var i = b.sol()
              , j = b.next();
            if (e.linkTitle) {
                e.linkTitle = !1;
                var k = j;
                "(" === j && (k = ")"),
                k = (k + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                var m = "^\\s*(?:[^" + k + "\\\\]+|\\\\\\\\|\\\\.)" + k;
                if (b.match(new RegExp(m), !0))
                    return g.linkHref
            }
            if ("`" === j) {
                var n = e.formatting;
                c.highlightFormatting && (e.formatting = "code"),
                b.eatWhile("`");
                var o = b.current().length;
                if (0 == e.code)
                    return e.code = o,
                    y(e);
                if (o == e.code) {
                    var p = y(e);
                    return e.code = 0,
                    p
                }
                return e.formatting = n,
                y(e)
            }
            if (e.code)
                return y(e);
            if ("\\" === j && (b.next(),
            c.highlightFormatting)) {
                var q = y(e)
                  , s = g.formatting + "-escape";
                return q ? q + " " + s : s
            }
            if ("!" === j && b.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return b.match(/\[[^\]]*\]/),
                e.inline = e.f = C,
                g.image;
            if ("[" === j && b.match(/.*\](\(.*\)| ?\[.*\])/, !1))
                return e.linkText = !0,
                c.highlightFormatting && (e.formatting = "link"),
                y(e);
            if ("]" === j && e.linkText && b.match(/\(.*\)| ?\[.*\]/, !1)) {
                c.highlightFormatting && (e.formatting = "link");
                var q = y(e);
                return e.linkText = !1,
                e.inline = e.f = C,
                q
            }
            if ("<" === j && b.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
                e.f = e.inline = B,
                c.highlightFormatting && (e.formatting = "link");
                var q = y(e);
                return q ? q += " " : q = "",
                q + g.linkInline
            }
            if ("<" === j && b.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                e.f = e.inline = B,
                c.highlightFormatting && (e.formatting = "link");
                var q = y(e);
                return q ? q += " " : q = "",
                q + g.linkEmail
            }
            if ("<" === j && b.match(/^(!--|\w)/, !1)) {
                var t = b.string.indexOf(">", b.pos);
                if (-1 != t) {
                    var u = b.string.substring(b.start, t);
                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(u) && (e.md_inside = !0)
                }
                return b.backUp(1),
                e.htmlState = a.startState(d),
                r(b, e, v)
            }
            if ("<" === j && b.match(/^\/\w*?>/))
                return e.md_inside = !1,
                "tag";
            var w = !1;
            if (!c.underscoresBreakWords && "_" === j && "_" !== b.peek() && b.match(/(\w)/, !1)) {
                var x = b.pos - 2;
                if (x >= 0) {
                    var z = b.string.charAt(x);
                    "_" !== z && z.match(/(\w)/, !1) && (w = !0)
                }
            }
            if ("*" === j || "_" === j && !w)
                if (i && " " === b.peek())
                    ;
                else {
                    if (e.strong === j && b.eat(j)) {
                        c.highlightFormatting && (e.formatting = "strong");
                        var p = y(e);
                        return e.strong = !1,
                        p
                    }
                    if (!e.strong && b.eat(j))
                        return e.strong = j,
                        c.highlightFormatting && (e.formatting = "strong"),
                        y(e);
                    if (e.em === j) {
                        c.highlightFormatting && (e.formatting = "em");
                        var p = y(e);
                        return e.em = !1,
                        p
                    }
                    if (!e.em)
                        return e.em = j,
                        c.highlightFormatting && (e.formatting = "em"),
                        y(e)
                }
            else if (" " === j && (b.eat("*") || b.eat("_"))) {
                if (" " === b.peek())
                    return y(e);
                b.backUp(1)
            }
            if (c.strikethrough)
                if ("~" === j && b.eatWhile(j)) {
                    if (e.strikethrough) {
                        c.highlightFormatting && (e.formatting = "strikethrough");
                        var p = y(e);
                        return e.strikethrough = !1,
                        p
                    }
                    if (b.match(/^[^\s]/, !1))
                        return e.strikethrough = !0,
                        c.highlightFormatting && (e.formatting = "strikethrough"),
                        y(e)
                } else if (" " === j && b.match(/^~~/, !0)) {
                    if (" " === b.peek())
                        return y(e);
                    b.backUp(2)
                }
            return " " === j && (b.match(/ +$/, !1) ? e.trailingSpace++ : e.trailingSpace && (e.trailingSpaceNewLine = !0)),
            y(e)
        }
        function B(a, b) {
            var d = a.next();
            if (">" === d) {
                b.f = b.inline = A,
                c.highlightFormatting && (b.formatting = "link");
                var e = y(b);
                return e ? e += " " : e = "",
                e + g.linkInline
            }
            return a.match(/^[^>]+/, !0),
            g.linkInline
        }
        function C(a, b) {
            if (a.eatSpace())
                return null;
            var d = a.next();
            return "(" === d || "[" === d ? (b.f = b.inline = D("(" === d ? ")" : "]"),
            c.highlightFormatting && (b.formatting = "link-string"),
            b.linkHref = !0,
            y(b)) : "error"
        }
        function D(a) {
            return function(b, d) {
                var e = b.next();
                if (e === a) {
                    d.f = d.inline = A,
                    c.highlightFormatting && (d.formatting = "link-string");
                    var f = y(d);
                    return d.linkHref = !1,
                    f
                }
                return b.match(I(a), !0) && b.backUp(1),
                d.linkHref = !0,
                y(d)
            }
        }
        function E(a, b) {
            return a.match(/^([^\]\\]|\\.)*\]:/, !1) ? (b.f = F,
            a.next(),
            c.highlightFormatting && (b.formatting = "link"),
            b.linkText = !0,
            y(b)) : q(a, b, A)
        }
        function F(a, b) {
            if (a.match(/^\]:/, !0)) {
                b.f = b.inline = G,
                c.highlightFormatting && (b.formatting = "link");
                var d = y(b);
                return b.linkText = !1,
                d
            }
            return a.match(/^([^\]\\]|\\.)+/, !0),
            g.linkText
        }
        function G(a, b) {
            return a.eatSpace() ? null : (a.match(/^[^\s]+/, !0),
            void 0 === a.peek() ? b.linkTitle = !0 : a.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0),
            b.f = b.inline = A,
            g.linkHref + " url")
        }
        function I(a) {
            return H[a] || (a = (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"),
            H[a] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + a + ")")),
            H[a]
        }
        var d = a.getMode(b, "text/html")
          , e = "null" == d.name;
        void 0 === c.highlightFormatting && (c.highlightFormatting = !1),
        void 0 === c.maxBlockquoteDepth && (c.maxBlockquoteDepth = 0),
        void 0 === c.underscoresBreakWords && (c.underscoresBreakWords = !0),
        void 0 === c.taskLists && (c.taskLists = !1),
        void 0 === c.strikethrough && (c.strikethrough = !1),
        void 0 === c.tokenTypeOverrides && (c.tokenTypeOverrides = {});
        var g = {
            header: "header",
            code: "comment",
            quote: "quote",
            list1: "variable-2",
            list2: "variable-3",
            list3: "keyword",
            hr: "hr",
            image: "tag",
            formatting: "formatting",
            linkInline: "link",
            linkEmail: "link",
            linkText: "link",
            linkHref: "string",
            em: "em",
            strong: "strong",
            strikethrough: "strikethrough"
        };
        for (var h in g)
            g.hasOwnProperty(h) && c.tokenTypeOverrides[h] && (g[h] = c.tokenTypeOverrides[h]);
        var i = /^([*\-_])(?:\s*\1){2,}\s*$/
          , j = /^[*\-+]\s+/
          , k = /^[0-9]+([.)])\s+/
          , l = /^\[(x| )\](?=\s)/
          , m = c.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
          , n = /^ *(?:\={1,}|-{1,})\s*$/
          , o = /^[^#!\[\]*_\\<>` "'(~]+/
          , p = new RegExp("^(" + (c.fencedCodeBlocks === !0 ? "~~~+|```+" : c.fencedCodeBlocks) + ")[ \\t]*([\\w+#]*)")
          , H = []
          , J = {
            startState: function() {
                return {
                    f: u,
                    prevLine: null,
                    thisLine: null,
                    block: u,
                    htmlState: null,
                    indentation: 0,
                    inline: A,
                    text: z,
                    formatting: !1,
                    linkText: !1,
                    linkHref: !1,
                    linkTitle: !1,
                    code: 0,
                    em: !1,
                    strong: !1,
                    header: 0,
                    hr: !1,
                    taskList: !1,
                    list: !1,
                    listStack: [],
                    quote: 0,
                    trailingSpace: 0,
                    trailingSpaceNewLine: !1,
                    strikethrough: !1,
                    fencedChars: null
                }
            },
            copyState: function(b) {
                return {
                    f: b.f,
                    prevLine: b.prevLine,
                    thisLine: b.thisLine,
                    block: b.block,
                    htmlState: b.htmlState && a.copyState(d, b.htmlState),
                    indentation: b.indentation,
                    localMode: b.localMode,
                    localState: b.localMode ? a.copyState(b.localMode, b.localState) : null,
                    inline: b.inline,
                    text: b.text,
                    formatting: !1,
                    linkTitle: b.linkTitle,
                    code: b.code,
                    em: b.em,
                    strong: b.strong,
                    strikethrough: b.strikethrough,
                    header: b.header,
                    hr: b.hr,
                    taskList: b.taskList,
                    list: b.list,
                    listStack: b.listStack.slice(0),
                    quote: b.quote,
                    indentedCode: b.indentedCode,
                    trailingSpace: b.trailingSpace,
                    trailingSpaceNewLine: b.trailingSpaceNewLine,
                    md_inside: b.md_inside,
                    fencedChars: b.fencedChars
                }
            },
            token: function(a, b) {
                if (b.formatting = !1,
                a != b.thisLine) {
                    var c = b.header || b.hr;
                    if (b.header = 0,
                    b.hr = !1,
                    a.match(/^\s*$/, !0) || c) {
                        if (t(b),
                        !c)
                            return null;
                        b.prevLine = null
                    }
                    b.prevLine = b.thisLine,
                    b.thisLine = a,
                    b.taskList = !1,
                    b.trailingSpace = 0,
                    b.trailingSpaceNewLine = !1,
                    b.f = b.block;
                    var d = a.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length;
                    if (b.indentationDiff = Math.min(d - b.indentation, 4),
                    b.indentation = b.indentation + b.indentationDiff,
                    d > 0)
                        return null
                }
                return b.f(a, b)
            },
            innerMode: function(a) {
                return a.block == v ? {
                    state: a.htmlState,
                    mode: d
                } : a.localState ? {
                    state: a.localState,
                    mode: a.localMode
                } : {
                    state: a,
                    mode: J
                }
            },
            blankLine: t,
            getType: y,
            fold: "markdown"
        };
        return J
    }, "xml"),
    a.defineMIME("text/x-markdown", "markdown")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a) {
        for (var b = {}, c = a.split(" "), d = 0; d < c.length; ++d)
            b[c[d]] = !0;
        return b
    }
    function c(a, b, e) {
        return 0 == a.length ? d(b) : function(f, g) {
            for (var h = a[0], i = 0; i < h.length; i++)
                if (f.match(h[i][0]))
                    return g.tokenize = c(a.slice(1), b),
                    h[i][1];
            return g.tokenize = d(b, e),
            "string"
        }
    }
    function d(a, b) {
        return function(c, d) {
            return e(c, d, a, b)
        }
    }
    function e(a, b, d, e) {
        if (e !== !1 && a.match("${", !1) || a.match("{$", !1))
            return b.tokenize = null,
            "string";
        if (e !== !1 && a.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))
            return a.match("[", !1) && (b.tokenize = c([[["[", null]], [[/\d[\w\.]*/, "number"], [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"], [/[\w\$]+/, "variable"]], [["]", null]]], d, e)),
            a.match(/\-\>\w/, !1) && (b.tokenize = c([[["->", null]], [[/[\w]+/, "variable"]]], d, e)),
            "variable-2";
        for (var f = !1; !a.eol() && (f || e === !1 || !a.match("{$", !1) && !a.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)); ) {
            if (!f && a.match(d)) {
                b.tokenize = null,
                b.tokStack.pop(),
                b.tokStack.pop();
                break
            }
            f = "\\" == a.next() && !f
        }
        return "string"
    }
    var f = "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally"
      , g = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__"
      , h = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
    a.registerHelper("hintWords", "php", [f, g, h].join(" ").split(" ")),
    a.registerHelper("wordChars", "php", /[\w$]/);
    var i = {
        name: "clike",
        helperType: "php",
        keywords: b(f),
        blockKeywords: b("catch do else elseif for foreach if switch try while finally"),
        defKeywords: b("class function interface namespace trait"),
        atoms: b(g),
        builtin: b(h),
        multiLineStrings: !0,
        hooks: {
            $: function(a) {
                return a.eatWhile(/[\w\$_]/),
                "variable-2"
            },
            "<": function(a, b) {
                var c;
                if (c = a.match(/<<\s*/)) {
                    var e = a.eat(/['"]/);
                    a.eatWhile(/[\w\.]/);
                    var f = a.current().slice(c[0].length + (e ? 2 : 1));
                    if (e && a.eat(e),
                    f)
                        return (b.tokStack || (b.tokStack = [])).push(f, 0),
                        b.tokenize = d(f, "'" != e),
                        "string"
                }
                return !1
            },
            "#": function(a) {
                for (; !a.eol() && !a.match("?>", !1); )
                    a.next();
                return "comment"
            },
            "/": function(a) {
                if (a.eat("/")) {
                    for (; !a.eol() && !a.match("?>", !1); )
                        a.next();
                    return "comment"
                }
                return !1
            },
            '"': function(a, b) {
                return (b.tokStack || (b.tokStack = [])).push('"', 0),
                b.tokenize = d('"'),
                "string"
            },
            "{": function(a, b) {
                return b.tokStack && b.tokStack.length && b.tokStack[b.tokStack.length - 1]++,
                !1
            },
            "}": function(a, b) {
                return b.tokStack && b.tokStack.length > 0 && !--b.tokStack[b.tokStack.length - 1] && (b.tokenize = d(b.tokStack[b.tokStack.length - 2])),
                !1
            }
        }
    };
    a.defineMode("php", function(b, c) {
        function f(b, c) {
            var f = c.curMode == e;
            if (b.sol() && c.pending && '"' != c.pending && "'" != c.pending && (c.pending = null),
            f)
                return f && null == c.php.tokenize && b.match("?>") ? (c.curMode = d,
                c.curState = c.html,
                c.php.context.prev || (c.php = null),
                "meta") : e.token(b, c.curState);
            if (b.match(/^<\?\w*/))
                return c.curMode = e,
                c.php || (c.php = a.startState(e, d.indent(c.html, ""))),
                c.curState = c.php,
                "meta";
            if ('"' == c.pending || "'" == c.pending) {
                for (; !b.eol() && b.next() != c.pending; )
                    ;
                var g = "string"
            } else if (c.pending && b.pos < c.pending.end) {
                b.pos = c.pending.end;
                var g = c.pending.style
            } else
                var g = d.token(b, c.curState);
            c.pending && (c.pending = null);
            var j, h = b.current(), i = h.search(/<\?/);
            return -1 != i && ("string" == g && (j = h.match(/[\'\"]$/)) && !/\?>/.test(h) ? c.pending = j[0] : c.pending = {
                end: b.pos,
                style: g
            },
            b.backUp(h.length - i)),
            g
        }
        var d = a.getMode(b, "text/html")
          , e = a.getMode(b, i);
        return {
            startState: function() {
                var b = a.startState(d)
                  , f = c.startOpen ? a.startState(e) : null;
                return {
                    html: b,
                    php: f,
                    curMode: c.startOpen ? e : d,
                    curState: c.startOpen ? f : b,
                    pending: null
                }
            },
            copyState: function(b) {
                var i, c = b.html, f = a.copyState(d, c), g = b.php, h = g && a.copyState(e, g);
                return i = b.curMode == d ? f : h,
                {
                    html: f,
                    php: h,
                    curMode: b.curMode,
                    curState: i,
                    pending: b.pending
                }
            },
            token: f,
            indent: function(a, b) {
                return a.curMode != e && /^\s*<\//.test(b) || a.curMode == e && /^\?>/.test(b) ? d.indent(a.html, b) : a.curMode.indent(a.curState, b)
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: "//",
            innerMode: function(a) {
                return {
                    state: a.curState,
                    mode: a.curMode
                }
            }
        }
    }, "htmlmixed", "clike"),
    a.defineMIME("application/x-httpd-php", "php"),
    a.defineMIME("application/x-httpd-php-open", {
        name: "php",
        startOpen: !0
    }),
    a.defineMIME("text/x-php", i)
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.defineMode("sql", function(b, c) {
        function l(a, b) {
            var c = a.next();
            if (j[c]) {
                var l = j[c](a, b);
                if (l !== !1)
                    return l
            }
            if (1 == i.hexNumber && ("0" == c && a.match(/^[xX][0-9a-fA-F]+/) || ("x" == c || "X" == c) && a.match(/^'[0-9a-fA-F]+'/)))
                return "number";
            if (1 == i.binaryNumber && (("b" == c || "B" == c) && a.match(/^'[01]+'/) || "0" == c && a.match(/^b[01]+/)))
                return "number";
            if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)
                return a.match(/^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/),
                1 == i.decimallessFloat && a.eat("."),
                "number";
            if ("?" == c && (a.eatSpace() || a.eol() || a.eat(";")))
                return "variable-3";
            if ("'" == c || '"' == c && i.doubleQuote)
                return b.tokenize = m(c),
                b.tokenize(a, b);
            if ((1 == i.nCharCast && ("n" == c || "N" == c) || 1 == i.charsetCast && "_" == c && a.match(/[a-z][a-z0-9]*/i)) && ("'" == a.peek() || '"' == a.peek()))
                return "keyword";
            if (/^[\(\),\;\[\]]/.test(c))
                return null;
            if (i.commentSlashSlash && "/" == c && a.eat("/"))
                return a.skipToEnd(),
                "comment";
            if (i.commentHash && "#" == c || "-" == c && a.eat("-") && (!i.commentSpaceRequired || a.eat(" ")))
                return a.skipToEnd(),
                "comment";
            if ("/" == c && a.eat("*"))
                return b.tokenize = n,
                b.tokenize(a, b);
            if ("." != c) {
                if (h.test(c))
                    return a.eatWhile(h),
                    null;
                if ("{" == c && (a.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || a.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/)))
                    return "number";
                a.eatWhile(/^[_\w\d]/);
                var o = a.current().toLowerCase();
                return k.hasOwnProperty(o) && (a.match(/^( )+'[^']*'/) || a.match(/^( )+"[^"]*"/)) ? "number" : e.hasOwnProperty(o) ? "atom" : f.hasOwnProperty(o) ? "builtin" : g.hasOwnProperty(o) ? "keyword" : d.hasOwnProperty(o) ? "string-2" : null
            }
            return 1 == i.zerolessFloat && a.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : 1 == i.ODBCdotTable && a.match(/^[a-zA-Z_]+/) ? "variable-2" : void 0
        }
        function m(a) {
            return function(b, c) {
                for (var e, d = !1; null != (e = b.next()); ) {
                    if (e == a && !d) {
                        c.tokenize = l;
                        break
                    }
                    d = !d && "\\" == e
                }
                return "string"
            }
        }
        function n(a, b) {
            for (; ; ) {
                if (!a.skipTo("*")) {
                    a.skipToEnd();
                    break
                }
                if (a.next(),
                a.eat("/")) {
                    b.tokenize = l;
                    break
                }
            }
            return "comment"
        }
        function o(a, b, c) {
            b.context = {
                prev: b.context,
                indent: a.indentation(),
                col: a.column(),
                type: c
            }
        }
        function p(a) {
            a.indent = a.context.indent,
            a.context = a.context.prev
        }
        var d = c.client || {}
          , e = c.atoms || {
            "false": !0,
            "true": !0,
            "null": !0
        }
          , f = c.builtin || {}
          , g = c.keywords || {}
          , h = c.operatorChars || /^[*+\-%<>!=&|~^]/
          , i = c.support || {}
          , j = c.hooks || {}
          , k = c.dateSQL || {
            date: !0,
            time: !0,
            timestamp: !0
        };
        return {
            startState: function() {
                return {
                    tokenize: l,
                    context: null
                }
            },
            token: function(a, b) {
                if (a.sol() && b.context && null == b.context.align && (b.context.align = !1),
                a.eatSpace())
                    return null;
                var c = b.tokenize(a, b);
                if ("comment" == c)
                    return c;
                b.context && null == b.context.align && (b.context.align = !0);
                var d = a.current();
                return "(" == d ? o(a, b, ")") : "[" == d ? o(a, b, "]") : b.context && b.context.type == d && p(b),
                c
            },
            indent: function(c, d) {
                var e = c.context;
                if (!e)
                    return a.Pass;
                var f = d.charAt(0) == e.type;
                return e.align ? e.col + (f ? 0 : 1) : e.indent + (f ? 0 : b.indentUnit)
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: i.commentSlashSlash ? "//" : i.commentHash ? "#" : null
        }
    }),
    function() {
        function b(a) {
            for (var b; null != (b = a.next()); )
                if ("`" == b && !a.eat("`"))
                    return "variable-2";
            return a.backUp(a.current().length - 1),
            a.eatWhile(/\w/) ? "variable-2" : null
        }
        function c(a) {
            return a.eat("@") && (a.match(/^session\./),
            a.match(/^local\./),
            a.match(/^global\./)),
            a.eat("'") ? (a.match(/^.*'/),
            "variable-2") : a.eat('"') ? (a.match(/^.*"/),
            "variable-2") : a.eat("`") ? (a.match(/^.*`/),
            "variable-2") : a.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
        }
        function d(a) {
            return a.eat("N") ? "atom" : a.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
        }
        function f(a) {
            for (var b = {}, c = a.split(" "), d = 0; d < c.length; ++d)
                b[c[d]] = !0;
            return b
        }
        var e = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
        a.defineMIME("text/x-sql", {
            name: "sql",
            keywords: f(e + "begin"),
            builtin: f("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: f("date time timestamp"),
            support: f("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
        a.defineMIME("text/x-mssql", {
            name: "sql",
            client: f("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: f(e + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare"),
            builtin: f("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: f("date datetimeoffset datetime2 smalldatetime datetime time"),
            hooks: {
                "@": c
            }
        }),
        a.defineMIME("text/x-mysql", {
            name: "sql",
            client: f("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: f(e + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: f("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: f("date time timestamp"),
            support: f("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": c,
                "`": b,
                "\\": d
            }
        }),
        a.defineMIME("text/x-mariadb", {
            name: "sql",
            client: f("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: f(e + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: f("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: f("date time timestamp"),
            support: f("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": c,
                "`": b,
                "\\": d
            }
        }),
        a.defineMIME("text/x-cassandra", {
            name: "sql",
            client: {},
            keywords: f("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
            builtin: f("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
            atoms: f("false true infinity NaN"),
            operatorChars: /^[<>=]/,
            dateSQL: {},
            support: f("commentSlashSlash decimallessFloat"),
            hooks: {}
        }),
        a.defineMIME("text/x-plsql", {
            name: "sql",
            client: f("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
            keywords: f("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
            builtin: f("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
            operatorChars: /^[*+\-%<>!=~]/,
            dateSQL: f("date time timestamp"),
            support: f("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
        }),
        a.defineMIME("text/x-hive", {
            name: "sql",
            keywords: f("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
            builtin: f("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: f("date timestamp"),
            support: f("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
        a.defineMIME("text/x-pgsql", {
            name: "sql",
            client: f("source"),
            keywords: f(e + "a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat"),
            builtin: f("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
            atoms: f("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: f("date time timestamp"),
            support: f("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast commentHash commentSpaceRequired")
        })
    }()
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    var b = {
        autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0
        },
        implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0
        },
        contextGrabbers: {
            dd: {
                dd: !0,
                dt: !0
            },
            dt: {
                dd: !0,
                dt: !0
            },
            li: {
                li: !0
            },
            option: {
                option: !0,
                optgroup: !0
            },
            optgroup: {
                optgroup: !0
            },
            p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0
            },
            rp: {
                rp: !0,
                rt: !0
            },
            rt: {
                rp: !0,
                rt: !0
            },
            tbody: {
                tbody: !0,
                tfoot: !0
            },
            td: {
                td: !0,
                th: !0
            },
            tfoot: {
                tbody: !0
            },
            th: {
                td: !0,
                th: !0
            },
            thead: {
                tbody: !0,
                tfoot: !0
            },
            tr: {
                tr: !0
            }
        },
        doNotIndent: {
            pre: !0
        },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
    }
      , c = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        caseFold: !1
    };
    a.defineMode("xml", function(d, e) {
        function l(a, b) {
            function c(c) {
                return b.tokenize = c,
                c(a, b)
            }
            var d = a.next();
            if ("<" == d)
                return a.eat("!") ? a.eat("[") ? a.match("CDATA[") ? c(o("atom", "]]>")) : null : a.match("--") ? c(o("comment", "-->")) : a.match("DOCTYPE", !0, !0) ? (a.eatWhile(/[\w\._\-]/),
                c(p(1))) : null : a.eat("?") ? (a.eatWhile(/[\w\._\-]/),
                b.tokenize = o("meta", "?>"),
                "meta") : (j = a.eat("/") ? "closeTag" : "openTag",
                b.tokenize = m,
                "tag bracket");
            if ("&" == d) {
                var e;
                return e = a.eat("#") ? a.eat("x") ? a.eatWhile(/[a-fA-F\d]/) && a.eat(";") : a.eatWhile(/[\d]/) && a.eat(";") : a.eatWhile(/[\w\.\-:]/) && a.eat(";"),
                e ? "atom" : "error"
            }
            return a.eatWhile(/[^&<]/),
            null
        }
        function m(a, b) {
            var c = a.next();
            if (">" == c || "/" == c && a.eat(">"))
                return b.tokenize = l,
                j = ">" == c ? "endTag" : "selfcloseTag",
                "tag bracket";
            if ("=" == c)
                return j = "equals",
                null;
            if ("<" == c) {
                b.tokenize = l,
                b.state = t,
                b.tagName = b.tagStart = null;
                var d = b.tokenize(a, b);
                return d ? d + " tag error" : "tag error"
            }
            return /[\'\"]/.test(c) ? (b.tokenize = n(c),
            b.stringStartCol = a.column(),
            b.tokenize(a, b)) : (a.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),
            "word")
        }
        function n(a) {
            var b = function(b, c) {
                for (; !b.eol(); )
                    if (b.next() == a) {
                        c.tokenize = m;
                        break
                    }
                return "string"
            };
            return b.isInAttribute = !0,
            b
        }
        function o(a, b) {
            return function(c, d) {
                for (; !c.eol(); ) {
                    if (c.match(b)) {
                        d.tokenize = l;
                        break
                    }
                    c.next()
                }
                return a
            }
        }
        function p(a) {
            return function(b, c) {
                for (var d; null != (d = b.next()); ) {
                    if ("<" == d)
                        return c.tokenize = p(a + 1),
                        c.tokenize(b, c);
                    if (">" == d) {
                        if (1 == a) {
                            c.tokenize = l;
                            break
                        }
                        return c.tokenize = p(a - 1),
                        c.tokenize(b, c)
                    }
                }
                return "meta"
            }
        }
        function q(a, b, c) {
            this.prev = a.context,
            this.tagName = b,
            this.indent = a.indented,
            this.startOfLine = c,
            (g.doNotIndent.hasOwnProperty(b) || a.context && a.context.noIndent) && (this.noIndent = !0)
        }
        function r(a) {
            a.context && (a.context = a.context.prev)
        }
        function s(a, b) {
            for (var c; ; ) {
                if (!a.context)
                    return;
                if (c = a.context.tagName,
                !g.contextGrabbers.hasOwnProperty(c) || !g.contextGrabbers[c].hasOwnProperty(b))
                    return;
                r(a)
            }
        }
        function t(a, b, c) {
            return "openTag" == a ? (c.tagStart = b.column(),
            u) : "closeTag" == a ? v : t
        }
        function u(a, b, c) {
            return "word" == a ? (c.tagName = b.current(),
            k = "tag",
            y) : (k = "error",
            u)
        }
        function v(a, b, c) {
            if ("word" == a) {
                var d = b.current();
                return c.context && c.context.tagName != d && g.implicitlyClosed.hasOwnProperty(c.context.tagName) && r(c),
                c.context && c.context.tagName == d || g.matchClosing === !1 ? (k = "tag",
                w) : (k = "tag error",
                x)
            }
            return k = "error",
            x
        }
        function w(a, b, c) {
            return "endTag" != a ? (k = "error",
            w) : (r(c),
            t)
        }
        function x(a, b, c) {
            return k = "error",
            w(a, b, c)
        }
        function y(a, b, c) {
            if ("word" == a)
                return k = "attribute",
                z;
            if ("endTag" == a || "selfcloseTag" == a) {
                var d = c.tagName
                  , e = c.tagStart;
                return c.tagName = c.tagStart = null,
                "selfcloseTag" == a || g.autoSelfClosers.hasOwnProperty(d) ? s(c, d) : (s(c, d),
                c.context = new q(c,d,e == c.indented)),
                t
            }
            return k = "error",
            y
        }
        function z(a, b, c) {
            return "equals" == a ? A : (g.allowMissing || (k = "error"),
            y(a, b, c))
        }
        function A(a, b, c) {
            return "string" == a ? B : "word" == a && g.allowUnquoted ? (k = "string",
            y) : (k = "error",
            y(a, b, c))
        }
        function B(a, b, c) {
            return "string" == a ? B : y(a, b, c)
        }
        var f = d.indentUnit
          , g = {}
          , h = e.htmlMode ? b : c;
        for (var i in h)
            g[i] = h[i];
        for (var i in e)
            g[i] = e[i];
        var j, k;
        return l.isInText = !0,
        {
            startState: function(a) {
                var b = {
                    tokenize: l,
                    state: t,
                    indented: a || 0,
                    tagName: null,
                    tagStart: null,
                    context: null
                };
                return null != a && (b.baseIndent = a),
                b
            },
            token: function(a, b) {
                if (!b.tagName && a.sol() && (b.indented = a.indentation()),
                a.eatSpace())
                    return null;
                j = null;
                var c = b.tokenize(a, b);
                return (c || j) && "comment" != c && (k = null,
                b.state = b.state(j || c, a, b),
                k && (c = "error" == k ? c + " error" : k)),
                c
            },
            indent: function(b, c, d) {
                var e = b.context;
                if (b.tokenize.isInAttribute)
                    return b.tagStart == b.indented ? b.stringStartCol + 1 : b.indented + f;
                if (e && e.noIndent)
                    return a.Pass;
                if (b.tokenize != m && b.tokenize != l)
                    return d ? d.match(/^(\s*)/)[0].length : 0;
                if (b.tagName)
                    return g.multilineTagIndentPastTag !== !1 ? b.tagStart + b.tagName.length + 2 : b.tagStart + f * (g.multilineTagIndentFactor || 1);
                if (g.alignCDATA && /<!\[CDATA\[/.test(c))
                    return 0;
                var h = c && /^<(\/)?([\w_:\.-]*)/.exec(c);
                if (h && h[1])
                    for (; e; ) {
                        if (e.tagName == h[2]) {
                            e = e.prev;
                            break
                        }
                        if (!g.implicitlyClosed.hasOwnProperty(e.tagName))
                            break;
                        e = e.prev
                    }
                else if (h)
                    for (; e; ) {
                        var i = g.contextGrabbers[e.tagName];
                        if (!i || !i.hasOwnProperty(h[2]))
                            break;
                        e = e.prev
                    }
                for (; e && e.prev && !e.startOfLine; )
                    e = e.prev;
                return e ? e.indent + f : b.baseIndent || 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            configuration: g.htmlMode ? "html" : "xml",
            helperType: g.htmlMode ? "html" : "xml",
            skipAttribute: function(a) {
                a.state == A && (a.state = y)
            }
        }
    }),
    a.defineMIME("text/xml", "xml"),
    a.defineMIME("application/xml", "xml"),
    a.mimeModes.hasOwnProperty("text/html") || a.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.defineMode("xquery", function() {
        function b(a, b, c) {
            return b.tokenize = c,
            c(a, b);
        }
        function c(c, h) {
            var m = c.next()
              , o = !1
              , q = p(c);
            if ("<" == m) {
                if (c.match("!--", !0))
                    return b(c, h, i);
                if (c.match("![CDATA", !1))
                    return h.tokenize = j,
                    "tag";
                if (c.match("?", !1))
                    return b(c, h, k);
                var t = c.eat("/");
                c.eatSpace();
                for (var v, u = ""; v = c.eat(/[^\s\u00a0=<>\"\'\/?]/); )
                    u += v;
                return b(c, h, g(u, t))
            }
            if ("{" == m)
                return r(h, {
                    type: "codeblock"
                }),
                null;
            if ("}" == m)
                return s(h),
                null;
            if (l(h))
                return ">" == m ? "tag" : "/" == m && c.eat(">") ? (s(h),
                "tag") : "variable";
            if (/\d/.test(m))
                return c.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),
                "atom";
            if ("(" === m && c.eat(":"))
                return r(h, {
                    type: "comment"
                }),
                b(c, h, d);
            if (q || '"' !== m && "'" !== m) {
                if ("$" === m)
                    return b(c, h, f);
                if (":" === m && c.eat("="))
                    return "keyword";
                if ("(" === m)
                    return r(h, {
                        type: "paren"
                    }),
                    null;
                if (")" === m)
                    return s(h),
                    null;
                if ("[" === m)
                    return r(h, {
                        type: "bracket"
                    }),
                    null;
                if ("]" === m)
                    return s(h),
                    null;
                var w = a.propertyIsEnumerable(m) && a[m];
                if (q && '"' === m)
                    for (; '"' !== c.next(); )
                        ;
                if (q && "'" === m)
                    for (; "'" !== c.next(); )
                        ;
                w || c.eatWhile(/[\w\$_-]/);
                var x = c.eat(":");
                !c.eat(":") && x && c.eatWhile(/[\w\$_-]/),
                c.match(/^[ \t]*\(/, !1) && (o = !0);
                var y = c.current();
                return w = a.propertyIsEnumerable(y) && a[y],
                o && !w && (w = {
                    type: "function_call",
                    style: "variable def"
                }),
                n(h) ? (s(h),
                "variable") : (("element" == y || "attribute" == y || "axis_specifier" == w.type) && r(h, {
                    type: "xmlconstructor"
                }),
                w ? w.style : "variable")
            }
            return b(c, h, e(m))
        }
        function d(a, b) {
            for (var f, c = !1, d = !1, e = 0; f = a.next(); ) {
                if (")" == f && c) {
                    if (!(e > 0)) {
                        s(b);
                        break
                    }
                    e--
                } else
                    ":" == f && d && e++;
                c = ":" == f,
                d = "(" == f
            }
            return "comment"
        }
        function e(a, b) {
            return function(d, f) {
                var g;
                if (o(f) && d.current() == a)
                    return s(f),
                    b && (f.tokenize = b),
                    "string";
                if (r(f, {
                    type: "string",
                    name: a,
                    tokenize: e(a, b)
                }),
                d.match("{", !1) && m(f))
                    return f.tokenize = c,
                    "string";
                for (; g = d.next(); ) {
                    if (g == a) {
                        s(f),
                        b && (f.tokenize = b);
                        break
                    }
                    if (d.match("{", !1) && m(f))
                        return f.tokenize = c,
                        "string"
                }
                return "string"
            }
        }
        function f(a, b) {
            var d = /[\w\$_-]/;
            if (a.eat('"')) {
                for (; '"' !== a.next(); )
                    ;
                a.eat(":")
            } else
                a.eatWhile(d),
                a.match(":=", !1) || a.eat(":");
            return a.eatWhile(d),
            b.tokenize = c,
            "variable"
        }
        function g(a, b) {
            return function(d, e) {
                return d.eatSpace(),
                b && d.eat(">") ? (s(e),
                e.tokenize = c,
                "tag") : (d.eat("/") || r(e, {
                    type: "tag",
                    name: a,
                    tokenize: c
                }),
                d.eat(">") ? (e.tokenize = c,
                "tag") : (e.tokenize = h,
                "tag"))
            }
        }
        function h(a, d) {
            var f = a.next();
            return "/" == f && a.eat(">") ? (m(d) && s(d),
            l(d) && s(d),
            "tag") : ">" == f ? (m(d) && s(d),
            "tag") : "=" == f ? null : '"' == f || "'" == f ? b(a, d, e(f, h)) : (m(d) || r(d, {
                type: "attribute",
                tokenize: h
            }),
            a.eat(/[a-zA-Z_:]/),
            a.eatWhile(/[-a-zA-Z0-9_:.]/),
            a.eatSpace(),
            (a.match(">", !1) || a.match("/", !1)) && (s(d),
            d.tokenize = c),
            "attribute")
        }
        function i(a, b) {
            for (var d; d = a.next(); )
                if ("-" == d && a.match("->", !0))
                    return b.tokenize = c,
                    "comment"
        }
        function j(a, b) {
            for (var d; d = a.next(); )
                if ("]" == d && a.match("]", !0))
                    return b.tokenize = c,
                    "comment"
        }
        function k(a, b) {
            for (var d; d = a.next(); )
                if ("?" == d && a.match(">", !0))
                    return b.tokenize = c,
                    "comment meta"
        }
        function l(a) {
            return q(a, "tag")
        }
        function m(a) {
            return q(a, "attribute")
        }
        function n(a) {
            return q(a, "xmlconstructor")
        }
        function o(a) {
            return q(a, "string")
        }
        function p(a) {
            return '"' === a.current() ? a.match(/^[^\"]+\"\:/, !1) : "'" === a.current() ? a.match(/^[^\"]+\'\:/, !1) : !1
        }
        function q(a, b) {
            return a.stack.length && a.stack[a.stack.length - 1].type == b
        }
        function r(a, b) {
            a.stack.push(b)
        }
        function s(a) {
            a.stack.pop();
            var b = a.stack.length && a.stack[a.stack.length - 1].tokenize;
            a.tokenize = b || c
        }
        var a = function() {
            function a(a) {
                return {
                    type: a,
                    style: "keyword"
                }
            }
            for (var b = a("keyword a"), c = a("keyword b"), d = a("keyword c"), e = a("operator"), f = {
                type: "atom",
                style: "atom"
            }, g = {
                type: "punctuation",
                style: null
            }, h = {
                type: "axis_specifier",
                style: "qualifier"
            }, i = {
                "if": b,
                "switch": b,
                "while": b,
                "for": b,
                "else": c,
                then: c,
                "try": c,
                "finally": c,
                "catch": c,
                element: d,
                attribute: d,
                let: d,
                "implements": d,
                "import": d,
                module: d,
                namespace: d,
                "return": d,
                "super": d,
                "this": d,
                "throws": d,
                where: d,
                "private": d,
                ",": g,
                "null": f,
                "fn:false()": f,
                "fn:true()": f
            }, j = ["after", "ancestor", "ancestor-or-self", "and", "as", "ascending", "assert", "attribute", "before", "by", "case", "cast", "child", "comment", "declare", "default", "define", "descendant", "descendant-or-self", "descending", "document", "document-node", "element", "else", "eq", "every", "except", "external", "following", "following-sibling", "follows", "for", "function", "if", "import", "in", "instance", "intersect", "item", "let", "module", "namespace", "node", "node", "of", "only", "or", "order", "parent", "precedes", "preceding", "preceding-sibling", "processing-instruction", "ref", "return", "returns", "satisfies", "schema", "schema-element", "self", "some", "sortby", "stable", "text", "then", "to", "treat", "typeswitch", "union", "variable", "version", "where", "xquery", "empty-sequence"], k = 0, l = j.length; l > k; k++)
                i[j[k]] = a(j[k]);
            for (var m = ["xs:string", "xs:float", "xs:decimal", "xs:double", "xs:integer", "xs:boolean", "xs:date", "xs:dateTime", "xs:time", "xs:duration", "xs:dayTimeDuration", "xs:time", "xs:yearMonthDuration", "numeric", "xs:hexBinary", "xs:base64Binary", "xs:anyURI", "xs:QName", "xs:byte", "xs:boolean", "xs:anyURI", "xf:yearMonthDuration"], k = 0, l = m.length; l > k; k++)
                i[m[k]] = f;
            for (var n = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"], k = 0, l = n.length; l > k; k++)
                i[n[k]] = e;
            for (var o = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::"], k = 0, l = o.length; l > k; k++)
                i[o[k]] = h;
            return i
        }();
        return {
            startState: function() {
                return {
                    tokenize: c,
                    cc: [],
                    stack: []
                }
            },
            token: function(a, b) {
                if (a.eatSpace())
                    return null;
                var c = b.tokenize(a, b);
                return c
            },
            blockCommentStart: "(:",
            blockCommentEnd: ":)"
        }
    }),
    a.defineMIME("application/xquery", "xquery")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.defineMode("yaml", function() {
        var a = ["true", "false", "on", "off", "yes", "no"]
          , b = new RegExp("\\b((" + a.join(")|(") + "))$","i");
        return {
            token: function(a, c) {
                var d = a.peek()
                  , e = c.escaped;
                if (c.escaped = !1,
                "#" == d && (0 == a.pos || /\s/.test(a.string.charAt(a.pos - 1))))
                    return a.skipToEnd(),
                    "comment";
                if (a.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))
                    return "string";
                if (c.literal && a.indentation() > c.keyCol)
                    return a.skipToEnd(),
                    "string";
                if (c.literal && (c.literal = !1),
                a.sol()) {
                    if (c.keyCol = 0,
                    c.pair = !1,
                    c.pairStart = !1,
                    a.match(/---/))
                        return "def";
                    if (a.match(/\.\.\./))
                        return "def";
                    if (a.match(/\s*-\s+/))
                        return "meta"
                }
                if (a.match(/^(\{|\}|\[|\])/))
                    return "{" == d ? c.inlinePairs++ : "}" == d ? c.inlinePairs-- : "[" == d ? c.inlineList++ : c.inlineList--,
                    "meta";
                if (c.inlineList > 0 && !e && "," == d)
                    return a.next(),
                    "meta";
                if (c.inlinePairs > 0 && !e && "," == d)
                    return c.keyCol = 0,
                    c.pair = !1,
                    c.pairStart = !1,
                    a.next(),
                    "meta";
                if (c.pairStart) {
                    if (a.match(/^\s*(\||\>)\s*/))
                        return c.literal = !0,
                        "meta";
                    if (a.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))
                        return "variable-2";
                    if (0 == c.inlinePairs && a.match(/^\s*-?[0-9\.\,]+\s?$/))
                        return "number";
                    if (c.inlinePairs > 0 && a.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))
                        return "number";
                    if (a.match(b))
                        return "keyword"
                }
                return !c.pair && a.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/) ? (c.pair = !0,
                c.keyCol = a.indentation(),
                "atom") : c.pair && a.match(/^:\s*/) ? (c.pairStart = !0,
                "meta") : (c.pairStart = !1,
                c.escaped = "\\" == d,
                a.next(),
                null)
            },
            startState: function() {
                return {
                    pair: !1,
                    pairStart: !1,
                    keyCol: 0,
                    inlinePairs: 0,
                    inlineList: 0,
                    literal: !1,
                    escaped: !1
                }
            }
        }
    }),
    a.defineMIME("text/x-yaml", "yaml")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function e(a) {
        for (var e = 0; e < a.state.activeLines.length; e++)
            a.removeLineClass(a.state.activeLines[e], "wrap", b),
            a.removeLineClass(a.state.activeLines[e], "background", c),
            a.removeLineClass(a.state.activeLines[e], "gutter", d)
    }
    function f(a, b) {
        if (a.length != b.length)
            return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] != b[c])
                return !1;
        return !0
    }
    function g(a, g) {
        for (var h = [], i = 0; i < g.length; i++) {
            var j = g[i];
            if (j.empty()) {
                var k = a.getLineHandleVisualStart(j.head.line);
                h[h.length - 1] != k && h.push(k)
            }
        }
        f(a.state.activeLines, h) || a.operation(function() {
            e(a);
            for (var f = 0; f < h.length; f++)
                a.addLineClass(h[f], "wrap", b),
                a.addLineClass(h[f], "background", c),
                a.addLineClass(h[f], "gutter", d);
            a.state.activeLines = h
        })
    }
    function h(a, b) {
        g(a, b.ranges)
    }
    var b = "CodeMirror-activeline"
      , c = "CodeMirror-activeline-background"
      , d = "CodeMirror-activeline-gutter";
    a.defineOption("styleActiveLine", !1, function(b, c, d) {
        var f = d && d != a.Init;
        c && !f ? (b.state.activeLines = [],
        g(b, b.listSelections()),
        b.on("beforeSelectionChange", h)) : !c && f && (b.off("beforeSelectionChange", h),
        e(b),
        delete b.state.activeLines)
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    var b = /[\w$]+/
      , c = 500;
    a.registerHelper("hint", "anyword", function(d, e) {
        for (var f = e && e.word || b, g = e && e.range || c, h = d.getCursor(), i = d.getLine(h.line), j = h.ch, k = j; k && f.test(i.charAt(k - 1)); )
            --k;
        for (var l = k != j && i.slice(k, j), m = e && e.list || [], n = {}, o = new RegExp(f.source,"g"), p = -1; 1 >= p; p += 2)
            for (var q = h.line, r = Math.min(Math.max(q + p * g, d.firstLine()), d.lastLine()) + p; q != r; q += p)
                for (var t, s = d.getLine(q); t = o.exec(s); )
                    (q != h.line || t[0] !== l) && (l && 0 != t[0].lastIndexOf(l, 0) || Object.prototype.hasOwnProperty.call(n, t[0]) || (n[t[0]] = !0,
                    m.push(t[0])));
        return {
            list: m,
            from: a.Pos(h.line, k),
            to: a.Pos(h.line, j)
        }
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    function d(a, c) {
        return "pairs" == c && "string" == typeof a ? a : "object" == typeof a && null != a[c] ? a[c] : b[c]
    }
    function h(a) {
        return function(b) {
            return m(b, a)
        }
    }
    function i(a) {
        var b = a.state.closeBrackets;
        if (!b)
            return null;
        var c = a.getModeAt(a.getCursor());
        return c.closeBrackets || b
    }
    function j(b) {
        var e = i(b);
        if (!e || b.getOption("disableInput"))
            return a.Pass;
        for (var f = d(e, "pairs"), g = b.listSelections(), h = 0; h < g.length; h++) {
            if (!g[h].empty())
                return a.Pass;
            var j = o(b, g[h].head);
            if (!j || f.indexOf(j) % 2 != 0)
                return a.Pass
        }
        for (var h = g.length - 1; h >= 0; h--) {
            var k = g[h].head;
            b.replaceRange("", c(k.line, k.ch - 1), c(k.line, k.ch + 1), "+delete")
        }
    }
    function k(b) {
        var c = i(b)
          , e = c && d(c, "explode");
        if (!e || b.getOption("disableInput"))
            return a.Pass;
        for (var f = b.listSelections(), g = 0; g < f.length; g++) {
            if (!f[g].empty())
                return a.Pass;
            var h = o(b, f[g].head);
            if (!h || e.indexOf(h) % 2 != 0)
                return a.Pass
        }
        b.operation(function() {
            b.replaceSelection("\n\n", null),
            b.execCommand("goCharLeft"),
            f = b.listSelections();
            for (var a = 0; a < f.length; a++) {
                var c = f[a].head.line;
                b.indentLine(c, null, !0),
                b.indentLine(c + 1, null, !0)
            }
        })
    }
    function l(b) {
        var d = a.cmpPos(b.anchor, b.head) > 0;
        return {
            anchor: new c(b.anchor.line,b.anchor.ch + (d ? -1 : 1)),
            head: new c(b.head.line,b.head.ch + (d ? 1 : -1))
        }
    }
    function m(b, e) {
        var f = i(b);
        if (!f || b.getOption("disableInput"))
            return a.Pass;
        var g = d(f, "pairs")
          , h = g.indexOf(e);
        if (-1 == h)
            return a.Pass;
        for (var q, r, j = d(f, "triples"), k = g.charAt(h + 1) == e, m = b.listSelections(), o = h % 2 == 0, s = 0; s < m.length; s++) {
            var v, t = m[s], u = t.head, r = b.getRange(u, c(u.line, u.ch + 1));
            if (o && !t.empty())
                v = "surround";
            else if (!k && o || r != e)
                if (k && u.ch > 1 && j.indexOf(e) >= 0 && b.getRange(c(u.line, u.ch - 2), u) == e + e && (u.ch <= 2 || b.getRange(c(u.line, u.ch - 3), c(u.line, u.ch - 2)) != e))
                    v = "addFour";
                else if (k) {
                    if (a.isWordChar(r) || !p(b, u, e))
                        return a.Pass;
                    v = "both"
                } else {
                    if (!o || b.getLine(u.line).length != u.ch && !n(r, g) && !/\s/.test(r))
                        return a.Pass;
                    v = "both"
                }
            else
                v = j.indexOf(e) >= 0 && b.getRange(u, c(u.line, u.ch + 3)) == e + e + e ? "skipThree" : "skip";
            if (q) {
                if (q != v)
                    return a.Pass
            } else
                q = v
        }
        var w = h % 2 ? g.charAt(h - 1) : e
          , x = h % 2 ? e : g.charAt(h + 1);
        b.operation(function() {
            if ("skip" == q)
                b.execCommand("goCharRight");
            else if ("skipThree" == q)
                for (var a = 0; 3 > a; a++)
                    b.execCommand("goCharRight");
            else if ("surround" == q) {
                for (var c = b.getSelections(), a = 0; a < c.length; a++)
                    c[a] = w + c[a] + x;
                b.replaceSelections(c, "around"),
                c = b.listSelections().slice();
                for (var a = 0; a < c.length; a++)
                    c[a] = l(c[a]);
                b.setSelections(c)
            } else
                "both" == q ? (b.replaceSelection(w + x, null),
                b.triggerElectric(w + x),
                b.execCommand("goCharLeft")) : "addFour" == q && (b.replaceSelection(w + w + w + w, "before"),
                b.execCommand("goCharRight"))
        })
    }
    function n(a, b) {
        var c = b.lastIndexOf(a);
        return c > -1 && c % 2 == 1
    }
    function o(a, b) {
        var d = a.getRange(c(b.line, b.ch - 1), c(b.line, b.ch + 1));
        return 2 == d.length ? d : null
    }
    function p(b, c, d) {
        var e = b.getLine(c.line)
          , f = b.getTokenAt(c);
        if (/\bstring2?\b/.test(f.type))
            return !1;
        var g = new a.StringStream(e.slice(0, c.ch) + d + e.slice(c.ch),4);
        for (g.pos = g.start = f.start; ; ) {
            var h = b.getMode().token(g, f.state);
            if (g.pos >= c.ch + 1)
                return /\bstring2?\b/.test(h);
            g.start = g.pos
        }
    }
    var b = {
        pairs: "()[]{}''\"\"",
        triples: "",
        explode: "[]{}"
    }
      , c = a.Pos;
    a.defineOption("autoCloseBrackets", !1, function(b, c, d) {
        d && d != a.Init && (b.removeKeyMap(f),
        b.state.closeBrackets = null),
        c && (b.state.closeBrackets = c,
        b.addKeyMap(f))
    });
    for (var e = b.pairs + "`", f = {
        Backspace: j,
        Enter: k
    }, g = 0; g < e.length; g++)
        f["'" + e.charAt(g) + "'"] = h(e.charAt(g))
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../fold/xml-fold")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../fold/xml-fold"], a) : a(CodeMirror)
}(function(a) {
    function d(d) {
        if (d.getOption("disableInput"))
            return a.Pass;
        for (var e = d.listSelections(), f = [], i = 0; i < e.length; i++) {
            if (!e[i].empty())
                return a.Pass;
            var j = e[i].head
              , k = d.getTokenAt(j)
              , l = a.innerMode(d.getMode(), k.state)
              , m = l.state;
            if ("xml" != l.mode.name || !m.tagName)
                return a.Pass;
            var n = d.getOption("autoCloseTags")
              , o = "html" == l.mode.configuration
              , p = "object" == typeof n && n.dontCloseTags || o && b
              , q = "object" == typeof n && n.indentTags || o && c
              , r = m.tagName;
            k.end > j.ch && (r = r.slice(0, r.length - k.end + j.ch));
            var s = r.toLowerCase();
            if (!r || "string" == k.type && (k.end != j.ch || !/[\"\']/.test(k.string.charAt(k.string.length - 1)) || 1 == k.string.length) || "tag" == k.type && "closeTag" == m.type || k.string.indexOf("/") == k.string.length - 1 || p && g(p, s) > -1 || h(d, r, j, m, !0))
                return a.Pass;
            var t = q && g(q, s) > -1;
            f[i] = {
                indent: t,
                text: ">" + (t ? "\n\n" : "") + "</" + r + ">",
                newPos: t ? a.Pos(j.line + 1, 0) : a.Pos(j.line, j.ch + 1)
            }
        }
        for (var i = e.length - 1; i >= 0; i--) {
            var u = f[i];
            d.replaceRange(u.text, e[i].head, e[i].anchor, "+insert");
            var v = d.listSelections().slice(0);
            v[i] = {
                head: u.newPos,
                anchor: u.newPos
            },
            d.setSelections(v),
            u.indent && (d.indentLine(u.newPos.line, null, !0),
            d.indentLine(u.newPos.line + 1, null, !0))
        }
    }
    function e(b, c) {
        for (var d = b.listSelections(), e = [], f = c ? "/" : "</", g = 0; g < d.length; g++) {
            if (!d[g].empty())
                return a.Pass;
            var i = d[g].head
              , j = b.getTokenAt(i)
              , k = a.innerMode(b.getMode(), j.state)
              , l = k.state;
            if (c && ("string" == j.type || "<" != j.string.charAt(0) || j.start != i.ch - 1))
                return a.Pass;
            var m;
            if ("xml" != k.mode.name)
                if ("htmlmixed" == b.getMode().name && "javascript" == k.mode.name)
                    m = f + "script";
                else {
                    if ("htmlmixed" != b.getMode().name || "css" != k.mode.name)
                        return a.Pass;
                    m = f + "style"
                }
            else {
                if (!l.context || !l.context.tagName || h(b, l.context.tagName, i, l))
                    return a.Pass;
                m = f + l.context.tagName
            }
            ">" != b.getLine(i.line).charAt(j.end) && (m += ">"),
            e[g] = m
        }
        b.replaceSelections(e),
        d = b.listSelections();
        for (var g = 0; g < d.length; g++)
            (g == d.length - 1 || d[g].head.line < d[g + 1].head.line) && b.indentLine(d[g].head.line)
    }
    function f(b) {
        return b.getOption("disableInput") ? a.Pass : e(b, !0)
    }
    function g(a, b) {
        if (a.indexOf)
            return a.indexOf(b);
        for (var c = 0, d = a.length; d > c; ++c)
            if (a[c] == b)
                return c;
        return -1
    }
    function h(b, c, d, e, f) {
        if (!a.scanForClosingTag)
            return !1;
        var g = Math.min(b.lastLine() + 1, d.line + 500)
          , h = a.scanForClosingTag(b, d, null, g);
        if (!h || h.tag != c)
            return !1;
        for (var i = e.context, j = f ? 1 : 0; i && i.tagName == c; i = i.prev)
            ++j;
        d = h.to;
        for (var k = 1; j > k; k++) {
            var l = a.scanForClosingTag(b, d, null, g);
            if (!l || l.tag != c)
                return !1;
            d = l.to
        }
        return !0
    }
    a.defineOption("autoCloseTags", !1, function(b, c, e) {
        if (e != a.Init && e && b.removeKeyMap("autoCloseTags"),
        c) {
            var g = {
                name: "autoCloseTags"
            };
            ("object" != typeof c || c.whenClosing) && (g["'/'"] = function(a) {
                return f(a)
            }
            ),
            ("object" != typeof c || c.whenOpening) && (g["'>'"] = function(a) {
                return d(a)
            }
            ),
            b.addKeyMap(g)
        }
    });
    var b = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
      , c = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];
    a.commands.closeTag = function(a) {
        return e(a)
    }
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../../mode/css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../../mode/css/css"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    var b = {
        link: 1,
        visited: 1,
        active: 1,
        hover: 1,
        focus: 1,
        "first-letter": 1,
        "first-line": 1,
        "first-child": 1,
        before: 1,
        after: 1,
        lang: 1
    };
    a.registerHelper("hint", "css", function(c) {
        function l(a) {
            for (var b in a)
                i && 0 != b.lastIndexOf(i, 0) || k.push(b)
        }
        var d = c.getCursor()
          , e = c.getTokenAt(d)
          , f = a.innerMode(c.getMode(), e.state);
        if ("css" == f.mode.name) {
            if ("keyword" == e.type && 0 == "!important".indexOf(e.string))
                return {
                    list: ["!important"],
                    from: a.Pos(d.line, e.start),
                    to: a.Pos(d.line, e.end)
                };
            var g = e.start
              , h = d.ch
              , i = e.string.slice(0, h - g);
            /[^\w$_-]/.test(i) && (i = "",
            g = h = d.ch);
            var j = a.resolveMode("text/css")
              , k = []
              , m = f.state.state;
            return "pseudo" == m || "variable-3" == e.type ? l(b) : "block" == m || "maybeprop" == m ? l(j.propertyKeywords) : "prop" == m || "parens" == m || "at" == m || "params" == m ? (l(j.valueKeywords),
            l(j.colorKeywords)) : ("media" == m || "media_parens" == m) && (l(j.mediaTypes),
            l(j.mediaFeatures)),
            k.length ? {
                list: k,
                from: a.Pos(d.line, g),
                to: a.Pos(d.line, h)
            } : void 0
        }
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function c(a, b, c) {
        for (var d = c.paragraphStart || a.getHelper(b, "paragraphStart"), e = b.line, f = a.firstLine(); e > f; --e) {
            var g = a.getLine(e);
            if (d && d.test(g))
                break;
            if (!/\S/.test(g)) {
                ++e;
                break
            }
        }
        for (var h = c.paragraphEnd || a.getHelper(b, "paragraphEnd"), i = b.line + 1, j = a.lastLine(); j >= i; ++i) {
            var g = a.getLine(i);
            if (h && h.test(g)) {
                ++i;
                break
            }
            if (!/\S/.test(g))
                break
        }
        return {
            from: e,
            to: i
        }
    }
    function d(a, b, c, d) {
        for (var e = b; e > 0 && !c.test(a.slice(e - 1, e + 1)); --e)
            ;
        for (var f = !0; ; f = !1) {
            var g = e;
            if (d)
                for (; " " == a.charAt(g - 1); )
                    --g;
            if (0 != g || !f)
                return {
                    from: g,
                    to: e
                };
            e = b
        }
    }
    function e(c, e, f, g) {
        e = c.clipPos(e),
        f = c.clipPos(f);
        var h = g.column || 80
          , i = g.wrapOn || /\s\S|-[^\.\d]/
          , j = g.killTrailingSpace !== !1
          , k = []
          , l = ""
          , m = e.line
          , n = c.getRange(e, f, !1);
        if (!n.length)
            return null;
        for (var o = n[0].match(/^[ \t]*/)[0], p = 0; p < n.length; ++p) {
            var q = n[p]
              , r = l.length
              , s = 0;
            l && q && !i.test(l.charAt(l.length - 1) + q.charAt(0)) && (l += " ",
            s = 1);
            var t = "";
            if (p && (t = q.match(/^\s*/)[0],
            q = q.slice(t.length)),
            l += q,
            p) {
                var u = l.length > h && o == t && d(l, h, i, j);
                u && u.from == r && u.to == r + s ? (l = o + q,
                ++m) : k.push({
                    text: [s ? " " : ""],
                    from: b(m, r),
                    to: b(m + 1, t.length)
                })
            }
            for (; l.length > h; ) {
                var v = d(l, h, i, j);
                k.push({
                    text: ["", o],
                    from: b(m, v.from),
                    to: b(m, v.to)
                }),
                l = o + l.slice(v.to),
                ++m
            }
        }
        return k.length && c.operation(function() {
            for (var b = 0; b < k.length; ++b) {
                var d = k[b];
                (d.text || a.cmpPos(d.from, d.to)) && c.replaceRange(d.text, d.from, d.to)
            }
        }),
        k.length ? {
            from: k[0].from,
            to: a.changeEnd(k[k.length - 1])
        } : null
    }
    var b = a.Pos;
    a.defineExtension("wrapParagraph", function(a, d) {
        d = d || {},
        a || (a = this.getCursor());
        var f = c(this, a, d);
        return e(this, b(f.from, 0), b(f.to - 1), d)
    }),
    a.commands.wrapLines = function(a) {
        a.operation(function() {
            for (var d = a.listSelections(), f = a.lastLine() + 1, g = d.length - 1; g >= 0; g--) {
                var i, h = d[g];
                if (h.empty()) {
                    var j = c(a, h.head, {});
                    i = {
                        from: b(j.from, 0),
                        to: b(j.to - 1)
                    }
                } else
                    i = {
                        from: h.from(),
                        to: h.to()
                    };
                i.to.line >= f || (f = i.from.line,
                e(a, i.from, i.to, {}))
            }
        })
    }
    ,
    a.defineExtension("wrapRange", function(a, b, c) {
        return e(this, a, b, c || {})
    }),
    a.defineExtension("wrapParagraphsInRange", function(a, d, f) {
        f = f || {};
        for (var g = this, h = [], i = a.line; i <= d.line; ) {
            var j = c(g, b(i, 0), f);
            h.push(j),
            i = j.to
        }
        var k = !1;
        return h.length && g.operation(function() {
            for (var a = h.length - 1; a >= 0; --a)
                k = k || e(g, b(h[a].from, 0), b(h[a].to - 1), f)
        }),
        k
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("./xml-hint")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./xml-hint"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function k(a) {
        for (var b in j)
            j.hasOwnProperty(b) && (a.attrs[b] = j[b])
    }
    function m(b, c) {
        var d = {
            schemaInfo: i
        };
        if (c)
            for (var e in c)
                d[e] = c[e];
        return a.hint.xml(b, d)
    }
    var b = "ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" ")
      , c = ["_blank", "_self", "_top", "_parent"]
      , d = ["ascii", "utf-8", "utf-16", "latin1", "latin1"]
      , e = ["get", "post", "put", "delete"]
      , f = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]
      , g = ["all", "screen", "print", "embossed", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "speech", "3d-glasses", "resolution [>][<][=] [X]", "device-aspect-ratio: X/Y", "orientation:portrait", "orientation:landscape", "device-height: [X]", "device-width: [X]"]
      , h = {
        attrs: {}
    }
      , i = {
        a: {
            attrs: {
                href: null,
                ping: null,
                type: null,
                media: g,
                target: c,
                hreflang: b
            }
        },
        abbr: h,
        acronym: h,
        address: h,
        applet: h,
        area: {
            attrs: {
                alt: null,
                coords: null,
                href: null,
                target: null,
                ping: null,
                media: g,
                hreflang: b,
                type: null,
                shape: ["default", "rect", "circle", "poly"]
            }
        },
        article: h,
        aside: h,
        audio: {
            attrs: {
                src: null,
                mediagroup: null,
                crossorigin: ["anonymous", "use-credentials"],
                preload: ["none", "metadata", "auto"],
                autoplay: ["", "autoplay"],
                loop: ["", "loop"],
                controls: ["", "controls"]
            }
        },
        b: h,
        base: {
            attrs: {
                href: null,
                target: c
            }
        },
        basefont: h,
        bdi: h,
        bdo: h,
        big: h,
        blockquote: {
            attrs: {
                cite: null
            }
        },
        body: h,
        br: h,
        button: {
            attrs: {
                form: null,
                formaction: null,
                name: null,
                value: null,
                autofocus: ["", "autofocus"],
                disabled: ["", "autofocus"],
                formenctype: f,
                formmethod: e,
                formnovalidate: ["", "novalidate"],
                formtarget: c,
                type: ["submit", "reset", "button"]
            }
        },
        canvas: {
            attrs: {
                width: null,
                height: null
            }
        },
        caption: h,
        center: h,
        cite: h,
        code: h,
        col: {
            attrs: {
                span: null
            }
        },
        colgroup: {
            attrs: {
                span: null
            }
        },
        command: {
            attrs: {
                type: ["command", "checkbox", "radio"],
                label: null,
                icon: null,
                radiogroup: null,
                command: null,
                title: null,
                disabled: ["", "disabled"],
                checked: ["", "checked"]
            }
        },
        data: {
            attrs: {
                value: null
            }
        },
        datagrid: {
            attrs: {
                disabled: ["", "disabled"],
                multiple: ["", "multiple"]
            }
        },
        datalist: {
            attrs: {
                data: null
            }
        },
        dd: h,
        del: {
            attrs: {
                cite: null,
                datetime: null
            }
        },
        details: {
            attrs: {
                open: ["", "open"]
            }
        },
        dfn: h,
        dir: h,
        div: h,
        dl: h,
        dt: h,
        em: h,
        embed: {
            attrs: {
                src: null,
                type: null,
                width: null,
                height: null
            }
        },
        eventsource: {
            attrs: {
                src: null
            }
        },
        fieldset: {
            attrs: {
                disabled: ["", "disabled"],
                form: null,
                name: null
            }
        },
        figcaption: h,
        figure: h,
        font: h,
        footer: h,
        form: {
            attrs: {
                action: null,
                name: null,
                "accept-charset": d,
                autocomplete: ["on", "off"],
                enctype: f,
                method: e,
                novalidate: ["", "novalidate"],
                target: c
            }
        },
        frame: h,
        frameset: h,
        h1: h,
        h2: h,
        h3: h,
        h4: h,
        h5: h,
        h6: h,
        head: {
            attrs: {},
            children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
        },
        header: h,
        hgroup: h,
        hr: h,
        html: {
            attrs: {
                manifest: null
            },
            children: ["head", "body"]
        },
        i: h,
        iframe: {
            attrs: {
                src: null,
                srcdoc: null,
                name: null,
                width: null,
                height: null,
                sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
                seamless: ["", "seamless"]
            }
        },
        img: {
            attrs: {
                alt: null,
                src: null,
                ismap: null,
                usemap: null,
                width: null,
                height: null,
                crossorigin: ["anonymous", "use-credentials"]
            }
        },
        input: {
            attrs: {
                alt: null,
                dirname: null,
                form: null,
                formaction: null,
                height: null,
                list: null,
                max: null,
                maxlength: null,
                min: null,
                name: null,
                pattern: null,
                placeholder: null,
                size: null,
                src: null,
                step: null,
                value: null,
                width: null,
                accept: ["audio/*", "video/*", "image/*"],
                autocomplete: ["on", "off"],
                autofocus: ["", "autofocus"],
                checked: ["", "checked"],
                disabled: ["", "disabled"],
                formenctype: f,
                formmethod: e,
                formnovalidate: ["", "novalidate"],
                formtarget: c,
                multiple: ["", "multiple"],
                readonly: ["", "readonly"],
                required: ["", "required"],
                type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"]
            }
        },
        ins: {
            attrs: {
                cite: null,
                datetime: null
            }
        },
        kbd: h,
        keygen: {
            attrs: {
                challenge: null,
                form: null,
                name: null,
                autofocus: ["", "autofocus"],
                disabled: ["", "disabled"],
                keytype: ["RSA"]
            }
        },
        label: {
            attrs: {
                "for": null,
                form: null
            }
        },
        legend: h,
        li: {
            attrs: {
                value: null
            }
        },
        link: {
            attrs: {
                href: null,
                type: null,
                hreflang: b,
                media: g,
                sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
            }
        },
        map: {
            attrs: {
                name: null
            }
        },
        mark: h,
        menu: {
            attrs: {
                label: null,
                type: ["list", "context", "toolbar"]
            }
        },
        meta: {
            attrs: {
                content: null,
                charset: d,
                name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
                "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
            }
        },
        meter: {
            attrs: {
                value: null,
                min: null,
                low: null,
                high: null,
                max: null,
                optimum: null
            }
        },
        nav: h,
        noframes: h,
        noscript: h,
        object: {
            attrs: {
                data: null,
                type: null,
                name: null,
                usemap: null,
                form: null,
                width: null,
                height: null,
                typemustmatch: ["", "typemustmatch"]
            }
        },
        ol: {
            attrs: {
                reversed: ["", "reversed"],
                start: null,
                type: ["1", "a", "A", "i", "I"]
            }
        },
        optgroup: {
            attrs: {
                disabled: ["", "disabled"],
                label: null
            }
        },
        option: {
            attrs: {
                disabled: ["", "disabled"],
                label: null,
                selected: ["", "selected"],
                value: null
            }
        },
        output: {
            attrs: {
                "for": null,
                form: null,
                name: null
            }
        },
        p: h,
        param: {
            attrs: {
                name: null,
                value: null
            }
        },
        pre: h,
        progress: {
            attrs: {
                value: null,
                max: null
            }
        },
        q: {
            attrs: {
                cite: null
            }
        },
        rp: h,
        rt: h,
        ruby: h,
        s: h,
        samp: h,
        script: {
            attrs: {
                type: ["text/javascript"],
                src: null,
                async: ["", "async"],
                defer: ["", "defer"],
                charset: d
            }
        },
        section: h,
        select: {
            attrs: {
                form: null,
                name: null,
                size: null,
                autofocus: ["", "autofocus"],
                disabled: ["", "disabled"],
                multiple: ["", "multiple"]
            }
        },
        small: h,
        source: {
            attrs: {
                src: null,
                type: null,
                media: null
            }
        },
        span: h,
        strike: h,
        strong: h,
        style: {
            attrs: {
                type: ["text/css"],
                media: g,
                scoped: null
            }
        },
        sub: h,
        summary: h,
        sup: h,
        table: h,
        tbody: h,
        td: {
            attrs: {
                colspan: null,
                rowspan: null,
                headers: null
            }
        },
        textarea: {
            attrs: {
                dirname: null,
                form: null,
                maxlength: null,
                name: null,
                placeholder: null,
                rows: null,
                cols: null,
                autofocus: ["", "autofocus"],
                disabled: ["", "disabled"],
                readonly: ["", "readonly"],
                required: ["", "required"],
                wrap: ["soft", "hard"]
            }
        },
        tfoot: h,
        th: {
            attrs: {
                colspan: null,
                rowspan: null,
                headers: null,
                scope: ["row", "col", "rowgroup", "colgroup"]
            }
        },
        thead: h,
        time: {
            attrs: {
                datetime: null
            }
        },
        title: h,
        tr: h,
        track: {
            attrs: {
                src: null,
                label: null,
                "default": null,
                kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
                srclang: b
            }
        },
        tt: h,
        u: h,
        ul: h,
        "var": h,
        video: {
            attrs: {
                src: null,
                poster: null,
                width: null,
                height: null,
                crossorigin: ["anonymous", "use-credentials"],
                preload: ["auto", "metadata", "none"],
                autoplay: ["", "autoplay"],
                mediagroup: ["movie"],
                muted: ["", "muted"],
                controls: ["", "controls"]
            }
        },
        wbr: h
    }
      , j = {
        accesskey: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "class": null,
        contenteditable: ["true", "false"],
        contextmenu: null,
        dir: ["ltr", "rtl", "auto"],
        draggable: ["true", "false", "auto"],
        dropzone: ["copy", "move", "link", "string:", "file:"],
        hidden: ["hidden"],
        id: null,
        inert: ["inert"],
        itemid: null,
        itemprop: null,
        itemref: null,
        itemscope: ["itemscope"],
        itemtype: null,
        lang: ["en", "es"],
        spellcheck: ["true", "false"],
        style: null,
        tabindex: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        title: null,
        translate: ["yes", "no"],
        onclick: null,
        rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"]
    };
    k(h);
    for (var l in i)
        i.hasOwnProperty(l) && i[l] != h && k(i[l]);
    a.htmlSchema = i,
    a.registerHelper("hint", "html", m)
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    function c(a, b) {
        for (var c = 0, d = a.length; d > c; ++c)
            b(a[c])
    }
    function d(a, b) {
        if (!Array.prototype.indexOf) {
            for (var c = a.length; c--; )
                if (a[c] === b)
                    return !0;
            return !1
        }
        return -1 != a.indexOf(b)
    }
    function e(c, d, e, f) {
        var g = c.getCursor()
          , h = e(c, g);
        if (!/\b(?:string|comment)\b/.test(h.type)) {
            h.state = a.innerMode(c.getMode(), h.state).state,
            /^[\w$_]*$/.test(h.string) ? h.end > g.ch && (h.end = g.ch,
            h.string = h.string.slice(0, g.ch - h.start)) : h = {
                start: g.ch,
                end: g.ch,
                string: "",
                state: h.state,
                type: "." == h.string ? "property" : null
            };
            for (var i = h; "property" == i.type; ) {
                if (i = e(c, b(g.line, i.start)),
                "." != i.string)
                    return;
                if (i = e(c, b(g.line, i.start)),
                !j)
                    var j = [];
                j.push(i)
            }
            return {
                list: n(h, j, d, f),
                from: b(g.line, h.start),
                to: b(g.line, h.end)
            }
        }
    }
    function f(a, b) {
        return e(a, l, function(a, b) {
            return a.getTokenAt(b)
        }, b)
    }
    function g(a, b) {
        var c = a.getTokenAt(b);
        return b.ch == c.start + 1 && "." == c.string.charAt(0) ? (c.end = c.start,
        c.string = ".",
        c.type = "property") : /^\.[\w$_]*$/.test(c.string) && (c.type = "property",
        c.start++,
        c.string = c.string.replace(/\./, "")),
        c
    }
    function h(a, b) {
        return e(a, m, g, b)
    }
    function n(a, b, e, f) {
        function m(a) {
            0 != a.lastIndexOf(h, 0) || d(g, a) || g.push(a)
        }
        function n(a) {
            "string" == typeof a ? c(i, m) : a instanceof Array ? c(j, m) : a instanceof Function && c(k, m);
            for (var b in a)
                m(b)
        }
        var g = []
          , h = a.string
          , l = f && f.globalScope || window;
        if (b && b.length) {
            var p, o = b.pop();
            for (o.type && 0 === o.type.indexOf("variable") ? (f && f.additionalContext && (p = f.additionalContext[o.string]),
            f && f.useGlobalScope === !1 || (p = p || l[o.string])) : "string" == o.type ? p = "" : "atom" == o.type ? p = 1 : "function" == o.type && (null == l.jQuery || "$" != o.string && "jQuery" != o.string || "function" != typeof l.jQuery ? null != l._ && "_" == o.string && "function" == typeof l._ && (p = l._()) : p = l.jQuery()); null != p && b.length; )
                p = p[b.pop().string];
            null != p && n(p)
        } else {
            for (var q = a.state.localVars; q; q = q.next)
                m(q.name);
            for (var q = a.state.globalVars; q; q = q.next)
                m(q.name);
            f && f.useGlobalScope === !1 || n(l),
            c(e, m)
        }
        return g
    }
    var b = a.Pos;
    a.registerHelper("hint", "javascript", f),
    a.registerHelper("hint", "coffeescript", h);
    var i = "charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" ")
      , j = "length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" ")
      , k = "prototype apply call bind".split(" ")
      , l = "break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" ")
      , m = "and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a) {
        a.operation(function() {
            j(a)
        })
    }
    function c(a) {
        a.state.markedSelection.length && a.operation(function() {
            h(a)
        })
    }
    function g(a, b, c, g) {
        if (0 != f(b, c))
            for (var h = a.state.markedSelection, i = a.state.markedSelectionStyle, j = b.line; ; ) {
                var k = j == b.line ? b : e(j, 0)
                  , l = j + d
                  , m = l >= c.line
                  , n = m ? c : e(l, 0)
                  , o = a.markText(k, n, {
                    className: i
                });
                if (null == g ? h.push(o) : h.splice(g++, 0, o),
                m)
                    break;
                j = l
            }
    }
    function h(a) {
        for (var b = a.state.markedSelection, c = 0; c < b.length; ++c)
            b[c].clear();
        b.length = 0
    }
    function i(a) {
        h(a);
        for (var b = a.listSelections(), c = 0; c < b.length; c++)
            g(a, b[c].from(), b[c].to())
    }
    function j(a) {
        if (!a.somethingSelected())
            return h(a);
        if (a.listSelections().length > 1)
            return i(a);
        var b = a.getCursor("start")
          , c = a.getCursor("end")
          , e = a.state.markedSelection;
        if (!e.length)
            return g(a, b, c);
        var j = e[0].find()
          , k = e[e.length - 1].find();
        if (!j || !k || c.line - b.line < d || f(b, k.to) >= 0 || f(c, j.from) <= 0)
            return i(a);
        for (; f(b, j.from) > 0; )
            e.shift().clear(),
            j = e[0].find();
        for (f(b, j.from) < 0 && (j.to.line - b.line < d ? (e.shift().clear(),
        g(a, b, j.to, 0)) : g(a, b, j.from, 0)); f(c, k.to) < 0; )
            e.pop().clear(),
            k = e[e.length - 1].find();
        f(c, k.to) > 0 && (c.line - k.from.line < d ? (e.pop().clear(),
        g(a, k.from, c)) : g(a, k.to, c))
    }
    a.defineOption("styleSelectedText", !1, function(d, e, f) {
        var g = f && f != a.Init;
        e && !g ? (d.state.markedSelection = [],
        d.state.markedSelectionStyle = "string" == typeof e ? e : "CodeMirror-selectedtext",
        i(d),
        d.on("cursorActivity", b),
        d.on("change", c)) : !e && g && (d.off("cursorActivity", b),
        d.off("change", c),
        h(d),
        d.state.markedSelection = d.state.markedSelectionStyle = null)
    });
    var d = 8
      , e = a.Pos
      , f = a.cmpPos
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("./matchesonscrollbar")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./matchesonscrollbar"], a) : a(CodeMirror);
}(function(a) {
    "use strict";
    function f(a) {
        "object" == typeof a && (this.minChars = a.minChars,
        this.style = a.style,
        this.showToken = a.showToken,
        this.delay = a.delay,
        this.wordsOnly = a.wordsOnly,
        this.annotateScrollbar = a.annotateScrollbar),
        null == this.style && (this.style = c),
        null == this.minChars && (this.minChars = b),
        null == this.delay && (this.delay = d),
        null == this.wordsOnly && (this.wordsOnly = e),
        this.overlay = this.timeout = null,
        this.matchesonscroll = null
    }
    function g(a) {
        var b = a.state.matchHighlighter;
        clearTimeout(b.timeout),
        b.timeout = setTimeout(function() {
            j(a)
        }, b.delay)
    }
    function h(a, b, c, d) {
        var e = a.state.matchHighlighter;
        if (a.addOverlay(e.overlay = m(b, c, d)),
        e.annotateScrollbar) {
            var f = c ? new RegExp("\\b" + b + "\\b") : b;
            e.matchesonscroll = a.showMatchesOnScrollbar(f, !0, {
                className: "CodeMirror-selection-highlight-scrollbar"
            })
        }
    }
    function i(a) {
        var b = a.state.matchHighlighter;
        b.overlay && (a.removeOverlay(b.overlay),
        b.overlay = null,
        b.annotateScrollbar && (b.matchesonscroll.clear(),
        b.matchesonscroll = null))
    }
    function j(a) {
        a.operation(function() {
            var b = a.state.matchHighlighter;
            if (i(a),
            !a.somethingSelected() && b.showToken) {
                for (var c = b.showToken === !0 ? /[\w$]/ : b.showToken, d = a.getCursor(), e = a.getLine(d.line), f = d.ch, g = f; f && c.test(e.charAt(f - 1)); )
                    --f;
                for (; g < e.length && c.test(e.charAt(g)); )
                    ++g;
                return void (g > f && h(a, e.slice(f, g), c, b.style))
            }
            var j = a.getCursor("from")
              , l = a.getCursor("to");
            if (j.line == l.line && (!b.wordsOnly || k(a, j, l))) {
                var m = a.getRange(j, l).replace(/^\s+|\s+$/g, "");
                m.length >= b.minChars && h(a, m, !1, b.style)
            }
        })
    }
    function k(a, b, c) {
        var d = a.getRange(b, c);
        if (null !== d.match(/^\w+$/)) {
            if (b.ch > 0) {
                var e = {
                    line: b.line,
                    ch: b.ch - 1
                }
                  , f = a.getRange(e, b);
                if (null === f.match(/\W/))
                    return !1
            }
            if (c.ch < a.getLine(b.line).length) {
                var e = {
                    line: c.line,
                    ch: c.ch + 1
                }
                  , f = a.getRange(c, e);
                if (null === f.match(/\W/))
                    return !1
            }
            return !0
        }
        return !1
    }
    function l(a, b) {
        return !(a.start && b.test(a.string.charAt(a.start - 1)) || a.pos != a.string.length && b.test(a.string.charAt(a.pos)))
    }
    function m(a, b, c) {
        return {
            token: function(d) {
                return !d.match(a) || b && !l(d, b) ? (d.next(),
                void (d.skipTo(a.charAt(0)) || d.skipToEnd())) : c
            }
        }
    }
    var b = 2
      , c = "matchhighlight"
      , d = 100
      , e = !1;
    a.defineOption("highlightSelectionMatches", !1, function(b, c, d) {
        d && d != a.Init && (i(b),
        clearTimeout(b.state.matchHighlighter.timeout),
        b.state.matchHighlighter = null,
        b.off("cursorActivity", g)),
        c && (b.state.matchHighlighter = new f(c),
        j(b),
        b.on("cursorActivity", g))
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    function e(a, b, e, g) {
        var h = a.getLineHandle(b.line)
          , i = b.ch - 1
          , j = i >= 0 && d[h.text.charAt(i)] || d[h.text.charAt(++i)];
        if (!j)
            return null;
        var k = ">" == j.charAt(1) ? 1 : -1;
        if (e && k > 0 != (i == b.ch))
            return null;
        var l = a.getTokenTypeAt(c(b.line, i + 1))
          , m = f(a, c(b.line, i + (k > 0 ? 1 : 0)), k, l || null, g);
        return null == m ? null : {
            from: c(b.line, i),
            to: m && m.pos,
            match: m && m.ch == j.charAt(0),
            forward: k > 0
        }
    }
    function f(a, b, e, f, g) {
        for (var h = g && g.maxScanLineLength || 1e4, i = g && g.maxScanLines || 1e3, j = [], k = g && g.bracketRegex ? g.bracketRegex : /[(){}[\]]/, l = e > 0 ? Math.min(b.line + i, a.lastLine() + 1) : Math.max(a.firstLine() - 1, b.line - i), m = b.line; m != l; m += e) {
            var n = a.getLine(m);
            if (n) {
                var o = e > 0 ? 0 : n.length - 1
                  , p = e > 0 ? n.length : -1;
                if (!(n.length > h))
                    for (m == b.line && (o = b.ch - (0 > e ? 1 : 0)); o != p; o += e) {
                        var q = n.charAt(o);
                        if (k.test(q) && (void 0 === f || a.getTokenTypeAt(c(m, o + 1)) == f)) {
                            var r = d[q];
                            if (">" == r.charAt(1) == e > 0)
                                j.push(q);
                            else {
                                if (!j.length)
                                    return {
                                        pos: c(m, o),
                                        ch: q
                                    };
                                j.pop()
                            }
                        }
                    }
            }
        }
        return m - e == (e > 0 ? a.lastLine() : a.firstLine()) ? !1 : null
    }
    function g(a, d, f) {
        for (var g = a.state.matchBrackets.maxHighlightLineLength || 1e3, h = [], i = a.listSelections(), j = 0; j < i.length; j++) {
            var k = i[j].empty() && e(a, i[j].head, !1, f);
            if (k && a.getLine(k.from.line).length <= g) {
                var l = k.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                h.push(a.markText(k.from, c(k.from.line, k.from.ch + 1), {
                    className: l
                })),
                k.to && a.getLine(k.to.line).length <= g && h.push(a.markText(k.to, c(k.to.line, k.to.ch + 1), {
                    className: l
                }))
            }
        }
        if (h.length) {
            b && a.state.focused && a.focus();
            var m = function() {
                a.operation(function() {
                    for (var a = 0; a < h.length; a++)
                        h[a].clear()
                })
            };
            if (!d)
                return m;
            setTimeout(m, 800)
        }
    }
    function i(a) {
        a.operation(function() {
            h && (h(),
            h = null),
            h = g(a, !1, a.state.matchBrackets)
        })
    }
    var b = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8)
      , c = a.Pos
      , d = {
        "(": ")>",
        ")": "(<",
        "[": "]>",
        "]": "[<",
        "{": "}>",
        "}": "{<"
    }
      , h = null;
    a.defineOption("matchBrackets", !1, function(b, c, d) {
        d && d != a.Init && b.off("cursorActivity", i),
        c && (b.state.matchBrackets = "object" == typeof c ? c : {},
        b.on("cursorActivity", i))
    }),
    a.defineExtension("matchBrackets", function() {
        g(this, !0)
    }),
    a.defineExtension("findMatchingBracket", function(a, b, c) {
        return e(this, a, b, c)
    }),
    a.defineExtension("scanForBracket", function(a, b, c, d) {
        return f(this, a, b, c, d)
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../fold/xml-fold")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../fold/xml-fold"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a) {
        a.state.tagHit && a.state.tagHit.clear(),
        a.state.tagOther && a.state.tagOther.clear(),
        a.state.tagHit = a.state.tagOther = null
    }
    function c(c) {
        c.state.failedTagMatch = !1,
        c.operation(function() {
            if (b(c),
            !c.somethingSelected()) {
                var d = c.getCursor()
                  , e = c.getViewport();
                e.from = Math.min(e.from, d.line),
                e.to = Math.max(d.line + 1, e.to);
                var f = a.findMatchingTag(c, d, e);
                if (f) {
                    if (c.state.matchBothTags) {
                        var g = "open" == f.at ? f.open : f.close;
                        g && (c.state.tagHit = c.markText(g.from, g.to, {
                            className: "CodeMirror-matchingtag"
                        }))
                    }
                    var h = "close" == f.at ? f.open : f.close;
                    h ? c.state.tagOther = c.markText(h.from, h.to, {
                        className: "CodeMirror-matchingtag"
                    }) : c.state.failedTagMatch = !0
                }
            }
        })
    }
    function d(a) {
        a.state.failedTagMatch && c(a)
    }
    a.defineOption("matchTags", !1, function(e, f, g) {
        g && g != a.Init && (e.off("cursorActivity", c),
        e.off("viewportChange", d),
        b(e)),
        f && (e.state.matchBothTags = "object" == typeof f && f.bothTags,
        e.on("cursorActivity", c),
        e.on("viewportChange", d),
        c(e))
    }),
    a.commands.toMatchingTag = function(b) {
        var c = a.findMatchingTag(b, b.getCursor());
        if (c) {
            var d = "close" == c.at ? c.open : c.close;
            d && b.extendSelection(d.to, d.from)
        }
    }
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    a.overlayMode = function(b, c, d) {
        return {
            startState: function() {
                return {
                    base: a.startState(b),
                    overlay: a.startState(c),
                    basePos: 0,
                    baseCur: null,
                    overlayPos: 0,
                    overlayCur: null,
                    streamSeen: null
                }
            },
            copyState: function(d) {
                return {
                    base: a.copyState(b, d.base),
                    overlay: a.copyState(c, d.overlay),
                    basePos: d.basePos,
                    baseCur: null,
                    overlayPos: d.overlayPos,
                    overlayCur: null
                }
            },
            token: function(a, e) {
                return (a != e.streamSeen || Math.min(e.basePos, e.overlayPos) < a.start) && (e.streamSeen = a,
                e.basePos = e.overlayPos = a.start),
                a.start == e.basePos && (e.baseCur = b.token(a, e.base),
                e.basePos = a.pos),
                a.start == e.overlayPos && (a.pos = a.start,
                e.overlayCur = c.token(a, e.overlay),
                e.overlayPos = a.pos),
                a.pos = Math.min(e.basePos, e.overlayPos),
                null == e.overlayCur ? e.baseCur : null != e.baseCur && e.overlay.combineTokens || d && null == e.overlay.combineTokens ? e.baseCur + " " + e.overlayCur : e.overlayCur
            },
            indent: b.indent && function(a, c) {
                return b.indent(a.base, c)
            }
            ,
            electricChars: b.electricChars,
            innerMode: function(a) {
                return {
                    state: a.base,
                    mode: b
                }
            },
            blankLine: function(a) {
                b.blankLine && b.blankLine(a.base),
                c.blankLine && c.blankLine(a.overlay)
            }
        }
    }
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    function b(a) {
        a.state.placeholder && (a.state.placeholder.parentNode.removeChild(a.state.placeholder),
        a.state.placeholder = null)
    }
    function c(a) {
        b(a);
        var c = a.state.placeholder = document.createElement("pre");
        c.style.cssText = "height: 0; overflow: visible",
        c.className = "CodeMirror-placeholder";
        var d = a.getOption("placeholder");
        "string" == typeof d && (d = document.createTextNode(d)),
        c.appendChild(d),
        a.display.lineSpace.insertBefore(c, a.display.lineSpace.firstChild)
    }
    function d(a) {
        f(a) && c(a)
    }
    function e(a) {
        var d = a.getWrapperElement()
          , e = f(a);
        d.className = d.className.replace(" CodeMirror-empty", "") + (e ? " CodeMirror-empty" : ""),
        e ? c(a) : b(a)
    }
    function f(a) {
        return 1 === a.lineCount() && "" === a.getLine(0)
    }
    a.defineOption("placeholder", "", function(c, f, g) {
        var h = g && g != a.Init;
        if (f && !h)
            c.on("blur", d),
            c.on("change", e),
            c.on("swapDoc", e),
            e(c);
        else if (!f && h) {
            c.off("blur", d),
            c.off("change", e),
            c.off("swapDoc", e),
            b(c);
            var i = c.getWrapperElement();
            i.className = i.className.replace(" CodeMirror-empty", "")
        }
        f && !c.hasFocus() && d(c)
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function d(a, b) {
        this.cm = a,
        this.options = b,
        this.widget = null,
        this.debounce = 0,
        this.tick = 0,
        this.startPos = this.cm.getCursor("start"),
        this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;
        var c = this;
        a.on("cursorActivity", this.activityFunc = function() {
            c.cursorActivity()
        }
        )
    }
    function g(b, c) {
        var d = a.cmpPos(c.from, b.from);
        return d > 0 && b.to.ch - b.from.ch != c.to.ch - c.from.ch
    }
    function h(a, b, c) {
        var d = a.options.hintOptions
          , e = {};
        for (var f in o)
            e[f] = o[f];
        if (d)
            for (var f in d)
                void 0 !== d[f] && (e[f] = d[f]);
        if (c)
            for (var f in c)
                void 0 !== c[f] && (e[f] = c[f]);
        return e.hint.resolve && (e.hint = e.hint.resolve(a, b)),
        e
    }
    function i(a) {
        return "string" == typeof a ? a : a.text
    }
    function j(a, b) {
        function f(a, d) {
            var f;
            f = "string" != typeof d ? function(a) {
                return d(a, b)
            }
            : c.hasOwnProperty(d) ? c[d] : d,
            e[a] = f
        }
        var c = {
            Up: function() {
                b.moveFocus(-1)
            },
            Down: function() {
                b.moveFocus(1)
            },
            PageUp: function() {
                b.moveFocus(-b.menuSize() + 1, !0)
            },
            PageDown: function() {
                b.moveFocus(b.menuSize() - 1, !0)
            },
            Home: function() {
                b.setFocus(0)
            },
            End: function() {
                b.setFocus(b.length - 1)
            },
            Enter: b.pick,
            Tab: b.pick,
            Esc: b.close
        }
          , d = a.options.customKeys
          , e = d ? {} : c;
        if (d)
            for (var g in d)
                d.hasOwnProperty(g) && f(g, d[g]);
        var h = a.options.extraKeys;
        if (h)
            for (var g in h)
                h.hasOwnProperty(g) && f(g, h[g]);
        return e
    }
    function k(a, b) {
        for (; b && b != a; ) {
            if ("LI" === b.nodeName.toUpperCase() && b.parentNode == a)
                return b;
            b = b.parentNode
        }
    }
    function l(d, e) {
        this.completion = d,
        this.data = e,
        this.picked = !1;
        var f = this
          , g = d.cm
          , h = this.hints = document.createElement("ul");
        h.className = "CodeMirror-hints",
        this.selectedHint = e.selectedHint || 0;
        for (var l = e.list, m = 0; m < l.length; ++m) {
            var n = h.appendChild(document.createElement("li"))
              , o = l[m]
              , p = b + (m != this.selectedHint ? "" : " " + c);
            null != o.className && (p = o.className + " " + p),
            n.className = p,
            o.render ? o.render(n, e, o) : n.appendChild(document.createTextNode(o.displayText || i(o))),
            n.hintId = m
        }
        var q = g.cursorCoords(d.options.alignWithWord ? e.from : null)
          , r = q.left
          , s = q.bottom
          , t = !0;
        h.style.left = r + "px",
        h.style.top = s + "px";
        var u = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth)
          , v = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
        (d.options.container || document.body).appendChild(h);
        var w = h.getBoundingClientRect()
          , x = w.bottom - v;
        if (x > 0) {
            var y = w.bottom - w.top
              , z = q.top - (q.bottom - w.top);
            if (z - y > 0)
                h.style.top = (s = q.top - y) + "px",
                t = !1;
            else if (y > v) {
                h.style.height = v - 5 + "px",
                h.style.top = (s = q.bottom - w.top) + "px";
                var A = g.getCursor();
                e.from.ch != A.ch && (q = g.cursorCoords(A),
                h.style.left = (r = q.left) + "px",
                w = h.getBoundingClientRect())
            }
        }
        var B = w.right - u;
        if (B > 0 && (w.right - w.left > u && (h.style.width = u - 5 + "px",
        B -= w.right - w.left - u),
        h.style.left = (r = q.left - B) + "px"),
        g.addKeyMap(this.keyMap = j(d, {
            moveFocus: function(a, b) {
                f.changeActive(f.selectedHint + a, b)
            },
            setFocus: function(a) {
                f.changeActive(a)
            },
            menuSize: function() {
                return f.screenAmount()
            },
            length: l.length,
            close: function() {
                d.close()
            },
            pick: function() {
                f.pick()
            },
            data: e
        })),
        d.options.closeOnUnfocus) {
            var C;
            g.on("blur", this.onBlur = function() {
                C = setTimeout(function() {
                    d.close()
                }, 100)
            }
            ),
            g.on("focus", this.onFocus = function() {
                clearTimeout(C)
            }
            )
        }
        var D = g.getScrollInfo();
        return g.on("scroll", this.onScroll = function() {
            var a = g.getScrollInfo()
              , b = g.getWrapperElement().getBoundingClientRect()
              , c = s + D.top - a.top
              , e = c - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
            return t || (e += h.offsetHeight),
            e <= b.top || e >= b.bottom ? d.close() : (h.style.top = c + "px",
            void (h.style.left = r + D.left - a.left + "px"))
        }
        ),
        a.on(h, "dblclick", function(a) {
            var b = k(h, a.target || a.srcElement);
            b && null != b.hintId && (f.changeActive(b.hintId),
            f.pick())
        }),
        a.on(h, "click", function(a) {
            var b = k(h, a.target || a.srcElement);
            b && null != b.hintId && (f.changeActive(b.hintId),
            d.options.completeOnSingleClick && f.pick())
        }),
        a.on(h, "mousedown", function() {
            setTimeout(function() {
                g.focus()
            }, 20)
        }),
        a.signal(e, "select", l[0], h.firstChild),
        !0
    }
    function m(a, b) {
        if (!a.somethingSelected())
            return b;
        for (var c = [], d = 0; d < b.length; d++)
            b[d].supportsSelection && c.push(b[d]);
        return c
    }
    function n(b, c) {
        var e, d = b.getHelpers(c, "hint");
        if (d.length) {
            for (var g, f = !1, h = 0; h < d.length; h++)
                d[h].async && (f = !0);
            return f ? (g = function(a, b, c) {
                function f(d, g) {
                    if (d == e.length)
                        return b(null);
                    var h = e[d];
                    if (h.async)
                        h(a, function(a) {
                            a ? b(a) : f(d + 1)
                        }, c);
                    else {
                        var g = h(a, c);
                        g ? b(g) : f(d + 1)
                    }
                }
                var e = m(a, d);
                f(0)
            }
            ,
            g.async = !0) : g = function(a, b) {
                for (var c = m(a, d), e = 0; e < c.length; e++) {
                    var f = c[e](a, b);
                    if (f && f.list.length)
                        return f
                }
            }
            ,
            g.supportsSelection = !0,
            g
        }
        return (e = b.getHelper(b.getCursor(), "hintWords")) ? function(b) {
            return a.hint.fromList(b, {
                words: e
            })
        }
        : a.hint.anyword ? function(b, c) {
            return a.hint.anyword(b, c)
        }
        : function() {}
    }
    var b = "CodeMirror-hint"
      , c = "CodeMirror-hint-active";
    a.showHint = function(a, b, c) {
        if (!b)
            return a.showHint(c);
        c && c.async && (b.async = !0);
        var d = {
            hint: b
        };
        if (c)
            for (var e in c)
                d[e] = c[e];
        return a.showHint(d)
    }
    ,
    a.defineExtension("showHint", function(b) {
        b = h(this, this.getCursor("start"), b);
        var c = this.listSelections();
        if (!(c.length > 1)) {
            if (this.somethingSelected()) {
                if (!b.hint.supportsSelection)
                    return;
                for (var e = 0; e < c.length; e++)
                    if (c[e].head.line != c[e].anchor.line)
                        return
            }
            this.state.completionActive && this.state.completionActive.close();
            var f = this.state.completionActive = new d(this,b);
            f.options.hint && (a.signal(this, "startCompletion", this),
            f.update(!0))
        }
    });
    var e = window.requestAnimationFrame || function(a) {
        return setTimeout(a, 1e3 / 60)
    }
      , f = window.cancelAnimationFrame || clearTimeout;
    d.prototype = {
        close: function() {
            this.active() && (this.cm.state.completionActive = null,
            this.tick = null,
            this.cm.off("cursorActivity", this.activityFunc),
            this.widget && this.data && a.signal(this.data, "close"),
            this.widget && this.widget.close(),
            a.signal(this.cm, "endCompletion", this.cm))
        },
        active: function() {
            return this.cm.state.completionActive == this
        },
        pick: function(b, c) {
            var d = b.list[c];
            d.hint ? d.hint(this.cm, b, d) : this.cm.replaceRange(i(d), d.from || b.from, d.to || b.to, "complete"),
            a.signal(b, "pick", d),
            this.close()
        },
        cursorActivity: function() {
            this.debounce && (f(this.debounce),
            this.debounce = 0);
            var a = this.cm.getCursor()
              , b = this.cm.getLine(a.line);
            if (a.line != this.startPos.line || b.length - a.ch != this.startLen - this.startPos.ch || a.ch < this.startPos.ch || this.cm.somethingSelected() || a.ch && this.options.closeCharacters.test(b.charAt(a.ch - 1)))
                this.close();
            else {
                var c = this;
                this.debounce = e(function() {
                    c.update()
                }),
                this.widget && this.widget.disable()
            }
        },
        update: function(a) {
            if (null != this.tick)
                if (this.options.hint.async) {
                    var b = ++this.tick
                      , c = this;
                    this.options.hint(this.cm, function(d) {
                        c.tick == b && c.finishUpdate(d, a)
                    }, this.options)
                } else
                    this.finishUpdate(this.options.hint(this.cm, this.options), a)
        },
        finishUpdate: function(b, c) {
            this.data && a.signal(this.data, "update");
            var d = this.widget && this.widget.picked || c && this.options.completeSingle;
            this.widget && this.widget.close(),
            b && this.data && g(this.data, b) || (this.data = b,
            b && b.list.length && (d && 1 == b.list.length ? this.pick(b, 0) : (this.widget = new l(this,b),
            a.signal(b, "shown"))))
        }
    },
    l.prototype = {
        close: function() {
            if (this.completion.widget == this) {
                this.completion.widget = null,
                this.hints.parentNode.removeChild(this.hints),
                this.completion.cm.removeKeyMap(this.keyMap);
                var a = this.completion.cm;
                this.completion.options.closeOnUnfocus && (a.off("blur", this.onBlur),
                a.off("focus", this.onFocus)),
                a.off("scroll", this.onScroll)
            }
        },
        disable: function() {
            this.completion.cm.removeKeyMap(this.keyMap);
            var a = this;
            this.keyMap = {
                Enter: function() {
                    a.picked = !0
                }
            },
            this.completion.cm.addKeyMap(this.keyMap)
        },
        pick: function() {
            this.completion.pick(this.data, this.selectedHint)
        },
        changeActive: function(b, d) {
            if (b >= this.data.list.length ? b = d ? this.data.list.length - 1 : 0 : 0 > b && (b = d ? 0 : this.data.list.length - 1),
            this.selectedHint != b) {
                var e = this.hints.childNodes[this.selectedHint];
                e.className = e.className.replace(" " + c, ""),
                e = this.hints.childNodes[this.selectedHint = b],
                e.className += " " + c,
                e.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = e.offsetTop - 3 : e.offsetTop + e.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = e.offsetTop + e.offsetHeight - this.hints.clientHeight + 3),
                a.signal(this.data, "select", this.data.list[this.selectedHint], e)
            }
        },
        screenAmount: function() {
            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1
        }
    },
    a.registerHelper("hint", "auto", {
        resolve: n
    }),
    a.registerHelper("hint", "fromList", function(b, c) {
        var d = b.getCursor()
          , e = b.getTokenAt(d)
          , f = a.Pos(d.line, e.end);
        if (e.string && /\w/.test(e.string[e.string.length - 1]))
            var g = e.string
              , h = a.Pos(d.line, e.start);
        else
            var g = ""
              , h = f;
        for (var i = [], j = 0; j < c.words.length; j++) {
            var k = c.words[j];
            k.slice(0, g.length) == g && i.push(k)
        }
        return i.length ? {
            list: i,
            from: h,
            to: f
        } : void 0
    }),
    a.commands.autocomplete = a.showHint;
    var o = {
        hint: a.hint.auto,
        completeSingle: !0,
        alignWithWord: !0,
        closeCharacters: /[\s()\[\]{};:>,]/,
        closeOnUnfocus: !0,
        completeOnSingleClick: !0,
        container: null,
        customKeys: null,
        extraKeys: null
    };
    a.defineOption("hintOptions", null)
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../../mode/sql/sql")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../../mode/sql/sql"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function g(a) {
        return "[object Array]" == Object.prototype.toString.call(a)
    }
    function h(b) {
        var c = b.doc.modeOption;
        return "sql" === c && (c = "text/x-sql"),
        a.resolveMode(c).keywords
    }
    function i(a) {
        return "string" == typeof a ? a : a.text
    }
    function j(a, b) {
        return g(b) && (b = {
            columns: b
        }),
        b.text || (b.text = a),
        b
    }
    function k(a) {
        var b = {};
        if (g(a))
            for (var c = a.length - 1; c >= 0; c--) {
                var d = a[c];
                b[i(d).toUpperCase()] = j(i(d), d)
            }
        else if (a)
            for (var e in a)
                b[e.toUpperCase()] = j(e, a[e]);
        return b
    }
    function l(a) {
        return b[a.toUpperCase()]
    }
    function m(a) {
        var b = {};
        for (var c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }
    function n(a, b) {
        var c = a.length
          , d = i(b).substr(0, c);
        return a.toUpperCase() === d.toUpperCase()
    }
    function o(a, b, c, d) {
        if (g(c))
            for (var e = 0; e < c.length; e++)
                n(b, c[e]) && a.push(d(c[e]));
        else
            for (var f in c)
                if (c.hasOwnProperty(f)) {
                    var h = c[f];
                    h = h && h !== !0 ? h.displayText ? {
                        text: h.text,
                        displayText: h.displayText
                    } : h.text : f,
                    n(b, h) && a.push(d(h))
                }
    }
    function p(a) {
        return "." == a.charAt(0) && (a = a.substr(1)),
        a.replace(/`/g, "")
    }
    function q(a) {
        for (var b = i(a).split("."), c = 0; c < b.length; c++)
            b[c] = "`" + b[c] + "`";
        var d = b.join(".");
        return "string" == typeof a ? d : (a = m(a),
        a.text = d,
        a)
    }
    function r(a, d, e, g) {
        for (var h = !1, i = [], j = d.start, k = !0; k; )
            k = "." == d.string.charAt(0),
            h = h || "`" == d.string.charAt(0),
            j = d.start,
            i.unshift(p(d.string)),
            d = g.getTokenAt(f(a.line, d.start)),
            "." == d.string && (k = !0,
            d = g.getTokenAt(f(a.line, d.start)));
        var n = i.join(".");
        o(e, n, b, function(a) {
            return h ? q(a) : a
        }),
        o(e, n, c, function(a) {
            return h ? q(a) : a
        }),
        n = i.pop();
        var r = i.join(".")
          , s = !1
          , t = r;
        if (!l(r)) {
            var u = r;
            r = v(r, g),
            r !== u && (s = !0)
        }
        var w = l(r);
        return w && w.columns && (w = w.columns),
        w && o(e, n, w, function(a) {
            var b = r;
            return 1 == s && (b = t),
            "string" == typeof a ? a = b + "." + a : (a = m(a),
            a.text = b + "." + a.text),
            h ? q(a) : a
        }),
        j
    }
    function s(a, b) {
        if (a)
            for (var c = /[,;]/g, d = a.split(" "), e = 0; e < d.length; e++)
                b(d[e] ? d[e].replace(c, "") : "")
    }
    function t(a) {
        return a.line + a.ch / Math.pow(10, 6)
    }
    function u(a) {
        return f(Math.floor(a), +a.toString().split(".").pop())
    }
    function v(a, b) {
        for (var c = b.doc, d = c.getValue(), g = a.toUpperCase(), h = "", i = "", j = [], k = {
            start: f(0, 0),
            end: f(b.lastLine(), b.getLineHandle(b.lastLine()).length)
        }, m = d.indexOf(e.QUERY_DIV); -1 != m; )
            j.push(c.posFromIndex(m)),
            m = d.indexOf(e.QUERY_DIV, m + 1);
        j.unshift(f(0, 0)),
        j.push(f(b.lastLine(), b.getLineHandle(b.lastLine()).text.length));
        for (var n = 0, o = t(b.getCursor()), p = 0; p < j.length; p++) {
            var q = t(j[p]);
            if (o > n && q >= o) {
                k = {
                    start: u(n),
                    end: u(q)
                };
                break
            }
            n = q
        }
        for (var r = c.getRange(k.start, k.end, !1), p = 0; p < r.length; p++) {
            var v = r[p];
            if (s(v, function(a) {
                var b = a.toUpperCase();
                b === g && l(h) && (i = h),
                b !== e.ALIAS_KEYWORD && (h = a)
            }),
            i)
                break
        }
        return i
    }
    var b, c, d, e = {
        QUERY_DIV: ";",
        ALIAS_KEYWORD: "AS"
    }, f = a.Pos;
    a.registerHelper("hint", "sql", function(a, e) {
        b = k(e && e.tables);
        var g = e && e.defaultTable
          , i = e && e.disableKeywords;
        c = g && l(g),
        d = d || h(a),
        g && !c && (c = v(g, a)),
        c = c || [],
        c.columns && (c = c.columns);
        var p, q, s, j = a.getCursor(), m = [], n = a.getTokenAt(j);
        return n.end > j.ch && (n.end = j.ch,
        n.string = n.string.slice(0, j.ch - n.start)),
        n.string.match(/^[.`\w@]\w*$/) ? (s = n.string,
        p = n.start,
        q = n.end) : (p = q = j.ch,
        s = ""),
        "." == s.charAt(0) || "`" == s.charAt(0) ? p = r(j, n, m, a) : (o(m, s, b, function(a) {
            return a
        }),
        o(m, s, c, function(a) {
            return a
        }),
        i || o(m, s, d, function(a) {
            return a.toUpperCase()
        })),
        {
            list: m,
            from: f(j.line, p),
            to: f(j.line, q)
        }
    })
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function c(a, b) {
        return a.line - b.line || a.ch - b.ch
    }
    function g(a, b, c, d) {
        this.line = b,
        this.ch = c,
        this.cm = a,
        this.text = a.getLine(b),
        this.min = d ? d.from : a.firstLine(),
        this.max = d ? d.to - 1 : a.lastLine()
    }
    function h(a, c) {
        var d = a.cm.getTokenTypeAt(b(a.line, c));
        return d && /\btag\b/.test(d)
    }
    function i(a) {
        return a.line >= a.max ? void 0 : (a.ch = 0,
        a.text = a.cm.getLine(++a.line),
        !0)
    }
    function j(a) {
        return a.line <= a.min ? void 0 : (a.text = a.cm.getLine(--a.line),
        a.ch = a.text.length,
        !0)
    }
    function k(a) {
        for (; ; ) {
            var b = a.text.indexOf(">", a.ch);
            if (-1 == b) {
                if (i(a))
                    continue;
                return
            }
            {
                if (h(a, b + 1)) {
                    var c = a.text.lastIndexOf("/", b)
                      , d = c > -1 && !/\S/.test(a.text.slice(c + 1, b));
                    return a.ch = b + 1,
                    d ? "selfClose" : "regular"
                }
                a.ch = b + 1
            }
        }
    }
    function l(a) {
        for (; ; ) {
            var b = a.ch ? a.text.lastIndexOf("<", a.ch - 1) : -1;
            if (-1 == b) {
                if (j(a))
                    continue;
                return
            }
            if (h(a, b + 1)) {
                f.lastIndex = b,
                a.ch = b;
                var c = f.exec(a.text);
                if (c && c.index == b)
                    return c
            } else
                a.ch = b
        }
    }
    function m(a) {
        for (; ; ) {
            f.lastIndex = a.ch;
            var b = f.exec(a.text);
            if (!b) {
                if (i(a))
                    continue;
                return
            }
            {
                if (h(a, b.index + 1))
                    return a.ch = b.index + b[0].length,
                    b;
                a.ch = b.index + 1
            }
        }
    }
    function n(a) {
        for (; ; ) {
            var b = a.ch ? a.text.lastIndexOf(">", a.ch - 1) : -1;
            if (-1 == b) {
                if (j(a))
                    continue;
                return
            }
            {
                if (h(a, b + 1)) {
                    var c = a.text.lastIndexOf("/", b)
                      , d = c > -1 && !/\S/.test(a.text.slice(c + 1, b));
                    return a.ch = b + 1,
                    d ? "selfClose" : "regular"
                }
                a.ch = b
            }
        }
    }
    function o(a, c) {
        for (var d = []; ; ) {
            var f, e = m(a), g = a.line, h = a.ch - (e ? e[0].length : 0);
            if (!e || !(f = k(a)))
                return;
            if ("selfClose" != f)
                if (e[1]) {
                    for (var i = d.length - 1; i >= 0; --i)
                        if (d[i] == e[2]) {
                            d.length = i;
                            break
                        }
                    if (0 > i && (!c || c == e[2]))
                        return {
                            tag: e[2],
                            from: b(g, h),
                            to: b(a.line, a.ch)
                        }
                } else
                    d.push(e[2])
        }
    }
    function p(a, c) {
        for (var d = []; ; ) {
            var e = n(a);
            if (!e)
                return;
            if ("selfClose" != e) {
                var f = a.line
                  , g = a.ch
                  , h = l(a);
                if (!h)
                    return;
                if (h[1])
                    d.push(h[2]);
                else {
                    for (var i = d.length - 1; i >= 0; --i)
                        if (d[i] == h[2]) {
                            d.length = i;
                            break
                        }
                    if (0 > i && (!c || c == h[2]))
                        return {
                            tag: h[2],
                            from: b(a.line, a.ch),
                            to: b(f, g)
                        }
                }
            } else
                l(a)
        }
    }
    var b = a.Pos
      , d = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
      , e = d + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040"
      , f = new RegExp("<(/?)([" + d + "][" + e + "]*)","g");
    a.registerHelper("fold", "xml", function(a, c) {
        for (var d = new g(a,c.line,0); ; ) {
            var f, e = m(d);
            if (!e || d.line != c.line || !(f = k(d)))
                return;
            if (!e[1] && "selfClose" != f) {
                var c = b(d.line, d.ch)
                  , h = o(d, e[2]);
                return h && {
                    from: c,
                    to: h.from
                }
            }
        }
    }),
    a.findMatchingTag = function(a, d, e) {
        var f = new g(a,d.line,d.ch,e);
        if (-1 != f.text.indexOf(">") || -1 != f.text.indexOf("<")) {
            var h = k(f)
              , i = h && b(f.line, f.ch)
              , j = h && l(f);
            if (h && j && !(c(f, d) > 0)) {
                var m = {
                    from: b(f.line, f.ch),
                    to: i,
                    tag: j[2]
                };
                return "selfClose" == h ? {
                    open: m,
                    close: null,
                    at: "open"
                } : j[1] ? {
                    open: p(f, j[2]),
                    close: m,
                    at: "close"
                } : (f = new g(a,i.line,i.ch,e),
                {
                    open: m,
                    close: o(f, j[2]),
                    at: "open"
                })
            }
        }
    }
    ,
    a.findEnclosingTag = function(a, b, c) {
        for (var d = new g(a,b.line,b.ch,c); ; ) {
            var e = p(d);
            if (!e)
                break;
            var f = new g(a,b.line,b.ch,c)
              , h = o(f, e.tag);
            if (h)
                return {
                    open: e,
                    close: h
                }
        }
    }
    ,
    a.scanForClosingTag = function(a, b, c, d) {
        var e = new g(a,b.line,b.ch,d ? {
            from: 0,
            to: d
        } : null);
        return o(e, c)
    }
}),
function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function c(c, d) {
        var e = d && d.schemaInfo
          , f = d && d.quoteChar || '"';
        if (e) {
            var g = c.getCursor()
              , h = c.getTokenAt(g);
            h.end > g.ch && (h.end = g.ch,
            h.string = h.string.slice(0, g.ch - h.start));
            var i = a.innerMode(c.getMode(), h.state);
            if ("xml" == i.mode.name) {
                var l, o, j = [], k = !1, m = /\btag\b/.test(h.type) && !/>$/.test(h.string), n = m && /^\w/.test(h.string);
                if (n) {
                    var p = c.getLine(g.line).slice(Math.max(0, h.start - 2), h.start)
                      , q = /<\/$/.test(p) ? "close" : /<$/.test(p) ? "open" : null;
                    q && (o = h.start - ("close" == q ? 2 : 1))
                } else
                    m && "<" == h.string ? q = "open" : m && "</" == h.string && (q = "close");
                if (!m && !i.state.tagName || q) {
                    n && (l = h.string),
                    k = q;
                    var r = i.state.context
                      , s = r && e[r.tagName]
                      , t = r ? s && s.children : e["!top"];
                    if (t && "close" != q)
                        for (var u = 0; u < t.length; ++u)
                            l && 0 != t[u].lastIndexOf(l, 0) || j.push("<" + t[u]);
                    else if ("close" != q)
                        for (var v in e)
                            !e.hasOwnProperty(v) || "!top" == v || "!attrs" == v || l && 0 != v.lastIndexOf(l, 0) || j.push("<" + v);
                    r && (!l || "close" == q && 0 == r.tagName.lastIndexOf(l, 0)) && j.push("</" + r.tagName + ">")
                } else {
                    var s = e[i.state.tagName]
                      , w = s && s.attrs
                      , x = e["!attrs"];
                    if (!w && !x)
                        return;
                    if (w) {
                        if (x) {
                            var y = {};
                            for (var z in x)
                                x.hasOwnProperty(z) && (y[z] = x[z]);
                            for (var z in w)
                                w.hasOwnProperty(z) && (y[z] = w[z]);
                            w = y
                        }
                    } else
                        w = x;
                    if ("string" == h.type || "=" == h.string) {
                        var B, p = c.getRange(b(g.line, Math.max(0, g.ch - 60)), b(g.line, "string" == h.type ? h.start : h.end)), A = p.match(/([^\s\u00a0=<>\"\']+)=$/);
                        if (!A || !w.hasOwnProperty(A[1]) || !(B = w[A[1]]))
                            return;
                        if ("function" == typeof B && (B = B.call(this, c)),
                        "string" == h.type) {
                            l = h.string;
                            var C = 0;
                            /['"]/.test(h.string.charAt(0)) && (f = h.string.charAt(0),
                            l = h.string.slice(1),
                            C++);
                            var D = h.string.length;
                            /['"]/.test(h.string.charAt(D - 1)) && (f = h.string.charAt(D - 1),
                            l = h.string.substr(C, D - 2)),
                            k = !0
                        }
                        for (var u = 0; u < B.length; ++u)
                            l && 0 != B[u].lastIndexOf(l, 0) || j.push(f + B[u] + f)
                    } else {
                        "attribute" == h.type && (l = h.string,
                        k = !0);
                        for (var E in w)
                            !w.hasOwnProperty(E) || l && 0 != E.lastIndexOf(l, 0) || j.push(E)
                    }
                }
                return {
                    list: j,
                    from: k ? b(g.line, null == o ? h.start : o) : g,
                    to: k ? b(g.line, h.end) : g
                }
            }
        }
    }
    var b = a.Pos;
    a.registerHelper("hint", "xml", c)
});
