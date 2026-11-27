/* HERO-COSMIC.JS - heavy, slow 3D black giant (depth-mapped, light-reactive) */
(function () {
  'use strict';
  if (typeof THREE === 'undefined') return;
  var hero = document.getElementById('hero');
  if (!hero) return;
  var canvas = document.createElement('canvas');
  canvas.id = 'giant-canvas';
  hero.insertBefore(canvas, hero.querySelector('.hero-content'));
  var renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true }); }
  catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  var scene = new THREE.Scene();
  var cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
  var loader = new THREE.TextureLoader();
  var ready = false;
  var tex = loader.load('cosmic.jpg', function () { ready = true; });
  var dep = loader.load('depth.png');
  var U = {
    tex: { value: tex }, dep: { value: dep },
    m: { value: new THREE.Vector2(0, 0) }, t: { value: 0 },
    asp: { value: 1 }, imgAsp: { value: 1600 / 900 }, anchor: { value: 1.0 },
    px: { value: new THREE.Vector2(1 / 1600, 1 / 900) }
  };
  var mat = new THREE.ShaderMaterial({
    uniforms: U,
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }',
    fragmentShader: [
      'precision highp float; varying vec2 vUv;',
      'uniform sampler2D tex, dep; uniform vec2 m, px; uniform float t, asp, imgAsp, anchor;',
      'float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }',
      'float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }',
      'float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*n(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return s; }',
      'vec2 cover(vec2 uv){ vec2 s=vec2(1.); if(asp>imgAsp) s.y=imgAsp/asp; else s.x=asp/imgAsp;',
      '  vec2 o=vec2((1.-s.x)*anchor,(1.-s.y)*0.5); return uv*s+o; }',
      'void main(){',
      '  vec2 uv = cover(vUv);',
      '  float d = texture2D(dep, uv).r;',
      // heavy, slow mass: small parallax shift scaled by depth, plus a slow breathing swell
      '  float swell = sin(t*0.35)*0.003;',
      '  vec2 p = uv + m*vec2(0.055,0.034)*d*d + vec2(0.,swell)*d;',
      '  vec3 c = texture2D(tex, p).rgb;',
      // surface normal from depth (big form) + texture luminance (rough detail)
      '  float dx = texture2D(dep, p+vec2(px.x*6.,0.)).r - texture2D(dep, p-vec2(px.x*6.,0.)).r;',
      '  float dy = texture2D(dep, p+vec2(0.,px.y*6.)).r - texture2D(dep, p-vec2(0.,px.y*6.)).r;',
      '  float lx = dot(texture2D(tex, p+vec2(px.x*2.,0.)).rgb - texture2D(tex, p-vec2(px.x*2.,0.)).rgb, vec3(.33));',
      '  float ly = dot(texture2D(tex, p+vec2(0.,px.y*2.)).rgb - texture2D(tex, p-vec2(0.,px.y*2.)).rgb, vec3(.33));',
      '  vec3 n = normalize(vec3(-(dx*2.2+lx*2.5), (dy*2.2+ly*2.5), 0.6));',
      // a single heavy gold light that drifts slowly with the mouse
      '  vec3 L = normalize(vec3(m.x*0.9+0.25, m.y*0.7+0.35, 0.55));',
      '  float lit = max(dot(n,L),0.);',
      '  float body = smoothstep(0.05,0.5,d);',
      '  c += vec3(1.0,0.72,0.28)*pow(lit,2.2)*body*0.12;',

      '  vec3 acol = vec3(0.);',
      '  float ah = 0.;',
      '  for(int i=0;i<8;i++){ float a=float(i)*0.785398; vec2 o=vec2(cos(a),sin(a)); ah += texture2D(dep, p+o*vec2(0.07,0.12)).r + texture2D(dep, p+o*vec2(0.16,0.28)).r; }',
      '  ah /= 16.;',
      '  float aura = ah*(1.-0.82*d);',
      '  vec2 nq = vUv*vec2(asp,1.)*2.4 + m*0.06 + vec2(t*0.006, -t*0.003);',
      '  float w = fbm(nq + fbm(nq*1.4 - t*0.004));',
      '  float cl = smoothstep(0.22, 0.65, w);',
      '  vec3 gold = vec3(1.0,0.72,0.28), vio = vec3(0.35,0.2,0.6);',
      '  vec3 neb = mix(vio, gold, smoothstep(.4,.85,w))*cl;',
      '  c += neb*aura*2.4;',
      '  c += gold*pow(ah,1.6)*(1.-d)*0.22;',
      '  c *= 0.92 + 0.08*sin(t*0.35);',
      '  gl_FragColor = vec4(c,1.);',
      '}'
    ].join('\n')
  });
  scene.add(new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), mat));

  // a few dim, slow gold dust motes
  var N = 40, pos = new Float32Array(N * 3);
  for (var i = 0; i < N; i++) { pos[i*3]=Math.random()*2-1; pos[i*3+1]=Math.random()*2-1; pos[i*3+2]=Math.random(); }
  var pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  var pm = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { m: U.m, t: U.t, pxr: { value: 1 } },
    vertexShader: 'uniform vec2 m; uniform float t, pxr; varying float a; void main(){ vec3 p=position; float z=p.z; vec2 q=p.xy + m*vec2(0.04,0.03)*(z-0.3); q.y=mod(q.y+t*0.004*(0.3+z)+1.,2.)-1.; gl_Position=vec4(q,0.,1.); gl_PointSize=(1.0+z*2.2)*pxr; a=0.12+0.2*z; }',
    fragmentShader: 'varying float a; void main(){ float r=length(gl_PointCoord-.5)*2.; gl_FragColor=vec4(1.,.82,.45,1.)*smoothstep(1.,0.,r)*a; }'
  });
  scene.add(new THREE.Points(pg, pm));

  function resize() {
    var w = canvas.clientWidth || hero.clientWidth || window.innerWidth;
    var h = canvas.clientHeight || hero.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    U.asp.value = w / h;
    U.anchor.value = window.innerWidth < 760 ? 0.96 : 0.55;
    pm.uniforms.pxr.value = renderer.getPixelRatio();
  }
  window.addEventListener('resize', resize); resize();

  var target = new THREE.Vector2(0, 0), cur = U.m.value, vel = new THREE.Vector2(0, 0);
  var lastMove = 0;
  hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect();
    target.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1));
    lastMove = performance.now();
  });
  hero.addEventListener('pointerleave', function () { target.set(0, 0); });
  window.addEventListener('deviceorientation', function (e) {
    if (e.gamma == null) return;
    target.set(Math.max(-1, Math.min(1, e.gamma / 30)), Math.max(-1, Math.min(1, (e.beta - 45) / 30)));
    lastMove = performance.now();
  });
  var vis = true;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { vis = en[0].isIntersecting; }).observe(hero);
  var t0 = performance.now(), prev = t0;
  function step(dt) {
    // heavy spring with high damping: slow to start, slow to settle, never snappy
    var k = 5.0, damp = 5.0;
    vel.x += ((target.x - cur.x) * k - vel.x * damp) * dt;
    vel.y += ((target.y - cur.y) * k - vel.y * damp) * dt;
    cur.x += vel.x * dt; cur.y += vel.y * dt;
  }
  (function loop() {
    requestAnimationFrame(loop);
    var now = performance.now(), dt = Math.min((now - prev) / 1000, 0.05); prev = now;
    if (!vis || !ready) return;
    U.t.value = (now - t0) / 1000;
    if (now - lastMove > 4000) target.set(Math.sin(U.t.value*0.12)*0.35, Math.cos(U.t.value*0.09)*0.18); // slow idle drift
    step(dt);
    renderer.render(scene, cam);
  })();
  window.__cosmic = {
    set: function (x, y) { target.set(x, y); cur.set(x, y); },
    frame: function (t, x, y) { var dt = 0.15; ready = true; U.t.value = t; target.set(x, y); cur.set(x, y); renderer.render(scene, cam); },
    reset: function () { cur.set(0,0); vel.set(0,0); target.set(0,0); }
  };
})();
