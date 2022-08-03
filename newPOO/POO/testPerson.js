import { Person } from "./Person.js";

let personA = new Person("negro", "marron", 60, 1.6, 1990, []);

personA.hobbies.push("cantar", "nadar", "leer");
console.log(personA);

console.log(personA.calcIMC());

console.log(personA.calcEdad());

console.log(personA.printAll());

console.log(personA.printHobbies());
