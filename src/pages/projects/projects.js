import './projects.css';

export const initProjects = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <section id="projects-page">
      <div class="wrapper">
        <ul class="carousel">
          <li class="card"></li>
          <li class="card"></li>
          <li class="card"></li>
          <li class="card"></li>
        </ul>
      </div>
    </section>
  `;
};
