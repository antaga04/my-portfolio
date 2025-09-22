import { loadTranslations } from '../../utils/functions';
import './featuredProjects.css';

const DEPLOYED_PROJECT_STATUS = 'deployed';
const PAGE_NAME = 'home';

export const featuredProjects = async (propList, limit = 3) => {
    const deployedProjects = propList
        .filter((prop) => prop.status === DEPLOYED_PROJECT_STATUS)
        .slice(0, limit);

    const lang = localStorage.getItem('language');
    const translations = await loadTranslations(lang, PAGE_NAME);

    return `
    <section class="featured_section">
      <div class="featured_projects__header">
        <h2>${translations.featured_projects.title}</h2>
        <a class="all_projects" href="/projects" link-path="/projects">${translations.featured_projects.link} <span>→</span></a>
      </div>
        
      <ul class="featured_list">
        ${deployedProjects
            .map((prop) => {
                return `
            <li class="featured_item">
              <a href="/projects/${prop.id}" link-path="/projects/${prop.id}">
                <img src="${prop.cover}" alt="${prop.name} preview image" loading="lazy">
                <h2>${prop.name}</h2>
              </a>
            </li>
            `;
            })
            .join('')}
      </ul>
        
    </section>
  `;
};
