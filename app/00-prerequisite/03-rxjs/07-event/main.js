(function () {
    'use strict';

    const btn = document.querySelector('#btn');
    const counterTxt = document.querySelector('#counter');

    // Rx.Observable.fromEvent(btn, 'click')
    //     // .throttleTime(1000)
    //     .scan(c => c + 1, 0)
    //     .subscribe(c => counterTxt.innerHTML = c);

    const fe = (d, en) => Rx.Observable.create(o => d.addEventListener(en, e => o.next(e)));


    fe(btn, 'click')
        // .throttleTime(1000)
        .scan(c => c + 1, 0)
        .subscribe(c => counterTxt.innerHTML = c);


})();