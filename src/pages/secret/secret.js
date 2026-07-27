// secret page
import { Linker } from '../../router/router';
import { loadTranslations, scrollToTop } from '../../utils/functions';
import './secret.css';

const PAGE_CONTENT = 'secret';

/* titles come translated as "1. How to ..." — split the numeral so it can be
   rendered as the file index instead of being part of the heading */
const splitTitle = (title, position) => {
  const match = title.match(/^\s*(\d+)\s*[.)-]?\s*(.*)$/);
  const index = match ? match[1] : String(position);
  return { index: index.padStart(2, '0'), text: match ? match[2] : title };
};

export const initSecret = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const t = await loadTranslations(lang, PAGE_CONTENT);

  app.innerHTML = '';
  app.innerHTML += `
    <div class="secret__wrapper animateChildren">
      <header class="secret-hero">
        <span class="secret-badge">
          <span class="secret-badge__dot"></span>${t.badge}
        </span>
        <h1 class="secret-title">${t.h1}</h1>
        <p class="secret-lede">${t.p}</p>
        <ul class="secret-meta">
          <li>${t.meta.file}</li>
          <li>${t.meta.clearance}</li>
          <li>${t.meta.usefulness}</li>
        </ul>
        <span class="secret-stamp" aria-hidden="true">${t.stamp}</span>
      </header>

      <div class="how-to-list">
        ${t.skills
          .map((skill, i) => {
            const { index, text } = splitTitle(skill.title, i + 1);
            return `
              <article class="secret-card">
                <span class="secret-card__ghost" aria-hidden="true">${index}</span>
                <span class="secret-card__tag">${t.card_tag} ${index}</span>
                <h3 class="secret-card__title">${text}</h3>
                <ol class="secret-steps">
                  ${skill.items.map((item) => `<li>${item}</li>`).join('')}
                </ol>
                <div class="secret-meter">
                  <span class="secret-meter__label">${t.meter_label}</span>
                  <span class="secret-meter__track"><span class="secret-meter__fill"></span></span>
                  <span class="secret-meter__value">0%</span>
                </div>
              </article>
            `;
          })
          .join('')}
      </div>

      <footer class="secret-outro">
        <p class="secret-outro__text">${t.outro}</p>
        <a class="secret-back" href="/" link-path="/" aria-label="${t.back}">
          ${t.back}
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </footer>
    </div>
  `;

  Linker();
  scrollToTop();
};
