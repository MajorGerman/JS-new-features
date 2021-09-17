function myModul() {
    this.hello = function() {
        console.log('Hello!');
    };

    this.goodbye = function() {
        console.log('Bye!');
    };
}

module.exports = myModul;  // commonJS