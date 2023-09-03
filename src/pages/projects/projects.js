import { cardTemplate } from '../../components/card/card';
import { gridTemplate } from '../../components/grid/grid';
import { listTemplate } from '../../components/list/list';
import { projectsData as data } from '../../utils/projectsData';
import './projects.css';

export const initProjects = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div class="page__wrapper">
      <section class="page">
        ${listTemplate(data)}
        ${gridTemplate(data)}
      </section>
    </div>
  `;
};
