import { map } from "rxjs/operators";
import { Observable, Observer } from "rxjs";
import { exponentialBackoffObservableFromPromise, exponentialBackoffObservable, angularObservable } from "@jlg-example-angular-common/observable";

const multiplyBy2 = map((n: number) => 2 * n);
Observable.of(1, 2, 3).let(multiplyBy2).subscribe(n => console.log('n', n));



// const randomPromise = function() {
//     return new Promise((resolve, reject) => {
//         console.log('playing promise');
//         const a = Math.random();
//         if (a < 0.4) {
//             resolve(a);
//             return;
//         };
//         reject(a);
//     });
// }

// exponentialBackoffObservableFromPromise(randomPromise).subscribe(n => console.log('result', n));

const randomObservable = Observable.create((observer: Observer<any>) => {
    console.log('playing randomObservable');
    const a = Math.random();
    if (a < 0.4) {
        observer.next(a);
        observer.complete();
        return;
    };
    console.log('going to error');
    observer.error({ error: a });
});

exponentialBackoffObservable(randomObservable).subscribe(n => console.log('result', n));


// angularObservable.subscribe(n => console.log('n', n));
