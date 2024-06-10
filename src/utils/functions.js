const saveInLocalStorage = (mode, tag) => {
  localStorage.setItem(tag, mode);
};

const setTheme = (mode) => {
  const rootElement = document.documentElement;
  const themeBtn = document.querySelector('#theme button span');

  if (mode === 'dark') {
    themeBtn.textContent = '🌙';
    rootElement.classList.remove('light-theme');
    rootElement.classList.add('dark-theme');
  } else {
    themeBtn.textContent = '☀️';
    rootElement.classList.remove('dark-theme');
    rootElement.classList.add('light-theme');
  }
};

const setTextAlign = async (align) => {
  const PAGE_NAME = 'common';

  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang, PAGE_NAME);
  const textAlign = document.querySelector('#text-align button');
  const main = document.querySelector('#app');

  if (align === 'justify-text') {
    textAlign.textContent = data.magicMenu.textAlign.name_j;
    main.classList.add('justify-text');
  } else {
    textAlign.textContent = data.magicMenu.textAlign.name_l;
    main.classList.remove('justify-text');
  }
};

const loadPreferredMode = () => {
  const storagedTheme = localStorage.getItem('preferredMode');
  if (storagedTheme) {
    setTheme(storagedTheme);
  } else {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(defaultTheme);
    saveInLocalStorage(defaultTheme, 'preferredMode');
  }
};

const loadPreferredTextAlign = () => {
  const storagedAlign = localStorage.getItem('preferredTextAlign');
  if (storagedAlign) {
    setTextAlign(storagedAlign, 'preferredTextAlign');
  } else {
    setTextAlign('justify-text');
    saveInLocalStorage('justify-text', 'preferredTextAlign');
  }
};

const loadBrowserLang = () => {
  const htmlTag = document.querySelector('html');
  let browserLanguage = navigator.language || navigator.userLanguage;
  let storedLanguage = localStorage.getItem('language');

  if (!storedLanguage) {
    localStorage.setItem('language', browserLanguage);
    storedLanguage = browserLanguage;
  }

  htmlTag.setAttribute('lang', storedLanguage);
  return storedLanguage;
};

const handleLinkStyle = (links) => {
  const pathname = window.location.pathname;
  const dynamicPattern = /^\/projects\/\d+$/;

  links.forEach((link) => {
    if (link.getAttribute('href') === pathname && pathname !== '') {
      link.classList.add('active-link');
      updateMenuShape();
    } else if (dynamicPattern.test(pathname) && link.getAttribute('href') === '/projects') {
      link.classList.add('active-link');
      updateMenuShape();
    } else {
      link.classList.remove('active-link');
    }
  });
};

// Fix for handling the styles when hovering the images or <p> section
function handleAboutStyles() {
  const beginningP = document.getElementById('beginning-p');
  const umP = document.getElementById('um-p');
  const rcP = document.getElementById('rc-p');

  const beginningImg = document.querySelector('.pacman--img img');
  const umCarImg = document.querySelector('.umCar--img img');
  const rcImgs = document.querySelectorAll('.web-developer__image img');

  setAboutStyles(beginningP, beginningImg);
  setAboutStyles(umP, umCarImg);
  rcImgs.forEach((rcImg) => {
    setAboutStyles(rcP, rcImg);
  });
}

function setAboutStyles(paragraph, img) {
  paragraph.addEventListener('mouseenter', () => {
    img.classList.add('active-img');
  });

  paragraph.addEventListener('mouseleave', () => {
    img.classList.remove('active-img');
  });

  img.addEventListener('mouseenter', () => {
    paragraph.classList.add('active-p');
  });

  img.addEventListener('mouseleave', () => {
    paragraph.classList.remove('active-p');
  });
}

function updateMenuShape() {
  const menuShape = document.querySelector('.menu_shape');
  const activeLink = document.querySelector('.nav-link.active-link');
  if (activeLink) {
    const linkRect = activeLink.getBoundingClientRect();
    const navRect = activeLink.closest('.nav-3').getBoundingClientRect();

    menuShape.classList.add('moving');

    menuShape.style.left = `${linkRect.left - navRect.left}px`;
    menuShape.style.width = `7rem`;
    menuShape.style.opacity = '1';

    setTimeout(() => {
      menuShape.classList.remove('moving');
      menuShape.style.width = `100px`;
    }, 300);
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

async function loadTranslations(lang, page) {
  const url = `/src/lang/${lang}/${page}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error al cargar el JSON:', err);
  }
}

function getCurrentLanguage() {
  const supportedLanguages = ['en', 'es-ES', 'gl'];
  let browserLang = navigator.language;
  if (!supportedLanguages.includes(browserLang)) {
    browserLang = 'en';
  }
  localStorage.setItem('browserLang', browserLang);
  return browserLang;
}

export {
  handleLinkStyle,
  loadPreferredMode,
  saveInLocalStorage,
  setTheme,
  handleAboutStyles,
  updateMenuShape,
  scrollToTop,
  loadTranslations,
  getCurrentLanguage,
  setTextAlign,
  loadPreferredTextAlign,
  loadBrowserLang,
};
