/*
  cr8ease Navbar JS
  Features:
    - Mobile menu toggle
    - Cross button to close
    - ESC key closes menu
*/

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;

  toggle.addEventListener('click', () => {
    const isOpen = body.classList.contains('nav-open');
    body.classList.toggle('nav-open', !isOpen);
    toggle.setAttribute('aria-expanded', !isOpen);
    toggle.setAttribute('aria-label', !isOpen ? 'Close menu' : 'Open menu');
  });

  // ESC key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') body.classList.remove('nav-open');
  });
});
