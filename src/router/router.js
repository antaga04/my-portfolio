import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handlePageStyles } from '../utils/functions';

const mainContent = document.querySelector('main');

// En tu archivo router.js, agrega una función para inicializar la página de inicio cuando se carga la página.
const routes = {
  '/': initHome,
  '/home': initHome,
  '/projects': initProjects,
  '/contact': initContact,
  '/about': initAbout,
};

function handleNavigation(pathname) {
  const initPage = routes[pathname] || initNotFound;
  initPage();
}

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  handleNavigation(pathname);
}

// Agrega esta función para inicializar la página de inicio cuando se carga la página.
function initializeApp() {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
}

window.addEventListener('popstate', () => {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
});

export { navigateTo, initializeApp };
