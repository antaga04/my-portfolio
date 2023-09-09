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
  '/project/:projectId': initProject,
};

/* function handleNavigation(pathname) {
  console.log('handleNavigation');

  handleLinkStyle(links);
  const initPage = routes[pathname] || initNotFound;
  initPage();
} */

function handleNavigation() {
  const pathname = window.location.pathname;
  console.log(`
  PATHNAME


  `,pathname);
  
  if (pathname === '/' || pathname === '/home') {
    initHome();
  } else if (pathname === '/projects') {
    initProjects();
  } else if (pathname === '/projects/0') {
    // Aquí debes extraer el projectId de la URL y luego llamar a initProject con él.
    const parts = pathname.split('/');
    console.log(parts);
    if (parts.length === 3) {
      const projectId = parts[2];
      console.log(projectId);
      initProject(projectId);
    } else {
      initNotFound();
    }
  } else if (pathname === '/contact') {
    initContact();
  } else if (pathname === '/about') {
    initAbout();
  } else {
    initNotFound();
  }

  handleLinkStyle(links);
}


function navigateTo(pathname) {
  // console.log('navigateTo');
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
  console.log(
    `estos son los links`, links
  );
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathname = link.getAttribute('link-path');
      navigateTo(pathname);
    });
  });
}

export { initializeApp, menuLinker, Linker, navigateTo };
