/* ============================================================
   INTERACTIONS.JS — Full Mouse & Motion System
   Omar Bsebs Portfolio
============================================================ */

(function () {
  'use strict';

  // ════════════════════════════════════════
  //  UTILS
  // ════════════════════════════════════════
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const mapRange = (v, inMin, inMax, outMin, outMax) =>
    ((v - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let smoothMouse = { x: mouse.x, y: mouse.y };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // ════════════════════════════════════════
  //  1. SCROLL PROGRESS BAR
  // ════════════════════════════════════════
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    progressBar.style.width = (p * 100) + '%';
  }, { passive: true });

  // ════════════════════════════════════════
  //  2. CUSTOM CURSOR
  // ════════════════════════════════════════
  const dot  = document.createElement('div'); dot.id  = 'cursor-dot';
  const ring = document.createElement('div'); ring.id = 'cursor-ring';
  document.body.append(dot, ring);

  let dotPos  = { x: mouse.x, y: mouse.y };
  let ringPos = { x: mouse.x, y: mouse.y };

  // Trail dots
  const TRAIL_COUNT = 6;
  const trails = Array.from({ length: TRAIL_COUNT }, (_, i) => {
    const el = document.createElement('div');
    el.className = 'cursor-trail';
    const size = 4 - (i * 0.4);
    el.style.cssText = `width:${size}px;height:${size}px;opacity:${0.3 - i * 0.04}`;
    document.body.appendChild(el);
    return { el, x: mouse.x, y: mouse.y };
  });

  function updateCursor() {
    // Smooth dot follows mouse fast
    dotPos.x  = lerp(dotPos.x,  mouse.x, 0.5);
    dotPos.y  = lerp(dotPos.y,  mouse.y, 0.5);
    dot.style.left = dotPos.x + 'px';
    dot.style.top  = dotPos.y + 'px';

    // Ring follows slower
    ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
    ringPos.y = lerp(ringPos.y, mouse.y, 0.12);
    ring.style.left = ringPos.x + 'px';
    ring.style.top  = ringPos.y + 'px';

    // Trail cascade
    let prev = { x: dotPos.x, y: dotPos.y };
    trails.forEach(t => {
      t.x = lerp(t.x, prev.x, 0.4);
      t.y = lerp(t.y, prev.y, 0.4);
      t.el.style.left = t.x + 'px';
      t.el.style.top  = t.y + 'px';
      prev = t;
    });
  }

  // Hover states
  const hoverTargets = 'a, button, .work-card, .skill-card, .service-card, .filter-btn, .social-btn, .open-drive-btn, .lb-close';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
  });
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hidden'));

  // ════════════════════════════════════════
  //  3. CLICK RIPPLE
  // ════════════════════════════════════════
  document.addEventListener('click', e => {
    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:60px;height:60px;margin:-30px 0 0 -30px`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 700);
  });

  // ════════════════════════════════════════
  //  4. GLOBAL SPOTLIGHT (follows mouse)
  // ════════════════════════════════════════
  const spotlight = document.createElement('div');
  spotlight.className = 'spotlight-layer';
  document.body.prepend(spotlight);

  function updateSpotlight() {
    const xPct = (mouse.x / window.innerWidth  * 100).toFixed(1) + '%';
    const yPct = (mouse.y / window.innerHeight * 100).toFixed(1) + '%';
    spotlight.style.setProperty('--x', xPct);
    spotlight.style.setProperty('--y', yPct);
  }

  // ════════════════════════════════════════
  //  5. HERO PARALLAX ORBS
  // ════════════════════════════════════════
  const heroSection = document.querySelector('.hero');

  function injectHeroOrbs() {
    if (!heroSection) return;
    [1, 2, 3].forEach(n => {
      const orb = document.createElement('div');
      orb.className = `hero-orb hero-orb-${n}`;
      orb.dataset.depth = n === 1 ? '0.025' : n === 2 ? '0.015' : '0.035';
      heroSection.appendChild(orb);
    });
  }
  injectHeroOrbs();

  function updateHeroOrbs() {
    const orbs = document.querySelectorAll('.hero-orb');
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    orbs.forEach(orb => {
      const d = parseFloat(orb.dataset.depth || 0.02);
      const tx = (mouse.x - cx) * d;
      const ty = (mouse.y - cy) * d;
      orb.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  }

  // ════════════════════════════════════════
  //  6. FLOATING PARTICLES in HERO
  // ════════════════════════════════════════
  function spawnParticle() {
    if (!heroSection) return;
    const p = document.createElement('div');
    p.className = 'hero-particle';
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%; bottom:-10px;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      opacity:${Math.random() * 0.5 + 0.2};
    `;
    heroSection.appendChild(p);
    setTimeout(() => p.remove(), (duration + delay) * 1000);
  }
  setInterval(spawnParticle, 600);

  // ════════════════════════════════════════
  //  7. 3D CARD TILT
  // ════════════════════════════════════════
  function addTiltEffect(selector, maxTilt = 10, perspective = 800) {
    document.querySelectorAll(selector).forEach(card => {
      // Inject shine div if not already there
      if (!card.querySelector('.tilt-shine')) {
        const shine = document.createElement('div');
        shine.className = 'tilt-shine';
        card.style.position = 'relative';
        card.appendChild(shine);
      }

      card.addEventListener('mousemove', e => {
        const rect  = card.getBoundingClientRect();
        const cx    = rect.left + rect.width  / 2;
        const cy    = rect.top  + rect.height / 2;
        const dx    = e.clientX - cx;
        const dy    = e.clientY - cy;
        const rotX  = clamp(mapRange(dy, -rect.height/2, rect.height/2, maxTilt, -maxTilt), -maxTilt, maxTilt);
        const rotY  = clamp(mapRange(dx, -rect.width/2,  rect.width/2,  -maxTilt, maxTilt), -maxTilt, maxTilt);
        const sx    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
        const sy    = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';

        card.style.transform    = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
        card.style.transition   = 'transform 0.08s linear';

        const shine = card.querySelector('.tilt-shine');
        if (shine) {
          shine.style.setProperty('--sx', sx);
          shine.style.setProperty('--sy', sy);
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform  = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1)';
      });
    });
  }

  // ════════════════════════════════════════
  //  8. MAGNETIC BUTTONS
  // ════════════════════════════════════════
  function addMagneticEffect(selector, strength = 0.35) {
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = (e.clientX - cx) * strength;
        const dy   = (e.clientY - cy) * strength;
        btn.style.transform  = `translate(${dx}px, ${dy}px)`;
        btn.style.transition = 'transform 0.2s cubic-bezier(0.25,1,0.5,1)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform  = 'translate(0,0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1)';
      });
    });
  }

  // ════════════════════════════════════════
  //  9. HERO TEXT SCRAMBLE on HOVER
  // ════════════════════════════════════════
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

  function scrambleText(el, finalText, duration = 800) {
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    let raf;
    function step() {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * finalText.length);
      let result = '';
      for (let i = 0; i < finalText.length; i++) {
        if (finalText[i] === ' ') { result += ' '; continue; }
        if (i < revealCount) {
          result += `<span style="color:#c9a84c">${finalText[i]}</span>`;
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      el.innerHTML = result;
      if (frame < totalFrames) raf = requestAnimationFrame(step);
      else el.textContent = finalText;
    }
    cancelAnimationFrame(raf);
    requestAnimationFrame(step);
  }

  const heroName = document.querySelector('.hero-title .line-1');
  if (heroName) {
    const original = heroName.textContent.trim();
    let scrambling = false;
    // Only on mouseenter — NOT on page load
    heroName.addEventListener('mouseenter', () => {
      if (scrambling) return;
      scrambling = true;
      scrambleText(heroName, original, 700);
      setTimeout(() => { heroName.textContent = original; scrambling = false; }, 800);
    });
    // Safety: restore on mouseleave in case animation didn't finish
    heroName.addEventListener('mouseleave', () => {
      setTimeout(() => { if (!scrambling) heroName.textContent = original; }, 100);
    });
  }

  // ════════════════════════════════════════
  //  10. SECTION BORDER GLOW on SCROLL-ENTER
  // ════════════════════════════════════════
  const glowSections = document.querySelectorAll('.skills, .work, .services, .contact');
  const glowObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.boxShadow = '0 0 80px -20px rgba(201,168,76,0.08) inset';
        entry.target.style.transition = 'box-shadow 1s ease';
      }
    });
  }, { threshold: 0.15 });
  glowSections.forEach(s => glowObs.observe(s));

  // ════════════════════════════════════════
  //  11. ABOUT FRAME PARALLAX (scroll-based)
  // ════════════════════════════════════════
  function updateAboutFrame() {
    const frame = document.querySelector('.about-frame');
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const vy   = window.innerHeight / 2;
    const dist = (rect.top + rect.height / 2) - vy;
    const ty   = clamp(dist * 0.04, -20, 20);
    frame.style.transform = `translateY(${ty}px)`;
  }

  // ════════════════════════════════════════
  //  12. WORK GRID RE-OBSERVE (after dynamic inject)
  // ════════════════════════════════════════
  function reinitTilt() {
    addTiltEffect('.work-card',    8,  900);
    addTiltEffect('.skill-card',   6,  700);
    addTiltEffect('.service-card', 5,  700);
  }

  // MutationObserver: re-init tilt when work cards are injected
  const workGrid = document.getElementById('workGrid');
  if (workGrid) {
    const mo = new MutationObserver(() => { reinitTilt(); mo.disconnect(); });
    mo.observe(workGrid, { childList: true });
  }

  // ════════════════════════════════════════
  //  MAIN RAF LOOP
  // ════════════════════════════════════════
  function loop() {
    smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.08);
    smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.08);

    updateCursor();
    updateSpotlight();
    updateHeroOrbs();
    updateAboutFrame();

    requestAnimationFrame(loop);
  }

  // ════════════════════════════════════════
  //  INIT
  // ════════════════════════════════════════
  function init() {
    reinitTilt();
    addMagneticEffect('.btn-primary, .btn-outline, .filter-btn', 0.3);
    addMagneticEffect('.nav-links a', 0.25);
    loop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init tilt after work grid builds (fallback)
  setTimeout(reinitTilt, 1500);

})();
