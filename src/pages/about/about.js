import './about.css';

export const initAbout = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div>
      About
    </div>
  `;
}