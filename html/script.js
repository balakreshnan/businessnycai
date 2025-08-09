// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}

// Intersection observer for reveals
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Back to top button
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop?.classList.add('show');
  else toTop?.classList.remove('show');
});

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// If a full YouTube URL is provided via data-video-url, parse out the ID and set iframe src
(function initVideo() {
  const embed = document.querySelector('.video-embed');
  if (!embed) return;
  const url = embed.getAttribute('data-video-url');
  let vid = embed.getAttribute('data-video-id');
  if (url && !vid) {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtube.com')) {
        vid = u.searchParams.get('v');
      } else if (u.hostname.includes('youtu.be')) {
        vid = u.pathname.slice(1);
      }
    } catch (e) {}
  }
  if (vid && vid !== 'VIDEO_ID') {
    const iframe = embed.querySelector('iframe');
    if (iframe) iframe.src = `https://www.youtube.com/embed/${vid}`;
  }
})();
