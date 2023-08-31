export const handlePageStyles = (links, pathname) => {
  const navLogo = document.querySelector('.nav-logo');
  const body = document.querySelector('body');

  if (pathname === '/home' || pathname === '/') {
    navLogo.classList.add('active-home');
    // body.classList.remove('camel');
  } else {
    navLogo.classList.remove('active-home');
  }

  links.forEach((link) => {
    if (link.getAttribute('href') === pathname && pathname !== '/home' && pathname !== '') {
      link.classList.add('active-link');
      // body.classList.add('camel');
    } else {
      link.classList.remove('active-link');
    }
  });
};
