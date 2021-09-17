"use strict";

const num = 1;

// Анонимная самовызывающаяся функция (создаем локальную область видимости)
(function(){
    let num = 2;
    console.log(num);
    console.log(num + 1);
}());

console.log(num);


// Объектный интерфейс (второй способ модульности)

const user = (function() {
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat   // Экспортируем наружу локальное свойство
    }
}());

user.sayHello();