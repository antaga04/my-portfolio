import { gridTemplate } from '../../components/grid/grid';
import { listTemplate } from '../../components/list/list';
import { Linker } from '../../router/router';
import { scrollToTop } from '../../utils/functions';
import { projectsData } from '../../utils/projectsData';
import './projects.css';

export const initProjects = async () => {
  const app = document.querySelector('#app');
  
  app.innerHTML = '';
  app.innerHTML += `
    <div class="page__wrapper">
      <section class="page animateChildren">
        ${await listTemplate(projectsData)}
        <article id="right-side" class="projects__wrapper right-side">
          ${await gridTemplate(projectsData)}
        </aritcle>
      </section>
    </div>
  `;

  Linker();
  scrollToTop();
};
