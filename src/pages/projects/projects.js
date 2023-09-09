import { initProject } from '../../components/card/card';
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
        <article id="right-side" class="projects__wrapper right-side">
        ${gridTemplate(data)}
        </aritcle>
      </section>
    </div>
  `;

  const tags = document.querySelectorAll('.project-list li');
  const rightSide = document.querySelector('#right-side');

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      tags.forEach((otherTag) => {
        otherTag.classList.remove('activeTag');
      });
      tag.classList.add('activeTag');
      tag.id === 'all'
        ? (rightSide.innerHTML = gridTemplate(data))
        : (rightSide.innerHTML = initProject(tag));
    });
  });
};
