"use strict";

const { response } = require("express");


// Promise

// Promise похожи на call-back функции

// Пример разрастания дерева call-back'ов (call-back hell)

console.log("Запрос данных...");

setTimeout(() => {
    console.log("Подготовка данных...");

    const product = {
        name: 'phone',
        price: 300
    };

    setTimeout(() => {

        product.status = 'order';
        console.log(product);
    }, 2000);
}, 2000);


// То же самое, но с использованием Promise

console.log("Запрос данных...");
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
    req2.then((data) => {
        console.log(data)
    })
}); 


// Рабочий вариант

console.log("Запрос данных...");
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then((data) => {
    console.log(data);
});


// Рабочий вариант №2

console.log("Запрос данных...");
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
});


// Рабочий вариант №3 (Catch)

console.log("Запрос данных...");
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            //resolve(product);
            reject();
        }, 2000);
    });
}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('ERROR!');
});


// Рабочий вариант №4 (Finally)

console.log("Запрос данных...");
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            reject();
        }, 2000);
    });
}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('ERROR!');
}).finally(() => {
    console.log("Все действия выполнены!");
});


// ------------------------- //

const test = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(4000), test(1000)]).then(() => {
    console.log('All');
});


// Fetch API

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

    fetch('https://jsonplaceholder.typecode.com/posts', {
        method: "POST",
        body: JSON.stringify({name: "Alex"}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    