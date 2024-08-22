'use strict';

const kohde = document.querySelector('#target');

const elokuvat = [];

const lkm = prompt('Kuinka monta elokuvaa haluat lisätä?');

for (let i = 0; i < lkm; i++) {
  const title = prompt('Anna elokuvan nimi. Tyhjä lopettaa');
  const rating = prompt('Anna elokuvan arvio (1-5)');
  const elokuva = {
    title,
    rating,
  };
  elokuvat.push(elokuva);
}

elokuvat.sort((a, b) => b.rating - a.rating);

console.log(elokuvat);

for (let elokuva of elokuvat) {
  const html = `<tr>
    <td>${elokuva.title}</td>
    <td>${elokuva.rating}</td>
    </tr>`;
  kohde.insertAdjacentHTML('beforeend', html);
}
