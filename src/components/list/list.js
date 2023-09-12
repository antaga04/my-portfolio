import './list.css';

export const listTemplate = (propList) => {
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
        <h2>Projects List</h2>
        <ul class="project-list">
          <li id="all" class="name ${status}"><a href="/projects" link-path="/projects">All Projects</a></li>
          ${propList
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
      <p><u>Click a tag to read more.</u></p>
    </div>
  `;
};
