/* ══════════════════════════════════
   DATA
══════════════════════════════════ */

const skills = [
  { name: 'Game Design',          pct: 100, tag: 'Core' },
  { name: 'Team Management',      pct: 100, tag: 'Core' },
  { name: 'SCRUM Master',         pct: 100, tag: 'Core' },
  { name: 'Producer',             pct: 100, tag: 'Core' },
  { name: 'C# / Unity',           pct: 100, tag: 'Programming' },
  { name: 'Technical Design',     pct: 100, tag: 'Design' },
  { name: 'UI / UX (Games)',      pct: 100, tag: 'Design' },
  { name: 'Serious Games',        pct: 100, tag: 'Design' },
  { name: 'Git / Version Ctrl',   pct: 100, tag: 'Tools' },
];

const games = [
  {
    title: 'KINGDOM CORP',
    itchUrl: '',
    githubUrl: 'https://gist.github.com/mmispot/834e98454f7add3506319196d4a3e97b',
    year: 'Unreleased',
    genre: 'Tower Defense',
    genreLabel: 'Gamification',
    engine: 'Unity 3D',
    platforms: 'PC',
    learned: 'Team Project Management, Agile Methodologies (SCRUM), Tower Defense Mechanics, Resource Management Mechanics',
    featured: true,
    desc: 'A tower defense game combined with a resource management sim. Integrated into a call center system where you manage customer queues and complete tasks during your workday to power up your defenses & recruit heroes.',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "GamePlay",  src: "images/scito.gif" },
        { label: "Gameplay",   src: "images/KINGDOMCORP2.png" },
        { label: "Gameplay", src: "images/KINGDOMCORP3.png" },
    ],
    devlogs: [
      { date: '19/03/2026', title: 'My role in the project',
        body: 'Worked as the Producer for this project, providing a chance to manage a team, oversee deadlines and coordinate communication.' },
            { date: '11/06/2025', title: 'What I learned from the project',
        body: 'My first time in a management role for a team of +- 10 people. I asked extra feedback from my teachers and oversaw the project\'s progress, divided tasks and managed deadlines.' },
        { date: '15/06/2025', title: 'Credits',
        body: 'Producer: Emilia Beeke, Inventory System (S.O.): Emilia Beeke' },
      ]
      },
 {
    title: 'C-SWORD',
    itchUrl: 'https://mmispot.itch.io/c-sword',
    githubUrl: 'https://gist.github.com/mmispot/54b4fad28c0359a85999e77578124c47',
    year: '2026',
    genre: 'Card Game',
    genreLabel: 'Cards',
    engine: 'Unity 3D',
    platforms: 'PC · WebGL (itch.io)',
    learned: 'Card Game Mechanics, Game Design, Solo Project Management',
    featured: true,
    desc: 'A card game where you work as a programmer to defeat bugs in your code!',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "Main Menu",  src: "images/csword.gif" },
        { label: "Gameplay",   src: "images/CSWORD2.png" },
        { label: "Gameplay", src: "images/CSWORD3.png" },
    ],
    devlogs: [
      { date: '27/01/2026', title: 'My role in the project',
        body: 'A solo school project. Worked on resource management, researched Card Mechanics and Game Design behind different TCG/Card Games.' },
            { date: '11/06/2025', title: 'What I learned from the project',
        body: 'Card Game Mechanics and Game Design principles. I also made the art (except background and some card sprites) and practiced solo game development.' },
        { date: '15/06/2025', title: 'Credits',
        body: 'Developer and Artist: Emilia Beeke' },
      ]
      },
  {
    title: 'Cafe Catastrophy',
    itchUrl: 'https://mmispot.itch.io/cafe-catastrophy',
    githubUrl: 'https://gist.github.com/mmispot/a3798ab312195da898019ac6307742cc',
    year: '2026',
    genre: 'Local Multiplayer',
    genreLabel: 'Co-Op',
    engine: 'Unity 3D',
    platforms: 'PC',
    learned: 'Local Multiplayer Mechanics, Game Design, SCRUM Methodology, Team Lead',
    featured: true,
    desc: 'A 2 player local co-op (ragebait) game inspired by Overcooked, where the main goal is to deliver as many orders as possible before the timer runs out!',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "Gameplay",  src: "images/cafecatastrophy.gif" },
        { label: "Main Menu",  src: "images/CAFECAT1.png" },
        { label: "Gameplay",   src: "images/CAFECAT2.png" },
    ],
    devlogs: [
      { date: '20/01/2026', title: 'My role in the project',
        body: 'I was assigned team lead and worked on managing the team in a relaxed environment, handling communication and task allocation, and helping develop the local multiplayer aspect and level building.' },
      { date: '11/06/2025', title: 'What I learned from the project',
        body: 'Local Multiplayer Mechanics and using different Input Methods (controller and keyboard) at the same time.' },
        { date: '15/06/2025', title: 'Credits',
        body: 'Made in 4 weeks time. Developers: Emilia Beeke, Jasper van Dongen. Artists: Kezia, An, Ro.' },
      ]
      },
{
    title: 'Cybertheft',
    itchUrl: 'https://dresartz.itch.io/cybertheft',
    githubUrl: '',
    year: '2025',
    genre: 'Twinstick',
    genreLabel: 'Twinstick',
    engine: 'Unity 3D',
    platforms: 'PC',
    learned: 'First time working with the new Unity Input System, Twinstick Shooter Mechanics, Teamwork, SCRUM Methodology',
    featured: true,
    desc: 'In a  futuristic world you are a robot made from scraps breaking into a penthouse form a rich businessman. You have one mission: find and steal the data!',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "Main Menu",  src: "images/CYBERTHEFT1.png" },
        { label: "Gameplay",   src: "images/CYBERTHEFT2.png" },
        { label: "Gameplay",   src: "images/CYBERTHEFT3.png" },
    ],
    devlogs: [
      { date: '11/06/2025', title: 'My role in the project',
        body: 'I worked on implementing the core gameplay mechanics and managing the new Unity Input System.' },
      { date: '11/06/2025', title: 'What I learned from the project',
        body: 'The Input System isn\'t working as expected, but since learning it through this project, I\'ve used it in every other project since. It was an extremely useful experience.' },
        { date: '15/06/2025', title: 'Credits',
        body: 'Developers: Emilia Beeke, Danny, Jayden. Artists: Ro, Finn, Andrea, Aiden, Sherbino' },
      ]
      },
  {
    title: 'Peësto Plunderers',
    itchUrl: 'https://mmispot.itch.io/peestoplunderers',
    githubUrl: '',
    year: '2025',
    genre: 'Shoot-em-up',
    genreLabel: 'Schmup',
    engine: 'Unity 3D',
    platforms: 'PC',
    learned: 'First team project, basic shoot-em-up mechanics, teamwork, SCRUM Methodology',
    featured: true,
    desc: 'Your goal? Take over the Peësto planet so your mothership can conquer the universe with more and more different foods to incorporate into your meals. Lead the Peësto Invasion and beat the king of this world, the Pastapus!',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "Main Menu",  src: "images/PEESTO1.png" },
        { label: "Gameplay",   src: "images/PEESTO2.png" },
    ],
    devlogs: [
      { date: '10/04/2025', title: 'My role in the project',
        body: 'This is the first time I\'ve worked on a team project using the SCRUM methodology.' },
      { date: '15/06/2025', title: 'Credits',
        body: 'Made in 3-4 weeks time. Developers: Emilia Beeke, Koen Abbink. Artists: Colin, Arthur, Jochem, Edward, Aiden, Roy.' },
      ]
      },
        {
    title: 'Pandatama',
    itchUrl: 'https://mmispot.itch.io/pandatama',
    githubUrl: '',
    year: '2025',
    genre: 'Tamagotchi',
    genreLabel: 'Tamagotchi',
    engine: 'HTML',
    platforms: 'PC, WebGL',
    learned: 'First game project, basic game mechanics, artwork, interactive design',
    featured: true,
    desc: 'My first game project. A web-based tamagotchi where you take care of a panda by feeding it, playing with it and keeping it happy. Made in a week as a school project.',
    colorA: '#fce8f0', colorB: '#f8c8dc', accent: '#e8006a', hoverBg: '#fce0ec',
    screenshots: [
        { label: "Main Menu",  src: "images/PANDATAMA.png" },
    ],
    devlogs: [
      { date: '10/04/2025', title: 'My role in the project',
        body: 'This is the first time I\'d programmed a game from scratch, using p5.js.' },
      { date: '15/06/2025', title: 'Credits',
        body: 'Made in a week as a school project, I coded and drew everything. My little sister (11 years old) helped with the design and idea for the art.' },
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
      injectGallery();
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

  const adminBtn = document.getElementById('admin-btn');
  if (adminBtn) adminBtn.style.display = page === 'devlog' ? 'inline-block' : 'none';

  if (page === 'games') {
    const header = document.querySelector('.games-header');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (page === 'about') {
    const header = document.querySelector('.about-layout');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (page === 'home') {
    const header = document.querySelector('.hero-panel');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (page === 'devlog') {
    const header = document.querySelector('.page-header');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('posts-grid').style.display = '';
    document.getElementById('empty-state').style.display = 'none';
    renderPosts();
    buildTagFilters();
  } else {
    window.scrollTo(0, 0);
  }

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
  const link = document.createElement('a');
  link.href = 'files/Mili-OS-CV.pdf';
  link.download = 'Mili_CV.pdf';
  link.click();
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
  animateCounter(document.getElementById('count-games'),   6);
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
        <div class="skill-bar-fill" style="--pct:${s.pct}%"></div>
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

function drawScreenshot(container, shot) {
  container.innerHTML = '';
  const img = document.createElement('img');
  img.src = shot.src;
  img.alt = shot.label;
  img.style.cssText = 'width:100%; height:100%; object-fit:cover; display:block;';
  container.appendChild(img);
}

function injectGames() {
  const grid = document.getElementById('games-grid');
  const latest = games[0];
  const rest = games.slice(1);

  grid.innerHTML = `
    <div class="game-card-hero" style="cursor:pointer" data-index="0">
      <img src="${latest.screenshots[0].src}" alt="${latest.title}" class="game-hero-img">
      <div class="game-hero-info">
        <div class="game-hero-title">${latest.title}</div>
        <div class="game-hero-meta">
          ${latest.platforms} &nbsp;·&nbsp;
          <span class="game-status-tag">${latest.year}</span>
        </div>
        <p class="game-hero-desc">${latest.desc}</p>
        <div class="game-hero-links">
          ${latest.githubUrl ? `<a href="${latest.githubUrl}" class="btn btn-ghost btn-sm" target="_blank">▶ GITHUB</a>` : ''}
          ${latest.itchUrl   ? `<a href="${latest.itchUrl}"   class="btn btn-ghost btn-sm" target="_blank">◆ ITCH.IO</a>` : ''}
        </div>
      </div>
    </div>

    <div class="games-list-small">
      ${rest.map((g, i) => `
        <div class="game-card-small" style="cursor:pointer" data-index="${i + 1}">
          <img src="${g.screenshots[0].src}" alt="${g.title}" class="game-small-img">
          <div class="game-small-info">
            <div class="game-small-title">${g.title}</div>
            <div class="game-small-meta">${g.platforms} · ${g.year}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Hero card click → open popup
  grid.querySelector('.game-card-hero').addEventListener('click', () => openPopup(0));

  // Small card clicks → open popup
  grid.querySelectorAll('.game-card-small').forEach(card => {
    card.addEventListener('click', () => openPopup(parseInt(card.dataset.index)));
  });
}

/* ══════════════════════════════════
   GALLERY (horizontal strip on games page)
══════════════════════════════════ */

function injectGallery() {
  const track = document.getElementById('gallery-track');
  if (!track) return;

  track.innerHTML = games.map((g, i) => `
    <div class="gallery-card" data-index="${i}" title="Open devlog: ${g.title}">
      <div class="gallery-card-thumb">
        <img src="${g.screenshots[0].src}" alt="${g.title}" loading="lazy">
        <div class="gallery-card-genre">${g.genreLabel}</div>
      </div>
      <div class="gallery-card-body">
        <div class="gallery-card-title">${g.title}</div>
        <div class="gallery-card-meta">
          <span class="gallery-card-engine">${g.engine}</span>
          <span>${g.year}</span>
        </div>
        <div class="gallery-card-cta">◆ VIEW DEVLOG</div>
      </div>
    </div>
  `).join('');

  // Click opens the popup
  track.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => openPopup(parseInt(card.dataset.index)));
  });

  // Arrow buttons
  const SCROLL_AMOUNT = 224; // card width (200) + gap (12) + a bit
  document.getElementById('gallery-prev')?.addEventListener('click', () => {
    track.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  });
  document.getElementById('gallery-next')?.addEventListener('click', () => {
    track.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
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
                <span class="popup-meta-key">LEARNED</span>
                <span class="popup-meta-val" id="pm-learned">—</span>
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
          <div id="popup-links"></div>
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
  document.getElementById('pm-learned').textContent = g.learned;

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
      drawScreenshot(el, g.screenshots[i]);

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

  // Links
  const linkItems = [
    { url: g.githubUrl, label: 'GITHUB' },
    { url: g.itchUrl, label: 'ITCH.IO' },
  ].filter(l => l.url);
  document.getElementById('popup-links').innerHTML = linkItems.length ? `<div class="game-links" style="margin-top:1rem">${         linkItems.map(l =>           `<a class="game-link" href="${l.url}" target="_blank">${l.label}</a>`         ).join('')       }</div>`     : '';

  // Show overlay
  const overlay = document.getElementById('game-popup-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderMainScreenshot(game, idx) {
  const wrap = document.getElementById('popup-screenshot-wrap');
  if (!wrap) return;
  drawScreenshot(wrap, game.screenshots[idx]);

  // Re-append the label since we wiped innerHTML
  const label = document.createElement('div');
  label.id = 'popup-screenshot-label';
  label.textContent = game.screenshots[idx].label;
  wrap.appendChild(label);
}

function closePopup() {
  document.getElementById('game-popup-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

window.addEventListener("DOMContentLoaded", () => {
  buildPopup();
  injectGames();
  injectGallery();
});


/* ════════════════════════════════
   STORAGE & STATE
════════════════════════════════ */
const STORAGE_KEY = 'miliOS_devlog_posts';
const TAG_KEY     = 'miliOS_devlog_tags';
const PASS        = 'miliOS2026';          // ← change this password

let posts        = [];
let allTags      = [];
let isAdmin      = false;
let editingId    = null;
let activeTag    = 'all';
let searchQuery  = '';
let coverDataUrl = null;

function loadData() {
  try { posts   = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { posts = []; }
  try { allTags = JSON.parse(localStorage.getItem(TAG_KEY) || '[]'); } catch { allTags = []; }
  if (!allTags.length) {
    allTags = ['MUTANTS OF AGYR','KINGDOM CORP','C-SWORD','CAFE CATASTROPHY','CYBERTHEFT','PEESTO PLUNDERERS','GENERAL'];
    saveTagData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}
function saveTagData() {
  localStorage.setItem(TAG_KEY, JSON.stringify(allTags));
}

// /* ════════════════════════════════
//    CLOCK
// ════════════════════════════════ */
// function tick() { document.getElementById('sys-time').textContent = new Date().toTimeString().slice(0,8); }
// setInterval(tick,1000); tick();

/* ════════════════════════════════
   NAVIGATION
════════════════════════════════ */
function showDevlog() {
  document.getElementById('page-devlog-content').style.display = 'block';
  document.getElementById('page-editor').style.display = 'none';
  renderPosts();
  buildTagFilters();
}

function showAdmin() {
  if (isAdmin) { showEditor(); return; }
  const modal = document.getElementById('login-modal');
  modal.style.display = 'flex';
  document.getElementById('pw-input').value = '';
  document.getElementById('login-err').style.display = 'none';
  setTimeout(() => document.getElementById('pw-input').focus(), 100);
}

function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

function showEditor(post=null) {
  document.getElementById('page-devlog-content').style.display = 'none';
  document.getElementById('page-editor').style.display = 'block';
  document.getElementById('admin-indicator').style.display = 'flex';
  loadEditorForm(post);
}

/* ════════════════════════════════
   AUTH
════════════════════════════════ */
function tryLogin() {
  const pw = document.getElementById('pw-input').value;
  if (pw === PASS) {
    isAdmin = true;
    closeLoginModal();
    document.getElementById('admin-btn').textContent = '⌥ EDITOR';
    document.getElementById('admin-indicator').style.display = 'flex';
    showEditor();
  } else {
    document.getElementById('login-err').style.display = 'block';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }
}

function logout() {
  isAdmin = false;
  editingId = null;
  document.getElementById('admin-btn').textContent = '⌥ ADMIN';
  document.getElementById('admin-indicator').style.display = 'none';
  showDevlog();
  toast('Logged out');
}

/* ════════════════════════════════
   RENDER POSTS
════════════════════════════════ */
function getFiltered() {
  let result = [...posts];
  if (activeTag !== 'all') result = result.filter(p => p.tags && p.tags.includes(activeTag));
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.content||'').toLowerCase().includes(q) ||
      (p.tags||[]).some(t=>t.toLowerCase().includes(q))
    );
  }
  return result.sort((a,b)=>new Date(b.date)-new Date(a.date));
}

function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || '';
}

function renderPosts() {
  const grid = document.getElementById('posts-grid');
  const noR  = document.getElementById('no-results');
  const emp  = document.getElementById('empty-state');
  const filtered = getFiltered();

  document.getElementById('post-count-status').textContent = posts.length + ' ENTRIES';

  if (!posts.length) {
    grid.innerHTML=''; grid.style.display='none';
    noR.style.display='none'; emp.style.display='block'; return;
  }
  emp.style.display='none'; grid.style.display='grid';

  if (!filtered.length) {
    grid.innerHTML=''; noR.style.display='block'; return;
  }
  noR.style.display='none';

  grid.innerHTML = filtered.map(p => {
    const excerpt = stripHtml(p.content||'').slice(0,180) + (stripHtml(p.content||'').length>180?'...':'');
    const img = p.cover
      ? `<img class="post-img" src="${p.cover}" alt="${p.title}" loading="lazy">`
      : `<div class="post-img-placeholder">◈ ${(p.tags||['??'])[0]||'LOG'}</div>`;
    const tags = (p.tags||[]).map(t=>`<span class="post-tag">${t}</span>`).join('');
    const dateStr = p.date ? new Date(p.date).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase() : 'UNDATED';
    return `
      <div class="post-card" onclick="openModal('${p.id}')">
        ${img}
        <div class="post-body">
          <div class="post-tags">${tags}</div>
          <div class="post-title">${p.title}</div>
          <div class="post-excerpt">${excerpt||'No content yet.'}</div>
          <div class="post-meta">
            <span class="post-date">${dateStr}</span>
            <span class="post-read">◆ READ MORE</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ════════════════════════════════
   TAG FILTERS
════════════════════════════════ */
function buildTagFilters() {
  const usedTags = [...new Set(posts.flatMap(p=>p.tags||[]))];
  const wrap = document.getElementById('tag-filters');
  const existing = Array.from(wrap.querySelectorAll('[data-tag]')).map(b=>b.dataset.tag);
  
  usedTags.forEach(tag => {
    if (!existing.includes(tag)) {
      const btn = document.createElement('button');
      btn.className = 'tag-btn' + (activeTag===tag?' active':'');
      btn.dataset.tag = tag;
      btn.textContent = tag;
      btn.onclick = function(){ filterTag(tag,this); };
      wrap.appendChild(btn);
    }
  });
}

function filterTag(tag, btn) {
  activeTag = tag;
  document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderPosts();
}

/* ════════════════════════════════
   SEARCH
════════════════════════════════ */
document.getElementById('search-input').addEventListener('input', function(){
  searchQuery = this.value;
  renderPosts();
});

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
function openModal(id) {
  const p = posts.find(x=>x.id===id);
  if (!p) return;
  document.getElementById('modal-bar-title').textContent = p.title.toUpperCase() + ' // DEVLOG';
  document.getElementById('modal-title').textContent = p.title;
  const dateStr = p.date ? new Date(p.date).toLocaleDateString('en-GB',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}).toUpperCase() : '';
  document.getElementById('modal-date').textContent = dateStr;
  document.getElementById('modal-content').innerHTML = p.content||'';

  const img = document.getElementById('modal-hero-img');
  if (p.cover) { img.src=p.cover; img.style.display='block'; }
  else { img.style.display='none'; }

  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = (p.tags||[]).map(t=>`<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalBtn();
}
function closeModalBtn() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown', e => { if (e.key==='Escape') closeModalBtn(); });

/* ════════════════════════════════
   EDITOR FORM
════════════════════════════════ */
function loadEditorForm(post=null) {
  editingId = post ? post.id : null;
  coverDataUrl = post ? (post.cover||null) : null;

  document.getElementById('ed-title').value   = post ? post.title : '';
  document.getElementById('wysiwyg-editor').innerHTML = post ? (post.content||'') : '';
  document.getElementById('ed-date').value    = post ? (post.date||today()) : today();

  const prev = document.getElementById('cover-preview');
  const rem  = document.getElementById('cover-remove-btn');
  if (coverDataUrl) { prev.src=coverDataUrl; prev.style.display='block'; rem.style.display='block'; }
  else { prev.style.display='none'; rem.style.display='none'; }

  buildTagCheckboxes(post ? (post.tags||[]) : []);
  buildManageList();
}

function today() {
  return new Date().toISOString().slice(0,10);
}

function buildTagCheckboxes(selected=[]) {
  const wrap = document.getElementById('tag-checks');
  wrap.innerHTML = allTags.map(tag => `
    <label class="tag-check">
      <input type="checkbox" value="${tag}" ${selected.includes(tag)?'checked':''}>
      <span>${tag}</span>
    </label>
  `).join('');
}

function addNewTag(e) {
  if (e.key !== 'Enter') return;
  const val = document.getElementById('new-tag-input').value.trim().toUpperCase();
  if (!val || allTags.includes(val)) return;
  allTags.push(val);
  saveTagData();
  const checked = getCheckedTags();
  buildTagCheckboxes([...checked, val]);
  document.getElementById('new-tag-input').value='';
  buildTagFilters();
}

function getCheckedTags() {
  return Array.from(document.querySelectorAll('#tag-checks input[type=checkbox]:checked')).map(i=>i.value);
}

/* ════════════════════════════════
   COVER IMAGE
════════════════════════════════ */
function handleCoverUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    coverDataUrl = e.target.result;
    const prev = document.getElementById('cover-preview');
    prev.src = coverDataUrl; prev.style.display='block';
    document.getElementById('cover-remove-btn').style.display='block';
  };
  reader.readAsDataURL(file);
}
function removeCover() {
  coverDataUrl = null;
  document.getElementById('cover-preview').style.display='none';
  document.getElementById('cover-remove-btn').style.display='none';
  document.getElementById('cover-file').value='';
}

/* Drag-and-drop on dropzone */
const dz = document.getElementById('cover-dropzone');
dz.addEventListener('dragover', e=>{ e.preventDefault(); dz.classList.add('drag-over'); });
dz.addEventListener('dragleave', ()=>dz.classList.remove('drag-over'));
dz.addEventListener('drop', e=>{
  e.preventDefault(); dz.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const r=new FileReader();
    r.onload=ev=>{
      coverDataUrl=ev.target.result;
      const prev=document.getElementById('cover-preview');
      prev.src=coverDataUrl; prev.style.display='block';
      document.getElementById('cover-remove-btn').style.display='block';
    };
    r.readAsDataURL(file);
  }
});

/* ════════════════════════════════
   WYSIWYG FORMAT COMMANDS
════════════════════════════════ */
function fmt(cmd, val=null) {
  document.getElementById('wysiwyg-editor').focus();
  document.execCommand(cmd, false, val);
}

function insertCode() {
  const sel = window.getSelection();
  if (sel && sel.toString()) {
    document.execCommand('insertHTML',false,`<code>${sel.toString()}</code>`);
  } else {
    document.execCommand('insertHTML',false,'<code>code here</code>');
  }
}

function insertLink() {
  const url = prompt('Enter URL:');
  if (url) document.execCommand('createLink',false,url);
}

function insertEditorImage(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('wysiwyg-editor').focus();
    document.execCommand('insertHTML',false,`<img src="${e.target.result}" style="max-width:100%;border:1px solid var(--border);margin:12px 0;display:block;" alt="image">`);
  };
  reader.readAsDataURL(file);
  input.value='';
}

/* ════════════════════════════════
   SAVE POST
════════════════════════════════ */
function savePost() {
  const title   = document.getElementById('ed-title').value.trim();
  const content = document.getElementById('wysiwyg-editor').innerHTML;
  const date    = document.getElementById('ed-date').value;
  const tags    = getCheckedTags();

  if (!title) { toast('Title required!'); return; }

  if (editingId) {
    const idx = posts.findIndex(p=>p.id===editingId);
    if (idx > -1) {
      posts[idx] = { ...posts[idx], title, content, date, tags, cover:coverDataUrl };
    }
    toast('Post updated!');
  } else {
    posts.unshift({ id: Date.now().toString(), title, content, date, tags, cover:coverDataUrl });
    toast('Post published!');
  }

  saveData();
  buildManageList();
  loadEditorForm(null);
  buildTagFilters();
}

/* ════════════════════════════════
   MANAGE POSTS LIST
════════════════════════════════ */
function buildManageList() {
  const wrap = document.getElementById('manage-list');
  if (!posts.length) { wrap.innerHTML='<div class="manage-empty">No posts yet.</div>'; return; }
  wrap.innerHTML = posts.map(p=>{
    const d = p.date ? new Date(p.date).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase() : '—';
    return `
      <div class="manage-item">
        <div>
          <div class="manage-item-title">${p.title}</div>
          <div class="manage-item-date">${d}</div>
        </div>
        <div class="manage-item-btns">
          <button class="manage-btn edit" onclick="editPost('${p.id}')">EDIT</button>
          <button class="manage-btn del"  onclick="deletePost('${p.id}')">DEL</button>
        </div>
      </div>`;
  }).join('');
}

function editPost(id) {
  const post = posts.find(p=>p.id===id);
  if (post) loadEditorForm(post);
}

function deletePost(id) {
  if (!confirm('Delete this post?')) return;
  posts = posts.filter(p=>p.id!==id);
  saveData();
  buildManageList();
  if (editingId===id) loadEditorForm(null);
  toast('Post deleted');
}

function cancelEdit() {
  loadEditorForm(null);
  showDevlog();
}

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 2800);
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
loadData();
renderPosts();
buildTagFilters();