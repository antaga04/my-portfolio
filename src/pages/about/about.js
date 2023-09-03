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
        <h2 class="title--large main-title">Driven by Learning, Defined by Detail</h2>
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

        <div class="terrarium">
          <figure>
            <div class="rubik-container">
              <div class="rubik-cube">
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left"></div>
                <div class="face right"></div>
                <div class="face front"></div>
                <div class="face back"></div>
              </div>
            </div>
          </figure>
          <figcaption>Rotating Rubik Cube</figcaption>
        </div>

        <div class="item-with-image plan span--32 border--botton">
          <h4>How it all started?</h4>
          <div class="multi-column">
            <p>It all started back in high school during an IT class. Our mission? Build a video game using Python. I was
              instantly hooked. Classes were slow, so I went solo, learning the ropes from YouTube tutorials. Before long, I
              knew what I wanted: a Pac-Man clone. Pretty tough for a beginner, but I wasn't fazed. The end result wasn't
              perfect, but it was a great learning experience.</p>
          </div>
        </div>
        <div class="pacman--img">
          <figure>
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501076/Portafolio/Captura_de_pantalla_2023-08-27_a_las_20.57.10_w96haa.png">
          </figure>
        </div>

        <div class="item-with-image plan span--2">
          <h4>My next stage</h4>
          <div class="multi-column">
            <p>Subsequently, I ventured into college, pursuing a degree in Software Engineering (currently in my third
              year). Somewhere along this path, I joined forces with a team called Uvigo MotorSport—an exclusive Galician
              Formula Student team—eager to embrace a fresh experience. Yet, my time there was brief, as it didn't ignite my
              true passion.</p>
          </div>
        </div>
        <div class="umCar--img">
          <figure>
            <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693497167/Portafolio/um-car-min_by9r3h.png">
          </figure>
        </div>

        <div class="item-with-image cssgrid-collection">
          <a class="img--flex cssgrid-collection__image" href="https://www.thepowermba.com/es/bootcamp-fullstack" target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693501843/Portafolio/rockTheCode-certificate_l0wkgx.png">
          </a>
          <div class="cssgrid-collection__content">
            <h4>My web developer path</h4>
            <div class="multi-column-3">
              <p>Soon thereafter, a new revelation dawned—I stumbled upon the world of web development. The decision was
                clear: I enrolled in a bootcamp to expedite my mastery and secure a tangible certification. Today, I find
                myself midway through the program, brimming with anticipation to conclude and embark on a journey into the
                professional realm.</p>
            </div>
          </div>

          <a class="cssgrid-collection__image" href="https://www.rockthecode.es/new/" target="_blank">
            <img
              src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693505547/Portafolio/rock-the-code-tech_ufgnqt.png">
          </a>
        </div>

        <div class="sidebar">
          <div>
            <h3 class="title--big">Thing I like</h3>
            <ul>
                <li>Puzzles</li>
                <li>Rubik's cube</li>
                <li>Back To The Future</li>
                <li>The Fresh Prince of Bel-Air</li>
                <li>Work out</li>
                <li>Rock</li>
            </ul>
          </div>

          <ul>
              <li class="sidebar-item with-border">
                <a href="https://huemint.com/" target="_blank">
                  <h5>Color Palette Generator</h5>
                  <p>More often than not, we developers find ourselfs in need of insteresting colors for our projests. <em>Huemint</em> is just perfect for that.</p>
                </a>
              </li>
              <li class="sidebar-item with-border">
                <a href="https://shots.so/" target="_blank">
                  <h5>Amazing Mockups</h5>
                  <p>For developers in search of impressive mockups, <em>Shots</em> is the ultimate choice.</p>
                </a>
              </li>
              <div class="hogwarts">
                <div class="hogwarts__title">
                  50% OFF Best Websites for inspiration
                </div>
              </div>
              <li class="sidebar-item separation-null">
                <a href="https://animista.net/" target="_blank">
                  <h5>CSS Animations Library</h5>
                  <p>Elevate user experiences with <em>Animista</em>, a CSS animation library for developers.</p>
                </a>
              </li>
              <li class="sidebar-item with-border">
                <a href="https://easings.net/en" target="_blank">
                  <h5>Easing functions Sheet</h5>
                  <p>Achieve seamless animations with ease using <em>Easings</em>, your go-to resource for easing functions.</p>
                </a>
              </li>
              <li class="sidebar-item with-border">
                <a href="https://cubic-bezier.com/" target="_blank">
                  <h5>Cubic-bezier Easing</h5>
                  <p>And if you want to test cubic-bezier transformation, <em>Cubic-Bezier</em> makes it effortless.</p>
                </a>
              </li>
          </ul>
        </div>
      </section>
    </div>
  `;
};
