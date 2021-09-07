"use strict";


// REST - обратное преобразование SPREAD

const log = function (a, b, ...other) {
    console.log(a);
    console.log(b);
    console.log(other);
};

log('test1', 'test2', 'test3', 'test4');


// Параметры по умолчанию

function calcOrDouble (first, second = 2) {
    //second = second || 2;     // Раньше делали так
    return first * second;
}

console.log(calcOrDouble(5));


// JSON

const person = {    // Нам бы очень хотелось отправить это, но мы не можем
    name: 'Alex',
    age: 28
}

let toServer = JSON.stringify(person);  // А вот это уже можем
console.log(toServer);

let fromServer = JSON.parse(toServer);  // И даже можем восстановить его!
console.log(fromServer);


// Глубокое клонирование объекта

const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);


// Задание

const food = {
    name: 'Watermelon',
    organic: true,
    callories: 130,
    size_x: 0.4,
    size_y: 0.45,
    size_z: 0.6,
    volumic_weight: {
        volume: 7,
        weight: 5.7
    }
}

const jsonFood = JSON.stringify(food);
console.log(jsonFood);

const notJsonAgainFood = JSON.parse(jsonFood);
console.log(notJsonAgainFood);

{/* <root>
   <callories>130</callories>
   <name>Watermelon</name>
   <organic>true</organic>
   <size_x>0.4</size_x>
   <size_y>0.45</size_y>
   <size_z>0.6</size_z>
   <volumic_weight>
      <volume>7</volume>
      <weight>5.7</weight>
   </volumic_weight>
</root> */}

const foodClone = JSON.parse(JSON.stringify(food));
foodClone.callories = '380';

console.log(food);
console.log(foodClone);