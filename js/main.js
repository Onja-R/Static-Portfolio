const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

toggle.textContent = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next;
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  submitBtn.disabled = true;
  statusEl.textContent = '';
  statusEl.className = 'form-status mono';

  try {
    const response = await fetch('https://forms.formward.eu/f/efd8bdb5-e7dd-49a5-a8f3-16bf5bed7db8', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (response.ok) {
      statusEl.textContent = 'Message envoyé.';
      statusEl.classList.add('ok');
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    statusEl.textContent = "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
    statusEl.classList.add('err');
  }
  submitBtn.disabled = false;
});
// Custom cursor: dot follows the pointer exactly, ring trails with easing.
// Enabled only for precise pointers (mouse/trackpad); touch devices keep defaults.
(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  dot.setAttribute('aria-hidden', 'true');
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(ring, dot);
  root.classList.add('has-custom-cursor');

  const interactive = 'a, button, [role="button"], label, summary, select';
  const textField = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea';

  let mouseX = -100, mouseY = -100;
  let ringX = mouseX, ringY = mouseY;
  let last = performance.now();
  let running = false;

  const place = (el, x, y) => { el.style.transform = `translate3d(${x}px, ${y}px, 0)`; };

  const tick = (now) => {
    // Frame-rate independent easing (~0.18 per 60fps frame)
    const dt = Math.min(now - last, 64);
    last = now;
    const k = reduceMotion ? 1 : 1 - Math.pow(1 - 0.18, dt / 16.67);
    ringX += (mouseX - ringX) * k;
    ringY += (mouseY - ringY) * k;
    place(ring, ringX, ringY);

    if (Math.abs(mouseX - ringX) > 0.1 || Math.abs(mouseY - ringY) > 0.1) {
      requestAnimationFrame(tick);
    } else {
      running = false; // idle: stop the loop until the mouse moves again
    }
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    place(dot, mouseX, mouseY);
    if (!root.classList.contains('cursor-visible')) {
      // First move after entering: snap the ring so it doesn't fly in from a corner
      ringX = mouseX; ringY = mouseY;
      root.classList.add('cursor-visible');
    }
    if (!running) {
      running = true;
      last = performance.now();
      requestAnimationFrame(tick);
    }
  }, { passive: true });

  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    root.classList.toggle('cursor-text', !!t.closest(textField));
    root.classList.toggle('cursor-hover', !!t.closest(interactive) && !t.closest(textField));
  });

  document.addEventListener('mousedown', () => root.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => root.classList.remove('cursor-down'));
  document.documentElement.addEventListener('mouseleave', () => root.classList.remove('cursor-visible'));
})();
