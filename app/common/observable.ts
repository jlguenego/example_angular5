import { Observable } from "rxjs/Observable";

export const exponentialBackoffObservableFromPromise = function <T>(promise: () => Promise<T>) {
    return Observable.create((observer) => {
        let time: number = 0;

        function f() {
            promise().then((response) => {
                console.log('ok well done');
                observer.next(response);
                observer.complete();
            }).catch((error) => {
                observer.next({ error });
                const sec = Math.pow(2, time);
                time++;
                console.log(`retry #${time} in ${sec} seconds`);
                setTimeout(f, sec * 1000);
            });
        }
        f();
    });
}

export const exponentialBackoffObservable = function <T>(observable: Observable<T>) {
    return Observable.create((observer) => {
        let time: number = 0;

        function f() {
            observable.subscribe({
                next: (response) => {
                    console.log('ok well done');
                    observer.next(response);
                    observer.complete();
                },
                error: (error) => {
                    observer.next({ error });
                    const sec = Math.pow(2, time);
                    time++;
                    console.log(`retry #${time} in ${sec} seconds`);
                    setTimeout(f, sec * 1000);
                }
            });
        }
        f();
    });
}
