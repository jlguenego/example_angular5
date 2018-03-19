// This is old good ES5 syntax.
(function () {
    'use strict';

    console.log('1) Array.');

    function isOdd(val) {
        return val % 2;
    }
    var array = [4, 8, 15, 16, 23, 42];
    console.log('Should be 15', array.find(isOdd)); // => 15
    console.log('Should be 2', array.findIndex(isOdd)); // => 2

    console.log('2) Promises.');
    
    function sleep(time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve()
            }, time);
        });
    }
    sleep(1000).then(function () {
        console.log('wake up!');
    });



})();