"use strict";


// Объекты, деструктуризация

const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']);

// delete option.name;

console.log(option);


// Задание

let game = {
    name: 'The Story of Uniarka DEMO CT 1.6.1b',
    window: {
        width: '1280',
        height: '720',
        shaders: {
            VBO: 'CTX',
            colors: {
                default: {
                    red: "FF",
                    green: "00",
                    blue: "FF"
                }              
            }
        }
    },
    size: '29.7 Mb',
    author: 'Georg Laabe',
    version: '0.1',
    year: '2021',
    engine: 'Clickteam Fusion 2.5',
    language: 'English',
    delete: function() {
        game = null;
        console.log("Successful Delete!");
    },
    ping: function(){
        console.log("Pong!");
    }
}

const func = function(option){  // Перебор с рекурсией
    for (let key in option) {
        if (typeof(option[key]) === 'object') {
            func(option[key]);
            continue;
        }
        console.log(option[key])
    }
}

func(game);

