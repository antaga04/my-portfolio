import './rubikCube.css';

export const rubikCube = () => {
  return `
    <div class="rubik__container">
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
  `;
};
