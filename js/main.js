/* ══════════════════════════════════
   DATA
══════════════════════════════════ */

const skills = [
  { name: 'Game Design',       pct: 92, tag: 'Core' },
  { name: 'Team Management',      pct: 72, tag: 'Core' },
  { name: 'C# / Unity',        pct: 88, tag: 'Programming' },
  { name: 'Level Design',      pct: 85, tag: 'Design' },
  { name: 'UI / UX (Games)',   pct: 82, tag: 'Design' },
  { name: 'Git / Version Ctrl',pct: 90, tag: 'Tools' },
];

const games = [
 {
    title: 'C-SWORD',
    year: '2026',
    genre: 'Card Game',
    genreLabel: 'Cards',
    engine: 'Unity 3D',
    platforms: 'PC · WebGL (itch.io)',
    rating: 5,
    featured: true,
    desc: 'A card game where you work as a programmer to defeat bugs in your code!',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
      { label: 'TITLE_SCREEN.png',   c1: '#fce8f0', c2: '#f0a0c0', ac: '#e8006a' },
      { label: 'PUZZLE_ROOM_01.png', c1: '#f8d0e4', c2: '#e880a8', ac: '#cc0055' },
      { label: 'FLASHBACK_SEQ.png',  c1: '#ffd0e8', c2: '#f090b8', ac: '#ff2080' },
    ],
    devlogs: [
      { date: '2026-03-10', title: 'Launch Week Retrospective',
        body: 'Shipped ECHOES to Steam after 18 months of dev. Day-one wishlists hit 500, reviews sitting at 91% positive. The non-linear time mechanic confused some players — adding a contextual hint system in v1.1.' },
      { date: '2026-01-22', title: 'Final Polish Pass',
        body: 'Locked content, focusing entirely on audio mix and lighting. Replaced the placeholder ambient track with an original generative score that reacts to how many fragments the player has restored.' },
      { date: '2025-11-04', title: 'Beta Build Impressions',
        body: 'Sent build to 40 external testers. Biggest pain point: players were unsure which objects were interactable. Added a subtle outline shader on focus — immediately solved 90% of the confusion.' },
      { date: '2025-07-15', title: 'Core Loop Locked',
        body: 'After three prototype iterations the "replay & change" mechanic finally feels right. Each fragment is exactly 90 seconds — long enough to feel meaningful, short enough to replay without frustration.' },
      ]
      },
  {
    title: 'ECHOES',
    year: '2026',
    genre: 'puzzle',
    genreLabel: 'Puzzle',
    engine: 'Godot 4',
    platforms: 'PC · Mac',
    rating: 4.5,
    featured: true,
    desc: 'A first-person puzzle game about memory and perception. You replay fragments of a single day, changing small things to unlock a greater truth.',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
      { label: 'TITLE_SCREEN.png',   c1: '#fce8f0', c2: '#f0a0c0', ac: '#e8006a' },
      { label: 'PUZZLE_ROOM_01.png', c1: '#f8d0e4', c2: '#e880a8', ac: '#cc0055' },
      { label: 'FLASHBACK_SEQ.png',  c1: '#ffd0e8', c2: '#f090b8', ac: '#ff2080' },
    ],
    devlogs: [
      { date: '2026-03-10', title: 'Launch Week Retrospective',
        body: 'Shipped ECHOES to Steam after 18 months of dev. Day-one wishlists hit 500, reviews sitting at 91% positive. The non-linear time mechanic confused some players — adding a contextual hint system in v1.1.' },
      { date: '2026-01-22', title: 'Final Polish Pass',
        body: 'Locked content, focusing entirely on audio mix and lighting. Replaced the placeholder ambient track with an original generative score that reacts to how many fragments the player has restored.' },
      { date: '2025-11-04', title: 'Beta Build Impressions',
        body: 'Sent build to 40 external testers. Biggest pain point: players were unsure which objects were interactable. Added a subtle outline shader on focus — immediately solved 90% of the confusion.' },
      { date: '2025-07-15', title: 'Core Loop Locked',
        body: 'After three prototype iterations the "replay & change" mechanic finally feels right. Each fragment is exactly 90 seconds — long enough to feel meaningful, short enough to replay without frustration.' },
      ]
      },
  {
    title: 'ECHOES',
    year: '2026',
    genre: 'puzzle',
    genreLabel: 'Puzzle',
    engine: 'Godot 4',
    platforms: 'PC · Mac',
    rating: 4.5,
    featured: true,
    desc: 'A first-person puzzle game about memory and perception. You replay fragments of a single day, changing small things to unlock a greater truth.',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
      { label: 'TITLE_SCREEN.png',   c1: '#fce8f0', c2: '#f0a0c0', ac: '#e8006a' },
      { label: 'PUZZLE_ROOM_01.png', c1: '#f8d0e4', c2: '#e880a8', ac: '#cc0055' },
      { label: 'FLASHBACK_SEQ.png',  c1: '#ffd0e8', c2: '#f090b8', ac: '#ff2080' },
    ],
    devlogs: [
      { date: '2026-03-10', title: 'Launch Week Retrospective',
        body: 'Shipped ECHOES to Steam after 18 months of dev. Day-one wishlists hit 500, reviews sitting at 91% positive. The non-linear time mechanic confused some players — adding a contextual hint system in v1.1.' },
      { date: '2026-01-22', title: 'Final Polish Pass',
        body: 'Locked content, focusing entirely on audio mix and lighting. Replaced the placeholder ambient track with an original generative score that reacts to how many fragments the player has restored.' },
      { date: '2025-11-04', title: 'Beta Build Impressions',
        body: 'Sent build to 40 external testers. Biggest pain point: players were unsure which objects were interactable. Added a subtle outline shader on focus — immediately solved 90% of the confusion.' },
      { date: '2025-07-15', title: 'Core Loop Locked',
        body: 'After three prototype iterations the "replay & change" mechanic finally feels right. Each fragment is exactly 90 seconds — long enough to feel meaningful, short enough to replay without frustration.' },
      ]
      },
];

/* ══════════════════════════════════
   BOOT SEQUENCE
══════════════════════════════════ */

const bootLines = [
  'DEV_OS kernel 2.1.4 loading...',
  'Fixing posture... [OK]',
  'Loading portfolio assets...',
  'Parsing skills_matrix.cfg... [OK]',
  'Decompressing back-pain.exe...',
  'Establishing uplink... [OK]',
  'Boot complete. Welcome, visitor.',
];

let bootIdx = 0;
const bootTextEl   = document.getElementById('boot-text');
const bootProgress = document.getElementById('boot-progress');

function bootStep() {
  if (bootIdx < bootLines.length) {
    bootTextEl.textContent = bootLines[bootIdx];
    bootProgress.style.width = ((bootIdx + 1) / bootLines.length * 100) + '%';
    bootIdx++;
    setTimeout(bootStep, 280 + Math.random() * 200);
  } else {
    setTimeout(() => {
      document.getElementById('boot-screen').classList.add('hidden');
      animateCounters();
      injectSkills();
      injectGames();
      buildPixelAvatar();
    }, 400);
  }
}

bootStep();

/* ══════════════════════════════════
   CLOCK
══════════════════════════════════ */

function updateClock() {
  document.getElementById('sys-time').textContent =
    new Date().toTimeString().slice(0, 8);
}
setInterval(updateClock, 1000);
updateClock();

/* ══════════════════════════════════
   NAVIGATION
══════════════════════════════════ */

let currentPage = 'home';

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.taskbar-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('nav-' + page)?.classList.add('active');
  document.getElementById('status-page').textContent = 'PAGE: ' + page.toUpperCase();
  currentPage = page;
  window.scrollTo(0, 0);

  if (page === 'about') {
    setTimeout(() => {
      document.querySelectorAll('.skill-bar-fill').forEach(b => b.classList.add('loaded'));
    }, 300);
  }
}

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}

function downloadCV() {
  alert('[SYS] CV download would trigger here.\nIn production, link to your actual PDF.');
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === '1') navigate('home');
  if (e.key === '2') navigate('about');
  if (e.key === '3') navigate('games');
});

/* ══════════════════════════════════
   ANIMATED COUNTERS
══════════════════════════════════ */

function animateCounter(el, target, duration = 1500) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const pct  = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);
    el.textContent = Math.floor(ease * target);
    if (pct < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function animateCounters() {
  animateCounter(document.getElementById('count-games'),   5);
  animateCounter(document.getElementById('count-years'),    2);
  animateCounter(document.getElementById('count-jams'),    2);
}

/* ══════════════════════════════════
   SKILLS
══════════════════════════════════ */

function injectSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(s => `
    <div class="skill-card">
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-fill" style="--pct:${s.pct}%">
          <span class="skill-pct">${s.pct}%</span>
        </div>
      </div>
      <div class="skill-tag">[${s.tag}]</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════
   GAMES
══════════════════════════════════ */

function stars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star${i + 1 > rating ? ' empty' : ''}">★</span>`
  ).join('');
}

function drawThumbOnCanvas(canvas, game) {
  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth  || 340;
  canvas.height = canvas.offsetHeight || 180;
  const { width: w, height: h } = canvas;

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, game.colorA);
  grad.addColorStop(1, game.colorB);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = game.accent + '18';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const rg = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, w * 0.6);
  rg.addColorStop(0, game.accent + '30');
  rg.addColorStop(1, 'transparent');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = game.accent;
  for (let i = 0; i < 60; i++) {
    const x     = (Math.sin(i * 73.7) * 0.5 + 0.5) * w;
    const y     = (Math.cos(i * 43.3) * 0.5 + 0.5) * h;
    const size  = (Math.sin(i * 17.3) * 0.5 + 0.5) * 3 + 1;
    const alpha = (Math.sin(i * 29.1) * 0.5 + 0.5) * 0.6 + 0.1;
    ctx.globalAlpha = alpha;
    ctx.fillRect(Math.floor(x / 2) * 2, Math.floor(y / 2) * 2, size, size);
  }
  ctx.globalAlpha = 1;
}

/* Draw procedural art onto a canvas element using screenshot palette */
function drawScreenshot(canvas, shot) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width  = canvas.offsetWidth  || 560;
  const h = canvas.height = canvas.offsetHeight || 315;

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, shot.c1);
  grad.addColorStop(1, shot.c2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = shot.ac + '22';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
  for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }

  // Large glow
  const rg = ctx.createRadialGradient(w*0.5, h*0.5, 0, w*0.5, h*0.5, w*0.55);
  rg.addColorStop(0, shot.ac + '40');
  rg.addColorStop(1, 'transparent');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, w, h);

  // Pixel particles — denser + larger for the bigger canvas
  ctx.fillStyle = shot.ac;
  for (let i = 0; i < 120; i++) {
    const x     = (Math.sin(i * 53.7 + 1.2) * 0.5 + 0.5) * w;
    const y     = (Math.cos(i * 37.3 + 0.8) * 0.5 + 0.5) * h;
    const size  = (Math.sin(i * 19.1) * 0.5 + 0.5) * 5 + 2;
    const alpha = (Math.sin(i * 31.7) * 0.5 + 0.5) * 0.5 + 0.1;
    ctx.globalAlpha = alpha;
    ctx.fillRect(Math.floor(x/4)*4, Math.floor(y/4)*4, size, size);
  }
  ctx.globalAlpha = 1;

  // Filename watermark
  ctx.fillStyle = shot.ac + 'aa';
  ctx.font = '11px "Share Tech Mono", monospace';
  ctx.fillText(shot.label, 12, h - 12);
}

function injectGames() {
  document.getElementById('games-grid').innerHTML = games.map((g, i) => `
    <div class="game-card" data-index="${i}" style="--hover-bg:${g.hoverBg}; --accent:${g.accent};">
      ${g.featured ? '<div class="featured-badge">★ Featured</div>' : ''}
      <div class="game-thumb" id="thumb-${i}">
        <canvas id="canvas-${i}"></canvas>
        <div class="game-engine-tag">${g.engine}</div>
        <div class="game-genre-tag ${g.genre}">${g.genreLabel}</div>
        <div class="game-thumb-overlay"></div>
      </div>
      <div class="game-info">
        <div class="game-title-row">
          <div class="game-title">${g.title}</div>
          <div class="game-year">${g.year}</div>
        </div>
        <div class="game-desc">${g.desc}</div>
        <div class="game-meta-row">
          <div class="game-rating">
            ${stars(g.rating)}
            <span class="game-rating-num">${g.rating}/5</span>
          </div>
          <div class="game-platform">${g.platforms}</div>
        </div>
        <div class="game-links">
          <div class="game-link" onclick="event.stopPropagation()">▶ PLAY / BUY</div>
          <div class="game-link" onclick="event.stopPropagation()">◈ ITCH.IO</div>
          <div class="game-link open-popup-btn" data-index="${i}">◆ DEVLOG</div>
        </div>
      </div>
    </div>
  `).join('');

  // Draw canvases
  requestAnimationFrame(() => {
    games.forEach((g, i) => {
      const canvas = document.getElementById('canvas-' + i);
      if (canvas) drawThumbOnCanvas(canvas, g);
    });
  });

  // Attach card click + devlog button click listeners
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      openPopup(parseInt(card.dataset.index));
    });
  });

  document.querySelectorAll('.open-popup-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openPopup(parseInt(btn.dataset.index));
    });
  });
}

/* ══════════════════════════════════
   GAME POPUP
══════════════════════════════════ */

let activeScreenshot = 0;

function buildPopup() {
  // Inject popup shell into body once
  const shell = document.createElement('div');
  shell.id = 'game-popup-overlay';
  shell.innerHTML = `
    <div id="game-popup" role="dialog" aria-modal="true">
      <div id="popup-bar">
        <div class="win-dot red"></div>
        <div class="win-dot amber"></div>
        <div class="win-dot green"></div>
        <span id="popup-bar-title">GAME_FILE.dir</span>
        <button id="popup-close" aria-label="Close">&times;</button>
      </div>

      <div id="popup-body">

        <!-- LEFT: screenshots + meta -->
        <div id="popup-left">
          <div id="popup-screenshot-wrap">
            <canvas id="popup-canvas"></canvas>
            <div id="popup-screenshot-label"></div>
          </div>
          <div id="popup-thumbs"></div>

          <div id="popup-meta">
            <div class="popup-meta-row">
              <span class="popup-meta-key">ENGINE</span>
              <span class="popup-meta-val" id="pm-engine">—</span>
            </div>
            <div class="popup-meta-row">
              <span class="popup-meta-key">PLATFORMS</span>
              <span class="popup-meta-val" id="pm-platforms">—</span>
            </div>
            <div class="popup-meta-row">
              <span class="popup-meta-key">GENRE</span>
              <span class="popup-meta-val" id="pm-genre">—</span>
            </div>
            <div class="popup-meta-row">
              <span class="popup-meta-key">RELEASED</span>
              <span class="popup-meta-val" id="pm-year">—</span>
            </div>
            <div class="popup-meta-row">
              <span class="popup-meta-key">RATING</span>
              <span class="popup-meta-val" id="pm-rating">—</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: devlogs -->
        <div id="popup-right">
          <div id="popup-game-title"></div>
          <div id="popup-game-desc"></div>
          <div id="popup-devlog-header">
            <span class="sys-label" style="margin-bottom:0">DEVLOG.entries</span>
            <span id="popup-devlog-count"></span>
          </div>
          <div id="popup-devlogs"></div>
        </div>

      </div>
    </div>
  `;
  document.body.appendChild(shell);

  document.getElementById('popup-close').addEventListener('click', closePopup);
  document.getElementById('game-popup-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('game-popup-overlay')) closePopup();
  });
}

function openPopup(idx) {
  const g = games[idx];
  activeScreenshot = 0;

  // Bar title
  document.getElementById('popup-bar-title').textContent = g.title + '.dir // DEVLOG';

  // Meta
  document.getElementById('pm-engine').textContent    = g.engine;
  document.getElementById('pm-platforms').textContent = g.platforms;
  document.getElementById('pm-genre').textContent     = g.genreLabel;
  document.getElementById('pm-year').textContent      = g.year;
  document.getElementById('pm-rating').innerHTML      = stars(g.rating) + ` <span style="font-size:11px;color:var(--muted);margin-left:4px">${g.rating}/5</span>`;

  // Title + desc
  document.getElementById('popup-game-title').textContent = g.title;
  document.getElementById('popup-game-desc').textContent  = g.desc;

  // Accent colour on popup
  document.getElementById('game-popup').style.setProperty('--popup-accent', g.accent);

  // Screenshots — thumbnails
  const thumbsEl = document.getElementById('popup-thumbs');
  thumbsEl.innerHTML = g.screenshots.map((s, i) =>
    `<div class="popup-thumb ${i === 0 ? 'active' : ''}" data-shot="${i}"></div>`
  ).join('');

  // Draw thumbnail canvases after DOM settled
  requestAnimationFrame(() => {
    thumbsEl.querySelectorAll('.popup-thumb').forEach((el, i) => {
      const c = document.createElement('canvas');
      el.appendChild(c);
      drawScreenshot(c, g.screenshots[i]);

      el.addEventListener('click', () => {
        thumbsEl.querySelectorAll('.popup-thumb').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        activeScreenshot = i;
        renderMainScreenshot(g, i);
      });
    });

    // Main screenshot canvas
    renderMainScreenshot(g, 0);
  });

  // Screenshot label
  document.getElementById('popup-screenshot-label').textContent = g.screenshots[0].label;

  // Devlogs
  document.getElementById('popup-devlog-count').textContent =
    `[${g.devlogs.length} entries]`;

  document.getElementById('popup-devlogs').innerHTML = g.devlogs.map(d => `
    <div class="devlog-entry">
      <div class="devlog-date">${d.date}</div>
      <div class="devlog-title">${d.title}</div>
      <div class="devlog-body">${d.body}</div>
    </div>
  `).join('');

  // Show overlay
  const overlay = document.getElementById('game-popup-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderMainScreenshot(game, idx) {
  const canvas = document.getElementById('popup-canvas');
  if (!canvas) return;
  drawScreenshot(canvas, game.screenshots[idx]);
  const label = document.getElementById('popup-screenshot-label');
  if (label) label.textContent = game.screenshots[idx].label;
}

function closePopup() {
  document.getElementById('game-popup-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

window.addEventListener("DOMContentLoaded", () => {
  buildPopup();
  injectGames();
});


/* ══════════════════════════════════
   PIXEL AVATAR
══════════════════════════════════ */

function buildPixelAvatar() {
  const el = document.getElementById('pixel-avatar');
  if (!el) return;

  // 8×8 grid — key: _ bg, g pink, d dark pink, w dark, b white, s shadow pink
  const art = [
    '_','_','g','g','g','g','_','_',
    '_','g','w','w','w','w','g','_',
    'g','w','b','w','w','b','w','g',
    'g','w','w','w','w','w','w','g',
    'g','w','_','w','w','_','w','g',
    '_','g','w','d','d','w','g','_',
    '_','_','g','g','g','g','_','_',
    '_','_','s','g','g','s','_','_',
  ];

  el.innerHTML = art.map(c => `<div class="${c === '_' ? '' : c}"></div>`).join('');
}
