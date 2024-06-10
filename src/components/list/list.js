import { loadTranslations } from '../../utils/functions';
import './list.css';

const DEPLOYED_PROJECT_STATUS = 'deployed';
const PAGE_NAME = 'projects';

export const listTemplate = async (propList) => {
  const deployedProjects = propList.filter((prop) => prop.status === DEPLOYED_PROJECT_STATUS);
  const lang = localStorage.getItem('language');
  const translations = await loadTranslations(lang, PAGE_NAME);

  const pathname = window.location.pathname;
  let status = '';
  let projectId = '';
  if (pathname.includes('/projects/')) {
    const parts = pathname.split('/projects/');
    if (parts.length === 2) {
      projectId = parts[1];
    }
  } else if (pathname === '/projects') {
    status = 'activeTag';
  }

  return `
    <div id="list__container" class="left-side">
      <div>
        <h1>${translations.title}</h1>
        <ul class="project-list">
          <li id="all" class="name ${status}"><a href="/projects" link-path="/projects">${translations.all_projects_tag}</a></li>
          ${deployedProjects
            .map(
              (prop) =>
                `<li id="${prop.id}" class="name ${
                  prop.id === projectId ? 'activeTag' : ''
                }"> <a href="/projects/${prop.id}" link-path="/projects/${prop.id}">${
                  prop.name
                }</a></li>`
            )
            .join('')}
        </ul>
      </div>
      <p><u>${translations.instruction}</u></p>
    </div>
  `;
};
