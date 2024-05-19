import { initApp } from '../app';
import { saveInLocalStorage, setTextAlign, setTheme } from './functions';

function menuToggle() {
  const body = document.querySelector('body');
  const menuBtn = document.querySelector('.menu-btn');
  const menuSlider = document.querySelector('.menu-slider');
  const menuNav = document.querySelector('.menu-nav');

  menuBtn.addEventListener('click', () => {
    body.classList.toggle('no-overflow');
    menuBtn.classList.toggle('menu-mode');
    menuSlider.classList.toggle('menu-mode');
    menuSlider.classList.toggle('hidden');
    menuNav.classList.toggle('hidden');
  });
}

function handleMenuSliderClick() {
  const menuBtn = document.querySelector('.menu-btn');
  const menuLinks = document.querySelectorAll('.menu-slider a');

  menuLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      menuBtn.click();
    });
  });
}

function magicMenuListener() {
  const magicMenu = document.querySelector('.magic-menu');
  const nib = document.querySelector('.nib-btn');

  nib.addEventListener('click', () => {
    magicMenu.classList.toggle('active');
  });
}

function killJustifyText() {
  const main = document.querySelector('#app');
  const magicMenu = document.querySelector('.magic-menu');
  const textAlign = document.querySelector('#text-align button');

  textAlign.addEventListener('click', () => {
    const actualAlign = main.classList.contains('justify-text');
    const newAlign = actualAlign ? 'left-align' : 'justify-text';
    setTextAlign(newAlign);
    saveInLocalStorage(newAlign, 'preferredTextAlign');
    magicMenu.classList.toggle('active');
  });
}

function themeListener() {
  const rootElement = document.documentElement;
  const themeBtn = document.querySelector('#theme');
  const magicMenu = document.querySelector('.magic-menu');

  themeBtn.addEventListener('click', () => {
    const actualTheme = rootElement.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    saveInLocalStorage(newTheme, 'preferredMode');
    magicMenu.classList.toggle('active');
  });
}

function langListener() {
  const htmlTag = document.querySelector('html');
  const langSelect = document.getElementById('languageSelect');

  langSelect.addEventListener('change', async (event) => {
    let selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage);
    htmlTag.setAttribute('lang', selectedLanguage);
    await initApp();
    const newLangSelect = document.getElementById('languageSelect');
    newLangSelect.value = selectedLanguage;
  });
}

function Listeners() {
  menuToggle();
  handleMenuSliderClick();
  magicMenuListener();
  killJustifyText();
  themeListener();
  langListener();
}

export { Listeners };
