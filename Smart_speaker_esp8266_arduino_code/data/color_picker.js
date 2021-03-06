    
function KellyColorPicker(ca) {
    function S() {
        w = {};
        w.size;
        w.sizePercentage = 10;
        w.position;
        w.paddingY = 4;
        w.paddingX = 4;
        w.imageData = [];
        w.lineWidth = 2;
        w.color = "#c1ebf5";
        w.updateSize = function() {
            this.size = parseInt(u - u / 100 * (100 - this.sizePercentage));
            16 > this.size && (this.size = 16);
            this.position = {
                x: this.paddingX,
                y: this.paddingY
            }
        }
        ;
        w.draw = function() {
            var a, b;
            if (this.imageData[B])
                e.putImageData(this.imageData[B], this.position.x, this.position.y);
            else {
                var c = Y(this.color);
                v.width = this.size;
                v.height = this.size;
                f.clearRect(0, 0, this.size, this.size);
                f.beginPath();
                var d = "triangle";
                "triangle" == B && (d = "quad");
                f.beginPath();
                35 > this.size ? b = a = v.width / 2 : (a = v.width / 2 - this.lineWidth,
                f.arc(this.size / 2, this.size / 2, a, 0, 2 * G),
                f.strokeStyle = "rgba(0, 0, 0, 0.4)",
                f.lineWidth = this.lineWidth,
                f.stroke(),
                b = a - 6,
                f.closePath(),
                f.beginPath(),
                f.arc(this.size / 2, this.size / 2, b, 0, 2 * G),
                f.strokeStyle = "rgba(0, 0, 0, 0.4)",
                f.lineWidth = this.lineWidth,
                f.stroke(),
                f.closePath());
                f.beginPath();
                if ("quad" == d)
                    d = Math.floor((2 * b - 4) / Math.sqrt(2)),
                    b = (this.size - d) / 2,
                    a = b + d,
                    b = b + d / 2 - d / 2,
                    f.moveTo(a, b),
                    f.lineTo(a - d, b),
                    f.lineTo(a - d, b + d),
                    f.lineTo(a, b + d);
                else {
                    d = Math.floor((2 * b - 4) * Math.sin(G / 180 * 60));
                    a = 2 * b + (a - b);
                    b = this.size / 2;
                    var ga = Math.sqrt(3) / 2 * d;
                    f.moveTo(a, b);
                    f.lineTo(a - ga, b - d / 2);
                    f.lineTo(a - ga, b + d / 2);
                    f.lineTo(a, b)
                }
                f.lineTo(a, b);
                f.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ", 1)";
                f.fill();
                f.lineWidth = this.lineWidth;
                f.strokeStyle = "rgba(0, 0, 0, 0.6)";
                f.stroke();
                f.closePath();
                this.imageData[B] = f.getImageData(0, 0, v.width, v.width);
                e.drawImage(v, this.position.x, this.position.y)
            }
        }
        ;
        w.isDotIn = function(a) {
            return a.x >= this.position.x && a.x <= this.position.x + this.size && a.y >= this.position.y && a.y <= this.position.y + this.size ? !0 : !1
        }
    }
    function V(a, b, c) {
        b = b ? !0 : !1;
        var d = {};
        d.width;
        d.widthPercentage = 22;
        d.imageData = null;
        d.align = a;
        d.selected = b;
        d.color = "#ffffff";
        d.position;
        d.paddingY = -4;
        d.paddingX = 4;
        d.lineWidth = 1;
        d.selectSize = 4;
        "right" == a && (d.paddingX *= -1);
        d.selected && (d.color = H);
        c && (d.color = c);
        d.updateSize = function() {
            this.width = parseInt(u - u / 100 * (100 - this.widthPercentage));
            "left" == this.align ? this.position = {
                x: 0,
                y: u - this.width
            } : "right" == this.align && (this.position = {
                x: u - this.width,
                y: u - this.width
            })
        }
        ;
        d.calcS = function(a) {
            return Math.abs((a[1].x - a[0].x) * (a[2].y - a[0].y) - (a[2].x - a[0].x) * (a[1].y - a[0].y)) / 2
        }
        ;
        d.isDotIn = function(a) {
            var b = [];
            "left" == this.align ? (b[0] = {
                x: this.position.x,
                y: this.position.y
            },
            b[1] = {
                x: this.position.x,
                y: this.position.y + this.width
            },
            b[2] = {
                x: this.position.x + this.width,
                y: this.position.y + this.width
            }) : (b[0] = {
                x: this.position.x + this.width,
                y: this.position.y
            },
            b[1] = {
                x: b[0].x,
                y: b[0].y + this.width
            },
            b[2] = {
                x: b[0].x - this.width,
                y: this.position.y + this.width
            });
            for (var c = 0; c <= b.length - 1; ++c)
                b[c].x += this.paddingX,
                b[c].y += this.paddingY;
            c = this.calcS(b);
            a = [{
                x: b[0].x,
                y: b[0].y
            }, {
                x: b[1].x,
                y: b[1].y
            }, {
                x: a.x,
                y: a.y
            }];
            var d = this.calcS(a);
            a[1] = {
                x: b[2].x,
                y: b[2].y
            };
            d += this.calcS(a);
            a[0] = {
                x: b[1].x,
                y: b[1].y
            };
            d += this.calcS(a);
            return Math.ceil(d) == Math.ceil(c) ? !0 : !1
        }
        ;
        d.draw = function() {
            v.width = this.width;
            v.height = this.width;
            f.clearRect(0, 0, this.width, this.width);
            f.beginPath();
            "left" == this.align && (f.moveTo(this.lineWidth / 2, this.width - this.lineWidth),
            f.lineTo(this.width, this.width - this.lineWidth),
            f.lineTo(this.lineWidth, this.lineWidth),
            f.lineTo(this.lineWidth, this.width - this.lineWidth));
            "right" == this.align && (f.moveTo(this.lineWidth / 2, this.width - this.lineWidth),
            f.lineTo(this.width - this.lineWidth, this.width - this.lineWidth),
            f.lineTo(this.width - this.lineWidth, this.lineWidth),
            f.lineTo(this.lineWidth, this.width - this.lineWidth));
            this.selected && (f.fillStyle = "rgba(255,255,255, 1)",
            f.fill(),
            f.strokeStyle = "rgba(0, 0, 0, 1)",
            f.stroke(),
            f.closePath(),
            f.beginPath(),
            f.lineWidth = this.lineWidth,
            "left" == this.align && (f.moveTo(this.selectSize, this.width - this.selectSize),
            f.lineTo(this.width - 2 * this.selectSize, this.width - this.selectSize),
            f.lineTo(this.selectSize, 2 * this.selectSize),
            f.lineTo(this.selectSize, this.width - this.selectSize)),
            "right" == this.align && (f.moveTo(2 * this.selectSize, this.width - this.selectSize),
            f.lineTo(this.width - this.selectSize, this.width - this.selectSize),
            f.lineTo(this.width - this.selectSize, 2 * this.selectSize),
            f.lineTo(2 * this.selectSize, this.width - this.selectSize)));
            var a = Y(this.color);
            f.fillStyle = "rgba(" + a.r + "," + a.g + "," + a.b + ", 1)";
            f.fill();
            f.strokeStyle = "rgba(0, 0, 0, 1)";
            f.stroke();
            this.imageData = f.getImageData(0, 0, this.width, this.width);
            e.drawImage(v, this.position.x + this.paddingX, this.position.y + this.paddingY)
        }
        ;
        k[k.length] = d
    }
    function R(a) {
        var b = a.getBoundingClientRect()
          , c = 0
          , d = 0;
        C && (d = r.width + 2 * r.padding);
        a === n ? b.width <= b.height ? c = b.height : b.height < b.width && (c = b.width) : Z ? "height" == Z ? c = b.height : "width" == Z && (c = b.width) : b.width > b.height ? c = b.height : b.height >= b.width && (c = b.width);
        c = parseInt(c);
        C && (c -= d);
        return 0 >= c ? !1 : c
    }
    function N(a, b) {
        var c = 1
          , d = !1;
        a = a.trim(a);
        if (7 >= a.length)
            "#" == a.charAt(0) && (a = a.slice(1)),
            3 == a.length ? d = a + a : 6 == a.length && (d = a);
        else if ("rgb" == a.substring(0, 3)) {
            var e = a.split(",");
            if (3 <= e.length && 4 >= e.length) {
                e[0] = e[0].replace("rgba(", "");
                e[0] = e[0].replace("rgb(", "");
                var f = {
                    r: parseInt(e[0]),
                    g: parseInt(e[1]),
                    b: parseInt(e[2])
                };
                if (255 >= f.r && 255 >= f.g && 255 >= f.b && (d = da(f),
                4 == e.length)) {
                    c = parseFloat(e[3]);
                    if (!c || 0 > c)
                        c = 0;
                    1 < c && (c = 1)
                }
            }
        }
        if (!1 === d && b)
            return !1;
        !1 === d && (d = "000000");
        "#" != d.charAt(0) && (d = "#" + d);
        return {
            h: d,
            a: c
        }
    }
    function ha() {
        if (T.quad)
            return T.quad;
        var a = {};
        a.size;
        a.padding = 2;
        a.path;
        a.imageData = null;
        a.dotToSv = function(a) {
            return {
                s: Math.abs(this.path[3].x - a.x) / this.size,
                v: Math.abs(this.path[3].y - a.y) / this.size
            }
        }
        ;
        a.svToDot = function(a) {
            var c = this.path[0].x
              , d = this.path[0].y
              , e = .02;
            150 > u ? e = .07 : 100 > u && (e = .16);
            for (var f = 0; f < this.size; f++)
                for (var g = 0; g < this.size; g++) {
                    var h = {
                        x: g + c,
                        y: f + d
                    }
                      , k = this.dotToSv(h)
                      , l = Math.abs(k.v - a.v);
                    if (Math.abs(k.s - a.s) < e && l < e)
                        return h
                }
            return {
                x: 0,
                y: 0
            }
        }
        ;
        a.limitDotPosition = function(a) {
            var c = a.x;
            a = a.y;
            c < this.path[0].x && (c = this.path[0].x);
            c > this.path[0].x + this.size && (c = this.path[0].x + this.size);
            a < this.path[0].y && (a = this.path[0].y);
            a > this.path[0].y + this.size && (a = this.path[0].y + this.size);
            return {
                x: c,
                y: a
            }
        }
        ;
        a.draw = function() {
            this.imageData || (this.imageData = e.createImageData(this.size, this.size));
            for (var a = 0, c = this.path[0].x, d = this.path[0].y, f = 0; f < this.size; f++)
                for (var g = 0; g < this.size; g++) {
                    var h = this.dotToSv({
                        x: g + c,
                        y: f + d
                    })
                      , h = U(m.h, h.s, h.v);
                    this.imageData.data[a + 0] = h.r;
                    this.imageData.data[a + 1] = h.g;
                    this.imageData.data[a + 2] = h.b;
                    this.imageData.data[a + 3] = 255;
                    a += 4
                }
            e.putImageData(this.imageData, c, d);
            e.beginPath();
            e.strokeStyle = "rgba(0,0,0, 0.2)";
            e.lineWidth = 2;
            for (a = 0; a <= this.path.length - 1; ++a)
                0 == a ? e.moveTo(this.path[a].x, this.path[a].y) : e.lineTo(this.path[a].x, this.path[a].y);
            e.stroke();
            e.closePath()
        }
        ;
        a.updateSize = function() {
            this.size = Math.floor((2 * h.innerRadius - 2 * x.paddingX - 2 * this.padding) / Math.sqrt(2));
            this.path = [];
            this.path[0] = {
                x: this.size / 2 * -1,
                y: this.size / 2 * -1
            };
            this.path[1] = {
                x: this.path[0].x + this.size,
                y: this.path[0].y
            };
            this.path[2] = {
                x: this.path[1].x,
                y: this.path[1].y + this.size
            };
            this.path[3] = {
                x: this.path[2].x - this.size,
                y: this.path[2].y
            };
            this.path[4] = {
                x: this.path[0].x,
                y: this.path[0].y
            };
            for (var a = 0; a <= this.path.length - 1; ++a)
                this.path[a].x += h.pos.x,
                this.path[a].y += h.pos.y
        }
        ;
        a.isDotIn = function(a) {
            return a.x < this.path[0].x || a.x > this.path[0].x + this.size || a.y < this.path[0].y || a.y > this.path[0].y + this.size ? !1 : !0
        }
        ;
        return T.quad = a
    }
    function ia() {
        if (T.triangle)
            return T.triangle;
        var a = {};
        a.size;
        a.padding = 2;
        a.path;
        a.imageData = null;
        a.followWheel = !0;
        a.s;
        a.sOnTop = !1;
        a.outerRadius;
        a.limitDotPosition = function(a) {
            var c = a.x;
            a = a.y;
            var d = this.path[2].x, e, f = a;
            e = Math.min(Math.max(d, c), this.path[0].x);
            var g = (this.path[0].y - this.path[1].y) / (this.path[0].x - this.path[1].x)
              , h = Math.ceil(this.path[1].y + g * (e - this.path[1].x))
              , g = (this.path[0].y - this.path[2].y) / (this.path[0].x - this.path[2].x)
              , g = Math.floor(this.path[2].y + g * (e - this.path[2].x));
            c < d && (f = a);
            f = Math.min(Math.max(h, f), g);
            return {
                x: e,
                y: f
            }
        }
        ;
        a.svToDot = function(a) {
            var c = .02;
            150 > u ? c = .07 : 100 > u && (c = .16);
            for (var d = 0; d < this.size; d++)
                for (var e = 0; e < this.size; e++) {
                    var f = {
                        x: this.path[1].x + e,
                        y: this.path[1].y + d
                    };
                    if (y.isDotIn(f)) {
                        var g = this.dotToSv(f)
                          , h = Math.abs(g.v - a.v);
                        if (Math.abs(g.s - a.s) < c && h < c)
                            return f
                    }
                }
            return {
                x: 0,
                y: 0
            }
        }
        ;
        a.draw = function() {
            this.imageData || (this.imageData = f.createImageData(this.size, this.size));
            v.width = this.size;
            v.height = this.size;
            for (var a = this.path[1].x, c = this.path[1].y, d = 0, g = 0; g < this.size; g++)
                for (var h = 0; h < this.size; h++) {
                    var k = {
                        x: this.path[1].x + h,
                        y: this.path[1].y + g
                    };
                    y.isDotIn(k) ? (k = this.dotToSv(k),
                    k = U(m.h, k.s, k.v),
                    this.imageData.data[d + 0] = k.r,
                    this.imageData.data[d + 1] = k.g,
                    this.imageData.data[d + 2] = k.b,
                    this.imageData.data[d + 3] = 255) : (this.imageData.data[d + 0] = 0,
                    this.imageData.data[d + 1] = 0,
                    this.imageData.data[d + 2] = 0,
                    this.imageData.data[d + 3] = 0);
                    d += 4
                }
            f.putImageData(this.imageData, 0, 0);
            e.drawImage(v, a, c);
            e.beginPath();
            e.strokeStyle = "rgba(0, 0, 0, 0.3)";
            e.lineWidth = 2;
            a = this.path;
            for (d = 0; d <= a.length - 1; ++d)
                0 == d ? e.moveTo(a[d].x, a[d].y) : e.lineTo(a[d].x, a[d].y);
            e.stroke();
            e.closePath()
        }
        ;
        a.calcS = function(a) {
            return Math.abs((a[1].x - a[0].x) * (a[2].y - a[0].y) - (a[2].x - a[0].x) * (a[1].y - a[0].y)) / 2
        }
        ;
        a.dotToSv = function(a) {
            var c = this.vol
              , d = ((a.x - c[0].x) * (c[1].x - c[0].x) + (a.y - c[0].y) * (c[1].y - c[0].y)) / ((c[0].x - c[1].x) * (c[0].x - c[1].x) + (c[0].y - c[1].y) * (c[0].y - c[1].y));
            0 > d && (d = 0);
            1 < d && (d = 1);
            var e = this.vol[0]
              , c = Math.sqrt(Math.pow(c[0].x + d * (c[1].x - c[0].x) - e.x, 2) + Math.pow(c[0].y + d * (c[1].y - c[0].y) - e.y, 2));
            1 > c && (c = Math.floor(c));
            c > this.h - 1 && (c = this.h);
            c /= this.h;
            a = Math.abs(ja(a, this.sSide));
            30 > a && (a = 30);
            return {
                s: (60 - (a - 30)) / 60,
                v: c
            }
        }
        ;
        a.isDotIn = function(a) {
            a = [{
                x: this.path[0].x,
                y: this.path[0].y
            }, {
                x: this.path[1].x,
                y: this.path[1].y
            }, {
                x: a.x,
                y: a.y
            }];
            var c = this.calcS(a);
            a[1] = {
                x: this.path[2].x,
                y: this.path[2].y
            };
            c += this.calcS(a);
            a[0] = {
                x: this.path[1].x,
                y: this.path[1].y
            };
            c += this.calcS(a);
            return Math.ceil(c) == Math.ceil(this.s) ? !0 : !1
        }
        ;
        a.updateSize = function() {
            this.outerRadius = h.innerRadius - x.paddingX - this.padding;
            this.size = Math.floor(2 * this.outerRadius * Math.sin(G / 180 * 60));
            var a = Math.sqrt(3) / 2 * this.size;
            this.h = Math.sqrt(3) / 2 * this.size;
            this.path = [];
            this.path[0] = {
                x: this.outerRadius,
                y: 0
            };
            this.path[1] = {
                x: this.path[0].x - a,
                y: this.size / 2 * -1
            };
            this.path[2] = {
                x: this.path[1].x,
                y: this.size / 2
            };
            this.path[3] = {
                x: this.path[0].x,
                y: this.path[0].y
            };
            for (a = 0; a <= this.path.length - 1; ++a)
                this.path[a].x += h.pos.x,
                this.path[a].y += h.pos.y;
            this.vol = [];
            this.s = this.calcS(this.path);
            this.sOnTop ? (a = ka(this.path[0], this.path[2]),
            this.vol[0] = {
                x: this.path[1].x,
                y: this.path[1].y
            },
            this.vol[1] = {
                x: a.x,
                y: a.y
            },
            this.sSide = this.path[1]) : (a = ka(this.path[0], this.path[1]),
            this.vol[0] = {
                x: this.path[2].x,
                y: this.path[2].y
            },
            this.vol[1] = {
                x: a.x,
                y: a.y
            },
            this.sSide = this.path[2])
        }
        ;
        return T.triangle = a
    }
    function z(a, b, c, d) {
        "object" !== typeof a && (a = document.getElementById(a));
        if (!a)
            return !1;
        d || (d = "");
        P[d + b] = c;
        a.addEventListener ? a.addEventListener(b, P[d + b]) : a.attachEvent("on" + b, P[d + b]);
        return !0
    }
    function q(a, b, c) {
        "object" !== typeof a && (a = document.getElementById(a));
        if (!a)
            return !1;
        c || (c = "");
        if (!P[c + b])
            return !1;
        a.removeEventListener ? a.removeEventListener(b, P[c + b]) : a.detachEvent("on" + b, P[c + b]);
        P[c + b] = null;
        return !0
    }
    function U(a, b, c) {
        var d, e, f, g, h, k;
        a && void 0 === b && void 0 === c && (b = a.s,
        c = a.v,
        a = a.h);
        g = Math.floor(6 * a);
        h = 6 * a - g;
        a = c * (1 - b);
        k = c * (1 - h * b);
        b = c * (1 - (1 - h) * b);
        switch (g % 6) {
        case 0:
            d = c;
            e = b;
            f = a;
            break;
        case 1:
            d = k;
            e = c;
            f = a;
            break;
        case 2:
            d = a;
            e = c;
            f = b;
            break;
        case 3:
            d = a;
            e = k;
            f = c;
            break;
        case 4:
            d = b;
            e = a;
            f = c;
            break;
        case 5:
            d = c,
            e = a,
            f = k
        }
        return {
            r: Math.floor(255 * d),
            g: Math.floor(255 * e),
            b: Math.floor(255 * f)
        }
    }
    function la(a, b, c) {
        a && void 0 === b && void 0 === c && (b = a.g,
        c = a.b,
        a = a.r);
        a /= 255;
        b /= 255;
        c /= 255;
        var d = Math.max(a, b, c), e = Math.min(a, b, c), f, g = d - e;
        if (d == e)
            f = 0;
        else {
            switch (d) {
            case a:
                f = (b - c) / g + (b < c ? 6 : 0);
                break;
            case b:
                f = (c - a) / g + 2;
                break;
            case c:
                f = (a - b) / g + 4
            }
            f /= 6
        }
        return {
            h: f,
            s: 0 == d ? 0 : g / d,
            v: d
        }
    }
    function Y(a) {
        a = parseInt("#" == a.charAt(0) ? a.slice(1) : a, 16);
        return {
            r: a >> 16,
            g: a >> 8 & 255,
            b: a & 255
        }
    }
    function da(a) {
        var b = function(a) {
            a = a.toString(16);
            return 1 === a.length ? "0" + a : a
        };
        return "#" + b(a.r) + b(a.g) + b(a.b)
    }
    function ka(a, b) {
        return {
            x: (a.x + b.x) / 2,
            y: (a.y + b.y) / 2
        }
    }
    function ja(a, b, c) {
        b || (b = {
            x: 0,
            y: 0
        });
        a = 180 * Math.atan2(a.y - b.y, a.x - b.x) / G;
        c && 0 > a && (a = 360 + a);
        return a
    }
    function ea() {
        ma = 2 + x.paddingX;
        K = !1;
        h.imageData = null;
        I = u / 2;
        h.pos = {
            x: I,
            y: I
        };
        h.outerRadius = I - ma;
        h.innerRadius = h.outerRadius - h.width;
        x.path = [{
            x: h.innerRadius - x.paddingX,
            y: -1 * x.height
        }, {
            x: h.outerRadius + x.paddingX,
            y: -1 * x.height
        }, {
            x: h.outerRadius + x.paddingX,
            y: x.height
        }, {
            x: h.innerRadius - x.paddingX,
            y: x.height
        }, {
            x: h.innerRadius - x.paddingX,
            y: -1 * x.height
        }];
        var a = u;
        C && (a += r.width + 2 * r.padding);
        "CANVAS" != D.tagName && (D.style.width = a + "px",
        D.style.height = u + "px");
        n.width = a;
        n.height = u;
        /*O!=n&&(n.style.width=a+"px",n.style.height=u+"px")*/
        ;for (a = 0; a <= k.length - 1; ++a)
            k[a].updateSize();
        w && (w.imageData.triangle = null,
        w.imageData.quad = null,
        w.updateSize());
        y.updateSize();
        C && r.updateSize()
    }
    function W(a) {
        if (t && (!l.updateinput || (0,
        l.updateinput)(g, t, a))) {
            var b = "rgba(" + E.r + ", " + E.g + ", " + E.b + ", " + F.toFixed(2) + ")";
            a || (t.value = 1 > F && "mixed" === aa ? b : "hex" === aa || "mixed" === aa ? H : b);
            na && (t.style.color = .5 > m.v ? "#FFF" : "#000",
            t.style.background = b)
        }
    }
    function ta() {
        if (!D)
            return !1;
        "CANVAS" != D.tagName ? (n = document.createElement("CANVAS"),
        D.appendChild(n)) : n = D;
        "undefined" != typeof window.G_vmlCanvasManager && (n = window.G_vmlCanvasManager.initElement(n),
        v = window.G_vmlCanvasManager.initElement(v));
        return n.getContext && n.getContext("2d") ? (e = n.getContext("2d"),
        f = v.getContext("2d"),
        !0) : !1
    }
    function ba() {
        z(n, "mousedown", function(a) {
            g.mouseDownEvent(a)
        }, "wait_action_");
        z(n, "touchstart", function(a) {
            g.mouseDownEvent(a)
        }, "wait_action_");
        z(n, "mouseout", function(a) {
            g.mouseOutEvent(a)
        }, "wait_action_");
        z(window, "touchmove", function(a) {
            g.touchMoveEvent(a)
        }, "wait_action_");
        z(n, "mousemove", function(a) {
            g.mouseMoveRest(a)
        }, "wait_action_")
    }
    function oa() {
        q(n, "mousedown", "wait_action_");
        q(n, "touchstart", "wait_action_");
        q(n, "mouseout", "wait_action_");
        q(window, "touchmove", "wait_action_");
        q(n, "mousemove", "wait_action_")
    }
    function Q(a) {
        a = a || window.event;
        var b, c = document.body.scrollLeft + document.documentElement.scrollLeft, d = document.body.scrollTop + document.documentElement.scrollTop;
        "touchend" == a.type ? (b = a.changedTouches[0].clientX + c,
        a = a.changedTouches[0].clientY + d) : "touchmove" == a.type || a.touches ? (b = a.touches[0].clientX + c,
        a = a.touches[0].clientY + d) : (b = a.clientX + c,
        a = a.clientY + d);
        var e = n.getBoundingClientRect();
        b -= e.left + c;
        a -= e.top + d;
        return {
            x: b,
            y: a
        }
    }
    function pa(a) {
        for (var b = !1, c = 0; c <= k.length - 1; ++c)
            k[c].selected && (b = c),
            k[c].selected = !1;
        for (var d = !1, c = 0; c <= k.length - 1; ++c)
            if (c == a) {
                k[c].selected = !0;
                g.setColorByHex(k[c].color);
                d = !0;
                break
            }
        d && l.selectcolorsaver && (0,
        l.selectcolorsaver)(g, k[a]);
        d || !1 === b || (k[b].selected = !0);
        return d
    }
    function fa() {
        for (var a = 0; a <= k.length - 1; ++a)
            k[a].selected && (k[a].color = H)
    }
    function qa() {
        if (k.length)
            for (var a = 0; a <= k.length - 1; ++a)
                k[a].draw()
    }
    function ua() {
        if (!e)
            return !1;
        e.clearRect(0, 0, n.width, n.height);
        if (K)
            return e.putImageData(X, 0, 0),
            qa(),
            !0;
        h.draw();
        y.draw();
        C && r.draw();
        qa();
        w && w.draw();
        A || (X = e.getImageData(0, 0, n.width, n.height),
        K = !0);
        return !0
    }
    function M() {
        if (!ua())
            return !1;
        var a = 360 * m.h - h.startAngle;
        C && (e.beginPath(),
        e.rect(r.pos.x - 2, r.padding + r.height * (1 - F) - 1, r.width + 4, 2),
        e.strokeStyle = "rgba(0,0,0, 0.8)",
        e.lineWidth = 2,
        e.stroke(),
        e.closePath());
        e.beginPath();
        var b = x.path, c;
        c = G / 180 * a;
        for (var a = [], d = 0; d <= b.length - 1; ++d)
            a[d] = {
                x: b[d].x * Math.cos(c) - b[d].y * Math.sin(c),
                y: b[d].x * Math.sin(c) + b[d].y * Math.cos(c)
            };
        for (b = 0; b <= a.length - 1; ++b)
            a[b].x += h.pos.x,
            a[b].y += h.pos.y,
            0 == b ? e.moveTo(a[b].x, a[b].y) : e.lineTo(a[b].x, a[b].y);
        e.strokeStyle = "rgba(0,0,0,0.8)";
        e.lineWidth = x.lineWeight;
        e.stroke();
        e.closePath();
        e.strokeStyle = .5 < m.v && .5 > m.s ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
        e.beginPath();
        e.lineWidth = 2;
        e.arc(m.x, m.y, ra.radius, 0, 2 * G);
        e.stroke();
        e.closePath();
        return !1
    }
    var G = Math.PI, y, sa = !0, ra = {
        radius: 4
    }, n = !1, e = !1, B = "quad", C = !1, A = !1, J = !0, P = [], l = [], v = document.createElement("canvas"), f = !1, K = !1, X = null, t = !1, na = !0, aa = "mixed", p = {
        tag: !1,
        margin: 6
    }, D = !1, g = this, ma, u = 200, I, m, E, H = "#000000", F = 1, O = !1, Z = !1, k = [], w = !1, T = [], h = {
        width: 18,
        imageData: null
    };
    h.innerRadius;
    h.startAngle = 0;
    h.outerRadius;
    h.outerStrokeStyle = "rgba(0,0,0,0.2)";
    h.innerStrokeStyle = "rgba(0,0,0,0.2)";
    h.pos;
    h.draw = function() {
        if (this.imageData)
            e.putImageData(this.imageData, 0, 0);
        else {
            for (var a = this.startAngle, b = 0; 360 >= b; b++) {
                var c = G / 180 * (b - 2)
                  , d = G / 180 * b;
                e.beginPath();
                e.moveTo(I, I);
                e.arc(I, I, this.outerRadius, c, d, !1);
                e.closePath();
                c = U(a / 360, 1, 1);
                e.fillStyle = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")";
                e.fill();
                a++;
                360 <= a && (a = 0)
            }
            e.globalCompositeOperation = "destination-out";
            e.beginPath();
            e.arc(I, I, this.innerRadius, 0, 2 * G);
            e.fill();
            e.globalCompositeOperation = "source-over";
            e.strokeStyle = this.innerStrokeStyle;
            e.lineWidth = 2;
            e.stroke();
            e.closePath();
            e.beginPath();
            e.arc(I, I, this.outerRadius, 0, 2 * G);
            e.strokeStyle = this.outerStrokeStyle;
            e.lineWidth = 2;
            e.stroke();
            e.closePath();
            this.imageData = e.getImageData(0, 0, u, u)
        }
    }
    ;
    h.isDotIn = function(a) {
        return Math.pow(this.pos.x - a.x, 2) + Math.pow(this.pos.y - a.y, 2) < Math.pow(this.outerRadius, 2) && Math.pow(this.pos.x - a.x, 2) + Math.pow(this.pos.y - a.y, 2) > Math.pow(this.innerRadius, 2) ? !0 : !1
    }
    ;
    var x = {
        lineWeight: 2,
        height: 4,
        paddingX: 2
    };
    x.path;
    var r = {
        width: 18,
        padding: 4,
        outerStrokeStyle: "rgba(0,0,0,0.2)",
        innerStrokeStyle: "rgba(0,0,0,0.2)"
    };
    r.height;
    r.pos;
    r.updateSize = function() {
        this.pos = {
            x: u + r.padding,
            y: r.padding
        };
        this.height = u - 2 * r.padding
    }
    ;
    r.draw = function() {
        var a = e.createLinearGradient(0, 0, 0, this.height)
          , b = U(m.h, 1, 1);
        a.addColorStop(0, "rgba(" + b.r + "," + b.g + "," + b.b + ",1)");
        a.addColorStop(1, "rgba(" + b.r + "," + b.g + "," + b.b + ",0)");
        e.beginPath();
        e.rect(this.pos.x, this.pos.y, this.width, this.height);
        e.fillStyle = "white";
        e.fill();
        e.fillStyle = a;
        e.fill();
        e.strokeStyle = "rgba(0,0,0, 0.2)";
        e.lineWidth = 2;
        e.stroke();
        e.closePath()
    }
    ;
    r.dotToAlpha = function(a) {
        return 1 - Math.abs(this.pos.y - a.y) / this.height
    }
    ;
    r.alphaToDot = function(a) {
        return {
            x: 0,
            y: this.height - this.height * a
        }
    }
    ;
    r.limitDotPosition = function(a) {
        a = a.y;
        a < this.pos.y && (a = this.pos.y);
        a > this.pos.y + this.height && (a = this.pos.y + this.height);
        return {
            x: this.pos.x,
            y: a
        }
    }
    ;
    r.isDotIn = function(a) {
        return a.x < this.pos.x || a.x > this.pos.x + r.width || a.y < this.pos.y || a.y > this.pos.y + this.height ? !1 : !0
    }
    ;
    var L = {
        svCursorData: null,
        stCursor: null,
        curType: 0,
        size: 16,
        initSvCursor: function() {
            if (!n)
                return !1;
            var a = document.body;
            this.curType = 1;
            this.stCursor || (this.stCursor = a.style.cursor);
            this.stCursor || (this.stCursor = "auto");
            if (this.svCursorData)
                return a.style.cursor = this.svCursorData,
                !0;
            if (!v)
                return !1;
            var b = this.size + 2;
            v.width = b;
            v.height = b;
            f.clearRect(0, 0, this.size, this.size);
            f.strokeStyle = "rgba(255, 255, 255, 1)";
            f.beginPath();
            f.lineWidth = 2;
            f.arc(b / 2, b / 2, this.size / 2, 0, 2 * G);
            f.stroke();
            f.closePath();
            var c = v.toDataURL();
            this.svCursorData = "url(" + c + ") " + b / 2 + " " + b / 2 + ", auto";
            if (!this.svCursorData)
                return !1;
            a.style.cursor = this.svCursorData;
            -1 === a.style.cursor.indexOf(c) && (this.svCursorData = "crosshair",
            a.style.cursor = "crosshair");
            return !0
        },
        initStandartCursor: function() {
            this.stCursor && (L.curType = 0,
            document.body.style.cursor = this.stCursor)
        },
        updateCursor: function(a) {
            sa && (KellyColorPicker.cursorLock || (y.isDotIn(a) ? L.initSvCursor() : L.initStandartCursor()))
        }
    };
    this.popUpClose = function(a) {
        if (!1 !== p.tag) {
            if (a && (a.target == t || a.target == n || a.target == p.tag))
                return !1;
            p.tag.style.display = "none";
            KellyColorPicker.activePopUp == g && (KellyColorPicker.activePopUp = !1)
        }
    }
    ;
    this.popUpShow = function(a) {
        if (!1 !== p.tag && (!l.popupshow || (0,
        l.popupshow)(g, a))) {
            KellyColorPicker.popupEventsInclude || (z(document, "click", function(a) {
                return KellyColorPicker.activePopUp ? KellyColorPicker.activePopUp.popUpClose(a) : !1
            }, "popup_close_"),
            z(window, "resize", function(a) {
                if (KellyColorPicker.activePopUp)
                    return KellyColorPicker.activePopUp.popUpShow(a)
            }, "popup_resize_"),
            KellyColorPicker.popupEventsInclude = !0);
            KellyColorPicker.activePopUp && KellyColorPicker.activePopUp.popUpClose(!1);
            a = g.getCanvas().width;
            var b = g.getAlphaFig();
            b && (a -= b.width + b.padding);
            b = parseInt(p.tag.style.paddingBottom) + parseInt(p.tag.style.paddingTop);
            0 >= b && (b = 0);
            var c = t.getBoundingClientRect()
              , d = c.left + (window.scrollX || window.pageXOffset || document.body.scrollLeft);
            p.tag.style.top = c.top + (window.scrollY || window.pageYOffset || document.body.scrollTop) - b - a - p.margin + "px";
            p.tag.style.left = d + "px";
            p.tag.style.display = "block";
            KellyColorPicker.activePopUp = g;
            return !1
        }
    }
    ;
    this.setHueByDot = function(a) {
        a = ja(a, h.pos) + h.startAngle;
        0 > a && (a = 360 + a);
        m.h = a / 360;
        E = U(m.h, m.s, m.v);
        H = da(E);
        fa();
        l.change && (0,
        l.change)(g);
        W();
        K = !1;
        M()
    }
    ;
    this.setColorForColorSaver = function(a, b) {
        var c = N(a, !0);
        if (c) {
            var d = g.getColorSaver(b);
            d.selected ? this.setColorByHex(a, !1) : (d.color = c.h,
            M());
            return !0
        }
    }
    ;
    this.setColorByHex = function(a, b) {
        b || (b = !1);
        var c = F;
        if (!1 !== a) {
            if (!a || !a.length)
                return;
            var d = N(a, !0);
            if (!d)
                return;
            a = d.h;
            C && (c = d.a)
        } else
            a = H;
        C && a == H && K && c != F ? (F = c,
        M()) : H && a == H && K || (F = c,
        E = Y(a),
        H = a,
        m = la(E),
        c = y.svToDot(m),
        m.x = c.x,
        m.y = c.y,
        K = !1,
        fa(),
        M(),
        l.change && (0,
        l.change)(g),
        W(b))
    }
    ;
    this.setAlphaByDot = function(a) {
        F = r.dotToAlpha(a);
        l.change && (0,
        l.change)(g);
        W();
        M()
    }
    ;
    this.setAlpha = function(a) {
        F = a;
        W();
        M()
    }
    ;
    this.setColorByDot = function(a) {
        var b = y.dotToSv(a);
        m.s = b.s;
        m.v = b.v;
        m.x = a.x;
        m.y = a.y;
        1 < m.s && (m.s = 1);
        0 > m.s && (m.s = 0);
        1 < m.v && (m.v = 1);
        0 > m.v && (m.v = 0);
        E = U(m.h, m.s, m.v);
        H = da(E);
        fa();
        l.change && (0,
        l.change)(g);
        W();
        M()
    }
    ;
    this.mouseOutEvent = function(a) {
        0 < L.curType && !KellyColorPicker.cursorLock && L.initStandartCursor()
    }
    ;
    this.mouseMoveRest = function(a) {
        if (!A && J) {
            J = !1;
            var b = Q(a);
            L.updateCursor(b);
            requestAnimationFrame(function() {
                J = !0
            });
            l.mousemoverest && (0,
            l.mousemoverest)(a, g, b)
        }
    }
    ;
    this.touchMoveEvent = function(a) {
        A && event.preventDefault()
    }
    ;
    this.mouseDownEvent = function(a) {
        a.preventDefault();
        var b, c = !1, d = Q(a);
        if (h.isDotIn(d))
            A = "wheel",
            g.setHueByDot(d),
            b = function(a) {
                g.wheelMouseMove(a, d)
            }
            ,
            c = function(a) {
                KellyColorPicker.cursorLock = !1;
                g.wheelMouseUp(a, d)
            }
            ;
        else if (y.isDotIn(d))
            A = "sv",
            g.setColorByDot(d),
            b = function(a) {
                g.svMouseMove(a, d)
            }
            ,
            c = function(a) {
                KellyColorPicker.cursorLock = !1;
                g.svMouseUp(a, d)
            }
            ;
        else if (C && r.isDotIn(d))
            A = "alpha",
            g.setAlphaByDot(d),
            b = function(a) {
                g.alphaMouseMove(a, d)
            }
            ,
            c = function(a) {
                KellyColorPicker.cursorLock = !1;
                g.alphaMouseUp(a, d)
            }
            ;
        else if (w && w.isDotIn(d))
            g.setMethod();
        else if (k.length)
            for (a = 0; a <= k.length - 1; ++a)
                if (k[a].isDotIn(d)) {
                    pa(a);
                    break
                }
        b && c && (oa(),
        KellyColorPicker.cursorLock = g,
        z(document, "mouseup", c, "action_process_"),
        z(document, "mousemove", b, "action_process_"),
        z(document, "touchend", c, "action_process_"),
        z(document, "touchmove", b, "action_process_"))
    }
    ;
    this.wheelMouseMove = function(a, b) {
        a.preventDefault();
        if (A && J) {
            J = !1;
            var c = Q(a);
            requestAnimationFrame(function() {
                J = !0
            });
            g.setHueByDot(c);
            l.mousemoveh && (0,
            l.mousemoveh)(a, g, c)
        }
    }
    ;
    this.wheelMouseUp = function(a, b) {
        a.preventDefault();
        if (A) {
            q(document, "mouseup", "action_process_");
            q(document, "mousemove", "action_process_");
            q(document, "touchend", "action_process_");
            q(document, "touchmove", "action_process_");
            ba();
            K = A = !1;
            M();
            var c = Q(a);
            L.updateCursor(c);
            l.mouseuph && (0,
            l.mouseuph)(a, g, c)
        }
    }
    ;
    this.alphaMouseMove = function(a, b) {
        a.preventDefault();
        if (A && J) {
            J = !1;
            var c = Q(a)
              , c = r.limitDotPosition(c);
            requestAnimationFrame(function() {
                J = !0
            });
            g.setAlphaByDot(c);
            l.mousemovealpha && (0,
            l.mousemovealpha)(a, g, c)
        }
    }
    ;
    this.alphaMouseUp = function(a, b) {
        a.preventDefault();
        if (A) {
            q(document, "mouseup", "action_process_");
            q(document, "mousemove", "action_process_");
            q(document, "touchend", "action_process_");
            q(document, "touchmove", "action_process_");
            ba();
            A = !1;
            var c = Q(a);
            L.updateCursor(c);
            l.mouseupalpha && (0,
            l.mouseupalpha)(a, g, c)
        }
    }
    ;
    this.svMouseMove = function(a, b) {
        a.preventDefault();
        if (A && J) {
            J = !1;
            var c = Q(a)
              , c = y.limitDotPosition(c);
            requestAnimationFrame(function() {
                J = !0
            });
            g.setColorByDot(c);
            l.mousemovesv && (0,
            l.mousemovesv)(a, g, c)
        }
    }
    ;
    this.svMouseUp = function(a, b) {
        a.preventDefault();
        if (A) {
            q(document, "mouseup", "action_process_");
            q(document, "mousemove", "action_process_");
            q(document, "touchend", "action_process_");
            q(document, "touchmove", "action_process_");
            ba();
            A = !1;
            var c = Q(a);
            L.updateCursor(c);
            C && (K = !1,
            M());
            l.mouseupsv && (0,
            l.mouseupsv)(a, g, c)
        }
    }
    ;
    this.addUserEvent = function(a, b) {
        l[a] = b;
        return !0
    }
    ;
    this.removeUserEvent = function(a) {
        if (!l[a])
            return !1;
        l[a] = null;
        return !0
    }
    ;
    this.getCanvas = function() {
        return e ? n : !1
    }
    ;
    this.getCtx = function() {
        return e ? e : !1
    }
    ;
    this.getInput = function() {
        return t
    }
    ;
    this.getSvFig = function() {
        return y
    }
    ;
    this.getSvFigCursor = function() {
        return ra
    }
    ;
    this.getWheel = function() {
        return h
    }
    ;
    this.getWheelCursor = function() {
        return x
    }
    ;
    this.getCurColorHsv = function() {
        return m
    }
    ;
    this.getCurColorRgb = function() {
        return E
    }
    ;
    this.getCurColorHex = function() {
        return H
    }
    ;
    this.getCurColorRgba = function() {
        return {
            r: E.r,
            g: E.g,
            b: E.b,
            a: F
        }
    }
    ;
    this.getCurAlpha = function() {
        return F
    }
    ;
    this.getAlphaFig = function() {
        return C ? r : !1
    }
    ;
    this.getPopup = function() {
        return p
    }
    ;
    this.getSize = function() {
        return u
    }
    ;
    this.getColorSaver = function(a) {
        for (var b = 0; b <= k.length - 1; ++b)
            if (!a && k[b].selected || k[b].align == a)
                return k[b].rgb = Y(k[b].color),
                k[b].hsv = la(k[b].rgb.r, k[b].rgb.g, k[b].rgb.b),
                k[b]
    }
    ;
    this.setColorSaver = function(a) {
        if (!a)
            return !1;
        for (var b = 0; b <= k.length - 1; ++b)
            if (k[b].align == a)
                return pa(b),
                k[b]
    }
    ;
    this.updateView = function(a) {
        if (!e)
            return !1;
        a && (h.imageData = null,
        X = y.imageData = null);
        K = !1;
        ea();
        M();
        return !0
    }
    ;
    this.resize = function(a, b) {
        if (!e)
            return !1;
        if (a == u && !b)
            return !0;
        K = !1;
        h.imageData = null;
        X = y.imageData = null;
        u = a;
        ea();
        g.setColorByHex(!1);
        return !1
    }
    ;
    this.syncSize = function(a) {
        if (!O)
            return !1;
        (a = R(O)) && g.resize(a);
        return !1
    }
    ;
    this.setMethod = function(a) {
        a || (a = "triangle",
        "triangle" == B && (a = "quad"));
        if (a == B || "quad" != B && "triangle" != B)
            return !1;
        B = a;
        "quad" == B && (y = ha());
        "triangle" == B && (y = ia());
        g.resize(u, !0);
        l.setmethod && (0,
        l.setmethod)(g, B);
        return !0
    }
    ;
    this.destroy = function() {
        if (!g)
            return !1;
        0 < L.curType && (KellyColorPicker.cursorLock = !1,
        L.initStandartCursor());
        A && (q(document, "mouseup", "action_process_"),
        q(document, "mousemove", "action_process_"),
        q(document, "touchend", "action_process_"),
        q(document, "touchmove", "action_process_"),
        A = !1);
        p.tag && q(t, "click", "popup_");
        t && (q(t, "click", "input_edit_"),
        q(t, "change", "input_edit_"),
        q(t, "keyup", "input_edit_"),
        q(t, "keypress", "input_edit_"));
        KellyColorPicker.popupEventsInclude && P.popup_close_click && (KellyColorPicker.activePopUp && KellyColorPicker.activePopUp.popUpClose(!1),
        q(document, "click", "popup_close_"),
        q(window, "resize", "popup_resize_"),
        KellyColorPicker.popupEventsInclude = !1);
        h.imageData = null;
        v = X = y.imageData = null;
        D && D.parentNode && D.parentNode.removeChild(D);
        O && q(window, "resize", "canvas_");
        oa();
        g = null
    }
    ;
    (function(a) {
        var b = ""
          , c = "";
        void 0 !== a.alpha_slider && (a.alphaSlider = a.alpha_slider);
        void 0 !== a.input_color && (a.inputColor = a.input_color);
        void 0 !== a.input_format && (a.inputFormat = a.input_format);
        a.input && "object" !== typeof a.input ? (a.input = document.getElementById(a.input),
        t = a.input) : "object" === typeof a.input && (t = a.input);
        void 0 !== a.changeCursor && (sa = a.changeCursor);
        void 0 !== a.alpha && (F = a.alpha);
        void 0 !== a.alphaSlider && (C = a.alphaSlider);
        void 0 !== a.inputColor && (na = a.inputColor);
        void 0 !== a.inputFormat && (aa = a.inputFormat);
        a.userEvents && (l = a.userEvents);
        a.place && "object" !== typeof a.place && (c = a.place,
        a.place = document.getElementById(a.place));
        a.place ? D = a.place : t ? (p.tag = document.createElement("div"),
        p.tag.className = "popup-kelly-color",
        a.popupClass ? p.tag.className = a.inputClassName : (p.tag.className = "popup-kelly-color",
        p.tag.style.position = "absolute",
        p.tag.style.bottom = "0px",
        p.tag.style.left = "0px",
        p.tag.style.display = "none",
        p.tag.style.backgroundColor = "#e1e1e1",
        p.tag.style.border = "1px solid #bfbfbf",
        p.tag.style.boxShadow = "7px 7px 14px -3px rgba(0,0,0,0.24)",
        p.tag.style.borderTopLeftRadius = "4px",
        p.tag.style.borderTopRightRadius = "4px",
        p.tag.style.borderBottomLeftRadius = "4px",
        p.tag.style.borderBottomRightRadius = "4px",
        p.tag.style.padding = "12px",
        p.tag.style.boxSizing = "content-box"),
        D = p.tag,
        document.getElementsByTagName("body")[0].appendChild(p.tag),
        z(t, "click", function(a) {
            return g.popUpShow(a)
        }, "popup_")) : b += '| "place" (' + c + ") not not found";
        c = !1;
        a.color ? c = N(a.color) : t && t.value && (c = N(t.value));
        c && (H = c.h,
        C && (F = c.a));
        !a.method || "triangle" != a.method && "quad" != a.method || (B = a.method);
        ta() || (b += " | cant init canvas context");
        a.resizeWith && ("object" !== typeof a.resizeWith && (a.resizeWith = document.getElementById(a.resizeWith)),
        O = !0 === O ? n : a.resizeWith,
        a.resizeSide && (Z = a.resizeSide),
        O && (R(O) && (a.size = R(O)),
        z(window, "resize", function(a) {
            return g.syncSize(a)
        }, "canvas_")));
        a.size && 0 < a.size && (u = a.size);
        b ? "undefined" !== typeof console && console.log("KellyColorPicker : " + b) : ("quad" == B && (y = ha()),
        "triangle" == B && (y = ia()),
        t && (b = function(a) {
            a = a || window.event;
            a.target || (a.target = a.srcElement);
            g.setColorByHex(a.target.value, !0)
        }
        ,
        z(t, "click", b, "input_edit_"),
        z(t, "change", b, "input_edit_"),
        z(t, "keyup", b, "input_edit_"),
        z(t, "keypress", b, "input_edit_")),
        a.colorSaver && (V("left", !0),
        V("right")),
        a.methodSwitch && S(),
        ba(),
        ea(),
        g.setColorByHex(!1))
    }
    )(ca)
}
KellyColorPicker.cursorLock = !1;
KellyColorPicker.activePopUp = !1;
KellyColorPicker.popupEventsInclude = !1;
KellyColorPicker.attachToInputByClass = function(ca, S) {
    for (var V = [], R = document.getElementsByClassName(ca), N = 0; N < R.length; N++)
        S ? S.input = R[N] : S = {
            input: R[N],
            size: 150
        },
        V.push(new KellyColorPicker(S));
    return V
};


