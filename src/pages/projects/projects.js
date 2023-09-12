import { gridTemplate } from '../../components/grid/grid';
import { listTemplate } from '../../components/list/list';
import { Linker } from '../../router/router';
import { projectsData as data } from '../../utils/projectsData';
import './projects.css';

export const initProjects = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div class="page__wrapper">
      <section class="page">
        ${listTemplate(data)}
        <article id="right-side" class="projects__wrapper right-side">
        ${gridTemplate(data)}
        </aritcle>
      </section>
    </div>
  `;

  Linker();
};
