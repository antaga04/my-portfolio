import { initApp } from './src/app';
import './style.css';

await initApp();

console.log(`
Hi there! I'm probably working right now.

  ,-~~-.___.
 / |  '     \\         
(  )         0  
 \\_/-, ,----'            
    ====           // 
   /  \\-'~;    /~~~(O)
  /  __/~|   /       |     
=(  _____| (_________|

- From ASCII Art Archive`);

const htmlTag = document.querySelector('html');
const langSelect = document.getElementById('languageSelect');

let browserLanguage = navigator.language || navigator.userLanguage;
let storedLanguage = localStorage.getItem('language');

if (!storedLanguage) {
  localStorage.setItem('language', browserLanguage);
  storedLanguage = browserLanguage;
}

langSelect.value = storedLanguage;

htmlTag.setAttribute('lang', storedLanguage);

