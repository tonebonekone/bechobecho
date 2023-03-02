var global_i = void 0
var global_p = !0
var global_A = null
var global_V = !1

;(function () {
  function Ca() {
    L = t * (0.105 + 0.895 * ((stiffness - minStiffness) / (maxStiffness - minStiffness)))
    L < W && (L = W)
  }

  var Da
  var Ea

  function Fa(arg) {
    // console.log('Fa(arg)')
    // console.log('   arg', arg)
    // console.log('   this', this)
    this.p(arg)
  }

  function init_slider(body, draggableObject) {
    // console.log('init_slider(body,draggableObject)')
    // console.log('    body', body)
    // console.log('    draggableObject', draggableObject)
    this.V = []
    this.height = 32
    this.el_sliderBoard
    this.el_sliderBoardBG
    this.el_sliderBoardTitleBar
    this.el_sliderBoardCloseButton
    this.el_sliderBoardCloseButtonIcon
    this.O
    this.sliderThumbHit = global_p
    this.K = -1
    this.ua = global_p
    this.p(draggableObject || {})
    body.appendChild(this.el_sliderBoard)
  }

  function X(arg) {
    this.u = arg
    this.ca = 1
    this.h = this.l = global_A
    this.n = this.e = 0
    this.c = []
    this.b = []
    this.L = this.M = this.I = this.H = 0
    this.Da = 2
  }

  function G(arg) {
    this.u = arg
    this.h = this.l = global_A
    this.n = this.e = 0
    this.c = []
    this.b = []
    this.B = this.C = 0
  }

  function sb() {
    var a = w,
      b = t
    w = 0.0375
    t = 22
    setTimeout(function () {
      w = a
      t = b
    }, 2500)
  }

  function Ha(arg) {
    el_image = arg
    1300 > window.innerWidth && (o = 0.65 + 0.35 * ((window.innerWidth - 950) / 350))
    800 > window.innerWidth && (o = O)
    Y = !P
    ca = userAgent.match(/Firefox/i) ? oa : Y ? (tb ? ub : oa) : vb
    u && wb()
    P && xb()
    Q &&
      ((document.body.style.overflow = 'visible'),
      (getElementByIdWrapper('out').style.display = 'block'),
      (getElementByIdWrapper('out').style.height = window.outerHeight + 100 + 'px'),
      (getElementByIdWrapper('stickyContainer').style.visibility = 'visible'),
      (Y = global_p),
      (ca = oa),
      (Ia = 0.055),
      (Ja = 0.94),
      (stiffness = w = 0.18),
      (Ka = 10),
      (v = s = 4))

    for (var arg = La / (v - 1), b = yb / (s - 1), c = v * s; c--; ) {
      var d = c % v,
        e = Math.floor(c / v),
        f
      f = new zb()
      u || ((f.i = -25 - 15 * Math.random()), (f.f = -5 - 5 * Math.random()))
      f.x = arg * d + Ma
      f.y = b * e + Na
      f.fa = d
      f.ta = e
      if (0 == d || d == v - 1 || 0 == e || e == s - 1) (f.ja = global_p), Ab.push(f)
      meshPoints[c] = f
      var h
      e < s - 1 && ((h = meshPoints[Math.floor((e + 1) * v + d)]), y.push(H(f, h)), y.push(H(h, f)))
      e < s - 2 && ((h = meshPoints[Math.floor((e + 2) * v + d)]), y.push(H(f, h)), y.push(H(h, f)))
      d < s - 1 && ((h = meshPoints[Math.floor(e * v + (d + 1))]), y.push(H(f, h)), y.push(H(h, f)))
      d < s - 2 && ((h = meshPoints[Math.floor(e * v + (d + 2))]), y.push(H(f, h)), y.push(H(h, f)))
    }

    D = meshPoints.length
    Oa = 0.5 * D
    l.push(meshPoints[0])
    l.push(meshPoints[v - 1])
    l.push(meshPoints[D - 1])
    l.push(meshPoints[D - v])
    init_bigCanvas()
    addEventListeners()
    Pa = global_V
  }

  function wb() {
    console.log('wb()')
    cursorGrabURL = cursorHandURL = pa
    console.log('   pa', pa)
    ea = -2
    v = s = 5
    stiffness = 0.07
    minStiffness = 0.0635
    maxStiffness = 0.2
    t = 4.5
    maxStickiness = 10
    Na = Ma = 0
    I = 0.5
    ra ? ((o = 0.77), (Z *= 0.9), (O *= 0.75)) : ((o = 0.35), (O = 0.225), (Z = 0.85))
    Ca = function () {
      L = t * (0.35 + 0.65 * ((stiffness - minStiffness) / (maxStiffness - minStiffness)))
      L < W && (L = W)
    }
    setTimeout(
      P
        ? function () {
            for (var a = D; a--; ) {
              var b = meshPoints[a]
              b.x = 0.5 * windowInnerWidth
              b.y = 0.35 * windowInnerHeight
              b.i = 0
              b.f = 0
            }
          }
        : function () {
            for (var a = window.innerWidth < window.innerHeight, b = 0.9 * ((a ? window.innerWidth : window.innerHeight) / 3 / s), a = a ? 8 : 3, c = 0.5 * (windowInnerWidth - 3 * b), d = 0.5 * (windowInnerHeight - 3 * b), e = D; e--; ) {
              var f = meshPoints[e]
              f.x = c + b * f.fa
              f.y = d + b * f.ta
              f.f = -a - Math.random() * a
            }
            b = 0.5 < Math.random() ? 1 : -1
            meshPoints[0].f = (40 + 20 * Math.random()) * b
            meshPoints[3].f = 50 * -b
          },
      50
    )
  }

  function xb() {
    ca = function () {
      return global_p
    }
  }

  function ga() {
    console.log('ga()')
    console.log('   this will call Sa()')
    ha = global_V
    Sa()
  }

  function init_bigCanvas() {
    console.log('init_bigCanvas()')
    el_canvas = getElementByIdWrapper('bigCanvas')
    drawingContext = el_canvas.getContext('2d')
    var el_stickyContainer = getElementByIdWrapper('stickyContainer')
    Y
      ? (S = new X(el_stickyContainer))
      : ((S = new G(el_stickyContainer)),
        el_stickyContainer.addEventListener(
          'mouseover',
          function () {
            ta = global_p
          },
          global_V
        ),
        el_stickyContainer.addEventListener(
          'mouseout',
          function () {
            ta = global_V
          },
          global_V
        ))
    S.p(el_image, v - 1, s - 1, drawingContext)
  }

  function addEventListeners() {
    console.log('addEventListeners()')
    console.log('   u', u)
    console.log('   Y', Y)
    console.log('   global_V', global_V)

    u
      ? Y
        ? (el_canvas.addEventListener('touchstart', handler_touchstart, global_V), el_canvas.addEventListener('touchend', handler_touchend, global_V), el_canvas.addEventListener('touchmove', handler_touchmove, global_V))
        : (getElementByIdWrapper('stickyContainer').addEventListener('touchstart', handler_touchstart, global_V),
          getElementByIdWrapper('stickyContainer').addEventListener('touchend', handler_touchend, global_V),
          getElementByIdWrapper('stickyContainer').addEventListener('touchmove', handler_touchmove, global_V),
          document.addEventListener(
            'touchmove',
            function (a) {
              a.preventDefault()
            },
            global_V
          ))
      : (document.addEventListener('mousedown', handler_mousedown, global_V), document.addEventListener('mouseup', meshes_something, global_V), document.addEventListener('mousemove', Db, global_V))

    document.addEventListener(
      'gesturestart',
      function (event) {
        event.preventDefault()
        Xa = o
      },
      global_V
    )
    document.addEventListener(
      'gesturechange',
      function (event) {
        if (!Ya || !g.w) {
          event.preventDefault()
          o = Xa + 0.415 * (event.scale - 1)
          o = Math.min(Z, Math.max(o, O))
        }
      },
      global_V
    )
    document.addEventListener(
      'gestureend',
      function () {
        localStorage.removeItem('stickything.scale')
        localStorage.setItem('stickything.scale', o)
      },
      global_V
    )
    window.addEventListener('devicemotion', handler_devicemotion, global_V)
    document.getElementById('options').addEventListener('click', addOrRemoveMouseOverOutEventListener, global_V)
    if (!u)
      for (var a = document.getElementsByTagName('a'), b = 0; b < a.length; b++)
        a[b].addEventListener(
          'mouseover',
          function () {
            aa = global_p
          },
          global_V
        ),
          a[b].addEventListener(
            'mouseout',
            function () {
              aa = global_V
            },
            global_V
          )
    document.onselectstart = function () {
      return global_V
    }
    document.body.addEventListener('orientationchange', handler_orientationchange, global_V)
  }

  function handler_devicemotion(arg) {
    if (15 > $a) $a++
    else {
      var arg = arg.accelerationIncludingGravity
      var b = 0.1 * arg.x
      arg = 0.1 * arg.y
      var c = 2.65 * ia
      var d = 0.85 * ia
      switch (window.orientation) {
        case -90:
          d *= b
          b = arg * c
          break
        case 90:
          d *= -b
          b = -arg * c
          break
        case 180:
          b = -b * c
          d *= arg
          break
        default:
          ;(b *= c), (d *= -arg)
      }
      ab = b
      u && (I = d)
    }
  }

  function ub() {
    return 0 < drawingContext.getImageData(E - 1, F - 1, 1, 1).data[0]
  }

  function oa() {
    var a = bb(l)
    return E > a.x - 2 && E < a.x + a.width + 2 && F > a.y - 2 && F < a.y + a.height + 2
  }
  function vb() {
    return ta
  }
  function H(a, b) {
    var c = new Fb()
    c.pa = a
    c.qa = b
    var d = b.x - a.x,
      e = b.y - a.y
    c.length = Math.sqrt(d * d + e * e)
    c.s = Math.atan2(e, d)
    c.color = 16777215 * Math.random()
    return c
  }

  function Sa() {
    // console.log('Sa()')

    if (!ha) {
      var currentTime = new Date().getTime(),
        b = currentTime - cb
      cb = currentTime

      if (33 > b && !va) {
        va = global_p
      } else {
        va = global_V
        Pa && ((db = window.screenX - eb), (fb = window.screenY - gb), (eb = window.screenX), (gb = window.screenY))
        ja = ca()
        wa || ((currentTime = ka > 0.8 * D), !hb(l) || currentTime ? la++ : (la = 0), 30 < la && ((la = 0), ib()))
        currentTime = minStiffness + 0.75 * (maxStiffness - minStiffness)
        stiffness = U && 0 == ba && w < currentTime ? currentTime : w
        xa = U && 0 == ba ? 0.94 : 1
        // console.log('    Ca', Ca)
        Ca()
        someTrigFunction()
        continuouslyCalledPhysicsFunction()
        someTrigFunction()
        continuouslyCalledPhysicsFunction()
        for (currentTime = D; currentTime--; ) (S.c[currentTime][0] = meshPoints[currentTime].x), (S.c[currentTime][1] = meshPoints[currentTime].y)
        S.sa()
        u || ((currentTime = ''), (currentTime = U ? cursorGrabURL : ja && !aa ? cursorHandURL : pa), currentTime != ya && ((ya = currentTime), (document.body.style.cursor = ya)))
      }
      requestAnimFrame(Sa)
    }
  }

  function someTrigFunction() {
    for (var a = y.length; a--; ) {
      var b = y[a],
        c = b.pa,
        d = b.qa,
        e = d.x - c.x,
        f = d.y - c.y,
        h = lb(b.s + c.s),
        J = (d.x - (c.x + Math.cos(h) * b.length * o)) * stiffness,
        h = (d.y - (c.y + Math.sin(h) * b.length * o)) * stiffness,
        g = 0.5 * (Math.abs(J) + Math.abs(h)) > L
      u && U && (g = global_p)
      if (!c.q || g) (e = Math.atan2(f, e)), (c.q = global_V), (c.j += J), (c.k += h), (c.x += J * ma), (c.y += h * ma), (c.G += lb(e - (b.s + c.s)) * Ia), (c.s += c.G)
      if (!d.q || g) (d.q = global_V), (d.j -= J), (d.k -= h), (d.x -= J * ma), (d.y -= h * ma)
    }
  }

  function continuouslyCalledPhysicsFunction() {
    // console.log('continuouslyCalledPhysicsFunction()')
    ba = ka = 0
    // console.log('   meshPoints', meshPoints)
    for (var a = meshPoints.length; a--; ) {
      var b = meshPoints[a]
      if (b.Z) {
        var c = E - b.x,
          d = F - b.y,
          e = Math.sqrt(c * c + d * d) || 1.0e-4,
          f = b.$ ? 0.5 : 0.15
        b.j += (c / e) * e * f
        b.k += (d / e) * e * f
        b.q = global_V
      }
      if (b.q)
        if ((ka++, ba < Oa)) {
          ba++
          continue
        } else b.q = global_V
      b.i *= xa
      b.f *= xa
      b.j += ab
      b.k += I
      b.j += -mb * b.i
      b.k += -mb * b.f
      b.G *= Ja
      b.i += b.j
      b.f += b.k
      b.j = 0
      b.k = 0
      b.x -= 0.5 * db
      b.y -= 0.5 * fb
      b.i > K && (b.i = K)
      b.i < -K && (b.i = -K)
      b.f > K && (b.f = K)
      b.f < -K && (b.f = -K)
      var c = b.x + b.i,
        d = b.y + b.f,
        f = (e = global_V),
        h = ea,
        J = windowInnerWidth - ea,
        g = ea,
        k = windowInnerHeight - ea
      c > J && ((e = global_p), (c = J))
      c < h && ((e = global_p), (c = h))
      d > k && ((f = global_p), (d = k))
      d < g && ((f = global_p), (d = g))
      ;(e || f) && ka++
      ;(h = (e || f) && ba < 0.25 * D) ? ((b.i = 0), (b.f = 0), (b.G = 0), e && (b.x = c), f && (b.y = d)) : ((b.x = c), (b.y = d))
      b.q = h
    }
  }

  function ib() {
    setTimeout(
      function (a, b, c, d) {
        stiffness = a
        t = b
        o = c
        I = d
        wa = global_V
        hb(l) || ib()
      },
      450,
      stiffness,
      t,
      o,
      I
    )
    stiffness = 0.8 * maxStiffness
    t = 0
    o *= 1.05
    meshes_something()
    handler_orientationchange()
    wa = global_p
    for (var a = bb(l), b = a.x + 0.5 * a.width, c = a.y + 0.5 * a.height, d = Number.MAX_VALUE, e, f = l.length; f--; ) {
      var h = l[f],
        a = h.x - b,
        h = h.y - c,
        a = Math.sqrt(a * a + h * h)
      a < d && ((d = a), (e = f), (l[e].y -= 170))
    }
    b = (400 + 100 * Math.random()) * o
    a = l.length
    c = 0 == e ? a - 1 : e - 1
    d = (e + 1) % a
    a = l[d].x - l[c].x
    h = l[d].y - l[c].y
    a = Gb(l[c].x + 0.5 * a, l[c].y + 0.5 * h, l[e].x, l[e].y, b)
    l[e].x = a.Qa
    l[e].y = a.Ra
  }

  function handler_mousedown() {
    if (ja && !aa) {
      U = global_p
      for (var a, b = [], c = meshPoints.length; c--; ) {
        a = meshPoints[c]
        var d = E - a.x,
          e = F - a.y
        b[c] = { oa: a, ha: Math.sqrt(d * d + e * e) }
      }
      b.sort(Hb)
      a = b[0].oa
      a.$ = global_p
      d = a.ja ? 5 : 9
      for (c = -1; ++c < d; ) (a = b[c].oa), (a.Z = global_p), (a.Ta = E - a.x), (a.Ua = F - a.y)
    }
  }

  function meshes_something() {
    if (U) {
      for (var a = meshPoints.length; a--; ) (meshPoints[a].Z = global_V), (meshPoints[a].$ = global_V)
      U = global_V
    }
  }

  function Db(arg) {
    arg = arg ? arg : window.event
    E = arg.clientX
    F = arg.clientY
  }

  function handler_orientationchange() {
    u && 1 != document.body.scrollTop && window.scrollTo(0, 1)
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    for (var a = meshPoints.length; a--; ) meshPoints[a].q = global_V
    el_canvas.width = windowInnerWidth
    el_canvas.height = windowInnerHeight
  }

  function handler_touchstart(event) {
    console.log('handler_touchStart()')
    1 == event.touches.length && ((E = event.touches[0].pageX), (F = event.touches[0].pageY), 3 != event.target.nodeType && (event.preventDefault(), Y && (ja = ca()), handler_mousedown()))
  }

  function handler_touchend(event) {
    console.log('handler_touchEnd()')
    3 != event.target.nodeType && (event.preventDefault(), meshes_something())
  }

  function handler_touchmove(event) {
    1 == event.touches.length && (event.preventDefault(), (E = event.touches[0].pageX), (F = event.touches[0].pageY))
  }

  function bb(a) {
    for (var b = 1e5, c = -1e5, d = 1e5, e = -1e5, f = a.length; f--; ) {
      var h = a[f]
      h.x < b && (b = h.x)
      h.x > c && (c = h.x)
      h.y < d && (d = h.y)
      h.y > e && (e = h.y)
    }
    return { x: b, y: d, width: c - b, height: e - d }
  }
  function Hb(a, b) {
    return a.ha - b.ha
  }
  function lb(a) {
    for (; a > pi; ) a -= tau
    for (; a < -pi; ) a += tau
    return a
  }
  function hb(a) {
    for (var b, c = a.length, d = 0; d < c; ++d) {
      var e = 0 == d ? c - 1 : d - 1,
        f = d,
        h = d == c - 1 ? 0 : d + 1,
        e = 0 < (a[f].x - a[e].x) * (a[h].y - a[f].y) - (a[h].x - a[f].x) * (a[f].y - a[e].y) ? global_p : global_V
      if (0 == d) b = e
      else if (b != e) return global_V
    }
    return global_p
  }
  function Gb(a, b, c, d, e) {
    var f = c - a,
      h = d - b,
      g = Math.sqrt(f * f + h * h),
      f = (f / g) * e,
      h = (h / g) * e
    return { Qa: a - f, Ra: b - h, Ya: c + f, Za: d + h }
  }
  function Aa(a, b, c) {
    a < b && (a = b)
    a > c && (a = c)
    return a
  }

  function zb() {
    this.s = this.G = this.k = this.j = this.f = this.i = this.ta = this.fa = 0
    this.ja = this.$ = this.Z = this.q = global_V
  }
  function Fb() {
    this.qa = this.pa = global_A
    this.length = 0.001
    this.s = 0
    this.color = '#000'
  }

  function getStuffFromLocalStorage() {
    console.log('getStuffFromLocalStorage()')
    console.log('   Q', Q)
    Q
      ? setTimeout(function () {
          Ha(el_image)
          ob()
          pb.p()
        }, 750)
      : (Ha(el_image),
        isNaN(parseFloat(localStorage.getItem('stickything.stickiness'))) || ((t = parseFloat(localStorage.getItem('stickything.stickiness'))), (t = Aa(t, W, maxStickiness)), (qb = global_V)),
        isNaN(parseFloat(localStorage.getItem('stickything.stiffness'))) || ((w = parseFloat(localStorage.getItem('stickything.stiffness'))), (w = Aa(w, minStiffness, maxStiffness))),
        isNaN(parseFloat(localStorage.getItem('stickything.scale'))) || ((o = parseFloat(localStorage.getItem('stickything.scale'))), (o = Aa(o, O, Z))),
        isNaN(parseFloat(localStorage.getItem('stickything.gravityY'))) || (I = parseFloat(localStorage.getItem('stickything.gravityY'))),
        isNaN(parseFloat(localStorage.getItem('stickything.accelerometerFactor'))) || (ia = parseFloat(localStorage.getItem('stickything.accelerometerFactor'))),
        ob(),
        u ? pb.p() : Jb())
  }

  function Jb() {
    g.U(242, -1)
    g.P()
    g.S = addOrRemoveMouseOverOutEventListener
    getElementByIdWrapper('navContainer').style.display = 'block'
    handler_orientationchange()
    window.onresize = handler_orientationchange
    setTimeout(function () {
      getElementByIdWrapper('stickyContainer').style.visibility = 'visible'
      qb && sb()
      ga()
    }, 150)
  }

  function ob() {
    console.log('ob()')
    g = new init_slider(document.body, { draggable: !u })
    console.log('g', g)
    console.log('g', g)
    g.add(
      'stickiness',
      t,
      W,
      maxStickiness,
      function (a) {
        t = a
      },
      this,
      0,
      u ? 9.9 : 10,
      function (a) {
        localStorage.removeItem('stickything.stickiness')
        localStorage.setItem('stickything.stickiness', a)
      }
    )
    console.log('g', g)
    Q ||
      g.add(
        'stiffness',
        w,
        minStiffness,
        maxStiffness,
        function (a) {
          w = a
          getElementByIdWrapper('out').innerHTML = '&nbsp;<br>'
        },
        this,
        1,
        u ? 9.9 : 10,
        function (a) {
          localStorage.removeItem('stickything.stiffness')
          localStorage.setItem('stickything.stiffness', a)
        }
      )
    Da ||
      g.add(
        'size',
        o,
        O,
        Z,
        function (a) {
          o = a
        },
        this,
        0.25,
        u ? 9.9 : 10,
        function (a) {
          localStorage.removeItem('stickything.scale')
          localStorage.setItem('stickything.scale', a)
        }
      )
    Ea
      ? g.add(
          'gravity',
          ia,
          0,
          1.75,
          function (a) {
            ia = a
          },
          this,
          0,
          2,
          function (a) {
            localStorage.removeItem('stickything.accelerometerFactor')
            localStorage.setItem('stickything.accelerometerFactor', a)
          }
        )
      : g.add(
          'gravity',
          I,
          0,
          1,
          function (a) {
            I = a
          },
          this,
          0,
          1,
          function (a) {
            localStorage.removeItem('stickything.gravityY')
            localStorage.setItem('stickything.gravityY', a)
          }
        )
    g.P()
  }

  /**
   * Something about removing the mouseover event listener
   */
  function addOrRemoveMouseOverOutEventListener(arg) {
    g.w
      ? (g.el_sliderBoard.removeEventListener('mouseover', na, global_V), g.el_sliderBoard.removeEventListener('mouseout', na, global_V), arg && g.X(), (aa = global_V))
      : (g.el_sliderBoard.addEventListener('mouseover', na, global_V), g.el_sliderBoard.addEventListener('mouseout', na, global_V), Kb())
  }
  function na(a) {
    aa = 'mouseover' == a.type ? global_p : global_V
  }
  function Kb() {
    var a = window.innerWidth - 318,
      b = rb
    r.o(g.el_sliderBoard, a, Ka)
    g.show()
    g.el_sliderBoard.style.opacity = 0
    clearInterval(Ba)
    Ba = setInterval(function () {
      var c = r.v(g.el_sliderBoard).y,
        d = 0.35 * (b - c)
      r.o(g.el_sliderBoard, a, c + d)
      g.el_sliderBoard.style.opacity = parseFloat(g.el_sliderBoard.style.opacity) + 0.125
      0.65 > Math.abs(d) && clearInterval(Ba)
    }, 25)
  }

  function getElementByIdWrapper(a) {
    return document.getElementById(a)
  }

  function init_el_out() {
    getElementByIdWrapper('out').style.display = 'block'
    for (var a = arguments[arguments.length - 1], b = arguments.length - 1; b--; ) {
      a = arguments[b] + ', ' + a
      getElementByIdWrapper('out').innerHTML = getElementByIdWrapper('out').innerHTML + '<br>' + a
    }
  }
  var r = (function () {
    function a(arg) {
      function c(arg) {
        var b = d(arg),
          f = h[0] + (b[0] - j[0]),
          b = h[1] + (b[1] - j[1])
        if (e.d) {
          var g = e.d
          f < g.left && (f = g.left)
          f > g.right && (f = g.right)
          b < g.top && (b = g.top)
          b > g.bottom && (b = g.bottom)
        }
        e.Ea || B(e.element, f, b)
        e.J !== global_i && e.J(arg, f, b)
      }
      function d(a) {
        var c
        a.touches && a.touches.length ? ((c = a.touches[0].clientX), (a = a.touches[0].clientY)) : ((c = a.clientX), (a = a.clientY))
        c = b(e.element, c, a)
        return [c.x, c.y]
      }
      var e = g[arg.target.wa]
      'touchstart' === arg.type
        ? ((e.handle.onmousedown = global_A),
          (e.handle.ontouchmove = c),
          (e.handle.ontouchend = function () {
            e.handle.ontouchmove = global_A
            e.handle.ontouchend = global_A
            e.r && e.r(arg)
          }))
        : ((document.onmousemove = c),
          (document.onmouseup = function () {
            document.onmousemove = global_A
            document.onmouseup = global_A
            e.r && e.r(arg)
          }))
      arg.preventDefault()
      var f = k(e.element),
        h = [f.x, f.y],
        j = d(arg)
      e.T && e.T(arg)
      return global_V
    }
    function b(a, b, c) {
      for (a = a.parentElement; a; ) (b -= a.offsetLeft), (c -= a.offsetTop), (a = a.parentElement)
      return { x: b, y: c }
    }
    function c(a, b, c) {
      a.style.left = b + 'px'
      a.style.top = c + 'px'
    }
    function d(a) {
      return { x: a.offsetLeft, y: a.offsetTop }
    }
    function e(a, b, c) {
      a.style.WebkitTransform = 'translate3d(' + b + 'px,' + c + 'px,0px)'
    }

    function f(arg) {
      arg = new WebKitCSSMatrix(window.getComputedStyle(arg).webkitTransform)
      return { x: arg.m41, y: arg.m42 }
    }

    var h = 0,
      g = {},
      B,
      k
    navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)
    ;/AppleWebKit/.test(navigator.userAgent) ? ((B = e), (k = f)) : ((B = c), (k = d))
    return {
      ka: function (b) {
        b.handle || (b.handle = b.element)
        b.handle.onmousedown = b.handle.ontouchstart = a
        var c = h++
        b.handle.wa = c
        g[c] = b
      },
      Wa: b,
      o: B,
      v: k,
      ra: function (a) {
        var b = k(a)
        a.style.left = b.x + 'px'
        a.style.top = b.y + 'px'
        a.style.WebkitTransform = ''
      },
    }
  })()

  // SLIDER CONTROLS
  console.log('==========================================================================================')

  console.log('assign sliders to Fa.prototype')
  // console.log('   Fa', Fa)
  console.log('   Fa.prototype', Fa.prototype)
  var sliders = Fa.prototype
  console.log('   SLIDER_CONTROLS BEFORE CREATING NEW METHODS', sliders)

  sliders.U = function (a) {
    this.sliderThumbHitidth = a -= this.A.offsetWidth
    this.d.right = this.sliderThumbHitidth - this.D
    this.F.style.width = this.sliderThumbHitidth + 'px'
    this.A.style.left = a + 10 + 'px'
    a = this.map(this.value, this.R, this.Q, this.d.left, this.d.right)
    r.o(this.g, a, 0)
  }
  sliders.p = function (arg) {
    this.za()
    this.Ka = arg.Ca !== global_i ? arg.Ca : 1
    this.id = arg.id
    this.index = arg.index
    this.u = arg.u
    this.R = arg.min
    this.Q = arg.max
    this.Ja = arg.na !== global_i ? arg.na : arg.min
    this.Ia = arg.ma !== global_i ? arg.ma : arg.max
    this.ba = arg.ba || function () {}
    this.La = arg.r !== global_i ? arg.r : function () {}
    this.sliderThumbHitidth = 175
    this.D = 16
    this.d = {
      top: 0,
      left: 0,
      right: this.sliderThumbHitidth - this.D,
      bottom: 0,
    }
    this.u.appendChild(this.el_sliderBoard)
    this.Ma()
    var b = this
    r.ka({
      element: this.g,
      handle: this.sliderThumbHit,
      Sa: this.d,
      T: function () {
        b.T()
      },
      r: function () {
        b.r()
      },
      J: function (a, d, e) {
        b.J(a, d, e)
      },
      Ea: global_p,
    })
    this.va(arg.value !== global_i ? arg.value : -1)
    setTimeout(function () {
      b.D = b.g.offsetWidth
      b.D = b.g.offsetWidth
      var a = b.width - b.D
      r.v(b.g).x > a && r.o(b.g, a, 0)
    }, 0)
  }

  sliders.za = function () {
    console.log('n.za()')
    console.log('   this', this)
    this.el_sliderBoard = document.createElement('div')
    this.el_sliderBoard.className = 'sliderContainer'
    this.g = document.createElement('div')
    this.g.className = 'sliderThumb'
    this.sliderThumbHit = document.createElement('div')
    this.sliderThumbHit.className = 'sliderThumbHit'
    this.g.appendChild(this.sliderThumbHit)
    this.F = document.createElement('div')
    this.F.className = 'sliderTrack'
    this.el_sliderScale = document.createElement('div')
    this.el_sliderScale.className = 'sliderScale'
    this.A = document.createElement('div')
    this.A.className = 'sliderOutput'
    this.A.innerHTML = '0.0'
    this.el_sliderBoard.appendChild(this.F)
    this.el_sliderBoard.appendChild(this.el_sliderScale)
    this.el_sliderBoard.appendChild(this.g)
    this.el_sliderBoard.appendChild(this.A)
  }

  sliders.va = function (a) {
    if (a != this.value) {
      var b = this.map(a, this.R, this.Q, this.d.left, this.d.right)
      r.o(this.g, b, 0)
      this.value = a
      this.Y = this.map(a, this.R, this.Q, this.Ja, this.Ia)
      this.A.innerHTML = this.Y.toFixed(this.Ka)
      this.ba(this.value, this.Y, this)
    }
  }
  sliders.Va = function () {
    return this.value
  }
  sliders.J = function (a, b) {
    this.va(this.map(b, this.d.left, this.d.right, this.R, this.Q))
  }
  sliders.T = function () {
    this.g.className = 'sliderThumbActive'
    this.F.className = 'sliderTrackActive'
    this.d.right = this.sliderThumbHitidth - this.g.offsetWidth
  }
  sliders.r = function () {
    this.g.className = 'sliderThumb'
    this.F.className = 'sliderTrack'
    this.La.apply(global_A, [this.value, this.Y])
  }
  sliders.Xa = function () {}
  sliders.Oa = function (a) {
    var b = a ? a : window.event,
      c = r.v(this.el_sliderBoard.parentElement ? this.el_sliderBoard.parentElement.parentElement : this.el_sliderBoard.parentNode.parentNode),
      c = ('mousedown' == a.type ? a.pageX : a.touches[0].pageX) - c.x - 20 - 0.5 * this.D
    c < this.d.left && (c = this.d.left)
    c > this.d.right && (c = this.d.right)
    var d = r.v(this.g)
    r.o(this.g, c, d.y)
    this.J(b, c, 0)
    b.preventDefault()
    try {
      this.sliderThumbHit.dispatchEvent(a)
    } catch (e) {}
  }
  sliders.Ma = function () {
    var a = this
    this.F.addEventListener(
      'mousedown',
      function (b) {
        a.Oa(b)
      },
      global_V
    )
  }
  sliders.map = function (a, b, c, d, e) {
    a = d + ((a - b) / (c - b)) * (e - d)
    a > e ? (a = e) : a < d && (a = d)
    return a
  }
  sliders.toString = function () {
    return '[Slider]'
  }
  sliders = init_slider.prototype
  sliders.p = function (a) {
    this.ya()
    if (a.draggable) {
      this.O = {
        element: this.el_sliderBoard,
        handle: this.el_sliderBoardBG,
        d: {
          left: 0,
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
        },
      }
      r.ka(this.O)
      var b = this
      setTimeout(function () {
        b.ga()
      }, 100)
      window.addEventListener(
        'resize',
        function () {
          b.ga()
        },
        global_V
      )
    }
  }
  sliders.add = function (a, b, c, d, e, f, h, g, B) {
    var k = document.createElement('div')
    k.className = 'sliderItem'
    this.el_sliderBoard.appendChild(k)
    var j = document.createElement('div')
    j.className = 'sliderLabel'
    j.innerHTML = a
    k.appendChild(j)
    var m = m || {}
    m.label = a
    m.index = this.V.length
    m.u = k
    m.value = b
    m.min = c
    m.max = d
    m.ba = e
    m.r = B
    m.na = h
    m.ma = g
    a = new Fa(m)
    this.V.push({ scope: f, Na: a })
  }
  sliders.U = function (a, b) {
    for (var c = a - 40, d = this.V.length; d--; ) this.V[d].Na.U(c, b)
    this.el_sliderBoard.style.width = a + 'px'
    this.el_sliderBoardCloseButton.style.left = a - this.el_sliderBoardCloseButtonIcon.offsetWidth - 12 + 'px'
  }
  sliders.ya = function () {
    this.el_sliderBoard = document.createElement('div')
    this.el_sliderBoard.className = 'sliderBoard'
    this.el_sliderBoardBG = document.createElement('div')
    this.el_sliderBoardBG.className = 'sliderBoardBG'
    this.el_sliderBoardTitleBar = document.createElement('div')
    this.el_sliderBoardTitleBar.className = 'sliderBoardTitleBar'
    var a = this
    this.el_sliderBoardCloseButton = document.createElement('div')
    this.el_sliderBoardCloseButton.className = 'sliderBoardCloseButton'
    this.el_sliderBoardCloseButton.onmouseup = function () {
      a.X()
    }
    this.el_sliderBoardCloseButton.ontouchstart = function (b) {
      a.xa()
      b.preventDefault()
    }
    this.el_sliderBoardCloseButton.ontouchend = function (b) {
      b.preventDefault()
      a.X()
    }
    var b = document.createElement('div')
    b.className = 'sliderBoardCloseButtonHit'
    this.el_sliderBoardCloseButton.appendChild(b)
    b = document.createElement('div')
    b.className = 'sliderBoardCloseButtonBG'
    this.el_sliderBoardCloseButton.appendChild(b)
    this.el_sliderBoardCloseButtonIcon = document.createElement('div')
    this.el_sliderBoardCloseButtonIcon.innerHTML = '\u2715'
    this.el_sliderBoardCloseButtonIcon.className = 'sliderBoardCloseButtonIcon'
    this.el_sliderBoardCloseButton.appendChild(this.el_sliderBoardCloseButtonIcon)
    this.el_sliderBoard.appendChild(this.el_sliderBoardBG)
    this.el_sliderBoard.appendChild(this.el_sliderBoardTitleBar)
    this.el_sliderBoard.appendChild(this.el_sliderBoardCloseButton)
  }
  sliders.move = function (a, b) {
    r.o(this.el_sliderBoard, a, b)
  }
  sliders.ga = function () {
    var a = window.innerWidth - this.el_sliderBoardBG.offsetWidth,
      b = window.innerHeight - this.el_sliderBoardBG.offsetHeight
    0 > a && (a = 0)
    0 > b && (b = 0)
    var c = r.v(this.el_sliderBoard)
    c.x > a && c.y > b ? r.o(this.el_sliderBoard, a, b) : c.x > a ? r.o(this.el_sliderBoard, a, c.y) : c.y > b && r.o(this.el_sliderBoard, c.x, b)
    this.O.d.right = a
    this.O.d.bottom = b
  }
  sliders.show = function () {
    this.el_sliderBoard.style.visibility = 'visible'
    this.sliderThumbHit = global_p
    clearInterval(this.K)
  }
  sliders.P = function () {
    this.el_sliderBoard.style.visibility = 'hidden'
    this.sliderThumbHit = global_V
    clearInterval(this.K)
  }

  sliders.X = function () {
    console.log('close?')
    this.S && this.S.apply(global_A)
    if (this.ua) {
      var a = r.v(this.el_sliderBoard)
      this.move(a.x, a.y - 4)
      this.sliderThumbHit = global_V
      this.el_sliderBoard.style.opacity = 0.75
      clearInterval(this.K)
      this.K = setInterval(
        function (arg) {
          var c = r.v(arg.el_sliderBoard)
          arg.move(c.x, c.y - 5)
          c = parseFloat(arg.el_sliderBoard.style.opacity)
          arg.el_sliderBoard.style.opacity = c - 0.175
          0 >= c && arg.P()
        },
        20,
        this
      )
    }
  }
  sliders.xa = function () {
    this.el_sliderBoardCloseButtonIcon.style.color = '#CCCCCC'
    var a = this.el_sliderBoardCloseButtonIcon.style
    setTimeout(function () {
      a.color = '#444444'
      a.WebkitTransition = 'color 0.3s ease-in-out'
    }, 100)
    setTimeout(function () {
      a.WebkitTransition = ''
    }, 450)
  }
  delete sliders

  console.log('   SLIDER_CONTROLS AFTER CREATING NEW METHODS', sliders)

  console.log('==========================================================================================')

  // BEGIN X
  X.prototype.p = function (a, b, c, d) {
    this.h = d
    this.l = document.createElement('canvas')
    this.l.width = a.width + 2
    this.l.height = a.width + 2
    this.l.getContext('2d').drawImage(a, 0, 0)
    d = a.width / b
    a = a.height / c
    this.e = b + 1
    this.n = c + 1
    this.c = []
    this.b = []
    for (b = 0; b < this.n; b++)
      for (c = 0; c < this.e; c++) {
        var e = c * d,
          f = b * a
        this.c.push([e, f])
        if (c < this.e - 1 && b < this.n - 1) {
          var h = e + d,
            g = f + a
          this.b.push(e)
          this.b.push(f)
          this.b.push(h)
          this.b.push(f)
          this.b.push(e)
          this.b.push(g)
          this.b.push(h)
          this.b.push(g)
          this.b.push(e)
          this.b.push(g)
          this.b.push(h)
          this.b.push(f)
        }
      }
  }
  X.prototype.sa = function () {
    var a = this.Da
    this.h.clearRect(this.H - a, this.I - a, this.M - this.H + 2 * a, this.L - this.I + 2 * a)
    this.I = this.H = Number.MAX_VALUE
    for (var a = (this.L = this.M = 0), b = this.e, c = this.n, d = 0; d < c; d++)
      for (var e = 0; e < b; e++)
        if (e < b - 1 && d < c - 1) {
          var f = this.c[d * b + e],
            h = f[0],
            f = f[1],
            g = this.c[d * b + e + 1],
            B = g[0],
            g = g[1],
            k = this.c[(d + 1) * b + e],
            j = k[0],
            k = k[1],
            m = this.c[(d + 1) * b + e + 1],
            n = m[0],
            m = m[1],
            l = this.b[a],
            q = this.b[a + 1],
            o = this.b[a + 2],
            r = this.b[a + 3],
            v = this.b[a + 4],
            t = this.b[a + 5],
            u = this.b[a + 6],
            s = this.b[a + 7],
            a = a + 12
          this.ia(h, f, B, g, j, k, l, q, o, r, v, t)
          this.ia(n, m, j, k, B, g, u, s, v, t, o, r)
          this.Pa([h, f, B, g, j, k, n, m])
        }
  }
  X.prototype.ia = function (a, b, c, d, e, f, h, g, j, k, n, m) {
    if (!((a == c && a == e && c == e) || (b == d && b == f && d == f))) {
      var b = this.aa(a, b, c, d),
        a = b[0],
        b = b[1],
        l = this.aa(c, d, e, f),
        c = l[0],
        d = l[1],
        l = this.aa(e, f, a, b),
        e = l[0],
        f = l[1]
      this.h.beginPath()
      this.h.moveTo(a, b)
      this.h.lineTo(c, d)
      this.h.lineTo(e, f)
      this.h.closePath()
      var c = c - a,
        d = d - b,
        e = e - a,
        f = f - b,
        j = j - h,
        k = k - g,
        n = n - h,
        m = m - g,
        o = 1 / (j * m - n * k),
        l = (m * c - k * e) * o,
        k = (m * d - k * f) * o,
        c = (j * e - n * c) * o,
        j = (j * f - n * d) * o,
        a = a - l * h - c * g,
        h = b - k * h - j * g
      this.h.save()
      this.h.transform(l, k, c, j, a, h)
      this.h.clip()
      this.h.drawImage(this.l, 0, 0)
      this.h.restore()
    }
  }
  X.prototype.aa = function (a, b, c, d) {
    var c = c - a,
      d = d - b,
      e = Math.sqrt(c * c + d * d)
    return [a - (c / e) * this.ca, b - (d / e) * this.ca]
  }
  X.prototype.Pa = function (a) {
    for (var b = a.length, c = 0; c < b; c += 2) {
      var d = a[c],
        e = a[c + 1]
      d < this.H && (this.H = d)
      d > this.M && (this.M = d)
      e < this.I && (this.I = e)
      e > this.L && (this.L = e)
    }
  }
  console.log('X', X)

  // ==========================================================================================

  // G
  G.prototype.p = function (a, b, c, d) {
    this.h = d
    this.l = document.createElement('canvas')
    this.l.width = a.width + 6
    this.l.height = a.width + 6
    this.l.getContext('2d').drawImage(a, 0, 0)
    this.C = a.width / b
    this.B = a.height / c
    this.e = b + 1
    this.n = c + 1
    this.Ba()
    this.Aa()
  }
  G.prototype.Ba = function () {
    this.c = []
    this.b = []
    for (var a = 0; a < this.n; a++)
      for (var b = 0; b < this.e; b++) {
        var c = b * this.C,
          d = a * this.B
        this.c.push([c, d])
        if (b < this.e - 1 && a < this.n - 1) {
          var e = c + this.C,
            f = d + this.B
          this.b.push(c)
          this.b.push(d)
          this.b.push(e)
          this.b.push(d)
          this.b.push(c)
          this.b.push(f)
          this.b.push(e)
          this.b.push(f)
          this.b.push(c)
          this.b.push(f)
          this.b.push(e)
          this.b.push(d)
        }
      }
  }
  G.prototype.Aa = function () {
    this.ea = this.Fa()
    this.Ga = 'WebkitTransform' == this.ea ? this.la : this.Ha
    this.N = []
    for (var a = this.c.length - this.n, b = 0; b < a; b++)
      if (b % this.e != this.e - 1) {
        var c = this.c[b][0],
          d = this.c[b][1],
          e = Math.ceil(this.C),
          f = Math.ceil(this.B),
          h = document.createElement('div'),
          g = document.createElement('div')
        h.style.position = g.style.position = 'absolute'
        h.style.left = '0px'
        h.style.top = '0px'
        g.style.left = '0px'
        g.style.top = '0px'
        var j = document.createElement('canvas'),
          k = document.createElement('canvas')
        j.style.position = k.style.position = 'absolute'
        j.style.left = k.style.left = '-1px'
        j.style.top = k.style.top = '-1px'
        j.setAttribute('width', e + 2)
        j.setAttribute('height', f + 2)
        k.setAttribute('width', e + 2)
        k.setAttribute('height', f + 2)
        h.appendChild(j)
        g.appendChild(k)
        this.u.appendChild(h)
        this.u.appendChild(g)
        this.N.push(h)
        this.N.push(g)
        h = j.getContext('2d')
        h.beginPath()
        h.moveTo(0, 0)
        h.lineTo(e + 4, 0)
        h.lineTo(0, f + 4)
        h.clip()
        h.drawImage(this.l, c, d, e + 2, f + 2, 0, 0, e + 2, f + 2)
        k = k.getContext('2d')
        k.beginPath()
        k.moveTo(e + 1, f + 1)
        k.lineTo(0, f + 1)
        k.lineTo(e + 1, 0)
        k.clip()
        k.drawImage(this.l, c, d, e + 1, f + 1, 0, 0, e + 1, f + 1)
      }
  }
  G.prototype.sa = function () {
    for (var a = 0, b = 0, c = 0, d = this.c.length - this.n, e = 0; e < d; e++)
      if (e % this.e == this.e - 1) (a = 0), b++
      else {
        var f = this.c[b * this.e + a],
          h = f[0],
          f = f[1],
          g = this.c[b * this.e + a + 1],
          j = g[0],
          g = g[1],
          k = this.c[(b + 1) * this.e + a],
          l = k[0],
          k = k[1],
          m = this.c[(b + 1) * this.e + a + 1],
          n = m[0],
          m = m[1],
          o = this.N[c++],
          q = this.N[c++]
        o.style[this.ea] = this.Ga(0, 0, this.C, 0, 0, this.B, h, f, j, g, l, k)
        q.style[this.ea] = this.la(this.C, this.B, 0, 0, 0, 0, n, m, l, k, j, g)
        a++
      }
  }
  G.prototype.la = function (a, b, c, d, e, f, g, j, l, k, n, m) {
    d = (l - g) / (c - a)
    m = (m - j) / (f - b)
    c = (k - j) / (c - a)
    f = (n - g) / (f - b)
    return 'matrix3d(' + d + ',' + c + ',0,0,' + f + ',' + m + ',0,0,0,0,1,0,' + (g - a * d - b * f) + ',' + (j - b * m - a * c) + ',0,1)'
  }
  G.prototype.Ha = function (a, b, c, d, e, f, g, j, l, k, n, m) {
    d = (l - g) / (c - a)
    m = (m - j) / (f - b)
    c = (k - j) / (c - a)
    f = (n - g) / (f - b)
    return 'matrix(' + d + ',' + c + ',' + f + ',' + m + ',' + (g - a * d - b * f) + ',' + (j - b * m - a * c) + ')'
  }
  G.prototype.Fa = function () {
    for (var a = document.body, b = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform'], c; (c = b.shift()); ) if ('undefined' != typeof a.style[c]) return c
    return global_V
  }
  console.log('G', G)

  // ==========================================================================================

  var pb = (function () {
    function a(a) {
      a = a ? 'addEventListener' : 'removeEventListener'
      el_optionsBTN[a]('touchend', d, global_V)
      s[a]('touchend', k, global_V)
    }
    function setIconBarWidthHeight() {
      getElementByIdWrapper('iconBar').style.width = window.innerWidth + 'px'
      z.style.width = window.innerWidth + 'px'
      z.style.height = window.innerHeight + 1 + 'px'
    }
    function c(a) {
      var b, c
      b || (b = '#BBBBBB')
      c || (c = '#444444')
      a.style.backgroundColor = b
      setTimeout(function () {
        a.style.backgroundColor = c
        a.style.WebkitTransition = 'background-color 0.4s ease-in-out'
      }, 100)
      setTimeout(function () {
        a.style.WebkitTransition = ''
      }, 750)
    }
    function d() {
      g.w ? e() : (window.addEventListener('resize', f, global_V), (g.S = e), j())
    }
    function e() {
      g.S = global_A
      l()
      window.removeEventListener('resize', f, global_V)
    }
    function f() {
      setTimeout(function () {
        var a = h()
        g.el_sliderBoard.style.left = '0px'
        g.el_sliderBoard.style.top = '0px'
        g.move(a.x, a.y)
        r.ra(g.el_sliderBoard)
      }, 10)
    }
    function h() {
      var a, b
      switch (v) {
        case '':
          b = window.innerHeight - g.el_sliderBoard.offsetHeight
          a = Math.round(0.5 * (window.innerWidth - t))
          b = Math.round(0.5 * b - (80 < b ? 22 : 5))
          break
        case 'TR':
          a = window.innerWidth - t - 32
          b = 60
          break
        default:
          console.log('Board align wrong.')
      }
      0 > b && (b = 0)
      return { x: Math.round(a), y: Math.round(b) }
    }
    function j() {
      ha = global_p
      clearInterval(y)
      var a = h(),
        b = a.x,
        c = a.y
      g.el_sliderBoard.style.left = '0px'
      g.el_sliderBoard.style.top = '0px'
      g.move(b, 0)
      g.el_sliderBoard.style.opacity = 0
      g.show()
      setTimeout(function () {
        g.el_sliderBoard.style.opacity = 1
        g.el_sliderBoard.style.WebkitTransform = 'translate3d(' + b + 'px,' + c + 'px,0px)'
        g.el_sliderBoard.style.WebkitTransition = 'all 0.45s cubic-bezier(0.0,0.55,0.0,1.0)'
      }, 0)
      setTimeout(function () {
        g.el_sliderBoard.style.WebkitTransition = ''
        r.ra(g.el_sliderBoard)
        Ya || ga()
      }, 500)
    }
    function l() {
      ha = global_p
      clearInterval(y)
      var a = 0.3 * -h().y
      setTimeout(function () {
        g.el_sliderBoard.style.opacity = 0
        g.el_sliderBoard.style.WebkitTransform = 'translate3d(0px,' + a + 'px,0px)'
        g.el_sliderBoard.style.WebkitTransition = 'all 0.25s ease-in-out'
      }, 0)
      setTimeout(function () {
        g.el_sliderBoard.style.WebkitTransition = ''
        g.P()
        x || ga()
      }, 200)
    }
    function k() {
      console.log('k()')
      if (w == s) {
        w = { id: 'NULL' }
        c(s)
        setIconBarWidthHeight()
        g.w && e()
        ha = global_p
        m(global_V)
        a(global_V)
        z.style.display = 'block'
        x = global_p
        var d = document.getElementById('aboutOverlayInner')
        d.style.WebkitTransform = 'translate3d(0px,35px,0px)'
        var f = 0.5 * -d.offsetHeight,
          f = 300 > window.innerHeight ? f - 4 : f - 8
        Q && (f -= 10)
        setTimeout(function () {
          z.style.opacity = 1
          z.style.WebkitTransition = 'opacity 0.25s ease-out'
          d.style.WebkitTransform = 'translate3d(0px,' + f + 'px,0px)'
          d.style.WebkitTransition = '-webkit-transform 0.45s cubic-bezier(0.0,0.5,0.0,1.0)'
        }, 0)
        setTimeout(function () {
          z.addEventListener('touchstart', n, global_V)
        }, 650)
      }
    }
    function n(b) {
      b.target == z &&
        (setTimeout(function () {
          z.removeEventListener('touchstart', n, global_V)
          z.style.opacity = 0
          z.style.WebkitTransition = 'opacity 0.2s ease-out'
          var a = document.getElementById('aboutOverlayInner')
          a.style.WebkitTransform = 'translate3d(0px,8px,0px)'
          a.style.WebkitTransition = '-webkit-transform 0.25s cubic-bezier(1.000, 0.000, 1.000, 0.750)'
        }, 0),
        setTimeout(function () {
          z.style.display = 'none'
          m(global_p)
          a(global_p)
          ga()
          x = global_V
        }, 300))
    }

    function m(arg) {
      arg ? document.addEventListener('touchstart', o, global_V) : document.removeEventListener('touchstart', o, global_V)
    }

    function o(arg) {
      3 != arg.target.nodeType && arg.preventDefault()
    }

    var v = '',
      t = 280,
      el_optionsBTN,
      s,
      z,
      x = global_V,
      w,
      y

    return {
      p: function () {
        if (Q) {
          var d = navigator.userAgent.split('Android ')[1],
            d = d.substring(0, d.indexOf(';'))
          if (2.2 > parseFloat(d)) {
            init_el_out(
              '<br><br><div style="font-family:sans;font-size:20px;color:#666666;padding:0 10px">Hello,<br><br>Sorry but you need a newer Android version to run this, at least <strong>2.2</strong> (Froyo).<br><br>But you can still view this site on a desktop computer instead.</div>'
            )
            return
          }
          S.ca = 1.5
        }
        var el_iconBar = getElementByIdWrapper('iconBar')
        el_iconBar.style.display = 'block'
        w = s = getElementByIdWrapper('infoBTN')
        s.addEventListener(
          'touchstart',
          function () {
            w = s
            c(s)
          },
          global_V
        )
        el_optionsBTN = getElementByIdWrapper('optionsBTN')
        el_optionsBTN.addEventListener(
          'touchstart',
          function () {
            c(el_optionsBTN)
          },
          global_V
        )
        m(global_p)
        a(global_p)
        z = getElementByIdWrapper('aboutOverlay')
        g.ua = global_V
        g.U(t, -1)
        ra && (v = 'TR')
        Q ||
          document.addEventListener(
            'touchstart',
            function () {
              0 == document.body.scrollTop && setTimeout(window.scrollTo, 10, 0, 1)
            },
            global_V
          )
        setTimeout(function () {
          handler_orientationchange()
          setIconBarWidthHeight()
        }, 100)
        setTimeout(
          function () {
            Q && ((getElementByIdWrapper('out').style.height = '100%'), handler_orientationchange())
            window.onresize = handler_orientationchange
            window.addEventListener('resize', setIconBarWidthHeight, global_V)
            getElementByIdWrapper('stickyContainer').style.visibility = 'visible'
            ga()
          },
          P ? 150 : 1250
        )
        P
          ? (setTimeout(function () {
              el_iconBar.style.opacity = 1
              el_iconBar.style.WebkitTransition = 'opacity 0.55s ease-in-out'
            }, 1500),
            setTimeout(function () {
              el_iconBar.style.WebkitTransition = ''
            }, 3e3))
          : (el_iconBar.style.opacity = 1)
      },
    }
  })()

  console.log('pb', pb)

  var el_canvas,
    drawingContext,
    S,
    E = 0,
    F = 0,
    Ba,
    el_image,
    pi = Math.PI,
    tau = 2 * pi,
    cursorHandURL = 'url(img/cursor-hand.png),auto',
    cursorGrabURL = 'url(img/cursor-grab.png),auto',
    pa = 'default',
    ya = pa,
    ma = 0.5,
    Ia = 0.02,
    mb = 0.01,
    Ja = 0.88,
    o = 0.9,
    O = 0.5,
    Z = 2,
    ab = 0,
    I = 0.5,
    t = 12,
    L,
    W = 0,
    maxStickiness = 24,
    stiffness = 0.07,
    minStiffness = 0.045,
    maxStiffness = 0.2,
    w = stiffness,
    qb = global_p,
    ea = -4,
    K = 60,
    windowInnerWidth = window.innerWidth,
    windowInnerHeight = window.innerHeight,
    meshPoints = [],
    l = [],
    Ab = [],
    y = [],
    v = 7,
    s = 7,
    La = 50 * v,
    yb = 50 * s,
    D,
    ba,
    ka,
    la = 0,
    Oa,
    Ma = 0.5 * (windowInnerWidth - La),
    Na = 100,
    db = 0,
    fb = 0,
    eb = 0,
    gb = 0,
    aa = global_V,
    Pa = global_V,
    ja = global_V,
    U = global_V,
    wa = global_V,
    tb = -1 != document.location.href.indexOf('http'),
    userAgent = navigator.userAgent,
    P = userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || userAgent.match(/iPad/i),
    Q = /Android/.test(userAgent),
    u = 'ontouchend' in document,
    ra = u && 740 < window.innerWidth && 520 < window.innerHeight,
    Y = global_p,
    ca,
    ta = global_V,
    cb = 0,
    va = global_V,
    ha = global_V,
    Xa = 0,
    g,
    rb = 60,
    Ka = rb - 130,
    Ya = !ra,
    ia = 0.875

  Da = P
  Ea = P

  var $a = 0
  var xa = 1

  requestAnimFrame = (function () {
    return function (arg) {
      window.setTimeout(arg, 15)
    }
  })()

  window.onload = function () {
    getElementByIdWrapper('stickyContainer').style.visibility = 'hidden'
    el_image = new Image()
    el_image.onload = getStuffFromLocalStorage
    el_image.src = 'img/mesh-map.png'
  }
})()
