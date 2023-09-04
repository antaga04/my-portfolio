import './style.css';

const body = document.querySelector('body');
const main = document.querySelector('#app');
/* menu */
const menuBtn = document.querySelector('.menu-btn');
const menuSlider = document.querySelector('.menu-slider');
const menuNav = document.querySelector('.menu-nav');
/* magic */
const menuLinks = document.querySelectorAll('.menu-slider a');
const nib = document.querySelector('.nib-btn');
const magicMenu = document.querySelector('.magic-menu');
/* gear */
const textAlign = document.querySelector('#text-align');
const theme = document.querySelector('#theme');

menuBtn.addEventListener('click', () => {
  body.classList.toggle('no-overflow');
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

let desplegado = false;
nib.addEventListener('click', () => {
  if (!desplegado) {
    magicMenu.style.maxHeight = '150px';
    nib.classList.add('active');
  } else {
    magicMenu.style.maxHeight = '0';
    nib.classList.remove('active');
  }

  desplegado = !desplegado;
});

textAlign.addEventListener('click', () => {
  main.classList.toggle('justify-text');
  textAlign.classList.toggle('applied');
});

theme.addEventListener('click', () => {
  
});