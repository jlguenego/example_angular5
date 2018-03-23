import { map } from "rxjs/operators";
import { Observable } from "rxjs";

const multiplyBy2 = map((n: number) => 2 * n);
Observable.of(1, 2, 3).let(multiplyBy2).subscribe(n => console.log('n', n));

const exponentialBackoffObservable = function <T>(promise: () => Promise<T>) {
    return Observable.create((observer) => {
        let time: number = 0;

        function f() {
            promise().then((response) => {
                observer.next(response);
                observer.complete();
            }).catch((error) => {
                observer.next({ error });
                time++;
                const sec = Math.pow(2, time);
                console.log(`retry #${time} in ${sec} seconds`)
                setTimeout(f, sec * 1000);
            });
        }
        f();
    });
}

const randomPromise = function() {
    return new Promise((resolve, reject) => {
        console.log('playing promise');
        const a = Math.random();
        if (a < 0.4) {
            resolve(a);
            return;
        };
        reject(a);
    });
}

exponentialBackoffObservable(randomPromise).subscribe(n => console.log('result', n));