import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handlePageStyles } from '../utils/functions';

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

function initializeApp() {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
}

window.addEventListener('popstate', () => {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
});

const Linker = () => {
  const links = document.querySelectorAll('a[data-path]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('data-path');
      navigateTo(pathname);
    });
  });
};

export { initializeApp, Linker };
