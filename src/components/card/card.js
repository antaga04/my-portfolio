import { projectsData as data } from '../../utils/projectsData';
import './card.css';

export const initProject = (prop) => {
  const project = data.find((item) => item.id == prop.id);

  if (project) {
    return `
      <div id="${project.name}" class="clipping">
        <div class="preview desktop ticket">
          <img src="${project.desktop === '' ? project.cover : project.desktop}" alt="${
      project.name
    } desktop">
        </div>
        <div class="preview mobile">
          ${
            project.mobile === ''
              ? ''
              : `<img src="${project.mobile}" alt="${project.name} mobile">`
          }
        </div>
        
        <h1 class="">${project.name}</h1>
        <p class="description">${project.info}</p>
        <div class="others">
          <div class="released">
            <p class="pill-wrapper">${project.status}</p>
            <p class="pill-wrapper">${project.date}</p>
          </div>
          <div class="card-techs">
            ${project.techs.map((tech) => `<p class="pill-wrapper">${tech}</p>`).join('')}
          </div>
          <div class="project-links">
            ${
              project.github === ''
                ? ''
                : `<a class="ticket" href="${project.github}" target="_blank"><div class="ticket__title card-links">code <i class="fa-solid fa-code"></i></div></a>`
            }
            ${
              project.demo === ''
                ? ''
                : `<a class="ticket" href="${project.demo}" target="_blank"><div class="ticket__title card-links">demo <i class="fa-solid fa-share"></i></div></a>`
            }
          </div>
        </div>
      </div>
  `;
  } else {
    return `<div class="error-message">Proyecto no encontrado</div>`;
  }
};
