import './style.css';

const menuBtn = document.querySelector('.menu-btn');
const menuSlider = document.querySelector('.menu-slider');
const menuNav = document.querySelectorAll('.menu-nav');
const body = document.querySelector('body');

const menuLinks = document.querySelectorAll('.menu-slider a');

menuBtn.addEventListener('click', () => {
  body.classList.toggle('blur');
  menuBtn.classList.toggle('menu-mode');
  menuSlider.classList.toggle('menu-mode');
  menuSlider.classList.toggle('hidden');
  menuNav.classList.toggle('hidden');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', (ev) => {
    menuBtn.click();
  });
});
