import { rubikCube } from '../../components/rubikCube/rubikCube';
import sideBar from '../../components/sideBar/sideBar';
import { handleAboutStyles, loadTranslations } from '../../utils/functions';
import './about.css';

const PAGE_NAME = 'about';
const COMMON = 'common';

export const initAbout = async () => {
  const app = document.querySelector('#app');
  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang, PAGE_NAME);
  const dateData = await loadTranslations(lang, COMMON);

  const date = new Date();

  const dayName = dateData.dayNames[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const monthName = dateData.monthNames[date.getMonth()];
  const year = date.getFullYear();

  const currentDate = `${dayName}, ${day} ${monthName}, ${year}`;

  app.innerHTML = '';
  app.innerHTML += `
    <div class="about__wrapper justify-text fadeInAnimation">
      <section class="about-page">
        <h1>${data.h1}</h1>
        <aside>
          <div>
            <div class="issue">${data.issue}</div>
            <div class="date">${currentDate}</div>
            <div class="edition">${data.price}</div>
          </div>
        </aside>
        
        <h2 class="title--heading">${data.h2}</h2>
        <div class="main-text multi-column">
          <p>${data.p_intro_1}</p>
          <p>${data.p_intro_2}</p>
          <p>${data.p_intro_3}</p>
        </div>

        ${rubikCube(data.cube_caption)}

        <div id="beginning-p" class="paragraph bottom-space column--32 border--botton">
          <h3>${data.h3_1}</h3>
          <div class="multi-column">
            <p>${data.p1}</p>
          </div>
        </div>
        <div class="pacman--img">
          <figure>
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501076/Portafolio/Captura_de_pantalla_2023-08-27_a_las_20.57.10_w96haa.png"
              alt="${data.alt_img_pacman}">
          </figure>
        </div>

        <div id="um-p" class="paragraph bottom-space column--2">
          <h3>${data.h3_2}</h3>
          <div class="multi-column">
            <p>${data.p2}</p>
          </div>
        </div>
        <div class="umCar--img">
          <figure>
            <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693497167/Portafolio/um-car-min_by9r3h.png"
            alt="${data.alt_img_umc}">
          </figure>
        </div>

        <div id="rc-p" class="paragraph web-developer">
          <a class="img--flex web-developer__image rc-titulo" href="https://www.thepowermba.com/es/bootcamp-fullstack" arial-label="ThePower business school" target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501843/Portafolio/rockTheCode-certificate_l0wkgx.png"
              alt="${data.alt_img_certificate}">
          </a>
          <div class="web-developer__content rc-text">
            <h3>${data.h3_3}</h3>
            <div class="multi-column-3">
              <p>${data.p3}</p>
            </div>
          </div>

          <a class="web-developer__image rc-tech" href="https://www.rockthecode.es/new/" arial-label="RockTheCode website"target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693505547/Portafolio/rock-the-code-tech_ufgnqt.png"
              alt="${data.alt_img_rtc}">
          </a>
        </div>
        
        ${sideBar(data.aside)}
      </section>
    </div>
  `;

  handleAboutStyles();
};
