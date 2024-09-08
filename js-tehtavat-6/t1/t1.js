'use strict';
import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from './fetchData.js';
import {apiURL} from './variables.js';

const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');
const sodexoBTN = document.querySelector('#sodexo');
const compassBTN = document.querySelector('#compass');
const resetBTN = document.querySelector('#reset');
let raflat = [];

closeModal.addEventListener('click', () => {
  modaali.close();
});

const haeRavintolat = async () => {
  return await fetchData(apiURL + '/api/v1/restaurants');
};

const teeRavintolaLista = async (restaurants) => {
  kohde.innerHTML = '';
  sodexoBTN.addEventListener('click', () => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.company === 'Sodexo'
    );
    teeRavintolaLista(filteredRestaurants);
  });
  compassBTN.addEventListener('click', () => {
    const fileteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.company === 'Compass Group'
    );
    teeRavintolaLista(fileteredRestaurants);
  });
  resetBTN.addEventListener('click', () => {
    teeRavintolaLista(raflat);
  });

  console.log(restaurants);
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
  console.log(restaurants);

  restaurants.forEach((restaurant) => {
    try {
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
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  });

  // Call the function to load restaurants
};

try {
  raflat = await haeRavintolat();
  console.log(raflat);
  teeRavintolaLista(raflat);
} catch (error) {
  console.error('Error fetching restaurants:', error);
}
