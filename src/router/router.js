import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handleLinkStyle, handlePageStyles } from '../utils/functions';

const links = document.querySelectorAll('.nav-link');

const routes = {
  '/': initHome,
  '/home': initHome,
  '/projects': initProjects,
  '/contact': initContact,
  '/about': initAbout,
};

function handleNavigation(pathname) {
  console.log('handleNavigation');

  handleLinkStyle(links);
  const initPage = routes[pathname] || initNotFound;
  initPage();
}

function navigateTo(pathname) {
  console.log('navigateTo');
  window.history.pushState({}, '', pathname);
  handleNavigation(pathname);
}

function initializeApp() {
  console.log('initializeApp');

  const pathname = window.location.pathname;
  handleNavigation(pathname);
}

window.addEventListener('popstate', () => {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
});

function menuLinker() {
  console.log('menuLinker');
  const links = document.querySelectorAll('a[nav-path]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('nav-path');
      if (pathname !== window.location.pathname) {
        navigateTo(pathname);
      }
    });
  });
}

function Linker() {
  console.log(`Linker`);
  const links = document.querySelectorAll('a[link-path]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('link-path');
      navigateTo(pathname);
    });
  });
}

export { initializeApp, menuLinker, Linker, navigateTo };
