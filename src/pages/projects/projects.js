import { gridTemplate } from '../../components/grid/grid';
import { listTemplate } from '../../components/list/list';
import { Linker } from '../../router/router';
import { loadTranslations } from '../../utils/functions';
import { projectsData } from '../../utils/projectsData';
import './projects.css';

const PAGE_NAME = 'projects';

export const initProjects = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang, PAGE_NAME);

  app.innerHTML = '';
  app.innerHTML += `
    <div class="page__wrapper">
      <section class="page animateChildren">
        ${listTemplate(projectsData, data)}
        <article id="right-side" class="projects__wrapper right-side">
          ${gridTemplate(projectsData, data)}
        </aritcle>
      </section>
    </div>
  `;

  Linker();
};
