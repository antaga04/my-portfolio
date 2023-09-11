import { Linker } from '../../router/router';
import './list.css';

export const listTemplate = (propList) => {
  return `
    <div id="list__container" class="left-side">
      <div>
        <h2>Projects List</h2>
        <ul class="project-list">
          <li id="all" class="name activeTag"><a href="/projects" link-path="/projects">All Projects</a></li>
          ${propList.map((prop) => `<li id="${prop.id}" class="name"><a href="/projects/${prop.id}" link-path="/projects/${prop.id}">${prop.name}</a></li>`).join('')}
        </ul>
      </div>
      <p><u>Click a tag to read more.</u></p>
    </div>
  `;
};
