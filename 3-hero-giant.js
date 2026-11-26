/* ============================================================
   HERO-GIANT.JS — Monumental Faceless 3D Giant in Hero BG
   Follows mouse with head, torso & dynamic gold rim light
============================================================ */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  // Create canvas inside #hero
  const canvas = document.createElement('canvas');
  canvas.id = 'giant-canvas';
  hero.insertBefore(canvas, hero.querySelector('.hero-content'));

  // ── Scene, Camera, Renderer ──
  const scene = new THREE.Scene();

  const width  = hero.clientWidth  || window.innerWidth;
  const height = hero.clientHeight || window.innerHeight;

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 1.35, 8.2);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  // ── Materials (Dark Obsidian + Subtle Gold Rim Sheen) ──
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x161513,
    roughness: 0.42,
    metalness: 0.62
  });

  const headMat = new THREE.MeshStandardMaterial({
    color: 0x1c1a16,
    roughness: 0.34,
    metalness: 0.7
  });

  const goldAccentMat = new THREE.MeshStandardMaterial({
    color: 0xc9a84c,
    roughness: 0.25,
    metalness: 0.9,
    emissive: 0x3a2c0a,
    emissiveIntensity: 0.35
  });

  // ── Giant Sculpture Hierarchy ──
  const giantRoot  = new THREE.Group();
  const torsoGroup = new THREE.Group();
  const headGroup  = new THREE.Group();

  // Position giant slightly lower so full head & halo fit cleanly inside Hero
  giantRoot.position.set(0, -1.95, 0);
  giantRoot.scale.set(1.18, 1.18, 1.18);
  scene.add(giantRoot);
  giantRoot.add(torsoGroup);

  // 1. Lower Waist / Core
  const waistGeo = new THREE.CylinderGeometry(0.82, 0.66, 1.5, 36);
  const waist = new THREE.Mesh(waistGeo, bodyMat);
  waist.position.y = 0.72;
  torsoGroup.add(waist);

  // 2. Smooth Sculpted Upper Torso (rounded sphere-blend so no sharp cylinder rim)
  const chestGeo = new THREE.SphereGeometry(1.18, 40, 32);
  const chest = new THREE.Mesh(chestGeo, bodyMat);
  chest.position.y = 2.05;
  chest.scale.set(1.22, 0.92, 0.68);
  torsoGroup.add(chest);

  // Sculpted Pectorals (subtle anatomical mass)
  [-0.44, 0.44].forEach(x => {
    const pecGeo = new THREE.SphereGeometry(0.54, 28, 24);
    const pec = new THREE.Mesh(pecGeo, bodyMat);
    pec.position.set(x, 2.18, 0.36);
    pec.scale.set(1.15, 0.76, 0.62);
    torsoGroup.add(pec);
  });

  // 3. Smooth Trapezius / Shoulder Bridge
  const trapGeo = new THREE.SphereGeometry(0.95, 36, 28);
  const trap = new THREE.Mesh(trapGeo, bodyMat);
  trap.position.y = 2.68;
  trap.scale.set(1.28, 0.55, 0.66);
  torsoGroup.add(trap);

  // Subtle Gold Collar Ring Accent
  const collarGeo = new THREE.TorusGeometry(0.46, 0.015, 12, 48);
  const collar = new THREE.Mesh(collarGeo, goldAccentMat);
  collar.rotation.x = Math.PI / 2 + 0.12;
  collar.position.set(0, 2.95, 0.04);
  torsoGroup.add(collar);

  // 4. Giant Shoulders & Arms
  [-1, 1].forEach(side => {
    // Deltoid / Shoulder
    const shoulderGeo = new THREE.SphereGeometry(0.48, 28, 24);
    const shoulder = new THREE.Mesh(shoulderGeo, bodyMat);
    shoulder.position.set(side * 1.42, 2.52, 0.02);
    shoulder.scale.set(1.05, 1.05, 0.92);
    torsoGroup.add(shoulder);

    // Upper Arm
    const upperArmGeo = new THREE.CylinderGeometry(0.34, 0.28, 1.45, 24);
    const upperArm = new THREE.Mesh(upperArmGeo, bodyMat);
    upperArm.position.set(side * 1.56, 1.72, 0.02);
    upperArm.rotation.z = side * -0.10;
    torsoGroup.add(upperArm);

    // Forearm
    const forearmGeo = new THREE.CylinderGeometry(0.26, 0.20, 1.35, 24);
    const forearm = new THREE.Mesh(forearmGeo, bodyMat);
    forearm.position.set(side * 1.66, 0.45, 0.14);
    forearm.rotation.z = side * -0.04;
    forearm.rotation.x = -0.12;
    torsoGroup.add(forearm);
  });

  // 5. Neck & Faceless Head (pivots at neck base)
  headGroup.position.set(0, 2.95, 0.04);
  torsoGroup.add(headGroup);

  const neckGeo = new THREE.CylinderGeometry(0.32, 0.40, 0.62, 28);
  const neck = new THREE.Mesh(neckGeo, bodyMat);
  neck.position.y = 0.25;
  headGroup.add(neck);

  // Faceless Head — sleek sculpted monolith cranium (NO eyes, NO nose, NO mouth)
  const craniumGeo = new THREE.SphereGeometry(0.56, 40, 36);
  const cranium = new THREE.Mesh(craniumGeo, headMat);
  cranium.position.set(0, 0.96, 0.04);
  cranium.scale.set(0.84, 1.18, 0.96);
  headGroup.add(cranium);

  // Subtle chiseled jawline / chin mass (still 100% faceless)
  const jawGeo = new THREE.CylinderGeometry(0.42, 0.24, 0.48, 32);
  const jaw = new THREE.Mesh(jawGeo, headMat);
  jaw.position.set(0, 0.62, 0.10);
  jaw.scale.set(0.84, 1, 0.92);
  headGroup.add(jaw);

  // Sleek sculptural front brow/bridge plane (still 100% faceless — makes head direction unmistakable)
  const browGeo = new THREE.BoxGeometry(0.52, 0.14, 0.12);
  const brow = new THREE.Mesh(browGeo, headMat);
  brow.position.set(0, 1.02, 0.48);
  headGroup.add(brow);

  // Faint golden halo ring behind head for cinematic silhouette separation
  const haloGeo = new THREE.RingGeometry(1.18, 1.21, 64);
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0xc9a84c,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  halo.position.set(0, 0.92, -0.55);
  headGroup.add(halo);

  // ── Cinematic Lighting ──
  const ambientLight = new THREE.AmbientLight(0x1f1d1a, 1.1);
  scene.add(ambientLight);

  // Strong Warm Gold Rim Light (Right/Back)
  const goldRimRight = new THREE.DirectionalLight(0xe8c97a, 3.2);
  goldRimRight.position.set(4, 5, -2.5);
  scene.add(goldRimRight);

  // Secondary Gold Rim Light (Left/Back)
  const goldRimLeft = new THREE.DirectionalLight(0xc9a84c, 2.0);
  goldRimLeft.position.set(-4.5, 3, -2);
  scene.add(goldRimLeft);

  // Subtle Front Key Light
  const frontFill = new THREE.DirectionalLight(0xfff4dc, 0.55);
  frontFill.position.set(0, 2, 6);
  scene.add(frontFill);

  // Dynamic Mouse-Following Gold Point Light
  const mouseLight = new THREE.PointLight(0xe8c97a, 2.8, 14);
  mouseLight.position.set(0, 2, 4.5);
  scene.add(mouseLight);

  // ── Mouse / Touch Tracking ──
  const targetMouse = { x: 0, y: 0 };
  const smoothMouse = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;   // -1 to +1
    targetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;  // -1 to +1
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      targetMouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
    }
  }, { passive: true });

  // ── Visibility Optimization ──
  let isHeroVisible = true;
  const visObs = new IntersectionObserver((entries) => {
    isHeroVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  visObs.observe(hero);

  // ── Resize Handler ──
  window.addEventListener('resize', () => {
    const w = hero.clientWidth  || window.innerWidth;
    const h = hero.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  // ── Animation Loop ──
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!isHeroVisible) return;

    const t = clock.getElapsedTime();

    // Smooth mouse interpolation
    smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.07;
    smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.07;

    // 1. Torso turns & leans heavily like a giant
    const targetTorsoY = smoothMouse.x * 0.38;
    const targetTorsoX = smoothMouse.y * 0.12;
    torsoGroup.rotation.y += (targetTorsoY - torsoGroup.rotation.y) * 0.05;
    torsoGroup.rotation.x += (targetTorsoX - torsoGroup.rotation.x) * 0.05;

    // 2. Head turns & tilts directly toward the cursor
    const targetHeadY = smoothMouse.x * 0.55;
    const targetHeadX = smoothMouse.y * 0.35;
    headGroup.rotation.y += (targetHeadY - headGroup.rotation.y) * 0.10;
    headGroup.rotation.x += (targetHeadX - headGroup.rotation.x) * 0.10;

    // 3. Subtle giant breathing
    const breath = Math.sin(t * 1.3) * 0.025;
    torsoGroup.position.y = breath;
    chest.scale.z = 0.72 + Math.sin(t * 1.3) * 0.015;

    // 4. Dynamic gold light follows mouse across the sculpture
    mouseLight.position.x = smoothMouse.x * 4.5;
    mouseLight.position.y = 1.8 - smoothMouse.y * 2.5;

    renderer.render(scene, camera);
  }

  animate();
})();
