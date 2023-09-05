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
              ${prop.github === "" && prop.demo === "" ? `<span>${prop.status}</span>` : ""}
              ${prop.github === "" ? "" : `<a href="${prop.github}" target="_blank">code <i class="fa-solid fa-code"></i></a>`}
              ${prop.demo === "" ? "" : `<a href="${prop.demo}" target="_blank">demo <i class="fa-solid fa-share"></i></a>`}
            </div>
          </li>
        `;
        })
        .join('')}
    </ul>
  `;
};

/* 
<li class="preview-box">
<div class="box__header">
<h2>${prop.name}</h2>
<div>
<p>${prop.status}</p>
<p>${prop.date}</p>
</div>
</div>

<div class="project__img">
<img src="${prop.cover}" alt="${prop.name} preview image" loading="lazy">
</div>

<div class="project-links">
<div class="techs">
${prop.techs.map((tech) => `<p>${tech}</p>`).join('')}
</div>

<div>
<a href="${prop.github}">code</a>
<a href="${prop.demo}">demo</a>
</div>
</div>

<p>${prop.info}</p>
</li>
*/