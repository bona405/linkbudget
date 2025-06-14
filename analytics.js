/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Matomo !== "object") {
    window.Matomo = window.Piwik = (function() {
        var s, b = {}, A = {}, K = document, g = navigator, ac = screen, X = window, h = X.performance || X.mozPerformance || X.msPerformance || X.webkitPerformance, u = X.encodeURIComponent, W = X.decodeURIComponent, k = unescape, M = [], I, v, am = [], z = 0, ag = 0, Y = 0, m = false, q = "";
        function p(au) {
            try {
                return W(au)
            } catch (av) {
                return unescape(au)
            }
        }
        function N(av) {
            var au = typeof av;
            return au !== "undefined"
        }
        function D(au) {
            return typeof au === "function"
        }
        function aa(au) {
            return typeof au === "object"
        }
        function y(au) {
            return typeof au === "string" || au instanceof String
        }
        function al(au) {
            return typeof au === "number" || au instanceof Number
        }
        function ad(au) {
            return N(au) && (al(au) || (y(au) && au.length))
        }
        function E(av) {
            if (!av) {
                return true
            }
            var au;
            for (au in av) {
                if (Object.prototype.hasOwnProperty.call(av, au)) {
                    return false
                }
            }
            return true
        }
        function ap(au) {
            var av = typeof console;
            if (av !== "undefined" && console && console.error) {
                console.error(au)
            }
        }
        function ak() {
            var az, ay, aB, av, au;
            for (az = 0; az < arguments.length; az += 1) {
                au = null;
                if (arguments[az] && arguments[az].slice) {
                    au = arguments[az].slice()
                }
                av = arguments[az];
                aB = av.shift();
                var aA, aw;
                var ax = y(aB) && aB.indexOf("::") > 0;
                if (ax) {
                    aA = aB.split("::");
                    aw = aA[0];
                    aB = aA[1];
                    if ("object" === typeof v[aw] && "function" === typeof v[aw][aB]) {
                        v[aw][aB].apply(v[aw], av)
                    } else {
                        if (au) {
                            am.push(au)
                        }
                    }
                } else {
                    for (ay = 0; ay < M.length; ay++) {
                        if (y(aB)) {
                            aw = M[ay];
                            var aC = aB.indexOf(".") > 0;
                            if (aC) {
                                aA = aB.split(".");
                                if (aw && "object" === typeof aw[aA[0]]) {
                                    aw = aw[aA[0]];
                                    aB = aA[1]
                                } else {
                                    if (au) {
                                        am.push(au);
                                        break
                                    }
                                }
                            }
                            if (aw[aB]) {
                                aw[aB].apply(aw, av)
                            } else {
                                var aD = "The method '" + aB + '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                                ap(aD);
                                if (!aC) {
                                    throw new TypeError(aD)
                                }
                            }
                            if (aB === "addTracker") {
                                break
                            }
                            if (aB === "setTrackerUrl" || aB === "setSiteId") {
                                break
                            }
                        } else {
                            aB.apply(M[ay], av)
                        }
                    }
                }
            }
        }
        function at(ax, aw, av, au) {
            if (ax.addEventListener) {
                ax.addEventListener(aw, av, au);
                return true
            }
            if (ax.attachEvent) {
                return ax.attachEvent("on" + aw, av)
            }
            ax["on" + aw] = av
        }
        function n(au) {
            if (K.readyState === "complete") {
                au()
            } else {
                if (X.addEventListener) {
                    X.addEventListener("load", au, false)
                } else {
                    if (X.attachEvent) {
                        X.attachEvent("onload", au)
                    }
                }
            }
        }
        function r(ax) {
            var au = false;
            if (K.attachEvent) {
                au = K.readyState === "complete"
            } else {
                au = K.readyState !== "loading"
            }
            if (au) {
                ax();
                return
            }
            var aw;
            if (K.addEventListener) {
                at(K, "DOMContentLoaded", function av() {
                    K.removeEventListener("DOMContentLoaded", av, false);
                    if (!au) {
                        au = true;
                        ax()
                    }
                })
            } else {
                if (K.attachEvent) {
                    K.attachEvent("onreadystatechange", function av() {
                        if (K.readyState === "complete") {
                            K.detachEvent("onreadystatechange", av);
                            if (!au) {
                                au = true;
                                ax()
                            }
                        }
                    });
                    if (K.documentElement.doScroll && X === X.top) {
                        (function av() {
                            if (!au) {
                                try {
                                    K.documentElement.doScroll("left")
                                } catch (ay) {
                                    setTimeout(av, 0);
                                    return
                                }
                                au = true;
                                ax()
                            }
                        }())
                    }
                }
            }
            at(X, "load", function() {
                if (!au) {
                    au = true;
                    ax()
                }
            }, false)
        }
        function ah(av, aA, aB) {
            if (!av) {
                return ""
            }
            var au = "", ax, aw, ay, az;
            for (ax in b) {
                if (Object.prototype.hasOwnProperty.call(b, ax)) {
                    az = b[ax] && "function" === typeof b[ax][av];
                    if (az) {
                        aw = b[ax][av];
                        ay = aw(aA || {}, aB);
                        if (ay) {
                            au += ay
                        }
                    }
                }
            }
            return au
        }
        function an(av) {
            var au;
            m = true;
            ah("unload");
            au = new Date();
            var aw = au.getTimeAlias();
            if ((s - aw) > 3000) {
                s = aw + 3000
            }
            if (s) {
                do {
                    au = new Date()
                } while (au.getTimeAlias() < s)
            }
        }
        function o(aw, av) {
            var au = K.createElement("script");
            au.type = "text/javascript";
            au.src = aw;
            if (au.readyState) {
                au.onreadystatechange = function() {
                    var ax = this.readyState;
                    if (ax === "loaded" || ax === "complete") {
                        au.onreadystatechange = null;
                        av()
                    }
                }
            } else {
                au.onload = av
            }
            K.getElementsByTagName("head")[0].appendChild(au)
        }
        function O() {
            var au = "";
            try {
                au = X.top.document.referrer
            } catch (aw) {
                if (X.parent) {
                    try {
                        au = X.parent.document.referrer
                    } catch (av) {
                        au = ""
                    }
                }
            }
            if (au === "") {
                au = K.referrer
            }
            return au
        }
        function t(au) {
            var aw = new RegExp("^([a-z]+):")
              , av = aw.exec(au);
            return av ? av[1] : null
        }
        function d(au) {
            var aw = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)")
              , av = aw.exec(au);
            return av ? av[1] : au
        }
        function H(au) {
            return (/^[0-9][0-9]*(\.[0-9]+)?$/).test(au)
        }
        function R(aw, ax) {
            var au = {}, av;
            for (av in aw) {
                if (aw.hasOwnProperty(av) && ax(aw[av])) {
                    au[av] = aw[av]
                }
            }
            return au
        }
        function C(aw) {
            var au = {}, av;
            for (av in aw) {
                if (aw.hasOwnProperty(av)) {
                    if (H(aw[av])) {
                        au[av] = Math.round(aw[av])
                    } else {
                        throw new Error('Parameter "' + av + '" provided value "' + aw[av] + '" is not valid. Please provide a numeric value.')
                    }
                }
            }
            return au
        }
        function l(av) {
            var aw = "", au;
            for (au in av) {
                if (av.hasOwnProperty(au)) {
                    aw += "&" + u(au) + "=" + u(av[au])
                }
            }
            return aw
        }
        function ao(av, au) {
            av = String(av);
            return av.lastIndexOf(au, 0) === 0
        }
        function V(av, au) {
            av = String(av);
            return av.indexOf(au, av.length - au.length) !== -1
        }
        function B(av, au) {
            av = String(av);
            return av.indexOf(au) !== -1
        }
        function f(av, au) {
            av = String(av);
            return av.substr(0, av.length - au)
        }
        function J(ax, aw, az) {
            ax = String(ax);
            if (!az) {
                az = ""
            }
            var au = ax.indexOf("#");
            var aA = ax.length;
            if (au === -1) {
                au = aA
            }
            var ay = ax.substr(0, au);
            var av = ax.substr(au, aA - au);
            if (ay.indexOf("?") === -1) {
                ay += "?"
            } else {
                if (!V(ay, "?")) {
                    ay += "&"
                }
            }
            return ay + u(aw) + "=" + u(az) + av
        }
        function j(av, aw) {
            av = String(av);
            if (av.indexOf("?" + aw + "=") === -1 && av.indexOf("&" + aw + "=") === -1 && av.indexOf("#" + aw + "=") === -1) {
                return av
            }
            var aB = "";
            var aD = av.indexOf("#");
            if (aD !== -1) {
                aB = av.substr(aD + 1);
                av = av.substr(0, aD)
            }
            var ax = av.indexOf("?");
            var au = "";
            var aA = av;
            if (ax > -1) {
                au = av.substr(ax + 1);
                aA = av.substr(0, ax)
            }
            var az = function(aF) {
                var aH;
                var aG = aF.length - 1;
                for (aG; aG >= 0; aG--) {
                    aH = aF[aG].split("=")[0];
                    if (aH === aw) {
                        aF.splice(aG, 1)
                    }
                }
                return aF
            };
            if (au) {
                var aC = az(au.split("&")).join("&");
                if (aC) {
                    aA += "?" + aC
                }
            }
            if (aB && aB.indexOf("=") > 0) {
                var ay = aB.charAt(0) === "?";
                if (ay) {
                    aB = aB.substr(1)
                }
                var aE = az(aB.split("&")).join("&");
                if (aE) {
                    aA += "#";
                    if (ay) {
                        aA += "?"
                    }
                    aA += aE
                }
            } else {
                if (aB) {
                    aA += "#" + aB
                }
            }
            return aA
        }
        function e(aw, av) {
            var au = "[\\?&#]" + av + "=([^&#]*)";
            var ay = new RegExp(au);
            var ax = ay.exec(aw);
            return ax ? p(ax[1]) : ""
        }
        function a(au) {
            if (au && String(au) === au) {
                return au.replace(/^\s+|\s+$/g, "")
            }
            return au
        }
        function G(au) {
            return unescape(u(au))
        }
        function ar(aJ) {
            var aw = function(aP, aO) {
                return (aP << aO) | (aP >>> (32 - aO))
            }, aK = function(aR) {
                var aP = "", aQ, aO;
                for (aQ = 7; aQ >= 0; aQ--) {
                    aO = (aR >>> (aQ * 4)) & 15;
                    aP += aO.toString(16)
                }
                return aP
            }, az, aM, aL, av = [], aD = 1732584193, aB = 4023233417, aA = 2562383102, ay = 271733878, ax = 3285377520, aI, aH, aG, aF, aE, aN, au, aC = [];
            aJ = G(aJ);
            au = aJ.length;
            for (aM = 0; aM < au - 3; aM += 4) {
                aL = aJ.charCodeAt(aM) << 24 | aJ.charCodeAt(aM + 1) << 16 | aJ.charCodeAt(aM + 2) << 8 | aJ.charCodeAt(aM + 3);
                aC.push(aL)
            }
            switch (au & 3) {
            case 0:
                aM = 2147483648;
                break;
            case 1:
                aM = aJ.charCodeAt(au - 1) << 24 | 8388608;
                break;
            case 2:
                aM = aJ.charCodeAt(au - 2) << 24 | aJ.charCodeAt(au - 1) << 16 | 32768;
                break;
            case 3:
                aM = aJ.charCodeAt(au - 3) << 24 | aJ.charCodeAt(au - 2) << 16 | aJ.charCodeAt(au - 1) << 8 | 128;
                break
            }
            aC.push(aM);
            while ((aC.length & 15) !== 14) {
                aC.push(0)
            }
            aC.push(au >>> 29);
            aC.push((au << 3) & 4294967295);
            for (az = 0; az < aC.length; az += 16) {
                for (aM = 0; aM < 16; aM++) {
                    av[aM] = aC[az + aM]
                }
                for (aM = 16; aM <= 79; aM++) {
                    av[aM] = aw(av[aM - 3] ^ av[aM - 8] ^ av[aM - 14] ^ av[aM - 16], 1)
                }
                aI = aD;
                aH = aB;
                aG = aA;
                aF = ay;
                aE = ax;
                for (aM = 0; aM <= 19; aM++) {
                    aN = (aw(aI, 5) + ((aH & aG) | (~aH & aF)) + aE + av[aM] + 1518500249) & 4294967295;
                    aE = aF;
                    aF = aG;
                    aG = aw(aH, 30);
                    aH = aI;
                    aI = aN
                }
                for (aM = 20; aM <= 39; aM++) {
                    aN = (aw(aI, 5) + (aH ^ aG ^ aF) + aE + av[aM] + 1859775393) & 4294967295;
                    aE = aF;
                    aF = aG;
                    aG = aw(aH, 30);
                    aH = aI;
                    aI = aN
                }
                for (aM = 40; aM <= 59; aM++) {
                    aN = (aw(aI, 5) + ((aH & aG) | (aH & aF) | (aG & aF)) + aE + av[aM] + 2400959708) & 4294967295;
                    aE = aF;
                    aF = aG;
                    aG = aw(aH, 30);
                    aH = aI;
                    aI = aN
                }
                for (aM = 60; aM <= 79; aM++) {
                    aN = (aw(aI, 5) + (aH ^ aG ^ aF) + aE + av[aM] + 3395469782) & 4294967295;
                    aE = aF;
                    aF = aG;
                    aG = aw(aH, 30);
                    aH = aI;
                    aI = aN
                }
                aD = (aD + aI) & 4294967295;
                aB = (aB + aH) & 4294967295;
                aA = (aA + aG) & 4294967295;
                ay = (ay + aF) & 4294967295;
                ax = (ax + aE) & 4294967295
            }
            aN = aK(aD) + aK(aB) + aK(aA) + aK(ay) + aK(ax);
            return aN.toLowerCase()
        }
        function af(aw, au, av) {
            if (!aw) {
                aw = ""
            }
            if (!au) {
                au = ""
            }
            if (aw === "translate.googleusercontent.com") {
                if (av === "") {
                    av = au
                }
                au = e(au, "u");
                aw = d(au)
            } else {
                if (aw === "cc.bingj.com" || aw === "webcache.googleusercontent.com" || aw.slice(0, 5) === "74.6.") {
                    au = K.links[0].href;
                    aw = d(au)
                }
            }
            return [aw, au, av]
        }
        function P(av) {
            var au = av.length;
            if (av.charAt(--au) === ".") {
                av = av.slice(0, au)
            }
            if (av.slice(0, 2) === "*.") {
                av = av.slice(1)
            }
            if (av.indexOf("/") !== -1) {
                av = av.substr(0, av.indexOf("/"))
            }
            return av
        }
        function aq(av) {
            av = av && av.text ? av.text : av;
            if (!y(av)) {
                var au = K.getElementsByTagName("title");
                if (au && N(au[0])) {
                    av = au[0].text
                }
            }
            return av
        }
        function T(au) {
            if (!au) {
                return []
            }
            if (!N(au.children) && N(au.childNodes)) {
                return au.children
            }
            if (N(au.children)) {
                return au.children
            }
            return []
        }
        function Z(av, au) {
            if (!av || !au) {
                return false
            }
            if (av.contains) {
                return av.contains(au)
            }
            if (av === au) {
                return true
            }
            if (av.compareDocumentPosition) {
                return !!(av.compareDocumentPosition(au) & 16)
            }
            return false
        }
        function Q(aw, ax) {
            if (aw && aw.indexOf) {
                return aw.indexOf(ax)
            }
            if (!N(aw) || aw === null) {
                return -1
            }
            if (!aw.length) {
                return -1
            }
            var au = aw.length;
            if (au === 0) {
                return -1
            }
            var av = 0;
            while (av < au) {
                if (aw[av] === ax) {
                    return av
                }
                av++
            }
            return -1
        }
        function i(aw) {
            if (!aw) {
                return false
            }
            function au(ay, az) {
                if (X.getComputedStyle) {
                    return K.defaultView.getComputedStyle(ay, null)[az]
                }
                if (ay.currentStyle) {
                    return ay.currentStyle[az]
                }
            }
            function ax(ay) {
                ay = ay.parentNode;
                while (ay) {
                    if (ay === K) {
                        return true
                    }
                    ay = ay.parentNode
                }
                return false
            }
            function av(aA, aG, ay, aD, aB, aE, aC) {
                var az = aA.parentNode
                  , aF = 1;
                if (!ax(aA)) {
                    return false
                }
                if (9 === az.nodeType) {
                    return true
                }
                if ("0" === au(aA, "opacity") || "none" === au(aA, "display") || "hidden" === au(aA, "visibility")) {
                    return false
                }
                if (!N(aG) || !N(ay) || !N(aD) || !N(aB) || !N(aE) || !N(aC)) {
                    aG = aA.offsetTop;
                    aB = aA.offsetLeft;
                    aD = aG + aA.offsetHeight;
                    ay = aB + aA.offsetWidth;
                    aE = aA.offsetWidth;
                    aC = aA.offsetHeight
                }
                if (aw === aA && (0 === aC || 0 === aE) && "hidden" === au(aA, "overflow")) {
                    return false
                }
                if (az) {
                    if (("hidden" === au(az, "overflow") || "scroll" === au(az, "overflow"))) {
                        if (aB + aF > az.offsetWidth + az.scrollLeft || aB + aE - aF < az.scrollLeft || aG + aF > az.offsetHeight + az.scrollTop || aG + aC - aF < az.scrollTop) {
                            return false
                        }
                    }
                    if (aA.offsetParent === az) {
                        aB += az.offsetLeft;
                        aG += az.offsetTop
                    }
                    return av(az, aG, ay, aD, aB, aE, aC)
                }
                return true
            }
            return av(aw)
        }
        var aj = {
            htmlCollectionToArray: function(aw) {
                var au = [], av;
                if (!aw || !aw.length) {
                    return au
                }
                for (av = 0; av < aw.length; av++) {
                    au.push(aw[av])
                }
                return au
            },
            find: function(au) {
                if (!document.querySelectorAll || !au) {
                    return []
                }
                var av = document.querySelectorAll(au);
                return this.htmlCollectionToArray(av)
            },
            findMultiple: function(aw) {
                if (!aw || !aw.length) {
                    return []
                }
                var av, ax;
                var au = [];
                for (av = 0; av < aw.length; av++) {
                    ax = this.find(aw[av]);
                    au = au.concat(ax)
                }
                au = this.makeNodesUnique(au);
                return au
            },
            findNodesByTagName: function(av, au) {
                if (!av || !au || !av.getElementsByTagName) {
                    return []
                }
                var aw = av.getElementsByTagName(au);
                return this.htmlCollectionToArray(aw)
            },
            makeNodesUnique: function(au) {
                var az = [].concat(au);
                au.sort(function(aB, aA) {
                    if (aB === aA) {
                        return 0
                    }
                    var aD = Q(az, aB);
                    var aC = Q(az, aA);
                    if (aD === aC) {
                        return 0
                    }
                    return aD > aC ? -1 : 1
                });
                if (au.length <= 1) {
                    return au
                }
                var av = 0;
                var ax = 0;
                var ay = [];
                var aw;
                aw = au[av++];
                while (aw) {
                    if (aw === au[av]) {
                        ax = ay.push(av)
                    }
                    aw = au[av++] || null
                }
                while (ax--) {
                    au.splice(ay[ax], 1)
                }
                return au
            },
            getAttributeValueFromNode: function(ay, aw) {
                if (!this.hasNodeAttribute(ay, aw)) {
                    return
                }
                if (ay && ay.getAttribute) {
                    return ay.getAttribute(aw)
                }
                if (!ay || !ay.attributes) {
                    return
                }
                var ax = (typeof ay.attributes[aw]);
                if ("undefined" === ax) {
                    return
                }
                if (ay.attributes[aw].value) {
                    return ay.attributes[aw].value
                }
                if (ay.attributes[aw].nodeValue) {
                    return ay.attributes[aw].nodeValue
                }
                var av;
                var au = ay.attributes;
                if (!au) {
                    return
                }
                for (av = 0; av < au.length; av++) {
                    if (au[av].nodeName === aw) {
                        return au[av].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(av, au) {
                var aw = this.getAttributeValueFromNode(av, au);
                return !!aw
            },
            hasNodeAttribute: function(aw, au) {
                if (aw && aw.hasAttribute) {
                    return aw.hasAttribute(au)
                }
                if (aw && aw.attributes) {
                    var av = (typeof aw.attributes[au]);
                    return "undefined" !== av
                }
                return false
            },
            hasNodeCssClass: function(aw, au) {
                if (aw && au && aw.className) {
                    var av = typeof aw.className === "string" ? aw.className.split(" ") : [];
                    if (-1 !== Q(av, au)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(ay, aw, au) {
                if (!au) {
                    au = []
                }
                if (!ay || !aw) {
                    return au
                }
                var ax = T(ay);
                if (!ax || !ax.length) {
                    return au
                }
                var av, az;
                for (av = 0; av < ax.length; av++) {
                    az = ax[av];
                    if (this.hasNodeAttribute(az, aw)) {
                        au.push(az)
                    }
                    au = this.findNodesHavingAttribute(az, aw, au)
                }
                return au
            },
            findFirstNodeHavingAttribute: function(aw, av) {
                if (!aw || !av) {
                    return
                }
                if (this.hasNodeAttribute(aw, av)) {
                    return aw
                }
                var au = this.findNodesHavingAttribute(aw, av);
                if (au && au.length) {
                    return au[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ax, aw) {
                if (!ax || !aw) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ax, aw)) {
                    return ax
                }
                var au = this.findNodesHavingAttribute(ax, aw);
                if (!au || !au.length) {
                    return
                }
                var av;
                for (av = 0; av < au.length; av++) {
                    if (this.getAttributeValueFromNode(au[av], aw)) {
                        return au[av]
                    }
                }
            },
            findNodesHavingCssClass: function(ay, ax, au) {
                if (!au) {
                    au = []
                }
                if (!ay || !ax) {
                    return au
                }
                if (ay.getElementsByClassName) {
                    var az = ay.getElementsByClassName(ax);
                    return this.htmlCollectionToArray(az)
                }
                var aw = T(ay);
                if (!aw || !aw.length) {
                    return []
                }
                var av, aA;
                for (av = 0; av < aw.length; av++) {
                    aA = aw[av];
                    if (this.hasNodeCssClass(aA, ax)) {
                        au.push(aA)
                    }
                    au = this.findNodesHavingCssClass(aA, ax, au)
                }
                return au
            },
            findFirstNodeHavingClass: function(aw, av) {
                if (!aw || !av) {
                    return
                }
                if (this.hasNodeCssClass(aw, av)) {
                    return aw
                }
                var au = this.findNodesHavingCssClass(aw, av);
                if (au && au.length) {
                    return au[0]
                }
            },
            isLinkElement: function(av) {
                if (!av) {
                    return false
                }
                var au = String(av.nodeName).toLowerCase();
                var ax = ["a", "area"];
                var aw = Q(ax, au);
                return aw !== -1
            },
            setAnyAttribute: function(av, au, aw) {
                if (!av || !au) {
                    return
                }
                if (av.setAttribute) {
                    av.setAttribute(au, aw)
                } else {
                    av[au] = aw
                }
            }
        };
        var x = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "matomoTrackContent",
            LEGACY_CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "matomoContentPiece",
            LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "matomoContentTarget",
            LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
            LEGACY_CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var av = "." + this.CONTENT_CLASS;
                var aw = "." + this.LEGACY_CONTENT_CLASS;
                var au = "[" + this.CONTENT_ATTR + "]";
                var ax = aj.findMultiple([av, aw, au]);
                return ax
            },
            findContentNodesWithinNode: function(ax) {
                if (!ax) {
                    return []
                }
                var av = aj.findNodesHavingCssClass(ax, this.CONTENT_CLASS);
                av = aj.findNodesHavingCssClass(ax, this.LEGACY_CONTENT_CLASS, av);
                var au = aj.findNodesHavingAttribute(ax, this.CONTENT_ATTR);
                if (au && au.length) {
                    var aw;
                    for (aw = 0; aw < au.length; aw++) {
                        av.push(au[aw])
                    }
                }
                if (aj.hasNodeAttribute(ax, this.CONTENT_ATTR)) {
                    av.push(ax)
                } else {
                    if (aj.hasNodeCssClass(ax, this.CONTENT_CLASS)) {
                        av.push(ax)
                    } else {
                        if (aj.hasNodeCssClass(ax, this.LEGACY_CONTENT_CLASS)) {
                            av.push(ax)
                        }
                    }
                }
                av = aj.makeNodesUnique(av);
                return av
            },
            findParentContentNode: function(av) {
                if (!av) {
                    return
                }
                var aw = av;
                var au = 0;
                while (aw && aw !== K && aw.parentNode) {
                    if (aj.hasNodeAttribute(aw, this.CONTENT_ATTR)) {
                        return aw
                    }
                    if (aj.hasNodeCssClass(aw, this.CONTENT_CLASS)) {
                        return aw
                    }
                    if (aj.hasNodeCssClass(aw, this.LEGACY_CONTENT_CLASS)) {
                        return aw
                    }
                    aw = aw.parentNode;
                    if (au > 1000) {
                        break
                    }
                    au++
                }
            },
            findPieceNode: function(av) {
                var au;
                au = aj.findFirstNodeHavingAttribute(av, this.CONTENT_PIECE_ATTR);
                if (!au) {
                    au = aj.findFirstNodeHavingClass(av, this.CONTENT_PIECE_CLASS)
                }
                if (!au) {
                    au = aj.findFirstNodeHavingClass(av, this.LEGACY_CONTENT_PIECE_CLASS)
                }
                if (au) {
                    return au
                }
                return av
            },
            findTargetNodeNoDefault: function(au) {
                if (!au) {
                    return
                }
                var av = aj.findFirstNodeHavingAttributeWithValue(au, this.CONTENT_TARGET_ATTR);
                if (av) {
                    return av
                }
                av = aj.findFirstNodeHavingAttribute(au, this.CONTENT_TARGET_ATTR);
                if (av) {
                    return av
                }
                av = aj.findFirstNodeHavingClass(au, this.CONTENT_TARGET_CLASS);
                if (av) {
                    return av
                }
                av = aj.findFirstNodeHavingClass(au, this.LEGACY_CONTENT_TARGET_CLASS);
                if (av) {
                    return av
                }
            },
            findTargetNode: function(au) {
                var av = this.findTargetNodeNoDefault(au);
                if (av) {
                    return av
                }
                return au
            },
            findContentName: function(av) {
                if (!av) {
                    return
                }
                var ay = aj.findFirstNodeHavingAttributeWithValue(av, this.CONTENT_NAME_ATTR);
                if (ay) {
                    return aj.getAttributeValueFromNode(ay, this.CONTENT_NAME_ATTR)
                }
                var au = this.findContentPiece(av);
                if (au) {
                    return this.removeDomainIfIsInLink(au)
                }
                if (aj.hasNodeAttributeWithValue(av, "title")) {
                    return aj.getAttributeValueFromNode(av, "title")
                }
                var aw = this.findPieceNode(av);
                if (aj.hasNodeAttributeWithValue(aw, "title")) {
                    return aj.getAttributeValueFromNode(aw, "title")
                }
                var ax = this.findTargetNode(av);
                if (aj.hasNodeAttributeWithValue(ax, "title")) {
                    return aj.getAttributeValueFromNode(ax, "title")
                }
            },
            findContentPiece: function(av) {
                if (!av) {
                    return
                }
                var ax = aj.findFirstNodeHavingAttributeWithValue(av, this.CONTENT_PIECE_ATTR);
                if (ax) {
                    return aj.getAttributeValueFromNode(ax, this.CONTENT_PIECE_ATTR)
                }
                var au = this.findPieceNode(av);
                var aw = this.findMediaUrlInNode(au);
                if (aw) {
                    return this.toAbsoluteUrl(aw)
                }
            },
            findContentTarget: function(aw) {
                if (!aw) {
                    return
                }
                var ax = this.findTargetNode(aw);
                if (aj.hasNodeAttributeWithValue(ax, this.CONTENT_TARGET_ATTR)) {
                    return aj.getAttributeValueFromNode(ax, this.CONTENT_TARGET_ATTR)
                }
                var av;
                if (aj.hasNodeAttributeWithValue(ax, "href")) {
                    av = aj.getAttributeValueFromNode(ax, "href");
                    return this.toAbsoluteUrl(av)
                }
                var au = this.findPieceNode(aw);
                if (aj.hasNodeAttributeWithValue(au, "href")) {
                    av = aj.getAttributeValueFromNode(au, "href");
                    return this.toAbsoluteUrl(av)
                }
            },
            isSameDomain: function(au) {
                if (!au || !au.indexOf) {
                    return false
                }
                if (0 === au.indexOf(this.getLocation().origin)) {
                    return true
                }
                var av = au.indexOf(this.getLocation().host);
                if (8 >= av && 0 <= av) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(aw) {
                var av = "^https?://[^/]+";
                var au = "^.*//[^/]+";
                if (aw && aw.search && -1 !== aw.search(new RegExp(av)) && this.isSameDomain(aw)) {
                    aw = aw.replace(new RegExp(au), "");
                    if (!aw) {
                        aw = "/"
                    }
                }
                return aw
            },
            findMediaUrlInNode: function(ay) {
                if (!ay) {
                    return
                }
                var aw = ["img", "embed", "video", "audio"];
                var au = ay.nodeName.toLowerCase();
                if (-1 !== Q(aw, au) && aj.findFirstNodeHavingAttributeWithValue(ay, "src")) {
                    var ax = aj.findFirstNodeHavingAttributeWithValue(ay, "src");
                    return aj.getAttributeValueFromNode(ax, "src")
                }
                if (au === "object" && aj.hasNodeAttributeWithValue(ay, "data")) {
                    return aj.getAttributeValueFromNode(ay, "data")
                }
                if (au === "object") {
                    var az = aj.findNodesByTagName(ay, "param");
                    if (az && az.length) {
                        var av;
                        for (av = 0; av < az.length; av++) {
                            if ("movie" === aj.getAttributeValueFromNode(az[av], "name") && aj.hasNodeAttributeWithValue(az[av], "value")) {
                                return aj.getAttributeValueFromNode(az[av], "value")
                            }
                        }
                    }
                    var aA = aj.findNodesByTagName(ay, "embed");
                    if (aA && aA.length) {
                        return this.findMediaUrlInNode(aA[0])
                    }
                }
            },
            trim: function(au) {
                return a(au)
            },
            isOrWasNodeInViewport: function(az) {
                if (!az || !az.getBoundingClientRect || az.nodeType !== 1) {
                    return true
                }
                var ay = az.getBoundingClientRect();
                var ax = K.documentElement || {};
                var aw = ay.top < 0;
                if (aw && az.offsetTop) {
                    aw = (az.offsetTop + ay.height) > 0
                }
                var av = ax.clientWidth;
                if (X.innerWidth && av > X.innerWidth) {
                    av = X.innerWidth
                }
                var au = ax.clientHeight;
                if (X.innerHeight && au > X.innerHeight) {
                    au = X.innerHeight
                }
                return ((ay.bottom > 0 || aw) && ay.right > 0 && ay.left < av && ((ay.top < au) || aw))
            },
            isNodeVisible: function(av) {
                var au = i(av);
                var aw = this.isOrWasNodeInViewport(av);
                return au && aw
            },
            buildInteractionRequestParams: function(au, av, aw, ax) {
                var ay = "";
                if (au) {
                    ay += "c_i=" + u(au)
                }
                if (av) {
                    if (ay) {
                        ay += "&"
                    }
                    ay += "c_n=" + u(av)
                }
                if (aw) {
                    if (ay) {
                        ay += "&"
                    }
                    ay += "c_p=" + u(aw)
                }
                if (ax) {
                    if (ay) {
                        ay += "&"
                    }
                    ay += "c_t=" + u(ax)
                }
                if (ay) {
                    ay += "&ca=1"
                }
                return ay
            },
            buildImpressionRequestParams: function(au, av, aw) {
                var ax = "c_n=" + u(au) + "&c_p=" + u(av);
                if (aw) {
                    ax += "&c_t=" + u(aw)
                }
                if (ax) {
                    ax += "&ca=1"
                }
                return ax
            },
            buildContentBlock: function(aw) {
                if (!aw) {
                    return
                }
                var au = this.findContentName(aw);
                var av = this.findContentPiece(aw);
                var ax = this.findContentTarget(aw);
                au = this.trim(au);
                av = this.trim(av);
                ax = this.trim(ax);
                return {
                    name: au || "Unknown",
                    piece: av || "Unknown",
                    target: ax || ""
                }
            },
            collectContent: function(ax) {
                if (!ax || !ax.length) {
                    return []
                }
                var aw = [];
                var au, av;
                for (au = 0; au < ax.length; au++) {
                    av = this.buildContentBlock(ax[au]);
                    if (N(av)) {
                        aw.push(av)
                    }
                }
                return aw
            },
            setLocation: function(au) {
                this.location = au
            },
            getLocation: function() {
                var au = this.location || X.location;
                if (!au.origin) {
                    au.origin = au.protocol + "//" + au.hostname + (au.port ? ":" + au.port : "")
                }
                return au
            },
            toAbsoluteUrl: function(av) {
                if ((!av || String(av) !== av) && av !== "") {
                    return av
                }
                if ("" === av) {
                    return this.getLocation().href
                }
                if (av.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + av
                }
                if (av.search(/:\/\//) !== -1) {
                    return av
                }
                if (0 === av.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + av
                }
                if (0 === av.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + av
                }
                if (0 === av.search("^[a-zA-Z]{2,11}:")) {
                    return av
                }
                if (av.search(/^\//) !== -1) {
                    return this.getLocation().origin + av
                }
                var au = "(.*/)";
                var aw = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(au))[0];
                return aw + av
            },
            isUrlToCurrentDomain: function(av) {
                var aw = this.toAbsoluteUrl(av);
                if (!aw) {
                    return false
                }
                var au = this.getLocation().origin;
                if (au === aw) {
                    return true
                }
                if (0 === String(aw).indexOf(au)) {
                    if (":" === String(aw).substr(au.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(av, au) {
                if (!av || !au) {
                    return
                }
                aj.setAnyAttribute(av, "href", au)
            },
            shouldIgnoreInteraction: function(au) {
                if (aj.hasNodeAttribute(au, this.CONTENT_IGNOREINTERACTION_ATTR)) {
                    return true
                }
                if (aj.hasNodeCssClass(au, this.CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                if (aj.hasNodeCssClass(au, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                return false
            }
        };
        function ab(av, ay) {
            if (ay) {
                return ay
            }
            av = x.toAbsoluteUrl(av);
            if (B(av, "?")) {
                var ax = av.indexOf("?");
                av = av.slice(0, ax)
            }
            if (V(av, "matomo.php")) {
                av = f(av, "matomo.php".length)
            } else {
                if (V(av, "piwik.php")) {
                    av = f(av, "piwik.php".length)
                } else {
                    if (V(av, ".php")) {
                        var au = av.lastIndexOf("/");
                        var aw = 1;
                        av = av.slice(0, au + aw)
                    }
                }
            }
            if (V(av, "/js/")) {
                av = f(av, "js/".length)
            }
            return av
        }
        function S(aA) {
            var aC = "Matomo_Overlay";
            var av = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?");
            var aw = av.exec(K.referrer);
            if (aw) {
                var ay = aw[1];
                if (ay !== String(aA)) {
                    return false
                }
                var az = aw[2]
                  , au = aw[3]
                  , ax = aw[4];
                if (!ax) {
                    ax = ""
                } else {
                    if (ax.indexOf("&segment=") === 0) {
                        ax = ax.substr("&segment=".length)
                    }
                }
                X.name = aC + "###" + az + "###" + au + "###" + ax
            }
            var aB = X.name.split("###");
            return aB.length === 4 && aB[0] === aC
        }
        function ae(av, aA, aw) {
            var az = X.name.split("###")
              , ay = az[1]
              , au = az[2]
              , ax = az[3]
              , aB = ab(av, aA);
            o(aB + "plugins/Overlay/client/client.js?v=1", function() {
                Matomo_Overlay_Client.initialize(aB, aw, ay, au, ax)
            })
        }
        function w() {
            var aw;
            try {
                aw = X.frameElement
            } catch (av) {
                return true
            }
            if (N(aw)) {
                return (aw && String(aw.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return X.self !== X.top
            } catch (au) {
                return true
            }
        }
        function U(ct, cn) {
            var bV = this, bo = "mtm_consent", c1 = "mtm_cookie_consent", da = "mtm_consent_removed", ch = af(K.domain, X.location.href, O()), di = P(ch[0]), bZ = p(ch[1]), bA = p(ch[2]), dg = false, cx = "GET", dC = cx, aQ = "application/x-www-form-urlencoded; charset=UTF-8", cR = aQ, aM = ct || "", bU = "", dr = "", cD = "", cj = cn || "", bL = "", b0 = "", bf, bu = "", dy = ["3mf", "7z", "aac", "apk", "arc", "arj", "asc", "asf", "asx", "avi", "azw3", "bin", "bz", "bz2", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpeg", "jpg", "js", "md5", "mobi", "mov", "movie", "mp2", "mp3", "mp4", "mpg", "mpeg", "msi", "msp", "obj", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ply", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "rtf", "sea", "sha", "sha256", "sha512", "sig", "sit", "stl", "tar", "tbz", "tbz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "xz", "z", "zip"], aG = [di], bM = [], cS = [".paypal.com"], cy = [], bY = [], bj = [], bW = 500, dl = true, c7, bg, b4, b1, aw, cH = ["pk_campaign", "mtm_campaign", "piwik_campaign", "matomo_campaign", "utm_campaign", "utm_source", "utm_medium"], bT = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"], cV = ["mtm_campaign", "matomo_campaign", "mtm_cpn", "pk_campaign", "piwik_campaign", "pk_cpn", "utm_campaign", "mtm_keyword", "matomo_kwd", "mtm_kwd", "pk_keyword", "piwik_kwd", "pk_kwd", "utm_term", "mtm_source", "pk_source", "utm_source", "mtm_medium", "pk_medium", "utm_medium", "mtm_content", "pk_content", "utm_content", "mtm_cid", "pk_cid", "utm_id", "mtm_clid", "mtm_group", "pk_group", "mtm_placement", "pk_placement"], bv = "_pk_", aD = "pk_vid", ba = 180, dp, bC, b5 = false, aR = "Lax", bx = false, de, bp, dm = true, bI, c8 = 33955200000, cE = 1800000, dx = 15768000000, bd = true, bR = false, bs = false, b3 = false, aZ = false, cq, b9 = {}, cC = {}, bz = {}, bG = 200, cN = {}, ds = {}, dz = {}, a3 = {}, co = [], by = false, ck = false, cp = [], cu = false, cZ = false, ax = false, dA = false, db = false, aW = false, bn = w(), cT = null, dq = null, a0, bO, cl = ar, bB, aU, bN = false, cK = 0, bH = ["id", "ses", "cvar", "ref"], cY = false, bP = null, c9 = [], cM = [], aF = Y++, aE = false, dn = true, cW = false;
            try {
                bu = K.title
            } catch (cU) {
                bu = ""
            }
            function aL(dN) {
                if (bx && dN !== da) {
                    return 0
                }
                var dL = new RegExp("(^|;)[ ]*" + dN + "=([^;]*)")
                  , dM = dL.exec(K.cookie);
                return dM ? W(dM[2]) : 0
            }
            bP = !aL(da);
            function dG(dP, dQ, dT, dS, dN, dO, dR) {
                if (bx && dP !== da) {
                    return
                }
                var dM;
                if (dT) {
                    dM = new Date();
                    dM.setTime(dM.getTime() + dT)
                }
                if (!dR) {
                    dR = "Lax"
                }
                K.cookie = dP + "=" + u(dQ) + (dT ? ";expires=" + dM.toGMTString() : "") + ";path=" + (dS || "/") + (dN ? ";domain=" + dN : "") + (dO ? ";secure" : "") + ";SameSite=" + dR;
                if ((!dT || dT >= 0) && aL(dP) !== String(dQ)) {
                    var dL = "There was an error setting cookie `" + dP + "`. Please check domain and path.";
                    ap(dL)
                }
            }
            function cf(dL) {
                var dN, dM;
                if (dm !== true && !cY) {
                    for (dM = 0; dM < cH.length; dM++) {
                        dL = j(dL, cH[dM])
                    }
                    for (dM = 0; dM < bT.length; dM++) {
                        dL = j(dL, bT[dM])
                    }
                    for (dM = 0; dM < cV.length; dM++) {
                        dL = j(dL, cV[dM])
                    }
                }
                dL = j(dL, aD);
                dL = j(dL, "ignore_referrer");
                dL = j(dL, "ignore_referer");
                for (dM = 0; dM < cy.length; dM++) {
                    dL = j(dL, cy[dM])
                }
                if (b1) {
                    dN = new RegExp("#.*");
                    return dL.replace(dN, "")
                }
                return dL
            }
            function b8(dN, dL) {
                var dO = t(dL), dM;
                if (dO) {
                    return dL
                }
                if (dL.slice(0, 1) === "/") {
                    return t(dN) + "://" + d(dN) + dL
                }
                dN = cf(dN);
                dM = dN.indexOf("?");
                if (dM >= 0) {
                    dN = dN.slice(0, dM)
                }
                dM = dN.lastIndexOf("/");
                if (dM !== dN.length - 1) {
                    dN = dN.slice(0, dM + 1)
                }
                return dN + dL
            }
            function c5(dN, dL) {
                var dM;
                dN = String(dN).toLowerCase();
                dL = String(dL).toLowerCase();
                if (dN === dL) {
                    return true
                }
                if (dL.slice(0, 1) === ".") {
                    if (dN === dL.slice(1)) {
                        return true
                    }
                    dM = dN.length - dL.length;
                    if ((dM > 0) && (dN.slice(dM) === dL)) {
                        return true
                    }
                }
                return false
            }
            function cB(dL) {
                var dM = document.createElement("a");
                if (dL.indexOf("//") !== 0 && dL.indexOf("http") !== 0) {
                    if (dL.indexOf("*") === 0) {
                        dL = dL.substr(1)
                    }
                    if (dL.indexOf(".") === 0) {
                        dL = dL.substr(1)
                    }
                    dL = "http://" + dL
                }
                dM.href = x.toAbsoluteUrl(dL);
                if (dM.pathname) {
                    return dM.pathname
                }
                return ""
            }
            function be(dM, dL) {
                if (!ao(dL, "/")) {
                    dL = "/" + dL
                }
                if (!ao(dM, "/")) {
                    dM = "/" + dM
                }
                var dN = (dL === "/" || dL === "/*");
                if (dN) {
                    return true
                }
                if (dM === dL) {
                    return true
                }
                dL = String(dL).toLowerCase();
                dM = String(dM).toLowerCase();
                if (V(dL, "*")) {
                    dL = dL.slice(0, -1);
                    dN = (!dL || dL === "/");
                    if (dN) {
                        return true
                    }
                    if (dM === dL) {
                        return true
                    }
                    return dM.indexOf(dL) === 0
                }
                if (!V(dM, "/")) {
                    dM += "/"
                }
                if (!V(dL, "/")) {
                    dL += "/"
                }
                return dM.indexOf(dL) === 0
            }
            function aA(dP, dR) {
                var dM, dL, dN, dO, dQ;
                for (dM = 0; dM < aG.length; dM++) {
                    dO = P(aG[dM]);
                    dQ = cB(aG[dM]);
                    if (c5(dP, dO) && be(dR, dQ)) {
                        return true
                    }
                }
                return false
            }
            function a6(dO) {
                var dM, dL, dN;
                for (dM = 0; dM < aG.length; dM++) {
                    dL = P(aG[dM].toLowerCase());
                    if (dO === dL) {
                        return true
                    }
                    if (dL.slice(0, 1) === ".") {
                        if (dO === dL.slice(1)) {
                            return true
                        }
                        dN = dO.length - dL.length;
                        if ((dN > 0) && (dO.slice(dN) === dL)) {
                            return true
                        }
                    }
                }
                return false
            }
            function cJ(dL) {
                var dM, dO, dQ, dN, dP;
                if (!dL.length || !cS.length) {
                    return false
                }
                dO = d(dL);
                dQ = cB(dL);
                if (dO.indexOf("www.") === 0) {
                    dO = dO.substr(4)
                }
                for (dM = 0; dM < cS.length; dM++) {
                    dN = P(cS[dM]);
                    dP = cB(cS[dM]);
                    if (dN.indexOf("www.") === 0) {
                        dN = dN.substr(4)
                    }
                    if (c5(dO, dN) && be(dQ, dP)) {
                        return true
                    }
                }
                return false
            }
            function au() {
                if (q && q.length > 0) {
                    return true
                }
                q = e(X.location.href, "tracker_install_check");
                return q && q.length > 0
            }
            function cI() {
                if (au() && aa(X)) {
                    X.close()
                }
            }
            function cF(dL, dN) {
                dL = dL.replace("send_image=0", "send_image=1");
                var dM = new Image(1,1);
                dM.onload = function() {
                    I = 0;
                    if (typeof dN === "function") {
                        dN({
                            request: dL,
                            trackerUrl: aM,
                            success: true
                        })
                    }
                }
                ;
                dM.onerror = function() {
                    if (typeof dN === "function") {
                        dN({
                            request: dL,
                            trackerUrl: aM,
                            success: false
                        })
                    }
                }
                ;
                dM.src = aM + (aM.indexOf("?") < 0 ? "?" : "&") + dL;
                cI()
            }
            function c2(dL) {
                if (dC === "POST") {
                    return true
                }
                return dL && (dL.length > 2000 || dL.indexOf('{"requests"') === 0)
            }
            function aT() {
                return "object" === typeof g && "function" === typeof g.sendBeacon && "function" === typeof Blob
            }
            function bh(dP, dS, dR) {
                var dN = aT();
                if (!dN) {
                    return false
                }
                var dO = {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                };
                var dT = false;
                var dM = aM;
                try {
                    var dL = new Blob([dP],dO);
                    if (dR && !c2(dP)) {
                        dL = new Blob([],dO);
                        dM = dM + (dM.indexOf("?") < 0 ? "?" : "&") + dP
                    }
                    dT = g.sendBeacon(dM, dL)
                } catch (dQ) {
                    return false
                }
                if (dT && typeof dS === "function") {
                    dS({
                        request: dP,
                        trackerUrl: aM,
                        success: true,
                        isSendBeacon: true
                    })
                }
                cI();
                return dT
            }
            function dw(dM, dN, dL) {
                if (!N(dL) || null === dL) {
                    dL = true
                }
                if (m && bh(dM, dN, dL)) {
                    return
                }
                setTimeout(function() {
                    if (m && bh(dM, dN, dL)) {
                        return
                    }
                    var dQ;
                    try {
                        var dP = X.XMLHttpRequest ? new X.XMLHttpRequest() : X.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                        dP.open("POST", aM, true);
                        dP.onreadystatechange = function() {
                            if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                                var dR = m && bh(dM, dN, dL);
                                if (!dR && dL) {
                                    cF(dM, dN)
                                } else {
                                    if (typeof dN === "function") {
                                        dN({
                                            request: dM,
                                            trackerUrl: aM,
                                            success: false,
                                            xhr: this
                                        })
                                    }
                                }
                            } else {
                                if (this.readyState === 4 && (typeof dN === "function")) {
                                    dN({
                                        request: dM,
                                        trackerUrl: aM,
                                        success: true,
                                        xhr: this
                                    })
                                }
                            }
                        }
                        ;
                        dP.setRequestHeader("Content-Type", cR);
                        dP.withCredentials = true;
                        dP.send(dM)
                    } catch (dO) {
                        dQ = m && bh(dM, dN, dL);
                        if (!dQ && dL) {
                            cF(dM, dN)
                        } else {
                            if (typeof dN === "function") {
                                dN({
                                    request: dM,
                                    trackerUrl: aM,
                                    success: false
                                })
                            }
                        }
                    }
                    cI()
                }, 50)
            }
            function cv(dM) {
                var dL = new Date();
                var dN = dL.getTime() + dM;
                if (!s || dN > s) {
                    s = dN
                }
            }
            function bl() {
                bn = true;
                cT = new Date().getTime()
            }
            function dF() {
                var dL = new Date().getTime();
                return !cT || (dL - cT) > bg
            }
            function aH() {
                if (dF()) {
                    b4()
                }
            }
            function a5() {
                if (K.visibilityState === "hidden" && dF()) {
                    b4()
                } else {
                    if (K.visibilityState === "visible") {
                        cT = new Date().getTime()
                    }
                }
            }
            function dJ() {
                if (aW || !bg) {
                    return
                }
                aW = true;
                at(X, "focus", bl);
                at(X, "blur", aH);
                at(X, "visibilitychange", a5);
                ag++;
                v.addPlugin("HeartBeat" + ag, {
                    unload: function() {
                        if (aW && dF()) {
                            b4()
                        }
                    }
                })
            }
            function c0(dP) {
                var dM = new Date();
                var dL = dM.getTime();
                dq = dL;
                if (cZ && dL < cZ) {
                    var dN = cZ - dL;
                    setTimeout(dP, dN);
                    cv(dN + 50);
                    cZ += 50;
                    return
                }
                if (cZ === false) {
                    var dO = 800;
                    cZ = dL + dO
                }
                dP()
            }
            function aX() {
                if (aL(da)) {
                    bP = false
                } else {
                    if (aL(bo)) {
                        bP = true
                    }
                }
            }
            function b2(dO) {
                var dN, dM = "", dL = "";
                for (dN in dz) {
                    if (Object.prototype.hasOwnProperty.call(dz, dN)) {
                        dL += "&" + dN + "=" + dz[dN]
                    }
                }
                if (a3) {
                    dM = "&uadata=" + u(X.JSON.stringify(a3))
                }
                if (dO instanceof Array) {
                    for (dN = 0; dN < dO.length; dN++) {
                        dO[dN] += dM + dL
                    }
                } else {
                    dO += dM + dL
                }
                return dO
            }
            function av() {
                return N(g.userAgentData) && D(g.userAgentData.getHighEntropyValues)
            }
            function cG(dL) {
                if (by || ck) {
                    return
                }
                ck = true;
                a3 = {
                    brands: g.userAgentData.brands,
                    platform: g.userAgentData.platform
                };
                g.userAgentData.getHighEntropyValues(["brands", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "formFactors"]).then(function(dN) {
                    var dM;
                    if (dN.fullVersionList) {
                        delete dN.brands;
                        delete dN.uaFullVersion
                    }
                    a3 = dN;
                    by = true;
                    ck = false;
                    dL()
                }, function(dM) {
                    by = true;
                    ck = false;
                    dL()
                })
            }
            function bS(dM, dL, dN) {
                aX();
                if (!bP) {
                    c9.push([dM, dN]);
                    return
                }
                if (dn && !by && av()) {
                    co.push([dM, dN]);
                    return
                }
                aE = true;
                if (!de && dM) {
                    if (cY && bP) {
                        dM += "&consent=1"
                    }
                    dM = b2(dM);
                    c0(function() {
                        if (dl && bh(dM, dN, true)) {
                            cv(100);
                            return
                        }
                        if (c2(dM)) {
                            dw(dM, dN)
                        } else {
                            cF(dM, dN)
                        }
                        cv(dL)
                    })
                }
                if (!aW) {
                    dJ()
                }
            }
            function cA(dL) {
                if (de) {
                    return false
                }
                return (dL && dL.length)
            }
            function dv(dL, dP) {
                if (!dP || dP >= dL.length) {
                    return [dL]
                }
                var dM = 0;
                var dN = dL.length;
                var dO = [];
                for (dM; dM < dN; dM += dP) {
                    dO.push(dL.slice(dM, dM + dP))
                }
                return dO
            }
            function dH(dM, dL) {
                if (!cA(dM)) {
                    return
                }
                if (dn && !by && av()) {
                    co.push([dM, null]);
                    return
                }
                if (!bP) {
                    c9.push([dM, null]);
                    return
                }
                aE = true;
                c0(function() {
                    var dP = dv(dM, 50);
                    var dN = 0, dO;
                    for (dN; dN < dP.length; dN++) {
                        dO = '{"requests":["?' + b2(dP[dN]).join('","?') + '"],"send_image":0}';
                        if (dl && bh(dO, null, false)) {
                            cv(100)
                        } else {
                            dw(dO, null, false)
                        }
                    }
                    cv(dL)
                })
            }
            function a2(dL) {
                return bv + dL + "." + cj + "." + bB
            }
            function cc(dN, dM, dL) {
                dG(dN, "", -129600000, dM, dL)
            }
            function ci() {
                if (bx) {
                    return "0"
                }
                if (!N(X.showModalDialog) && N(g.cookieEnabled)) {
                    return g.cookieEnabled ? "1" : "0"
                }
                var dL = bv + "testcookie";
                dG(dL, "1", undefined, bC, dp, b5, aR);
                var dM = aL(dL) === "1" ? "1" : "0";
                cc(dL);
                return dM
            }
            function bt() {
                bB = cl((dp || di) + (bC || "/")).slice(0, 4)
            }
            function ay() {
                var dM, dL;
                for (dM = 0; dM < co.length; dM++) {
                    dL = typeof co[dM][0];
                    if (dL === "string") {
                        bS(co[dM][0], bW, co[dM][1])
                    } else {
                        if (dL === "object") {
                            dH(co[dM][0], bW)
                        }
                    }
                }
                co = []
            }
            function c6() {
                if (!dn) {
                    return {}
                }
                if (av()) {
                    cG(ay)
                }
                if (N(dz.res)) {
                    return dz
                }
                var dM, dO, dQ = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(g.userAgent))) {
                    if (g.mimeTypes && g.mimeTypes.length) {
                        for (dM in dQ) {
                            if (Object.prototype.hasOwnProperty.call(dQ, dM)) {
                                dO = g.mimeTypes[dQ[dM]];
                                dz[dM] = (dO && dO.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    try {
                        if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(g.userAgent)) && typeof navigator.javaEnabled !== "unknown" && N(g.javaEnabled) && g.javaEnabled()) {
                            dz.java = "1"
                        }
                    } catch (dP) {}
                    if (!N(X.showModalDialog) && N(g.cookieEnabled)) {
                        dz.cookie = g.cookieEnabled ? "1" : "0"
                    } else {
                        dz.cookie = ci()
                    }
                }
                var dN = parseInt(ac.width, 10);
                var dL = parseInt(ac.height, 10);
                dz.res = parseInt(dN, 10) + "x" + parseInt(dL, 10);
                return dz
            }
            function ca() {
                var dM = a2("cvar")
                  , dL = aL(dM);
                if (dL && dL.length) {
                    dL = X.JSON.parse(dL);
                    if (aa(dL)) {
                        return dL
                    }
                }
                return {}
            }
            function c3() {
                if (aZ === false) {
                    aZ = ca()
                }
            }
            function df() {
                var dL = c6();
                return cl((g.userAgent || "") + (g.platform || "") + X.JSON.stringify(dL) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }
            function aJ() {
                var dL = c6();
                return cl((g.userAgent || "") + (g.platform || "") + X.JSON.stringify(dL)).slice(0, 6)
            }
            function bq() {
                return Math.floor((new Date()).getTime() / 1000)
            }
            function aS() {
                var dM = bq();
                var dN = aJ();
                var dL = String(dM) + dN;
                return dL
            }
            function du(dN) {
                dN = String(dN);
                var dQ = aJ();
                var dO = dQ.length;
                var dP = dN.substr(-1 * dO, dO);
                var dM = parseInt(dN.substr(0, dN.length - dO), 10);
                if (dM && dP && dP === dQ) {
                    var dL = bq();
                    if (ba <= 0) {
                        return true
                    }
                    if (dL >= dM && dL <= (dM + ba)) {
                        return true
                    }
                }
                return false
            }
            function dI(dL) {
                if (!db) {
                    return ""
                }
                var dP = e(dL, aD);
                if (!dP) {
                    return ""
                }
                dP = String(dP);
                var dN = new RegExp("^[a-zA-Z0-9]+$");
                if (dP.length === 32 && dN.test(dP)) {
                    var dM = dP.substr(16, 32);
                    if (du(dM)) {
                        var dO = dP.substr(0, 16);
                        return dO
                    }
                }
                return ""
            }
            function dc() {
                if (!b0) {
                    b0 = dI(bZ)
                }
                var dN = new Date(), dL = Math.round(dN.getTime() / 1000), dM = a2("id"), dQ = aL(dM), dP, dO;
                if (dQ) {
                    dP = dQ.split(".");
                    dP.unshift("0");
                    if (b0.length) {
                        dP[1] = b0
                    }
                    return dP
                }
                if (b0.length) {
                    dO = b0
                } else {
                    if ("0" === ci()) {
                        dO = ""
                    } else {
                        dO = df()
                    }
                }
                dP = ["1", dO, dL];
                return dP
            }
            function a9() {
                var dO = dc()
                  , dM = dO[0]
                  , dN = dO[1]
                  , dL = dO[2];
                return {
                    newVisitor: dM,
                    uuid: dN,
                    createTs: dL
                }
            }
            function aP() {
                var dO = new Date()
                  , dM = dO.getTime()
                  , dP = a9().createTs;
                var dL = parseInt(dP, 10);
                var dN = (dL * 1000) + c8 - dM;
                return dN
            }
            function aV(dL) {
                if (!cj) {
                    return
                }
                var dN = new Date()
                  , dM = Math.round(dN.getTime() / 1000);
                if (!N(dL)) {
                    dL = a9()
                }
                var dO = dL.uuid + "." + dL.createTs + ".";
                dG(a2("id"), dO, aP(), bC, dp, b5, aR)
            }
            function bX() {
                var dL = aL(a2("ref"));
                if (dL.length) {
                    try {
                        dL = X.JSON.parse(dL);
                        if (aa(dL)) {
                            return dL
                        }
                    } catch (dM) {}
                }
                return ["", "", 0, ""]
            }
            function bJ(dN) {
                var dM = bv + "testcookie_domain";
                var dL = "testvalue";
                dG(dM, dL, 10000, null, dN, b5, aR);
                if (aL(dM) === dL) {
                    cc(dM, null, dN);
                    return true
                }
                return false
            }
            function aN() {
                var dM = bx;
                bx = false;
                var dL, dN;
                for (dL = 0; dL < bH.length; dL++) {
                    dN = a2(bH[dL]);
                    if (dN !== da && dN !== bo && 0 !== aL(dN)) {
                        cc(dN, bC, dp)
                    }
                }
                bx = dM
            }
            function cg(dL) {
                cj = dL
            }
            function dK(dP) {
                if (!dP || !aa(dP)) {
                    return
                }
                var dO = [];
                var dN;
                for (dN in dP) {
                    if (Object.prototype.hasOwnProperty.call(dP, dN)) {
                        dO.push(dN)
                    }
                }
                var dQ = {};
                dO.sort();
                var dL = dO.length;
                var dM;
                for (dM = 0; dM < dL; dM++) {
                    dQ[dO[dM]] = dP[dO[dM]]
                }
                return dQ
            }
            function cs() {
                dG(a2("ses"), "1", cE, bC, dp, b5, aR)
            }
            function br() {
                var dO = "";
                var dM = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var dN = dM.length;
                var dL;
                for (dL = 0; dL < 6; dL++) {
                    dO += dM.charAt(Math.floor(Math.random() * dN))
                }
                return dO
            }
            function aI(dM) {
                if (cD !== "") {
                    dM += cD;
                    bs = true;
                    return dM
                }
                if (!h) {
                    return dM
                }
                var dN = (typeof h.timing === "object") && h.timing ? h.timing : undefined;
                if (!dN) {
                    dN = (typeof h.getEntriesByType === "function") && h.getEntriesByType("navigation") ? h.getEntriesByType("navigation")[0] : undefined
                }
                if (!dN) {
                    return dM
                }
                var dL = "";
                if (dN.connectEnd && dN.fetchStart) {
                    if (dN.connectEnd < dN.fetchStart) {
                        return dM
                    }
                    dL += "&pf_net=" + Math.round(dN.connectEnd - dN.fetchStart)
                }
                if (dN.responseStart && dN.requestStart) {
                    if (dN.responseStart < dN.requestStart) {
                        return dM
                    }
                    dL += "&pf_srv=" + Math.round(dN.responseStart - dN.requestStart)
                }
                if (dN.responseStart && dN.responseEnd) {
                    if (dN.responseEnd < dN.responseStart) {
                        return dM
                    }
                    dL += "&pf_tfr=" + Math.round(dN.responseEnd - dN.responseStart)
                }
                if (N(dN.domLoading)) {
                    if (dN.domInteractive && dN.domLoading) {
                        if (dN.domInteractive < dN.domLoading) {
                            return dM
                        }
                        dL += "&pf_dm1=" + Math.round(dN.domInteractive - dN.domLoading)
                    }
                } else {
                    if (dN.domInteractive && dN.responseEnd) {
                        if (dN.domInteractive < dN.responseEnd) {
                            return dM
                        }
                        dL += "&pf_dm1=" + Math.round(dN.domInteractive - dN.responseEnd)
                    }
                }
                if (dN.domComplete && dN.domInteractive) {
                    if (dN.domComplete < dN.domInteractive) {
                        return dM
                    }
                    dL += "&pf_dm2=" + Math.round(dN.domComplete - dN.domInteractive)
                }
                if (dN.loadEventEnd && dN.loadEventStart) {
                    if (dN.loadEventEnd < dN.loadEventStart) {
                        return dM
                    }
                    dL += "&pf_onl=" + Math.round(dN.loadEventEnd - dN.loadEventStart)
                }
                return dM + dL
            }
            function cr(dL) {
                return e(dL, "ignore_referrer") === "1" || e(dL, "ignore_referer") === "1"
            }
            function dB() {
                var dV, dO = new Date(), dP = Math.round(dO.getTime() / 1000), d0, dN, dQ = 1024, dX, dR, dM = a2("ses"), dU = a2("ref"), dT = aL(dM), dL = bX(), dZ = bf || bZ, dW, dS, dY = {};
                dW = dL[0];
                dS = dL[1];
                d0 = dL[2];
                dN = dL[3];
                if (!cr(dZ) && !dT) {
                    if ((!bI || !dW.length) && (dm || cY)) {
                        for (dV in cH) {
                            if (Object.prototype.hasOwnProperty.call(cH, dV)) {
                                dW = e(dZ, cH[dV]);
                                if (dW.length) {
                                    break
                                }
                            }
                        }
                        for (dV in bT) {
                            if (Object.prototype.hasOwnProperty.call(bT, dV)) {
                                dS = e(dZ, bT[dV]);
                                if (dS.length) {
                                    break
                                }
                            }
                        }
                    }
                    dX = d(bA);
                    dR = dN.length ? d(dN) : "";
                    if (dX.length && !a6(dX) && !cJ(bA) && (!bI || !dR.length || a6(dR) || cJ(dN))) {
                        dN = bA
                    }
                    if (dN.length || dW.length) {
                        d0 = dP;
                        dL = [dW, dS, d0, cf(dN.slice(0, dQ))];
                        dG(dU, X.JSON.stringify(dL), dx, bC, dp, b5, aR)
                    }
                }
                if (dW.length) {
                    dY._rcn = u(dW)
                }
                if (dS.length) {
                    dY._rck = u(dS)
                }
                dY._refts = d0;
                if (String(dN).length) {
                    dY._ref = u(cf(dN.slice(0, dQ)))
                }
                return dY
            }
            function cL(dM, dY, dZ) {
                var dX, dL = new Date(), dW = aZ, dS = a2("cvar"), d1 = bf || bZ, dN = cr(d1);
                if (bx) {
                    aN()
                }
                if (de) {
                    return ""
                }
                var d0 = new RegExp("^file://","i");
                if (!cW && (X.location.protocol === "file:" || d0.test(d1))) {
                    return ""
                }
                c6();
                var dT = a9();
                var dQ = K.characterSet || K.charset;
                if (!dQ || dQ.toLowerCase() === "utf-8") {
                    dQ = null
                }
                dM += "&idsite=" + cj + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + dL.getHours() + "&m=" + dL.getMinutes() + "&s=" + dL.getSeconds() + "&url=" + u(cf(d1)) + (bA.length && !cJ(bA) && !dN ? "&urlref=" + u(cf(bA)) : "") + (ad(bL) ? "&uid=" + u(bL) : "") + "&_id=" + dT.uuid + "&_idn=" + dT.newVisitor + (dQ ? "&cs=" + u(dQ) : "") + "&send_image=0";
                var dV = dB();
                for (dX in dV) {
                    if (Object.prototype.hasOwnProperty.call(dV, dX)) {
                        dM += "&" + dX + "=" + dV[dX]
                    }
                }
                var d3 = [];
                if (dY) {
                    for (dX in dY) {
                        if (Object.prototype.hasOwnProperty.call(dY, dX) && /^dimension\d+$/.test(dX)) {
                            var dO = dX.replace("dimension", "");
                            d3.push(parseInt(dO, 10));
                            d3.push(String(dO));
                            dM += "&" + dX + "=" + u(dY[dX]);
                            delete dY[dX]
                        }
                    }
                }
                if (dY && E(dY)) {
                    dY = null
                }
                for (dX in cN) {
                    if (Object.prototype.hasOwnProperty.call(cN, dX)) {
                        dM += "&" + dX + "=" + u(cN[dX])
                    }
                }
                for (dX in bz) {
                    if (Object.prototype.hasOwnProperty.call(bz, dX)) {
                        var dR = (-1 === Q(d3, dX));
                        if (dR) {
                            dM += "&dimension" + dX + "=" + u(bz[dX])
                        }
                    }
                }
                if (dY) {
                    dM += "&data=" + u(X.JSON.stringify(dY))
                } else {
                    if (aw) {
                        dM += "&data=" + u(X.JSON.stringify(aw))
                    }
                }
                function dP(d4, d5) {
                    var d6 = X.JSON.stringify(d4);
                    if (d6.length > 2) {
                        return "&" + d5 + "=" + u(d6)
                    }
                    return ""
                }
                var d2 = dK(b9);
                var dU = dK(cC);
                dM += dP(d2, "cvar");
                dM += dP(dU, "e_cvar");
                if (aZ) {
                    dM += dP(aZ, "_cvar");
                    for (dX in dW) {
                        if (Object.prototype.hasOwnProperty.call(dW, dX)) {
                            if (aZ[dX][0] === "" || aZ[dX][1] === "") {
                                delete aZ[dX]
                            }
                        }
                    }
                    if (b3) {
                        dG(dS, X.JSON.stringify(aZ), cE, bC, dp, b5, aR)
                    }
                }
                if (bd && bR && !bs) {
                    dM = aI(dM);
                    bs = true
                }
                if (aU) {
                    dM += "&pv_id=" + aU
                }
                aV(dT);
                cs();
                dM += ah(dZ, {
                    tracker: bV,
                    request: dM
                });
                if (dr.length) {
                    dM += "&" + dr
                }
                if (au()) {
                    dM += "&tracker_install_check=" + q
                }
                if (D(cq)) {
                    dM = cq(dM)
                }
                return dM
            }
            b4 = function bi() {
                var dL = new Date();
                dL = dL.getTime();
                if (!dq) {
                    return false
                }
                if (dq + bg <= dL) {
                    bV.ping();
                    return true
                }
                return false
            }
            ;
            function bD(dO, dN, dS, dP, dL, dV) {
                var dR = "idgoal=0", dM = new Date(), dT = [], dU, dQ = String(dO).length;
                if (dQ) {
                    dR += "&ec_id=" + u(dO)
                }
                dR += "&revenue=" + dN;
                if (String(dS).length) {
                    dR += "&ec_st=" + dS
                }
                if (String(dP).length) {
                    dR += "&ec_tx=" + dP
                }
                if (String(dL).length) {
                    dR += "&ec_sh=" + dL
                }
                if (String(dV).length) {
                    dR += "&ec_dt=" + dV
                }
                if (ds) {
                    for (dU in ds) {
                        if (Object.prototype.hasOwnProperty.call(ds, dU)) {
                            if (!N(ds[dU][1])) {
                                ds[dU][1] = ""
                            }
                            if (!N(ds[dU][2])) {
                                ds[dU][2] = ""
                            }
                            if (!N(ds[dU][3]) || String(ds[dU][3]).length === 0) {
                                ds[dU][3] = 0
                            }
                            if (!N(ds[dU][4]) || String(ds[dU][4]).length === 0) {
                                ds[dU][4] = 1
                            }
                            dT.push(ds[dU])
                        }
                    }
                    dR += "&ec_items=" + u(X.JSON.stringify(dT))
                }
                dR = cL(dR, aw, "ecommerce");
                bS(dR, bW);
                if (dQ) {
                    ds = {}
                }
            }
            function cb(dL, dP, dO, dN, dM, dQ) {
                if (String(dL).length && N(dP)) {
                    bD(dL, dP, dO, dN, dM, dQ)
                }
            }
            function bF(dL) {
                if (N(dL)) {
                    bD("", dL, "", "", "", "")
                }
            }
            function cd(dM, dO, dN) {
                if (!bN) {
                    aU = br()
                }
                var dL = cL("action_name=" + u(aq(dM || bu)), dO, "log");
                if (bd && !bs) {
                    dL = aI(dL)
                }
                bS(dL, bW, dN)
            }
            function bb(dN, dM) {
                var dO, dL = "(^| )(piwik[_-]" + dM + "|matomo[_-]" + dM;
                if (dN) {
                    for (dO = 0; dO < dN.length; dO++) {
                        dL += "|" + dN[dO]
                    }
                }
                dL += ")( |$)";
                return new RegExp(dL)
            }
            function a4(dL) {
                return (aM && dL && 0 === String(dL).indexOf(aM))
            }
            function cP(dP, dL, dQ, dM) {
                if (a4(dL)) {
                    return 0
                }
                var dO = bb(bY, "download")
                  , dN = bb(bj, "link")
                  , dR = new RegExp("\\.(" + dy.join("|") + ")([?&#]|$)","i");
                if (dN.test(dP)) {
                    return "link"
                }
                if (dM || dO.test(dP) || dR.test(dL)) {
                    return "download"
                }
                if (dQ) {
                    return 0
                }
                return "link"
            }
            function aC(dM) {
                var dL;
                dL = dM.parentNode;
                while (dL !== null && N(dL)) {
                    if (aj.isLinkElement(dM)) {
                        break
                    }
                    dM = dL;
                    dL = dM.parentNode
                }
                return dM
            }
            function dE(dQ) {
                dQ = aC(dQ);
                if (!aj.hasNodeAttribute(dQ, "href")) {
                    return
                }
                if (!N(dQ.href)) {
                    return
                }
                var dP = aj.getAttributeValueFromNode(dQ, "href");
                var dM = dQ.pathname || cB(dQ.href);
                var dR = dQ.hostname || d(dQ.href);
                var dS = dR.toLowerCase();
                var dN = dQ.href.replace(dR, dS);
                var dO = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):","i");
                if (!dO.test(dN)) {
                    var dL = cP(dQ.className, dN, aA(dS, dM), aj.hasNodeAttribute(dQ, "download"));
                    if (dL) {
                        return {
                            type: dL,
                            href: dN
                        }
                    }
                }
            }
            function aY(dL, dM, dN, dO) {
                var dP = x.buildInteractionRequestParams(dL, dM, dN, dO);
                if (!dP) {
                    return
                }
                return cL(dP, null, "contentInteraction")
            }
            function bm(dL, dM) {
                if (!dL || !dM) {
                    return false
                }
                var dN = x.findTargetNode(dL);
                if (x.shouldIgnoreInteraction(dN)) {
                    return false
                }
                dN = x.findTargetNodeNoDefault(dL);
                if (dN && !Z(dN, dM)) {
                    return false
                }
                return true
            }
            function cO(dN, dM, dP) {
                if (!dN) {
                    return
                }
                var dL = x.findParentContentNode(dN);
                if (!dL) {
                    return
                }
                if (!bm(dL, dN)) {
                    return
                }
                var dO = x.buildContentBlock(dL);
                if (!dO) {
                    return
                }
                if (!dO.target && dP) {
                    dO.target = dP
                }
                return x.buildInteractionRequestParams(dM, dO.name, dO.piece, dO.target)
            }
            function a7(dM) {
                if (!cp || !cp.length) {
                    return false
                }
                var dL, dN;
                for (dL = 0; dL < cp.length; dL++) {
                    dN = cp[dL];
                    if (dN && dN.name === dM.name && dN.piece === dM.piece && dN.target === dM.target) {
                        return true
                    }
                }
                return false
            }
            function a8(dL) {
                return function(dP) {
                    if (!dL) {
                        return
                    }
                    var dN = x.findParentContentNode(dL);
                    var dM;
                    if (dP) {
                        dM = dP.target || dP.srcElement
                    }
                    if (!dM) {
                        dM = dL
                    }
                    if (!bm(dN, dM)) {
                        return
                    }
                    if (!dN) {
                        return false
                    }
                    var dQ = x.findTargetNode(dN);
                    if (!dQ || x.shouldIgnoreInteraction(dQ)) {
                        return false
                    }
                    var dO = dE(dQ);
                    if (dA && dO && dO.type) {
                        return dO.type
                    }
                    return bV.trackContentInteractionNode(dM, "click")
                }
            }
            function ce(dN) {
                if (!dN || !dN.length) {
                    return
                }
                var dL, dM;
                for (dL = 0; dL < dN.length; dL++) {
                    dM = x.findTargetNode(dN[dL]);
                    if (dM && !dM.contentInteractionTrackingSetupDone) {
                        dM.contentInteractionTrackingSetupDone = true;
                        at(dM, "click", a8(dM))
                    }
                }
            }
            function bK(dN, dO) {
                if (!dN || !dN.length) {
                    return []
                }
                var dL, dM;
                for (dL = 0; dL < dN.length; dL++) {
                    if (a7(dN[dL])) {
                        dN.splice(dL, 1);
                        dL--
                    } else {
                        cp.push(dN[dL])
                    }
                }
                if (!dN || !dN.length) {
                    return []
                }
                ce(dO);
                var dP = [];
                for (dL = 0; dL < dN.length; dL++) {
                    dM = cL(x.buildImpressionRequestParams(dN[dL].name, dN[dL].piece, dN[dL].target), undefined, "contentImpressions");
                    if (dM) {
                        dP.push(dM)
                    }
                }
                return dP
            }
            function cX(dM) {
                var dL = x.collectContent(dM);
                return bK(dL, dM)
            }
            function bk(dM) {
                if (!dM || !dM.length) {
                    return []
                }
                var dL;
                for (dL = 0; dL < dM.length; dL++) {
                    if (!x.isNodeVisible(dM[dL])) {
                        dM.splice(dL, 1);
                        dL--
                    }
                }
                if (!dM || !dM.length) {
                    return []
                }
                return cX(dM)
            }
            function aO(dN, dL, dM) {
                var dO = x.buildImpressionRequestParams(dN, dL, dM);
                return cL(dO, null, "contentImpression")
            }
            function dD(dO, dM) {
                if (!dO) {
                    return
                }
                var dL = x.findParentContentNode(dO);
                var dN = x.buildContentBlock(dL);
                if (!dN) {
                    return
                }
                if (!dM) {
                    dM = "Unknown"
                }
                return aY(dM, dN.name, dN.piece, dN.target)
            }
            function dd(dM, dO, dL, dN) {
                return "e_c=" + u(dM) + "&e_a=" + u(dO) + (N(dL) ? "&e_n=" + u(dL) : "") + (N(dN) ? "&e_v=" + u(dN) : "") + "&ca=1"
            }
            function aB(dN, dP, dL, dO, dR, dQ) {
                if (!ad(dN) || !ad(dP)) {
                    ap("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var dM = cL(dd(dN, dP, dL, dO), dR, "event");
                bS(dM, bW, dQ)
            }
            function cm(dL, dO, dM, dP) {
                var dN = cL("search=" + u(dL) + (dO ? "&search_cat=" + u(dO) : "") + (N(dM) ? "&search_count=" + dM : ""), dP, "sitesearch");
                bS(dN, bW)
            }
            function dh(dL, dP, dO, dN) {
                var dM = cL("idgoal=" + dL + (dP ? "&revenue=" + dP : ""), dO, "goal");
                bS(dM, bW, dN)
            }
            function dt(dO, dL, dS, dR, dN) {
                var dQ = dL + "=" + u(cf(dO));
                var dM = cO(dN, "click", dO);
                if (dM) {
                    dQ += "&" + dM
                }
                var dP = cL(dQ, dS, "link");
                bS(dP, bW, dR)
            }
            function b7(dM, dL) {
                if (dM !== "") {
                    return dM + dL.charAt(0).toUpperCase() + dL.slice(1)
                }
                return dL
            }
            function cw(dQ) {
                var dP, dL, dO = ["", "webkit", "ms", "moz"], dN;
                if (!bp) {
                    for (dL = 0; dL < dO.length; dL++) {
                        dN = dO[dL];
                        if (Object.prototype.hasOwnProperty.call(K, b7(dN, "hidden"))) {
                            if (K[b7(dN, "visibilityState")] === "prerender") {
                                dP = true
                            }
                            break
                        }
                    }
                }
                if (dP) {
                    at(K, dN + "visibilitychange", function dM() {
                        K.removeEventListener(dN + "visibilitychange", dM, false);
                        dQ()
                    });
                    return
                }
                dQ()
            }
            function bE() {
                var dM = bV.getVisitorId();
                var dL = aS();
                return dM + dL
            }
            function cz(dL) {
                if (!dL) {
                    return
                }
                if (!aj.hasNodeAttribute(dL, "href")) {
                    return
                }
                var dM = aj.getAttributeValueFromNode(dL, "href");
                if (!dM || a4(dM)) {
                    return
                }
                if (!bV.getVisitorId()) {
                    return
                }
                dM = j(dM, aD);
                var dN = bE();
                dM = J(dM, aD, dN);
                aj.setAnyAttribute(dL, "href", dM)
            }
            function bw(dO) {
                var dP = aj.getAttributeValueFromNode(dO, "href");
                if (!dP) {
                    return false
                }
                dP = String(dP);
                var dM = dP.indexOf("//") === 0 || dP.indexOf("http://") === 0 || dP.indexOf("https://") === 0;
                if (!dM) {
                    return false
                }
                var dL = dO.pathname || cB(dO.href);
                var dN = (dO.hostname || d(dO.href)).toLowerCase();
                if (aA(dN, dL)) {
                    if (!c5(di, P(dN))) {
                        return true
                    }
                    return false
                }
                return false
            }
            function c4(dL) {
                var dM = dE(dL);
                if (dM && dM.type) {
                    dM.href = p(dM.href);
                    dt(dM.href, dM.type, undefined, null, dL);
                    return
                }
                if (db) {
                    dL = aC(dL);
                    if (bw(dL)) {
                        cz(dL)
                    }
                }
            }
            function cQ() {
                return K.all && !K.addEventListener
            }
            function dj(dL) {
                var dN = dL.which;
                var dM = (typeof dL.button);
                if (!dN && dM !== "undefined") {
                    if (cQ()) {
                        if (dL.button & 1) {
                            dN = 1
                        } else {
                            if (dL.button & 2) {
                                dN = 3
                            } else {
                                if (dL.button & 4) {
                                    dN = 2
                                }
                            }
                        }
                    } else {
                        if (dL.button === 0 || dL.button === "0") {
                            dN = 1
                        } else {
                            if (dL.button & 1) {
                                dN = 2
                            } else {
                                if (dL.button & 2) {
                                    dN = 3
                                }
                            }
                        }
                    }
                }
                return dN
            }
            function b6(dL) {
                switch (dj(dL)) {
                case 1:
                    return "left";
                case 2:
                    return "middle";
                case 3:
                    return "right"
                }
            }
            function bc(dL) {
                return dL.target || dL.srcElement
            }
            function dk(dL) {
                return dL === "A" || dL === "AREA"
            }
            function aK(dL) {
                function dM(dO) {
                    var dP = bc(dO);
                    var dQ = dP.nodeName;
                    var dN = bb(bM, "ignore");
                    while (!dk(dQ) && dP && dP.parentNode) {
                        dP = dP.parentNode;
                        dQ = dP.nodeName
                    }
                    if (dP && dk(dQ) && !dN.test(dP.className)) {
                        return dP
                    }
                }
                return function(dP) {
                    dP = dP || X.event;
                    var dQ = dM(dP);
                    if (!dQ) {
                        return
                    }
                    var dO = b6(dP);
                    if (dP.type === "click") {
                        var dN = false;
                        if (dL && dO === "middle") {
                            dN = true
                        }
                        if (dQ && !dN) {
                            c4(dQ)
                        }
                    } else {
                        if (dP.type === "mousedown") {
                            if (dO === "middle" && dQ) {
                                a0 = dO;
                                bO = dQ
                            } else {
                                a0 = bO = null
                            }
                        } else {
                            if (dP.type === "mouseup") {
                                if (dO === a0 && dQ === bO) {
                                    c4(dQ)
                                }
                                a0 = bO = null
                            } else {
                                if (dP.type === "contextmenu") {
                                    c4(dQ)
                                }
                            }
                        }
                    }
                }
            }
            function az(dO, dN, dL) {
                var dM = typeof dN;
                if (dM === "undefined") {
                    dN = true
                }
                at(dO, "click", aK(dN), dL);
                if (dN) {
                    at(dO, "mouseup", aK(dN), dL);
                    at(dO, "mousedown", aK(dN), dL);
                    at(dO, "contextmenu", aK(dN), dL)
                }
            }
            function a1(dM, dP, dQ) {
                if (cu) {
                    return true
                }
                cu = true;
                var dR = false;
                var dO, dN;
                function dL() {
                    dR = true
                }
                n(function() {
                    function dS(dU) {
                        setTimeout(function() {
                            if (!cu) {
                                return
                            }
                            dR = false;
                            dQ.trackVisibleContentImpressions();
                            dS(dU)
                        }, dU)
                    }
                    function dT(dU) {
                        setTimeout(function() {
                            if (!cu) {
                                return
                            }
                            if (dR) {
                                dR = false;
                                dQ.trackVisibleContentImpressions()
                            }
                            dT(dU)
                        }, dU)
                    }
                    if (dM) {
                        dO = ["scroll", "resize"];
                        for (dN = 0; dN < dO.length; dN++) {
                            if (K.addEventListener) {
                                K.addEventListener(dO[dN], dL, false)
                            } else {
                                X.attachEvent("on" + dO[dN], dL)
                            }
                        }
                        dT(100)
                    }
                    if (dP && dP > 0) {
                        dP = parseInt(dP, 10);
                        dS(dP)
                    }
                })
            }
            var bQ = {
                enabled: true,
                requests: [],
                timeout: null,
                interval: 2500,
                sendRequests: function() {
                    var dL = this.requests;
                    this.requests = [];
                    if (dL.length === 1) {
                        bS(dL[0], bW)
                    } else {
                        dH(dL, bW)
                    }
                },
                canQueue: function() {
                    return !m && this.enabled
                },
                pushMultiple: function(dM) {
                    if (!this.canQueue()) {
                        dH(dM, bW);
                        return
                    }
                    var dL;
                    for (dL = 0; dL < dM.length; dL++) {
                        this.push(dM[dL])
                    }
                },
                push: function(dL) {
                    if (!dL) {
                        return
                    }
                    if (!this.canQueue()) {
                        bS(dL, bW);
                        return
                    }
                    bQ.requests.push(dL);
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }
                    this.timeout = setTimeout(function() {
                        bQ.timeout = null;
                        bQ.sendRequests()
                    }, bQ.interval);
                    var dM = "RequestQueue" + aF;
                    if (!Object.prototype.hasOwnProperty.call(b, dM)) {
                        b[dM] = {
                            unload: function() {
                                if (bQ.timeout) {
                                    clearTimeout(bQ.timeout)
                                }
                                bQ.sendRequests()
                            }
                        }
                    }
                }
            };
            bt();
            this.hasConsent = function() {
                return bP
            }
            ;
            this.getVisitorInfo = function() {
                if (!aL(a2("id"))) {
                    aV()
                }
                return dc()
            }
            ;
            this.getVisitorId = function() {
                return this.getVisitorInfo()[1]
            }
            ;
            this.getAttributionInfo = function() {
                return bX()
            }
            ;
            this.getAttributionCampaignName = function() {
                return bX()[0]
            }
            ;
            this.getAttributionCampaignKeyword = function() {
                return bX()[1]
            }
            ;
            this.getAttributionReferrerTimestamp = function() {
                return bX()[2]
            }
            ;
            this.getAttributionReferrerUrl = function() {
                return bX()[3]
            }
            ;
            this.setTrackerUrl = function(dL) {
                aM = dL
            }
            ;
            this.getTrackerUrl = function() {
                return aM
            }
            ;
            this.getMatomoUrl = function() {
                return ab(this.getTrackerUrl(), bU)
            }
            ;
            this.getPiwikUrl = function() {
                return this.getMatomoUrl()
            }
            ;
            this.addTracker = function(dN, dM) {
                if (!N(dN) || null === dN) {
                    dN = this.getTrackerUrl()
                }
                var dL = new U(dN,dM);
                M.push(dL);
                v.trigger("TrackerAdded", [this]);
                return dL
            }
            ;
            this.getSiteId = function() {
                return cj
            }
            ;
            this.setSiteId = function(dL) {
                cg(dL)
            }
            ;
            this.resetUserId = function() {
                bL = ""
            }
            ;
            this.setUserId = function(dL) {
                if (ad(dL)) {
                    bL = dL
                }
            }
            ;
            this.setVisitorId = function(dM) {
                var dL = /[0-9A-Fa-f]{16}/g;
                if (y(dM) && dL.test(dM)) {
                    b0 = dM
                } else {
                    ap("Invalid visitorId set" + dM)
                }
            }
            ;
            this.getUserId = function() {
                return bL
            }
            ;
            this.setCustomData = function(dL, dM) {
                if (aa(dL)) {
                    aw = dL
                } else {
                    if (!aw) {
                        aw = {}
                    }
                    aw[dL] = dM
                }
            }
            ;
            this.getCustomData = function() {
                return aw
            }
            ;
            this.setCustomRequestProcessing = function(dL) {
                cq = dL
            }
            ;
            this.appendToTrackingUrl = function(dL) {
                dr = dL
            }
            ;
            this.getRequest = function(dL) {
                return cL(dL)
            }
            ;
            this.addPlugin = function(dL, dM) {
                b[dL] = dM
            }
            ;
            this.setCustomDimension = function(dL, dM) {
                dL = parseInt(dL, 10);
                if (dL > 0) {
                    if (!N(dM)) {
                        dM = ""
                    }
                    if (!y(dM)) {
                        dM = String(dM)
                    }
                    bz[dL] = dM
                }
            }
            ;
            this.getCustomDimension = function(dL) {
                dL = parseInt(dL, 10);
                if (dL > 0 && Object.prototype.hasOwnProperty.call(bz, dL)) {
                    return bz[dL]
                }
            }
            ;
            this.deleteCustomDimension = function(dL) {
                dL = parseInt(dL, 10);
                if (dL > 0) {
                    delete bz[dL]
                }
            }
            ;
            this.setCustomVariable = function(dM, dL, dP, dN) {
                var dO;
                if (!N(dN)) {
                    dN = "visit"
                }
                if (!N(dL)) {
                    return
                }
                if (!N(dP)) {
                    dP = ""
                }
                if (dM > 0) {
                    dL = !y(dL) ? String(dL) : dL;
                    dP = !y(dP) ? String(dP) : dP;
                    dO = [dL.slice(0, bG), dP.slice(0, bG)];
                    if (dN === "visit" || dN === 2) {
                        c3();
                        aZ[dM] = dO
                    } else {
                        if (dN === "page" || dN === 3) {
                            b9[dM] = dO
                        } else {
                            if (dN === "event") {
                                cC[dM] = dO
                            }
                        }
                    }
                }
            }
            ;
            this.getCustomVariable = function(dM, dN) {
                var dL;
                if (!N(dN)) {
                    dN = "visit"
                }
                if (dN === "page" || dN === 3) {
                    dL = b9[dM]
                } else {
                    if (dN === "event") {
                        dL = cC[dM]
                    } else {
                        if (dN === "visit" || dN === 2) {
                            c3();
                            dL = aZ[dM]
                        }
                    }
                }
                if (!N(dL) || (dL && dL[0] === "")) {
                    return false
                }
                return dL
            }
            ;
            this.deleteCustomVariable = function(dL, dM) {
                if (this.getCustomVariable(dL, dM)) {
                    this.setCustomVariable(dL, "", "", dM)
                }
            }
            ;
            this.deleteCustomVariables = function(dL) {
                if (dL === "page" || dL === 3) {
                    b9 = {}
                } else {
                    if (dL === "event") {
                        cC = {}
                    } else {
                        if (dL === "visit" || dL === 2) {
                            aZ = {}
                        }
                    }
                }
            }
            ;
            this.storeCustomVariablesInCookie = function() {
                b3 = true
            }
            ;
            this.setLinkTrackingTimer = function(dL) {
                bW = dL
            }
            ;
            this.getLinkTrackingTimer = function() {
                return bW
            }
            ;
            this.setDownloadExtensions = function(dL) {
                if (y(dL)) {
                    dL = dL.split("|")
                }
                dy = dL
            }
            ;
            this.addDownloadExtensions = function(dM) {
                var dL;
                if (y(dM)) {
                    dM = dM.split("|")
                }
                for (dL = 0; dL < dM.length; dL++) {
                    dy.push(dM[dL])
                }
            }
            ;
            this.removeDownloadExtensions = function(dN) {
                var dM, dL = [];
                if (y(dN)) {
                    dN = dN.split("|")
                }
                for (dM = 0; dM < dy.length; dM++) {
                    if (Q(dN, dy[dM]) === -1) {
                        dL.push(dy[dM])
                    }
                }
                dy = dL
            }
            ;
            this.setDomains = function(dL) {
                aG = y(dL) ? [dL] : dL;
                var dP = false, dN = 0, dM;
                for (dN; dN < aG.length; dN++) {
                    dM = String(aG[dN]);
                    if (c5(di, P(dM))) {
                        dP = true;
                        break
                    }
                    var dO = cB(dM);
                    if (dO && dO !== "/" && dO !== "/*") {
                        dP = true;
                        break
                    }
                }
                if (!dP) {
                    aG.push(di)
                }
            }
            ;
            this.setExcludedReferrers = function(dL) {
                cS = y(dL) ? [dL] : dL
            }
            ;
            this.enableCrossDomainLinking = function() {
                db = true
            }
            ;
            this.disableCrossDomainLinking = function() {
                db = false
            }
            ;
            this.isCrossDomainLinkingEnabled = function() {
                return db
            }
            ;
            this.setCrossDomainLinkingTimeout = function(dL) {
                ba = dL
            }
            ;
            this.getCrossDomainLinkingUrlParameter = function() {
                return u(aD) + "=" + u(bE())
            }
            ;
            this.setIgnoreClasses = function(dL) {
                bM = y(dL) ? [dL] : dL
            }
            ;
            this.setRequestMethod = function(dL) {
                if (dL) {
                    dC = String(dL).toUpperCase()
                } else {
                    dC = cx
                }
                if (dC === "GET") {
                    this.disableAlwaysUseSendBeacon()
                }
            }
            ;
            this.setRequestContentType = function(dL) {
                cR = dL || aQ
            }
            ;
            this.setGenerationTimeMs = function(dL) {
                ap("setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. The replacement is setPagePerformanceTiming.")
            }
            ;
            this.setPagePerformanceTiming = function(dP, dR, dQ, dM, dS, dN) {
                var dO = {
                    pf_net: dP,
                    pf_srv: dR,
                    pf_tfr: dQ,
                    pf_dm1: dM,
                    pf_dm2: dS,
                    pf_onl: dN
                };
                try {
                    dO = R(dO, N);
                    dO = C(dO);
                    cD = l(dO);
                    if (cD === "") {
                        ap("setPagePerformanceTiming() called without parameters. This function needs to be called with at least one performance parameter.");
                        return
                    }
                    bs = false;
                    bR = true
                } catch (dL) {
                    ap("setPagePerformanceTiming: " + dL.toString())
                }
            }
            ;
            this.setReferrerUrl = function(dL) {
                bA = dL
            }
            ;
            this.setCustomUrl = function(dL) {
                bf = b8(bZ, dL)
            }
            ;
            this.getCurrentUrl = function() {
                return bf || bZ
            }
            ;
            this.setDocumentTitle = function(dL) {
                bu = dL
            }
            ;
            this.setPageViewId = function(dL) {
                aU = dL;
                bN = true
            }
            ;
            this.getPageViewId = function() {
                return aU
            }
            ;
            this.setAPIUrl = function(dL) {
                bU = dL
            }
            ;
            this.setDownloadClasses = function(dL) {
                bY = y(dL) ? [dL] : dL
            }
            ;
            this.setLinkClasses = function(dL) {
                bj = y(dL) ? [dL] : dL
            }
            ;
            this.setCampaignNameKey = function(dL) {
                cH = y(dL) ? [dL] : dL
            }
            ;
            this.setCampaignKeywordKey = function(dL) {
                bT = y(dL) ? [dL] : dL
            }
            ;
            this.discardHashTag = function(dL) {
                b1 = dL
            }
            ;
            this.setCookieNamePrefix = function(dL) {
                bv = dL;
                if (aZ) {
                    aZ = ca()
                }
            }
            ;
            this.setCookieDomain = function(dL) {
                var dM = P(dL);
                if (!bx && !bJ(dM)) {
                    ap("Can't write cookie on domain " + dL)
                } else {
                    dp = dM;
                    bt()
                }
            }
            ;
            this.setExcludedQueryParams = function(dL) {
                cy = y(dL) ? [dL] : dL
            }
            ;
            this.getCookieDomain = function() {
                return dp
            }
            ;
            this.hasCookies = function() {
                return "1" === ci()
            }
            ;
            this.setSessionCookie = function(dN, dM, dL) {
                if (!dN) {
                    throw new Error("Missing cookie name")
                }
                if (!N(dL)) {
                    dL = cE
                }
                bH.push(dN);
                dG(a2(dN), dM, dL, bC, dp, b5, aR)
            }
            ;
            this.getCookie = function(dM) {
                var dL = aL(a2(dM));
                if (dL === 0) {
                    return null
                }
                return dL
            }
            ;
            this.setCookiePath = function(dL) {
                bC = dL;
                bt()
            }
            ;
            this.getCookiePath = function() {
                return bC
            }
            ;
            this.setVisitorCookieTimeout = function(dL) {
                c8 = dL * 1000
            }
            ;
            this.setSessionCookieTimeout = function(dL) {
                cE = dL * 1000
            }
            ;
            this.getSessionCookieTimeout = function() {
                return cE
            }
            ;
            this.setReferralCookieTimeout = function(dL) {
                dx = dL * 1000
            }
            ;
            this.setConversionAttributionFirstReferrer = function(dL) {
                bI = dL
            }
            ;
            this.setSecureCookie = function(dL) {
                if (dL && location.protocol !== "https:") {
                    ap("Error in setSecureCookie: You cannot use `Secure` on http.");
                    return
                }
                b5 = dL
            }
            ;
            this.setCookieSameSite = function(dL) {
                dL = String(dL);
                dL = dL.charAt(0).toUpperCase() + dL.toLowerCase().slice(1);
                if (dL !== "None" && dL !== "Lax" && dL !== "Strict") {
                    ap("Ignored value for sameSite. Please use either Lax, None, or Strict.");
                    return
                }
                if (dL === "None") {
                    if (location.protocol === "https:") {
                        this.setSecureCookie(true)
                    } else {
                        ap("sameSite=None cannot be used on http, reverted to sameSite=Lax.");
                        dL = "Lax"
                    }
                }
                aR = dL
            }
            ;
            this.disableCookies = function() {
                bx = true;
                if (cj) {
                    aN()
                }
            }
            ;
            this.areCookiesEnabled = function() {
                return !bx
            }
            ;
            this.setCookieConsentGiven = function() {
                if (bx && !de) {
                    bx = false;
                    if (!dn) {
                        this.enableBrowserFeatureDetection()
                    }
                    if (cj && aE) {
                        aV();
                        var dL = cL("ping=1", null, "ping");
                        bS(dL, bW)
                    }
                }
            }
            ;
            this.requireCookieConsent = function() {
                if (this.getRememberedCookieConsent()) {
                    return false
                }
                this.disableCookies();
                return true
            }
            ;
            this.getRememberedCookieConsent = function() {
                return aL(c1)
            }
            ;
            this.forgetCookieConsentGiven = function() {
                cc(c1, bC, dp);
                this.disableCookies()
            }
            ;
            this.rememberCookieConsentGiven = function(dM) {
                if (dM) {
                    dM = dM * 60 * 60 * 1000
                } else {
                    dM = 30 * 365 * 24 * 60 * 60 * 1000
                }
                this.setCookieConsentGiven();
                var dL = new Date().getTime();
                dG(c1, dL, dM, bC, dp, b5, aR)
            }
            ;
            this.deleteCookies = function() {
                aN()
            }
            ;
            this.setDoNotTrack = function(dM) {
                var dL = g.doNotTrack || g.msDoNotTrack;
                de = dM && (dL === "yes" || dL === "1");
                if (de) {
                    this.disableCookies()
                }
            }
            ;
            this.disableCampaignParameters = function() {
                dm = false
            }
            ;
            this.alwaysUseSendBeacon = function() {
                dl = true
            }
            ;
            this.disableAlwaysUseSendBeacon = function() {
                dl = false
            }
            ;
            this.addListener = function(dM, dL) {
                az(dM, dL, false)
            }
            ;
            this.enableLinkTracking = function(dM) {
                if (dA) {
                    return
                }
                dA = true;
                var dL = this;
                r(function() {
                    ax = true;
                    var dN = K.body;
                    az(dN, dM, true)
                })
            }
            ;
            this.enableJSErrorTracking = function() {
                if (dg) {
                    return
                }
                dg = true;
                var dL = X.onerror;
                X.onerror = function(dQ, dO, dN, dP, dM) {
                    cw(function() {
                        var dR = "JavaScript Errors";
                        var dS = dO + ":" + dN;
                        if (dP) {
                            dS += ":" + dP
                        }
                        if (Q(cM, dR + dS + dQ) === -1) {
                            cM.push(dR + dS + dQ);
                            aB(dR, dS, dQ)
                        }
                    });
                    if (dL) {
                        return dL(dQ, dO, dN, dP, dM)
                    }
                    return false
                }
            }
            ;
            this.disablePerformanceTracking = function() {
                bd = false
            }
            ;
            this.enableHeartBeatTimer = function(dL) {
                dL = Math.max(dL || 15, 5);
                bg = dL * 1000;
                if (dq !== null) {
                    dJ()
                }
            }
            ;
            this.disableHeartBeatTimer = function() {
                if (bg || aW) {
                    if (X.removeEventListener) {
                        X.removeEventListener("focus", bl);
                        X.removeEventListener("blur", aH);
                        X.removeEventListener("visibilitychange", a5)
                    } else {
                        if (X.detachEvent) {
                            X.detachEvent("onfocus", bl);
                            X.detachEvent("onblur", aH);
                            X.detachEvent("visibilitychange", a5)
                        }
                    }
                }
                bg = null;
                aW = false
            }
            ;
            this.killFrame = function() {
                if (X.location !== X.top.location) {
                    X.top.location = X.location
                }
            }
            ;
            this.redirectFile = function(dL) {
                if (X.location.protocol === "file:") {
                    X.location = dL
                }
            }
            ;
            this.setCountPreRendered = function(dL) {
                bp = dL
            }
            ;
            this.trackGoal = function(dL, dO, dN, dM) {
                cw(function() {
                    dh(dL, dO, dN, dM)
                })
            }
            ;
            this.trackLink = function(dM, dL, dO, dN) {
                cw(function() {
                    dt(dM, dL, dO, dN)
                })
            }
            ;
            this.getNumTrackedPageViews = function() {
                return cK
            }
            ;
            this.trackPageView = function(dL, dN, dM) {
                cp = [];
                c9 = [];
                cM = [];
                if (S(cj)) {
                    cw(function() {
                        ae(aM, bU, cj)
                    })
                } else {
                    cw(function() {
                        cK++;
                        cd(dL, dN, dM)
                    })
                }
            }
            ;
            this.disableBrowserFeatureDetection = function() {
                dn = false;
                dz = {};
                if (av()) {
                    ay()
                }
            }
            ;
            this.enableBrowserFeatureDetection = function() {
                dn = true;
                c6()
            }
            ;
            this.trackAllContentImpressions = function() {
                if (S(cj)) {
                    return
                }
                cw(function() {
                    r(function() {
                        var dL = x.findContentNodes();
                        var dM = cX(dL);
                        bQ.pushMultiple(dM)
                    })
                })
            }
            ;
            this.trackVisibleContentImpressions = function(dL, dM) {
                if (S(cj)) {
                    return
                }
                if (!N(dL)) {
                    dL = true
                }
                if (!N(dM)) {
                    dM = 750
                }
                a1(dL, dM, this);
                cw(function() {
                    n(function() {
                        var dN = x.findContentNodes();
                        var dO = bk(dN);
                        bQ.pushMultiple(dO)
                    })
                })
            }
            ;
            this.trackContentImpression = function(dN, dL, dM) {
                if (S(cj)) {
                    return
                }
                dN = a(dN);
                dL = a(dL);
                dM = a(dM);
                if (!dN) {
                    return
                }
                dL = dL || "Unknown";
                cw(function() {
                    var dO = aO(dN, dL, dM);
                    bQ.push(dO)
                })
            }
            ;
            this.trackContentImpressionsWithinNode = function(dL) {
                if (S(cj) || !dL) {
                    return
                }
                cw(function() {
                    if (cu) {
                        n(function() {
                            var dM = x.findContentNodesWithinNode(dL);
                            var dN = bk(dM);
                            bQ.pushMultiple(dN)
                        })
                    } else {
                        r(function() {
                            var dM = x.findContentNodesWithinNode(dL);
                            var dN = cX(dM);
                            bQ.pushMultiple(dN)
                        })
                    }
                })
            }
            ;
            this.trackContentInteraction = function(dN, dO, dL, dM) {
                if (S(cj)) {
                    return
                }
                dN = a(dN);
                dO = a(dO);
                dL = a(dL);
                dM = a(dM);
                if (!dN || !dO) {
                    return
                }
                dL = dL || "Unknown";
                cw(function() {
                    var dP = aY(dN, dO, dL, dM);
                    if (dP) {
                        bQ.push(dP)
                    }
                })
            }
            ;
            this.trackContentInteractionNode = function(dN, dM) {
                if (S(cj) || !dN) {
                    return
                }
                var dL = null;
                cw(function() {
                    dL = dD(dN, dM);
                    if (dL) {
                        bQ.push(dL)
                    }
                });
                return dL
            }
            ;
            this.logAllContentBlocksOnPage = function() {
                var dN = x.findContentNodes();
                var dL = x.collectContent(dN);
                var dM = typeof console;
                if (dM !== "undefined" && console && console.log) {
                    console.log(dL)
                }
            }
            ;
            this.trackEvent = function(dM, dO, dL, dN, dQ, dP) {
                cw(function() {
                    aB(dM, dO, dL, dN, dQ, dP)
                })
            }
            ;
            this.trackSiteSearch = function(dL, dN, dM, dO) {
                cp = [];
                cw(function() {
                    cm(dL, dN, dM, dO)
                })
            }
            ;
            this.setEcommerceView = function(dP, dL, dN, dM) {
                cN = {};
                if (ad(dN)) {
                    dN = String(dN)
                }
                if (!N(dN) || dN === null || dN === false || !dN.length) {
                    dN = ""
                } else {
                    if (dN instanceof Array) {
                        dN = X.JSON.stringify(dN)
                    }
                }
                var dO = "_pkc";
                cN[dO] = dN;
                if (N(dM) && dM !== null && dM !== false && String(dM).length) {
                    dO = "_pkp";
                    cN[dO] = dM
                }
                if (!ad(dP) && !ad(dL)) {
                    return
                }
                if (ad(dP)) {
                    dO = "_pks";
                    cN[dO] = dP
                }
                if (!ad(dL)) {
                    dL = ""
                }
                dO = "_pkn";
                cN[dO] = dL
            }
            ;
            this.getEcommerceItems = function() {
                return JSON.parse(JSON.stringify(ds))
            }
            ;
            this.addEcommerceItem = function(dP, dL, dN, dM, dO) {
                if (ad(dP)) {
                    ds[dP] = [String(dP), dL, dN, dM, dO]
                }
            }
            ;
            this.removeEcommerceItem = function(dL) {
                if (ad(dL)) {
                    dL = String(dL);
                    delete ds[dL]
                }
            }
            ;
            this.clearEcommerceCart = function() {
                ds = {}
            }
            ;
            this.trackEcommerceOrder = function(dL, dP, dO, dN, dM, dQ) {
                cb(dL, dP, dO, dN, dM, dQ)
            }
            ;
            this.trackEcommerceCartUpdate = function(dL) {
                bF(dL)
            }
            ;
            this.trackRequest = function(dM, dO, dN, dL) {
                cw(function() {
                    var dP = cL(dM, dO, dL);
                    bS(dP, bW, dN)
                })
            }
            ;
            this.ping = function() {
                this.trackRequest("ping=1", null, null, "ping")
            }
            ;
            this.disableQueueRequest = function() {
                bQ.enabled = false
            }
            ;
            this.setRequestQueueInterval = function(dL) {
                if (dL < 1000) {
                    throw new Error("Request queue interval needs to be at least 1000ms")
                }
                bQ.interval = dL
            }
            ;
            this.queueRequest = function(dM, dL) {
                cw(function() {
                    var dN = dL ? dM : cL(dM);
                    bQ.push(dN)
                })
            }
            ;
            this.isConsentRequired = function() {
                return cY
            }
            ;
            this.getRememberedConsent = function() {
                var dL = aL(bo);
                if (aL(da)) {
                    if (dL) {
                        cc(bo, bC, dp)
                    }
                    return null
                }
                if (!dL || dL === 0) {
                    return null
                }
                return dL
            }
            ;
            this.hasRememberedConsent = function() {
                return !!this.getRememberedConsent()
            }
            ;
            this.requireConsent = function() {
                cY = true;
                bP = this.hasRememberedConsent();
                if (!bP) {
                    bx = true
                }
                z++;
                b["CoreConsent" + z] = {
                    unload: function() {
                        if (!bP) {
                            aN()
                        }
                    }
                }
            }
            ;
            this.setConsentGiven = function(dM) {
                bP = true;
                if (!dn) {
                    this.enableBrowserFeatureDetection()
                }
                cc(da, bC, dp);
                var dN, dL;
                for (dN = 0; dN < c9.length; dN++) {
                    dL = typeof c9[dN][0];
                    if (dL === "string") {
                        bS(c9[dN][0], bW, c9[dN][1])
                    } else {
                        if (dL === "object") {
                            dH(c9[dN][0], bW)
                        }
                    }
                }
                c9 = [];
                if (!N(dM) || dM) {
                    this.setCookieConsentGiven()
                }
            }
            ;
            this.rememberConsentGiven = function(dN) {
                if (dN) {
                    dN = dN * 60 * 60 * 1000
                } else {
                    dN = 30 * 365 * 24 * 60 * 60 * 1000
                }
                var dL = true;
                this.setConsentGiven(dL);
                var dM = new Date().getTime();
                dG(bo, dM, dN, bC, dp, b5, aR)
            }
            ;
            this.forgetConsentGiven = function(dL) {
                if (dL) {
                    dL = dL * 60 * 60 * 1000
                } else {
                    dL = 30 * 365 * 24 * 60 * 60 * 1000
                }
                cc(bo, bC, dp);
                dG(da, new Date().getTime(), dL, bC, dp, b5, aR);
                this.forgetCookieConsentGiven();
                this.requireConsent()
            }
            ;
            this.isUserOptedOut = function() {
                return !bP
            }
            ;
            this.optUserOut = this.forgetConsentGiven;
            this.forgetUserOptOut = function() {
                this.setConsentGiven(false)
            }
            ;
            this.enableFileTracking = function() {
                cW = true
            }
            ;
            n(function() {
                setTimeout(function() {
                    bR = true
                }, 0)
            });
            v.trigger("TrackerSetup", [this]);
            v.addPlugin("TrackerVisitorIdCookie" + aF, {
                unload: function() {
                    if (av() && !by) {
                        by = true;
                        ay()
                    }
                    if (!aE) {
                        aV();
                        dB()
                    }
                }
            })
        }
        function L() {
            return {
                push: ak
            }
        }
        function c(az, ay) {
            var aA = {};
            var aw, ax;
            for (aw = 0; aw < ay.length; aw++) {
                var au = ay[aw];
                aA[au] = 1;
                for (ax = 0; ax < az.length; ax++) {
                    if (az[ax] && az[ax][0]) {
                        var av = az[ax][0];
                        if (au === av) {
                            ak(az[ax]);
                            delete az[ax];
                            if (aA[av] > 1 && av !== "addTracker" && av !== "enableLinkTracking") {
                                ap("The method " + av + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            aA[av]++
                        }
                    }
                }
            }
            return az
        }
        var F = ["addTracker", "enableFileTracking", "forgetCookieConsentGiven", "requireCookieConsent", "disableBrowserFeatureDetection", "disableCampaignParameters", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSessionCookieTimeout", "setVisitorCookieTimeout", "setCookieNamePrefix", "setCookieSameSite", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setVisitorId", "setSiteId", "alwaysUseSendBeacon", "disableAlwaysUseSendBeacon", "enableLinkTracking", "setCookieConsentGiven", "requireConsent", "setConsentGiven", "disablePerformanceTracking", "setPagePerformanceTiming", "setExcludedQueryParams", "setExcludedReferrers"];
        function ai(aw, av) {
            var au = new U(aw,av);
            M.push(au);
            _paq = c(_paq, F);
            for (I = 0; I < _paq.length; I++) {
                if (_paq[I]) {
                    ak(_paq[I])
                }
            }
            _paq = new L();
            v.trigger("TrackerAdded", [au]);
            return au
        }
        at(X, "beforeunload", an, false);
        at(X, "visibilitychange", function() {
            if (m) {
                return
            }
            if (K.visibilityState === "hidden") {
                ah("unload")
            }
        }, false);
        at(X, "online", function() {
            if (N(g.serviceWorker)) {
                g.serviceWorker.ready.then(function(au) {
                    if (au && au.sync) {
                        return au.sync.register("matomoSync")
                    }
                }, function() {})
            }
        }, false);
        at(X, "message", function(az) {
            if (!az || !az.origin) {
                return
            }
            var aB, ax, av;
            var aC = d(az.origin);
            var ay = v.getAsyncTrackers();
            for (ax = 0; ax < ay.length; ax++) {
                av = d(ay[ax].getMatomoUrl());
                if (av === aC) {
                    aB = ay[ax];
                    break
                }
            }
            if (!aB) {
                return
            }
            var aw = null;
            try {
                aw = JSON.parse(az.data)
            } catch (aA) {
                return
            }
            if (!aw) {
                return
            }
            function au(aF) {
                var aH = K.getElementsByTagName("iframe");
                for (ax = 0; ax < aH.length; ax++) {
                    var aG = aH[ax];
                    var aD = d(aG.src);
                    if (aG.contentWindow && N(aG.contentWindow.postMessage) && aD === aC) {
                        var aE = JSON.stringify(aF);
                        aG.contentWindow.postMessage(aE, az.origin)
                    }
                }
            }
            if (N(aw.maq_initial_value)) {
                au({
                    maq_opted_in: aw.maq_initial_value && aB.hasConsent(),
                    maq_url: aB.getMatomoUrl(),
                    maq_optout_by_default: aB.isConsentRequired()
                })
            } else {
                if (N(aw.maq_opted_in)) {
                    ay = v.getAsyncTrackers();
                    for (ax = 0; ax < ay.length; ax++) {
                        aB = ay[ax];
                        if (aw.maq_opted_in) {
                            aB.rememberConsentGiven()
                        } else {
                            aB.forgetConsentGiven()
                        }
                    }
                    au({
                        maq_confirm_opted_in: aB.hasConsent(),
                        maq_url: aB.getMatomoUrl(),
                        maq_optout_by_default: aB.isConsentRequired()
                    })
                }
            }
        }, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        v = {
            initialized: false,
            JSON: X.JSON,
            DOM: {
                addEventListener: function(ax, aw, av, au) {
                    var ay = typeof au;
                    if (ay === "undefined") {
                        au = false
                    }
                    at(ax, aw, av, au)
                },
                onLoad: n,
                onReady: r,
                isNodeVisible: i,
                isOrWasNodeVisible: x.isNodeVisible
            },
            on: function(av, au) {
                if (!A[av]) {
                    A[av] = []
                }
                A[av].push(au)
            },
            off: function(aw, av) {
                if (!A[aw]) {
                    return
                }
                var au = 0;
                for (au; au < A[aw].length; au++) {
                    if (A[aw][au] === av) {
                        A[aw].splice(au, 1)
                    }
                }
            },
            trigger: function(aw, ax, av) {
                if (!A[aw]) {
                    return
                }
                var au = 0;
                for (au; au < A[aw].length; au++) {
                    A[aw][au].apply(av || X, ax)
                }
            },
            addPlugin: function(au, av) {
                b[au] = av
            },
            getTracker: function(av, au) {
                if (!N(au)) {
                    au = this.getAsyncTracker().getSiteId()
                }
                if (!N(av)) {
                    av = this.getAsyncTracker().getTrackerUrl()
                }
                return new U(av,au)
            },
            getAsyncTrackers: function() {
                return M
            },
            addTracker: function(aw, av) {
                var au;
                if (!M.length) {
                    au = ai(aw, av)
                } else {
                    au = M[0].addTracker(aw, av)
                }
                return au
            },
            getAsyncTracker: function(ay, ax) {
                var aw;
                if (M && M.length && M[0]) {
                    aw = M[0]
                } else {
                    return ai(ay, ax)
                }
                if (!ax && !ay) {
                    return aw
                }
                if ((!N(ax) || null === ax) && aw) {
                    ax = aw.getSiteId()
                }
                if ((!N(ay) || null === ay) && aw) {
                    ay = aw.getTrackerUrl()
                }
                var av, au = 0;
                for (au; au < M.length; au++) {
                    av = M[au];
                    if (av && String(av.getSiteId()) === String(ax) && av.getTrackerUrl() === ay) {
                        return av
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var av = am;
                am = [];
                var au = 0;
                for (au; au < av.length; au++) {
                    ak(av[au])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return v
            });
            define("matomo", [], function() {
                return v
            })
        }
        return v
    }())
}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
(function() {
    function a() {
        if ("object" === typeof window && !window.Matomo) {
            return
        }
        window.Matomo.on("TrackerSetup", function(b) {
            b.setCookieConsentGiven = function() {}
            ;
            b.rememberCookieConsentGiven = function() {}
            ;
            b.disableCookies()
        })
    }
    if ("object" === typeof window.Matomo) {
        a()
    } else {
        if ("object" !== typeof window.matomoPluginAsyncInit) {
            window.matomoPluginAsyncInit = []
        }
        window.matomoPluginAsyncInit.push(a)
    }
}
)();
/* END GENERATED: tracker.min.js */

(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.matomoPluginAsyncInit && window.matomoPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.matomoPluginAsyncInit.length; a++) {
            if (typeof window.matomoPluginAsyncInit[a] === "function") {
                window.matomoPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (window && window.matomoAsyncInit) {
        window.matomoAsyncInit()
    }
    if (!window.Matomo.getAsyncTrackers().length) {
        if (b()) {
            window.Matomo.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Matomo.trigger("MatomoInitialized", []);
    window.Matomo.initialized = true
}());
(function() {
    var a = (typeof window.AnalyticsTracker);
    if (a === "undefined") {
        window.AnalyticsTracker = window.Matomo
    }
}());
if (typeof window.piwik_log !== "function") {
    window.piwik_log = function(c, e, g, f) {
        function b(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var d, a = window.Matomo.getTracker(g, e);
        a.setDocumentTitle(c);
        a.setCustomData(f);
        d = b("tracker_pause");
        if (d) {
            a.setLinkTrackingTimer(d)
        }
        d = b("download_extensions");
        if (d) {
            a.setDownloadExtensions(d)
        }
        d = b("hosts_alias");
        if (d) {
            a.setDomains(d)
        }
        d = b("ignore_classes");
        if (d) {
            a.setIgnoreClasses(d)
        }
        a.trackPageView();
        if (b("install_tracker")) {
            piwik_track = function(i, j, k, h) {
                a.setSiteId(j);
                a.setTrackerUrl(k);
                a.trackLink(i, h)
            }
            ;
            a.enableLinkTracking()
        }
    }
}
/*!! @license-end */
;