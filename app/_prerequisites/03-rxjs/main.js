(function () {
    'use strict';

    console.log('1) Button click counter with at most one click per second.');

    var btn = document.querySelector('#incrCounterBtn');
    var counterTxt = document.querySelector('#counterTxt');
    var counter2Txt = document.querySelector('#counter2Txt');
    var counter3Txt = document.querySelector('#counter3Txt');

    // Vanilla JS
    var counter = 0;
    var timer = 0;

    counterTxt.innerHTML = counter;
    btn.addEventListener('click', function () {
        if (Date.now() - timer > 1000) {
            counter++;
            counterTxt.innerHTML = counter;
            timer = Date.now();
        }
    });

    // Same with RxJS
    var counter2 = 0;
    counter2Txt.innerHTML = counter2;

    var eventObservable = Rx.Observable.fromEvent(btn, 'click');
    console.log('eventObservable', eventObservable);

    var throttleObservable = eventObservable.throttleTime(1000);
    console.log('throttleObservable', throttleObservable);

    var observable = throttleObservable.scan(count => count + 1, counter2);
    console.log('observable', observable);
    observable.subscribe((...args) => {
        console.log('args', args);
        counter2Txt.innerHTML = args[0];
    });

    // RxJS Quick code
    var counter3 = 0;
    counter3Txt.innerHTML = counter3;

    Rx.Observable.fromEvent(btn, 'click')
        .throttleTime(1000)
        .scan(c => c + 1, counter3)
        .subscribe(c => counter3Txt.innerHTML = c);

    console.log('2) Create an observable from an array.');
    var myObs = Rx.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
        }, 1000);
    });

    setTimeout(() => {
        console.log('just before subscribe');
        myObs.subscribe({
            next: x => console.log('got value ' + x),
            error: err => console.error('something wrong occurred: ' + err),
            complete: () => console.log('done'),
        });
        console.log('just after subscribe');

    }, 1000);

})();