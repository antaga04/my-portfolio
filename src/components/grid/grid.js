import './grid.css';

export const gridTemplate = (propList) => {
  return `
    <ul class="projects__list">
      ${propList
        .map((prop) => {
          return `
          <li class="preview-box">
            <div class="box__header">
              <h2>${prop.name}</h2>
            </div>
          
            <div class="project__img">
              <img src="${prop.cover}" alt="${prop.name} preview image" loading="lazy">
            </div>

            <div class="techs">
              ${prop.techs.map((tech) => `<p>${tech}</p>`).join('')}
            </div>

            <div class="project-links">
              ${prop.github === "" && prop.demo === "" ? `<span class="pill-wrapper">${prop.status}</span>` : ""}
              ${prop.github === "" ? "" : `<a class="ticket" href="${prop.github}" target="_blank"><div class="ticket__title">code <i class="fa-solid fa-code"></i></div></a>`}
              ${prop.demo === "" ? "" : `<a class="ticket" href="${prop.demo}" target="_blank"><div class="ticket__title">demo <i class="fa-solid fa-share"></i></div></a>`}
            </div>
          </li>
        `;
        })
        .join('')}
    </ul>
  `;
};

/* ${prop.github === "" && prop.demo === "" ? "" : `<button class="ticket more-btn"><div class="ticket__title more">see more</div></button>`} */
