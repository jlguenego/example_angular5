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



