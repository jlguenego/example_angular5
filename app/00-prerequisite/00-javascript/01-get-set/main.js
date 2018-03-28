(function () {
    'use strict';

    const obj = {
        toto: 3,
        set titi(value) {
            console.log('setting titi to', value);
            console.log('this', this);
            this.privateTiti = value;
        },
        get titi() {
            console.log('getting titi =', this.privateTiti);
            return this.privateTiti;
        }
    };

    obj.titi = 5;
    console.log('obj.titi', obj.titi);


})();