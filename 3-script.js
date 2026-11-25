/* ============================================================
   OMAR BSEBS PORTFOLIO — script.js  (Google Drive Edition)
============================================================ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Smooth active nav highlight ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = '#c9a84c';
    }
  });
});

// ── Cursor sparkle ──
const sparkStyle = document.createElement('style');
sparkStyle.textContent = `@keyframes sparkle{0%{transform:scale(1);opacity:1}100%{transform:scale(0) translateY(-20px);opacity:0}}`;
document.head.appendChild(sparkStyle);
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.97) {
    const sp = document.createElement('div');
    sp.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:4px;height:4px;border-radius:50%;background:#c9a84c;pointer-events:none;z-index:9999;animation:sparkle .6s ease forwards`;
    document.body.appendChild(sp);
    setTimeout(() => sp.remove(), 600);
  }
});

// ── Scroll reveal ──
function initReveal() {
  document.querySelectorAll('.skill-card, .service-card, .about-text, .about-visual, .contact-info, .contact-form')
    .forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Skill bar animation ──
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.style.cssText.match(/--w:\s*([^;]+)/)?.[1] || '0%';
        entry.target.style.width = w;
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  fills.forEach(el => { el.style.width = '0%'; obs.observe(el); });
}

// ══════════════════════════════════════════════
//  GOOGLE DRIVE WORK GRID
// ══════════════════════════════════════════════

/**
 * Clean project title from filename:
 * - Remove extension
 * - Remove @ prefix
 * - Remove trailing _V _H _S _L tags
 * - Remove trailing numbers / Reel / Edit / Part
 * - Trim & title-case
 */
function cleanTitle(raw) {
  return raw
    .replace(/\.\w+$/, '')           // remove extension
    .replace(/^@/, '')               // remove @ prefix
    .replace(/[_\-](V|H|S|L|SF|LF)$/i, '') // remove orientation/form tags
    .replace(/[_\-\s]*(reel|edit|part|ep|clip|short|v|ver|version)?[_\-\s]*\d+$/gi, '') // remove trailing numbers/keywords
    .replace(/[_\-]/g, ' ')          // underscores/dashes → spaces
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase()); // Title Case
}

/**
 * Normalize name for grouping — lowercase, strip spaces/symbols
 * "Rokkna" == "rokna" == "ROKKNA"
 * "Qaser AL-Asnan" == "qaser al asnan"
 */
function normalizeGroupKey(name) {
  return name
    .toLowerCase()
    .replace(/[_\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Detect orientation from filename tags or driveUrl hints
 */
function detectOrientation(project) {
  const name = (project.driveUrl || project.title || '').toLowerCase();
  if (/_h\b|_h_|horizontal|landscape|16.?9/i.test(name)) return 'landscape';
  return project.orientation || 'portrait'; // default portrait
}

/**
 * Detect form from filename tags
 */
function detectForm(project) {
  const name = (project.driveUrl || project.title || '').toLowerCase();
  if (/_l\b|_lf\b|long/i.test(name)) return 'long';
  return project.form || 'short'; // default short
}

function buildWorkGrid() {
  const grid = document.getElementById('workGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = '';

  // ── GROUP projects by normalized client name ──
  const groups = new Map(); // normalizedKey → { displayName, items[] }

  PROJECTS.forEach(project => {
    const rawName   = project.group || cleanTitle(project.title || '');
    const cleaned   = project.group ? project.group : rawName;
    const key       = normalizeGroupKey(cleaned);
    const existing  = groups.get(key);

    if (existing) {
      existing.items.push(project);
    } else {
      groups.set(key, { displayName: cleaned, items: [project] });
    }
  });

  // ── BUILD one card per group ──
  let cardIdx = 0;
  groups.forEach(({ displayName, items }) => {
    const first     = items[0];
    const count     = items.length;
    const rawUrl    = first.driveUrl || first.driveId || '';
    const id        = extractDriveId(rawUrl) || first.driveId || null;
    const hasRealId = id && !rawUrl.includes('PASTE_YOUR');

    const thumbUrl  = hasRealId ? getDriveThumbnail(id) : null;
    const openUrl   = hasRealId ? getDriveOpenUrl(id)   : '#';
    const catLabel  = CATEGORY_LABELS[first.category] || first.category;
    const orient    = detectOrientation(first);
    const form      = detectForm(first);
    const icon      = CATEGORY_ICONS[first.category] || '▶';

    const card = document.createElement('div');
    card.className = `work-card ${orient === 'portrait' ? 'card-portrait' : 'card-landscape'}`;
    card.dataset.category    = first.category;
    card.dataset.orientation = orient;
    card.dataset.form        = form;

    card.innerHTML = `
      <div class="work-thumb">
        ${thumbUrl
          ? `<img class="drive-thumb" src="${thumbUrl}" alt="${displayName}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />`
          : ''}
        <div class="work-placeholder" style="${thumbUrl ? 'display:none' : ''}">
          <div class="drive-icon">${icon}</div>
          <span>Project ${String(cardIdx + 1).padStart(2,'0')}</span>
        </div>
        ${count > 1 ? `<div class="count-badge">🎬 ×${count}</div>` : ''}
        <!-- Always-visible label -->
        <div class="work-card-label">
          <span class="wl-cat">${catLabel}</span>
          <span class="wl-title">${displayName}</span>
          <span class="wl-tags">
            <span class="tag-${orient}">${orient === 'portrait' ? '◻ Vertical' : '▭ Horizontal'}</span>
            <span class="tag-${form}">${form === 'short' ? '⚡ Short' : '📽 Long'}</span>
          </span>
        </div>
        <div class="work-overlay">
          <span class="work-cat">${catLabel}</span>
          <h3 class="work-title">${displayName}</h3>
          ${count > 1 ? `<p>${count} Reels</p>` : ''}
          <div class="work-actions">
            <span class="open-drive-btn" data-url="${openUrl}" data-hasdrive="${hasRealId}">
              ${hasRealId ? '🔗 فتح على Drive' : '⚙️ أضف رابط Drive'}
            </span>
          </div>
        </div>
      </div>`;

    card.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-drive-btn');
      if (btn && btn.dataset.hasdrive === 'true') {
        e.preventDefault();
        window.open(btn.dataset.url, '_blank', 'noopener,noreferrer');
        return;
      }
      openLightbox(first, id, hasRealId, openUrl, catLabel, icon, displayName, count, items);
    });

    grid.appendChild(card);
    cardIdx++;
  });

  // scroll reveal for new cards
  grid.querySelectorAll('.work-card').forEach((el, i) => {
    el.classList.add('reveal');
    setTimeout(() => el.classList.add('visible'), 100 + i * 60);
  });

  initFilter();
}

// ── Filter ──
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards  = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      workCards.forEach(card => {
        const match =
          filter === 'all' ||
          card.dataset.category === filter ||
          card.dataset.orientation === filter ||
          card.dataset.form === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// ══════════════════════════════════════════════
//  LIGHTBOX
// ══════════════════════════════════════════════

const lightbox   = document.getElementById('lightbox');
const lbClose    = document.getElementById('lbClose');
const lbBackdrop = document.getElementById('lbBackdrop');
const lbBody     = document.getElementById('lbBody');
const lbFooter   = document.getElementById('lbFooter');

function renderLightboxItem(item, displayName, catLabel, icon, items, activeIdx) {
  const rawUrl = item.driveUrl || item.driveId || '';
  const id = extractDriveId(rawUrl) || item.driveId || null;
  const hasRealId = id && !rawUrl.includes('PASTE_YOUR');
  const openUrl = hasRealId ? getDriveOpenUrl(id) : '#';
  const thumbUrl = hasRealId ? getDriveThumbnail(id) : null;

  lbBody.innerHTML = thumbUrl
    ? `<a class="lb-thumb-link" href="${openUrl}" target="_blank" rel="noopener noreferrer" title="شاهد على Google Drive">
         <img class="lb-img" src="${thumbUrl}" alt="${displayName} - ${item.title}" />
         <div class="lb-play-overlay">
           <span class="lb-play-circle">▶</span>
           <span class="lb-play-text">شاهد الفيديو على Drive</span>
         </div>
       </a>`
    : `<div class="lb-no-thumb">
         <div class="lb-no-icon">${icon}</div>
         <p>Preview غير متاح</p>
       </div>`;

  const seriesHtml = items && items.length > 1
    ? `<div class="lb-series">
         <span class="lb-series-label">الحلقات / Reels (${items.length}):</span>
         <div class="lb-series-list">
           ${items.map((it, i) => `
             <button class="lb-series-btn ${i === activeIdx ? 'active' : ''}" data-idx="${i}">
               ${it.title || 'Reel ' + (i + 1)}
             </button>
           `).join('')}
         </div>
       </div>`
    : '';

  lbFooter.innerHTML = `
    <div class="lb-meta">
      <span class="lb-cat">${catLabel} • ${items.length > 1 ? items.length + ' Reels' : item.year || ''}</span>
      <h3 class="lb-title">${displayName} — <span class="gold">${item.title}</span></h3>
      ${item.titleAr ? `<p class="lb-title-ar">${item.titleAr}</p>` : ''}
      ${seriesHtml}
    </div>
    ${hasRealId
      ? `<a class="btn btn-primary lb-open-btn" href="${openUrl}" target="_blank" rel="noopener noreferrer">
           🔗 فتح على Google Drive
         </a>`
      : ''
    }`;

  lbFooter.querySelectorAll('.lb-series-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      renderLightboxItem(items[idx], displayName, catLabel, icon, items, idx);
    });
  });
}

function openLightbox(project, id, hasRealId, openUrl, catLabel, icon, displayName, count, items) {
  const list = items && items.length ? items : [project];
  renderLightboxItem(list[0], displayName || project.title, catLabel, icon, list, 0);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbBody.innerHTML = '';
  lbFooter.innerHTML = '';
}

lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-primary');
  btn.textContent = '✅ Message Sent! / تم الإرسال!';
  btn.style.background = 'linear-gradient(135deg,#4ade80,#22c55e)';
  setTimeout(() => {
    btn.textContent = 'Send Message • إرسال ✉️';
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  buildWorkGrid();
  initReveal();
  initSkillBars();
});
