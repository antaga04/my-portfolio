import { featuredProjects } from '../../components/featuredProjects/featuredProjects';
import { stack } from '../../components/stack/stack';
import { Linker } from '../../router/router';
import { loadTranslations, scrollToTop } from '../../utils/functions';
import { projectsData } from '../../utils/projectsData';
import './home.css';

const PAGE_NAME = 'home';

export const initHome = async () => {
    const app = document.querySelector('#app');
    const lang = localStorage.getItem('language');
    const data = await loadTranslations(lang, PAGE_NAME);

    app.innerHTML = '';
    app.innerHTML += `
    <div id="home-page-container">
      <section id="hero" class="hero-section">
        <article class="container animateChildren">
          <div class="presentation-block">
            <div class="first-line">
              <div class="hand-container">
                <svg id="hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.28 39.22">
                  <path fill="currentColor" class="b"
                    d="M16.16,39.22c-6.22,0-9.89-4.69-11.25-9.08L.12,14.69c-.21-.69-.15-1.43,.19-2.06,.32-.61,.86-1.06,1.51-1.26,.65-.21,1.35-.15,1.97,.17,.63,.33,1.1,.88,1.31,1.57l2.16,6.99c.05,.16,.18,.28,.34,.3,.07,.01,.27,.02,.41-.18,.07-.1,.1-.22,.08-.36L5.63,6.34c-.26-1.44,.68-2.82,2.09-3.08,.68-.13,1.38,.02,1.95,.42,.58,.4,.97,1,1.09,1.7l2.01,10.99c.02,.11,.09,.2,.18,.25,.05,.03,.15,.07,.28,.03,.15-.05,.26-.2,.26-.35V2.64c0-1.46,1.17-2.64,2.61-2.64s2.61,1.18,2.61,2.64V15.81c0,.34,.22,.64,.54,.73,.23,.07,.46,.03,.64-.1,.18-.12,.3-.33,.32-.55h0l1.01-9.83c.08-.72,.43-1.36,.99-1.81,.54-.43,1.21-.62,1.88-.55,.68,.07,1.31,.4,1.75,.95,.45,.55,.65,1.25,.58,1.95l-1.62,15.77c-.11,1.07,.52,1.76,1.15,2.06,.61,.29,1.53,.33,2.26-.41l2.94-2.98c.56-.57,1.32-.89,2.12-.89h0c.8,0,1.56,.32,2.12,.89,1.18,1.19,1.17,3.13-.02,4.31-1.35,1.36-2.56,2.59-3.66,3.71-7.87,8.01-9.98,10.16-15.57,10.16ZM2.6,12.04c-.18,0-.37,.03-.54,.09-.45,.14-.82,.45-1.05,.87-.24,.45-.28,.96-.13,1.46l4.78,15.45c.62,2,3.21,8.52,10.5,8.52,5.25,0,7.32-2.1,15-9.92,1.1-1.12,2.31-2.35,3.66-3.71,.88-.88,.89-2.31,.02-3.19-.42-.42-.97-.65-1.56-.65h0c-.59,0-1.14,.23-1.56,.65l-2.94,2.98c-.84,.85-2.08,1.08-3.17,.57-1.1-.52-1.72-1.64-1.6-2.86l1.62-15.77c.05-.5-.09-.98-.4-1.37-.31-.38-.74-.61-1.22-.66-.48-.05-.93,.08-1.3,.38-.39,.31-.64,.77-.69,1.27l-1.01,9.83c-.04,.46-.29,.87-.67,1.13-.38,.26-.86,.33-1.31,.2-.65-.18-1.11-.8-1.11-1.49V2.64c0-1.02-.81-1.85-1.82-1.85s-1.82,.83-1.82,1.85v13.67c0,.49-.33,.94-.79,1.09-.31,.11-.65,.08-.93-.09-.29-.17-.5-.46-.56-.79l-2.01-11c-.09-.49-.36-.91-.76-1.19-.4-.28-.88-.38-1.36-.29-.98,.18-1.64,1.15-1.45,2.16l2.47,13.53c.05,.36-.03,.68-.22,.95-.27,.38-.72,.57-1.18,.5-.46-.07-.83-.4-.97-.85l-2.16-6.99c-.15-.48-.48-.87-.92-1.1-.26-.13-.54-.2-.82-.2Z">
                  </path>
                </svg>
              </div>
              <p>${data.presentation}</p>
            </div>
            <div>
              <h1>${data.h1}</h1>
            </div>
            <div>
              <p>${data.basedIn}</p>
            </div>
          </div>

          <div class="line">
            <span class="spinning_border"></span>
            <p class="line_text"><span class="dot"></span>${data.working}</p>
          </div>

          <div class="home__btns">
            <a href="https://www.linkedin.com/in/adrian-anta-gil/" aria-label="Explore my LinkedIn" rel="noopener" target="_blank" class="ticket">
              <div class="ticket__title">
                <span class="mobile_social__icon"><i class="fa-brands fa-linkedin-in"></i></span>
                <span class="home__btn"><p>LinkedIn</p><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
              </div>
            </a>
            <a href="https://github.com/antaga04/" aria-label="Explore my GitHub" rel="noopener" target="_blank" class="ticket">
              <div class="ticket__title">
                <span class="mobile_social__icon"><i class="fa-brands fa-github"></i></span>
                <span class="home__btn"><p>GitHub</p><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
              </div>
            </a>
            <a href="/CV.pdf" aria-label="CV" rel="noopener" target="_blank" class="ticket">
              <div class="ticket__title">
                <span class="mobile_social__icon"><i class="fa-solid fa-file"></i></span>
                <span class="home__btn"><p>CV</p><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
              </div>
            </a>
          </div>
          
        </article>

        <img class="hero-right-corner" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687363880/Portafolio/s3-1_ym06e1.svg" loading="lazy" alt="Decoration-1">
        <img class="hero-left-corner" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687363880/Portafolio/adorno_vnh5je.svg" loading="lazy" alt="Decoration-2">
        <img class="hero-sticker" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687461334/Portafolio/star-decoration_j33wa1.svg" loading="lazy" alt="Sticker">
    
        </section>
        
      ${await featuredProjects(projectsData, 3)}
      ${await stack()}
        
      <section id="marquee-section">
        <a href="/contact">
          <div class="marquee">
            <div class="loop__content">
              <div class="call-to-action">
                <p>${data.get_in_touch}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.just_say_hi}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.work_together}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.contact_me}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
            </div>

            <div class="loop__content">
            <div class="call-to-action">
              <p>${data.get_in_touch}</p>
              <div class="action-separator">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                  loading="lazy" alt="Separation line"></div>
            </div>
            <div class="call-to-action">
              <p>${data.just_say_hi}</p>
              <div class="action-separator">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                  loading="lazy" alt="Separation line"></div>
            </div>
            <div class="call-to-action">
              <p>${data.work_together}</p>
              <div class="action-separator">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                  loading="lazy" alt="Separation line"></div>
            </div>
            <div class="call-to-action">
              <p>${data.contact_me}</p>
              <div class="action-separator">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                  loading="lazy" alt="Separation line"></div>
            </div>
          </div>

            <div class="loop__content">
              <div class="call-to-action">
                <p>${data.get_in_touch}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.just_say_hi}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.work_together}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
              <div class="call-to-action">
                <p>${data.contact_me}</p>
                <div class="action-separator">
                  <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687451387/Portafolio/tl_oj2udo.webp"
                    loading="lazy" alt="Separation line"></div>
              </div>
            </div>
          </div>
        </a>
      </section>

      <div class="qualities__wrapper">
        <section class="qualities">
          <article class="flex-center">
            <div class="container">
              <h2>${data.quality_title}</h2>
              <p>${data.quality_p}</p>
            </div>

            <div class="qualities-list">
              <div class="card-block flex-center">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687461334/Portafolio/devil_js9kvz.webp" alt="Devil card">
                <p>${data.quality_1}</p>
              </div>
              <div class="card-block flex-center">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687461334/Portafolio/stength_ldbxsi.webp" alt="Strength card">
                <p>${data.quality_2}</p>
              </div>
              <div class="card-block flex-center">
                <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687461334/Portafolio/star_feyntg.webp" alt="Star card">
                <p>${data.quality_3}</p>
              </div>
            </div>
          </article>
        </section>
      </div>

    </div>
  `;
    scrollToTop();
    Linker();
};
