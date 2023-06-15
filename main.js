import { initNotFound } from './src/pages/404/404';
import { initHome } from './src/pages/home/home';
import { initProjects } from './src/pages/projects/projects';
import './style.css';

document.querySelectorAll('.nav-link').forEach((link) => {
  console.log('hi');
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.href != window.location.href) {
      const linkHref = e.target.href;
      console.log('El link apunta a: ', linkHref);

      history.pushState(null, null, linkHref);

      router();
    }
  });
});

function router() {
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
}

router();
