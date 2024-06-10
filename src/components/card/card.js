import { Linker } from '../../router/router';
import { loadTranslations } from '../../utils/functions';
import { projectsData as data } from '../../utils/projectsData';
import { listTemplate } from '../list/list';
import './card.css';

const PAGE_NAME = 'projects';

export const initProject = async (prop) => {
  const project = data.find((item) => item.id == prop);
  const app = document.querySelector('#app');
  let side = '';
  const lang = localStorage.getItem('language');
  const translations = await loadTranslations(lang, PAGE_NAME);
  const projectInfo = translations.info[`info_${prop}`];
  
  if (project) {
    side = `
      <div id="${project.name}" class="clipping">
        <div class="preview desktop ticket">
          <img src="${project.desktop === '' ? project.cover : project.desktop}" alt="${translations.desktop_img_alt} ${project.name}">
        </div>
        <div class="preview mobile">
          ${
            project.mobile === ''
              ? ''
              : `<img src="${project.mobile}" alt="${translations.mobile_img_alt} ${project.name}">`
          }
        </div>
        
        <h1 class="">${project.name}</h1>
        <div class="description">${projectInfo}</div>
        <div class="others">
          <div class="released">
            <p class="pill-wrapper">${translations.status[`${project.status}`]}</p>
            <p class="pill-wrapper">${project.date}</p>
          </div>
          <div class="card-techs">
            ${project.techs.map((tech) => `<p class="pill-wrapper">${tech}</p>`).join('')}
          </div>
          <div class="project-links">
            ${
              project.github === ''
                ? ''
                : `<a class="ticket" href="${project.github}" target="_blank"><div class="ticket__title card-links">${translations.code} <i class="fa-solid fa-code"></i></div></a>`
            }
            ${
              project.demo === ''
                ? ''
                : `<a class="ticket" href="${project.demo}" target="_blank"><div class="ticket__title card-links">${translations.demo} <i class="fa-solid fa-share"></i></div></a>`
            }
          </div>
        </div>
      </div>
  `;
  } else {
    side = `<div class="error-message">${translations.project_not_found}</div>`;
  }

  app.innerHTML = '';
  app.innerHTML += `
    <div class="page__wrapper">
      <section class="page">
        ${await listTemplate(data)}
        <article id="right-side" class="projects__wrapper right-side">
          ${side}
        </aritcle>
      </section>
    </div>
  `;

  Linker();
};
