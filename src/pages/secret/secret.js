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
          ${translations.skills
            .map(
              (skill) => `
              <article>
                <h3>${skill.title}</h3>
                <ol>
                  ${skill.items.map((item) => `<li>${item}</li>`).join('')}
                </ol>
              </article>
            `
            )
            .join('')}
        </div>
      </section>
    </div>
  `;
};
