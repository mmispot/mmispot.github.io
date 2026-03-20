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
    githubUrl: '',
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
        { label: "GamePlay",  src: "images/KINGDOMCORP1.png" },
        { label: "Gameplay",   src: "images/KINGDOMCORP2.png" },
        { label: "Gameplay", src: "images/KINGDOMCORP3.png" },
    ],
    devlogs: [
      { date: '19/03/2026', title: 'My role in the project',
        body: 'Worked as the Producer for this project, providing a chance to manage a team, oversee deadlines and coordinate communication.' },
            { date: '11/06/2025', title: 'What I learned from the project',
        body: 'My first time in a management role for a team of +- 10 people. I asked extra feedback from my teachers and oversaw the project\'s progress, divided tasks and managed deadlines.' },
        { date: '15/06/2025', title: 'Credits',
        body: 'TBA' },
      ]
      },
 {
    title: 'C-SWORD',
    itchUrl: 'https://mmispot.itch.io/c-sword',
    githubUrl: 'https://github.com/mmispot/CardGame',
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
        { label: "Main Menu",  src: "images/CSWORD1.png" },
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
    githubUrl: 'https://github.com/mmispot/Cafe-CATastropy',
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

    if (page === 'games') {
    const header = document.querySelector('.games-header');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (page === 'about') {
    const header = document.querySelector('.about-layout');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
   } else if (page === 'home') {
    const header = document.querySelector('.hero-panel');
    if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
  else {
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
  document.getElementById('games-grid').innerHTML = games.map((g, i) => `
    <div class="game-card" data-index="${i}" style="--hover-bg:${g.hoverBg}; --accent:${g.accent};">
      ${g.featured ? '<div class="featured-badge">★ Featured</div>' : ''}
      <div class="game-thumb" id="thumb-${i}">
      <img src="${g.screenshots[0].src}" alt="${g.title}" 
       style="width:100%; height:100%; object-fit:cover; display:block;">
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
        <div class="game-platform">${g.platforms}</div>
        <div class="game-meta-row">
          <div class="game-learned">◈ ${g.learned}</div>
        </div>
        <div class="game-links">
          ${g.githubUrl ? `<a class="game-link" href="${g.githubUrl}"           target="_blank" onclick="event.stopPropagation()">▶ GITHUB</a>` : ''}           ${g.itchUrl ? `<a class="game-link" href="${g.itchUrl}"           target="_blank" onclick="event.stopPropagation()">◈ ITCH.IO</a>` : ''}
        <div class="game-link open-popup-btn" data-index="${i}">◆ DEVLOG</div>
        </div>
      </div>
    </div>
  `).join('');

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


/* ══════════════════════════════════
   PIXEL AVATAR
══════════════════════════════════ */

function buildPixelAvatar() {
  const el = document.getElementById('pixel-avatar');
  if (!el) return;

  el.innerHTML = '';
  const img = document.createElement('img');
  img.src = 'images/miliOS.png';
  img.alt = 'Profile photo';
  img.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 4px;
    border: 3px solid #f8c8dc;
    box-shadow: 0 0 12px #e8006a33;
  `;
  el.appendChild(img);
}