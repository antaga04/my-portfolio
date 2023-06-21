import './contact.css';

export const initContact = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div>
      GET IN TOUCH
    </div>
  `;
}