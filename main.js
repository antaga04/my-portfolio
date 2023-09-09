import { Linker, initializeApp, menuLinker } from './src/router/router';
import { loadPreferredMode } from './src/utils/functions';
import { Listeners } from './src/utils/listener';
import './style.css';

initializeApp();
menuLinker();

Listeners();
loadPreferredMode();
