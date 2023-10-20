import './sideBar.css';

const sideBar = () => {
  return `
    <div class="sidebar">
      <div class="interests">
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
              <h4>Color Palette Generator</h4>
              <p>More often than not, we developers find ourselfs in need of insteresting colors for our projests. <em>Huemint</em> is just perfect for that.</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://shots.so/" target="_blank">
              <h4>Amazing Mockups</h4>
              <p>For developers in search of impressive mockups, <em>Shots</em> is the ultimate choice.</p>
            </a>
          </li>
          <li>
            <a class="ticket" href="https://github.com/Evavic44/portfolio-ideas/blob/main/README.md" target="_blank">
              <div class="ticket__title">
                50% OFF Best Websites for inspiration
              </div>
            </a>
          </li>
          <li class="sidebar-item separation-null">
            <a href="https://animista.net/" target="_blank">
              <h4>Animations Library</h4>
              <p>Elevate user experiences with <em>Animista</em>, a CSS animation library for developers.</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://easings.net/en" target="_blank">
              <h4>Easing functions Sheet</h4>
              <p>Achieve seamless animations with ease using <em>Easings</em>, your go-to resource for easing functions.</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://cubic-bezier.com/" target="_blank">
              <h4>Cubic-bezier Easing</h4>
              <p>And if you want to test cubic-bezier transformation, <em>Cubic-Bezier</em> makes it effortless.</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <h4>Special Mention</h4>
            <div class="space-btwn">
              <a href="https://midu.dev" target="_blank">
                Midudev
              </a>
              <a href="https://github.com/Corocottax" target="_blank">
                Corocottax
              </a>
            </div>
          </li>
      </ul>
    </div>
  `;
};

export default sideBar;
