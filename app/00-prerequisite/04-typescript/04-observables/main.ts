import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { exponentialBackoffObservable } from "@jlg-example-angular-common/observable";

const multiplyBy2 = map((n: number) => 2 * n);
Observable.of(1, 2, 3).let(multiplyBy2).subscribe(n => console.log('n', n));



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