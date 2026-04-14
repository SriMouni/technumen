/* ===================================================
   TECHNUMEN — JAVASCRIPT
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Theme toggle ----------
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ---------- Hero background slideshow ----------
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // ---------- Header scroll behaviour ----------
  const header = document.querySelector('.site-header');
  const scrollThreshold = 50;
  const handleScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    const btn = document.querySelector('.back-to-top');
    btn?.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---------- Mobile menu toggle ----------
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.remove('open');
      toggle?.classList.remove('active');
    });
  });

  // ---------- Dropdown toggles (mobile) ----------
  document.querySelectorAll('.nav-menu > li > a').forEach(trigger => {
    const dd = trigger.nextElementSibling;
    if (dd && dd.classList.contains('dropdown')) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dd.classList.toggle('open');
        }
      });
    }
  });

  // ---------- Scroll reveal ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ---------- Counter animation ----------
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => counterObserver.observe(c));
  }

  // ---------- Active nav link ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu > li > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.parentElement.classList.add('active');
    }
  });

  // ---------- Contact form anti-spam honeypot ----------
  const form = document.querySelector('.contact-form form');
  form?.addEventListener('submit', (e) => {
    const honeypot = form.querySelector('input[name="website_url"]');
    if (honeypot && honeypot.value) {
      e.preventDefault();
      return;
    }
  });

  // ---------- Back to top ----------
  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Logo carousel duplicate for infinite scroll ----------
  const track = document.querySelector('.logo-track');
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }
});
