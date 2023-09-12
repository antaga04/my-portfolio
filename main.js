import { Linker, initializeApp, menuLinker } from './src/router/router';
import { loadPreferredMode } from './src/utils/functions';
import { Listeners } from './src/utils/listener';
import './style.css';

initializeApp();
menuLinker();

Listeners();
loadPreferredMode();

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