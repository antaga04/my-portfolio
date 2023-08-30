import './about.css';
import '../home/home.css'

export const initAbout = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML += `
    <section id="about-page">
      <img class="hero-right-corner"
        src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687363880/Portafolio/s3-1_ym06e1.svg" loading="lazy"
        alt="Decoration-1">
      <img class="hero-left-corner"
        src="https://res.cloudinary.com/drsfru9lj/image/upload/v1687363880/Portafolio/adorno_vnh5je.svg" loading="lazy"
        alt="Decoration-2">
      <section class="about--intro">
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
        <div class="info">
          <h1>Driven by Learning, Defined by Detail</h1>
          <p style="font-size: 25px;"><strong>
              <sapn class="drop-cap">W</sapn>elcome! I'm a future Full-Stack maestro with a current focus on front-end, and
              a dedicated Software
              Engineering student.
            </strong></p>
          <p>As Leonardo da Vinci put it, <q>Learning never exhausts the mind</q>.</p>
          <p style="margin-top: 1rem">A perfectionist who believes details truly matter. I believe great development is
            about more than just writing
            code. It's about understanding the end user, empathizing with their needs, and anticipating how they'll interact
            with the final product.</p>
        </div>
      </section>

      <section class="xp">
        <div class="xp--header">
          <h2>Experience</h2>
          <div class="controls">
            <button id="left-ctrl">
              <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"
                version="1.1">
                <g class="layer">
                  <title>Layer 1</title>
                  <path
                    d="m24,8l-18.52,0c5.01,-2.91 6.35,-7.31 6.42,-7.55l-1.92,-0.55c-0.08,0.26 -1.95,6.31 -10.05,8.12l0.22,0.98l-0.22,0.98c8.1,1.81 9.97,7.86 10.05,8.12l1.92,-0.55c-0.07,-0.24 -1.41,-4.64 -6.42,-7.55l18.52,0l0,-2z"
                    fill="currentColor" id="svg_1" />
                </g>
              </svg>
            </button>
            <button id="right-ctrl">
              <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"
                version="1.1">
                <g class="layer">
                  <title>Layer 1</title>
                  <path
                    d="m24,8l-18.52,0c5.01,-2.91 6.35,-7.31 6.42,-7.55l-1.92,-0.55c-0.08,0.26 -1.95,6.31 -10.05,8.12l0.22,0.98l-0.22,0.98c8.1,1.81 9.97,7.86 10.05,8.12l1.92,-0.55c-0.07,-0.24 -1.41,-4.64 -6.42,-7.55l18.52,0l0,-2z"
                    fill="currentColor" id="svg_1" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div class="carousel--wrapper">
          <ul class="xp--carousel">
            <li class="xp-card">
              <p>Date 1</p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

            <li class="xp-card">
              <p>Date 2</p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

            <li class="xp-card">
              <p>Date 3</p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

            <li class="xp-card">
              <p>Date 4</p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

            <li class="xp-card">
              <p>Date5 </p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

            <li class="xp-card">
              <p>Date 6</p>
              <h3>Company Name</h3>
              <div class="rol">
                <h4>Rol 1</h4>
                <h4>Rol 2</h4>
              </div>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </li>

          </ul>
        </div>
      </section>

      <section class="about--section">
        <div class="history">
          <h2>HISTORY</h2>
          <div class="story">
            <div id="pc">
              <p>It all started back in high school during an IT class. Our mission? Build a video game using Python.
                I was instantly hooked. Classes were slow, so I decided to learn on my on.
                Before long, I knew what I wanted: a Pac-Man clone. Pretty tough for a beginner but great for learning.
                The end result wasn't perfect, but it was a good experience.</p>
              <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693389831/Portafolio/pacman-preview_dtwoi9.png"
                alt="Pacman Clon">
            </div>
            <div id="um">
              <p>Subsequently, I ventured into college, pursuing a degree in Software Engineering (currently in my third
                year).
                Somewhere along this path, I joined forces with a team called Uvigo MotorSport—an exclusive Galician Formula
                Student
                team—eager to embrace a fresh experience. Yet, my time there was brief, as it didn't ignite my true passion.
              </p>
              <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693164251/Portafolio/559shots_so_etchlb.png"
                alt="Uvigo MotorSport car">
            </div>
            <div id="rc">
              <p>Soon thereafter, a new revelation dawned—I stumbled upon the world of web development. The decision was
                clear:
                I enrolled in a bootcamp to expedite my mastery and secure a tangible certification. Today, I find myself
                midway
                through the program, brimming with anticipation to conclude and embark on a journey into the professional
                realm.</p>
              <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1693390322/Portafolio/848shots_so_cxqe1b.png"
                alt="RockTheCode logo & technologies">
            </div>
          </div>
        </div>
      </section>
    </section>
  `;

  /* slider */
  const carousel = document.querySelector('.xp--carousel');
  const controlers = document.querySelectorAll('.controls button');
  const cardWidth = document.querySelector('.xp-card').offsetWidth;

  let screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  let isDragging = false,
    isScrolling = false,
    startX,
    startScrollLeft;

  controlers.forEach((ctrl) => {
    ctrl.addEventListener('click', () => {
      if (isScrolling) return;
      isScrolling = true;

      let fowardPixels = screenWidth <= 600 ? cardWidth * 1 + 16 : cardWidth * 1.25;

      carousel.scrollLeft += ctrl.id === 'left-ctrl' ? -fowardPixels : fowardPixels;

      setTimeout(() => {
        isScrolling = false;
      }, 450);
    });
  });

  const dragStart = (e) => {
    if (isScrolling) return;
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
  };

  carousel.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', dragStop);
  carousel.addEventListener('mouseleave', dragStop);
};
