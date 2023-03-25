import Editor from './editor';
import './database';
import '../style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

if ('serviceWorker' in navigator) {
    const workboxSW = new Workbox('/src-sw.js');
    workboxSW.register();
  } else {
    console.error('Oh no! Sorry, this is not supported in this browser.');
  }