import { loadTranslations } from '../../utils/functions';
import './stack.css';
import { mainStack, sideStack } from '../../utils/stack';

const PAGE_NAME = 'home';

export const stack = async () => {
    const lang = localStorage.getItem('language');
    const translations = await loadTranslations(lang, PAGE_NAME);

    return `
    <section class="tech_stack">
      <div>
        <h2 class="tech_stack__title">${translations.stacks.main}</h2>
        <div class="tech_stack__container">
          ${stackList(mainStack)}
        </div>
      </div>
      <div>
        <h2 class="tech_stack__title">${translations.stacks.other}</h2>
        <div class="tech_stack__container">
        ${stackList(sideStack)}
        </div>
      </div>
    </section>
  `;
};

const stackList = (list) => {
    return `
  ${list
      .map(
          (item) => `
          <div class="tech_stack__item">
            <img src="${item.svg}" alt="${item.name}" />
            <p id="tech_stack__item__title">${item.name}</p>
          </div>
        `
      )
      .join('')}
        `;
};
