(function () {
    'use strict';

    // CREATE
    var myObs = Rx.Observable.create(function (observer) {
        console.log('observable definition spec called.');
        observer.next(10);
        observer.next(20);
        observer.next(30);
        setTimeout(() => {
            observer.next(44);
            // observer.complete();
        }, 1000);
        return function () {
            console.log('unsubscribe', this, arguments);
        }
    });

    console.log('just before subscribe 1');
    // SUBSCRIBE
    var s1 = myObs.subscribe( // EXECUTE
        {
            next: x => console.log('got value ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('complete'),
        });
    console.log('just after subscribe 1');

    var s2;
    setTimeout(() => {
        console.log('just before subscribe 2');
        s2 = myObs.subscribe({
            next: x => console.log('got value ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('complete'),
        });
        console.log('just after subscribe 2');
    }, 1000);

    setTimeout(() => {
        // DISPOSE
        s1.unsubscribe();
        s1.unsubscribe(); // does nothing.
        s2.unsubscribe();
    }, 3000);

})();