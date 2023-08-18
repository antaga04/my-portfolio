import './about.css';

export const initAbout = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <section id="about-page">
      <div class="about-wrapper">
        <div class="">
          <h2>The devil is in the details, and so am I.</h2>
          <img class="devil-eyes" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1691657696/Portafolio/devil-eyes_k7ihdm.gif" alt="Devil eyes GIF">
          <div class="circulo"></div>
        </div>
      </div>
    </section>
  `;
}