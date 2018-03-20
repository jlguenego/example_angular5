// Exemple of interface (kind of user defined type)
interface Person {
    name: string,
    firstname: string,
    age: number,
};

function sayHello(person: Person) {
    console.log(`Hello, I am ${person.firstname} ${person.name.toUpperCase()}, I am ${person.age} years old.`);
}

let person: Person;
person = {
    name: 'Guénégo',
    firstname: 'Jean-Louis',
    age: 43
};

sayHello(person);

// Generic
function identity<T>(a: T): T {
    return a;
}

let a = 2;
identity(a);
let b = 'coucou';
identity(b);

function logLength<T>(array: T[]): void {
    console.log('array length', array.length);
}

logLength([1, 2, 3]);

function logClassName<T>(constructorFn: { new(...args: any[]): T; }): void {
    console.log('class name:', constructorFn.name);
}

class MyClass {
    constructor(name) { }
}
logClassName(MyClass);

// decorators that add a log method.
function logClass<T extends { new(...args: any[]): {} }>(constructor: T) {

    constructor.prototype.log = function () {
        console.log('log my class:', this.constructor.name);
    }

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f: any = function (...args) {
        console.log("New: " + constructor.name);
        console.log('This: %O', constructor);
        return construct(constructor, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = constructor.prototype;

    // return new constructor (will override original)
    return f;
}

// A class decorator: called when defining the class.
@logClass
class Someone {
    hello() {
        console.log('hello');
    }
}
interface LogMyClass {
    log(): void;
}
interface Someone extends LogMyClass { }

const mySelf = new Someone();
const myFriend = new Someone();
mySelf.hello();
mySelf.log();
console.log('mySelf class name', myFriend.constructor.name)
