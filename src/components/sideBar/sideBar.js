import './sideBar.css';

const sideBar = (aside) => {
  return `
    <div class="sidebar">
      <div class="interests">
        <h3 class="title--big">${aside.aside_h3_1}</h3>
        <ul>
        ${Object.values(aside.aside_p_1)
          .map((p) => {
            return `<li>${p}</li>`;
          })
          .join('')}
        </ul>
      </div>

      <ul>
          <li class="sidebar-item with-border">
            <a href="https://huemint.com/" target="_blank">
              <h4>${aside.aside_h4_2}</h4>
              <p>${aside.aside_p_2}</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://shots.so/" target="_blank">
              <h4>${aside.aside_h4_3}</h4>
              <p>${aside.aside_p_3}</p>
            </a>
          </li>
          <li>
            <a class="ticket" href="https://github.com/Evavic44/portfolio-ideas/blob/main/README.md" target="_blank">
              <div class="ticket__title">${aside.inspiration_ticket}</div>
            </a>
          </li>
          <li class="sidebar-item separation-null">
            <a href="https://animista.net/" target="_blank">
              <h4>${aside.aside_h4_4}</h4>
              <p>${aside.aside_p_4}</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://easings.net/en" target="_blank">
              <h4>${aside.aside_h4_5}</h4>
              <p>${aside.aside_p_5}</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <a href="https://cubic-bezier.com/" target="_blank">
              <h4>${aside.aside_h4_6}</h4>
              <p>${aside.aside_p_6}</p>
            </a>
          </li>
          <li class="sidebar-item with-border">
            <h4>${aside.aside_h4_7}</h4>
            <ul class="space-btwn attributions">
              ${Object.values(aside.aside_p_7)
                .map((item) => {
                  return `
                    <li>
                      <a href=${item.href} target="_blank">
                        ${item.name}
                      </a>
                      <span>${item.p}</span>
                    </li>`;
                })
                .join('')}
            </ul>
          </li>
      </ul>
    </div>
  `;
};

export default sideBar;
