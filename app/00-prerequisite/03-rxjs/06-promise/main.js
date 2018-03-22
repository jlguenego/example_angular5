(function () {
    'use strict';

    function sleep(time) {
        return Rx.Observable.create((observer) => {
            setTimeout(() => {
                observer.next();
                observer.complete();
            }, time);
        });
    }

    console.log('start');
    sleep(1000).subscribe(() => {
        console.log('wakeup');
    });

})();