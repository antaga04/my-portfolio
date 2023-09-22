import { rubikCube } from '../../components/rubikCube/rubikCube';
import sideBar from '../../components/sideBar/sideBar';
import { handleAboutStyles } from '../../utils/functions';
import './about.css';

export const initAbout = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <div class="about__wrapper justify-text">
      <section class="about-page">
        <h1>The Daily About</h1>
        <aside>
          <div>
            <div class="issue">Issue #1 </div>
            <div class="date">Tuesday, 05 Sep, 2023</div>
            <div class="edition">Price 5 cents</div>
          </div>
        </aside>
        
        <h2 class="title--heading">Driven by Learning, Defined by Detail</h2>
        <div class="main-text multi-column">
          <p>
            <sapn class="drop-cap">W</sapn>elcome! My name is Adrian, a future Full Stack maestro with a current focus on
            front-end, and a
            dedicated Software Engineering student.
          </p>
          <p>A perfectionist who believes details truly matter. I believe great development is about more than just writing
            code. It's about understanding the end user, empathizing with their needs, and anticipating how they'll interact
            with the final product.</p>
          <p>My ultimate goal is to be a valuable asset to a company, where I can contribute meaningfully to its growth while elevating my skills as a developer</p>
        </div>

        ${rubikCube()}

        <div id="beginning-p" class="paragraph bottom-space column--32 border--botton">
          <h4>The beginning</h4>
          <div class="multi-column">
            <p>It all started back in high school during an IT class. Our mission? Build a video game using Python. I was
              instantly hooked. But classes were slow, so I decided to learn on my own online. Before long, I
              knew what I wanted: a Pac-Man clone. Pretty tough for a beginner, but I was. The end result wasn't
              perfect, but it was a great learning experience.</p>
          </div>
        </div>
        <div class="pacman--img">
          <figure>
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501076/Portafolio/Captura_de_pantalla_2023-08-27_a_las_20.57.10_w96haa.png">
          </figure>
        </div>

        <div id="um-p" class="paragraph bottom-space column--2">
          <h4>Next stage</h4>
          <div class="multi-column">
            <p>Subsequently, I ventured into college, pursuing a degree in Software Engineering (currently in my third
              year). Somewhere along this path, I joined forces with a team called Uvigo MotorSport—an exclusive Galician
              Formula Student team; eager to embrace a fresh experience. Yet, my time there was brief, as it didn't ignite my
              true passion.</p>
          </div>
        </div>
        <div class="umCar--img">
          <figure>
            <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693497167/Portafolio/um-car-min_by9r3h.png">
          </figure>
        </div>

        <div id="rc-p" class="paragraph web-developer">
          <a class="img--flex web-developer__image rc-titulo" href="https://www.thepowermba.com/es/bootcamp-fullstack" target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501843/Portafolio/rockTheCode-certificate_l0wkgx.png">
          </a>
          <div class="web-developer__content rc-text">
            <h4>Web developer path</h4>
            <div class="multi-column-3">
              <p>Soon thereafter, a new revelation dawned; I stumbled upon the world of web development. The decision was
                clear: I enrolled in a bootcamp to expedite my mastery and secure a tangible certification. Today, I find
                myself almost midway through the program, brimming with anticipation to conclude and embark on a journey into the
                professional realm.</p>
            </div>
          </div>

          <a class="web-developer__image rc-tech" href="https://www.rockthecode.es/new/" target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693505547/Portafolio/rock-the-code-tech_ufgnqt.png">
          </a>
        </div>
        
        ${sideBar()}
      </section>
    </div>
  `;

  handleAboutStyles();
};
