"use strict";


// Call-back функции

function server() {
    setTimeout(function() {
        console.log(1);
    }, 1000)
}
function foo() {
    console.log(2);
}

server();
foo();

function serverNew(host, callback) {
    console.log(`Server ${host} is starting...`);
    callback();
}

function done() {
    console.log('connect success!');
}

serverNew('MyServer', done);


// Задание 

function say(msg){
    console.log(msg)
}

function msg(mul){
    let num = Math.random() * mul
    let rnd_num = Math.round(num * 10) / 10;
    return rnd_num;
}

say(msg(10));