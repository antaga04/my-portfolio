import { saveTheme, setTheme } from './functions';

const rootElement = document.documentElement;
const body = document.querySelector('body');
const main = document.querySelector('#app');
const themeBtn = document.querySelector('#theme');
/* menu */
const menuBtn = document.querySelector('.menu-btn');
const menuSlider = document.querySelector('.menu-slider');
const menuNav = document.querySelector('.menu-nav');
/* magic */
const menuLinks = document.querySelectorAll('.menu-slider a');
const magicMenu = document.querySelector('.magic-menu');
const nib = document.querySelector('.nib-btn');
const textAlign = document.querySelector('#text-align');

let unfolded = false;

function menuToggle() {
  menuBtn.addEventListener('click', () => {
    body.classList.toggle('no-overflow');
    menuBtn.classList.toggle('menu-mode');
    menuSlider.classList.toggle('menu-mode');
    menuSlider.classList.toggle('hidden');
    menuNav.classList.toggle('hidden');
  });
}

function handleMenuSliderClick() {
  menuLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      menuBtn.click();
    });
  });
}

function magicMenuListener() {
  nib.addEventListener('click', () => {
    if (!unfolded) {
      magicMenu.style.maxHeight = '150px';
      nib.classList.add('active');
    } else {
      magicMenu.style.maxHeight = '0';
      nib.classList.remove('active');
    }
    unfolded = !unfolded;
  });
}

function killJustifyText() {
  textAlign.addEventListener('click', () => {
    main.classList.toggle('justify-text');
    textAlign.classList.toggle('applied');
  });
}

function themeListener() {
  themeBtn.addEventListener('click', () => {
    const actualTheme = rootElement.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme, themeBtn, rootElement);
    saveTheme(newTheme);
  });
}

function Listeners() {
  menuToggle();
  handleMenuSliderClick();
  magicMenuListener();
  killJustifyText();
  themeListener();
}

export { Listeners };
