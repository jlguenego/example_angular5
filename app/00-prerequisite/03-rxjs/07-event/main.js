(function () {
    'use strict';

   

    var btn = document.querySelector('#btn');
    var counterTxt = document.querySelector('#counter');

   

    Rx.Observable.fromEvent(btn, 'click')
        .throttleTime(1000)
        .scan(c => c + 1, 0)
        .subscribe(c => counter3Txt.innerHTML = c);

        function fe(dom, eventName) {
            return Rx.Observable.create(function (observer) {
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
        }   
    

})();