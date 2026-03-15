// ============================================================
// Selim & Benisu Bartin — Wedding Website
// ============================================================

// ---------- i18n Translations ----------
const translations = {
  de: {
    nav_details: 'Details', nav_ablauf: 'Ablauf', nav_rsvp: 'RSVP',
    nav_anreise: 'Anreise', nav_faq: 'FAQ', nav_3d: '3D', nav_bartin: 'Bartin',
    lang_btn: 'TR',
    hero_label: 'Hochzeitseinladung', hero_subtitle: 'Wir heiraten',
    hero_ampersand: '&', hero_family: 'BARTIN',
    cd_days: 'Tage', cd_hours: 'Std', cd_min: 'Min', cd_sec: 'Sek',
    event_label: 'Die Feier', event_title: 'Wann & Wo',
    detail_date_label: 'Datum', detail_date_value: '12. September 2026', detail_date_sub: 'Samstag',
    detail_time_label: 'Uhrzeit', detail_time_value: '14:00 Uhr', detail_time_sub: 'Einlass ab 13:30',
    detail_location_label: 'Location', detail_location_value: 'Wird noch bekannt gegeben', detail_location_sub: 'Details folgen',
    detail_dresscode_label: 'Dresscode', detail_dresscode_value: 'Festlich elegant', detail_dresscode_sub: 'Farben frei wählbar',
    cal_btn: 'Im Kalender speichern',
    timeline_label: 'Programm', timeline_title: 'Unser Tag',
    tl1_time: '14:00', tl1_title: 'Trauung', tl1_desc: 'Die feierliche Zeremonie',
    tl2_time: '15:30', tl2_title: 'Empfang', tl2_desc: 'Sektempfang & Gratulation',
    tl3_time: '17:00', tl3_title: 'Abendessen', tl3_desc: 'Gemeinsames Festmahl',
    tl4_time: '20:00', tl4_title: 'Party', tl4_desc: 'Tanzen bis in die Nacht',
    rsvp_label: 'Zusage', rsvp_title: 'Seid ihr dabei?',
    rsvp_name: 'Euer Name', rsvp_name_ph: 'Vor- und Nachname',
    rsvp_guests: 'Anzahl Personen', rsvp_attend: 'Zusage',
    rsvp_yes: 'Wir kommen gerne', rsvp_no: 'Leider nicht',
    rsvp_food: 'Essenswünsche', rsvp_food_none: 'Keine besonderen Wünsche',
    rsvp_food_veg: 'Vegetarisch', rsvp_food_vegan: 'Vegan', rsvp_food_halal: 'Halal',
    rsvp_allergies: 'Allergien / Anmerkungen',
    rsvp_allergies_ph: 'Bitte teilt uns Allergien oder besondere Wünsche mit...',
    rsvp_submit: 'Absenden', rsvp_success_icon: '✓',
    rsvp_success_title: 'Vielen Dank!',
    rsvp_success_text: 'Eure Antwort ist bei uns angekommen. Wir freuen uns auf euch!',
    music_label: 'Musikwünsche', music_title: 'Was sollen wir spielen?',
    music_name: 'Euer Name', music_song: 'Song-Wunsch',
    music_song_ph: 'Künstler — Titel', music_submit: 'Wunsch absenden',
    music_success: 'Danke für euren Musikwunsch!',
    '3d_label': 'Einladungskarte', '3d_title': 'Unsere Einladung in 3D',
    '3d_hint': 'Drehen & Zoomen mit Maus oder Touch',
    bartin_label: 'Unsere Heimat', bartin_title: 'Bartın, Karadeniz',
    map_sea: 'SCHWARZES MEER', map_mountains: 'Küre Dağları',
    travel_label: 'Anreise & Unterkunft', travel_title: 'So kommt ihr hin',
    travel_car_title: 'Mit dem Auto', travel_car_text: 'Details zur Anfahrt folgen',
    travel_hotel_title: 'Übernachtung', travel_hotel_text: 'Hotelempfehlungen folgen',
    travel_parking_title: 'Parken', travel_parking_text: 'Parkplätze vorhanden',
    map_text: 'Google Maps wird hier eingebettet',
    faq_label: 'Fragen & Antworten', faq_title: 'Häufige Fragen',
    faq1_q: 'Was ist der Dresscode?', faq1_a: 'Festlich elegant. Tragt, worin ihr euch wohlfühlt — Hauptsache, ihr feiert mit uns!',
    faq2_q: 'Dürfen wir unsere Kinder mitbringen?', faq2_a: 'Natürlich! Kinder sind herzlich willkommen.',
    faq3_q: 'Gibt es Parkplätze?', faq3_a: 'Ja, ausreichend Parkplätze stehen direkt an der Location zur Verfügung.',
    faq4_q: 'Was wünscht ihr euch als Geschenk?', faq4_a: 'Euer Kommen ist uns das größte Geschenk! Solltet ihr uns dennoch etwas schenken wollen, freuen wir uns über einen Beitrag zu unserer gemeinsamen Zukunft.',
    nazar_text: 'Nazar değmesin',
    footer_names: 'Selim & Benisu', footer_date: '12 · 09 · 2026',
  },
  tr: {
    nav_details: 'Detaylar', nav_ablauf: 'Program', nav_rsvp: 'RSVP',
    nav_anreise: 'Ulaşım', nav_faq: 'SSS', nav_3d: '3D', nav_bartin: 'Bartın',
    lang_btn: 'DE',
    hero_label: 'Düğün Davetiyesi', hero_subtitle: 'Evleniyoruz',
    hero_ampersand: '&', hero_family: 'BARTIN',
    cd_days: 'Gün', cd_hours: 'Saat', cd_min: 'Dk', cd_sec: 'Sn',
    event_label: 'Kutlama', event_title: 'Ne Zaman & Nerede',
    detail_date_label: 'Tarih', detail_date_value: '12 Eylül 2026', detail_date_sub: 'Cumartesi',
    detail_time_label: 'Saat', detail_time_value: '14:00', detail_time_sub: 'Giriş 13:30\'dan itibaren',
    detail_location_label: 'Mekan', detail_location_value: 'Yakında açıklanacak', detail_location_sub: 'Detaylar gelecek',
    detail_dresscode_label: 'Kıyafet', detail_dresscode_value: 'Şık & Zarif', detail_dresscode_sub: 'Renkler serbest',
    cal_btn: 'Takvime Kaydet',
    timeline_label: 'Program', timeline_title: 'Günümüz',
    tl1_time: '14:00', tl1_title: 'Nikah', tl1_desc: 'Nikah töreni',
    tl2_time: '15:30', tl2_title: 'Karşılama', tl2_desc: 'Kokteyl ve tebrikler',
    tl3_time: '17:00', tl3_title: 'Yemek', tl3_desc: 'Birlikte akşam yemeği',
    tl4_time: '20:00', tl4_title: 'Parti', tl4_desc: 'Sabaha kadar dans',
    rsvp_label: 'Katılım', rsvp_title: 'Gelecek misiniz?',
    rsvp_name: 'Adınız', rsvp_name_ph: 'Ad ve Soyad',
    rsvp_guests: 'Kişi Sayısı', rsvp_attend: 'Katılım',
    rsvp_yes: 'Severek geliriz', rsvp_no: 'Maalesef gelemiyoruz',
    rsvp_food: 'Yemek Tercihi', rsvp_food_none: 'Özel tercih yok',
    rsvp_food_veg: 'Vejetaryen', rsvp_food_vegan: 'Vegan', rsvp_food_halal: 'Helal',
    rsvp_allergies: 'Alerji / Notlar', rsvp_allergies_ph: 'Lütfen alerji veya özel isteklerinizi belirtin...',
    rsvp_submit: 'Gönder', rsvp_success_icon: '✓',
    rsvp_success_title: 'Teşekkürler!',
    rsvp_success_text: 'Cevabınız bize ulaştı. Sizleri görmek için sabırsızlanıyoruz!',
    music_label: 'Müzik İstekleri', music_title: 'Hangi şarkıyı çalalım?',
    music_name: 'Adınız', music_song: 'Şarkı İsteği',
    music_song_ph: 'Sanatçı — Şarkı adı', music_submit: 'İsteği Gönder',
    music_success: 'Müzik isteğiniz için teşekkürler!',
    '3d_label': 'Davetiye', '3d_title': '3D Davetiyemiz',
    '3d_hint': 'Fare veya dokunmatik ile döndür ve yakınlaştır',
    bartin_label: 'Memleketimiz', bartin_title: 'Bartın, Karadeniz',
    map_sea: 'KARADENİZ', map_mountains: 'Küre Dağları',
    travel_label: 'Ulaşım & Konaklama', travel_title: 'Nasıl Gelirsiniz',
    travel_car_title: 'Arabayla', travel_car_text: 'Yol tarifi yakında',
    travel_hotel_title: 'Konaklama', travel_hotel_text: 'Otel önerileri yakında',
    travel_parking_title: 'Otopark', travel_parking_text: 'Otopark mevcuttur',
    map_text: 'Google Haritalar burada gösterilecek',
    faq_label: 'Sorular & Cevaplar', faq_title: 'Sık Sorulan Sorular',
    faq1_q: 'Kıyafet kuralı nedir?', faq1_a: 'Şık ve zarif. Kendinizi rahat hissettiğiniz kıyafeti giyin!',
    faq2_q: 'Çocuklarımızı getirebilir miyiz?', faq2_a: 'Tabii ki! Çocuklar hoş gelir.',
    faq3_q: 'Otopark var mı?', faq3_a: 'Evet, mekanın yanında yeterli otopark alanı mevcuttur.',
    faq4_q: 'Hediye olarak ne istersiniz?', faq4_a: 'Gelmeniz bizim için en büyük hediye!',
    nazar_text: 'Nazar değmesin',
    footer_names: 'Selim & Benisu', footer_date: '12 · 09 · 2026',
  }
};

let currentLang = localStorage.getItem('wedding-lang') || 'de';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('wedding-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (!text) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    const text = translations[lang]?.[key];
    if (text) el.textContent = text;
  });
}

// ---------- Loading Screen ----------
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  setTimeout(() => {
    screen.classList.add('hide');
    setTimeout(() => screen.remove(), 900);
  }, 1200);
}

// ---------- Countdown ----------
const weddingDate = new Date('2026-09-12T14:00:00');
function updateCountdown() {
  const diff = weddingDate - new Date();
  if (diff <= 0) { ['days','hours','minutes','seconds'].forEach(id => { const e = document.getElementById(id); if(e) e.textContent='0'; }); return; }
  const el = id => document.getElementById(id);
  if (el('days')) el('days').textContent = Math.floor(diff / 864e5);
  if (el('hours')) el('hours').textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2,'0');
  if (el('minutes')) el('minutes').textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2,'0');
  if (el('seconds')) el('seconds').textContent = String(Math.floor((diff % 6e4) / 1000)).padStart(2,'0');
}

// ---------- Particles ----------
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let pts = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 70; i++) pts.push({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, r: Math.random()*1.8+0.3, dx: (Math.random()-0.5)*0.25, dy: (Math.random()-0.5)*0.15, op: Math.random()*0.4+0.1, ph: Math.random()*Math.PI*2 });
  (function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p => { p.x+=p.dx; p.y+=p.dy; p.ph+=0.012; const o=p.op+Math.sin(p.ph)*0.12; if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0; if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(196,162,101,${Math.max(0,o)})`; ctx.fill(); });
    requestAnimationFrame(draw);
  })();
}

// ---------- Waves ----------
function initWaves() {
  const canvas = document.getElementById('waves');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let off = 0;
  function resize() { canvas.width = window.innerWidth; canvas.height = 180; }
  resize(); window.addEventListener('resize', resize);
  const layers = [ {a:20,f:0.006,s:0.015,y:120,c:'rgba(70,150,220,0.1)'}, {a:16,f:0.009,s:0.02,y:135,c:'rgba(70,150,220,0.07)'}, {a:12,f:0.012,s:0.025,y:145,c:'rgba(70,150,220,0.05)'}, {a:8,f:0.016,s:0.03,y:155,c:'rgba(70,150,220,0.03)'} ];
  (function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    layers.forEach(l => { ctx.beginPath(); ctx.moveTo(0,canvas.height); for(let x=0;x<=canvas.width;x++) ctx.lineTo(x,l.y+Math.sin(x*l.f+off*l.s)*l.a); ctx.lineTo(canvas.width,canvas.height); ctx.closePath(); ctx.fillStyle=l.c; ctx.fill(); });
    [{a:14,f:0.008,s:0.018,y:128,w:1.2,o:0.12},{a:9,f:0.013,s:0.026,y:148,w:0.8,o:0.08}].forEach(l => { ctx.beginPath(); for(let x=0;x<=canvas.width;x++){const y=l.y+Math.sin(x*l.f+off*l.s)*l.a; x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);} ctx.strokeStyle=`rgba(70,150,220,${l.o})`; ctx.lineWidth=l.w; ctx.stroke(); });
    off++; requestAnimationFrame(draw);
  })();
}

// ---------- Parallax ----------
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) return;
  const els = document.querySelectorAll('[data-parallax]');
  window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.1;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  });
}

// ---------- Scroll Observer ----------
function initScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ---------- Nav ----------
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));
}

// ---------- FAQ ----------
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ---------- Confetti (RSVP celebration) ----------
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#C4A265', '#e8d5b0', '#D4AF37', '#FFD700', '#f0c8a0', '#e6b8a2', '#c9957e'];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 3,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      vy: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1
    });
  }
  let startTime = Date.now();
  function draw() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (elapsed > 3500) {
      particles.forEach(p => p.opacity = Math.max(0, p.opacity - 0.03));
    }
    let allGone = true;
    particles.forEach(p => {
      if (p.opacity <= 0) return;
      allGone = false;
      p.y += p.vy;
      p.x += p.vx;
      p.rot += p.rotSpeed;
      p.vy += 0.04;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (!allGone && elapsed < 5000) {
      requestAnimationFrame(draw);
    } else {
      canvas.style.display = 'none';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  draw();
}

// ---------- RSVP ----------
function initRSVP() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (action && action !== '#') {
      fetch(action, { method:'POST', body: new FormData(form), headers:{'Accept':'application/json'}})
        .then(() => showRSVPSuccess()).catch(() => showRSVPSuccess());
    } else { showRSVPSuccess(); }
  });
}
function showRSVPSuccess() {
  const form = document.getElementById('rsvp-form');
  const success = document.getElementById('rsvp-success');
  if (form) form.style.display = 'none';
  if (success) success.classList.add('show');
  launchConfetti();
}

// ---------- Music ----------
function initMusic() {
  const form = document.getElementById('music-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const action = form.getAttribute('action');
    const done = () => { form.innerHTML = `<p class="section-label">${translations[currentLang].music_success}</p>`; };
    if (action && action !== '#') {
      fetch(action, {method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}}).then(done).catch(done);
    } else { done(); }
  });
}

// ---------- Save to Calendar ----------
function saveToCalendar() {
  const ics = ['BEGIN:VCALENDAR','VERSION:2.0','BEGIN:VEVENT','DTSTART:20260912T120000Z','DTEND:20260913T020000Z','SUMMARY:Hochzeit Selim & Benisu Bartin','DESCRIPTION:Wir heiraten! Feiert mit uns.','LOCATION:Wird noch bekannt gegeben','END:VEVENT','END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], {type:'text/calendar'}));
  a.download = 'hochzeit-selim-benisu.ics';
  a.click();
}

// ---------- (Çay removed, replaced by Nazar) ----------

// ---------- 3D STL Viewer ----------
async function initSTLViewer() {
  const container = document.getElementById('stl-viewer');
  if (!container || typeof THREE === 'undefined') return;

  // file:// can't load STL via fetch (CORS) — show fallback
  if (location.protocol === 'file:') {
    container.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:30px;text-align:center;">
        <svg viewBox="0 0 60 55" width="50" height="46" style="margin-bottom:16px;opacity:0.4">
          <path d="M30,50 Q5,30 5,15 Q5,0 17.5,0 Q25,0 30,8 Q35,0 42.5,0 Q55,0 55,15 Q55,30 30,50 Z" fill="none" stroke="#C4A265" stroke-width="2"/>
        </svg>
        <p style="font-family:var(--sans);font-size:12px;letter-spacing:3px;color:#C4A265;opacity:0.7;">3D-VORSCHAU</p>
        <p style="font-family:var(--serif);font-size:16px;color:var(--cream);margin-top:8px;">Verfügbar nach dem Hosting</p>
        <p style="font-family:var(--sans);font-size:10px;color:#C4A265;opacity:0.4;margin-top:12px;">Lokal testen: python3 -m http.server</p>
      </div>`;
    return;
  }

  const { OrbitControls } = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js');
  const { STLLoader } = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/STLLoader.js');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f14);

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 2000);
  camera.position.set(0, 0, 250);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Gold lighting
  const ambientLight = new THREE.AmbientLight(0xC4A265, 0.4);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(100, 100, 100);
  scene.add(dirLight);
  const dirLight2 = new THREE.DirectionalLight(0xC4A265, 0.5);
  dirLight2.position.set(-100, -50, 50);
  scene.add(dirLight2);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;

  const loader = new STLLoader();
  loader.load('wedding_gear_card.stl', geometry => {
    geometry.computeBoundingBox();
    geometry.center();
    const material = new THREE.MeshStandardMaterial({ color: 0xC4A265, metalness: 0.6, roughness: 0.35 });
    const mesh = new THREE.Mesh(geometry, material);
    // Scale to fit view
    const box = geometry.boundingBox;
    const maxDim = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z);
    const scale = 120 / maxDim;
    mesh.scale.set(scale, scale, scale);
    scene.add(mesh);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// ---------- Flying Plane with Contrail + Heart ----------
function initButterfly() {
  if (window.innerWidth < 768) return;

  const SIZE = 22;
  const el = document.createElement('div');
  el.className = 'flying-plane';
  el.innerHTML = `<svg width="44" height="44" viewBox="0 0 100 100">
    <path d="M30,50 L75,50" stroke="#C4A265" stroke-width="5" stroke-linecap="round"/>
    <path d="M75,50 L88,50" stroke="#C4A265" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M48,50 L40,22 L58,50" fill="#C4A265" opacity="0.8"/>
    <path d="M48,50 L40,78 L58,50" fill="#C4A265" opacity="0.8"/>
    <path d="M32,50 L26,38 L38,50" fill="#C4A265" opacity="0.6"/>
    <path d="M32,50 L26,62 L38,50" fill="#C4A265" opacity="0.6"/>
  </svg>`;
  document.body.appendChild(el);

  let px = -60, py = 200;
  let angle = 0;
  let lastTrailTime = 0;
  const speed = 1.8;
  let targetAngle = 0;
  const DOT_LIFE = 30000;

  // Heart: pre-computed waypoints
  let heartPoints = [];
  let heartIdx = 0;
  let doingHeart = false;
  const heartSize = 80;

  // Cubic bezier helper
  function bezier(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return {
      x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
      y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y
    };
  }

  // Generate heart points with smooth entry curve
  function generateHeart(startX, startY, startAngle, dir) {
    const pts = [];

    // Heart tip position (where heart starts)
    const tipT = Math.PI;
    const tipX = startX + dir * heartSize * Math.pow(Math.sin(tipT), 3); // = startX (sin(π)=0)
    const tipY = startY - heartSize * (0.8125*Math.cos(tipT) - 0.3125*Math.cos(2*tipT) - 0.125*Math.cos(3*tipT) - 0.0625*Math.cos(4*tipT));

    // Smooth entry: bezier from current position to heart tip
    // Control points extend in current flight direction
    const rad = startAngle * Math.PI / 180;
    const entryDist = 60;
    const p0 = { x: startX, y: startY };
    const p1 = { x: startX + Math.cos(rad) * entryDist, y: startY + Math.sin(rad) * entryDist };
    const p2 = { x: tipX, y: tipY + 40 }; // approach from below
    const p3 = { x: tipX, y: tipY };

    const entrySteps = 30;
    for (let i = 0; i <= entrySteps; i++) {
      pts.push(bezier(p0, p1, p2, p3, i / entrySteps));
    }

    // Heart curve: π to 3π
    const heartSteps = 200;
    for (let i = 1; i <= heartSteps; i++) {
      const t = Math.PI + (i / heartSteps) * 2 * Math.PI;
      const s = Math.sin(t);
      pts.push({
        x: startX + dir * heartSize * s * s * s,
        y: startY - heartSize * (0.8125*Math.cos(t) - 0.3125*Math.cos(2*t) - 0.125*Math.cos(3*t) - 0.0625*Math.cos(4*t))
      });
    }

    return pts;
  }

  function spawnDotAt(x, y) {
    const dot = document.createElement('div');
    dot.className = 'contrail-dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), DOT_LIFE);
  }

  // Schedule heart
  function scheduleHeart(delay) {
    setTimeout(() => {
      if (!doingHeart) {
        doingHeart = true;
        const flyingRight = angle > -90 && angle < 90;
        const dir = flyingRight ? 1 : -1;
        heartPoints = generateHeart(px, py, angle, dir);
        heartIdx = 0;
      }
    }, delay);
  }
  scheduleHeart(10000);

  setInterval(() => {
    if (!doingHeart) targetAngle = (Math.random() - 0.5) * 20;
  }, 4000 + Math.random() * 3000);

  function animate(time) {
    if (doingHeart) {
      // Follow pre-computed heart waypoints
      heartIdx += 1;
      if (heartIdx >= heartPoints.length) {
        // Heart done — continue from last point
        doingHeart = false;
        const last = heartPoints[heartPoints.length - 1];
        px = last.x;
        py = last.y;
        targetAngle = angle;
        scheduleHeart(20000 + Math.random() * 5000);
      } else {
        const pt = heartPoints[heartIdx];
        // Angle from current to next point
        const dx = pt.x - px, dy = pt.y - py;
        angle = Math.atan2(dy, dx) * (180 / Math.PI);
        px = pt.x;
        py = pt.y;

        // Dot every 3rd waypoint
        if (heartIdx % 3 === 0) {
          spawnDotAt(px, py);
        }
      }
    } else {
      // Normal flight
      angle += (targetAngle - angle) * 0.006;
      const rad = angle * Math.PI / 180;
      px += Math.cos(rad) * speed;
      py += Math.sin(rad) * speed;

      if (px > window.innerWidth + 60) px = -60;
      if (px < -80) px = window.innerWidth + 60;
      if (py < 30) targetAngle = Math.abs(targetAngle);
      if (py > window.innerHeight * 0.55) targetAngle = -Math.abs(targetAngle);

      // Normal dots
      const dt = time - lastTrailTime;
      if (dt > 120) {
        spawnDotAt(px, py);
        lastTrailTime = time;
      }
    }

    el.style.left = (px - SIZE) + 'px';
    el.style.top = (py - SIZE) + 'px';
    el.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initParticles();
  initWaves();
  initParallax();
  initScrollObserver();
  initNav();
  initFAQ();
  initRSVP();
  initMusic();
  initButterfly();
  setLanguage(currentLang);
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Hero fade-in with delays (after loading screen)
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 100 + i * 250);
    });
  }, 1300);

  // Lang toggle
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => setLanguage(currentLang === 'de' ? 'tr' : 'de'));

  // Calendar
  const calBtn = document.getElementById('cal-btn');
  if (calBtn) calBtn.addEventListener('click', saveToCalendar);

  // STL Viewer (lazy load when section visible)
  const stlSection = document.getElementById('3d-preview');
  if (stlSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        initSTLViewer();
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(stlSection);
  }
});
