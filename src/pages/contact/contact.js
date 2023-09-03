import './contact.css';

export const initContact = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <section id="contact-page">
      <div class="contact-wrapper">

        <div class="contact__header">
          <div class="contact-question">
            <h2>
            Ready<br>
            to build<br>
            your <span style="color: #519FAA">vision</span>?</h2>
          </div>
          <p class="contact-coment">
            My aim is to <u>be part of a company</u>
            where I can <u>contribute to the business</u>
            while enhancing my skills as a developer.
          </p>
        </div>

        <div>
          <img class="contact-hero-corner" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692129677/Portafolio/rayas-honduladas_lx0ifq.svg" loading="lazy" alt="Decoration-1">
        </div>

        <div class="message-container">
          <p class="contact-coment">
            <u>Feel free to reach out</u> if you<br>
            wanna collaborate with me,<br>
            or simply have a chat.
          </p>

        
          <div class="dev-email">
            <img class="arrow" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692125714/Portafolio/arrow_xfcrdc.svg" alt="Arrow">
            <a href="mailto:antaga04@gmail.com">antaga04@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  `;
};

/* 
<div>
<img class="contact-hero-corner" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692129677/Portafolio/rayas-honduladas_lx0ifq.svg" loading="lazy" alt="Decoration-1">
</div>
*/
