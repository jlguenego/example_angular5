(function () {
    'use strict';

    // CREATE
    var myObs = Rx.Observable.create(function (observer) {
        console.log('observable definition spec called.');
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            // observer.complete();
        }, 1000);
        return function () {
            console.log('unsubscribe', this, arguments);
        }
    });

    var s1, s2;

    console.log('just before subscribe 1');
    // SUBSCRIBE
    s1 = myObs.subscribe( // EXECUTE
        {
            next: x => console.log('got value ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
        });
    console.log('just after subscribe 1');

    setTimeout(() => {
        console.log('just before subscribe 2');
        s2 = myObs.subscribe({
            next: x => console.log('got value ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
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