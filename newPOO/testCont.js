import { Contacts } from "./contacts.js";
import { Person } from "./Person.js";

let personB = new Person("castaño", "negros", 65, 1.7, 1991, [
  "Cantar",
  "bailar",
  "actuar",
]);
let personC = new Person("rubio", "verdes", 65, 1.71, 1990, [
  "pocker",
  "nadar",
  "programar",
]);
let personD = new Person("brown", "gris", 60, 1.65, 1993, [
  "investigar",
  "escribir",
  "viajar",
]);

let contactA = new Contacts();

contactA.persons.push(personB, personC, personD);

contactA.printPersons();
