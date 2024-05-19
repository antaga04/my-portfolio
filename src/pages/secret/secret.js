import { loadTranslations } from '../../utils/functions';
import './secret.css';

const initSecret = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang);

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
