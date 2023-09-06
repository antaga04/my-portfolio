import './list.css';

export const listTemplate = (propList) => {
  return `
    <div id="list__container" class="left-side">
      <div>
        <h2>Projects List</h2>
        <ul class="project-list">
          <li id="all" class="name activeTag">All Projects</li>
          ${propList.map((prop) => `<li id="${prop.id}" class="name">${prop.name}</li>`).join('')}
        </ul>
      </div>
      <p><u>Click a tag to see more of a project.</u></p>
    </div>
  `;
};
