document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '82px';
      nav.style.left = '16px';
      nav.style.right = '16px';
      nav.style.flexDirection = 'column';
      nav.style.background = 'white';
      nav.style.padding = '16px';
      nav.style.borderRadius = '18px';
      nav.style.boxShadow = '0 14px 28px rgba(17,59,100,0.12)';
    });
  }
});
