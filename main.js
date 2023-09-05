import './style.css';

const body = document.querySelector('body');
const main = document.querySelector('#app');
const rootElement = document.documentElement;

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
const themeBtn = document.querySelector('#theme');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');

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

const saveTheme = (modo) => {
  localStorage.setItem('modoPreferido', modo);
};

const setTheme = (modo) => {
  if (modo === 'dark') {
    themeBtn.textContent = '☀️';
    rootElement.classList.remove('light-theme');
    rootElement.classList.add('dark-theme');
  } else {
    themeBtn.textContent = '🌙';
    rootElement.classList.remove('dark-theme');
    rootElement.classList.add('light-theme');
  }
};

themeBtn.addEventListener('click', () => {
  const actualTheme = rootElement.classList.contains('dark-theme') ? 'dark' : 'light';
  const newTheme = actualTheme === 'dark' ? 'light' : 'dark';

  setTheme(newTheme);
  saveTheme(newTheme);
});

const cargarModoPreferido = () => {
  const storagedTheme = localStorage.getItem('modoPreferido');
  if (storagedTheme) {
    setTheme(storagedTheme);
  } else {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(defaultTheme);
    saveTheme(defaultTheme);
  }
};

cargarModoPreferido();
