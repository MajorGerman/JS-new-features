"use strict";

// Свойства-аксессоры Get и Set

const person = {
    name: "John",
    age: 28,

    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    }
};

// Это свойства, поэтому обращаемся без скобок

console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);

// Инкапсуляция

function User (name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
    };
}

const john = new User('John', 22);
john.age = 30;  // Возможно прямое обращение к свойству

console.log(john.name);
console.log(john.age);
john.say();

// С инкапсуляцией

function User2 (name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };
}

const ann = new User2('Ann', 22);

console.log(ann.name);
console.log(ann.userAge);  // Обратиться не можем!
ann.say();

///////////////////

function User3 (name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 100) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const kirill = new User3('Kirill', 25);

console.log(kirill.name);
console.log(kirill.userAge);  // Не можем обратиться!
console.log(kirill.getAge());
kirill.setAge(33);
kirill.setAge(333);
kirill.setAge('fwefwe');
kirill.say();

////////////////////
// Инкапсуляция - класс

class Author {
    constructor(name, age) {
        this.name = name;
        this._age = age;    // Инкапсуляция поля в классе (договоренность)
    }

    #surname = 'Maal';  // Приватное поле

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 100) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new Author('Ivan', 25);

console.log(ivan.name);
ivan.age = 99;
console.log(ivan.age);

ivan.say();
