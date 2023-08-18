import './projects.css';

export const initProjects = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <section id="projects-page">
      <div id="projects-wrapper">
        <div class="">
          <h1>Projects</h1>
        </div>
      </div>
  </section>
  `;
};
