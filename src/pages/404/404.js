import { Linker } from '../../router/router';
import { loadTranslations } from '../../utils/functions';
import './404.css';

const PAGE_NAME = 'error404';

export const initNotFound = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const translations = await loadTranslations(lang, PAGE_NAME);

  app.innerHTML = '';
  app.innerHTML += `
    <section id="error-page">
      <div class="lost-container">
        <div>
          <h1>${translations.h1}</h1>
          <h2>${translations.h2}</h2>
        </div>
        
        <p>${translations.message}</p>
        <a id="lost-btn" class="error-btn" href="/" link-path="/" aria-label="Home">
          <p>${translations.back_home_btn}</p>
          <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692192039/Portafolio/brush-arrow_uhhyvx.svg" alt="${translations.alt_img_arrow}">
        </a>
      </div>
      <img class="not-found-gif" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692190322/Portafolio/looking-red_p8ws0h.svg" alt="${translations.alt_img_gif}">
    </section>
  `;

  Linker();
};
