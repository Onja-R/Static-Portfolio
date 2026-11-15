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