import { Personn } from "./Personn";
import { Contacts } from "./contacts";

const person1 = new Personn("Maria", 25, "Malaga");
const person2 = new Personn("Joel", 30, "Mallorca");
const person3 = new Personn("Andrea", 32, "Roma");

let contacts = new Contacts();

// contacts.people.push(person1, person2, person3);

console.log(contacts.printCalendar());
