import { initNotFound } from '../pages/404/404';
import { initHome } from '../pages/home/home';
import { initProjects } from '../pages/projects/projects';

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

    if (ev.target.href != window.location.href) {
      window.history.pushState({}, '', ev.target.href);
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
    default:
      initNotFound();
  }
};

window.onpopstate = handleLocation;

handleLocation();
