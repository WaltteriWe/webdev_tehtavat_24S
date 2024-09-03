'use strict';
import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from './fetchdata.js';
import {apiURL} from './variables.js';

const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener('click', () => {
  modaali.close();
});

const teeRavintolaLista = async () => {
  try {
    const restaurants = await fetchData(apiURL + '/api/v1/restaurants');

    console.log(restaurants);
    restaurants.sort((a, b) => a.name.localeCompare(b.name));
    console.log(restaurants);

    restaurants.forEach((restaurant) => {
      if (restaurant) {
        // ravintolarivin html rivi
        const rivi = restaurantRow(restaurant);

        rivi.addEventListener('click', async () => {
          try {
            const korostetut = document.querySelectorAll('.highlight');
            korostetut.forEach((korostettu) => {
              korostettu.classList.remove('highlight');
            });

            rivi.classList.add('highlight');
            // hae päivän ruokalista
            const menu = await fetchData(
              `${apiURL}/api/v1/restaurants/daily/${restaurant._id}/fi`
            );

            console.log('päivän lista', menu);

            // rakenna listan HTML (muista for lause)

            modaali.showModal();
            const ravintolaHTML = restaurantModal(restaurant, menu.courses);
            info.innerHTML = '';
            info.insertAdjacentHTML('beforeend', ravintolaHTML);
          } catch (error) {
            console.error('Error fetching daily menu:', error);
          }
        });

        kohde.append(rivi);
      }
    });
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
};

// Call the function to load restaurants
teeRavintolaLista();
