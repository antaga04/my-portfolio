import "./404.css"

export const initNotFound = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML +=  `
    <section id="error-page">
      <div class="lost-container">
        <div>
          <h1>Error 04</h1>
          <h2>There's NOTHING here</h2>
        </div>
        
        <p>We are sorry you could not find what you were looking for.<br>
          This page is missing or you assembled the link incorrectly.</p>
        <a id="lost-btn" class="error-btn" href="/home">
          <span>Back to home</span>
          <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692192039/Portafolio/brush-arrow_uhhyvx.svg" alt="Brush arrow">
        </a>
      </div>
      <img class="not-found-gif" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692190322/Portafolio/looking-red_p8ws0h.svg" alt="Error 404 image">
    </section>
  `
}