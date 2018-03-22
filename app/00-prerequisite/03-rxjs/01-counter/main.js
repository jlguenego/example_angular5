(function () {
    'use strict';

    console.log('Button click counter with at most one click per second.');

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
    counter2Txt.innerHTML = 0;

    var eventObservable = Rx.Observable.fromEvent(btn, 'click');
    console.log('eventObservable', eventObservable);

    var throttleObservable = eventObservable.throttleTime(1000);
    console.log('throttleObservable', throttleObservable);

    var observable = throttleObservable.scan(count => count + 1, 0);
    console.log('observable', observable);
    observable.subscribe((...args) => {
        console.log('args', args);
        counter2Txt.innerHTML = args[0];
    });

    // RxJS Quick code
    counter3Txt.innerHTML = 0;

    Rx.Observable.fromEvent(btn, 'click')
        .throttleTime(1000)
        .scan(c => c + 1, 0)
        .subscribe(c => counter3Txt.innerHTML = c);

})();