import { loadTranslations } from '../../utils/functions';
import './contact.css';

const PAGE_NAME = 'contact';

export const initContact = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang, PAGE_NAME);

  app.innerHTML = '';
  app.innerHTML += `
    <section id="contact-page">
      <div class="contact-wrapper animateChildren">

        <div class="contact__header">
          <div class="contact-question">
            <h1>${data.h1}</h1>
          </div>
          <p class="contact-coment">${data.aim}</p>
        </div>

        <div class="contact-hero-wrapper">
          <img class="contact-hero-corner" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692129677/Portafolio/rayas-honduladas_lx0ifq.svg" loading="lazy" alt="Decoration-1">
        </div>

        <div class="message-container">
          <p class="contact-coment">${data.call_to_action}</p>

        
          <div class="dev-email">
            <img class="arrow" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692125714/Portafolio/arrow_xfcrdc.svg" alt="Arrow">
            <a href="mailto:antaga04@gmail.com">antaga04@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  `;
};
