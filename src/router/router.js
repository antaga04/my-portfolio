import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about';
import { handleNavColor } from '../utils/animations';

const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    const targetHref = ev.target.getAttribute('href');
    const currentHref = window.location.href;

    if (targetHref !== currentHref) {
      window.history.pushState({}, '', targetHref);
      handleLocation();
    }

    /* links.forEach((otherLink) => {
      if (isHomeOrRoot(otherLink)) {
        otherLink.style.filter = 'grayscale(100%) brightness(100%)';
      }

      if (otherLink === link) {
        otherLink.style.color = '#7AC3B2';
        otherLink.style.filter = '';
      } else {
        otherLink.style.color = '';
      }
    }); */
  });
});

const isHomeOrRoot = (href) => {
  return href === '/' || href === '/home';
};

const handleLocation = () => {
  const pathname = window.location.pathname;
  handleNavColor(links, pathname);
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

window.onpopstate = handleLocation;

handleLocation();
