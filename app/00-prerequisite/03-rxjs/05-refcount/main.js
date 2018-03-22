(function () {
    'use strict';
    console.log('start');
    // var obs1 = Rx.Observable.of(1, 2, 3, 4, 5).delayWhen(n => Rx.Observable.interval(1000 * n).take(1));
    var obs1 = Rx.Observable.interval(1000).map(n => {
        const result = n + 1;
        console.log('result', result);
        return result;
    }).take(5);

    var multicasted = obs1.multicast(new Rx.Subject()).refCount();

    var s1, s2;

    // These are, under the hood, `subject.subscribe({...})`:
    s1 = multicasted.subscribe({
        next: (v) => console.log('observerA: ' + v),
        complete: () => console.log('observerA: complete'),
    });
    setTimeout(() => {
        s2 = multicasted.subscribe({
            next: (v) => console.log('observerB: ' + v),
            complete: () => console.log('observerB: complete'),
        });
    }, 1200);

    setTimeout(() => {
        s1.unsubscribe();
        console.log('s1 unsubscribed');
    }, 2200);

    setTimeout(() => {
        s2.unsubscribe();
        console.log('s2 unsubscribed');
    }, 3200);

})();