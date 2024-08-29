'use strict';


function sortArray(numbers, order) {

    if (order === "asc") {
      return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
      }else{
        return "Kelvoton järjestys";
      }
  }

const numbers = [6, 7, 4, 3, 1, 6];
console.log('Alkuperäinen taulukko: ', numbers);





  console.log(sortArray(numbers, "asc"));
  console.log(sortArray(numbers, "desc"));
