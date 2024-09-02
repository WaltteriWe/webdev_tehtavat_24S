'use strict';

let numbers = [];
let numberInput = '';

do {
  let numberInput = prompt('syötä lukuja, tyhjä lopettaa: ');
  if (numberInput === '')
    numbers.push(Number(numberInput)); {
  } if (numberInput === null) {
    break;
    }
} while (numberInput === Number);

console.log(numbers);
