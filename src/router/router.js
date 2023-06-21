import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';
import { initContact } from '../pages/contact/contact';
import { initAbout } from '../pages/about/about'

const links = document.querySelectorAll('.nav-link');
console.log(links);

links.forEach((link) => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    const targetHref = ev.target.getAttribute('href');
    const currentHref = window.location.href;

    if (targetHref !== currentHref) {
      window.history.pushState({}, '', targetHref);
      handleLocation();
    }
  });
});

const handleLocation = () => {
  const pathname = window.location.pathname;

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
