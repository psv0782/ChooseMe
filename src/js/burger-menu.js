document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-link');

  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('show');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
    document.body.classList.remove('no-scroll');
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
});