import {first, second} from './main';

//import {first as one} from './main';

//import * as data from './main';

console.log(`${first} and ${second}`);

// Браузер не знает о наших импортах и require. Нужен сборщик!

/*
    npm init -y
    npm i webpack webpack-cli --save-dev
    npx webpack

*/