import { getAge} from "@jlg-example-angular-common/age";

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

