'use strict';

const restaurantRow = (restaurant) => {
  const {name, company, address} = restaurant;
  const rivi = document.createElement('tr');

  const nimi = document.createElement('td');
  nimi.innerText = name;

  const osoite = document.createElement('td');
  osoite.innerText = address;

  const firma = document.createElement('td');
  firma.innerText = company;

  rivi.append(nimi, osoite, firma);
  return rivi;
};

const restaurantModal = (restaurant, menu) => {
  const {name, company, address, city, phone, postalCode} = restaurant;

  let listaHTML = '';
  menu.forEach((course) => {
    const {name, price, allergens} = course;
    listaHTML += `<li>
      <h4>${name}</h4>
      <p>${price || 'ei hintaa'}</p>
      <h4>${allergens || 'allergeenejä ei ilmoitettu'}</h4>
    </li>`;
  });

  const ravintolaHTML = `
    <header>
      <h3>${name}</h3>
      <p>${company}
      </p>
    </header>
    <address>
      ${address}<br>
      ${postalCode} ${city}</br>
      ${phone || 'ei puhelinta'}<br>
    </address>
    <div>
      <h3>Päivän ruokalista</h3>
      <ul>
        ${listaHTML}
      </ul>
    </div>
  `;

  return ravintolaHTML;
};

export {restaurantRow, restaurantModal};
