/* eslint-disable */
import css from './style.css'
import HelloWorld from './HelloWorld'

console.debug('app.js called..');

let hw = new HelloWorld (
  { 
    target: document.getElementsByClassName('main-content')[0]
  });

hw.message();
