import { projectsData as data } from '../../utils/projectsData';
import './card.css';

export const cardTemplate = (prop) => {
  const project = data.find((item) => item.id == prop.id);

  if (project) {
    return `
    <div id="${project.name}" class="clipping">
      <h1 class="">${project.name}</h1>
    </div>
  `;
  } else {
    return `<div class="error-message">Proyecto no encontrado</div>`;
  }
};
