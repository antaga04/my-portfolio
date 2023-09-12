import './secret.css';

const initSecret = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div class="secret__wrapper">
      <article class="secret-page flex-center">
        <p>I see you have discovered <mark>the secret route</mark></p>
        <br>
        <p>This section is <u>currently on development</u>. But <em>stay tunned</em> to see the end result!</p>
      </aritcle>
    </div>
  `;
};

export default initSecret;
