/* const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
let interval = null;
let isAnimating = false;

document.querySelector('h1').addEventListener('mouseenter', (event) => {
  if (!isAnimating) {
    isAnimating = true;
    let iteration = 0;
    let currentValue = event.target.dataset.value;

    interval = setInterval(() => {
      const newText = Array.from(currentValue)
        .map((letter, index) => {
          if (index < iteration && letter !== ' ') {
            return event.target.dataset.value[index];
          } else if (letter === ' ') {
            return ' ';
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      event.target.innerText = newText;
      iteration += 1 / 3;

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
        isAnimating = false;
      }
    }, 35);
  }
});

document.querySelector('h1').addEventListener('mouseleave', (event) => {
  if (isAnimating) {
    return;
  }

  clearInterval(interval);
  event.target.innerText = event.target.dataset.value;
});
 */
export const handlePageStyles = (links, pathname) => {
  // console.log(pathname);
  const navLogo = document.querySelector('.nav-logo');
  const body = document.querySelector('body');

  if (pathname === '/home' || pathname === '/') {
    navLogo.classList.add('active-home');
    // body.classList.remove('camel');
  } else {
    navLogo.classList.remove('active-home');
  }

  links.forEach((link) => {
    // console.log('link de la lista: ', link);
    if (link.getAttribute('href') === pathname && pathname !== '/home' && pathname !== '') {
      link.classList.add('active-link');
      // body.classList.add('camel');
    } else {
      link.classList.remove('active-link');
    }
  });
};
/* export const handleNavColor = (links, pathname) => {
  console.log(pathname);
  const navLogo = document.querySelector('.nav-logo');

  if (pathname === '/home' || pathname === '/') {
    navLogo.classList.add('active-home');
  } else {
    navLogo.classList.remove('active-home');
  }

  links.forEach((link) => {
    console.log('link de la lista: ', link);
    if (link.getAttribute('href') === pathname && pathname !== '/home' && pathname !== '') {
      link.style.color = '#7AC3B2';
      link.style.transform = 'scale(.99)';
    } else {
      link.style.color = '#fff';
      link.style.transform = 'scale(1)';
    }
  });
}; */
