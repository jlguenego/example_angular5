(function () {
    'use strict';

    const sleep = time => new Promise(resolve => setTimeout(resolve, time));

    const o1 = Rx.Observable.create(async observer => {
        observer.next(1);
        await sleep(100);
        observer.next(2);
        await sleep(1000);
        observer.next(3);
        await sleep(1000);
        observer.complete();
        return () => console.log('unsubscribe o1');
    });

    const o2 = Rx.Observable.create(async observer => {
        await sleep(300);
        observer.next('a');
        await sleep(100);
        observer.next('b');
        await sleep(900);
        observer.next('c');
        await sleep(1000);
        observer.next('d');
        await sleep(100);
        observer.complete();
        return () => console.log('unsubscribe o2');
    });

    const merge = (...args) => Rx.Observable.create(observer => {
        let counter = 0;
        args.forEach(o => o.subscribe(
            x => observer.next(x),
            x => observer.error(x),
            () => {
                counter++;
                if (counter === args.length) {
                    observer.complete();
                }
            }
        ));
    });

    const o3 = merge(o1, o2);
    o3.subscribe(
        x => console.log('next:', x),
        x => console.log('error:', x),
        () => console.log('complete')
    );

})();