// Generic
function identity<T>(a: T): T {
    return a;
}

let a = 2;
identity(a);
let b = 'coucou';
identity(b);

const c: Array<number | string> = [1, 2, 3, 'coucou'];
console.log('c', c);

function logLength<T>(array: T[]): void {
    console.log('array length', array.length);
}

logLength([1, 2, 3, 'coucou']);

function logClassName<T>(constructorFn: { new(...args: any[]): T; }): void {
    console.log('class name:', constructorFn.name);
}

class MyClass {
    constructor(name) { }
}
logClassName(MyClass);

