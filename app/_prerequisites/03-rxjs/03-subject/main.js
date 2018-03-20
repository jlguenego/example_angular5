(function () {
    'use strict';

    var myObs = Rx.Observable.create(function (observer) {
        console.log('observable definition spec called.');
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
        }, 1000);
        return (...args) => {
            console.log('unsubscribe', args);
        };
    });

    var subject = new Rx.Subject();
    var s1 = subject.subscribe({
        next: x => console.log('A: got value ' + x),
        error: err => console.error('A: something wrong occurred: ' + err),
        complete: () => console.log('A: done'),
    });
    var s2 = subject.subscribe({
        next: x => console.log('B: got value ' + x),
        error: err => console.error('B: something wrong occurred: ' + err),
        complete: () => console.log('B: done'),
    });


    myObs.subscribe(subject);
    setTimeout(() => {
        s1.unsubscribe();
    }, 800);
    setTimeout(() => {
        s2.unsubscribe();
    }, 1200);

    

   


})();