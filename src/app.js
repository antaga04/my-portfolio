import { initializeApp, menuLinker } from './router/router';
import { loadPreferredMode, loadPreferredTextAlign, loadTranslations } from './utils/functions';
import { Listeners } from './utils/listeners';

const PAGE_NAME = 'common';

export const initApp = async () => {
  const root = document.querySelector('#root');
  const lang = localStorage.getItem('language');
  const data = await loadTranslations(lang, PAGE_NAME);

  root.innerHTML = '';
  root.innerHTML += `
    <header id="nav-bar" translate="no">
      <div class="nav-1">
        <div class="logo-wrapper">
          <div id="nav-logo-section">
            <span class="nav-logo"></span>
            <div class="info">
              <h2>Adrián Anta</h2>
              <p>Full stack dev</p>
            </div>
          </div>
        </div>
        <div class="nav-2">
          <div class="nav-3">
            <nav id="nav-link-section" class="nav-section">
              <a class="nav-link" href="/" nav-path="/" aria-label=${data.navBar.home.ariaLabel}>
                <p>${data.navBar.home.name}</p>
                <div class="menu_link-bg" style="opacity: 0;"></div>
              </a>
              <a class="nav-link" href="/about" nav-path="/about" aria-label=${data.navBar.home.ariaLabel}>
                <p>${data.navBar.about.name}</p>
                <div class="menu_link-bg" style="opacity: 0;"></div>
              </a>
              <a class="nav-link" href="/projects" nav-path="/projects" aria-label=${data.navBar.home.ariaLabel}>
                <p>${data.navBar.projects.name}</p>
                <div class="menu_link-bg" style="opacity: 0;"></div>
              </a>
              <a class="nav-link" href="/contact" nav-path="/contact" aria-label=${data.navBar.home.ariaLabel}>
                <p>${data.navBar.contact.name}</p>
                <div class="menu_link-bg" style="opacity: 0;"></div>
              </a>
            </nav>
            <div class="menu_shape">
              <div class="menu_shape-bg"></div>
            </div>
          </div>
        </div>
        <div class="header__extra">
          <div class="menu">
            <button class="menu-btn" aria-label=${data.burgerMenu}>
              <div class="bars-container">
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            </button>

            <aside class="menu-slider hidden">
              <nav class="menu-nav hidden">
                <ul>
                  <li><a class="nav-link slider" href="/" nav-path="/">${data.navBar.home.name}</a></li>
                  <li><a class="nav-link slider" href="/projects" nav-path="/projects">${data.navBar.about.name}</a></li>
                  <li><a class="nav-link slider" href="/about" nav-path="/about">${data.navBar.projects.name}</a></li>
                  <li><a class="nav-link slider" href="/contact" nav-path="/contact">${data.navBar.contact.name}</a></li>
                  <div style="display: flex;">
                    <a class="slider" href="https://www.linkedin.com/in/adrian-anta-gil/" rel="noopener" target="_blank">
                      <i class="fa-brands fa-linkedin-in"></i></a>
                    <a class="slider" href="https://github.com/antaga04/" rel="noopener" target="_blank">
                      <i class="fa-brands fa-github"></i></a>
                  </div>
                </ul>
              </nav>
            </aside>
          </div>

          <div class="pen-nib__gear special-border">
            <span class="label">${data.magicMenu.settings.name}</span>
            <button class="nib-btn" aria-label=${data.magicMenu.settings.ariaLabel}>
              <i class="fa-solid fa-pen-nib"></i>
            </button>
            <ul class="magic-menu special-border">
              <li id="theme"><button aria-label=${data.magicMenu.theme.ariaLabel}>${data.magicMenu.theme.name} <span>☀️</span></button></li>
              <li id="text-align" class="applied">
                <button aria-label=${data.magicMenu.textAlign.ariaLabel}>${data.magicMenu.textAlign.name_j}</i></button>
              </li>
              <li>
                <select name="lang" id="languageSelect">
                  <option value="es-ES">Castellano</option>
                  <option value="en">English</option>
                  <option value="gl">Galego</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main id="app"></main>

    <footer id="footer">
      <div>
        <p>${data.footer}</p>
      </div>

      <ul class="footer-icons">
        <li><a href="https://www.linkedin.com/in/adrian-anta-gil/" rel="noopener" aria-label="Explore my LinkedIn"
            target="_blank">
            <i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://github.com/antaga04/" rel="noopener" aria-label="Explore my GitHub" target="_blank">
            <i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://codepen.io/adranta" aria-label="Explore my Codepen" target="_blank">
            <i class="fa-brands fa-codepen"></i></a></li>

      </ul>
    </footer>
  `;

  initializeApp();

  menuLinker();

  Listeners();
  loadPreferredMode();
  loadPreferredTextAlign();
};
