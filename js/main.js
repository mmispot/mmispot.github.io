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
    genreLabel: 'Card Game',
    engine: 'Unity 3D',
    platforms: 'PC · WebGL (itch.io)',
    featured: true,
    desc: 'A card game where play as a programmer, beating bugs in your code to get to game release and win the game!',
    colorA: '#fce8f0',
    colorB: '#f8c8dc',
    accent: '#e8006a',
  },
  {
    title: 'Cafe Catastrophy',
    year: '2026',
    genre: 'Local Multiplayer',
    genreLabel: 'LMP',
    engine: 'Unity',
    platforms: 'PC (itch.io)',
    featured: true,
    desc: 'A 2 player local co-op (ragebait) game inspired by Overcooked, where the main goal is to deliver as many orders as possible before the timer runs out!',
    colorA: '#f0e0f0',
    colorB: '#e0c0e8',
    accent: '#aa00cc',
  },
  {
    title: 'KINGDOM CORP.exe',
    year: 'Unreleased',
    genre: 'Tower Defense',
    genreLabel: 'TD',
    engine: 'Unity',
    platforms: 'PC',
    featured: true,
    desc: 'A project for a customer recruited by my school. As a producer for this project, I am responsible for project management, team communication, overseeing deadlines and assisting with game design and programming.',
    colorA: '#f5e8f0',
    colorB: '#eac8dc',
    accent: '#cc0066',
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

function drawGameThumb(canvas, game) {
  const ctx = canvas.getContext('2d');
  canvas.width  = canvas.offsetWidth  || 340;
  canvas.height = canvas.offsetHeight || 180;
  const { width: w, height: h } = canvas;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, game.colorA);
  grad.addColorStop(1, game.colorB);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Grid lines
  ctx.strokeStyle = game.accent + '18';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Radial glow blob
  const rg = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, w * 0.6);
  rg.addColorStop(0, game.accent + '30');
  rg.addColorStop(1, 'transparent');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, w, h);

  // Pixel particles
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

function injectGames() {
  document.getElementById('games-grid').innerHTML = games.map((g, i) => `
    <div class="game-card">
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
          <div class="game-link">▶ PLAY / BUY</div>
          <div class="game-link">◈ ITCH.IO</div>
          <div class="game-link">◆ DEVLOG</div>
        </div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    games.forEach((g, i) => {
      const canvas = document.getElementById('canvas-' + i);
      if (canvas) drawGameThumb(canvas, g);
    });
  });
}

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
