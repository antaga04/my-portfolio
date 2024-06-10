import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handleLinkStyle, scrollToTop } from '../utils/functions';
import { initProject } from '../components/card/card';
import { initSecret } from '../pages/secret/secret';

const routes = {
  '/': initHome,
  '/home': initHome,
  '/projects': initProjects,
  '/contact': initContact,
  '/about': initAbout,
  '/projects/:projectId': initProject,
  '/secret': initSecret,
};

function handleNavigation(pathname) {
  const links = document.querySelectorAll('.nav-link');

  handleLinkStyle(links);
  if (pathname.includes('/projects/')) {
    const parts = pathname.split('/projects/');
    if (parts.length === 2) {
      const projectId = parts[1];
      initProject(projectId);
    } else {
      initNotFound();
    }
  } else {
    const initPage = routes[pathname] || initNotFound;
    initPage();
  }
  scrollToTop();
}

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  handleNavigation(pathname);
  scrollToTop();
}

function initializeApp() {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
}

function menuLinker() {
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
  const links = document.querySelectorAll('a[link-path]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('link-path');
      navigateTo(pathname);
    });
  });
}

window.addEventListener('popstate', () => {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
});

export { initializeApp, menuLinker, Linker, navigateTo };
