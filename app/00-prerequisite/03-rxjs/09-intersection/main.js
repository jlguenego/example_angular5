(function () {
    'use strict';

    const sleep = time => new Promise(resolve => setTimeout(resolve, time));

    const o1 = Rx.Observable.create(async observer => {
        observer.next(1);
        await sleep(300);
        observer.next(2);
        await sleep(500);
        observer.next(3);
        observer.complete();
        return () => console.log('unsubscribe o1');
    });

    const o2 = Rx.Observable.create(async observer => {
        await sleep(10);
        observer.next('a');
        await sleep(400);
        observer.next('b');
        await sleep(50);
        observer.next('c');
        await sleep(340);
        observer.next('d');
        observer.complete();
        return () => console.log('unsubscribe o2');
    });

    const intersection = (t, o1, o2) => Rx.Observable.create(observer => {
        let acc = { o1: undefined, o2: undefined };
        let start = 0;

        const fn = index => x => {
            const now = Date.now();
            // console.log(now, now - start);
            if (now - start > t) {
                acc.o1 = undefined;
                acc.o2 = undefined;
                start = now;
            }
            if (index === 0) {
                acc.o1 = x;
            }
            if (index === 1) {
                acc.o2 = x;
            }
            console.log(acc);
            if (acc.o1 && acc.o2) {
                observer.next(acc);
                acc = { o1: undefined, o2: undefined };
            }
        };

        o1.subscribe(fn(0));
        o2.subscribe(fn(1));
    });

    const o3 = intersection(60, o1, o2);
    o3.subscribe(
        x => console.log('next:', x),
        x => console.log('error:', x),
        () => console.log('complete')
    );

})();