const newModul = require('./main');

const newModulInstanse = new newModul();

newModulInstanse.hello();
newModulInstanse.goodbye();

// Браузер не знает о наших импортах и require. Нужен сборщик!

/*
    npm init -y
    npm i webpack webpack-cli --save-dev
    npx webpack

*/