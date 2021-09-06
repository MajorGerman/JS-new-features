"use strict";


// Массивы, псевдомассивы

const arr = [1, 2, 5, 8, 9];

console.log(arr);

arr.pop();       // Удалить последний элемент массива
console.log(arr);

arr.push(10);
console.log(arr); // Добавить элемент в конец


for (let i = 0; i < arr.length; i++) {          // Перебрать элементы
    console.log(arr[i]);
}

for (let value of arr) {            // Не работает с объектом
    console.log(value);
}


const arr2 = [1, 2, 5, 8, 9];       // Длина массива = Последний индекс + 1 
// arr[99] = 0;     // Так делать нельзя
console.log(arr2.length);
console.log(arr2);


// Перебрать массив (Нельзя остановить)

arr2.forEach(function(item, i, arr2) {
    console.log(`${i}: ${item} внутри массива ${arr2}` );
});


// Строку в массив

const str = prompt("", "");
const products = str.split(",");
console.log(product);


// Сортировка (всегда как строки)

products.sort();
console.log(products);


// Обратная операция

console.log(product.join("; "));


// Функция для сортировки чисел.



// Методы не работают для псевдомассивов


// ...


// Передача по значению

let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);


// Передача по ссылке

const obj = {
    a: 5,
    b: 1
}

const copy = obj;


copy.a = 10; // Модифицирование копии в любом случае изменит оба объекта

console.log(obj);
console.log(copy);


// Клонирование объектов

const newObj = Object.assign({}, obj);
newObj.a = 15;
console.log(newObj);


// Клонирование массивов

const oldArray = ['a', 'x', 'y'];
const newArray = oldArray.slice();

newArray[0] = 5;
console.log(oldArray);
console.log(newArray);


// Spread оператор, New features

const video = ['youtube', 'vimeo', 'facebook'],
        blogs = ['wordpress', 'twitter', 'bloger'],
        internet = [...video, ...blogs, 'vk', 'instagram'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);


// Клонирование 

const ar = [4, 3, 0];
const NeWAr = [...ar];

const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};


