'use strict';

const kohde = document.querySelector('#target');

const sivu1 = +prompt('Anna sivu 1');
const sivu2 = +prompt('Anna sivu 2');
const sivu3 = +prompt('Anna sivu 3');

console.log(sivu1, sivu2, sivu3);

if (sivu1 === sivu2 && sivu2 === sivu3) {
  kohde.innerHTML = 'Tämä on tasasivuinen kolmio.';
  // tasasivuinen kolmio
} else if (sivu1 !== sivu2 && sivu1 !== sivu3 && sivu2 !== sivu3)
  kohde.innerHTML = 'Tämä on epäsäännöllinen kolmio.';
// epäsäännöllinen kolmio
else {
  kohde.innerHTML = 'Tämä on tasakylkinen kolmio.';
  // tasasivuinen kolmio
}
