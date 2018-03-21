(function () {
    'use strict';
    var source = Rx.Observable.from([1, 2, 3]);
    var multicasted = source.multicast(new Rx.Subject());

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    multicasted.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });

    // This is, under the hood, `source.subscribe(subject)`:
    multicasted.connect();
})();