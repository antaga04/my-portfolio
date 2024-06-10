// secret page
import { loadTranslations } from '../../utils/functions';
import './secret.css';

const PAGE_CONTENT = 'secret';

export const initSecret = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const translations = await loadTranslations(lang, PAGE_CONTENT);

  app.innerHTML = '';
  app.innerHTML += `
    <div class="secret__wrapper">
      <section class="secret-page animateChildren">
        <h1>${translations.h1}</h1>
        <p>${translations.p}</p>
        <div class="how-to-list">
          <article>
            <h3>${translations.skill_1.title}</h3>
            <ol>
              <li>${translations.skill_1.li_1}</li>
              <li>${translations.skill_1.li_2}</li>
              <li>${translations.skill_1.li_3}</li>
              <li>${translations.skill_1.li_4}</li>
              <li>${translations.skill_1.li_5}</li>
            </ol>
          </article>

          <article>
            <h3>${translations.skill_2.title}</h3>
            <ol>
              <li>${translations.skill_2.li_1}</li>
              <li>${translations.skill_2.li_2}</li>
              <li>${translations.skill_2.li_3}</li>
              <li>${translations.skill_2.li_4}</li>
              <li>${translations.skill_2.li_5}</li>
            </ol>
          </article>

          <article>
            <h3>${translations.skill_2.title}</h3>
            <ol>
              <li>${translations.skill_3.li_1}</li>
              <li>${translations.skill_3.li_2}</li>
              <li>${translations.skill_3.li_3}</li>
              <li>${translations.skill_3.li_4}</li>
              <li>${translations.skill_3.li_5}</li>
            </ol>
          </article>
        </div>
      </section>
    </div>
  `;
};
