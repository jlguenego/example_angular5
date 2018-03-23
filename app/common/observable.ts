import { Observable } from "rxjs/Observable";

export const exponentialBackoffObservable = function <T>(promise: () => Promise<T>) {
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
