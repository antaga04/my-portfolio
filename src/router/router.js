import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handleLinkStyle } from '../utils/functions';

const links = document.querySelectorAll('.nav-link');

export const handleLocation = (pathname) => {
  handleLinkStyle(links, pathname);
  switch (pathname) {
    case '/':
    case '/home':
      initHome();
      break;
    case '/projects':
      initProjects();
      break;
    case '/contact':
      initContact();
      break;
    case '/about':
      initAbout();
      break;
    default:
      initNotFound();
  }
};

export const Linker = (links) => {
  links.forEach((link) => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      console.log(ev.target);

      const targetHref = ev.target.getAttribute('href');
      const currentHref = window.location.href;

      if (targetHref !== currentHref) {
        window.history.pushState({}, '', targetHref);
        handleLocation(targetHref);
      }
    });
  });
  window.addEventListener('popstate', () => {
    const pathname = window.location.pathname;
    handleLocation(pathname);
  });
};

function initializeApp() {
  const pathname = window.location.pathname;
  handleLocation(pathname);
}

initializeApp();
Linker(links);
