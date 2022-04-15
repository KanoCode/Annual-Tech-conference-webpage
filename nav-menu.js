const navBtn = document.querySelector('nav > a > i');
// navAnchorTag.setAttribute('href','./index.html');

const mobileMenu = document.querySelector('nav');

navBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navBtn.classList.toggle('fa-times');
});
