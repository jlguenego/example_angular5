// decorators that add a log method.
function logClass(...args: any[]) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {

        // we add a log method to the class.
        constructor.prototype.log = function () {
            console.log('log my class:', this.constructor.name);
            console.log('log my config:', args);
        }

        // and we change the constructor by a new one.

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
}


// A class decorator: called when defining the class.
@logClass({ coucou: 'kiki' })
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
