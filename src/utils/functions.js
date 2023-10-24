const rootElement = document.documentElement;
const themeBtn = document.querySelector('#theme button');

const saveTheme = (mode) => {
  localStorage.setItem('preferredMode', mode);
};

const setTheme = (mode) => {
  if (mode === 'dark') {
    themeBtn.textContent = '☀️';
    rootElement.classList.remove('light-theme');
    rootElement.classList.add('dark-theme');
  } else {
    themeBtn.textContent = '🌙';
    rootElement.classList.remove('dark-theme');
    rootElement.classList.add('light-theme');
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
    saveTheme(defaultTheme);
  }
};

const handleLinkStyle = (links) => {
  const pathname = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute('href') === pathname && pathname !== '/home' && pathname !== '') {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
};

// Posible fix for handling the styles when hovering the images or <p> section
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

export { handleLinkStyle, loadPreferredMode, saveTheme, setTheme, handleAboutStyles };
