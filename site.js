// ── HEADER SCROLL ──────────────────────────
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── HAMBURGER ──────────────────────────────
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    ham.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      ham.classList.remove('open');
    })
  );
}

// ── BACK TO TOP ─────────────────────────────
const btt = document.getElementById('btt');
if (btt) {
  window.addEventListener('scroll', () => {
    btt.classList.toggle('show', window.scrollY > 400);
  });
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── SCROLL REVEAL ───────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));
}

// ── ACTIVE NAV LINK ──────────────────────────
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === '#home')) {
      a.classList.add('active');
    }
  });
})();