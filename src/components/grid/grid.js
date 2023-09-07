import './grid.css';

export const gridTemplate = (propList) => {
  return `
    <ul class="projects__list">
      ${propList
        .map((prop) => {
          return `
          <li style="display: flex; flex-direction: column; width: calc(100%/2.1);">
            <div class="preview-box card" style="margin: .5em 0 !important; border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
              <div class="box__header">
                <h2>${prop.name}</h2>
                <div class="read-more">
                  ${prop.github === "" && prop.demo === "" ? "" : `<button class="more-btn"><div class="more">Read more</div></button>`}
                  <img class="arrow" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1692125714/Portafolio/arrow_xfcrdc.svg" alt="Arrow">
                </div>
              </div>
            
              <div class="project__img">
                <img src="${prop.cover}" alt="${prop.name} preview image" loading="lazy">
              </div>
              
              <div class="techs">
              ${prop.techs.map((tech) => `<p>${tech}</p>`).join('')}
              </div>
              </div>

              
            <div class="preview-box" style="border-top-left-radius: 0; border-top-right-radius: 0;">
              <div class="project-links">
                ${prop.github === "" && prop.demo === "" ? `<span class="pill-wrapper">${prop.status}</span>` : ""}
                ${prop.github === "" ? "" : `<a class="ticket" href="${prop.github}" target="_blank"><div class="ticket__title">code <i class="fa-solid fa-code"></i></div></a>`}
                ${prop.demo === "" ? "" : `<a class="ticket" href="${prop.demo}" target="_blank"><div class="ticket__title">demo <i class="fa-solid fa-share"></i></div></a>`}
              </div>
            </div>
          </li>
        `;
        })
        .join('')}
    </ul>
  `;
};