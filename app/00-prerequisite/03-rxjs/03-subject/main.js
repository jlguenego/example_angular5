(function () {
    'use strict';

    var myObs = Rx.Observable.interval(100);

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


    var s = myObs.subscribe(subject);
    setTimeout(() => {
        s1.unsubscribe();
    }, 850);
    setTimeout(() => {
        s2.unsubscribe();
        // warning... memory leak!
        s.unsubscribe();
    }, 1250);

    
})();