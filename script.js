// Reveal on scroll for sections beneath the hero
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.project, .pillars li, .svc, .ccard, .about-stats li, .process-step')
  .forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)';
    io.observe(el);
  });

const style = document.createElement('style');
style.textContent = `.in { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(style);

// Staggered child animation for grids
document.querySelectorAll('.pillars, .svc-grid, .process, .about-stats, .contact-cards')
  .forEach((grid) => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

// Mobile nav toggle
(function() {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  // Close menu when tapping a link
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
