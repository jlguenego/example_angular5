import { getAge } from "@jlg-example-angular-common/age";

// Exemple of interface (kind of user defined type)
interface Person {
    name: string,
    firstname: string,
    birthday: Date,
};

function sayHello(person: Person) {
    console.log(`Hello, I am ${person.firstname} ${person.name.toUpperCase()}, I am ${getAge(person.birthday)} years old.`);
}

let person: Person;
person = {
    name: 'Guénégo',
    firstname: 'Jean-Louis',
    birthday: new Date(1974, 4, 19),
};

sayHello(person);


// primitive type:
let s: string;
let n: number;
let b: boolean;
s = 'hello';
n = 34;
b = false;
console.log('s, n, b', s, n, b);

// array type
let a: number[];
a = [2, 3, 4];

// function type
let operation: { (a: number, b: number): number };
operation = (a, b) => a + b;
console.log('1+2=', operation(1, 2));

// class type
class Human implements Person {
    birthday: Date;
    name: string;

    // constructor can take attribute in input. It avoids boilerplate code.
    constructor(public firstname) {};
}

// constructor type
// { new(...args: any[]): {} },
function construct(constructor: { new(...args: any[]): {} }, args: any[]) {
    var c: any = function () {
        console.log('I am instantiating a ', constructor.name);
        constructor.apply(this, args);
        console.log('%s instantiated', constructor.name, this);
    }
    c.prototype = constructor.prototype;
    return new c();
}

const p = construct(Human, ['Dany']);
console.log('p', p);





