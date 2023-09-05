import { projectsData as data } from '../../utils/projectsData';
import './card.css';

export const cardTemplate = (prop) => {
  const project = data.find((item) => item.id == prop.id);

  if (project) {
    return `
      <div id="${project.name}" class="clipping">
        <div class="preview">
          <img src="${project.cover}" alt="${project.name} desktop">
        </div>
        <h1 class="">${project.name}</h1>
        <div class="preview">
          ${project.mobile === '' ? '' : `<img src="${project.mobile}" alt="${project.name} mobile">`}
        </div>
      </div>
  `;
  } else {
    return `<div class="error-message">Proyecto no encontrado</div>`;
  }
};
