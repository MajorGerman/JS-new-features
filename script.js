"use strict";




// Интерполяция

const typeGoods = 'food';

//console.log('https://market.com/' + typeGoods);

//console.log('https://market.com/' + typeGoods + '/' + '10');

console.log(`https://market.com/${typeGoods}`);


// Задание 1 

var category = 'games';
var genre = 'strategy';
var page = '10';

console.log(`https://market.com/${category}/${genre}/${page}`);



// Стрелочные функции

let number = 10;

function showMessage(text) {
    console.log(text);
    console.log(number);
}

showMessage("Hello!!!");
console.log(number);

const server = function() {
    console.log('server start...');
}

server();

const calc = (x, y) => x + y;

console.log(calc(10, 5));


// Задание 2

const PiHello = () => "Hello! " + Math.PI;
console.log(PiHello());