'use strict';



let numbers = [];

let numberInput = prompt('Anna luku 1: ');
numbers.push(Number(numberInput));
numberInput = prompt('Anna luku 2: ');
numbers.push(Number(numberInput));
numberInput = prompt('Anna luku 3: ');
numbers.push(Number(numberInput));
numberInput = prompt('Anna luku 4: ');
numbers.push(Number(numberInput));
numberInput = prompt('Anna luku 5: ');
numbers.push(Number(numberInput));

console.log('Numerot:', numbers);


let numberCheck = prompt('Syötä luku, jonka haluat tarkistaa: ');
if (numbers.includes(Number(numberCheck))) {
    alert ('Luku löytyy taulukosta');
}   else {
    alert ('Lukua ei löytynyt taulukosta');
}

numbers.pop();
console.log('updated numbers: ', numbers);

numbers.sort((a, b) => a - b);
console.log('sorted numbers: ', numbers);