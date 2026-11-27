/* BG-COSMIC.JS - slow cosmic dust behind the whole site (fixed, low-res, heavy drift) */
(function () {
  'use strict';
  if (typeof THREE === 'undefined') return;
  var c = document.createElement('canvas'); c.id = 'cosmic-bg';
  document.body.insertBefore(c, document.body.firstChild);
  var r; try { r = new THREE.WebGLRenderer({ canvas: c, alpha: false, antialias: false }); } catch (e) { return; }
  var scale = 0.75; r.setPixelRatio(1);
  var sc = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
  var U = { t: { value: 0 }, m: { value: new THREE.Vector2() }, s: { value: 0 }, asp: { value: 1 } };
  sc.add(new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: U,
    vertexShader: 'varying vec2 v; void main(){ v=uv; gl_Position=vec4(position.xy,0.,1.); }',
    fragmentShader: [
      'precision highp float; varying vec2 v; uniform float t, s, asp; uniform vec2 m;',
      'float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }',
      'float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);',
      '  return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }',
      'float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*n(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return s; }',
      'void main(){',
      '  vec2 p = (v-.5)*vec2(asp,1.)*2.2;',
      '  vec2 par = m*0.05 + vec2(0., s*0.00025);',
      '  vec2 q = p*0.9 + par*1.0 + vec2(t*0.004, t*0.002);',
      '  float w = fbm(q + fbm(q*1.3 - t*0.003));',
      '  float cloud = smoothstep(0.30, 0.72, w);',
      '  float dust = smoothstep(0.5, 0.9, fbm(q*2.6 - par*2. + t*0.006));',
      '  vec3 gold = vec3(1.0,0.72,0.28), vio = vec3(0.32,0.2,0.55);',
      '  vec3 col = (mix(vio, gold, smoothstep(.45,.8,w)) * cloud * 0.6) + gold*dust*0.14;',
      // sparse stars, far layer parallax
      '  vec2 sp = (v*vec2(asp,1.))*110. + par*14.; vec2 g = floor(sp); float st = step(0.992, h(g)); ',
      '  float tw = 0.6+0.4*sin(t*0.7+h(g+3.)*6.28);',
      '  col += vec3(1.,.9,.7)*st*smoothstep(.35,0.,length(fract(sp)-.5))*tw*0.55;',
      '  gl_FragColor = vec4(col + vec3(0.039), 1.);',
      '}'
    ].join('\n')
  })));
  function size() { var w = innerWidth, h = innerHeight; r.setSize(Math.round(w * scale), Math.round(h * scale), false); U.asp.value = w / h; }
  addEventListener('resize', size); size();
  var tg = new THREE.Vector2(), cur = U.m.value, vel = new THREE.Vector2(), t0 = performance.now(), prev = t0, vis = true;
  addEventListener('pointermove', function (e) { tg.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight * 2 - 1)); });
  addEventListener('deviceorientation', function (e) { if (e.gamma == null) return; tg.set(Math.max(-1, Math.min(1, e.gamma / 30)), Math.max(-1, Math.min(1, (e.beta - 45) / 30))); });
  document.addEventListener('visibilitychange', function () { vis = !document.hidden; });
  function step(dt) { vel.x += ((tg.x - cur.x) * 2.5 - vel.x * 4.5) * dt; vel.y += ((tg.y - cur.y) * 2.5 - vel.y * 4.5) * dt; cur.x += vel.x * dt; cur.y += vel.y * dt; }
  (function loop() {
    requestAnimationFrame(loop);
    var now = performance.now(), dt = Math.min((now - prev) / 1000, 0.05); prev = now;
    if (!vis) return;
    U.t.value = (now - t0) / 1000; U.s.value = scrollY; step(dt); r.render(sc, cam);
  })();
  window.__bg = { frame: function (t, x, y, sy) { U.t.value = t; U.s.value = sy; tg.set(x, y); cur.set(x, y); r.render(sc, cam); } };
})();
