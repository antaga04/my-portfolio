export const initNotFound = () => {
  const app = document.querySelector('#app');

  app.innerHTML = '';
  app.innerHTML +=  `
    <div>Error 404</div>
  `
}