'use strict';

function sortarray(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [6, 7, 4, 3, 1, 6];
console.log('Alkuperäinen taulukko: ', numbers);

const sortedNumbers = sortarray(numbers);
console.log('Järjestetty taulukko: ', sortedNumbers);
