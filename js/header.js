
window.addEventListener('scroll', function () {
      const header = document.querySelector('.div-header-section');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

// Toggle Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
  });
});
