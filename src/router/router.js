import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handleLinkStyle, handlePageStyles } from '../utils/functions';
import { initProject } from '../components/card/card';

const links = document.querySelectorAll('.nav-link');

const routes = {
  '/': initHome,
  '/home': initHome,
  '/projects': initProjects,
  '/contact': initContact,
  '/about': initAbout,
  // '/project/:projectId': initProject,
};

/* function handleNavigation(pathname) {
  console.log('handleNavigation');

  handleLinkStyle(links);
  const initPage = routes[pathname] || initNotFound;
  initPage();
} */

function handleNavigation() {
  const pathname = window.location.pathname;
  console.log('handleNavigation', pathname);

  handleLinkStyle(links);

  let initPage = initNotFound;

  for (const route in routes) {
    const routeRegex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([^/]+)')}$`);
    const match = pathname.match(routeRegex);

    if (match) {
      initPage = routes[route];
      if (route.includes(':projectId')) {
        const projectId = match[1]; // Captura el valor de :projectId
        initPage(projectId);
      } else {
        initPage();
      }
      break;
    }
  }
}

function navigateTo(pathname) {
  console.log(pathname);
  window.history.pushState({}, '', pathname);
  handleNavigation(pathname);
}

function initializeApp() {
  // console.log('initializeApp');
  const pathname = window.location.pathname;
  handleNavigation(pathname);
}

window.addEventListener('popstate', () => {
  const pathname = window.location.pathname;
  handleNavigation(pathname);
});

function menuLinker() {
  // console.log('menuLinker');
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
  console.log(`estos son los links`, links);
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('link-path');
      navigateTo(pathname);
    });
  });
}

export { initializeApp, menuLinker, Linker, navigateTo };
