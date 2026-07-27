import { loadTranslations } from '../../utils/functions';
import './stack.css';
import { legacyStack, mainStack, sideStack } from '../../utils/stack';

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
      <div>
        <h2 class="tech_stack__title">${translations.stacks.known}</h2>
        <div class="tech_stack__container">
        ${stackList(legacyStack)}
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
            ${stackIcon(item)}
            <p id="tech_stack__item__title">${item.name}</p>
          </div>
        `
      )
      .join('')}
        `;
};

// Items with a `dark` variant render both icons; stack.css shows the one that
// matches the theme class on <html>, so the swap follows the theme toggle.
const stackIcon = (item) => {
    if (!item.dark) {
        return `<img src="${item.svg}" alt="${item.name}" />`;
    }

    return `
            <img class="tech_stack__icon--light" src="${item.svg}" alt="${item.name}" />
            <img class="tech_stack__icon--dark" src="${item.dark}" alt="${item.name}" />`;
};
