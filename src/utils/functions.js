const rootElement = document.documentElement;
const themeBtn = document.querySelector('#theme');

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

export { handleLinkStyle, loadPreferredMode, saveTheme, setTheme };
