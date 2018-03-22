(function () {
    'use strict';
    var source = Rx.Observable.from([1, 2, 3]);
    // var source = Rx.Observable.interval(100).map(c => c + 1).take(5);
    var subject = new Rx.Subject();
    console.log('subject', subject);
    var multicasted = source.multicast(subject);
    console.log('multicasted', multicasted);

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    multicasted.subscribe({
        next: (v) => console.log('observerB: ' + v),
        complete: () => console.log('observerB: complete'),
    });

    // This is, under the hood, `source.subscribe(subject)`:
    multicasted.connect();
})();